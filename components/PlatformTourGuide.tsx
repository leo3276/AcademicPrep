'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowRight, ArrowLeft, X, Check, Compass, Sparkles, Lightbulb } from 'lucide-react';

export interface TourStep {
  id: string;
  targetId: string;
  stepNumber: number;
  title: string;
  text: string;
  tip?: string;
}

export const HOMEPAGE_TOUR_STEPS: TourStep[] = [
  {
    id: 'home-launch',
    targetId: 'tour-home-launch',
    stepNumber: 1,
    title: 'Launch JHS Study Portal',
    text: 'Click here anytime to enter the active Junior High School curriculum portal, where you can study JHS 1, 2, and 3 notes and take chapter quizzes.',
    tip: 'No payment required to get started with your first 3 topics.',
  },
  {
    id: 'home-demo',
    targetId: 'tour-home-demo',
    stepNumber: 2,
    title: 'Instant Demo Student Account',
    text: 'Want to test the platform instantly? Use our pre-filled demo student login (Phone: 0241234567, PIN: 1234) without signing up first.',
    tip: 'Click "Quick Fill" on the login page to sign in with one tap.',
  },
  {
    id: 'home-jhs',
    targetId: 'tour-home-jhs',
    stepNumber: 3,
    title: 'Junior High School (JHS) Hub',
    text: 'Our primary accredited curriculum covers 6 core GES subjects for JHS 1, 2, and 3 candidates with verified notes and step-by-step quiz solutions.',
    tip: 'SHS and University portals are currently in active development.',
  },
  {
    id: 'home-bece',
    targetId: 'tour-home-bece',
    stepNumber: 4,
    title: 'WAEC BECE Past Papers (1990–2025)',
    text: 'Access over 30+ years of official WAEC BECE examination questions, objective questions, and Chief Examiner marking schemes.',
    tip: 'Practice past questions subject-by-subject to build exam stamina.',
  },
  {
    id: 'home-mocks',
    targetId: 'tour-home-mocks',
    stepNumber: 5,
    title: 'BECE Trial & Mock Exam Papers',
    text: 'Download and practice trial mock exams from Best Brain, CEPME, GBat, and GES district education directorates.',
    tip: 'Includes answer keys verified by experienced Ghanaian teachers.',
  },
  {
    id: 'home-weekly',
    targetId: 'tour-home-weekly',
    stepNumber: 6,
    title: 'Progress-Adaptive Weekly Exam',
    text: 'Our CBT testing engine queries the topics you have completed each week and builds a personalized 15-minute weekend test tailored to you.',
    tip: 'You are never tested on topics you haven’t completed yet.',
  },
  {
    id: 'home-blog',
    targetId: 'tour-home-blog',
    stepNumber: 7,
    title: 'WAEC Examiner Study Journal',
    text: 'Read Chief Examiner bulletins, revision blueprints, memory tricks, and official BECE timetables written by seasoned examiners.',
    tip: 'Regularly updated with new study tips and past questions analyses.',
  },
  {
    id: 'nav-vip',
    targetId: 'tour-nav-vip',
    stepNumber: 8,
    title: 'VIP Pass & Full Syllabus Access',
    text: 'Upgrade to VIP for GHS 25/month via Mobile Money (MTN, Telecel, AT) or an Access Voucher PIN to unlock unlimited quizzes, mock exams, and analytics.',
    tip: 'Instant activation via Paystack MoMo or scratch card PIN.',
  },
];

