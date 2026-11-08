// ============================================================================
// AcademicPrep PDF Watermark Engine
// Applies official AcademicPrep.com logo, branding, and protection watermarks
// to every downloaded PDF past paper, slide deck, and study document.
// ============================================================================

import { PDFDocument, rgb, degrees, StandardFonts } from 'pdf-lib';

export interface WatermarkOptions {
  documentTitle?: string;
  fileName?: string;
  categoryLabel?: string;
  includeCenterWatermark?: boolean;
  includeHeaderBanner?: boolean;
  includeFooterBanner?: boolean;
  centerOpacity?: number;
}

let cachedLogoBytes: Uint8Array | null = null;

/**
 * Loads the official AcademicPrep logo PNG bytes.
 * Works both in the browser (via fetch) and in Node.js (via fs).
 */
async function loadLogoBytes(): Promise<Uint8Array | null> {
  if (cachedLogoBytes) return cachedLogoBytes;

  try {
    if (typeof window !== 'undefined') {
      // Browser environment
      const res = await fetch('/android-icon.png');
      if (res.ok) {
        const ab = await res.arrayBuffer();
        cachedLogoBytes = new Uint8Array(ab);
        return cachedLogoBytes;
      }
    } else {
      // Node.js server environment
      const fs = await import('fs');
      const path = await import('path');
      const logoPath = path.join(process.cwd(), 'public', 'android-icon.png');
      if (fs.existsSync(logoPath)) {
        cachedLogoBytes = fs.readFileSync(logoPath);
        return cachedLogoBytes;
      }
    }
  } catch (err) {
    console.warn('[pdfWatermark] Could not load logo image, using vector fallback:', err);
  }

  return null;
}

/**
 * Applies the AcademicPrep.com logo, header, footer, and diagonal watermark
 * to every page of the provided PDF document.
 * 
 * @param inputPdf - The raw PDF data as ArrayBuffer, Uint8Array, or Blob
 * @param options - Optional configuration for watermark text and opacity
 * @returns Watermarked PDF as Uint8Array
 */
