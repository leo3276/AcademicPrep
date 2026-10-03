// Ghanaian SHS 2 Elective Mathematics — Terms 1, 2 and 3
// WAEC / WASSCE and GES Senior High School Elective Mathematics syllabus
// Textbook-grade notes, worked examples with method marks, and WASSCE-standard quizzes

import { CurriculumTopic } from './types';

export const SHS2_ELECTIVE_MATH_TOPICS: CurriculumTopic[] = [
  // =========================================================================
  // TERM 1
  // =========================================================================
// =========================================================================
  // SHS 2 TERM 1 — ELECTIVE MATHEMATICS — BATCH EM-2A (#1 to #5)
  // =========================================================================
  {
    id: 'shs2-em-t1-binary-operations',
    subjectId: 'elective-maths',
    level: 'SHS 2',
    term: 1,
    orderIndex: 1,
    title: 'Binary Operations: Properties and Definability',
    description: 'Operation tables, closure (definability) on a set, and the four properties: commutative, associative, identity and inverse, plus solving a*b = k from a table.',
    isFreeTrial: true,
    isVip: false,
    keyNotes: `• A BINARY OPERATION on a set S is a rule that takes any two ordered members of S and returns exactly ONE member of S. Two tests: existence and closure.
• Closure (definability): the answer must stay inside S. "On the set {1, 2, 3, 4}, a*b = (a + b) mod 5 gives 4*4 = 8 mod 5 = 3, which is inside S, so it is closed."
• Ordinary addition is NOT closed on {1, 2, 3, 4, 5} because 5 + 3 = 8 falls outside the set; on the integers it is closed.
• A table (Cayley table) lists all results. Read a*b by going to row a, then column b; the entry is the answer.
• COMMUTATIVE: a*b = b*a for all a, b. In a table the entries mirror across the leading diagonal. "On mod 5, 2*3 = 6 mod 5 = 1 and 3*2 = 6 mod 5 = 1, so it commutes."
• ASSOCIATIVE: (a*b)*c = a*(b*c). You must test three elements; one failure kills the property.
• IDENTITY e: a*e = e*a = a for all a. It leaves everything unchanged. "For a*b = a + b - 3 the identity is 3 because a + 3 - 3 = a."
• INVERSE a^-1: a*a^-1 = a^-1*a = e. Only defined once the identity exists. "For a*b = a + b - 3, e = 3, so the inverse of 5 is 1 since 5 + 1 - 3 = 3."
• An element can have more than one inverse if the operation is not associative; in WASSCE sets the inverse is unique.
• To SOLVE a*b = k from a table: scan row b (or use commutativity) for the entry k and read the matching a.
• mod arithmetic is the standard exam carrier: "a*b = remainder when a x b is divided by 5" on {1, 2, 3, 4} is closed, commutative, associative, has identity 1 and inverses 1, 3, 2, 4 for 1, 2, 3, 4.
• Neat check: identity is unique; if a table has two rows that both leave the column unchanged, one of them is wrong.`,
    detailedNotes: {
      overview: 'In SHS 1 you calculated with numbers; in SHS 2 you study the RULES themselves. A binary operation is a self-contained system: a set together with one combining rule. WAEC Elective Mathematics Paper 2 loves this topic because a single small table can test closure, commutativity, associativity, identity and inverse in one question of eight to twelve marks. Master the definitions and the checking method and the marks are mechanical.',
      introduction: 'Think of a binary operation as a machine with two slots and one exit. You feed it any two allowed members, and it must spit out one allowed member and nothing else. Definability (closure) is the first demand; only after the machine never breaks do you ask whether order matters (commutative), grouping matters (associative), whether there is a do-nothing input (identity), and whether every input can be undone (inverse).',
      realWorldContext: 'A trotro stage from Kumasi to Ejisu charges a flat GH¢ 8 per passenger. If the conductor models fares by combining trips, adding two part-journeys must still give a valid single fare inside the allowed list; the moment a combination produces GH¢ 15 when only set fares exist, the operation is not closed. District assembly planning codes work the same way: a rule that maps two approved zone numbers to a zone must land on an approved zone.',
      objectives: [
        'Decide whether a given rule is a binary operation (closed and single-valued) on a stated set',
        'Read results from an operation table and build a table for a rule such as a*b = (a x b) mod 5',
        'Test an operation for the commutative and associative properties using specific and general values',
        'Find the identity element and the inverse of a given element for a defined operation',
        'Solve an equation of the form a*b = k using a table or an algebraic rule'
      ],
      sections: [
        {
          title: 'Definability and Closure on a Set',
          content: 'A rule * is a binary operation on a set S if combining ANY two members of S always produces one and only one member of S. Two things can fail: the result may leave the set, or the rule may be undefined for some pair (such as division by zero). To prove closure generally, argue with symbols: for a*b = (a x b) mod 5 on {1, 2, 3, 4}, the remainder after dividing by 5 is one of 0, 1, 2, 3, 4; because no member is 0 and 5 is prime, the product a x b is never a multiple of 5, so the remainder is never 0 and always lies in S. One counterexample such as 5 + 3 = 8 outside {1, 2, 3, 4, 5} is enough to reject closure.',
          bulletPoints: [
            'Closure means the output belongs to the SAME set that fed the rule.',
            'Division is not a binary operation on the integers because 1 / 2 is not an integer.',
            'A single counterexample disproves closure; proving it needs a general argument.',
            'Subtraction on the natural numbers fails closure because 2 - 5 is not a natural number.',
            'The modulo operation is the safest exam example of a closed rule on a small set.'
          ],
          keyTakeaway: 'A rule is a binary operation on S only if every allowed pair returns one allowed member of S.',
          realWorldExample: 'Combining two Ghana region codes to fetch a single dialling prefix must always return a valid prefix; a pair that returns 0 or a blank means the rule is not defined on that set.'
        },
        {
          title: 'Commutative and Associative Properties',
          content: 'Commutativity asks whether order matters: a*b = b*a for all members. Check it from a table by reflecting across the leading diagonal: if the entry above the diagonal equals the entry symmetrically below it, the table is commutative. Associativity asks whether grouping matters: (a*b)*c = a*(b*c). This one is not visible from symmetry; you must compute both brackets for a triple. For mod arithmetic a*b = (a x b) mod 5, associativity follows from ordinary multiplication being associative before the remainder is taken. Test at least one mixed triple such as a = 2, b = 3, c = 4 to show the working earns the method mark.',
          bulletPoints: [
            'Commutative: swap the two inputs and the result is unchanged.',
            'Associative: re-bracket three inputs and the result is unchanged.',
            'Table symmetry across the leading diagonal proves commutativity.',
            'Ordinary subtraction is commutative-failing (5 - 2 is not 2 - 5) and associative-failing.',
            'One failing triple is enough to deny associativity for the whole set.'
          ],
          keyTakeaway: 'Commutative is about order of two; associative is about grouping of three; test both with real values.',
          realWorldExample: 'Two shopkeepers at Makola agreeing a shared price is commutative, but applying a discount then a tax is not the same as tax then discount unless the rules are carefully paired.'
        },
        {
          title: 'Identity Element',
          content: 'The identity e leaves every element unchanged: a*e = e*a = a. In a table, the identity row is an exact copy of the header row and the identity column copies the header column. For a rule, solve a*e = a generally. For a*b = a + b - 3, set a + e - 3 = a, so e = 3. For a*b = (a x b) mod 5 on {1, 2, 3, 4}, we need (a x e) mod 5 = a for each a; e = 1 works because 1 x a = a and the remainder of a divided by 5 is a itself. A set can have at most one identity, and if no element copies the header, the system simply has no identity.',
          bulletPoints: [
            'Identity satisfies a*e = e*a = a for every a in the set.',
            'In a table, find the row identical to the top header; its label is the identity.',
            'For a + b + c style rules, solve a + e + c = a to get e = -c.',
            'The multiplicative identity is 1; the additive identity is 0.',
            'Modulo systems often use 1 as the identity because 1 x a leaves a unchanged.'
          ],
          keyTakeaway: 'The identity is the do-nothing element; find it by solving a*e = a or by matching the header row.',
          realWorldExample: 'Adding zero cedis to a market bill is an identity action; the total is unchanged, exactly as a*e = a.'
        },
        {
          title: 'Inverses and Solving a*b = k',
          content: 'Once an identity e exists, the inverse of a, written a^-1, is the element with a*a^-1 = a^-1*a = e. For a*b = a + b - 3 with e = 3, solve a + a^-1 - 3 = 3, so a^-1 = 6 - a; the inverse of 5 is 1 and the inverse of 2 is 4. For (a x b) mod 5 with e = 1, pair elements whose product leaves remainder 1: 2*3 = 6 mod 5 = 1, so 2 and 3 are mutual inverses, while 1*1 = 1 and 4*4 = 16 mod 5 = 1 make 1 and 4 self-inverses. To solve 2*x = 4 mod 5, multiply by the inverse of 2 (which is 3): x = 4*3 mod 5 = 12 mod 5 = 2. From a table, read the row and hunt the entry k.',
          bulletPoints: [
            'An inverse undoes an element back to the identity e.',
            'Always state the identity before naming any inverse.',
            'Self-inverse means a*a = e; e.g. 4*4 = 16 mod 5 = 1.',
            'Solve a*x = k by applying a^-1 to both sides, then simplify.',
            'From a table, find where the value k appears and read back the column label.'
          ],
          keyTakeaway: 'Inverses return everything to the identity; solve a*x = k by undoing a with its inverse.',
          realWorldExample: 'Refunding GH¢ 30 to cancel a GH¢ 30 deposit returns the balance to zero, mirroring how an inverse returns an element to the identity.'
        }
      ],
      commonMistakes: [
        'Claiming closure from one example: showing 2*3 = 1 in S and concluding the rule is closed; closure must hold for EVERY pair, so a general argument or full table is needed.',
        'Testing commutativity with the SAME element twice: writing 3*3 = 4 and declaring it commutative; you must compare two DIFFERENT elements, e.g. 2*3 with 3*2.',
        'Naming an inverse before finding the identity; for a*b = a + b - 3 the inverse of 5 is 1 because e = 3, not because it is the negative of 5.',
        'Confusing the remainder 0 with a member: on {1, 2, 3, 4} with mod 5, if a product gave remainder 0 the element 0 would be missing, so the rule would not be closed.',
        'Reading a table across the wrong axis: to get a*b use row a then column b, not row b then column a unless commutativity is already proven.'
      ],
      wassceExamTips: [
        'In Paper 2 a binary-operation question is usually worth 8 to 12 marks split into parts (a) complete the table, (b) state identity, (c) find inverses, (d) solve a*x = k; answer each part on a fresh line so the method marks are easy to award.',
        'Complete the WHOLE table first. Every correct cell is a method mark; leaving blanks because the rule looks tedious loses cheap marks.',
        'For identity and inverse, write the defining equation a*e = a and a*a^-1 = e explicitly; examiners award M1 for stating the condition even before the number appears.',
        'When asked to show associativity, compute both (a*b)*c and a*(b*c) for real numbers and end with the words therefore it is associative; the conclusion line is where the mark sits.',
        'Carry-through (afr): if an early table cell is wrong but every later answer follows correctly from it, you still collect method marks; never stop after one slip.'
      ],
      summaryChecklist: [
        'Can I decide whether a rule is closed on a given set and give a counterexample if it is not?',
        'Can I build and read a Cayley table for a rule such as a*b = (a x b) mod 5?',
        'Can I test an operation for commutative and associative properties with real values?',
        'Can I find the identity element and then the inverse of any element for a defined rule?',
        'Can I solve an equation a*x = k from a table or by applying an inverse?'
      ]
    },
    examples: [
      {
        id: 'ex-binary-operations-1',
        title: 'Full Property Test on a Modulo Table',
        problem: 'The operation * on S = {1, 2, 3, 4} is defined by a*b = (a x b) mod 5. Draw the table, then state the identity element and the inverse of every element.',
        stepByStepSolution: [
          'Step 1 (M1): Compute the products and reduce mod 5, e.g. 2*3 = 6 mod 5 = 1, 3*4 = 12 mod 5 = 2, 4*4 = 16 mod 5 = 1; fill all 16 cells.',
          'Step 2 (M1): Every entry is one of 1, 2, 3, 4, so no result leaves S; the operation is closed and is a valid binary operation on S.',
          'Step 3 (M1): The row for 1 repeats the header (1*2 = 2, 1*3 = 3, 1*4 = 4), so the identity element is e = 1.',
          'Step 4 (M1): Find elements whose product leaves remainder 1: 1*1 = 1, 2*3 = 1, 3*2 = 1, 4*4 = 1.',
          'Step 5 (A1): Hence the inverse of 1 is 1, the inverse of 2 is 3, the inverse of 3 is 2, and the inverse of 4 is 4.',
          'Step 6 (A1): The table is symmetric about the leading diagonal, so * is commutative, and e = 1 exists, confirming a clean abelian structure.'
        ],
        keyTakeaway: 'Build the whole table, read the identity from the header-copy row, then pair entries equal to that identity to get inverses.'
      },
      {
        id: 'ex-binary-operations-2',
        title: 'Identity and Inverse from an Algebraic Rule',
        problem: 'On the set of real numbers, define a*b = a + b - 3. Find the identity element and the inverse of 5, then solve 4*x = 6.',
        stepByStepSolution: [
          'Step 1 (M1): For the identity, require a*e = a, so a + e - 3 = a, giving e = 3.',
          'Step 2 (M1): Check e*a = 3 + a - 3 = a, so 3 is a two-sided identity.',
          'Step 3 (M1): For the inverse of 5, require 5*x = e = 3, so 5 + x - 3 = 3, giving x = 1.',
          'Step 4 (A1): The inverse of 5 is 1, and indeed 5*1 = 5 + 1 - 3 = 3 = e.',
          'Step 5 (M1): To solve 4*x = 6, apply the inverse of 4 (which is 6 - 4 = 2) on both sides, or read 4 + x - 3 = 6 directly.',
          'Step 6 (A1): 4 + x - 3 = 6 gives x = 5, and checking: 4*5 = 4 + 5 - 3 = 6.'
        ],
        keyTakeaway: 'Solve a*e = a for the identity, a*a^-1 = e for inverses, and a*x = k straight from the rule.'
      }
    ],
    quiz: {
      id: 'quiz-binary-operations',
      topicId: 'shs2-em-t1-binary-operations',
      title: 'Binary Operations Quiz',
      timeLimitMinutes: 12,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-em-binary-operations-1',
          quizId: 'quiz-binary-operations',
          questionText: 'On S = {1, 2, 3, 4}, a*b is defined as the remainder when a x b is divided by 5. What is the value of 3*4?',
          optionA: '1',
          optionB: '2',
          optionC: '3',
          optionD: '12',
          correctOption: 'B',
          subConcept: 'Reading a Defined Operation',
          explanation: '3 x 4 = 12, and 12 divided by 5 leaves remainder 2, so 3*4 = 2. Option D (12) is the raw product before the mod reduction; option A is the remainder for products such as 2*3.',
          remediationTip: 'Multiply first, then divide by 5 and keep only the remainder; the answer is always less than 5.'
        },
        {
          id: 'q-em-binary-operations-2',
          quizId: 'quiz-binary-operations',
          questionText: 'For the operation a*b = a + b - 3 on the real numbers, which element is the identity?',
          optionA: '0',
          optionB: '1',
          optionC: '3',
          optionD: '6',
          correctOption: 'C',
          subConcept: 'Identity Element',
          explanation: 'Set a*e = a: a + e - 3 = a gives e = 3. Option A (0) is the additive identity for ordinary addition, but here the -3 in the rule shifts it to 3.',
          remediationTip: 'Always solve a*e = a for the actual rule; do not assume the identity is 0 or 1.'
        },
        {
          id: 'q-em-binary-operations-3',
          quizId: 'quiz-binary-operations',
          questionText: 'On the set of natural numbers, which operation is NOT closed?',
          optionA: 'multiplication',
          optionB: 'addition',
          optionC: 'raising to a whole-number power',
          optionD: 'subtraction',
          correctOption: 'D',
          subConcept: 'Closure (Definability)',
          explanation: 'Subtraction fails because 2 - 5 = -3, which is not a natural number. Addition, multiplication and whole-number powers of natural numbers always stay natural, so those three are closed.',
          remediationTip: 'Try the smallest-first subtraction like 2 - 5; if the result leaves the set, closure is broken.'
        },
        {
          id: 'q-em-binary-operations-4',
          quizId: 'quiz-binary-operations',
          questionText: 'For a*b = a + b - 3 with identity 3, what is the inverse of 5?',
          optionA: '1',
          optionB: '-5',
          optionC: '-2',
          optionD: '6',
          correctOption: 'A',
          subConcept: 'Inverse Element',
          explanation: 'Require 5*x = 3: 5 + x - 3 = 3 gives x = 1. Option C (-2) is the ordinary negative, but the inverse here undoes back to the identity 3, not to 0.',
          remediationTip: 'Solve a*x = e with the identity e on the right, never 0 unless the identity really is 0.'
        },
        {
          id: 'q-em-binary-operations-5',
          quizId: 'quiz-binary-operations',
          questionText: 'An operation * on a set has the property a*b = b*a for every pair. Which name fits?',
          optionA: 'associative',
          optionB: 'distributive',
          optionC: 'idempotent',
          optionD: 'commutative',
          correctOption: 'D',
          subConcept: 'Commutative Property',
          explanation: 'a*b = b*a for all pairs is exactly the commutative law. Associative re-groups three elements, distributive links two different operations, and idempotent means a*a = a.',
          remediationTip: 'Commutative always compares two swapped inputs of the SAME operation.'
        }
      ]
    }
  },
  {
    id: 'shs2-em-t1-polynomial-theorems',
    subjectId: 'elective-maths',
    level: 'SHS 2',
    term: 1,
    orderIndex: 2,
    title: 'Polynomials: Remainder and Factor Theorems',
    description: 'Polynomial division, the remainder theorem, the factor theorem, solving cubic equations by factorisation, repeated factors and finding unknown constants.',
    isFreeTrial: false,
    isVip: false,
    keyNotes: `• A polynomial in x has terms a_n x^n + ... + a_1 x + a_0 with whole-number powers only; its degree is the highest power.
• Division by a linear bracket (x - c) gives f(x) = (x - c) q(x) + R, where R is the remainder (a constant).
• REMAINDER THEOREM: dividing f(x) by (x - c) leaves remainder f(c). "For f(x) = x^3 - 2x^2 + 3x - 5 divided by (x - 2), R = f(2) = 8 - 8 + 6 - 5 = 1."
• FACTOR THEOREM: (x - c) is a factor of f(x) if and only if f(c) = 0. A factor leaves zero remainder.
• To factor a cubic: find ONE root c by trial among factors of the constant term, then divide to get a quadratic and factor that.
• "Solve 2x^3 + x^2 - 5x + 2 = 0. Try x = 1: 2 + 1 - 5 + 2 = 0, so (x - 1) is a factor. Divide to get 2x^2 + 3x - 2 = (2x - 1)(x + 2). Roots are 1, one-half and -2."
• Trial roots come from the divisors of the constant term over the divisors of the leading coefficient; test +1, -1, +2, -2 first.
• A REPEATED factor means (x - c)^2 divides f(x); then f(c) = 0 AND the quotient still has (x - c) as a factor.
• To find unknown constants, set up two remainder equations: "if f(x) = 2x^3 - 3x^2 + ax + b leaves 5 when divided by (x - 1) and -34 when divided by (x + 2), then a + b = 6 and -2a + b = -6, giving a = 4, b = 2."
• Synthetic division shortens the work: bring the leading coefficient down, multiply by c, add, repeat; the last number is the remainder.
• Long division is required when the divisor is quadratic; match the leading term, subtract, bring down, repeat until the remainder degree is lower.
• Factorising fully means every bracket is linear; never stop after pulling out only one factor.`,
    detailedNotes: {
      overview: 'The remainder and factor theorems turn the heavy business of dividing polynomials into quick substitution. WAEC Paper 2 asks you to find a remainder, prove a bracket is a factor, solve a cubic, or hunt for an unknown constant hidden inside a polynomial. Every one of these is one substitution f(c) away. This topic rewards neat bookkeeping: signs, brackets and the zero-product conclusion at the end.',
      introduction: 'A polynomial is a machine fed with x. The remainder theorem says the leftover after dividing by (x - c) is just the value the machine gives at x = c, with no division shown. The factor theorem is the special case: if the machine outputs exactly zero at c, then (x - c) divides it perfectly. Those two ideas unlock cubic equations and unknown coefficients.',
      realWorldContext: 'A cocoa trader models profit P(t), in cedis GH¢, as a cubic in months t. Knowing the profit is zero at certain months means those (t - month) brackets are factors, so she can forecast break-even points without long division. Likewise, when a district assembly checks whether a cost curve crosses budget at month 1, they evaluate P(1) which is exactly the remainder when dividing by (t - 1).',
      objectives: [
        'Divide a polynomial by a linear bracket using long or synthetic division and state the remainder',
        'Apply the remainder theorem to find the remainder without full division',
        'Apply the factor theorem to show a given bracket is a factor of a polynomial',
        'Solve cubic equations of the form ax^3 + bx^2 + cx + d = 0 by factorisation',
        'Determine unknown coefficients of a polynomial from two given remainders'
      ],
      sections: [
        {
          title: 'Division of Polynomials',
          content: 'When f(x) is divided by a divisor d(x), the identity is f(x) = d(x) q(x) + R, where q(x) is the quotient and R the remainder, whose degree is lower than d(x). For a linear divisor (x - c), long division works: divide the current leading term by x, write that in q(x), multiply the whole bracket by it, subtract, and bring down. Synthetic division is faster: list coefficients, drop the leading one, repeatedly multiply by c and add. The final add is the remainder, and the numbers before it are the coefficients of q(x). Keep the sign of c straight: for divisor (x + 2) you use c = -2.',
          bulletPoints: [
            'The identity is f(x) = (x - c) q(x) + R; use it to check any division.',
            'Synthetic division uses c from the divisor (x - c), so (x + 2) means c = -2.',
            'The remainder from a linear divisor is a plain constant, never containing x.',
            'After dividing, q(x) has degree one less than f(x).',
            'Always write missing powers with coefficient zero before starting synthetic division.'
          ],
          keyTakeaway: 'Divide, or shortcut with substitution; the leftover R together with q(x) rebuilds the original polynomial.',
          realWorldExample: 'Splitting GH¢ 52 among a fixed number of stalls so none is wasted is like exact division; a leftover few cedis is the remainder.'
        },
        {
          title: 'The Remainder Theorem',
          content: 'Because f(x) = (x - c) q(x) + R, plugging in x = c kills the q(x) term and leaves f(c) = R. So the remainder when dividing by (x - c) is simply f(c). Example: for f(x) = x^3 - 2x^2 + 3x - 5 divided by (x - 2), remainder = f(2) = 8 - 8 + 6 - 5 = 1. Watch the sign in the divisor: dividing by (x + 3) means c = -3, so the remainder is f(-3). The theorem saves the whole long-division block, which is why WAEC phrases many items as find the remainder without asking you to divide.',
          bulletPoints: [
            'Remainder on dividing by (x - c) equals f(c).',
            'Divisor (x + k) means substitute x = -k, not x = k.',
            'The result can be negative; a negative remainder is perfectly correct.',
            'Use the theorem to check long division: they must give the same R.',
            'If the remainder is zero, the divisor is actually a factor.'
          ],
          keyTakeaway: 'To get a remainder from a linear divisor, just evaluate the polynomial at the value that makes the divisor zero.',
          realWorldExample: 'Estimating the cedis left after packing boxes by testing one quantity instead of repacking everything mirrors a single substitution.'
        },
        {
          title: 'The Factor Theorem and Cubic Equations',
          content: 'The factor theorem states (x - c) is a factor of f(x) if and only if f(c) = 0. This is the remainder theorem with R = 0. To solve a cubic, first guess a root from the divisors of the constant term, confirm f(c) = 0, then divide by (x - c) to obtain a quadratic, and factor or use the formula. For 2x^3 + x^2 - 5x + 2 = 0, try x = 1: 2 + 1 - 5 + 2 = 0, so (x - 1) is a factor; division gives 2x^2 + 3x - 2 = (2x - 1)(x + 2). Hence x = 1, x = one-half, x = -2. State the three roots; a cubic always has up to three real or repeated roots.',
          bulletPoints: [
            'f(c) = 0 if and only if (x - c) divides f(x) exactly.',
            'Trial roots are factors of the constant term over factors of the leading coefficient.',
            'After removing one factor, finish the job with the leftover quadratic.',
            'A repeated factor (x - c)^2 gives the same root twice.',
            'Write the solution set; do not stop at a single factor.'
          ],
          keyTakeaway: 'Find one root by trial, peel off (x - c), then solve the remaining quadratic for the other roots.',
          realWorldExample: 'Three months when a trading account balance is exactly GH¢ 0 are like the three roots of a cubic profit curve.'
        },
        {
          title: 'Finding Unknown Constants',
          content: 'When a polynomial contains unknown letters, two stated remainders give two equations. Suppose f(x) = 2x^3 - 3x^2 + ax + b leaves 5 on dividing by (x - 1) and -34 on dividing by (x + 2). Then f(1) = 2 - 3 + a + b = 5, so a + b = 6; and f(-2) = -16 - 12 - 2a + b = -34, so -2a + b = -6. Subtract the second from the first: (a + b) - (-2a + b) = 6 - (-6), giving 3a = 12, so a = 4 and then b = 2. Solve the pair like any simultaneous equations, then substitute back to verify both remainder conditions.',
          bulletPoints: [
            'Each remainder statement becomes one linear equation in the unknowns.',
            'Divisor (x - 1) means f(1); divisor (x + 2) means f(-2).',
            'Solve the resulting simultaneous equations by elimination or substitution.',
            'Check both remainders with the found values before finishing.',
            'The factor condition f(c) = 0 is just a remainder of zero.'
          ],
          keyTakeaway: 'Two remainders fix two unknowns: build the equations from f(c) and solve them together.',
          realWorldExample: 'Two known daily profits pin down two unknown cost rates, exactly as two remainders pin down two coefficients.'
        }
      ],
      commonMistakes: [
        'For the sign of c: writing f(2) when dividing by (x + 2); dividing by (x + 2) needs f(-2), so the remainder changes sign and value.',
        'Stopping after one factor: peeling (x - 1) off 2x^3 + x^2 - 5x + 2 but leaving 2x^2 + 3x - 2 unfactored instead of giving (2x - 1)(x + 2).',
        'Trying trial roots at random instead of the divisors of the constant term; for a constant 2, test +1, -1, +2, -2 and one-half only.',
        'Treating the factor theorem backwards and claiming f(c) = 5 makes (x - c) a factor; a factor needs f(c) = 0 exactly.',
        'Losing the leading coefficient when solving: concluding 2x - 1 = 0 gives x = 1 instead of x = one-half.'
      ],
      wassceExamTips: [
        'For show that (x - 1) is a factor, write the substitution line f(1) = 2 + 1 - 5 + 2 = 0 and end therefore (x - 1) is a factor; the = 0 statement is the method mark (M1), the conclusion is the answer mark (A1).',
        'In solve the cubic, award yourself structure: state the found factor, show the division result, then factor the quadratic and list all roots; each of these is a separate M1.',
        'When two remainders find unknowns, label the two equations clearly (1) and (2) and solve by elimination; examiners track method marks through the simultaneous block.',
        'For find the remainder when divided by (x + 3), do not divide: substitute x = -3 directly to save time for a later part of the same question.',
        'Carry-through allowance (afr): if your first root guess is wrong but the rest follows, you still earn method marks; move on rather than redoing the whole cubic.'
      ],
      summaryChecklist: [
        'Can I divide a polynomial by a linear bracket using synthetic or long division?',
        'Can I use the remainder theorem to state a remainder by direct substitution?',
        'Can I prove a bracket is a factor by showing the polynomial equals zero there?',
        'Can I solve a cubic equation fully by finding one root and factoring the rest?',
        'Can I determine two unknown coefficients from two given remainders?'
      ]
    },
    examples: [
      {
        id: 'ex-polynomial-theorems-1',
        title: 'Solving a Cubic by the Factor Theorem',
        problem: 'Solve the equation 2x^3 + x^2 - 5x + 2 = 0.',
        stepByStepSolution: [
          'Step 1 (M1): Try the factor x = 1 of the constant term 2: f(1) = 2 + 1 - 5 + 2 = 0, so by the factor theorem (x - 1) is a factor.',
          'Step 2 (M1): Divide 2x^3 + x^2 - 5x + 2 by (x - 1) using synthetic division (coefficients 2, 1, -5, 2 with c = 1); the quotient is 2x^2 + 3x - 2 with remainder 0.',
          'Step 3 (M1): Factor the quadratic: 2x^2 + 3x - 2 = (2x - 1)(x + 2), since the product of the outer and inner terms gives 4x - x = 3x.',
          'Step 4 (M1): Write the full factorisation: 2x^3 + x^2 - 5x + 2 = (x - 1)(2x - 1)(x + 2).',
          'Step 5 (A1): Set each bracket to zero: x - 1 = 0, 2x - 1 = 0, x + 2 = 0.',
          'Step 6 (A1): The roots are x = 1, x = one-half, x = -2.'
        ],
        keyTakeaway: 'Guess one root with the factor theorem, divide to a quadratic, factor fully, then read all three roots.'
      },
      {
        id: 'ex-polynomial-theorems-2',
        title: 'Two Remainders, Two Unknowns',
        problem: 'When f(x) = 2x^3 - 3x^2 + ax + b is divided by (x - 1) the remainder is 5, and when divided by (x + 2) the remainder is -34. Find a and b.',
        stepByStepSolution: [
          'Step 1 (M1): By the remainder theorem, f(1) = 5 gives 2 - 3 + a + b = 5, so a + b = 6. Call this equation (1).',
          'Step 2 (M1): f(-2) = -34 gives 2(-8) - 3(4) + a(-2) + b = -34, so -28 - 2a + b = -34, hence -2a + b = -6. Call this equation (2).',
          'Step 3 (M1): Subtract (2) from (1): (a + b) - (-2a + b) = 6 - (-6), so 3a = 12.',
          'Step 4 (A1): Therefore a = 4.',
          'Step 5 (M1): Substitute a = 4 into (1): 4 + b = 6, so b = 2.',
          'Step 6 (A1): Check f(1) = 2 - 3 + 4 + 2 = 5 and f(-2) = -16 - 12 - 8 + 2 = -34; both hold, so a = 4 and b = 2.'
        ],
        keyTakeaway: 'Turn each remainder statement into an equation by substitution, solve the pair, then verify both remainders.'
      }
    ],
    quiz: {
      id: 'quiz-polynomial-theorems',
      topicId: 'shs2-em-t1-polynomial-theorems',
      title: 'Remainder and Factor Theorems Quiz',
      timeLimitMinutes: 12,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-em-polynomial-theorems-1',
          quizId: 'quiz-polynomial-theorems',
          questionText: 'Find the remainder when x^3 - 2x^2 + 3x - 5 is divided by (x - 2).',
          optionA: '-1',
          optionB: '1',
          optionC: '5',
          optionD: '11',
          correctOption: 'B',
          subConcept: 'Remainder Theorem',
          explanation: 'By the remainder theorem the answer is f(2) = 8 - 8 + 6 - 5 = 1. Option A (-1) comes from a sign slip on the last term; option D (11) uses f(-2) instead of f(2).',
          remediationTip: 'Divisor (x - 2) means substitute x = +2; evaluate each power carefully before combining.'
        },
        {
          id: 'q-em-polynomial-theorems-2',
          quizId: 'quiz-polynomial-theorems',
          questionText: 'Which of the following is a factor of x^3 - 4x^2 + x + 6?',
          optionA: '(x - 1)',
          optionB: '(x - 4)',
          optionC: '(x + 2)',
          optionD: '(x - 3)',
          correctOption: 'D',
          subConcept: 'Factor Theorem',
          explanation: 'f(3) = 27 - 36 + 3 + 6 = 0, so (x - 3) is a factor. Testing the others: f(1) = 4, f(4) = 10, f(-2) = -20, none zero. In fact the polynomial factors fully as (x + 1)(x - 2)(x - 3).',
          remediationTip: 'Evaluate f(c) for each candidate; only the bracket giving exactly zero is a factor.'
        },
        {
          id: 'q-em-polynomial-theorems-3',
          quizId: 'quiz-polynomial-theorems',
          questionText: 'If (x - 3) is a factor of x^2 + kx - 12, find the value of k.',
          optionA: '-1',
          optionB: '1',
          optionC: '3',
          optionD: '4',
          correctOption: 'B',
          subConcept: 'Factor Theorem with Unknown',
          explanation: 'f(3) = 0 gives 9 + 3k - 12 = 0, so 3k - 3 = 0 and k = 1. Then x^2 + x - 12 = (x - 3)(x + 4), which checks. Option A (-1) is a sign slip when moving the constant.',
          remediationTip: 'Set f(3) = 0, keep the sign of 9 correct, and solve 3k = 3.'
        },
        {
          id: 'q-em-polynomial-theorems-4',
          quizId: 'quiz-polynomial-theorems',
          questionText: 'The roots of the equation x^3 - 6x^2 + 11x - 6 = 0 are',
          optionA: '1, 2 and 3',
          optionB: '-1, -2 and -3',
          optionC: '1, 2 and -3',
          optionD: '2, 3 and 6',
          correctOption: 'A',
          subConcept: 'Solving Cubic Equations',
          explanation: 'The polynomial is (x - 1)(x - 2)(x - 3), which expands to x^3 - 6x^2 + 11x - 6, so the roots are 1, 2, 3. Option B has the wrong signs; option D takes 6 from the constant term without testing.',
          remediationTip: 'Confirm each root by substitution; the constant -6 equals -(product of roots) for a monic cubic.'
        },
        {
          id: 'q-em-polynomial-theorems-5',
          quizId: 'quiz-polynomial-theorems',
          questionText: 'Evaluate the remainder when x^3 + 2x^2 - 5x + 6 is divided by (x + 3).',
          optionA: '-12',
          optionB: '0',
          optionC: '12',
          optionD: '30',
          correctOption: 'C',
          subConcept: 'Remainder Theorem Sign',
          explanation: 'Divisor (x + 3) means substitute x = -3: f(-3) = -27 + 18 + 15 + 6 = 12. Option A (-12) keeps one sign wrong; option B (0) wrongly assumes (x + 3) is a factor.',
          remediationTip: 'For (x + 3) use x = -3 and compute each power sign carefully: (-3)^3 = -27, (-3)^2 = +9.'
        }
      ]
    }
  },
  {
    id: 'shs2-em-t1-partial-fractions',
    subjectId: 'elective-maths',
    level: 'SHS 2',
    term: 1,
    orderIndex: 3,
    title: 'Partial Fractions with Linear Factors',
    description: 'Splitting a proper rational expression into simpler fractions over distinct linear factors, using cover-up and equating coefficients, and dividing first when the fraction is improper.',
    isFreeTrial: false,
    isVip: false,
    keyNotes: `• A rational expression is a fraction of polynomials P(x)/Q(x). It is PROPER when the degree of P is less than the degree of Q.
• Partial fractions reverse the combining of fractions: split into a sum of simpler fractions whose denominators are the factors of Q(x).
• For distinct linear factors: (px + q)/((x - a)(x - b)) = A/(x - a) + B/(x - b), with A and B constants to find.
• COVER-UP for A: in (5x - 4)/((x - 1)(x + 2)), cover (x - 1), then put x = 1 in the rest: A = (5 - 4)/(1 + 2) = 1/3.
• Cover (x + 2), put x = -2: B = (-10 - 4)/(-2 - 1) = -14/-3 = 14/3.
• Result: (5x - 4)/((x - 1)(x + 2)) = (1/3)/(x - 1) + (14/3)/(x + 2). Check by recombining: numerator = A(x + 2) + B(x - 1) = 5x - 4, correct.
• EQUATING COEFFICIENTS: after clearing denominators, match the x term and the constant term to get two linear equations in A and B.
• An IMPROPER fraction (top degree >= bottom degree) needs division first: (2x^2 + 5x + 1)/(x^2 - 1) = 2 + (5x + 3)/((x - 1)(x + 1)).
• Then split the proper remainder: (5x + 3)/((x - 1)(x + 1)) = 4/(x - 1) + 1/(x + 1), so the whole thing is 2 + 4/(x - 1) + 1/(x + 1).
• The number of constants equals the number of linear factors; three distinct factors give three unknowns A, B, C.
• Always VERIFY by adding the partial fractions back; the numerator you get must equal the original numerator.
• Cover-up only works cleanly for distinct linear factors; repeated or quadratic factors need the coefficient method.`,
    detailedNotes: {
      overview: 'Partial fractions take one complicated algebraic fraction and break it into a sum of simpler ones. WAEC Paper 2 tests this almost every year, usually as express in partial fractions for 6 to 8 marks, and it also appears as a preview step later in integration and series. With linear factors the whole method is short: write the split form, find the constants by cover-up or by matching coefficients, then check by recombining.',
      introduction: 'You already know how to add fractions by finding a common denominator. Partial fractions do the opposite: given the combined fraction, you recover the separate pieces. The denominator tells you how many pieces and what their bottom lines look like. For a product of different linear brackets, each piece keeps one bracket and carries a constant on top.',
      realWorldContext: 'Two market women in Tamale share a total of GH¢ (5x - 4) across two price tiers whose denominators are (x - 1) and (x + 2); splitting the total into two constant shares per tier is exactly partial fractions. Similarly, dividing one bulk utility bill across two flat-rate cards needs the bill expressed as a sum over each card factor.',
      objectives: [
        'Distinguish proper from improper algebraic fractions and decide when to divide first',
        'Write the correct partial-fraction form for a denominator of distinct linear factors',
        'Find the constants using the cover-up method',
        'Find the constants by equating coefficients and solving simultaneous equations',
        'Verify a decomposition by recombining the partial fractions to the original expression'
      ],
      sections: [
        {
          title: 'Proper Fractions and the Split Form',
          content: 'A fraction P(x)/Q(x) is proper when deg P < deg Q. Only proper fractions go straight into partial fractions. Factorise the denominator completely; if it becomes a product of different linear brackets (x - a)(x - b)(x - c), the decomposition has one term per bracket: A/(x - a) + B/(x - b) + C/(x - c), where A, B, C are constants. Never attempt to split before the denominator is factorised; a quadratic that actually factors into linears must be broken down first, otherwise the answer shape is wrong and no marks follow.',
          bulletPoints: [
            'Proper means the top degree is strictly less than the bottom degree.',
            'The denominator must be factorised into linear brackets before splitting.',
            'Each distinct linear factor contributes one term with a constant numerator.',
            'The number of unknown constants equals the number of linear factors.',
            'If the top degree is not smaller, divide first (see the improper section).'
          ],
          keyTakeaway: 'Factor the bottom, then write one constant-over-bracket term for each linear factor.',
          realWorldExample: 'Splitting one shared bill into a fixed charge per person, one per card type, is the same as one constant per bracket.'
        },
        {
          title: 'The Cover-Up Method',
          content: 'For distinct linear factors, cover-up finds each constant instantly. To get A over (x - 1) in (5x - 4)/((x - 1)(x + 2)), mentally cover (x - 1) in the denominator, then substitute x = 1 (the value that makes the covered bracket zero) into everything else: A = (5(1) - 4)/(1 + 2) = 1/3. To get B, cover (x + 2) and substitute x = -2: B = (5(-2) - 4)/(-2 - 1) = -14/-3 = 14/3. The trick is that at x = 1, the B-term is multiplied by (x - 1) = 0 when you clear denominators, so only A survives.',
          bulletPoints: [
            'Cover the bracket whose constant you want, then substitute its zero.',
            'For (x - 1) substitute x = 1; for (x + 2) substitute x = -2.',
            'The other factors stay in the denominator after covering.',
            'A negative divided by a negative gives a positive constant, as in B = -14/-3.',
            'Cover-up works only when all factors are linear and different.'
          ],
          keyTakeaway: 'To find a constant, cover its bracket and substitute the value that zeroes that bracket.',
          realWorldExample: 'Cancelling one card to see what the other alone covers is like covering a factor to read off its share.'
        },
        {
          title: 'Equating Coefficients',
          content: 'Clear the denominators by multiplying both sides by the full denominator. For (5x - 4)/((x - 1)(x + 2)) = A/(x - 1) + B/(x + 2), multiply through: 5x - 4 = A(x + 2) + B(x - 1) = (A + B)x + (2A - B). Match coefficients: x terms give A + B = 5; constants give 2A - B = -4. Solve: adding the two equations gives 3A = 1, so A = 1/3 and then B = 14/3. This method always works, including cases cover-up cannot touch, and it is the safer route when the algebra is messy.',
          bulletPoints: [
            'Multiply every term by the whole denominator to clear fractions.',
            'Expand the right side and group like powers of x.',
            'Match the x coefficient and the constant coefficient to form equations.',
            'Solve the resulting simultaneous equations for A, B (and C).',
            'The matched values must reproduce the original numerator exactly.'
          ],
          keyTakeaway: 'Clear denominators, match the x term and constant term, and solve the pair for the constants.',
          realWorldExample: 'Balancing two known totals against two unknown unit prices is the same as matching coefficients.'
        },
        {
          title: 'Improper Fractions: Divide First',
          content: 'If the top degree equals or exceeds the bottom degree, partial fractions do not apply until you divide. For (2x^2 + 5x + 1)/(x^2 - 1): the leading terms give 2x^2 / x^2 = 2, and 2(x^2 - 1) = 2x^2 - 2, so the remainder is (2x^2 + 5x + 1) - (2x^2 - 2) = 5x + 3. Hence the fraction = 2 + (5x + 3)/(x^2 - 1). Now the leftover is proper, and with x^2 - 1 = (x - 1)(x + 1) we split (5x + 3)/((x - 1)(x + 1)): cover-up gives A = (5 + 3)/(1 + 1) = 4 and B = (-5 + 3)/(-1 - 1) = 1. So the answer is 2 + 4/(x - 1) + 1/(x + 1). Keep the polynomial part 2 in the final answer; dropping it is a common lost mark.',
          bulletPoints: [
            'Improper means top degree is greater than or equal to bottom degree.',
            'Divide to get a polynomial part plus a proper remainder fraction.',
            'Only the proper remainder is split into partial fractions.',
            'Factorise the divisor here as a difference of two squares: x^2 - 1 = (x - 1)(x + 1).',
            'The final answer keeps the polynomial part plus all partial fractions.'
          ],
          keyTakeaway: 'When the top is too big, divide first, then split only the proper remainder.',
          realWorldExample: 'Paying whole cedis first and splitting only the leftover coins is division with a proper remainder.'
        }
      ],
      commonMistakes: [
        'Trying to split an improper fraction directly: for (2x^2 + 5x + 1)/(x^2 - 1) writing only A/(x - 1) + B/(x + 1) misses the whole-number part 2; divide first.',
        'Forgetting to factorise the denominator: leaving x^2 - 1 unsplit when it is (x - 1)(x + 1) so no linear partial fractions are written.',
        'Cover-up sign error: for (x + 2) substituting x = +2 instead of x = -2, which flips the constant from 14/3 to a wrong value.',
        'Clearing denominators but not matching both the x term and the constant term, leaving one equation for two unknowns.',
        'Not verifying: claiming (5x - 4)/((x - 1)(x + 2)) = A/(x - 1) + B/(x + 2) without recombining to check A + B = 5 and 2A - B = -4.'
      ],
      wassceExamTips: [
        'For express ... in partial fractions, the first method mark (M1) is for writing the correct FORM with unknown constants; state A/(x - 1) + B/(x + 2) on its own line even before finding the numbers.',
        'Show the cleared-denominator identity 5x - 4 = A(x + 2) + B(x - 1); examiners award a mark for it, and it lets them follow either method.',
        'For an improper fraction, do the long division in a corner and write polynomial part + proper split; the whole-number part carries its own mark.',
        'Finish every answer by a quick recombination check; if the numerator matches, both answer marks (A1) are safe.',
        'Timing: a two-factor decomposition should take about 4 minutes; if stuck, switch from cover-up to equating coefficients rather than re-deriving.'
      ],
      summaryChecklist: [
        'Can I tell whether an algebraic fraction is proper or improper and divide first if needed?',
        'Can I write the correct partial-fraction form for a product of distinct linear factors?',
        'Can I find each constant using the cover-up method?',
        'Can I find the constants by equating coefficients and solving simultaneous equations?',
        'Can I verify my split by recombining the partial fractions to the original numerator?'
      ]
    },
    examples: [
      {
        id: 'ex-partial-fractions-1',
        title: 'Distinct Linear Factors by Cover-Up',
        problem: 'Express (5x - 4)/((x - 1)(x + 2)) in partial fractions.',
        stepByStepSolution: [
          'Step 1 (M1): The denominator is already a product of distinct linear factors, so write (5x - 4)/((x - 1)(x + 2)) = A/(x - 1) + B/(x + 2).',
          'Step 2 (M1): Find A by covering (x - 1) and substituting x = 1: A = (5(1) - 4)/(1 + 2) = 1/3.',
          'Step 3 (M1): Find B by covering (x + 2) and substituting x = -2: B = (5(-2) - 4)/(-2 - 1) = -14/-3 = 14/3.',
          'Step 4 (M1): Check by recombining: A(x + 2) + B(x - 1) = (A + B)x + (2A - B) = (1/3 + 14/3)x + (2/3 - 14/3) = 5x - 4, the original numerator.',
          'Step 5 (A1): State the result: (5x - 4)/((x - 1)(x + 2)) = 1/(3(x - 1)) + 14/(3(x + 2)).'
        ],
        keyTakeaway: 'Cover each linear bracket, substitute its zero for a constant, then recombine to confirm.'
      },
      {
        id: 'ex-partial-fractions-2',
        title: 'Improper Fraction: Divide Then Split',
        problem: 'Express (2x^2 + 5x + 1)/(x^2 - 1) in partial fractions.',
        stepByStepSolution: [
          'Step 1 (M1): The top degree equals the bottom degree, so divide: (2x^2 + 5x + 1) / (x^2 - 1) = 2 with remainder (2x^2 + 5x + 1) - 2(x^2 - 1) = 5x + 3.',
          'Step 2 (M1): Rewrite as 2 + (5x + 3)/(x^2 - 1); now the fractional part is proper.',
          'Step 3 (M1): Factorise x^2 - 1 = (x - 1)(x + 1) and set (5x + 3)/((x - 1)(x + 1)) = A/(x - 1) + B/(x + 1).',
          'Step 4 (M1): Cover (x - 1), substitute x = 1: A = (5 + 3)/(1 + 1) = 8/2 = 4. Cover (x + 1), substitute x = -1: B = (-5 + 3)/(-1 - 1) = -2/-2 = 1.',
          'Step 5 (M1): Check: A(x + 1) + B(x - 1) = 4x + 4 + x - 1 = 5x + 3, matching the numerator.',
          'Step 6 (A1): Therefore (2x^2 + 5x + 1)/(x^2 - 1) = 2 + 4/(x - 1) + 1/(x + 1).'
        ],
        keyTakeaway: 'Divide an improper fraction first, then partial-fraction only the proper remainder and keep the polynomial part.'
      }
    ],
    quiz: {
      id: 'quiz-partial-fractions',
      topicId: 'shs2-em-t1-partial-fractions',
      title: 'Partial Fractions Quiz',
      timeLimitMinutes: 12,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-em-partial-fractions-1',
          quizId: 'quiz-partial-fractions',
          questionText: 'Express 7/((x - 2)(x + 5)) in the form A/(x - 2) + B/(x + 5). What are A and B?',
          optionA: 'A = 1, B = -1',
          optionB: 'A = -1, B = 1',
          optionC: 'A = 7, B = -7',
          optionD: 'A = 5, B = -2',
          correctOption: 'A',
          subConcept: 'Cover-Up Method',
          explanation: 'Cover (x - 2), put x = 2: A = 7/(2 + 5) = 1. Cover (x + 5), put x = -5: B = 7/(-5 - 2) = -1. Recombining gives (x + 5) - (x - 2) = 7, confirming it. Option B swaps the two constants.',
          remediationTip: 'For each bracket substitute its own zero into the OTHER bracket only.'
        },
        {
          id: 'q-em-partial-fractions-2',
          quizId: 'quiz-partial-fractions',
          questionText: 'In (2x + 7)/((x + 2)(x - 3)) = A/(x + 2) + B/(x - 3), find the value of A.',
          optionA: '3/5',
          optionB: '13/5',
          optionC: '2',
          optionD: '-3/5',
          correctOption: 'D',
          subConcept: 'Cover-Up Sign',
          explanation: 'Cover (x + 2), substitute x = -2: A = (2(-2) + 7)/(-2 - 3) = 3/-5 = -3/5. Option B (13/5) is actually the value of B; option A drops the negative from the denominator.',
          remediationTip: 'Keep the sign of the uncovered bracket at x = -2: the value is negative, so A is negative.'
        },
        {
          id: 'q-em-partial-fractions-3',
          quizId: 'quiz-partial-fractions',
          questionText: 'Which expression requires a division step BEFORE partial fractions can be applied?',
          optionA: '3/((x - 1)(x + 2))',
          optionB: '(5x - 4)/((x - 1)(x + 2))',
          optionC: '(2x^2 + 5x + 1)/(x^2 - 1)',
          optionD: '7/((x - 2)(x + 5))',
          correctOption: 'C',
          subConcept: 'Proper Versus Improper',
          explanation: 'In (C) the top degree (2) equals the bottom degree (2), so it is improper and must be divided first. In the others the top degree is lower than the bottom, so they are proper and split directly.',
          remediationTip: 'Compare highest powers: if the top power is not smaller than the bottom power, divide first.'
        },
        {
          id: 'q-em-partial-fractions-4',
          quizId: 'quiz-partial-fractions',
          questionText: 'Simplify the partial-fraction form of 3/((x - 1)(x + 2)); the value of the constant over (x - 1) is',
          optionA: '-1',
          optionB: '1',
          optionC: '3',
          optionD: '2',
          correctOption: 'B',
          subConcept: 'Cover-Up Method',
          explanation: 'Cover (x - 1), substitute x = 1: A = 3/(1 + 2) = 1. The constant over (x + 2) is B = 3/(-1 - 2) = -1. So the split is 1/(x - 1) - 1/(x + 2); recombining gives 3. Option C takes the numerator 3 without dividing by 3.',
          remediationTip: 'After covering, evaluate the remaining factor at x = 1; here 1 + 2 = 3, so 3/3 = 1.'
        },
        {
          id: 'q-em-partial-fractions-5',
          quizId: 'quiz-partial-fractions',
          questionText: 'In (7x - 1)/((x + 1)(x - 3)) = A/(x + 1) + B/(x - 3), find the value of B.',
          optionA: '2',
          optionB: '-5',
          optionC: '5',
          optionD: '7',
          correctOption: 'C',
          subConcept: 'Equating / Cover-Up',
          explanation: 'Cover (x - 3), substitute x = 3: B = (7(3) - 1)/(3 + 1) = 20/4 = 5. A = (7(-1) - 1)/(-1 - 3) = -8/-4 = 2. Recombining 2(x - 3) + 5(x + 1) = 7x - 1 confirms it. Option A is the value of A, not B.',
          remediationTip: 'Match the constant to the bracket it sits over; B belongs to (x - 3), so use x = 3.'
        }
      ]
    }
  },
  {
    id: 'shs2-em-t1-coordinate-geometry',
    subjectId: 'elective-maths',
    level: 'SHS 2',
    term: 1,
    orderIndex: 4,
    title: 'Coordinate Geometry: Distance, Midpoint and Lines',
    description: 'The distance formula, section and midpoint division, gradient, parallel and perpendicular conditions, three forms of a line equation, and intersection of two lines.',
    isFreeTrial: false,
    isVip: false,
    keyNotes: `• A point is (x, y). The distance between A(x1, y1) and B(x2, y2) is d = sqrt((x2 - x1)^2 + (y2 - y1)^2), from Pythagoras.
• "A(2, -3) and B(6, 3): d = sqrt(4^2 + 6^2) = sqrt(16 + 36) = sqrt(52) = 2 sqrt(13) = 7.21 to 3 significant figures."
• Midpoint of AB is ((x1 + x2)/2, (y1 + y2)/2). For A(2, -3), B(6, 3): midpoint = (4, 0).
• Section formula: a point dividing AB in ratio m:n is ((n x1 + m x2)/(m + n), (n y1 + m y2)/(m + n)); the midpoint is the case m:n = 1:1.
• Gradient (slope) m = (y2 - y1)/(x2 - x1). For A(2, -3), B(6, 3): m = (3 - (-3))/(6 - 2) = 6/4 = 3/2.
• Gradient is undefined for a VERTICAL line (x2 = x1) and zero for a HORIZONTAL line (y2 = y1).
• PARALLEL lines have EQUAL gradients: m1 = m2. PERPENDICULAR lines have m1 x m2 = -1.
• Equation forms: point-gradient y - y1 = m(x - x1); slope-intercept y = mx + c; general form ax + by + c = 0.
• "Line through (-1, 3) and (2, -3): m = (-3 - 3)/(2 - (-1)) = -6/3 = -2; y - 3 = -2(x + 1) gives y = -2x + 1."
• Check a point lies on a line by substituting; at x = 2, y = -2(2) + 1 = -3, so (2, -3) is on the line.
• To find where two lines MEET, solve their equations simultaneously; e.g. y = -2x + 1 and y = 3x - 5 give 5x = 6, so x = 6/5, y = -7/5.
• Verify an intersection in BOTH equations; x = 6/5 in y = -2x + 1 gives -12/5 + 5/5 = -7/5, correct.
• Keep signs of coordinates inside every formula; subtracting a negative, as y2 - (-3), is the usual source of error.`,
    detailedNotes: {
      overview: 'Coordinate geometry links algebra and shape. Every WASSCE Paper 2 question here is formula application plus careful arithmetic with signed numbers: distance, midpoint, gradient, the equation of a line, and the intersection of two lines. The marks are cheap if you write the formula, substitute neatly, and simplify without sign slips. Parallel and perpendicular gradient conditions and the section formula round out the topic.',
      introduction: 'Picture a grid over a map of Accra. Two landmarks are points; the road between them has a length (distance), a meeting halfway (midpoint), and a steepness (gradient). A line equation captures that road exactly, and two roads cross where their equations agree. Learn five formulas and two gradient rules and the whole topic follows.',
      realWorldContext: 'A surveyor plots two street lamps on the Achimota grid at A(2, -3) and B(6, 3) metres. The cable between them is 2 sqrt(13), about 7.21 m, the junction box sits at the midpoint (4, 0), and the slope of the cable is 3/2. A district assembly plan that runs a new service road parallel to an existing one simply reuses its gradient, and a drain cut at right angles uses the negative reciprocal gradient.',
      objectives: [
        'Calculate the distance between two points using the distance formula',
        'Find the midpoint and a point dividing a segment in a given ratio',
        'Compute the gradient of a line through two points and interpret zero and undefined gradients',
        'State the conditions for parallel and perpendicular lines in terms of gradients',
        'Find the equation of a line in a chosen form and the intersection of two lines'
      ],
      sections: [
        {
          title: 'Distance and Midpoint',
          content: 'The distance formula is Pythagoras on a grid: horizontal change (x2 - x1) and vertical change (y2 - y1) are the legs, and the segment is the hypotenuse. For A(2, -3) and B(6, 3), horizontal = 6 - 2 = 4, vertical = 3 - (-3) = 6, so d = sqrt(16 + 36) = sqrt(52) = 2 sqrt(13) exactly, about 7.21 to three significant figures. The midpoint averages the coordinates: ((2 + 6)/2, (-3 + 3)/2) = (4, 0). Always substitute negatives in brackets, because y2 - y1 with y1 = -3 becomes 3 - (-3) = 6, not 0.',
          bulletPoints: [
            'Distance = sqrt((x2 - x1)^2 + (y2 - y1)^2).',
            'The order of subtraction does not matter because each difference is squared.',
            'Midpoint = average of the x-values and average of the y-values.',
            'Give the exact surd 2 sqrt(13) and the decimal 7.21 as separate answers.',
            'Bracket negative coordinates before subtracting to avoid sign errors.'
          ],
          keyTakeaway: 'Distance squares the coordinate differences; the midpoint simply averages each pair of coordinates.',
          realWorldExample: 'Measuring a straight cable between two lamps, then hanging a junction box exactly halfway, uses distance and midpoint together.'
        },
        {
          title: 'Division in a Ratio and Gradient',
          content: 'A point P dividing AB in the ratio m:n (measured from A) has coordinates ((n x1 + m x2)/(m + n), (n y1 + m y2)/(m + n)). Notice the weights cross: the nearer endpoint gets the larger part. When m:n = 1:1 this reduces to the midpoint. Gradient measures steepness: m = (change in y)/(change in x) = (y2 - y1)/(x2 - x1). For A(2, -3), B(6, 3), m = 6/4 = 3/2, meaning the line rises 3 units for every 2 units across. A horizontal line has gradient 0; a vertical line has undefined gradient because x2 - x1 = 0.',
          bulletPoints: [
            'Section formula weights cross: coefficient n goes with the near point x1.',
            'Midpoint is just the section formula at ratio 1:1.',
            'Gradient m = (y2 - y1)/(x2 - x1); positive rises, negative falls.',
            'Horizontal line: m = 0. Vertical line: m is undefined.',
            'Never divide by zero; a zero denominator means a vertical line.'
          ],
          keyTakeaway: 'Ratio division weights the endpoints by the cross-multipliers; gradient is vertical change over horizontal change.',
          realWorldExample: 'Splitting a service trench so one crew digs twice as far as the other is division in the ratio 2:1.'
        },
        {
          title: 'Equations of a Line',
          content: 'Three interchangeable forms describe any line. Point-gradient: y - y1 = m(x - x1), best when you know a slope and one point. Slope-intercept: y = mx + c, best for reading gradient and y-intercept directly. General form: ax + by + c = 0. To find the line through (-1, 3) and (2, -3): first m = (-3 - 3)/(2 - (-1)) = -6/3 = -2, then y - 3 = -2(x + 1), which rearranges to y = -2x + 1. Check both points: at x = 2, y = -2(2) + 1 = -3; at x = -1, y = -2(-1) + 1 = 3. Both hold, so the equation is right.',
          bulletPoints: [
            'Point-gradient form needs m and one point; slope-intercept needs m and c.',
            'Rearrange any form into ax + by + c = 0 by moving all terms left.',
            'Always find the gradient first when only two points are given.',
            'Verify by substituting BOTH original points into the final equation.',
            'The y-intercept is the point where x = 0.'
          ],
          keyTakeaway: 'Find the gradient, plug into point-gradient form, then rearrange and verify with both points.',
          realWorldExample: 'A trotro fare that starts at a fixed base and adds a constant charge per kilometre is a straight line y = mx + c.'
        },
        {
          title: 'Parallel, Perpendicular and Intersection',
          content: 'Two lines are parallel exactly when their gradients are equal, m1 = m2, and they are different lines. They are perpendicular when m1 x m2 = -1, so one slope is the negative reciprocal of the other; a line of slope 2/3 is perpendicular to one of slope -3/2. To find where two lines meet, solve them together. For y = -2x + 1 and y = 3x - 5, set -2x + 1 = 3x - 5, giving 6 = 5x, so x = 6/5 and y = 3(6/5) - 5 = 18/5 - 25/5 = -7/5. The intersection point is (6/5, -7/5). Substitute it back into BOTH equations to be safe.',
          bulletPoints: [
            'Parallel means equal gradients, m1 = m2, with different intercepts.',
            'Perpendicular means m1 x m2 = -1 (negative reciprocal slopes).',
            'Intersection is found by solving the two line equations simultaneously.',
            'Equate the two y-expressions, solve for x, then get y from either line.',
            'Verify the intersection point satisfies both equations.'
          ],
          keyTakeaway: 'Equal slopes are parallel, negative-reciprocal slopes are perpendicular, and solving the pair gives the crossing point.',
          realWorldExample: 'Two straight roads crossing at a junction in Ho meet at one point that lies on both road equations.'
        }
      ],
      commonMistakes: [
        'Sign slip in distance/midpoint: writing 3 - 3 instead of 3 - (-3) when one point is (2, -3); the vertical change must be 6, giving 3 - (-3).',
        'Swapping gradient coordinates: using (x2 - x1)/(y2 - y1); the correct order for gradient is (y2 - y1)/(x2 - x1).',
        'Dividing by zero on a vertical line and reporting a huge gradient; when x2 = x1 the gradient is undefined, not infinite by substitution.',
        'Perpendicular condition error: using m2 = m1 instead of m2 = -1/m1; a slope of 2/3 pairs with -3/2, not 2/3.',
        'In ratio division, weighting the wrong endpoint: for m:n = 2:1 the formula is (n x1 + m x2)/(m + n), so the far point x2 carries the larger weight m.'
      ],
      wassceExamTips: [
        'For find the distance between ..., write the formula with the numbers substituted on one line; the substitution is a method mark (M1) and the simplified value is the answer mark (A1).',
        'When asked for the equation of a line, state which form you use; point-gradient is safest with two points, and rearranging to ax + by + c = 0 avoids losing a mark for an unrequested format.',
        'For a parallel/perpendicular sub-part, quote the condition (m1 = m2 or m1 x m2 = -1) before computing; the stated condition earns the method mark.',
        'Intersection items reward a final coordinate pair in brackets; check it in both lines, since a wrong pair forfeits both A1 marks.',
        'Carry-through (afr): if your gradient is slightly wrong but you use it consistently to build the line equation, method marks still carry; keep going after an early slip.'
      ],
      summaryChecklist: [
        'Can I find the exact and decimal distance between two points?',
        'Can I compute the midpoint and a point dividing a segment in a given ratio?',
        'Can I calculate a gradient and identify horizontal and vertical cases?',
        'Can I write the equation of a line through two points and check it?',
        'Can I find the intersection of two lines and test parallel or perpendicular conditions?'
      ]
    },
    examples: [
      {
        id: 'ex-coordinate-geometry-1',
        title: 'Distance, Midpoint and Gradient Together',
        problem: 'For A(2, -3) and B(6, 3), find the distance AB, the midpoint of AB, and the gradient of line AB.',
        stepByStepSolution: [
          'Step 1 (M1): Distance formula d = sqrt((x2 - x1)^2 + (y2 - y1)^2) with differences x2 - x1 = 6 - 2 = 4 and y2 - y1 = 3 - (-3) = 6.',
          'Step 2 (A1): d = sqrt(4^2 + 6^2) = sqrt(16 + 36) = sqrt(52) = 2 sqrt(13) exactly, which is 7.21 to 3 significant figures.',
          'Step 3 (M1): Midpoint = ((x1 + x2)/2, (y1 + y2)/2) = ((2 + 6)/2, (-3 + 3)/2) = (8/2, 0/2) = (4, 0).',
          'Step 4 (M1): Gradient m = (y2 - y1)/(x2 - x1) = (3 - (-3))/(6 - 2) = 6/4.',
          'Step 5 (A1): So the gradient is m = 3/2; the exact distance is 2 sqrt(13), the midpoint is (4, 0), and the gradient is 3/2.'
        ],
        keyTakeaway: 'Distance squares the differences, midpoint averages them, and gradient divides vertical by horizontal change.'
      },
      {
        id: 'ex-coordinate-geometry-2',
        title: 'Line Equation and Its Intersection',
        problem: 'Find the equation of the line through (-1, 3) and (2, -3), then find where it meets the line y = 3x - 5.',
        stepByStepSolution: [
          'Step 1 (M1): Gradient m = (y2 - y1)/(x2 - x1) = (-3 - 3)/(2 - (-1)) = -6/3 = -2.',
          'Step 2 (M1): Point-gradient form with (-1, 3): y - 3 = -2(x + 1).',
          'Step 3 (A1): Expand: y - 3 = -2x - 2, so y = -2x + 1. Check x = 2 gives y = -3, correct.',
          'Step 4 (M1): For the intersection set the two y-values equal: -2x + 1 = 3x - 5, so 6 = 5x and x = 6/5.',
          'Step 5 (M1): Find y from y = 3x - 5: y = 3(6/5) - 5 = 18/5 - 25/5 = -7/5.',
          'Step 6 (A1): The intersection point is (6/5, -7/5); checking in y = -2x + 1 gives -12/5 + 5/5 = -7/5, confirming it.'
        ],
        keyTakeaway: 'Build the line from its gradient, then equate the two y-expressions to find the crossing point.'
      }
    ],
    quiz: {
      id: 'quiz-coordinate-geometry',
      topicId: 'shs2-em-t1-coordinate-geometry',
      title: 'Coordinate Geometry Quiz',
      timeLimitMinutes: 12,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-em-coordinate-geometry-1',
          quizId: 'quiz-coordinate-geometry',
          questionText: 'Find the distance between the points A(1, 2) and B(4, 6).',
          optionA: '5',
          optionB: '7',
          optionC: '25',
          optionD: '1',
          correctOption: 'A',
          subConcept: 'Distance Formula',
          explanation: 'd = sqrt((4 - 1)^2 + (6 - 2)^2) = sqrt(9 + 16) = sqrt(25) = 5. Option C (25) is the squared distance before the root; option B adds the raw differences.',
          remediationTip: 'Square each difference, add, then take the square root at the end.'
        },
        {
          id: 'q-em-coordinate-geometry-2',
          quizId: 'quiz-coordinate-geometry',
          questionText: 'What is the midpoint of the segment joining (-3, 5) and (7, -1)?',
          optionA: '(4, 3)',
          optionB: '(2, 3)',
          optionC: '(2, 2)',
          optionD: '(5, 2)',
          correctOption: 'C',
          subConcept: 'Midpoint Formula',
          explanation: 'Midpoint = ((-3 + 7)/2, (5 + (-1))/2) = (4/2, 4/2) = (2, 2). Option B averages x correctly but slips the y-sign; option A forgets to halve the sums.',
          remediationTip: 'Average each coordinate pair separately, then divide both sums by 2.'
        },
        {
          id: 'q-em-coordinate-geometry-3',
          quizId: 'quiz-coordinate-geometry',
          questionText: 'Find the gradient of the line passing through (2, 3) and (5, -3).',
          optionA: '2',
          optionB: '-2',
          optionC: '-1/2',
          optionD: '1/2',
          correctOption: 'B',
          subConcept: 'Gradient',
          explanation: 'm = (y2 - y1)/(x2 - x1) = (-3 - 3)/(5 - 2) = -6/3 = -2. Option A drops the negative; option C is the perpendicular value, not the gradient itself.',
          remediationTip: 'Put the y-difference on top; a fall from 3 to -3 gives a negative numerator.'
        },
        {
          id: 'q-em-coordinate-geometry-4',
          quizId: 'quiz-coordinate-geometry',
          questionText: 'Which line is parallel to y = 3x - 2 and passes through the point (0, 1)?',
          optionA: 'y = -1/3 x + 1',
          optionB: 'y = 3x + 1',
          optionC: 'y = 3x - 1',
          optionD: 'y = 2x + 1',
          correctOption: 'B',
          subConcept: 'Parallel Lines',
          explanation: 'Parallel lines share the gradient 3, and passing through (0, 1) fixes the intercept c = 1, giving y = 3x + 1. Option A is perpendicular (gradient -1/3); option D changes the gradient.',
          remediationTip: 'Keep the same m and read c from the given point; (0, 1) means c = 1.'
        },
        {
          id: 'q-em-coordinate-geometry-5',
          quizId: 'quiz-coordinate-geometry',
          questionText: 'A line has gradient 2/3. What is the gradient of a line perpendicular to it?',
          optionA: '2/3',
          optionB: '3/2',
          optionC: '-2/3',
          optionD: '-3/2',
          correctOption: 'D',
          subConcept: 'Perpendicular Lines',
          explanation: 'Perpendicular gradients multiply to -1, so the required gradient is the negative reciprocal, -3/2, since (2/3)(-3/2) = -1. Option B is the reciprocal without the sign change; option A repeats the slope.',
          remediationTip: 'Flip the fraction and change the sign: 2/3 becomes -3/2.'
        }
      ]
    }
  },
  {
    id: 'shs2-em-t1-logic-reasoning',
    subjectId: 'elective-maths',
    level: 'SHS 2',
    term: 1,
    orderIndex: 5,
    title: 'Mathematical Logic and Simple Arguments',
    description: 'Statement logic, negation, conjunction, disjunction, implication, the converse, inverse and contrapositive, truth values, validity of arguments and counterexamples.',
    isFreeTrial: false,
    isVip: false,
    keyNotes: `• A STATEMENT (proposition) is a sentence that is definitely TRUE or FALSE, never both and never neither. Questions and commands are not statements.
• "x is an even number" is NOT a statement (truth depends on x); "7 is a prime number" IS a statement (true).
• NEGATION ~p flips the truth value: if p is true, ~p is false. Negate the quantifier too: ~ (all) = some are not.
• CONJUNCTION p and q (p ^ q) is true ONLY when both are true; otherwise false.
• DISJUNCTION p or q (p v q) is true when AT LEAST ONE is true; it is false only when both are false.
• IMPLICATION p implies q (p => q) is false ONLY when p is true and q is false; it is true in every other case.
• For p => q: CONVERSE is q => p, INVERSE is ~p => ~q, CONTRAPOSITIVE is ~q => ~p.
• A conditional and its CONTRAPOSITIVE always share the same truth value; the converse and inverse share the other pair.
• "If a number ends in 0 then it is divisible by 5" has converse "if divisible by 5 then it ends in 0" (false: 15) and contrapositive "if not divisible by 5 then it does not end in 0" (true).
• Tautology: a compound statement always true whatever the parts; contradiction: always false.
• An ARGUMENT is VALID when true premises force a true conclusion, whether or not the facts are real.
• Modus ponens: from p => q and p, conclude q. Modus tollens: from p => q and ~q, conclude ~p. Both are valid.
• Fallacy of affirming the consequent: from p => q and q, wrongly concluding p; a single counterexample proves invalidity.`,
    detailedNotes: {
      overview: 'Logic is the grammar of mathematical proof. WAEC Paper 2 and Paper 1 objective items test statement identification, truth values of compound statements, the converse/inverse/contrapositive of an implication, and whether a short argument is valid. None of this needs numbers; it needs discipline with the truth tables and the habit of hunting a counterexample. Clear, correct answers here are fast marks.',
      introduction: 'Treat every sentence as either a switch set to TRUE or FALSE. Compound sentences wire switches together: AND needs both on, OR needs one on, and IF-THEN only breaks when the promise is made but not kept. Validity asks a different thing: given the premises, can the conclusion ever be false? A single case where premises are true and the conclusion false destroys validity.',
      realWorldContext: 'A GES exam instruction: "If a candidate arrives after the bell, then the candidate is not admitted." The contrapositive, "if the candidate was admitted, then the candidate did not arrive after the bell," carries exactly the same rule. An invigilator reasoning that a seated candidate must have come late commits the fallacy of affirming the consequent, which is the same error WAEC tests.',
      objectives: [
        'Decide whether a sentence is a statement and assign its truth value',
        'Form the negation of a statement, including statements with all, some and there exists',
        'Construct and evaluate truth values for conjunction, disjunction and implication',
        'Write the converse, inverse and contrapositive of an implication and identify the equivalent pair',
        'Judge whether a simple argument is valid and supply a counterexample when it is not'
      ],
      sections: [
        {
          title: 'Statements and Negation',
          content: 'A statement has a definite truth value. Open sentences with unknowns (x + 2 = 5), questions, and commands are not statements because their truth is not settled. Negation, written ~p, reverses the truth value. Negating quantifiers is the part candidates miss: the negation of "every even number is divisible by 4" is "there exists an even number that is NOT divisible by 4," because one exception defeats an all claim. The negation of "some students passed" is "no student passed" (equivalently, all failed).',
          bulletPoints: [
            'A statement is decidable as true or false, not both.',
            'Open sentences, questions and commands are not statements.',
            'Negation flips true to false and false to true.',
            'Negate all with some are not, and negate some with none.',
            'The double negation ~(~p) returns p.'
          ],
          keyTakeaway: 'A statement has a fixed truth value; its negation reverses that value and flips any quantifier.',
          realWorldExample: 'Negating the notice all students must wear sandals gives there exists a student who need not wear sandals, one exception being enough.'
        },
        {
          title: 'Conjunction and Disjunction',
          content: 'The conjunction p AND q (written p ^ q) is true only in the single case where both parts are true. Example: let p be 6 is even (true) and q be 6 is prime (false); then p ^ q is false because q fails. The disjunction p OR q (written p v q) is inclusive: it is true whenever at least one part is true. For the same p, q, the statement p v q is true because p holds. Only when both parts are false is the disjunction false. The inclusive OR is the mathematical default and is the reason both single truths rescue it.',
          bulletPoints: [
            'AND (p ^ q) is true only when both operands are true.',
            'OR (p v q) is inclusive: true when at least one is true.',
            'A false part kills an AND; a true part rescues an OR.',
            'Build the truth table with four rows for two operands.',
            'Every row of an AND column being true requires every p and q true.'
          ],
          keyTakeaway: 'AND needs both true; OR needs only one true, because the mathematical OR is inclusive.',
          realWorldExample: 'A job needing both a certificate and experience fails if one is missing, while a club accepting either member type is satisfied by one.'
        },
        {
          title: 'Implication, Converse, Inverse and Contrapositive',
          content: 'The implication p => q (if p then q) is false in exactly one case: p true and q false. When p is false the implication is automatically true (a vacuous truth). From p => q we form three relatives: CONVERSE q => p, INVERSE ~p => ~q, and CONTRAPOSITIVE ~q => ~p. The key fact for exams is that a conditional and its contrapositive always have the same truth value, while the converse and the inverse share the other value. Example: "if a number ends in 0 then it is divisible by 5" is true; its converse is false because 15 is divisible by 5 but does not end in 0; its contrapositive "if not divisible by 5 then it does not end in 0" is true.',
          bulletPoints: [
            'p => q is false only when p is true and q is false.',
            'Converse swaps the two parts: q => p.',
            'Inverse negates both parts: ~p => ~q.',
            'Contrapositive negates and swaps: ~q => ~p.',
            'A conditional and its contrapositive are logically equivalent.'
          ],
          keyTakeaway: 'Only a true antecedent with a false consequent breaks an implication; the contrapositive always matches it.',
          realWorldExample: 'A promise if it rains I close the shop is broken only when it rains and the shop stays open.'
        },
        {
          title: 'Valid Arguments and Counterexamples',
          content: 'An argument gives premises and a conclusion. It is VALID when it is impossible for all the premises to be true while the conclusion is false. Two valid templates are modus ponens (from p => q and p, conclude q) and modus tollens (from p => q and ~q, conclude ~p). The invalid template to beware is affirming the consequent: from p => q and q, wrongly concluding p, and denying the antecedent: from p => q and ~p, wrongly concluding ~q. To prove an argument invalid, give one counterexample where the premises are true and the conclusion false: let p be it rains, q be the ground is wet; the ground wet (q true) does not force that it rained, since someone could have poured water.',
          bulletPoints: [
            'Validity is about form, not the real truth of the statements.',
            'Modus ponens and modus tollens are the two valid forms.',
            'Affirming the consequent and denying the antecedent are the classic fallacies.',
            'One counterexample with true premises and a false conclusion kills validity.',
            'A true conclusion from a valid form is guaranteed.'
          ],
          keyTakeaway: 'An argument is valid when true premises cannot give a false conclusion; one counterexample disproves validity.',
          realWorldExample: 'Seeing a wet ground and concluding it rained ignores a spilled bucket, a counterexample to that reasoning.'
        }
      ],
      commonMistakes: [
        'Treating an open sentence as a statement: writing that x is greater than 5 has a truth value; without a value for x it is not a statement.',
        'Negating only the verb and missing the quantifier: negating every even number is divisible by 4 as every even number is not divisible by 4, when the correct negation is there exists an even number not divisible by 4.',
        'Reading the mathematical OR as exclusive: claiming p or q is false when both are true; inclusive OR is true when both are true.',
        'Confusing converse with contrapositive: writing ~q => ~p as the converse; the converse is q => p, while ~q => ~p is the contrapositive.',
        'Declaring an implication false whenever the antecedent is false; if p is false then p => q is true regardless of q (vacuous truth).'
      ],
      wassceExamTips: [
        'For state the truth value of p ^ q, draw or imagine the one-line check: both true only then true; write the values of p and q first so the method mark (M1) is visible before the final true/false (A1).',
        'When asked for the converse, inverse or contrapositive, quote the definitions q => p, ~p => ~q, ~q => ~p as your working line; examiners award for the correct form even if a sentence slips.',
        'To decide validity, test the conclusion by counterexample: try to keep every premise true while forcing the conclusion false; if you can, the argument is invalid.',
        'For a statement-or-not item, apply the settled-truth test at once; questions, commands and open sentences are never statements, so strike them immediately.',
        'Timing: a pure-logic objective item should take under 40 seconds; if torn between converse and contrapositive, remember the contrapositive keeps the SAME truth value as the original.'
      ],
      summaryChecklist: [
        'Can I decide whether a sentence is a statement and give its truth value?',
        'Can I form the correct negation of a statement that uses all, some or there exists?',
        'Can I evaluate the truth of a conjunction, disjunction and implication from its parts?',
        'Can I write the converse, inverse and contrapositive of an implication and name the equivalent pair?',
        'Can I judge an argument as valid or invalid and give a counterexample when it fails?'
      ]
    },
    examples: [
      {
        id: 'ex-logic-reasoning-1',
        title: 'Truth Values of Compound Statements',
        problem: 'Let p be the statement 6 is an even number and q be the statement 6 is a prime number. Determine the truth values of p ^ q, p v q, p => q and ~p.',
        stepByStepSolution: [
          'Step 1 (M1): Identify the atomic truth values: p is true (6 is divisible by 2), q is false (6 = 2 x 3, so it is not prime).',
          'Step 2 (M1): Conjunction p ^ q needs BOTH true; since q is false, p ^ q is false.',
          'Step 3 (M1): Disjunction p v q needs at least one true; since p is true, p v q is true.',
          'Step 4 (M1): Implication p => q is false only when the antecedent is true and the consequent false; here p true and q false, so p => q is false.',
          'Step 5 (A1): The negation ~p reverses p, so ~p is false.',
          'Step 6 (A1): Final answers: p ^ q is false, p v q is true, p => q is false, and ~p is false.'
        ],
        keyTakeaway: 'Find the parts first; AND needs both, OR needs one, IF-THEN breaks only on true-to-false, and negation just flips.'
      },
      {
        id: 'ex-logic-reasoning-2',
        title: 'Converse, Inverse, Contrapositive and Validity',
        problem: 'For the statement: If a number ends in 0, then it is divisible by 5. Write the converse, inverse and contrapositive, then judge: a number is divisible by 5, therefore it ends in 0.',
        stepByStepSolution: [
          'Step 1 (M1): Let p be the number ends in 0 and q be the number is divisible by 5; the original implication is p => q.',
          'Step 2 (A1): Converse (q => p): If a number is divisible by 5, then it ends in 0.',
          'Step 3 (A1): Inverse (~p => ~q): If a number does not end in 0, then it is not divisible by 5.',
          'Step 4 (A1): Contrapositive (~q => ~p): If a number is not divisible by 5, then it does not end in 0.',
          'Step 5 (M1): The original is true, so its contrapositive is also true; the converse is false, with 15 as a counterexample (15 is divisible by 5 but does not end in 0).',
          'Step 6 (A1): The argument from q conclude p AFFIRMS THE CONSEQUENT and is INVALID; the number 15 makes the premise true and the conclusion false.'
        ],
        keyTakeaway: 'Swap for the converse, negate both for the inverse, negate-and-swap for the contrapositive; a single counterexample shows invalidity.'
      }
    ],
    quiz: {
      id: 'quiz-logic-reasoning',
      topicId: 'shs2-em-t1-logic-reasoning',
      title: 'Mathematical Logic Quiz',
      timeLimitMinutes: 12,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-em-logic-reasoning-1',
          quizId: 'quiz-logic-reasoning',
          questionText: 'Which of the following is a statement?',
          optionA: '12 is divisible by 4.',
          optionB: 'Close the window.',
          optionC: 'Is 9 a prime number?',
          optionD: 'x is a positive integer.',
          correctOption: 'A',
          subConcept: 'Identifying Statements',
          explanation: '12 is divisible by 4 has a definite truth value (true), so it is a statement. B is a command, C is a question, and D is an open sentence whose truth depends on the unknown x; none has a settled truth value.',
          remediationTip: 'A statement must be decidable true or false now; reject commands, questions and sentences with an unknown.'
        },
        {
          id: 'q-em-logic-reasoning-2',
          quizId: 'quiz-logic-reasoning',
          questionText: 'If p is true and q is false, what is the truth value of the implication p => q?',
          optionA: 'True',
          optionB: 'False',
          optionC: 'Cannot be determined',
          optionD: 'Both true and false',
          correctOption: 'B',
          subConcept: 'Implication Truth Value',
          explanation: 'An implication p => q is false exactly when the antecedent p is true and the consequent q is false, which is this case. It is true in the other three combinations, so it is decidable and not both values.',
          remediationTip: 'Remember the single breaking row: true implies false is the only false implication.'
        },
        {
          id: 'q-em-logic-reasoning-3',
          quizId: 'quiz-logic-reasoning',
          questionText: 'What is the contrapositive of: If it rains, then the match is cancelled?',
          optionA: 'If the match is cancelled, then it rains.',
          optionB: 'If it does not rain, then the match is not cancelled.',
          optionC: 'If the match is not cancelled, then it does not rain.',
          optionD: 'It rains and the match is not cancelled.',
          correctOption: 'C',
          subConcept: 'Contrapositive',
          explanation: 'The contrapositive of p => q is ~q => ~p: negate and swap, giving if the match is not cancelled then it does not rain. A is the converse (swap only), B is the inverse (negate only).',
          remediationTip: 'Contrapositive = negate BOTH parts and SWAP them; do only one of these and you get the wrong relative.'
        },
        {
          id: 'q-em-logic-reasoning-4',
          quizId: 'quiz-logic-reasoning',
          questionText: 'The negation of the statement: Every even number is divisible by 4 is',
          optionA: 'Every even number is not divisible by 4.',
          optionB: 'No even number is divisible by 4.',
          optionC: 'Some even numbers are divisible by 4.',
          optionD: 'There exists an even number that is not divisible by 4.',
          correctOption: 'D',
          subConcept: 'Negating Quantifiers',
          explanation: 'The negation of an all claim is an exists-not claim: there exists an even number not divisible by 4 (for instance 6). Options A and B wrongly keep the universal form, and C does not contradict the original.',
          remediationTip: 'Negate every with there exists ... not; one counterexample is enough to break an all statement.'
        },
        {
          id: 'q-em-logic-reasoning-5',
          quizId: 'quiz-logic-reasoning',
          questionText: 'Given: If a figure is a square then it is a rectangle, and a figure is a rectangle. Is the conclusion the figure is a square valid?',
          optionA: 'Valid, by modus ponens.',
          optionB: 'Valid, by modus tollens.',
          optionC: 'Invalid, it affirms the consequent.',
          optionD: 'Invalid, it denies the antecedent.',
          correctOption: 'C',
          subConcept: 'Argument Validity',
          explanation: 'The reasoning goes from p => q and q, then concludes p; that is the fallacy of affirming the consequent and is invalid. A counterexample: a 3 by 4 rectangle is a rectangle but not a square. Denying the antecedent would use ~p, not q.',
          remediationTip: 'A true consequent does not force the antecedent; look for a rectangle that is not a square.'
        }
      ]
    }
  },
  // =========================================================================
  // TERM 2
  // =========================================================================
