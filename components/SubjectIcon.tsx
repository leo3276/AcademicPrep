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
  TrendingUp,
  Briefcase,
  Receipt,
  Coins,
  Library,
  Landmark,
  Compass,
  Scale,
  Cross,
  Sprout,
  Wheat,
  Fish,
  Trees,
  Palette,
  Camera,
  Scissors,
  Dna,
  Zap,
  Layers,
  Image,
} from 'lucide-react';

interface SubjectIconProps {
  subjectId: string;
  className?: string;
}

export function renderSubjectIcon(subjectId: string, className = "w-6 h-6"): React.ReactNode {
  switch (subjectId) {
    // JHS & SHS Core
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

    // SHS General Science & Elective Math
    case 'physics':
      return <Zap className={className} />;
    case 'chemistry':
      return <FlaskConical className={className} />;
    case 'biology':
      return <Dna className={className} />;
    case 'elective-maths':
      return <Calculator className={className} />;

    // SHS Business
    case 'financial-accounting':
      return <Receipt className={className} />;
    case 'business-management':
      return <Briefcase className={className} />;
    case 'costing':
      return <Coins className={className} />;
    case 'economics':
      return <TrendingUp className={className} />;

    // SHS General Arts
    case 'literature':
      return <Library className={className} />;
    case 'history':
      return <Landmark className={className} />;
    case 'geography':
      return <Compass className={className} />;
    case 'crs':
      return <Cross className={className} />;
    case 'government':
      return <Scale className={className} />;

    // SHS Agriculture
    case 'general-agriculture':
      return <Sprout className={className} />;
    case 'crop-husbandry':
      return <Wheat className={className} />;
    case 'animal-husbandry':
      return <Sprout className={className} />;
    case 'fish-farming':
      return <Fish className={className} />;
    case 'forestry':
      return <Trees className={className} />;

    // SHS Visual Arts
    case 'graphic-drawing':
      return <Palette className={className} />;
    case 'picture-crafting':
      return <Image className={className} />;
    case 'textiles':
      return <Scissors className={className} />;
    case 'ceramics':
      return <Layers className={className} />;
    case 'photography':
      return <Camera className={className} />;

    default:
      return <BookOpen className={className} />;
  }
}

export default function SubjectIcon({ subjectId, className = "w-6 h-6" }: SubjectIconProps) {
  return <>{renderSubjectIcon(subjectId, className)}</>;
}
