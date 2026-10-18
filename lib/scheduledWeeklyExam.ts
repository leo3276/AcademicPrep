// Scheduled Weekly Examination System for AcademicPrep
// Features: Fixed 6:00 PM GMT Scheduled Examination, Sequential Timers (30m Objs + 1hr Theory),
// Strict Tab-Switch Anti-Cheating Expiration, and Pre-Exam Briefing.

import { EducationLevel, QuizQuestion } from './types';
import { WeeklyTheoryQuestion } from './weeklyTheoryQuestionBank';

export interface ScheduledExamConfig {
  id: string;
  title: string;
  level: EducationLevel;
  subjectId: string;
  subjectName: string;
  topicId: string;
  topicTitle: string;
  scheduledStartUtc: string; // ISO 8601 string, e.g. "2026-10-18T18:00:00.000Z"
  windowDurationHours: number; // 6 hours (6:00 PM to 12:00 AM GMT Midnight)
  paper1DurationMinutes: number; // 30 minutes
  paper2DurationMinutes: number; // 60 minutes
  paper1MaxMarks: number; // 40 marks
  paper2MaxMarks: number; // 60 marks
  totalMarks: number; // 100 marks
  antiCheatStrict: boolean; // If true, leaving the tab immediately expires and submits the exam
  paper1Questions: QuizQuestion[];
  paper2Questions: WeeklyTheoryQuestion[];
}

export interface ScheduledExamAttemptRecord {
  id: string;
  examId: string;
  studentId: string;
  studentName?: string;
  studentPhone?: string;
  startedAt: string;
  completedAt: string;
  status: 'completed' | 'expired';
  terminationReason?: 'normal_submission' | 'time_expired' | 'tab_switched_expired';
  timeSpentSeconds: number;
  
  // Paper 1 (30 mins Objs)
  paper1Answers: Record<string, 'A' | 'B' | 'C' | 'D'>;
  paper1CorrectCount: number;
  paper1TotalQuestions: number;
  paper1Percentage: number;
  paper1ScoreMarks: number; // Out of 40

  // Paper 2 (1 hr Theory)
  paper2Answers: Record<string, string>; // subQuestionId -> student typed text
  paper2SelfMarks: Record<string, number>; // subQuestionId -> mark awarded
  paper2TotalMarks: number; // Out of 60
  paper2ScoreMarks: number;
  paper2Percentage: number;

  // Composite Score
  compositePercentage: number; // (P1 * 0.4) + (P2 * 0.6)
  stanineGrade: number; // 1 to 9
  gradeRemark: string;
}