// =========================================================================
  // 6. Trigonometric Identities and Equations
  // =========================================================================
  {
    id: 'shs2-em-t2-trigonometric-identities',
    subjectId: 'elective-maths',
    level: 'SHS 2',
    term: 2,
    orderIndex: 6,
    title: 'Trigonometric Identities and Equations',
    description: 'The Pythagorean, quotient and reciprocal identities, how to prove an identity by working one side only, and how to solve trigonometric equations inside a stated interval in degrees or in radians.',
    isFreeTrial: false,
    isVip: false,
    keyNotes: `• Pythagorean identities (true for every angle): sin^2 θ + cos^2 θ = 1; divide by cos^2 θ to get 1 + tan^2 θ = sec^2 θ; divide by sin^2 θ to get 1 + cot^2 θ = cosec^2 θ.
• Quotient relations: tan θ = sin θ / cos θ and cot θ = cos θ / sin θ. Reciprocal relations: sec θ = 1 / cos θ, cosec θ = 1 / sin θ, cot θ = 1 / tan θ.
• Worked snippet: "Simplify (1 - cos^2 θ) / sin θ" gives sin^2 θ / sin θ = sin θ, one line and one mark.
• Worked snippet: "Simplify sin θ / cos θ + cos θ / sin θ" = (sin^2 θ + cos^2 θ)/(sin θ cos θ) = 1/(sin θ cos θ) = sec θ cosec θ.
• An identity is true for all admissible angles; an equation is true only for particular angles. Never swap the two words in an answer.
• Proof discipline: start from ONE side, transform it, and stop when it reads exactly like the other side. Never write the statement to be proved as a working line, never cross-multiply.
• Sample proof: "(1 + sin θ)/(1 - sin θ) = (sec θ + tan θ)^2" — multiply top and bottom by (1 + sin θ) to get (1 + sin θ)^2 / cos^2 θ = ((1 + sin θ)/cos θ)^2 = (sec θ + tan θ)^2.
• Standard moves in order: change every ratio to sin and cos, take a common denominator, apply sin^2 + cos^2 = 1, then factorise.
• Solving must name the unit and the interval: "for 0° ≤ θ ≤ 360°" is degrees, "for 0 ≤ θ ≤ 2π" is radians, and the two answers differ completely.
• Sign rule (ASTC): sine is positive in quadrants I and II, cosine in I and IV, tangent in I and III.
• Worked snippet: "2 sin^2 θ - sin θ - 1 = 0" factors as (2 sin θ + 1)(sin θ - 1) = 0, so sin θ = -1/2 or sin θ = 1, giving θ = 210°, 330° and 90° in the interval 0° ≤ θ ≤ 360°.
• Reference-angle habit: sin θ = -1/2 has reference angle 30°, and sine is negative in III and IV, so 180° + 30° = 210° and 360° - 30° = 330°.
• Reject impossible roots: sin θ = 2 and cos θ = 1.5 have no solution because -1 ≤ sin θ ≤ 1 and -1 ≤ cos θ ≤ 1.
• Worked snippet: "tan θ = 4/3 with 180° < θ < 270°" uses the 3-4-5 triangle and quadrant III signs, so sin θ = -4/5 and cos θ = -3/5.`,
    detailedNotes: {
      overview: 'SHS 1 introduced the three ratios of a right-angled triangle and extended them to any angle with the ASTC sign rule. SHS 2 turns those ratios into an algebra of their own: three Pythagorean identities, the quotient and reciprocal relations, identity proofs and equation solving inside a stated interval. WAEC sets an identity proof and a trigonometric equation in most theory papers, and both are method-mark questions, so a candidate who knows the toolkit in this order collects marks that careless candidates throw away. Master the five building blocks and the quadrant rule and most WASSCE items in this topic become routine.',
      introduction: 'Treat this topic as two different jobs that share one toolkit. The first job is proving: you are handed an identity and must show that one side can be transformed into the other for every angle the expressions allow. The second job is solving: you are handed an equation and must list every angle in a stated interval that makes it true, no more and no fewer. Proving rewards fluent manipulation of sin, cos, tan, sec, cosec and cot; solving rewards the sign rule, the reference angle and a calculator mode that matches the unit named in the question.',
      realWorldContext: 'A technician in Ho fixing a solar-panel bracket has the tilt angle recorded only as a sine on the datasheet, but the steel channel is cut using the tangent, so he converts with 1 + tan^2 θ = sec^2 θ instead of re-measuring the GH¢ 145 bracket on the roof. At a building site in Tamale a foreman checks a ladder angle by comparing tan θ with the measured rise over the run, and the identity tells him whether his two measurements agree. In a Kumasi classroom a pupil using a clinometer reads an angle of elevation of 35° and must find tan from a table of sines; every one of those conversions is a Pythagorean or quotient identity at work, and every wrong conversion wastes materials.',
      objectives: [
        'State and apply the Pythagorean, quotient and reciprocal identities to simplify trigonometric expressions',
        'Prove a given trigonometric identity by transforming one side only, with each step justified',
        'Solve equations of the form sin θ = k, cos θ = k and tan θ = k in a stated interval in degrees or radians',
        'Solve quadratic-form trigonometric equations by factorisation and reject roots outside the range -1 to 1',
        'Deduce any one ratio from another while respecting the quadrant of the angle'
      ],
      sections: [
        {
          title: 'The Toolkit: One Identity and Two Families of Relations',
          content: 'Everything in this topic grows from sin^2 θ + cos^2 θ = 1, which is just Pythagoras applied to a point on the unit circle. Divide that single statement by cos^2 θ and you obtain 1 + tan^2 θ = sec^2 θ; divide it by sin^2 θ and you obtain 1 + cot^2 θ = cosec^2 θ. The quotient relations tan θ = sin θ / cos θ and cot θ = cos θ / sin θ, and the reciprocal relations sec θ = 1 / cos θ, cosec θ = 1 / sin θ, cot θ = 1 / tan θ, let you rewrite any expression using only sine and cosine. Learn to move in both directions: simplify (1 - cos^2 θ)/sin θ by replacing the numerator with sin^2 θ and cancelling, and rewrite sin^2 θ as 1 - cos^2 θ when a question demands an answer in cosines only.',
          bulletPoints: [
            'sin^2 θ + cos^2 θ = 1 holds for every angle, degrees or radians, which is exactly what makes it an identity.',
            'Secant, cosecant and cotangent are reciprocals, not angles: sec θ means 1 / cos θ and never cos θ multiplied by anything.',
            '1 + tan^2 θ = sec^2 θ is the fastest route from a tangent to a cosine, and it is the reason quadrant signs matter.',
            'Always write the squared form as sin^2 θ, never sin θ^2, which would read as the sine of θ squared.'
          ],
          keyTakeaway: 'Memorise one identity and five relations, then derive the rest by dividing or substituting.',
          realWorldExample: 'A market woman in Makola measures the slope of a shed roof with a plumb line and gets tan θ = 3/4; the roofing sheet catalogue quotes cos θ, so she uses 1 + tan^2 θ = sec^2 θ to find cos θ = 4/5.'
        },
        {
          title: 'Proving an Identity: Work One Side Only',
          content: 'A proof is a chain of transformations that starts on the harder side and ends on the simpler side, and each link must be justified by a named rule. The reliable order of attack is: rewrite every sec, cosec and cot in terms of sin and cos; put everything over a single denominator; use sin^2 θ + cos^2 θ = 1 to collapse the numerator; then factorise, cancelling a difference of two squares where it appears. In the standard example (1 + sin θ)/(1 - sin θ) = (sec θ + tan θ)^2, the elegant move is to multiply numerator and denominator by the conjugate (1 + sin θ), which turns the denominator into 1 - sin^2 θ = cos^2 θ and the whole fraction into a perfect square. Two habits cost marks: writing the statement to be proved as though it were already true, and carrying the same expression on both sides of the equals sign until the two sides look alike. Never do that; one side travels, the other stands as the target.',
          bulletPoints: [
            'Choose the harder side to transform; the simpler side is your destination and must not be touched.',
            'Write each line as a single expression with an equals sign only between consecutive forms of that same side.',
            'Conjugate pairs (1 + sin θ) with (1 - sin θ), or (1 + cos θ) with (1 - cos θ), produce a Pythagorean difference every time.',
            'End with a concluding line naming the rule used, then a check by substituting one angle such as θ = 30°.'
          ],
          keyTakeaway: 'Transform one side until it reads exactly like the other side, naming the rule at every line.',
          realWorldExample: 'An engineering apprentice in Tema verifies a drawing by substituting θ = 30° into both sides of (1 + sin θ)/(1 - sin θ) = (sec θ + tan θ)^2 and finding 3 on each side, the same double-check WAEC examiners like to see.'
        },
        {
          title: 'Solving Trig Equations in a Stated Interval',
          content: 'Solving asks for every angle that works, so the interval and the unit decide the answer set. Isolate the ratio first: from 2 cos θ - 1 = 0 you get cos θ = 1/2, the reference angle is 60°, and because cosine is positive in quadrants I and IV the solutions in 0° ≤ θ ≤ 360° are 60° and 300°. If the interval were 0 ≤ θ ≤ 2π in radians the same equation would give θ = π/3 and 5π/3, and writing degree answers under a radian instruction scores nothing. When the coefficient of the angle is not 1, as in sin 2θ = 1/2 for 0° ≤ θ ≤ 360°, the 2θ values run through 0° to 720°, so 2θ = 30°, 150°, 390° and 510° and θ = 15°, 75°, 195° and 255°: double the interval, solve, then halve. Sketch one cycle of the curve or a quick quadrant diagram before listing values, and the count of solutions becomes obvious.',
          bulletPoints: [
            'State the unit at the top of the working: degrees or radians, never a mixture in one answer.',
            'Reference angle first, then the quadrants in which the ratio carries the required sign, then the angle list.',
            'For sin 2θ or cos 3θ, multiply the stated interval by the same factor, collect all values, then divide back.',
            'An endpoint such as 0° or 360° is included only if the interval sign is ≤, and a solution must be listed once.',
            'Check every listed angle by substitution; a value that fails is a quadrant error caught before the mark scheme does it.'
          ],
          keyTakeaway: 'Reference angle, correct quadrants, correct unit, and the interval decides how many answers you list.',
          realWorldExample: 'A pupil in Achimota uses a clinometer to find the slope of a ramp and solves sin θ = 1/2 for 0° ≤ θ ≤ 360°, obtaining 30° and 150°; only 30° fits a ramp, which is exactly why the interval and the context must be stated together.'
        },
        {
          title: 'Quadratic Forms, Rejected Roots and Finding One Ratio from Another',
          content: 'Equations such as 2 sin^2 θ - sin θ - 1 = 0 are quadratics dressed in trigonometric clothing. Put u = sin θ, factor 2u^2 - u - 1 as (2u + 1)(u - 1), and read off sin θ = -1/2 or sin θ = 1. Each branch is then solved on its own: the first gives 210° and 330°, the second gives 90°, so the solution set over 0° ≤ θ ≤ 360° is {90°, 210°, 330°}. Some branches must be thrown away because a ratio of sine or cosine never leaves the band from -1 to 1, so sin θ = 2 contributes nothing; examiners deliberately plant that root and award a method mark for rejecting it with a reason. The second recurring task is deducing one ratio from another under a quadrant condition: from tan θ = 4/3 with 180° < θ < 270° the 3-4-5 triangle gives magnitudes 3/5 and 4/5, and quadrant III forces both sine and cosine to be negative, so sin θ = -4/5.',
          bulletPoints: [
            'Factorise in u, then substitute back; never cancel sin θ from both sides of a quadratic and lose the root sin θ = 0.',
            'Reject any branch whose ratio falls outside -1 to 1 and state the reason in words.',
            'Use the quadrant statement, not the calculator, to fix the sign of the ratio you are finding.',
            'If asked for tan θ from sin θ, work out cos θ from sin^2 θ + cos^2 θ = 1 with the quadrant sign, then divide.'
          ],
          keyTakeaway: 'Solve the quadratic in the ratio, reject impossible roots with a reason, then hunt angles quadrant by quadrant.',
          realWorldExample: 'A geometry teacher in Ho writes 2 cos^2 θ - cos θ - 1 = 0 on the board as an exit test; pupils who forget the negative root lose half the accuracy marks, exactly as they would in the WASSCE hall.'
        }
      ],
      commonMistakes: [
        'Cancelling a common factor and losing a root: dividing 2 sin^2 θ - sin θ = 0 by sin θ leaves only sin θ = 1/2; the correct move is factorising sin θ(2 sin θ - 1) = 0, which also keeps sin θ = 0.',
        'Treating an identity as an equation: writing "sin^2 θ + cos^2 θ = 1, so θ = 45°" mixes the two jobs up and earns no mark, because the identity holds for every angle.',
        'Quadrant blindness: giving θ = 30° only for sin θ = 1/2 in 0° ≤ θ ≤ 360° and forgetting 150°, or listing 60° and 120° for cos θ = 1/2 when cosine is positive in quadrants I and IV, not I and II.',
        'Mixing units in one answer: solving cos θ = 1/2 as 60° and 300° when the interval was given as 0 ≤ θ ≤ 2π, where the answers must be π/3 and 5π/3.',
        'Cross-multiplying during a proof, or starting the working with the statement to be proved, which assumes the result; a proof transforms one side only until it matches the other side.'
      ],
      wassceExamTips: [
        'In Paper 2 the identity proof is typically a 6 to 8 mark question. Method marks (M1) are awarded for each justified transformation line, so a single compressed line that jumps to the answer loses marks even when the final result (A1) is correct.',
        'Write the rule used beside the step in brackets, for example "Pythagorean identity" or "reciprocal relation". The examiner is required to see method, and the annotation supplies it without extra time.',
        'For equation solving, state the interval and unit at the top of the answer, then list angles in increasing order. Where an error in an earlier part is carried into a later part, WAEC awards accuracy marks on the carried value provided the method (a.f.r.) is correct, so tidy method still pays after a slip.',
        'In Paper 1 objective questions, substitute a convenient angle such as 30° or 45° into the expression and into the four options; the options that fail are eliminated in under twenty seconds without algebra.',
        'Use the formula sheet in the answer booklet only to confirm the identities you already know. Candidates who search the sheet lose time and often pick cosec where they need sec, which reverses the sign of the whole working.'
      ],
      summaryChecklist: [
        'Can I derive 1 + tan^2 θ = sec^2 θ and 1 + cot^2 θ = cosec^2 θ from sin^2 θ + cos^2 θ = 1 and use them to simplify?',
        'Can I prove an identity by transforming one side only, naming the rule at each line?',
        'Can I solve sin θ = k, cos θ = k and tan θ = k in a stated interval and list every angle that works?',
        'Can I factorise a quadratic-form trigonometric equation and reject any root outside the range -1 to 1 with a reason?',
        'Can I find any one ratio when another ratio and the quadrant of the angle are given?'
      ]
    },
    examples: [
      {
        id: 'ex-shs2-em-trig-id-1',
        title: 'Proving an Identity with a Conjugate',
        problem: 'Prove the identity (1 + sin θ)/(1 - sin θ) = (sec θ + tan θ)^2, and state the values of θ for which it is not valid.',
        stepByStepSolution: [
          'Step 1 (M1): Work on the left-hand side only, and multiply its numerator and denominator by the conjugate of the denominator, which is (1 + sin θ).',
          'Step 2 (M1): The left-hand side becomes (1 + sin θ)(1 + sin θ) / (1 - sin θ)(1 + sin θ) = (1 + sin θ)^2 / (1 - sin^2 θ).',
          'Step 3 (M1): Apply the Pythagorean identity to the denominator: 1 - sin^2 θ = cos^2 θ, giving (1 + sin θ)^2 / cos^2 θ.',
          'Step 4 (M1): Rewrite as a single square, ((1 + sin θ)/cos θ)^2, then split the fraction inside the bracket into 1/cos θ + sin θ/cos θ.',
          'Step 5 (A1): Use the reciprocal and quotient relations, 1/cos θ = sec θ and sin θ/cos θ = tan θ, to obtain (sec θ + tan θ)^2, which is the right-hand side.',
          'Step 6 (A1): Conclusion: (1 + sin θ)/(1 - sin θ) = (sec θ + tan θ)^2 for every angle for which both sides are defined, that is for cos θ ≠ 0 and sin θ ≠ 1, so the identity fails at θ = 90°, 270° and at every coterminal angle.',
          'Step 7 (A1): Check by substituting θ = 30°: left side = (1 + 0.5)/(1 - 0.5) = 3, right side = (1.1547 + 0.5774)^2 = 3, so the two sides agree.'
        ],
        keyTakeaway: 'Multiply by the conjugate, convert the denominator with sin^2 + cos^2 = 1, and the left side squares itself into the right side.'
      },
      {
        id: 'ex-shs2-em-trig-id-2',
        title: 'A Quadratic-Form Equation in Degrees',
        problem: 'Solve, for 0° ≤ θ ≤ 360°, the equation 2 sin^2 θ - sin θ - 1 = 0.',
        stepByStepSolution: [
          'Step 1 (M1): Recognise a quadratic in sin θ and put u = sin θ, so the equation becomes 2u^2 - u - 1 = 0.',
          'Step 2 (M1): Factorise: (2u + 1)(u - 1) = 0, which expands back to 2u^2 - 2u + u - 1 = 2u^2 - u - 1, confirming the brackets.',
          'Step 3 (M1): Solve each factor: u = -1/2 or u = 1, therefore sin θ = -1/2 or sin θ = 1.',
          'Step 4 (M1): For sin θ = -1/2 the reference angle is 30°, and sine is negative in quadrants III and IV, so θ = 180° + 30° = 210° and θ = 360° - 30° = 330°.',
          'Step 5 (M1): For sin θ = 1, the only angle in the interval 0° ≤ θ ≤ 360° is θ = 90°.',
          'Step 6 (A1): Solution set: θ = 90°, 210° or 330° (all in degrees).',
          'Step 7 (A1): Verify by substitution: 2(1)^2 - 1 - 1 = 0 for 90°, and 2(-1/2)^2 - (-1/2) - 1 = 1/2 + 1/2 - 1 = 0 for 210° and 330°.'
        ],
        keyTakeaway: 'Substitute the ratio, factorise, then solve each branch quadrant by quadrant inside the stated interval.'
      }
    ],
    quiz: {
      id: 'quiz-shs2-em-t2-trig-identities',
      topicId: 'shs2-em-t2-trigonometric-identities',
      title: 'Trigonometric Identities Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-em-trig-ident-1',
          quizId: 'quiz-shs2-em-t2-trig-identities',
          questionText: 'Simplify the expression (1 - cos^2 θ) / sin θ, where sin θ ≠ 0.',
          optionA: 'cos θ',
          optionB: '1',
          optionC: 'sin θ',
          optionD: 'tan θ',
          correctOption: 'C',
          subConcept: 'Pythagorean Identity in Simplification',
          explanation: 'The Pythagorean identity gives 1 - cos^2 θ = sin^2 θ, so the expression is sin^2 θ / sin θ = sin θ. Option A is the slip of replacing 1 - cos^2 θ with cos^2 θ, and option B comes from cancelling the square instead of one factor of sin θ.',
          remediationTip: 'Read 1 minus a squared ratio as the other squared ratio, then cancel only one power.'
        },
        {
          id: 'q-em-trig-ident-2',
          quizId: 'quiz-shs2-em-t2-trig-identities',
          questionText: 'If tan θ = 4/3 and 180° < θ < 270°, find the value of sin θ.',
          optionA: '-4/5',
          optionB: '4/5',
          optionC: '-3/5',
          optionD: '3/5',
          correctOption: 'A',
          subConcept: 'Finding One Ratio from Another',
          explanation: 'tan θ = 4/3 matches a 3-4-5 triangle with perpendicular 4, hypotenuse 5, so the magnitude of sin θ is 4/5. In quadrant III sine is negative, hence sin θ = -4/5. Option C is cosine of the same angle, and option B ignores the quadrant condition.',
          remediationTip: 'Build the triangle for magnitudes first, then let the stated quadrant decide the sign.'
        },
        {
          id: 'q-em-trig-ident-3',
          quizId: 'quiz-shs2-em-t2-trig-identities',
          questionText: 'Solve 2 cos θ - 1 = 0 for 0° ≤ θ ≤ 360°.',
          optionA: '60° and 120°',
          optionB: '60° and 300°',
          optionC: '120° and 240°',
          optionD: '240° and 300°',
          correctOption: 'B',
          subConcept: 'Solving cos θ = k in an Interval',
          explanation: 'The equation gives cos θ = 1/2, whose reference angle is 60°. Cosine is positive in quadrants I and IV, so θ = 60° and θ = 360° - 60° = 300°. Option A keeps the correct reference angle but uses the sine quadrants II instead of IV, which is the classic sign-rule slip.',
          remediationTip: 'Draw the ASTC diagram and shade only the quadrants where cosine is positive before listing angles.'
        },
        {
          id: 'q-em-trig-ident-4',
          quizId: 'quiz-shs2-em-t2-trig-identities',
          questionText: 'Express sec θ × sin θ as one trigonometric ratio.',
          optionA: 'cosec θ',
          optionB: 'cos θ',
          optionC: 'cot θ',
          optionD: 'tan θ',
          correctOption: 'D',
          subConcept: 'Reciprocal and Quotient Relations',
          explanation: 'sec θ = 1 / cos θ, so sec θ × sin θ = sin θ / cos θ = tan θ by the quotient relation. Option C is the result of writing cosine over sine instead of sine over cosine.',
          remediationTip: 'Convert every reciprocal to sin and cos before multiplying; the fraction then names itself.'
        },
        {
          id: 'q-em-trig-ident-5',
          quizId: 'quiz-shs2-em-t2-trig-identities',
          questionText: 'Which of the following is the complete solution set of 2 sin^2 θ - sin θ - 1 = 0 for 0° ≤ θ ≤ 360°?',
          optionA: 'θ = 90°, 210°, 330°',
          optionB: 'θ = 30°, 150°, 270°',
          optionC: 'θ = 45°, 135°, 225°',
          optionD: 'θ = 90°, 150°, 30°',
          correctOption: 'A',
          subConcept: 'Quadratic-Form Trig Equation',
          explanation: 'Factorising as (2 sin θ + 1)(sin θ - 1) = 0 gives sin θ = -1/2 (so 210° and 330°) or sin θ = 1 (so 90°). Option B solves sin θ = 1/2 and sin θ = -1 instead, that is the sign error carried through the factorisation.',
          remediationTip: 'After factorising, write the two ratio values on separate lines and solve each one on its own.'
        }
      ]
    }
  },

  // =========================================================================
  // 7. Sine and Cosine Rules, Area and Heights  (VIP)
  // =========================================================================
  {
    id: 'shs2-em-t2-sine-cosine-rules',
    subjectId: 'elective-maths',
    level: 'SHS 2',
    term: 2,
    orderIndex: 7,
    title: 'Sine and Cosine Rules, Area and Heights',
    description: 'Choosing the right rule for any triangle, the ambiguous case of the sine rule, the area formula ½ab sin C, and heights found from areas and from angles of elevation and depression.',
    isFreeTrial: false,
    isVip: true,
    keyNotes: `• Sine rule for sides: a / sin A = b / sin B = c / sin C, where side a lies opposite angle A. Use it when a matched side-and-opposite-angle pair is known.
• Sine rule for angles: sin A / a = sin B / b = sin C / c. Invert the ratio form when the unknown is an angle.
• Cosine rule for a side: a^2 = b^2 + c^2 - 2bc cos A. Use it with two sides and the included angle (SAS), or three sides (SSS).
• Cosine rule for an angle: cos A = (b^2 + c^2 - a^2) / (2bc). A negative cosine means an obtuse angle.
• Worked snippet: "sides 7 cm, 8 cm, 13 cm" gives cos A = (49 + 64 - 169)/112 = -1/2, so the largest angle is 120°.
• Ambiguous case: given angle A, the opposite side a and side b, compute h = b sin A. With A acute: a < h gives no triangle, a = h gives one right triangle, h < a < b gives two triangles, a ≥ b gives exactly one.
• Worked snippet: "A = 30°, a = 6 cm, b = 10 cm" gives sin B = 10 sin 30° / 6 = 5/6, so B = 56.4° or 123.6°; both keep A + B below 180°, so two triangles exist.
• Area of any triangle: area = ½ ab sin C, where C is the angle INCLUDED between sides a and b.
• Worked snippet: "two sides 10 cm and 16 cm include 30°" gives area = ½(10)(16) sin 30° = 40 cm^2.
• Worked snippet: "sides 8 cm and 11 cm include 60°" gives area = ½(8)(11) sin 60° = 22√3 ≈ 38.1 cm^2 and third side √97 ≈ 9.85 cm.
• Height from area: since area = ½ × base × height, height = 2 × area / base; it also equals the adjacent side × sin of the included angle.
• Angle of elevation is measured up from the horizontal at the eye; the angle of depression from the top back to that point equals it because the two horizontals are parallel.
• Worked snippet: "40 m from the foot of a vertical tower, angle of elevation of the top is 35°" gives height = 40 tan 35° = 28.0 m (3 s.f.).
• Keep the calculator in DEGREE mode unless the question states radians, and never assume a triangle is right-angled because two sides and an angle are given.`,
    detailedNotes: {
      overview: 'A triangle that is not right-angled still has six parts, three sides and three angles, and any three of them that fix the shape let you find the rest. The sine rule handles a matched side-opposite-angle pair, the cosine rule handles two sides with the included angle or three sides, and the formula ½ab sin C turns the same data into an area. This is a VIP topic because WAEC combines all three in one long theory question, frequently wrapped in a field-measurement story with an angle of elevation. The sine rule also carries a trap, the ambiguous case, which separates candidates who reason about quadrants from candidates who copy the first number their calculator shows.',
      introduction: 'Label the triangle first: call the angles A, B and C and the sides opposite them a, b and c. Then read the data and choose the rule by pattern. One known pair plus another side or angle points to the sine rule. Two sides with the angle between them, or three sides, point to the cosine rule. A request for area with two sides and their included angle points to ½ab sin C, and a request for a height is usually an area written a second way. Making that choice in the first thirty seconds is what turns the longest triangle question in the paper into familiar territory.',
      realWorldContext: 'A farmer near Techiman records two sides of a cocoa farm plot as 8 chains and 11 chains with an included angle of 60°; the plot is not rectangular, so the ½ab sin C formula gives 22√3 ≈ 38.1 square chains and the cosine rule gives the third boundary as √97 ≈ 9.85 chains, figures the district assembly needs before issuing a title. In Kumasi a school compound crew wants the height of a flagpole: from a chalk mark 40 m from its base the angle of elevation of the top reads 35° on an abney level, so the pole is 40 tan 35° = 28.0 m and the GH¢ 600 halyard is cut to the right length. Surveyors in Tamale measure a river channel triangle where one angle opens ambiguously, and the two possible triangles decide whether a bridge pier stands on dry ground or in water.',
      objectives: [
        'Choose correctly between the sine rule and the cosine rule from the data given in a triangle',
        'Find an unknown side or angle in a non-right-angled triangle and give the answer to the stated accuracy',
        'Detect and resolve the ambiguous case of the sine rule, giving one, two or no triangles with a reason',
        'Calculate the area of a triangle using ½ab sin C and hence find a perpendicular height',
        'Solve two-dimensional problems on angles of elevation and depression using tangent and the triangle rules'
      ],
      sections: [
        {
          title: 'Choosing the Rule: Match the Data to the Pattern',
          content: 'The sine rule states a / sin A = b / sin B = c / sin C and works only when one complete pair of a side and its opposite angle is known, together with one further side or angle. It is the rule of choice for angle finding when you invert it, writing sin B = b sin A / a. The cosine rule, a^2 = b^2 + c^2 - 2bc cos A, needs the two sides and the angle BETWEEN them, or all three sides when you use the angle form cos A = (b^2 + c^2 - a^2) / (2bc). If the angle you are given is not between the two sides you hold, you are in sine-rule territory, and that arrangement is precisely the one that can produce two triangles. A quick habit saves minutes: write the three known parts, ask whether one is the angle between the two sides, and the rule selects itself.',
          bulletPoints: [
            'Sides and their opposite angles must be paired: a is opposite A, so mismatched labels give a wrong equation.',
            'Two sides and the included angle (SAS): cosine rule for the third side, then sine rule for the smaller angles.',
            'Three sides (SSS): cosine rule in the angle form; find the largest angle first, since it can be obtuse.',
            'A side, its opposite angle and another side (the SSA arrangement): sine rule, and you must test for ambiguity.',
            'Angle form of the sine rule gives two candidate angles; the cosine rule form gives exactly one angle between 0° and 180°.'
          ],
          keyTakeaway: 'Angle between the two sides means cosine rule; a known opposite pair means sine rule; anything else needs a second step.',
          realWorldExample: 'A builder in Winneba lays a triangular concrete pad with two walls of 9 m and 12 m meeting at 70°; the third wall length is a cosine-rule calculation, not a Pythagoras one, because the corner is not square.'
        },
        {
          title: 'The Ambiguous Case of the Sine Rule',
          content: 'When you know angle A, the side a opposite it, and a second side b, the equation sin B = b sin A / a can return two angles, because sin B = sin(180° - B). With A acute, compare a with the perpendicular height h = b sin A. If a is shorter than h, the swinging side never reaches the base and no triangle exists. If a equals h there is exactly one right-angled triangle. If a lies strictly between h and b, the side can swing to two positions and two different triangles exist. If a is at least as long as b, only one triangle is possible, because the obtuse candidate would push the angle sum past 180°. For the worked case A = 30°, a = 6 cm, b = 10 cm, we get h = 5 cm and 5 < 6 < 10, so sin B = 5/6 yields B = 56.4° or 123.6° and both survive the angle-sum test, giving two triangles with third sides 12.0 cm and 5.34 cm respectively.',
          bulletPoints: [
            'Compute h = b sin A before reporting any angle; the comparison h < a < b is the two-triangle condition.',
            'Test each candidate angle B by checking that A + B is less than 180°; reject the one that is not.',
            'When a question expects one answer, it usually says "the acute angle B" or gives a diagram fixing the shape.',
            'A negative or over-one value of sin B, such as sin B = 1.3, means no triangle exists with that data.',
            'Report both triangles with their own C and c values; the pairing must not be mixed.'
          ],
          keyTakeaway: 'One sine-rule arrangement can build two triangles; compare a with b sin A and with b before you decide.',
          realWorldExample: 'A surveyor in Ho marks a point on a road 10 m from a landmark and finds it 6 m from a pipeline at a 30° bearing: two candidate positions exist, so he walks the shorter one before the paver crew starts.'
        },
        {
          title: 'Area by ½ab sin C and Heights From Areas',
          content: 'The formula area = ½ab sin C works for every triangle, provided C is the angle included between the two sides you use. With sides 10 cm and 16 cm and an included angle of 30° the area is ½(10)(16) sin 30° = 80 × 0.5 = 40 cm^2. With sides 8 cm and 11 cm and an included angle of 60° the area is ½(8)(11) sin 60° = 44(√3/2) = 22√3 cm^2, an exact surd, which is approximately 38.1 cm^2 to three significant figures. That same area unlocks the perpendicular height: writing area = ½ × base × height with the 8 cm side as base gives 38.105 = 4h, so h = 9.53 cm, and the check h = 11 sin 60° = 9.53 cm confirms it. The third side of that triangle follows from the cosine rule as √97 ≈ 9.85 cm, so one figure can be measured three ways.',
          bulletPoints: [
            'The angle in ½ab sin C must be between the two named sides; using the opposite angle gives a wrong area.',
            'Exact area 22√3 cm^2 and approximate area 38.1 cm^2 are different answers; state which one you are giving.',
            'Height on a chosen base = 2 × area / base, which avoids drawing any extra perpendicular on the diagram.',
            'The area of a triangle is at most ½ab, with equality only when the included angle is 90°.',
            'Divide an irregular plot into triangles, apply ½ab sin C to each, then add: that is how field areas are computed.'
          ],
          keyTakeaway: 'Two sides and the angle between them give both the area and, by re-writing the area, the height.',
          realWorldExample: 'An estate surveyor in Accra splits an irregular cocoa plot into two triangles from one diagonal, computes each with ½ab sin C, and reports the total in acres for the land certificate.'
        },
        {
          title: 'Angles of Elevation, Depression and Two-Stage Field Problems',
          content: 'The angle of elevation is measured upward from the horizontal line at the observer eye, and the angle of depression looking back down is equal to it because the two horizontal lines are parallel. In a typical two-stage WASSCE figure the observer is 40 m from the foot of a vertical tower and the angle of elevation of the top is 35°, so the height is 40 tan 35° = 28.0 m to three significant figures, while the slant distance to the top is 40 / cos 35° = 48.8 m. When the observer is not on the level, or when two observation points are given on the same side of the object, draw both triangles, write the tangent equation for each, and eliminate the shared vertical side. Keep one full sketch per situation with the horizontal dashed, and the correct trigonometric ratio becomes visible instead of guessed.',
          bulletPoints: [
            'Draw the horizontal at the eye, mark the given angle above it for elevation and below it for depression.',
            'Height comes from tangent when the horizontal distance is known; the line of sight itself is the hypotenuse.',
            'Include observer eye height when the question says the instrument is 1.5 m above the ground, then add it to the answer.',
            'Two observation points on the same line give simultaneous equations: write both tangents before calculating.',
            'Round only at the final line and keep at least four figures in the working to avoid a premature accuracy loss.'
          ],
          keyTakeaway: 'Elevation and depression are alternate angles, so the same tangent ratio serves both, and the vertical side is shared by the triangles.',
          realWorldExample: 'A pupil in Cape Coast standing 40 m from the base of a lighthouse measures 35° to its lamp, and the coast-guard log records the tower height as 28.0 m, exactly as the tangent formula predicts.'
        }
      ],
      commonMistakes: [
        'Using the sine rule on two sides and their INCLUDED angle: from sides 8 cm and 11 cm with 60° between them, sin B = 11 sin 60° / 8 is meaningless because 60° is opposite neither side; the cosine rule is required.',
        'Reporting only the calculator angle in the ambiguous case: from sin B = 5/6 a candidate writes B = 56.4° only, and loses the accuracy marks for the valid second value B = 123.6° when the question expects both triangles.',
        'Placing the wrong angle in ½ab sin C: for sides 10 cm and 16 cm including 30°, writing ½(10)(16) sin(opposite angle) gives a wrong area, and 40 cm^2 becomes 69.3 cm^2 when sin 60° is used in place of sin 30°.',
        'Dropping the negative sign in the angle form of the cosine rule: from sides 7, 8 and 13 the numerator 49 + 64 - 169 is -56, so cos A = -1/2 and A = 120°, not 60°, and a candidate who takes the positive value reports the supplement.',
        'Applying Pythagoras to a non-right-angled triangle: c^2 = 8^2 + 11^2 gives 13.6 cm where the cosine rule correctly gives 97 and hence 9.85 cm, because the 60° angle is not a right angle; likewise reading the degree data 40 tan 35° on a radian-mode calculator returns about 19.0 m for the tower height, since tan 35 radians is 0.474 and not 0.700.'
      ],
      wassceExamTips: [
        'This combination appears as a Section B theory question worth typically 8 to 12 marks, so budget about ten minutes for it. Method marks (M1) are given for writing the rule correctly with substituted values, so the line sin B / 10 = sin 30° / 6 earns a mark before any arithmetic is done.',
        'Always rewrite the sine rule with the unknown in the numerator before substituting; examiners award the mark for correct transposition, and inverting after substitution is where most side-finding errors begin.',
        'When the ambiguous case is possible, present both triangles in two clearly labelled columns and state the angle-sum reason for accepting or rejecting each value; a rejected value with a reason still earns the method mark.',
        'For heights and distances, sketch the figure with the horizontal dashed and label the angle of elevation at the eye, because a labelled diagram prevents a sine-for-tangent substitution error and often carries a mark itself.',
        'Accuracy marks (A1) follow the value you actually computed, so quote the exact surd form 22√3 cm^2 first and then the three-significant-figure value 38.1 cm^2, and you remain safe whichever form the scheme requires. If an earlier side length is wrong and you use it correctly afterwards, WAEC marks the later steps as carried forward (a.f.r.), so keep working neatly rather than abandoning the question.'
      ],
      summaryChecklist: [
        'Can I decide between the sine rule and the cosine rule from the parts of the triangle that are given?',
        'Can I find every possible triangle in the ambiguous case and justify the number of answers?',
        'Can I compute the area of a triangle with ½ab sin C and quote both the exact surd and the decimal value?',
        'Can I obtain a perpendicular height by writing the same area in the form ½ × base × height?',
        'Can I solve an angle of elevation or depression problem in two dimensions and round only at the end?'
      ]
    },
    examples: [
      {
        id: 'ex-shs2-em-sine-cos-1',
        title: 'The Ambiguous Case: Two Triangles',
        problem: 'In triangle ABC, angle A = 30°, the side a opposite A is 6 cm and side b is 10 cm. Find the possible values of angle B, of angle C and of side c, and state how many triangles the data allow.',
        stepByStepSolution: [
          'Step 1 (M1): A side with its opposite angle (a and A) plus a second side (b) is sine-rule data, and the arrangement is the ambiguous SSA form.',
          'Step 2 (M1): Write the sine rule with the unknown angle on top: sin B / b = sin A / a, so sin B = b sin A / a = 10 sin 30° / 6.',
          'Step 3 (M1): Evaluate: sin B = 10 × 0.5 / 6 = 5/6 = 0.8333, so the reference angle is arcsin 0.8333 = 56.4° to 3 s.f.',
          'Step 4 (M1): Sine is positive in quadrants I and II, so B = 56.4° or B = 180° - 56.4° = 123.6°; the height test gives h = b sin A = 10 × 0.5 = 5 cm, and 5 < 6 < 10, so two triangles are expected.',
          'Step 5 (M1): Angle-sum test: 30° + 56.4° = 86.4° and 30° + 123.6° = 153.6°, both below 180°, so both values of B are accepted.',
          'Step 6 (M1): Then C = 180° - 30° - 56.4° = 93.6° in the first triangle, and C = 180° - 30° - 123.6° = 26.4° in the second.',
          'Step 7 (A1): Using c = a sin C / sin A: c = 6 sin 93.6° / sin 30° = 12.0 cm in triangle 1, and c = 6 sin 26.4° / sin 30° = 5.34 cm in triangle 2, so the data give exactly two triangles, with angles (30°, 56.4°, 93.6°) and side 12.0 cm, or angles (30°, 123.6°, 26.4°) and side 5.34 cm.'
        ],
        keyTakeaway: 'In the SSA arrangement compare a with b sin A and with b; here 5 < 6 < 10, so both supplementary angles for B are valid and two triangles exist.'
      },
      {
        id: 'ex-shs2-em-sine-cos-2',
        title: 'Third Side, Area and Height from Two Sides and the Included Angle',
        problem: 'Two sides of a triangle measure 8 cm and 11 cm and the angle between them is 60°. Find the third side, the area of the triangle and the perpendicular height drawn to the 8 cm side. Give exact forms where possible and decimals to 3 s.f.',
        stepByStepSolution: [
          'Step 1 (M1): The angle is included between the two known sides, so the cosine rule gives the third side: c^2 = 8^2 + 11^2 - 2(8)(11) cos 60°.',
          'Step 2 (M1): Substitute cos 60° = 0.5: c^2 = 64 + 121 - 176 × 0.5 = 185 - 88 = 97.',
          'Step 3 (A1): Therefore c = √97 cm exactly, which is 9.85 cm to 3 s.f.',
          'Step 4 (M1): For the area use the included angle: area = ½ × 8 × 11 × sin 60° = 44 sin 60°.',
          'Step 5 (A1): With sin 60° = √3/2, area = 44(√3/2) = 22√3 cm^2 exactly, that is 38.1 cm^2 to 3 s.f.',
          'Step 6 (M1): Write the same area with the 8 cm side as base: 38.105 = ½ × 8 × h, so h = 2 × 38.105 / 8.',
          'Step 7 (A1): Hence h = 9.53 cm, and the check h = 11 sin 60° = 9.526 cm agrees. Final answers: third side √97 ≈ 9.85 cm, area 22√3 ≈ 38.1 cm^2, height ≈ 9.53 cm (all in degree mode).'
        ],
        keyTakeaway: 'Two sides with the included angle give the third side by the cosine rule, the area by ½ab sin C, and the height by re-writing that area.'
      }
    ],
    quiz: {
      id: 'quiz-shs2-em-t2-sine-cosine-rules',
      topicId: 'shs2-em-t2-sine-cosine-rules',
      title: 'Sine and Cosine Rules Quiz',
      timeLimitMinutes: 12,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-em-sine-cos-1',
          quizId: 'quiz-shs2-em-t2-sine-cosine-rules',
          questionText: 'In triangle ABC, angle A = 30°, side a = 8 cm and side b = 15 cm. How many different triangles satisfy this data?',
          optionA: 'None',
          optionB: 'Exactly one',
          optionC: 'Exactly two',
          optionD: 'Infinitely many',
          correctOption: 'C',
          subConcept: 'Ambiguous Case of the Sine Rule',
          explanation: 'Here b sin A = 15 × 0.5 = 7.5 cm, and 7.5 < 8 < 15, so the sine rule gives sin B = 15 sin 30° / 8 = 0.9375 with B = 69.6° or 110.4°; both keep A + B below 180°, so two triangles exist. Option A is chosen by candidates who compare 8 with 15 only and forget the height test.',
          remediationTip: 'For SSA data always compute h = b sin A, then check whether a is below, equal to, or between h and b.'
        },
        {
          id: 'q-em-sine-cos-2',
          quizId: 'quiz-shs2-em-t2-sine-cosine-rules',
          questionText: 'The sides of a triangle are 7 cm, 8 cm and 13 cm. Find the size of the largest angle, in degrees.',
          optionA: '120°',
          optionB: '60°',
          optionC: '130°',
          optionD: '100°',
          correctOption: 'A',
          subConcept: 'Cosine Rule for an Angle',
          explanation: 'The largest angle lies opposite the longest side, 13 cm. cos A = (7^2 + 8^2 - 13^2) / (2 × 7 × 8) = (49 + 64 - 169)/112 = -56/112 = -1/2, so A = 120°. Option B is the trap of taking the positive value 1/2 and reporting the acute reference angle instead.',
          remediationTip: 'A negative cosine in the angle form always means an obtuse angle; read the sign before using the inverse function.'
        },
        {
          id: 'q-em-sine-cos-3',
          quizId: 'quiz-shs2-em-t2-sine-cosine-rules',
          questionText: 'Two sides of a triangle measure 10 cm and 16 cm and the angle between them is 30°. Find the area of the triangle.',
          optionA: '40√3 cm^2',
          optionB: '80 cm^2',
          optionC: '40 cm^2',
          optionD: '160 cm^2',
          correctOption: 'C',
          subConcept: 'Area Formula ½ab sin C',
          explanation: 'area = ½ × 10 × 16 × sin 30° = 80 × 0.5 = 40 cm^2. Option A comes from substituting sin 60° = √3/2 for sin 30°, the classic wrong-angle slip, and option B forgets the factor one half.',
          remediationTip: 'Half the product of the two sides first, then multiply by the sine of the INCLUDED angle.'
        },
        {
          id: 'q-em-sine-cos-4',
          quizId: 'quiz-shs2-em-t2-sine-cosine-rules',
          questionText: 'In triangle ABC, a = 8 cm, angle A = 45° and angle B = 60°. Find side b, correct to 3 significant figures.',
          optionA: '4√3 cm, about 6.93 cm',
          optionB: '8√6 cm, about 19.6 cm',
          optionC: '2√6 cm, about 4.90 cm',
          optionD: '4√6 cm, about 9.80 cm',
          correctOption: 'D',
          subConcept: 'Sine Rule for a Side',
          explanation: 'b = a sin B / sin A = 8 sin 60° / sin 45° = 8(√3/2) / (√2/2) = 8√3/√2 = 4√6 ≈ 9.80 cm. Option A keeps only the numerator factor 8 sin 60° = 4√3 and forgets to divide by sin 45°.',
          remediationTip: 'Isolate the unknown side by multiplying, then divide by the sine of the KNOWN opposite pair before using the calculator.'
        },
        {
          id: 'q-em-sine-cos-5',
          quizId: 'quiz-shs2-em-t2-sine-cosine-rules',
          questionText: 'From a point on level ground 40 m from the foot of a vertical tower, the angle of elevation of the top is 35°. Find the height of the tower, correct to 3 significant figures.',
          optionA: '22.9 m',
          optionB: '28.0 m',
          optionC: '32.8 m',
          optionD: '57.1 m',
          correctOption: 'B',
          subConcept: 'Angle of Elevation',
          explanation: 'The height is opposite the 35° angle and the 40 m ground distance is adjacent, so height = 40 tan 35° = 40 × 0.7002 = 28.0 m. Option A uses sin 35° instead of tan 35°, treating the ground distance as the hypotenuse, and option D swaps the angle to 55°.',
          remediationTip: 'Label opposite, adjacent and hypotenuse on the sketch, then choose SOH-CAH-TOA from the pair you actually hold.'
        }
      ]
    }
  },

  // =========================================================================
  // 8. Permutations and Combinations
  // =========================================================================
  {
    id: 'shs2-em-t2-permutations-combinations',
    subjectId: 'elective-maths',
    level: 'SHS 2',
    term: 2,
    orderIndex: 8,
    title: 'Permutations and Combinations',
    description: 'The counting principle, factorial notation, the decision test between nPr and nCr, restricted arrangements, committee selections and arrangements of words with repeated letters.',
    isFreeTrial: false,
    isVip: false,
    keyNotes: `• Multiplication (counting) principle: if one task can be done in m ways and a following task in n ways, the pair can be done in m × n ways; 3 shirts with 4 trousers give 12 outfits.
• Factorial: n! = n(n - 1)(n - 2)...3 × 2 × 1, with 0! = 1; 5! = 120, 6! = 720, 8! = 40320.
• Permutations (order matters): nPr = n! / (n - r)!; worked snippet "8P3 = 8! / 5! = 8 × 7 × 6 = 336".
• Combinations (order does not matter): nCr = n! / (r!(n - r)!); worked snippet "9C4 = 9! / (4!5!) = 126".
• The decision test: ask whether swapping two chosen items makes a new result. New result means permute; same result means combine.
• Link between them: nPr = nCr × r!, because each selection of r items can be ordered in r! ways; 336 = 56 × 6.
• Symmetry and edge values: nC0 = 1, nC1 = n, nCn = 1, and nCr = nC(n - r), so 9C4 = 9C5 = 126.
• Repeated letters: divide by the factorial of each repetition; "EXCELLENCE" has 10 letters with E four times, C twice and L twice, so 10! / (4!2!2!) = 3,628,800 / 96 = 37,800 arrangements.
• Worked snippet: "MISSISSIPPI" has 11 letters with I four, S four, P twice and M once, giving 11! / (4!4!2!) = 34,650 distinguishable arrangements.
• Restriction "must be together": bundle the items as one unit, arrange the units, then multiply by the internal arrangements; 5 people in a row with 2 particular people together gives 4! × 2! = 48.
• Restriction "must not be together": count all arrangements and subtract the bundled count; 5! - 4! × 2! = 120 - 48 = 72.
• Committee counts add across mutually exclusive cases: from 6 boys and 4 girls, committees of 5 with at least 3 girls give C(4,3)C(6,2) + C(4,4)C(6,1) = 60 + 6 = 66.
• Total unrestricted selection of 5 from 10 is C(10,5) = 252, so the complement (at most 2 girls) is 252 - 66 = 186; use this as a check.
• If digits may not repeat, forming a 3-digit code from 6 digits is 6P3 = 120; if repetition is allowed it is 6^3 = 216, so read the wording carefully.`,
    detailedNotes: {
      overview: 'Counting without listing is the skill being tested here. The multiplication principle, factorial notation and two formulas, nPr for ordered arrangements and nCr for unordered selections, handle every question WAEC asks at this level, including words with repeated letters, seating with restrictions and committees chosen by case work. Candidates lose more marks by choosing the wrong formula than by poor arithmetic, because 8P3 and 8C3 use the same numbers and give 336 and 56. This topic also feeds probability Paper 2 questions, where the numerator and denominator are both counts, so accuracy here pays twice.',
      introduction: 'Read a counting question twice and answer one question: does the order of the chosen items change the result? A prize list, a running order, a three-digit lock and a row of chairs are ordered, so you permute. A team, a committee, a hand of cards and a choice of questions are unordered, so you combine. Once the choice is made, the arithmetic is factorial bookkeeping: nPr = n!/(n - r)! and nCr = n!/(r!(n - r)!), with the second equal to the first divided by r!. Write the decision in one word on your script, order or selection, and the working that follows will be consistent.',
      realWorldContext: 'A prefects board at a school in Sunyani chooses 4 pupils from its 9 members to represent it at a regional conference: the order of the names on the letter does not matter, so the count is 9C4 = 126. The same school sells raffle tickets numbered with 3 different digits from the set 1 to 6, where 123 and 321 are separate tickets, giving 6P3 = 120 numbers. At a market in Cape Coast a trader packs 5 sachets of drinks chosen from 4 sizes, and a parent-teacher association elects a chair, a secretary and a treasurer from 8 volunteers, which is 8P3 = 336 distinct offices. Every one of these is the same formula applied after a different reading of the wording.',
      objectives: [
        'Apply the multiplication principle to count outcomes of staged tasks',
        'Evaluate nPr and nCr using factorial notation and state the difference between them',
        'Decide correctly whether a given situation requires permutations or combinations',
        'Count arrangements subject to restrictions such as items together, items apart or fixed positions',
        'Evaluate arrangements of words with repeated letters and selections by cases with at least or at most conditions'
      ],
      sections: [
        {
          title: 'The Counting Principle and Factorial Notation',
          content: 'Most counting problems are a sequence of small decisions, and the multiplication principle says the total is the product of the numbers of choices at each stage, provided each stage really does have that many options whatever happened before. Choosing a chairperson, then a secretary, then a treasurer from 8 volunteers gives 8 × 7 × 6 = 336, because two seats are already filled when the third is taken. If instead the three names are chosen to form a committee with no titles, each group of three has been counted 3! = 6 times, so the answer drops to 336/6 = 56. Factorial notation compresses these descending products: n! means n(n - 1)(n - 2) all the way down to 1, with 0! defined as 1 so the formulas still work at the edges. Learn the values 4! = 24, 5! = 120, 6! = 720 and 7! = 5040 by heart; WASSCE arithmetic in this topic is fast when those four numbers are automatic.',
          bulletPoints: [
            'Multiply when stages follow one another; add when the stages are alternative and mutually exclusive cases.',
            'n! grows extremely fast, so cancel factorials before evaluating rather than expanding them fully.',
            '0! = 1 by definition, which is why nC0 = 1: there is exactly one way to choose nothing.',
            'Without repetition the choices shrink by one at each stage, as in 8 × 7 × 6; with repetition they stay equal, as in 8 × 8 × 8 = 512.'
          ],
          keyTakeaway: 'Product for stages, sum for cases, and factorial for the number of ways of ordering everything.',
          realWorldExample: 'A trotro station in Kumasi fills three named seats, driver, mate and conductor, from 8 available men, which gives 8 × 7 × 6 = 336 possible crews; hiring the same three as an unlabelled cleaning team gives 56.'
        },
        {
          title: 'Permutations: Arranging Where Order Decides',
          content: 'A permutation is an arrangement, and it is counted by nPr = n!/(n - r)!, the number of ways of filling r distinct positions from n available items. The reading that makes the formula obvious is to unroll the product: 8P3 = 8 × 7 × 6 = 336, three descending factors starting at 8. When all n items are arranged in a row the count is simply n!, so five people can stand in a queue in 120 ways. Restrictions are handled by construction rather than by formula. If two particular people must sit together in a row of five, treat the pair as one bundled unit, arrange the four resulting units in 4! = 24 ways, then multiply by the 2! = 2 internal orders of the pair, giving 48. If they must sit apart, count the total and subtract the together count: 120 - 48 = 72. Fixed-position conditions, such as an odd digit at each end of a number, are best handled by filling those special positions first and only then the free ones.',
          bulletPoints: [
            'nPr answers fill-the-slots questions: r slots chosen from n items with no repetition and with order mattering.',
            'Writing 8P3 as 8!/3! instead of 8!/5! is the commonest slip; the subtracted factorial is (n - r).',
            'Bundle method for together conditions: (units)! × (internal arrangements), as in 4! × 2! = 48.',
            'Subtract the together count from the total count to answer a not-together condition.',
            'Repeated letters inside a permutation demand division by the factorial of each repetition count.'
          ],
          keyTakeaway: 'Anything that fills labelled positions is a permutation; build restrictions by bundling or by filling special slots first.',
          realWorldExample: 'A quiz team in Tamale displays its 3 finalists on a results board where first, second and third are printed separately, so 8 entrants can be displayed in 8P3 = 336 ways.'
        },
        {
          title: 'Combinations: Selecting Where Order Is Irrelevant',
          content: 'A combination is a selection, counted by nCr = n!/(r!(n - r)!), and the division by r! is precisely the removal of the ordering that permutations keep. Nine prefects can supply 9C4 = 126 different delegations, because 9P4 = 3024 lists collapse into groups of 4! = 24 identical selections. Two structural facts make checking easy: nCr = nC(n - r), so choosing 4 to go is the same count as choosing 5 to stay, and the totals across all selections of any size from n items sum to 2^n. At least and at most conditions are case work: the number of five-member committees from 6 boys and 4 girls that contain at least 3 girls is C(4,3)C(6,2) + C(4,4)C(6,1) = 4 × 15 + 1 × 6 = 66, where the two cases are disjoint and therefore added. The complement route gives the same figure from the total C(10,5) = 252 minus the 186 committees with at most 2 girls, and that double path is the best self-check available in an exam.',
          bulletPoints: [
            'Ask whether exchanging two chosen items changes the answer; if it does not, you are combining.',
            'Multiply the separate case counts, then add the cases: C(4,3) × C(6,2) = 60 is one case, C(4,4) × C(6,1) = 6 is another.',
            'Use the symmetry 9C4 = 9C5 to check a result against a smaller computation.',
            'An equation such as nC2 = 45 is solved by n(n - 1)/2 = 45, giving n = 10 since 10 × 9 = 90.'
          ],
          keyTakeaway: 'Selection is combination, and at least or at most questions are answered cleanly by cases or by the complement.',
          realWorldExample: 'A church building committee in Ho needs 3 members from its 10 executive, and because the roles are equal the count is 10C3 = 120, not 720.'
        },
        {
          title: 'Words, Repeated Letters and Counting for Probability',
          content: 'Arranging the letters of a word is a permutation with repetition, and the rule is to divide the factorial of the total number of letters by the factorials of the counts of each repeated letter. The word EXCELLENCE has 10 letters in which E appears 4 times, C twice, L twice, and X and N once each, so the number of distinguishable arrangements is 10!/(4!2!2!) = 3,628,800/96 = 37,800. MISSISSIPPI, with 11 letters, I four times, S four times, P twice and M once, gives 11!/(4!4!2!) = 34,650. Ignoring the repetition would inflate the answer by a factor of 96, and that single structural slip is what examiners expect. The same counts become numerators and denominators in probability: if three letters are drawn from the letters of the word LETTERS, the sample space and each favourable event are counted with the methods of this section, so a candidate fluent in 7P3 and 7C3 can finish such a question in under three minutes.',
          bulletPoints: [
            'Count the letters of the word explicitly on your script before writing any factorial; most wrong answers start from a miscount.',
            'Distinct arrangements = (total letters)! / (product of the factorials of the repetition counts).',
            'Conditions such as vowels together inside a word combine the bundling method with division for repeats.',
            'For probability from letters, count selections with nCr and sequences with nPr, then form the fraction.'
          ],
          keyTakeaway: 'Repeated letters force division, and every WASSCE word-arrangement question is one miscount away from a wrong answer.',
          realWorldExample: 'A tailor in Adum, Kumasi stamps initial blocks and counts the arrangements of the letters of EXCELLENCE as 37,800 when pricing a custom monogram sheet.'
        }
      ],
      commonMistakes: [
        'Permuting when combining: answering 3024 for the number of delegations of 4 from 9 people, which is 9P4, instead of 9C4 = 126; the roles do not differ, so the order must be divided out by 4! = 24.',
        'Subtracting the wrong factorial in nPr: writing 8P3 = 8!/3! = 6720 instead of 8!/5! = 336; the denominator is (n - r)!, the items left unused.',
        'Forgetting the internal order of a bundle: for two particular people who must sit together in a row of five, reporting 4! = 24 and losing the second factor, since the pair can swap in 2! ways to give 48.',
        'Missing a case in an at least question: counting only 3 girls and 2 boys as 60 ways and forgetting the 4 girls and 1 boy case of 6 ways, so 66 becomes 60.',
        'Treating repeated letters as distinct: giving 10! = 3,628,800 arrangements for EXCELLENCE instead of dividing by 4!2!2! to obtain 37,800.'
      ],
      wassceExamTips: [
        'Paper 1 objective questions on this topic are usually a single evaluation such as 6P3 or 7C2, worth one mark. Compute it as a short descending product, 6 × 5 × 4 = 120, instead of expanding factorials, and you save roughly a minute per item.',
        'In Section B the restricted-arrangement question is typically 6 to 8 marks, with method marks (M1) awarded for the setup line such as 10!/(4!2!2!) even before the value is found; write the factorial expression on its own line to bank that mark.',
        'State the choice of formula in words at the start of the answer, for example "order does not matter, so this is a combination". Examiners can then follow the method and award accuracy marks (A1) on a value carried forward (a.f.r.) if a later arithmetic slip occurs.',
        'Keep a small table of factorials from 0! to 7! in rough working space at the top of the answer booklet; it removes the most common source of arithmetic slips and frees up time for the probability question that uses these counts.',
        'Read whether repetition is allowed before choosing between nPr and n^r: three digits from six symbols without repetition give 6P3 = 120, with repetition 6^3 = 216, and WASSCE wording usually signals which is meant.'
      ],
      summaryChecklist: [
        'Can I apply the multiplication principle to a staged counting task and say when to add instead?',
        'Can I evaluate nPr and nCr quickly with cancelled factorials and explain the difference in one sentence?',
        'Can I tell from the wording whether a situation is a permutation or a combination?',
        'Can I handle together, apart and fixed-position restrictions by bundling or by subtraction?',
        'Can I count arrangements of a word with repeated letters and committee selections with at least conditions?'
      ]
    },
    examples: [
      {
        id: 'ex-shs2-em-perm-comb-1',
        title: 'Arrangements of a Word with Repeated Letters',
        problem: 'Find the number of distinguishable arrangements of all the letters of the word EXCELLENCE.',
        stepByStepSolution: [
          'Step 1 (M1): Count the letters: E, X, C, E, L, L, E, N, C, E is a word of 10 letters, so the unrestricted count would be 10!.',
          'Step 2 (M1): Tally the repetitions: E occurs 4 times, C occurs twice, L occurs twice, while X and N occur once each, and 4 + 2 + 2 + 1 + 1 = 10, which confirms the count.',
          'Step 3 (M1): Divide the total factorial by the factorial of each repetition: 10! / (4! × 2! × 2!).',
          'Step 4 (M1): Evaluate the pieces: 10! = 3,628,800 and 4! × 2! × 2! = 24 × 2 × 2 = 96.',
          'Step 5 (A1): Perform the division: 3,628,800 / 96 = 37,800.',
          'Step 6 (A1): Answer: 37,800 distinguishable arrangements.',
          'Step 7 (A1): Sanity check: if every letter were distinct the count would be 10! = 3,628,800, and 37,800 × 96 returns that value, so the division by the repetitions is exactly right.'
        ],
        keyTakeaway: 'Count the letters, tally the repetitions, then divide the total factorial by each repetition factorial.'
      },
      {
        id: 'ex-shs2-em-perm-comb-2',
        title: 'A Committee with an At Least Condition',
        problem: 'A committee of 5 is to be chosen from 6 boys and 4 girls. In how many ways can this be done if the committee must contain at least 3 girls?',
        stepByStepSolution: [
          'Step 1 (M1): Selection has no order, so combinations are used, and the condition at least 3 girls splits into two mutually exclusive cases: 3 girls with 2 boys, or 4 girls with 1 boy.',
          'Step 2 (M1): Case 1 counts C(4,3) ways to choose the girls and C(6,2) ways to choose the boys.',
          'Step 3 (M1): Evaluate case 1: C(4,3) = 4 and C(6,2) = 15, and by the multiplication principle 4 × 15 = 60 ways.',
          'Step 4 (M1): Case 2 counts C(4,4) × C(6,1) = 1 × 6 = 6 ways.',
          'Step 5 (M1): The two cases cannot happen together, so add: 60 + 6 = 66 ways.',
          'Step 6 (A1): Answer: 66 different committees contain at least 3 girls.',
          'Step 7 (A1): Check by the complement: the total number of committees is C(10,5) = 252, and committees with at most 2 girls number C(4,0)C(6,5) + C(4,1)C(6,4) + C(4,2)C(6,3) = 6 + 60 + 120 = 186, and 252 - 186 = 66, which agrees.'
        ],
        keyTakeaway: 'Split at least into disjoint cases, multiply within a case, add across cases, then confirm with the complement.'
      }
    ],
    quiz: {
      id: 'quiz-shs2-em-t2-permutations-combinations',
      topicId: 'shs2-em-t2-permutations-combinations',
      title: 'Permutations and Combinations Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-em-perm-comb-1',
          quizId: 'quiz-shs2-em-t2-permutations-combinations',
          questionText: 'Three prizes of different values are to be awarded to 8 students, with no student receiving more than one prize. In how many ways can the prizes be awarded?',
          optionA: '56',
          optionB: '1120',
          optionC: '336',
          optionD: '512',
          correctOption: 'C',
          subConcept: 'Permutations of Distinct Positions',
          explanation: 'The prizes have different values, so who gets which prize matters: this is 8P3 = 8!/5! = 8 × 7 × 6 = 336. Option A, 56, is 8C3, which would be correct only if the three prizes were identical, and option B comes from dividing by 3! instead of by 5!.',
          remediationTip: 'Ask whether swapping two winners changes the result; if it does, permute with n!/(n - r)!.'
        },
        {
          id: 'q-em-perm-comb-2',
          quizId: 'quiz-shs2-em-t2-permutations-combinations',
          questionText: 'From its 9 prefects, a school chooses 4 to attend a conference as an unordered delegation. How many different delegations are possible?',
          optionA: '126',
          optionB: '84',
          optionC: '3024',
          optionD: '36',
          correctOption: 'A',
          subConcept: 'Combination Evaluation',
          explanation: 'An unordered delegation is a selection, so 9C4 = 9!/(4!5!) = (9 × 8 × 7 × 6)/(4 × 3 × 2 × 1) = 3024/24 = 126. Option C, 3024, is the permutation 9P4, which counts the same delegation 4! = 24 times.',
          remediationTip: 'Divide the permutation by the factorial of the number chosen whenever the roles are identical.'
        },
        {
          id: 'q-em-perm-comb-3',
          quizId: 'quiz-shs2-em-t2-permutations-combinations',
          questionText: 'Which expression gives the number of distinguishable arrangements of all the letters of the word MISSISSIPPI?',
          optionA: '11!/(8!3!)',
          optionB: '4! × 4! × 2! × 1!',
          optionC: '11!',
          optionD: '11!/(4!4!2!)',
          correctOption: 'D',
          subConcept: 'Repeated Letters',
          explanation: 'MISSISSIPPI has 11 letters with I repeated 4 times, S repeated 4 times, P repeated twice and M once, so the count is 11!/(4!4!2!) = 34,650. Option C ignores the repetitions and counts each distinguishable arrangement 1,152 times.',
          remediationTip: 'Write the letter tallies in a row first; the divisors are exactly the factorials of those tallies.'
        },
        {
          id: 'q-em-perm-comb-4',
          quizId: 'quiz-shs2-em-t2-permutations-combinations',
          questionText: 'In how many ways can 5 people sit in a row of 5 seats if 2 particular people must sit together?',
          optionA: '120',
          optionB: '48',
          optionC: '24',
          optionD: '12',
          correctOption: 'B',
          subConcept: 'Restriction: Items Together',
          explanation: 'Treat the pair as one bundled unit, giving 4 units that can be arranged in 4! = 24 ways, and inside the bundle the pair can be ordered in 2! = 2 ways, so 24 × 2 = 48. Option C forgets the internal swap and option A is the unrestricted 5!.',
          remediationTip: 'Bundle, arrange the units, then always multiply by the arrangements inside the bundle.'
        },
        {
          id: 'q-em-perm-comb-5',
          quizId: 'quiz-shs2-em-t2-permutations-combinations',
          questionText: 'Find the value of n for which nC2 = 45.',
          optionA: '9',
          optionB: '15',
          optionC: '10',
          optionD: '20',
          correctOption: 'C',
          subConcept: 'Solving a Combination Equation',
          explanation: 'nC2 = n(n - 1)/2 = 45 gives n(n - 1) = 90, and the two consecutive factors of 90 are 10 and 9, so n = 10. The other options fail the test: 9C2 = 36, 15C2 = 105 and 20C2 = 190, so each of them comes from guessing at the arithmetic instead of forming the product n(n - 1).',
          remediationTip: 'Clear the fraction first, then look for two consecutive whole numbers whose product is the result.'
        }
      ]
    }
  },

  // =========================================================================
  // 9. Statistics: Grouped Data and Dispersion
  // =========================================================================
  {
    id: 'shs2-em-t2-statistics-grouped',
    subjectId: 'elective-maths',
    level: 'SHS 2',
    term: 2,
    orderIndex: 9,
    title: 'Statistics: Grouped Data and Dispersion',
    description: 'Frequency tables with class boundaries and midpoints, the mean of grouped data by direct sum and by coding, median and modal classes, and the range, mean deviation, variance and standard deviation.',
    isFreeTrial: false,
    isVip: false,
    keyNotes: `• A continuous distribution stated in whole numbers, for example 21-30, has lower boundary 20.5 and upper boundary 30.5; the boundaries close the half-unit gaps between classes.
• Class width = upper boundary - lower boundary = 30.5 - 20.5 = 10, and the midpoint (class mark) = (lower + upper limit)/2; for 40-49 the midpoint is 44.5.
• Mean of grouped data: x-bar = Σfx / Σf, using the midpoints as the representative values of the classes.
• Coding shortcut: with u = (x - A)/h, the mean is x-bar = A + h(Σfu / Σf); it keeps the arithmetic in small whole numbers.
• Worked table: marks 1-10, 11-20, 21-30, 31-40, 41-50 with frequencies 4, 8, 12, 10, 6 give Σf = 40, midpoints 5.5, 15.5, 25.5, 35.5, 45.5 and Σfx = 1,080, so the mean is 1,080/40 = 27 marks.
• With A = 25.5 and h = 10 the coded values are -2, -1, 0, 1, 2, giving Σfu = 6 and mean = 25.5 + 10(6/40) = 25.5 + 1.5 = 27 marks, the same answer.
• Median position for N observations = (N + 1)/2, here the 20.5th of the 40 ordered values, and the median class is the class whose cumulative frequency first reaches that position.
• Modal class = the class with the highest frequency, here 21-30 with frequency 12; for unequal class widths compare histogram bar heights, which are frequency divided by class width.
• Variance of grouped data: σ^2 = Σf(x - x-bar)^2 / Σf; for the worked table Σf(x - x-bar)^2 = 5,710, so σ^2 = 5,710/40 = 142.75 square marks.
• Coded variance: σ^2 = h^2[Σfu^2/Σf - (Σfu/Σf)^2] = 100[58/40 - (6/40)^2] = 100[1.45 - 0.0225] = 142.75.
• Standard deviation = √variance = √142.75 = 11.9 marks (3 s.f.); it is in the original unit while the variance is in squared units.
• Using the divisor Σf - 1 = 39 instead gives the sample variance 146.4 and sample standard deviation 12.1, so always state which divisor the question intends.
• Mean deviation about the mean = Σf|x - x-bar|/Σf = 392/40 = 9.8 marks for the worked table, a smaller figure than the standard deviation because absolute values downweight extreme deviations while squaring magnifies them.
• Range of a grouped distribution = highest upper boundary - lowest lower boundary = 50.5 - 0.5 = 50 marks.
• An ogive (cumulative frequency curve) gives the median at the 50th percentile, quartiles at the 25th and 75th percentiles, and any percentile by reading across then down.`,
    detailedNotes: {
      overview: 'When a class of forty pupils sits a test, the raw list of marks is unreadable, so the data are packed into classes and every calculation is done from the frequency table. That packing changes the arithmetic: the mean uses class midpoints, the median is located by cumulative frequency, and dispersion is measured by the variance and standard deviation of those midpoints about the mean. WAEC sets a grouped-data statistics question in the theory paper in most years, usually asking for the mean, then the variance or standard deviation, then an interpretation sentence. Coding with u = (x - A)/h is what makes the whole question finishable in eight minutes with a plain calculator.',
      introduction: 'Read a grouped question in three stages. First, repair the table: write the class boundaries, the midpoints, and a cumulative frequency column. Second, choose the arithmetic route: direct sums of fx, or coding with an assumed mean A and class width h, which converts every midpoint into a small integer. Third, answer the question that was asked, remembering that the mean sits in the units of the data, the variance in squared units, and the standard deviation back in the original units. Interpretation is a sentence, not a number, and it carries a mark of its own, so practise writing statements such as the typical pupil scored 27 marks and most scores lay within about 12 marks of that value.',
      realWorldContext: 'A senior house master in Sekondi records the marks of 40 pupils in an end-of-term Mathematics test as the grouped distribution 1-10 with 4 pupils, 11-20 with 8, 21-30 with 12, 31-40 with 10 and 41-50 with 6; the mean of 27 marks and standard deviation of 11.9 marks decide whether the class needs a revision programme before WASSCE. A cocoa buying clerk in Sunyani weighs purchased lots into classes of 10 kilograms to report an average advance per farmer in GH¢, and a clinic record officer in Tamale groups the weights of children into classes to find the median class before a nutrition survey. In each case the individual values are gone and only the table remains, so every reported figure is computed from midpoints and boundaries.',
      objectives: [
        'Construct and repair a grouped frequency table with class boundaries, midpoints, frequency and cumulative frequency',
        'Calculate the mean of grouped data directly and by coding with an assumed mean and class width',
        'Identify the median class and the modal class from cumulative and ordinary frequencies',
        'Compute the range, mean deviation, variance and standard deviation of grouped data and state their units',
        'Read the median, quartiles and percentiles from an ogive and interpret a measure of dispersion in context'
      ],
      sections: [
        {
          title: 'Boundaries, Midpoints and the Shape of the Table',
          content: 'Classes written 1-10, 11-20 and so on are recorded to whole marks, so the true class 21-30 runs from 20.5 to 30.5; those boundaries remove the gap that would otherwise appear in a histogram, where bars must touch. The midpoint, also called the class mark, is the value used to represent every observation in the class, so 21-30 is represented by 25.5, and the class width is the difference of the boundaries, 30.5 - 20.5 = 10. A fully repaired table therefore carries five columns: class, frequency, midpoint x, the product fx and the cumulative frequency. Adding a sixth column of fu after coding is what turns a heavy computation into small whole numbers. Two table faults cost marks in WASSCE: a missing cumulative column, which makes the median question unanswerable, and midpoints taken as whole numbers such as 25 instead of 25.5, which shifts every later statistic.',
          bulletPoints: [
            'Class boundaries for whole-number data sit half a unit below and half a unit above the stated limits.',
            'Midpoint = (lower boundary + upper boundary)/2, which equals (lower limit + upper limit)/2; for 40-49 it is 44.5.',
            'Class width is a difference of boundaries, not of limits, and equal widths are what let frequencies be compared directly.',
            'Cumulative frequency rises to the total frequency and never decreases; the last entry equals Σf.',
            'For unequal widths, the modal class is found from frequency density, which is frequency divided by class width.'
          ],
          keyTakeaway: 'Repair the table first: boundaries, midpoints, fx and cumulative frequency, and every later part becomes substitution.',
          realWorldExample: 'A record officer in Ho tabulates GH¢ mobile-money transfer amounts in classes 100-199, 200-299 and so on, so the class 200-299 is represented by 249.5 and its boundaries are 199.5 to 299.5.'
        },
        {
          title: 'The Mean of Grouped Data, Direct and Coded',
          content: 'The grouped mean is x-bar = Σfx/Σf, and the assumption behind it is that every value in a class equals that class midpoint. For the distribution 1-10 with frequency 4, 11-20 with 8, 21-30 with 12, 31-40 with 10 and 41-50 with 6, the midpoints are 5.5, 15.5, 25.5, 35.5 and 45.5 and the products are 22, 124, 306, 355 and 273, which total 1,080 over 40 pupils, giving a mean of exactly 27 marks. Coding reproduces the same figure with easier arithmetic: take A = 25.5 and h = 10, code u = (x - A)/h so that u runs -2, -1, 0, 1, 2, compute Σfu = 4(-2) + 8(-1) + 12(0) + 10(1) + 6(2) = 6, and then write mean = A + h(Σfu/Σf) = 25.5 + 10(6/40) = 25.5 + 1.5 = 27 marks. The coding step that candidates omit is multiplying the correction by h; reporting 25.5 + 0.15 as the mean is a boundary-free way of losing the accuracy mark.',
          bulletPoints: [
            'Every class contributes midpoint times frequency; the sum of those products divided by Σf is the mean.',
            'Coding gives mean = A + h(Σfu/Σf), with A the midpoint chosen as zero and h the class width.',
            'Choose A as the midpoint of the largest or central class so that the u values stay small and mostly single digit.',
            'The coded mean of 27 marks equals the direct mean 1,080/40, and doing both is a two-minute check.',
            'A mean of grouped data is an approximation; state that it rests on the midpoint assumption.'
          ],
          keyTakeaway: 'Mean = Σfx/Σf, or equivalently A + h(Σfu/Σf) when the midpoints are coded.',
          realWorldExample: 'A shopkeeper in Kumasi records daily profits in classes and finds a coded mean of GH¢ 270 per trading day, which he uses to plan restocking for the following week.'
        },
        {
          title: 'Median Class, Modal Class and Reading an Ogive',
          content: 'The median of grouped data is located, not computed exactly. With 40 observations the median position is the 20.5th value, and the cumulative frequencies 4, 12, 24, 34 and 40 show that the 20.5th value falls in the class 21-30, because that class runs from the 13th to the 24th observation. The modal class is simply the class with the greatest frequency, here 21-30 with 12 pupils, and where class widths differ it must be chosen from frequency densities instead. For a finer answer, the median is estimated from an ogive: plot cumulative frequency against upper class boundary, read half the total frequency on the vertical axis, move across to the curve and down to the horizontal axis, and the crossing gives the median. The same curve gives the lower quartile at one quarter of the total, the upper quartile at three quarters, and any percentile such as the 80th, so one sketch answers four questions.',
          bulletPoints: [
            'Median position = (N + 1)/2 for a stated list, and N/2 is accepted for grouped work; both land in the same class here.',
            'The median class is the first class whose cumulative frequency reaches or passes the median position.',
            'Interpolation inside the median class uses median = L + ((position - previous cumulative)/frequency of class) × width.',
            'An ogive is plotted against upper class boundaries and always rises from zero to the total frequency.',
            'A distribution whose mean exceeds its median is skewed to the right, which is a common interpretation mark.'
          ],
          keyTakeaway: 'Cumulative frequency locates the median class, the tallest bar gives the modal class, and the ogive refines both.',
          realWorldExample: 'A health officer in Tamale draws an ogive of the weights of 60 children and reports the median weight class as the class holding the 30th child on the cumulative curve.'
        },
        {
          title: 'Dispersion: Range, Mean Deviation, Variance and Standard Deviation',
          content: 'Averages say nothing about spread, so WAEC pairs every mean with a measure of dispersion. The range of a grouped distribution is the highest upper boundary minus the lowest lower boundary, which for classes 1-10 to 41-50 is 50.5 - 0.5 = 50 marks. The mean deviation about the mean, Σf|x - x-bar|/Σf, is 392/40 = 9.8 marks for the worked table. The variance is the mean of the squared deviations, σ^2 = Σf(x - x-bar)^2/Σf = 5,710/40 = 142.75 square marks, and the standard deviation is its square root, √142.75 = 11.9 marks to three significant figures. Coding gives the same variance faster through σ^2 = h^2[Σfu^2/Σf - (Σfu/Σf)^2] = 100[1.45 - 0.0225] = 142.75, and the crucial factor h^2 = 100 is exactly what is forgotten when a candidate reports 1.20 as the standard deviation. Because squaring magnifies outliers, the standard deviation always exceeds the mean deviation, and a comparison of the two is a legitimate examination comment.',
          bulletPoints: [
            'State the divisor: WAEC uses Σf for a complete set of observations, while a sample uses Σf - 1 and gives variance 146.4 and standard deviation 12.1 here.',
            'Variance carries squared units, marks squared; the standard deviation restores the original unit, marks.',
            'Coding rule: variance = h^2 times the variance of the coded values, and standard deviation = h times the standard deviation of the coded values.',
            'Two classes with the same mean can have different standard deviations, which is exactly what a comparison question tests.',
            'The range uses boundaries, not limits, so quoting 49 marks instead of 50 for this table is a boundary slip.'
          ],
          keyTakeaway: 'Square the deviations, divide by the total frequency, take the square root, and remember the factor h^2 when coding.',
          realWorldExample: 'A coach in Cape Coast compares two fielding squads whose mean throw distances are both 27 m but whose standard deviations are 11.9 m and 6.2 m, and selects the more consistent squad.'
        }
      ],
      commonMistakes: [
        'Using the class limits instead of the midpoints: writing 21 or 30 for the class 21-30 rather than 25.5, so a mean that should be 27 marks comes out as 25 or 30.',
        'Forgetting the factor h^2 in coded variance: reporting Σfu^2/Σf - (Σfu/Σf)^2 = 1.4275 as the variance, or its square root 1.20 as the standard deviation, when the true variance is 100 × 1.4275 = 142.75 square marks.',
        'Quoting the variance as the standard deviation: leaving the answer as 142.75 marks squared and losing the accuracy mark for the value 11.9 marks, which is the figure in the original unit.',
        'Taking cumulative frequency down a column of ordinary frequencies, or using the last cumulative value 40 as the median position instead of the 20.5th observation.',
        'Applying the divisor Σf - 1 when the question asks for the variance of the whole distribution, or ignoring it when the question says sample, and so reporting 12.1 where 11.9 was required without ever naming the divisor used.'
      ],
      wassceExamTips: [
        'Draw a five-column table, class, frequency, midpoint, fx and cumulative frequency, and head each column on your script. Method marks (M1) are awarded for a correct table, and a well-built table makes the later parts pure substitution, so budget about eight minutes for the whole question.',
        'The variance and standard deviation part is typically 4 to 6 marks: one mark for the deviation or coded column, one for squaring and multiplying by frequency, one for dividing by Σf, and the accuracy mark (A1) for the square root.',
        'Write the divisor you used as a note, for example variance = Σf(x - x-bar)^2/Σf with Σf = 40, so the scheme can follow the answer even when the booklet formula differs.',
        'For interpretation, answer in the language of the story: a standard deviation of 11.9 marks means the pupils spread roughly 12 marks either side of the 27 mark average; a bare number without words usually forfeits the mark.',
        'Do not round intermediate sums. Keep 5,710 and 1.4275 exact through the working and round only the final standard deviation to 11.9, otherwise the accuracy mark is lost to an early rounding; where an early midpoint slip is used consistently afterwards, WAEC still awards the method marks and treats the error as carried forward (a.f.r.).'
      ],
      summaryChecklist: [
        'Can I write the class boundaries, midpoints and cumulative frequency for any grouped table?',
        'Can I find the mean of grouped data by direct sums and confirm it by coding with A and h?',
        'Can I state the median class and the modal class with a reason from the cumulative and ordinary frequencies?',
        'Can I compute the variance and standard deviation of grouped data, including the coded formula with the factor h^2?',
        'Can I compare two distributions using the range, mean deviation and standard deviation and say which is more consistent?'
      ]
    },
    examples: [
      {
        id: 'ex-shs2-em-stat-1',
        title: 'Mean of Grouped Data by Coding',
        problem: 'The marks of 40 pupils in a test are grouped as follows: 1-10 with 4 pupils, 11-20 with 8, 21-30 with 12, 31-40 with 10 and 41-50 with 6. Estimate the mean mark using coding with an assumed mean of 25.5 and class width 10.',
        stepByStepSolution: [
          'Step 1 (M1): Read off the class midpoints x = 5.5, 15.5, 25.5, 35.5, 45.5, each the centre of a class of width 10, and note the frequencies f = 4, 8, 12, 10, 6 with Σf = 40.',
          'Step 2 (M1): Code the midpoints with u = (x - A)/h where A = 25.5 and h = 10, giving u = -2, -1, 0, 1, 2.',
          'Step 3 (M1): Form the products fu: 4(-2) = -8, 8(-1) = -8, 12(0) = 0, 10(1) = 10, 6(2) = 12, so Σfu = -8 - 8 + 0 + 10 + 12 = 6.',
          'Step 4 (M1): Apply the coded mean formula x-bar = A + h(Σfu/Σf) = 25.5 + 10(6/40).',
          'Step 5 (A1): Evaluate the correction: 10 × 0.15 = 1.5, so the mean is 25.5 + 1.5 = 27 marks.',
          'Step 6 (A1): Answer: the estimated mean mark is 27 (exact on these midpoints).',
          'Step 7 (A1): Direct check: Σfx = 22 + 124 + 306 + 355 + 273 = 1,080 and 1,080/40 = 27, which agrees with the coded value.'
        ],
        keyTakeaway: 'Code to small integers, then undo the coding with mean = A + h(Σfu/Σf); the factor h is never skipped.'
      },
      {
        id: 'ex-shs2-em-stat-2',
        title: 'Variance and Standard Deviation of the Same Distribution',
        problem: 'For the same grouped distribution of 40 pupils with mean 27 marks, find the variance and the standard deviation, taking the divisor to be the total frequency.',
        stepByStepSolution: [
          'Step 1 (M1): Use the coded variance formula σ^2 = h^2[Σfu^2/Σf - (Σfu/Σf)^2], with h = 10 and Σf = 40.',
          'Step 2 (M1): Compute Σfu^2 from the coded values: 4(4) + 8(1) + 12(0) + 10(1) + 6(4) = 16 + 8 + 0 + 10 + 24 = 58.',
          'Step 3 (M1): Evaluate the two terms inside the bracket: Σfu^2/Σf = 58/40 = 1.45 and (Σfu/Σf)^2 = (6/40)^2 = 0.15^2 = 0.0225.',
          'Step 4 (M1): Subtract, then multiply by h^2 = 100: σ^2 = 100(1.45 - 0.0225) = 100(1.4275).',
          'Step 5 (A1): Variance = 142.75 square marks.',
          'Step 6 (A1): Standard deviation = √142.75 = 11.9 marks to 3 significant figures (11.948 marks before rounding).',
          'Step 7 (A1): Check with the raw definition: Σf(x - x-bar)^2 = 5,710 and 5,710/40 = 142.75, so the coded route is confirmed; had the divisor been Σf - 1 = 39, the sample values would have been 146.4 and 12.1.'
        ],
        keyTakeaway: 'Coded variance still needs the factor h^2 = 100, and the standard deviation is the square root of the variance, in the original unit.'
      }
    ],
    quiz: {
      id: 'quiz-shs2-em-t2-statistics-grouped',
      topicId: 'shs2-em-t2-statistics-grouped',
      title: 'Grouped Data Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-em-stat-grouped-1',
          quizId: 'quiz-shs2-em-t2-statistics-grouped',
          questionText: 'Marks are recorded to whole numbers and grouped as 21-30. Which pair gives the class boundaries of this class?',
          optionA: '20.5 and 30.5',
          optionB: '21.0 and 30.0',
          optionC: '20.5 and 30.0',
          optionD: '21.5 and 30.5',
          correctOption: 'A',
          subConcept: 'Class Boundaries',
          explanation: 'Whole-number classes leave a gap of one unit between the upper limit 30 and the next lower limit 31, so the true class extends half a unit beyond each limit: 20.5 to 30.5, a width of 10. Option B keeps the printed limits and would leave a gap in a histogram.',
          remediationTip: 'Subtract 0.5 from the lower limit and add 0.5 to the upper limit whenever the data are whole numbers.'
        },
        {
          id: 'q-em-stat-grouped-2',
          quizId: 'quiz-shs2-em-t2-statistics-grouped',
          questionText: 'Find the class midpoint (class mark) of the class 40-49.',
          optionA: '44',
          optionB: '45',
          optionC: '89',
          optionD: '44.5',
          correctOption: 'D',
          subConcept: 'Class Midpoint',
          explanation: 'Midpoint = (lower limit + upper limit)/2 = (40 + 49)/2 = 44.5, the same value obtained from the boundaries 39.5 and 49.5. Option B comes from averaging 41 and 49, that is from shifting the lower boundary.',
          remediationTip: 'Add the two printed limits and halve; the answer must carry the same half-unit offset as the boundaries.'
        },
        {
          id: 'q-em-stat-grouped-3',
          quizId: 'quiz-shs2-em-t2-statistics-grouped',
          questionText: 'The marks of 40 pupils are grouped as 1-10 (4 pupils), 11-20 (8), 21-30 (12), 31-40 (10), 41-50 (6). Find the mean mark, using class midpoints.',
          optionA: '25.5',
          optionB: '27',
          optionC: '24',
          optionD: '30',
          correctOption: 'B',
          subConcept: 'Mean of Grouped Data',
          explanation: 'The midpoints 5.5, 15.5, 25.5, 35.5 and 45.5 give Σfx = 22 + 124 + 306 + 355 + 273 = 1,080, and 1,080/40 = 27 marks. Option A, 25.5, is the unweighted mean of the five midpoints and also the assumed mean left without its correction term; option C, 24, subtracts that correction instead of adding it; option D, 30, averages the upper class limits.',
          remediationTip: 'Multiply each midpoint by its frequency, add the products, then divide by the total frequency; with coding add h(Σfu/Σf) to the assumed mean.'
        },
        {
          id: 'q-em-stat-grouped-4',
          quizId: 'quiz-shs2-em-t2-statistics-grouped',
          questionText: 'For the same distribution, Σfu = 6, Σfu^2 = 58, h = 10 and Σf = 40 in the coding u = (x - 25.5)/10. Find the standard deviation, taking the divisor to be Σf, correct to 3 significant figures.',
          optionA: '11.9',
          optionB: '142.75',
          optionC: '1.20',
          optionD: '1.43',
          correctOption: 'A',
          subConcept: 'Standard Deviation by Coding',
          explanation: 'Variance = h^2[Σfu^2/Σf - (Σfu/Σf)^2] = 100[1.45 - 0.0225] = 142.75 square marks, so the standard deviation is √142.75 = 11.9 marks. Option B quotes the variance instead of the standard deviation, and options C and D come from dropping the factor h^2 = 100.',
          remediationTip: 'Restore the scale with h^2 for variance and with h for standard deviation, then take the square root last.'
        },
        {
          id: 'q-em-stat-grouped-5',
          quizId: 'quiz-shs2-em-t2-statistics-grouped',
          questionText: 'A distribution of 35 scores has classes 1-10, 11-20, 21-30, 31-40 and 41-50 with frequencies 3, 7, 12, 9 and 4. Which class contains the median?',
          optionA: '1-10',
          optionB: '11-20',
          optionC: '21-30',
          optionD: '31-40',
          correctOption: 'C',
          subConcept: 'Median Class',
          explanation: 'The cumulative frequencies are 3, 10, 22, 31 and 35, and the median position is the 18th of the 35 ordered values, that is (35 + 1)/2. The 18th value lies in the class whose cumulative frequency first reaches it, which is 21-30 running from the 11th to the 22nd observation. Option B is chosen by candidates who compare the position with the frequency 12 instead of the cumulative total.',
          remediationTip: 'Build the cumulative column first, halve the total to find the position, then read down to the first cumulative value that equals or exceeds it.'
        }
      ]
    }
  },

  // =========================================================================
  // 10. Probability of Combined Events
  // =========================================================================
  {
    id: 'shs2-em-t2-probability',
    subjectId: 'elective-maths',
    level: 'SHS 2',
    term: 2,
    orderIndex: 10,
    title: 'Probability of Combined Events',
    description: 'Sample spaces and equally likely outcomes, the addition rule for mutually exclusive and overlapping events, the multiplication rule for independent events, replacement, tree diagrams and the complement rule.',
    isFreeTrial: false,
    isVip: false,
    keyNotes: `• A fair die has 6 equally likely faces, so two dice give 6 × 6 = 36 equally likely ordered outcomes; the sums are NOT equally likely, because only one pair gives 2 while five pairs give 7.
• Probability of an event: P(E) = favourable outcomes / total outcomes, with 0 ≤ P(E) ≤ 1 and P(not E) = 1 - P(E).
• Addition rule: P(A or B) = P(A) + P(B) - P(A and B); when A and B cannot happen together it reduces to P(A) + P(B).
• Mutually exclusive events share no outcome, so P(A and B) = 0; a single card cannot be both a king and a queen, but a card can be both red and a king.
• Worked snippet: "two dice, the sum is 8 or the sum exceeds 10" gives 5/36 + 3/36 = 8/36 = 2/9, since one throw has exactly one sum.
• Multiplication rule for independent events: P(A and B) = P(A) × P(B); a coin toss does not influence a die throw, so the two are independent.
• Without replacement the second probability changes because the pool shrinks: from 5 red and 3 blue counters, P(both red) = 5/8 × 4/7 = 20/56 = 5/14.
• With replacement the draws are independent: from 4 red and 6 green counters, P(both red) = 4/10 × 4/10 = 16/100 = 4/25 = 0.16.
• A tree diagram multiplies along the branches and adds the complete paths; one of each colour gives 5/8 × 3/7 + 3/8 × 5/7 = 15/56 + 15/56 = 30/56 = 15/28.
• At least one questions are fastest through the complement: P(at least one red) = 1 - P(no red) = 1 - 3/8 × 2/7 = 1 - 3/28 = 25/28.
• Worked snippet: "a fair die thrown twice, at least one six" = 1 - (5/6)^2 = 1 - 25/36 = 11/36, and 11 of the 36 ordered pairs do contain a six.
• Worked snippet: "P(A) = 0.4, P(B) = 0.5 and P(A and B) = 0.2" gives P(A or B) = 0.4 + 0.5 - 0.2 = 0.7, not the naive sum 0.9.
• Worked snippet: passing Mathematics with probability 3/5 and English with probability 2/3 independently gives P(at least one) = 1 - 2/5 × 1/3 = 1 - 2/15 = 13/15, while P(both) = 3/5 × 2/3 = 2/5.
• Independent and mutually exclusive are different ideas: exclusive events cannot both occur, so they are not independent unless one of them has probability zero.
• Check a tree by adding every path: 5/14 + 15/28 + 3/28 = 10/28 + 15/28 + 3/28 = 28/28 = 1, so no case is missing.
• Quote probabilities as fractions in lowest terms unless a decimal is asked for, and use a common denominator when adding branch probabilities.`,
    detailedNotes: {
      overview: 'A combined event is made of two simpler events, and the whole of this topic is deciding whether to add their probabilities or to multiply them. Add when the event is satisfied by either outcome, subtracting any overlap; multiply when both outcomes must happen, adjusting the second probability if the draws are made without replacement. WAEC likes this topic because a single question can test listing, the addition rule, the multiplication rule and the complement in one breath, and it appears both as an objective item in Paper 1 and as a five to eight mark theory question in Paper 2. Candidates who can name the structure of the event before calculating almost always score; candidates who guess a rule usually do not.',
      introduction: 'Start every probability question by building the sample space in writing: 36 ordered pairs for two dice, 8 counters for a bag, 52 cards for a pack. Then translate the words into set language. The word or signals a union, so the addition rule is coming; the word and with both parts required signals an intersection, so the multiplication rule is coming; the phrase at least one signals the complement, because direct counting would need several cases. Finally decide whether one draw changes the next. If nothing is replaced, the second probability uses a smaller pool and the events are dependent; if the item goes back, the two draws are independent and the same fraction is used twice.',
      realWorldContext: 'A secondary school in Ho raises funds with a raffle of 40 tickets at GH¢ 5 each, and a pupil who buys 2 tickets computes P(winning first prize) as 2/40 = 1/20 before deciding whether the price is fair. At a market in Tamale a promotion puts one winning cap in every crate of 12 sachet drinks, so a buyer opening two caps from the same crate calculates without replacement, while caps bought in two different crates are independent. In Kumasi a teacher estimates that a pupil passes Mathematics with probability 3/5 and English with probability 2/3, independently, and uses the complement rule to report that the chance of passing at least one subject is 13/15, so about 13 of every 15 pupils are expected to collect at least one pass. Each situation is one of the four rules in this topic, and each answer is checked by adding all the cases to one.',
      objectives: [
        'List a sample space for a two-stage experiment and identify equally likely outcomes',
        'Apply the addition rule, distinguishing mutually exclusive events from overlapping events',
        'Apply the multiplication rule to independent events and adjust for draws made without replacement',
        'Construct and read a two-stage tree diagram, multiplying along branches and adding complete paths',
        'Use the complement rule to find the probability of at least one success'
      ],
      sections: [
        {
          title: 'Sample Spaces and the Myth of Equally Likely Sums',
          content: 'Every fraction in this topic rests on a sample space of equally likely outcomes, and the most damaging error in WASSCE probability is treating outcomes that are not equally likely as though they were. When two fair dice are thrown, the 36 ordered pairs are equally likely, but the eleven possible sums are not: a sum of 2 arises from one pair only, a sum of 7 from six pairs, and a sum of 8 from the five pairs (2,6), (3,5), (4,4), (5,3) and (6,2). Listing the pairs, or drawing a 6 by 6 grid, is therefore the first step in any dice question. The same discipline applies to a bag of counters, where the pool is 8 objects rather than 3 colours, and to a pack of cards, where 52 outcomes must be counted before any favourable ones are named. Write the total in the denominator only after it has been justified by listing.',
          bulletPoints: [
            'Equally likely means each outcome has the same chance; colour is not equally likely when a bag holds 5 red and 3 blue counters.',
            'For two dice, count ordered pairs, so (2,6) and (6,2) are two different outcomes.',
            'A replacement draw resets the pool, so two draws give 8 × 8 = 64 ordered outcomes.',
            'A without-replacement draw gives 8 × 7 = 56 ordered outcomes for two draws.',
            'A probability of 1 must mean certain, so any answer above 1 shows two events added that should have been multiplied.'
          ],
          keyTakeaway: 'Build the sample space first and check that its outcomes really are equally likely before writing any fraction.',
          realWorldExample: 'A raffle in Cape Coast numbers tickets 1 to 40 and every ticket has one chance in 40, whereas a game of two dice has 36 ordered results and its sums carry different probabilities.'
        },
        {
          title: 'The Addition Rule: Exclusive Events and Overlapping Events',
          content: 'An event of the form A or B is a union, and its probability is P(A) + P(B) minus any part counted twice. When A and B cannot occur together they are mutually exclusive, P(A and B) = 0, and the rule collapses to simple addition. In the question asking for a sum of 8 or a sum greater than 10 on two dice, the two events are exclusive because a single throw produces exactly one sum, so P = 5/36 + 3/36 = 8/36 = 2/9, with the three favourable outcomes for exceeding 10 being (5,6), (6,5) and (6,6). When the events do overlap, the general rule is essential: given P(A) = 0.4, P(B) = 0.5 and P(A and B) = 0.2, the union is 0.4 + 0.5 - 0.2 = 0.7, and reporting 0.9 double-counts the 0.2 that belongs to both. A quick way to decide whether to subtract is to ask out loud whether one trial can satisfy both conditions at once.',
          bulletPoints: [
            'Or in a question normally means a union, and the overlap must be subtracted exactly once.',
            'Exclusive events: add. Overlapping events: add and then subtract P(A and B).',
            'A single throw of two dice cannot give two different sums, so sum events are mutually exclusive.',
            'Drawing one card that is a king or a red card is NOT exclusive, because two of the kings are red.',
            'A tree or a Venn diagram settles exclusivity in a few seconds when the wording is dense.'
          ],
          keyTakeaway: 'Add the two probabilities, then subtract the overlap unless the events cannot happen together.',
          realWorldExample: 'In a class survey in Ho, 0.4 of the pupils study Statistics, 0.5 study Financial Management and 0.2 study both, so 0.7 study at least one of the two subjects.'
        },
        {
          title: 'Independent Events, Replacement and the Multiplication Rule',
          content: 'An event of the form A and B is an intersection, and when the two events do not influence each other, P(A and B) = P(A) × P(B). Independence usually comes from replacement or from physically separate trials: a coin and a die are independent, and a counter drawn, noted and returned leaves the second draw independent. Removing an item destroys independence: from a bag of 5 red and 3 blue counters, two draws without replacement give P(both red) = 5/8 × 4/7 = 20/56 = 5/14, because after one red is gone the pool is 7 with 4 red left. With replacement from a bag of 4 red and 6 green counters the answer is 4/10 × 4/10 = 4/25 = 0.16, since the second draw repeats the first fraction exactly. When mixed colours are wanted, two separate orders exist, red then blue and blue then red, and the two products must be added: 5/8 × 3/7 + 3/8 × 5/7 = 15/28. Do not confuse independence with exclusivity: exclusive events cannot both happen, so their joint probability is zero, while independent events with positive probabilities always have a positive joint probability.',
          bulletPoints: [
            'And with both parts required means multiply, never add: 3/5 × 2/3 = 2/5 for passing two subjects.',
            'Without replacement, reduce both the count of the item and the pool for the second draw, as in 4/7.',
            'With replacement, use the same fraction twice and say so in the working.',
            'Exactly one of each colour has two orders, so write both branch products before adding them.',
            'Independent and mutually exclusive are different: independent gives a product, exclusive gives zero overlap.'
          ],
          keyTakeaway: 'Multiply along a path, adjust the second fraction only when something is not replaced.',
          realWorldExample: 'A shopper in Makola opens two crates of sachet drinks whose caps are drawn from separate crates, so the two wins are independent and the joint probability is the product of the two single probabilities.'
        },
        {
          title: 'Tree Diagrams, the Complement Rule and At Least One',
          content: 'A two-stage tree diagram is the safest technology for this topic. Draw one branch per outcome at each stage, label every branch with its probability, multiply along each path to get the probability of that complete outcome, then add the paths the question asks for. For two draws without replacement from 5 red and 3 blue counters, the four paths carry 20/56, 15/56, 15/56 and 6/56, and their sum is 56/56 = 1, which verifies the tree before any question part is answered. That verification habit matters, because a wrong second-stage fraction usually leaves the paths failing to total one. The complement rule is the shortcut for at least one: P(at least one six when a die is thrown twice) = 1 - (5/6)^2 = 1 - 25/36 = 11/36, and P(at least one red in the counter problem) = 1 - 3/8 × 2/7 = 1 - 3/28 = 25/28. Direct counting of the cases would need two or three branch sums, so the complement is both faster and less prone to slips, provided the opposite event is stated correctly as none at all.',
          bulletPoints: [
            'Label the branches with conditional probabilities that reflect what is left after the first stage.',
            'The probability of a complete outcome is the product along its path; the probability of an event is the sum of its paths.',
            'Add all path probabilities and check that they total 1 before answering any part.',
            'At least one is the complement of none, so compute P(none) and subtract it from 1.',
            'For three or more trials, at least one becomes 1 minus a power, as in 1 - (5/6)^3 for three throws.'
          ],
          keyTakeaway: 'Draw the tree, multiply along paths, add the needed paths, and use the complement whenever at least one appears.',
          realWorldExample: 'A form master in Achimota estimates that each pupil passes Mathematics with probability 3/5 and English with probability 2/3, and his tree shows 2/15 for passing neither, so 13/15 pass at least one subject.'
        }
      ],
      commonMistakes: [
        'Adding probabilities of independent events instead of multiplying: reporting 3/5 + 2/3 = 19/15 for passing both Mathematics and English, an impossible value above 1, when the correct product is 3/5 × 2/3 = 2/5.',
        'Forgetting that the pool shrinks without replacement: writing P(both red) from 5 red and 3 blue as 5/8 × 5/8 = 25/64 instead of 5/8 × 4/7 = 5/14.',
        'Counting equally likely sums that are not equally likely: claiming P(sum 8) = 1/11 for two dice because there are eleven sums, instead of 5/36 from the 36 ordered pairs.',
        'Adding overlapping events with no subtraction: giving 0.9 for P(A or B) when P(A) = 0.4, P(B) = 0.5 and P(A and B) = 0.2, so the overlap of 0.2 is counted twice instead of 0.7 being reported.',
        'Confusing at least one with exactly one: answering 1/2 for at least one head on two coins, which is the probability of exactly one head, while 3/4 counts HH, HT and TH; the related slip in a counter problem is listing only red then blue as 5/8 × 3/7 = 15/56 and forgetting the blue then red branch, which brings the true total to 30/56 = 15/28.'
      ],
      wassceExamTips: [
        'Probability appears as one or two objective items in Paper 1 and as a structured theory question in Paper 2, typically 5 to 8 marks, so allow about six minutes for the theory version. Method marks (M1) are awarded for the correctly labelled tree or for the product line such as 5/8 × 4/7, so write that line even if the arithmetic is done on the calculator.',
        'State the sample space size in words, for example 36 equally likely outcomes when two dice are thrown. That sentence secures a mark and prevents the unequal-likelihood error the scheme is built to catch.',
        'Reduce fractions at the end, not at the start of an addition: keep 30/56 while combining paths, then simplify to 15/28, so no common-denominator slip costs the accuracy mark (A1).',
        'For at least one, write the complement sentence first, P(at least one) = 1 - P(none). Examiners reward the strategy with a method mark before the arithmetic, and the route is quicker than summing cases.',
        'If a part (a) answer is wrong but part (b) uses it correctly, WAEC marks the later working as carried forward (a.f.r.), so always complete every part with your own values instead of leaving blanks, and check that the mutually exclusive outcomes of one experiment add to 1.'
      ],
      summaryChecklist: [
        'Can I list a sample space for two dice, two draws or two coins and identify which outcomes are equally likely?',
        'Can I decide whether two events are mutually exclusive and then apply the addition rule correctly?',
        'Can I multiply probabilities for independent events and adjust the second fraction for draws without replacement?',
        'Can I draw a two-stage tree diagram and verify that its paths add up to 1?',
        'Can I use the complement rule to find the probability of at least one success?'
      ]
    },
    examples: [
      {
        id: 'ex-shs2-em-prob-1',
        title: 'Two Dice: An Exclusive Union of Sum Events',
        problem: 'Two fair six-sided dice are thrown once. Find the probability that the sum of the two scores is 8 or that the sum is greater than 10.',
        stepByStepSolution: [
          'Step 1 (M1): The sample space is the 6 × 6 = 36 ordered pairs of scores, and these are equally likely, although the sums are not.',
          'Step 2 (M1): List the pairs with sum 8: (2,6), (3,5), (4,4), (5,3), (6,2), which is 5 outcomes, so P(sum 8) = 5/36.',
          'Step 3 (M1): List the pairs with sum greater than 10: sum 11 gives (5,6) and (6,5), sum 12 gives (6,6), which is 3 outcomes, so P(sum greater than 10) = 3/36.',
          'Step 4 (M1): One throw produces exactly one sum, so the two events cannot happen together; they are mutually exclusive and the addition rule needs no subtraction.',
          'Step 5 (M1): Add: P = 5/36 + 3/36 = 8/36.',
          'Step 6 (A1): Simplify to lowest terms: 8/36 = 2/9.',
          'Step 7 (A1): Answer: the probability is 2/9, which is about 0.222. The tempting value 1/3 comes from treating each of the eleven sums as equally likely, but only the 36 ordered pairs are.'
        ],
        keyTakeaway: 'Count ordered pairs, not sums, and add the two counts because a single throw cannot give two different sums.'
      },
      {
        id: 'ex-shs2-em-prob-2',
        title: 'Two Draws Without Replacement from a Bag of Counters',
        problem: 'A bag contains 5 red and 3 blue counters. Two counters are drawn one after the other without replacement. Find the probability that both are red, that one of each colour is drawn, and that at least one red counter is drawn.',
        stepByStepSolution: [
          'Step 1 (M1): Draw a two-stage tree. The first stage has P(red) = 5/8 and P(blue) = 3/8; because nothing is replaced, the second stage uses a pool of 7 counters.',
          'Step 2 (M1): After one red is removed 4 red remain, so P(red then red) = 5/8 × 4/7 = 20/56 = 5/14.',
          'Step 3 (M1): The mixed result has two orders: red then blue is 5/8 × 3/7 = 15/56, and blue then red is 3/8 × 5/7 = 15/56.',
          'Step 4 (M1): Add the two paths: P(one of each) = 15/56 + 15/56 = 30/56 = 15/28.',
          'Step 5 (M1): At least one red is the complement of no red at all, that is both blue: P(both blue) = 3/8 × 2/7 = 6/56 = 3/28.',
          'Step 6 (A1): Therefore P(at least one red) = 1 - 3/28 = 25/28.',
          'Step 7 (A1): Check the whole tree: 5/14 + 15/28 + 3/28 = 10/28 + 15/28 + 3/28 = 28/28 = 1, so the three cases cover every outcome. Final answers: 5/14, 15/28 and 25/28.'
        ],
        keyTakeaway: 'Without replacement the second branch uses the reduced pool, mixed colours need two paths, and at least one is found from the complement.'
      }
    ],
    quiz: {
      id: 'quiz-shs2-em-t2-probability',
      topicId: 'shs2-em-t2-probability',
      title: 'Combined Events Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-em-probability-1',
          quizId: 'quiz-shs2-em-t2-probability',
          questionText: 'Two events A and B have P(A) = 0.4, P(B) = 0.5 and P(A and B) = 0.2. Find P(A or B).',
          optionA: '0.7',
          optionB: '0.9',
          optionC: '0.2',
          optionD: '0.3',
          correctOption: 'A',
          subConcept: 'Addition Rule with Overlap',
          explanation: 'The general addition rule gives P(A or B) = 0.4 + 0.5 - 0.2 = 0.7, because the 0.2 common to both events is counted twice in the simple sum. Option B, 0.9, is exactly that slip; option C reports the intersection alone and option D the product 0.4 × 0.5.',
          remediationTip: 'Whenever the question gives P(A and B), the events overlap, so always subtract it after adding.'
        },
        {
          id: 'q-em-probability-2',
          quizId: 'quiz-shs2-em-t2-probability',
          questionText: 'Two fair coins are tossed once. Find the probability of getting at least one head.',
          optionA: '1/2',
          optionB: '1/4',
          optionC: '3/4',
          optionD: '1',
          correctOption: 'C',
          subConcept: 'At Least One by Complement or Listing',
          explanation: 'The sample space is HH, HT, TH, TT, of which three contain at least one head, so P = 3/4. Option A, 1/2, is the probability of exactly one head, and option D comes from adding 1/2 + 1/2 for the two coins.',
          remediationTip: 'For at least one, either list all four ordered outcomes or subtract P(no head) = 1/4 from 1.'
        },
        {
          id: 'q-em-probability-3',
          quizId: 'quiz-shs2-em-t2-probability',
          questionText: 'A bag contains 4 red and 6 green counters. A counter is drawn, its colour noted and then replaced before a second counter is drawn. Find the probability that both counters are red.',
          optionA: '2/15',
          optionB: '2/5',
          optionC: '4/25',
          optionD: '4/5',
          correctOption: 'C',
          subConcept: 'Independent Draws with Replacement',
          explanation: 'Replacement leaves the bag unchanged, so the draws are independent and P(both red) = 4/10 × 4/10 = 16/100 = 4/25 = 0.16. Option A, 2/15, is the without-replacement value 4/10 × 3/9, and option B uses only one draw.',
          remediationTip: 'The word replaced tells you to reuse the same fraction twice; without it, reduce both the item count and the pool.'
        },
        {
          id: 'q-em-probability-4',
          quizId: 'quiz-shs2-em-t2-probability',
          questionText: 'A fair die is thrown twice. Find the probability of getting at least one score of 6.',
          optionA: '1/3',
          optionB: '11/36',
          optionC: '1/36',
          optionD: '25/36',
          correctOption: 'B',
          subConcept: 'Complement Rule with Two Trials',
          explanation: 'P(no six in two throws) = 5/6 × 5/6 = 25/36, so P(at least one six) = 1 - 25/36 = 11/36, which matches the 11 ordered pairs that contain a six. Option A, 1/3, is the addition slip 1/6 + 1/6, and option D is the complement left un-subtracted.',
          remediationTip: 'Rewrite at least one as 1 minus none, then square the probability of failing once.'
        },
        {
          id: 'q-em-probability-5',
          quizId: 'quiz-shs2-em-t2-probability',
          questionText: 'Kwame has probability 3/5 of passing Mathematics and 2/3 of passing English, the two results being independent. Find the probability that he passes at least one of the two subjects.',
          optionA: '3/5',
          optionB: '2/15',
          optionC: '2/5',
          optionD: '13/15',
          correctOption: 'D',
          subConcept: 'Complement with Independent Events',
          explanation: 'P(fails both) = (1 - 3/5)(1 - 2/3) = 2/5 × 1/3 = 2/15, so P(at least one pass) = 1 - 2/15 = 13/15. Option C, 2/5, is the probability of passing both subjects, and option B is the probability of passing neither.',
          remediationTip: 'For at least one, multiply the two failure probabilities and subtract the result from 1.'
        }
      ]
    }
  },
  // =========================================================================
  // TERM 3
  // =========================================================================
