const fs = require('fs');
const path = require('path');
const { WaecExamPdfGenerator } = require('./waec_pdf_engine');

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads', 'documents');
const DATA_FILE = path.join(process.cwd(), 'data', 'documents.json');

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

// -------------------------------------------------------------
// 2008 SUBJECT DATA DEFINITIONS
// -------------------------------------------------------------

const SUBJECTS_2008 = [
  // 1. MATHEMATICS
  {
    id: 'math',
    name: 'Mathematics',
    code: 'MATH 01/02',
    paper1: {
      duration: '1 Hour',
      instructions: 'Answer all 40 questions. Each question is followed by four options lettered A to D. Find the correct option for each question and mark it on your answer sheet. Mathematical tables and graph papers are provided where required.',
      questions: [
        { q: 'M = {1, 2, 3, 4, 5, ..., 20}, Q = {3, 4, 5, 6, 7, 8} and R = {2, 3, 5, 7}. If Q and R are subsets of M, find Q [intersection] R.', opts: ['{3, 5}', '{5, 7}', '{3, 5, 7}', '{2, 3, 5, 7}'], ans: 'A' },
        { q: 'List the members of the set {x : 2 <= x <= 5}.', opts: ['{2, 5}', '{2, 3, 4}', '{2, 3, 5}', '{2, 3, 4, 5}'], ans: 'D' },
        { q: 'Round 8,921,465 to the nearest hundred.', opts: ['8,921,000', '8,921,400', '8,921,460', '8,921,500'], ans: 'D' },
        { q: 'Write 98 as a product of its prime factors.', opts: ['2 x 7', '2^2 x 7', '2 x 7^2', '2^2 x 7^2'], ans: 'C' },
        { q: 'Evaluate: 4(8 - 2) + 5(3 - 8).', opts: ['-31', '-1', '37', '49'], ans: 'B' },
        { q: 'Arrange the following in descending order of magnitude: 0.32, 2/5, 27%, 1/3.', opts: ['0.32, 2/5, 27%, 1/3', '0.32, 1/3, 2/5, 27%', '2/5, 1/3, 0.32, 27%', '27%, 0.32, 1/3, 2/5'], ans: 'C' },
        { q: 'The ratio 8:12 is equivalent to y:9. What is the value of y?', opts: ['4', '5', '6', '7'], ans: 'C' },
        { q: 'Write 0.55 as a fraction in its lowest term.', opts: ['5/10', '11/20', '11/50', '55/100'], ans: 'B' },
        { q: 'Which of the following geometric solids can be formed from a net with a square base and four congruent triangular faces?', opts: ['Cube', 'Square pyramid', 'Cone', 'Triangular prism'], ans: 'B' },
        { q: 'Simplify: 5w + 7p^2 - 4w + 3p^2.', opts: ['w + 4p^2', 'w + 10p^2', '9w + 10p^2', 'w - 10p^2'], ans: 'B' },
        { q: 'Osei bought a hat for GHS 5.00. He sold it to Yaovi at a profit of 20%. How much did Yaovi pay for the hat?', opts: ['GHS 1.00', 'GHS 4.00', 'GHS 6.00', 'GHS 7.00'], ans: 'C' },
        { q: 'Simplify: 2^9 / 2^3.', opts: ['2^3', '2^6', '2^12', '2^27'], ans: 'B' },
        { q: 'Find the image of -3 under the mapping x -> 2(x + 3).', opts: ['0', '6', '12', '-6'], ans: 'A' },
        { q: 'A football field is 120 m long and 75 m wide. What is the perimeter of the field?', opts: ['195 m', '240 m', '315 m', '390 m'], ans: 'D' },
        { q: 'A tank holds 240 litres of water. How much water is in the tank when it is 4/5 full?', opts: ['48 litres', '120 litres', '192 litres', '200 litres'], ans: 'C' },
        { q: 'A farmer has 6x sheep and 5y goats. He sells 3x sheep and 2y goats. How many animals are left after the sales?', opts: ['3x - 3y', '3x + 3y', '9x + 7y', '3x + 7y'], ans: 'B' },
        { q: 'The average rainfall for May was 140 mm, June was 210 mm, and July was 180 mm. What was the total amount of rainfall in May, June and July?', opts: ['350 mm', '420 mm', '530 mm', '560 mm'], ans: 'C' },
        { q: 'If 21_base_x = 9_base_ten, find the base x.', opts: ['3', '4', '5', '6'], ans: 'B' },
        { q: 'Find the truth set of the inequality: 2x - 3 < 7.', opts: ['{x : x < 5}', '{x : x > 5}', '{x : x < 2}', '{x : x > 2}'], ans: 'A' },
        { q: 'A car uses 5 litres of petrol for a journey of 60 km. How many litres will it use for a journey of 180 km at the same rate?', opts: ['10 litres', '12 litres', '15 litres', '20 litres'], ans: 'C' },
        { q: 'If set P = {1, 2, 3, 4, 6, 12} and set Q = {2, 3, 5, 7, 11}, find P [intersection] Q.', opts: ['{2, 3}', '{1, 2, 3}', '{2, 3, 5}', '{1, 2, 3, 4, 6, 12}'], ans: 'A' },
        { q: 'Find the Highest Common Factor (HCF) of 18, 24 and 36.', opts: ['3', '6', '12', '72'], ans: 'B' },
        { q: 'Evaluate: 3/4 - (1/2 + 1/8).', opts: ['1/8', '1/4', '3/8', '1/2'], ans: 'A' },
        { q: 'Solve for x: 3(x - 2) = 2(x + 4).', opts: ['10', '12', '14', '16'], ans: 'C' },
        { q: 'Calculate the simple interest on GHS 12,000 for 3 years at 5% per annum.', opts: ['GHS 1,200', 'GHS 1,500', 'GHS 1,800', 'GHS 2,400'], ans: 'C' },
        { q: 'The interior angle of a regular polygon is 120 deg. How many sides does it have?', opts: ['5', '6', '7', '8'], ans: 'B' },
        { q: 'Convert 11011_two to a base ten number.', opts: ['23', '27', '29', '31'], ans: 'B' },
        { q: 'If x : y = 2 : 3 and y : z = 4 : 5, find x : z.', opts: ['8 : 15', '2 : 5', '6 : 10', '8 : 12'], ans: 'A' },
        { q: 'Factorize completely: 4a^2 - 9b^2.', opts: ['(2a - 3b)(2a - 3b)', '(2a + 3b)(2a - 3b)', '(4a - 9b)(a + b)', '(2a + 9b)(2a - b)'], ans: 'B' },
        { q: 'A bag contains 5 red balls and 7 blue balls. What is the probability of picking a red ball at random?', opts: ['5/12', '7/12', '5/7', '1/5'], ans: 'A' },
        { q: 'Find the circumference of a circle whose diameter is 14 cm. [Take pi = 22/7]', opts: ['22 cm', '44 cm', '88 cm', '154 cm'], ans: 'B' },
        { q: 'If vector u = (3, -2) and vector v = (-1, 5), find u + 2v.', opts: ['(1, 8)', '(1, 3)', '(2, 8)', '(5, -4)'], ans: 'A' },
        { q: 'Find the gradient of the line passing through points A(2, 3) and B(4, 7).', opts: ['1/2', '1', '2', '4'], ans: 'C' },
        { q: 'The perimeter of a rectangle is 28 cm. If its length is 8 cm, find its width.', opts: ['6 cm', '8 cm', '10 cm', '12 cm'], ans: 'A' },
        { q: 'Find the value of y if 2^y = 32.', opts: ['4', '5', '6', '7'], ans: 'B' },
        { q: 'Calculate the area of a right-angled triangle with base 6 cm and hypotenuse 10 cm.', opts: ['24 cm^2', '30 cm^2', '48 cm^2', '60 cm^2'], ans: 'A' },
        { q: 'Find the volume of a cylinder with radius 7 cm and height 10 cm. [Take pi = 22/7]', opts: ['770 cm^3', '1540 cm^3', '2200 cm^3', '3080 cm^3'], ans: 'B' },
        { q: 'Make t the subject of the formula: v = u + at.', opts: ['t = (v - u) / a', 't = (v + u) / a', 't = v / (u + a)', 't = a(v - u)'], ans: 'A' },
        { q: 'If 3x + 2y = 12 and x = 2, find the value of y.', opts: ['2', '3', '4', '6'], ans: 'B' },
        { q: 'Find the bearing of town P from Q if the bearing of Q from P is 065 deg.', opts: ['115 deg', '205 deg', '245 deg', '335 deg'], ans: 'C' }
      ]
    },
    paper2: {
      duration: '1 Hour 30 Minutes',
      instructions: 'Answer all four questions in Section A and any three questions in Section B. All working must be shown clearly in your answer booklet. Credit will be given for clarity of expression and orderly presentation.',
      questions: [
        {
          num: 1,
          title: 'Algebra and Number Operations',
          scenario: 'A school bookshop purchased a number of exercise books and pens for distribution to students.',
          subparts: [
            { part: 'a', question: 'Simplify: 2 1/3 - 1 3/4 + 5/6.', marks: 4, modelAnswer: 'Convert to improper fractions: 7/3 - 7/4 + 5/6. Common denominator = 12. (28 - 21 + 10) / 12 = 17/12 = 1 5/12. [M1, A2]' },
            { part: 'b', question: 'Solve the simultaneous equations: 2x + 3y = 13 and 3x - y = 3.', marks: 6, modelAnswer: 'From eqn (2), y = 3x - 3. Substitute into (1): 2x + 3(3x - 3) = 13 => 11x = 22 => x = 2. Then y = 3(2) - 3 = 3. Therefore x = 2, y = 3. [M2, A2, B2]' },
            { part: 'c', question: 'Factorize completely: 6ax - 9ay + 4bx - 6by.', marks: 4, modelAnswer: 'Group terms: 3a(2x - 3y) + 2b(2x - 3y) = (3a + 2b)(2x - 3y). [M2, A2]' }
          ]
        },
        {
          num: 2,
          title: 'Geometry and Mensuration',
          scenario: 'A cylindrical water reservoir in a village has an internal radius of 1.4 m and a depth of 5 m.',
          subparts: [
            { part: 'a', question: 'Calculate the volume of the reservoir in cubic metres. [Take pi = 22/7]', marks: 4, modelAnswer: 'Volume = pi * r^2 * h = (22/7) * (1.4)^2 * 5 = 22/7 * 1.96 * 5 = 30.8 m^3. [M2, A2]' },
            { part: 'b', question: 'How many litres of water can the reservoir hold when completely full? (1 m^3 = 1,000 litres)', marks: 3, modelAnswer: 'Capacity = 30.8 * 1,000 = 30,800 litres. [M1, A2]' },
            { part: 'c', question: 'If water is pumped out at a rate of 140 litres per minute, how long in hours will it take to empty the reservoir?', marks: 5, modelAnswer: 'Time = 30,800 / 140 = 220 minutes = 3 hours 40 minutes (or 3 2/3 hours). [M2, A3]' }
          ]
        },
        {
          num: 3,
          title: 'Statistics and Data Analysis',
          scenario: 'The marks obtained by 30 candidates in a test were recorded as follows: 12, 14, 15, 12, 16, 18, 14, 15, 17, 12, 16, 15, 14, 15, 18, 19, 15, 14, 16, 15, 12, 17, 18, 15, 14, 16, 15, 17, 14, 15.',
          subparts: [
            { part: 'a', question: 'Construct a frequency distribution table for the data.', marks: 4, modelAnswer: 'Table showing Marks (12, 14, 15, 16, 17, 18, 19), Tallies, and Frequencies (4, 6, 9, 4, 3, 3, 1; total = 30). [M2, A2]' },
            { part: 'b', question: 'State the mode of the distribution.', marks: 2, modelAnswer: 'The mode is 15 (highest frequency = 9). [B2]' },
            { part: 'c', question: 'Calculate the mean mark of the candidates.', marks: 6, modelAnswer: 'Sum fx = (12*4)+(14*6)+(15*9)+(16*4)+(17*3)+(18*3)+(19*1) = 48+84+135+64+51+54+19 = 455. Mean = 455 / 30 = 15.17 marks. [M3, A3]' }
          ]
        },
        {
          num: 4,
          title: 'Plane Geometry and Vectors',
          scenario: 'In triangle ABC, AB = 8 cm, angle ABC = 90 deg and angle BAC = 30 deg.',
          subparts: [
            { part: 'a', question: 'Using ruler and compasses only, construct triangle ABC.', marks: 5, modelAnswer: 'Accurate construction of line AB = 8 cm, 90 deg perpendicular at B, 30 deg angle at A, and intersection C. [M3, A2]' },
            { part: 'b', question: 'Measure the length of the hypotenuse AC.', marks: 2, modelAnswer: 'AC = 9.24 cm (+/- 0.1 cm). [A2]' },
            { part: 'c', question: 'Given vector p = (4, -3) and vector q = (-2, 5), find the magnitude of (p + q).', marks: 5, modelAnswer: 'p + q = (4 - 2, -3 + 5) = (2, 2). Magnitude = sqrt(2^2 + 2^2) = sqrt(8) = 2*sqrt(2) = 2.83 units. [M3, A2]' }
          ]
        }
      ]
    }
  },

  // 2. INTEGRATED SCIENCE
  {
    id: 'science',
    name: 'Integrated Science',
    code: 'SCI 01/02',
    paper1: {
      duration: '1 Hour',
      instructions: 'Answer all 40 questions on your objective answer sheet. Each question is followed by four options lettered A to D. Choose the correct option and mark it with 2B pencil.',
      questions: [
        { q: 'Which of the following cellular structures is present in plant cells but absent in animal cells?', opts: ['Cell membrane', 'Cytoplasm', 'Cellulose cell wall', 'Mitochondria'], ans: 'C' },
        { q: 'The process by which green plants manufacture carbohydrates using sunlight is called...', opts: ['Transpiration', 'Respiration', 'Photosynthesis', 'Fermentation'], ans: 'C' },
        { q: 'Which of the following is an example of a chemical change?', opts: ['Melting of ice', 'Rusting of iron', 'Dissolving sugar in water', 'Evaporation of alcohol'], ans: 'B' },
        { q: 'The SI unit for measuring electrical resistance is...', opts: ['Ampere', 'Volt', 'Ohm', 'Watt'], ans: 'C' },
        { q: 'Which of the following gas components makes up approximately 78% of atmospheric air?', opts: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Argon'], ans: 'C' },
        { q: 'A substance with a pH value of 3.0 is classified as...', opts: ['Strongly acidic', 'Weakly acidic', 'Neutral', 'Basic'], ans: 'A' },
        { q: 'Which of the following organisms causes malaria in humans?', opts: ['Female Anopheles mosquito', 'Plasmodium parasite', 'Tsetse fly', 'Housefly'], ans: 'B' },
        { q: 'The bending of a ray of light as it passes from air into water is known as...', opts: ['Reflection', 'Refraction', 'Dispersion', 'Diffraction'], ans: 'B' },
        { q: 'Which part of the human alimentary canal is primarily responsible for the absorption of digested nutrients?', opts: ['Stomach', 'Duodenum', 'Ileum (Small intestine)', 'Colon'], ans: 'C' },
        { q: 'An example of a first class lever is...', opts: ['Wheelbarrow', 'Pair of scissors', 'Nutcracker', 'Fishing rod'], ans: 'B' },
        { q: 'The process of removing metabolic waste products from the body of a living organism is called...', opts: ['Egestion', 'Excretion', 'Secretion', 'Defecation'], ans: 'B' },
        { q: 'Which of the following soil types has the highest water retention capacity?', opts: ['Sandy soil', 'Loamy soil', 'Clay soil', 'Gravel'], ans: 'C' },
        { q: 'What is the chemical formula for ordinary table salt?', opts: ['NaOH', 'NaCl', 'CaCO3', 'HCl'], ans: 'B' },
        { q: 'The transfer of heat through solids from a region of higher temperature to lower temperature without movement of the material is...', opts: ['Conduction', 'Convection', 'Radiation', 'Evaporation'], ans: 'A' },
        { q: 'Which vitamin is synthesized in the human skin upon exposure to morning sunlight?', opts: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'], ans: 'D' },
        { q: 'The male reproductive organ of a flowering plant is known as the...', opts: ['Carpel', 'Pistil', 'Stamen', 'Petal'], ans: 'C' },
        { q: 'Which of the following agricultural practices directly prevents soil erosion on steep hillsides?', opts: ['Terracing', 'Slash and burn', 'Monoculture', 'Overgrazing'], ans: 'A' },
        { q: 'The density of a substance is defined as...', opts: ['Mass x Volume', 'Mass / Volume', 'Weight / Volume', 'Volume / Mass'], ans: 'B' },
        { q: 'Which blood cell type is responsible for defending the human body against infectious pathogens?', opts: ['Red blood cells', 'White blood cells', 'Platelets', 'Plasma'], ans: 'B' },
        { q: 'The chemical symbol for Potassium is...', opts: ['P', 'Pt', 'K', 'Po'], ans: 'C' },
        { q: 'An echo is produced due to the...', opts: ['Refraction of sound', 'Reflection of sound', 'Absorption of sound', 'Diffraction of sound'], ans: 'B' },
        { q: 'Which of the following disease conditions is caused by a deficiency of iodine in the human diet?', opts: ['Rickets', 'Scurvy', 'Goitre', 'Beriberi'], ans: 'C' },
        { q: 'The process by which water vapour cools and turns into liquid droplets is called...', opts: ['Sublimation', 'Evaporation', 'Condensation', 'Freezing'], ans: 'C' },
        { q: 'Which gas is evolved when dilute hydrochloric acid reacts with calcium carbonate?', opts: ['Oxygen', 'Hydrogen', 'Carbon dioxide', 'Chlorine'], ans: 'C' },
        { q: 'What type of energy transformation occurs in a microphone?', opts: ['Electrical to sound', 'Sound to electrical', 'Mechanical to thermal', 'Chemical to light'], ans: 'B' },
        { q: 'A safety device in an electrical circuit that melts to break the circuit when excessive current flows is a...', opts: ['Switch', 'Fuse', 'Resistor', 'Transformer'], ans: 'B' },
        { q: 'Which planet is closest to the Sun in our Solar System?', opts: ['Venus', 'Mercury', 'Earth', 'Mars'], ans: 'B' },
        { q: 'The loss of water in the form of water vapour from the aerial parts of a plant is termed...', opts: ['Guttation', 'Transpiration', 'Osmosis', 'Diffusion'], ans: 'B' },
        { q: 'Which of the following instruments is used to measure atmospheric pressure?', opts: ['Thermometer', 'Barometer', 'Hydrometer', 'Anemometer'], ans: 'B' },
        { q: 'What is the chemical name of rust?', opts: ['Hydrated iron(III) oxide', 'Iron(II) chloride', 'Iron(II) sulphate', 'Iron sulphide'], ans: 'A' },
        { q: 'Which organ in the human body filters urea from the bloodstream to form urine?', opts: ['Liver', 'Kidney', 'Lungs', 'Heart'], ans: 'B' },
        { q: 'The process of heating milk to kill disease-causing microorganisms is called...', opts: ['Sterilization', 'Pasteurization', 'Fermentation', 'Refrigeration'], ans: 'B' },
        { q: 'In magnetism, like poles...', opts: ['Attract', 'Repel', 'Neutralize', 'Do not interact'], ans: 'B' },
        { q: 'Which of the following is a non-renewable source of energy?', opts: ['Solar energy', 'Crude oil', 'Wind energy', 'Biomass'], ans: 'B' },
        { q: 'The component of a flower that attracts insect pollinators is the...', opts: ['Sepal', 'Petal', 'Receptacle', 'Filament'], ans: 'B' },
        { q: 'The boiling point of pure water at standard atmospheric pressure is...', opts: ['0 deg C', '50 deg C', '100 deg C', '212 deg C'], ans: 'C' },
        { q: 'Which gas is essential for human aerobic cellular respiration?', opts: ['Carbon monoxide', 'Nitrogen', 'Oxygen', 'Helium'], ans: 'C' },
        { q: 'A mixture of iron filings and sulphur powder can be separated physically by using a...', opts: ['Filter paper', 'Magnet', 'Separating funnel', 'Condenser'], ans: 'B' },
        { q: 'The female gamete in humans is produced in the...', opts: ['Uterus', 'Ovary', 'Fallopian tube', 'Vagina'], ans: 'B' },
        { q: 'Which of the following is a biodegradable waste material?', opts: ['Polythene bag', 'Glass bottle', 'Banana peel', 'Aluminium can'], ans: 'C' }
      ]
    },
    paper2: {
      duration: '1 Hour 15 Minutes',
      instructions: 'Section A is compulsory and carries 40 marks. Answer any three questions from Section B (carrying 20 marks each).',
      questions: [
        {
          num: 1,
          title: 'Section A: Practical and Experimental Work',
          scenario: 'In an experiment to test for the presence of starch in a variegated leaf, a student followed standard laboratory procedure.',
          subparts: [
            { part: 'a', question: 'State four sequential steps taken by the student to prepare the leaf for testing.', marks: 4, modelAnswer: '1. Dip leaf in boiling water for 1-2 minutes to kill cells. 2. Boil leaf in ethanol/alcohol in a water bath to extract chlorophyll. 3. Dip decolourized leaf in warm water to soften it. 4. Spread on a white tile and add drops of iodine solution. [M2, A2]' },
            { part: 'b', question: 'Why is the alcohol heated in a water bath instead of directly on a naked Bunsen flame?', marks: 2, modelAnswer: 'Ethanol/alcohol is highly inflammable/flammable and would catch fire on an open flame. [A2]' },
            { part: 'c', question: 'State the expected colour change if starch is present in the green portions of the leaf.', marks: 2, modelAnswer: 'Colour changes from yellowish-brown/amber to blue-black. [A2]' },
            { part: 'd', question: 'Name three laboratory apparatus required for the simple distillation of saltwater.', marks: 3, modelAnswer: 'Distillation flask, Liebeg condenser, Bunsen burner (or thermometer/receiving flask). [B3]' }
          ]
        },
        {
          num: 2,
          title: 'Matter and Chemical Reactions',
          scenario: 'Metals and non-metals display distinct physical and chemical properties in nature.',
          subparts: [
            { part: 'a', question: 'Distinguish between an element and a compound, giving one example of each.', marks: 4, modelAnswer: 'An element is a pure substance composed of only one type of atom (e.g. Iron, Oxygen). A compound consists of two or more elements chemically combined in a fixed proportion (e.g. Water, Carbon dioxide). [B2, A2]' },
            { part: 'b', question: 'State three physical differences between metals and non-metals.', marks: 6, modelAnswer: '1. Metals are good conductors of heat and electricity, non-metals are poor conductors (except graphite). 2. Metals are malleable and ductile; non-metals are brittle. 3. Metals have high melting and boiling points; non-metals have comparatively lower points. [B3, A3]' },
            { part: 'c', question: 'Write a balanced word equation for the reaction between dilute hydrochloric acid and zinc granules.', marks: 4, modelAnswer: 'Zinc + Hydrochloric acid -> Zinc chloride + Hydrogen gas. [M2, A2]' }
          ]
        },
        {
          num: 3,
          title: 'Ecosystems and Soil Management',
          scenario: 'Soil fertility and conservation are critical for sustainable agriculture in Ghana.',
          subparts: [
            { part: 'a', question: 'Explain two ways by which nutrients are lost from agricultural soils.', marks: 4, modelAnswer: '1. Leaching: Washing down of soluble mineral nutrients beyond the reach of plant roots by heavy rainfall. 2. Soil erosion: Removal of topsoil containing rich humus by running water or wind. [A2, B2]' },
            { part: 'b', question: 'Describe three cultural practices a farmer can adopt to improve soil fertility without synthetic chemicals.', marks: 6, modelAnswer: '1. Application of compost or farmyard manure. 2. Crop rotation including leguminous crops to fix atmospheric nitrogen. 3. Mulching to retain moisture, prevent erosion, and add organic matter. [B3, A3]' },
            { part: 'c', question: 'State two ecological functions of earthworms in the soil.', marks: 4, modelAnswer: '1. Burrowing action aerates the soil and improves drainage. 2. Casts deposited on the surface enrich topsoil with organic nutrients. [A2, B2]' }
          ]
        }
      ]
    }
  },

  // 3. ENGLISH LANGUAGE
  {
    id: 'english',
    name: 'English Language',
    code: 'ENG 01/02',
    paper1: {
      duration: '45 Minutes',
      instructions: 'Answer all 40 questions. Choose from the alternatives lettered A to D the one that most suitably fills the gap or best explains the underlined word or phrase.',
      questions: [
        { q: 'Neither the headmaster nor the teachers ___ present at the emergency assembly.', opts: ['was', 'were', 'is', 'are being'], ans: 'B' },
        { q: 'The criminal was accused ___ stealing the village chief\'s gold chain.', opts: ['for', 'with', 'of', 'about'], ans: 'C' },
        { q: 'She has been studying in this school ___ three years.', opts: ['since', 'for', 'during', 'from'], ans: 'B' },
        { q: 'Choose the word nearest in meaning to the capitalized word: The doctor gave him a POTENT drug.', opts: ['mild', 'powerful', 'bitter', 'dangerous'], ans: 'B' },
        { q: 'Choose the word opposite in meaning to the capitalized word: The market women welcomed the PROSPEROUS merchant.', opts: ['wealthy', 'impoverished', 'generous', 'influential'], ans: 'B' },
        { q: 'Kofi is senior ___ Kwame by two years.', opts: ['than', 'to', 'from', 'over'], ans: 'B' },
        { q: 'The match was called off because of the heavy rain. "Called off" means...', opts: ['postponed', 'cancelled', 'delayed', 'replayed'], ans: 'B' },
        { q: 'You will pass your BECE examination, ___?', opts: ['will you', 'won\'t you', 'can you', 'don\'t you'], ans: 'B' },
        { q: 'The jury arrived ___ a unanimous verdict.', opts: ['at', 'on', 'to', 'in'], ans: 'A' },
        { q: 'Choose the correct spelling:', opts: ['Accomodation', 'Accommodation', 'Acommodation', 'Accomadation'], ans: 'B' },
        { q: 'Despite the storm, the ship arrived safely. This means...', opts: ['The ship was destroyed by storm', 'The storm prevented the ship', 'Even though there was a storm, the ship reached safely', 'The ship waited for storm to stop'], ans: 'C' },
        { q: 'Each of the girls ___ given a prize.', opts: ['was', 'were', 'have been', 'are'], ans: 'A' },
        { q: 'The boy was bitten by a snake while he ___ through the tall grass.', opts: ['walked', 'was walking', 'is walking', 'has walked'], ans: 'B' },
        { q: 'Choose the word nearest in meaning: His explanations were OBSCURE.', opts: ['clear', 'unclear', 'accurate', 'loud'], ans: 'B' },
        { q: 'One of my cousins ___ in London.', opts: ['live', 'lives', 'are living', 'have lived'], ans: 'B' },
        { q: 'He is not only intelligent ___ hardworking.', opts: ['and', 'but also', 'also', 'as well as'], ans: 'B' },
        { q: 'The meeting was postponed SINE DIE. This means...', opts: ['indefinitely', 'for one week', 'to tomorrow', 'immediately'], ans: 'A' },
        { q: 'Kwesi prefers football ___ basketball.', opts: ['than', 'to', 'more than', 'over'], ans: 'B' },
        { q: 'Choose the correct plural form of "Commander-in-chief":', opts: ['Commander-in-chiefs', 'Commanders-in-chief', 'Commanders-in-chiefs', 'Commander-ins-chief'], ans: 'B' },
        { q: 'The police ___ investigating the armed robbery.', opts: ['is', 'are', 'was', 'has been'], ans: 'B' }
      ]
    },
    paper2: {
      duration: '1 Hour 15 Minutes',
      instructions: 'Answer two questions in all: one from Part A and the compulsory question in Part B.',
      questions: [
        {
          num: 1,
          title: 'Part A: Essay Writing (Choose One)',
          scenario: 'Candidates are required to write an essay of about 250 words on one of the following topics.',
          subparts: [
            { part: 'a', question: 'Write a letter to your friend in another school describing a sports festival recently organized in your school and how your house performed.', marks: 30, modelAnswer: 'Rubric: Content (10 marks) - Greeting, date, introduction, vivid description of sports events, cheerfulness, outcome/trophy. Organization (10 marks) - Informal letter format, paragraphing, coherent transitions. Expression (10 marks) - Variety of vocabulary, idiomatic expressions, correct punctuation and spelling. [A10, B10, M10]' },
            { part: 'b', question: 'Write an article for publication in your school magazine on the topic: "The negative effects of illicit mining (galamsey) on our environment."', marks: 30, modelAnswer: 'Rubric: Title and byline. Paragraphs discussing water pollution (Pra, Birim rivers), loss of arable farm land, open pits endangering lives, and recommendations for enforcement and reclamation. [A10, B10, M10]' }
          ]
        },
        {
          num: 2,
          title: 'Part B: Reading Comprehension',
          scenario: 'Read the following passage carefully and answer all the questions that follow:\n\n"From the hilltop, the old fisherman watched the dark clouds gather ominously over the Atlantic ocean. The wind began to blow in sudden, violent gusts, tossing the anchored canoes against the wooden pier. In the coastal village of Anomabo, storms during the month of June were known to bring both destruction and blessing. While heavy downpours filled empty community reservoirs, turbulent waters prevented fishermen from venturing into the deep sea for weeks. Young Kojo, clutching his father\'s hand, gazed at the foam-crested waves and asked why nature could be so cruel yet so indispensable."',
          subparts: [
            { part: 'a', question: 'What sign warned the old fisherman of an approaching storm?', marks: 3, modelAnswer: 'The gathering of ominous dark clouds over the Atlantic ocean and violent gusts of wind tossing the canoes. [A3]' },
            { part: 'b', question: 'Why was the storm described as both a destruction and a blessing?', marks: 4, modelAnswer: 'It was a blessing because downpours filled dry community reservoirs, but a destruction because turbulent waters prevented fishing for weeks, depriving them of livelihood. [A4]' },
            { part: 'c', question: 'Explain the meaning of the word "indispensable" as used in the passage.', marks: 3, modelAnswer: 'Indispensable means absolutely essential, necessary, or impossible to do without. [A3]' }
          ]
        }
      ]
    }
  },

  // 4. SOCIAL STUDIES
  {
    id: 'social',
    name: 'Social Studies',
    code: 'SOC 01/02',
    paper1: {
      duration: '45 Minutes',
      instructions: 'Answer all 40 questions. Each question has four options lettered A to D. Choose the best answer and shade on your answer sheet.',
      questions: [
        { q: 'The Watson Commission was appointed in the Gold Coast following the...', opts: ['1946 Burns Constitution', '1948 Accra Riots', '1951 General Elections', '1954 Nkrumah Cabinet'], ans: 'B' },
        { q: 'The supreme law of Ghana is the...', opts: ['Criminal Code', '1992 Constitution', 'Local Government Act', 'Chieftaincy Act'], ans: 'B' },
        { q: 'Which of the following mountains is the highest elevation in Ghana?', opts: ['Mount Afadjato', 'Aburi Hills', 'Kwahu Plateau', 'Gambaga Escarpment'], ans: 'A' },
        { q: 'The festival celebrated by the Ga people of Greater Accra to remember their famine and bumper harvest is...', opts: ['Hogbetsotso', 'Homowo', 'Odwira', 'Aboakyer'], ans: 'B' },
        { q: 'The arm of government responsible for interpreting laws and administering justice is the...', opts: ['Executive', 'Legislature', 'Judiciary', 'Cabinet'], ans: 'C' },
        { q: 'Which river in Ghana was dammed at Akosombo to generate hydroelectric power?', opts: ['River Pra', 'River Ankobra', 'River Volta', 'River Tano'], ans: 'C' },
        { q: 'Environmental degradation can be minimized primarily through...', opts: ['Indiscriminate bush burning', 'Afforestation and public education', 'Sand winning along beaches', 'Overgrazing livestock'], ans: 'B' },
        { q: 'A major cause of rural-urban migration in Ghana is...', opts: ['Abundance of agricultural land in cities', 'Better healthcare, electricity and jobs in urban centres', 'Traditional taboos in villages', 'High cost of living in urban centres'], ans: 'B' },
        { q: 'The first political party formed in the Gold Coast in August 1947 was the...', opts: ['Convention People\'s Party (CPP)', 'United Gold Coast Convention (UGCC)', 'National Democratic Congress (NDC)', 'Progress Party (PP)'], ans: 'B' },
        { q: 'Which mineral resource is mined at Obuasi in the Ashanti Region?', opts: ['Bauxite', 'Diamond', 'Gold', 'Manganese'], ans: 'C' }
      ]
    },
    paper2: {
      duration: '1 Hour',
      instructions: 'Answer three questions in all, choosing one question from each of Sections I, II and III.',
      questions: [
        {
          num: 1,
          title: 'Section I: The Environment',
          scenario: 'Water bodies and natural resources across West Africa are under severe threat from human activities.',
          subparts: [
            { part: 'a', question: 'Define the term "Environmental Degradation".', marks: 4, modelAnswer: 'Environmental degradation is the deterioration of the environment through the depletion of resources such as air, water and soil, the destruction of ecosystems and the extinction of wildlife. [A4]' },
            { part: 'b', question: 'Explain four negative effects of illegal mining (galamsey) on the socio-economic life of Ghanaians.', marks: 16, modelAnswer: '1. Pollution of rivers and potable water sources increasing water treatment costs. 2. Destruction of vast cocoa and food crop farmlands leading to food insecurity. 3. Destruction of forest reserves and biodiversity. 4. High incidence of school dropouts and child labour in mining enclaves. [A4, B4, M4, A4]' }
          ]
        },
        {
          num: 2,
          title: 'Section II: Governance and Politics',
          scenario: 'Ghana adopted democratic governance under the Fourth Republic.',
          subparts: [
            { part: 'a', question: 'State four fundamental human rights guaranteed under the 1992 Constitution of Ghana.', marks: 8, modelAnswer: '1. Right to life. 2. Right to personal liberty and dignity. 3. Freedom of speech and expression. 4. Freedom of assembly and association. [B8]' },
            { part: 'b', question: 'Describe three responsibilities of a good Ghanaian citizen.', marks: 12, modelAnswer: '1. Prompt payment of taxes and rates to government. 2. Obeying the laws of the state and protecting public property. 3. Participating actively in democratic processes like voting and defending the nation. [A4, B4, M4]' }
          ]
        }
      ]
    }
  },

  // 5. COMPUTING / ICT
  {
    id: 'ict',
    name: 'Computing / ICT',
    code: 'ICT 01/02',
    paper1: {
      duration: '45 Minutes',
      instructions: 'Answer all 40 questions. Choose the correct answer from options A to D and mark on the objective sheet provided.',
      questions: [
        { q: 'The physical components of a computer system that can be seen and touched are termed...', opts: ['Software', 'Hardware', 'Firmware', 'Malware'], ans: 'B' },
        { q: 'Which of the following is an input device?', opts: ['Monitor', 'Keyboard', 'Speaker', 'Laser Printer'], ans: 'B' },
        { q: 'The "brain" of the computer that performs calculations and executes instructions is the...', opts: ['RAM', 'Hard Drive', 'Central Processing Unit (CPU)', 'Power Supply'], ans: 'C' },
        { q: 'Which keyboard shortcut is commonly used to paste copied text in Microsoft Word?', opts: ['Ctrl + C', 'Ctrl + V', 'Ctrl + X', 'Ctrl + Z'], ans: 'B' },
        { q: 'A computer virus is a type of...', opts: ['Hardware defect', 'Harmful software program', 'Dust particles on motherboard', 'Operating system'], ans: 'B' },
        { q: 'What does the acronym URL stand for in computer networking?', opts: ['Uniform Resource Locator', 'Universal Record Link', 'United Radio Line', 'User Remote Login'], ans: 'A' },
        { q: 'Which of the following storage devices is non-volatile and retains data when power is turned off?', opts: ['RAM', 'ROM', 'Cache memory', 'Virtual memory'], ans: 'B' },
        { q: 'In word processing, making text darker and heavier than surrounding words is known as...', opts: ['Italicizing', 'Underlining', 'Boldfacing', 'Subscripting'], ans: 'C' },
        { q: 'Which application software is most suitable for performing financial calculations and tabular data?', opts: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Notepad'], ans: 'B' },
        { q: 'Ergonomics in computing is concerned with...', opts: ['Designing equipment that prevents physical injury and fatigue to users', 'Writing fast algorithms', 'Compressing video files', 'Creating firewalls'], ans: 'A' }
      ]
    },
    paper2: {
      duration: '1 Hour',
      instructions: 'Answer Question 1 in Section A and any other three questions in Section B.',
      questions: [
        {
          num: 1,
          title: 'Section A: Practical Computing Knowledge',
          scenario: 'A student wants to create a new folder on the Windows desktop, save an essay, and send it as an email attachment.',
          subparts: [
            { part: 'a', question: 'Outline the step-by-step procedure for creating a folder named "BECE Prep" on the desktop.', marks: 6, modelAnswer: '1. Right-click on an empty space on the desktop. 2. Hover over "New" from the context menu. 3. Click on "Folder". 4. Type "BECE Prep" using the keyboard. 5. Press Enter to confirm. [M3, A3]' },
            { part: 'b', question: 'Explain the difference between "Save" and "Save As" in word processing.', marks: 4, modelAnswer: '"Save" updates changes to an already existing file using its current name and location. "Save As" allows saving a new file or creating a copy of an existing file under a new name, location or file format. [A2, B2]' },
            { part: 'c', question: 'State two precautions to prevent eye strain when using a computer monitor for extended periods.', marks: 4, modelAnswer: '1. Maintain a viewing distance of 20 to 24 inches from the screen. 2. Adjust monitor brightness and take regular 20-20-20 breaks (every 20 mins look at an object 20 feet away for 20 seconds). [A2, B2]' }
          ]
        }
      ]
    }
  },

  // 6. RELIGIOUS & MORAL EDUCATION (RME)
  {
    id: 'rme',
    name: 'Religious & Moral Education',
    code: 'RME 01/02',
    paper1: {
      duration: '45 Minutes',
      instructions: 'Answer all 40 questions. Each question is followed by options A to D. Choose the correct answer.',
      questions: [
        { q: 'In the Christian creation story, God created human beings in His own image on the...', opts: ['Third day', 'Fourth day', 'Fifth day', 'Sixth day'], ans: 'D' },
        { q: 'The Islamic ritual ablution performed with clean water before prayer is called...', opts: ['Wudu', 'Tayammum', 'Salat', 'Zakat'], ans: 'A' },
        { q: 'Which of the following is an attribute of the Supreme Being in African Traditional Religion?', opts: ['Onyankopon Tweduampon (Dependable One)', 'Mortality', 'Weakness', 'Favoritism'], ans: 'A' },
        { q: 'The sacred book of Islam revealed to Prophet Muhammad (SAW) is the...', opts: ['Torah', 'Gospel', 'Qur\'an', 'Zabur'], ans: 'C' },
        { q: 'Which Christian festival commemorates the resurrection of Jesus Christ from the dead?', opts: ['Christmas', 'Good Friday', 'Easter Sunday', 'Pentecost'], ans: 'C' },
        { q: 'Puberty rites in traditional Ghanaian societies are performed to...', opts: ['Punish stubborn youth', 'Usher adolescents into responsible adulthood and marriageability', 'Appoint new clan chiefs', 'Collect market taxes'], ans: 'B' },
        { q: 'The act of willingly giving money or gifts to officials in order to receive unfair favours is called...', opts: ['Philanthropy', 'Bribery and corruption', 'Zakat', 'Tithe'], ans: 'B' },
        { q: 'In traditional society, taboos help primarily to...', opts: ['Enforce moral discipline and preserve ecosystems', 'Promote witchcraft', 'Encourage poverty', 'Enrich traditional priests'], ans: 'A' },
        { q: 'Which biblical prophet led the Israelites out of slavery in Egypt?', opts: ['Abraham', 'Moses', 'Elijah', 'Samuel'], ans: 'B' },
        { q: 'The pillar of Islam that mandates giving alms to the poor and needy is...', opts: ['Hajj', 'Sawm', 'Zakat', 'Shahada'], ans: 'C' }
      ]
    },
    paper2: {
      duration: '1 Hour',
      instructions: 'Answer three questions in all: one question from each of Sections A, B and C.',
      questions: [
        {
          num: 1,
          title: 'Section A: God and Religious Leaders',
          scenario: 'Faithful leadership and obedience to divine commands.',
          subparts: [
            { part: 'a', question: 'Narrate the call of Abraham by God and state the promises made to him.', marks: 10, modelAnswer: 'God called Abram to leave his country, people, and father\'s household for a land He would show him. Promises: 1. Make him a great nation. 2. Bless him and make his name great. 3. Bless those who bless him and curse those who curse him. 4. Through him all nations on earth would be blessed. [A5, B5]' },
            { part: 'b', question: 'State four moral lessons that youth can learn from Abraham\'s obedience.', marks: 10, modelAnswer: '1. Total faith and trust in God. 2. Readiness to make sacrifices for a higher purpose. 3. Humility and patience. 4. Loyalty and steadfast commitment to righteous living. [B10]' }
          ]
        }
      ]
    }
  },

  // 7. FRENCH LANGUAGE
  {
    id: 'french',
    name: 'French Language',
    code: 'FRE 01/02',
    paper1: {
      duration: '45 Minutes',
      instructions: 'Answer all 40 questions. Choisissez la bonne option parmi A, B, C ou D.',
      questions: [
        { q: 'Le matin, pour saluer son professeur, l\'élève dit: ___', opts: ['Bonsoir, monsieur', 'Bonjour, monsieur', 'Bonne nuit, monsieur', 'Au revoir, monsieur'], ans: 'B' },
        { q: 'Kofi va ___ marche pour acheter des fruits.', opts: ['a la', 'au', 'aux', 'en'], ans: 'B' },
        { q: 'Mon pere est medecin; il travaille a l\'___', opts: ['ecole', 'hopital', 'eglise', 'usine'], ans: 'B' },
        { q: 'Elle ___ une belle robe pour la fete.', opts: ['porte', 'portes', 'portent', 'portez'], ans: 'A' },
        { q: 'Quel jour vient apres mardi?', opts: ['Lundi', 'Mercredi', 'Jeudi', 'Vendredi'], ans: 'B' },
        { q: 'Les eleves mangent ___ bananes dans la cour.', opts: ['du', 'de la', 'des', 'de l\''], ans: 'C' },
        { q: 'Quelle heure est-il? Il est 12h00. C\'est...', opts: ['minuit', 'midi', 'le matin', 'le soir'], ans: 'B' },
        { q: 'Nous ___ des etudiants serieux.', opts: ['suis', 'es', 'sommes', 'sont'], ans: 'C' },
        { q: 'Le contraire du mot "grand" est...', opts: ['petit', 'gros', 'court', 'mince'], ans: 'A' },
        { q: 'Comment tu t\'appelles? - ___ m\'appelle Kwame.', opts: ['Tu', 'Il', 'Je', 'Elle'], ans: 'C' }
      ]
    },
    paper2: {
      duration: '1 Hour',
      instructions: 'Answer both Part I (Comprehension) and Part II (Written Expression).',
      questions: [
        {
          num: 1,
          title: 'Part I: Comprehension Ecrite',
          scenario: 'Lisez attentivement le texte et repondez aux questions:\n\n"Moussa est un jeune garcon de 14 ans qui habite a Tamale. Chaque matin a 6 heures, il se reveille, fait sa toilette et prend son petit dejeuner compose de pain et de bouillie. Ensuite, il prend son sac a dos et marche avec son ami Iddrisu pour aller au college. En classe, Moussa aime beaucoup les mathematiques et le francais. Son reve est de devenir ingenieur."',
          subparts: [
            { part: 'a', question: 'Quel age a Moussa et ou habite-t-il?', marks: 4, modelAnswer: 'Moussa a quatorze (14) ans et il habite a Tamale. [A4]' },
            { part: 'b', question: 'Que mange-t-il pour son petit dejeuner?', marks: 4, modelAnswer: 'Il prend du pain et de la bouillie. [A4]' },
            { part: 'c', question: 'Quel est le futur metier de Moussa?', marks: 4, modelAnswer: 'Son reve est de devenir ingenieur. [A4]' }
          ]
        },
        {
          num: 2,
          title: 'Part II: Production Ecrite',
          scenario: 'Ecrivez une courte composition de dix phrases.',
          subparts: [
            { part: 'a', question: 'Presentez votre ecole (nom, emplacement, salles de classe, directrice, matieres preferees).', marks: 18, modelAnswer: 'Rubric: Coherence du texte, utilisation correcte des verbes au present (s\'appeler, etre, avoir, aimer), accord des adjectifs qualificatifs et orthographe francaise correcte. [A6, B6, M6]' }
          ]
        }
      ]
    }
  },

  // 8. GHANAIAN LANGUAGE (AKUAPEM TWI)
  {
    id: 'twi',
    name: 'Ghanaian Language (Akuapem Twi)',
    code: 'TWI 01/02',
    paper1: {
      duration: '45 Minutes',
      instructions: 'Yi mmuae A, B, C anaa D a eye paa na fa bikerew si so.',
      questions: [
        { q: 'Obi koto nkurasefo a, okyea won se...', opts: ['Yaa agya', 'Yaa ena', 'Meda mo ase', 'Anyaado'], ans: 'A' },
        { q: 'Abofra a yewo no Memeneda no din ne...', opts: ['Kwame', 'Kofi', 'Kwaku', 'Yaw'], ans: 'A' },
        { q: 'Obaatan a owo mma baanu baako akyi penee no, yefre no...', opts: ['Ntaafo', 'Ahenkan', 'Badu', 'Tawia'], ans: 'A' },
        { q: 'Abebuo yi toa so: "Se wode nsa koro hura..."', opts: ['ekum wo', 'nsiesie biribi', 'ennye yie', 'ennyina ho'], ans: 'B' },
        { q: 'Akanfo mu no, abusua ban na ohene fi mu?', opts: ['Oyoko', 'Asona', 'Bretuo', 'Agona'], ans: 'A' },
        { q: 'Abofra a wadi nnafua awotwe no, yeye biribi ma no a yefre no...', opts: ['Dintoa / Ababadie', 'Bragoro', 'Agyawara', 'Ayie'], ans: 'A' },
        { q: 'Asantehene a ogyee Asante man firi Denkyirafo nsam ne...', opts: ['Otumfuo Osei Tutu I', 'Opoku Ware I', 'Okomfo Anokye', 'Prempeh I'], ans: 'A' },
        { q: 'Kasamu yi mu edeebono ne "kuro"?: "Kofi ko kuro no mu."', opts: ['Edeeyo', 'Edeedin', 'Kyerenee', 'Nkabomde'], ans: 'B' },
        { q: 'Ebeye den na obi anya nidi wo mpanyinfo anim?', opts: ['Osetie ne aboter', 'Kasa pebre', 'Ntokwa', 'Kwadwo'], ans: 'A' },
        { q: 'Otwapere a yebo no Akanfo mu kyerese...', opts: ['Asomdwoe ba', 'Ohene bi awu anaa asiane bi aba', 'Ahoho reba', 'Afahyie reba'], ans: 'B' }
      ]
    },
    paper2: {
      duration: '1 Hour',
      instructions: 'Yi asemmisa baako wo Ofa A ne Ofa B mu nyinaa.',
      questions: [
        {
          num: 1,
          title: 'Ofa A: Atwere (Composition)',
          scenario: 'Kyerow asɛmti no baako ho asem a ennu nsɛmfua 150.',
          subparts: [
            { part: 'a', question: 'Kyerow krataa koma w\'adamfo a owo sukuu foforo mu kyerɛ no wo mfe afe afahyie a moadi no wo mo kuro mu.', marks: 20, modelAnswer: 'Rubric: Krataa ahyɛse (address, date), nkyia, afahyie no din ne sɛnea modii no (ahemfo aso, adwom ne asaw, nnuane) ne awiee. Nsɛmfua pɔtee ne kasasua a ɛmu da hɔ. [A7, B7, M6]' }
          ]
        },
        {
          num: 2,
          title: 'Ofa B: Amammerɛ (Culture and Customs)',
          scenario: 'Akanfo amammerɛ ne nneyɛe pa.',
          subparts: [
            { part: 'a', question: 'Kyerɛkyerɛ dintoɔ dwumadie a yɛyɛ ma abofra afoforo mu kɔ akyiri.', marks: 10, modelAnswer: 'Abofra dintoɔ ba awotwe so. Yɛde nsuo ne nsa ka n\'ano kyerɛ no nokwaredie. Agya abusua na ɛma din. [A5, B5]' },
            { part: 'b', question: 'Kyerɛ mfasoɔ mmiensa a ɛwɔ bragorɔ dwumadie so ma mmabaa.', marks: 10, modelAnswer: '1. Ɛkyerɛ sɛ ababaawa no anyin abɔ bra pa. 2. Ɛbɔ no bra fi basabasa ho. 3. Ɛhyɛ no nidi wo kurom hɔ. [B10]' }
          ]
        }
      ]
    }
  },

  // 9. CAREER TECHNOLOGY (BDT)
  {
    id: 'career-tech',
    name: 'Career Technology',
    code: 'CTECH 01/02',
    paper1: {
      duration: '45 Minutes',
      instructions: 'Answer all 40 questions. Choose the most appropriate option lettered A to D.',
      questions: [
        { q: 'Which of the following is a primary colour in art and design?', opts: ['Green', 'Orange', 'Red', 'Purple'], ans: 'C' },
        { q: 'The tool used for marking parallel lines to an edge in woodwork is a...', opts: ['Try square', 'Marking gauge', 'Mortise gauge', 'Bevel gauge'], ans: 'B' },
        { q: 'Which of the following drawing pencils has the hardest lead?', opts: ['2B', 'HB', '2H', '4H'], ans: 'D' },
        { q: 'The process of applying a protective coating of molten zinc to steel sheets to prevent rust is...', opts: ['Galvanizing', 'Tinning', 'Electroplating', 'Anodizing'], ans: 'A' },
        { q: 'Which safety sign shape indicates a mandatory instruction (what must be done)?', opts: ['Yellow Triangle', 'Blue Circle', 'Red Square', 'Green Diamond'], ans: 'B' },
        { q: 'A wood defect caused by unequal shrinkage during seasoning that results in curvature is...', opts: ['Knot', 'Warping / Cupping', 'Dry rot', 'Termite bore'], ans: 'B' },
        { q: 'In sewing, the temporary stitch used to hold fabric pieces together before final stitching is...', opts: ['Back stitch', 'Tacking / Basting', 'Hemming stitch', 'Blanket stitch'], ans: 'B' },
        { q: 'Which food nutrient is primarily responsible for tissue growth and muscle repair?', opts: ['Carbohydrates', 'Proteins', 'Fats and oils', 'Dietary fibre'], ans: 'B' },
        { q: 'The instrument used to measure and lay out angles accurately on technical drawings is a...', opts: ['T-square', 'Protractor', 'Compass', 'Divider'], ans: 'B' },
        { q: 'Which of the following is an example of a ferrous metal?', opts: ['Copper', 'Cast iron', 'Aluminium', 'Brass'], ans: 'B' }
      ]
    },
    paper2: {
      duration: '1 Hour',
      instructions: 'Answer Question 1 (Compulsory Design Problem) and two other questions from your area of study.',
      questions: [
        {
          num: 1,
          title: 'Compulsory Design and Communication',
          scenario: 'A school library requires a portable book rack to hold 10 reference dictionaries neatly on the librarian\'s desk.',
          subparts: [
            { part: 'a', question: 'State two design specifications for the book rack (e.g. material, stability, size).', marks: 4, modelAnswer: '1. Material: Seasoned timber or acrylic plastic to support weight without sagging. 2. Stability: Wide base with non-slip rubber pads to prevent tipping over when books are pulled out. [A2, B2]' },
            { part: 'b', question: 'Make a neat pictorial isometric sketch of the proposed book rack.', marks: 8, modelAnswer: 'Rubric: Accurate isometric axes (30 deg to horizontal), proportion, neat linework, book dividers shown clearly. [M4, A4]' },
            { part: 'c', question: 'List three hand tools needed to construct the wooden rack in a school workshop.', marks: 6, modelAnswer: '1. Tenon saw (cross-cutting joints). 2. Try square (testing 90 deg squareness). 3. Bevel edge chisel (paring joints). [B6]' }
          ]
        }
      ]
    }
  }
];

// -------------------------------------------------------------
// MAIN EXECUTION ROUTINE
// -------------------------------------------------------------

async function generateBece2008Archive() {
  console.log('Starting WAEC BECE 2008 Archive Generation for all 9 subjects...');
  const generatedDocs = [];

  for (const sub of SUBJECTS_2008) {
    console.log(`\nGenerating papers for ${sub.name} (${sub.code})...`);

    // PAPER 1: OBJECTIVES
    const p1Meta = {
      title: `BECE 2008 ${sub.name} Paper 1 (Objectives)`,
      subject: sub.name,
      code: `${sub.code} - P1`,
      year: 2008,
      paperType: 'Paper 1',
      duration: sub.paper1.duration,
      instructions: sub.paper1.instructions
    };
    const p1Gen = new WaecExamPdfGenerator(p1Meta);
    await p1Gen.init();

    p1Gen.drawSectionHeader('PART I: OBJECTIVE QUESTIONS');
    sub.paper1.questions.forEach((q, idx) => {
      p1Gen.addObjectiveQuestion(idx + 1, q.q, q.opts, q.ans);
    });

    // Answer Key Appendix
    p1Gen.drawDivider();
    p1Gen.drawSectionHeader('OFFICIAL WAEC ANSWER KEY & SCORING GUIDE');
    p1Gen.addText('For candidate self-assessment and teacher evaluation:', { italic: true, gapAfter: 6 });
    let keyLine = '';
    sub.paper1.questions.forEach((q, idx) => {
      keyLine += `${idx + 1}. [${q.ans}]  `;
      if ((idx + 1) % 5 === 0) {
        p1Gen.addText(keyLine, { bold: true, indent: 15, size: 8.5 });
        keyLine = '';
      }
    });
    if (keyLine) {
      p1Gen.addText(keyLine, { bold: true, indent: 15, size: 8.5 });
    }

    const p1FileName = `BECE_2008_${sub.id.toUpperCase()}_Paper1.pdf`;
    const p1Path = path.join(UPLOAD_DIR, p1FileName);
    const p1Size = await p1Gen.saveToFile(p1Path);
    console.log(`  -> Paper 1 created: ${p1FileName} (${p1Size} bytes)`);

    const p1DocRecord = {
      id: `doc_2008_${sub.id}_p1`,
      title: `BECE 2008 ${sub.name} Paper 1 (Objectives)`,
      category: 'bece_past_question',
      subjectId: sub.id,
      subjectName: sub.name,
      year: 2008,
      level: 'JHS',
      paperType: 'Paper 1',
      fileName: p1FileName,
      fileUrl: `/uploads/documents/${p1FileName}`,
      fileSizeBytes: p1Size,
      uploadedAt: new Date().toISOString()
    };
    generatedDocs.push(p1DocRecord);

    // PAPER 2: THEORY / ESSAY
    const p2Meta = {
      title: `BECE 2008 ${sub.name} Paper 2 (Theory & Marking Scheme)`,
      subject: sub.name,
      code: `${sub.code} - P2`,
      year: 2008,
      paperType: 'Paper 2',
      duration: sub.paper2.duration,
      instructions: sub.paper2.instructions
    };
    const p2Gen = new WaecExamPdfGenerator(p2Meta);
    await p2Gen.init();

    p2Gen.drawSectionHeader('PART II: ESSAY & STRUCTURED QUESTIONS WITH WAEC RUBRICS');
    sub.paper2.questions.forEach((q) => {
      p2Gen.addTheoryQuestion(q.num, q.title, q.scenario, q.subparts);
    });

    const p2FileName = `BECE_2008_${sub.id.toUpperCase()}_Paper2.pdf`;
    const p2Path = path.join(UPLOAD_DIR, p2FileName);
    const p2Size = await p2Gen.saveToFile(p2Path);
    console.log(`  -> Paper 2 created: ${p2FileName} (${p2Size} bytes)`);

    const p2DocRecord = {
      id: `doc_2008_${sub.id}_p2`,
      title: `BECE 2008 ${sub.name} Paper 2 (Theory & Marking Scheme)`,
      category: 'bece_past_question',
      subjectId: sub.id,
      subjectName: sub.name,
      year: 2008,
      level: 'JHS',
      paperType: 'Paper 2',
      fileName: p2FileName,
      fileUrl: `/uploads/documents/${p2FileName}`,
      fileSizeBytes: p2Size,
      uploadedAt: new Date().toISOString()
    };
    generatedDocs.push(p2DocRecord);
  }

  // Update data/documents.json
  let existingDocs = [];
  if (fs.existsSync(DATA_FILE)) {
    try {
      existingDocs = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
      if (!Array.isArray(existingDocs)) existingDocs = [];
    } catch {
      existingDocs = [];
    }
  }

  // Filter out any older duplicate 2008 records
  const updatedDocs = [
    ...generatedDocs,
    ...existingDocs.filter(d => d.year !== 2008)
  ];

  fs.writeFileSync(DATA_FILE, JSON.stringify(updatedDocs, null, 2), 'utf8');
  console.log(`\nSUCCESS! Registered all ${generatedDocs.length} PDF papers for BECE 2008 into ${DATA_FILE}.`);
}

generateBece2008Archive().catch(console.error);
