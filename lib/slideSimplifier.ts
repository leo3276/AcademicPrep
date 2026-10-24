// Academic Slide Simplifier & Plain-English Pedagogical Unpacker
// Ensures that EVERY university lecture slide across ANY discipline is genuinely understood,
// unpacked, and simplified into plain, student-friendly English—NEVER copied verbatim.

import { DetailedTakeaway } from './universitySlides';

/**
 * Cross-disciplinary lexicon of common university academic terms, jargon, and concepts.
 * When any of these appear in a slide bullet, the simplifier automatically unpacks
 * what the term actually means in simple, everyday language with a concrete example.
 */
export interface JargonExplainer {
  pattern: RegExp;
  term: string;
  plainMeaning: string;
  example?: string;
}

export const ACADEMIC_JARGON_LEXICON: JargonExplainer[] = [
  // Economics & Finance
  {
    pattern: /\belasticity\b/i,
    term: 'Elasticity',
    plainMeaning: 'how strongly buyers or sellers react when price or income changes',
    example: 'If coffee jumps from $3 to $8 and you immediately switch to tea, your demand for coffee is "elastic" (sensitive to price). With life-saving insulin, people must buy it regardless of price ("inelastic").'
  },
  {
    pattern: /\binflation(?:ary)?\b/i,
    term: 'Inflation',
    plainMeaning: 'a general rise in prices across the economy that shrinks what each dollar can buy',
    example: 'If a loaf of bread cost $2 last year and costs $2.50 today, your money has lost purchasing power.'
  },
  {
    pattern: /\bliquidity\b/i,
    term: 'Liquidity',
    plainMeaning: 'how quickly and easily an asset can be turned into spendable cash without losing value',
    example: 'Cash in a checking account has 100% liquidity, whereas a factory building is "illiquid" because selling it takes months.'
  },
  {
    pattern: /\bsolvency\b/i,
    term: 'Solvency',
    plainMeaning: 'having more total assets than total debts so a business can survive long-term and pay all its obligations',
    example: 'A company with $5M in property and $2M in loans is solvent; if debts exceed assets, it faces insolvency/bankruptcy.'
  },
  {
    pattern: /\bmonetary\s+policy\b/i,
    term: 'Monetary Policy',
    plainMeaning: 'actions taken by a country’s Central Bank (like changing interest rates or the money supply) to keep inflation low and employment stable',
    example: 'When inflation is too high, the Central Bank raises interest rates to make borrowing expensive and cool down spending.'
  },
  {
    pattern: /\bfiscal\s+policy\b/i,
    term: 'Fiscal Policy',
    plainMeaning: 'how the government uses taxation and public spending (on roads, schools, defense) to speed up or slow down the economy',
    example: 'Cutting taxes or building highways injects money into the economy during a recession.'
  },
  {
    pattern: /\baggregate\s+demand\b/i,
    term: 'Aggregate Demand',
    plainMeaning: 'the total combined spending on domestic goods and services by households, businesses, government, and foreign buyers',
    example: 'When consumers feel confident and interest rates are low, aggregate demand rises and factories hire more workers.'
  },
  {
    pattern: /\bopportunity\s+cost\b/i,
    term: 'Opportunity Cost',
    plainMeaning: 'the value of the next-best alternative you give up whenever you make a choice',
    example: 'If you spend $1,000 on a new phone instead of investing it at 10% interest, the opportunity cost is the investment return you gave up.'
  },
  {
    pattern: /\bmarginal\s+(cost|revenue|utility|benefit)\b/i,
    term: 'Marginal Analysis',
    plainMeaning: 'the extra cost or extra benefit gained from producing or consuming just ONE more unit',
    example: 'If making 100 pizzas costs $500 and making 101 pizzas costs $504, the marginal cost of the 101st pizza is $4.'
  },
  {
    pattern: /\beconomies\s+of\s+scale\b/i,
    term: 'Economies of Scale',
    plainMeaning: 'the cost advantage where the average cost of making each item drops as a company produces in larger volume',
    example: 'Printing 1,000 books might cost $15 per book, but printing 100,000 books spreads setup costs out so each book costs only $2.'
  },
  {
    pattern: /\bdepreciation\b|\bamortization\b/i,
    term: 'Depreciation & Amortization',
    plainMeaning: 'spreading the purchase cost of a long-term asset (like a delivery truck or patent) across the years you actually use it',
    example: 'Instead of recording a $50,000 truck as a single year’s expense, a firm expenses $10,000 per year over 5 years.'
  },
  {
    pattern: /\bleverage\b/i,
    term: 'Financial Leverage',
    plainMeaning: 'using borrowed money (debt) to finance assets and amplify potential investment returns',
    example: 'Buying a $200,000 rental property with $40,000 of your own cash and a $160,000 bank mortgage uses leverage.'
  },
  {
    pattern: /\bworking\s+capital\b/i,
    term: 'Working Capital',
    plainMeaning: 'the short-term cash cushion left after subtracting short-term bills (current liabilities) from short-term assets (current assets)',
    example: 'Used to pay weekly wages, buy inventory, and keep the lights on before customers pay their invoices.'
  },
  {
    pattern: /\bdiversification\b/i,
    term: 'Diversification',
    plainMeaning: 'spreading investments or products across different markets so a single failure cannot ruin the whole business ("not putting all your eggs in one basket")',
    example: 'An ice-cream shop also selling hot coffee and soup in winter so sales stay steady year-round.'
  },
  {
    pattern: /\btariff\b|\bquota\b|\bprotectionism\b/i,
    term: 'Tariffs & Quotas (Trade Protectionism)',
    plainMeaning: 'government barriers on foreign imports—a tariff is a tax on imported goods, while a quota is a strict limit on how many units can enter the country',
    example: 'A 25% tariff on imported steel makes foreign steel more expensive so local buyers choose domestic steel.'
  },
  {
    pattern: /\bcomparative\s+advantage\b/i,
    term: 'Comparative Advantage',
    plainMeaning: 'the ability of a country or firm to produce a good at a lower opportunity cost than trading partners',
    example: 'Even if a surgeon is also the fastest typist in the clinic, the surgeon focuses on surgery and hires an assistant to type.'
  },

  // Management, Strategy & Marketing
  {
    pattern: /\bspan\s+of\s+control\b/i,
    term: 'Span of Control',
    plainMeaning: 'the exact number of frontline employees who report directly to a single manager',
    example: 'A supervisor overseeing 15 call-center agents has a "wide" span of control; an executive managing 3 VPs has a "narrow" span.'
  },
  {
    pattern: /\bcentralization\b|\bdecentralization\b/i,
    term: 'Centralization vs. Decentralization',
    plainMeaning: 'whether decision-making power is kept at top corporate headquarters (centralized) or pushed down to local branch managers closest to customers (decentralized)',
    example: 'Allowing local hotel managers to approve customer refunds on the spot is decentralized decision-making.'
  },
  {
    pattern: /\bsegmentation\b|\btarget\s+market\b/i,
    term: 'Market Segmentation & Targeting',
    plainMeaning: 'dividing a huge, diverse public into smaller groups of buyers with similar needs (segmentation) and choosing the most profitable group to serve (targeting)',
    example: 'A shoe company segments buyers into marathon runners, school kids, and office workers, then designs distinct shoes for each.'
  },
  {
    pattern: /\bvalue\s+proposition\b|\bdifferentiation\b/i,
    term: 'Product Differentiation & Value Proposition',
    plainMeaning: 'making your product stand out from competitors with unique quality, design, or service so customers willingly choose you',
    example: 'Volvo differentiates its cars around family safety, while Ferrari differentiates around speed and prestige.'
  },
  {
    pattern: /\bcognitive\s+dissonance\b/i,
    term: 'Cognitive Dissonance (Buyer’s Remorse)',
    plainMeaning: 'the mental discomfort or doubt a person feels right after making a major decision or expensive purchase ("Did I make the right choice?")',
    example: 'Feeling nervous after buying an expensive laptop—which companies ease by offering 30-day money-back guarantees.'
  },
  {
    pattern: /\bsynergy\b/i,
    term: 'Synergy',
    plainMeaning: 'when two teams or companies combine so their joint output is greater than the sum of what they could achieve separately (1 + 1 = 3)',
    example: 'A software firm merging with a hardware maker so their combined device works seamlessly.'
  },
  {
    pattern: /\bfiduciary\b/i,
    term: 'Fiduciary Duty',
    plainMeaning: 'the strict legal and ethical obligation to act 100% in the best financial interest of another party (such as shareholders or clients) rather than yourself',
    example: 'Corporate board directors have a fiduciary duty to protect shareholder money and avoid self-dealing.'
  },

  // Computer Science, IT & Engineering
  {
    pattern: /\balgorithm\b/i,
    term: 'Algorithm',
    plainMeaning: 'a clear, step-by-step recipe of instructions for solving a problem or completing a calculation',
    example: 'Just like a cooking recipe tells you the exact order to mix and bake ingredients, a sorting algorithm arranges names from A to Z.'
  },
  {
    pattern: /\bencapsulation\b|\babstraction\b|\bpolymorphism\b|\binheritance\b/i,
    term: 'Object-Oriented Programming (OOP) Pillars',
    plainMeaning: 'organizing code into reusable "objects": Encapsulation hides internal data safely inside; Abstraction shows only simple controls; Inheritance lets child classes reuse parent code; Polymorphism lets one command work across different object types',
    example: 'Think of a car’s gas pedal (Abstraction): you just press it without needing to see the fuel injection math hidden inside the engine (Encapsulation).'
  },
  {
    pattern: /\blatency\b|\bthroughput\b|\bbandwidth\b/i,
    term: 'Latency vs. Throughput / Bandwidth',
    plainMeaning: 'Latency is the delay/time it takes for a single piece of data to travel from A to B; Throughput (bandwidth) is how much total data can flow per second',
    example: 'Think of a highway: Latency is how many minutes it takes one car to drive from start to finish; Bandwidth is how many lanes the highway has.'
  },
  {
    pattern: /\brecursion\b|\brecursive\b/i,
    term: 'Recursion',
    plainMeaning: 'a method where a function solves a large problem by calling itself on smaller and smaller pieces until it hits a simple stopping point ("base case")',
    example: 'Like opening Russian nesting dolls one inside another until you reach the tiny solid doll at the center.'
  },
  {
    pattern: /\bconcurrency\b|\basynchronous\b|\bparallelism\b/i,
    term: 'Concurrency & Asynchronous Execution',
    plainMeaning: 'handling multiple tasks over the same time period without freezing up—starting a slow task (like downloading a file) and continuing other work while waiting for it to finish',
    example: 'Like a chef putting a roast in the oven and chopping vegetables while it bakes, rather than staring at the oven for an hour.'
  },
  {
    pattern: /\bencryption\b|\bauthentication\b|\bauthorization\b/i,
    term: 'Authentication, Authorization & Encryption',
    plainMeaning: 'Authentication verifies WHO you are (logging in with a password/ID); Authorization checks WHAT you are allowed to access; Encryption scrambles data so hackers cannot read it',
    example: 'Showing your passport at the airport is Authentication; your boarding pass letting you into First Class is Authorization.'
  },

  // Science, Biology, Medicine & Statistics
  {
    pattern: /\bhomeostasis\b/i,
    term: 'Homeostasis',
    plainMeaning: 'the body’s built-in self-balancing system that keeps internal conditions (like temperature, blood sugar, and pH) stable even when the outside environment changes',
    example: 'Like a home thermostat: when your body gets too hot, you sweat to cool back down to 37°C (98.6°F).'
  },
  {
    pattern: /\bosmosis\b|\bdiffusion\b/i,
    term: 'Diffusion & Osmosis',
    plainMeaning: 'Diffusion is molecules naturally spreading out from crowded (high-concentration) areas to less crowded areas; Osmosis is specifically water moving across a membrane toward higher salt/solute concentration',
    example: 'Spraying perfume in one corner of a room and smelling it across the room a minute later is diffusion.'
  },
  {
    pattern: /\bcorrelation\b|\bcausation\b|\bregg?ression\b/i,
    term: 'Correlation vs. Causation & Regression',
    plainMeaning: 'Correlation measures whether two variables move together; Causation means one actually causes the other; Regression fits a mathematical line to predict how changing X affects Y',
    example: 'Ice cream sales and sunburns both rise in summer (Correlation), but eating ice cream does not cause sunburns—hot sunshine causes both!'
  },
  {
    pattern: /\bstandard\s+deviation\b|\bvariance\b/i,
    term: 'Variance & Standard Deviation',
    plainMeaning: 'a measure of how spread out numbers are from the average (mean)—low standard deviation means data points cluster tightly near the average; high means they are wildly scattered',
    example: 'If two classes both average 75% on an exam, the class where everyone scored between 72% and 78% has a tiny standard deviation.'
  },
  {
    pattern: /\bp\s*-\s*value\b|\bnull\s+hypothesis\b|\bstatistical\s+significance\b/i,
    term: 'Null Hypothesis & p-value',
    plainMeaning: 'The Null Hypothesis (H₀) assumes "nothing special happened / any difference is just random luck." The p-value is the probability of seeing your results by pure chance—if p < 0.05, the result is "statistically significant" and we reject the null hypothesis',
    example: 'Like a courtroom trial: the Null Hypothesis is "innocent until proven guilty," and a tiny p-value (< 0.05) is strong evidence beyond reasonable doubt.'
  },
  {
    pattern: /\bentropy\b|\bthermodynamics\b/i,
    term: 'Thermodynamics & Entropy',
    plainMeaning: 'First Law: energy cannot be created or destroyed, only converted. Second Law (Entropy): every energy transfer loses some useful energy as heat, causing systems to naturally move from order to disorder',
    example: 'A hot cup of coffee left on a table naturally cools down as its heat spreads out into the cooler room.'
  },

  // Law, Social Sciences & General Academic Terms
  {
    pattern: /\bjurisdiction\b|\bsovereignty\b/i,
    term: 'Jurisdiction & Sovereignty',
    plainMeaning: 'the legal authority and geographic or subject-matter boundary within which a court or government has the power to make and enforce laws',
    example: 'A local traffic court has jurisdiction over speeding tickets in its city, but not over international patent disputes.'
  },
  {
    pattern: /\btort\b|\bnegligence\b|\bliability\b/i,
    term: 'Legal Liability, Torts & Negligence',
    plainMeaning: 'Liability is legal responsibility for damages; a Tort is a civil wrong that harms someone; Negligence is failing to use reasonable care, resulting in accidental harm to another person',
    example: 'If a supermarket leaves a wet floor with no warning sign and a shopper slips, the store can be sued for the tort of negligence.'
  },
  {
    pattern: /\bparadigm\b|\bepistemolog\w*\b|\bheuristic\b/i,
    term: 'Academic Framework Terms (Paradigm / Heuristic)',
    plainMeaning: 'A Paradigm is the standard worldview or model accepted by experts; a Heuristic is a practical mental shortcut ("rule of thumb") used to make fast decisions when time or data is limited',
    example: 'Checking customer star ratings before buying a product online is a classic everyday heuristic.'
  }
];

