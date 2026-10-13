import { PersonalTimetable } from './timetableTypes';

function sanitize(text: string): string {
  if (!text) return '';
  return String(text)
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/—/g, ' - ')
    .replace(/–/g, ' - ')
    .replace(/…/g, '...')
    .replace(/•/g, '*')
    .replace(/[^\x00-\x7F]/g, ''); // pure ASCII for standard Helvetica
}

function truncate(text: string, maxLen: number): string {
  const clean = sanitize(text);
  if (clean.length <= maxLen) return clean;
  return clean.substring(0, maxLen - 2) + '..';
}

export async function exportTimetablePdf(timetable: PersonalTimetable): Promise<void> {
  const { PDFDocument, rgb, StandardFonts } = await import('pdf-lib');

  const doc = await PDFDocument.create();
  const fontRegular = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontItalic = await doc.embedFont(StandardFonts.HelveticaOblique);

  // Standard Portrait A4 (595.28 x 841.89 pt) - Best for wall printouts
  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const marginX = 35;
  const contentWidth = pageWidth - marginX * 2; // 525.28 pt

  const page = doc.addPage([pageWidth, pageHeight]);

  // ==========================================
  // 1. MINIMALIST DOCUMENT HEADER
  // ==========================================
  let y = pageHeight - 45;

  // Title
  page.drawText('ACADEMICPREP GHANA', {
    x: marginX,
    y,
    size: 9,
    font: fontBold,
    color: rgb(0.2, 0.25, 0.35),
  });

  const dateStr = `Generated: ${new Date(timetable.createdAt).toLocaleDateString(undefined, { dateStyle: 'medium' })}`;
  page.drawText(sanitize(dateStr), {
    x: pageWidth - marginX - fontRegular.widthOfTextAtSize(dateStr, 8),
    y,
    size: 8,
    font: fontRegular,
    color: rgb(0.45, 0.5, 0.55),
  });

  y -= 18;
  const isShs = timetable.level.startsWith('SHS');
  const examType = isShs ? 'WASSCE' : 'BECE';
  page.drawText(`Personal ${examType} Study Timetable & Topic Revision Plan`, {
    x: marginX,
    y,
    size: 13,
    font: fontBold,
    color: rgb(0.1, 0.12, 0.18),
  });

  y -= 8;
  // Hairline divider
  page.drawLine({
    start: { x: marginX, y },
    end: { x: pageWidth - marginX, y },
    thickness: 0.6,
    color: rgb(0.85, 0.87, 0.9),
  });

  // ==========================================
  // 2. CANDIDATE PROFILE INFO BAR
  // ==========================================
  y -= 18;
  const infoBarHeight = 22;
  page.drawRectangle({
    x: marginX,
    y: y - infoBarHeight,
    width: contentWidth,
    height: infoBarHeight,
    color: rgb(0.97, 0.98, 0.99),
    borderColor: rgb(0.88, 0.9, 0.92),
    borderWidth: 0.5,
  });

  const candidateText = truncate(`Candidate: ${timetable.studentName}`, 32);
  const levelText = `Level: ${timetable.level}`;
  const planText = `Plan: ${timetable.preferences.intensity} (${timetable.totalWeeklyHours} hrs/wk)`;

  page.drawText(candidateText, {
    x: marginX + 8,
    y: y - 14,
    size: 8,
    font: fontBold,
    color: rgb(0.15, 0.18, 0.25),
  });

  page.drawText(levelText, {
    x: marginX + 210,
    y: y - 14,
    size: 8,
    font: fontRegular,
    color: rgb(0.3, 0.35, 0.4),
  });

  page.drawText(planText, {
    x: marginX + 330,
    y: y - 14,
    size: 8,
    font: fontRegular,
    color: rgb(0.3, 0.35, 0.4),
  });

  y = y - infoBarHeight - 14;

  // ==========================================
  // 3. TIMETABLE MATRIX TABLE
  // ==========================================
  // Column definitions (Total width = 525 pt)
  const colDay = 68;
  const colTime = 92;
  const colSubj = 110;
  const colTopic = 145;
  const colObj = contentWidth - (colDay + colTime + colSubj + colTopic); // 110 pt

  // Table header row
  const tableHeaderHeight = 16;
  page.drawRectangle({
    x: marginX,
    y: y - tableHeaderHeight,
    width: contentWidth,
    height: tableHeaderHeight,
    color: rgb(0.92, 0.94, 0.96),
    borderColor: rgb(0.82, 0.85, 0.88),
    borderWidth: 0.5,
  });

  const thY = y - 11;
  page.drawText('DAY', { x: marginX + 6, y: thY, size: 7, font: fontBold, color: rgb(0.2, 0.25, 0.3) });
  page.drawText('TIME', { x: marginX + colDay + 6, y: thY, size: 7, font: fontBold, color: rgb(0.2, 0.25, 0.3) });
  page.drawText('SUBJECT', { x: marginX + colDay + colTime + 6, y: thY, size: 7, font: fontBold, color: rgb(0.2, 0.25, 0.3) });
  page.drawText('TOPIC TO STUDY', { x: marginX + colDay + colTime + colSubj + 6, y: thY, size: 7, font: fontBold, color: rgb(0.2, 0.25, 0.3) });
  page.drawText('STUDY FOCUS', { x: marginX + colDay + colTime + colSubj + colTopic + 6, y: thY, size: 7, font: fontBold, color: rgb(0.2, 0.25, 0.3) });

  y -= tableHeaderHeight;

  // Table body rows
  const days = Object.keys(timetable.weeklySchedule);
  const rowHeight = 21; // Generous row height with zero text collision

  days.forEach((day, dayIdx) => {
    const sessions = timetable.weeklySchedule[day] || [];
    if (sessions.length === 0) return;

    const dayGroupHeight = sessions.length * rowHeight;

    // Outer row box for day group
    page.drawRectangle({
      x: marginX,
      y: y - dayGroupHeight,
      width: contentWidth,
      height: dayGroupHeight,
      color: dayIdx % 2 === 0 ? rgb(0.99, 0.99, 1) : rgb(1, 1, 1),
      borderColor: rgb(0.86, 0.88, 0.9),
      borderWidth: 0.4,
    });

    // Day name (centered in day block)
    const dayNameY = y - (dayGroupHeight / 2) - 3;
    page.drawText(truncate(day, 10), {
      x: marginX + 6,
      y: dayNameY,
      size: 7.5,
      font: fontBold,
      color: rgb(0.12, 0.15, 0.22),
    });

    // Sessions for this day
    sessions.forEach((sess, sessIdx) => {
      const sessRowY = y - (sessIdx * rowHeight) - 13;

      // Time
      page.drawText(truncate(sess.timeSlot, 19), {
        x: marginX + colDay + 6,
        y: sessRowY,
        size: 6.8,
        font: fontRegular,
        color: rgb(0.35, 0.4, 0.45),
      });

      // Subject
      const subjStr = truncate(sess.isWeakSubject ? `${sess.subjectName} *` : sess.subjectName, 21);
      page.drawText(subjStr, {
        x: marginX + colDay + colTime + 6,
        y: sessRowY,
        size: 7,
        font: sess.isWeakSubject ? fontBold : fontRegular,
        color: sess.isWeakSubject ? rgb(0.7, 0.15, 0.1) : rgb(0.1, 0.15, 0.2),
      });

      // Topic Title (safely truncated to fit colTopic = 145 pt)
      const topicStr = truncate(sess.topicTitle, 26);
      page.drawText(topicStr, {
        x: marginX + colDay + colTime + colSubj + 6,
        y: sessRowY,
        size: 7,
        font: fontBold,
        color: rgb(0.08, 0.25, 0.18),
      });

      // Focus / Mode (safely truncated to fit colObj = 110 pt)
      const focusStr = truncate(sess.studyMode.replace(/_/g, ' '), 20);
      page.drawText(focusStr, {
        x: marginX + colDay + colTime + colSubj + colTopic + 6,
        y: sessRowY,
        size: 6.8,
        font: fontItalic,
        color: rgb(0.4, 0.45, 0.5),
      });

      // Divider line between sessions within same day
      if (sessIdx < sessions.length - 1) {
        page.drawLine({
          start: { x: marginX + colDay, y: y - ((sessIdx + 1) * rowHeight) },
          end: { x: marginX + contentWidth, y: y - ((sessIdx + 1) * rowHeight) },
          thickness: 0.3,
          color: rgb(0.9, 0.92, 0.94),
        });
      }
    });

    y -= dayGroupHeight;
  });

  // ==========================================
  // 4. MINIMALIST STUDY GUIDELINES (Zero Collision)
  // ==========================================
  y -= 14;
  const guidelinesBoxHeight = 52;

  page.drawRectangle({
    x: marginX,
    y: y - guidelinesBoxHeight,
    width: contentWidth,
    height: guidelinesBoxHeight,
    color: rgb(0.98, 0.98, 0.99),
    borderColor: rgb(0.85, 0.88, 0.9),
    borderWidth: 0.5,
  });

  page.drawText('WAEC REVISION INSTRUCTIONS:', {
    x: marginX + 8,
    y: y - 11,
    size: 7,
    font: fontBold,
    color: rgb(0.2, 0.25, 0.3),
  });

  // Stacked bullet lines with generous vertical spacing (no horizontal collision)
  const line1 = '* Spaced Repetition: Review prior topic summary for 10 minutes before starting new notes.';
  const line2 = '* Active Recall: Test yourself with 5 to 10 diagnostic questions on AcademicPrep.';
  const line3 = '* Mistake Bank: Record all incorrect answers in your revision notebook and re-test in 48 hours.';

  page.drawText(sanitize(line1), { x: marginX + 8, y: y - 23, size: 6.5, font: fontRegular, color: rgb(0.3, 0.35, 0.4) });
  page.drawText(sanitize(line2), { x: marginX + 8, y: y - 33, size: 6.5, font: fontRegular, color: rgb(0.3, 0.35, 0.4) });
  page.drawText(sanitize(line3), { x: marginX + 8, y: y - 43, size: 6.5, font: fontRegular, color: rgb(0.3, 0.35, 0.4) });

  y -= (guidelinesBoxHeight + 12);

  // Bottom footer watermark
  page.drawText(sanitize(`* = Priority weak subject. Access quizzes and study notes at academicprep.com/${isShs ? 'shs' : 'jhs'}`), {
    x: marginX,
    y: Math.max(y, 25),
    size: 6.5,
    font: fontItalic,
    color: rgb(0.5, 0.55, 0.6),
  });

  // Save PDF and trigger download
  const pdfBytes = await doc.save();
  const blob = new Blob([pdfBytes as unknown as BlobPart], { type: 'application/pdf' });
  const downloadUrl = URL.createObjectURL(blob);

  const cleanName = timetable.studentName.replace(/[^a-zA-Z0-9]/g, '_');
  const filename = `${cleanName}_${examType}_Study_Timetable.pdf`;

  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(downloadUrl);
}
