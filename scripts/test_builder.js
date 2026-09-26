const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

class WaecPdfBuilder {
  constructor(title, subject, year, paperType, duration) {
    this.title = title;
    this.subject = subject;
    this.year = year;
    this.paperType = paperType;
    this.duration = duration;
    this.pages = [];
    this.currentPage = null;
    this.y = 780;
    this.pageWidth = 595.28;
    this.pageHeight = 841.89;
    this.marginLeft = 50;
    this.marginRight = 50;
    this.contentWidth = this.pageWidth - this.marginLeft - this.marginRight;
  }

  async init() {
    this.doc = await PDFDocument.create();
    this.fontRegular = await this.doc.embedFont(StandardFonts.Helvetica);
    this.fontBold = await this.doc.embedFont(StandardFonts.HelveticaBold);
    this.fontItalic = await this.doc.embedFont(StandardFonts.HelveticaOblique);
    this.addNewPage();
    this.drawCoverHeader();
  }

  addNewPage() {
    this.currentPage = this.doc.addPage([this.pageWidth, this.pageHeight]);
    this.pages.push(this.currentPage);
    this.y = this.pageHeight - 60;

    // Running header (skip on page 1)
    if (this.pages.length > 1) {
      this.currentPage.drawText(`WAEC BECE ${this.year} — ${this.subject.toUpperCase()} (${this.paperType})`, {
        x: this.marginLeft,
        y: this.pageHeight - 35,
        size: 9,
        font: this.fontRegular,
        color: rgb(0.4, 0.4, 0.4)
      });
      this.currentPage.drawLine({
        start: { x: this.marginLeft, y: this.pageHeight - 42 },
        end: { x: this.pageWidth - this.marginRight, y: this.pageHeight - 42 },
        thickness: 0.5,
        color: rgb(0.7, 0.7, 0.7)
      });
      this.y = this.pageHeight - 60;
    }
  }

  ensureSpace(neededHeight) {
    if (this.y - neededHeight < 60) {
      this.addNewPage();
    }
  }

  drawCoverHeader() {
    const p = this.currentPage;
    let y = this.y;

    p.drawText('THE WEST AFRICAN EXAMINATIONS COUNCIL', {
      x: this.marginLeft,
      y: y,
      size: 13,
      font: this.fontBold,
      color: rgb(0.1, 0.1, 0.1)
    });
    y -= 18;

    p.drawText(`BASIC EDUCATION CERTIFICATE EXAMINATION — JUNE ${this.year}`, {
      x: this.marginLeft,
      y: y,
      size: 11,
      font: this.fontBold,
      color: rgb(0.15, 0.15, 0.15)
    });
    y -= 16;

    p.drawText(`${this.subject.toUpperCase()} — ${this.paperType.toUpperCase()}`, {
      x: this.marginLeft,
      y: y,
      size: 12,
      font: this.fontBold,
      color: rgb(0.1, 0.3, 0.7)
    });
    y -= 14;

    p.drawText(`Duration: ${this.duration}`, {
      x: this.marginLeft,
      y: y,
      size: 10,
      font: this.fontItalic,
      color: rgb(0.3, 0.3, 0.3)
    });
    y -= 12;

    p.drawLine({
      start: { x: this.marginLeft, y: y },
      end: { x: this.pageWidth - this.marginRight, y: y },
      thickness: 1.5,
      color: rgb(0.2, 0.2, 0.2)
    });
    y -= 20;

    this.y = y;
  }

  sanitize(text) {
    if (!text) return '';
    return text
      .replace(/[“”]/g, '"')
      .replace(/[‘’]/g, "'")
      .replace(/—/g, ' -- ')
      .replace(/–/g, ' - ')
      .replace(/…/g, '...')
      .replace(/•/g, '*')
      .replace(/∩/g, ' [intersection] ')
      .replace(/∪/g, ' [union] ')
      .replace(/×/g, 'x')
      .replace(/÷/g, '/')
      .replace(/≤/g, '<=')
      .replace(/≥/g, '>=')
      .replace(/≠/g, '!=')
      .replace(/±/g, '+/-')
      .replace(/²/g, '^2')
      .replace(/³/g, '^3')
      .replace(/°/g, ' deg')
      .replace(/π/g, 'pi')
      .replace(/√/g, 'sqrt')
      .replace(/[^\x00-\x7F]/g, ''); // strip any non-ASCII to guarantee 100% WinAnsi compatibility
  }

  addText(rawText, options = {}) {
    const text = this.sanitize(rawText);
    const size = options.size || 10;
    const font = options.bold ? this.fontBold : options.italic ? this.fontItalic : this.fontRegular;
    const color = options.color || rgb(0.1, 0.1, 0.1);
    const lineHeight = size * 1.35;
    const indent = options.indent || 0;
    const maxW = this.contentWidth - indent;

    const words = text.split(' ');
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = font.widthOfTextAtSize(testLine, size);
      if (testWidth > maxW) {
        this.ensureSpace(lineHeight);
        this.currentPage.drawText(currentLine, {
          x: this.marginLeft + indent,
          y: this.y,
          size,
          font,
          color
        });
        this.y -= lineHeight;
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }

    if (currentLine) {
      this.ensureSpace(lineHeight);
      this.currentPage.drawText(currentLine, {
        x: this.marginLeft + indent,
        y: this.y,
        size,
        font,
        color
      });
      this.y -= lineHeight;
    }

    if (options.gapAfter) {
      this.y -= options.gapAfter;
    }
  }

  async save(outputPath) {
    // Add page numbers
    const totalPages = this.pages.length;
    for (let i = 0; i < totalPages; i++) {
      const p = this.pages[i];
      p.drawLine({
        start: { x: this.marginLeft, y: 45 },
        end: { x: this.pageWidth - this.marginRight, y: 45 },
        thickness: 0.5,
        color: rgb(0.7, 0.7, 0.7)
      });
      p.drawText(`Page ${i + 1} of ${totalPages} • AcademicPrep WAEC BECE Archive`, {
        x: this.marginLeft,
        y: 32,
        size: 8,
        font: this.fontRegular,
        color: rgb(0.5, 0.5, 0.5)
      });
    }

    const bytes = await this.doc.save();
    fs.writeFileSync(outputPath, bytes);
    return bytes.length;
  }
}

async function run() {
  const b = new WaecPdfBuilder('BECE 2008 Mathematics 1', 'Mathematics', 2008, 'Paper 1 (Objectives)', '1 Hour');
  await b.init();
  b.addText('INSTRUCTIONS TO CANDIDATES: Answer all forty questions. Each question is followed by four options lettered A to D. Find the correct option for each question and shade in pencil on your answer sheet.', { italic: true, gapAfter: 12 });
  
  for (let i = 1; i <= 15; i++) {
    b.addText(`${i}. If set P = {1, 2, 3, 4, 6, 12} and set Q = {2, 3, 5, 7}, find P ∩ Q.`, { bold: true });
    b.addText('A. {2, 3}', { indent: 15 });
    b.addText('B. {1, 2, 3}', { indent: 15 });
    b.addText('C. {2, 3, 4, 6}', { indent: 15 });
    b.addText('D. {1, 2, 3, 4, 5, 6, 7, 12}', { indent: 15, gapAfter: 8 });
  }

  const uploadsDir = path.join(process.cwd(), 'public', 'uploads', 'documents');
  if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });
  const out = path.join(uploadsDir, 'test_waec_2008.pdf');
  const sz = await b.save(out);
  console.log('SUCCESS! Saved test pdf to', out, 'size:', sz);
}

run().catch(console.error);