export const OFFICIAL_SCHEDULED_EXAM: ScheduledExamConfig = {
  id: 'jhs3-weekly-exam-2026-10-18-atomic',
  title: 'Weekly Examination: Atomic Structure, Periodic Table & Chemical Bonding',
  level: 'JHS 3',
  subjectId: 'science',
  subjectName: 'Integrated Science',
  topicId: 'jhs3-sci-t1-atomic-structure-bonding',
  topicTitle: 'Atomic Structure, Periodic Table & Chemical Bonding',
  scheduledStartUtc: '2026-10-18T18:00:00.000Z', // 6:00 PM GMT Sharp (Locked for students until 6:00 PM)
  windowDurationHours: 6, // Available until 12:00 AM GMT (Midnight)
  paper1DurationMinutes: 30, // 30 Minutes Objectives
  paper2DurationMinutes: 60, // 1 Hour Theory
  paper1MaxMarks: 40,
  paper2MaxMarks: 60,
  totalMarks: 100,
  antiCheatStrict: true,
  paper1Questions: [
    {
      id: 'se-sci-p1-01',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'An atom of an element has 11 protons, 12 neutrons, and 11 electrons. What is the mass number of this atom?',
      optionA: '11',
      optionB: '12',
      optionC: '23',
      optionD: '34',
      correctOption: 'C',
      subConcept: 'Atomic Number and Mass Number',
      explanation: 'Mass number (A) = number of protons (Z) + number of neutrons (n) = 11 + 12 = 23 (Sodium, ²³₁₁Na).',
      remediationTip: 'Remember that mass number counts nuclear particles (protons + neutrons), while atomic number counts protons alone.'
    },
    {
      id: 'se-sci-p1-02',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'Which subatomic particle has a relative mass of approximately 1/1840 amu and carries a unit negative electrical charge?',
      optionA: 'Proton',
      optionB: 'Neutron',
      optionC: 'Electron',
      optionD: 'Positron',
      correctOption: 'C',
      subConcept: 'Properties of Subatomic Particles',
      explanation: 'Electrons have negligible relative mass (1/1840) compared to protons and neutrons (mass = 1) and possess a -1 charge.',
      remediationTip: 'Protons (+1) and neutrons (0) are in the heavy nucleus; electrons (-1) orbit in shells.'
    },
    {
      id: 'se-sci-p1-03',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'What is the maximum number of electrons that can occupy the second energy shell (L-shell) of an atom?',
      optionA: '2',
      optionB: '8',
      optionC: '18',
      optionD: '32',
      correctOption: 'B',
      subConcept: 'Electron Shell Capacities (Bohr Model)',
      explanation: 'Using the 2n² formula: For shell n = 2 (L-shell), maximum capacity = 2(2)² = 2 × 4 = 8 electrons.',
      remediationTip: 'For the first 20 elements, remember the shell capacities: 1st (K) = 2, 2nd (L) = 8, 3rd (M) = 8.'
    },
    {
      id: 'se-sci-p1-04',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'The electronic configuration of a neutral atom is 2, 8, 5. What is the atomic number of this element?',
      optionA: '7',
      optionB: '10',
      optionC: '15',
      optionD: '31',
      correctOption: 'C',
      subConcept: 'Deducing Atomic Number from Electron Configuration',
      explanation: 'In a neutral atom, total electrons = total protons = atomic number = 2 + 8 + 5 = 15 (Phosphorus).',
      remediationTip: 'Sum all electrons in the shells to obtain the atomic number for any neutral atom.'
    },
    {
      id: 'se-sci-p1-05',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'To which group and period in the Periodic Table does an element with electron configuration 2, 8, 7 belong?',
      optionA: 'Group II, Period 7',
      optionB: 'Group VII, Period 3',
      optionC: 'Group VII, Period 2',
      optionD: 'Group III, Period 7',
      correctOption: 'B',
      subConcept: 'Periodic Table Groups and Periods',
      explanation: 'The number of valence electrons (7) gives the Group number (Group VII). The number of occupied shells (3 shells) gives the Period (Period 3).',
      remediationTip: 'Valence electrons = Group number; Number of shells = Period number.'
    },
    {
      id: 'se-sci-p1-06',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'Why do elements belonging to the same vertical group of the Periodic Table exhibit similar chemical properties?',
      optionA: 'They have the same number of electron shells',
      optionB: 'They have identical atomic masses',
      optionC: 'They possess the same number of valence electrons',
      optionD: 'They have the same number of neutrons in the nucleus',
      correctOption: 'C',
      subConcept: 'Periodic Trends and Chemical Reactivity',
      explanation: 'Chemical reactions involve valence electrons. Because elements in the same group have the same number of valence electrons, they react similarly.',
      remediationTip: 'Valence electron count dictates chemical behavior and bonding characteristics.'
    },
    {
      id: 'se-sci-p1-07',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'Which group of elements in the Periodic Table are officially known as the alkali metals?',
      optionA: 'Group I',
      optionB: 'Group II',
      optionC: 'Group VII',
      optionD: 'Group VIII / Group 0',
      correctOption: 'A',
      subConcept: 'Special Families in the Periodic Table',
      explanation: 'Group I elements (Lithium, Sodium, Potassium) are known as alkali metals. Group II are alkaline earth metals, Group VII are halogens, and Group VIII are noble gases.',
      remediationTip: 'Memorize: Group I = Alkali metals, Group VII = Halogens, Group VIII = Noble/Inert gases.'
    },
    {
      id: 'se-sci-p1-08',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'When a magnesium atom (₁₂Mg) reacts to form a stable ion, it achieves an octet structure by:',
      optionA: 'Gaining 2 electrons to form Mg²⁻',
      optionB: 'Sharing 2 electrons with another atom',
      optionC: 'Losing 2 electrons to form Mg²⁺',
      optionD: 'Losing 6 electrons to form Mg⁶⁺',
      correctOption: 'C',
      subConcept: 'Ion Formation in Metals',
      explanation: 'Magnesium has configuration 2, 8, 2. It loses its 2 outer valence electrons to attain a stable octet (2, 8), leaving 12 protons and 10 electrons: Mg²⁺ cation.',
      remediationTip: 'Metals with 1, 2, or 3 valence electrons lose electrons to form positive cations.'
    },
    {
      id: 'se-sci-p1-09',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'An atom of chlorine (₁₇Cl) forms a chloride ion (Cl⁻) by gaining one electron. What is the electron configuration of the chloride ion?',
      optionA: '2, 8, 7',
      optionB: '2, 8, 8',
      optionC: '2, 8, 6',
      optionD: '2, 8, 8, 1',
      correctOption: 'B',
      subConcept: 'Anion Formation in Non-Metals',
      explanation: 'A neutral chlorine atom (2, 8, 7) gains 1 electron into its outermost shell to become Cl⁻ with the stable argon configuration: 2, 8, 8.',
      remediationTip: 'Non-metals gain electrons to complete their octet (8 valence electrons).'
    },
    {
      id: 'se-sci-p1-10',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'What type of chemical bonding involves the electrostatic attraction between oppositely charged ions formed by the transfer of electrons?',
      optionA: 'Covalent bonding',
      optionB: 'Ionic (electrovalent) bonding',
      optionC: 'Metallic bonding',
      optionD: 'Hydrogen bonding',
      correctOption: 'B',
      subConcept: 'Definition of Ionic Bonding',
      explanation: 'Ionic bonding is characterized by the complete transfer of electrons from metallic atoms to non-metallic atoms, creating cations and anions held by electrostatic forces.',
      remediationTip: 'Transfer of electrons = Ionic/Electrovalent bond; Sharing of electrons = Covalent bond.'
    },
    {
      id: 'se-sci-p1-11',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'Which of the following compounds is formed exclusively through covalent bonding?',
      optionA: 'Sodium chloride (NaCl)',
      optionB: 'Magnesium oxide (MgO)',
      optionC: 'Methane (CH₄)',
      optionD: 'Calcium chloride (CaCl₂)',
      correctOption: 'C',
      subConcept: 'Identifying Covalent Compounds',
      explanation: 'Methane (CH₄) is formed between non-metals (Carbon and Hydrogen) sharing electron pairs. NaCl, MgO, and CaCl₂ are ionic salts consisting of metal-nonmetal pairs.',
      remediationTip: 'Metal + Non-metal = Ionic; Non-metal + Non-metal = Covalent.'
    },
    {
      id: 'se-sci-p1-12',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'How many pairs of electrons are shared between the two nitrogen atoms in a molecule of nitrogen gas (N₂)?',
      optionA: 'One pair',
      optionB: 'Two pairs',
      optionC: 'Three pairs',
      optionD: 'Four pairs',
      correctOption: 'C',
      subConcept: 'Multiple Covalent Bonds',
      explanation: 'Nitrogen (atomic number 7) has 5 valence electrons and requires 3 electrons for an octet. Two nitrogen atoms share 3 electron pairs, forming a triple covalent bond (N≡N).',
      remediationTip: 'Single bond = 1 shared pair; Double bond = 2 shared pairs; Triple bond = 3 shared pairs.'
    },
    {
      id: 'se-sci-p1-13',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'Why does solid sodium chloride crystal fail to conduct electric current, whereas molten sodium chloride conducts readily?',
      optionA: 'Solid NaCl contains no ions',
      optionB: 'In the solid state, ions are locked in fixed lattice positions and cannot move',
      optionC: 'Electrons in solid NaCl are completely absent',
      optionD: 'The solid crystal absorbs all electric charges',
      correctOption: 'B',
      subConcept: 'Electrical Conductivity of Ionic Compounds',
      explanation: 'In solid NaCl, ions (Na⁺ and Cl⁻) are firmly anchored in rigid lattice positions by strong electrostatic forces. When melted or dissolved, ions become mobile and migrate to carry electric current.',
      remediationTip: 'WAEC Examiner Rule: Ionic compounds conduct with "mobile ions", not free electrons.'
    },
    {
      id: 'se-sci-p1-14',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'Which noble gas element possesses a stable duplet electron configuration rather than an octet?',
      optionA: 'Neon',
      optionB: 'Argon',
      optionC: 'Helium',
      optionD: 'Krypton',
      correctOption: 'C',
      subConcept: 'Duplet vs Octet Rule',
      explanation: 'Helium has only one energy shell (K-shell) filled with its maximum capacity of 2 electrons, which constitutes a stable duplet.',
      remediationTip: 'Duplet = 2 electrons in the 1st shell (He); Octet = 8 valence electrons in outer shell (Ne, Ar).'
    },
    {
      id: 'se-sci-p1-15',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'Two atoms X and Y have atomic numbers 6 and 8 respectively. Both atoms react to form a gas. What type of bond unites the atoms in the gas?',
      optionA: 'Ionic bond',
      optionB: 'Covalent bond',
      optionC: 'Metallic bond',
      optionD: 'Electrovalent bond',
      correctOption: 'B',
      subConcept: 'Predicting Bonding from Atomic Numbers',
      explanation: 'Atomic number 6 is Carbon (non-metal) and 8 is Oxygen (non-metal). Non-metals combine by sharing electron pairs to form covalent compounds (CO or CO₂).',
      remediationTip: 'Two non-metals always share electrons to form covalent bonds.'
    },
    {
      id: 'se-sci-p1-16',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'What are isotopes?',
      optionA: 'Atoms of different elements with the same mass number',
      optionB: 'Atoms of the same element having the same atomic number but different mass numbers',
      optionC: 'Atoms that have gained or lost electrons',
      optionD: 'Molecules with identical chemical formulas but different structures',
      correctOption: 'B',
      subConcept: 'Definition of Isotopy',
      explanation: 'Isotopes are atoms of the same chemical element that have the same number of protons (atomic number) but different numbers of neutrons (hence different mass numbers).',
      remediationTip: 'Isotopes: Same protons (Z), different neutrons and mass numbers (A).'
    },
    {
      id: 'se-sci-p1-17',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'Chlorine exists naturally as two isotopes: ³⁵₁₇Cl and ³⁷₁₇Cl. How many neutrons are present in the nucleus of ³⁷₁₇Cl?',
      optionA: '17',
      optionB: '18',
      optionC: '20',
      optionD: '37',
      correctOption: 'C',
      subConcept: 'Calculating Neutrons in Isotopes',
      explanation: 'Number of neutrons = Mass number (A) - Atomic number (Z) = 37 - 17 = 20 neutrons.',
      remediationTip: 'Neutrons = A - Z. For Chlorine-35, neutrons = 35 - 17 = 18; for Chlorine-37, neutrons = 37 - 17 = 20.'
    },
    {
      id: 'se-sci-p1-18',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'Which of the following physical properties is characteristic of most simple covalent compounds like water and ethanol?',
      optionA: 'High melting and boiling points',
      optionB: 'Low melting and boiling points',
      optionC: 'Conduct electricity in the solid state',
      optionD: 'Form giant hard ionic crystal lattices',
      correctOption: 'B',
      subConcept: 'Physical Properties of Covalent Compounds',
      explanation: 'Simple covalent substances have weak intermolecular forces holding their molecules together, which require little thermal energy to break, giving them low melting and boiling points.',
      remediationTip: 'Ionic = Strong electrostatic forces -> High melting point; Covalent = Weak intermolecular forces -> Low melting point.'
    },
    {
      id: 'se-sci-p1-19',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'An element has 20 protons and 20 neutrons. What is its chemical name and electron configuration?',
      optionA: 'Potassium, 2, 8, 8, 1',
      optionB: 'Calcium, 2, 8, 8, 2',
      optionC: 'Argon, 2, 8, 8',
      optionD: 'Scandium, 2, 8, 9, 2',
      correctOption: 'B',
      subConcept: 'First 20 Elements (Calcium)',
      explanation: 'Atomic number 20 corresponds to Calcium (Ca). Its 20 electrons are configured as 2, 8, 8, 2.',
      remediationTip: 'The 20th element is Calcium (Ca: 2, 8, 8, 2).'
    },
    {
      id: 'se-sci-p1-20',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'Which particle is responsible for the flow of electrical current through a solid copper wire?',
      optionA: 'Mobile positive ions',
      optionB: 'Mobile negative ions',
      optionC: 'Delocalized (free) electrons',
      optionD: 'Protons moving across the lattice',
      correctOption: 'C',
      subConcept: 'Metallic Conduction vs Electrolytic Conduction',
      explanation: 'In metallic conductors like copper, current is carried by a "sea" of delocalized valence electrons moving through the lattice.',
      remediationTip: 'Metals conduct via delocalized electrons; molten/aqueous ionic salts conduct via mobile ions.'
    },
    {
      id: 'se-sci-p1-21',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'What is the chemical formula of the ionic compound formed between aluminium (valency 3) and oxygen (valency 2)?',
      optionA: 'AlO',
      optionB: 'Al₂O₃',
      optionC: 'Al₃O₂',
      optionD: 'AlO₂',
      correctOption: 'B',
      subConcept: 'Writing Chemical Formulas from Valencies',
      explanation: 'Cross-over of valencies: Al³⁺ and O²⁻ exchange numerical valencies to give Al₂O₃ (Aluminium oxide).',
      remediationTip: 'Exchange the valency numbers as subscripts: Al (3) and O (2) -> Al₂O₃.'
    },
    {
      id: 'se-sci-p1-22',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'Which of the following elements is a halogen located in Period 2 of the Periodic Table?',
      optionA: 'Chlorine',
      optionB: 'Fluorine',
      optionC: 'Bromine',
      optionD: 'Iodine',
      correctOption: 'B',
      subConcept: 'Halogens and Periods',
      explanation: 'Fluorine (atomic number 9, configuration 2, 7) has 2 shells, placing it in Period 2 and Group VII (Halogens). Chlorine has 3 shells (Period 3).',
      remediationTip: 'Fluorine is in Period 2; Chlorine is in Period 3; Bromine in Period 4.'
    },
    {
      id: 'se-sci-p1-23',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'Why is an atom electrically neutral as a whole?',
      optionA: 'Its nucleus contains no charged particles',
      optionB: 'The number of positively charged protons equals the number of negatively charged electrons',
      optionC: 'Neutrons neutralize all positive and negative charges',
      optionD: 'Electrons cancel out the mass of protons',
      correctOption: 'B',
      subConcept: 'Electrical Neutrality of Atoms',
      explanation: 'Each proton has a charge of +1 and each electron has a charge of -1. In a neutral atom, proton count equals electron count, resulting in zero net charge.',
      remediationTip: 'Neutral atom: Total protons (+ charges) = Total electrons (- charges).'
    },
    {
      id: 'se-sci-p1-24',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'How many covalent bonds are formed in one molecule of water (H₂O)?',
      optionA: 'One single covalent bond',
      optionB: 'Two single covalent bonds',
      optionC: 'One double covalent bond',
      optionD: 'Two double covalent bonds',
      correctOption: 'B',
      subConcept: 'Covalent Bonding in Water (H₂O)',
      explanation: 'In water, the central oxygen atom shares one electron pair with each of two hydrogen atoms, forming two separate single covalent bonds (H–O–H).',
      remediationTip: 'Water has two single covalent bonds (and 2 lone pairs of electrons on oxygen).'
    },
    {
      id: 'se-sci-p1-25',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'What term describes an ion that carries a positive charge as a result of losing electrons?',
      optionA: 'Anion',
      optionB: 'Cation',
      optionC: 'Isotope',
      optionD: 'Nucleon',
      correctOption: 'B',
      subConcept: 'Cations vs Anions',
      explanation: 'A cation is a positively charged ion formed when a neutral atom loses one or more electrons (e.g., Na⁺, Ca²⁺). An anion is negatively charged.',
      remediationTip: 'Cation = Positive ion (lost electrons); Anion = Negative ion (gained electrons).'
    }
  ],
  paper2Questions: [
    {
      id: 'se-sci-p2-q1',
      subjectId: 'science',
      subjectName: 'Integrated Science',
      topicId: 'jhs3-sci-t1-atomic-structure-bonding',
      topicTitle: 'Atomic Structure, Periodic Table & Chemical Bonding',
      level: 'JHS 3',
      questionNumber: 1,
      totalMarks: 20,
      scenario: 'The table below provides experimental nuclear and electronic data for five neutral atoms represented by letters P, Q, R, S, and T (these letters are not the actual chemical symbols of the elements).\n\n• Atom P: 6 protons, 6 neutrons, 6 electrons\n• Atom Q: 11 protons, 12 neutrons, 11 electrons\n• Atom R: 6 protons, 8 neutrons, 6 electrons\n• Atom S: 12 protons, 12 neutrons, 12 electrons\n• Atom T: 17 protons, 18 neutrons, 17 electrons',
      subQuestions: [
        {
          part: '(a)',
          prompt: 'Calculate the mass number of atom Q and atom T, stating clearly the formula used.',
          modelAnswer: 'Formula: Mass number (A) = Number of protons (Z) + Number of neutrons (n).\n\n• For Atom Q: Mass number = 11 + 12 = 23 (Sodium, ²³₁₁Na).\n• For Atom T: Mass number = 17 + 18 = 35 (Chlorine, ³⁵₁₇Cl).',
          markingSchemeRubric: '[B1] Stating correct formula: Mass number = protons + neutrons\n[A1] Accurate calculation for Atom Q: 23\n[A1] Accurate calculation for Atom T: 35',
          maxMarks: 3
        },
        {
          part: '(b)',
          prompt: 'From the table, identify two atoms that are isotopes of each other. Give a concise scientific explanation for your choice.',
          modelAnswer: 'Atoms P and R are isotopes of each other.\n\nExplanation: Both atom P and atom R have the same atomic number (6 protons), but different numbers of neutrons (P has 6 neutrons while R has 8 neutrons), resulting in different mass numbers (12 and 14 respectively). They represent Carbon-12 and Carbon-14.',
          markingSchemeRubric: '[B1] Correctly identifying atoms P and R\n[B2] Stating that both have same number of protons (6) but different numbers of neutrons (6 vs 8) / different mass numbers',
          maxMarks: 3
        },
        {
          part: '(c)',
          prompt: 'Write down the Bohr electron configuration for Atom Q (11 electrons), Atom S (12 electrons), and Atom T (17 electrons).',
          modelAnswer: '• Atom Q (11 electrons): 2, 8, 1\n• Atom S (12 electrons): 2, 8, 2\n• Atom T (17 electrons): 2, 8, 7',
          markingSchemeRubric: '[B1] Correct configuration for Q: 2, 8, 1\n[B1] Correct configuration for S: 2, 8, 2\n[B1] Correct configuration for T: 2, 8, 7',
          maxMarks: 3
        },
        {
          part: '(d)',
          prompt: 'Deduce the Group and Period of Atom S and Atom T in the Periodic Table. In each case, state the exact reason for your deduction.',
          modelAnswer: '• Atom S (configuration 2, 8, 2):\n  - Group: Group II (because it has 2 valence electrons in its outermost shell).\n  - Period: Period 3 (because it occupies 3 electron shells: K, L, M).\n\n• Atom T (configuration 2, 8, 7):\n  - Group: Group VII (because it has 7 valence electrons in its outermost shell).\n  - Period: Period 3 (because it occupies 3 electron shells: K, L, M).',
          markingSchemeRubric: '[B1] Group II and Period 3 for Atom S\n[B1] Scientific reason for S (valence electrons = group; shells = period)\n[B1] Group VII and Period 3 for Atom T\n[B1] Scientific reason for T (valence electrons = group; shells = period)',
          maxMarks: 4
        },
        {
          part: '(e)',
          prompt: 'When Atom S reacts with Atom T, an ionic compound is formed. (i) State the formula and charge of the ion formed by S. (ii) State the formula and charge of the ion formed by T. (iii) Write the chemical formula of the resulting compound.',
          modelAnswer: '(i) Atom S (2, 8, 2) loses 2 outer electrons to form a dipositive cation: S²⁺ (or Mg²⁺).\n(ii) Atom T (2, 8, 7) gains 1 electron to form a uninegative anion: T⁻ (or Cl⁻).\n(iii) By cross-over of valencies (S has valency 2, T has valency 1), the chemical formula of the compound is ST₂ (corresponding to Magnesium chloride, MgCl₂).',
          markingSchemeRubric: '[B2] Formula and charge of S ion: S²⁺ (1 mark for formula, 1 mark for +2 charge)\n[B2] Formula and charge of T ion: T⁻ (1 mark for formula, 1 mark for -1 charge)\n[B3] Chemical formula ST₂ with correct subscript notation',
          maxMarks: 7
        }
      ]
    },
    {
      id: 'se-sci-p2-q2',
      subjectId: 'science',
      subjectName: 'Integrated Science',
      topicId: 'jhs3-sci-t1-atomic-structure-bonding',
      topicTitle: 'Atomic Structure, Periodic Table & Chemical Bonding',
      level: 'JHS 3',
      questionNumber: 2,
      totalMarks: 20,
      scenario: 'Chemical bonding occurs when atoms gain, lose, or share electrons in order to achieve stable electron configurations similar to noble gases.',
      subQuestions: [
        {
          part: '(a)',
          prompt: 'Differentiate clearly between an ionic (electrovalent) bond and a covalent bond on the basis of how electrons are involved.',
          modelAnswer: '• Ionic (Electrovalent) Bond: Involves the complete transfer of one or more valence electrons from a metallic atom to a non-metallic atom, resulting in positively and negatively charged ions held together by strong electrostatic attraction.\n\n• Covalent Bond: Involves the mutual sharing of one or more pairs of valence electrons between two non-metallic atoms so that each atom attains a stable duplet or octet configuration.',
          markingSchemeRubric: '[B2] Accurate definition of ionic bonding (transfer of electrons metal to non-metal, electrostatic attraction)\n[B2] Accurate definition of covalent bonding (mutual sharing of electron pairs between non-metals)',
          maxMarks: 4
        },
        {
          part: '(b)',
          prompt: 'Describe step-by-step how a sodium atom (₁₁Na) and a chlorine atom (₁₇Cl) combine to form the ionic compound sodium chloride (NaCl).',
          modelAnswer: '1. Neutral Sodium atom has electron configuration 2, 8, 1. To attain octet stability, it loses its 1 outer valence electron to become a sodium cation: Na - 1e⁻ → Na⁺ (configuration 2, 8).\n\n2. Neutral Chlorine atom has electron configuration 2, 8, 7. It accepts the 1 electron lost by sodium into its outermost shell to become a chloride anion: Cl + 1e⁻ → Cl⁻ (configuration 2, 8, 8).\n\n3. The oppositely charged ions (Na⁺ and Cl⁻) are attracted to each other by strong electrostatic forces, forming the ionic crystal lattice of sodium chloride: Na⁺ + Cl⁻ → NaCl.',
          markingSchemeRubric: '[M2] Loss of 1 electron by sodium: Na → Na⁺ + e⁻ (2,8,1 to 2,8)\n[M2] Gain of 1 electron by chlorine: Cl + e⁻ → Cl⁻ (2,8,7 to 2,8,8)\n[A2] Electrostatic attraction between Na⁺ and Cl⁻ forming NaCl crystal',
          maxMarks: 6
        },
        {
          part: '(c)',
          prompt: 'Explain how two chlorine atoms combine to form a chlorine molecule (Cl₂). State the number of shared electron pairs and the nature of the bond.',
          modelAnswer: 'Each neutral chlorine atom has 7 valence electrons (configuration 2, 8, 7) and requires 1 electron to complete its octet.\nSince both atoms are non-metals with equal electronegativity, neither can lose an electron. Instead, each chlorine atom contributes 1 valence electron to form a single shared pair between them.\n\nThis mutual sharing allows both atoms to achieve the stable octet of argon (2, 8, 8). The bond formed is a single covalent bond (Cl–Cl) containing 1 shared pair of electrons (and 6 non-bonding/lone pairs total).',
          markingSchemeRubric: '[M2] Stating both atoms need 1 electron (2,8,7) and mutually share 1 electron each\n[A2] Specifying 1 shared pair of electrons\n[B1] Naming the bond as a single covalent bond',
          maxMarks: 5
        },
        {
          part: '(d)',
          prompt: 'State two conditions necessary for an ionic bond to form between two reacting atoms.',
          modelAnswer: '1. One reacting atom must be a metal with low ionization energy (readily loses electrons), and the other must be a non-metal with high electron affinity (readily gains electrons).\n\n2. There must be a large difference in electronegativity between the two combining elements (typically > 1.7).\n\n(Alternative: High lattice energy released during crystal formation).',
          markingSchemeRubric: '[B2] First valid condition (low ionization energy metal + high electron affinity non-metal)\n[B3] Second valid condition (large electronegativity difference between combining atoms)',
          maxMarks: 5
        }
      ]
    },
    {
      id: 'se-sci-p2-q3',
      subjectId: 'science',
      subjectName: 'Integrated Science',
      topicId: 'jhs3-sci-t1-atomic-structure-bonding',
      topicTitle: 'Atomic Structure, Periodic Table & Chemical Bonding',
      level: 'JHS 3',
      questionNumber: 3,
      totalMarks: 20,
      scenario: 'A JHS 3 Science student sets up an electrical circuit containing a 6V dry cell battery, a torch light bulb, connecting copper wires, a switch, and two carbon electrodes dipped into different test substances.\n\nThe student tests three substances:\nSubstance 1: Dry solid crystals of sodium chloride (NaCl)\nSubstance 2: Aqueous sodium chloride solution (NaCl dissolved in distilled water)\nSubstance 3: Aqueous glucose/sugar solution',
      subQuestions: [
        {
          part: '(a)',
          prompt: 'State whether the light bulb will turn ON or remain OFF for each of the three test substances, and provide a full scientific explanation for each observation.',
          modelAnswer: '• Substance 1 (Solid dry NaCl crystals):\n  - Observation: Bulb remains OFF (no light).\n  - Explanation: In solid sodium chloride, Na⁺ and Cl⁻ ions are held rigidly in fixed positions in the crystal lattice by strong electrostatic forces and CANNOT move. Since there are no mobile charge carriers, the solid does not conduct electricity.\n\n• Substance 2 (Aqueous NaCl solution):\n  - Observation: Bulb turns ON and glows brightly.\n  - Explanation: When dissolved in water, the crystal lattice breaks apart and the ions dissociate. The free, mobile Na⁺ cations migrate to the cathode and Cl⁻ anions migrate to the anode, carrying electric current through the electrolyte.\n\n• Substance 3 (Aqueous glucose/sugar solution):\n  - Observation: Bulb remains OFF (no light).\n  - Explanation: Sugar is a covalent compound consisting of neutral molecules (C₆H₁₂O₆). When dissolved in water, it dissolves as whole neutral molecules without dissociating into ions. With no free ions present, it cannot conduct electricity.',
          markingSchemeRubric: '[B2] Solid NaCl: Bulb OFF + explanation (ions locked rigidly in crystal lattice, no mobile ions)\n[B3] Aqueous NaCl: Bulb ON + explanation (ions dissociate into free mobile Na⁺ and Cl⁻ ions)\n[B3] Sugar solution: Bulb OFF + explanation (covalent neutral molecules, does not dissociate into ions)',
          maxMarks: 8
        },
        {
          part: '(b)',
          prompt: 'Construct a comparison table contrasting four physical properties of ionic compounds against covalent compounds.',
          modelAnswer: 'Property | Ionic Compounds | Covalent Compounds\n---|---|---\n1. Melting & Boiling Points | High (requires intense thermal energy to overcome strong electrostatic lattice forces) | Low (weak intermolecular forces between molecules require little heat to overcome)\n2. Physical State at Room Temp | Hard, brittle crystalline solids | Gases, volatile liquids, or soft solids\n3. Electrical Conductivity | Conduct electricity when molten or in aqueous solution; do NOT conduct when solid | Do NOT conduct electricity in any state (non-electrolytes)\n4. Solubility | Generally soluble in polar solvents (water); insoluble in non-polar organic solvents | Generally insoluble in water; soluble in non-polar organic solvents (kerosene, benzene, ethanol)',
          markingSchemeRubric: '[B1.5] Melting and boiling points contrast\n[B1.5] Physical state at room temperature contrast\n[B1.5] Electrical conductivity contrast (solid vs molten/aqueous)\n[B1.5] Solubility contrast (polar water vs organic solvents)',
          maxMarks: 6
        },
        {
          part: '(c)',
          prompt: 'Distinguish clearly between electrical conduction in a metallic copper wire and electrical conduction in an aqueous sodium chloride electrolyte, specifying the charge carriers in each.',
          modelAnswer: '• In a metallic copper wire, electricity is conducted by delocalized (free) electrons flowing rapidly through the stationary metal cation lattice without any chemical change occurring in the metal.\n\n• In an aqueous sodium chloride electrolyte, electricity is conducted by mobile ions (Na⁺ cations and Cl⁻ anions) migrating physically towards the oppositely charged electrodes, accompanied by chemical decomposition (electrolysis) at the electrode surfaces.\n\nChief Examiner Note: Metals conduct using free electrons; electrolytes conduct using mobile ions.',
          markingSchemeRubric: '[B3] Metallic conduction: Charge carriers are delocalized (free) electrons, no chemical decomposition\n[B3] Electrolyte conduction: Charge carriers are mobile ions (Na⁺ and Cl⁻), involves migration and chemical decomposition at electrodes',
          maxMarks: 6
        }
      ]
    }
  ]
};

