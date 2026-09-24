import { DetailedNotes } from './types';

export const TOPIC_DETAILED_NOTES: Record<string, DetailedNotes> = {
  // ==========================================
  // TOPIC 1: SETS AND OPERATIONS ON SETS
  // ==========================================
  'jhs1-math-t1-sets': {
    introduction: `The study of sets is one of the foundational pillars of modern mathematics. In daily life, we constantly organize objects into groups or collections: a set of mathematical instruments, a cutlery set in the kitchen, a football squad of 11 players, or the set of all students in JHS 1. In mathematics, a set provides a precise language for classifying numbers, shapes, and data without ambiguity. For the BECE examination, set operations and two-set Venn diagrams frequently appear in Section B (Theory) and Section A (Objective Test).`,
    objectives: [
      'Define a set and identify elements or members using standard notation (∈ and ∉).',
      'Distinguish clearly between finite sets, infinite sets, unit sets, and empty (null) sets.',
      'Represent sets using the listing (roster) method and the rule (description) method.',
      'Differentiate between subsets (⊆), proper subsets (⊂), and calculate the total number of subsets (2^n).',
      'Perform set operations: Union (∪), Intersection (∩), and Complement (A\').',
      'Construct and solve real-world problems using two-set Venn diagrams and the inclusion-exclusion principle.',
    ],
    sections: [
      {
        title: '1. What is a Set and How is it Defined?',
        content: `A set is a well-defined collection of distinct objects, called elements or members. "Well-defined" means that anyone can clearly determine whether a given object belongs to the set or not.
For example, "The set of all even numbers between 1 and 10" is well-defined: {2, 4, 6, 8}.
However, "The set of beautiful flowers in Accra" is NOT well-defined because beauty is subjective and cannot be objectively measured.`,
        bulletPoints: [
          'Elements: Objects belonging to a set. Symbol: ∈ means "is an element of" (e.g. 4 ∈ {2, 4, 6}).',
          'Non-elements: Symbol: ∉ means "is not an element of" (e.g. 5 ∉ {2, 4, 6}).',
          'Notation: Sets are named using capital letters (A, B, C) and elements are enclosed inside curly braces { } separated by commas.',
          'No Duplicates: Elements in a set are never repeated. The letters in the word "GHANA" form the set {G, H, A, N}.',
        ],
      },
      {
        title: '2. Types of Sets',
        content: `In the BECE syllabus, you must master the classification of sets based on the number and nature of their elements.`,
        bulletPoints: [
          'Finite Set: A set whose elements can be completely counted and listed. Example: Factors of 12 = {1, 2, 3, 4, 6, 12}. Cardinality: n(F) = 6.',
          'Infinite Set: A set whose elements continue endlessly. Example: Counting numbers = {1, 2, 3, 4, 5, ...}.',
          'Empty / Null Set: A set that contains no elements at all. Symbol: ∅ or {}. (Note: NEVER write {∅} as an empty set). Example: Set of months with 35 days.',
          'Unit (Singleton) Set: A set containing exactly one element. Example: Set of even prime numbers = {2}.',
          'Universal Set (U or ξ): The overarching set containing all possible elements under consideration in a given problem.',
        ],
      },
      {
        title: '3. Subsets and the Number of Subsets Formula',
        content: `If every element in set A is also present in set B, then A is a subset of B, written as A ⊆ B.
If A is a subset of B and B contains at least one element that is not in A, then A is a proper subset of B, written as A ⊂ B.
Every set is a subset of itself, and the empty set ∅ is a subset of EVERY set.`,
        bulletPoints: [
          'Total number of subsets formula: If a set has n elements, total subsets = 2^n.',
          'Example: For set S = {a, b}, n = 2. Total subsets = 2² = 4. Subsets: ∅, {a}, {b}, {a, b}.',
          'Proper subsets formula: Total proper subsets = 2^n - 1.',
        ],
      },
      {
        title: '4. Operations on Sets: Union, Intersection, and Complement',
        content: `Set operations combine or modify sets in precise mathematical ways:
1. Intersection (A ∩ B): The set of elements that belong to BOTH set A and set B simultaneously.
2. Union (A ∪ B): The set of elements that belong to set A OR set B, or both. All elements are gathered together without repeating duplicates.
3. Complement of A (A\' or A^c): The set of all elements in the Universal Set (U) that do NOT belong to set A. Formula: A\' = U - A.
4. Disjoint Sets: Two sets are disjoint if they have no common elements: A ∩ B = ∅.`,
        bulletPoints: [
          'Intersection keyword: "BOTH", "COMMON", "AND".',
          'Union keyword: "EITHER", "OR", "COMBINED", "ALL TOGETHER".',
          'Complement keyword: "NOT IN", "EXCEPT", "OUTSIDE".',
        ],
      },
      {
        title: '5. Solving Two-Set Venn Diagram Problems',
        content: `Venn diagrams represent sets visually using circles inside a bounding rectangle (the Universal Set U).
For two intersecting sets A and B:
• Region 1: Elements belonging to set A ONLY = n(A) - n(A ∩ B).
• Region 2: Elements belonging to BOTH A and B = n(A ∩ B).
• Region 3: Elements belonging to set B ONLY = n(B) - n(A ∩ B).
• Region 4: Elements belonging to NEITHER A nor B.
Fundamental Equation:
Total n(U) = [n(A) - x] + x + [n(B) - x] + [Neither]
where x = n(A ∩ B).
Simplified formula: n(A ∪ B) = n(A) + n(B) - n(A ∩ B).`,
      },
    ],
    commonMistakes: [
      'Writing {∅} to represent an empty set. Write either ∅ or {}.',
      'Forgetting to subtract the intersection (both) from individual set totals when filling a Venn diagram.',
      'Repeating duplicate elements in a set roster.',
      'Confusing the symbols: ∪ (Union = all) vs ∩ (Intersection = common only).',
    ],
    beceExamTips: [
      'Always start by drawing the Venn diagram rectangle first and labeling n(U) in the top corner.',
      'Always fill the center intersection region (both) first before filling the "only" regions.',
      'Double-check that all four regions inside the rectangle add up exactly to the Universal set n(U).',
    ],
    summaryChecklist: [
      'Set notation: A = {elements}, ∈ (element of), ∉ (not element of).',
      'Empty set: ∅ or {}. Number of subsets = 2^n.',
      'A ∩ B = common elements; A ∪ B = all elements without duplicates.',
      'A\' = elements in Universal set U that are not in A.',
    ],
  },

  // ==========================================
  // TOPIC 2: REAL NUMBER SYSTEM AND PLACE VALUE
  // ==========================================
  'jhs1-math-t2-realnumbers': {
    introduction: `The Real Number System encompasses all the numbers we use in daily life, science, and economics. From basic counting of objects (Natural numbers) to managing finances with debits and credits (Integers) and measuring quantities accurately (Rational numbers), numbers form the bedrock of civilization. In JHS 1, mastering place values up to billions, prime factor decomposition, and finding HCF and LCM are fundamental competencies for every BECE candidate.`,
    objectives: [
      'Classify numbers into Natural numbers, Whole numbers, Integers, Rational numbers, and Real numbers.',
      'Identify the place value and value of digits in numbers up to 1,000,000,000 (billions).',
      'Write large numbers in standard numeral notation and in words.',
      'Express composite numbers as products of prime factors using index notation.',
      'Calculate the Highest Common Factor (HCF) and Lowest Common Multiple (LCM) of two or three numbers.',
    ],
    sections: [
      {
        title: '1. Classification of Real Numbers',
        content: `Real numbers (ℝ) are divided into several subsets:
• Natural Numbers (ℕ): Counting numbers starting from 1: {1, 2, 3, 4, 5, ...}.
• Whole Numbers (𝕎): Natural numbers together with zero: {0, 1, 2, 3, 4, ...}.
• Integers (ℤ): Positive whole numbers, zero, and negative whole numbers: {..., -3, -2, -1, 0, 1, 2, 3, ...}.
• Rational Numbers (ℚ): Any number that can be expressed as a fraction a/b where a and b are integers and b ≠ 0. Includes terminating and recurring decimals.
• Irrational Numbers: Numbers that cannot be expressed as simple fractions (e.g., √2, √3, π). Their decimals are non-terminating and non-recurring.`,
      },
      {
        title: '2. Place Value vs Digit Value',
        content: `There is a critical distinction between "Place Value" and "Value of a Digit":
• Place Value refers to the position a digit occupies (e.g. Ones, Tens, Hundreds, Thousands, Ten Thousands, Hundred Thousands, Millions, Ten Millions, Hundred Millions, Billions).
• Value refers to the actual quantity represented by the digit, calculated as: Digit × Place Value.
Example: In the number 7,842,519:
• The place value of 8 is "Hundred Thousands".
• The value of 8 is 8 × 100,000 = 800,000.`,
      },
      {
        title: '3. Prime Factors and Index Notation',
        content: `• Prime Number: A whole number greater than 1 that has exactly two factors: 1 and itself (e.g. 2, 3, 5, 7, 11, 13, 17, 19, 23). Note: 2 is the ONLY even prime number!
• Composite Number: A number having more than two factors (e.g. 4, 6, 8, 9, 10, 12).
• Prime Factorization: Expressing a composite number as a product of prime numbers.
Example: Express 72 as a product of prime factors:
72 = 2 × 36 = 2 × 2 × 18 = 2 × 2 × 2 × 9 = 2 × 2 × 2 × 3 × 3.
In Index Notation: 72 = 2³ × 3².`,
      },
      {
        title: '4. Finding HCF and LCM using Prime Factors',
        content: `To find the HCF and LCM of numbers (e.g., 24 and 36):
First, express each number in prime factor index form:
24 = 2³ × 3¹
36 = 2² × 3²
• Highest Common Factor (HCF): Take the COMMON prime factors with the LOWEST powers.
  HCF = 2² × 3¹ = 4 × 3 = 12.
• Lowest Common Multiple (LCM): Take ALL prime factors with the HIGHEST powers.
  LCM = 2³ × 3² = 8 × 9 = 72.`,
      },
    ],
    commonMistakes: [
      'Confusing "Place Value" with "Value of a Digit". Writing 50,000 when asked for the place value of 5 instead of "Ten Thousands".',
      'Thinking 1 is a prime number. 1 is neither prime nor composite because it has only one factor (itself).',
      'Reversing the HCF and LCM rules (taking highest power for HCF and lowest power for LCM).',
    ],
    beceExamTips: [
      'Use the continuous division method (ladder method) or factor tree for prime factorization.',
      'Check your HCF: The HCF must divide into all the given numbers without a remainder.',
      'Check your LCM: All given numbers must divide into the LCM without a remainder.',
    ],
    summaryChecklist: [
      'Real numbers include Natural, Whole, Integers, Rational, and Irrational numbers.',
      'Value = Digit × Place Value.',
      'Prime numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23... (2 is the only even prime).',
      'HCF = lowest powers of common prime factors.',
      'LCM = highest powers of all prime factors.',
    ],
  },

  // ==========================================
  // TOPIC 3: INTEGERS AND OPERATIONS ON INTEGERS
  // ==========================================
  'jhs1-math-t3-integers': {
    introduction: `Integers extend our number system into negative territory, allowing us to quantify temperatures below freezing, financial debts, depths below sea level, and deficits in sports. On the number line, negative numbers mirror positive numbers across the central zero. In the BECE exam, questions testing operations on directed numbers (+ and - signs) appear in both objective questions and algebraic equation steps.`,
    objectives: [
      'Represent positive and negative integers on a horizontal number line.',
      'Compare and arrange integers in ascending and descending order.',
      'Add and subtract directed integers with and without a number line.',
      'Multiply and divide positive and negative integers using sign laws.',
      'Apply the BODMAS rule to multi-step expressions involving integers.',
    ],
    sections: [
      {
        title: '1. The Number Line and Integer Order',
        content: `The set of Integers (ℤ) is written as {..., -4, -3, -2, -1, 0, 1, 2, 3, 4, ...}.
• Zero (0) is neutral: it is neither positive nor negative.
• As you move to the RIGHT on the number line, numbers INCREASE in value: -1 > -5.
• As you move to the LEFT, numbers DECREASE in value.
Rule for Negative Numbers: The larger the numeral behind the negative sign, the smaller its actual value! (e.g. -100 is much smaller than -2).`,
      },
      {
        title: '2. Addition and Subtraction of Integers',
        content: `Rules for Addition:
• Adding numbers with the SAME sign: Add their numerical values and keep the common sign.
  (+4) + (+6) = +10
  (-5) + (-3) = -8
• Adding numbers with DIFFERENT signs: Subtract the smaller numerical value from the larger, and take the sign of the larger number.
  (-9) + (+4) = -5 (9 - 4 = 5; 9 is negative)
  (+12) + (-7) = +5
Rules for Subtraction:
• Subtracting an integer is identical to adding its opposite (additive inverse)!
  a - (+b) = a - b
  a - (-b) = a + b (Double negative becomes positive!)
  Example: 7 - (-5) = 7 + 5 = 12.
  Example: -4 - (-9) = -4 + 9 = +5.`,
      },
      {
        title: '3. Multiplication and Division of Integers',
        content: `When multiplying or dividing two integers:
• Same signs produce a POSITIVE result:
  (+) × (+) = (+)
  (-) × (-) = (+)
  (+) ÷ (+) = (+)
  (-) ÷ (-) = (+)
• Different signs produce a NEGATIVE result:
  (+) × (-) = (-)
  (-) × (+) = (-)
  (+) ÷ (-) = (-)
  (-) ÷ (+) = (-)
Examples:
(-6) × (-4) = +24
(-18) ÷ (+3) = -6
(-5) × (+7) = -35`,
      },
    ],
    commonMistakes: [
      'Thinking that two negative numbers added together make a positive: (-4) + (-3) = +7 is WRONG! (-4) + (-3) = -8. Only multiplication and division of two negatives make positive!',
      'Sign errors with double negatives: Writing 8 - (-3) = 5 instead of 8 + 3 = 11.',
      'Arranging negative numbers backwards: Writing -1, -2, -3 as ascending order instead of descending.',
    ],
    beceExamTips: [
      'Remember the phrase: "Minus of a minus is plus" when removing brackets: -(-x) = +x.',
      'Think of positive as money you HAVE, and negative as money you OWE.',
      'Apply BODMAS strictly when simplifying expressions with multiple integer operations.',
    ],
    summaryChecklist: [
      'Negative numbers to the left of 0; -1 is greater than -10.',
      'Double negative: -(-b) = +b.',
      'Multiplication: (-) × (-) = (+); (-) × (+) = (-).',
      'Addition: (-a) + (-b) = -(a + b).',
    ],
  },

  // ==========================================
  // TOPIC 4: NUMBER BASES AND BINARY SYSTEM (BASE 2)
  // ==========================================
  'jhs1-math-t4-bases': {
    introduction: `Human beings naturally count in Base 10 (the denary or decimal system) because we have ten fingers. However, modern digital computers, smartphones, and the internet operate on the binary system (Base 2), which uses only two digits: 0 and 1. An electronic transistor is either off (0) or on (1). Understanding number bases allows students to comprehend how data is stored, processed, and calculated in computing while mastering place values and numeral conversions.`,
    objectives: [
      'Understand the concept of place values in Base 10, Base 2, and other numeral bases.',
      'State the allowable digits for any given base (e.g. Base n uses digits 0 to n - 1).',
      'Convert numbers from decimal (Base 10) to binary (Base 2) using repeated division.',
      'Convert numbers from binary (Base 2) to decimal (Base 10) using expanded notation.',
      'Perform addition and subtraction of binary numbers.',
      'Solve simple number base equations for unknown bases.',
    ],
    sections: [
      {
        title: '1. What is a Number Base and Place Value?',
        content: `A number base (or radix) indicates how many distinct digits are used to count before moving to the next place value.
In Base 10: Digits used are 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.
In Base 2 (Binary): Digits used are strictly 0 and 1.
Rule: A number in base n can NEVER contain the digit n or any digit greater than n! For example, 102_two is invalid because the digit 2 cannot exist in base 2.`,
        bulletPoints: [
          'Base 2 place values from right to left: 2⁰ = 1, 2¹ = 2, 2² = 4, 2³ = 8, 2⁴ = 16, 2⁵ = 32, 2⁶ = 64.',
          'Subscript notation: The base of a number is written as a subscript or word (e.g., 1101_two or 1101₂).',
          'If no base is written, the number is assumed to be in Base 10.',
        ],
      },
      {
        title: '2. Converting Base 10 (Decimal) to Base 2 (Binary)',
        content: `To convert an integer from Base 10 to Base 2:
1. Divide the decimal number continuously by 2.
2. Record the quotient and write the remainder (which will always be either 0 or 1) on the side.
3. Continue dividing the quotients by 2 until the quotient becomes 0.
4. Read the remainders from BOTTOM TO TOP.`,
        bulletPoints: [
          'Example: Convert 19_ten to Base 2:',
          '19 ÷ 2 = 9 remainder 1',
          '9 ÷ 2 = 4 remainder 1',
          '4 ÷ 2 = 2 remainder 0',
          '2 ÷ 2 = 1 remainder 0',
          '1 ÷ 2 = 0 remainder 1',
          'Reading from bottom to top gives: 10011_two.',
        ],
      },
      {
        title: '3. Converting Base 2 (Binary) to Base 10 (Decimal)',
        content: `To convert a binary number to Base 10:
1. Assign powers of 2 to each digit, starting with 0 at the extreme right-hand digit.
2. Multiply each binary digit by 2 raised to its corresponding position power.
3. Sum the resulting products together to obtain the decimal value.
Formula: (d_n × 2^n) + ... + (d_1 × 2¹) + (d_0 × 2⁰)`,
        bulletPoints: [
          'Example: Convert 11011_two to Base 10:',
          '= (1 × 2⁴) + (1 × 2³) + (0 × 2²) + (1 × 2¹) + (1 × 2⁰)',
          '= 16 + 8 + 0 + 2 + 1 = 27_ten.',
        ],
      },
      {
        title: '4. Binary Addition (Base 2 Arithmetic)',
        content: `Adding numbers in binary follows column addition principles, with regrouping when the sum reaches 2:
• 0 + 0 = 0
• 0 + 1 = 1
• 1 + 0 = 1
• 1 + 1 = 10_two (write 0, carry over 1)
• 1 + 1 + 1 = 11_two (write 1, carry over 1)`,
      },
    ],
    commonMistakes: [
      'Reading remainders from top to bottom instead of bottom to top during repeated division.',
      'Writing the digit 2 or higher in a base 2 answer. In Base 2, 1 + 1 = 10_two.',
      'Thinking that 2⁰ = 0. Remember: 2⁰ = 1.',
    ],
    beceExamTips: [
      'Always verify your conversion by converting your answer back to the original base.',
      'Write column place values (16, 8, 4, 2, 1) directly above the binary digits to avoid misalignment.',
    ],
    summaryChecklist: [
      'Base 2 uses only 0 and 1.',
      'Base 10 to Base 2: Repeated division by 2, read remainders from bottom to top.',
      'Base 2 to Base 10: Expanded form using powers of 2 (2⁰=1, 2¹=2, 2²=4, 2³=8, 2⁴=16).',
    ],
  },

  // ==========================================
  // TOPIC 5: FRACTIONS, DECIMALS AND PERCENTAGES
  // ==========================================
  'jhs1-math-t5-fractions': {
    introduction: `Fractions represent equal parts of a whole quantity or collection. Whether measuring ingredients in cooking, calculating percentages of profits in business, or measuring land, fractions and decimals are central to applied mathematics. In the BECE exam, questions on fractions test your mastery of equivalent forms, the order of mathematical operations (BODMAS), and converting fluidly between fractions, decimals, and percentages.`,
    objectives: [
      'Classify proper fractions, improper fractions, and mixed numbers.',
      'Simplify fractions to lowest terms using the Highest Common Factor (HCF).',
      'Add and subtract fractions with like and unlike denominators using the Lowest Common Multiple (LCM).',
      'Multiply and divide fractions, including applying reciprocal rules.',
      'Apply the BODMAS rule to complex multi-step fractional expressions.',
      'Convert between fractions, terminating/recurring decimals, and percentages.',
    ],
    sections: [
      {
        title: '1. Types of Fractions & Conversions',
        content: `A fraction is expressed as a/b, where a is the numerator and b is the non-zero denominator.
• Proper Fraction: Numerator is smaller than denominator (e.g., 3/5, 7/10). Value is less than 1.
• Improper Fraction: Numerator is greater than or equal to denominator (e.g., 9/4, 11/3). Value is 1 or greater.
• Mixed Fraction: Consists of a whole number and a proper fraction (e.g., 2 ¾).
Conversion Formula (Mixed to Improper): a (b/c) = (a × c + b) / c. Example: 3 ⅖ = (3 × 5 + 2) / 5 = 17/5.`,
      },
      {
        title: '2. Addition and Subtraction of Fractions',
        content: `Rule: Fractions can ONLY be added or subtracted directly if they have the same denominator (like denominators).
If denominators are different (unlike denominators):
1. Find the Lowest Common Multiple (LCM) of all denominators.
2. Convert each fraction into an equivalent fraction with the LCM as its denominator.
3. Add or subtract the numerators and keep the common denominator.
4. Reduce the final answer to its simplest form.`,
      },
      {
        title: '3. Multiplication and Division of Fractions',
        content: `• Multiplication: Multiply numerators together and denominators together. Cancel common factors before multiplying.
Formula: (a/b) × (c/d) = (a × c) / (b × d).
• Division: Dividing by a fraction is the same as multiplying by its reciprocal (inverted fraction).
Formula: (a/b) ÷ (c/d) = (a/b) × (d/c) = (a × d) / (b × c).`,
      },
      {
        title: '4. The Order of Operations: BODMAS',
        content: `Follow the strict hierarchy:
B — Brackets first
O — Of (multiplication evaluated immediately after brackets)
D — Division
M — Multiplication
A — Addition
S — Subtraction`,
      },
      {
        title: '5. Fractions, Decimals, and Percentages Triad',
        content: `• Fraction to Percentage: Multiply by 100%. Example: ⅗ × 100% = 60%.
• Percentage to Fraction: Write over 100 and simplify. Example: 45% = 45/100 = 9/20.
• Fraction to Decimal: Divide numerator by denominator. Example: ⅜ = 3 ÷ 8 = 0.375.
• Decimal to Percentage: Multiply by 100. Example: 0.085 × 100 = 8.5%.`,
      },
    ],
    commonMistakes: [
      'Adding denominators together: 1/3 + 1/4 = 2/7 is FALSE! Must find LCM (12) => 4/12 + 3/12 = 7/12.',
      'Forgetting to invert the second fraction when dividing.',
      'Ignoring BODMAS order.',
    ],
    beceExamTips: [
      'Convert all mixed numbers into improper fractions before multiplication or division.',
      'Cancel down common factors early to keep numbers small.',
      'Always present final answers in lowest terms.',
    ],
    summaryChecklist: [
      'Add/Subtract: find LCM of denominators first.',
      'Multiply: multiply numerators and denominators (cancel first).',
      'Divide: invert second fraction and multiply.',
      'BODMAS: Brackets, Of, Division, Multiplication, Addition, Subtraction.',
    ],
  },

  // ==========================================
  // TOPIC 6: ALGEBRAIC EXPRESSIONS AND SUBSTITUTION
  // ==========================================
  'jhs1-math-t6-algebra': {
    introduction: `Algebra is the branch of mathematics where letters and symbols represent unknown quantities and relationships. In JHS 1, students transition from plain numerical arithmetic to symbolic reasoning. Algebraic skills are essential for science, economics, computer programming, and everyday problem-solving. In the BECE exam, questions on simplifying expressions, collecting like terms, expanding brackets, and substitution appear every single year.`,
    objectives: [
      'Define algebraic terms, variables, coefficients, and constants.',
      'Identify like terms and unlike terms in algebraic expressions.',
      'Simplify algebraic expressions by grouping and collecting like terms.',
      'Apply the distributive law to expand single brackets.',
      'Substitute positive and negative numbers into algebraic expressions and evaluate correctly.',
    ],
    sections: [
      {
        title: '1. Anatomy of an Algebraic Term',
        content: `In the term 7x²:
• 7 is the Coefficient (numerical factor).
• x is the Variable (the unknown letter).
• 2 is the Power / Index (exponent).
In 4x - 9, -9 is a Constant term (fixed number with no variable).`,
      },
      {
        title: '2. Like Terms vs Unlike Terms',
        content: `• Like Terms: Terms that have the exact same variables raised to the exact same powers (e.g. 3x and 5x, 7ab and -2ab). ONLY like terms can be added or subtracted!
• Unlike Terms: Terms with different variables or powers (e.g. 3x and 3y, 5a and 5a²). Unlike terms CANNOT be merged! (3x + 2y does NOT equal 5xy).`,
      },
      {
        title: '3. Expanding Single Brackets (Distributive Law)',
        content: `Formula: a(b + c) = ab + ac and a(b - c) = ab - ac.
Watch signs when outside term is negative:
Formula: -a(b - c) = -ab + ac (negative × negative = positive).
Example: -3(4x - 5) = -12x + 15.`,
      },
      {
        title: '4. Substitution and Evaluation',
        content: `Replace letters with specific numbers and calculate using standard arithmetic.
Golden Rule for Negative Values: Always place negative numbers in brackets!
If x = -3:
• 2x = 2(-3) = -6
• x² = (-3)² = +9
• -x² = -((-3)²) = -9`,
      },
    ],
    commonMistakes: [
      'Combining unlike terms: Writing 5x + 3y = 8xy.',
      'Sign errors during expansion: Writing -(x - 4) as -x - 4 instead of -x + 4.',
      'Squaring negative numbers without brackets: Writing -3² = 9 instead of (-3)² = 9.',
    ],
    beceExamTips: [
      'Underline like terms with their preceding signs before grouping.',
      'Always expand brackets first before attempting to collect like terms.',
      'Put negative substituted numbers in parentheses.',
    ],
    summaryChecklist: [
      'Coefficient: the number before a letter.',
      'Only like terms can be combined.',
      'Distributive Law: a(b + c) = ab + ac.',
      'Negative outside bracket flips all signs inside.',
    ],
  },

  // ==========================================
  // TOPIC 7: LINEAR EQUATIONS IN ONE VARIABLE
  // ==========================================
  'jhs1-math-t7-linearequations': {
    introduction: `A linear equation is a mathematical statement asserting that two expressions are equal, containing one unknown variable with power 1. Think of an equation as a two-pan balance scale: as long as you perform the identical operation to both sides, the scale remains balanced. Solving linear equations is one of the most critical exam topics in BECE, appearing both as direct equations and as applied word problems.`,
    objectives: [
      'Understand the concept of equality and the balance principle of equations.',
      'Solve one-step, two-step, and multi-step linear equations.',
      'Solve equations containing single brackets using the distributive property.',
      'Clear fractional coefficients by multiplying through by the LCM.',
      'Translate English word problems into algebraic linear equations and solve them.',
    ],
    sections: [
      {
        title: '1. The Golden Rule of Equations (Balance Principle)',
        content: `Whatever operation you perform on the left-hand side (LHS), you MUST perform the exact same operation on the right-hand side (RHS).
• Add/subtract the same number from both sides.
• Multiply/divide both sides by the same non-zero number.`,
      },
      {
        title: '2. The Transposition Method',
        content: `When a term moves across the equals sign (=), its operation reverses:
• Addition (+) becomes Subtraction (-)
• Subtraction (-) becomes Addition (+)
• Multiplication (×) becomes Division (÷)
• Division (÷) becomes Multiplication (×)
Example: 3x + 7 = 22 => 3x = 22 - 7 => 3x = 15 => x = 5.`,
      },
      {
        title: '3. Equations with Brackets and Fractions',
        content: `• With Brackets: Expand all brackets first, collect like terms, then isolate the variable.
• With Fractions: Find the LCM of all denominators and multiply EVERY term on both sides by this LCM. All fractions will cancel out completely!`,
      },
    ],
    commonMistakes: [
      'Moving a term across the equals sign without changing its sign.',
      'Multiplying only fractions by LCM and forgetting whole numbers/constants.',
      'Failing to verify the solution by plugging it back into the equation.',
    ],
    beceExamTips: [
      'Always verify your answer by substituting back into the original equation.',
      'Keep equals signs neatly aligned in a vertical column.',
    ],
    summaryChecklist: [
      'Balance principle: whatever you do to LHS, do to RHS.',
      'Transposition: + becomes -, - becomes +, × becomes ÷.',
      'Multiply EVERY term by LCM to eliminate fractions.',
    ],
  },

  // ==========================================
  // TOPIC 8: RATIO, PROPORTION AND SHARING
  // ==========================================
  'jhs1-math-t8-ratios': {
    introduction: `A ratio is a mathematical comparison of two or more quantities of the same kind by division. Ratios and proportions are used constantly in commerce, sharing business capital and dividends, mixing concrete in masonry (cement, sand, and stone in ratio 1:2:4), scaling maps, and calculating recipe portions. In the BECE exam, questions on sharing quantities, equivalent ratios, and direct vs inverse proportion are regular favorites.`,
    objectives: [
      'Express comparisons as ratios in simplest form.',
      'Convert ratios with fractions or decimals into whole-number ratios.',
      'Divide or share a quantity into a given ratio.',
      'Solve direct proportion problems using the unitary method.',
      'Distinguish between direct proportion and inverse (indirect) proportion.',
    ],
    sections: [
      {
        title: '1. What is a Ratio and How is it Expressed?',
        content: `A ratio compares quantities of the SAME kind and unit.
Notation: a : b or a/b.
Important Rules:
1. Units must be identical before forming a ratio! (e.g. 50 pesewas to 2 Cedis: 50 : 200 = 1 : 4).
2. A ratio has NO units. It is a pure dimensionless number.
3. Order matters: 3 : 5 is not the same as 5 : 3.`,
      },
      {
        title: '2. Sharing a Quantity in a Given Ratio',
        content: `Standard 3-Step Method:
Step 1: Calculate Total Ratio Parts by adding the ratio terms together.
Step 2: Find the value of 1 part = Total Quantity / Total Parts.
Step 3: Multiply the value of 1 part by each ratio term to determine individual shares.`,
      },
      {
        title: '3. Direct vs Inverse Proportion',
        content: `• Direct Proportion: An increase in one quantity leads to a proportional increase in the other (e.g. books vs cost). Use the unitary method: find for 1, then multiply.
• Inverse Proportion: An increase in one quantity leads to a proportional DECREASE in the other (e.g. workers vs days). Product remains constant: Workers × Days = Constant.`,
      },
    ],
    commonMistakes: [
      'Comparing quantities with different units without converting them first.',
      'Applying direct proportion to inverse proportion problems (workers vs days).',
      'Dividing by an individual ratio term instead of the sum of parts.',
    ],
    beceExamTips: [
      'Always add the ratio numbers together first to find total parts.',
      'Check that individual shares add up to the original total quantity.',
    ],
    summaryChecklist: [
      'Ratio has no units; units must match before simplifying.',
      'Share = (Individual ratio part / Total parts) × Total Amount.',
      'Direct proportion: more produces more. Inverse proportion: more produces less.',
    ],
  },

  // ==========================================
  // TOPIC 9: LINES AND ANGLES
  // ==========================================
  'jhs1-math-t9-linesangles': {
    introduction: `Lines and angles form the alphabet of spatial geometry. From surveying boundaries to carpentry and road engineering, angle calculations ensure structures are stable and accurate. In JHS 1, students learn to measure, classify, and calculate angles formed by intersecting lines and parallel lines cut by transversals.`,
    objectives: [
      'Classify angles: acute, right, obtuse, straight, reflex, and perigon (360°).',
      'Calculate complementary (90°) and supplementary (180°) angles.',
      'Identify vertically opposite angles and angles at a point.',
      'Identify alternate angles, corresponding angles, and co-interior angles on parallel lines.',
    ],
    sections: [
      {
        title: '1. Classification of Angles',
        content: `• Acute: Greater than 0° and less than 90°.
• Right Angle: Exactly 90°.
• Obtuse: Greater than 90° and less than 180°.
• Straight Angle: Exactly 180° (a straight line).
• Reflex Angle: Greater than 180° and less than 360°.
• Perigon / Complete Revolution: Exactly 360°.`,
      },
      {
        title: '2. Angle Laws on Intersecting Lines',
        content: `• Complementary Angles: Two angles that sum up to 90°.
• Supplementary Angles: Two angles that sum up to 180° (angles on a straight line).
• Vertically Opposite Angles: When two straight lines cross, opposite angles are equal.
• Angles at a Point: All angles around a common point sum to 360°.`,
      },
      {
        title: '3. Parallel Lines and Transversals',
        content: `When a transversal cuts two parallel lines:
1. Alternate Angles (Z-shape): Equal to each other.
2. Corresponding Angles (F-shape): Equal to each other.
3. Co-Interior Angles (C-shape): Supplementary (sum to 180°).`,
      },
    ],
    commonMistakes: [
      'Assuming lines are parallel when no arrows are drawn.',
      'Confusing alternate angles (equal) with co-interior angles (sum to 180°).',
    ],
    beceExamTips: [
      'State geometric reasons in parentheses (e.g. "angles on a straight line", "alternate angles").',
      'Look for Z (alternate), F (corresponding), and C (co-interior) shapes.',
    ],
    summaryChecklist: [
      'Straight line = 180°. Point = 360°.',
      'Vertically opposite angles are equal.',
      'Parallel lines: Alternate (Z) = equal; Corresponding (F) = equal; Co-interior (C) = 180°.',
    ],
  },

  // ==========================================
  // TOPIC 10: PLANE SHAPES AND POLYGONS
  // ==========================================
  'jhs1-math-t10-polygons': {
    introduction: `A polygon is a closed two-dimensional plane figure made of straight line segments. From triangular roof trusses to rectangular building plots and hexagonal tiling patterns, polygons govern architecture. In this topic, students explore the angle properties of triangles, special quadrilaterals, and regular polygons.`,
    objectives: [
      'Classify triangles by sides (equilateral, isosceles, scalene) and angles (acute, right, obtuse).',
      'Apply the triangle angle sum theorem (180°) and exterior angle theorem.',
      'Identify properties of quadrilaterals: squares, rectangles, parallelograms, rhombuses, trapeziums, and kites.',
      'Calculate the sum of interior angles of any n-sided polygon using (n - 2) × 180°.',
      'Calculate individual interior and exterior angles of regular polygons.',
    ],
    sections: [
      {
        title: '1. Angle Properties of Triangles',
        content: `• Sum of interior angles of ANY triangle = 180°.
• Exterior Angle Theorem: The exterior angle of a triangle equals the sum of the two opposite interior angles.
• Equilateral: All 3 sides equal, all 3 angles = 60°.
• Isosceles: 2 sides equal, 2 base angles equal.
• Scalene: All 3 sides and angles are different.`,
      },
      {
        title: '2. Quadrilaterals and Their Properties',
        content: `Sum of interior angles of any quadrilateral = 360°.
• Square: 4 equal sides, 4 right angles, diagonals equal and bisect at 90°.
• Rectangle: Opposite sides equal, 4 right angles, diagonals equal.
• Parallelogram: Opposite sides parallel and equal, opposite angles equal, diagonals bisect each other.
• Rhombus: Parallelogram with 4 equal sides, diagonals bisect at 90°.
• Trapezium: Exactly one pair of parallel sides.`,
      },
      {
        title: '3. Polygon Interior and Exterior Angles',
        content: `For any n-sided polygon:
• Sum of Interior Angles: S = (n - 2) × 180°.
  - Quadrilateral (n = 4): (4 - 2) × 180° = 360°.
  - Pentagon (n = 5): (5 - 2) × 180° = 540°.
  - Hexagon (n = 6): (6 - 2) × 180° = 720°.
  - Octagon (n = 8): (8 - 2) × 180° = 1080°.
• Sum of Exterior Angles of ANY convex polygon = 360°.
• For a Regular Polygon (all sides and angles equal):
  - Each Exterior Angle = 360° / n.
  - Each Interior Angle = 180° - (Each Exterior Angle).`,
      },
    ],
    commonMistakes: [
      'Using (n - 2) × 360° instead of (n - 2) × 180° for interior angle sum.',
      'Confusing the exterior angle with reflex angles.',
      'Forgetting that base angles of an isosceles triangle are opposite the equal sides.',
    ],
    beceExamTips: [
      'To find the interior angle of a regular polygon easily: calculate the exterior angle first (360° / n), then subtract from 180°!',
      'Sum of exterior angles is ALWAYS 360°, regardless of the number of sides.',
    ],
    summaryChecklist: [
      'Triangle angle sum = 180°. Exterior angle = sum of opposite interior angles.',
      'Polygon interior sum = (n - 2) × 180°.',
      'Polygon exterior sum = 360°.',
      'Regular polygon: Exterior = 360° / n; Interior = 180° - (360° / n).',
    ],
  },

  // ==========================================
  // TOPIC 11: GEOMETRIC CONSTRUCTION
  // ==========================================
  'jhs1-math-t11-construction': {
    introduction: `Geometric construction is the precise drawing of lines, angles, and shapes using ONLY two instruments: an unmarked straight edge (ruler) and a pair of compasses. In the BECE exam, construction is a compulsory Section B question carrying 12 to 15 marks. Accuracy, clean arcs, and correct labeling are essential to secure maximum points.`,
    objectives: [
      'Construct a perpendicular bisector of a line segment.',
      'Bisect any given angle accurately using compasses.',
      'Construct standard angles: 90°, 60°, 45°, 30°, and 15° using compasses only.',
      'Construct a perpendicular to a line from a point on the line and from an external point.',
      'Construct triangles given lengths of sides and sizes of angles.',
    ],
    sections: [
      {
        title: '1. Basic Construction Instruments & Rules',
        content: `• Straight ruler: Used ONLY for drawing straight lines through points (not for guessing angles).
• Pair of compasses: Used for drawing circles and intersecting arcs. Compasses must be tight and pencils sharp!
• Golden WAEC Rule: NEVER erase construction arcs! Examiners mark the intersecting arcs to award method marks.`,
      },
      {
        title: '2. Perpendicular Bisector of a Line Segment',
        content: `To bisect line segment AB:
1. Open compass to more than half the length of AB.
2. With center A, draw arcs above and below the line.
3. With center B and the SAME radius, draw arcs intersecting the first arcs at points P and Q.
4. Draw a straight line through P and Q. Line PQ bisects AB at 90°.`,
      },
      {
        title: '3. Constructing Standard Angles: 60°, 90°, 45°, 30°',
        content: `• Angle of 60°: Draw a line segment. With center at vertex, draw an arc cutting the line. With the same radius and center at the cut point, draw an arc intersecting the first arc. Draw line through intersection = 60°.
• Angle of 30°: Bisect the 60° angle.
• Angle of 90°: Construct a perpendicular bisector or construct from a straight line (180° bisected).
• Angle of 45°: Bisect the 90° angle.`,
      },
    ],
    commonMistakes: [
      'Erasing construction arcs. (This results in zero method marks!).',
      'Using blunt pencils causing thick, inaccurate lines.',
      'Changing the compass radius when drawing intersecting arcs from opposite ends.',
    ],
    beceExamTips: [
      'Keep pencil points needle-sharp.',
      'Draw light construction arcs and bold outline lines for the required triangle or figure.',
      'Measure lengths carefully using the millimeter markings on your ruler.',
    ],
    summaryChecklist: [
      'Use only ruler and compass for standard angles.',
      'Do not erase construction arcs.',
      'Bisect 60° to get 30°; bisect 90° to get 45°.',
    ],
  },

  // ==========================================
  // TOPIC 12: PERIMETER AND AREA OF PLANE FIGURES
  // ==========================================
  'jhs1-math-t12-perimeterarea': {
    introduction: `Measurement of boundary lengths (perimeter) and flat surfaces (area) is directly applied in fencing school compounds, tiling classrooms, surveying agricultural land, and tailoring fabrics. In JHS 1, students master the metric units of length and area and calculate perimeters and areas of regular plane figures including rectangles, triangles, and circles.`,
    objectives: [
      'Distinguish between perimeter (linear distance) and area (two-dimensional surface).',
      'Calculate perimeter and area of squares, rectangles, triangles, and compound shapes.',
      'Calculate the circumference (perimeter) and area of a circle using π = 22/7 or 3.142.',
      'Convert between metric units of length (cm, m, km) and area (cm², m²).',
    ],
    sections: [
      {
        title: '1. Perimeter: Boundary Length',
        content: `Perimeter is the total continuous distance around the outer boundary of a 2D shape. Units: mm, cm, m, km.
• Square: P = 4s (where s is side length).
• Rectangle: P = 2(l + w) (length l, width w).
• Triangle: P = a + b + c (sum of all 3 sides).
• Circle Circumference: C = 2πr or C = πd (radius r, diameter d).`,
      },
      {
        title: '2. Area: Surface Measurement',
        content: `Area measures the amount of space inside the boundary. Units: cm², m², km².
• Square: A = s² (side × side).
• Rectangle: A = l × w (length × width).
• Triangle: A = ½ × base × perpendicular height = ½bh.
• Parallelogram: A = base × perpendicular height = bh.
• Trapezium: A = ½(a + b)h (parallel sides a and b, height h).
• Circle: A = πr² (where r is radius = diameter / 2).`,
      },
      {
        title: '3. Area of Compound Figures',
        content: `Compound figures are made of two or more combined basic shapes:
Method:
1. Divide the compound figure into non-overlapping rectangles, triangles, or semi-circles.
2. Calculate the area of each individual component shape.
3. Sum the areas together to get the total area.`,
      },
    ],
    commonMistakes: [
      'Using the slant height of a triangle instead of its perpendicular height for area calculation.',
      'Using diameter instead of radius in the circle area formula πr².',
      'Confusing perimeter units (cm) with area units (cm²).',
    ],
    beceExamTips: [
      'Always double-check if diameter or radius is given. If diameter is 14 cm, radius is 7 cm!',
      'When π is given as 22/7, check if radius is a multiple of 7 to cancel out denominators.',
      'Include correct units in your final answer (cm or cm²).',
    ],
    summaryChecklist: [
      'Perimeter = distance around boundary.',
      'Rectangle: P = 2(l + w), Area = l × w.',
      'Triangle: Area = ½ × base × height.',
      'Circle: Circumference = 2πr; Area = πr².',
    ],
  },

  // ==========================================
  // TOPIC 13: DATA COLLECTION AND FREQUENCY TABLES
  // ==========================================
  'jhs1-math-t13-datacollection': {
    introduction: `Data collection and presentation is the foundation of statistics. In an information-driven world, organizing raw figures into structured frequency tables, bar charts, and pie charts allows governments, health agencies, and schools to identify trends and make decisions. In BECE mathematics, constructing frequency distribution tables and drawing charts appear regularly in both papers.`,
    objectives: [
      'Collect and record discrete data using tally marks.',
      'Construct ungrouped frequency distribution tables from raw data.',
      'Draw and interpret vertical and horizontal bar charts.',
      'Calculate sector angles and interpret simple pie charts.',
    ],
    sections: [
      {
        title: '1. Raw Data and Tally Charts',
        content: `Raw data consists of numbers or categories collected before any organization.
• Tally Marks: Recorded in bundles of 5 (|||| with a slash across). This allows rapid counting.
• Frequency (f): The number of times a particular score occurs.
• Total Frequency (Σf or n): Sum of all frequencies, representing total sample size.`,
      },
      {
        title: '2. Constructing Bar Charts',
        content: `A bar chart uses rectangular bars of equal width to show categorical frequencies:
• The height (or length) of each bar represents the frequency.
• Spaces between bars must be EQUAL.
• Both axes must be clearly labeled (e.g. "Subject" on horizontal axis, "Number of Students" on vertical axis).`,
      },
      {
        title: '3. Pie Charts: Sector Angle Calculation',
        content: `A pie chart is a circular statistical graphic divided into slices (sectors).
The entire circle equals 360°.
Formula for Sector Angle of a Category:
Angle = (Frequency of category / Total Frequency) × 360°
Check: The sum of all sector angles MUST equal 360°.`,
      },
    ],
    commonMistakes: [
      'Drawing touching bars for a bar chart (touching bars are for histograms, not bar charts!).',
      'Miscounting raw data when making tally marks.',
      'Sector angles not adding up to 360° due to rounding errors.',
    ],
    beceExamTips: [
      'Cross out numbers on the question paper as you tally them to ensure no scores are missed.',
      'Check that Σf matches the total count given in the question statement.',
      'Label axes with titles and units on your graph sheet.',
    ],
    summaryChecklist: [
      'Tally marks are grouped in bundles of 5.',
      'Bar chart: bars have equal width and equal spaces between them.',
      'Pie chart sector angle = (f / Σf) × 360°.',
      'Total angles in pie chart = 360°.',
    ],
  },

  // ==========================================
  // TOPIC 14: MEASURES OF CENTRAL TENDENCY (MEAN, MEDIAN, MODE)
  // ==========================================
  'jhs1-math-t14-centraltendency': {
    introduction: `Measures of central tendency summarize an entire set of numerical data into a single representative central value. Whether determining the average exam score of a class, the typical income in a town, or the most popular shoe size in a store, Mean, Median, and Mode are universal statistical tools. Range measures the spread or dispersion of the data.`,
    objectives: [
      'Define, identify, and calculate the Mode for raw and grouped data.',
      'Calculate the Median for an odd or even number of observations.',
      'Calculate the Mean (arithmetic average) from raw lists and frequency distribution tables.',
      'Determine the Range of a set of data.',
    ],
    sections: [
      {
        title: '1. The Mode: Most Frequent Value',
        content: `The Mode is the score that occurs with the highest frequency.
• If one score occurs most often, the data is unimodal.
• If two scores tie for highest frequency, the data is bimodal.
• If all scores appear equally often, there is NO mode.
Important: The Mode is the data value itself, NOT its frequency count!`,
      },
      {
        title: '2. The Median: Middle Score',
        content: `The Median is the middle number when all scores are arranged in ascending or descending order.
• Step 1: ALWAYS sort the data in numerical order first!
• If n is odd: Median is the single middle value at position (n + 1)/2.
  Example: 3, 5, 7, 8, 9 (n = 5). Middle value = 7.
• If n is even: There are two middle values; median is their average: (Middle1 + Middle2) / 2.
  Example: 4, 6, 8, 10 (n = 4). Middle are 6 and 8. Median = (6 + 8)/2 = 7.`,
      },
      {
        title: '3. The Mean: Arithmetic Average',
        content: `• For Raw Data:
  Mean = (Sum of all values) / (Total number of values) = Σx / n.
• For a Frequency Table:
  Mean = Σ(f × x) / Σf
  where x is the score and f is the frequency.`,
      },
      {
        title: '4. The Range: Spread of Data',
        content: `The Range is the difference between the highest and lowest scores:
Range = Highest Value - Lowest Value.`,
      },
    ],
    commonMistakes: [
      'Finding the median without arranging numbers in order first!',
      'Confusing the Mode with its frequency count.',
      'Dividing by the number of table rows instead of Σf when computing mean from a frequency table.',
    ],
    beceExamTips: [
      'Count the number of items after sorting to ensure you did not leave any numbers out.',
      'For frequency tables, add an extra column for (f × x) and compute Σfx neatly.',
    ],
    summaryChecklist: [
      'Mode = most frequent value.',
      'Median = middle value after sorting.',
      'Mean = Σx / n or Σfx / Σf.',
      'Range = Highest - Lowest.',
    ],
  },

  // ==========================================
  // TOPIC 15: INTRODUCTION TO PROBABILITY
  // ==========================================
  'jhs1-math-t15-probability': {
    introduction: `Probability is the mathematical study of chance, uncertainty, and likelihood. In real life, weather forecasts predict the chance of rain, doctors assess medical risks, and games of ludo or football rely on odds. In the BECE exam, questions on coins, fair 6-sided dice, and drawing colored marbles from a bag test your understanding of sample spaces and theoretical probability.`,
    objectives: [
      'Define probability and describe the probability scale from 0 (impossible) to 1 (certain).',
      'List the sample space for simple random experiments (coins, dice, colored cards).',
      'Calculate theoretical probability: P(E) = n(E) / n(S).',
      'Understand and apply complementary probability: P(not E) = 1 - P(E).',
    ],
    sections: [
      {
        title: '1. The Probability Scale',
        content: `Probability measures how likely an event is to happen:
• It is expressed as a proper fraction, decimal, or percentage between 0 and 1.
• P = 0: Impossible event (e.g. rolling a 7 on a standard 6-sided die).
• P = 1 (or 100%): Certain event (e.g. the sun rising in the east).
• P = 0.5 (or ½): Even chance (e.g. getting Heads when tossing a fair coin).
Rule: Probability can NEVER be negative, and can NEVER be greater than 1!`,
      },
      {
        title: '2. Sample Space and Theoretical Probability',
        content: `• Sample Space (S): The set of ALL possible outcomes of an experiment.
  - Tossing a coin: S = {Heads, Tails}, n(S) = 2.
  - Rolling a die: S = {1, 2, 3, 4, 5, 6}, n(S) = 6.
• Theoretical Probability Formula:
  P(Event E) = (Number of favorable outcomes) / (Total possible outcomes)
  P(E) = n(E) / n(S)`,
      },
      {
        title: '3. Complementary Events',
        content: `The probability that an event will NOT happen is called its complement (E'):
Formula:
P(Not E) = 1 - P(E)
Example: If the probability of passing a test is ⅘, the probability of failing is 1 - ⅘ = ⅕.
Sum of all probabilities in a sample space always equals 1: P(E) + P(E') = 1.`,
      },
    ],
    commonMistakes: [
      'Giving an answer greater than 1 (e.g. 5/3) or negative. Probability must be between 0 and 1.',
      'Leaving fractions unsimplified (e.g. leaving 2/6 instead of 1/3).',
      'Misidentifying the total sample space n(S).',
    ],
    beceExamTips: [
      'Always count the total number of items first to find n(S).',
      'Always simplify your final probability fraction to lowest terms.',
      'Remember prime numbers on a die are {2, 3, 5} (1 is NOT prime!).',
    ],
    summaryChecklist: [
      'Probability ranges from 0 (impossible) to 1 (certain).',
      'P(E) = favorable outcomes / total outcomes.',
      'P(not E) = 1 - P(E).',
      'Always simplify fractions to lowest terms.',
    ],
  },
};
