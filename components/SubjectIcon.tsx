'use client';

import React from 'react';
import {
  Calculator,
  FlaskConical,
  BookOpen,
  Globe2,
  Cpu,
  HeartHandshake,
  Languages,
  BookA,
  Wrench,
} from 'lucide-react';

interface SubjectIconProps {
  subjectId: string;
  className?: string;
}

export function renderSubjectIcon(subjectId: string, className = "w-6 h-6"): React.ReactNode {
  switch (subjectId) {
    case 'math':
      return <Calculator className={className} />;
    case 'science':
      return <FlaskConical className={className} />;
    case 'english':
      return <BookOpen className={className} />;
    case 'social':
      return <Globe2 className={className} />;
    case 'ict':
      return <Cpu className={className} />;
    case 'rme':
      return <HeartHandshake className={className} />;
    case 'french':
      return <Languages className={className} />;
    case 'twi':
      return <BookA className={className} />;
    case 'career-tech':
      return <Wrench className={className} />;
    default:
      return <BookOpen className={className} />;
  }
}

export default function SubjectIcon({ subjectId, className = "w-6 h-6" }: SubjectIconProps) {
  return <>{renderSubjectIcon(subjectId, className)}</>;
}
