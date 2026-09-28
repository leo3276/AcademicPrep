'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowRight, ArrowLeft, X, Check } from 'lucide-react';

export interface GuideStep {
  id: string;
  targetId: string;
  stepNumber: number;
  title: string;
  text: string;
  tip?: string;
}

const GUIDE_STEPS: GuideStep[] = [
  {
    id: 'name',
    targetId: 'guide-step-name',
    stepNumber: 1,
    title: 'Full Name',
    text: 'Enter your name as you would like it to appear on your quiz scorecards and the leaderboard.',
    tip: 'e.g. Kwame Mensah',
  },
  {
    id: 'phone',
    targetId: 'guide-step-phone',
    stepNumber: 2,
    title: 'Phone Number',
    text: 'Enter your 10-digit Ghana mobile number. This is your Student ID to sign in from any phone or computer.',
    tip: 'e.g. 0241234567 (no country code needed)',
  },
  {
    id: 'level',
    targetId: 'guide-step-level',
    stepNumber: 3,
    title: 'Class Level',
    text: 'Select your current grade (JHS 1, JHS 2, or JHS 3) to load the appropriate NaCCA syllabus topics.',
  },
  {
    id: 'password',
    targetId: 'guide-step-pass',
    stepNumber: 4,
    title: 'Password or PIN',
    text: 'Create a memorable 4-digit PIN (such as 1234) or a password so you can sign back in anytime.',
    tip: 'Pick something simple and easy to remember.',
  },
  {
    id: 'access',
    targetId: 'guide-step-access',
    stepNumber: 5,
    title: 'Access PIN (Optional)',
    text: 'If you have an Access Pass voucher from your school or merchant, enter it here. Otherwise, leave this blank to start your Free Trial.',
    tip: 'Leave empty if you do not have a card yet.',
  },
  {
    id: 'submit',
    targetId: 'guide-step-submit',
    stepNumber: 6,
    title: 'Complete Registration',
    text: 'Tap this button to create your account and begin your first lesson!',
  },
];

interface OnboardingGuideProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: 'signin' | 'register';
}

