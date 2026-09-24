import { CurriculumSubject, CurriculumTopic } from './types';
import { TOPIC_DETAILED_NOTES } from './curriculumDetailedNotes';

export const CURRICULUM_SUBJECTS: CurriculumSubject[] = [
  {
    id: 'math',
    name: 'Mathematics',
    code: 'MATH',
    icon: 'Calculator',
    color: 'from-blue-600 to-indigo-700',
    displayOrder: 1,
  },
  {
    id: 'science',
    name: 'Integrated Science',
    code: 'SCI',
    icon: 'FlaskConical',
    color: 'from-emerald-600 to-teal-700',
    displayOrder: 2,
  },
  {
    id: 'english',
    name: 'English Language',
    code: 'ENG',
    icon: 'BookOpen',
    color: 'from-amber-600 to-orange-700',
    displayOrder: 3,
  },
  {
    id: 'social',
    name: 'Social Studies',
    code: 'SOC',
    icon: 'Globe2',
    color: 'from-purple-600 to-pink-700',
    displayOrder: 4,
  },
  {
    id: 'ict',
    name: 'Computing / ICT',
    code: 'ICT',
    icon: 'Cpu',
    color: 'from-cyan-600 to-blue-700',
    displayOrder: 5,
  },
  {
    id: 'rme',
    name: 'Religious & Moral Education',
    code: 'RME',
    icon: 'HeartHandshake',
    color: 'from-rose-600 to-red-700',
    displayOrder: 6,
  },
];

