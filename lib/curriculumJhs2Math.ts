import { CurriculumTopic } from './types';

export const JHS2_MATH_TOPICS: CurriculumTopic[] = [
  {
    "id": "jhs2-math-t1-real-numbers",
    "subjectId": "math",
    "level": "JHS 2",
    "term": 1,
    "orderIndex": 1,
    "title": "Real Number System, Integers & Rational Operations",
    "description": "Master classification of numbers, operations with directed integers, order of operations (BODMAS), recurring decimals, and number line representation.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=tyDN4pXkYCY",
    "youtubeId": "tyDN4pXkYCY",
    "keyNotes": "The Real Number System (ℝ) encompasses all numbers that can be represented on a continuous number line.\n• Natural Numbers (ℕ) = {1, 2, 3, ...}; Whole Numbers (𝕎) = {0, 1, 2, 3, ...}.\n• Integers (ℤ) = {..., -3, -2, -1, 0, 1, 2, 3, ...}.\n• Rational Numbers (ℚ): Any number that can be expressed as a/b, where a and b are integers and b ≠ 0.\n• Rules of Directed Numbers:\n  - Adding opposite signs: subtract smaller absolute value from larger, take the sign of the larger (e.g. -7 + 12 = +5; 4 + (-9) = -5).\n  - Subtracting a negative number is equivalent to adding its positive: a - (-b) = a + b (e.g. 5 - (-3) = 8).\n  - Multiplication/Division: Same signs yield positive ((+) × (+) = +, (-) × (-) = +); Opposite signs yield negative ((+) × (-) = -, (-) × (+) = -).\n• Order of Operations (BODMAS): Brackets, Orders (powers/roots), Division & Multiplication (left-to-right), Addition & Subtraction (left-to-right).\n• Recurring Decimals: Decimals with repeating digits (e.g. 0.333... = 0.3̇ = 1/3, 0.4545... = 0.4̇5̇ = 45/99 = 5/11).",
    "examples": [
      {
        "id": "ex-jhs2m-t1-1",
        "title": "Evaluating Complex Arithmetic with BODMAS & Directed Numbers",
        "problem": "Simplify: -15 + (-4) × 6 ÷ (-3) - (-8)",
        "stepByStepSolution": [
          "Step 1 (Multiplication & Division from left to right): First calculate (-4) × 6 = -24.",
          "Step 2: Next, perform division: (-24) ÷ (-3) = +8 (negative divided by negative equals positive).",
          "Step 3: Substitute back into expression: -15 + 8 - (-8).",
          "Step 4: Resolve double negative - (-8) to + 8: -15 + 8 + 8.",
          "Step 5: Perform addition: -15 + 16 = 1."
        ],
        "keyTakeaway": "Always apply BODMAS strictly: handle multiplication and division before addition and subtraction. Remember that dividing two negative integers yields a positive integer."
      },
      {
        "id": "ex-jhs2m-t1-2",
        "title": "Converting a Repeating Decimal into a Common Fraction",
        "problem": "Express 0.2̇7̇ (0.272727...) as a fraction in its simplest form a/b.",
        "stepByStepSolution": [
          "Step 1: Let x = 0.272727... (Equation 1).",
          "Step 2: Since two digits (2 and 7) repeat, multiply both sides by 100: 100x = 27.272727... (Equation 2).",
          "Step 3: Subtract Equation 1 from Equation 2: 100x - x = 27.272727... - 0.272727... => 99x = 27.",
          "Step 4: Solve for x: x = 27 / 99.",
          "Step 5: Reduce to lowest terms by dividing numerator and denominator by their HCF of 9: 27 ÷ 9 = 3; 99 ÷ 9 = 11. Thus, x = 3/11."
        ],
        "keyTakeaway": "Multiply by 10^n where n is the number of repeating digits. Subtracting eliminates the infinite decimal tail completely."
      }
    ]
  },
  {
    "id": "jhs2-math-t2-indices",
    "subjectId": "math",
    "level": "JHS 2",
    "term": 1,
    "orderIndex": 2,
    "title": "Indices / Powers & Standard Form",
    "description": "Explore the fundamental laws of indices, negative and zero exponents, and scientific notation (A × 10ⁿ where 1 ≤ A < 10).",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=tyDN4pXkYCY",
    "youtubeId": "tyDN4pXkYCY",
    "keyNotes": "An index (or exponent/power) shows how many times a base number is multiplied by itself: aⁿ = a × a × ... × a (n factors).\n• Laws of Indices:\n  1. Product Law: aᵐ × aⁿ = aᵐ⁺ⁿ (e.g. 2³ × 2⁴ = 2⁷).\n  2. Quotient Law: aᵐ ÷ aⁿ = aᵐ⁻ⁿ (e.g. 5⁶ ÷ 5² = 5⁴).\n  3. Power of a Power: (aᵐ)ⁿ = aᵐⁿ (e.g. (3²)³ = 3⁶).\n  4. Zero Index: a⁰ = 1 (for any a ≠ 0).\n  5. Negative Index: a⁻ⁿ = 1 / aⁿ and 1 / a⁻ⁿ = aⁿ.\n  6. Power of a Product: (ab)ⁿ = aⁿ bⁿ.\n  7. Power of a Quotient: (a/b)ⁿ = aⁿ / bⁿ.\n• Standard Form (Scientific Notation): Expressing numbers as A × 10ⁿ, where 1 ≤ A < 10 and n is an integer.\n  - Numbers ≥ 10 have positive powers of 10 (e.g. 450,000 = 4.5 × 10⁵).\n  - Numbers < 1 have negative powers of 10 (e.g. 0.00038 = 3.8 × 10⁻⁴).",
    "examples": [
      {
        "id": "ex-jhs2m-t2-1",
        "title": "Simplifying Algebraic Expressions with Laws of Indices",
        "problem": "Simplify: (6x⁴y³) × (4x⁻²y⁵) ÷ (8x³y²)",
        "stepByStepSolution": [
          "Step 1: Group numerical coefficients and variables separately in numerator: (6 × 4) × (x⁴ × x⁻²) × (y³ × y⁵) = 24 × x⁴⁺⁽⁻²⁾ × y³⁺⁵ = 24x²y⁸.",
          "Step 2: Divide by the denominator (8x³y²): (24 / 8) × (x² / x³) × (y⁸ / y²).",
          "Step 3: Simplify coefficients: 24 / 8 = 3.",
          "Step 4: Apply quotient law to variables: x²⁻³ = x⁻¹ and y⁸⁻² = y⁶.",
          "Step 5: Write expression with positive indices: 3 × (1/x) × y⁶ = (3y⁶) / x."
        ],
        "keyTakeaway": "Work with coefficients as regular numbers and apply the product law (add powers) and quotient law (subtract powers) to like bases."
      },
      {
        "id": "ex-jhs2m-t2-2",
        "title": "Multiplication and Division in Standard Form",
        "problem": "Evaluate (3.2 × 10⁵) × (5.0 × 10⁻²) and express the result in standard form.",
        "stepByStepSolution": [
          "Step 1: Multiply the leading decimal numbers: 3.2 × 5.0 = 16.0.",
          "Step 2: Multiply powers of 10 using index product law: 10⁵ × 10⁻² = 10⁵⁺⁽⁻²⁾ = 10³.",
          "Step 3: Combine parts: 16.0 × 10³.",
          "Step 4: Notice 16.0 is not in standard form (1 ≤ A < 10). Rewrite 16.0 as 1.6 × 10¹.",
          "Step 5: Combine powers of 10: 1.6 × 10¹ × 10³ = 1.6 × 10⁴."
        ],
        "keyTakeaway": "Always check that the leading coefficient A satisfies 1 ≤ A < 10. If A ≥ 10, shift decimal point left by 1 and increase power of 10 by 1."
      }
    ]
  },
  {
    "id": "jhs2-math-t3-factors-multiples",
    "subjectId": "math",
    "level": "JHS 2",
    "term": 1,
    "orderIndex": 3,
    "title": "Prime Factorization, HCF & LCM",
    "description": "Master prime factor trees, index notation, and finding the Highest Common Factor (HCF) and Lowest Common Multiple (LCM) for real-world problem solving.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=tyDN4pXkYCY",
    "youtubeId": "tyDN4pXkYCY",
    "keyNotes": "A prime number is a natural number greater than 1 with exactly two distinct factors: 1 and itself (2, 3, 5, 7, 11, 13, 17, 19, ...). Note: 1 is neither prime nor composite; 2 is the only even prime.\n• Prime Factorization: Breaking a composite number into a product of its prime factors.\n  Example: 72 = 2 × 2 × 2 × 3 × 3 = 2³ × 3²; 108 = 2² × 3³.\n• Highest Common Factor (HCF / GCD):\n  - In index notation, select only common prime bases with their lowest exponents.\n  - For 72 and 108: common bases are 2 and 3; lowest powers are 2² and 3² => HCF = 2² × 3² = 4 × 9 = 36.\n• Lowest Common Multiple (LCM):\n  - In index notation, select all prime bases present with their highest exponents.\n  - For 72 and 108: LCM = 2³ × 3³ = 8 × 27 = 216.\n• Golden Rule for Two Numbers a and b: HCF(a, b) × LCM(a, b) = a × b.\n• Word Problem Clues:\n  - \"Largest equal groups / dividing without remainder\" -> HCF.\n  - \"Occurring together / repeating at intervals / flashing together\" -> LCM.",
    "examples": [
      {
        "id": "ex-jhs2m-t3-1",
        "title": "Finding HCF and LCM Using Prime Factorization",
        "problem": "Express 84 and 126 as products of prime factors in index form. Hence, find their: (i) HCF (ii) LCM.",
        "stepByStepSolution": [
          "Step 1: Factorize 84: 84 = 2 × 42 = 2 × 2 × 21 = 2² × 3 × 7.",
          "Step 2: Factorize 126: 126 = 2 × 63 = 2 × 3 × 21 = 2 × 3² × 7.",
          "Step 3: To find HCF, pick common bases with lowest powers: base 2 -> 2¹; base 3 -> 3¹; base 7 -> 7¹ => HCF = 2 × 3 × 7 = 42.",
          "Step 4: To find LCM, pick all bases with highest powers: 2² × 3² × 7¹ = 4 × 9 × 7 = 36 × 7 = 252.",
          "Step 5: Check using product rule: HCF × LCM = 42 × 252 = 10,584; 84 × 126 = 10,584 (Verified)."
        ],
        "keyTakeaway": "Prime factorization provides an exact, error-proof method for both HCF (lowest common powers) and LCM (highest all-inclusive powers)."
      },
      {
        "id": "ex-jhs2m-t3-2",
        "title": "Real-World Periodic Event Problem (LCM)",
        "problem": "Three street siren bells at a market chime at intervals of 15 minutes, 20 minutes, and 30 minutes respectively. If they all chime together at 8:00 AM, at what time will they next chime together?",
        "stepByStepSolution": [
          "Step 1: The time interval when they chime together is the LCM of 15, 20, and 30.",
          "Step 2: Find prime factors: 15 = 3 × 5; 20 = 2² × 5; 30 = 2 × 3 × 5.",
          "Step 3: Calculate LCM: take highest power of all primes: 2² × 3¹ × 5¹ = 4 × 3 × 5 = 60 minutes.",
          "Step 4: 60 minutes = 1 hour.",
          "Step 5: Add 1 hour to 8:00 AM: 8:00 AM + 1 hour = 9:00 AM."
        ],
        "keyTakeaway": "When items repeat at fixed cyclical intervals, their synchronized simultaneous occurrence is found by calculating the LCM."
      }
    ]
  },
  {
    "id": "jhs2-math-t4-ratios-proportions",
    "subjectId": "math",
    "level": "JHS 2",
    "term": 1,
    "orderIndex": 4,
    "title": "Ratios, Rates & Proportional Division",
    "description": "Solve problems involving simplified ratios, sharing in given proportions, direct and inverse proportion, and rate calculations.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=tyDN4pXkYCY",
    "youtubeId": "tyDN4pXkYCY",
    "keyNotes": "A ratio compares two or more quantities of the same kind measured in the same units (written a : b or a/b). Ratios have no units.\n• Equivalent Ratios: Formed by multiplying or dividing all terms by the same non-zero number.\n• Sharing in a Given Ratio:\n  - Total parts = sum of all ratio terms.\n  - One part = Total Quantity ÷ Total Parts.\n  - Individual share = Individual parts × Value of one part.\n• Direct Proportion: Two quantities increase or decrease in the same ratio (x/y = k, a constant).\n  - Example: If 5 pens cost GH₵ 20, 8 pens cost (20 ÷ 5) × 8 = GH₵ 32.\n• Inverse (Indirect) Proportion: As one quantity increases, the other decreases such that their product is constant (x × y = k).\n  - Example: If 6 workers take 10 days to dig a trench, 1 worker takes 6 × 10 = 60 worker-days. 4 workers will take 60 ÷ 4 = 15 days.\n• Rates: Comparison of two quantities of different units (e.g. Speed = Distance ÷ Time in km/h or m/s; Price rate = GH₵/kg).",
    "examples": [
      {
        "id": "ex-jhs2m-t4-1",
        "title": "Dividing Profits in a Three-Way Business Partnership",
        "problem": "Kofi, Ama, and Yaw shared a business profit of GH₵ 7,200 in the ratio 4 : 5 : 3. How much did each person receive?",
        "stepByStepSolution": [
          "Step 1: Sum the ratio terms: 4 + 5 + 3 = 12 total parts.",
          "Step 2: Find the value of one part: GH₵ 7,200 ÷ 12 = GH₵ 600.",
          "Step 3: Calculate Kofi's share (4 parts): 4 × GH₵ 600 = GH₵ 2,400.",
          "Step 4: Calculate Ama's share (5 parts): 5 × GH₵ 600 = GH₵ 3,000.",
          "Step 5: Calculate Yaw's share (3 parts): 3 × GH₵ 600 = GH₵ 1,800.",
          "Step 6: Check sum: 2,400 + 3,000 + 1,800 = GH₵ 7,200 (Matches total profit)."
        ],
        "keyTakeaway": "Always find the value of a single unit ratio part first by dividing the total amount by total parts."
      },
      {
        "id": "ex-jhs2m-t4-2",
        "title": "Solving an Inverse Proportion Work Problem",
        "problem": "If 8 bricklayers can construct a perimeter wall in 15 days, how many days will 12 bricklayers take working at the exact same rate?",
        "stepByStepSolution": [
          "Step 1: Identify proportion type: More bricklayers will take FEWER days -> Inverse Proportion.",
          "Step 2: Total work required = workers × days = 8 × 15 = 120 worker-days.",
          "Step 3: Let d be the number of days for 12 bricklayers: 12 × d = 120.",
          "Step 4: Solve for d: d = 120 ÷ 12 = 10 days."
        ],
        "keyTakeaway": "In inverse proportion problems (workers vs time, speed vs time), the product of the two variables remains constant: n₁ × d₁ = n₂ × d₂."
      }
    ]
  },
  {
    "id": "jhs2-math-t5-percentages-finances",
    "subjectId": "math",
    "level": "JHS 2",
    "term": 1,
    "orderIndex": 5,
    "title": "Percentages & Financial Mathematics",
    "description": "Calculate percentage change, profit and loss, trade discount, sales commission, simple interest (I = PRT / 100), and hire purchase.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=tyDN4pXkYCY",
    "youtubeId": "tyDN4pXkYCY",
    "keyNotes": "Financial mathematics applies percentages to economic transactions.\n• Percentage Increase / Decrease: Percentage Change = (Change ÷ Original Value) × 100%.\n• Profit and Loss:\n  - Profit = Selling Price (SP) - Cost Price (CP) (when SP > CP).\n  - Percentage Profit = (Profit ÷ CP) × 100%.\n  - Loss = Cost Price (CP) - Selling Price (SP) (when CP > SP).\n  - Percentage Loss = (Loss ÷ CP) × 100%. Note: Always divide by Cost Price (CP)!\n• Simple Interest Formula:\n  - I = (P × R × T) / 100, where:\n    P = Principal (amount invested or borrowed),\n    R = Rate of interest per annum (%),\n    T = Time period in years (convert months to years: m/12).\n  - Total Amount Payable / Accrued: A = P + I.\n• Discount: Reduction from marked price (SP = Marked Price - Discount).\n• Hire Purchase: Buying an item by paying an initial deposit followed by periodic installments.\n  - Hire Purchase Price = Deposit + Total Installments.\n  - Extra charge (carrying cost) = Hire Purchase Price - Cash Price.",
    "examples": [
      {
        "id": "ex-jhs2m-t5-1",
        "title": "Calculating Percentage Profit from Selling Price",
        "problem": "A trader in Kumasi bought a bag of maize for GH₵ 320 and sold it for GH₵ 400. Calculate her percentage profit.",
        "stepByStepSolution": [
          "Step 1: Identify Cost Price (CP) = GH₵ 320 and Selling Price (SP) = GH₵ 400.",
          "Step 2: Calculate Profit = SP - CP = 400 - 320 = GH₵ 80.",
          "Step 3: Apply percentage profit formula: % Profit = (Profit ÷ CP) × 100%.",
          "Step 4: Substitute values: (80 ÷ 320) × 100%.",
          "Step 5: Simplify: (1/4) × 100% = 25%."
        ],
        "keyTakeaway": "Students frequently make the mistake of dividing profit by the Selling Price. Always divide profit or loss by the initial Cost Price (CP)."
      },
      {
        "id": "ex-jhs2m-t5-2",
        "title": "Calculating Simple Interest and Total Amount for Fractional Years",
        "problem": "Find the simple interest and total amount on a loan of GH₵ 4,800 borrowed for 9 months at 15% per annum.",
        "stepByStepSolution": [
          "Step 1: Principal P = GH₵ 4,800; Rate R = 15%; Time T = 9 months = 9/12 year = 0.75 year (or 3/4 year).",
          "Step 2: Apply formula: I = (P × R × T) / 100.",
          "Step 3: Substitute: I = (4800 × 15 × 3) / (100 × 4) = (48 × 15 × 3) / 4.",
          "Step 4: Simplify: (48 / 4) × 45 = 12 × 45 = GH₵ 540.",
          "Step 5: Calculate Total Amount: A = P + I = 4,800 + 540 = GH₵ 5,340."
        ],
        "keyTakeaway": "Always convert time given in months into years by dividing by 12 before substituting into I = PRT / 100."
      }
    ]
  },
  {
    "id": "jhs2-math-t6-algebraic-expressions",
    "subjectId": "math",
    "level": "JHS 2",
    "term": 2,
    "orderIndex": 6,
    "title": "Algebraic Expressions & Expansion of Binomials",
    "description": "Master simplifying algebraic expressions, collecting like terms, expanding brackets, and binomial expansions including special products.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=tyDN4pXkYCY",
    "youtubeId": "tyDN4pXkYCY",
    "keyNotes": "Algebraic expressions combine constants, variables, and arithmetic operations.\n• Like Terms: Terms that possess the exact same variables raised to the exact same powers (e.g. 5x²y and -3x²y). Only like terms can be added or subtracted.\n• Distributive Law: a(b + c) = ab + ac and a(b - c) = ab - ac.\n• Expansion of Binomials (Two Terms × Two Terms):\n  - (a + b)(c + d) = a(c + d) + b(c + d) = ac + ad + bc + bd.\n• Special Algebraic Identities:\n  1. Perfect Square of a Sum: (a + b)² = a² + 2ab + b².\n  2. Perfect Square of a Difference: (a - b)² = a² - 2ab + b².\n  3. Difference of Two Squares: (a + b)(a - b) = a² - b².\n• Operations on Algebraic Fractions:\n  - Find the LCM of denominators before adding or subtracting.\n  - Simplify by canceling common factors from numerator and denominator.",
    "examples": [
      {
        "id": "ex-jhs2m-t6-1",
        "title": "Expanding and Simplifying Binomial Products",
        "problem": "Expand and simplify: (3x - 4)(2x + 5)",
        "stepByStepSolution": [
          "Step 1: Distribute each term of the first binomial across the second: 3x(2x + 5) - 4(2x + 5).",
          "Step 2: Multiply out the first bracket: 3x × 2x + 3x × 5 = 6x² + 15x.",
          "Step 3: Multiply out the second bracket (watch the negative sign!): -4 × 2x + (-4) × 5 = -8x - 20.",
          "Step 4: Combine the expanded terms: 6x² + 15x - 8x - 20.",
          "Step 5: Group and collect the middle like terms: 15x - 8x = +7x.",
          "Step 6: Final result: 6x² + 7x - 20."
        ],
        "keyTakeaway": "Distribute carefully, paying special attention to signs when multiplying by negative coefficients."
      },
      {
        "id": "ex-jhs2m-t6-2",
        "title": "Expanding a Perfect Square Identity",
        "problem": "Expand: (2x - 3y)²",
        "stepByStepSolution": [
          "Step 1: Recall identity (a - b)² = a² - 2ab + b².",
          "Step 2: Here a = 2x and b = 3y.",
          "Step 3: Square the first term: a² = (2x)² = 4x².",
          "Step 4: Find twice the product of both terms: 2ab = 2 × (2x) × (3y) = 12xy.",
          "Step 5: Square the second term: b² = (3y)² = 9y².",
          "Step 6: Combine with the middle minus sign: 4x² - 12xy + 9y²."
        ],
        "keyTakeaway": "(a - b)² does NOT equal a² - b². Never forget the middle term -2ab."
      }
    ]
  },
  {
    "id": "jhs2-math-t7-factorization",
    "subjectId": "math",
    "level": "JHS 2",
    "term": 2,
    "orderIndex": 7,
    "title": "Factorization of Algebraic Expressions",
    "description": "Learn techniques of algebraic factorization: highest common factors, grouping in pairs of four terms, difference of two squares, and quadratic trinomials.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=tyDN4pXkYCY",
    "youtubeId": "tyDN4pXkYCY",
    "keyNotes": "Factorization is the reverse process of expansion. It involves rewriting an algebraic sum or difference as a product of factors.\n• Methods of Factorization:\n  1. Common Monomial Factor:\n     - Find the HCF of all coefficients and common variable powers.\n     - Example: 12a²b - 18ab² = 6ab(2a - 3b).\n  2. Factorization by Grouping (4 terms):\n     - Pair terms with common factors: ax + ay + bx + by = a(x + y) + b(x + y).\n     - Extract common binomial: = (x + y)(a + b).\n  3. Difference of Two Squares:\n     - Form: a² - b² = (a - b)(a + b).\n     - Example: 25x² - 49 = (5x)² - 7² = (5x - 7)(5x + 7).\n  4. Quadratic Trinomials (x² + bx + c):\n     - Find two integers p and q such that p × q = c and p + q = b.\n     - Rewrite as (x + p)(x + q).\n     - Example: x² + 5x + 6 => p = 2, q = 3 (since 2 × 3 = 6 and 2 + 3 = 5) => (x + 2)(x + 3).",
    "examples": [
      {
        "id": "ex-jhs2m-t7-1",
        "title": "Factorizing by Grouping Terms in Pairs",
        "problem": "Factorize completely: 6mx - 9nx + 4my - 6ny",
        "stepByStepSolution": [
          "Step 1: Group into two pairs: (6mx - 9nx) + (4my - 6ny).",
          "Step 2: Factor out HCF from first pair (3x): 3x(2m - 3n).",
          "Step 3: Factor out HCF from second pair (+2y): 2y(2m - 3n).",
          "Step 4: Notice common binomial factor (2m - 3n) in both terms: 3x(2m - 3n) + 2y(2m - 3n).",
          "Step 5: Factor out (2m - 3n): (2m - 3n)(3x + 2y)."
        ],
        "keyTakeaway": "When factoring by grouping, ensure the bracketed binomial remaining in both pairs is exactly identical."
      },
      {
        "id": "ex-jhs2m-t7-2",
        "title": "Factorizing a Quadratic Trinomial with Negative Constant",
        "problem": "Factorize completely: x² - 2x - 15",
        "stepByStepSolution": [
          "Step 1: Identify b = -2 (sum) and c = -15 (product).",
          "Step 2: List pairs of factors of -15: (1, -15), (-1, 15), (3, -5), (-3, 5).",
          "Step 3: Find the pair whose sum is -2: 3 + (-5) = -2. The numbers are +3 and -5.",
          "Step 4: Split the middle term: x² - 5x + 3x - 15.",
          "Step 5: Group and factor: x(x - 5) + 3(x - 5) = (x - 5)(x + 3)."
        ],
        "keyTakeaway": "For x² + bx + c with negative c, the two factors must have opposite signs, and the larger factor takes the sign of b."
      }
    ]
  },
  {
    "id": "jhs2-math-t8-linear-equations",
    "subjectId": "math",
    "level": "JHS 2",
    "term": 2,
    "orderIndex": 8,
    "title": "Linear Equations & Inequalities in One Variable",
    "description": "Solve first-degree linear equations with parentheses and fractional coefficients, translate word problems into equations, and solve linear inequalities.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=tyDN4pXkYCY",
    "youtubeId": "tyDN4pXkYCY",
    "keyNotes": "A linear equation is an equation of the first degree (the highest power of the variable is 1).\n• General Principles of Solving Equations:\n  - Whatever operation is applied to one side must be applied to the other side to keep the equation balanced.\n  - To clear fractions: Multiply EVERY term on both sides by the LCM of all denominators.\n  - Expand brackets, group like terms on one side (usually LHS) and constants on the other (RHS).\n• Linear Inequalities:\n  - Symbols: < (less than), > (greater than), ≤ (less than or equal to), ≥ (greater than or equal to).\n  - CRITICAL RULE: When you MULTIPLY or DIVIDE both sides of an inequality by a NEGATIVE number, the direction of the inequality sign MUST BE REVERSED (flipped).\n  - Number Line Representation:\n    - Hollow circle (○) for strict inequalities (< or >).\n    - Solid circle (●) for inclusive inequalities (≤ or ≥).",
    "examples": [
      {
        "id": "ex-jhs2m-t8-1",
        "title": "Solving a Linear Equation with Fractions",
        "problem": "Solve for x: (2x - 1) / 3 - (x - 2) / 4 = 1",
        "stepByStepSolution": [
          "Step 1: Identify denominators: 3 and 4. The LCM of 3 and 4 is 12.",
          "Step 2: Multiply every single term by 12: 12 × [(2x - 1)/3] - 12 × [(x - 2)/4] = 12 × 1.",
          "Step 3: Simplify: 4(2x - 1) - 3(x - 2) = 12.",
          "Step 4: Expand parentheses: 8x - 4 - 3x + 6 = 12 (note: -3 × -2 = +6).",
          "Step 5: Collect like terms: (8x - 3x) + (-4 + 6) = 12 => 5x + 2 = 12.",
          "Step 6: Subtract 2 from both sides: 5x = 10 => x = 10 / 5 = 2.",
          "Step 7: Check: (2(2)-1)/3 - (2-2)/4 = 3/3 - 0/4 = 1 - 0 = 1 (Correct!)."
        ],
        "keyTakeaway": "Always multiply EVERY term by the LCM to clear fractions, and place parentheses around numerators with more than one term to avoid sign errors."
      },
      {
        "id": "ex-jhs2m-t8-2",
        "title": "Solving a Linear Inequality with Negative Division",
        "problem": "Solve the inequality: 5 - 3x ≥ 17, and illustrate the truth set on a number line.",
        "stepByStepSolution": [
          "Step 1: Subtract 5 from both sides: -3x ≥ 17 - 5 => -3x ≥ 12.",
          "Step 2: Divide both sides by -3. Remember to REVERSE the inequality sign from ≥ to ≤: x ≤ 12 / (-3).",
          "Step 3: Simplify: x ≤ -4.",
          "Step 4: Truth set: {x : x ≤ -4, x ∈ ℝ}.",
          "Step 5: Number line: Draw a solid circle (●) at -4 and an arrow pointing to the left."
        ],
        "keyTakeaway": "Reversing the inequality symbol when dividing or multiplying by a negative number is the single most tested concept in BECE inequality questions."
      }
    ]
  },
  {
    "id": "jhs2-math-t9-linear-relations",
    "subjectId": "math",
    "level": "JHS 2",
    "term": 2,
    "orderIndex": 9,
    "title": "Linear Relations, Coordinates & Straight-Line Graphs",
    "description": "Plot points on the Cartesian coordinate plane, generate tables of values, draw linear graphs, and calculate gradient (m = Δy/Δx) and intercepts.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=tyDN4pXkYCY",
    "youtubeId": "tyDN4pXkYCY",
    "keyNotes": "The Cartesian plane is formed by two perpendicular number lines: the horizontal x-axis and vertical y-axis intersecting at the origin (0, 0).\n• Coordinates: An ordered pair (x, y) where x is the abscissa (distance from y-axis) and y is the ordinate (distance from x-axis).\n• Equation of a Straight Line:\n  - Slope-Intercept Form: y = mx + c.\n  - m = gradient or slope (steepness and direction of the line).\n  - c = y-intercept (the value of y where the line crosses the y-axis, i.e., when x = 0).\n• Calculating Gradient (m):\n  - m = (Change in y) / (Change in x) = (y₂ - y₁) / (x₂ - x₁).\n  - Positive gradient: Line rises from left to right.\n  - Negative gradient: Line falls from left to right.\n  - Horizontal line (y = k): Gradient m = 0.\n  - Vertical line (x = k): Gradient m is undefined.\n• Table of Values: Substitute selected x-values into the linear relation to compute corresponding y-values, then plot points and join with a straight line.",
    "examples": [
      {
        "id": "ex-jhs2m-t9-1",
        "title": "Calculating the Gradient of a Line Through Two Points",
        "problem": "Find the gradient of the straight line passing through points A(2, -3) and B(6, 5).",
        "stepByStepSolution": [
          "Step 1: Identify coordinates: (x₁, y₁) = (2, -3) and (x₂, y₂) = (6, 5).",
          "Step 2: Recall gradient formula: m = (y₂ - y₁) / (x₂ - x₁).",
          "Step 3: Substitute values: m = [5 - (-3)] / [6 - 2].",
          "Step 4: Simplify numerator: 5 - (-3) = 5 + 3 = 8.",
          "Step 5: Simplify denominator: 6 - 2 = 4.",
          "Step 6: Compute m: 8 / 4 = 2. The line has a positive gradient of 2."
        ],
        "keyTakeaway": "Be vigilant with signs when subtracting negative coordinates: y₂ - y₁ becomes 5 - (-3) = 5 + 3."
      },
      {
        "id": "ex-jhs2m-t9-2",
        "title": "Finding the Equation and y-intercept of a Line",
        "problem": "A line has a gradient of -3 and passes through the point (2, 4). Find its equation in the form y = mx + c.",
        "stepByStepSolution": [
          "Step 1: Start with slope-intercept form: y = mx + c. Given m = -3, so y = -3x + c.",
          "Step 2: Substitute the known point (x = 2, y = 4) into the equation: 4 = -3(2) + c.",
          "Step 3: Multiply: 4 = -6 + c.",
          "Step 4: Solve for c: c = 4 + 6 = 10. (The y-intercept is 10, or point (0, 10)).",
          "Step 5: Write the full equation: y = -3x + 10."
        ],
        "keyTakeaway": "The constant c in y = mx + c is the value where the graph intersects the vertical y-axis (x = 0)."
      }
    ]
  },
  {
    "id": "jhs2-math-t10-plane-geometry-angles",
    "subjectId": "math",
    "level": "JHS 2",
    "term": 2,
    "orderIndex": 10,
    "title": "Plane Geometry: Angles, Parallel Lines & Polygons",
    "description": "Explore angles on straight lines, vertically opposite angles, transversals through parallel lines (alternate, corresponding, interior), and angle sum of polygons.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=tyDN4pXkYCY",
    "youtubeId": "tyDN4pXkYCY",
    "keyNotes": "Geometry studies shapes, sizes, relative positions of figures, and properties of space.\n• Fundamental Angle Relationships:\n  - Complementary Angles: Two angles that add up to 90°.\n  - Supplementary Angles: Two angles that add up to 180° (angles on a straight line).\n  - Angles at a point: Sum is always 360°.\n  - Vertically opposite angles: Equal when two lines intersect.\n• Angles Associated with Parallel Lines and a Transversal:\n  - Alternate Angles (Z-angles): Equal (e.g. ∠a = ∠b).\n  - Corresponding Angles (F-angles): Equal (e.g. ∠c = ∠d).\n  - Co-interior / Consecutive Interior Angles (C-angles): Add up to 180° (supplementary).\n• Polygons: Closed plane figures with 3 or more straight sides.\n  - Sum of Interior Angles of an n-sided polygon = (n - 2) × 180°.\n  - Each interior angle of a regular n-sided polygon = [(n - 2) × 180°] / n.\n  - Sum of Exterior Angles of ANY convex polygon = 360°.\n  - Each exterior angle of a regular polygon = 360° / n.\n  - Interior Angle + Adjacent Exterior Angle = 180°.",
    "examples": [
      {
        "id": "ex-jhs2m-t10-1",
        "title": "Calculating Interior and Exterior Angles of a Regular Polygon",
        "problem": "Find the size of: (i) each exterior angle (ii) each interior angle of a regular octagon (8-sided polygon).",
        "stepByStepSolution": [
          "Step 1: An octagon has n = 8 sides.",
          "Step 2: Sum of exterior angles is always 360°.",
          "Step 3: Each exterior angle = 360° / n = 360° / 8 = 45°.",
          "Step 4: Since Interior Angle + Exterior Angle = 180°, each interior angle = 180° - 45° = 135°.",
          "Step 5: Check using formula: [(8 - 2) × 180°] / 8 = (6 × 180°) / 8 = 1080° / 8 = 135° (Matches!)."
        ],
        "keyTakeaway": "The quickest way to find the interior angle of a regular polygon is to first find the exterior angle (360° / n) and subtract it from 180°."
      },
      {
        "id": "ex-jhs2m-t10-2",
        "title": "Finding Unknown Angles Using Parallel Line Properties",
        "problem": "Two parallel lines AB and CD are cut by a transversal PQ at points X and Y. If ∠AXY = 3x - 10° and alternate angle ∠XYD = 2x + 15°, find the value of x and the size of the angle.",
        "stepByStepSolution": [
          "Step 1: Alternate interior angles between parallel lines are equal.",
          "Step 2: Set them equal: 3x - 10 = 2x + 15.",
          "Step 3: Subtract 2x from both sides: 3x - 2x - 10 = 15 => x - 10 = 15.",
          "Step 4: Add 10 to both sides: x = 25.",
          "Step 5: Substitute x = 25 into either expression: 3(25) - 10 = 75 - 10 = 65°."
        ],
        "keyTakeaway": "Identify the geometric relationship first (alternate = equal, corresponding = equal, co-interior = add to 180°) before setting up the equation."
      }
    ]
  },
  {
    "id": "jhs2-math-t11-pythagoras",
    "subjectId": "math",
    "level": "JHS 2",
    "term": 3,
    "orderIndex": 11,
    "title": "Pythagoras' Theorem & Right-Angled Triangles",
    "description": "Apply the Pythagorean relationship (a² + b² = c²), identify Pythagorean triples, and solve practical distance and height problems.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=tyDN4pXkYCY",
    "youtubeId": "tyDN4pXkYCY",
    "keyNotes": "Pythagoras' Theorem is a fundamental theorem in Euclidean geometry applicable strictly to right-angled triangles.\n• Statement: In any right-angled triangle, the square of the length of the hypotenuse (the side opposite the 90° angle) is equal to the sum of the squares of the lengths of the other two sides.\n  - Formula: c² = a² + b², where c is the hypotenuse, and a and b are the other two legs.\n  - To find hypotenuse: c = √(a² + b²).\n  - To find a leg: a = √(c² - b²) or b = √(c² - a²).\n• Pythagorean Triples: Sets of three positive integers that satisfy a² + b² = c².\n  - Primitive triples: (3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25).\n  - Multiples of triples also satisfy the theorem: (6, 8, 10), (9, 12, 15), (10, 24, 26).\n• Converse of Pythagoras' Theorem: If a triangle with sides a, b, c satisfies a² + b² = c², then the angle opposite side c is exactly 90°.",
    "examples": [
      {
        "id": "ex-jhs2m-t11-1",
        "title": "Finding the Hypotenuse of a Right-Angled Triangle",
        "problem": "In a right-angled triangle, the two perpendicular sides are of lengths 9 cm and 12 cm. Calculate the length of the hypotenuse.",
        "stepByStepSolution": [
          "Step 1: State Pythagoras' Theorem: c² = a² + b².",
          "Step 2: Let a = 9 cm and b = 12 cm.",
          "Step 3: Square the sides: a² = 9² = 81; b² = 12² = 144.",
          "Step 4: Add the squares: c² = 81 + 144 = 225.",
          "Step 5: Take the square root: c = √225 = 15 cm.",
          "Step 6: (Notice this is a 3-4-5 triple scaled by factor 3: 3×3=9, 4×3=12, 5×3=15)."
        ],
        "keyTakeaway": "The hypotenuse is always the longest side in a right-angled triangle, located directly opposite the 90° angle."
      },
      {
        "id": "ex-jhs2m-t11-2",
        "title": "Real-World Practical Application (Ladder Against a Wall)",
        "problem": "A 13-meter long ladder leans against a vertical building wall. If the foot of the ladder is 5 meters away from the base of the wall, how high up the wall does the ladder reach?",
        "stepByStepSolution": [
          "Step 1: Model as a right-angled triangle: Ladder = hypotenuse c = 13 m; Ground distance = base b = 5 m; Wall height = a.",
          "Step 2: Apply formula: a² + b² = c² => a² + 5² = 13².",
          "Step 3: Calculate squares: a² + 25 = 169.",
          "Step 4: Isolate a²: a² = 169 - 25 = 144.",
          "Step 5: Take the square root: a = √144 = 12 meters."
        ],
        "keyTakeaway": "When solving for a leg (wall height or base), subtract the square of the known leg from the square of the hypotenuse: a² = c² - b²."
      }
    ]
  },
  {
    "id": "jhs2-math-t12-perimeter-area",
    "subjectId": "math",
    "level": "JHS 2",
    "term": 3,
    "orderIndex": 12,
    "title": "Perimeter and Area of Plane Figures",
    "description": "Calculate perimeters and areas of compound shapes, trapezia, parallelograms, rhombuses, and circles including arc lengths and sector areas.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=tyDN4pXkYCY",
    "youtubeId": "tyDN4pXkYCY",
    "keyNotes": "Perimeter is the total boundary distance around a 2D closed figure. Area is the measure of the surface region enclosed inside.\n• Key Area Formulas:\n  - Triangle: Area = 1/2 × base × perpendicular height = 1/2 bh.\n  - Parallelogram: Area = base × perpendicular height = bh.\n  - Trapezium: Area = 1/2 (a + b)h, where a and b are lengths of parallel sides, and h is the perpendicular distance between them.\n  - Rhombus / Kite: Area = 1/2 × d₁ × d₂ (where d₁ and d₂ are diagonal lengths).\n• Circle Formulas (use π = 22/7 or 3.142):\n  - Circumference: C = 2πr = πd (where r = radius, d = diameter = 2r).\n  - Area of Circle: A = πr².\n  - Length of an Arc subtending angle θ: L = (θ / 360°) × 2πr.\n  - Area of a Sector of angle θ: Area = (θ / 360°) × πr².\n  - Perimeter of a Sector: Perimeter = Arc Length + 2r = L + 2r.",
    "examples": [
      {
        "id": "ex-jhs2m-t12-1",
        "title": "Area of a Trapezium with Given Dimensions",
        "problem": "A farmer's vegetable plot is shaped like a trapezium. The parallel sides measure 18 m and 14 m, and the perpendicular distance between them is 10 m. Calculate the area of the plot.",
        "stepByStepSolution": [
          "Step 1: Identify given variables: a = 18 m, b = 14 m, h = 10 m.",
          "Step 2: State formula: Area = 1/2 (a + b)h.",
          "Step 3: Add parallel sides: a + b = 18 + 14 = 32 m.",
          "Step 4: Multiply by height and divide by 2: Area = 1/2 × 32 × 10 = 16 × 10 = 160 m²."
        ],
        "keyTakeaway": "Always ensure the height used in the trapezium area formula is the perpendicular height, not the slant side."
      },
      {
        "id": "ex-jhs2m-t12-2",
        "title": "Perimeter and Area of a Circular Sector",
        "problem": "A sector of a circle of radius 14 cm subtends an angle of 90° at the center. Taking π = 22/7, calculate: (i) the length of the arc (ii) the total perimeter of the sector.",
        "stepByStepSolution": [
          "Step 1: Identify parameters: r = 14 cm, θ = 90°, π = 22/7.",
          "Step 2: Arc length L = (θ / 360°) × 2πr = (90 / 360) × 2 × (22 / 7) × 14.",
          "Step 3: Simplify fraction: 90 / 360 = 1/4.",
          "Step 4: Compute L: 1/4 × 2 × 22 × 2 = (1/4) × 88 = 22 cm.",
          "Step 5: Total perimeter of sector = Arc length + 2 × radius = L + 2r.",
          "Step 6: Perimeter = 22 + 2(14) = 22 + 28 = 50 cm."
        ],
        "keyTakeaway": "Many students forget that the perimeter of a sector includes the two straight boundary radii in addition to the curved arc length."
      }
    ]
  },
  {
    "id": "jhs2-math-t13-surface-volume",
    "subjectId": "math",
    "level": "JHS 2",
    "term": 3,
    "orderIndex": 13,
    "title": "Surface Area and Volume of Prisms and Cylinders",
    "description": "Explore nets of 3D solids, calculate total surface area and volume of cuboids, triangular prisms, and circular cylinders, and solve liquid capacity problems.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=tyDN4pXkYCY",
    "youtubeId": "tyDN4pXkYCY",
    "keyNotes": "A prism is a 3D solid with uniform cross-section along its entire length.\n• General Prism Principles:\n  - Volume of any prism = Area of Cross-Section × Length (or height).\n  - Total Surface Area = Sum of areas of all outward faces = 2(base area) + (perimeter of base × height).\n• Specific Solids:\n  1. Cuboid (Rectangular Prism):\n     - Volume = length × width × height = l × w × h.\n     - Total Surface Area = 2(lw + lh + wh).\n  2. Cylinder (Circular Prism):\n     - Volume = πr²h.\n     - Curved Surface Area (CSA) = 2πrh.\n     - Total Surface Area (closed cylinder) = 2πr² + 2πrh = 2πr(r + h).\n     - Open cylinder (one circular base, like a bucket): A = πr² + 2πrh.\n     - Pipe / hollow open tube: A = 2πrh.\n• Capacity and Unit Conversions:\n  - 1 cm³ = 1 mL.\n  - 1,000 cm³ = 1 Liter.\n  - 1 m³ = 1,000,000 cm³ = 1,000 Liters.",
    "examples": [
      {
        "id": "ex-jhs2m-t13-1",
        "title": "Volume and Capacity of a Cylindrical Water Tank",
        "problem": "A cylindrical water tank in a school has a base radius of 70 cm and a height of 200 cm. Taking π = 22/7, calculate: (i) the volume of the tank in cm³ (ii) its capacity in liters.",
        "stepByStepSolution": [
          "Step 1: Given r = 70 cm, h = 200 cm, π = 22/7.",
          "Step 2: Formula: Volume = πr²h.",
          "Step 3: Substitute: V = (22/7) × (70)² × 200 = (22/7) × 4,900 × 200.",
          "Step 4: Simplify: (4,900 ÷ 7) = 700 => V = 22 × 700 × 200 = 15,400 × 200 = 3,080,000 cm³.",
          "Step 5: Convert cm³ to Liters: divide by 1,000 => 3,080,000 ÷ 1,000 = 3,080 Liters."
        ],
        "keyTakeaway": "To convert volume in cubic centimeters (cm³) to liquid capacity in liters, divide by 1,000."
      },
      {
        "id": "ex-jhs2m-t13-2",
        "title": "Total Surface Area of a Closed Cylinder",
        "problem": "Calculate the total surface area of a closed metal drum of radius 7 cm and height 15 cm. (Take π = 22/7).",
        "stepByStepSolution": [
          "Step 1: Formula for total surface area of closed cylinder: TSA = 2πr(r + h).",
          "Step 2: Identify values: r = 7 cm, h = 15 cm, π = 22/7.",
          "Step 3: Calculate (r + h): 7 + 15 = 22 cm.",
          "Step 4: Substitute: TSA = 2 × (22/7) × 7 × 22.",
          "Step 5: Cancel 7 in denominator and numerator: 2 × 22 × 22 = 44 × 22 = 968 cm²."
        ],
        "keyTakeaway": "Check whether a cylinder is closed at both ends (2 circular bases), open at one end (1 base), or hollow (0 bases) before selecting the surface area formula."
      }
    ]
  },
  {
    "id": "jhs2-math-t14-statistics-data",
    "subjectId": "math",
    "level": "JHS 2",
    "term": 3,
    "orderIndex": 14,
    "title": "Data Collection, Presentation & Central Tendency",
    "description": "Construct frequency distribution tables, represent data using bar charts and pie charts, and calculate measures of central tendency (Mean, Median, Mode) and Range.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=tyDN4pXkYCY",
    "youtubeId": "tyDN4pXkYCY",
    "keyNotes": "Statistics involves collecting, organizing, analyzing, and interpreting numerical information.\n• Data Organization:\n  - Raw data is arranged into frequency distribution tables using tallies.\n• Measures of Central Tendency:\n  1. Mean (Arithmetic Average):\n     - For ungrouped data: x̄ = (Sum of all values) / (Total count) = (Σx) / n.\n     - For frequency table: x̄ = (Σfx) / (Σf).\n  2. Median:\n     - The middle value when data is arranged in ascending or descending order.\n     - If count n is odd: middle term = (n + 1)/2 th position.\n     - If count n is even: average of the two middle terms: [n/2 th + (n/2 + 1)th] / 2.\n  3. Mode:\n     - The data value that occurs with the highest frequency. A dataset can be unimodal, bimodal, or have no mode.\n• Measure of Dispersion:\n  - Range = Highest Value - Lowest Value.\n• Graphical Representation:\n  - Pie Chart: Total angle of circle is 360°.\n  - Sector angle for item = (Frequency of item / Total Frequency) × 360°.",
    "examples": [
      {
        "id": "ex-jhs2m-t14-1",
        "title": "Calculating Mean, Median, Mode, and Range of a Discrete Dataset",
        "problem": "The test marks of 9 students in a quiz are: 6, 8, 4, 7, 8, 9, 5, 8, 8. Find the: (i) Mode (ii) Median (iii) Mean (iv) Range.",
        "stepByStepSolution": [
          "Step 1: Arrange data in ascending order: 4, 5, 6, 7, 8, 8, 8, 8, 9.",
          "Step 2 (Mode): The number 8 occurs most frequently (4 times). Mode = 8.",
          "Step 3 (Median): There are n = 9 values (odd). Middle position = (9 + 1)/2 = 5th value. The 5th number in order is 8. Median = 8.",
          "Step 4 (Mean): Sum Σx = 4 + 5 + 6 + 7 + 8 + 8 + 8 + 8 + 9 = 63. Mean x̄ = 63 / 9 = 7.",
          "Step 5 (Range): Highest value - Lowest value = 9 - 4 = 5."
        ],
        "keyTakeaway": "Always arrange the numbers in ascending order before looking for the median."
      },
      {
        "id": "ex-jhs2m-t14-2",
        "title": "Calculating Sector Angles for a Pie Chart",
        "problem": "In a school election, 120 votes were cast: Kwesi received 60 votes, Mansa received 40 votes, and Esi received 20 votes. Calculate the sector angle representing each candidate on a pie chart.",
        "stepByStepSolution": [
          "Step 1: Total votes = 60 + 40 + 20 = 120 votes. Total angle in circle = 360°.",
          "Step 2: Scale factor = 360° / 120 = 3° per vote.",
          "Step 3: Sector angle for Kwesi = 60 × 3° = 180°.",
          "Step 4: Sector angle for Mansa = 40 × 3° = 120°.",
          "Step 5: Sector angle for Esi = 20 × 3° = 60°.",
          "Step 6: Check sum: 180° + 120° + 60° = 360° (Complete circle)."
        ],
        "keyTakeaway": "Sector angle is directly proportional to frequency: Angle = (Frequency / Total) × 360°."
      }
    ]
  },
  {
    "id": "jhs2-math-t15-probability",
    "subjectId": "math",
    "level": "JHS 2",
    "term": 3,
    "orderIndex": 15,
    "title": "Experimental and Theoretical Probability",
    "description": "Understand the probability scale (0 to 1), sample spaces, outcomes of single and combined events, and calculate theoretical probabilities of simple events.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=tyDN4pXkYCY",
    "youtubeId": "tyDN4pXkYCY",
    "keyNotes": "Probability is the mathematical measure of the likelihood or chance that a specific event will occur.\n• The Probability Scale:\n  - 0 ≤ P(Event) ≤ 1 (or 0% to 100%).\n  - P = 0: Impossible event (e.g. rolling an 8 on a standard 6-sided die).\n  - P = 1: Certain event (e.g. getting a number less than 7 on a standard die).\n  - P = 0.5: Even chance (e.g. getting Heads when tossing a fair coin).\n• Sample Space (S): The set of all possible outcomes of an experiment.\n  - Tossing a coin: S = {H, T}, n(S) = 2.\n  - Rolling a die: S = {1, 2, 3, 4, 5, 6}, n(S) = 6.\n• Theoretical Probability Formula:\n  - P(E) = (Number of favorable outcomes) / (Total number of possible outcomes) = n(E) / n(S).\n• Complementary Events:\n  - An event NOT happening is denoted E'.\n  - P(E') = 1 - P(E), and P(E) + P(E') = 1.",
    "examples": [
      {
        "id": "ex-jhs2m-t15-1",
        "title": "Calculating Probability of Rolling Specific Outcomes on a Die",
        "problem": "A fair 6-sided die is rolled once. What is the probability of obtaining: (i) a prime number (ii) a number greater than 4 (iii) an odd number?",
        "stepByStepSolution": [
          "Step 1: Sample space S = {1, 2, 3, 4, 5, 6}, so total outcomes n(S) = 6.",
          "Step 2 (Prime Number): Prime numbers on die are {2, 3, 5} (Note: 1 is not prime!). Favorable outcomes = 3. P(Prime) = 3/6 = 1/2.",
          "Step 3 (Number > 4): Numbers greater than 4 are {5, 6}. Favorable outcomes = 2. P(> 4) = 2/6 = 1/3.",
          "Step 4 (Odd Number): Odd numbers are {1, 3, 5}. Favorable outcomes = 3. P(Odd) = 3/6 = 1/2."
        ],
        "keyTakeaway": "Remember that 1 is not a prime number. The prime numbers on a die are 2, 3, and 5."
      },
      {
        "id": "ex-jhs2m-t15-2",
        "title": "Probability with Colored Counters in an Opaque Bag",
        "problem": "A bag contains 5 red balls, 3 blue balls, and 2 green balls. If one ball is picked at random without looking, calculate the probability that the ball picked is: (i) blue (ii) NOT red.",
        "stepByStepSolution": [
          "Step 1: Total balls n(S) = 5 (red) + 3 (blue) + 2 (green) = 10 balls.",
          "Step 2: Number of blue balls = 3. Probability P(Blue) = n(Blue) / n(S) = 3/10.",
          "Step 3: Not red means picking either blue or green: 3 + 2 = 5 non-red balls.",
          "Step 4: P(Not Red) = 5/10 = 1/2.",
          "Step 5: Alternatively, using complement: P(Red) = 5/10 = 1/2; P(Not Red) = 1 - 1/2 = 1/2."
        ],
        "keyTakeaway": "The sum of probabilities of all mutually exclusive outcomes in an experiment equals 1."
      }
    ]
  }
];
