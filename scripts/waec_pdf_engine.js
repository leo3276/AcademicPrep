const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

// Text sanitizer for WinAnsi PDF encoding
function sanitize(text) {
  if (!text) return '';
  return String(text)
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
    .replace(/ɛ/g, 'e')
    .replace(/ɔ/g, 'o')
    .replace(/Ɛ/g, 'E')
    .replace(/Ɔ/g, 'O')
    .replace(/é/g, 'e')
    .replace(/è/g, 'e')
    .replace(/ê/g, 'e')
    .replace(/à/g, 'a')
    .replace(/ç/g, 'c')
    .replace(/[^\x00-\x7F]/g, ''); // pure ASCII for 100% standard font support
}

class WaecExamPdfGenerator {
  constructor(metadata) {
    this.metadata = metadata; // { title, subject, code, year, paperType, duration, instructions }
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
    this.y = this.pageHeight - 50;

    // Running header for subsequent pages
    if (this.pages.length > 1) {
      const headerText = sanitize(`WAEC BECE ${this.metadata.year} • ${this.metadata.subject.toUpperCase()} • ${this.metadata.paperType.toUpperCase()}`);
      this.currentPage.drawText(headerText, {
        x: this.marginLeft,
        y: this.pageHeight - 35,
        size: 8,
        font: this.fontBold,
        color: rgb(0.35, 0.35, 0.35)
      });
      this.currentPage.drawLine({
        start: { x: this.marginLeft, y: this.pageHeight - 40 },
        end: { x: this.pageWidth - this.marginRight, y: this.pageHeight - 40 },
        thickness: 0.5,
        color: rgb(0.75, 0.75, 0.75)
      });
      this.y = this.pageHeight - 58;
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

    // Top border box
    p.drawRectangle({
      x: this.marginLeft,
      y: y - 82,
      width: this.contentWidth,
      height: 82,
      borderColor: rgb(0.15, 0.25, 0.45),
      borderWidth: 1.5,
      color: rgb(0.96, 0.97, 0.99)
    });

    p.drawText('THE WEST AFRICAN EXAMINATIONS COUNCIL', {
      x: this.marginLeft + 15,
      y: y - 22,
      size: 13,
      font: this.fontBold,
      color: rgb(0.08, 0.15, 0.35)
    });

    p.drawText(`BASIC EDUCATION CERTIFICATE EXAMINATION -- JUNE ${this.metadata.year}`, {
      x: this.marginLeft + 15,
      y: y - 40,
      size: 10,
      font: this.fontBold,
      color: rgb(0.2, 0.2, 0.2)
    });

    p.drawText(`${this.metadata.subject.toUpperCase()} -- ${this.metadata.paperType.toUpperCase()}`, {
      x: this.marginLeft + 15,
      y: y - 58,
      size: 11,
      font: this.fontBold,
      color: rgb(0.12, 0.35, 0.65)
    });

    p.drawText(`Duration: ${this.metadata.duration}  |  Level: JHS 3 / BECE  |  Code: ${this.metadata.code}`, {
      x: this.marginLeft + 15,
      y: y - 74,
      size: 8.5,
      font: this.fontItalic,
      color: rgb(0.35, 0.35, 0.35)
    });

    y -= 100;
    this.y = y;

    // Instructions Box
    if (this.metadata.instructions) {
      this.drawSectionHeader('INSTRUCTIONS TO CANDIDATES');
      this.addText(this.metadata.instructions, { italic: true, gapAfter: 12 });
      this.drawDivider();
    }
  }

  drawSectionHeader(title) {
    this.ensureSpace(35);
    const p = this.currentPage;
    p.drawRectangle({
      x: this.marginLeft,
      y: this.y - 18,
      width: this.contentWidth,
      height: 22,
      color: rgb(0.92, 0.94, 0.97)
    });
    p.drawText(sanitize(title), {
      x: this.marginLeft + 8,
      y: this.y - 12,
      size: 9.5,
      font: this.fontBold,
      color: rgb(0.1, 0.2, 0.4)
    });
    this.y -= 28;
  }

  drawDivider() {
    this.ensureSpace(15);
    this.currentPage.drawLine({
      start: { x: this.marginLeft, y: this.y },
      end: { x: this.pageWidth - this.marginRight, y: this.y },
      thickness: 0.5,
      color: rgb(0.8, 0.8, 0.8)
    });
    this.y -= 12;
  }

  addText(rawText, options = {}) {
    if (!rawText) return;
    const paragraphs = String(rawText).split(/\r?\n/);
    const size = options.size || 9.5;
    const font = options.bold ? this.fontBold : options.italic ? this.fontItalic : this.fontRegular;
    const color = options.color || rgb(0.12, 0.12, 0.12);
    const lineHeight = size * 1.35;
    const indent = options.indent || 0;
    const maxW = this.contentWidth - indent;

    for (let pIdx = 0; pIdx < paragraphs.length; pIdx++) {
      const pText = sanitize(paragraphs[pIdx]);
      if (!pText.trim()) {
        this.y -= lineHeight * 0.6;
        continue;
      }

      const words = pText.split(/\s+/);
      let currentLine = '';

      for (const word of words) {
        if (!word) continue;
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

      if (pIdx < paragraphs.length - 1) {
        this.y -= 4; // slight gap between paragraphs
      }
    }

    if (options.gapAfter) {
      this.y -= options.gapAfter;
    }
  }

  addObjectiveQuestion(num, questionText, options, answer, explanation) {
    this.ensureSpace(48);
    this.addText(`${num}. ${questionText}`, { bold: true, size: 9 });
    const letters = ['A', 'B', 'C', 'D'];
    options.forEach((opt, idx) => {
      this.addText(`${letters[idx]}. ${opt}`, { indent: 18, size: 8.5 });
    });
    this.y -= 5;
  }

  addTheoryQuestion(num, title, scenario, subparts) {
    this.ensureSpace(60);
    this.addText(`QUESTION ${num}: ${title}`, { bold: true, size: 10, color: rgb(0.1, 0.25, 0.5) });
    if (scenario) {
      this.addText(scenario, { italic: true, gapAfter: 6 });
    }
    subparts.forEach((sp) => {
      this.ensureSpace(30);
      this.addText(`(${sp.part}) ${sp.question} [${sp.marks} marks]`, { bold: true, indent: 12, size: 9 });
      if (sp.modelAnswer) {
        this.addText(`Model Answer / WAEC Rubric: ${sp.modelAnswer}`, { indent: 24, size: 8.5, color: rgb(0.2, 0.45, 0.2) });
      }
      this.y -= 4;
    });
    this.y -= 8;
  }

  async saveToFile(destPath) {
    const totalPages = this.pages.length;
    for (let i = 0; i < totalPages; i++) {
      const p = this.pages[i];
      p.drawLine({
        start: { x: this.marginLeft, y: 40 },
        end: { x: this.pageWidth - this.marginRight, y: 40 },
        thickness: 0.5,
        color: rgb(0.8, 0.8, 0.8)
      });
      p.drawText(`Page ${i + 1} of ${totalPages}  •  AcademicPrep WAEC BECE Archive  •  Standard Examination Edition`, {
        x: this.marginLeft,
        y: 28,
        size: 7.5,
        font: this.fontRegular,
        color: rgb(0.5, 0.5, 0.5)
      });
    }

    const pdfBytes = await this.doc.save();
    fs.writeFileSync(destPath, pdfBytes);
    return pdfBytes.length;
  }
}

module.exports = {
  WaecExamPdfGenerator,
  sanitize
};