export const JHS_PORTAL_TOUR_STEPS: TourStep[] = [
  {
    id: 'level-switcher',
    targetId: 'tour-level-switcher',
    stepNumber: 1,
    title: 'Grade Level Switcher',
    text: 'Switch between JHS 1, JHS 2, or JHS 3 at any time. The portal automatically reloads with the exact NaCCA / GES curriculum topics, notes, and quizzes for that class.',
    tip: 'Your topic mastery progress is saved separately for each grade level.',
  },
  {
    id: 'topic-mastery',
    targetId: 'tour-topic-mastery',
    stepNumber: 2,
    title: 'Topic Mastery & Progress Bar',
    text: 'Every time you pass a chapter quiz with 60% or higher, your progress advances. Track your completion percentage across the entire national syllabus.',
    tip: 'Free accounts include 3 free topics so you can explore immediately!',
  },
  {
    id: 'bece-past-questions',
    targetId: 'tour-bece-past-questions',
    stepNumber: 3,
    title: 'WAEC BECE Past Papers Archive',
    text: 'Practice with over 30+ years of official WAEC BECE examination papers (1990–2025). Includes Paper 1 (Objectives) and Paper 2 (Theory) with verified marking schemes.',
    tip: 'Review step-by-step marking rubrics to see how WAEC examiners score questions.',
  },
  {
    id: 'trial-mocks',
    targetId: 'tour-trial-mocks',
    stepNumber: 4,
    title: 'Trial Mock Exams & Likely Papers',
    text: 'Test your timing and readiness with mock exams from Best Brain, CEPME, GBat, and GES districts. Perfect for BECE candidates preparing for exam day.',
    tip: 'Answer keys are verified by experienced Ghanaian teachers.',
  },
  {
    id: 'weekly-exam',
    targetId: 'tour-weekly-exam',
    stepNumber: 5,
    title: 'Personalized Weekly Revision Exam',
    text: 'Our adaptive testing engine compiles a custom weekend exam testing only the topics you have completed. You are never tested on chapters you haven’t read yet!',
    tip: 'Complete more chapter quizzes during the week to unlock a richer weekend exam.',
  },
  {
    id: 'curriculum-subjects',
    targetId: 'tour-curriculum-subjects',
    stepNumber: 6,
    title: 'Core GES Curriculum Subjects',
    text: 'Access all approved subjects including Mathematics, Integrated Science, English, Social Studies, ICT, and RME. Each subject contains detailed lesson notes and instant quizzes.',
    tip: 'Click any subject to browse its chapters and start practicing.',
  },
  {
    id: 'study-journal',
    targetId: 'tour-study-journal',
    stepNumber: 7,
    title: 'WAEC Examiner Study Journal',
    text: 'Read Chief Examiner reports, formula recall strategies, essay-writing blueprints, and official timetable announcements written by seasoned examiners.',
    tip: 'New revision guides and academic bulletins are published regularly.',
  },
  {
    id: 'nav-vip',
    targetId: 'tour-nav-vip',
    stepNumber: 8,
    title: 'VIP Pass & Access PIN Activation',
    text: 'Unlock unlimited access to all 9 subjects, CBT mocks, and past papers via Mobile Money (GHS 25/month) or by entering a 10-digit school Access PIN.',
    tip: 'Click this button anytime to activate or renew your subscription.',
  },
];

export const PLATFORM_TOUR_STEPS = JHS_PORTAL_TOUR_STEPS;

interface PlatformTourGuideProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete?: () => void;
  steps?: TourStep[];
  nextTourUrl?: string;
  nextTourLabel?: string;
}

