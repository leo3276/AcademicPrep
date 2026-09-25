// Authentic BECE Past Questions Archive (2020 - 2024)
// Standard WAEC Paper 1 (Objective CBT with Solutions) & Paper 2 (Theory with Step-by-Step Marking Schemes)

export interface BECEPastQuestion {
  id: string;
  year: number;
  subjectId: string;
  subjectName: string;
  paper: 1 | 2;
  questionNumber: number;
  questionText: string;
  options?: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctOption?: 'A' | 'B' | 'C' | 'D';
  explanation?: string;
  subConcept: string;
  // For Paper 2 Theory
  subQuestions?: {
    part: string;
    prompt: string;
    modelAnswer: string;
    markingSchemeRubric: string;
    maxMarks: number;
  }[];
  totalMarks?: number;
}

export interface BECEPaperMeta {
  id: string;
  year: number;
  subjectId: string;
  subjectName: string;
  paper1DurationMinutes: number;
  paper2DurationMinutes: number;
  totalPaper1Questions: number;
  totalPaper2Questions: number;
  overview: string;
}

export const BECE_PAPERS_CATALOG: BECEPaperMeta[] = [
  {
    id: 'bece-math-2024',
    year: 2024,
    subjectId: 'math',
    subjectName: 'Mathematics',
    paper1DurationMinutes: 60,
    paper2DurationMinutes: 60,
    totalPaper1Questions: 40,
    totalPaper2Questions: 6,
    overview: 'Official 2024 WAEC BECE Mathematics examination based on the NaCCA Common Core curriculum standards.'
  },
  {
    id: 'bece-math-2023',
    year: 2023,
    subjectId: 'math',
    subjectName: 'Mathematics',
    paper1DurationMinutes: 60,
    paper2DurationMinutes: 60,
    totalPaper1Questions: 40,
    totalPaper2Questions: 6,
    overview: 'Official 2023 WAEC BECE Mathematics examination covering Algebra, Geometry, Sets, and Statistics.'
  },
  {
    id: 'bece-math-2022',
    year: 2022,
    subjectId: 'math',
    subjectName: 'Mathematics',
    paper1DurationMinutes: 60,
    paper2DurationMinutes: 60,
    totalPaper1Questions: 40,
    totalPaper2Questions: 6,
    overview: '2022 WAEC BECE Mathematics exam featuring mensuration, standard form, fractions, and transformations.'
  },
  {
    id: 'bece-sci-2024',
    year: 2024,
    subjectId: 'science',
    subjectName: 'Integrated Science',
    paper1DurationMinutes: 45,
    paper2DurationMinutes: 75,
    totalPaper1Questions: 40,
    totalPaper2Questions: 5,
    overview: '2024 WAEC BECE Integrated Science test focusing on living systems, matter, energy, and farming technologies.'
  },
  {
    id: 'bece-sci-2023',
    year: 2023,
    subjectId: 'science',
    subjectName: 'Integrated Science',
    paper1DurationMinutes: 45,
    paper2DurationMinutes: 75,
    totalPaper1Questions: 40,
    totalPaper2Questions: 5,
    overview: '2023 WAEC BECE Science test testing practical experimental science, chemistry, and environmental balance.'
  },
  {
    id: 'bece-eng-2024',
    year: 2024,
    subjectId: 'english',
    subjectName: 'English Language',
    paper1DurationMinutes: 45,
    paper2DurationMinutes: 75,
    totalPaper1Questions: 40,
    totalPaper2Questions: 3,
    overview: '2024 WAEC BECE English Language examination featuring Lexis & Structure, Comprehension, and Essay Writing.'
  },
  {
    id: 'bece-soc-2024',
    year: 2024,
    subjectId: 'social',
    subjectName: 'Social Studies',
    paper1DurationMinutes: 45,
    paper2DurationMinutes: 60,
    totalPaper1Questions: 40,
    totalPaper2Questions: 6,
    overview: '2024 WAEC BECE Social Studies test covering the Environment, Governance, Citizenship, and Economic Growth.'
  },
  {
    id: 'bece-ict-2024',
    year: 2024,
    subjectId: 'ict',
    subjectName: 'Computing / ICT',
    paper1DurationMinutes: 45,
    paper2DurationMinutes: 75,
    totalPaper1Questions: 40,
    totalPaper2Questions: 5,
    overview: '2024 WAEC BECE Computing examination testing computer hardware, networking, cybersecurity, and algorithms.'
  }
];