// ==========================================
// Storage Keys and State Helpers
// ==========================================
export const SCHEDULED_EXAM_STORAGE_KEYS = {
  ATTEMPT: 'academicprep_scheduled_exam_attempt_v1',
  PREVIEW_OVERRIDE: 'academicprep_scheduled_exam_preview_active',
  PENALTY_LOCKOUT_UNTIL: 'academicprep_scheduled_penalty_lockout_until',
  ACTIVE_EXAM_END_TIME: 'academicprep_scheduled_exam_end_time',
  ACTIVE_EXAM_CURRENT_PAPER: 'academicprep_scheduled_exam_current_paper',
};

/**
 * Sets a 5-minute penalty lockout timestamp
 */
export function setPenaltyLockout(durationSeconds: number = 300): number {
  if (typeof window === 'undefined') return 0;
  const lockoutUntil = Date.now() + durationSeconds * 1000;
  try {
    localStorage.setItem(SCHEDULED_EXAM_STORAGE_KEYS.PENALTY_LOCKOUT_UNTIL, String(lockoutUntil));
  } catch {}
  return lockoutUntil;
}

/**
 * Returns remaining lockout seconds (0 if none or expired)
 */
export function getRemainingPenaltyLockoutSeconds(): number {
  if (typeof window === 'undefined') return 0;
  try {
    const raw = localStorage.getItem(SCHEDULED_EXAM_STORAGE_KEYS.PENALTY_LOCKOUT_UNTIL);
    if (!raw) return 0;
    const until = parseInt(raw, 10);
    if (isNaN(until)) return 0;
    const diff = Math.max(0, Math.ceil((until - Date.now()) / 1000));
    return diff;
  } catch {
    return 0;
  }
}