export default function PlatformTourGuide({
  isOpen,
  onClose,
  onComplete,
  steps = JHS_PORTAL_TOUR_STEPS,
  nextTourUrl,
  nextTourLabel = 'Explore JHS Study Portal Tour →',
}: PlatformTourGuideProps) {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [tooltipPos, setTooltipPos] = useState<{
    top: number;
    left: number;
    arrowLeft: number;
    placement: 'top' | 'bottom';
  } | null>(null);
  const [highlightRect, setHighlightRect] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  } | null>(null);

  const tooltipRef = useRef<HTMLDivElement>(null);
  const step = steps[currentStepIdx] || steps[0];

  const updatePosition = useCallback(() => {
    if (!isOpen || !step) {
      setTooltipPos(null);
      setHighlightRect(null);
      return;
    }

    const el = document.getElementById(step.targetId);
    if (!el) {
      setTooltipPos(null);
      setHighlightRect(null);
      return;
    }

    const rect = el.getBoundingClientRect();

    // Use fixed viewport coordinates with a 6px safety padding
    const pad = 6;
    const hTop = Math.max(4, rect.top - pad);
    const hLeft = Math.max(4, rect.left - pad);
    const hWidth = Math.min(window.innerWidth - hLeft - 4, rect.width + pad * 2);
    const hHeight = rect.height + pad * 2;

    setHighlightRect({
      top: hTop,
      left: hLeft,
      width: hWidth,
      height: hHeight,
    });

    const tooltipWidth = Math.min(420, window.innerWidth - 32);
    const tooltipHeight = 220;

    const spaceBelow = window.innerHeight - (rect.bottom + 16);
    const spaceAbove = rect.top - 16;
    const placeBelow = spaceBelow >= tooltipHeight || spaceBelow >= spaceAbove;

    let topPos: number;
    if (placeBelow) {
      topPos = Math.min(window.innerHeight - tooltipHeight - 16, rect.bottom + 16);
    } else {
      topPos = Math.max(16, rect.top - tooltipHeight - 16);
    }

    let leftPos = rect.left + (rect.width - tooltipWidth) / 2;
    leftPos = Math.max(16, Math.min(window.innerWidth - tooltipWidth - 16, leftPos));

    // Pointer arrow relative to tooltip card
    const targetCenterX = rect.left + rect.width / 2;
    const arrowLeft = Math.max(24, Math.min(tooltipWidth - 32, targetCenterX - leftPos - 6));

    setTooltipPos({
      top: topPos,
      left: leftPos,
      arrowLeft,
      placement: placeBelow ? 'bottom' : 'top',
    });
  }, [isOpen, step]);

  // Scroll target element into view smoothly when step changes
  useEffect(() => {
    if (!isOpen || !step) return;

    const el = document.getElementById(step.targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const t1 = setTimeout(updatePosition, 120);
      const t2 = setTimeout(updatePosition, 350);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      updatePosition();
    }
  }, [isOpen, currentStepIdx, step, updatePosition]);

  // Continuous listener for scroll and resize
  useEffect(() => {
    if (isOpen) {
      updatePosition();
      window.addEventListener('resize', updatePosition);
      window.addEventListener('scroll', updatePosition, { passive: true });
      return () => {
        window.removeEventListener('resize', updatePosition);
        window.removeEventListener('scroll', updatePosition);
      };
    }
  }, [isOpen, currentStepIdx, updatePosition]);

  // Reset step index on open
  useEffect(() => {
    if (isOpen) {
      setCurrentStepIdx(0);
    }
  }, [isOpen]);

  // Keyboard navigation (Esc, ArrowRight, ArrowLeft)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        if (currentStepIdx < steps.length - 1) {
          setCurrentStepIdx((prev) => prev + 1);
        } else {
          onClose();
          onComplete?.();
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentStepIdx > 0) {
          setCurrentStepIdx((prev) => prev - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentStepIdx, steps.length, onClose, onComplete]);

  if (!isOpen || !step) return null;

  const handleNext = () => {
    if (currentStepIdx < steps.length - 1) {
      setCurrentStepIdx((prev) => prev + 1);
    } else {
      onClose();
      onComplete?.();
    }
  };

  const handlePrev = () => {
    if (currentStepIdx > 0) {
      setCurrentStepIdx((prev) => prev - 1);
    }
  };

  const isLastStep = currentStepIdx === steps.length - 1;

  return (
    <>
      {/* 1. Frosted Glass Blur Mask that blurs the entire website EXCEPT the spotlighted function */}
      {highlightRect && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-md pointer-events-none transition-all duration-300"
          style={{
            maskImage: `radial-gradient(ellipse ${highlightRect.width / 2 + 10}px ${
              highlightRect.height / 2 + 10
            }px at ${highlightRect.left + highlightRect.width / 2}px ${
              highlightRect.top + highlightRect.height / 2
            }px, transparent 94%, black 100%)`,
            WebkitMaskImage: `radial-gradient(ellipse ${highlightRect.width / 2 + 10}px ${
              highlightRect.height / 2 + 10
            }px at ${highlightRect.left + highlightRect.width / 2}px ${
              highlightRect.top + highlightRect.height / 2
            }px, transparent 94%, black 100%)`,
          }}
        />
      )}

      {/* 2. Darkening SVG Cutout Mask that dims everything EXCEPT the spotlighted function */}
      {highlightRect ? (
        <svg
          className="fixed inset-0 z-40 w-full h-full pointer-events-none transition-all duration-300"
          style={{ width: '100vw', height: '100vh' }}
        >
          <defs>
            <mask id="tour-spotlight-mask">
              <rect width="100%" height="100%" fill="white" />
              <rect
                x={highlightRect.left}
                y={highlightRect.top}
                width={highlightRect.width}
                height={highlightRect.height}
                rx="16"
                ry="16"
                fill="black"
              />
            </mask>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="rgba(15, 23, 42, 0.74)"
            mask="url(#tour-spotlight-mask)"
          />
        </svg>
      ) : (
        /* Fallback dark blur backdrop if target element is not found */
        <div
          className="fixed inset-0 z-40 bg-slate-950/75 backdrop-blur-md transition-opacity duration-300 pointer-events-auto"
          onClick={onClose}
        />
      )}

      {/* 3. Clickable backdrop overlay outside to advance or close */}
      <div
        className="fixed inset-0 z-40 cursor-pointer pointer-events-auto"
        onClick={handleNext}
        title="Click to next step"
      />

      {/* 4. Glowing animated pinpoint ring right on the function */}
      {highlightRect && (
        <div
          style={{
            position: 'fixed',
            top: highlightRect.top,
            left: highlightRect.left,
            width: highlightRect.width,
            height: highlightRect.height,
          }}
          className="z-50 pointer-events-none rounded-2xl ring-4 ring-blue-500 ring-offset-2 ring-offset-transparent shadow-[0_0_35px_rgba(59,130,246,0.7)] animate-pulse transition-all duration-200"
        />
      )}

      {/* 5. FLOATING TOOLTIP EXPLANATION CARD */}
      {tooltipPos && (
        <div
          ref={tooltipRef}
          style={{
            position: 'fixed',
            top: tooltipPos.top,
            left: tooltipPos.left,
            width: Math.min(420, window.innerWidth - 32),
          }}
          className="z-50 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-2xl shadow-slate-950/40 transition-all duration-200 animate-in fade-in zoom-in-95 pointer-events-auto"
        >
          {/* Directional pointer arrow pointing straight at the pinpointed function */}
          <div
            style={{ left: tooltipPos.arrowLeft }}
            className={`absolute w-3.5 h-3.5 bg-white border-slate-200 rotate-45 ${
              tooltipPos.placement === 'bottom'
                ? '-top-2 border-t border-l'
                : '-bottom-2 border-b border-r'
            }`}
          />

          {/* Header Row: Step Badge + Title + Close Button */}
          <div className="flex items-center justify-between gap-3 mb-2.5">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/80 uppercase tracking-wide">
                Step {step.stepNumber} of {steps.length}
              </span>
              <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3" />
                Live Feature
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Close Guide (Esc)"
              aria-label="Close Guide"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Function Title */}
          <h3 className="text-base font-extrabold text-slate-900 tracking-tight flex items-center gap-1.5 mb-1.5">
            <Compass className="w-4 h-4 text-blue-600 shrink-0" />
            <span>{step.title}</span>
          </h3>

          {/* Detailed Function Explanation */}
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
            {step.text}
          </p>

          {/* Pro-Tip Box */}
          {step.tip && (
            <div className="mt-3 p-2.5 rounded-xl bg-blue-50/80 border border-blue-100 text-[11px] text-blue-900 flex items-start gap-2">
              <Lightbulb className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
              <span className="leading-snug">
                <strong className="font-semibold text-blue-950">Pro-Tip: </strong>
                {step.tip}
              </span>
            </div>
          )}

          {/* Footer Controls: Dots Indicator & Prev/Next Buttons */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-3 flex-wrap">
            {/* Step Dots */}
            <div className="flex items-center gap-1">
              {steps.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentStepIdx(i)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    i === currentStepIdx
                      ? 'w-5 bg-blue-600'
                      : i < currentStepIdx
                      ? 'w-2 bg-blue-200'
                      : 'w-2 bg-slate-200'
                  }`}
                  title={`Go to step ${i + 1}`}
                  aria-label={`Go to step ${i + 1}`}
                />
              ))}
            </div>

            {/* Back / Next / Finish / Explore Buttons */}
            <div className="flex items-center gap-2">
              {currentStepIdx > 0 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              )}

              {isLastStep && nextTourUrl ? (
                <a
                  href={nextTourUrl}
                  onClick={onClose}
                  className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-md shadow-blue-500/20"
                >
                  <span>{nextTourLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-md shadow-blue-500/20"
                >
                  <span>{isLastStep ? 'Complete Tour' : 'Next'}</span>
                  {isLastStep ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5" />
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
