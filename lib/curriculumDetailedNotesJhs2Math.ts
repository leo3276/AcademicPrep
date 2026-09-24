// Ghanaian JHS 2 Mathematics Detailed Study Notes
// Based on NaCCA / GES Common Core Programme (CCP) Curriculum
// Complete textbook-grade notes for all 15 JHS 2 topics

import { DetailedNotes } from './types';

export const JHS2_MATH_DETAILED_NOTES: Record<string, DetailedNotes> = {
  "jhs2-math-t1-real-numbers": {
    "topicId": "jhs2-math-t1-real-numbers",
    "introduction": "The Real Number System forms the bedrock of all mathematical computation. In JHS 2, students transition from intuitive counting to formal operations involving directed numbers, terminating and recurring decimals, and the foundational hierarchy connecting natural numbers, integers, rational numbers, and real numbers.",
    "realWorldContext": "Whether calculating trade balances at Makola market, tracking bank account overdrafts, or measuring temperatures and altitudes across the Kwahu plateau, directed and rational numbers provide the exact language for quantifying positive and negative quantities.",
    "objectives": [
      "Distinguish between Natural numbers, Whole numbers, Integers, and Rational numbers.",
      "Perform the four basic arithmetic operations with positive and negative integers.",
      "Apply the correct hierarchy of operations using BODMAS / PEMDAS.",
      "Convert terminating and recurring decimals into equivalent common fractions in lowest terms.",
      "Order rational numbers and represent them accurately on a standard number line."
    ],
    "sections": [
      {
        "title": "1. The Real Number System Hierarchy",
        "content": "Every number used in junior high school belongs to the set of Real Numbers (ℝ). These are subdivided into distinct subsets based on their mathematical properties.",
        "bulletPoints": [
          "Natural Numbers (ℕ): Counting numbers starting from 1: {1, 2, 3, 4, ...}.",
          "Whole Numbers (𝕎): Natural numbers together with zero: {0, 1, 2, 3, ...}.",
          "Integers (ℤ): Positive and negative whole numbers including zero: {..., -3, -2, -1, 0, 1, 2, 3, ...}.",
          "Rational Numbers (ℚ): Any number that can be expressed as a quotient of two integers a/b where b ≠ 0. Includes fractions, terminating decimals, and repeating decimals.",
          "Irrational Numbers: Numbers that cannot be written as a ratio of two integers (e.g. √2, √3, π). Their decimals are non-terminating and non-recurring."
        ],
        "keyTakeaway": "All integers are rational numbers because any integer n can be written as n/1. However, not all rational numbers are integers.",
        "realWorldExample": "A temperature of -2°C in a cold-storage warehouse at Tema Harbour is an integer; a petrol price of GH₵ 14.75 is a rational terminating decimal."
      },
      {
        "title": "2. Operations with Directed Numbers (Signed Integers)",
        "content": "Directed numbers carry both a magnitude and a directional sign (+ or -). Rules for their operations must be mastered thoroughly to avoid pervasive algebraic errors.",
        "bulletPoints": [
          "Addition of Same Signs: Add the magnitudes and keep the common sign: (+4) + (+7) = +11; (-5) + (-8) = -13.",
          "Addition of Different Signs: Find the difference between absolute values and take the sign of the number with the larger absolute value: (-12) + (+7) = -5; (+15) + (-6) = +9.",
          "Subtraction: Subtracting a number is identical to adding its opposite: a - b = a + (-b), and a - (-b) = a + b. For example: 8 - (-5) = 8 + 5 = 13; -7 - (-4) = -7 + 4 = -3.",
          "Multiplication and Division: Products or quotients of like signs are POSITIVE: (-) × (-) = + and (+) × (+) = +. Products or quotients of unlike signs are NEGATIVE: (+) × (-) = - and (-) × (+) = -."
        ],
        "keyTakeaway": "Two negative signs directly adjacent without an intervening number become a positive sign: - (-x) = + x.",
        "realWorldExample": "If your mobile money wallet has a balance of GH₵ 20 and you incur an overdraft fee of GH₵ 35, your new balance is 20 - 35 = -GH₵ 15."
      },
      {
        "title": "3. Order of Operations (BODMAS)",
        "content": "When an arithmetic expression features multiple operations, calculations must follow the standard operational hierarchy to produce a unique, correct result.",
        "bulletPoints": [
          "B - Brackets: Evaluate expressions inside grouping symbols first (parentheses, brackets, curly braces).",
          "O - Orders: Evaluate powers, indices, and square roots.",
          "D & M - Division and Multiplication: These share equal priority and must be worked strictly from left to right.",
          "A & S - Addition and Subtraction: These share equal priority and must be evaluated strictly from left to right as encountered."
        ],
        "keyTakeaway": "Never automatically add before subtracting if subtraction appears to the left. Multiplication and division have equal rank; addition and subtraction have equal rank.",
        "realWorldExample": "Evaluating 10 - 3 × 2 + 8 ÷ 4: Multiplication and division first give 10 - 6 + 2 = 4 + 2 = 6."
      },
      {
        "title": "4. Recurring Decimals to Common Fractions",
        "content": "A recurring decimal has one or more repeating digits after the decimal point. Any recurring decimal represents a rational number and can be converted into a fraction a/b.",
        "bulletPoints": [
          "Single Repeating Digit (e.g. 0.777... = 0.7̇): Let x = 0.777... Multiply by 10 to get 10x = 7.777... Subtract: 10x - x = 7 => 9x = 7 => x = 7/9.",
          "Two Repeating Digits (e.g. 0.2323... = 0.2̇3̇): Let x = 0.2323... Multiply by 100: 100x = 23.2323... Subtract: 99x = 23 => x = 23/99.",
          "Mixed Recurring Decimals (e.g. 0.1666... = 0.16̇): Multiply by 10 to get 10x = 1.666..., then by 100 to get 100x = 16.666... Subtract: 90x = 15 => x = 15/90 = 1/6."
        ],
        "keyTakeaway": "The number of repeating digits determines the power of 10 used to shift the decimal point and cancel out the infinite repeating fractional part.",
        "realWorldExample": "Dividing 1 meter of fabric equally among 3 dressmakers gives 0.333... m, which exactly equals the rational fraction 1/3 m."
      }
    ],
    "commonMistakes": [
      "Assuming - (-a) = -a instead of +a.",
      "Evaluating addition before subtraction regardless of order (e.g. calculating 10 - 3 + 2 as 10 - 5 = 5 instead of (10 - 3) + 2 = 9).",
      "Confusing irrational numbers like π or √2 with rational numbers.",
      "Forgetting to reduce fractions obtained from recurring decimals to their lowest terms.",
      "Dividing by zero, which is mathematically undefined."
    ],
    "beceExamTips": [
      "In BECE Section B, write down every intermediate arithmetic step; do not perform three operations mentally in a single line.",
      "When evaluating fractions with operations in both numerator and denominator, treat the numerator and denominator as if they are enclosed in brackets.",
      "Always state the final answer in simplest fraction form a/b where a and b share no common factors other than 1.",
      "On number lines, clearly indicate whether points are open or closed and maintain equal distance between unit marks."
    ],
    "summaryChecklist": [
      "I can classify any given number as natural, whole, integer, rational, or irrational.",
      "I can add, subtract, multiply, and divide positive and negative integers accurately.",
      "I apply BODMAS correctly from left to right for multiplication/division and addition/subtraction.",
      "I can convert both pure and mixed recurring decimals into common fractions.",
      "I can order fractions, decimals, and negative numbers on a number line."
    ]
  },
  "jhs2-math-t2-indices": {
    "topicId": "jhs2-math-t2-indices",
    "introduction": "Indices (powers or exponents) offer a concise notation for expressing repeated multiplication. In JHS 2, students master the fundamental laws governing index manipulation and apply scientific notation (standard form) to express very large cosmological distances and microscopic biological measurements.",
    "realWorldContext": "Scientists estimating Ghana's population (approx. 3.3 × 10⁷ people), cocoa production tonnage, or measuring the microscopic diameter of malaria parasites in blood smears (approx. 2.0 × 10⁻⁶ m) rely directly on standard form.",
    "objectives": [
      "State and apply the primary laws of indices (Product, Quotient, Power of a Power).",
      "Interpret and evaluate expressions with zero and negative indices.",
      "Convert ordinary numbers into standard form (A × 10ⁿ where 1 ≤ A < 10).",
      "Convert numbers written in standard form back into ordinary decimal notation.",
      "Perform arithmetic operations (multiplication, division, addition) on numbers in standard form."
    ],
    "sections": [
      {
        "title": "1. The Fundamental Laws of Indices",
        "content": "When expressions have identical bases, their powers can be combined using established index laws.",
        "bulletPoints": [
          "Product Law: aᵐ × aⁿ = aᵐ⁺ⁿ. Example: 3⁴ × 3² = 3⁴⁺² = 3⁶.",
          "Quotient Law: aᵐ ÷ aⁿ = aᵐ⁻ⁿ. Example: 5⁷ ÷ 5³ = 5⁷⁻³ = 5⁴.",
          "Power of a Power Law: (aᵐ)ⁿ = aᵐⁿ. Example: (2³)² = 2⁶ = 64.",
          "Power of a Product: (ab)ⁿ = aⁿ bⁿ. Example: (3x)³ = 3³ × x³ = 27x³.",
          "Power of a Quotient: (a/b)ⁿ = aⁿ / bⁿ. Example: (2/5)² = 4/25."
        ],
        "keyTakeaway": "Index laws only apply when the base numbers are identical. For example, 2³ × 3² cannot be simplified to 6⁵.",
        "realWorldExample": "Computer storage scaling doubles at each power: 2¹⁰ bytes = 1,024 bytes (1 Kilobyte); 2²⁰ bytes = 1 Megabyte."
      },
      {
        "title": "2. Zero and Negative Indices",
        "content": "Extending index laws to include zero and negative integers allows mathematical operations to remain consistent across all real values.",
        "bulletPoints": [
          "Zero Index: Any non-zero base raised to the power of 0 equals 1 (a⁰ = 1). Proof: aⁿ ÷ aⁿ = aⁿ⁻ⁿ = a⁰; but aⁿ ÷ aⁿ = 1, therefore a⁰ = 1.",
          "Negative Index: A negative index represents the reciprocal of the base raised to the positive power: a⁻ⁿ = 1 / aⁿ.",
          "Fractional Reciprocal: (a/b)⁻ⁿ = (b/a)ⁿ. Example: (2/3)⁻² = (3/2)² = 9/4.",
          "Moving Terms Across Fraction Bars: A term in the denominator with a negative exponent moves to the numerator with a positive exponent: 1 / x⁻³ = x³."
        ],
        "keyTakeaway": "A negative exponent does NOT make a number negative; it indicates division (a reciprocal). For example, 5⁻² = 1/25, not -25.",
        "realWorldExample": "A concentration of 10⁻³ moles/liter means 1/1000 or 0.001 moles/liter in a laboratory chemical test."
      },
      {
        "title": "3. Standard Form (Scientific Notation)",
        "content": "Standard form is a standardized method of writing numbers as A × 10ⁿ, where 1 ≤ A < 10 and n is an integer.",
        "bulletPoints": [
          "Numbers ≥ 10: The decimal point moves left; the exponent n is positive. Example: 540,000 = 5.4 × 10⁵ (decimal moved 5 places left).",
          "Numbers < 1: The decimal point moves right; the exponent n is negative. Example: 0.00072 = 7.2 × 10⁻⁴ (decimal moved 4 places right).",
          "Numbers between 1 and 10: Remain unchanged with power 0: 7.85 = 7.85 × 10⁰.",
          "Strict Rule for A: The leading number A must be at least 1 and strictly less than 10. Writing 45 × 10³ or 0.45 × 10⁵ is NOT in standard form."
        ],
        "keyTakeaway": "Count the number of places the decimal point shifts: shifting left gives a positive exponent; shifting right gives a negative exponent.",
        "realWorldExample": "The speed of light in vacuum is approximately 300,000,000 m/s = 3.0 × 10⁸ m/s."
      },
      {
        "title": "4. Calculations in Standard Form",
        "content": "Multiplying and dividing numbers in scientific notation involves combining coefficients separately from powers of 10.",
        "bulletPoints": [
          "Multiplication: (A × 10ᵐ) × (B × 10ⁿ) = (A × B) × 10ᵐ⁺ⁿ. If A × B ≥ 10, adjust the result back into standard form.",
          "Division: (A × 10ᵐ) ÷ (B × 10ⁿ) = (A ÷ B) × 10ᵐ⁻ⁿ. If A ÷ B < 1, shift the decimal point and adjust the exponent.",
          "Addition and Subtraction: Convert both terms to have identical powers of 10 before adding or subtracting coefficients."
        ],
        "keyTakeaway": "Always check your final computed coefficient. If it is 10 or greater, or less than 1, you must readjust it so that 1 ≤ A < 10.",
        "realWorldExample": "If a farmer produces 2.5 × 10⁴ kg of maize per year for 4 years, total production is (2.5 × 4) × 10⁴ = 10 × 10⁴ = 1.0 × 10⁵ kg."
      }
    ],
    "commonMistakes": [
      "Believing a⁰ = 0 instead of 1.",
      "Thinking 4⁻² = -16 instead of 1/16.",
      "Writing a standard form answer with a coefficient outside [1, 10), such as 24 × 10³ instead of 2.4 × 10⁴.",
      "Adding base numbers when applying product law (e.g. writing 2³ × 2⁴ = 4⁷ instead of 2⁷).",
      "Forgetting to apply powers to numerical coefficients inside parentheses (e.g. writing (2x)³ = 2x³ instead of 8x³)."
    ],
    "beceExamTips": [
      "In BECE objective questions, check options carefully: examiners frequently include distractors like -16 for 4⁻².",
      "When solving indices equations like 2^(x+1) = 16, express both sides with the same base: 2^(x+1) = 2⁴ => x + 1 = 4 => x = 3.",
      "Always state numbers in standard form with the correct single non-zero digit before the decimal point.",
      "Double-check decimal place shifts: count spaces, not the number of zeros."
    ],
    "summaryChecklist": [
      "I know all index laws for multiplication, division, and powers.",
      "I can evaluate expressions with zero and negative powers without error.",
      "I can write any number between 0.000001 and 1,000,000 in standard form.",
      "I can multiply and divide quantities in scientific notation.",
      "I can solve exponential equations by equating bases."
    ]
  },
  "jhs2-math-t3-factors-multiples": {
    "topicId": "jhs2-math-t3-factors-multiples",
    "introduction": "Prime numbers are the fundamental building blocks of all integers. In this topic, JHS 2 students learn how to decompose composite numbers into unique products of prime factors, express them in index form, and systematically calculate the Highest Common Factor (HCF) and Lowest Common Multiple (LCM) for academic and everyday problem-solving.",
    "realWorldContext": "Wholesale traders in Kumasi packaging soaps into uniform crates without leftover pieces use HCF, while transport station masters scheduling trotro departures to Koforidua and Cape Coast to synchronize departures use LCM.",
    "objectives": [
      "Define and identify prime numbers, composite numbers, factors, and multiples.",
      "Express composite numbers as products of prime factors in index notation.",
      "Calculate the Highest Common Factor (HCF) of two or three numbers using prime factorization.",
      "Calculate the Lowest Common Multiple (LCM) of two or three numbers using prime factorization.",
      "Solve practical word problems involving synchronized cycles (LCM) and equal partitioning (HCF)."
    ],
    "sections": [
      {
        "title": "1. Prime Factorization and Index Form",
        "content": "The Fundamental Theorem of Arithmetic states that every integer greater than 1 is either prime or can be uniquely factored into a product of prime numbers, up to the order of factors.",
        "bulletPoints": [
          "Prime Numbers: Have exactly two distinct factors (1 and itself). 2 is the smallest and only even prime.",
          "Composite Numbers: Have more than two factors (e.g. 4, 6, 8, 9, 12, ...). 1 is neither prime nor composite.",
          "Factor Tree Method: Continuously branch composite numbers until all endpoints are prime numbers.",
          "Successive Division Method: Repeatedly divide by the smallest possible prime numbers until the quotient reaches 1.",
          "Index Form: Group repeated prime factors using powers: 72 = 2 × 2 × 2 × 3 × 3 = 2³ × 3²."
        ],
        "keyTakeaway": "Prime factorization provides an exact 'fingerprint' of any composite integer.",
        "realWorldExample": "Decomposing 180 seconds into prime components: 180 = 2² × 3² × 5."
      },
      {
        "title": "2. Highest Common Factor (HCF / GCD)",
        "content": "The HCF is the largest positive integer that divides two or more given numbers without a remainder.",
        "bulletPoints": [
          "Index Notation Method: Express all numbers in prime factor index form.",
          "Rule for HCF: Select only the prime factors that are COMMON to all numbers, taking each with its LOWEST exponent.",
          "Example: Find HCF of 36 and 60. 36 = 2² × 3²; 60 = 2² × 3 × 5. Common primes are 2 and 3. Lowest power of 2 is 2²; lowest power of 3 is 3¹. HCF = 2² × 3¹ = 12.",
          "Application: Finding the greatest size of equal packages that can divide groups of items without leftovers."
        ],
        "keyTakeaway": "For HCF, take ONLY common prime bases, using their SMALLEST powers.",
        "realWorldExample": "A baker has 48 meat pies and 72 spring rolls. The largest number of identical snack packs she can make without leftovers is HCF(48, 72) = 24 packs."
      },
      {
        "title": "3. Lowest Common Multiple (LCM)",
        "content": "The LCM is the smallest positive integer that is divisible by all given numbers without leaving a remainder.",
        "bulletPoints": [
          "Index Notation Method: Express all numbers in prime factor index form.",
          "Rule for LCM: Select ALL prime factors that appear in any of the factorizations, taking each with its HIGHEST exponent.",
          "Example: Find LCM of 36 and 60. 36 = 2² × 3²; 60 = 2² × 3 × 5. All prime bases are 2, 3, and 5. Highest powers: 2², 3², 5¹. LCM = 2² × 3² × 5 = 4 × 9 × 5 = 180.",
          "Relationship: For any two positive integers a and b: HCF(a, b) × LCM(a, b) = a × b."
        ],
        "keyTakeaway": "For LCM, take ALL prime bases present, using their LARGEST powers.",
        "realWorldExample": "If two runners lap an athletic oval every 60 seconds and 90 seconds, they will meet together at the start line every LCM(60, 90) = 180 seconds (3 minutes)."
      },
      {
        "title": "4. Solving Practical Real-World Problems",
        "content": "Distinguishing between when a problem requires HCF versus LCM is an essential problem-solving skill tested in BECE examinations.",
        "bulletPoints": [
          "Identifying HCF Scenarios: Questions using keywords like 'greatest number', 'maximum length', 'divide equally without remainder', 'cut into equal pieces'.",
          "Identifying LCM Scenarios: Questions using keywords like 'flash together', 'meet again', 'smallest quantity', 'ring at the same time', 'simultaneous intervals'.",
          "Verification: Always cross-check that your computed HCF divides all original numbers, and that your computed LCM is a multiple of all original numbers."
        ],
        "keyTakeaway": "HCF partitions a total into smaller equal parts; LCM aligns repeating cyclical events to find when they coincide.",
        "realWorldExample": "Lighthouse beacons flashing every 12 and 18 seconds flash together every LCM(12, 18) = 36 seconds."
      }
    ],
    "commonMistakes": [
      "Listing 1 as a prime number (1 is neither prime nor composite).",
      "Using composite numbers (like 4, 6, 9) on the outside of successive division ladders instead of prime numbers.",
      "Taking the highest powers for HCF instead of lowest powers.",
      "Ignoring prime factors that appear in only one number when calculating the LCM.",
      "Confusing the definitions of factors (divisors, ≤ number) and multiples (products, ≥ number)."
    ],
    "beceExamTips": [
      "Always leave your prime factorizations clearly visible in index form before writing the HCF or LCM.",
      "Use the product formula HCF × LCM = a × b as a quick check for two numbers in the exam hall.",
      "In word problems, write a concluding statement in words with proper units (e.g. 'The bells will next toll together at 10:30 AM').",
      "When finding the LCM of three numbers, ensure you pick the highest power among all three factor trees."
    ],
    "summaryChecklist": [
      "I can list prime numbers up to 50 readily.",
      "I can express any composite number as a product of prime factors in index form.",
      "I can determine the HCF of two or three numbers using lowest common powers.",
      "I can determine the LCM of two or three numbers using highest powers of all primes.",
      "I can identify and solve word problems requiring HCF versus LCM."
    ]
  },
  "jhs2-math-t4-ratios-proportions": {
    "topicId": "jhs2-math-t4-ratios-proportions",
    "introduction": "Ratios and proportions enable the comparison of quantities and govern financial sharing, architectural scaling, recipe formulation, and rates of work and speed. In JHS 2, students master sharing quantities in given ratios and distinguishing between direct and inverse proportion.",
    "realWorldContext": "From mixing concrete (1 part cement : 2 parts sand : 4 parts gravel) on building sites across Accra, to calculating car travel times along the Accra-Kumasi highway, proportional reasoning is one of the most widely applied areas of everyday mathematics.",
    "objectives": [
      "Express comparisons as simplified ratios in lowest terms.",
      "Divide a given quantity into two or more parts according to a specified ratio.",
      "Identify and solve problems involving direct proportion using unitary and cross-multiplication methods.",
      "Identify and solve problems involving inverse proportion.",
      "Calculate rates including average speed, rate of work, and unit costs."
    ],
    "sections": [
      {
        "title": "1. Concept of Ratio and Simplification",
        "content": "A ratio compares two or more quantities of the same kind measured in the same units. Ratios are written as a : b or as a fraction a/b.",
        "bulletPoints": [
          "Units Must Match: Before forming a ratio, convert all quantities to identical units. Example: Ratio of 50 pesewas to GH₵ 2 is 50p : 200p = 50 : 200 = 1 : 4.",
          "No Units: A ratio is a pure mathematical number with no units attached.",
          "Simplification: Divide all parts of the ratio by their highest common factor. Example: 24 : 36 = (24÷12) : (36÷12) = 2 : 3.",
          "Equivalent Ratios: Formed by multiplying or dividing each term by the same non-zero quantity."
        ],
        "keyTakeaway": "Never write a ratio comparing different units directly (e.g. 50 pesewas to 2 cedis is NOT 50 : 2; it is 1 : 4).",
        "realWorldExample": "Mixing orange juice concentrate with water in a ratio of 1 : 4 means 1 glass of concentrate needs 4 glasses of water."
      },
      {
        "title": "2. Proportional Division (Sharing in a Ratio)",
        "content": "Dividing a quantity according to a specified ratio divides the whole into a number of equal parts.",
        "bulletPoints": [
          "Step 1: Calculate the total number of parts by summing the ratio terms.",
          "Step 2: Find the value of one part by dividing the total quantity by the sum of ratio parts.",
          "Step 3: Multiply the value of one part by each individual ratio term.",
          "Example: Share GH₵ 1,800 between Kwaku and Abena in ratio 4 : 5. Total parts = 4 + 5 = 9. One part = 1800 ÷ 9 = GH₵ 200. Kwaku gets 4 × 200 = GH₵ 800; Abena gets 5 × 200 = GH₵ 1,000.",
          "Three-part ratios follow the identical procedure: sum all 3 terms to get total parts."
        ],
        "keyTakeaway": "Check your solution by summing all individual shares; the sum must equal the original total quantity.",
        "realWorldExample": "Three partners investing in a commercial fishing boat share profits in the ratio of their capital contributions."
      },
      {
        "title": "3. Direct Proportion",
        "content": "Two quantities are in direct proportion when an increase in one results in a proportional increase in the other, such that their ratio y/x remains constant.",
        "bulletPoints": [
          "Mathematical Form: y ∝ x, which means y = kx, where k is the constant of proportionality.",
          "Unitary Method: Find the cost/value of a single unit first, then multiply by the required quantity.",
          "Example: If 6 exercise books cost GH₵ 30, 1 book costs 30 ÷ 6 = GH₵ 5. Therefore, 11 books cost 11 × 5 = GH₵ 55.",
          "Graph: The graph of a direct proportion is always a straight line passing through the origin (0, 0)."
        ],
        "keyTakeaway": "In direct proportion, more produces more, and less produces less.",
        "realWorldExample": "The cost of petrol purchased at a filling station is directly proportional to the number of liters pumped."
      },
      {
        "title": "4. Inverse Proportion and Rates",
        "content": "Two quantities are in inverse proportion when an increase in one causes a proportional decrease in the other, such that their product remains constant.",
        "bulletPoints": [
          "Mathematical Form: y ∝ 1/x, which means x × y = k (a constant).",
          "Worker-Time Problems: If more workers are employed, the job takes fewer days: Workers₁ × Days₁ = Workers₂ × Days₂.",
          "Example: If 4 painters take 6 days to paint a school, total work = 4 × 6 = 24 painter-days. 8 painters will take 24 ÷ 8 = 3 days.",
          "Speed, Distance, Time: Speed = Distance / Time. For a fixed distance, higher speed results in less time (inverse proportion)."
        ],
        "keyTakeaway": "In inverse proportion, the product of the two variables remains constant: x₁y₁ = x₂y₂.",
        "realWorldExample": "Driving from Accra to Takoradi at 80 km/h takes less time than driving at 40 km/h for the same fixed distance."
      }
    ],
    "commonMistakes": [
      "Failing to convert different units to a common unit before simplifying a ratio.",
      "Treating inverse proportion problems as direct proportion (e.g. arguing that 10 workers take MORE days than 5 workers).",
      "Dividing the quantity by individual ratio numbers rather than the sum of all ratio parts.",
      "Adding units to a simplified ratio (ratios are dimensionless numbers).",
      "Confusing speed with time in rate calculations."
    ],
    "beceExamTips": [
      "Clearly show the sum of ratio parts in Section B questions to gain method marks.",
      "In proportion word problems, state whether the relation is direct or inverse before writing equations.",
      "Check that speed is expressed in consistent units (e.g. km/h with hours and kilometers; m/s with seconds and meters).",
      "Always verify that the individual shares add up to the total amount given in the question."
    ],
    "summaryChecklist": [
      "I can simplify any ratio after converting units appropriately.",
      "I can divide any quantity among two or three recipients in a given ratio.",
      "I can solve direct proportion problems using the unitary method.",
      "I can solve inverse proportion problems using constant product reasoning.",
      "I can calculate speed, distance, and time relationships accurately."
    ]
  },
  "jhs2-math-t5-percentages-finances": {
    "topicId": "jhs2-math-t5-percentages-finances",
    "introduction": "Financial mathematics applies percentage reasoning to commerce, personal finance, and enterprise. In JHS 2, students master percentage increase and decrease, profit and loss calculations, sales discounts, commission, simple interest, and hire purchase agreements.",
    "realWorldContext": "Ghanaian business owners calculate profit margins on imported goods, farmers compute interest on bank loans for fertilizer, and consumers evaluate hire purchase terms when buying refrigerators and motorbikes.",
    "objectives": [
      "Calculate percentage increase, percentage decrease, and percentage error.",
      "Compute cost price, selling price, profit, loss, and percentage profit/loss.",
      "Determine trade discount, marked price, and sales commission.",
      "Calculate simple interest and total amount payable using I = (PRT)/100.",
      "Solve hire purchase problems involving initial deposits and periodic installments."
    ],
    "sections": [
      {
        "title": "1. Percentage Change: Increase and Decrease",
        "content": "A percentage expresses a fraction of 100. Percentage change measures relative growth or reduction compared to an original reference value.",
        "bulletPoints": [
          "Percentage Change Formula: % Change = (Change in Value / Original Value) × 100%.",
          "Percentage Increase: New Value = Original Value × (100 + % Increase) / 100.",
          "Percentage Decrease: New Value = Original Value × (100 - % Decrease) / 100.",
          "Example: A book price increases from GH₵ 80 to GH₵ 100. Increase = 20. % Increase = (20 / 80) × 100% = 25%."
        ],
        "keyTakeaway": "Always divide the change by the ORIGINAL initial value, never by the new value.",
        "realWorldExample": "If school enrollment rises from 400 to 460 students, the growth is (60 / 400) × 100% = 15%."
      },
      {
        "title": "2. Profit, Loss, Discount, and Commission",
        "content": "Commercial transactions depend on calculating whether revenue exceeds expenses and determining retail discounts.",
        "bulletPoints": [
          "Profit = Selling Price (SP) - Cost Price (CP), when SP > CP.",
          "Loss = Cost Price (CP) - Selling Price (SP), when CP > SP.",
          "Percentage Profit = (Profit / CP) × 100%. Always divide by CP!",
          "Percentage Loss = (Loss / CP) × 100%. Always divide by CP!",
          "Discount: A reduction from marked (catalog) price: SP = Marked Price - Discount. Discount = (% Discount / 100) × Marked Price.",
          "Commission: Payment to an agent calculated as a percentage of total sales generated."
        ],
        "keyTakeaway": "Percentage profit or loss is strictly based on Cost Price (CP), because profit measures return on capital invested.",
        "realWorldExample": "A boutique offering a 20% discount on a dress marked at GH₵ 150 sells it for 150 - 30 = GH₵ 120."
      },
      {
        "title": "3. Simple Interest (I = PRT / 100)",
        "content": "Interest is the charge paid for borrowing money or the reward earned for saving capital in a financial institution.",
        "bulletPoints": [
          "Formula: I = (P × R × T) / 100.",
          "P = Principal: The initial sum of money borrowed or deposited.",
          "R = Rate: The annual interest rate expressed as a percentage per annum (% p.a.).",
          "T = Time: The duration of the loan or investment in YEARS.",
          "Converting Time: If time is given in months, divide by 12 (e.g. 8 months = 8/12 = 2/3 year). If given in days, divide by 365.",
          "Total Amount (A): The total money accrued or repaid: A = P + I."
        ],
        "keyTakeaway": "Time T must ALWAYS be in years. Forgetting to convert months into years is the most common student error in this topic.",
        "realWorldExample": "Depositing GH₵ 2,000 in a savings account at 10% p.a. for 3 years yields I = (2000 × 10 × 3)/100 = GH₵ 600 interest; Total Amount = GH₵ 2,600."
      },
      {
        "title": "4. Hire Purchase Agreements",
        "content": "Hire purchase allows buyers to take possession of expensive durable goods immediately by paying a deposit and settling the balance in regular installments.",
        "bulletPoints": [
          "Hire Purchase (HP) Price = Cash Deposit + Total Periodic Installments.",
          "Total Installments = Number of Installments × Amount per Installment.",
          "Carrying Cost (Extra Charge): HP Price - Cash Price.",
          "Example: A television costs GH₵ 2,400 cash. On hire purchase, a customer pays GH₵ 500 deposit plus 12 monthly installments of GH₵ 200. HP Price = 500 + (12 × 200) = 500 + 2400 = GH₵ 2,900. Extra cost = 2900 - 2400 = GH₵ 500."
        ],
        "keyTakeaway": "Hire purchase price is almost always higher than cash price due to built-in interest charges.",
        "realWorldExample": "Buying a motorcycle for a delivery business on hire purchase allows payment from daily delivery revenue."
      }
    ],
    "commonMistakes": [
      "Dividing profit or loss by Selling Price instead of Cost Price.",
      "Substituting months directly as T into I = PRT/100 without dividing by 12.",
      "Confusing Simple Interest (I) with Total Amount (A = P + I).",
      "Forgetting to add the initial deposit when calculating total hire purchase price.",
      "Applying percentage discount to the cost price instead of marked retail price."
    ],
    "beceExamTips": [
      "Memorize and state the formula I = (P × R × T) / 100 explicitly in your solution before substituting numbers.",
      "When finding Principal, Rate, or Time by rearranging the formula, cross-multiply first: 100 × I = P × R × T.",
      "In BECE financial problems, always label currency units clearly with 'GH₵'.",
      "Double-check arithmetic when calculating total monthly installments (e.g. 18 months × GH₵ 150)."
    ],
    "summaryChecklist": [
      "I can calculate percentage increase and decrease relative to the original value.",
      "I can calculate profit, loss, and percentage profit/loss based on cost price.",
      "I can compute discount, marked price, and sales commission.",
      "I can calculate simple interest and total amount for periods involving months or years.",
      "I can determine total hire purchase price and extra carrying cost."
    ]
  },
  "jhs2-math-t6-algebraic-expressions": {
    "topicId": "jhs2-math-t6-algebraic-expressions",
    "introduction": "Algebra uses letters (variables) to represent numbers, allowing general mathematical rules and formulas to be established. In JHS 2, students advance from basic term collection to expanding products of binomials, handling algebraic fractions, and utilizing special algebraic identities.",
    "realWorldContext": "Engineers calculating load stress on bridges, software developers writing business logic, and financial analysts modeling revenue growth all use algebraic polynomials to represent multi-variable scenarios.",
    "objectives": [
      "Identify terms, variables, coefficients, and constants in algebraic expressions.",
      "Simplify expressions by collecting like terms involving multiple variables.",
      "Expand products of two binomials: (a + b)(c + d).",
      "Expand and apply perfect square identities ((a + b)², (a - b)²) and the difference of two squares ((a + b)(a - b)).",
      "Simplify algebraic fractions by finding the LCM of polynomial denominators."
    ],
    "sections": [
      {
        "title": "1. Algebraic Terminology and Collecting Like Terms",
        "content": "Understanding algebraic structure is essential before performing symbolic manipulations.",
        "bulletPoints": [
          "Variable: A letter representing an unknown quantity (e.g. x, y, m).",
          "Coefficient: The numerical factor multiplying a variable (in -7x², the coefficient is -7).",
          "Constant: A term containing only a number with no variable attached (e.g. +12).",
          "Like Terms: Terms with identical variables raised to identical powers (e.g. 4ab² and -9ab² are like terms; 3x and 3x² are NOT like terms).",
          "Rule for Addition/Subtraction: Only like terms can be combined: 5x + 3y - 2x + 7y = (5x - 2x) + (3y + 7y) = 3x + 10y."
        ],
        "keyTakeaway": "Unlike terms cannot be added or subtracted into a single term: 3a + 4b does NOT equal 7ab.",
        "realWorldExample": "If a farmer has 5 cows and 3 goats, and buys 2 more cows and 4 more goats, the total is (5+2) cows + (3+4) goats = 7 cows + 7 goats."
      },
      {
        "title": "2. Expanding Single Brackets (Distributive Law)",
        "content": "The distributive property states that multiplying a sum by a number gives the same result as multiplying each addend separately.",
        "bulletPoints": [
          "Formula: a(b + c) = ab + ac and a(b - c) = ab - ac.",
          "Signs Rule: Beware of multiplying by a negative factor: -3(2x - 5) = (-3)(2x) + (-3)(-5) = -6x + 15.",
          "Powers Rule: When multiplying variable terms, add their indices: 2x(3x² - 4x + 1) = 6x³ - 8x² + 2x."
        ],
        "keyTakeaway": "A negative sign immediately outside parentheses flips the sign of every term inside when brackets are removed.",
        "realWorldExample": "Calculating the total cost of 4 school kits containing 1 ruler (r) and 2 pens (p): 4(r + 2p) = 4r + 8p."
      },
      {
        "title": "3. Expansion of Binomials: (a + b)(c + d)",
        "content": "A binomial is an algebraic expression containing two terms. Expanding two binomials requires distributing each term of the first binomial across each term of the second.",
        "bulletPoints": [
          "General Method: (a + b)(c + d) = a(c + d) + b(c + d) = ac + ad + bc + bd.",
          "FOIL Mnemonic: First terms, Outside terms, Inside terms, Last terms.",
          "Example: (2x + 3)(x - 5) = 2x(x - 5) + 3(x - 5) = 2x² - 10x + 3x - 15 = 2x² - 7x - 15.",
          "Notice that the middle two terms (-10x and +3x) are like terms that combine to -7x."
        ],
        "keyTakeaway": "Always check whether the resulting four terms can be simplified by collecting like terms.",
        "realWorldExample": "The area of a rectangular garden with length (x + 5) meters and width (x + 2) meters is (x + 5)(x + 2) = x² + 7x + 10 m²."
      },
      {
        "title": "4. Special Products and Identities",
        "content": "Certain binomial expansions occur so frequently that their patterns should be memorized as algebraic identities.",
        "bulletPoints": [
          "Square of a Sum: (a + b)² = (a + b)(a + b) = a² + 2ab + b².",
          "Square of a Difference: (a - b)² = (a - b)(a - b) = a² - 2ab + b².",
          "Difference of Two Squares: (a + b)(a - b) = a² - ab + ba - b² = a² - b².",
          "Example of Difference of Squares: (3x + 4)(3x - 4) = (3x)² - 4² = 9x² - 16.",
          "Common Error Warning: (a + b)² does NOT equal a² + b²; the middle term +2ab must not be omitted!"
        ],
        "keyTakeaway": "(a + b)² produces three terms: square of first, twice the product, plus square of last.",
        "realWorldExample": "Mental arithmetic: 21² = (20 + 1)² = 20² + 2(20)(1) + 1² = 400 + 40 + 1 = 441."
      }
    ],
    "commonMistakes": [
      "Combining unlike terms, such as writing 3x + 4y = 7xy or 2x + 5 = 7x.",
      "Writing (x + 4)² = x² + 16, forgetting the middle term 8x.",
      "Sign errors when distributing negative numbers across brackets (e.g. -2(x - 3) = -2x - 6 instead of -2x + 6).",
      "Multiplying variable powers instead of adding them (e.g. x² × x³ = x⁶ instead of x⁵).",
      "Incorrectly squaring terms with coefficients (e.g. writing (3x)² = 3x² instead of 9x²)."
    ],
    "beceExamTips": [
      "In expansion problems, write out the distributive step explicitly: a(c + d) + b(c + d) before multiplying.",
      "Circle or underline like terms before grouping them to prevent losing terms or dropping negative signs.",
      "When squaring expressions like (2a - 5b)², always write (2a)² - 2(2a)(5b) + (5b)² = 4a² - 20ab + 25b².",
      "For algebraic fractions, place brackets around multi-term numerators before cross-multiplying or expanding."
    ],
    "summaryChecklist": [
      "I can group and collect like terms with positive and negative coefficients.",
      "I can expand brackets containing multiple terms using the distributive property.",
      "I can expand any product of two binomials: (a + b)(c + d).",
      "I know the formulas for (a + b)², (a - b)², and (a + b)(a - b).",
      "I can simplify algebraic fractions by finding common denominators."
    ]
  },
  "jhs2-math-t7-factorization": {
    "topicId": "jhs2-math-t7-factorization",
    "introduction": "Factorization is the mathematical inverse of expansion. It involves rewriting an algebraic sum or difference as a product of irreducible factors. Mastering factorization in JHS 2 is essential for simplifying algebraic fractions, solving quadratic equations, and finding unknown geometric dimensions.",
    "realWorldContext": "Computer graphics software factorizes polynomial equations to render 3D curves smoothly, and civil engineers factorize stress formulas to optimize steel beam cross-sections.",
    "objectives": [
      "Identify the highest common monomial factor (HCF) and factorize completely.",
      "Factorize four-term algebraic expressions by grouping in pairs.",
      "Recognize and factorize expressions that are the difference of two squares.",
      "Factorize quadratic trinomials of the form x² + bx + c.",
      "Simplify algebraic fractions using factor cancellation."
    ],
    "sections": [
      {
        "title": "1. Highest Common Monomial Factor",
        "content": "The simplest form of factorization involves extracting the highest common factor from all terms in the expression.",
        "bulletPoints": [
          "Step 1: Find the HCF of the numerical coefficients.",
          "Step 2: Find the lowest power of each variable common to all terms.",
          "Step 3: Multiply the numerical HCF by the common variable powers to get the overall monomial factor.",
          "Step 4: Divide each term of the original expression by this HCF to determine the expression inside the brackets.",
          "Example: Factorize 12x³y² - 18x²y³. HCF of 12 and 18 is 6. Common variables: x² and y². Overall factor is 6x²y². Factored form: 6x²y²(2x - 3y)."
        ],
        "keyTakeaway": "To check your factorization, expand the bracket; you should recover the exact original expression.",
        "realWorldExample": "Calculating perimeter of a fence with sides 2L + 2W = 2(L + W) uses common monomial factoring."
      },
      {
        "title": "2. Factorization by Grouping (Four Terms)",
        "content": "When an expression contains four terms with no single factor common to all four, terms can be paired into two groups that each yield a common binomial factor.",
        "bulletPoints": [
          "General Form: ax + ay + bx + by = a(x + y) + b(x + y) = (x + y)(a + b).",
          "Grouping Strategy: Group terms with common letters together: (ax + ay) + (bx + by).",
          "Handling Negative Signs: If the third term has a minus sign, factor out a negative factor: px - py - qx + qy = p(x - y) - q(x - y) = (x - y)(p - q).",
          "Rearranging: Sometimes terms must be rearranged before pairing: 2ac - bd - 2ad + bc = (2ac - 2ad) + (bc - bd) = 2a(c - d) + b(c - d) = (c - d)(2a + b)."
        ],
        "keyTakeaway": "Both bracketed expressions in step 2 must match identically. If you get (x - y) in one and (y - x) in the other, factor out -1.",
        "realWorldExample": "Calculating total revenue from two product lines sold across two regional branches."
      },
      {
        "title": "3. Difference of Two Squares: a² - b²",
        "content": "Any expression composed of one squared term subtracted from another can be factored immediately into the product of their sum and difference.",
        "bulletPoints": [
          "Identity: a² - b² = (a - b)(a + b).",
          "Recognizing Square Numbers: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, ...",
          "Example 1: x² - 49 = x² - 7² = (x - 7)(x + 7).",
          "Example 2: 16m² - 25n² = (4m)² - (5n)² = (4m - 5n)(4m + 5n).",
          "First Extracting Common Factor: 2x² - 18 = 2(x² - 9) = 2(x - 3)(x + 3). Always check for a common numerical factor first!"
        ],
        "keyTakeaway": "The sum of two squares, a² + b², CANNOT be factored using real numbers. Only a² - b² can be factored.",
        "realWorldExample": "Mental calculation: 65² - 35² = (65 - 35)(65 + 35) = 30 × 100 = 3,000."
      },
      {
        "title": "4. Factoring Quadratic Trinomials (x² + bx + c)",
        "content": "A quadratic trinomial has degree 2 and three terms. When the coefficient of x² is 1, it factors into two linear binomials.",
        "bulletPoints": [
          "Form: x² + bx + c = (x + p)(x + q).",
          "Conditions: The two numbers p and q must satisfy: p × q = c (product equals constant term) AND p + q = b (sum equals coefficient of x).",
          "Case 1 (Both b and c positive): x² + 7x + 12 => factors of 12 that add to 7 are 3 and 4 => (x + 3)(x + 4).",
          "Case 2 (c positive, b negative): x² - 8x + 15 => factors of 15 that add to -8 are -3 and -5 => (x - 3)(x - 5).",
          "Case 3 (c negative): Factors have opposite signs: x² + 2x - 24 => factors of -24 that add to +2 are +6 and -4 => (x + 6)(x - 4)."
        ],
        "keyTakeaway": "List pairs of factors of the constant term c systematically until you locate the pair that sums to the middle coefficient b.",
        "realWorldExample": "Finding the dimensions of a football pitch whose area is modeled by the polynomial x² + 15x + 50 = (x + 10)(x + 5)."
      }
    ],
    "commonMistakes": [
      "Incomplete factorization (e.g. factoring 12x² + 8x as 2x(6x + 4) instead of completely as 4x(3x + 2)).",
      "Attempting to factor a² + b² as (a + b)(a + b) (that expansion produces a middle term 2ab).",
      "Forgetting to switch the sign inside the second bracket when factoring out a negative sign in grouping.",
      "Picking factors of c that do not add up to b in quadratic trinomials.",
      "Canceling individual terms instead of factors in algebraic fractions."
    ],
    "beceExamTips": [
      "Always scan for a common monomial factor across ALL terms before applying grouping or difference of squares.",
      "In BECE Section B, always write out the intermediate grouping step: a(...) + b(...).",
      "Multiply your factored factors back together mentally to confirm they reproduce the original expression.",
      "When a question says 'Factorize completely', verify that no factors can be further broken down."
    ],
    "summaryChecklist": [
      "I can extract the highest common monomial factor from any algebraic expression.",
      "I can factorize four-term expressions by grouping in pairs.",
      "I can identify and factorize differences of two squares.",
      "I can factorize quadratic trinomials of the form x² + bx + c.",
      "I can simplify algebraic fractions using factorization."
    ]
  },
  "jhs2-math-t8-linear-equations": {
    "topicId": "jhs2-math-t8-linear-equations",
    "introduction": "Equations and inequalities are mathematical statements that assert equality or order relations between two expressions. In JHS 2, students master solving linear equations with fractional coefficients and brackets, translate real-world word problems into algebraic equations, and solve and graph linear inequalities on number lines.",
    "realWorldContext": "Budgeting school project funds, calculating break-even sales for a market stall, and setting speed limits or minimum age requirements all rely on solving linear equations and inequalities.",
    "objectives": [
      "Solve first-degree linear equations in one variable involving brackets and fractions.",
      "Formulate linear equations from practical word problems and find unknown quantities.",
      "Solve linear inequalities in one variable using algebraic properties.",
      "Apply the sign-reversal rule when multiplying or dividing inequalities by negative numbers.",
      "Illustrate the solution set (truth set) of an inequality on a standard number line."
    ],
    "sections": [
      {
        "title": "1. Solving Linear Equations with Fractions",
        "content": "A linear equation contains variables raised only to the first power. When equations contain fractions, the most efficient strategy is to eliminate denominators immediately.",
        "bulletPoints": [
          "Step 1: Find the Lowest Common Multiple (LCM) of all denominators in the equation.",
          "Step 2: Multiply EVERY term on BOTH sides of the equation by this LCM.",
          "Step 3: Simplify to remove all fractional denominators.",
          "Step 4: Expand any parentheses using the distributive property.",
          "Step 5: Collect variable terms on one side (usually LHS) and constant terms on the other (RHS).",
          "Step 6: Divide by the coefficient of the variable to isolate the unknown.",
          "Example: (x + 1)/2 - (x - 3)/3 = 4. LCM of 2 and 3 is 6. Multiply by 6: 3(x + 1) - 2(x - 3) = 24 => 3x + 3 - 2x + 6 = 24 => x + 9 = 24 => x = 15."
        ],
        "keyTakeaway": "Multiply EVERY term by the LCM, including whole numbers that do not have visible denominators.",
        "realWorldExample": "Splitting an inheritance where one child receives half, another receives a third, and GH₵ 5,000 remains."
      },
      {
        "title": "2. Translating Word Problems into Linear Equations",
        "content": "Word problems require converting English statements into algebraic equations, solving for the unknown, and interpreting the answer in context.",
        "bulletPoints": [
          "Step 1: Read the problem carefully and define the unknown quantity with a letter (e.g. 'Let the daughter's age be x').",
          "Step 2: Express all other quantities in terms of this variable.",
          "Step 3: Identify the relationship establishing equality and write the equation.",
          "Step 4: Solve the equation step by step.",
          "Step 5: State the final answer with appropriate units and check that it makes physical sense.",
          "Consecutive Integers: Let integers be x, x + 1, x + 2. Consecutive even/odd integers: x, x + 2, x + 4."
        ],
        "keyTakeaway": "Always write a clear definition of your variable first (e.g. 'Let x = ...').",
        "realWorldExample": "A father is 4 times as old as his son. In 12 years, he will be twice as old as his son. (Let son = x; 4x + 12 = 2(x + 12) => 4x + 12 = 2x + 24 => 2x = 12 => x = 6 years)."
      },
      {
        "title": "3. Solving Linear Inequalities",
        "content": "An inequality compares two expressions using <, >, ≤, or ≥. Solving an inequality follows the same procedures as equations, with one crucial exception.",
        "bulletPoints": [
          "Addition/Subtraction Property: Adding or subtracting the same number on both sides preserves the inequality sign.",
          "Positive Multiplication/Division: Multiplying or dividing both sides by a POSITIVE number preserves the inequality sign.",
          "THE GOLDEN RULE OF INEQUALITIES: When you MULTIPLY or DIVIDE both sides by a NEGATIVE number, the inequality sign MUST BE REVERSED.",
          "Example: -4x < 20. Divide by -4: x > 20 / (-4) => x > -5 (sign flipped from < to >).",
          "Why? Consider 2 < 5. If we multiply both sides by -1, we get -2 and -5. But on a number line, -2 is greater than -5, so -2 > -5."
        ],
        "keyTakeaway": "Whenever you divide or multiply by a negative number, immediately flip the inequality symbol.",
        "realWorldExample": "A taxi driver must earn at least GH₵ 400 per day to cover fuel and vehicle rental: Total Earnings ≥ 400."
      },
      {
        "title": "4. Graphing Inequalities on a Number Line",
        "content": "The truth set of an inequality contains infinitely many real numbers and is best communicated visually on a number line.",
        "bulletPoints": [
          "Strict Inequalities (< or >): Use an OPEN / HOLLOW circle (○) at the boundary point to show the boundary value is NOT included.",
          "Inclusive Inequalities (≤ or ≥): Use a SOLID / CLOSED circle (●) at the boundary point to show the boundary value IS included.",
          "Direction of Arrow: Arrow points right for 'greater than' (> or ≥); arrow points left for 'less than' (< or ≤).",
          "Compound Inequalities: For a ≤ x < b, draw a solid circle at a, an open circle at b, and shade the connecting line segment between them."
        ],
        "keyTakeaway": "Solid dot means 'included' (has an 'or equal to' line); open circle means 'excluded' (strict inequality).",
        "realWorldExample": "Voting age requirement in Ghana: Age ≥ 18 (represented on a number line with a solid circle at 18 extending rightward)."
      }
    ],
    "commonMistakes": [
      "Forgetting to multiply terms without denominators by the LCM when clearing fractions.",
      "Dropping negative signs when distributing over fractions (e.g. - (x - 2) becoming -x - 2 instead of -x + 2).",
      "Failing to reverse the inequality sign when dividing by a negative coefficient.",
      "Using a solid circle for strict inequalities (< or >) on a number line.",
      "Writing answers to word problems without stating what the variable represented."
    ],
    "beceExamTips": [
      "Always check your equation solution by substituting the value back into the original equation.",
      "When drawing number lines in BECE scripts, use a ruler, mark equal intervals, label numbers clearly, and draw arrows indicating infinity.",
      "State the truth set formally if requested: {x : x > 3, x ∈ ℝ}.",
      "In age word problems, ensure you add the future years to BOTH people's ages."
    ],
    "summaryChecklist": [
      "I can clear fractions from linear equations using the LCM of denominators.",
      "I can translate English word problems into algebraic equations and solve them.",
      "I know when and how to reverse the inequality sign.",
      "I can represent inequalities using open and closed circles on a number line.",
      "I can write the truth set of an inequality in set builder notation."
    ]
  },
  "jhs2-math-t9-linear-relations": {
    "topicId": "jhs2-math-t9-linear-relations",
    "introduction": "Linear relations connect two variables such that changes in one correspond directly to proportional changes in the other. In JHS 2, students master the Cartesian coordinate plane, construct tables of values, plot straight-line graphs, calculate the gradient (slope), and interpret y-intercepts.",
    "realWorldContext": "Telecommunications companies billing call rates per minute (Total Cost = Fixed Access Charge + Rate × Minutes), electricity tariffs from ECG, and speed-time graphs for vehicles all represent linear relations.",
    "objectives": [
      "Plot ordered pairs (x, y) accurately in all four quadrants of the Cartesian coordinate plane.",
      "Construct a table of values for a linear relation y = mx + c given a specified domain.",
      "Plot points and draw straight-line graphs with appropriate scales on graph paper.",
      "Calculate the gradient (m) of a straight line using the formula m = (y₂ - y₁) / (x₂ - x₁).",
      "Identify and interpret the gradient and y-intercept from equations and graphs."
    ],
    "sections": [
      {
        "title": "1. The Cartesian Coordinate Plane",
        "content": "The Cartesian plane is formed by the intersection of two perpendicular number lines: the horizontal x-axis and vertical y-axis.",
        "bulletPoints": [
          "Origin (0, 0): The central intersection point of the x-axis and y-axis.",
          "Coordinates (x, y): An ordered pair where x is the horizontal distance (abscissa) and y is the vertical distance (ordinate).",
          "Quadrant I: (+x, +y); Quadrant II: (-x, +y); Quadrant III: (-x, -y); Quadrant IV: (+x, -y).",
          "Points on Axes: Points on the x-axis have y = 0 (e.g. (4, 0)). Points on the y-axis have x = 0 (e.g. (0, -3)).",
          "Scale: Uniform increments marked along each axis (e.g. 2 cm to 1 unit or 2 cm to 5 units)."
        ],
        "keyTakeaway": "Always move horizontally along the x-axis first, then vertically along the y-axis to plot (x, y).",
        "realWorldExample": "GPS satellite navigation locates ships off the coast of Ghana using latitude and longitude coordinates."
      },
      {
        "title": "2. Generating Tables of Values for Linear Relations",
        "content": "A linear equation expresses a relationship between an independent variable x and a dependent variable y. A table of values pairs domain values of x with corresponding values of y.",
        "bulletPoints": [
          "Linear Relation Form: y = mx + c, where m is gradient and c is y-intercept.",
          "Method: Substitute each given x-value into the equation and compute y.",
          "Example: For y = 2x - 3 over the domain -2 ≤ x ≤ 3:",
          "  When x = -2: y = 2(-2) - 3 = -4 - 3 = -7.",
          "  When x = 0: y = 2(0) - 3 = -3.",
          "  When x = 3: y = 2(3) - 3 = 6 - 3 = 3.",
          "Resulting table pairs: (-2, -7), (0, -3), (3, 3)."
        ],
        "keyTakeaway": "Computing at least 3 points allows you to detect calculation errors immediately: all 3 points must lie on a single straight line.",
        "realWorldExample": "A water vendor charges GH₵ 2 for a bucket plus a GH₵ 1 container fee: Total Cost y = 2x + 1."
      },
      {
        "title": "3. Gradient (Slope) of a Straight Line",
        "content": "The gradient measures the steepness and direction of a straight line, defined as the ratio of vertical change (rise) to horizontal change (run).",
        "bulletPoints": [
          "Gradient Formula: m = (Vertical Change) / (Horizontal Change) = (y₂ - y₁) / (x₂ - x₁).",
          "Positive Gradient (m > 0): Line slopes UPWARD from left to right.",
          "Negative Gradient (m < 0): Line slopes DOWNWARD from left to right.",
          "Zero Gradient (m = 0): Horizontal line parallel to x-axis (equation y = c).",
          "Undefined Gradient: Vertical line parallel to y-axis (equation x = k).",
          "Example: Gradient between (1, 2) and (4, 8): m = (8 - 2) / (4 - 1) = 6 / 3 = 2."
        ],
        "keyTakeaway": "Ensure you subtract coordinates in consistent order: (y₂ - y₁) / (x₂ - x₁), never mixing (y₂ - y₁) with (x₁ - x₂).",
        "realWorldExample": "The steepness of an access ramp or hill road in Aburi represents its gradient."
      },
      {
        "title": "4. Slope-Intercept Form: y = mx + c",
        "content": "The equation y = mx + c directly displays the two fundamental geometric features of any straight line.",
        "bulletPoints": [
          "m = Gradient: Rate of change of y with respect to x.",
          "c = y-intercept: The point (0, c) where the line crosses the vertical y-axis.",
          "Finding x-intercept: Set y = 0 and solve for x (the point where line crosses horizontal axis).",
          "Parallel Lines: Two straight lines are parallel if and only if they have the exact same gradient: m₁ = m₂.",
          "Converting to y = mx + c: If an equation is given as 2x + 3y = 6, isolate y: 3y = -2x + 6 => y = (-2/3)x + 2. Here, gradient m = -2/3 and y-intercept c = 2."
        ],
        "keyTakeaway": "Isolate y on the left side with a coefficient of 1 to read off the gradient m and y-intercept c immediately.",
        "realWorldExample": "A mobile plan charges a fixed rental of GH₵ 10 plus GH₵ 0.50 per megabyte: Cost = 0.50x + 10 (m = 0.50, c = 10)."
      }
    ],
    "commonMistakes": [
      "Inverting the gradient formula as (x₂ - x₁) / (y₂ - y₁) instead of (y₂ - y₁) / (x₂ - x₁).",
      "Plotting (x, y) backwards by moving along y first instead of x.",
      "Sign errors when subtracting negative coordinates: e.g. 5 - (-3) = 2 instead of 5 + 3 = 8.",
      "Using non-uniform scale increments on graph axes (e.g. marking 1, 2, 4, 5 instead of 1, 2, 3, 4).",
      "Identifying the gradient from ax + by = c without first solving for y."
    ],
    "beceExamTips": [
      "In BECE graph questions, always write the scale used at the top of the graph sheet (e.g. 'Scale: 2 cm to 1 unit on x-axis').",
      "Plot points using a small sharp 'x' or a neat dot with a small circle around it (⊙).",
      "Use a long transparent ruler to draw a continuous straight line through all plotted points; do not connect points with jagged segments.",
      "Label the line with its equation along its length: e.g. 'y = 2x - 3'."
    ],
    "summaryChecklist": [
      "I can plot coordinates in all 4 quadrants of the Cartesian plane.",
      "I can create a complete table of values for any linear relation y = mx + c.",
      "I can calculate the gradient of a line passing through any two given points.",
      "I can identify the gradient and y-intercept directly from an equation in form y = mx + c.",
      "I know that parallel lines have identical gradients."
    ]
  },
  "jhs2-math-t10-plane-geometry-angles": {
    "topicId": "jhs2-math-t10-plane-geometry-angles",
    "introduction": "Plane geometry investigates the properties of two-dimensional shapes, lines, and angles. In JHS 2, students master angle relationships formed by intersecting lines and parallel lines cut by a transversal, and derive formulas for the interior and exterior angle sums of regular and irregular polygons.",
    "realWorldContext": "Roof trusses in Ghanaian house building, surveying plots of land for title registration, and textile kente geometric patterns all depend on the exact angle theorems of plane geometry.",
    "objectives": [
      "Apply angle relationships: complementary angles, supplementary angles, and vertically opposite angles.",
      "Identify and calculate alternate, corresponding, and co-interior angles formed by parallel lines and transversals.",
      "Classify polygons based on the number of sides and distinguish between regular and irregular polygons.",
      "Calculate the sum of interior angles of any n-sided polygon using (n - 2) × 180°.",
      "Apply the exterior angle theorem: sum of exterior angles of any convex polygon is 360°."
    ],
    "sections": [
      {
        "title": "1. Basic Angle Relationships",
        "content": "Angles are formed when two straight lines meet at a common vertex, measured in degrees (°).",
        "bulletPoints": [
          "Complementary Angles: Two angles whose sum is exactly 90° (e.g. 35° and 55°).",
          "Supplementary Angles: Two angles whose sum is exactly 180° (angles on a straight line, e.g. 110° and 70°).",
          "Angles at a Point: Angles forming a complete circular rotation around a point sum to 360°.",
          "Vertically Opposite Angles: When two straight lines intersect, the non-adjacent angles opposite each other are equal: ∠a = ∠b.",
          "Adjacent Angles on a Line: If a ray stands on a line, the adjacent angles sum to 180°."
        ],
        "keyTakeaway": "Whenever straight lines intersect, look immediately for supplementary pairs (180°) and vertically opposite pairs (equal).",
        "realWorldExample": "A corner carpenter's square checks 90° complementary framing joints on window frames."
      },
      {
        "title": "2. Parallel Lines and Transversals",
        "content": "A transversal is a straight line that intersects two or more parallel lines at distinct points, creating eight characteristic angles.",
        "bulletPoints": [
          "Alternate Interior Angles (Z-angles): Lie on opposite sides of the transversal between the parallel lines. They are EQUAL: ∠a = ∠b.",
          "Corresponding Angles (F-angles): Lie in the same relative position at each intersection. They are EQUAL: ∠c = ∠d.",
          "Co-interior / Consecutive Interior Angles (C-angles): Lie on the same side of the transversal between parallel lines. They are SUPPLEMENTARY (sum to 180°): ∠x + ∠y = 180°.",
          "Alternate Exterior Angles: Lie on opposite sides outside the parallel lines; they are EQUAL.",
          "Identifying Transversal Properties: Look for 'Z', 'F', and 'C' shapes formed by the parallel lines."
        ],
        "keyTakeaway": "Alternate angles are equal, corresponding angles are equal, and co-interior angles add up to 180°.",
        "realWorldExample": "Railway tracks running parallel through railway junctions maintain exact equal corresponding angles across crossties."
      },
      {
        "title": "3. Interior Angles of Polygons",
        "content": "A polygon is a closed plane figure bounded by straight line segments. Triangles have 3 sides, quadrilaterals 4, pentagons 5, hexagons 6, heptagons 7, octagons 8, nonagons 9, decagons 10.",
        "bulletPoints": [
          "Triangulation Principle: An n-sided polygon can be divided into (n - 2) non-overlapping triangles by drawing diagonals from one vertex.",
          "Interior Angle Sum Formula: Sum of Interior Angles = (n - 2) × 180°.",
          "Examples: Triangle (n=3) = 1 × 180° = 180°; Quadrilateral (n=4) = 2 × 180° = 360°; Pentagon (n=5) = 3 × 180° = 540°; Hexagon (n=6) = 4 × 180° = 720°.",
          "Regular Polygon: A polygon with all sides equal and all interior angles equal.",
          "Each Interior Angle of Regular Polygon = [(n - 2) × 180°] / n."
        ],
        "keyTakeaway": "The sum of interior angles grows by 180° for every additional side added to the polygon.",
        "realWorldExample": "A stop sign shaped like a regular octagon has interior angle sum = (8 - 2) × 180° = 1080°; each angle = 1080° / 8 = 135°."
      },
      {
        "title": "4. Exterior Angles of Polygons",
        "content": "An exterior angle is formed between one side of a polygon and the extension of an adjacent side.",
        "bulletPoints": [
          "Interior + Exterior Pair: At every vertex of a polygon, Interior Angle + Adjacent Exterior Angle = 180° (supplementary).",
          "Exterior Angle Sum Theorem: The sum of the exterior angles of ANY convex polygon is ALWAYS 360°, regardless of the number of sides n!",
          "Each Exterior Angle of Regular Polygon = 360° / n.",
          "Number of Sides Formula: If each exterior angle is known: n = 360° / (Exterior Angle).",
          "Quickest Method for Interior Angles: Calculate exterior angle first (360° / n), then subtract from 180°."
        ],
        "keyTakeaway": "The exterior angle sum is invariant: it is always 360° whether the shape has 3 sides or 100 sides.",
        "realWorldExample": "Walking completely around the perimeter of any closed polygonal plot of land turns your body through a total rotation of exactly 360°."
      }
    ],
    "commonMistakes": [
      "Confusing interior and exterior angle sum formulas (thinking exterior angle sum depends on n).",
      "Assuming co-interior angles are equal instead of supplementary (adding to 180°).",
      "Using (n - 2) × 360° instead of (n - 2) × 180° for interior angle sum.",
      "Measuring exterior angles as reflex angles around the outside rather than between a side and its extension.",
      "Applying regular polygon formulas to irregular polygons."
    ],
    "beceExamTips": [
      "Always state the geometric reason in parentheses after each calculation step in BECE (e.g. 'vert. opp. ∠s are equal', 'alt. ∠s, AB // CD', 'sum of ∠s on a line = 180°').",
      "When finding the number of sides of a regular polygon, work with the exterior angle (n = 360° / ext. angle) — it is much faster and less error-prone than using the interior angle formula.",
      "Draw large, neat diagrams and transfer all calculated angle values onto the figure as you work.",
      "Remember that angles in a triangle must always sum to 180°."
    ],
    "summaryChecklist": [
      "I know the definitions of complementary, supplementary, and vertically opposite angles.",
      "I can calculate alternate, corresponding, and co-interior angles for parallel lines.",
      "I can calculate the interior angle sum of any polygon using (n - 2) × 180°.",
      "I know that the sum of exterior angles of any polygon is always 360°.",
      "I can find the number of sides of a regular polygon from its exterior or interior angles."
    ]
  },
  "jhs2-math-t11-pythagoras": {
    "topicId": "jhs2-math-t11-pythagoras",
    "introduction": "Pythagoras' Theorem is one of the most famous and useful mathematical principles in human history. It establishes an exact relationship between the three sides of any right-angled triangle. In JHS 2, students master applying this theorem to calculate unknown lengths, explore Pythagorean triples, and solve practical real-world height and distance problems.",
    "realWorldContext": "Masons in Ghana setting 90° right angles for building foundations using a 3-4-5 rope measurement, telecommunications technicians rigging guy wires to cellular towers, and navigators calculating straight-line distances rely directly on Pythagoras' Theorem.",
    "objectives": [
      "State Pythagoras' Theorem clearly in words and algebraic symbols.",
      "Identify the hypotenuse, adjacent, and opposite sides of a right-angled triangle.",
      "Calculate the hypotenuse given the lengths of the two legs.",
      "Calculate the length of an unknown leg given the hypotenuse and one leg.",
      "Identify Pythagorean triples and apply the theorem to solve practical word problems."
    ],
    "sections": [
      {
        "title": "1. The Theorem and Right-Angled Triangles",
        "content": "Pythagoras' Theorem applies strictly to triangles containing one right angle (90°).",
        "bulletPoints": [
          "Hypotenuse: The side directly opposite the 90° angle. It is ALWAYS the longest side in any right-angled triangle.",
          "Legs: The two perpendicular sides forming the right angle (often labeled a and b).",
          "Formal Statement: In any right-angled triangle, the area of the square on the hypotenuse is equal to the sum of the areas of the squares on the other two sides.",
          "Algebraic Formula: c² = a² + b² (where c is hypotenuse, a and b are legs).",
          "Finding Hypotenuse: c = √(a² + b²).",
          "Finding a Leg: a = √(c² - b²) or b = √(c² - a²)."
        ],
        "keyTakeaway": "To find the hypotenuse, ADD squares: c² = a² + b². To find a shorter leg, SUBTRACT squares: a² = c² - b².",
        "realWorldExample": "A television screen advertised as 50 inches measures 50 inches along its diagonal hypotenuse."
      },
      {
        "title": "2. Pythagorean Triples",
        "content": "A Pythagorean triple consists of three positive integers (a, b, c) that satisfy the equation a² + b² = c².",
        "bulletPoints": [
          "Common Primitive Triples to Memorize:",
          "  (3, 4, 5): 3² + 4² = 9 + 16 = 25 = 5².",
          "  (5, 12, 13): 5² + 12² = 25 + 144 = 169 = 13².",
          "  (8, 15, 17): 8² + 15² = 64 + 225 = 289 = 17².",
          "  (7, 24, 25): 7² + 24² = 49 + 576 = 625 = 25².",
          "Multiples of Triples: Multiplying any triple by a positive integer k produces another valid triple: (3k, 4k, 5k) => (6, 8, 10), (9, 12, 15), (15, 20, 25).",
          "Converse of the Theorem: If side lengths of a triangle satisfy a² + b² = c², the triangle is guaranteed to be right-angled."
        ],
        "keyTakeaway": "Recognizing Pythagorean triples allows you to solve BECE multiple choice questions in seconds without long calculations.",
        "realWorldExample": "Ghanaian builders lay out square corners by measuring 3 meters along one string, 4 meters along the other, and ensuring the diagonal measures exactly 5 meters."
      },
      {
        "title": "3. Practical Real-World Applications",
        "content": "Many practical height and distance problems can be modeled as right-angled triangles.",
        "bulletPoints": [
          "Ladder Against a Wall: The ladder forms the hypotenuse c; distance from wall along ground is base b; height reached up the wall is a: a = √(c² - b²).",
          "Diagonal of a Rectangle: A rectangle of length L and width W has diagonal d = √(L² + W²).",
          "Navigation (Cardinal Directions): Walking North then East forms a 90° angle; direct distance back to starting point is hypotenuse: d = √(North² + East²).",
          "Mast Guy Wire: A wire anchored to the ground supporting a vertical antenna."
        ],
        "keyTakeaway": "Always sketch a diagram, label the right angle, identify the hypotenuse, and set up the equation carefully.",
        "realWorldExample": "A ship sails 12 km North from Tema port and then 16 km East. Its direct distance from port is √(12² + 16²) = √(144 + 256) = √400 = 20 km."
      },
      {
        "title": "4. Isosceles Triangles and Compound Shapes",
        "content": "Pythagoras' Theorem is frequently used to find heights and areas of isosceles triangles and compound shapes.",
        "bulletPoints": [
          "Perpendicular Bisector: Dropping an altitude from the apex of an isosceles triangle splits the base into two equal halves at 90°.",
          "Finding Altitude: In an isosceles triangle with equal sides 10 cm and base 12 cm: half-base = 6 cm. Altitude h = √(10² - 6²) = √(100 - 36) = √64 = 8 cm.",
          "Area: Once altitude is found, Area = 1/2 × base × height = 1/2 × 12 × 8 = 48 cm².",
          "Trapezium Applications: Dropping perpendicular heights inside a trapezium creates right-angled triangles to find missing slant heights."
        ],
        "keyTakeaway": "Dropping a perpendicular in non-right-angled triangles frequently creates two right-angled triangles where Pythagoras applies.",
        "realWorldExample": "Determining the height of a gabled house roof truss given the sloping rafter length and the building width."
      }
    ],
    "commonMistakes": [
      "Applying Pythagoras' Theorem to acute or obtuse triangles (it ONLY works for 90° right triangles).",
      "Adding squares when calculating a leg instead of subtracting from the hypotenuse square.",
      "Forgetting to take the square root at the final step (e.g. leaving c² = 25 as the answer instead of c = 5).",
      "Assuming the hypotenuse is a or b instead of recognizing that the hypotenuse is opposite the 90° angle.",
      "Misidentifying Pythagorean triples (e.g. assuming 1, 2, 3 is a right-angled triple; 1² + 2² = 5 ≠ 3²)."
    ],
    "beceExamTips": [
      "Always sketch a right-angled triangle and label the 90° square symbol clearly.",
      "Memorize common squares up to 25² (e.g. 13² = 169, 14² = 196, 15² = 225, 25² = 625) to speed up calculations.",
      "When units are mixed (e.g. meters and centimeters), convert all measurements to a common unit before applying the formula.",
      "If the question requests answer to 1 decimal place or nearest whole number, round off only at the very final step."
    ],
    "summaryChecklist": [
      "I can state Pythagoras' Theorem accurately.",
      "I can calculate the hypotenuse c using c = √(a² + b²).",
      "I can calculate an unknown leg using a = √(c² - b²).",
      "I have memorized the key Pythagorean triples (3,4,5), (5,12,13), (8,15,17), (7,24,25).",
      "I can solve ladder, diagonal, and navigation word problems using Pythagoras' Theorem."
    ]
  },
  "jhs2-math-t12-perimeter-area": {
    "topicId": "jhs2-math-t12-perimeter-area",
    "introduction": "Perimeter and area quantify the boundaries and surfaces of two-dimensional shapes. In JHS 2, students advance beyond basic rectangles to calculate perimeters and areas of parallelograms, trapezia, rhombuses, and circular components including arc lengths and sectors of circles.",
    "realWorldContext": "Ghanaian farmers fencing cocoa plantations, tilers measuring floor space in residential homes, road engineers designing circular roundabouts in Accra, and tailors cutting fabric patterns use perimeter and area calculations daily.",
    "objectives": [
      "Calculate the perimeter and area of parallelograms, trapezia, and rhombuses.",
      "Calculate the circumference and area of circles using C = 2πr and A = πr².",
      "Calculate the length of an arc and the area of a sector subtending a given angle.",
      "Determine the total perimeter of a sector (arc length + 2 radii).",
      "Solve compound figure problems combining rectangles, triangles, and semi-circles."
    ],
    "sections": [
      {
        "title": "1. Parallelograms, Rhombuses, and Trapezia",
        "content": "Quadrilaterals with parallel sides have specialized area formulas derived from fundamental rectangular geometry.",
        "bulletPoints": [
          "Parallelogram: Area = base × perpendicular height = bh. Perimeter = 2(a + b). Note: Use perpendicular height, never slant height!",
          "Rhombus: All 4 sides equal. Area = base × perpendicular height OR Area = 1/2 × d₁ × d₂ (where d₁ and d₂ are lengths of intersecting diagonals).",
          "Trapezium: One pair of parallel sides (a and b). Area = 1/2(a + b)h, where h is the perpendicular distance between the parallel sides.",
          "Perimeter: Always the total sum of all exterior boundary edges."
        ],
        "keyTakeaway": "In parallelograms and trapezia, always identify the perpendicular height perpendicular to the base, never the sloping side.",
        "realWorldExample": "A plot of farmland shaped like a trapezium with parallel sides of 40 m and 60 m separated by 30 m has area = 1/2(40 + 60)(30) = 1,500 m²."
      },
      {
        "title": "2. Circles: Circumference and Area",
        "content": "A circle is the set of all points equidistant from a central point. The ratio of circumference to diameter is the mathematical constant π (pi ≈ 22/7 or 3.142).",
        "bulletPoints": [
          "Radius (r): Distance from center to circumference; Diameter (d) = 2r.",
          "Circumference (Perimeter): C = 2πr = πd.",
          "Area of Circle: A = πr².",
          "Semi-Circle: Area = 1/2 πr²; Perimeter = πr + 2r (arc + diameter boundary).",
          "Quadrant: Area = 1/4 πr²; Perimeter = 1/2 πr + 2r.",
          "Annulus (Circular Ring): Area between concentric circles = πR² - πr² = π(R² - r²)."
        ],
        "keyTakeaway": "Remember that the perimeter of a semi-circle includes the straight diameter base line (πr + 2r), not just the curved arc.",
        "realWorldExample": "A circular roundabout at Kwame Nkrumah Circle with diameter 28 m has circumference C = (22/7) × 28 = 88 m."
      },
      {
        "title": "3. Arcs and Sectors of Circles",
        "content": "An arc is a fraction of the circumference; a sector is a fraction of the circle bounded by two radii and an arc.",
        "bulletPoints": [
          "Arc Length (L): Fraction of circumference corresponding to center angle θ: L = (θ / 360°) × 2πr.",
          "Sector Area (A): Fraction of circle area corresponding to center angle θ: Area = (θ / 360°) × πr².",
          "Alternative Sector Area Formula: Area = 1/2 × r × L (where L is arc length).",
          "Perimeter of Sector: Total boundary = Arc length + two radii = L + 2r = [(θ / 360°) × 2πr] + 2r."
        ],
        "keyTakeaway": "Do not forget to add 2r when calculating the perimeter of a sector.",
        "realWorldExample": "A slice of pizza cut at a 45° angle from a 20 cm radius circular pizza forms a sector with area = (45/360) × π × 20² = 1/8 × π × 400 = 50π cm²."
      },
      {
        "title": "4. Perimeter and Area of Compound Shapes",
        "content": "Compound shapes consist of two or more basic geometric figures joined together or carved out from one another.",
        "bulletPoints": [
          "Strategy for Area: Decompose compound shape into familiar simple shapes (rectangles, triangles, semi-circles) and add their areas, or subtract cut-out voids.",
          "Strategy for Perimeter: Add ONLY the outer boundary edges. Never include interior dividing lines in perimeter calculations!",
          "Example: A running track shape (rectangle with semi-circles on both ends). Total Area = Area of rectangle + Area of full circle (two halves). Total Perimeter = 2 × length of straight sides + Circumference of full circle."
        ],
        "keyTakeaway": "Perimeter includes ONLY the outside boundary edges; do not add internal dashed dividing lines.",
        "realWorldExample": "A sports field consisting of a 100 m by 60 m rectangle with semi-circular ends of radius 30 m."
      }
    ],
    "commonMistakes": [
      "Using the slant side instead of the perpendicular height in parallelogram and trapezium formulas.",
      "Forgetting to square the radius when calculating circle area (writing 2πr instead of πr²).",
      "Omitting the two radii (2r) when computing the perimeter of a sector or semi-circle.",
      "Including interior dividing lines when calculating the perimeter of compound shapes.",
      "Using diameter instead of radius directly into A = πr² without dividing by 2."
    ],
    "beceExamTips": [
      "Use the exact value of π specified in the question (usually π = 22/7 or π = 3.142). If unspecified, use 22/7.",
      "Always write out the general formula first before substituting numbers (e.g. Area = 1/2(a + b)h).",
      "Ensure all dimensional measurements are in identical units before multiplying (convert cm to m or vice versa).",
      "State final answers with proper units: perimeter in cm or m, area in cm² or m²."
    ],
    "summaryChecklist": [
      "I can calculate the area of a parallelogram using A = bh.",
      "I can calculate the area of a trapezium using A = 1/2(a + b)h.",
      "I know the formulas for circle circumference (2πr) and circle area (πr²).",
      "I can calculate arc length and sector area for any given central angle θ.",
      "I remember to add 2r when finding the total perimeter of a sector."
    ]
  },
  "jhs2-math-t13-surface-volume": {
    "topicId": "jhs2-math-t13-surface-volume",
    "introduction": "Three-dimensional solids occupy volume in space and possess surface areas consisting of 2D bounding faces. In JHS 2, students master identifying nets of 3D solids, calculating the total surface area and volume of cuboids, triangular prisms, and circular cylinders, and converting cubic centimeters to liquid capacity in liters.",
    "realWorldContext": "Designing concrete culverts for drainage in Accra, manufacturing metal water storage drums (polytanks and metal barrels), and calculating liquid fuel capacity of tanker trucks involve the surface area and volume of prisms and cylinders.",
    "objectives": [
      "Identify 3D solids (cubes, cuboids, triangular prisms, cylinders) and draw their 2D nets.",
      "Calculate the total surface area of cuboids and triangular prisms.",
      "Calculate the volume of cuboids and general prisms using Cross-Sectional Area × Length.",
      "Calculate curved surface area, total surface area, and volume of circular cylinders.",
      "Convert volume units (cm³, m³) to liquid capacity units (milliliters, liters)."
    ],
    "sections": [
      {
        "title": "1. 3D Solids, Properties, and Nets",
        "content": "A net is a two-dimensional flat pattern that can be folded to form a three-dimensional solid.",
        "bulletPoints": [
          "Cube: 6 congruent square faces, 12 equal edges, 8 vertices. Net consists of 6 connected squares.",
          "Cuboid (Rectangular Prism): 6 rectangular faces (opposite faces congruent), 12 edges, 8 vertices.",
          "Triangular Prism: 2 identical parallel triangular bases and 3 rectangular faces. Net has 2 triangles and 3 rectangles.",
          "Cylinder: 2 circular flat bases and 1 curved rectangular surface. Net consists of 2 circles and 1 rectangle whose length is the circle circumference (2πr).",
          "Euler's Formula for Polyhedra: Faces + Vertices - Edges = 2 (F + V - E = 2)."
        ],
        "keyTakeaway": "Unfolding a cylinder's curved wall produces a rectangle with dimensions 2πr (circumference) by h (height).",
        "realWorldExample": "A cardboard box manufacturer prints flat nets that are folded and glued into shipping cartons."
      },
      {
        "title": "2. Surface Area and Volume of Cuboids",
        "content": "A cuboid has length l, width w, and height h.",
        "bulletPoints": [
          "Total Surface Area: Sum of 6 rectangular faces = 2(lw + lh + wh).",
          "Open Box Surface Area (no lid): Area = lw + 2lh + 2wh.",
          "Volume of Cuboid: Capacity of 3D interior = length × width × height = l × w × h.",
          "Cube Formulas: If side length is s: Surface Area = 6s²; Volume = s³.",
          "Example: A cuboid measuring 8 cm by 5 cm by 3 cm has TSA = 2(8×5 + 8×3 + 5×3) = 2(40 + 24 + 15) = 2(79) = 158 cm²; Volume = 8 × 5 × 3 = 120 cm³."
        ],
        "keyTakeaway": "Surface area is measured in square units (cm², m²); volume is measured in cubic units (cm³, m³).",
        "realWorldExample": "Calculating the number of square meters of paint required to paint the four walls and ceiling of a classroom."
      },
      {
        "title": "3. Surface Area and Volume of Cylinders",
        "content": "A cylinder is a prism with circular cross-sections of radius r and perpendicular height h.",
        "bulletPoints": [
          "Volume of Cylinder: Base Area × Height = πr²h.",
          "Curved Surface Area (CSA): Area of unrolled rectangular jacket = 2πrh.",
          "Total Surface Area (Closed Cylinder): Curved Area + 2 Circular Bases = 2πrh + 2πr² = 2πr(r + h).",
          "Open Cylinder (One base, e.g. a bucket or cup): Area = 2πrh + πr².",
          "Hollow Cylinder / Pipe (open at both ends): Area = 2πrh.",
          "Example: Cylinder with r = 7 cm, h = 10 cm (π = 22/7): Volume = (22/7) × 49 × 10 = 1,540 cm³; TSA = 2 × (22/7) × 7 × (7 + 10) = 44 × 17 = 748 cm²."
        ],
        "keyTakeaway": "Read the question carefully to determine if the cylinder is closed (both ends), open at one end, or hollow (pipe).",
        "realWorldExample": "A standard oil drum holds fuel whose volume is computed using V = πr²h."
      },
      {
        "title": "4. Capacity and Unit Conversions",
        "content": "Volume measures spatial extent in cubic units; capacity measures the volume of fluid a container can hold.",
        "bulletPoints": [
          "1 cm³ = 1 milliliter (mL).",
          "1,000 cm³ = 1 Liter (L).",
          "1 m³ = 1,000,000 cm³ = 1,000 Liters (L).",
          "To Convert cm³ to Liters: Divide by 1,000 (e.g. 4,500 cm³ = 4.5 Liters).",
          "To Convert Liters to cm³: Multiply by 1,000 (e.g. 2.5 Liters = 2,500 cm³).",
          "Rate of Flow: Volume of fluid delivered = Flow Rate × Time."
        ],
        "keyTakeaway": "Remember: 1,000 cm³ = 1 Liter. Divide cubic centimeters by 1,000 to find liquid capacity in liters.",
        "realWorldExample": "A domestic water tank of volume 2 m³ holds 2 × 1,000 = 2,000 liters of water."
      }
    ],
    "commonMistakes": [
      "Confusing surface area (2D, cm²) with volume (3D, cm³).",
      "Using the diameter instead of the radius in the cylinder volume formula πr²h.",
      "Calculating TSA of an open cylinder with 2 circular bases instead of 1.",
      "Multiplying by 100 instead of 1,000 when converting cm³ to liters.",
      "Forgetting to multiply by 2 when computing the two triangular ends of a triangular prism."
    ],
    "beceExamTips": [
      "Always state the specific formula with letters before plugging in numerical values.",
      "Check whether the cylinder is described as 'closed', 'open at top', or 'open at both ends' before selecting the area formula.",
      "When calculating capacity in liters, clearly show the division step: 'Volume in liters = Volume in cm³ / 1000'.",
      "Include correct units in final answers: cm³ or m³ for volume; liters for capacity; cm² or m² for area."
    ],
    "summaryChecklist": [
      "I can draw and identify nets of cubes, cuboids, triangular prisms, and cylinders.",
      "I can calculate the total surface area and volume of cuboids.",
      "I can calculate the volume of a cylinder using V = πr²h.",
      "I can calculate curved and total surface area of closed and open cylinders.",
      "I can convert volume in cm³ to liquid capacity in liters by dividing by 1,000."
    ]
  },
  "jhs2-math-t14-statistics-data": {
    "topicId": "jhs2-math-t14-statistics-data",
    "introduction": "Statistics is the science of collecting, organizing, summarizing, presenting, and analyzing data to draw meaningful conclusions. In JHS 2, students master tally charts, frequency distribution tables, constructing and interpreting bar charts and pie charts, and calculating measures of central tendency (Mean, Median, Mode) and dispersion (Range).",
    "realWorldContext": "The Ghana Statistical Service analyzing national census data, electoral commissions reporting election percentages, meteorologists tracking annual rainfall in Tamale, and school headteachers analyzing BECE pass rates rely directly on statistics.",
    "objectives": [
      "Collect and organize raw data into frequency distribution tables using tally marks.",
      "Construct and interpret bar charts and pie charts accurately.",
      "Calculate the sector angle of each category in a pie chart using (Frequency / Total) × 360°.",
      "Calculate the Mean (arithmetic average) for ungrouped data and from a frequency table.",
      "Determine the Median, Mode, and Range of discrete datasets."
    ],
    "sections": [
      {
        "title": "1. Data Collection and Frequency Distribution Tables",
        "content": "Raw data consists of unorganized numbers or observations collected from surveys, experiments, or records.",
        "bulletPoints": [
          "Tally Marks: Counting marks grouped in bundles of five (four vertical strokes and a diagonal strike-through) to tally frequencies quickly.",
          "Frequency (f): The total number of times a particular score or data value occurs.",
          "Frequency Table Structure: Column 1: Value / Score (x); Column 2: Tally; Column 3: Frequency (f); Column 4 (for mean): Product (fx).",
          "Total Frequency: The sum of all frequencies, denoted Σf or N: Σf = f₁ + f₂ + ... + fₖ."
        ],
        "keyTakeaway": "Always check that the sum of frequencies (Σf) equals the total number of raw data points given in the question.",
        "realWorldExample": "A nurse recording birth weights of 30 newborns at Korle-Bu Teaching Hospital in a tally chart."
      },
      {
        "title": "2. Measures of Central Tendency (Mean, Median, Mode)",
        "content": "Measures of central tendency are single representative values around which data cluster.",
        "bulletPoints": [
          "Mean (x̄): Arithmetic average. For raw data: x̄ = (Sum of all values) / n = (Σx) / n. For frequency table: x̄ = (Σfx) / (Σf).",
          "Median: The middle score when all data values are arranged in ascending or descending order. If count n is odd: middle term is at (n + 1)/2. If count n is even: average of the two middle terms at n/2 and (n/2 + 1).",
          "Mode: The value that appears with the highest frequency. A dataset can have one mode (unimodal), two modes (bimodal), or no mode if all values appear equally.",
          "Range: Measure of spread = Highest value - Lowest value."
        ],
        "keyTakeaway": "To find the median, you MUST sort the raw data in numerical order first.",
        "realWorldExample": "A teacher computing the class average mark (mean) and most common grade (mode) on an end-of-term examination."
      },
      {
        "title": "3. Pie Charts: Construction and Interpretation",
        "content": "A pie chart is a circular statistical graphic divided into proportional slices or sectors.",
        "bulletPoints": [
          "Total Angle: A complete circle subtends 360° at the center.",
          "Sector Angle Formula: Angle = (Frequency of Category / Total Frequency) × 360° = (f / Σf) × 360°.",
          "Construction Steps: Calculate angles for all categories; verify that all sector angles sum to 360°; draw a circle using a compass; draw a baseline radius; measure and draw angles with a protractor; label each sector clearly.",
          "Finding Frequency from Angle: Frequency = (Sector Angle / 360°) × Total Frequency."
        ],
        "keyTakeaway": "Always verify that the sum of your calculated sector angles equals exactly 360° before drawing.",
        "realWorldExample": "Ghana's national budget allocation across Education, Health, Agriculture, and Roads displayed in a pie chart."
      },
      {
        "title": "4. Bar Charts and Comparative Displays",
        "content": "A bar chart represents discrete categorical or numerical data using rectangular bars of uniform width.",
        "bulletPoints": [
          "Key Features: Vertical axis displays Frequency; horizontal axis displays categories or values.",
          "Uniform Gaps: Unlike histograms, bar charts for discrete data must have uniform spaces (gaps) between bars.",
          "Height of Bar: Directly proportional to the frequency of that category.",
          "Interpretation: The tallest bar corresponds to the mode; total data count is found by summing the heights of all bars."
        ],
        "keyTakeaway": "Ensure bars are of equal width and separated by equal gaps.",
        "realWorldExample": "Comparing voter turnout by region across Ghana's 16 administrative regions."
      }
    ],
    "commonMistakes": [
      "Finding the median of raw data without sorting into ascending order first.",
      "Confusing the mode (the data score x) with the modal frequency (f). The mode is the score itself, not how many times it occurred!",
      "Calculating mean from a frequency table by dividing Σfx by the number of rows instead of by the total frequency Σf.",
      "Drawing a pie chart where sector angles do not add up to 360°.",
      "Drawing bar charts with bars touching each other (touching bars are for continuous data histograms)."
    ],
    "beceExamTips": [
      "Show a dedicated column for fx and sum both the f column (Σf) and fx column (Σfx) clearly.",
      "In pie chart questions, draw a neat table showing Category, Frequency, Sector Angle Calculation, and Sector Angle (°).",
      "Use a sharp pencil and protractor to draw sectors accurately to within ±1°.",
      "When asked for the mode, state the actual score/name, not the frequency."
    ],
    "summaryChecklist": [
      "I can construct a frequency distribution table with tallies from raw data.",
      "I can calculate the mean using x̄ = Σfx / Σf.",
      "I can find the median and mode of any dataset.",
      "I can calculate sector angles and draw an accurate pie chart using protractor and compass.",
      "I can find the range of a dataset (Highest - Lowest)."
    ]
  },
  "jhs2-math-t15-probability": {
    "topicId": "jhs2-math-t15-probability",
    "introduction": "Probability is the branch of mathematics that quantifies uncertainty and likelihood. In JHS 2, students master the probability scale from 0 to 1, define sample spaces, identify favorable outcomes, calculate theoretical probabilities of simple events, and apply the law of complementary events.",
    "realWorldContext": "Weather forecasting predicting a 70% chance of rain in Takoradi, insurance companies assessing accident risk, agricultural crop yield risk modeling, and fair game design all rely on probability principles.",
    "objectives": [
      "Define probability, experiment, outcome, event, and sample space.",
      "Interpret and apply the probability scale from 0 (impossible) to 1 (certain).",
      "List the sample space for single-stage experiments involving coins, dice, and spinners.",
      "Calculate theoretical probability using P(E) = n(E) / n(S).",
      "Apply the rule of complementary events: P(not E) = 1 - P(E)."
    ],
    "sections": [
      {
        "title": "1. Basic Probability Vocabulary and Concepts",
        "content": "Probability formalizes the language of chance and random occurrences.",
        "bulletPoints": [
          "Random Experiment: An activity or process with uncertain outcomes that can be repeated under identical conditions.",
          "Outcome: A single possible result of an experiment.",
          "Sample Space (S): The set of ALL possible outcomes of an experiment. The total number of outcomes is denoted n(S).",
          "Event (E): A specific outcome or subset of outcomes from the sample space. Number of favorable outcomes is n(E).",
          "Equally Likely Outcomes: Outcomes that have an identical chance of occurring (e.g. fair coin, unbiased die)."
        ],
        "keyTakeaway": "A fair experiment means every single outcome in the sample space has an equal probability of occurring.",
        "realWorldExample": "Tossing a Ghana one-cedi coin has two equally likely outcomes: Heads (H) or Tails (T)."
      },
      {
        "title": "2. The Probability Scale",
        "content": "Probability is always expressed as a real number between 0 and 1 inclusive, or as a percentage between 0% and 100%.",
        "bulletPoints": [
          "Range: 0 ≤ P(E) ≤ 1. A probability can NEVER be negative, and can NEVER exceed 1.",
          "Impossible Event (P = 0): An event that cannot happen under any circumstances (e.g. rolling a 7 on a standard 6-sided die: P = 0).",
          "Certain Event (P = 1): An event that is guaranteed to happen (e.g. rolling a number less than 7 on a die: P = 6/6 = 1).",
          "Even Chance (P = 0.5 or 1/2): Getting Heads when tossing a fair coin (50% chance).",
          "Probability Representations: Can be written as a common fraction in lowest terms (e.g. 3/8), a decimal (0.375), or a percentage (37.5%)."
        ],
        "keyTakeaway": "If your calculated probability is greater than 1 or less than 0, your calculation is mathematically incorrect.",
        "realWorldExample": "The probability that the sun will rise from the East tomorrow is 1 (certain)."
      },
      {
        "title": "3. Theoretical Probability Formula",
        "content": "When all outcomes in a finite sample space are equally likely, the theoretical probability of an event is calculated by division.",
        "bulletPoints": [
          "Formula: P(E) = (Number of favorable outcomes) / (Total number of possible outcomes) = n(E) / n(S).",
          "Standard 6-Sided Die: S = {1, 2, 3, 4, 5, 6}, so n(S) = 6.",
          "  P(Even number) = {2, 4, 6} => 3/6 = 1/2.",
          "  P(Prime number) = {2, 3, 5} => 3/6 = 1/2 (Note: 1 is NOT prime!).",
          "  P(Multiple of 3) = {3, 6} => 2/6 = 1/3.",
          "Deck of Playing Cards: 52 cards total (13 of each suit: Hearts, Diamonds, Clubs, Spades; 26 red, 26 black; 4 Aces, 12 face cards)."
        ],
        "keyTakeaway": "Always list out the favorable outcomes explicitly to count them accurately before dividing by n(S).",
        "realWorldExample": "Drawing the name of 1 student at random from a class of 25 girls and 15 boys: P(Girl) = 25 / (25+15) = 25/40 = 5/8."
      },
      {
        "title": "4. Complementary Events: P(not E) = 1 - P(E)",
        "content": "The complement of an event E, denoted E' or not E, consists of all outcomes in the sample space that are NOT in E.",
        "bulletPoints": [
          "Fundamental Property: An event must either happen or not happen: P(E) + P(E') = 1.",
          "Complement Formula: P(E') = 1 - P(E).",
          "Shortcut Application: When calculating the probability of 'at least one' or 'not picking a red ball', it is often far faster to subtract the unwanted event from 1.",
          "Example: A bag contains 8 blue, 7 yellow, and 5 red beads (total = 20). What is the probability of picking a bead that is NOT red? P(Red) = 5/20 = 1/4. Therefore, P(Not Red) = 1 - 1/4 = 3/4."
        ],
        "keyTakeaway": "Whenever a question asks for the probability that something DOES NOT happen, use P(not E) = 1 - P(E).",
        "realWorldExample": "If the probability of rain today is 0.3, the probability of no rain is 1 - 0.3 = 0.7."
      }
    ],
    "commonMistakes": [
      "Giving a probability greater than 1 (e.g. 5/3 or 120%) or a negative number.",
      "Counting 1 as a prime number when finding prime outcomes on a die (primes on a die are 2, 3, 5).",
      "Forgetting to add all categories together to determine the total sample space n(S).",
      "Writing probability as a ratio (e.g. 1 : 2) instead of a fraction, decimal, or percentage.",
      "Failing to reduce the final probability fraction to its simplest lowest terms."
    ],
    "beceExamTips": [
      "Always state the sample space size n(S) and the favorable outcome count n(E) clearly.",
      "Reduce all probability fractions to lowest terms (e.g. write 4/6 as 2/3).",
      "In bag/container word problems, check whether items are replaced or not replaced before calculating second draws.",
      "Remember that probabilities of all mutually exclusive outcomes in an experiment must sum to exactly 1."
    ],
    "summaryChecklist": [
      "I know the probability scale spans from 0 (impossible) to 1 (certain).",
      "I can write out the sample space for coins, dice, and selection experiments.",
      "I can calculate theoretical probability using P(E) = n(E) / n(S).",
      "I can apply the complement rule P(not E) = 1 - P(E).",
      "I always simplify probability fractions to their lowest terms."
    ]
  }
};
