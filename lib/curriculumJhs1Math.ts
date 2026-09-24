import { CurriculumTopic } from './types';

export const JHS1_MATH_TOPICS: CurriculumTopic[] = [
  // ==========================================
  // TERM 1
  // ==========================================
  {
    id: 'jhs1-math-t1-sets',
    subjectId: 'math',
    level: 'JHS 1',
    term: 1,
    orderIndex: 1,
    title: 'Sets and Operations on Sets',
    description: 'Master set notation, types of sets, union, intersection, and two-set Venn diagrams.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=tyDN4pXkYCY',
    youtubeId: 'tyDN4pXkYCY',
    keyNotes: `A set is a well-defined collection of distinct objects or elements.
• Empty / Null Set: A set with no elements, denoted by ∅ or {}.
• Finite Set: Elements can be counted (e.g. factors of 12).
• Infinite Set: Elements continue endlessly (e.g. counting numbers).
• Union of Sets (A ∪ B): The set of all elements in A, B, or both.
• Intersection of Sets (A ∩ B): The set of elements common to both A and B.
• Subset (A ⊆ B): Every element in A is present in B. Total subsets = 2^n.`,
    examples: [
      {
        id: 'ex-sets-1',
        title: 'Finding Union and Intersection of Two Sets',
        problem: 'Given U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, A = {2, 4, 6, 8, 10}, and B = {4, 5, 6, 7, 8}. Find: (i) A ∩ B (ii) A ∪ B',
        stepByStepSolution: [
          'Step 1: Identify common elements for Intersection (A ∩ B): The numbers 4, 6, and 8 appear in both sets. So, A ∩ B = {4, 6, 8}.',
          'Step 2: Combine all elements without repeating duplicates for Union (A ∪ B): {2, 4, 5, 6, 7, 8, 10}.',
        ],
        keyTakeaway: 'Intersection means "common to both". Union means "combine all distinct elements".',
      },
      {
        id: 'ex-sets-2',
        title: 'Two-Set Venn Diagram Problem',
        problem: 'In a class of 30 students, 18 study French (F), 14 study Twi (T), and 6 study both subjects. How many students study neither subject?',
        stepByStepSolution: [
          'Step 1: Total n(U) = 30. Both subjects n(F ∩ T) = 6.',
          'Step 2: French ONLY = 18 - 6 = 12.',
          'Step 3: Twi ONLY = 14 - 6 = 8.',
          'Step 4: At least one subject = 12 + 6 + 8 = 26.',
          'Step 5: Neither = 30 - 26 = 4 students.',
        ],
        keyTakeaway: 'Always subtract the intersection (both) from each circle to find the "only" region first.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-sets',
      topicId: 'jhs1-math-t1-sets',
      title: 'Sets & Operations Mastery Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-sets-1',
          quizId: 'quiz-jhs1-math-sets',
          questionText: 'If set P = {x, y, z}, how many total subsets does P have?',
          optionA: '3',
          optionB: '6',
          optionC: '8',
          optionD: '9',
          correctOption: 'C',
          explanation: 'The number of subsets of a set with n elements is 2^n. For n = 3, 2³ = 8.',
        },
        {
          id: 'q-sets-2',
          quizId: 'quiz-jhs1-math-sets',
          questionText: 'Which symbol correctly represents an empty or null set?',
          optionA: '{0}',
          optionB: '{∅}',
          optionC: '∅ or {}',
          optionD: '{null}',
          correctOption: 'C',
          explanation: 'An empty set has no members and is represented by ∅ or {}. Writing {∅} is a singleton set.',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t2-realnumbers',
    subjectId: 'math',
    level: 'JHS 1',
    term: 1,
    orderIndex: 2,
    title: 'Real Number System and Place Value',
    description: 'Understand the hierarchy of real numbers, place values up to billions, and prime factorization.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=5qaph5O4r1g',
    youtubeId: '5qaph5O4r1g',
    keyNotes: `Real numbers include counting numbers, whole numbers, integers, and rational numbers.
• Value = Digit × Place Value.
• Prime numbers have exactly two factors: 1 and itself (2, 3, 5, 7, 11...).
• HCF: Product of lowest powers of common prime factors.
• LCM: Product of highest powers of all prime factors.`,
    examples: [
      {
        id: 'ex-real-1',
        title: 'Finding Place Value and Digit Value',
        problem: 'In the number 6,482,915, state: (i) the place value of 8 (ii) the actual value of 8.',
        stepByStepSolution: [
          'Step 1: Identify the position of 8 from the right: Units(5), Tens(1), Hundreds(9), Thousands(2), Ten Thousands(8).',
          'Step 2: Place value is Ten Thousands.',
          'Step 3: Actual value = 8 × 10,000 = 80,000.',
        ],
        keyTakeaway: 'Place value is the position name; actual value is the number multiplied by its place value.',
      },
      {
        id: 'ex-real-2',
        title: 'HCF and LCM by Prime Factorization',
        problem: 'Find the HCF and LCM of 24 and 36 using prime factors in index form.',
        stepByStepSolution: [
          'Step 1: Express 24 in prime index form: 24 = 2³ × 3¹.',
          'Step 2: Express 36 in prime index form: 36 = 2² × 3².',
          'Step 3: HCF = lowest powers of common factors: 2² × 3¹ = 4 × 3 = 12.',
          'Step 4: LCM = highest powers of all factors: 2³ × 3² = 8 × 9 = 72.',
        ],
        keyTakeaway: 'HCF uses lowest common powers; LCM uses highest powers of all prime factors.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-realnumbers',
      topicId: 'jhs1-math-t2-realnumbers',
      title: 'Real Numbers & Place Value Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-real-1',
          quizId: 'quiz-jhs1-math-realnumbers',
          questionText: 'Which of the following numbers is the ONLY even prime number?',
          optionA: '0',
          optionB: '2',
          optionC: '4',
          optionD: '6',
          correctOption: 'B',
          explanation: '2 is the only even prime number because all other even numbers are divisible by 2.',
        },
        {
          id: 'q-real-2',
          quizId: 'quiz-jhs1-math-realnumbers',
          questionText: 'What is the HCF of 18 and 30?',
          optionA: '3',
          optionB: '6',
          optionC: '9',
          optionD: '90',
          correctOption: 'B',
          explanation: '18 = 2 × 3² and 30 = 2 × 3 × 5. Common prime factors are 2 × 3 = 6.',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t3-integers',
    subjectId: 'math',
    level: 'JHS 1',
    term: 1,
    orderIndex: 3,
    title: 'Integers and Operations on Integers',
    description: 'Directed numbers on the number line, addition, subtraction, multiplication, and sign rules.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=x0E4vxLydNY',
    youtubeId: 'x0E4vxLydNY',
    keyNotes: `Integers include positive numbers, zero, and negative numbers.
• Adding same signs: add numbers and keep sign: (-4) + (-5) = -9.
• Adding different signs: subtract smaller from larger and take larger sign: (-8) + 3 = -5.
• Double negative: a - (-b) = a + b.
• Multiplication/Division: (-) × (-) = (+); (-) × (+) = (-).`,
    examples: [
      {
        id: 'ex-int-1',
        title: 'Subtracting Negative Integers',
        problem: 'Evaluate: (i) 8 - (-6) (ii) -15 - (-9)',
        stepByStepSolution: [
          'Step 1: For 8 - (-6), double negative becomes positive: 8 + 6 = 14.',
          'Step 2: For -15 - (-9), rewrite as: -15 + 9.',
          'Step 3: Since signs differ, subtract 9 from 15 (gives 6) and keep the negative sign: -6.',
        ],
        keyTakeaway: 'Subtracting a negative number is equivalent to adding its positive counterpart.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-integers',
      topicId: 'jhs1-math-t3-integers',
      title: 'Integers Mastery Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-int-1',
          quizId: 'quiz-jhs1-math-integers',
          questionText: 'Evaluate: (-7) × (-6)',
          optionA: '-42',
          optionB: '42',
          optionC: '-13',
          optionD: '13',
          correctOption: 'B',
          explanation: 'The product of two negative integers is always positive: (-7) × (-6) = +42.',
        },
        {
          id: 'q-int-2',
          quizId: 'quiz-jhs1-math-integers',
          questionText: 'Calculate: -12 + (-8) - (-5)',
          optionA: '-25',
          optionB: '-15',
          optionC: '15',
          optionD: '-9',
          correctOption: 'B',
          explanation: '-12 + (-8) = -20. Then -20 - (-5) = -20 + 5 = -15.',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t4-bases',
    subjectId: 'math',
    level: 'JHS 1',
    term: 1,
    orderIndex: 4,
    title: 'Number Bases and Binary System (Base 2)',
    description: 'Place values in base two, conversion between base ten and base two, and binary arithmetic.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=rsxT4FfRBaM',
    youtubeId: 'rsxT4FfRBaM',
    keyNotes: `Base 10 uses digits 0-9; Base 2 (Binary) uses only 0 and 1.
• Base 2 place values: 2⁰=1, 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32.
• Base 10 to Base 2: Successive division by 2, read remainders bottom to top.
• Base 2 addition: 1 + 1 = 10_two (write 0, carry 1); 1 + 1 + 1 = 11_two.`,
    examples: [
      {
        id: 'ex-bases-1',
        title: 'Converting Decimal to Binary',
        problem: 'Convert 25_ten to Base 2.',
        stepByStepSolution: [
          'Step 1: 25 ÷ 2 = 12 remainder 1.',
          'Step 2: 12 ÷ 2 = 6 remainder 0.',
          'Step 3: 6 ÷ 2 = 3 remainder 0.',
          'Step 4: 3 ÷ 2 = 1 remainder 1.',
          'Step 5: 1 ÷ 2 = 0 remainder 1.',
          'Step 6: Reading remainders from bottom to top: 11001_two.',
        ],
        keyTakeaway: 'Always read remainders from the last division upwards to the first.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-bases',
      topicId: 'jhs1-math-t4-bases',
      title: 'Number Bases Diagnostics',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-base-1',
          quizId: 'quiz-jhs1-math-bases',
          questionText: 'What is 13_ten expressed in base two?',
          optionA: '1101_two',
          optionB: '1011_two',
          optionC: '1110_two',
          optionD: '1001_two',
          correctOption: 'A',
          explanation: '13 ÷ 2 = 6 R 1; 6 ÷ 2 = 3 R 0; 3 ÷ 2 = 1 R 1; 1 ÷ 2 = 0 R 1. Bottom to top gives 1101_two.',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t5-fractions',
    subjectId: 'math',
    level: 'JHS 1',
    term: 1,
    orderIndex: 5,
    title: 'Fractions, Decimals and Percentages',
    description: 'Proper, improper, mixed fractions, operations using LCM, BODMAS, and percentage conversions.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=kcx5u2qQ_e0',
    youtubeId: 'kcx5u2qQ_e0',
    keyNotes: `Fractions represent equal parts of a whole quantity.
• Addition/Subtraction: Convert to equivalent fractions with LCM denominator.
• Multiplication: Multiply numerators and denominators (cancel common factors).
• Division: Multiply by reciprocal of second fraction: (a/b) ÷ (c/d) = (a/b) × (d/c).
• Percentage to fraction: divide by 100; Fraction to percentage: multiply by 100%.`,
    examples: [
      {
        id: 'ex-frac-1',
        title: 'Addition of Mixed Fractions',
        problem: 'Simplify: 2 ⅓ + 1 ½',
        stepByStepSolution: [
          'Step 1: Convert to improper fractions: 2 ⅓ = 7/3, 1 ½ = 3/2.',
          'Step 2: Find LCM of 3 and 2: LCM = 6.',
          'Step 3: Convert: 7/3 = 14/6 and 3/2 = 9/6.',
          'Step 4: Add numerators: 14/6 + 9/6 = 23/6 = 3 ⅚.',
        ],
        keyTakeaway: 'Always find the LCM of denominators before adding or subtracting fractions.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-fractions',
      topicId: 'jhs1-math-t5-fractions',
      title: 'Fractions & Percentages Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-frac-1',
          quizId: 'quiz-jhs1-math-fractions',
          questionText: 'Express 45% as a fraction in its simplest form:',
          optionA: '9/20',
          optionB: '4/5',
          optionC: '9/10',
          optionD: '45/10',
          correctOption: 'A',
          explanation: '45% = 45/100. Dividing numerator and denominator by 5 gives 9/20.',
        },
      ],
    },
  },

  // ==========================================
  // TERM 2
  // ==========================================
  {
    id: 'jhs1-math-t6-algebra',
    subjectId: 'math',
    level: 'JHS 1',
    term: 2,
    orderIndex: 6,
    title: 'Algebraic Expressions and Substitution',
    description: 'Terms, coefficients, collecting like terms, expanding single brackets, and numerical substitution.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=vDqOoI-4Z6M',
    youtubeId: 'vDqOoI-4Z6M',
    keyNotes: `Algebra uses letters to represent unknown quantities.
• Like terms share identical variables and powers (e.g. 4x and 7x).
• Distributive Law: a(b + c) = ab + ac; -a(b - c) = -ab + ac.
• Substitution: Replace letters with numbers (put negative numbers in brackets).`,
    examples: [
      {
        id: 'ex-alg-1',
        title: 'Collecting Like Terms',
        problem: 'Simplify: 5x + 3y - 2x + 7y',
        stepByStepSolution: [
          'Step 1: Group like terms: (5x - 2x) + (3y + 7y).',
          'Step 2: Combine coefficients: 3x + 10y.',
        ],
        keyTakeaway: 'Never combine unlike terms: 3x + 10y cannot be written as 13xy!',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-algebra',
      topicId: 'jhs1-math-t6-algebra',
      title: 'Algebraic Expressions Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-alg-1',
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
    id: 'jhs1-math-t7-linearequations',
    subjectId: 'math',
    level: 'JHS 1',
    term: 2,
    orderIndex: 7,
    title: 'Linear Equations in One Variable',
    description: 'Solve first-degree equations, equations with brackets, clearing fractions, and word problems.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=DfZD5Wp_r_I',
    youtubeId: 'DfZD5Wp_r_I',
    keyNotes: `A linear equation contains an unknown variable with power 1 and an equals sign (=).
• Golden Rule: Whatever you do to LHS, you must do to RHS.
• Transposition: moving across = flips operation (+ becomes -, × becomes ÷).
• Eliminate fractions by multiplying every term by the LCM of denominators.`,
    examples: [
      {
        id: 'ex-leq-1',
        title: 'Solving an Equation with Brackets',
        problem: 'Solve for x: 3(2x - 4) = 18',
        stepByStepSolution: [
          'Step 1: Expand brackets: 6x - 12 = 18.',
          'Step 2: Add 12 to both sides: 6x = 18 + 12 => 6x = 30.',
          'Step 3: Divide by 6: x = 5.',
        ],
        keyTakeaway: 'Always substitute your answer back into original equation to check correctness.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-linearequations',
      topicId: 'jhs1-math-t7-linearequations',
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
    id: 'jhs1-math-t8-ratios',
    subjectId: 'math',
    level: 'JHS 1',
    term: 2,
    orderIndex: 8,
    title: 'Ratio, Proportion and Sharing',
    description: 'Simplifying ratios, dividing quantities in given ratios, direct proportion, and inverse proportion.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=HQ3kO7V38Wc',
    youtubeId: 'HQ3kO7V38Wc',
    keyNotes: `A ratio compares quantities of the same kind by division.
• Ratios have no units; quantities must have the same unit before comparing.
• Sharing in ratio: 1 part = Total Amount / Total Parts.
• Direct proportion: Unitary method (find 1, then multiply).
• Inverse proportion: Product is constant (Workers × Days = Constant).`,
    examples: [
      {
        id: 'ex-rat-1',
        title: 'Dividing Money in a Ratio',
        problem: 'Share GHS 600 between Kwame and Ama in the ratio 3 : 2.',
        stepByStepSolution: [
          'Step 1: Total parts = 3 + 2 = 5 parts.',
          'Step 2: Value of 1 part = 600 / 5 = GHS 120.',
          'Step 3: Kwame (3 parts) = 3 × 120 = GHS 360.',
          'Step 4: Ama (2 parts) = 2 × 120 = GHS 240.',
          'Step 5: Check: 360 + 240 = 600.',
        ],
        keyTakeaway: 'Always verify that individual shares sum up to the total original quantity.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-ratios',
      topicId: 'jhs1-math-t8-ratios',
      title: 'Ratio & Proportion Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-rat-1',
          quizId: 'quiz-jhs1-math-ratios',
          questionText: 'Express 50 pesewas to 2 Cedis as a simplified ratio:',
          optionA: '25 : 1',
          optionB: '1 : 4',
          optionC: '1 : 25',
          optionD: '50 : 2',
          correctOption: 'B',
          explanation: 'Convert 2 Cedis to 200 pesewas. Ratio is 50 : 200 = 1 : 4.',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t9-linesangles',
    subjectId: 'math',
    level: 'JHS 1',
    term: 2,
    orderIndex: 9,
    title: 'Lines and Angles',
    description: 'Classify angles, complementary, supplementary, vertically opposite, and parallel lines with transversals.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=P3AOoLbA3us',
    youtubeId: 'P3AOoLbA3us',
    keyNotes: `Fundamental angle theorems:
• Angles on a straight line = 180°; Angles at a point = 360°.
• Vertically opposite angles are equal.
• Parallel lines: Alternate (Z) angles are equal; Corresponding (F) angles are equal; Co-interior (C) angles sum to 180°.`,
    examples: [
      {
        id: 'ex-la-1',
        title: 'Angles on a Straight Line',
        problem: 'Three angles on a straight line are 2x, 3x, and 40°. Find the value of x.',
        stepByStepSolution: [
          'Step 1: Angles on a straight line sum to 180°: 2x + 3x + 40° = 180°.',
          'Step 2: 5x + 40° = 180° => 5x = 140°.',
          'Step 3: x = 140 / 5 = 28°.',
        ],
        keyTakeaway: 'Always state your reason: "angles on a straight line sum to 180°".',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-linesangles',
      topicId: 'jhs1-math-t9-linesangles',
      title: 'Lines & Angles Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-la-1',
          quizId: 'quiz-jhs1-math-linesangles',
          questionText: 'Two angles are complementary. If one angle is 38°, what is the other angle?',
          optionA: '52°',
          optionB: '142°',
          optionC: '62°',
          optionD: '72°',
          correctOption: 'A',
          explanation: 'Complementary angles sum to 90°. Other angle = 90° - 38° = 52°.',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t10-polygons',
    subjectId: 'math',
    level: 'JHS 1',
    term: 2,
    orderIndex: 10,
    title: 'Plane Shapes and Polygons',
    description: 'Properties of triangles, quadrilaterals, exterior angle theorem, and polygon interior angle sum formula.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=6_333wLzYxQ',
    youtubeId: '6_333wLzYxQ',
    keyNotes: `A polygon is a closed 2D shape with straight sides.
• Triangle angles sum = 180°. Exterior angle = sum of opposite interior angles.
• Polygon Interior Angle Sum: S = (n - 2) × 180°.
• Sum of exterior angles of any polygon = 360°.
• Regular polygon: each exterior = 360° / n; each interior = 180° - (360° / n).`,
    examples: [
      {
        id: 'ex-poly-1',
        title: 'Interior Angle Sum of a Polygon',
        problem: 'Calculate the sum of interior angles of a hexagon (6-sided polygon).',
        stepByStepSolution: [
          'Step 1: Formula: S = (n - 2) × 180° where n = 6.',
          'Step 2: S = (6 - 2) × 180° = 4 × 180° = 720°.',
        ],
        keyTakeaway: 'The sum of interior angles increases by 180° for each additional side.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-polygons',
      topicId: 'jhs1-math-t10-polygons',
      title: 'Polygons & Plane Shapes Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-poly-1',
          quizId: 'quiz-jhs1-math-polygons',
          questionText: 'What is the size of each exterior angle of a regular octagon (8 sides)?',
          optionA: '36°',
          optionB: '45°',
          optionC: '60°',
          optionD: '135°',
          correctOption: 'B',
          explanation: 'Exterior angle of a regular polygon = 360° / n = 360° / 8 = 45°.',
        },
      ],
    },
  },

  // ==========================================
  // TERM 3
  // ==========================================
  {
    id: 'jhs1-math-t11-construction',
    subjectId: 'math',
    level: 'JHS 1',
    term: 3,
    orderIndex: 11,
    title: 'Geometric Construction',
    description: 'Use ruler and compass to construct perpendicular bisectors, angle bisectors, 60°, 90°, 45°, 30°, and triangles.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=LdQh5q_924o',
    youtubeId: 'LdQh5q_924o',
    keyNotes: `Geometric construction uses only a straight edge and compasses.
• Never erase construction arcs! Examiners look for intersecting arcs.
• Bisect line segment: arcs of same radius above and below.
• Construct 60°: intersection of radius equal to base arc.
• Bisect 60° gives 30°; bisect 90° gives 45°.`,
    examples: [
      {
        id: 'ex-const-1',
        title: 'Bisection of an Angle',
        problem: 'Describe the key steps to bisect a given angle ABC.',
        stepByStepSolution: [
          'Step 1: With vertex B as center, draw an arc cutting arms BA and BC at points P and Q.',
          'Step 2: With center P, draw an arc inside the angle space.',
          'Step 3: With center Q and the SAME radius, draw an arc intersecting the first arc at point R.',
          'Step 4: Draw a straight ray from vertex B through point R. Ray BR bisects angle ABC.',
        ],
        keyTakeaway: 'Always keep compass radius constant when drawing intersecting arcs from P and Q.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-construction',
      topicId: 'jhs1-math-t11-construction',
      title: 'Geometric Construction Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-const-1',
          quizId: 'quiz-jhs1-math-construction',
          questionText: 'Which angle is obtained by bisecting a 90° angle?',
          optionA: '30°',
          optionB: '45°',
          optionC: '60°',
          optionD: '75°',
          correctOption: 'B',
          explanation: 'Bisecting means dividing into two equal halves: 90° ÷ 2 = 45°.',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t12-perimeterarea',
    subjectId: 'math',
    level: 'JHS 1',
    term: 3,
    orderIndex: 12,
    title: 'Perimeter and Area of Plane Figures',
    description: 'Calculate boundary perimeter and flat area of rectangles, squares, triangles, parallelograms, and circles.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=rSVMrPu0__U',
    youtubeId: 'rSVMrPu0__U',
    keyNotes: `• Perimeter is the distance around the boundary (units: cm, m).
• Rectangle: P = 2(l + w), Area = l × w.
• Triangle: Area = ½ × base × perpendicular height.
• Circle: Circumference C = 2πr = πd; Area A = πr².`,
    examples: [
      {
        id: 'ex-pa-1',
        title: 'Area and Circumference of a Circle',
        problem: 'A circular garden has a diameter of 14 m. Taking π = 22/7, find its: (i) circumference (ii) area.',
        stepByStepSolution: [
          'Step 1: Radius r = diameter / 2 = 14 / 2 = 7 m.',
          'Step 2: Circumference C = 2πr = 2 × (22/7) × 7 = 44 m.',
          'Step 3: Area A = πr² = (22/7) × 7 × 7 = 154 m².',
        ],
        keyTakeaway: 'Always find the radius first by halving the diameter before calculating area.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-perimeterarea',
      topicId: 'jhs1-math-t12-perimeterarea',
      title: 'Perimeter & Area Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-pa-1',
          quizId: 'quiz-jhs1-math-perimeterarea',
          questionText: 'A triangle has a base of 12 cm and a perpendicular height of 8 cm. What is its area?',
          optionA: '96 cm²',
          optionB: '48 cm²',
          optionC: '40 cm²',
          optionD: '20 cm²',
          correctOption: 'B',
          explanation: 'Area = ½ × base × height = ½ × 12 × 8 = 48 cm².',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t13-datacollection',
    subjectId: 'math',
    level: 'JHS 1',
    term: 3,
    orderIndex: 13,
    title: 'Data Collection and Frequency Tables',
    description: 'Tally charts, frequency distribution tables, vertical/horizontal bar charts, and pie chart sector angles.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=oI3hZASl19o',
    youtubeId: 'oI3hZASl19o',
    keyNotes: `Statistics starts with organizing raw numerical data:
• Tally marks are bundled in groups of 5.
• Frequency (f) is the count of occurrences.
• Bar charts have equal bar widths and equal spaces between bars.
• Pie chart sector angle = (f / Σf) × 360°.`,
    examples: [
      {
        id: 'ex-dc-1',
        title: 'Sector Angle for Pie Chart',
        problem: 'In a class of 40 students, 10 prefer Football. What is the sector angle for Football in a pie chart?',
        stepByStepSolution: [
          'Step 1: Formula: Angle = (Frequency / Total) × 360°.',
          'Step 2: Angle = (10 / 40) × 360° = ¼ × 360° = 90°.',
        ],
        keyTakeaway: 'All sector angles in a pie chart must sum to 360°.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-datacollection',
      topicId: 'jhs1-math-t13-datacollection',
      title: 'Data Collection & Charts Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-dc-1',
          quizId: 'quiz-jhs1-math-datacollection',
          questionText: 'What is the sum of all sector angles in any complete pie chart?',
          optionA: '180°',
          optionB: '270°',
          optionC: '360°',
          optionD: '100°',
          correctOption: 'C',
          explanation: 'A pie chart represents a full circle, and angles at a point always sum to 360°.',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t14-centraltendency',
    subjectId: 'math',
    level: 'JHS 1',
    term: 3,
    orderIndex: 14,
    title: 'Measures of Central Tendency (Mean, Median, Mode)',
    description: 'Calculate and interpret the Mode, Median, Mean, and Range from raw lists and frequency distribution tables.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=B1HEzNTGeZ4',
    youtubeId: 'B1HEzNTGeZ4',
    keyNotes: `Statistical averages:
• Mode: Score that occurs most frequently.
• Median: Middle score after sorting in ascending order.
• Mean: (Sum of all values) / (Total count) = Σx / n.
• Range: Highest value - Lowest value.`,
    examples: [
      {
        id: 'ex-ct-1',
        title: 'Calculating Mean, Median, and Mode',
        problem: 'Given the test marks: 4, 7, 5, 9, 7, 6, 4, 7. Find: (i) Mode (ii) Median (iii) Mean.',
        stepByStepSolution: [
          'Step 1: Arrange in ascending order: 4, 4, 5, 6, 7, 7, 7, 9 (n = 8).',
          'Step 2: Mode = 7 (appears three times, most frequent).',
          'Step 3: Median: middle two scores are 6 and 7. Median = (6 + 7)/2 = 6.5.',
          'Step 4: Mean = (4 + 4 + 5 + 6 + 7 + 7 + 7 + 9) / 8 = 49 / 8 = 6.125.',
        ],
        keyTakeaway: 'Always arrange scores in order of magnitude before finding the median!',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-centraltendency',
      topicId: 'jhs1-math-t14-centraltendency',
      title: 'Averages & Central Tendency Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-ct-1',
          quizId: 'quiz-jhs1-math-centraltendency',
          questionText: 'What is the median of the numbers: 12, 5, 8, 14, 9?',
          optionA: '8',
          optionB: '9',
          optionC: '12',
          optionD: '9.6',
          correctOption: 'B',
          explanation: 'First sort in ascending order: 5, 8, 9, 12, 14. The middle score is 9.',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t15-probability',
    subjectId: 'math',
    level: 'JHS 1',
    term: 3,
    orderIndex: 15,
    title: 'Introduction to Probability',
    description: 'The probability scale from 0 to 1, sample spaces, theoretical probability, coins, dice, and cards.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=KzfWUEJjG18',
    youtubeId: 'KzfWUEJjG18',
    keyNotes: `Probability measures how likely an event is to happen:
• Probability scale: 0 (impossible) to 1 (certain).
• Formula: P(Event) = (Number of favorable outcomes) / (Total possible outcomes).
• P(not Event) = 1 - P(Event).
• Probability can never be negative and never greater than 1.`,
    examples: [
      {
        id: 'ex-prob-1',
        title: 'Probability with a 6-Sided Die',
        problem: 'A fair 6-sided die is rolled once. Find the probability of getting: (i) an even number (ii) a prime number.',
        stepByStepSolution: [
          'Step 1: Sample space S = {1, 2, 3, 4, 5, 6}, total n(S) = 6.',
          'Step 2: Even numbers E = {2, 4, 6}, n(E) = 3. P(Even) = 3/6 = 1/2.',
          'Step 3: Prime numbers P = {2, 3, 5}, n(P) = 3 (1 is not prime!). P(Prime) = 3/6 = 1/2.',
        ],
        keyTakeaway: 'Remember that 1 is neither prime nor composite.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-probability',
      topicId: 'jhs1-math-t15-probability',
      title: 'Probability Assessment',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-prob-1',
          quizId: 'quiz-jhs1-math-probability',
          questionText: 'A bag contains 5 red balls, 3 blue balls, and 2 green balls. What is the probability of picking a blue ball at random?',
          optionA: '3/10',
          optionB: '1/3',
          optionC: '3/7',
          optionD: '1/2',
          correctOption: 'A',
          explanation: 'Total balls = 5 + 3 + 2 = 10. Blue balls = 3. P(Blue) = 3/10.',
        },
      ],
    },
  },
];
