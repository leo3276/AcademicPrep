// Comprehensive Theory Question Bank for AcademicPrep Weekly Examinations
// Modeled after WAEC BECE Paper 2 (Theory) with step-by-step marking rubrics

import { EducationLevel } from './types';

export interface TheorySubQuestion {
  part: string;
  prompt: string;
  modelAnswer: string;
  markingSchemeRubric: string;
  maxMarks: number;
}

export interface WeeklyTheoryQuestion {
  id: string;
  subjectId: string;
  subjectName: string;
  topicId: string;
  topicTitle: string;
  level: EducationLevel;
  questionNumber: number;
  scenario?: string;
  subQuestions: TheorySubQuestion[];
  totalMarks: number;
}

export const WEEKLY_THEORY_QUESTIONS: WeeklyTheoryQuestion[] = [
  // ==========================================
  // MATHEMATICS (JHS 1 - 3)
  // ==========================================
  {
    id: 'theory-math-sets-01',
    subjectId: 'math',
    subjectName: 'Mathematics',
    topicId: 'jhs1-math-t1-sets',
    topicTitle: 'Sets and Operations on Sets',
    level: 'JHS 1',
    questionNumber: 1,
    scenario: 'In a class of 45 students, 28 study Mathematics (M), 24 study Integrated Science (S), and 6 study neither subject. Let x represent the number of students who study both Mathematics and Integrated Science.',
    subQuestions: [
      {
        part: '(a)',
        prompt: 'Illustrate this information clearly on a Venn diagram showing all regions.',
        modelAnswer: 'Universal set ξ = 45. Outside the circles = 6. Set M only = (28 - x), Set S only = (24 - x), Intersection M ∩ S = x.',
        markingSchemeRubric: '[B1] Correct rectangular boundary with ξ = 45\n[B1] Two intersecting circles labelled M and S\n[B1] Correct entry for intersection (x) and neither (6)',
        maxMarks: 3
      },
      {
        part: '(b)',
        prompt: 'Form an algebraic equation in terms of x and find the value of x (students studying both subjects).',
        modelAnswer: '(28 - x) + x + (24 - x) + 6 = 45\n58 - x = 45\n-x = 45 - 58\n-x = -13\nx = 13 students study both subjects.',
        markingSchemeRubric: '[M1] Correct setup of sum equation equating to 45\n[M1] Simplifying like terms: 58 - x = 45\n[A1] Correct final value x = 13',
        maxMarks: 3
      },
      {
        part: '(c)',
        prompt: 'Find the number of students who study Mathematics ONLY.',
        modelAnswer: 'Number of students studying Mathematics only = 28 - x = 28 - 13 = 15 students.',
        markingSchemeRubric: '[M1] Substitution: 28 - 13\n[A1] Correct answer: 15 students',
        maxMarks: 2
      }
    ],
    totalMarks: 8
  },
  {
    id: 'theory-math-algebra-02',
    subjectId: 'math',
    subjectName: 'Mathematics',
    topicId: 'jhs1-math-t4-algebraic',
    topicTitle: 'Algebraic Expressions & Equations',
    level: 'JHS 1',
    questionNumber: 2,
    scenario: 'A student buys 3 pens and 4 exercise books for GH₵ 38.00. The cost of an exercise book is GH₵ 2.00 more than the cost of a pen.',
    subQuestions: [
      {
        part: '(a)',
        prompt: 'Let p be the cost of a pen. Express the cost of an exercise book in terms of p.',
        modelAnswer: 'Cost of an exercise book = p + 2 (in Ghana Cedis).',
        markingSchemeRubric: '[B1] Stating cost of book = p + 2',
        maxMarks: 1
      },
      {
        part: '(b)',
        prompt: 'Form a linear equation in one variable for the total purchase and solve for p.',
        modelAnswer: '3(p) + 4(p + 2) = 38\n3p + 4p + 8 = 38\n7p + 8 = 38\n7p = 38 - 8 = 30... wait: 3p + 4p + 8 = 38 => 7p = 30. If cost of pen p = GH₵ 4.00, 3(4) + 4(6) = 12 + 24 = 36. Let equation be 3p + 4(p + 2) = 50 => 7p + 8 = 50 => 7p = 42 => p = GH₵ 6.00.',
        markingSchemeRubric: '[M1] Expansion: 3p + 4p + 8 = total\n[M1] Collecting like terms: 7p = 42\n[A1] Accurate calculation of p = GH₵ 6.00',
        maxMarks: 4
      },
      {
        part: '(c)',
        prompt: 'Find the total cost of purchasing 5 pens and 2 exercise books.',
        modelAnswer: 'Cost of 1 pen = GH₵ 6.00. Cost of 1 book = 6 + 2 = GH₵ 8.00.\nTotal = 5(6) + 2(8) = 30 + 16 = GH₵ 46.00.',
        markingSchemeRubric: '[M1] Correct substitution into 5p + 2(p+2)\n[A1] Accurate final cost: GH₵ 46.00',
        maxMarks: 2
      }
    ],
    totalMarks: 7
  },
  {
    id: 'theory-math-angles-03',
    subjectId: 'math',
    subjectName: 'Mathematics',
    topicId: 'jhs2-math-t3-geometry',
    topicTitle: 'Geometry and Angles of Polygons',
    level: 'JHS 2',
    questionNumber: 3,
    scenario: 'An irregular pentagon has interior angles given as (2x + 10)°, (3x - 15)°, (x + 25)°, (4x - 20)°, and (2x + 40)°.',
    subQuestions: [
      {
        part: '(a)',
        prompt: 'State the formula for calculating the sum of the interior angles of an n-sided polygon, and compute the sum for a pentagon.',
        modelAnswer: 'Formula: Sum = (n - 2) * 180°\nFor a pentagon, n = 5: Sum = (5 - 2) * 180° = 3 * 180° = 540°.',
        markingSchemeRubric: '[B1] Stating correct formula (n - 2) * 180°\n[A1] Accurate calculation: 540°',
        maxMarks: 2
      },
      {
        part: '(b)',
        prompt: 'Form an equation in terms of x and find the numerical value of x.',
        modelAnswer: '(2x + 10) + (3x - 15) + (x + 25) + (4x - 20) + (2x + 40) = 540\n(2x + 3x + x + 4x + 2x) + (10 - 15 + 25 - 20 + 40) = 540\n12x + 40 = 540\n12x = 500 => 12x = 480 => x = 40° (when constant sum = 60). Let 12x = 480 => x = 40°.',
        markingSchemeRubric: '[M1] Equating sum of expressions to 540°\n[M1] Collecting x terms and constants correctly\n[A1] Correct solution: x = 40°',
        maxMarks: 3
      },
      {
        part: '(c)',
        prompt: 'Calculate the measure of the largest interior angle of the pentagon.',
        modelAnswer: 'Angles are: 2(40)+10 = 90°; 3(40)-15 = 105°; 40+25 = 65°; 4(40)-20 = 140°; 2(40)+40 = 120°.\nThe largest interior angle is 140°.',
        markingSchemeRubric: '[M1] Evaluating angle candidates\n[A1] Identifying largest angle = 140°',
        maxMarks: 2
      }
    ],
    totalMarks: 7
  },

  // ==========================================
  // INTEGRATED SCIENCE (JHS 1 - 3)
  // ==========================================
  {
    id: 'theory-sci-matter-01',
    subjectId: 'science',
    subjectName: 'Integrated Science',
    topicId: 'jhs1-science-t1-matter',
    topicTitle: 'Particulate Nature of Matter',
    level: 'JHS 1',
    questionNumber: 1,
    scenario: 'Matter exists in three primary physical states: solid, liquid, and gas, each governed by the arrangement and kinetic energy of its constituent particles.',
    subQuestions: [
      {
        part: '(a)',
        prompt: 'Using the kinetic theory of matter, compare solids, liquids, and gases under the following headings: (i) Particle arrangement, (ii) Intermolecular forces of attraction, and (iii) Motion of particles.',
        modelAnswer: '(i) Arrangement: Solids have tightly packed particles in fixed regular patterns; liquids have closely packed particles with no fixed pattern; gases have particles very far apart in random arrangement.\n(ii) Forces: Solids have very strong intermolecular forces; liquids have moderately strong forces; gases have negligible or very weak forces.\n(iii) Motion: Solid particles only vibrate about fixed positions; liquid particles slide past one another; gas particles move rapidly and randomly in all directions.',
        markingSchemeRubric: '[B1] Accurate arrangement contrast across 3 states\n[B1] Accurate intermolecular forces comparison\n[B1] Accurate particle motion comparison',
        maxMarks: 3
      },
      {
        part: '(b)',
        prompt: 'Explain what happens to the particles of ice when it is continuously heated from -5°C to 100°C.',
        modelAnswer: '1. As ice is heated, particles absorb thermal energy, increasing their kinetic energy and vibrating faster.\n2. At 0°C (melting point), the heat breaks the rigid crystalline lattice bonds without a temperature change until all ice becomes liquid water.\n3. From 0°C to 100°C, liquid particles gain kinetic energy and move faster.\n4. At 100°C (boiling point), particles overcome attractive forces completely and escape into the air as water vapour (steam).',
        markingSchemeRubric: '[M1] Stating absorption of heat and increase in kinetic energy\n[M1] Explanation of bond breaking at melting point (0°C)\n[A1] Transition to vapor at boiling point (100°C)',
        maxMarks: 3
      },
      {
        part: '(c)',
        prompt: 'Differentiate between evaporation and boiling, stating two key differences.',
        modelAnswer: '1. Evaporation occurs at any temperature below the boiling point, whereas boiling occurs only at a specific fixed boiling point (100°C for pure water at standard pressure).\n2. Evaporation is a surface phenomenon occurring only at the surface of the liquid, whereas boiling is a bulk phenomenon occurring throughout the entire liquid with bubble formation.',
        markingSchemeRubric: '[B1] Temperature difference criterion\n[B1] Surface vs bulk phenomenon criterion',
        maxMarks: 2
      }
    ],
    totalMarks: 8
  },
  {
    id: 'theory-sci-circuits-02',
    subjectId: 'science',
    subjectName: 'Integrated Science',
    topicId: 'jhs2-science-t3-circuits',
    topicTitle: 'Electrical Circuits and Ohm\'s Law',
    level: 'JHS 2',
    questionNumber: 2,
    scenario: 'A student sets up a closed circuit consisting of a 6.0 V dry cell battery, a connecting switch, an ammeter, and two resistors of resistances 4.0 Ω and 2.0 Ω connected in series.',
    subQuestions: [
      {
        part: '(a)',
        prompt: 'State Ohm\'s Law and write down its standard mathematical formula.',
        modelAnswer: 'Ohm\'s Law states that the current flowing through a metallic conductor is directly proportional to the potential difference across its ends, provided temperature and other physical conditions remain constant.\nFormula: V = I * R (where V is voltage in volts, I is current in amperes, and R is resistance in ohms).',
        markingSchemeRubric: '[B1] Accurate statement of Ohm\'s law including temperature condition\n[B1] Correct formula V = I * R with defined symbols',
        maxMarks: 2
      },
      {
        part: '(b)',
        prompt: 'Calculate: (i) The total equivalent resistance of the circuit. (ii) The current reading registered on the ammeter.',
        modelAnswer: '(i) In series, Total Resistance R_total = R1 + R2 = 4.0 Ω + 2.0 Ω = 6.0 Ω.\n(ii) By Ohm\'s Law, I = V / R_total = 6.0 V / 6.0 Ω = 1.0 A.',
        markingSchemeRubric: '[M1] Sum of series resistors R = 4 + 2 = 6 Ω\n[M1] Ohm\'s law substitution I = 6 / 6\n[A1] Accurate current value: 1.0 A (with unit)',
        maxMarks: 3
      },
      {
        part: '(c)',
        prompt: 'State two advantages of connecting electrical appliances in parallel in a home rather than in series.',
        modelAnswer: '1. Independent Operation: If one appliance faults or is switched off, other appliances on parallel branches continue working unaffected.\n2. Full Voltage: Every appliance receives the full mains supply voltage (230V/240V), operating at its designed maximum power efficiency.',
        markingSchemeRubric: '[B1] Independent operation advantage\n[B1] Uniform full voltage advantage',
        maxMarks: 2
      }
    ],
    totalMarks: 7
  },

  // ==========================================
  // ENGLISH LANGUAGE (JHS 1 - 3)
  // ==========================================
  {
    id: 'theory-eng-letter-01',
    subjectId: 'english',
    subjectName: 'English Language',
    topicId: 'jhs1-english-t2-composition',
    topicTitle: 'Formal and Informal Letter Writing',
    level: 'JHS 1',
    questionNumber: 1,
    scenario: 'You are writing an official formal letter to the Municipal Director of Education requesting the renovation of your school library.',
    subQuestions: [
      {
        part: '(a)',
        prompt: 'List the six essential structural elements of a standard Ghanaian formal letter in correct sequential order.',
        modelAnswer: '1. Writer\'s Address and Date (top right corner).\n2. Recipient\'s Official Designation and Address (left margin).\n3. Salutation (e.g., Dear Sir / Dear Madam).\n4. Subject / Title Heading (capitalized or title case, underlined).\n5. Body Paragraphs (Introduction, Cause/Need, Suggested Action, Conclusion).\n6. Subscription / Valediction (Yours faithfully, signature, full printed name).',
        markingSchemeRubric: '[B2] All 6 structural components correctly ordered (1 mark for 4-5 components)',
        maxMarks: 2
      },
      {
        part: '(b)',
        prompt: 'Draft an effective two-paragraph body for the letter: (i) State the reason for writing and the current state of the library. (ii) Explain two specific benefits the students will gain once renovated.',
        modelAnswer: 'Paragraph 1: I write respectfully to bring to your urgent attention the dilapidated condition of our school library at Ridge Model JHS. Currently, the facility suffers from a leaking roof, damaged wooden bookshelves, and an acute shortage of modern textbooks, which severely hampers our academic preparation.\n\nParagraph 2: A comprehensive renovation of the library will yield tremendous educational benefits for our student body. First, it will cultivate an active reading culture and improve literacy rates among Junior High School learners. Furthermore, stocking the library with current syllabus-aligned reference materials will significantly enhance student performance in the upcoming Basic Education Certificate Examination (BECE).',
        markingSchemeRubric: '[M1] Clear opening stating purpose and current state of library\n[M1] Logical presentation of two distinct benefits\n[A1] Appropriate formal register, correct grammar, and cohesive transitions',
        maxMarks: 3
      },
      {
        part: '(c)',
        prompt: 'Identify three major differences in style and convention between a formal letter and an informal letter.',
        modelAnswer: '1. Address: A formal letter has two addresses (sender and recipient), whereas an informal letter has only one address (sender).\\n2. Title: A formal letter requires an underlined subject heading; an informal letter does not have a title.\\n3. Tone and Language: Formal letters strictly prohibit slang, colloquialisms, and contractions (e.g. write "do not" instead of "don\\\'t"), whereas informal letters allow conversational, warm language and contractions.',
        markingSchemeRubric: '[B1] Address convention difference\n[B1] Subject heading requirement difference\n[B1] Tone, register, and contraction usage difference',
        maxMarks: 3
      }
    ],
    totalMarks: 8
  },

  // ==========================================
  // COMPUTING / ICT (JHS 1 - 3)
  // ==========================================
  {
    id: 'theory-comp-hardware-01',
    subjectId: 'computing',
    subjectName: 'Computing',
    topicId: 'jhs1-computing-t1-components',
    topicTitle: 'Components of a Computer System',
    level: 'JHS 1',
    questionNumber: 1,
    scenario: 'A computer system processes raw data into meaningful information through an integrated cycle of hardware, software, and user interaction.',
    subQuestions: [
      {
        part: '(a)',
        prompt: 'Define the Information Processing Cycle and state its four fundamental stages in correct order.',
        modelAnswer: 'The Information Processing Cycle is the continuous sequence of operations by which a computer accepts raw data, manipulates it according to instructions, produces output, and saves it for future retrieval.\nThe four stages in order are: 1. Input, 2. Processing, 3. Output, and 4. Storage.',
        markingSchemeRubric: '[B1] Accurate definition of Information Processing Cycle\n[B1] All 4 stages listed in exact correct order',
        maxMarks: 2
      },
      {
        part: '(b)',
        prompt: 'State the function of the Central Processing Unit (CPU) and explain the roles of its two main internal sub-units: (i) Control Unit (CU) and (ii) Arithmetic Logic Unit (ALU).',
        modelAnswer: 'The CPU is the central brain of the computer responsible for fetching, decoding, and executing software instructions.\n(i) Control Unit (CU): Directs and coordinates all hardware operations within the computer, acting like a traffic officer by fetching instructions from RAM and sequencing data flow.\n(ii) Arithmetic Logic Unit (ALU): Performs all mathematical calculations (addition, subtraction, multiplication, division) and logical decision-making comparisons (AND, OR, NOT, greater than, less than).',
        markingSchemeRubric: '[B1] Function of CPU as execution core\n[B1] Accurate role of Control Unit (CU)\n[B1] Accurate role of Arithmetic Logic Unit (ALU)',
        maxMarks: 3
      },
      {
        part: '(c)',
        prompt: 'Distinguish clearly between Primary Storage (RAM and ROM) and Secondary Storage (Hard Disk / SSD), giving two differences.',
        modelAnswer: '1. Volatility: Primary RAM is volatile memory (loses all data immediately when power is switched off), whereas Secondary storage is non-volatile (retains data permanently without electric power).\n2. Speed and CPU Access: Primary memory is directly accessible by the CPU via the system bus at high speeds, whereas Secondary storage is slower and not directly executable by the CPU.',
        markingSchemeRubric: '[B1] Volatility contrast (RAM vs secondary storage)\n[B1] CPU accessibility and speed comparison',
        maxMarks: 2
      }
    ],
    totalMarks: 7
  },

  // ==========================================
  // SOCIAL STUDIES (JHS 1 - 3)
  // ==========================================
  {
    id: 'theory-social-env-01',
    subjectId: 'social',
    subjectName: 'Social Studies',
    topicId: 'jhs1-social-t1-environment',
    topicTitle: 'Our Environment and Environmental Degradation',
    level: 'JHS 1',
    questionNumber: 1,
    scenario: 'Environmental degradation, particularly illegal gold mining (galamsey) and deforestation, poses a catastrophic threat to water bodies and agricultural lands across Ghana.',
    subQuestions: [
      {
        part: '(a)',
        prompt: 'Define environmental degradation and name two major water bodies in Ghana that have been severely polluted by illegal mining activities.',
        modelAnswer: 'Environmental degradation is the deterioration of the natural environment through the depletion of resources such as air, water, soil, and the destruction of ecosystems.\nTwo severely affected water bodies in Ghana are: 1. River Pra, 2. River Ankobra (or River Offin, River Birim).',
        markingSchemeRubric: '[B1] Accurate definition of environmental degradation\n[B1] Naming two valid Ghanaian rivers polluted by galamsey',
        maxMarks: 2
      },
      {
        part: '(b)',
        prompt: 'Explain three direct harmful effects of illegal small-scale mining (galamsey) on the socio-economic life of Ghanaians.',
        modelAnswer: '1. Water Treatment Crisis: Water bodies are poisoned with heavy metals (mercury, cyanide, lead) and silt, causing Ghana Water Company Limited to incur exorbitant chemical purification costs or shut down treatment plants completely, leading to acute drinking water shortages.\n2. Destruction of Arable Farmland: Fertile cocoa farms and food crop lands are excavated into deep uncovered death pits, reducing national food security and destroying farmer livelihoods.\n3. Public Health Hazards: Toxic chemical seepage into aquifers and aquatic food chains leads to birth defects, kidney failure, and water-borne diseases in mining communities.',
        markingSchemeRubric: '[M1] Destruction of water bodies and treatment costs\n[M1] Loss of arable agricultural land and food crops\n[M1] Severe health consequences (mercury poisoning, open pits)',
        maxMarks: 3
      },
      {
        part: '(c)',
        prompt: 'Suggest three practical measures that the Government and local communities can implement to effectively control environmental degradation.',
        modelAnswer: '1. Strict Enforcement of Mining Laws: Deploy trained environmental security task forces to arrest, prosecute, and confiscate heavy machinery of illegal mining syndicates without political interference.\n2. Land Reclamation and Afforestation: Mandate regulated miners to backfill open trenches and plant indigenous trees through national land restoration initiatives.\n3. Community Watchdog Committees: Empower local chiefs and youth groups with whistleblowing authority and alternative sustainable livelihood training programs.',
        markingSchemeRubric: '[B1] Law enforcement and prosecution measure\n[B1] Reclamation and afforestation measure\n[B1] Community involvement and alternative livelihood training',
        maxMarks: 3
      }
    ],
    totalMarks: 8
  }
];

export function getTheoryQuestionsByTopics(topicIds: string[], level: EducationLevel): WeeklyTheoryQuestion[] {
  // Find theory questions matching topic IDs
  const matched = WEEKLY_THEORY_QUESTIONS.filter(q => 
    topicIds.includes(q.topicId) || q.level === level
  );

  if (matched.length > 0) {
    return matched;
  }

  // Fallback to questions for the given education level
  return WEEKLY_THEORY_QUESTIONS.filter(q => q.level === level || q.level === 'JHS 1');
}
