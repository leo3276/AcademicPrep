# Project Rules & Design Guidelines: AcademicPrep

## 1. UI & Visual Design: Strict Minimalism
- **Color Palette & Cards**: Use a light, clean, minimalist design system. Default to clean white card surfaces (`bg-white`) with subtle borders (`border-slate-200`) and soft, minimal shadows (`shadow-xs` / `shadow-2xs`).
- **Strictly Prohibited Styles**:
  - Do NOT use dark/purple glossy gradients (e.g., `bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950`).
  - Do NOT use neon green/cyan digital alarm clock boxes with heavy borders and glowing text.
  - Do NOT use heavy glassmorphism, aggressive backdrop blurs (`backdrop-blur-md` on dark cards), or multi-color saturated gradient buttons.
  - Buttons should use clean, solid, high-contrast styles (e.g. `bg-slate-900 hover:bg-slate-800 text-white`).
- **Navigation & Tabs**:
  - Keep navigation decluttered and minimal. Prefer clean underline tab navigation (`border-b-2 border-slate-900` when active) over bulky, colorful pill button grids.
  - On dedicated pages like `/profile`, simplify the top navbar to essential controls and a clean "← Return to Portal" link; avoid wrapping multi-item desktop navigation menus.
  - Never add redundant duplicate sticky sub-headers below the primary navbar.
- **Logo & Brand Identity (Trademark Invariant)**: AcademicPrep's trademark and brand identity is the royal blue icon/background (`bg-gradient-to-tr from-blue-600 to-indigo-600` or `bg-blue-600` with white GraduationCap, matching `icon.svg`). Never change the logo badge to slate-900 or black; always preserve this iconic blue brand mark on the logo across the Navbar and primary branding touchpoints.

## 2. Student Data Isolation & Account Scoping
- **Strict Account Namespacing**: Any client-side storage (such as `localStorage`) containing student-specific data (e.g. revision timetables, mistake logs, quiz histories) MUST be scoped with the student's unique ID (e.g. `academicprep_timetable_${studentId}`).
- **Cross-Account Prevention**:
  - On load, always verify that stored data matches the currently authenticated student ID (`parsed.studentId === currentStudentId`).
  - Check education level strand compatibility (SHS vs. JHS) so an account in one level does not inherit or display a timetable from another level.
  - Reset or clear in-memory and local state appropriately when switching accounts or signing out.

## 3. Cross-Level Portal Viewing (SHS <-> JHS)
- **Permit Cross-Level Browsing**: An SHS student is fully entitled to browse the JHS portal, and vice versa. Do NOT forcibly redirect them back to their home portal.
- **View-Only Invariant**: When a student browses a curriculum level outside their registered strand (e.g., an SHS student on JHS):
  - Access is strictly **Read-Only / Reference Mode**.
  - They CAN read all lesson notes, worked examples, and past questions.
  - They CANNOT record progressions (quizzes, topic completions, or weekly exams must NOT modify their profile or save to their progress).
  - Clear, minimal banners must inform the student that they are in View-Only mode with a quick link to return to their home portal.

## 4. 30-Day Free Trial & VIP Access Flow
- **No Paywalls During Trial**: During the 30-day trial period, eliminate all VIP payment prompts, pricing tables, and paywall locks. Every curriculum topic, exam, and feature is 100% unlocked with zero payment required.
- **Unobtrusive Countdown**: Provide a clean, minimalist countdown badge or card showing days, hours, minutes, and seconds remaining in a subtle monospace pill (`bg-slate-100 text-slate-800`).
- **Post-Trial Only**: VIP upgrade modals and payment triggers should only appear after the 30-day trial has explicitly expired (`!isTrialActive && !hasFullAccess`).

## 5. Git & Repository Safety
- Do NOT run `git push` autonomously.