/**
 * Dictionary of stiff academic words/phrases and their plain-English replacements.
 * Used to rewrite dense slide sentences into natural, easy-to-digest English.
 */
const ACADEMIC_PHRASE_SIMPLIFIERS: Array<[RegExp, string]> = [
  [/\bis characterized by\b/gi, 'is known for having'],
  [/\bcharacterized by\b/gi, 'defined by'],
  [/\bfacilitates\b/gi, 'makes it easier to achieve'],
  [/\bfacilitate\b/gi, 'help make happen'],
  [/\butilize\b/gi, 'use'],
  [/\butilizes\b/gi, 'uses'],
  [/\butilization of\b/gi, 'using'],
  [/\bin order to\b/gi, 'to'],
  [/\bsubsequent to\b/gi, 'after'],
  [/\bprior to\b/gi, 'before'],
  [/\bwith respect to\b/gi, 'regarding'],
  [/\bin the event that\b/gi, 'if'],
  [/\bnecessitates\b/gi, 'requires'],
  [/\bnecessitate\b/gi, 'require'],
  [/\bmitigate\b/gi, 'reduce and protect against'],
  [/\bmitigates\b/gi, 'reduces'],
  [/\bmitigation of\b/gi, 'reducing'],
  [/\bameliorate\b/gi, 'improve'],
  [/\bexacerbate\b/gi, 'worsen'],
  [/\bexacerbates\b/gi, 'makes worse'],
  [/\bproliferation of\b/gi, 'rapid spread of'],
  [/\bcomprises\b/gi, 'is made up of'],
  [/\bis comprised of\b/gi, 'consists of'],
  [/\bpredominantly\b/gi, 'mainly'],
  [/\bconsequently\b/gi, 'as a result'],
  [/\bnevertheless\b/gi, 'however'],
  [/\bfurthermore\b/gi, 'also'],
  [/\b encompasses\b/gi, ' covers and includes'],
  [/\bpertaining to\b/gi, 'related to'],
  [/\bdue to the fact that\b/gi, 'because'],
  [/\bin accordance with\b/gi, 'following'],
  [/\boptimal\b/gi, 'best possible'],
  [/\bmaximize\b/gi, 'get the highest possible'],
  [/\bminimize\b/gi, 'keep as low as possible'],
  [/\bconstraints\b/gi, 'practical limits'],
  [/\basymmetric\b/gi, 'uneven or one-sided'],
  [/\bautonomous\b/gi, 'independent, self-governing'],
  [/\bhomogeneous\b/gi, 'uniform and all alike'],
  [/\bheterogeneous\b/gi, 'diverse and varied'],
  [/\breciprocal\b/gi, 'two-way / mutual'],
  [/\bempirical\b/gi, 'real-world, evidence-based'],
  [/\btheoretical\b/gi, 'concept-based'],
  [/\bremuneration\b/gi, 'pay and financial compensation'],
  [/\bprocurement\b/gi, 'buying and sourcing needed supplies'],
  [/\bdisseminate\b/gi, 'spread and share'],
  [/\bterminate\b/gi, 'end']
];