const BASE_JHS_TOPICS: CurriculumTopic[] = [
  // ==========================================
  // JHS 1 - MATHEMATICS
  // ==========================================
  // ==========================================
  // JHS 1 - MATHEMATICS (Full Curriculum + VIP)
  // ==========================================
  {
    id: 'jhs1-math-t1-sets',
    subjectId: 'math',
    level: 'JHS 1',
    term: 1,
    orderIndex: 1,
    title: 'Sets and Operations on Sets',
    description: 'Master set notation, types of sets, union, intersection, and Venn diagrams.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=tyDN4pXkYCY',
    youtubeId: 'tyDN4pXkYCY',
    keyNotes: `A set is a well-defined collection of distinct objects or elements.
• Empty / Null Set: A set with no elements, denoted by ∅ or {}.
• Finite Set: Elements can be counted (e.g., factors of 12 = {1, 2, 3, 4, 6, 12}).
• Infinite Set: Elements are endless (e.g., set of prime numbers = {2, 3, 5, 7, 11, ...}).
• Union of Sets (A ∪ B): The set of all elements belonging to set A, set B, or both.
• Intersection of Sets (A ∩ B): The set of elements that are common to both A and B.
• Subset (A ⊆ B): Every element in A is also present in set B.
• Universal Set (U): The entire set containing all objects under consideration.`,
    examples: [
      {
        id: 'ex-sets-1',
        title: 'Finding Union and Intersection of Two Sets',
        problem: 'Given the universal set U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, set A = {2, 4, 6, 8, 10} and set B = {4, 5, 6, 7, 8}. Find: (i) A ∩ B (ii) A ∪ B',
        stepByStepSolution: [
          'Step 1: Write down elements of both sets: A = {2, 4, 6, 8, 10} and B = {4, 5, 6, 7, 8}.',
          'Step 2: Identify common elements for Intersection (A ∩ B): The numbers 4, 6, and 8 appear in both sets. Therefore, A ∩ B = {4, 6, 8}.',
          'Step 3: Combine all distinct elements for Union (A ∪ B) without repeating duplicates: 2, 4, 5, 6, 7, 8, 10.',
          'Step 4: Conclude: A ∪ B = {2, 4, 5, 6, 7, 8, 10}.',
        ],
        keyTakeaway: 'Intersection means "AND" (common items only). Union means "OR" (combine everything, no duplicates).',
      },
      {
        id: 'ex-sets-2',
        title: 'Two-Set Venn Diagram Problem',
        problem: 'In a class of 30 students, 18 play Football (F), 14 play Volleyball (V), and 6 play both games. How many students play neither game?',
        stepByStepSolution: [
          'Step 1: Identify given quantities: Total n(U) = 30, n(F ∩ V) = 6 (both games).',
          'Step 2: Find students playing football ONLY: 18 - 6 = 12.',
          'Step 3: Find students playing volleyball ONLY: 14 - 6 = 8.',
          'Step 4: Sum those who play at least one game: (Football Only) + (Both) + (Volleyball Only) = 12 + 6 + 8 = 26.',
          'Step 5: Subtract from total class: Neither = 30 - 26 = 4 students.',
        ],
        keyTakeaway: 'Always subtract the intersection (both) from each circle to find the "only" region first.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-sets',
      topicId: 'jhs1-math-t1-sets',
      title: 'JHS 1 Sets & Operations Mastery Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-sets-1',
          quizId: 'quiz-jhs1-math-sets',
          questionText: 'If A = {2, 4, 6, 8} and B = {4, 8, 12}, find A ∩ B.',
          optionA: '{2, 6, 12}',
          optionB: '{4, 8}',
          optionC: '{2, 4, 6, 8, 12}',
          optionD: '∅',
          correctOption: 'B',
          explanation: 'The intersection (∩) consists of common elements found in both sets: 4 and 8.',
        },
        {
          id: 'q-sets-2',
          quizId: 'quiz-jhs1-math-sets',
          questionText: 'What is the symbol used to denote an empty or null set?',
          optionA: '∪',
          optionB: '∩',
          optionC: '∅',
          optionD: '⊆',
          correctOption: 'C',
          explanation: 'The null or empty set containing zero members is represented by ∅ or {}.',
        },
        {
          id: 'q-sets-3',
          quizId: 'quiz-jhs1-math-sets',
          questionText: 'Given set P = {1, 3, 5} and set Q = {2, 4}, find P ∪ Q.',
          optionA: '{1, 2, 3, 4, 5}',
          optionB: '{1, 3, 5}',
          optionC: '{}',
          optionD: '{2, 4}',
          correctOption: 'A',
          explanation: 'The union (∪) combines all distinct elements from both sets into one single set.',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t2-numberbases',
    subjectId: 'math',
    level: 'JHS 1',
    term: 1,
    orderIndex: 2,
    title: 'Number Bases & Binary System (Base 2)',
    description: 'Learn place values in Base 10, converting to and from Base 2 (Binary) and other bases.',
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=5sS7w-CMHkU',
    youtubeId: '5sS7w-CMHkU',
    keyNotes: `Our daily counting uses Base 10 (decimal). Computers and digital circuits use Base 2 (Binary: 0 and 1).
• Place Values in Base 2: 2⁰ = 1, 2¹ = 2, 2² = 4, 2³ = 8, 2⁴ = 16, 2⁵ = 32...
• Converting Base 10 to Base 2: Repeatedly divide by 2 and record the remainders from bottom to top.
• Converting Base 2 to Base 10: Multiply each digit by its corresponding power of 2 and sum the results.
• Rule: In any base 'n', the largest single digit allowed is (n - 1). (e.g., Base 5 only has digits 0, 1, 2, 3, 4).`,
    examples: [
      {
        id: 'ex-bases-1',
        title: 'Converting Decimal (Base 10) to Binary (Base 2)',
        problem: 'Convert the decimal number 25₁₀ to a binary number in base two.',
        stepByStepSolution: [
          'Step 1: Divide 25 by 2: 25 ÷ 2 = 12 remainder 1.',
          'Step 2: Divide 12 by 2: 12 ÷ 2 = 6 remainder 0.',
          'Step 3: Divide 6 by 2: 6 ÷ 2 = 3 remainder 0.',
          'Step 4: Divide 3 by 2: 3 ÷ 2 = 1 remainder 1.',
          'Step 5: Divide 1 by 2: 1 ÷ 2 = 0 remainder 1.',
          'Step 6: Read remainders from bottom to top: 1, 1, 0, 0, 1.',
          'Step 7: Result: 25₁₀ = 11001₂.',
        ],
        keyTakeaway: 'Always read the remainder chain from the bottom (most significant bit) upwards.',
      },
      {
        id: 'ex-bases-2',
        title: 'Converting Binary (Base 2) to Decimal (Base 10)',
        problem: 'Convert the binary number 1101₂ to base ten.',
        stepByStepSolution: [
          'Step 1: Assign power weights from right to left starting at 0: (1 × 2³) + (1 × 2²) + (0 × 2¹) + (1 × 2⁰).',
          'Step 2: Calculate powers: 2³ = 8, 2² = 4, 2¹ = 2, 2⁰ = 1.',
          'Step 3: Multiply: (1 × 8) + (1 × 4) + (0 × 2) + (1 × 1) = 8 + 4 + 0 + 1.',
          'Step 4: Add them up: 8 + 4 + 1 = 13.',
          'Step 5: Result: 1101₂ = 13₁₀.',
        ],
        keyTakeaway: 'Any number raised to power 0 equals 1 (2⁰ = 1).',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-numberbases',
      topicId: 'jhs1-math-t2-numberbases',
      title: 'Number Bases & Binary Diagnostics',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-base-1',
          quizId: 'quiz-jhs1-math-numberbases',
          questionText: 'What is the binary representation of decimal 14₁₀?',
          optionA: '1110₂',
          optionB: '1101₂',
          optionC: '1010₂',
          optionD: '1111₂',
          correctOption: 'A',
          explanation: '14 = 8 + 4 + 2 + 0 = (1×2³) + (1×2²) + (1×2¹) + (0×2⁰) = 1110₂.',
        },
        {
          id: 'q-base-2',
          quizId: 'quiz-jhs1-math-numberbases',
          questionText: 'Convert 1011₂ to base ten.',
          optionA: '9',
          optionB: '11',
          optionC: '13',
          optionD: '15',
          correctOption: 'B',
          explanation: '1011₂ = (1×8) + (0×4) + (1×2) + (1×1) = 8 + 0 + 2 + 1 = 11₁₀.',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t3-fractions',
    subjectId: 'math',
    level: 'JHS 1',
    term: 1,
    orderIndex: 3,
    title: 'Fractions, Decimals & Percentages',
    description: 'Master operations with proper, improper, mixed fractions and decimal conversions.',
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=tBV_GsmrXWw',
    youtubeId: 'tBV_GsmrXWw',
    keyNotes: `Fractions represent equal parts of a whole quantity:
• Proper Fraction: Numerator < Denominator (e.g., 3/4).
• Improper Fraction: Numerator ≥ Denominator (e.g., 7/5).
• Mixed Fraction: Whole number with a fraction (e.g., 1 2/5).
• Addition / Subtraction: Always convert mixed fractions to improper fractions and find the LCM of denominators.
• Multiplication: Multiply numerators directly, multiply denominators directly.
• Division: Invert the second fraction (reciprocal) and multiply (Keep, Change, Flip).`,
    examples: [
      {
        id: 'ex-frac-1',
        title: 'Addition of Mixed Fractions',
        problem: 'Simplify: 2 1/3 + 1 3/4',
        stepByStepSolution: [
          'Step 1: Convert both to improper fractions: 2 1/3 = 7/3, and 1 3/4 = 7/4.',
          'Step 2: Find LCM of denominators 3 and 4, which is 12.',
          'Step 3: Convert to equivalent fractions with denominator 12: 7/3 = 28/12, and 7/4 = 21/12.',
          'Step 4: Add the numerators: (28 + 21) / 12 = 49 / 12.',
          'Step 5: Convert back to mixed fraction: 49 ÷ 12 = 4 remainder 1 => 4 1/12.',
        ],
        keyTakeaway: 'Always change mixed numbers into improper fractions before finding the common denominator.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-fractions',
      topicId: 'jhs1-math-t3-fractions',
      title: 'Fractions & Percentages Practice Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-frac-1',
          quizId: 'quiz-jhs1-math-fractions',
          questionText: 'Simplify 3/4 + 1/2.',
          optionA: '4/6',
          optionB: '1 1/4',
          optionC: '5/4',
          optionD: '1 1/4 (which is 5/4)',
          correctOption: 'D',
          explanation: 'Find LCM of 4 and 2 = 4. (3 + 2)/4 = 5/4 = 1 1/4.',
        },
        {
          id: 'q-frac-2',
          quizId: 'quiz-jhs1-math-fractions',
          questionText: 'Convert 0.35 to a percentage.',
          optionA: '3.5%',
          optionB: '35%',
          optionC: '350%',
          optionD: '0.035%',
          correctOption: 'B',
          explanation: '0.35 × 100% = 35%.',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t4-algebra',
    subjectId: 'math',
    level: 'JHS 1',
    term: 2,
    orderIndex: 4,
    title: 'Algebraic Expressions & Substitution',
    description: 'Collecting like terms, expanding single brackets, and numerical substitution into formulas.',
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=NybHckSEQBI',
    youtubeId: 'NybHckSEQBI',
    keyNotes: `Algebra uses letters (variables) to generalize mathematical rules.
• Like Terms: Contain identical variables raised to identical powers (e.g., 5x and 3x). Only like terms can be added or subtracted!
• Unlike Terms: Variables differ (e.g., 4x and 4y cannot be combined).
• Distributive Law: a(b + c) = ab + ac.
• Substitution: Replacing letters with given numerical values to compute a final answer. Remember to use brackets around negative numbers!`,
    examples: [
      {
        id: 'ex-alg-1',
        title: 'Collecting Like Terms',
        problem: 'Simplify: 5x + 3y - 2x + 7y - 4',
        stepByStepSolution: [
          'Step 1: Group the x terms together: 5x - 2x = 3x.',
          'Step 2: Group the y terms together: +3y + 7y = +10y.',
          'Step 3: Keep the constant term: -4.',
          'Step 4: Combine the resulting terms: 3x + 10y - 4.',
        ],
        keyTakeaway: 'Pay close attention to the sign in front of each term when rearranging.',
      },
      {
        id: 'ex-alg-2',
        title: 'Evaluating Expressions by Substitution',
        problem: 'If a = 3 and b = -2, evaluate the expression: 2a² - 3b + 5',
        stepByStepSolution: [
          'Step 1: Substitute a = 3: 2(3)² = 2(9) = 18.',
          'Step 2: Substitute b = -2: -3(-2) = +6 (negative times negative gives positive).',
          'Step 3: Add the constant: 18 + 6 + 5.',
          'Step 4: Final calculation: 24 + 5 = 29.',
        ],
        keyTakeaway: 'Always calculate powers first (BODMAS) before multiplying coefficients.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-algebra',
      topicId: 'jhs1-math-t4-algebra',
      title: 'Algebraic Expressions & Substitution Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-alg-1',
          quizId: 'quiz-jhs1-math-algebra',
          questionText: 'Simplify: 7p - 4q - 3p + 9q',
          optionA: '4p + 5q',
          optionB: '10p + 13q',
          optionC: '4p - 5q',
          optionD: '9pq',
          correctOption: 'A',
          explanation: '(7p - 3p) + (-4q + 9q) = 4p + 5q.',
        },
        {
          id: 'q-alg-2',
          quizId: 'quiz-jhs1-math-algebra',
          questionText: 'If x = -3, what is the value of x² + 2x?',
          optionA: '-15',
          optionB: '3',
          optionC: '15',
          optionD: '-3',
          correctOption: 'B',
          explanation: '(-3)² + 2(-3) = 9 - 6 = 3.',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t5-linearequations',
    subjectId: 'math',
    level: 'JHS 1',
    term: 2,
    orderIndex: 5,
    title: 'Linear Equations in One Variable',
    description: 'Solve first-degree equations using inverse operations and clearing simple fractions.',
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=DfZD5Wp_r_I',
    youtubeId: 'DfZD5Wp_r_I',
    keyNotes: `A linear equation contains an unknown variable with power 1 and an equals sign (=).
• Golden Rule: Whatever operation you do to the left-hand side, you MUST do to the right-hand side.
• Addition undoes Subtraction, and Multiplication undoes Division.
• Strategy:
  1. Expand brackets if any exist.
  2. Collect all variable terms on one side (usually LHS).
  3. Collect all constant numbers on the opposite side (RHS).
  4. Divide by the coefficient of the variable to isolate it.`,
    examples: [
      {
        id: 'ex-leq-1',
        title: 'Solving an Equation with Brackets',
        problem: 'Solve for x: 3(2x - 4) = 18',
        stepByStepSolution: [
          'Step 1: Expand the bracket on the left: 3 × 2x - 3 × 4 = 6x - 12.',
          'Step 2: Set equal to 18: 6x - 12 = 18.',
          'Step 3: Add 12 to both sides: 6x = 18 + 12 => 6x = 30.',
          'Step 4: Divide both sides by 6: x = 30 / 6 => x = 5.',
          'Step 5: Check answer: 3(2(5) - 4) = 3(10 - 4) = 3(6) = 18 (Correct!).',
        ],
        keyTakeaway: 'Always substitute your answer back into the original equation to check correctness.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-linearequations',
      topicId: 'jhs1-math-t5-linearequations',
      title: 'Linear Equations Mastery Test',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-leq-1',
          quizId: 'quiz-jhs1-math-linearequations',
          questionText: 'Solve for y: 5y + 8 = 33',
          optionA: 'y = 4',
          optionB: 'y = 5',
          optionC: 'y = 6',
          optionD: 'y = 7',
          correctOption: 'B',
          explanation: '5y = 33 - 8 => 5y = 25 => y = 5.',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t6-geometry',
    subjectId: 'math',
    level: 'JHS 1',
    term: 2,
    orderIndex: 6,
    title: 'Angles, Parallel Lines & Polygons',
    description: 'Angle properties, vertically opposite, alternate, corresponding, and triangle angle sums.',
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=P3AOoLbA3us',
    youtubeId: 'P3AOoLbA3us',
    keyNotes: `Essential geometric angle laws for JHS 1:
• Angles on a Straight Line sum up to 180° (Supplementary angles).
• Angles at a Point sum up to 360°.
• Vertically Opposite Angles are always equal.
• When a transversal cuts parallel lines:
  - Alternate angles ('Z' shape) are equal.
  - Corresponding angles ('F' shape) are equal.
  - Co-interior angles ('C' shape) add up to 180°.
• Sum of angles in any triangle = 180°.
• Sum of interior angles of an n-sided polygon = (n - 2) × 180°.`,
    examples: [
      {
        id: 'ex-geo-1',
        title: 'Finding an Unknown Angle in a Triangle',
        problem: 'In triangle ABC, angle A = 55° and angle B = 75°. Find the value of angle C.',
        stepByStepSolution: [
          'Step 1: State the geometric property: Sum of angles in a triangle = 180°.',
          'Step 2: Form the equation: 55° + 75° + Angle C = 180°.',
          'Step 3: Sum the known angles: 130° + Angle C = 180°.',
          'Step 4: Subtract 130° from 180°: Angle C = 180° - 130° = 50°.',
        ],
        keyTakeaway: 'Always state the geometrical reason in BECE exams to earn full working marks.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-geometry',
      topicId: 'jhs1-math-t6-geometry',
      title: 'Angles & Plane Geometry Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-geo-1',
          quizId: 'quiz-jhs1-math-geometry',
          questionText: 'What is the sum of interior angles in a 5-sided polygon (pentagon)?',
          optionA: '360°',
          optionB: '540°',
          optionC: '720°',
          optionD: '180°',
          correctOption: 'B',
          explanation: 'Sum = (n - 2) × 180° = (5 - 2) × 180° = 3 × 180° = 540°.',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t7-ratios',
    subjectId: 'math',
    level: 'JHS 1',
    term: 3,
    orderIndex: 7,
    title: 'Ratio, Proportion & Sharing Quantities',
    description: 'Simplifying ratios, dividing quantities in a given ratio, and direct vs indirect proportion.',
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=HQ4i0_v1e_8',
    youtubeId: 'HQ4i0_v1e_8',
    keyNotes: `A ratio compares two or more quantities of the same kind and unit.
• Simplifying Ratios: Divide all parts by their highest common factor (e.g., 12 : 18 = 2 : 3).
• Sharing in a Ratio:
  1. Add the ratio parts to find Total Ratio Parts.
  2. Each person's share = (Their Part / Total Parts) × Total Amount.
• Direct Proportion: As one quantity increases, the other increases at the same rate.
• Inverse Proportion: As one quantity increases, the other decreases (e.g., more workers take less time).`,
    examples: [
      {
        id: 'ex-rat-1',
        title: 'Dividing Money in a Given Ratio',
        problem: 'Share GHS 600 between Kwame and Ama in the ratio 3 : 2. How much does each person receive?',
        stepByStepSolution: [
          'Step 1: Calculate total ratio parts: 3 + 2 = 5 parts.',
          'Step 2: Calculate Kwame’s share: (3 / 5) × 600 = 3 × 120 = GHS 360.',
          'Step 3: Calculate Ama’s share: (2 / 5) × 600 = 2 × 120 = GHS 240.',
          'Step 4: Verify total: 360 + 240 = GHS 600 (Correct!).',
        ],
        keyTakeaway: 'Always sum the ratio parts first before calculating individual fractional shares.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-ratios',
      topicId: 'jhs1-math-t7-ratios',
      title: 'Ratio & Proportion Challenge Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-rat-1',
          quizId: 'quiz-jhs1-math-ratios',
          questionText: 'Simplify the ratio 24 : 36 to its simplest form.',
          optionA: '4 : 6',
          optionB: '2 : 3',
          optionC: '3 : 2',
          optionD: '12 : 18',
          correctOption: 'B',
          explanation: 'Divide both sides by the HCF 12: 24/12 = 2 and 36/12 = 3. Result: 2 : 3.',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t8-statistics',
    subjectId: 'math',
    level: 'JHS 1',
    term: 3,
    orderIndex: 8,
    title: 'Data Collection, Statistics & Probability',
    description: 'Frequency tables, finding Mean, Median, Mode, Range, and calculating basic probability.',
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=B1HEzNTGeZ4',
    youtubeId: 'B1HEzNTGeZ4',
    keyNotes: `Statistics deals with collecting, organizing, analyzing, and presenting data.
• Mode: The number that appears most frequently.
• Median: The middle number when data is arranged in ascending order.
• Mean (Average): Sum of all values divided by total number of values: (Σx) / n.
• Range: Highest value - Lowest value.
• Probability: Chance of an event occurring: P(Event) = (Number of favorable outcomes) / (Total possible outcomes).`,
    examples: [
      {
        id: 'ex-stat-1',
        title: 'Finding Mean, Median, and Mode',
        problem: 'Given the test scores: 7, 4, 8, 4, 9, 10, 7, 4. Find the: (i) Mode (ii) Median (iii) Mean.',
        stepByStepSolution: [
          'Step 1: Arrange data in ascending order: 4, 4, 4, 7, 7, 8, 9, 10 (Total n = 8 items).',
          'Step 2: Mode = 4 (it appears 3 times, which is the highest frequency).',
          'Step 3: Median = Average of the two middle numbers (4th and 5th items: 7 and 7): (7 + 7) / 2 = 7.',
          'Step 4: Mean = (4 + 4 + 4 + 7 + 7 + 8 + 9 + 10) / 8 = 53 / 8 = 6.625.',
        ],
        keyTakeaway: 'Always arrange the numbers in ascending order BEFORE finding the median.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-statistics',
      topicId: 'jhs1-math-t8-statistics',
      title: 'Statistics & Probability Assessment',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-stat-1',
          quizId: 'quiz-jhs1-math-statistics',
          questionText: 'A fair 6-sided die is rolled once. What is the probability of rolling an even number (2, 4, 6)?',
          optionA: '1/6',
          optionB: '1/3',
          optionC: '1/2',
          optionD: '2/3',
          correctOption: 'C',
          explanation: 'Favorable outcomes = {2, 4, 6} (3 outcomes). Total outcomes = 6. Probability = 3/6 = 1/2.',
        },
      ],
    },
  },

  // ==========================================
  // JHS 1 - INTEGRATED SCIENCE
  // ==========================================
  {
    id: 'jhs1-sci-t1-matter',
    subjectId: 'science',
    level: 'JHS 1',
    term: 1,
    orderIndex: 1,
    title: 'Matter and Its States',
    description: 'Explore solids, liquids, gases, physical changes, and particle theory.',
    isFreeTrial: true,
    keyNotes: `Matter is anything that has mass and occupies space.
• Three Main States: Solid, Liquid, and Gas.
• Solid: Closely packed particles, fixed volume and definite shape.
• Liquid: Loosely packed, fixed volume but takes shape of container.
• Gas: Very loosely packed, high kinetic energy, no fixed shape or volume.
• Changes of State:
  - Melting: Solid to Liquid (gain heat).
  - Freezing / Solidification: Liquid to Solid (lose heat).
  - Evaporation / Boiling: Liquid to Gas.
  - Condensation: Gas to Liquid.
  - Sublimation: Solid directly to Gas without passing through liquid (e.g., Camphor/Dry Ice).`,
    quiz: {
      id: 'quiz-jhs1-sci-matter',
      topicId: 'jhs1-sci-t1-matter',
      title: 'States of Matter Diagnostic Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-matter-1',
          quizId: 'quiz-jhs1-sci-matter',
          questionText: 'The process whereby a solid turns directly into a gas without becoming a liquid is known as:',
          optionA: 'Evaporation',
          optionB: 'Condensation',
          optionC: 'Sublimation',
          optionD: 'Melting',
          correctOption: 'C',
          explanation: 'Sublimation is the direct transition from solid to gas (e.g., camphor balls, solid iodine).',
        },
        {
          id: 'q-matter-2',
          quizId: 'quiz-jhs1-sci-matter',
          questionText: 'Which state of matter has neither a fixed shape nor a fixed volume?',
          optionA: 'Solid',
          optionB: 'Liquid',
          optionC: 'Gas',
          optionD: 'Crystal',
          correctOption: 'C',
          explanation: 'Gas molecules are spaced far apart with minimal intermolecular forces, filling any volume.',
        },
      ],
    },
  },
  {
    id: 'jhs1-sci-t2-livingcells',
    subjectId: 'science',
    level: 'JHS 1',
    term: 2,
    orderIndex: 2,
    title: 'Living Cells and Organization of Life',
    description: 'Plant and animal cells, organelles, cell wall, chloroplast, and cell differentiation.',
    isFreeTrial: false,
    keyNotes: `The cell is the basic structural and functional unit of all living organisms.
• Cell Components:
  - Nucleus: Controls all cell activities and stores genetic material (DNA).
  - Cell Membrane: Semi-permeable barrier controlling entry and exit of substances.
  - Cytoplasm: Jelly-like fluid where metabolic reactions take place.
  - Mitochondria: Powerhouse of the cell, generates ATP energy through cellular respiration.
• Differences between Plant & Animal Cells:
  - Plant cells have a rigid cellulose Cell Wall and Chloroplasts for photosynthesis; animal cells do not.
  - Plant cells have a large central permanent vacuole; animal cells have small temporary vacuoles.`,
    quiz: {
      id: 'quiz-jhs1-sci-cells',
      topicId: 'jhs1-sci-t2-livingcells',
      title: 'Plant and Animal Cells Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-cell-1',
          quizId: 'quiz-jhs1-sci-cells',
          questionText: 'Which organelle is responsible for generating energy in the cell?',
          optionA: 'Ribosome',
          optionB: 'Mitochondrion',
          optionC: 'Vacuole',
          optionD: 'Endoplasmic Reticulum',
          correctOption: 'B',
          explanation: 'Mitochondria are often referred to as the powerhouses of the cell as they produce ATP.',
        },
        {
          id: 'q-cell-2',
          quizId: 'quiz-jhs1-sci-cells',
          questionText: 'Which structure is present in a plant cell but absent in an animal cell?',
          optionA: 'Cell membrane',
          optionB: 'Nucleus',
          optionC: 'Cellulose cell wall',
          optionD: 'Cytoplasm',
          correctOption: 'C',
          explanation: 'Plant cells have an outer cellulose cell wall providing structural rigidity.',
        },
      ],
    },
  },

  // ==========================================
  // JHS 2 - MATHEMATICS
  // ==========================================
  {
    id: 'jhs2-math-t1-algebra',
    subjectId: 'math',
    level: 'JHS 2',
    term: 1,
    orderIndex: 1,
    title: 'Algebraic Expressions & Factorization',
    description: 'Simplifying algebraic terms, expanding brackets, and common monomial factorization.',
    isFreeTrial: true,
    keyNotes: `Algebra uses letters (variables) to represent numbers.
• Like Terms: Terms with identical variable parts and powers (e.g., 3x and 7x). Only like terms can be added or subtracted.
• Distributive Law: a(b + c) = ab + ac.
• Factorization: Finding the highest common factor (HCF) and rewriting as a product.
  Example: 6x² + 9x = 3x(2x + 3).`,
    quiz: {
      id: 'quiz-jhs2-math-algebra',
      topicId: 'jhs2-math-t1-algebra',
      title: 'JHS 2 Algebraic Expressions Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-alg-1',
          quizId: 'quiz-jhs2-math-algebra',
          questionText: 'Simplify: 5x + 3y - 2x + 4y.',
          optionA: '3x + 7y',
          optionB: '7x + 7y',
          optionC: '10xy',
          optionD: '3x - y',
          correctOption: 'A',
          explanation: 'Group like terms: (5x - 2x) + (3y + 4y) = 3x + 7y.',
        },
        {
          id: 'q-alg-2',
          quizId: 'quiz-jhs2-math-algebra',
          questionText: 'Factorize completely: 8xy - 12x.',
          optionA: '2x(4y - 6)',
          optionB: '4x(2y - 3)',
          optionC: '4(2xy - 3x)',
          optionD: 'x(8y - 12)',
          correctOption: 'B',
          explanation: 'The highest common factor of 8xy and 12x is 4x. Factoring out gives 4x(2y - 3).',
        },
      ],
    },
  },
  {
    id: 'jhs2-math-t2-linearequations',
    subjectId: 'math',
    level: 'JHS 2',
    term: 2,
    orderIndex: 2,
    title: 'Linear Equations in One Variable',
    description: 'Solve first-degree linear equations with fractions and word problems.',
    isFreeTrial: false,
    keyNotes: `A linear equation contains variables with power 1.
• Goal: Isolate the unknown variable on one side.
• Operations must balance: Whatever is done to one side must be done to the other side.
• Clearing fractions: Multiply every term by the LCM of all denominators.`,
    quiz: {
      id: 'quiz-jhs2-math-linearequations',
      topicId: 'jhs2-math-t2-linearequations',
      title: 'Linear Equations Challenge Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-lineq-1',
          quizId: 'quiz-jhs2-math-linearequations',
          questionText: 'Solve for x: 3x - 7 = 14.',
          optionA: 'x = 3',
          optionB: 'x = 7',
          optionC: 'x = 21',
          optionD: 'x = 5',
          correctOption: 'B',
          explanation: '3x = 14 + 7 => 3x = 21 => x = 7.',
        },
      ],
    },
  },

  // ==========================================
  // JHS 2 - INTEGRATED SCIENCE
  // ==========================================
  {
    id: 'jhs2-sci-t1-digestion',
    subjectId: 'science',
    level: 'JHS 2',
    term: 1,
    orderIndex: 1,
    title: 'The Human Digestive System',
    description: 'Alimentary canal, mechanical vs chemical digestion, and digestive enzymes.',
    isFreeTrial: true,
    keyNotes: `Digestion is the breakdown of large insoluble food molecules into smaller water-soluble molecules for absorption.
• Mouth: Teeth chew food (mechanical); Salivary amylase breaks starch into maltose (chemical).
• Oesophagus: Peristalsis pushes food bolus to the stomach.
• Stomach: Hydrochloric acid kills germs; Pepsin breaks proteins into peptones.
• Small Intestine (Duodenum & Ileum):
  - Bile from liver emulsifies fats.
  - Pancreatic enzymes (amylase, trypsin, lipase) complete breakdown.
  - Villi absorb digested nutrients into the bloodstream.
• Large Intestine (Colon): Absorbs water and minerals; rectum stores feces.`,
    quiz: {
      id: 'quiz-jhs2-sci-digestion',
      topicId: 'jhs2-sci-t1-digestion',
      title: 'Human Digestion & Enzymes Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-dig-1',
          quizId: 'quiz-jhs2-sci-digestion',
          questionText: 'Where in the human digestive system does the absorption of digested food take place?',
          optionA: 'Stomach',
          optionB: 'Small Intestine (Ileum)',
          optionC: 'Large Intestine',
          optionD: 'Oesophagus',
          correctOption: 'B',
          explanation: 'The inner wall of the small intestine is covered with tiny finger-like projections called villi that absorb nutrients.',
        },
        {
          id: 'q-dig-2',
          quizId: 'quiz-jhs2-sci-digestion',
          questionText: 'What is the role of hydrochloric acid (HCl) in gastric juice?',
          optionA: 'Emulsifies fat droplets',
          optionB: 'Provides an acidic medium and kills harmful bacteria',
          optionC: 'Digests starch into glucose',
          optionD: 'Converts fats into fatty acids',
          correctOption: 'B',
          explanation: 'Hydrochloric acid in the stomach creates the acidic pH needed for pepsin and destroys ingested microbes.',
        },
      ],
    },
  },

  // ==========================================
  // JHS 3 - MATHEMATICS (BECE Canditates)
  // ==========================================
  {
    id: 'jhs3-math-t1-vectors',
    subjectId: 'math',
    level: 'JHS 3',
    term: 1,
    orderIndex: 1,
    title: 'Vectors and Bearings (BECE Focus)',
    description: 'Column vectors, addition, scalar multiplication, magnitude, and 3-figure bearings.',
    isFreeTrial: true,
    keyNotes: `A vector has both magnitude and direction.
• Column Vector form: [x, y] where x is horizontal displacement and y is vertical displacement.
• Magnitude |r| = √(x² + y²).
• Bearings: Measured clockwise starting from True North (000° to 360°). Always written in three figures (e.g., 045°, 270°).`,
    quiz: {
      id: 'quiz-jhs3-math-vectors',
      topicId: 'jhs3-math-t1-vectors',
      title: 'Vectors & Bearings BECE Test',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-vec-1',
          quizId: 'quiz-jhs3-math-vectors',
          questionText: 'If vector u = (3, 4), what is the magnitude |u|?',
          optionA: '7 units',
          optionB: '5 units',
          optionC: '25 units',
          optionD: '1 unit',
          correctOption: 'B',
          explanation: '|u| = √(3² + 4²) = √(9 + 16) = √25 = 5 units.',
        },
        {
          id: 'q-vec-2',
          quizId: 'quiz-jhs3-math-vectors',
          questionText: 'What is the three-figure bearing of South-West (SW)?',
          optionA: '045°',
          optionB: '135°',
          optionC: '225°',
          optionD: '315°',
          correctOption: 'C',
          explanation: 'North = 000°, East = 090°, South = 180°, West = 270°. South-West is exactly midway: 180° + 45° = 225°.',
        },
      ],
    },
  },
  {
    id: 'jhs3-math-t2-businessmath',
    subjectId: 'math',
    level: 'JHS 3',
    term: 2,
    orderIndex: 2,
    title: 'Business Mathematics: Profit, Loss & Simple Interest',
    description: 'Calculate cost price, selling price, profit percentage, and Simple Interest (I = PRT / 100).',
    isFreeTrial: false,
    keyNotes: `Essential financial formulas for BECE:
• Profit = Selling Price (SP) - Cost Price (CP).
• Percentage Profit = (Profit / CP) × 100%.
• Simple Interest Formula: I = (P × R × T) / 100, where:
  - P = Principal amount borrowed or invested.
  - R = Rate per annum (%).
  - T = Time in years.
• Total Amount (A) = Principal (P) + Interest (I).`,
    quiz: {
      id: 'quiz-jhs3-math-biz',
      topicId: 'jhs3-math-t2-businessmath',
      title: 'Business Math & Simple Interest Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-biz-1',
          quizId: 'quiz-jhs3-math-biz',
          questionText: 'Calculate the simple interest on GHS 500 for 2 years at 10% per annum.',
          optionA: 'GHS 50',
          optionB: 'GHS 100',
          optionC: 'GHS 200',
          optionD: 'GHS 600',
          correctOption: 'B',
          explanation: 'I = (P × R × T) / 100 = (500 × 10 × 2) / 100 = 10,000 / 100 = GHS 100.',
        },
      ],
    },
  },

  // ==========================================
  // JHS 3 - INTEGRATED SCIENCE
  // ==========================================
  {
    id: 'jhs3-sci-t1-circuits',
    subjectId: 'science',
    level: 'JHS 3',
    term: 1,
    orderIndex: 1,
    title: 'Electric Current, Voltage & Circuits',
    description: 'Series vs parallel circuits, Ohm’s Law (V = IR), conductors, and insulators.',
    isFreeTrial: true,
    keyNotes: `Electricity is the flow of electric charge (electrons).
• Current (I): Measured in Amperes (A) using an ammeter connected in SERIES.
• Potential Difference / Voltage (V): Measured in Volts (V) using a voltmeter in PARALLEL.
• Resistance (R): Measured in Ohms (Ω).
• Ohm’s Law: V = I × R.
• Series Circuit: One continuous path; if one bulb blows, all go off.
• Parallel Circuit: Multiple paths; each component receives the full supply voltage.`,
    quiz: {
      id: 'quiz-jhs3-sci-circuits',
      topicId: 'jhs3-sci-t1-circuits',
      title: 'Electricity & Circuits BECE Master Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-circ-1',
          quizId: 'quiz-jhs3-sci-circuits',
          questionText: 'A circuit has a resistance of 4 Ohms and a current of 3 Amperes. What is the voltage?',
          optionA: '0.75 Volts',
          optionB: '1.33 Volts',
          optionC: '7 Volts',
          optionD: '12 Volts',
          correctOption: 'D',
          explanation: 'According to Ohm’s Law, V = I × R = 3 A × 4 Ω = 12 V.',
        },
        {
          id: 'q-circ-2',
          quizId: 'quiz-jhs3-sci-circuits',
          questionText: 'How is an ammeter connected to measure electric current in a circuit?',
          optionA: 'In parallel',
          optionB: 'In series',
          optionC: 'Across the cell only',
          optionD: 'In reverse bias',
          correctOption: 'B',
          explanation: 'An ammeter has very low internal resistance and must be connected in series to measure total current passing through.',
        },
      ],
    },
  },

  // ==========================================
  // JHS 1 - COMPUTING / ICT
  // ==========================================
  {
    id: 'jhs1-ict-t1-hardware',
    subjectId: 'ict',
    level: 'JHS 1',
    term: 1,
    orderIndex: 1,
    title: 'Introduction to Computer Systems & Hardware',
    description: 'Input, processing, output, and secondary storage devices.',
    isFreeTrial: true,
    keyNotes: `A computer is an electronic device that accepts data as input, processes it, and produces information as output.
• Input Devices: Keyboard, Mouse, Scanner, Microphone.
• Central Processing Unit (CPU): The brain of the computer (ALU + Control Unit).
• Output Devices: Monitor (VDU), Printer, Speakers, Projector.
• Storage Devices: RAM (volatile/temporary), ROM (non-volatile/permanent), SSD, Flash drive.`,
    quiz: {
      id: 'quiz-jhs1-ict-hardware',
      topicId: 'jhs1-ict-t1-hardware',
      title: 'Computer Hardware Fundamentals Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-ict-1',
          quizId: 'quiz-jhs1-ict-hardware',
          questionText: 'Which unit inside the CPU performs arithmetic and logical decisions?',
          optionA: 'Control Unit (CU)',
          optionB: 'Arithmetic and Logic Unit (ALU)',
          optionC: 'Cache Memory',
          optionD: 'Hard Disk',
          correctOption: 'B',
          explanation: 'The ALU (Arithmetic Logic Unit) executes all mathematical calculations and comparisons.',
        },
      ],
    },
  },

  // ==========================================
  // JHS 1 - ENGLISH LANGUAGE
  // ==========================================
  {
    id: 'jhs1-eng-t1-partsofspeech',
    subjectId: 'english',
    level: 'JHS 1',
    term: 1,
    orderIndex: 1,
    title: 'Parts of Speech & Sentence Construction',
    description: 'Nouns, pronouns, verbs, adverbs, adjectives, conjunctions, and prepositions.',
    isFreeTrial: true,
    keyNotes: `Every English word belongs to one of eight parts of speech:
• Noun: Name of a person, animal, place, or thing.
• Pronoun: Replaces a noun (he, she, they, it).
• Verb: An action or state-of-being word.
• Adjective: Describes or qualifies a noun.
• Adverb: Modifies a verb, adjective, or another adverb.
• Preposition: Shows relationship of place, direction, or time (in, on, under).
• Conjunction: Connects clauses or words (and, but, although).`,
    quiz: {
      id: 'quiz-jhs1-eng-speech',
      topicId: 'jhs1-eng-t1-partsofspeech',
      title: 'Parts of Speech Diagnostic Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-eng-1',
          quizId: 'quiz-jhs1-eng-speech',
          questionText: 'Identify the adverb in the sentence: "The student answered the questions quickly and correctly."',
          optionA: 'student',
          optionB: 'questions',
          optionC: 'quickly',
          optionD: 'answered',
          correctOption: 'C',
          explanation: '"Quickly" describes how the action was performed, making it an adverb of manner.',
        },
      ],
    },
  },

  // ==========================================
  // JHS 1 - SOCIAL STUDIES
  // ==========================================
  {
    id: 'jhs1-soc-t1-environment',
    subjectId: 'social',
    level: 'JHS 1',
    term: 1,
    orderIndex: 1,
    title: 'Our Environment & Environmental Degradation',
    description: 'Physical and social environment, pollution, galamsey, deforestation, and preservation.',
    isFreeTrial: true,
    keyNotes: `Environment refers to all external conditions and surroundings in which living organisms exist.
• Components:
  - Physical Environment: Land, water bodies, air, plants, animals.
  - Social Environment: Cultural, political, religious, and economic institutions.
• Environmental Problems in Ghana:
  - Illegal mining (Galamsey): Destroys water bodies (Pra, Birim, Ankobra) and farmlands.
  - Deforestation: Indiscriminate tree felling for timber and charcoal.
  - Plastic Pollution: Blocked gutters leading to urban flooding.`,
    quiz: {
      id: 'quiz-jhs1-soc-env',
      topicId: 'jhs1-soc-t1-environment',
      title: 'Environment & Conservation Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-soc-1',
          quizId: 'quiz-jhs1-soc-env',
          questionText: 'Which of the following is a major cause of water pollution in Ghanaian mining communities?',
          optionA: 'Afforestation',
          optionB: 'Illegal small-scale mining (Galamsey)',
          optionC: 'Crop rotation',
          optionD: 'Contour plowing',
          correctOption: 'B',
          explanation: 'Galamsey releases toxic heavy metals (mercury, lead) into major rivers, rendering them unsafe.',
        },
      ],
    },
  },

  // ==========================================
  // JHS 1 - RELIGIOUS & MORAL EDUCATION (RME)
  // ==========================================
  {
    id: 'jhs1-rme-t1-creation',
    subjectId: 'rme',
    level: 'JHS 1',
    term: 1,
    orderIndex: 1,
    title: 'Creation and the Environment in the Three Main Religions',
    description: 'Christian, Islamic, and Indigenous Ghanaian beliefs on creation and human stewardship.',
    isFreeTrial: true,
    keyNotes: `All three major religions in Ghana (Christianity, Islam, and Indigenous Traditional Religion) agree that:
• God (The Supreme Being / Onyankopon / Allah / Mawu) is the Creator of heaven and earth.
• Humans have been appointed as caretakers / stewards of creation.
• Protection of the environment is considered a moral and religious obligation.`,
    quiz: {
      id: 'quiz-jhs1-rme-creation',
      topicId: 'jhs1-rme-t1-creation',
      title: 'RME Creation & Moral Values Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-rme-1',
          quizId: 'quiz-jhs1-rme-creation',
          questionText: 'In Ghanaian traditional religion, why are sacred groves and rivers preserved?',
          optionA: 'For commercial tourism only',
          optionB: 'As habitats of spiritual deities and protectors of ecology',
          optionC: 'For foreign export',
          optionD: 'To prevent farming forever',
          correctOption: 'B',
          explanation: 'Sacred groves and taboos protected water sources and vital wildlife biodiversity in traditional society.',
        },
      ],
    },
  },
];

export const JHS_CURRICULUM_TOPICS: CurriculumTopic[] = BASE_JHS_TOPICS.map((topic) => ({
  ...topic,
  detailedNotes: TOPIC_DETAILED_NOTES[topic.id] || topic.detailedNotes,
}));

