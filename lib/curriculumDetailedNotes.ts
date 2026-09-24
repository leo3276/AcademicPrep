import { DetailedNotes } from './types';

export const TOPIC_DETAILED_NOTES: Record<string, DetailedNotes> = {
  // ==========================================
  // JHS 1 - MATHEMATICS: TOPIC 1 - SETS
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
          'Finite Set: A set whose elements can be completely counted and listed. Example: Factors of 12 = {1, 2, 3, 4, 6, 12}. Its cardinality is n(F) = 6.',
          'Infinite Set: A set whose elements are limitless and continue indefinitely. Example: Set of natural counting numbers = {1, 2, 3, 4, 5, ...}.',
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
          'Total number of subsets formula: If a set has n elements, the total number of subsets is 2^n.',
          'Example: For set S = {a, b}, n = 2. Total subsets = 2² = 4. The subsets are: ∅, {a}, {b}, {a, b}.',
          'Proper subsets formula: Total proper subsets = 2^n - 1 (excluding the set itself).',
        ],
      },
      {
        title: '4. Operations on Sets: Union, Intersection, and Complement',
        content: `Set operations combine or modify sets in precise mathematical ways:
1. Intersection (A ∩ B): The set of elements that belong to BOTH set A and set B simultaneously.
2. Union (A ∪ B): The set of elements that belong to set A OR set B, or both. All elements are gathered together without repeating duplicates.
3. Complement of A (A\' or A^c): The set of all elements in the Universal Set (U) that do NOT belong to set A. Formula: A\' = U - A.
4. Disjoint Sets: Two sets are disjoint if they have no common elements, meaning A ∩ B = ∅.`,
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
• Region 1 (Left crescent): Elements belonging to set A ONLY = n(A) - n(A ∩ B).
• Region 2 (Center overlap): Elements belonging to BOTH A and B = n(A ∩ B).
• Region 3 (Right crescent): Elements belonging to set B ONLY = n(B) - n(A ∩ B).
• Region 4 (Outside circles, inside rectangle): Elements belonging to NEITHER A nor B.
Fundamental Equation:
Total n(U) = [n(A) - x] + x + [n(B) - x] + [Neither]
where x = n(A ∩ B).
Simplified formula: n(A ∪ B) = n(A) + n(B) - n(A ∩ B).`,
      },
    ],
    commonMistakes: [
      'Writing {∅} to represent an empty set. Writing {∅} means a set with one element (the symbol ∅). Write either ∅ or {}.',
      'Forgetting to subtract the intersection (both) from individual set totals when filling a Venn diagram. For example, if 20 students study French and 5 study both French and Twi, French ONLY is 20 - 5 = 15, not 20!',
      'Repeating elements in a set. Writing {1, 2, 2, 3} will lose marks in BECE; always write {1, 2, 3}.',
      'Confusing the symbols: ∪ (Union = unite all) vs ∩ (Intersection = common items).',
    ],
    beceExamTips: [
      'Always start by drawing the Venn diagram rectangle first and labeling it with n(U) in the top right corner.',
      'Always fill the center intersection region (both) first before filling the "only" regions.',
      'Double-check that all four regions inside the rectangle add up exactly to the Universal set n(U).',
      'State your algebraic equation clearly before solving for any unknown variable (such as x).',
    ],
    summaryChecklist: [
      'Set notation: A = {elements}, ∈ (element of), ∉ (not element of).',
      'Empty set: ∅ or {}. Number of subsets = 2^n.',
      'A ∩ B = elements in both A and B.',
      'A ∪ B = all elements in A or B without duplicates.',
      'A\' = elements in Universal set U that are not in A.',
      'Venn diagram: Only A = n(A) - intersection; Only B = n(B) - intersection.',
    ],
  },

  // ==========================================
  // JHS 1 - MATHEMATICS: TOPIC 2 - NUMBER BASES
  // ==========================================
  'jhs1-math-t2-bases': {
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
In Base 5 (Quinary): Digits used are 0, 1, 2, 3, 4.
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
4. Read the remainders from BOTTOM TO TOP (from the most significant bit to the least significant bit).`,
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
Formula:
(d_n × 2^n) + ... + (d_2 × 2²) + (d_1 × 2¹) + (d_0 × 2⁰)`,
        bulletPoints: [
          'Example: Convert 11011_two to Base 10:',
          'Positions from right: 0, 1, 2, 3, 4.',
          '= (1 × 2⁴) + (1 × 2³) + (0 × 2²) + (1 × 2¹) + (1 × 2⁰)',
          '= (1 × 16) + (1 × 8) + (0 × 4) + (1 × 2) + (1 × 1)',
          '= 16 + 8 + 0 + 2 + 1 = 27_ten.',
        ],
      },
      {
        title: '4. Binary Addition (Base 2 Arithmetic)',
        content: `Adding numbers in binary follows the same column addition principles as decimal addition, but regrouping occurs whenever the sum reaches 2.
Key Addition Rules:
• 0 + 0 = 0
• 0 + 1 = 1
• 1 + 0 = 1
• 1 + 1 = 10_two (write 0, carry over 1)
• 1 + 1 + 1 = 11_two (write 1, carry over 1)`,
      },
    ],
    commonMistakes: [
      'Reading remainders from top to bottom instead of bottom to top during repeated division.',
      'Writing the digit 2 or higher in a base 2 answer (e.g. 1 + 1 = 2). In Base 2, 1 + 1 = 10_two.',
      'Thinking that 2⁰ = 0. Remember: Any non-zero number raised to the power of 0 is 1 (2⁰ = 1).',
      'Forgetting to write the subscript "_two" or "_ten" in your final answer.',
    ],
    beceExamTips: [
      'Always verify your conversion by reversing the process: convert your answer back to the original base to confirm match.',
      'Write column place values (16, 8, 4, 2, 1) directly above the binary digits to avoid misaligning powers.',
      'When adding multiple 1s in a column, write out the carries neatly at the top of the next column.',
    ],
    summaryChecklist: [
      'Base n uses digits 0 to (n - 1). Base 2 uses only 0 and 1.',
      'To convert Base 10 to Base 2: Successive division by 2, read remainders from bottom to top.',
      'To convert Base 2 to Base 10: Expanded form using powers of 2 (2⁰=1, 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32).',
      'Binary addition: 1 + 1 = 10 (write 0, carry 1); 1 + 1 + 1 = 11 (write 1, carry 1).',
    ],
  },

  // ==========================================
  // JHS 1 - MATHEMATICS: TOPIC 3 - FRACTIONS
  // ==========================================
  'jhs1-math-t3-fractions': {
    introduction: `Fractions represent equal parts of a whole quantity or collection. Whether measuring ingredients in cooking, calculating percentages of profits in business, or measuring land, fractions and decimals are central to applied mathematics. In the BECE exam, questions on fractions test your mastery of equivalent forms, the order of mathematical operations (BODMAS/PEMDAS), and converting fluidly between fractions, decimals, and percentages.`,
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
Conversion Formula (Mixed to Improper):
a (b/c) = (a × c + b) / c. Example: 3 ⅖ = (3 × 5 + 2) / 5 = 17/5.`,
      },
      {
        title: '2. Addition and Subtraction of Fractions',
        content: `Rule: Fractions can ONLY be added or subtracted directly if they have the same denominator (like denominators).
If denominators are different (unlike denominators):
1. Find the Lowest Common Multiple (LCM) of all denominators.
2. Convert each fraction into an equivalent fraction with the LCM as its denominator.
3. Add or subtract the numerators and keep the common denominator.
4. Reduce the final answer to its simplest form or express as a mixed fraction.`,
      },
      {
        title: '3. Multiplication and Division of Fractions',
        content: `• Multiplication: Multiply numerators together and denominators together. Cancel common factors between numerators and denominators BEFORE multiplying to simplify calculations.
Formula: (a/b) × (c/d) = (a × c) / (b × d).
• Division: Dividing by a fraction is the same as multiplying by its reciprocal (inverted fraction).
Formula: (a/b) ÷ (c/d) = (a/b) × (d/c) = (a × d) / (b × c).`,
      },
      {
        title: '4. The Order of Operations: BODMAS',
        content: `When a question contains multiple operations, you must follow the strict hierarchy of BODMAS:
B — Brackets first (solve everything inside innermost brackets).
O — Of (means multiplication, but evaluated immediately after brackets).
D — Division.
M — Multiplication.
A — Addition.
S — Subtraction.
Note: Division and Multiplication have equal priority (work left to right); Addition and Subtraction have equal priority (work left to right).`,
      },
      {
        title: '5. Fractions, Decimals, and Percentages Triad',
        content: `• Fraction to Percentage: Multiply by 100%. Example: ⅗ × 100% = 60%.
• Percentage to Fraction: Write over 100 and simplify. Example: 45% = 45/100 = 9/20.
• Fraction to Decimal: Divide numerator by denominator. Example: ⅜ = 3 ÷ 8 = 0.375.
• Decimal to Percentage: Multiply by 100 (shift decimal point two places right). Example: 0.085 × 100 = 8.5%.`,
      },
    ],
    commonMistakes: [
      'Adding denominators together: e.g. 1/3 + 1/4 = 2/7. This is completely false! You must find the LCM (12). Correct: 4/12 + 3/12 = 7/12.',
      'Forgetting to invert the second fraction when dividing: (2/5) ÷ (3/4) becomes (2/5) × (4/3), not (2/5) × (3/4).',
      'Ignoring BODMAS order and performing addition before division or multiplication.',
      'Leaving improper fractions unsimplified in final answers.',
    ],
    beceExamTips: [
      'Convert all mixed numbers into improper fractions before performing multiplication or division.',
      'Cancel down common factors as early as possible to keep numbers small and manageable.',
      'Always present your final answer in lowest terms (e.g. 6/8 must be simplified to 3/4).',
    ],
    summaryChecklist: [
      'Mixed to improper: a b/c = (ac + b)/c.',
      'Add/Subtract: find LCM of denominators first.',
      'Multiply: multiply numerators and denominators (cancel first).',
      'Divide: invert second fraction and multiply (reciprocal).',
      'Follow BODMAS order strictly.',
    ],
  },

  // ==========================================
  // JHS 1 - MATHEMATICS: TOPIC 4 - ALGEBRA
  // ==========================================
  'jhs1-math-t4-algebra': {
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
        content: `An algebraic term can be a number, a variable, or numbers and variables multiplied together.
In the term 7x²:
• 7 is the Coefficient (the numerical factor in front of the variable).
• x is the Variable (the unknown letter).
• 2 is the Power / Index (exponent).
In the expression 4x - 9:
• 4x is an algebraic term.
• -9 is a Constant term (a fixed number with no variable).`,
      },
      {
        title: '2. Like Terms vs Unlike Terms',
        content: `• Like Terms: Terms that have the exact same variables raised to the exact same powers. Their numerical coefficients may differ.
Examples of Like Terms: (3x and 5x), (7ab and -2ab), (4y² and 9y²).
Rule: ONLY like terms can be added or subtracted together!
• Unlike Terms: Terms that have different variables or different powers of the same variable.
Examples of Unlike Terms: (3x and 3y), (5a and 5a²), (4xy and 4x).
Rule: Unlike terms CANNOT be merged into a single term! (e.g. 3x + 2y remains 3x + 2y; it does NOT equal 5xy).`,
      },
      {
        title: '3. Expanding Single Brackets (Distributive Law)',
        content: `The distributive law states that every term inside the bracket must be multiplied by the term outside the bracket:
Formula: a(b + c) = ab + ac and a(b - c) = ab - ac.
Watch the signs carefully when the term outside is negative:
Formula: -a(b - c) = -ab + ac (because negative times negative equals positive).
Example: -3(4x - 5) = (-3 × 4x) - (-3 × 5) = -12x + 15.`,
      },
      {
        title: '4. Substitution and Evaluation',
        content: `Substitution means replacing algebraic letters with specific numerical values, then calculating the numerical answer using standard arithmetic.
Golden Rule for Negative Values: Always place negative numbers in brackets when substituting!
If x = -3, then:
• 2x = 2(-3) = -6
• x² = (-3)² = (-3) × (-3) = +9 (positive!)
• -x² = -((-3)²) = -(9) = -9`,
      },
    ],
    commonMistakes: [
      'Combining unlike terms: Writing 5x + 3y = 8xy. (This is a major error in BECE!).',
      'Sign errors during expansion: Writing -(x - 4) as -x - 4 instead of -x + 4.',
      'Squaring negative numbers without brackets: Writing -3² = 9 instead of (-3)² = 9.',
      'Treating x as 0 instead of 1x. The coefficient of x is always 1.',
    ],
    beceExamTips: [
      'Underline or highlight like terms with their preceding signs before grouping them together.',
      'Always expand brackets first before attempting to collect like terms.',
      'When substituting negative numbers, write them with parentheses to prevent sign confusion.',
    ],
    summaryChecklist: [
      'Coefficient: the number before a letter (in -5y, coefficient is -5).',
      'Only like terms can be combined by addition or subtraction.',
      'Distributive Law: a(b + c) = ab + ac.',
      'Negative outside bracket reverses all signs inside: -(a - b) = -a + b.',
      'Substitute values inside brackets: x = -2 => x² = (-2)² = 4.',
    ],
  },

  // ==========================================
  // JHS 1 - MATHEMATICS: TOPIC 5 - LINEAR EQUATIONS
  // ==========================================
  'jhs1-math-t5-linearequations': {
    introduction: `A linear equation is a mathematical statement asserting that two expressions are equal, containing one unknown variable whose highest exponent is 1. Think of an equation as a two-pan balance scale: as long as you perform the identical operation to both sides, the scale remains perfectly balanced. Solving linear equations is one of the most critical exam topics in BECE, appearing both as direct equations and as applied word problems.`,
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
        content: `Whatever operation you perform on the left-hand side (LHS) of an equation, you MUST perform the exact same operation on the right-hand side (RHS).
• If you add a number to LHS, add the same number to RHS.
• If you subtract from LHS, subtract from RHS.
• If you multiply LHS by a number, multiply every term on RHS by the same number.
• If you divide LHS, divide RHS by the same non-zero number.`,
      },
      {
        title: '2. The Transposition Method (Shortcut for Moving Terms)',
        content: `When a term moves across the equals sign (=) from one side to the other, its mathematical operation reverses:
• Addition (+) becomes Subtraction (-)
• Subtraction (-) becomes Addition (+)
• Multiplication (×) becomes Division (÷)
• Division (÷) becomes Multiplication (×)
Example:
3x + 7 = 22
Move +7 across to become -7:
3x = 22 - 7
3x = 15
Divide both sides by 3:
x = 15 / 3 => x = 5.`,
      },
      {
        title: '3. Equations Involving Brackets',
        content: `Step-by-step strategy for equations with brackets:
1. Expand all brackets completely using the distributive law.
2. Collect like terms on each side of the equation.
3. Group all terms containing the variable on one side (usually the left side).
4. Group all constant numbers on the opposite side (right side).
5. Simplify both sides and divide by the coefficient of the variable.`,
      },
      {
        title: '4. Equations Involving Fractions',
        content: `Fractions can look intimidating, but they can be completely eliminated in one single step!
Method:
1. Identify all denominators in the equation.
2. Find the Lowest Common Multiple (LCM) of all denominators.
3. Multiply EVERY single term in the equation (both sides) by this LCM.
4. The denominators will cancel out completely, leaving a simple linear equation with whole numbers.`,
      },
    ],
    commonMistakes: [
      'Moving a term across the equals sign without changing its sign (e.g. 2x + 5 = 11 => 2x = 11 + 5).',
      'Multiplying only the fractional terms by the LCM and forgetting to multiply whole numbers or constants.',
      'Dividing by a negative coefficient and forgetting that the sign of the answer changes.',
      'Failing to verify the solution by substituting it back into the original equation.',
    ],
    beceExamTips: [
      'Always verify your answer: plug the value you found back into the original equation to see if LHS equals RHS.',
      'Keep your equals signs neatly aligned in a vertical column to avoid careless calculation errors.',
      'If an equation has fractions with binomial numerators, put brackets around the numerators first before multiplying by LCM.',
    ],
    summaryChecklist: [
      'Balance principle: whatever you do to LHS, do to RHS.',
      'Transposition: + changes to -, - changes to +, × changes to ÷.',
      'Clear fractions by multiplying EVERY term by the LCM of all denominators.',
      'Always substitute the final answer back to verify.',
    ],
  },

  // ==========================================
  // JHS 1 - MATHEMATICS: TOPIC 6 - GEOMETRY & ANGLES
  // ==========================================
  'jhs1-math-t6-geometry': {
    introduction: `Geometry is the study of shapes, sizes, positions, and angles in space. From ancient African architectural wonders like the Great Mosque of Larabanga and the castles along the Ghanaian coast to modern road networks and civil engineering, geometric laws govern spatial design. In JHS 1 Mathematics, students master the fundamental properties of lines, angle classifications, parallel lines cut by transversals, and polygon angle sums.`,
    objectives: [
      'Classify angles: acute, right, obtuse, straight, reflex, and perigon (complete revolution).',
      'Calculate complementary (90°) and supplementary (180°) angles.',
      'Identify vertically opposite angles and angles at a point.',
      'Identify alternate angles, corresponding angles, and co-interior angles on parallel lines.',
      'Calculate unknown angles in triangles and use the polygon angle sum formula: (n - 2) × 180°.',
    ],
    sections: [
      {
        title: '1. Classification of Angles',
        content: `Angles are measured in degrees (°):
• Acute Angle: Greater than 0° but less than 90°.
• Right Angle: Exactly equal to 90° (marked with a square box).
• Obtuse Angle: Greater than 90° but less than 180°.
• Straight Angle: Exactly equal to 180° (a straight line).
• Reflex Angle: Greater than 180° but less than 360°.
• Complete Revolution: Exactly 360° (full circle).`,
      },
      {
        title: '2. Angle Relationships on Straight Lines',
        content: `Fundamental geometric theorems:
• Angles on a straight line add up to 180° (Supplementary angles).
  If angles a, b, and c lie on a straight line: a + b + c = 180°.
• Complementary Angles: Two angles whose sum is 90° (e.g. 35° and 55°).
• Angles at a Point: Angles around a point add up to 360°.
• Vertically Opposite Angles: When two straight lines intersect, the opposite angles formed are strictly equal.`,
      },
      {
        title: '3. Parallel Lines Cut by a Transversal',
        content: `A transversal is a straight line that crosses two or more parallel lines. Parallel lines are indicated with arrowheads (> or >>).
Three critical angle pairs are created:
1. Alternate Angles (Z-angles): Lie on opposite sides of the transversal between the parallel lines. They form a 'Z' shape and are EQUAL.
2. Corresponding Angles (F-angles): Lie in the same relative position at each intersection. They form an 'F' shape and are EQUAL.
3. Co-Interior Angles (C-angles): Lie on the same side of the transversal between the parallel lines. They form a 'C' or 'U' shape and ADD UP TO 180° (supplementary).`,
      },
      {
        title: '4. Angles in Triangles and Polygons',
        content: `• Sum of interior angles of any triangle = 180°.
• Exterior angle of a triangle equals the sum of the two opposite interior angles.
• Equilateral Triangle: All 3 sides equal, all 3 angles equal to 60°.
• Isosceles Triangle: 2 sides equal, 2 base angles equal.
• Sum of interior angles of an n-sided polygon:
  Formula: S = (n - 2) × 180°
  For a quadrilateral (4 sides): (4 - 2) × 180° = 360°.
  For a pentagon (5 sides): (5 - 2) × 180° = 540°.
  For a hexagon (6 sides): (6 - 2) × 180° = 720°.
• Sum of exterior angles of ANY convex polygon = 360°.`,
      },
    ],
    commonMistakes: [
      'Assuming lines are parallel just because they look parallel. In BECE geometry, lines are only parallel if arrows are drawn on them or stated in the question.',
      'Confusing alternate angles (which are EQUAL) with co-interior angles (which add up to 180°).',
      'Forgetting that the exterior angle theorem applies to an extended straight line, not an arbitrary line.',
      'Misidentifying the base angles of an isosceles triangle.',
    ],
    beceExamTips: [
      'Always state your geometric reason in parentheses after calculating an angle (e.g., "angles on a straight line", "alternate angles"). WAEC awards method marks for reasons!',
      'Look for the letters: Z for Alternate, F for Corresponding, C for Co-interior.',
      'Mark equal angles with matching arcs or letters on your question paper diagram.',
    ],
    summaryChecklist: [
      'Angles on straight line = 180°. Angles at a point = 360°.',
      'Vertically opposite angles are equal.',
      'Parallel lines: Alternate (Z) = equal; Corresponding (F) = equal; Co-interior (C) = 180°.',
      'Triangle angle sum = 180°.',
      'Polygon interior angle sum = (n - 2) × 180°.',
    ],
  },

  // ==========================================
  // JHS 1 - MATHEMATICS: TOPIC 7 - RATIOS & PROPORTION
  // ==========================================
  'jhs1-math-t7-ratios': {
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
Notation: The ratio of quantity a to quantity b is written as a : b or a/b.
Important Rules:
1. Units must be identical before forming a ratio! For example, comparing 50 pesewas to 2 Cedis: First convert 2 Cedis to 200 pesewas. Ratio is 50 : 200 = 1 : 4.
2. A ratio has NO units. It is a pure dimensionless number.
3. Order matters: The ratio 3 : 5 is completely different from 5 : 3.`,
      },
      {
        title: '2. Simplifying Ratios',
        content: `To simplify a ratio to lowest terms:
• Divide both terms by their Highest Common Factor (HCF).
• If the ratio contains fractions, multiply every term by the LCM of their denominators.
  Example: Simplify ⅔ : ¾. LCM of 3 and 4 is 12. Multiply both: (12 × ⅔) : (12 × ¾) = 8 : 9.
• If the ratio contains decimals, multiply by 10, 100, or 1000 to eliminate decimals, then reduce.`,
      },
      {
        title: '3. Sharing a Quantity in a Given Ratio',
        content: `Standard 3-Step Method for Sharing:
Step 1: Calculate the Total Number of Ratio Parts by adding the ratio terms together.
Step 2: Find the value of ONE part by dividing the total quantity by the total parts:
Value of 1 part = Total Quantity / Total Parts.
Step 3: Multiply the value of 1 part by each person's ratio term to determine their individual share.
Verification: The sum of all individual shares must equal the original total quantity.`,
      },
      {
        title: '4. Direct vs Inverse Proportion',
        content: `• Direct Proportion: Two quantities are in direct proportion if an increase in one leads to a proportional increase in the other.
  Example: The cost of exercise books. If 5 books cost GHS 20, then 10 books cost GHS 40.
  Unitary Method: Find the cost of 1 item first, then multiply by desired quantity.
• Inverse (Indirect) Proportion: Two quantities are in inverse proportion if an increase in one leads to a proportional DECREASE in the other.
  Example: Workers building a school wall. If 6 workers take 10 days, more workers will take FEWER days!
  Key Rule for Inverse: Product of the quantities remains constant (Workers × Days = Constant).`,
      },
    ],
    commonMistakes: [
      'Comparing quantities with different units without converting them first (e.g. 30 cm to 1.5 m written as 30 : 1.5 instead of 30 : 150 = 1 : 5).',
      'Applying direct proportion to inverse proportion problems (e.g. concluding that more workers will take more days!).',
      'Dividing by an individual ratio term instead of the total number of parts when sharing.',
    ],
    beceExamTips: [
      'Always add the ratio numbers together first to find total ratio parts.',
      'Check your work: Add the final calculated shares together. They MUST equal the original amount.',
      'In proportion word problems, ask yourself first: "If one increases, does the other increase or decrease?" This prevents mixing up direct and inverse proportion.',
    ],
    summaryChecklist: [
      'Ratio has no units. Quantities must have the same unit before comparison.',
      'Sharing in ratio: Total parts = a + b + c; Share = (ratio part / total parts) × Total.',
      'Direct proportion: more produces more (Unitary method: find for 1, then multiply).',
      'Inverse proportion: more produces less (Product remains constant: x₁y₁ = x₂y₂).',
    ],
  },

  // ==========================================
  // JHS 1 - MATHEMATICS: TOPIC 8 - STATISTICS & PROBABILITY
  // ==========================================
  'jhs1-math-t8-statistics': {
    introduction: `Statistics is the science of collecting, organizing, presenting, analyzing, and interpreting numerical data to make informed decisions. Governments use statistics for national census planning, schools use it to analyze student pass rates, and businesses use it to forecast sales. Probability is the mathematical measure of how likely an event is to happen. In the BECE exam, questions on frequency tables, mean, median, mode, and probability are guaranteed high-scoring areas if rules are applied correctly.`,
    objectives: [
      'Collect and organize raw numerical data into frequency tables using tally marks.',
      'Define, calculate, and interpret the three measures of central tendency: Mean, Median, and Mode.',
      'Identify the range of a distribution as a measure of spread.',
      'Interpret bar charts, pictograms, and calculate sector angles for pie charts.',
      'Calculate theoretical probability of simple single-stage events.',
    ],
    sections: [
      {
        title: '1. Data Collection & Frequency Tables',
        content: `When raw data is collected, it is often jumbled and difficult to understand.
We organize raw data into a Frequency Table using:
• Tally Marks: Recorded in bundles of 5 (four vertical bars crossed by a fifth diagonal bar).
• Frequency (f): The total number of times a particular score or data value occurs.
• Total Frequency (Σf or n): The sum of all frequencies, which equals the total number of observations.`,
      },
      {
        title: '2. Measures of Central Tendency (Averages)',
        content: `The three main statistical averages:
1. Mode: The score or value that appears most frequently (has the highest frequency).
   - A distribution can have one mode (unimodal), two modes (bimodal), or no mode.
2. Median: The middle value when all scores are arranged in order of size (ascending or descending).
   - If total items n is odd: Median is the exact middle score at position (n + 1)/2.
   - If total items n is even: There are two middle scores; median is their arithmetic mean.
3. Mean (Arithmetic Average): The sum of all values divided by the total number of values.
   - For raw data: Mean = (Sum of all scores) / (Total count) = Σx / n.
   - For frequency table: Mean = Σ(f × x) / Σf.`,
      },
      {
        title: '3. Range (Measure of Dispersion)',
        content: `The range measures how spread out the scores are.
Formula:
Range = Highest Value - Lowest Value.
A small range indicates that scores are closely clustered; a large range indicates wide variation.`,
      },
      {
        title: '4. Introduction to Probability',
        content: `Probability measures the chance of an event occurring on a numerical scale from 0 (impossible) to 1 (certain).
Formula:
P(Event) = (Number of favorable outcomes) / (Total number of possible outcomes)
• P = 0 means the event is impossible (e.g., rolling a 7 on a standard 6-sided die).
• P = 1 means the event is certain to happen (e.g., the sun rising in the east).
• Probability can be written as a proper fraction, a decimal (between 0 and 1), or a percentage (0% to 100%).
• Sum of all probabilities in a sample space always equals 1: P(Event) + P(Not Event) = 1.`,
      },
    ],
    commonMistakes: [
      'Finding the median without arranging the data in order of magnitude first! (This is the most common BECE mistake).',
      'Confusing the Mode with its frequency. If score 8 occurs 15 times, the Mode is 8, NOT 15!',
      'Dividing by the number of rows instead of the total frequency (Σf) when calculating the mean from a frequency table.',
      'Expressing probability as a number greater than 1 or as a negative number. Probability can NEVER be negative or greater than 1.',
    ],
    beceExamTips: [
      'Always count the total number of items after writing them in ascending order to make sure you didn\'t miss any numbers.',
      'In a frequency table, create an extra column for (f × x) and sum it carefully.',
      'Express probability fractions in their simplest form (e.g. 4/6 must be written as 2/3).',
    ],
    summaryChecklist: [
      'Mode: value with highest frequency.',
      'Median: middle value after sorting in ascending order.',
      'Mean: (Sum of all values) / (Total number of values) = Σfx / Σf.',
      'Range: Highest value - Lowest value.',
      'Probability P(E) = (Favorable outcomes) / (Total outcomes). Range: 0 ≤ P(E) ≤ 1.',
    ],
  },
};