/**
 * Rewrites stiff academic phrasing into clear, conversational English.
 */
export function simplifyAcademicPhrasing(rawText: string): string {
  let simplified = rawText.trim();
  for (const [pattern, replacement] of ACADEMIC_PHRASE_SIMPLIFIERS) {
    simplified = simplified.replace(pattern, replacement);
  }
  return simplified.replace(/\s+/g, ' ').trim();
}

/**
 * Finds any matching academic jargon terms in a text snippet so we can explain them in plain English.
 */
export function findMatchingJargon(text: string): JargonExplainer[] {
  const found: JargonExplainer[] = [];
  for (const item of ACADEMIC_JARGON_LEXICON) {
    if (item.pattern.test(text)) {
      found.push(item);
    }
    if (found.length >= 2) break;
  }
  return found;
}

/**
 * Extracts a clean, meaningful concept heading from a sentence or bullet
 * (Never returns awkward chopped 5-word sentence fragments like "Higher interest rates increase the").
 */
export function extractCleanConceptHeading(bullet: string, slideTitle: string, index: number): string {
  const clean = bullet.replace(/^[•\-\*\d\.\)\s]+/, '').trim();

  // 1. If there is a colon, em-dash, or hyphen separator near the start ("Term: ...", "Term - ...")
  const sepMatch = clean.match(/^([A-Za-z0-9\s/&'’(),\-]{2,48}?)\s*(?:[:–—]|\s+-\s+)\s*(.+)$/);
  if (sepMatch) {
    const candidate = sepMatch[1].trim();
    if (candidate.split(/\s+/).length <= 7) {
      return toTitleCase(candidate);
    }
  }

  // 2. If it's a comparison ("X vs. Y" or "X versus Y")
  const vsMatch = clean.match(/^([A-Za-z0-9\s/&'-]{2,35}\s+(?:vs\.?|versus)\s+[A-Za-z0-9\s/&'-]{2,35})/i);
  if (vsMatch) {
    return toTitleCase(vsMatch[1].trim());
  }

  // 3. If it's a short phrase already (<= 6 words), use the whole phrase as the heading
  const words = clean.replace(/[.;,!?]+$/, '').split(/\s+/);
  if (words.length <= 6) {
    return toTitleCase(words.join(' '));
  }

  // 4. If it starts with a verb/subject before a causal or action verb ("is", "are", "means", "refers to", "involves", "allows", "causes", "leads to", "helps", "requires", "measures")
  const subjectMatch = clean.match(/^([A-Za-z0-9\s/&'’()\-]{3,42}?)\s+(?:is|are|was|were|means|refers to|involves|allows|enables|causes|leads to|results in|helps|requires|measures|determines|represents|focuses on|consists of|includes|provides|creates|reduces|increases|prevents|ensures)\b/i);
  if (subjectMatch) {
    const subj = subjectMatch[1].trim().replace(/\b(the|a|an|that|which|how|why)\s*$/i, '').trim();
    if (subj.length >= 3 && subj.split(/\s+/).length <= 6) {
      return toTitleCase(subj);
    }
  }

  // 5. Otherwise, take the first 4-6 words and strip trailing dangling prepositions/articles ("the", "of", "to", "in", "for", "and", "or", "with", "by", "as", "that", "is", "are")
  let slice = words.slice(0, 5);
  while (
    slice.length > 2 &&
    /^(the|a|an|of|to|in|on|at|for|with|by|from|into|and|or|but|as|that|which|who|is|are|was|were|be|been|has|have|had|can|will|may|should|must|very|more|most|also|such)$/i.test(slice[slice.length - 1].replace(/[.,;:]/g, ''))
  ) {
    slice.pop();
  }

  const labelText = slice.join(' ').replace(/[.,;:]$/, '');
  return labelText.length > 2 ? toTitleCase(labelText) : `${slideTitle} — Key Point ${index + 1}`;
}

function toTitleCase(str: string): string {
  const minorWords = new Set(['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'from', 'by', 'of', 'in', 'with', 'vs', 'vs.']);
  return str
    .split(/\s+/)
    .map((word, idx) => {
      if (/^[A-Z0-9&/]{2,}$/.test(word)) return word; // Preserve acronyms like GAAP, SWOT, GDP, ROI
      const lower = word.toLowerCase();
      if (idx > 0 && minorWords.has(lower)) return lower;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

/**
 * Unpacks ANY raw slide bullet into a genuinely simplified, plain-English explanation
 * that teaches what the bullet means, why/how it works, and gives a concrete example or intuition.
 * NEVER returns the raw bullet verbatim.
 */
export function simplifyAndExplainSlideBullet(
  rawBullet: string,
  slideTitle: string,
  bulletIndex: number,
  allBullets: string[] = []
): DetailedTakeaway {
  const cleanB = rawBullet.replace(/^[•\-\*\d\.\)\s]+/, '').trim();
  const cleanTitle = slideTitle.replace(/^Slide\s+\d+[:\-]?\s*/i, '').trim();
  const label = extractCleanConceptHeading(cleanB, cleanTitle, bulletIndex);

  // Check if any jargon terms from our cross-disciplinary lexicon appear in this bullet
  const jargonMatches = findMatchingJargon(`${cleanB} ${cleanTitle}`);
  const simplifiedClause = simplifyAcademicPhrasing(cleanB);

  // Determine slide context (advantages/benefits vs drawbacks/risks vs process/steps vs comparison)
  const isDrawback = /\b(drawback|disadvantage|downside|problem|challenge|risk|weakness|limitation|barrier|cost|threat|failure)\b/i.test(`${cleanTitle} ${cleanB}`);
  const isBenefit = /\b(advantage|benefit|strength|importance|value|payoff|reward|upside|opportunity|merit)\b/i.test(`${cleanTitle} ${cleanB}`);
  const isComparison = /\b(vs\.?|versus|compared to|whereas|unlike|while|differ(?:s|ence)?)\b/i.test(cleanB);
  const isCauseEffect = /\b(leads? to|results? in|causes?|because|therefore|consequently|drives?|increases?|reduces?|decreases?|prevents?|allows?|enables?)\b/i.test(cleanB);

  // CASE 1: Bullet has an explicit "Term: Definition" or "Term — Explanation" structure
  const sepMatch = cleanB.match(/^([A-Za-z0-9\s/&'’(),\-]{2,48}?)\s*(?:[:–—]|\s+-\s+)\s*(.+)$/);
  if (sepMatch) {
    const term = sepMatch[1].trim();
    const rawDef = sepMatch[2].trim().replace(/\.$/, '');
    const plainDef = simplifyAcademicPhrasing(rawDef);
    const lowerPlainDef = plainDef.charAt(0).toLowerCase() + plainDef.slice(1);

    let explanation = `In plain English, ${term} refers to ${lowerPlainDef}. `;

    if (jargonMatches.length > 0) {
      const j = jargonMatches[0];
      explanation += `Simply put, ${j.plainMeaning}.${j.example ? ` Example: ${j.example}` : ''}`;
    } else if (isComparison) {
      explanation += `When comparing these on an exam, focus on how ${term} operates differently in practice and what trade-off it creates within ${cleanTitle.toLowerCase()}.`;
    } else if (isDrawback) {
      explanation += `Why this matters in practice: if not carefully managed, this limitation can create bottlenecks, raise costs, or weaken results in ${cleanTitle.toLowerCase()}.`;
    } else if (isBenefit) {
      explanation += `Why this matters in practice: this gives organizations or practitioners a practical advantage by improving speed, clarity, or efficiency in ${cleanTitle.toLowerCase()}.`;
    } else {
      explanation += `In practical terms, instead of memorizing the textbook wording, think of ${term} as the specific part of ${cleanTitle.toLowerCase()} that handles ${extractActionPhrase(plainDef)}.`;
    }

    return {
      label: toTitleCase(term),
      explanation: explanation.trim()
    };
  }

  // CASE 2: Bullet is a short topic/concept heading (under 50 characters, e.g. "Frictional unemployment" or "Need for achievement")
  if (cleanB.length < 50) {
    const cleanConcept = cleanB.replace(/\.$/, '').trim();
    if (jargonMatches.length > 0) {
      const j = jargonMatches[0];
      return {
        label,
        explanation: `In simple terms, "${cleanConcept}" is about ${j.plainMeaning}.${j.example ? ` Real-world example: ${j.example}` : ''}`
      };
    }

    if (isDrawback) {
      return {
        label,
        explanation: `In plain words, "${cleanConcept}" is one of the main downsides or risks of ${cleanTitle}. In real-world practice, this means you have to watch out for how ${cleanConcept.toLowerCase()} can slow down progress, increase costs, or create vulnerability if left unchecked.`
      };
    }

    if (isBenefit) {
      return {
        label,
        explanation: `In plain words, "${cleanConcept}" is a major practical benefit of ${cleanTitle}. It works in your favor by making operations smoother, lowering friction, or creating stronger results compared to alternative approaches.`
      };
    }

    // Check if all bullets on the slide form a numbered/grouped list of components or steps
    if (allBullets.length >= 2) {
      return {
        label,
        explanation: `"${cleanConcept}" is Pillar #${bulletIndex + 1} of ${cleanTitle} (working alongside ${allBullets
          .filter((_, i) => i !== bulletIndex)
          .slice(0, 2)
          .map(b => `"${b.replace(/^[•\-\*\d\.\)\s]+/, '').split(/[:–—]/)[0].trim()}"`)
          .join(' and ')}). In simple terms, it represents the specific stage or dimension where ${cleanConcept.toLowerCase()} is applied in practice.`
      };
    }

    return {
      label,
      explanation: `In simple words, "${cleanConcept}" is a core building block of ${cleanTitle}. Be ready to define what ${cleanConcept.toLowerCase()} means in your own words and give a practical example of how it applies.`
    };
  }

  // CASE 3: Comparison / Contrast statement ("X vs Y", "whereas", "while", "unlike")
  if (isComparison) {
    const rewritten = rewriteSentenceConversational(simplifiedClause, label, cleanTitle);
    const jargonNote = jargonMatches[0]
      ? ` (${jargonMatches[0].term} simply means ${jargonMatches[0].plainMeaning}.${jargonMatches[0].example ? ` For instance: ${jargonMatches[0].example}` : ''})`
      : '';
    return {
      label,
      explanation: `${rewritten} In simple terms, the key is not to mix up the two sides: pay close attention to what changes between them and when each one is used in real-world scenarios.${jargonNote}`.trim()
    };
  }

  // CASE 4: Cause-and-Effect / Mechanism statement
  if (isCauseEffect) {
    const rewritten = rewriteSentenceConversational(simplifiedClause, label, cleanTitle);
    const jargonNote = jargonMatches[0]
      ? ` Put simply, ${jargonMatches[0].plainMeaning}.${jargonMatches[0].example ? ` Example: ${jargonMatches[0].example}` : ''}`
      : ` Think of this as a chain reaction: understand what triggers the change first, and what final outcome it produces.`;
    return {
      label,
      explanation: `${rewritten}${jargonNote}`.trim()
    };
  }

  // CASE 5: General full-sentence academic bullet (>= 50 chars)
  const rewritten = rewriteSentenceConversational(simplifiedClause, label, cleanTitle);
  let extraInsight = '';
  if (jargonMatches.length > 0) {
    const j = jargonMatches[0];
    extraInsight = ` In plain words, ${j.term.toLowerCase()} means ${j.plainMeaning}.${j.example ? ` Real-life example: ${j.example}` : ''}`;
  } else if (isDrawback) {
    extraInsight = ` Simply put, this is a practical limitation you must guard against when dealing with ${cleanTitle.toLowerCase()}.`;
  } else if (isBenefit) {
    extraInsight = ` Simply put, this explains why ${cleanTitle.toLowerCase()} is so useful in practice.`;
  } else {
    extraInsight = ` Put simply, this shows how ${label.toLowerCase()} works in practice within ${cleanTitle.toLowerCase()} so you can apply the idea rather than just memorizing the slide wording.`;
  }

  return {
    label,
    explanation: `${rewritten}${extraInsight}`.trim()
  };
}

/**
 * Rewrites a raw slide sentence so it never reads like a verbatim copy-paste,
 * framing it in clear, direct student-friendly language.
 */
function rewriteSentenceConversational(simplifiedClause: string, label: string, slideTitle: string): string {
  const clean = simplifiedClause.replace(/\.$/, '').trim();

  // Check for "X is defined as Y" or "X refers to Y" or "X means Y"
  const defPattern = clean.match(/^([A-Za-z0-9\s/&'’()\-]{2,45}?)\s+(?:is defined as|refers to|is the process of|means|is when|occurs when)\s+(.+)$/i);
  if (defPattern) {
    const subj = defPattern[1].trim();
    const rest = defPattern[2].trim();
    return `In simple terms, ${subj} happens when ${rest}.`;
  }

  // Check for "X is/are Y"
  const isPattern = clean.match(/^([A-Za-z0-9\s/&'’()\-]{2,40}?)\s+(is|are)\s+(.+)$/i);
  if (isPattern) {
    const subj = isPattern[1].trim();
    const verb = isPattern[2].toLowerCase();
    const rest = isPattern[3].trim();
    return `Here is what this means: ${subj} ${verb} essentially ${rest}.`;
  }

  // If the bullet starts with a verb or gerund ("Managing...", "To calculate...", "Provides...", "Helps...")
  if (/^(managing|creating|building|establishing|measuring|calculating|identifying|understanding|developing|using|applying|ensuring|controlling|evaluating|analyzing)\b/i.test(clean)) {
    return `In plain English, this step focuses on ${clean.charAt(0).toLowerCase() + clean.slice(1)}.`;
  }

  if (/^(provides?|allows?|enables?|helps?|ensures?|creates?|reduces?|increases?|prevents?|requires?)\b/i.test(clean)) {
    return `In practice, ${slideTitle.toLowerCase()} ${clean.charAt(0).toLowerCase() + clean.slice(1)}.`;
  }

  return `In plain English: ${clean.charAt(0).toLowerCase() + clean.slice(1)}.`;
}

function extractActionPhrase(text: string): string {
  const words = text.replace(/[.,;!?]/g, '').split(/\s+/);
  if (words.length <= 8) return text.toLowerCase();
  return words.slice(0, 8).join(' ').toLowerCase() + '...';
}

/**
 * Synthesizes a genuine plain-English overview (`coreRule`) for any slide.
 * Never just concatenates raw bullets! Instead, explains what the slide is teaching
 * and how the concepts fit together in simple everyday language.
 */
export function synthesizePlainEnglishSlideOverview(
  cleanTitle: string,
  rawBullets: string[],
  detailedTakeaways: DetailedTakeaway[],
  definitions: Array<{ term: string; definition: string }>,
  formulas: string[]
): string {
  const combinedText = `${cleanTitle} ${rawBullets.join(' ')}`;
  const jargon = findMatchingJargon(combinedText);

  const isDrawback = /\b(drawback|disadvantage|downside|problem|challenge|risk|weakness|limitation|failure)\b/i.test(cleanTitle);
  const isBenefit = /\b(advantage|benefit|strength|importance|value|payoff|upside|merit)\b/i.test(cleanTitle);
  const isProcess = /\b(process|steps?|stages?|phases?|cycle|procedure|how\s+to|hierarchy|pyramid|funnel)\b/i.test(cleanTitle);
  const isComparison = /\b(vs\.?|versus|compar(?:e|ison|ing)|types\s+of|forms\s+of|categories|classification|difference)\b/i.test(cleanTitle);

  const keyConceptNames = detailedTakeaways
    .slice(0, 4)
    .map(t => t.label)
    .filter(Boolean);

  const conceptListStr = keyConceptNames.length >= 3
    ? `${keyConceptNames.slice(0, -1).join(', ')}, and ${keyConceptNames[keyConceptNames.length - 1]}`
    : keyConceptNames.join(' and ');

  let introSentence = '';
  if (isDrawback) {
    introSentence = `In simple terms, this slide breaks down the main risks, limitations, and downsides of ${cleanTitle.replace(/^(drawbacks|disadvantages|limitations|risks)\s+(of\s+)?/i, '') || cleanTitle}—specifically focusing on ${conceptListStr || 'the operational challenges involved'}.`;
  } else if (isBenefit) {
    introSentence = `In simple terms, this slide explains the key practical advantages of ${cleanTitle.replace(/^(advantages|benefits|strengths|importance)\s+(of\s+)?/i, '') || cleanTitle}, showing how ${conceptListStr || 'these strengths'} create value in practice.`;
  } else if (isProcess) {
    introSentence = `In plain English, this slide walks you step-by-step through ${cleanTitle}, showing how the process moves across ${conceptListStr || 'each sequential stage'} to reach the final outcome.`;
  } else if (isComparison) {
    introSentence = `In plain English, this slide compares the key categories and distinctions within ${cleanTitle} (${conceptListStr || 'its main forms'}) so you can tell them apart and know when each one applies.`;
  } else if (formulas.length > 0) {
    introSentence = `In plain English, this slide explains the quantitative relationship behind ${cleanTitle} (${formulas[0]}) and how its variables interact in real-world problem solving.`;
  } else if (definitions.length > 0) {
    const defTerms = definitions.map(d => d.term).join(' and ');
    introSentence = `In simple terms, this slide unpacks the meaning and practical role of ${defTerms} within ${cleanTitle}.`;
  } else if (conceptListStr) {
    introSentence = `In plain English, this slide explains how ${cleanTitle} works by breaking it down into ${keyConceptNames.length} connected ideas: ${conceptListStr}.`;
  } else {
    introSentence = `In simple terms, this slide introduces the core principles of ${cleanTitle} and explains how they work in real-world practice.`;
  }

  // Second sentence: Unpack the core mechanism or primary jargon concept in simple words
  let mechanismSentence = '';
  if (jargon.length > 0) {
    const j = jargon[0];
    mechanismSentence = `At its core, ${j.term} is all about ${j.plainMeaning}${j.example ? `—for instance, ${j.example.charAt(0).toLowerCase() + j.example.slice(1)}` : '.'}`;
  } else if (detailedTakeaways.length > 0) {
    // Summarize the essence without repeating the takeaway word-for-word
    const first = detailedTakeaways[0];
    const second = detailedTakeaways[1];
    if (second) {
      mechanismSentence = `The main takeaway is understanding how "${first.label}" connects with "${second.label}" so you can explain both the underlying concept and its real-world effect in your own words.`;
    } else {
      mechanismSentence = `The main takeaway is understanding how "${first.label}" operates in practice rather than just memorizing the slide heading.`;
    }
  }

  return `${introSentence} ${mechanismSentence}`.trim();
}

/**
 * Generates a concrete "Why It Matters & Real-World Intuition" explanation (`whyItMatters`)
 * so the student always gets practical context and an everyday analogy.
 */
export function synthesizeWhyItMatters(
  cleanTitle: string,
  rawBullets: string[],
  detailedTakeaways: DetailedTakeaway[],
  formulas: string[]
): string {
  const combined = `${cleanTitle} ${rawBullets.join(' ')}`;
  const jargon = findMatchingJargon(combined);

  if (jargon.length > 0 && jargon[0].example) {
    return `Real-World Intuition: ${jargon[0].example}`;
  }

  if (formulas.length > 0) {
    return `Real-World Intuition: Instead of treating ${formulas[0]} as abstract math, use it to predict what happens in real life when one input goes up or down.`;
  }

  const labels = detailedTakeaways.slice(0, 2).map(t => t.label);
  if (labels.length >= 2) {
    return `Why This Matters: In real life and on case-study exams, you won't just be asked to recite "${cleanTitle}"—you will need to recognize "${labels[0]}" vs. "${labels[1]}" in a practical scenario and explain why the distinction changes the outcome.`;
  }

  return `Why This Matters: Understanding ${cleanTitle} in plain English lets you apply the concept to real-world scenarios and case studies instead of relying on rote memorization.`;
}

/**
 * Generates a specific, helpful "Exam Watch-Out" (`examTrap`) for any slide.
 */
export function synthesizeExamWatchOut(
  cleanTitle: string,
  rawBullets: string[],
  detailedTakeaways: DetailedTakeaway[],
  definitions: Array<{ term: string; definition: string }>,
  formulas: string[]
): string {
  if (formulas.length > 0) {
    return `When solving exam problems with ${formulas[0]}, always write down the formula first, check your units, and pay attention to what happens when the denominator changes.`;
  }

  const isProcess = /\b(process|steps?|stages?|phases?|cycle|hierarchy|order)\b/i.test(`${cleanTitle} ${rawBullets.join(' ')}`);
  if (isProcess && detailedTakeaways.length >= 2) {
    return `Examiners frequently test the exact chronological order of ${cleanTitle}. Make sure you don't swap "${detailedTakeaways[0].label}" and "${detailedTakeaways[1].label}".`;
  }

  if (detailedTakeaways.length >= 2) {
    return `Don't just list the bullet headings on an exam: professors award full marks when you clearly contrast "${detailedTakeaways[0].label}" with "${detailedTakeaways[1].label}" and include a short practical example for each.`;
  }

  if (definitions.length > 0) {
    return `Be ready to state the definition of "${definitions[0].term}" in your own words and identify it in a multiple-choice scenario question.`;
  }

  return `When this topic appears on an exam, state the plain-English meaning of ${cleanTitle} first, then back it up with a concrete real-world example.`;
}