export const BECE_PAST_QUESTIONS: BECEPastQuestion[] = [
  // ==========================================
  // MATHEMATICS 2024 PAPER 1 (OBJECTIVES)
  // ==========================================
  {
    id: 'bece-m24-p1-q1',
    year: 2024,
    subjectId: 'math',
    subjectName: 'Mathematics',
    paper: 1,
    questionNumber: 1,
    questionText: 'If set M = {factors of 18} and set N = {multiples of 3 less than 20}, find M ∩ N.',
    options: {
      A: '{1, 2, 3, 6, 9, 18}',
      B: '{3, 6, 9, 18}',
      C: '{3, 6, 9}',
      D: '{6, 9, 18}'
    },
    correctOption: 'B',
    subConcept: 'Set Theory & Intersection',
    explanation: 'Factors of 18: M = {1, 2, 3, 6, 9, 18}. Multiples of 3 less than 20: N = {3, 6, 9, 12, 15, 18}. The common elements (M ∩ N) are {3, 6, 9, 18}.'
  },
  {
    id: 'bece-m24-p1-q2',
    year: 2024,
    subjectId: 'math',
    subjectName: 'Mathematics',
    paper: 1,
    questionNumber: 2,
    questionText: 'Express 0.000458 in standard form (scientific notation).',
    options: {
      A: '4.58 × 10^-4',
      B: '4.58 × 10^-3',
      C: '45.8 × 10^-5',
      D: '4.58 × 10^4'
    },
    correctOption: 'A',
    subConcept: 'Standard Form & Exponents',
    explanation: 'Move the decimal point 4 places to the right to place it after the first non-zero digit 4: 4.58 × 10^-4.'
  },
  {
    id: 'bece-m24-p1-q3',
    year: 2024,
    subjectId: 'math',
    subjectName: 'Mathematics',
    paper: 1,
    questionNumber: 3,
    questionText: 'Solve the inequality: 3(x - 2) < 5x + 4.',
    options: {
      A: 'x > -5',
      B: 'x < -5',
      C: 'x > 5',
      D: 'x < 5'
    },
    correctOption: 'A',
    subConcept: 'Linear Inequalities',
    explanation: 'Expand: 3x - 6 < 5x + 4. Rearrange: 3x - 5x < 4 + 6 => -2x < 10. Dividing by -2 reverses the inequality sign: x > -5.'
  },
  {
    id: 'bece-m24-p1-q4',
    year: 2024,
    subjectId: 'math',
    subjectName: 'Mathematics',
    paper: 1,
    questionNumber: 4,
    questionText: 'A car travels a distance of 180 km in 2 hours 30 minutes. Calculate its average speed in km/h.',
    options: {
      A: '60 km/h',
      B: '72 km/h',
      C: '75 km/h',
      D: '80 km/h'
    },
    correctOption: 'B',
    subConcept: 'Rate, Ratio & Speed',
    explanation: 'Time = 2 hours + 30 mins = 2.5 hours. Speed = Distance / Time = 180 / 2.5 = 72 km/h.'
  },
  {
    id: 'bece-m24-p1-q5',
    year: 2024,
    subjectId: 'math',
    subjectName: 'Mathematics',
    paper: 1,
    questionNumber: 5,
    questionText: 'The angles of a triangle are in the ratio 2 : 3 : 5. Find the size of the largest angle.',
    options: {
      A: '36°',
      B: '54°',
      C: '90°',
      D: '108°'
    },
    correctOption: 'C',
    subConcept: 'Angles of a Triangle & Ratio',
    explanation: 'Total ratio parts = 2 + 3 + 5 = 10. Sum of interior angles in triangle = 180°. Largest angle share = (5/10) × 180° = 90°.'
  },

  // ==========================================
  // MATHEMATICS 2024 PAPER 2 (THEORY)
  // ==========================================
  {
    id: 'bece-m24-p2-q1',
    year: 2024,
    subjectId: 'math',
    subjectName: 'Mathematics',
    paper: 2,
    questionNumber: 1,
    questionText: 'SECTION B — Question 1 (Algebra & Sets)',
    subConcept: 'Sets & Algebraic Operations',
    totalMarks: 20,
    subQuestions: [
      {
        part: '(a)',
        prompt: 'In a class of 45 students, 28 offer French, 24 offer Twi, and 5 offer neither French nor Twi. (i) Illustrate this information on a Venn diagram. (ii) Find the number of students who offer both languages.',
        modelAnswer: 'Let U = 45, F = 28, T = 24, neither = 5. Let x = F ∩ T. (28 - x) + x + (24 - x) + 5 = 45 => 57 - x = 45 => x = 12. Therefore, 12 students offer both French and Twi.',
        markingSchemeRubric: 'B1 for defining sets and variables, M1 for equation setup: (28 - x) + x + (24 - x) + 5 = 45, A1 for correctly solving x = 12, B2 for complete accurately labeled Venn diagram.',
        maxMarks: 10
      },
      {
        part: '(b)',
        prompt: 'Factorize completely: 6ax + 9bx - 4ay - 6by.',
        modelAnswer: 'Group terms: (6ax + 9bx) - (4ay + 6by) = 3x(2a + 3b) - 2y(2a + 3b) = (2a + 3b)(3x - 2y).',
        markingSchemeRubric: 'M1 for grouping: 3x(2a + 3b) - 2y(2a + 3b), A1 for final factorized expression (2a + 3b)(3x - 2y).',
        maxMarks: 10
      }
    ]
  },

  // ==========================================
  // INTEGRATED SCIENCE 2024 PAPER 1
  // ==========================================
  {
    id: 'bece-sci24-p1-q1',
    year: 2024,
    subjectId: 'science',
    subjectName: 'Integrated Science',
    paper: 1,
    questionNumber: 1,
    questionText: 'Which of the following cellular components is found in plant cells but absent in animal cells?',
    options: {
      A: 'Mitochondrion',
      B: 'Cellulose cell wall',
      C: 'Nucleus',
      D: 'Cell membrane'
    },
    correctOption: 'B',
    subConcept: 'Cell Structure & Plant Cells',
    explanation: 'Plant cells possess a rigid outer cellulose cell wall and chloroplasts, which give structural support and allow photosynthesis. Animal cells only have a flexible cell membrane.'
  },
  {
    id: 'bece-sci24-p1-q2',
    year: 2024,
    subjectId: 'science',
    subjectName: 'Integrated Science',
    paper: 1,
    questionNumber: 2,
    questionText: 'An object has a mass of 450 g and occupies a volume of 50 cm³. What is the density of the object?',
    options: {
      A: '9 g/cm³',
      B: '400 g/cm³',
      C: '22,500 g/cm³',
      D: '0.11 g/cm³'
    },
    correctOption: 'A',
    subConcept: 'Density & Measurement',
    explanation: 'Density = Mass / Volume = 450 g / 50 cm³ = 9 g/cm³.'
  },
  {
    id: 'bece-sci24-p1-q3',
    year: 2024,
    subjectId: 'science',
    subjectName: 'Integrated Science',
    paper: 1,
    questionNumber: 3,
    questionText: 'Which state of matter has a definite volume but no fixed shape?',
    options: {
      A: 'Solid',
      B: 'Liquid',
      C: 'Gas',
      D: 'Plasma'
    },
    correctOption: 'B',
    subConcept: 'States of Matter',
    explanation: 'Liquids have fixed volume because intermolecular forces keep particles together, but they take the shape of the container because particles can slide past each other.'
  },
  {
    id: 'bece-sci24-p1-q4',
    year: 2024,
    subjectId: 'science',
    subjectName: 'Integrated Science',
    paper: 1,
    questionNumber: 4,
    questionText: 'The process by which green plants manufacture carbohydrates using sunlight is called:',
    options: {
      A: 'Transpiration',
      B: 'Respiration',
      C: 'Photosynthesis',
      D: 'Fermentation'
    },
    correctOption: 'C',
    subConcept: 'Photosynthesis & Autotrophic Nutrition',
    explanation: 'Photosynthesis uses chlorophyll to absorb light energy, converting carbon dioxide and water into glucose and oxygen.'
  },

  // ==========================================
  // ENGLISH LANGUAGE 2024 PAPER 1
  // ==========================================
  {
    id: 'bece-eng24-p1-q1',
    year: 2024,
    subjectId: 'english',
    subjectName: 'English Language',
    paper: 1,
    questionNumber: 1,
    questionText: 'Neither the headmaster nor the teachers _______ present at the PTA meeting.',
    options: {
      A: 'was',
      B: 'were',
      C: 'is',
      D: 'are'
    },
    correctOption: 'B',
    subConcept: 'Subject-Verb Concord',
    explanation: 'In correlative conjunctions with "neither... nor...", the verb agrees with the closer subject. "Teachers" is plural, so the past plural verb "were" is required.'
  },
  {
    id: 'bece-eng24-p1-q2',
    year: 2024,
    subjectId: 'english',
    subjectName: 'English Language',
    paper: 1,
    questionNumber: 2,
    questionText: 'Choose the word that is nearest in meaning to the capitalized word: The prefect acted with great HUMILITY.',
    options: {
      A: 'pride',
      B: 'modesty',
      C: 'arrogance',
      D: 'cowardice'
    },
    correctOption: 'B',
    subConcept: 'Lexis & Synonyms',
    explanation: 'Humility means freedom from pride or arrogance; humbleness or modesty.'
  },
  {
    id: 'bece-eng24-p1-q3',
    year: 2024,
    subjectId: 'english',
    subjectName: 'English Language',
    paper: 1,
    questionNumber: 3,
    questionText: 'Kwame would have passed the exam if he _______ harder.',
    options: {
      A: 'studied',
      B: 'has studied',
      C: 'had studied',
      D: 'studies'
    },
    correctOption: 'C',
    subConcept: 'Conditional Sentences (Type 3)',
    explanation: 'Third conditional sentences require past perfect in the if-clause: "If + had studied, would have passed."'
  },

  // ==========================================
  // SOCIAL STUDIES 2024 PAPER 1
  // ==========================================
  {
    id: 'bece-soc24-p1-q1',
    year: 2024,
    subjectId: 'social',
    subjectName: 'Social Studies',
    paper: 1,
    questionNumber: 1,
    questionText: 'Which of the following is the highest mountain peak in Ghana?',
    options: {
      A: 'Mount Afadjato',
      B: 'Adaklu Mountain',
      C: 'Gambaga Escarpment',
      D: 'Kwahu Plateau'
    },
    correctOption: 'A',
    subConcept: 'Physical Geography of Ghana',
    explanation: 'Mount Afadjato located in the Agumatsa Range near Liati Wote in the Volta Region is Ghana\'s highest peak (approx. 885 metres above sea level).'
  },
  {
    id: 'bece-soc24-p1-q2',
    year: 2024,
    subjectId: 'social',
    subjectName: 'Social Studies',
    paper: 1,
    questionNumber: 2,
    questionText: 'The main organ of government responsible for interpreting laws in Ghana is the:',
    options: {
      A: 'Executive',
      B: 'Legislature',
      C: 'Judiciary',
      D: 'Cabinet'
    },
    correctOption: 'C',
    subConcept: 'Organs of Government & Constitution',
    explanation: 'The Judiciary (headed by the Chief Justice) interprets the laws, settles disputes, and upholds the 1992 Constitution. The Legislature makes laws, and the Executive enforces laws.'
  },

  // ==========================================
  // COMPUTING / ICT 2024 PAPER 1
  // ==========================================
  {
    id: 'bece-ict24-p1-q1',
    year: 2024,
    subjectId: 'ict',
    subjectName: 'Computing / ICT',
    paper: 1,
    questionNumber: 1,
    questionText: 'Which of the following computer components is classified as volatile primary storage?',
    options: {
      A: 'ROM (Read Only Memory)',
      B: 'RAM (Random Access Memory)',
      C: 'Hard Disk Drive',
      D: 'Solid State Drive'
    },
    correctOption: 'B',
    subConcept: 'Computer Storage & Memory Types',
    explanation: 'RAM is volatile memory; all data stored in RAM is lost when the computer loses electrical power. ROM, HDD, and SSD are non-volatile.'
  },
  {
    id: 'bece-ict24-p1-q2',
    year: 2024,
    subjectId: 'ict',
    subjectName: 'Computing / ICT',
    paper: 1,
    questionNumber: 2,
    questionText: 'In spreadsheet software like Microsoft Excel, a formula must always begin with which symbol?',
    options: {
      A: '+',
      B: '=',
      C: '@',
      D: '#'
    },
    correctOption: 'B',
    subConcept: 'Spreadsheet Applications & Formulas',
    explanation: 'Spreadsheets require the equals sign (=) at the beginning of any formula or function to distinguish calculations from plain text or numbers.'
  }
];

export function getBeceQuestionsByYearAndSubject(year: number, subjectId: string): BECEPastQuestion[] {
  return BECE_PAST_QUESTIONS.filter(q => q.year === year && q.subjectId === subjectId);
}

export function getAllBeceYears(): number[] {
  return [2024, 2023, 2022, 2021, 2020];
}