export default function OnboardingGuide({
  isOpen,
  onClose,
  activeTab
}: OnboardingGuideProps) {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [tooltipPos, setTooltipPos] = useState<{
    top: number;
    left: number;
    placement: 'top' | 'bottom';
  } | null>(null);
  const [highlightRect, setHighlightRect] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  } | null>(null);

  const tooltipRef = useRef<HTMLDivElement>(null);
  const step = GUIDE_STEPS[currentStepIdx];

  const updatePosition = useCallback(() => {
    if (!isOpen || activeTab !== 'register' || !step) {
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
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    // Highlight area around the target input
    setHighlightRect({
      top: rect.top + scrollY - 4,
      left: rect.left + scrollX - 4,
      width: rect.width + 8,
      height: rect.height + 8,
    });

    // Tooltip dimensions (approximate or measured)
    const tooltipWidth = Math.min(360, window.innerWidth - 32);
    const tooltipHeight = 160;

    // Decide whether to place tooltip below or above the target so it NEVER covers it
    const spaceBelow = window.innerHeight - rect.bottom;
    const placeBelow = spaceBelow >= tooltipHeight + 20 || rect.top < tooltipHeight + 20;

    let topPos: number;
    if (placeBelow) {
      topPos = rect.bottom + scrollY + 12; // 12px gap below input
    } else {
      topPos = rect.top + scrollY - tooltipHeight - 12; // 12px gap above input
    }

    // Horizontal alignment centered with target, bounded by viewport
    let leftPos = rect.left + scrollX + (rect.width - tooltipWidth) / 2;
    leftPos = Math.max(16, Math.min(window.innerWidth - tooltipWidth - 16, leftPos));

    setTooltipPos({
      top: topPos,
      left: leftPos,
      placement: placeBelow ? 'bottom' : 'top',
    });

    // Smooth scroll if element is not comfortably in view
    const viewportHeight = window.innerHeight;
    const targetMiddle = rect.top + scrollY;
    const desiredScroll = placeBelow 
      ? Math.max(0, targetMiddle - 140)
      : Math.max(0, targetMiddle - tooltipHeight - 160);

    if (Math.abs(window.scrollY - desiredScroll) > 80) {
      window.scrollTo({ top: desiredScroll, behavior: 'smooth' });
    }
  }, [isOpen, activeTab, step]);

  useEffect(() => {
    if (isOpen && activeTab === 'register') {
      updatePosition();
      const timer = setTimeout(updatePosition, 120);
      window.addEventListener('resize', updatePosition);
      window.addEventListener('scroll', updatePosition);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', updatePosition);
        window.removeEventListener('scroll', updatePosition);
      };
    }
  }, [isOpen, activeTab, currentStepIdx, updatePosition]);

  if (!isOpen || activeTab !== 'register') return null;

  const handleNext = () => {
    if (currentStepIdx < GUIDE_STEPS.length - 1) {
      setCurrentStepIdx(prev => prev + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentStepIdx > 0) {
      setCurrentStepIdx(prev => prev - 1);
    }
  };

  return (
    <>
      {/* Light, non-intrusive backdrop */}
      <div 
        className="fixed inset-0 z-30 bg-slate-900/20 backdrop-blur-[1px] transition-opacity duration-200 pointer-events-auto"
        onClick={onClose}
      />

      {/* Target Field Subtle Highlight Ring (pointer-events-none so input is 100% clickable) */}
      {highlightRect && (
        <div
          style={{
            position: 'absolute',
            top: highlightRect.top,
            left: highlightRect.left,
            width: highlightRect.width,
            height: highlightRect.height,
          }}
          className="z-40 pointer-events-none rounded-2xl ring-2 ring-blue-600 ring-offset-2 ring-offset-white shadow-md shadow-blue-500/10 transition-all duration-200"
        />
      )}

      {/* MINIMALIST FLOATING TOOLTIP CARD */}
      {tooltipPos && (
        <div
          ref={tooltipRef}
          style={{
            position: 'absolute',
            top: tooltipPos.top,
            left: tooltipPos.left,
            width: Math.min(360, window.innerWidth - 32),
          }}
          className="z-50 bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xl shadow-slate-900/10 transition-all duration-200 animate-in fade-in zoom-in-95 pointer-events-auto"
        >
          {/* Subtle Pointer Arrow pointing to the input */}
          <div 
            className={`absolute left-8 w-3 h-3 bg-white border-slate-200 rotate-45 ${
              tooltipPos.placement === 'bottom'
                ? '-top-1.5 border-t border-l'
                : '-bottom-1.5 border-b border-r'
            }`}
          />

          {/* Header Row: Step Badge + Small 'X' Close Button */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                Step {step.stepNumber} of {GUIDE_STEPS.length}
              </span>
              <h4 className="text-xs font-bold text-slate-900">
                {step.title}
              </h4>
            </div>

            {/* Small 'x' button to close */}
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Close guide"
              aria-label="Close guide"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Concise Helper Text */}
          <p className="text-xs text-slate-600 leading-relaxed">
            {step.text}
          </p>

          {step.tip && (
            <p className="text-[11px] text-slate-400 mt-1.5 font-medium">
              Tip: {step.tip}
            </p>
          )}

          {/* Action Row */}
          <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-1">
              {GUIDE_STEPS.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all ${
                    i === currentStepIdx
                      ? 'w-4 bg-blue-600'
                      : i < currentStepIdx
                      ? 'w-1.5 bg-slate-300'
                      : 'w-1.5 bg-slate-200'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              {currentStepIdx > 0 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100 transition cursor-pointer"
                >
                  Back
                </button>
              )}

              <button
                type="button"
                onClick={handleNext}
                className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition flex items-center gap-1 cursor-pointer shadow-xs"
              >
                <span>{currentStepIdx === GUIDE_STEPS.length - 1 ? 'Done' : 'Next'}</span>
                {currentStepIdx === GUIDE_STEPS.length - 1 ? (
                  <Check className="w-3 h-3" />
                ) : (
                  <ArrowRight className="w-3 h-3" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
