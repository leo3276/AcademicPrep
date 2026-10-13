import { PersonalTimetable, TimetableSession } from './timetableTypes';

const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const;

export interface NextSessionInfo {
  session: TimetableSession;
  day: string;
  isToday: boolean;
  timeSlot: string;
  minutesUntilStart: number;
  isHappeningNow: boolean;
}

// Parse time string e.g. "05:30 AM" into minutes from midnight
function parseTimeToMinutes(timeStr: string): number {
  const parts = timeStr.trim().split(' ');
  if (parts.length < 2) return 0;
  const [hoursStr, minsStr] = parts[0].split(':');
  let hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minsStr, 10) || 0;
  const meridian = parts[1].toUpperCase();

  if (meridian === 'PM' && hours < 12) hours += 12;
  if (meridian === 'AM' && hours === 12) hours = 0;

  return hours * 60 + minutes;
}

// Find next upcoming study session based on current day and time
export function getNextScheduledSession(timetable: PersonalTimetable): NextSessionInfo | null {
  if (!timetable || !timetable.weeklySchedule) return null;

  const now = new Date();
  const currentDayIndex = now.getDay(); // 0 is Sunday, 1 is Monday...
  const currentDayName = DAYS_OF_WEEK[currentDayIndex];
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  // 1. Check if there are sessions remaining today
  const todaySessions = timetable.weeklySchedule[currentDayName] || [];
  for (const sess of todaySessions) {
    const [startStr, endStr] = sess.timeSlot.split(' - ');
    if (startStr && endStr) {
      const startMin = parseTimeToMinutes(startStr);
      const endMin = parseTimeToMinutes(endStr);

      if (currentMinutes >= startMin && currentMinutes <= endMin) {
        return {
          session: sess,
          day: currentDayName,
          isToday: true,
          timeSlot: sess.timeSlot,
          minutesUntilStart: 0,
          isHappeningNow: true,
        };
      }

      if (startMin > currentMinutes) {
        return {
          session: sess,
          day: currentDayName,
          isToday: true,
          timeSlot: sess.timeSlot,
          minutesUntilStart: startMin - currentMinutes,
          isHappeningNow: false,
        };
      }
    }
  }

  // 2. Look forward in upcoming days
  for (let offset = 1; offset <= 7; offset++) {
    const nextDayIndex = (currentDayIndex + offset) % 7;
    const nextDayName = DAYS_OF_WEEK[nextDayIndex];
    const daySessions = timetable.weeklySchedule[nextDayName] || [];

    if (daySessions.length > 0) {
      const firstSess = daySessions[0];
      const [startStr] = firstSess.timeSlot.split(' - ');
      const startMin = parseTimeToMinutes(startStr || '06:00 AM');
      const totalMinutesUntil = offset * 24 * 60 - currentMinutes + startMin;

      return {
        session: firstSess,
        day: nextDayName,
        isToday: offset === 0,
        timeSlot: firstSess.timeSlot,
        minutesUntilStart: totalMinutesUntil,
        isHappeningNow: false,
      };
    }
  }

  return null;
}

// Request Web Notification permission
export async function requestNotificationPermission(): Promise<boolean> {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return false;
  }

  if (Notification.permission === 'granted') {
    return true;
  }

  if (Notification.permission !== 'denied') {
    const result = await Notification.requestPermission();
    return result === 'granted';
  }

  return false;
}

// Send local browser notification
export function sendStudyNotification(title: string, body: string, url?: string): void {
  if (typeof window === 'undefined' || !('Notification' in window)) return;
  if (Notification.permission !== 'granted') return;

  try {
    const notif = new Notification(title, {
      body,
      icon: '/icon.svg',
      badge: '/icon.svg',
    });

    if (url) {
      notif.onclick = () => {
        window.focus();
        window.location.href = url;
      };
    }
  } catch (e) {
    console.warn('Failed to send notification', e);
  }
}

// Generate recurring standard iCalendar (.ics) with alarms for phone calendars
export function downloadTimetableIcs(timetable: PersonalTimetable): void {
  const dayToIcsDay: Record<string, string> = {
    Monday: 'MO',
    Tuesday: 'TU',
    Wednesday: 'WE',
    Thursday: 'TH',
    Friday: 'FR',
    Saturday: 'SA',
    Sunday: 'SU',
  };

  const isShs = timetable.level.startsWith('SHS');
  const examName = isShs ? 'WASSCE' : 'BECE';
  const portalUrl = isShs ? 'https://academicprep.com/shs' : 'https://academicprep.com/jhs';

  let icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//AcademicPrep Ghana//Study Timetable Planner//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    `X-WR-CALNAME:AcademicPrep ${examName} Study Schedule`,
    'X-WR-TIMEZONE:Africa/Accra',
  ];

  const nowStr = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  Object.entries(timetable.weeklySchedule).forEach(([day, sessions]) => {
    const icsDay = dayToIcsDay[day];
    if (!icsDay) return;

    sessions.forEach((sess, idx) => {
      const [startStr, endStr] = sess.timeSlot.split(' - ');
      if (!startStr) return;

      const startMin = parseTimeToMinutes(startStr);
      const endMin = endStr ? parseTimeToMinutes(endStr) : startMin + 45;

      const startH = String(Math.floor(startMin / 60)).padStart(2, '0');
      const startM = String(startMin % 60).padStart(2, '0');
      const endH = String(Math.floor(endMin / 60)).padStart(2, '0');
      const endM = String(endMin % 60).padStart(2, '0');

      const eventSummary = `Study: ${sess.subjectName} - ${sess.topicTitle}`;
      const eventDescription = `Topic: ${sess.topicTitle}\\nObjective: ${sess.learningObjective}\\nStudy Mode: ${sess.studyMode}\\nPractice on AcademicPrep: ${portalUrl}/${sess.subjectId}`;

      icsContent.push(
        'BEGIN:VEVENT',
        `UID:academicprep-${sess.id}-${idx}@academicprep.com`,
        `DTSTAMP:${nowStr}`,
        // Set recurring weekly rule
        `RRULE:FREQ=WEEKLY;BYDAY=${icsDay}`,
        `DTSTART:20261019T${startH}${startM}00`,
        `DTEND:20261019T${endH}${endM}00`,
        `SUMMARY:${eventSummary}`,
        `DESCRIPTION:${eventDescription}`,
        'LOCATION:Home Desk / AcademicPrep Portal',
        'STATUS:CONFIRMED',
        // 10-Minute Alarm / Push Alert
        'BEGIN:VALARM',
        'TRIGGER:-PT10M',
        'ACTION:DISPLAY',
        `DESCRIPTION:Reminder: Time to study ${sess.subjectName} (${sess.topicTitle})!`,
        'END:VALARM',
        'END:VEVENT'
      );
    });
  });

  icsContent.push('END:VCALENDAR');

  const blob = new Blob([icsContent.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${timetable.studentName.replace(/[^a-zA-Z0-9]/g, '_')}_Study_Reminders.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