// =========================================================================
  // TOPIC 11 — VECTORS IN A PLANE
  // =========================================================================
  {
    id: 'shs2-em-t3-vectors-plane',
    subjectId: 'elective-maths',
    level: 'SHS 2',
    term: 3,
    orderIndex: 11,
    title: 'Vectors in a Plane: Components and Resultants',
    description: 'Column and component form, magnitude from Pythagoras, head-to-tail addition and subtraction, scalar multiplication, the parallel and collinear tests, position vectors, unit vectors and resolving a vector into horizontal and vertical components.',
    isFreeTrial: false,
    isVip: false,
    keyNotes: `• A plane vector carries magnitude AND direction; the column vector (3, -4) means 3 units in the positive x direction and -4 units in the y direction, printed by WAEC with one number above the other.
• Magnitude comes from Pythagoras: |(3, -4)| = √(3^2 + (-4)^2) = √25 = 5 units, and a magnitude is never negative.
• Column form (x, y) and component form x i + y j name the same vector; i and j are the unit vectors along the x-axis and y-axis.
• Add component by component: (1, 2) + (3, 4) = (4, 6). The single vector with the same combined effect is the resultant.
• To travel from A to B subtract position vectors in the order finish minus start: AB = OB - OA. With OA = (3, -2) and OB = (5, 4), AB = (5 - 3, 4 - (-2)) = (2, 6).
• Reversing the letters reverses the vector: BA = -AB, so BA = (-2, -6) above.
• Scalar multiplication stretches or flips: -2(3, -4) = (-6, 8), which is twice as long and points the opposite way.
• Parallel test: a and b are parallel when b = k a for one scalar k. Since (-6, 8) = -2(3, -4), the two are parallel but oppositely directed.
• Determinant test, useful when k is hard to spot: (x1, y1) is parallel to (x2, y2) when x1 y2 - x2 y1 = 0. For (3, -4) and (-6, 8): 3(8) - (-6)(-4) = 24 - 24 = 0.
• Collinear points: A(1, 2), B(4, 5), C(10, 11) give AB = (3, 3) and BC = (6, 6) = 2 AB; parallel segments that share point B must lie on one straight line.
• Unit vector = vector divided by its own magnitude. For (8, 6), magnitude = √(64 + 36) = 10, so the unit vector is (0.8, 0.6); check √(0.8^2 + 0.6^2) = 1.
• Resolving: horizontal component = |a| cos θ, vertical component = |a| sin θ. A 20 N pull at 60° to the horizontal gives 20 cos 60° = 10 N horizontally and 20 sin 60° = 10√3 ≈ 17.3 N vertically.
• Direction of a resultant: for (3, 4) the angle with the positive x-axis is tan⁻¹(4/3) = 53.1° to three significant figures, read from a calculator in DEGREE mode.
• The midpoint of A(1, 2) and C(10, 11) has position vector ((1 + 10)/2, (2 + 11)/2) = (5.5, 6.5).
• Triangle law: place vectors head to tail; the closing side taken the other way round is the resultant, and the zero vector (0, 0) has magnitude 0 with no fixed direction.`,
    detailedNotes: {
      overview: 'Vectors rename the geometry of SHS 1 in a language that carries direction as well as size, and Elective Mathematics Paper 1 tests the arithmetic of column vectors while Paper 2 tests the written justification, for example proving three points are collinear. Every answer in this topic comes from two tools only: Pythagoras for magnitude and component-by-component algebra for everything else. Master the four standard requests (magnitude, resultant, unit vector, resolving) and the whole topic becomes mechanical.',
      introduction: 'Treat a vector as a set of travel instructions rather than a picture. The pair (3, -4) says walk 3 steps east and 4 steps south; it does not matter where you start, because only the displacement counts. When two sets of instructions follow each other you add the pairs; when you want the instruction that gets you from one marked point to another you subtract their position vectors. That single habit removes almost every sign error examiners see.',
      realWorldContext: 'A dispatch rider leaves the Achimota junction and rides 6 km due east on the N1, then 8 km due north towards a delivery point. The odometer records 14 km of distance, but the displacement from the junction is the vector (6, 8) whose magnitude is √(36 + 64) = 10 km, which is why the fuel bill for GH¢ 12 per kilometre of straight-line displacement differs from the bill for distance travelled. A surveyor mapping a feeder road near Ho writes each leg of the traverse as a column vector in kilometres and adds them to state the total displacement of the road from its starting point.',
      objectives: [
        'Write a displacement as a column vector and as x i + y j, and state the difference between distance and displacement',
        'Calculate the magnitude of a vector using Pythagoras and keep the answer positive',
        'Add, subtract and scalar-multiply column vectors and state the resultant with its units',
        'Test two vectors for parallelism using a scalar multiple or the determinant test and prove three points collinear',
        'Find a unit vector in a given direction and resolve a vector of magnitude r at angle θ into horizontal and vertical components'
      ],
      sections: [
        {
          title: 'Column Form, Component Form and Magnitude',
          content: 'A plane vector is written as two numbers, one above the other inside brackets: the top number is the horizontal displacement and the bottom number is the vertical displacement. The vector (3, -4) tells the reader to move 3 units right and 4 units down, and it is the same vector wherever it is drawn, because only length and direction matter, not position. Those two displacements are the perpendicular legs of a right-angled triangle, so Pythagoras gives the length: |(3, -4)| = √(9 + 16) = √25 = 5 units. The identical vector written with unit vectors is 3i - 4j, where i is the unit step east and j the unit step north; WASSCE switches freely between the two notations, so learn to read both at speed. Note that magnitude is a plain positive number carrying a unit (5 units, 12 km, 20 N) and that the vertical component may be negative while the magnitude never is.',
          bulletPoints: [
            'Top number = movement parallel to the x-axis; bottom number = movement parallel to the y-axis.',
            'Magnitude |a| of a = (x, y) is √(x^2 + y^2), always the positive square root.',
            '(3, -4) and 3i - 4j are the same vector in two different costumes.',
            'A position vector is measured from a stated origin O, so it names a point, not a journey.',
            'Distance is a scalar (total ground covered); displacement is a vector (start to finish).'
          ],
          keyTakeaway: 'Read the two numbers as east-then-north instructions, and get the length by Pythagoras: the magnitude is the positive square root of the sum of the squares.',
          realWorldExample: 'A trotro leaves the Suame Magazine circle and drives 5 km east then 12 km north to a lorry station; its displacement vector is (5, 12) with magnitude √(25 + 144) = 13 km, though the road distance travelled is 17 km.'
        },
        {
          title: 'Addition, Subtraction and the Resultant',
          content: 'Vector addition is done component by component: (1, 2) + (3, 4) = (4, 6), and the answer is called the resultant because it produces exactly the same change of position as the two original vectors taken in order. Geometrically you draw the second vector starting from the head of the first, then close the triangle from the tail of the first to the head of the second; that closing side is the resultant, and it proves vector addition is commutative, since a + b and b + a give the same final point. Subtraction is addition of the reversed vector: a - b = a + (-b), where -b has the same length as b but the opposite direction. This is the reason the position-vector rule works: OA + AB = OB, so AB = OB - OA. Read it aloud as finish minus start, remembering that the vector AB ends at B, so the position vector of B is the one being subtracted.',
          bulletPoints: [
            'Add downwards: (2, -5) + (-3, 4) = (-1, -1); never add the magnitudes.',
            'The magnitude of a resultant is found only after adding components: (3, -4) + (5, 12) = (8, 8), and |(8, 8)| = √128 ≈ 11.3.',
            'AB = OB - OA and BA = OA - OB = -AB, so the two differ only in sign.',
            'More than two vectors add in any order; group them to keep the arithmetic tidy.',
            'If a + b + c = (0, 0) the three vectors drawn head to tail close a polygon and return to the start.'
          ],
          keyTakeaway: 'Add the columns, subtract finish from start, and only take a square root at the very end when a magnitude is asked for.',
          realWorldExample: 'A wind pushes a canoe on the Volta Lake with velocity (2, 1) km/h while the current adds (1, 3) km/h; the canoe actually moves at (3, 4) km/h, a resultant of speed 5 km/h.'
        },
        {
          title: 'Scalar Multiplication, Parallel Vectors and Collinear Points',
          content: 'Multiplying a vector by a number k, called a scalar, multiplies every component: k(x, y) = (kx, ky). The length becomes |k| times the original length, and when k is negative the direction reverses while the line of action stays parallel, so -2(3, -4) = (-6, 8) is twice as long as (3, -4) and points the opposite way. Two vectors are parallel precisely when one is a scalar multiple of the other, and WAEC expects the multiple stated: b = -2a, therefore a and b are parallel. Where the multiple is not obvious, use the determinant test: (x1, y1) and (x2, y2) are parallel exactly when x1 y2 - x2 y1 = 0, which needs no division and so never breaks down on a zero component. The same machinery proves collinearity: form two vectors from the three points, show one is a scalar multiple of the other, and then state that the two vectors share a common point, so the three points lie on one straight line.',
          bulletPoints: [
            'Both components must carry the SAME scalar: (-4, 6) = -2(2, -3) is parallel, but (6, -9) versus (-6, 9) needs checking on both entries.',
            'Determinant test on (2, -3) and (-4, 6): 2(6) - (-4)(-3) = 12 - 12 = 0, so they are parallel.',
            'Collinear proof must name the shared point; without that sentence the argument only shows two parallel lines.',
            'For A(1, 2), B(4, 5), C(10, 11): AB = (3, 3), BC = (6, 6) = 2 AB, hence A, B, C are collinear.',
            'A scalar multiple never rotates a vector, so a perpendicular requirement can never be met by scaling alone.'
          ],
          keyTakeaway: 'Parallel means one vector is a single scalar multiple of the other; collinear means that is true of two vectors drawn from a common point.',
          realWorldExample: 'On a district assembly plan drawn to scale, the edge of a plot from (1, 2) to (4, 5) and a boundary from (4, 5) to (10, 11) turn out to be multiples of (3, 3), so the assembly knows one straight boundary line runs through all three corners.'
        },
        {
          title: 'Unit Vectors and Resolving into Perpendicular Components',
          content: 'A unit vector has magnitude exactly 1 and is obtained by dividing each component of a vector by the magnitude of that vector: for (8, 6) the magnitude is √(64 + 36) = 10, so the unit vector is (8/10, 6/10) = (0.8, 0.6). Squaring and adding must return 1, and doing that check in one line earns method credit. Resolving is the reverse process: a vector of magnitude r that makes an angle θ with the positive x-axis has horizontal component r cos θ and vertical component r sin θ, so a 20 N force inclined at 60° to the horizontal resolves into 20 cos 60° = 10 N along the ground and 20 sin 60° = 10√3 ≈ 17.3 N upward. Keep strict discipline about angle units: state degrees, and check the calculator mode before resolving, because 20 cos 60 read in radian mode gives -19.05, an answer that is not merely wrong but physically impossible as a horizontal pull. Finish every numerical answer with its unit and a sanity check that each component is no larger than the original magnitude, since neither cos θ nor sin θ exceeds 1.',
          bulletPoints: [
            'Unit vector in the direction of a = a / |a|; it keeps the direction and forces the length to 1.',
            'Cosine goes with the adjacent (horizontal) component, sine with the opposite (vertical) component.',
            'Angle of a resultant: tan θ = y/x, so (3, 4) is at tan⁻¹(4/3) = 53.1° to the positive x-axis.',
            'Components of a vector of magnitude 20 at 60° are 10 N and 10√3 N, and 10√3 ≈ 17.3 N to three significant figures.',
            'Resolving is the tool that lets several forces be added one axis at a time, then recombined by Pythagoras.'
          ],
          keyTakeaway: 'Divide by the magnitude for a unit vector; multiply the magnitude by cos θ and sin θ for components, always naming the angle unit.',
          realWorldExample: 'A shopkeeper at Makola pulls a loaded wheelbarrow with a handle inclined at 60° to the ground; only the horizontal component, 20 cos 60° = 10 N of a 20 N pull, actually moves the barrow forward along the aisle.'
        }
      ],
      commonMistakes: [
        'Writing AB = OA - OB instead of AB = OB - OA: with OA = (3, -2) and OB = (5, 4) that gives (-2, -6), which is the vector BA, exactly the opposite journey.',
        'Adding magnitudes instead of components: |(-3, 4)| + |(5, 12)| = 5 + 13 = 18 is not the resultant; (-3, 4) + (5, 12) = (2, 16), whose magnitude is √(4 + 256) ≈ 16.1.',
        'Squaring carelessly with a negative component: |(3, -4)| is √(9 + 16) = 5, not √(9 - 16) and not 3 - 4 = -1; the square removes the sign.',
        'Claiming parallelism after checking one component only: for (2, -3) and (-4, 6), -4 = -2(2) and 6 = -2(-3) must BOTH hold with the same scalar -2 before the conclusion is allowed.',
        'Mixing degrees and radians while resolving: 20 cos 60° is 10 N, but the same keystrokes in radian mode give -19.05, so set the mode and write the degree sign.'
      ],
      wassceExamTips: [
        'In Paper 1 the vector items are short and mechanical: form |a|, a + b and the unit vector in under a minute each, and remember that a magnitude answer with no unit or a negative sign loses the A1 mark.',
        'In Paper 2 a collinearity question pays M1 for each correct difference of position vectors, M1 for showing one is a scalar multiple of the other, and A1 only for the concluding sentence naming the common point; write that sentence even when it feels obvious.',
        'Where a question asks for a direction, an angle alone is not an answer: state the angle WITH its unit and the line it is measured from, for example 53.1° to the positive x-axis.',
        'If an earlier part gives a wrong vector and a later part uses it, WAEC carries the error forward (afr) and still awards method marks, so keep working with your own numbers instead of erasing the page.',
        'Use a rough sketch with arrows for addition and subtraction questions; examiners record method credit for a labelled diagram even when the arithmetic slips.'
      ],
      summaryChecklist: [
        'Can I state the magnitude of any column vector using Pythagoras and keep it positive?',
        'Can I add, subtract and scalar-multiply column vectors and give the resultant with units?',
        'Can I find AB from the position vectors OA and OB without reversing the subtraction?',
        'Can I prove two vectors are parallel and then prove three points are collinear in one clean argument?',
        'Can I resolve a vector of magnitude r at angle θ into horizontal and vertical components and give a unit vector?'
      ]
    },
    examples: [
      {
        id: 'ex-shs2-em-vec-1',
        title: 'Magnitude, Unit Vector and the Parallel Test',
        problem: 'Given a = (3, -4) and b = (-6, 8), find (i) |a|, (ii) the unit vector in the direction of a, (iii) the resultant a + b and its magnitude, and (iv) show that a and b are parallel.',
        stepByStepSolution: [
          'Step 1 (M1): |a| = √(3^2 + (-4)^2) = √(9 + 16) = √25.',
          'Step 2 (A1): |a| = 5 units, and the unit vector in the direction of a is a / |a| = (3/5, -4/5) = (0.6, -0.8).',
          'Step 3 (M1): Add components for the resultant: a + b = (3 + (-6), -4 + 8) = (-3, 4).',
          'Step 4 (A1): |a + b| = √((-3)^2 + 4^2) = √25 = 5 units.',
          'Step 5 (M1): Compare b with a component by component: -6 / 3 = -2 and 8 / (-4) = -2, the same scalar in both entries, so b = -2a.',
          'Step 6 (A1): Therefore a and b are parallel, and since the scalar is negative they point in opposite directions; answers: |a| = 5, unit vector (0.6, -0.8), a + b = (-3, 4) with magnitude 5, b = -2a.'
        ],
        keyTakeaway: 'Magnitude by Pythagoras, unit vector by dividing by that magnitude, and parallelism by exhibiting ONE scalar that works on both components.'
      },
      {
        id: 'ex-shs2-em-vec-2',
        title: 'Position Vectors, Collinear Points and a Midpoint',
        problem: 'With respect to an origin O, the position vectors of three points are OA = (1, 2), OB = (4, 5) and OC = (10, 11). Find AB, BC and AC, use them to prove that A, B and C are collinear, and state the position vector of the midpoint of AC.',
        stepByStepSolution: [
          'Step 1 (M1): AB = OB - OA = (4 - 1, 5 - 2) = (3, 3).',
          'Step 2 (M1): BC = OC - OB = (10 - 4, 11 - 5) = (6, 6).',
          'Step 3 (M1): AC = OC - OA = (10 - 1, 11 - 2) = (9, 9).',
          'Step 4 (M1): Compare the pairs: 6 / 3 = 2 and 6 / 3 = 2, so BC = 2 AB; similarly AC = 3 AB.',
          'Step 5 (A1): BC is a scalar multiple of AB, so the two segments are parallel, and because they share the point B the points A, B and C lie on one straight line.',
          'Step 6 (A1): The midpoint of AC has position vector ((1 + 10) / 2, (2 + 11) / 2) = (5.5, 6.5).'
        ],
        keyTakeaway: 'Form two vectors from the three points, show one is a multiple of the other, then name the shared point to convert parallelism into collinearity.'
      }
    ],
    quiz: {
      id: 'quiz-shs2-em-t3-vectors-plane',
      topicId: 'shs2-em-t3-vectors-plane',
      title: 'Vectors in a Plane Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-em-vec-1',
          quizId: 'quiz-shs2-em-t3-vectors-plane',
          questionText: 'Find the magnitude of the vector (-5, 12).',
          optionA: '7 units',
          optionB: '17 units',
          optionC: '13 units',
          optionD: '169 units',
          correctOption: 'C',
          subConcept: 'Magnitude of a Vector',
          explanation: '|(-5, 12)| = √(25 + 144) = √169 = 13 units. The 7 comes from adding -5 + 12, the 17 from adding 5 + 12 as if magnitudes added, and 169 from stopping before the square root.',
          remediationTip: 'Square each component first, then add, then take the positive square root; the answer must be larger than either component.'
        },
        {
          id: 'q-em-vec-2',
          quizId: 'quiz-shs2-em-t3-vectors-plane',
          questionText: 'Which of the following vectors is parallel to (2, -3)?',
          optionA: '(-4, 6)',
          optionB: '(-3, 2)',
          optionC: '(2, 3)',
          optionD: '(4, 6)',
          correctOption: 'A',
          subConcept: 'Parallel Vectors',
          explanation: '(-4, 6) = -2(2, -3), one scalar applied to both components, so it is parallel and oppositely directed. The other options fail the test x1 y2 - x2 y1 = 0; for instance (2, 3) gives 2(3) - 2(-3) = 12, not zero.',
          remediationTip: 'Divide the two components of the candidate by the matching components of (2, -3); the vector is parallel only when both quotients are the same number.'
        },
        {
          id: 'q-em-vec-3',
          quizId: 'quiz-shs2-em-t3-vectors-plane',
          questionText: 'Express in its simplest form the unit vector in the direction of (8, 6).',
          optionA: '(4, 3)',
          optionB: '(0.6, 0.8)',
          optionC: '(8, 6)',
          optionD: '(0.8, 0.6)',
          correctOption: 'D',
          subConcept: 'Unit Vectors',
          explanation: 'The magnitude is √(64 + 36) = 10, so dividing gives (8/10, 6/10) = (0.8, 0.6). Option B has the correct magnitude of 1 but swaps the components, changing the direction, while A and C are not of length 1.',
          remediationTip: 'Divide EACH component by the same magnitude and keep the top number with the top number; check that the squares add to 1.'
        },
        {
          id: 'q-em-vec-4',
          quizId: 'quiz-shs2-em-t3-vectors-plane',
          questionText: 'O is an origin, OA = (3, -2) and OB = (5, 4). Find the vector AB.',
          optionA: '(-2, -6)',
          optionB: '(2, 6)',
          optionC: '(8, 2)',
          optionD: '(2, 2)',
          correctOption: 'B',
          subConcept: 'Position Vectors',
          explanation: 'AB = OB - OA = (5 - 3, 4 - (-2)) = (2, 6). Option A is BA, the result of start minus finish; option C adds the position vectors instead of subtracting them.',
          remediationTip: 'Say the rule aloud: finish minus start. Watch the double sign 4 - (-2) = 6.'
        },
        {
          id: 'q-em-vec-5',
          quizId: 'quiz-shs2-em-t3-vectors-plane',
          questionText: 'A vector of magnitude 20 units makes an angle of 60° with the positive x-axis. Evaluate its horizontal component.',
          optionA: '17.3 units',
          optionB: '20 units',
          optionC: '10 units',
          optionD: '34.6 units',
          correctOption: 'C',
          subConcept: 'Resolving Vectors',
          explanation: 'Horizontal component = 20 cos 60° = 20(0.5) = 10 units. The value 17.3 is 20 sin 60°, the vertical component, which is the classic cosine-sine swap, and 34.6 is 20 tan 60°.',
          remediationTip: 'Cosine belongs to the side adjacent to the angle, which is the horizontal leg; estimate first, since a component can never exceed 20.'
        }
      ]
    }
  },
  // =========================================================================
  // TOPIC 12 — MATRIX TRANSFORMATION OF PLANE SHAPES
  // =========================================================================
  {
    id: 'shs2-em-t3-matrix-transformations',
    subjectId: 'elective-maths',
    level: 'SHS 2',
    term: 3,
    orderIndex: 12,
    title: 'Matrix Transformation of Plane Shapes',
    description: 'Standard transformation matrices for reflection, rotation and enlargement, images of points and shapes, combined transformations in order, the determinant as area factor, invariant points and lines, and undoing a transformation with an inverse matrix.',
    isFreeTrial: false,
    isVip: false,
    keyNotes: `• A 2x2 matrix is a machine acting on a point: [a b; c d] sends (x, y) to (ax + by, cx + dy), where the matrix is written row by row and the semicolon separates the top row from the bottom row.
• Work one row at a time: [0 -1; 1 0] on (3, -2) gives top 0(3) + (-1)(-2) = 2 and bottom 1(3) + 0(-2) = 3, so the image is (2, 3).
• Reflections: in the x-axis [1 0; 0 -1], in the y-axis [-1 0; 0 1], in the line y = x [0 1; 1 0].
• Rotations about the origin: 90° anticlockwise [0 -1; 1 0], 180° [-1 0; 0 -1], 90° clockwise [0 1; -1 0].
• Enlargement with centre at the origin and scale factor k is [k 0; 0 k], so [3 0; 0 3] maps (-1, 4) to (-3, 12); lengths become k times and areas become k^2 times.
• Shear with the x-axis invariant is [1 1; 0 1]: it sends (2, 3) to (5, 3) and leaves every point (x, 0) fixed.
• Combined transformations act RIGHT to LEFT: if T is applied first and U second, the single matrix is UT. Reflect in the x-axis then rotate 90° anticlockwise: [0 -1; 1 0][1 0; 0 -1] = [0 1; 1 0], which is the reflection in the line y = x.
• Area factor = |determinant|, where ad - bc is the determinant of [a b; c d]. The matrix [2 0; 0 2] has determinant 4, so a triangle of area 5 square centimetres maps to area 20 square centimetres.
• Rotations and reflections have determinant +1 or -1, so they preserve area and shape; only enlargements and shears with determinant of absolute value other than 1 change the area.
• Invariant points are unmoved by the transformation: the reflection [1 0; 0 -1] fixes every point of the form (x, 0), so the x-axis is its invariant line.
• A matrix can be undone only when its determinant is non-zero: [2 4; 1 2] has determinant 2(2) - 4(1) = 0, so it is singular, it squashes the plane onto a line and it has no inverse.
• The inverse of [a b; c d] is (1 / (ad - bc)) [d -b; -c a]; for [2 0; 0 2] the inverse is [0.5 0; 0 0.5], which returns (-4, 6) to (-2, 3).
• To image a shape, transform every corner and join the images in the same order; a full description names the type of transformation and its centre, line, scale factor or angle.
• To find the matrix of a transformation, send the basis points (1, 0) and (0, 1) through it: their images are the first and second columns.`,
    detailedNotes: {
      overview: 'This topic joins the matrices of SHS 1 Term 3 to the coordinate geometry of SHS 2 Term 1: a matrix stops being a storage box of numbers and becomes a rule that moves points. WASSCE asks four things and nothing else — the image of a point, the image of a shape, the single matrix of two transformations done in order, and the information hidden in the determinant. Each answer is a multiplication you can check in one line, so the topic rewards neat layout far more than cleverness. Learn the six standard matrices by heart and derive the rest.',
      introduction: 'Read a transformation matrix as a set of instructions for rewriting coordinates. Take the top row, multiply it across the column of coordinates and add; then do the same with the bottom row. Because the same machine is applied to every point of a shape, straight lines stay straight, which is why a triangle maps to a congruent, similar or reflected triangle. When two matrices act in turn, the order of writing them is the reverse of the order of doing them, exactly as with composite functions fg in SHS 1.',
      realWorldContext: 'A town-planning officer in Kumasi keeps the layout of a market block as corner coordinates in metres. The assembly asks for the stalls on the other side of the access road, which is the x-axis, so every corner (x, y) is sent through [1 0; 0 -1] to (x, -y) and the plan is mirrored without measuring anything twice. Later a proposal doubles every distance from the assembly office at the origin, which is the enlargement [2 0; 0 2]; because its determinant is 4, the officer reports that a stall block of 5 square metres becomes 20 square metres, and the extra land must be bought from a farmer at Ho at GH¢ 40 per square metre.',
      objectives: [
        'Multiply a 2x2 matrix by a column vector and state the image of a point',
        'Write down the standard matrices for reflection in the axes and in y = x, rotation through 90°, 180° and enlargement about the origin',
        'Find the image of a plane shape by transforming its corners and describe the transformation fully',
        'Combine two transformations by matrix multiplication in the correct right-to-left order',
        'Use the determinant as an area factor, identify invariant points and lines, and undo a transformation with an inverse matrix'
      ],
      sections: [
        {
          title: 'Multiplying a Matrix by a Column Vector',
          content: 'The rule is row against column. For M = [a b; c d] acting on the point (x, y), the image coordinates are (ax + by, cx + dy): the top row picks off a multiple of x and b multiple of y, and the bottom row does the same job with c and d. Work the example M = [0 -1; 1 0] on (3, -2) slowly: the top entry is 0(3) + (-1)(-2) = 2 and the bottom entry is 1(3) + 0(-2) = 3, so the image is (2, 3). Layout earns marks here — write the two arithmetic lines before the answer, because an examiner awards M1 for correct substitution even when the final pair is mis-copied. A useful habit is to test the matrix on (1, 0) and (0, 1); their images are precisely the first and second columns of the matrix, so a matrix can be rebuilt from two picture points.',
          bulletPoints: [
            'Image of (x, y) under [a b; c d] is (ax + by, cx + dy), never (ax + cy, bx + dy).',
            'The first column of a matrix is the image of (1, 0); the second column is the image of (0, 1).',
            'A point and its image may be checked by substituting backwards through the same matrix.',
            'Write the substitution line before the answer to collect method marks.',
            'The origin (0, 0) maps to (0, 0) under every 2x2 matrix, so an enlargement or rotation centred at the origin leaves O fixed.'
          ],
          keyTakeaway: 'Multiply row by column, one row at a time, and remember that the two columns of the matrix are simply the images of the two basis points.',
          realWorldExample: 'A print shop in Tamale uses a scaling routine on the corner (3, -2) cm of a logo; the routine [0 -1; 1 0] turns the corner to (2, 3) cm, which is a quarter turn anticlockwise about the centre of the page.'
        },
        {
          title: 'The Standard Transformation Matrices',
          content: 'Six matrices carry the whole WASSCE syllabus. Reflection in the x-axis is [1 0; 0 -1], which keeps x and flips y; reflection in the y-axis is [-1 0; 0 1]; reflection in the line y = x is [0 1; 1 0], which simply swaps the coordinates, so (5, 2) goes to (2, 5). Rotation about the origin through 90° anticlockwise is [0 -1; 1 0], sending (x, y) to (-y, x); through 180° it is [-1 0; 0 -1], which negates both coordinates; and 90° clockwise is [0 1; -1 0]. An enlargement with centre at the origin and scale factor k is [k 0; 0 k], so [3 0; 0 3] maps (-1, 4) to (-3, 12). Where a question mentions a shear, [1 1; 0 1] shifts each point horizontally by an amount equal to its height, so (2, 3) moves to (5, 3) while every point on the x-axis stays put. To recognise a matrix, test one point and read the pattern it produces.',
          bulletPoints: [
            'A row of 1 and -1 on the diagonal is a reflection; the -1 sits on the axis that is flipped.',
            'A matrix with both diagonal entries equal to k is an enlargement of scale factor k centred at the origin.',
            'Rotation through 90° anticlockwise has the pattern [0 -1; 1 0]; clockwise swaps the signs to [0 1; -1 0].',
            'Swapping the two diagonal 1s gives the reflection in the line y = x.',
            'A negative scale factor has matrix [-k 0; 0 -k], which multiplies every length by k and turns the figure through 180° about the origin, so (-1, 4) under [-2 0; 0 -2] goes to (2, -8).'
          ],
          keyTakeaway: 'Memorise the six standard matrices and recognise any others by testing what they do to (1, 0), (0, 1) and a convenient third point.',
          realWorldExample: 'A surveyor near Ho records the corner (5, 2) of a cocoa plot and its booked mirror corner (2, 5); recognising the swap matrix [0 1; 1 0] tells the office at once that the second plot is the reflection of the first in the line y = x.'
        },
        {
          title: 'Combined Transformations and the Right-to-Left Rule',
          content: 'When one transformation follows another, the single matrix is the product with the SECOND transformation on the LEFT. If T is a reflection in the x-axis and U is the 90° anticlockwise rotation, then doing T first and U second is the matrix UT = [0 -1; 1 0][1 0; 0 -1] = [0 1; 1 0], which is the reflection in the line y = x. Verify with a point: (3, -2) reflected in the x-axis becomes (3, 2), and rotated 90° anticlockwise becomes (-2, 3); the single matrix applied straight to (3, -2) also gives (-2, 3), so the order check agrees. Matrix multiplication is not commutative, so TU and UT are different machines and the question wording is the whole answer: read the sequence, write the matrices in reverse sequence, multiply, then apply. Always show both the product and the point working, because the product alone can earn M1 while the correct image earns the A1.',
          bulletPoints: [
            'Transform first by P, then by Q, means the combined matrix is QP, not PQ.',
            'Multiply out row against column: the top-left entry of QP is the top row of Q against the first column of P.',
            'Check a combined matrix on one point and compare with the two-step working; both must agree.',
            'Two reflections in perpendicular axes combine to the 180° rotation [-1 0; 0 -1].',
            'A combined matrix with determinant zero, such as a shear followed by a squashing matrix, cannot be undone.'
          ],
          keyTakeaway: 'Write the transformations in the reverse of the order they are performed, multiply out, and prove the product by testing one point.',
          realWorldExample: 'An architect in Achimota draws a shop front, mirrors it in the ground line and then turns the drawing a quarter turn anticlockwise for the elevation view; the two steps act as one reflection in y = x, so the office can produce the elevation with a single matrix.'
        },
        {
          title: 'Determinant as Area Factor, Invariant Points and Inverses',
          content: 'The determinant ad - bc of [a b; c d] measures how the matrix treats area: a region of area A maps to a region of area |ad - bc| times A. An enlargement [2 0; 0 2] has determinant 4, so a triangle of area 5 square centimetres becomes 20 square centimetres, matching the general rule that a length factor k gives an area factor k squared. Rotations and reflections have determinant +1 or -1, which is why they change position but not size, and a determinant of 0, as in [2 4; 1 2], collapses the plane onto a single line, so the matrix is singular and no inverse exists. When the determinant is non-zero the transformation can be reversed by [a b; c d] inverse = (1 / (ad - bc)) [d -b; -c a]; for [2 0; 0 2] that is [0.5 0; 0 0.5], which brings (-4, 6) back to (-2, 3). Invariant points, which satisfy image equals original, reveal the fixed skeleton of a transformation: reflection in the x-axis fixes every point (x, 0), so its invariant line is x-axis itself.',
          bulletPoints: [
            'Area factor is the ABSOLUTE value of the determinant; a negative determinant only signals a flip in orientation.',
            'Enlargement of factor k has determinant k^2, so length k and area k^2 must agree.',
            'Determinant zero means singular, no inverse, and no return journey possible.',
            'Solve for invariant points by setting (x, y) equal to its image and reading off the line that survives.',
            'Check an inverse by multiplying back to the identity matrix [1 0; 0 1] before quoting it.'
          ],
          keyTakeaway: 'The determinant gives the area factor, a zero determinant kills the inverse, and invariant points are found by demanding that image equals original.',
          realWorldExample: 'A district assembly in Ejura doubles every distance on a market plan with [2 0; 0 2]; the determinant 4 warns the officer that a 5 square metre stall block now needs 20 square metres of land, and that the change can only be reversed by halving, the inverse matrix [0.5 0; 0 0.5].'
        }
      ],
      commonMistakes: [
        'Multiplying down the columns instead of across the rows: [0 -1; 1 0] on (2, 5) gives (-5, 2), not (2, -5); the working line should read top = 0(2) + (-1)(5).',
        'Writing the combined matrix as PQ when the question says P is applied first and Q second; the correct single matrix is QP, with the later transformation on the left.',
        'Reporting the area factor as the scale factor: the matrix [2 0; 0 2] doubles lengths but its determinant is 4, so a 5 square centimetre triangle images to 20 square centimetres, not 10.',
        'Quoting an inverse for a singular matrix: [2 4; 1 2] has determinant 2(2) - 4(1) = 0, so division by zero is attempted and no inverse exists; state that in words.',
        'Describing an image without the full specification, for example writing only "rotation" instead of "rotation through 90° anticlockwise about the origin", which loses the A1 mark.'
      ],
      wassceExamTips: [
        'In Paper 1 the transformation items are recognisable by a printed matrix and a point: do the two substitution lines in your book, then pick the option; this takes about 40 seconds and rarely needs a diagram.',
        'In Paper 2, method marks M1 are awarded for the substitution into the rows and for writing the product of matrices in the correct order, so a mis-added final coordinate still earns most of the credit; show both rows explicitly.',
        'For combined transformations, write a sentence naming the order, for example "image of A under R, then enlarged", and keep the two images on the page; examiners award method credit for the correct sequence even if one coordinate slips.',
        'Use the determinant as a fast checker: if a question asks for an image area under a matrix with determinant 4 and your answer is smaller than the original, reverse the working before the script is collected.',
        'When a part (a) answer is wrong, part (b) usually asks you to undo it; use your own (wrong) numbers with correct inverse method and the board carries the error forward (afr), so nothing on the page is wasted.'
      ],
      summaryChecklist: [
        'Can I multiply a 2x2 matrix by a column vector and give the image of a point with the working shown?',
        'Can I write the standard matrices for reflection, rotation through 90° or 180° and enlargement about the origin from memory?',
        'Can I find the image of a triangle by transforming its three corners and describing the transformation completely?',
        'Can I combine two transformations in the stated order by multiplying their matrices right to left?',
        'Can I use the determinant for the area factor and decide whether an inverse exists?'
      ]
    },
    examples: [
      {
        id: 'ex-shs2-em-mtx-1',
        title: 'Rotation of a Triangle through 90 Degrees Anticlockwise',
        problem: 'The matrix R = [0 -1; 1 0] rotates every point 90° anticlockwise about the origin. Triangle ABC has vertices A(2, 1), B(5, 1) and C(2, 4). Find the image of each vertex, describe the image triangle, and verify that the area is unchanged.',
        stepByStepSolution: [
          'Step 1 (M1): Read the rule from the rows: (x, y) maps to (0x + (-1)y, 1x + 0y) = (-y, x).',
          'Step 2 (M1): A(2, 1) gives (0(2) + (-1)(1), 1(2) + 0(1)) = (-1, 2), so A is at (-1, 2).',
          'Step 3 (M1): B(5, 1) gives (-1, 5) and C(2, 4) gives (-4, 2), applying the same two lines to each corner.',
          'Step 4 (A1): The image is the triangle with vertices (-1, 2), (-1, 5) and (-4, 2), the images of A, B and C; it is congruent to ABC and turned a quarter turn anticlockwise about the origin.',
          'Step 5 (M1): Area of ABC = ½(AB)(height) = ½(3)(3) = 4.5 square units, and the determinant of R is 0(0) - (-1)(1) = 1, so the area factor is |1| = 1.',
          'Step 6 (A1): Area of the image is therefore also 4.5 square units, exactly as the determinant predicts; the image coordinates above are the answer to the first part.'
        ],
        keyTakeaway: 'Transform the corners, join them in the same order, and let the determinant of absolute value 1 guarantee that the area did not move.'
      },
      {
        id: 'ex-shs2-em-mtx-2',
        title: 'Reflection Followed by Enlargement as One Matrix',
        problem: 'A triangle has vertices O(0, 0), A(1, 3) and B(4, 0). Each point is reflected in the y-axis and then enlarged with centre at the origin and scale factor 2. Find the single matrix of the combined transformation, the image of A, and the area of the image triangle.',
        stepByStepSolution: [
          'Step 1 (M1): Write the two matrices: reflection in the y-axis is R = [-1 0; 0 1] and the enlargement of factor 2 is E = [2 0; 0 2].',
          'Step 2 (M1): The enlargement is applied second, so the combined matrix is ER = [2 0; 0 2][-1 0; 0 1] = [-2 0; 0 2].',
          'Step 3 (M1): Two-step working for A(1, 3): reflection gives (-1, 3), then doubling gives (-2, 6).',
          'Step 4 (A1): Check with the single matrix: [-2 0; 0 2] on (1, 3) gives (-2(1), 2(3)) = (-2, 6), agreeing with the step-by-step image.',
          'Step 5 (A1): The corners map to (0, 0), (-2, 6) and (-8, 0), the images of O, A and B, so the image triangle has base 8 units along the x-axis and height 6 units.',
          'Step 6 (M1): Area of OAB = ½(4)(3) = 6 square units, and the determinant of the combined matrix is (-2)(2) - 0 = -4, so the area factor is |-4| = 4.',
          'Step 7 (A1): Area of the image = 6 × 4 = 24 square units, and the final answers are the matrix [-2 0; 0 2], the image of A at (-2, 6) and 24 square units; the base-height product ½(8)(6) = 24 confirms it.'
        ],
        keyTakeaway: 'Later transformation on the left, multiply out, then use the absolute value of the determinant to jump straight to the new area.'
      }
    ],
    quiz: {
      id: 'quiz-shs2-em-t3-matrix-transformations',
      topicId: 'shs2-em-t3-matrix-transformations',
      title: 'Matrix Transformations Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-em-mtx-1',
          quizId: 'quiz-shs2-em-t3-matrix-transformations',
          questionText: 'Find the image of the point (2, 5) under the transformation matrix [0 -1; 1 0].',
          optionA: '(-5, 2)',
          optionB: '(5, -2)',
          optionC: '(2, -5)',
          optionD: '(-2, 5)',
          correctOption: 'A',
          subConcept: 'Image of a Point',
          explanation: 'The rule from the rows is (x, y) to (-y, x), so (2, 5) maps to (0(2) - 1(5), 1(2) + 0(5)) = (-5, 2). Option B is the 90° clockwise rotation, C is the reflection in the x-axis and D is the reflection in the y-axis.',
          remediationTip: 'This matrix is the 90° anticlockwise rotation: the old height becomes minus the new x, so work the two rows instead of guessing.'
        },
        {
          id: 'q-em-mtx-2',
          quizId: 'quiz-shs2-em-t3-matrix-transformations',
          questionText: 'Which of the following matrices maps every point (x, y) onto (y, x)?',
          optionA: '[1 0; 0 -1]',
          optionB: '[0 -1; 1 0]',
          optionC: '[0 1; 1 0]',
          optionD: '[-1 0; 0 1]',
          correctOption: 'C',
          subConcept: 'Reflection in y = x',
          explanation: 'Swapping the coordinates is the reflection in the line y = x, whose matrix is [0 1; 1 0] because the top row 0, 1 produces y and the bottom row 1, 0 produces x. Option A is the reflection in the x-axis, B the 90° anticlockwise rotation and D the reflection in the y-axis.',
          remediationTip: 'Test each candidate on one point, say (5, 2); only the matrix that returns (2, 5) is correct.'
        },
        {
          id: 'q-em-mtx-3',
          quizId: 'quiz-shs2-em-t3-matrix-transformations',
          questionText: 'A triangle of area 5 square centimetres is transformed by the matrix [2 0; 0 2]. Find the area of the image.',
          optionA: '5 square centimetres',
          optionB: '20 square centimetres',
          optionC: '10 square centimetres',
          optionD: '40 square centimetres',
          correctOption: 'B',
          subConcept: 'Determinant as Area Factor',
          explanation: 'The determinant is 2(2) - 0(0) = 4, so every area is multiplied by 4 and 5 becomes 20 square centimetres. Option C, which is 10, is the common slip of using the length factor 2 instead of the area factor 4.',
          remediationTip: 'For a scale factor k, lengths become k times and areas k squared times; here k = 2, so area is 4 times.'
        },
        {
          id: 'q-em-mtx-4',
          quizId: 'quiz-shs2-em-t3-matrix-transformations',
          questionText: 'Which transformation leaves the point (3, 0) unchanged?',
          optionA: 'Reflection in the y-axis',
          optionB: 'Rotation through 90° anticlockwise about the origin',
          optionC: 'Enlargement with scale factor 2 and centre the origin',
          optionD: 'Reflection in the x-axis',
          correctOption: 'D',
          subConcept: 'Invariant Points',
          explanation: 'A point on the x-axis is fixed by the reflection in the x-axis, since [1 0; 0 -1] sends (3, 0) to (3, -0) = (3, 0). Reflection in the y-axis gives (-3, 0), the rotation gives (0, 3) and the enlargement gives (6, 0).',
          remediationTip: 'An invariant point must satisfy image equals original; test the matrix on the given point before choosing.'
        },
        {
          id: 'q-em-mtx-5',
          quizId: 'quiz-shs2-em-t3-matrix-transformations',
          questionText: 'A point is transformed first by P and then by Q. Which single matrix performs the whole job?',
          optionA: 'QP',
          optionB: 'PQ',
          optionC: 'P + Q',
          optionD: 'P inverse Q',
          correctOption: 'A',
          subConcept: 'Combined Transformations',
          explanation: 'The transformation done second stands on the left, so the combined matrix is QP because P acts on the point first and Q then acts on that image. PQ reverses the order, P + Q has no geometric meaning here, and an inverse would undo rather than combine.',
          remediationTip: 'Write the actions as a chain, Q of P of the point, and read the matrices from left to right in the order they act.'
        }
      ]
    }
  },
  // =========================================================================
  // TOPIC 13 — ARITHMETIC AND GEOMETRIC PROGRESSIONS
  // =========================================================================
  {
    id: 'shs2-em-t3-progressions',
    subjectId: 'elective-maths',
    level: 'SHS 2',
    term: 3,
    orderIndex: 13,
    title: 'Arithmetic and Geometric Progressions',
    description: 'The nth term of an AP and a GP, sums of n terms, finding a and d or r from two given terms, the |r| less than 1 condition for a sum to infinity, recurring decimals as infinite series, and growth and depreciation models.',
    isFreeTrial: false,
    isVip: false,
    keyNotes: `• An arithmetic progression (AP) changes by ADDING a fixed difference d each term: 2, 6, 10, 14, ... has first term a = 2 and d = 4.
• AP nth term: T_n = a + (n - 1)d. With a = 2 and d = 4, T_15 = 2 + 14(4) = 58; it is (n - 1)d, never nd.
• AP sum of n terms: S_n = n/2[2a + (n - 1)d] = n/2(a + l), where l is the last term.
• Two AP facts become two equations: 3rd term 10 and 7th term 26 give a + 2d = 10 and a + 6d = 26, so 4d = 16, d = 4 and a = 2.
• With a = 2 and d = 4, S_20 = 20/2[2(2) + 19(4)] = 10(4 + 76) = 800.
• A geometric progression (GP) changes by MULTIPLYING by a fixed ratio r: 8, 4, 2, 1, ... has a = 8 and r = 4 / 8 = 1/2.
• GP nth term: T_n = a r^(n-1). Which term of 3, 6, 12, 24, ... is 768? 3(2)^(n-1) = 768 gives 2^(n-1) = 256 = 2^8, so n - 1 = 8 and the answer is the 9th term.
• GP sum of n terms: S_n = a(r^n - 1)/(r - 1) when r is greater than 1, or a(1 - r^n)/(1 - r) when r is less than 1; choose the form that keeps both brackets positive.
• A sum to infinity exists ONLY when |r| is less than 1, and then S_∞ = a/(1 - r). For 8, 4, 2, 1, ... S_∞ = 8/(1 - 1/2) = 16.
• A GP with r = 3/2, r = 2 or r = -1.4 has no sum to infinity because the terms keep growing; state the test before writing any formula.
• Recurring decimals are infinite GP series: 0.7777... = 7/10 + 7/100 + ... = (7/10)/(1 - 1/10) = 7/9, and 0.454545... = 45/100 + 45/10000 + ... = (45/100)/(1 - 1/100) = 45/99 = 5/11.
• Depreciation is a GP with r less than 1: a pickup bought for GH¢ 40 000 and losing 10% each year is worth 40 000(0.9)^3 = GH¢ 29 160 after 3 years.
• Growth is a GP with r greater than 1: a town of 12 000 people growing 5% annually reaches 12 000(1.05)^4 ≈ 14 586 people after 4 years.
• Logarithms open the term number: 2, 6, 18, ... first exceeds 1000 when 2(3)^(n-1) is greater than 1000, that is 3^(n-1) greater than 500; n - 1 is greater than log 500 / log 3 = 5.66, so the 7th term, 2(3)^6 = 1458, is the first (the 6th term is 486).
• Means: the arithmetic mean of a and b is (a + b)/2, the middle term of an AP; the geometric mean is √(ab), so 8 is the geometric mean of 4 and 16 because √64 = 8.`,
    detailedNotes: {
      overview: 'Progressions are the SHS 2 study of patterns that grow by adding or by multiplying, and WASSCE uses them as the main vehicle for algebraic modelling in Paper 1 and Paper 2. The AP side is linear arithmetic: two term facts give two simultaneous equations in a and d. The GP side is where the marks hide, because the sum to infinity is a limit and the condition |r| less than 1 must be checked before the formula is allowed. Growth, depreciation and recurring decimals are all one idea: repeated multiplication.',
      introduction: 'Ask one question before any calculation: does the pattern ADD or does it MULTIPLY? If the gap between consecutive terms is constant, it is an AP and the tools are T_n = a + (n - 1)d and the paired sum formula. If the ratio between consecutive terms is constant, it is a GP and the tools are T_n = a r^(n-1), the finite sum and, only when the ratio is a fraction in absolute value, S_∞ = a/(1 - r). Writing that diagnostic sentence at the top of your working prevents the most expensive error in the topic, which is applying an AP formula to a GP or summing a divergent series.',
      realWorldContext: 'A cocoa farmer near Sunyani lends GH¢ 40 000 to a buying centre and is offered back GH¢ 4 000 more each year, an arithmetic pattern of repayments. A second trader at Ho instead offers 10% compound interest, a geometric pattern, where the debt after 3 years is 40 000(1.1)^3 = GH¢ 53 240. The farmer compares GH¢ 52 000 under the AP offer with GH¢ 53 240 under the GP offer and sees why compound interest overtakes simple interest only after a few years. Depreciation works the same machinery in reverse: a delivery trotro worth GH¢ 40 000 that loses 10% annually is worth 40 000(0.9)^3 = GH¢ 29 160 at the end of the third year.',
      objectives: [
        'Identify a progression as arithmetic or geometric and state its first term and common difference or ratio',
        'Find any term of an AP or a GP using T_n = a + (n - 1)d or T_n = a r^(n-1)',
        'Determine a and d or r from two given terms by solving simultaneous equations',
        'Compute sums of n terms of an AP and a GP and state which form of the GP formula is being used',
        'Apply the |r| less than 1 test, find sums to infinity, convert recurring decimals to fractions and model growth or depreciation'
      ],
      sections: [
        {
          title: 'Arithmetic Progressions: Term and Sum Formulae',
          content: 'An AP is built by adding the same number d every step, so the terms march in a straight line and the nth term is the first term plus n - 1 jumps of size d: T_n = a + (n - 1)d. For 2, 6, 10, 14, ... the 15th term is 2 + 14(4) = 58. The sum formula comes from pairing the first term with the last: S_n = n/2[2a + (n - 1)d] and the shorter version S_n = n/2(a + l), where l = T_n. Both must give the same number, so use one as a check on the other. For the same progression the sum of the first 20 terms is 20/2[2(2) + 19(4)] = 10(80) = 800, and the last term is 2 + 19(4) = 78, so the paired form gives 10(2 + 78) = 800 too. Remember that n must be a positive whole number; a fractional answer to a question about which term simply signals an error in the earlier algebra.',
          bulletPoints: [
            'Common difference d is found as T_2 - T_1 and can be negative, as in 5, 2, -1, -4, ... where d = -3.',
            'T_n = a + (n - 1)d: the 12th term of 5, 2, -1, ... is 5 + 11(-3) = -28, not 5 + 12(-3) = -31.',
            'S_n = n/2[2a + (n - 1)d] uses only a, d and n; S_n = n/2(a + l) is quicker when the last term is known.',
            'Summing odd numbers is an AP job: 11 + 13 + ... + 39 has 15 terms, so the sum is 15/2(11 + 39) = 375.',
            'Three consecutive terms of an AP are often written a - d, a, a + d to make the addition collapse to 3a.'
          ],
          keyTakeaway: 'Count jumps, not terms: the nth term uses (n - 1) differences, and the sum averages the first and last term then multiplies by how many terms there are.',
          realWorldExample: 'A form-master at a school in Kumasi saves GH¢ 20 in the first week and GH¢ 20 more than the previous week every week; by week 15 the weekly saving is 20 + 14(20) = GH¢ 300, and the total saved is 15/2(20 + 300) = GH¢ 2 400.'
        },
        {
          title: 'Finding a and d from Two Given Terms',
          content: 'WASSCE rarely gives a and d directly. Instead it says the 3rd term is 10 and the 7th term is 26, and the whole question is a pair of simultaneous equations in disguise. Translate each fact through T_n = a + (n - 1)d: the 3rd term gives a + 2d = 10, the 7th term gives a + 6d = 26. Subtracting the first equation from the second removes a and leaves 4d = 16, so d = 4, and back-substitution gives a = 10 - 8 = 2. The number of differences between the two stated terms is the gap in their positions, which is why the 3rd and 7th terms are 4 differences apart. Always finish by testing your a and d against the original words: T_3 = 2 + 2(4) = 10 and T_7 = 2 + 6(4) = 26, both correct, so the progression really is 2, 6, 10, 14, ... This one-line substitution check is cheap and it protects every later part of the question.',
          bulletPoints: [
            'Read the term numbers carefully: the 3rd term means a + 2d, the 7th means a + 6d.',
            'Subtract the equations to kill a; the coefficient of d is the difference in term positions.',
            'A GP version uses division instead of subtraction: T_7 / T_3 = r^4, so r is the fourth root of that quotient.',
            'If the two equations give d = 0, the progression is constant and the sum is simply na.',
            'Check by regenerating the two stated terms from your answers before moving on.'
          ],
          keyTakeaway: 'Two term facts are two linear equations; subtract them to get d, substitute to get a, then verify against the wording.',
          realWorldExample: 'A market woman at Techiman records that she sold 10 baskets in the 3rd week and 26 in the 7th week; the pattern 2, 6, 10, ... predicts 30 baskets in the 8th week, which is how she orders the trays in advance.'
        },
        {
          title: 'Geometric Progressions: Term and Sum of n Terms',
          content: 'A GP multiplies by a fixed ratio r, so T_n = a r^(n-1) and the growth is explosive rather than steady. Finding which term equals a given number is an index equation: in 3, 6, 12, 24, ... the question 3(2)^(n-1) = 768 reduces to 2^(n-1) = 256 = 2^8, giving n = 9. The sum of n terms is S_n = a(r^n - 1)/(r - 1) for r greater than 1 or S_n = a(1 - r^n)/(1 - r) for r less than 1; the two forms are identical, and choosing the one with positive brackets avoids sign errors. Ratios can be negative, and then the signs alternate, as in 16, -8, 4, -2, ... where r = -1/2; the formulas still work provided r is kept with its sign throughout. A related standard result is the geometric mean: the single number between a and b that forms a GP is √(ab), so 8 sits between 4 and 16 because 4, 8, 16 has ratio 2.',
          bulletPoints: [
            'Find r by dividing a term by the term before it: r = T_4 / T_3, and check it against one more pair.',
            'Term questions become index equations; write both sides with the same base before comparing indices.',
            'Use r^n - 1 over r - 1 when r is greater than 1, and 1 - r^n over 1 - r when r is a fraction.',
            'With negative r the terms alternate in sign; sum formulas still apply, and r^n keeps the sign.',
            'The geometric mean of 4 and 16 is √(4 × 16) = √64 = 8.'
          ],
          keyTakeaway: 'A GP is index arithmetic: every term question is an equation in r^(n-1), and every sum question is a choice of which of the two bracket orders keeps things positive.',
          realWorldExample: 'A rumour starts at one dormitory in Achimota and each hour every person who has heard it tells 2 others; after n hours the number of new hearers is 2^(n-1), so by the 9th hour 256 pupils hear it for the first time.'
        },
        {
          title: 'Sum to Infinity, Recurring Decimals and Growth or Depreciation',
          content: 'When |r| is less than 1, the power r^n shrinks towards zero, so S_n = a(1 - r^n)/(1 - r) tends to the limit a/(1 - r), called the sum to infinity. That test is the first sentence of any answer: for 8, 4, 2, 1, ... the ratio is 1/2, which satisfies |1/2| less than 1, so S_∞ = 8/(1 - 1/2) = 16. A series with r = 3/2 has no sum to infinity, and writing 8/(1 - 3/2) = -16 for a list of positive numbers is a signature error. Recurring decimals are the same idea in base ten: 0.7777... is 7/10 + 7/100 + 7/1000 + ... with a = 7/10 and r = 1/10, hence (7/10)/(1 - 1/10) = 7/9, and 0.454545... = (45/100)/(1 - 1/100) = 45/99 = 5/11. Money questions use the same multipliers in both directions: depreciation at 10% per year multiplies by 0.9, so GH¢ 40 000 becomes 40 000(0.9)^3 = GH¢ 29 160 after three years, while growth at 5% multiplies by 1.05, so 12 000 people become 12 000(1.05)^4 ≈ 14 586 after four years.',
          bulletPoints: [
            'Say the test out loud: since |r| = 1/2 is less than 1, the sum to infinity exists.',
            'S_∞ = a/(1 - r), never a/(1 + r) and never a(1 - r).',
            'For 9, 3, 1, 1/3, ... the sum to infinity is 9/(1 - 1/3) = 9/(2/3) = 27/2 = 13.5.',
            'Recurring decimal rule: 0.abc repeating equals the repeating block over as many nines as digits in the block.',
            'Depreciation multiplies by (1 - rate) each year, compound growth by (1 + rate); the number of years is the index.'
          ],
          keyTakeaway: 'A sum to infinity is a limit, so the |r| less than 1 check is part of the method mark, not optional decoration.',
          realWorldExample: 'A trader at Makola prices a GH¢ 40 000 pickup that loses 10% of its value each year and quotes 40 000(0.9)^3 = GH¢ 29 160 for the three-year-old vehicle, while a savings plan at Tema growing 5% annually turns GH¢ 12 000 into about GH¢ 14 586 in four years.'
        }
      ],
      commonMistakes: [
        'Using nd instead of (n - 1)d: the 12th term of 5, 2, -1, ... is 5 + 11(-3) = -28, but 5 + 12(-3) gives -31, one full difference too far.',
        'Adding the magnitudes of an AP instead of applying the formula: 11 + 13 + ... + 39 is 15 terms averaging 25, so the sum is 375, not 39 × 2 or 400.',
        'Writing a sum to infinity for a divergent series: for 2, 3, 4.5, ... with r = 3/2 the formula gives 2/(1 - 3/2) = -4, which is meaningless for positive terms; the correct answer is that no sum to infinity exists.',
        'Turning the GP ratio the wrong way: in 8, 4, 2, 1, ... r = 4/8 = 1/2, not 8/4 = 2, and using r = 2 destroys both the sum formula and the convergence test.',
        'Converting a recurring decimal as a plain fraction: 0.7777... is 7/9, not 7/10, which is the terminating decimal 0.7; write the series 7/10 + 7/100 + ... and sum it.'
      ],
      wassceExamTips: [
        'In Paper 1 a progression question is usually one of three types: find a term, find a sum, or find the sum to infinity; identify the type in five seconds and write the matching formula before substituting, because method marks follow the formula line.',
        'In Paper 2, when two terms are given, present the two equations clearly as a + 2d = 10 and a + 6d = 26; the M1 is for the translation of the words, and a slip in the subtraction still leaves most of the score recoverable.',
        'For a sum to infinity, the examiner expects the sentence stating that |r| is less than 1; without it the A1 for the numeric answer can be withheld even when the number is correct.',
        'Growth and depreciation questions are graded on the multiplier: writing 40 000(0.9)^3 earns method credit, while 40 000 - 3(4000) shows simple depreciation and loses the mark, so read the words loses 10% per year carefully.',
        'Keep answers exact where possible: 27/2 or 13.5 is better than 13.50000, and if a decimal is required give three significant figures and state it as an approximation; carry-through from an earlier slip is recorded as afr and method credit continues.'
      ],
      summaryChecklist: [
        'Can I decide whether a list is an AP or a GP and state its first term with d or r?',
        'Can I find any term using T_n = a + (n - 1)d or T_n = a r^(n-1), including solving for n with indices?',
        'Can I find a and d from two given terms using simultaneous equations and check them?',
        'Can I compute S_n for both kinds of progression and choose the formula form that keeps brackets positive?',
        'Can I test |r| less than 1, give a sum to infinity, convert a recurring decimal and model growth or depreciation?'
      ]
    },
    examples: [
      {
        id: 'ex-shs2-em-prog-1',
        title: 'An AP from Two Given Terms',
        problem: 'The 3rd term of an arithmetic progression is 10 and the 7th term is 26. Find the first term and the common difference, the 15th term, and the sum of the first 20 terms.',
        stepByStepSolution: [
          'Step 1 (M1): Translate the term facts with T_n = a + (n - 1)d: the 3rd term gives a + 2d = 10, the 7th term gives a + 6d = 26.',
          'Step 2 (M1): Subtract the first equation from the second: (a + 6d) - (a + 2d) = 26 - 10, so 4d = 16.',
          'Step 3 (A1): Hence d = 4, and substituting into a + 2d = 10 gives a = 10 - 8 = 2, so the progression is 2, 6, 10, 14, ...',
          'Step 4 (M1): The 15th term is T_15 = a + 14d = 2 + 14(4).',
          'Step 5 (A1): T_15 = 2 + 56 = 58.',
          'Step 6 (M1): The sum of 20 terms is S_20 = 20/2[2(2) + 19(4)] = 10(4 + 76).',
          'Step 7 (A1): S_20 = 800, checked by the paired form 10(2 + 78) = 800; answers are a = 2, d = 4, T_15 = 58, S_20 = 800.'
        ],
        keyTakeaway: 'Two term statements are two linear equations; subtract them to isolate d, then verify by rebuilding the given terms.'
      },
      {
        id: 'ex-shs2-em-prog-2',
        title: 'Sum to Infinity and a Recurring Decimal',
        problem: 'A geometric series begins 8, 4, 2, 1, ... (i) Show that its sum to infinity exists and find it. (ii) Express 0.7777... as a common fraction in its lowest terms.',
        stepByStepSolution: [
          'Step 1 (M1): Identify a = 8 and the ratio r = 4 / 8 = 1/2, confirmed by 2 / 4 = 1/2.',
          'Step 2 (M1): Apply the convergence test: |r| = |1/2| = 1/2, which is less than 1, so the sum to infinity exists.',
          'Step 3 (A1): S_∞ = a / (1 - r) = 8 / (1 - 1/2) = 8 / (1/2) = 16.',
          'Step 4 (M1): Write the decimal as a series: 0.7777... = 7/10 + 7/100 + 7/1000 + ... with first term a = 7/10 and ratio r = 1/10.',
          'Step 5 (M1): Since |1/10| is less than 1, use S_∞ = a / (1 - r) = (7/10) / (1 - 1/10).',
          'Step 6 (A1): This is (7/10) / (9/10) = 7/9, so 0.7777... = 7/9 in lowest terms, and the answers are S_∞ = 16 and 7/9.'
        ],
        keyTakeaway: 'State the |r| less than 1 test first, then divide by (1 - r); a recurring decimal is just a GP whose ratio is a power of one tenth.'
      }
    ],
    quiz: {
      id: 'quiz-shs2-em-t3-progressions',
      topicId: 'shs2-em-t3-progressions',
      title: 'Progressions Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-em-prog-1',
          quizId: 'quiz-shs2-em-t3-progressions',
          questionText: 'Find the 12th term of the progression 5, 2, -1, -4, ...',
          optionA: '38',
          optionB: '-28',
          optionC: '-31',
          optionD: '28',
          correctOption: 'B',
          subConcept: 'AP nth Term',
          explanation: 'Here a = 5 and d = -3, so T_12 = 5 + 11(-3) = 5 - 33 = -28. Option C comes from using 12d instead of 11d, and option A from dropping the negative sign of d.',
          remediationTip: 'Write T_n = a + (n - 1)d, fill in n - 1 = 11 separately, and keep the minus sign attached to d.'
        },
        {
          id: 'q-em-prog-2',
          quizId: 'quiz-shs2-em-t3-progressions',
          questionText: 'Which term of the progression 3, 6, 12, 24, ... is 768?',
          optionA: 'the 8th term',
          optionB: 'the 10th term',
          optionC: 'the 9th term',
          optionD: 'the 256th term',
          correctOption: 'C',
          subConcept: 'GP nth Term and Indices',
          explanation: 'With a = 3 and r = 2, 3(2)^(n-1) = 768 gives 2^(n-1) = 256 = 2^8, so n - 1 = 8 and n = 9. The 8th term is 3(2)^7 = 384, one halving short, and 256 is the power, not the position.',
          remediationTip: 'Divide by the first term first, then express the quotient as a power of the same base and read the index plus one.'
        },
        {
          id: 'q-em-prog-3',
          quizId: 'quiz-shs2-em-t3-progressions',
          questionText: 'Find the sum to infinity of the geometric progression with first term 9 and common ratio 1/3.',
          optionA: '27/2',
          optionB: '9/2',
          optionC: '27/4',
          optionD: '6',
          correctOption: 'A',
          subConcept: 'Sum to Infinity',
          explanation: 'Since |1/3| is less than 1 the series converges and S_∞ = 9 / (1 - 1/3) = 9 / (2/3) = 27/2 = 13.5. Option B wrongly uses r / (1 - r), option C uses 1 / (1 + r) and option D is the product a(1 - r).',
          remediationTip: 'The denominator is one minus the ratio; when it is a fraction, remember that dividing by 2/3 means multiplying by 3/2.'
        },
        {
          id: 'q-em-prog-4',
          quizId: 'quiz-shs2-em-t3-progressions',
          questionText: 'Calculate the sum of all the odd numbers from 11 to 39 inclusive.',
          optionA: '375',
          optionB: '350',
          optionC: '400',
          optionD: '585',
          correctOption: 'A',
          subConcept: 'Sum of an AP',
          explanation: 'The odd numbers 11, 13, ..., 39 form an AP with a = 11, d = 2 and number of terms (39 - 11)/2 + 1 = 15, so S = 15/2(11 + 39) = 15/2 × 50 = 375. Option B uses 14 terms, forgetting to count both ends.',
          remediationTip: 'Count terms first with (last - first)/d + 1, then apply S_n = n/2(a + l).'
        },
        {
          id: 'q-em-prog-5',
          quizId: 'quiz-shs2-em-t3-progressions',
          questionText: 'Which of the following geometric progressions has no sum to infinity?',
          optionA: '8, 4, 2, 1, ...',
          optionB: '9, 3, 1, 1/3, ...',
          optionC: '16, -8, 4, -2, ...',
          optionD: '2, 3, 4.5, 6.75, ...',
          correctOption: 'D',
          subConcept: 'Convergence Condition',
          explanation: 'The progression 2, 3, 4.5, 6.75, ... has r = 3/2, and since |3/2| is not less than 1 the terms grow, so no sum to infinity exists. The others have r = 1/2, r = 1/3 and r = -1/2, all of which converge in magnitude.',
          remediationTip: 'Compute r as a term divided by the term before it and test |r| less than 1 before quoting a/(1 - r).'
        }
      ]
    }
  },
  // =========================================================================
  // TOPIC 14 — QUADRATIC FUNCTIONS AND GRAPH SKETCHING (VIP)
  // =========================================================================
  {
    id: 'shs2-em-t3-quadratic-functions',
    subjectId: 'elective-maths',
    level: 'SHS 2',
    term: 3,
    orderIndex: 14,
    title: 'Quadratic Functions and Graph Sketching',
    description: 'Completing the square and vertex form, the turning point and axis of symmetry, reading roots and intercepts from a sketch, the three discriminant cases, and quadratic models of maximum area, profit and height.',
    isFreeTrial: false,
    isVip: true,
    keyNotes: `• A quadratic function has the form y = ax^2 + bx + c with a not equal to 0; its graph is a parabola, and the sign of a decides the shape: a greater than 0 opens upward like a cup, a less than 0 opens downward like an umbrella.
• Completing the square: x^2 - 6x + 5 = (x - 3)^2 - 9 + 5 = (x - 3)^2 - 4. Take half of the coefficient of x, square it, then add and subtract.
• Vertex form y = a(x + p)^2 + q has turning point (-p, q) and axis of symmetry x = -p, so (x - 3)^2 - 4 has vertex (3, -4), a minimum because a = 1 is positive.
• Axis of symmetry straight from standard form: x = -b/(2a). For y = x^2 + 4x - 7 this is x = -4/2 = -2, and the y-value is 4 - 8 - 7 = -11, so the vertex is (-2, -11).
• Roots are the x-intercepts: x^2 - 6x + 5 = (x - 1)(x - 5) gives x = 1 and x = 5; the y-intercept is c, here the point (0, 5).
• The y-intercept reflected in the axis of symmetry gives a free extra point: for y = x^2 - 6x + 5 the axis is x = 3, so (0, 5) reflects to (6, 5), and indeed 36 - 36 + 5 = 5.
• Discriminant D = b^2 - 4ac counts the real roots: D greater than 0 gives two, D = 0 gives one repeated root and the vertex sits on the x-axis, D less than 0 gives none and the curve misses the axis.
• Example of each case: x^2 - 5x + 6 has D = 25 - 24 = 1, two roots 2 and 3; x^2 - 6x + 9 has D = 36 - 36 = 0, one root 3; x^2 - 4x + 7 has D = 16 - 28 = -12, no real roots.
• y = (x - 2)^2 + 3 has minimum value 3, so it never meets the x-axis; a squared term is never negative, hence y is at least 3 for every x.
• To sketch completely: mark the turning point, the axis of symmetry, the y-intercept, the roots when real, then draw one smooth symmetric curve.
• Maximum problems: y = -x^2 + 6x - 4 has a = -1, so the vertex is a maximum; at x = 3 the value is -9 + 18 - 4 = 5, giving maximum value 5.
• Line against parabola: solve simultaneously and read the discriminant of the resulting quadratic. y = x + 1 with y = x^2 - 3x + 5 gives x^2 - 4x + 4 = 0, whose D = 16 - 16 = 0, so the line is a tangent at the single point (2, 3).
• Modelling with a quadratic: with 24 m of fencing and an existing wall as the fourth side, A = x(24 - 2x) = -2(x - 6)^2 + 72, so the greatest area is 72 square metres with width 6 m and length 12 m.
• Motion: height h = 20t - 5t^2 = -5(t - 2)^2 + 20 reaches its maximum 20 m at t = 2 s and returns to the ground when h = 0, that is t = 0 and t = 4 s.
• Sum and product of roots for ax^2 + bx + c = 0 are -b/a and c/a: the roots -1/2 and 3 of 2x^2 - 5x - 3 sum to 5/2 and multiply to -3/2, and the discriminant 25 + 24 = 49 is a perfect square, which is why the roots are exact fractions.`,
    detailedNotes: {
      overview: 'A quadratic is the first function whose graph carries a decision: where it turns, whether it meets the x-axis and how many points two graphs share. In WASSCE Elective Mathematics Paper 1 the items are fast recognitions of vertex, roots or discriminant, while Paper 2 demands a full sketch or a maximum problem set up from words. The single trick that unlocks most of the topic is completing the square, because vertex form exposes the turning point immediately and makes the sketch trustworthy.',
      introduction: 'Read y = ax^2 + bx + c as a recipe with three jobs for three letters. The letter a controls the opening direction and the width, the combination -b/(2a) fixes the horizontal position of the turning point, and c is where the curve cuts the y-axis. Rewriting the same function as a(x + p)^2 + q moves the emphasis: the turning point is now printed in the two numbers you can see, and the graph is a shifted copy of y = ax^2. Practise converting between the two forms until it takes one line.',
      realWorldContext: 'A farmer near Ejura has 24 metres of barbed wire and wants to fence a rectangular cocoa nursery against one long wall of the storehouse, so only three sides need wire. If the width perpendicular to the wall is x metres, the area is A = x(24 - 2x) = -2(x - 6)^2 + 72 square metres, which tells the farmer at once that 6 m by 12 m gives the largest possible nursery of 72 square metres and that any other choice wastes wire. At a market in Tamale a trader notices that the daily profit on loaves, modelled by y = -x^2 + 6x - 4, peaks at GH¢ 5 when the price rise is GH¢ 3, so a bigger rise actually reduces the profit.',
      objectives: [
        'Rewrite a quadratic from standard form to vertex form by completing the square',
        'State the turning point, its nature and the axis of symmetry of any quadratic function',
        'Find the roots and the y-intercept and use them to sketch a complete parabola',
        'Use the discriminant to say how many times a curve meets the x-axis or a given line',
        'Set up and solve a quadratic maximum or minimum problem in a Ghanaian context'
      ],
      sections: [
        {
          title: 'Completing the Square and Vertex Form',
          content: 'Completing the square rewrites a quadratic so that the variable appears only once. For x^2 - 6x + 5, halve the coefficient of x to get -3, square it to get 9, and then add and subtract that 9: x^2 - 6x + 9 - 9 + 5 = (x - 3)^2 - 4. The information is now readable at a glance: the bracket tells you the squared term vanishes at x = 3, and the trailing -4 tells you the value there is -4, so (3, -4) is the turning point. Because the leading coefficient is positive, the squared term only grows as x moves away from 3, so this turning point is a minimum. When a is not 1, factor it out of the x-terms first: -2x^2 + 24x becomes -2(x^2 - 12x) = -2[(x - 6)^2 - 36] = -2(x - 6)^2 + 72, and the maximum value 72 appears without any calculus.',
          bulletPoints: [
            'Half the coefficient of x, square it, add and subtract inside the same line.',
            'y = a(x + p)^2 + q has turning point (-p, q); watch the sign inside the bracket.',
            'For (x - 3)^2 - 4 the vertex is (3, -4), a minimum since a = 1 is positive.',
            'Factor out a before completing the square when a is not 1, and multiply the constant back afterwards.',
            'Check the conversion by expanding the vertex form back to the original expression.'
          ],
          keyTakeaway: 'Vertex form prints the turning point: complete the square, then read (-p, q) and the nature from the sign of a.',
          realWorldExample: 'The nursery plan A = -2(x - 6)^2 + 72 tells the Ejura farmer that the fenced area shrinks symmetrically as the width moves away from 6 m: at 5 m or 7 m the area is 70 square metres, two square metres smaller.'
        },
        {
          title: 'Reading the Graph: Axis of Symmetry, Intercepts and the Sign of a',
          content: 'Every parabola is symmetric about the vertical line x = -b/(2a), which passes through its turning point. For y = x^2 + 4x - 7 the axis is x = -4/2 = -2, and substituting gives 4 - 8 - 7 = -11, so the vertex is (-2, -11) and, since a = 1, that is a minimum. The y-intercept is read straight from c: the curve crosses the y-axis at (0, -7). Roots, when they exist, sit symmetrically about the axis, so their average equals -b/(2a); for x^2 - 6x + 5 the roots 1 and 5 average to 3, which is exactly the axis. If the axis of symmetry and the y-intercept are known, one more point is free: reflect (0, c) across the axis, giving (6, 5) in the same example, and confirm by substitution. A negative a flips everything, and then the turning point is a maximum rather than a minimum.',
          bulletPoints: [
            'Axis of symmetry: x = -b/(2a); substitute it into the function to get the turning point y-value.',
            'y-intercept is the point (0, c); it is not a root unless c = 0.',
            'Roots average to -b/(2a), a quick check that your factorisation is right.',
            'a greater than 0 gives a minimum, a less than 0 gives a maximum; the magnitude of a controls how steep the arms are.',
            'Reflecting the y-intercept in the axis of symmetry produces a second guaranteed point for the sketch.'
          ],
          keyTakeaway: 'Three numbers tell the whole story: -b/(2a) locates the axis, the function value there locates the vertex, and c gives the intercept.',
          realWorldExample: 'A ball kicked on a practice pitch at Kumasi follows h = 20t - 5t^2; the axis t = -20/(2 × -5) = 2 s is the instant of greatest height, and the ground-level launches at t = 0 and t = 4 are symmetric about it.'
        },
        {
          title: 'The Discriminant and How Many Times the Curve Meets the Axis',
          content: 'The discriminant D = b^2 - 4ac decides the number of real roots without solving anything. When D is positive there are two distinct roots and the curve cuts the x-axis twice; when D is zero there is one repeated root and the vertex lies exactly on the axis, so the curve touches it; when D is negative there are no real roots and the curve floats clear of the axis, as y = (x - 2)^2 + 3 does with its minimum value 3, which in standard form x^2 - 4x + 7 gives D = 16 - 28 = -12. The same tool counts intersections between a line and a parabola: equate the two expressions, rearrange to one quadratic equal to zero, and inspect D. Setting x + 1 = x^2 - 3x + 5 yields x^2 - 4x + 4 = 0 with D = 16 - 16 = 0, so the line is a tangent, meeting the curve at the single point where x = 2 and y = 3. A perfect-square discriminant, such as 49 for 2x^2 - 5x - 3, additionally promises exact rational roots.',
          bulletPoints: [
            'D greater than 0: two roots and two crossings; D = 0: one repeated root, the vertex on the axis; D less than 0: no real roots.',
            'Take the equation to the form ax^2 + bx + c = 0 before computing b^2 - 4ac, and keep the sign of c.',
            'Line and parabola: equate, rearrange, then read D; a zero D means tangency, not no intersection.',
            'For 2x^2 - 5x - 3, D = 25 + 24 = 49 = 7^2, so the roots -1/2 and 3 are exact.',
            'A parabola meets the x-axis twice, once (at the vertex, when D = 0) or not at all; a lone crossing away from the vertex is impossible because the roots are symmetric about the axis.'
          ],
          keyTakeaway: 'Compute b^2 - 4ac once and you can say how many roots exist, whether the vertex is on the axis, and whether a line is a tangent.',
          realWorldExample: 'A water jet in a park at Achimota follows y = -x^2 + 4x - 6; since D = 16 - 24 = -8 is negative, the jet never reaches ground level within the modelled span, which is why the basin must be built deeper.'
        },
        {
          title: 'Sketching a Complete Curve and Maximising a Model',
          content: 'A WASSCE sketch is a marked diagram, not artwork. Establish the opening direction from a, solve for the roots when D is non-negative, compute the vertex from x = -b/(2a), plot the y-intercept c, and draw one smooth curve through the five points with the axis of symmetry lightly ruled. Label every point you used, because the method marks are attached to the labels rather than to the beauty of the line. Maximum and minimum word problems are the same skill wearing a costume. With 24 m of wire and a wall serving as one side, the length along the wall is 24 - 2x, so A = x(24 - 2x) = 24x - 2x^2; completing the square gives A = -2(x - 6)^2 + 72, so the squared term is largest, and the area smallest, away from x = 6 and the maximum area is 72 square metres, with width 6 m and length 12 m. Always check that the fencing total 6 + 6 + 12 = 24 m agrees with the words of the question, and state the answer in context, not as a bare pair of numbers.',
          bulletPoints: [
            'Sketch order: direction of opening, axis of symmetry, vertex, roots, y-intercept, smooth curve.',
            'The vertex form tells you the range: y = (x - 3)^2 - 4 takes all values y at least -4.',
            'In optimisation, write the objective in one variable first, then complete the square.',
            'The maximum of -2(x - 6)^2 + 72 is 72, attained at x = 6, because a squared term is never negative.',
            'Reject any solution outside the practical domain, such as a width of 12 m, which would leave no wire for the length.'
          ],
          keyTakeaway: 'Sketch from the five landmarks and solve maximum problems by forcing the expression into vertex form; the answer is the constant outside the square.',
          realWorldExample: 'The Ejura nursery with width 6 m and length 12 m encloses 72 square metres, and the farmer can see from the sketch that a width of 2 m gives only 2(24 - 4) = 40 square metres, so the middle choice really is the best.'
        }
      ],
      commonMistakes: [
        'Completing the square and forgetting to cancel: writing x^2 - 6x + 5 = (x - 3)^2 - 9 + 5 as (x - 3)^2 - 9 drops the +5 and moves the vertex to the wrong height; the correct vertex form is (x - 3)^2 - 4.',
        'Reporting the x-value as the maximum: for y = -x^2 + 6x - 4 the maximum VALUE is 5, while 3 is only where it occurs; questions asking for the value are answered by the number outside the square.',
        'Quoting the axis as x = b/(2a): for y = x^2 + 4x - 7 that gives x = 2 and the vertex (2, -11) instead of x = -4/2 = -2 with vertex (-2, -11).',
        'Taking the discriminant with the wrong sign of c: for x^2 - 4x + 7, b^2 - 4ac = 16 - 4(1)(7) = -12, but writing 16 + 28 = 44 wrongly promises two roots.',
        'Assuming a curve must cross the x-axis: y = (x - 2)^2 + 3 has minimum 3 and no x-intercepts, so a sketch forced through the axis contradicts the algebra.'
      ],
      wassceExamTips: [
        'In Paper 1 the vertex, roots and discriminant items are answerable in under a minute each: use x = -b/(2a) for the axis, then substitute; do not waste time completing the square fully unless the question asks for it.',
        'In Paper 2 a sketch carries method marks for each labelled feature (opening direction, vertex, roots, y-intercept), so rule and label the axis of symmetry even when the question does not demand it.',
        'When a question asks for the greatest or least value, the A1 mark belongs to the y-value; write both the value and the x at which it occurs, then circle the one the question asked for.',
        'For tangent questions, remember that equal roots means one intersection; set the discriminant to zero and solve for the unknown constant, and state that D = 0 is the condition being used.',
        'If part (a) asked you to complete the square and you got it wrong, use your own result in part (b); the board awards carried-forward (afr) method credit, so leaving part (b) blank is the only real loss.'
      ],
      summaryChecklist: [
        'Can I convert any quadratic into vertex form by completing the square and check it by expanding?',
        'Can I state the turning point, its nature and the axis of symmetry directly from ax^2 + bx + c?',
        'Can I find the roots, the y-intercept and one reflected extra point to produce a complete sketch?',
        'Can I use b^2 - 4ac to say how many x-intercepts exist and whether a line is a tangent?',
        'Can I model a maximum area, profit or height problem and read the answer from the vertex form?'
      ]
    },
    examples: [
      {
        id: 'ex-shs2-em-quad-1',
        title: 'Completing the Square and Sketching a Curve',
        problem: 'The function is y = x^2 - 6x + 5. Complete the square, then state the coordinates of the turning point and the equation of the axis of symmetry, find the roots and the y-intercept, and describe the sketch.',
        stepByStepSolution: [
          'Step 1 (M1): Halve the coefficient of x and square it: -6/2 = -3 and (-3)^2 = 9, so write x^2 - 6x + 5 = x^2 - 6x + 9 - 9 + 5.',
          'Step 2 (A1): Factor the first three terms and collect the rest: (x - 3)^2 - 4, which is vertex form with p = -3 and q = -4.',
          'Step 3 (M1): Since a = 1 is positive the parabola opens upward, so the turning point (3, -4) is a MINIMUM and the axis of symmetry is the line x = 3.',
          'Step 4 (M1): Set y = 0 for the roots: (x - 3)^2 - 4 = 0 gives (x - 3)^2 = 4, so x - 3 = ±2 and x = 5 or x = 1.',
          'Step 5 (A1): The y-intercept is at x = 0: y = 5, giving the point (0, 5); the discriminant 36 - 20 = 16 is positive, confirming two distinct roots.',
          'Step 6 (A1): Sketch: a U-shaped curve through (1, 0) and (5, 0) with its lowest point at (3, -4), crossing the y-axis at (0, 5), symmetric about x = 3 and passing also through the reflected point (6, 5).'
        ],
        keyTakeaway: 'Vertex form gives the turning point for free, and the roots, intercept and symmetry fill in a sketch that can be checked against the discriminant.'
      },
      {
        id: 'ex-shs2-em-quad-2',
        title: 'Greatest Area from a Fixed Length of Wire',
        problem: 'A farmer has 24 m of barbed wire and fences three sides of a rectangular cocoa nursery, the fourth side being an existing wall. If x metres is the width perpendicular to the wall, show that the area is A = 24x - 2x^2 and find the dimensions that give the greatest area.',
        stepByStepSolution: [
          'Step 1 (M1): Two widths of x metres and one length use the wire, so the length parallel to the wall is 24 - 2x metres.',
          'Step 2 (M1): Area equals width times length: A = x(24 - 2x) = 24x - 2x^2, a quadratic with a = -2, so the graph opens downward and has a maximum.',
          'Step 3 (M1): Factor out -2 to prepare for completing the square: A = -2(x^2 - 12x) = -2[(x - 6)^2 - 36].',
          'Step 4 (A1): Expand the brackets back: A = -2(x - 6)^2 + 72, which is vertex form.',
          'Step 5 (M1): The term (x - 6)^2 is never negative, so -2(x - 6)^2 is never positive and A is greatest when x - 6 = 0, that is x = 6.',
          'Step 6 (A1): Maximum area = 72 square metres, with width 6 m and length 24 - 2(6) = 12 m.',
          'Step 7 (A1): Final answer: 6 m by 12 m enclosing 72 square metres; checks are 6 × 12 = 72 and wire used 6 + 6 + 12 = 24 m, exactly the supply.'
        ],
        keyTakeaway: 'Turn the word constraint into one variable, complete the square, and the constant outside the square is the maximum area.'
      }
    ],
    quiz: {
      id: 'quiz-shs2-em-t3-quadratic-functions',
      topicId: 'shs2-em-t3-quadratic-functions',
      title: 'Quadratic Functions Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-em-quad-1',
          quizId: 'quiz-shs2-em-t3-quadratic-functions',
          questionText: 'Find the coordinates of the vertex of the curve y = x^2 + 4x - 7.',
          optionA: '(2, -11)',
          optionB: '(-2, -7)',
          optionC: '(-2, -11)',
          optionD: '(4, -7)',
          correctOption: 'C',
          subConcept: 'Vertex of a Parabola',
          explanation: 'The axis is x = -b/(2a) = -4/2 = -2, and substituting gives 4 - 8 - 7 = -11, so the vertex is (-2, -11). Option A keeps the right y-value but forgets the minus sign in -b/(2a), and B quotes the y-intercept instead.',
          remediationTip: 'Compute x = -b/(2a) first, then feed that x back into the function; the constant term -7 is the y-intercept, never the vertex height.'
        },
        {
          id: 'q-em-quad-2',
          quizId: 'quiz-shs2-em-t3-quadratic-functions',
          questionText: 'For what values of k does the equation x^2 + kx + 9 = 0 have equal roots?',
          optionA: 'k = 6 only',
          optionB: 'k = ±3',
          optionC: 'k = 36',
          optionD: 'k = ±6',
          correctOption: 'D',
          subConcept: 'Discriminant and Equal Roots',
          explanation: 'Equal roots need b^2 - 4ac = 0, so k^2 - 4(1)(9) = 0 gives k^2 = 36 and k = ±6. Option A is the common slip of taking only the positive square root, and B comes from halving 9 instead of using 4ac.',
          remediationTip: 'Solving k^2 = 36 has two answers, positive and negative; write both unless the question restricts k.'
        },
        {
          id: 'q-em-quad-3',
          quizId: 'quiz-shs2-em-t3-quadratic-functions',
          questionText: 'State the maximum value of y = -x^2 + 6x - 4.',
          optionA: '5',
          optionB: '3',
          optionC: '-5',
          optionD: '-4',
          correctOption: 'A',
          subConcept: 'Maximum Value',
          explanation: 'Since a = -1 the turning point is a maximum; it occurs at x = -6/(2 × -1) = 3, where y = -9 + 18 - 4 = 5. Option B is the x-value of the vertex, not the value of y, and D is merely the y-intercept.',
          remediationTip: 'Read what is asked: the maximum VALUE is the y-coordinate, so substitute the x-value back into the function.'
        },
        {
          id: 'q-em-quad-4',
          quizId: 'quiz-shs2-em-t3-quadratic-functions',
          questionText: 'Where does the curve y = 2x^2 - 5x - 3 cross the x-axis?',
          optionA: 'x = -1/2 and x = 3',
          optionB: 'x = 1/2 and x = -3',
          optionC: 'x = -2 and x = 3',
          optionD: 'x = 1/2 and x = -1/3',
          correctOption: 'A',
          subConcept: 'Roots from Factorisation',
          explanation: '2x^2 - 5x - 3 = (2x + 1)(x - 3), so the factor 2x + 1 gives x = -1/2 and x - 3 gives x = 3. Option B keeps the right numbers but loses the sign carried by the factor 2x + 1.',
          remediationTip: 'Check each candidate root by substitution: 2(-1/2)^2 - 5(-1/2) - 3 = 0.5 + 2.5 - 3 = 0, so -1/2 really is a root.'
        },
        {
          id: 'q-em-quad-5',
          quizId: 'quiz-shs2-em-t3-quadratic-functions',
          questionText: 'How many points of intersection have the line y = x + 1 and the curve y = x^2 - 3x + 5?',
          optionA: '0',
          optionB: '1',
          optionC: '2',
          optionD: '3',
          correctOption: 'B',
          subConcept: 'Line Meeting a Parabola',
          explanation: 'Equating gives x + 1 = x^2 - 3x + 5, so x^2 - 4x + 4 = 0 with discriminant 16 - 16 = 0; equal roots mean exactly one intersection, the tangent point (2, 3). Option A mistakes a zero discriminant for no solution.',
          remediationTip: 'A discriminant of zero is tangency: one common point, not none and not two.'
        }
      ]
    }
  },
  // =========================================================================
  // TOPIC 15 — LINEAR INEQUALITIES AND FEASIBLE REGIONS
  // =========================================================================
  {
    id: 'shs2-em-t3-inequalities-optimization',
    subjectId: 'elective-maths',
    level: 'SHS 2',
    term: 3,
    orderIndex: 15,
    title: 'Linear Inequalities and Feasible Regions',
    description: 'Converting word constraints into linear inequalities, shading the feasible region, solid and dotted boundaries, finding corner points simultaneously, and optimising a linear objective function at a vertex with Ghanaian profit and cost models.',
    isFreeTrial: false,
    isVip: false,
    keyNotes: `• A linear inequality in x and y shades a half-plane: y ≤ 2x + 3 is everything on or below the line y = 2x + 3, while y > 2x + 3 is strictly above it.
• Boundary convention: draw a SOLID line for ≤ or ≥ because the boundary belongs to the region, and a DOTTED line for < or > because it does not.
• Test a point not on the line, usually the origin: for 2x + y ≤ 6 the point (0, 0) gives 0 ≤ 6, which is true, so shade the side containing the origin.
• Translate the words slowly: "at least" means ≥, "not more than" and "at most" mean ≤, "more than" means > and "less than" means <.
• "Twice as many chairs x as tables y" is x ≥ 2y, not 2x ≥ y; the larger quantity is the one being doubled, so check with numbers, for example 4 chairs and 2 tables satisfy x ≥ 2y.
• Non-negativity is a real constraint: physical objects cannot be counted in negatives, so write x ≥ 0 and y ≥ 0 even when the question never says so.
• The feasible region is the overlap of all the half-planes; every point inside it satisfies every constraint at the same time, and points outside break at least one.
• Corner points come from solving boundary lines simultaneously: x + 2y = 8 and 3x + 2y = 12 subtract to 2x = 4, so x = 2 and y = 3, giving the corner (2, 3).
• Other corners of that region with x ≥ 0, y ≥ 0 are (0, 0), (4, 0) where 3x + 2y = 12 meets the x-axis, and (0, 4) where x + 2y = 8 meets the y-axis.
• Linear objective functions take their greatest and least values at corner points of a bounded feasible region, so list the corners, evaluate the objective at each and compare.
• Worked maximum: maximise P = 800x + 600y subject to x + y ≤ 12 and 4x + 2y ≤ 32 at corners (0, 0), (8, 0), (4, 8) and (0, 12), giving P = 0, 6400, 8000 and 7200; the greatest is GH¢ 8000 at (4, 8).
• Worked minimum: with at-least constraints 4x + 2y ≥ 48 and 2x + 4y ≥ 42, the corners are (21, 0), (9, 6) and (0, 24) and cost C = 30x + 20y gives 630, 390 and 480, so the least cost is GH¢ 390 at (9, 6).
• At-least regions are unbounded, so a maximum may not exist while a minimum still does; always ask which of the two the question wants.
• Integer points: for x + y ≤ 4 with x ≥ 0, y ≥ 0 the whole-number pairs number 5 + 4 + 3 + 2 + 1 = 15; the point (3, 1) satisfies 2x + 3y < 12 and x + y > 2, but (1, 1) fails the second because 1 + 1 = 2 is not greater than 2.
• Finish every answer in the language of the question, for example 4 acres of maize and 8 acres of cassava for a profit of GH¢ 8000, then substitute the point back into each original inequality as a final check.`,
    detailedNotes: {
      overview: 'This topic is word problems turned into pictures and then into decisions. Each sentence of a scenario becomes one linear inequality, the inequalities overlap into a feasible region, and the best profit or least cost is read off a corner of that region. WASSCE Paper 2 sets it as a multi-part question worth useful method marks at every stage: defining variables, writing constraints, graphing, finding corners, evaluating the objective. Because the answer sits at a vertex, the algebra of simultaneous equations from SHS 1 does most of the work.',
      introduction: 'Think in three movements. First, name the variables and write down what each constraint says in words before converting it to symbols. Second, draw: each inequality is a line plus a shaded side, and the feasible region is where all the shadings agree. Third, decide, because a linear objective function cannot beat its own corner values, so list the corners, substitute and compare; candidates who skip the first movement and start graphing are the ones who misread at least as at most.',
      realWorldContext: 'A cocoa cooperative near Takoradi blends two fertiliser brands for its demonstration plots. Brand A costs GH¢ 30 a bag and supplies 4 units of nitrogen and 2 units of potash; brand B costs GH¢ 20 a bag and supplies 2 units of nitrogen and 4 units of potash. A plot needs at least 48 units of nitrogen and at least 42 units of potash, so the buying officer writes 4x + 2y ≥ 48 and 2x + 4y ≥ 42, shades the region above both lines, and discovers that 9 bags of A with 6 bags of B meets the requirement for GH¢ 390, cheaper than 21 bags of A alone at GH¢ 630 or 24 bags of B alone at GH¢ 480.',
      objectives: [
        'Convert constraint wording into linear inequalities, including the non-negativity conditions',
        'Graph a linear inequality, choosing solid or dotted boundaries and the correct shaded side by a test point',
        'Identify the feasible region for a system of inequalities and describe it in words',
        'Calculate the corner points of a feasible region by solving boundary equations simultaneously',
        'Maximise or minimise a linear objective function over the corners and interpret the result in context'
      ],
      sections: [
        {
          title: 'From Words to Inequalities and the Half-Plane They Shade',
          content: 'A constraint in words is a sentence with a comparison in it, and the comparison is the sign. Read "the land available is 12 acres" as x + y ≤ 12, because the farming cannot exceed the land, and "at least 48 units of nitrogen" as 4x + 2y ≥ 48. Two phrasings cause most of the lost marks: "x is at least twice y" is x ≥ 2y, and "y is no more than half of x" is y ≤ x/2, which is the same statement wearing different clothes, so test a pair of numbers to be certain. To graph an inequality, draw the boundary line first and decide its style: ≤ and ≥ include the boundary, so the line is solid, while < and > exclude it, so the line is dotted. Then substitute a test point that is not on the line, usually the origin, and shade the side that makes the statement true. For 2x + y ≤ 6 the origin gives 0 ≤ 6, which is true, so the side containing the origin is shaded.',
          bulletPoints: [
            'At least, minimum, not fewer than all mean ≥; at most, not more than, no more than, maximum all mean ≤.',
            'Solid boundary for ≤ or ≥, dotted boundary for strict < or >.',
            'Use (0, 0) as the test point unless it lies on the line, then use (1, 0) instead.',
            'Rearrange to y on one side before graphing: 2x + 3y ≤ 12 becomes y ≤ 4 - (2/3)x, so the slope is -2/3 and the intercept is 4.',
            'Counting statements about whole objects, such as x + y ≥ 10 items, require integer points in the final answer.'
          ],
          keyTakeaway: 'One sentence, one inequality, one sign; then a solid or dotted line and a test point to decide which side to shade.',
          realWorldExample: 'A canteen at a school in Koforidua must prepare at least 40 plates of food a day but no more than 60: with x waakye plates and y jollof plates the wording gives x + y ≥ 40 and x + y ≤ 60, two parallel boundaries whose solid lines sandwich the strip the cook works inside.'
        },
        {
          title: 'Building a Feasible Region from a Set of Constraints',
          content: 'The feasible region is the set of points that obey every constraint at once, so it is the intersection of the shaded half-planes. Lay the constraints out in the order the story tells them: variables first, then resources such as land, money, time or storage, then the ratio or comparison conditions, and finally x ≥ 0 and y ≥ 0, which confine everything to the first quadrant. Because the non-negativity lines are axes, the region usually sits as a polygon tucked against the corner where x = 0 meets y = 0. When a constraint is an at-least type, its half-plane points away from the origin, so the region is open-ended, unbounded, and a question about a greatest value then has no answer while a least value still does. Shade carefully with light hatching in the exam and label the surviving region R, because examiners look for a clearly identified region before they look at any number.',
          bulletPoints: [
            'Write all constraints before graphing any of them, one line of working per constraint.',
            'Non-negativity turns an infinite strip into a corner-wedged polygon; never omit it.',
            'Constraints of type ≤ point towards the origin, constraints of type ≥ point away from it.',
            'An unbounded feasible region can still have a minimum but never a maximum for a positive objective function.',
            'Label each boundary line with its equation on the graph so the corner work that follows can be read off.'
          ],
          keyTakeaway: 'The feasible region is the overlap of all half-planes; draw every boundary, label it, and identify the surviving polygon or strip as R.',
          realWorldExample: 'A market trader in Tamale stores sachet water and soft drinks in two crates holding at most 200 items worth no more than GH¢ 2 400; the four inequalities, including the two crate floors of x ≥ 0 and y ≥ 0, carve out the polygon of stock combinations she can actually display.'
        },
        {
          title: 'Corner Points by Solving Boundary Lines Simultaneously',
          content: 'Optimisation needs coordinates, and coordinates come from pairs of boundary lines solved together. Take the region bounded by x ≥ 0, y ≥ 0, x + 2y ≤ 8 and 3x + 2y ≤ 12. Setting y = 0 in the second boundary gives the corner (4, 0); setting x = 0 in the first gives (0, 4); the axes themselves meet at (0, 0); and the two slanted boundaries meet where subtracting x + 2y = 8 from 3x + 2y = 12 leaves 2x = 4, so x = 2 and then y = 3, giving the corner (2, 3). In the maize and cassava problem the labour constraint 4x + 2y ≤ 32 simplifies to 2x + y ≤ 16, and subtracting the land constraint x + y = 12 leaves x = 4, hence y = 8, so (4, 8) is a corner. A candidate point is only a corner if it satisfies every inequality: (3, 2) fails because 3(3) + 2(2) = 13 is greater than 12, which is why it lies outside the region even though its coordinates look plausible.',
          bulletPoints: [
            'Intersect boundaries two at a time, then test each candidate point against all the other constraints.',
            'Simplify first: 4x + 2y ≤ 32 divides through by 2 to 2x + y ≤ 16, making the subtraction cleaner.',
            'Subtraction of the two equations eliminates whichever variable has equal coefficients, as with the 2y terms above.',
            'Axis corners are found by putting x = 0 or y = 0 in the correct boundary, choosing the FARTHER intercept for at-least regions.',
            'Show the simultaneous solving in the script; the M1 mark is for the elimination step, not for the written point.'
          ],
          keyTakeaway: 'Corners are just solutions of pairs of boundary equations; solve, then verify each candidate satisfies every constraint.',
          realWorldExample: 'The fertiliser plan for the Takoradi plot has corners where the nitrogen line 4x + 2y = 48 meets the potash line 2x + 4y = 42, and doubling the second equation and subtracting gives y = 6, x = 9, so (9, 6) is the corner the buying officer must examine.'
        },
        {
          title: 'The Objective Function: Testing Corners and Reporting the Answer',
          content: 'An objective function is the quantity being optimised, always linear: profit P = 800x + 600y or cost C = 30x + 20y. The rule the syllabus uses is that on a bounded feasible region a linear objective attains its greatest and least values at corner points, so evaluate it at every corner and compare. For the Ejura farm the corners are (0, 0), (8, 0), (0, 12) and (4, 8), and P takes the values 0, 6400, 7200 and 8000 cedis, so the maximum is GH¢ 8000 at (4, 8). For the fertiliser cost the corners are (21, 0), (0, 24) and (9, 6), and C takes 630, 480 and 390, so the minimum cost is GH¢ 390. Two finishing habits separate full-mark scripts: substitute the chosen point back into every original constraint, and state the answer in the story language, since a marker awards the final A1 for a sentence such as 4 acres of maize and 8 acres of cassava give the greatest profit of GH¢ 8000. If whole numbers are demanded and the corner is fractional, test the lattice points nearest the corner rather than rounding blindly, because rounding can leave the feasible region.',
          bulletPoints: [
            'Write the objective with its units before substituting, for example P = 800x + 600y cedis.',
            'Evaluate at EVERY corner, including the origin-side ones; a corner you skip may be the optimum.',
            'For maximise read the largest value, for minimise the smallest; misreading the verb loses the whole A1.',
            'Check the winning point in all constraints: at (4, 8) the land is 4 + 8 = 12 acres and the labour is 4(4) + 2(8) = 32 hours, both exactly the limits.',
            'The iso-profit line P = 800x + 600y slides outward parallel to itself; the last corner it touches is the optimum.'
          ],
          keyTakeaway: 'Evaluate the linear objective at every corner, pick the best, then check the point in each constraint and answer in words.',
          realWorldExample: 'The Ejura farmer with 12 acres and 32 labour hours earns the most by planting 4 acres of maize at GH¢ 800 and 8 acres of cassava at GH¢ 600, a profit of GH¢ 8000, rather than filling all the land with cassava, which would return only GH¢ 7200.'
        }
      ],
      commonMistakes: [
        'Reading "at least" as ≤: the requirement of at least 48 units of nitrogen is 4x + 2y ≥ 48, shading away from the origin, whereas 4x + 2y ≤ 48 would allow a plot that fails the requirement.',
        'Writing x ≥ 2y as 2x ≥ y for the statement "there are at least twice as many chairs x as tables y": with x = 4 and y = 2 the correct reading 4 ≥ 4 holds, while 2(4) ≥ 2 also holds for the wrong reason, so test x = 3 and y = 2 to expose the error.',
        'Omitting x ≥ 0 and y ≥ 0, which lets the shaded region run into the second and fourth quadrants and produces impossible negative acres or negative bags.',
        'Shading the feasible side of each line separately and leaving the region unidentified; the answer must be the single overlap, labelled R, not four unrelated hatchings.',
        'Rounding a fractional corner without re-testing feasibility: if the optimum corner is (4.5, 7.5) and whole items are required, checking the nearby lattice points (4, 7), (4, 8), (5, 7) and (5, 6) is the method, and simply rounding to (5, 8) may violate a constraint.'
      ],
      wassceExamTips: [
        'This question is a Paper 2 favourite worth a block of marks; spend about 15 minutes and expect M1 credit for defining variables with units, one per constraint, the graph, the corner algebra and the concluding sentence.',
        'Define the variables in a full sentence, let x be the number of acres of maize and y the number of acres of cassava; markers give method credit for that line and it protects every later substitution.',
        'Draw the graph with axes labelled and scaled so the corners land on readable grid points; a messy region costs the graphical M1 even when the algebra that follows is correct.',
        'Where the question asks for an integer or whole-number answer, exhibit the neighbouring lattice points and reject any that breaks a constraint; a bare rounded number earns no method credit.',
        'If your corner coordinates come out wrong in an earlier part, keep using them for the objective function; carry-forward (afr) credit means the evaluation method still scores, so never abandon the question.'
      ],
      summaryChecklist: [
        'Can I translate a constraint sentence into an inequality with the correct sign and the non-negativity conditions?',
        'Can I graph an inequality with the right boundary style and shade the correct half-plane using a test point?',
        'Can I identify and label the feasible region for a system of up to four inequalities?',
        'Can I find every corner point by solving boundary lines simultaneously and check each against all constraints?',
        'Can I evaluate a linear objective function at the corners and report the maximum profit or minimum cost in context?'
      ]
    },
    examples: [
      {
        id: 'ex-shs2-em-feas-1',
        title: 'Greatest Profit for a Mixed Farm',
        problem: 'A farmer at Ejura has 12 acres of land and 32 labour hours available. An acre of maize needs 4 hours and yields a profit of GH¢ 800; an acre of cassava needs 2 hours and yields GH¢ 600. Write the constraints, find the corner points of the feasible region and determine the greatest possible profit.',
        stepByStepSolution: [
          'Step 1 (M1): Define the variables: let x be the acres of maize and y the acres of cassava, with x ≥ 0 and y ≥ 0 because acreage cannot be negative.',
          'Step 2 (M1): Translate the resources: land gives x + y ≤ 12, and labour gives 4x + 2y ≤ 32, which divides by 2 to 2x + y ≤ 16.',
          'Step 3 (M1): Read off the axis corners: the labour line meets y = 0 at (8, 0), and the land line meets x = 0 at (0, 12); the axes meet at (0, 0).',
          'Step 4 (M1): Solve the two boundaries together: subtracting x + y = 12 from 2x + y = 16 leaves x = 4, and then y = 12 - 4 = 8, so the interior corner is (4, 8).',
          'Step 5 (M1): Write the objective P = 800x + 600y and evaluate it at each corner: P(0, 0) = 0, P(8, 0) = 6400, P(0, 12) = 7200, P(4, 8) = 3200 + 4800.',
          'Step 6 (A1): P(4, 8) = GH¢ 8000, the largest of the four corner values.',
          'Step 7 (A1): The greatest profit is GH¢ 8000 from 4 acres of maize and 8 acres of cassava, and the checks are 4 + 8 = 12 acres of land and 4(4) + 2(8) = 32 labour hours, both exactly within the limits.'
        ],
        keyTakeaway: 'Two resource constraints give a four-corner region; the profit is linear, so testing the corners finds the answer and the winning point is checked in both constraints.'
      },
      {
        id: 'ex-shs2-em-feas-2',
        title: 'Least Cost for a Fertiliser Mixture',
        problem: 'Brand A fertiliser costs GH¢ 30 a bag and supplies 4 units of nitrogen and 2 units of potash. Brand B costs GH¢ 20 a bag and supplies 2 units of nitrogen and 4 units of potash. A demonstration plot needs at least 48 units of nitrogen and at least 42 units of potash. Find the number of bags of each brand that minimises the cost, and state the least cost.',
        stepByStepSolution: [
          'Step 1 (M1): Let x be bags of A and y bags of B, with x ≥ 0 and y ≥ 0; the constraints are 4x + 2y ≥ 48 and 2x + 4y ≥ 42.',
          'Step 2 (M1): Find the intercepts of the boundaries: 4x + 2y = 48 meets the axes at (12, 0) and (0, 24), while 2x + 4y = 42 meets them at (21, 0) and (0, 10.5).',
          'Step 3 (M1): Because both constraints are at-least types, the region lies above both lines, so the extreme axis corners use the FARTHER intercepts: (21, 0) on the x-axis and (0, 24) on the y-axis.',
          'Step 4 (M1): Solve the boundaries simultaneously: doubling 2x + 4y = 42 gives 4x + 8y = 84, and subtracting 4x + 2y = 48 leaves 6y = 36, so y = 6 and then 4x + 12 = 48 gives x = 9, the corner (9, 6).',
          'Step 5 (M1): Write the cost C = 30x + 20y and evaluate at the three corners: C(21, 0) = 630, C(0, 24) = 480, C(9, 6) = 270 + 120.',
          'Step 6 (A1): C(9, 6) = GH¢ 390, which is the least of the corner values.',
          'Step 7 (A1): The least cost is GH¢ 390 with 9 bags of A and 6 bags of B; the requirements are met exactly since nitrogen is 4(9) + 2(6) = 48 units and potash is 2(9) + 4(6) = 42 units.'
        ],
        keyTakeaway: 'With at-least constraints the feasible region is unbounded but the minimum still sits at a corner, and here that corner uses up both nutrients exactly.'
      }
    ],
    quiz: {
      id: 'quiz-shs2-em-t3-inequalities-optimization',
      topicId: 'shs2-em-t3-inequalities-optimization',
      title: 'Feasible Regions Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-em-feas-1',
          quizId: 'quiz-shs2-em-t3-inequalities-optimization',
          questionText: 'A number of chairs, x, is at least twice the number of tables, y. Which inequality represents this statement?',
          optionA: 'x ≥ 2y',
          optionB: 'x ≤ 2y',
          optionC: 'y ≥ 2x',
          optionD: '2x ≥ y',
          correctOption: 'A',
          subConcept: 'Constraint Wording',
          explanation: 'At least twice as many chairs as tables means the chair count is not smaller than double the table count, so x ≥ 2y; with x = 4 and y = 2 it reads 4 ≥ 4, which is true. Option B reverses the comparison and D, which says x ≥ y/2, is far too weak.',
          remediationTip: 'Substitute a pair that must work, such as 4 chairs with 2 tables, and keep only the inequality that the pair satisfies.'
        },
        {
          id: 'q-em-feas-2',
          quizId: 'quiz-shs2-em-t3-inequalities-optimization',
          questionText: 'Which of the following points satisfies both 2x + 3y < 12 and x + y > 2?',
          optionA: '(0, 4)',
          optionB: '(1, 1)',
          optionC: '(3, 1)',
          optionD: '(4, 2)',
          correctOption: 'C',
          subConcept: 'Testing Points in a Region',
          explanation: 'At (3, 1): 2(3) + 3(1) = 9, which is less than 12, and 3 + 1 = 4, which is greater than 2, so both hold. Option A fails the strict inequality because 2(0) + 3(4) = 12 is not less than 12, and option B fails the second because 1 + 1 = 2 is not greater than 2.',
          remediationTip: 'Test every candidate in both inequalities and respect strict signs: a boundary point does not belong to a dotted line.'
        },
        {
          id: 'q-em-feas-3',
          quizId: 'quiz-shs2-em-t3-inequalities-optimization',
          questionText: 'A feasible region is defined by x ≥ 0, y ≥ 0, x + y ≤ 6 and x ≤ 2. Find the maximum value of P = 3x + 5y.',
          optionA: '26',
          optionB: '36',
          optionC: '6',
          optionD: '30',
          correctOption: 'D',
          subConcept: 'Optimising at a Vertex',
          explanation: 'The corners are (0, 0), (2, 0), (2, 4) and (0, 6), where (2, 4) comes from x = 2 meeting x + y = 6. Then P = 0, 6, 26 and 30, so the maximum is 30 at (0, 6). The value 36 comes from the point (2, 6), which is outside the region because 2 + 6 = 8 is not at most 6.',
          remediationTip: 'List only genuine corners, checking each against every constraint, then substitute into the objective one line at a time.'
        },
        {
          id: 'q-em-feas-4',
          quizId: 'quiz-shs2-em-t3-inequalities-optimization',
          questionText: 'The lines x + 2y = 8 and 3x + 2y = 12 are two boundaries of a feasible region. Which point is their corner?',
          optionA: '(3, 2)',
          optionB: '(2, 3)',
          optionC: '(4, 3)',
          optionD: '(8, 6)',
          correctOption: 'B',
          subConcept: 'Intersection of Boundaries',
          explanation: 'Subtracting x + 2y = 8 from 3x + 2y = 12 eliminates y and leaves 2x = 4, so x = 2 and then 2 + 2y = 8 gives y = 3, the corner (2, 3). Option A swaps the coordinates, and (3, 2) also fails the second boundary since 3(3) + 2(2) = 13.',
          remediationTip: 'Choose elimination where the coefficients already match; here both equations carry 2y, so one subtraction finishes the job.'
        },
        {
          id: 'q-em-feas-5',
          quizId: 'quiz-shs2-em-t3-inequalities-optimization',
          questionText: 'x and y are integers with x ≥ 0, y ≥ 0 and x + y ≤ 4. How many pairs (x, y) satisfy all three conditions?',
          optionA: '10',
          optionB: '16',
          optionC: '15',
          optionD: '20',
          correctOption: 'C',
          subConcept: 'Integer Points in a Region',
          explanation: 'For each x from 0 to 4 the y values run from 0 up to 4 - x, giving 5 + 4 + 3 + 2 + 1 = 15 pairs. Option A, which is 10, counts only the pairs with x + y strictly less than 4, so it drops the whole boundary line that the ≤ sign includes.',
          remediationTip: 'Count column by column along the x-axis, and remember that a solid boundary line contributes its own lattice points.'
        }
      ]
    }
  },
  // END-OF-BATCH-EM2C
];