/**
 * Clears the penalty lockout once served
 */
export function clearPenaltyLockout(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(SCHEDULED_EXAM_STORAGE_KEYS.PENALTY_LOCKOUT_UNTIL);
  } catch {}
}

/**
 * Returns the status of the scheduled examination relative to current time.
 */
export function getScheduledExamStatus(customExam?: ScheduledExamConfig) {
  const exam = customExam || OFFICIAL_SCHEDULED_EXAM;
  const now = new Date().getTime();
  const startTime = new Date(exam.scheduledStartUtc).getTime();
  const endTime = startTime + exam.windowDurationHours * 60 * 60 * 1000;

  // Check preview override for administrative testing
  let isPreview = false;
  if (typeof window !== 'undefined') {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      isPreview = urlParams.get('preview') === 'true' || 
                  urlParams.get('admin') === 'true' ||
                  localStorage.getItem(SCHEDULED_EXAM_STORAGE_KEYS.PREVIEW_OVERRIDE) === 'true';
    } catch {}
  }

  const isLive = isPreview || (now >= startTime && now <= endTime);
  const isEnded = !isPreview && now > endTime;
  const isUpcoming = !isPreview && now < startTime;
  const is5MinWarning = !isPreview && now >= (startTime - 5 * 60 * 1000) && now < startTime;

  const msUntilStart = Math.max(0, startTime - now);
  const msUntilEnd = Math.max(0, endTime - now);

  return {
    isLive,
    isEnded,
    isUpcoming,
    isPreview,
    is5MinWarning,
    startTime: new Date(startTime),
    endTime: new Date(endTime),
    msUntilStart,
    msUntilEnd,
    hoursUntilStart: Math.floor(msUntilStart / (1000 * 60 * 60)),
    minutesUntilStart: Math.floor((msUntilStart % (1000 * 60 * 60)) / (1000 * 60)),
    secondsUntilStart: Math.floor((msUntilStart % (1000 * 60)) / 1000),
  };
}

/**
 * Retrieves past attempt from localStorage
 */
export function getScheduledExamAttempt(examId: string = OFFICIAL_SCHEDULED_EXAM.id): ScheduledExamAttemptRecord | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(`${SCHEDULED_EXAM_STORAGE_KEYS.ATTEMPT}_${examId}`);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

/**
 * Saves a completed or expired attempt to localStorage
 */
export function saveScheduledExamAttempt(attempt: ScheduledExamAttemptRecord): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(
      `${SCHEDULED_EXAM_STORAGE_KEYS.ATTEMPT}_${attempt.examId}`,
      JSON.stringify(attempt)
    );
  } catch (err) {
    console.error('Failed to save scheduled exam attempt:', err);
  }
}

/**
 * Checks whether the current student has already been disqualified / expired
 */
export function isStudentDisqualified(examId: string = OFFICIAL_SCHEDULED_EXAM.id): boolean {
  const attempt = getScheduledExamAttempt(examId);
  return attempt !== null && attempt.status === 'expired';
}