export async function applyAcademicPrepWatermark(
  inputPdf: ArrayBuffer | Uint8Array | Blob,
  options: WatermarkOptions = {}
): Promise<Uint8Array> {
  const {
    documentTitle,
    fileName,
    categoryLabel = 'Official Past Paper & Study Notes',
    includeCenterWatermark = true,
    includeHeaderBanner = true,
    includeFooterBanner = true,
    centerOpacity = 0.08,
  } = options;

  // Convert input to Uint8Array
  let rawBytes: Uint8Array;
  if (inputPdf instanceof Uint8Array) {
    rawBytes = inputPdf;
  } else if (inputPdf instanceof ArrayBuffer) {
    rawBytes = new Uint8Array(inputPdf);
  } else if (typeof Blob !== 'undefined' && inputPdf instanceof Blob) {
    const ab = await inputPdf.arrayBuffer();
    rawBytes = new Uint8Array(ab);
  } else {
    throw new Error('Unsupported input format for PDF watermarking');
  }

  // Load PDF with pdf-lib
  const doc = await PDFDocument.load(rawBytes, { ignoreEncryption: true });

  // Embed standard standard typography
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await doc.embedFont(StandardFonts.Helvetica);

  // Attempt to embed AcademicPrep Logo
  const logoBytes = await loadLogoBytes();
  let embeddedLogo: any = null;
  if (logoBytes) {
    try {
      embeddedLogo = await doc.embedPng(logoBytes);
    } catch {
      embeddedLogo = null;
    }
  }

  const pages = doc.getPages();

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    const { width, height } = page.getSize();
    const pageNumber = i + 1;
    const totalPages = pages.length;

    // ─────────────────────────────────────────────────────────────
    // 1. CENTER DIAGONAL WATERMARK (Subtle, transparent, tamper-proof)
    // ─────────────────────────────────────────────────────────────
    if (includeCenterWatermark) {
      const primaryWatermark = 'Academic Prep';
      const secondaryWatermark = "GHANA'S PREMIER DIGITAL LEARNING HUB";

      // Scale font dynamically based on page width
      const mainFontSize = Math.min(width * 0.082, 44);
      const subFontSize = Math.min(width * 0.022, 12);

      const mainTextWidth = fontBold.widthOfTextAtSize(primaryWatermark, mainFontSize);
      const subTextWidth = fontBold.widthOfTextAtSize(secondaryWatermark, subFontSize);

      const logoWatermarkSize = mainFontSize * 0.95;
      const logoSpacing = 10;
      const totalPrimaryWidth = (embeddedLogo ? logoWatermarkSize + logoSpacing : 0) + mainTextWidth;

      // 45-degree angle watermark placed in center
      const centerX = width / 2;
      const centerY = height / 2;
      const cos45 = 0.7071;

      // Draw Logo alongside "Academic Prep" at 45 degrees
      if (embeddedLogo) {
        const logoOffset = -totalPrimaryWidth / 2;
        page.drawImage(embeddedLogo, {
          x: centerX + logoOffset * cos45,
          y: centerY + logoOffset * cos45,
          width: logoWatermarkSize,
          height: logoWatermarkSize,
          opacity: centerOpacity * 1.1,
          rotate: degrees(45),
        });
      }

      // Draw "Academic Prep" Brand Text
      const textOffset = embeddedLogo
        ? (-totalPrimaryWidth / 2) + logoWatermarkSize + logoSpacing
        : -mainTextWidth / 2;

      page.drawText(primaryWatermark, {
        x: centerX + textOffset * cos45,
        y: centerY + textOffset * cos45,
        size: mainFontSize,
        font: fontBold,
        color: rgb(0.12, 0.25, 0.55),
        opacity: centerOpacity,
        rotate: degrees(45),
      });

      // Secondary Tagline
      page.drawText(secondaryWatermark, {
        x: centerX - (subTextWidth / 2) * cos45 - 20 * cos45,
        y: centerY - (subTextWidth / 2) * cos45 - 35 * cos45,
        size: subFontSize,
        font: fontBold,
        color: rgb(0.12, 0.25, 0.55),
        opacity: Math.max(0.04, centerOpacity * 0.7),
        rotate: degrees(45),
      });
    }

    // ─────────────────────────────────────────────────────────────
    // 2. RUNNING HEADER BRAND BAR (Top Margin)
    // ─────────────────────────────────────────────────────────────
    if (includeHeaderBanner && height > 200) {
      const headerY = height - 26;
      const logoSize = 14;

      // Draw Logo Image or Vector Fallback
      if (embeddedLogo) {
        page.drawImage(embeddedLogo, {
          x: 36,
          y: headerY - 2,
          width: logoSize,
          height: logoSize,
          opacity: 0.9,
        });
      } else {
        // Fallback Vector Badge
        page.drawRectangle({
          x: 36,
          y: headerY - 2,
          width: logoSize,
          height: logoSize,
          color: rgb(0.1, 0.35, 0.8),
          borderColor: rgb(0.08, 0.25, 0.65),
          borderWidth: 0.5,
        });
      }

      // Brand Text
      page.drawText('Academic Prep', {
        x: 55,
        y: headerY + 1,
        size: 8,
        font: fontBold,
        color: rgb(0.12, 0.22, 0.42),
        opacity: 0.9,
      });

      page.drawText(`•  ${categoryLabel}`, {
        x: 155,
        y: headerY + 1,
        size: 7.5,
        font: fontRegular,
        color: rgb(0.4, 0.45, 0.55),
        opacity: 0.85,
      });

      // Right-aligned document title if provided
      if (documentTitle) {
        const cleanTitle = documentTitle.replace(/[^\x00-\x7F]/g, '').slice(0, 38);
        const titleWidth = fontRegular.widthOfTextAtSize(cleanTitle, 7);
        page.drawText(cleanTitle, {
          x: width - 36 - titleWidth,
          y: headerY + 1,
          size: 7,
          font: fontRegular,
          color: rgb(0.45, 0.5, 0.6),
          opacity: 0.8,
        });
      }

      // Top Divider Line
      page.drawLine({
        start: { x: 36, y: height - 32 },
        end: { x: width - 36, y: height - 32 },
        thickness: 0.5,
        color: rgb(0.86, 0.89, 0.93),
      });
    }

    // ─────────────────────────────────────────────────────────────
    // 3. RUNNING FOOTER BRAND BAR (Bottom Margin)
    // ─────────────────────────────────────────────────────────────
    if (includeFooterBanner && height > 200) {
      // Bottom Divider Line
      page.drawLine({
        start: { x: 36, y: 32 },
        end: { x: width - 36, y: 32 },
        thickness: 0.5,
        color: rgb(0.86, 0.89, 0.93),
      });

      const footerY = 16;
      const logoFooterSize = 11;

      // Small Logo
      if (embeddedLogo) {
        page.drawImage(embeddedLogo, {
          x: 36,
          y: footerY - 1,
          width: logoFooterSize,
          height: logoFooterSize,
          opacity: 0.85,
        });
      }

      // Download Notice
      const noticeText = 'Downloaded from Academic Prep (acadmicprep.com) — For Student Study & Personal Revision';
      page.drawText(noticeText, {
        x: embeddedLogo ? 52 : 36,
        y: footerY + 1,
        size: 7,
        font: fontRegular,
        color: rgb(0.35, 0.42, 0.52),
        opacity: 0.85,
      });

      // Page Count
      const pageCountText = `Page ${pageNumber} of ${totalPages}`;
      const pageCountWidth = fontRegular.widthOfTextAtSize(pageCountText, 7);
      page.drawText(pageCountText, {
        x: width - 36 - pageCountWidth,
        y: footerY + 1,
        size: 7,
        font: fontRegular,
        color: rgb(0.4, 0.45, 0.55),
        opacity: 0.85,
      });
    }
  }

  // Return the watermarked document bytes
  return await doc.save();
}

/**
 * Browser helper to trigger a clean file download of a watermarked PDF.
 */
export async function downloadWatermarkedPdf(
  inputPdf: ArrayBuffer | Uint8Array | Blob,
  fileName: string = 'academicprep_document.pdf',
  options: WatermarkOptions = {}
): Promise<void> {
  if (typeof window === 'undefined') return;

  const watermarkedBytes = await applyAcademicPrepWatermark(inputPdf, {
    ...options,
    fileName,
  });

  const blob = new Blob([watermarkedBytes as unknown as BlobPart], { type: 'application/pdf' });
  const blobUrl = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = blobUrl;
  link.download = fileName.endsWith('.pdf') ? fileName : `${fileName}.pdf`;
  document.body.appendChild(link);
  link.click();

  setTimeout(() => {
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
  }, 2500);
}
