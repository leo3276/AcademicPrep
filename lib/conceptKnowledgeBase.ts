// Comprehensive Plain-English Concept Knowledge Base & Bullet Explainer
// Teaches what each slide topic and bullet point actually means in simple, student-friendly language.

import { DetailedTakeaway } from './universitySlides';

export interface TopicGuide {
  title?: string;
  coreRule: string;
  whyItMatters: string;
  detailedTakeaways: DetailedTakeaway[];
  examTrap: string;
  activeRecallPrompt: {
    question: string;
    hint: string;
    answer: string;
    stepByStepSolution: string;
  };
}

/**
 * Dictionary of academic & business terms that often appear as bare 1-4 word bullets on lecture slides.
 * Maps regex patterns to clear, plain-English explanations for students.
 */
export const BULLET_CONCEPT_EXPLAINERS: Array<{
  pattern: RegExp;
  label: string;
  explanation: string;
}> = [
  // Entrepreneurship & Small Business
  {
    pattern: /\bmicropreneur/i,
    label: 'Micropreneurs',
    explanation: 'Entrepreneurs who start small businesses with the goal of keeping them small and manageable so they can enjoy a balanced lifestyle, rather than trying to grow into a giant corporation.'
  },
  {
    pattern: /\bintrapreneur/i,
    label: 'Intrapreneurs (Corporate Entrepreneurs)',
    explanation: 'Creative employees who work inside an existing large company and use the company’s resources to develop new products or services just like an entrepreneur would—without taking personal financial risk.'
  },
  {
    pattern: /\bclassic\b/i,
    label: 'Classic Entrepreneurs',
    explanation: 'Risk-takers who spot a market opportunity and start a new business from scratch, investing their own time and money to grow the venture and earn a profit.'
  },
  {
    pattern: /\bentrepreneurial\s+team/i,
    label: 'Entrepreneurial Teams',
    explanation: 'A group of two or more experienced people from different areas of business (e.g., engineering, marketing, finance) who join forces to combine their skills and launch a new product or company.'
  },
  {
    pattern: /opportunity\s+vs\.?\s+necessity/i,
    label: 'Opportunity vs. Necessity Entrepreneurs',
    explanation: 'Opportunity entrepreneurs start a business by choice because they spot a profitable market gap; Necessity entrepreneurs start a business out of survival because they cannot find traditional employment.'
  },
  {
    pattern: /self\s*-\s*confidence|personal\s+control/i,
    label: 'Self-Confidence & Internal Locus of Control',
    explanation: 'Successful entrepreneurs believe their own actions and hard work—not luck or fate—determine whether their business succeeds or fails.'
  },
  {
    pattern: /tolerance\s+for\s+ambiguity/i,
    label: 'High Tolerance for Ambiguity & Risk',
    explanation: 'The ability to stay calm and make smart decisions even when future sales, customer demand, and market conditions are uncertain.'
  },
  {
    pattern: /\bscore\b/i,
    label: 'SCORE (Service Corps of Retired Executives)',
    explanation: 'An organization of retired and active business executives who volunteer their time to provide free, confidential mentoring and advice to small business starters.'
  },
  {
    pattern: /\bace\b/i,
    label: 'ACE (Active Corps of Executives)',
    explanation: 'A network of currently practicing business managers and specialists who counsel startup founders on real-world operational challenges.'
  },
  {
    pattern: /trade\s+association/i,
    label: 'Trade Associations',
    explanation: 'Industry-specific organizations that provide member businesses with market research, networking, training, and lobbying support.'
  },
  {
    pattern: /angel\s+investor|venture\s+capital/i,
    label: 'Angel Investors vs. Venture Capitalists',
    explanation: 'Angel investors are wealthy individuals who invest their own personal money into early-stage startups; Venture Capitalists (VCs) are professional investment firms that invest pooled funds into high-growth startups in exchange for a large ownership stake.'
  },
  {
    pattern: /\bincubator\b/i,
    label: 'Business Incubators',
    explanation: 'Centers that offer new startups low-cost office space, shared administrative services, and management coaching during their fragile early months.'
  },
  {
    pattern: /enterprise\s+zone/i,
    label: 'Enterprise Zones',
    explanation: 'Specific geographic areas designated by the government that offer lower taxes and special government incentives to attract businesses and create jobs in economically distressed communities.'
  },
  {
    pattern: /supplier\s*&\s*barter|barter\s+arrangement/i,
    label: 'Supplier Trade Credit & Bartering',
    explanation: 'Acquiring supplies now and paying for them later after you make sales (trade credit), or trading your company’s goods/services directly for another firm’s goods/services without using cash (barter).'
  },
  {
    pattern: /small\s+business\s+administration|backed\s+loans/i,
    label: 'SBA-Backed Loans',
    explanation: 'Commercial bank loans guaranteed by a government Small Business Administration agency, reducing the bank’s risk so small founders can qualify for funding.'
  },

  // Ownership, Partnerships, M&A
  {
    pattern: /master\s+limited/i,
    label: 'Master Limited Partnership (MLP)',
    explanation: 'A special partnership that acts like a corporation by trading ownership units on a public stock exchange, while still enjoying the tax benefits of a partnership (avoiding corporate double taxation).'
  },
  {
    pattern: /limited\s+liability\s+partnership|^limited\s+liability$/i,
    label: 'Limited Liability Partnership (LLP)',
    explanation: 'A partnership structure (common among doctors, lawyers, and accountants) that protects innocent partners’ personal assets from malpractice or negligence committed by another partner.'
  },
  {
    pattern: /restrictive\s+covenant/i,
    label: 'Restrictive Covenant (Non-Compete Clause)',
    explanation: 'A legal clause in a partnership contract that prevents a departing partner from opening a competing business nearby or stealing the firm’s clients for a specified period.'
  },
  {
    pattern: /buying\s+and\s+selling\s+agreement|buy\s*-\s*sell/i,
    label: 'Buy-Sell Agreement',
    explanation: 'A pre-arranged legal contract stating exactly how a partner’s share of the business will be valued and bought out by the remaining partners if a partner dies, retires, or quits.'
  },
  {
    pattern: /arbitration\s+of\s+disputes/i,
    label: 'Arbitration of Disputes',
    explanation: 'Agreeing in advance to settle partner disagreements through a neutral third-party arbitrator rather than going through expensive, public court lawsuits.'
  },
  {
    pattern: /hostile\s+takeover/i,
    label: 'Hostile Takeovers',
    explanation: 'An acquisition where an outside buyer attempts to purchase a company against the wishes of the target company’s current management and board of directors.'
  },
  {
    pattern: /tender\s+offer|proxy\s+fight/i,
    label: 'Tender Offers & Proxy Fights',
    explanation: 'In a Tender Offer, a buyer bypasses management and offers to buy shares directly from stockholders at a price above market value. In a Proxy Fight, the buyer persuades stockholders to vote out existing management.'
  },
  {
    pattern: /white\s+knight|poison\s+pill/i,
    label: 'White Knights & Poison Pills (Takeover Defenses)',
    explanation: 'A Poison Pill is a defense tactic that makes a target company too expensive to buy (e.g., allowing existing shareholders to buy cheap new shares). A White Knight is a friendly third-party company invited to buy the firm instead of the hostile bidder.'
  },
  {
    pattern: /leveraged\s+buyout/i,
    label: 'Leveraged Buyout (LBO)',
    explanation: 'When corporate insiders or investors borrow a massive amount of money (using the company’s own assets as collateral) to buy all outstanding stock and take a public company private.'
  },

  // Management, Planning, Structure
  {
    pattern: /vision\b.*what\s+you\s+want|^\s*vision\b/i,
    label: 'Corporate Vision (Future Aspiration)',
    explanation: 'A forward-looking statement describing what the organization aspires to become in the long-term future—its big-picture dream and direction.'
  },
  {
    pattern: /mission\b.*fundamental|^\s*mission\b/i,
    label: 'Corporate Mission (Core Purpose)',
    explanation: 'A clear statement of the organization’s current fundamental purpose: who it serves, what products or services it provides, and what values guide its daily operations.'
  },
  {
    pattern: /technical\s+skills|perform\s+a\s+specific\s+job/i,
    label: 'Technical Skills',
    explanation: 'The specialized job knowledge and practical ability required to perform specific day-to-day tasks (e.g., accounting, coding, operating machinery). Most critical for first-line supervisors.'
  },
  {
    pattern: /human\s+skills|interact\s+well\s+with\s+people/i,
    label: 'Human (Interpersonal) Skills',
    explanation: 'The ability to communicate, motivate, resolve conflicts, and work effectively with people across teams. Equally vital at all levels of management.'
  },
  {
    pattern: /conceptual\s+skills|think\s+analytically/i,
    label: 'Conceptual (Analytical) Skills',
    explanation: 'The ability to see the organization as a whole system, diagnose complex problems, and understand how different departments and external market forces fit together. Most critical for top executives.'
  },
  {
    pattern: /autocratic/i,
    label: 'Autocratic Leadership',
    explanation: 'A directive style where the manager makes all decisions unilaterally without consulting employees and expects strict obedience. Best suited for emergencies or untrained staff.'
  },
  {
    pattern: /participative|democratic/i,
    label: 'Participative (Democratic) Leadership',
    explanation: 'A collaborative style where the manager involves employees in decision-making, welcomes feedback, and delegates authority—boosting morale and buy-in.'
  },
  {
    pattern: /free\s*-\s*rein|laissez\s*-\s*faire/i,
    label: 'Free-Rein (Laissez-Faire) Leadership',
    explanation: 'A hands-off style where the manager sets overarching goals and then gives highly skilled, self-motivated professionals complete freedom to decide how to do their work.'
  },
  {
    pattern: /hubris\s+born\s+of\s+success/i,
    label: 'Stage 1: Hubris Born of Success',
    explanation: 'Successful companies become arrogant, believing their past success guarantees future dominance and forgetting the hard work that made them great.'
  },
  {
    pattern: /undisciplined\s+pursuit\s+of\s+more/i,
    label: 'Stage 2: Undisciplined Pursuit of More',
    explanation: 'The company overreaches—expanding recklessly into areas where it cannot excel and growing faster than its management systems can handle.'
  },
  {
    pattern: /denial\s+of\s+risk\s+and\s+peril/i,
    label: 'Stage 3: Denial of Risk and Peril',
    explanation: 'Internal warning signs mount, but leaders ignore negative data, blame external factors, and take dangerous gambles.'
  },
  {
    pattern: /grasping\s+for\s+salvation/i,
    label: 'Stage 4: Grasping for Salvation',
    explanation: 'In panic as decline becomes obvious, leaders look for a dramatic "silver bullet"—a flashy new CEO, untested technology, or desperate merger—rather than fixing core fundamentals.'
  },
  {
    pattern: /capitulation\s+to\s+irrelevance/i,
    label: 'Stage 5: Capitulation to Irrelevance or Death',
    explanation: 'Financial resources run dry, morale collapses, and the company either goes bankrupt, gets sold off cheaply, or shrinks into total market irrelevance.'
  },
  {
    pattern: /span\s+of\s+control/i,
    label: 'Span of Control (Narrow vs. Wide)',
    explanation: 'The number of subordinates who report directly to a single manager. A narrow span means few direct reports (creating tall organizations with many layers); a wide span means many direct reports (creating flat, agile organizations).'
  },
  {
    pattern: /line\s+vs\.?\s+staff/i,
    label: 'Line vs. Staff Personnel',
    explanation: 'Line managers have direct authority in the chain of command to make decisions that achieve core company goals (e.g., production, sales); Staff personnel are specialists (e.g., legal counsel, HR) who advise and support line managers.'
  },
  {
    pattern: /centralization\s+vs\.?\s+decentralization/i,
    label: 'Centralization vs. Decentralization',
    explanation: 'Centralization keeps all major decision-making authority concentrated at top headquarters; Decentralization pushes decision-making authority down to front-line managers closest to customers.'
  },
  {
    pattern: /division\s+of\s+labor|work\s+specialization/i,
    label: 'Division of Labor (Work Specialization)',
    explanation: 'Breaking down a complex production process into small, specialized tasks performed repeatedly by different workers to dramatically increase speed and efficiency.'
  },
  {
    pattern: /virtual\s+organization|modular\s+structure/i,
    label: 'Virtual & Modular Organizations',
    explanation: 'A Virtual Organization is a networked company that contracts out almost all functions except its core competency; a Modular Structure outsources specific product parts to outside suppliers and assembles them into a final product.'
  },

  // Operations & Production
  {
    pattern: /form\s+utility/i,
    label: 'Form Utility',
    explanation: 'The value added to raw inputs when production workers and machines transform raw materials (like cotton, steel, or flour) into finished goods that customers actually want to buy (like shirts, cars, or bread).'
  },
  {
    pattern: /analytic\s+transformation/i,
    label: 'Analytic Transformation Process',
    explanation: 'A production process that breaks down a single raw material into one or more distinct finished products (e.g., refining crude oil into gasoline, jet fuel, and asphalt, or butchering cattle into cuts of meat).'
  },
  {
    pattern: /synthetic\s+transformation/i,
    label: 'Synthetic Transformation Process',
    explanation: 'A production process that combines multiple different raw materials or parts together to create a single finished product (e.g., assembling glass, steel, rubber, and microchips into an automobile).'
  },
  {
    pattern: /continuous|intermittent/i,
    label: 'Continuous vs. Intermittent Production',
    explanation: 'Continuous processes run 24/7 for long periods producing identical outputs (e.g., chemical plants, oil refineries); Intermittent processes run in short batches, changing machinery setups to make different custom products (e.g., custom furniture or print shops).'
  },
  {
    pattern: /cad,\s*cam|computer\s*-\s*aided|computer\s*-\s*integrated/i,
    label: 'CAD, CAM, and CIM',
    explanation: 'CAD (Computer-Aided Design) uses software to design and test 3D product blueprints digitally; CAM (Computer-Aided Manufacturing) uses computers to control factory machines; CIM (Computer-Integrated Manufacturing) unites both into one automated system.'
  },
  {
    pattern: /flexible\s+manufacturing/i,
    label: 'Flexible Manufacturing Systems (FMS)',
    explanation: 'Automated production lines controlled by computers that can be rapidly reprogrammed to switch from making one product model to another without expensive manual retooling.'
  },
  {
    pattern: /lean\s+manufacturing/i,
    label: 'Lean Manufacturing',
    explanation: 'A production philosophy focused on eliminating all forms of waste (excess inventory, wasted motion, defective parts) so products are made using less human effort, less space, and less time.'
  },
  {
    pattern: /mass\s+customization/i,
    label: 'Mass Customization',
    explanation: 'Using flexible computer-controlled manufacturing to tailor products to meet the specific desires of individual customers while still keeping costs near mass-production levels (e.g., custom Nike shoes or Dell laptops).'
  },
  {
    pattern: /just\s*-\s*in\s*-\s*time|\bjit\b/i,
    label: 'Just-in-Time (JIT) Inventory Control',
    explanation: 'A system where raw materials and parts are delivered from suppliers to the factory floor at the exact moment they are needed in production—slashing warehouse storage costs to near zero.'
  },
  {
    pattern: /materials\s+requirement\s+planning|\bmrp\b/i,
    label: 'Materials Requirement Planning (MRP)',
    explanation: 'A computer-based operations system that uses sales forecasts to calculate the exact quantities of raw materials and components needed and schedules their delivery for manufacturing.'
  },
  {
    pattern: /enterprise\s+resource\s+planning|\berp\b/i,
    label: 'Enterprise Resource Planning (ERP)',
    explanation: 'An advanced software system (like SAP or Oracle) that integrates all departments across the entire company—purchasing, production, inventory, finance, sales, and HR—into one unified real-time database.'
  },
  {
    pattern: /\biso\s*9000\b/i,
    label: 'ISO 9000 Certification',
    explanation: 'A globally recognized set of quality-management standards set by the International Organization for Standardization; certification proves a factory has documented, world-class quality procedures.'
  },
  {
    pattern: /statistical\s+process\s+control/i,
    label: 'Statistical Process Control (SPC)',
    explanation: 'Testing random samples of products at every stage of production and plotting the results on control charts to catch machinery drift and prevent defects before a batch is ruined.'
  },
  {
    pattern: /six\s+sigma/i,
    label: 'Six Sigma Quality Standard',
    explanation: 'A rigorous, data-driven quality control methodology aiming for near-perfection: allowing no more than 3.4 defects per million produced units (99.99966% defect-free).'
  },

  // Motivation & HR
  {
    pattern: /scientific\s+management|time\s*-\s*motion/i,
    label: 'Frederick Taylor’s Scientific Management',
    explanation: 'Studying every physical motion of a worker with a stopwatch (time-motion studies) to find the "one best way" to perform a job, then tying worker pay directly to output (piece-rate pay).'
  },
  {
    pattern: /hawthorne\s+effect/i,
    label: 'Elton Mayo & The Hawthorne Effect',
    explanation: 'The discovery that employees work harder and productivity rises simply because managers pay positive attention to them, listen to their concerns, and make them feel valued.'
  },
  {
    pattern: /job\s+simplification/i,
    label: 'Job Simplification',
    explanation: 'Breaking a job down into the smallest, simplest repetitive tasks so workers need minimal training—efficient in the short run, but often leads to severe worker boredom and turnover.'
  },
  {
    pattern: /job\s+enlargement/i,
    label: 'Job Enlargement (Horizontal Expansion)',
    explanation: 'Increasing the number of different tasks at the same skill level that a worker performs to reduce monotony and boredom, without adding extra authority.'
  },
  {
    pattern: /job\s+enrichment/i,
    label: 'Job Enrichment (Vertical Expansion)',
    explanation: 'Building motivating factors directly into a job by giving employees greater responsibility, autonomy, decision-making authority, and pride over a complete piece of work.'
  },
  {
    pattern: /positive\s+reinforcement|negative\s+reinforcement|extinction|punishment/i,
    label: 'Reinforcement Theory (4 Tools)',
    explanation: '1. Positive Reinforcement: Rewarding good behavior (praise/bonus). 2. Negative Reinforcement: Removing an unpleasant rule when workers perform well. 3. Extinction: Withholding rewards to stop bad behavior. 4. Punishment: Penalizing bad behavior.'
  },
  {
    pattern: /vroom|expectancy\s+theory/i,
    label: 'Vroom’s Expectancy Theory',
    explanation: 'States that employee motivation depends on 3 questions: (1) Expectancy: "If I work hard, can I actually hit the target?" (2) Instrumentality: "If I hit the target, will I get the promised reward?" (3) Valence: "Do I actually care about that reward?"'
  },
  {
    pattern: /job\s+analysis|job\s+description|job\s+specification/i,
    label: 'Job Analysis vs. Description vs. Specification',
    explanation: 'Job Analysis is the study of what a job entails. A Job Description lists the daily duties, tasks, and working conditions of the role. A Job Specification lists the human qualifications, degrees, and skills a candidate needs to be hired.'
  },
  {
    pattern: /reliability\s*&\s*validity/i,
    label: 'Reliability vs. Validity in Selection Tests',
    explanation: 'Reliability means a test gives consistent scores every time a person takes it; Validity means the test actually measures what it claims to measure and accurately predicts real job performance.'
  },
  {
    pattern: /vestibule/i,
    label: 'Vestibule Training (Simulated Environment)',
    explanation: 'Off-the-job training where new employees practice on the exact equipment they will use at work, but in a separate simulated classroom room so they can learn safely without slowing down real production.'
  },
  {
    pattern: /360\s*-\s*degree/i,
    label: '360-Degree Performance Feedback',
    explanation: 'A comprehensive appraisal system that gathers anonymous performance evaluations from everyone who works around an employee: bosses, peers/coworkers, direct subordinates, and customers.'
  },
  {
    pattern: /forced\s+ranking|rank\s*&\s*yank/i,
    label: 'Forced Ranking ("Rank & Yank")',
    explanation: 'Grading employees on a strict bell curve against each other (e.g., top 20% get bonuses, middle 70% stay, bottom 10% are fired)—can drive short-term competition but often destroys teamwork.'
  },

  // Marketing, Pricing, Distribution, Promotion
  {
    pattern: /geographic.*demographic|psychographic|market\s+segmentation|user\s*-\s*rate/i,
    label: '5 Types of Market Segmentation',
    explanation: 'Dividing a broad market into buyer groups by: 1. Geographic (region/city), 2. Demographic (age, income, gender, education), 3. Psychographic (lifestyle, values, personality), 4. Benefit (specific product feature sought), 5. User-rate (heavy vs. light users).'
  },
  {
    pattern: /convenience|shopping|specialty|unsought/i,
    label: '4 Classes of Consumer Products',
    explanation: '1. Convenience goods: Everyday cheap items bought with minimal effort (milk, soap). 2. Shopping goods: Items where buyers compare price and quality across stores (clothes, appliances). 3. Specialty goods: Unique luxury items buyers go out of their way for (Rolex). 4. Unsought goods: Items people don’t think of buying until needed (life insurance, funeral plots).'
  },
  {
    pattern: /dynamically\s+continuous|discontinuous/i,
    label: '3 Types of Product Innovation',
    explanation: '1. Continuous Innovation: Minor tweaks to existing products (new toothpaste flavor). 2. Dynamically Continuous: Significant technology upgrade that doesn’t drastically alter consumer habits (electric toothbrush). 3. Discontinuous: Revolutionary breakthrough that changes how people live (the automobile, internet, smartphone).'
  },
  {
    pattern: /brand\s+equity|brand\s+loyalty|awareness|insistence/i,
    label: 'Brand Equity & 3 Levels of Brand Loyalty',
    explanation: 'Brand Equity is the total financial and market value of a brand name. Brand Loyalty progresses through 3 levels: (1) Brand Awareness (recognizing the name), (2) Brand Preference (choosing it over others), and (3) Brand Insistence (refusing any substitute).'
  },
  {
    pattern: /price\s+skimming|penetration\s+pricing/i,
    label: 'Price Skimming vs. Penetration Pricing',
    explanation: 'Price Skimming sets a high initial price on a new innovative product to capture maximum profit from early adopters before lowering it later; Penetration Pricing sets a very low initial price to rapidly capture massive market share and block competitors.'
  },
  {
    pattern: /everyday\s+low\s+pricing|\bedlp\b|psychological\s+pricing|bundling/i,
    label: 'EDLP, Bundling & Psychological Pricing',
    explanation: 'EDLP charges a consistently low price every day without waiting for sales (like Walmart); Bundling packages multiple items together for one combined price; Psychological Pricing uses prices like $9.99 instead of $10.00 to make items feel cheaper.'
  },
  {
    pattern: /break\s*-\s*even/i,
    label: 'Break-Even Analysis',
    explanation: 'Calculates the exact sales volume where Total Revenue equals Total Costs (zero profit, zero loss). Formula: Break-Even Point (Units) = Total Fixed Costs / (Price per Unit - Variable Cost per Unit).'
  },
  {
    pattern: /intensive\s+distribution|selective\s+distribution|exclusive\s+distribution/i,
    label: 'Intensive vs. Selective vs. Exclusive Distribution',
    explanation: '1. Intensive: Placing products in as many outlets as possible (soda, candy). 2. Selective: Selling through a chosen group of retail stores that give good service (electronics, furniture). 3. Exclusive: Granting only one dealership in a geographic region the right to sell the brand (Ferrari, luxury watches).'
  },
  {
    pattern: /push\s+vs\.?\s+pull/i,
    label: 'Push vs. Pull Promotional Strategies',
    explanation: 'In a Push Strategy, the producer promotes heavily to wholesalers and retailers (via trade discounts) to convince them to stock and "push" the product to consumers. In a Pull Strategy, the producer advertises directly to consumers so buyers demand the product and "pull" it through stores.'
  },
  {
    pattern: /guerrilla\s+marketing|word\s*-\s*of\s*-\s*mouth/i,
    label: 'Guerrilla & Word-of-Mouth Marketing',
    explanation: 'Guerrilla Marketing uses unconventional, low-budget, high-creativity street stunts or viral tactics to grab maximum public attention; Word-of-Mouth relies on satisfied customers recommending the product to friends.'
  },

  // Accounting & Finance
  {
    pattern: /managerial\s+accounting|financial\s+accounting/i,
    label: 'Managerial vs. Financial Accounting',
    explanation: 'Managerial Accounting prepares internal reports (budgets, cost analyses) to help company managers make operational decisions; Financial Accounting prepares standardized external financial statements (following GAAP) for outside investors, banks, and tax authorities.'
  },
  {
    pattern: /trade\s+credit/i,
    label: 'Trade Credit (Accounts Payable)',
    explanation: 'The most widely used source of short-term business funding: suppliers ship goods to a business now and allow the business 30 to 60 days to pay the invoice.'
  },
  {
    pattern: /pledging\s+and\s+factoring|factoring/i,
    label: 'Pledging vs. Factoring Accounts Receivable',
    explanation: 'Using unpaid customer invoices to get immediate cash: Pledging uses the invoices as collateral for a bank loan, whereas Factoring sells the invoices outright at a discount to a financial firm (a factor) that collects payment from the customers.'
  },
  {
    pattern: /commercial\s+paper/i,
    label: 'Commercial Paper',
    explanation: 'Short-term, unsecured promissory notes (maturing in up to 270 days) issued by large, financially sound corporations to borrow cash directly from investors at interest rates lower than bank loans.'
  },
  {
    pattern: /\bfdic\b|\bsaif\b|\bncua\b/i,
    label: 'Deposit Insurance (FDIC, SAIF, NCUA)',
    explanation: 'Government agencies that insure customer bank and credit union deposits (up to $250,000 per depositor) so savers never lose their money even if their bank fails—preventing panic bank runs.'
  },
  // Additional Management, Operations, HR, Marketing & Finance Bullet Terms
  {
    pattern: /heroes|stories|symbols|rites\s*&\s*rituals/i,
    label: 'How Corporate Culture Is Communicated (Heroes, Stories, Symbols, Rites)',
    explanation: 'Companies pass down their culture through: Heroes (role-model founders/employees), Stories (tales of past company triumphs), Symbols (logos, dress codes, office layout), and Rites & Rituals (awards banquets, Friday celebrations).'
  },
  {
    pattern: /authority,\s*accountability|chain\s+of\s+command/i,
    label: 'Authority, Accountability, Responsibility & Chain of Command',
    explanation: 'Responsibility is the obligation to perform a task; Authority is the legitimate power to give orders and use resources; Accountability means answering to your boss for the final results along the Chain of Command (the unbroken line of authority from top to bottom).'
  },
  {
    pattern: /mechanization|standardization|assembly\s+line|automation|mass\s+production/i,
    label: 'Evolution of Production (Mechanization to Automation)',
    explanation: 'Mechanization replaced human muscle with machines; Standardization made interchangeable parts; the Assembly Line moved work on a conveyor belt to stationary workers; Mass Production lowered unit costs through huge volume; Automation lets machines run without human intervention.'
  },
  {
    pattern: /gilbreth|motion\s+economy/i,
    label: 'Frank & Lillian Gilbreth (Principle of Motion Economy)',
    explanation: 'Pioneered filming workers to break every job into basic hand/body movements ("therbligs") and eliminate wasted physical motion to boost efficiency and reduce worker fatigue.'
  },
  {
    pattern: /elements\s+of\s+equity|contributions.*returns|reducing\s+inequality/i,
    label: "Adams' Equity Theory (Workplace Fairness)",
    explanation: 'Employees compare what they put into a job (Contributions/Inputs: hours, skill, effort) against what they get back (Returns/Outputs: pay, praise, promotions) relative to coworkers. If they feel under-rewarded, they reduce effort or quit.'
  },
  {
    pattern: /management\s+by\s+objectives|\bmbo\b|specific.*challenging/i,
    label: 'Goal-Setting Theory & Management by Objectives (MBO)',
    explanation: 'People work hardest when goals are Specific, Challenging, and Achievable. MBO is a 4-step system where managers and employees jointly set goals, develop action plans, review progress, and reward achievement.'
  },
  {
    pattern: /human\s+capital/i,
    label: 'Human Capital',
    explanation: 'The economic value of an organization’s workforce—their collective knowledge, education, experience, creativity, and skills that drive company profits.'
  },
  {
    pattern: /labor\s+unions?|collective\s+bargaining/i,
    label: 'Labor Unions & Collective Bargaining',
    explanation: 'Unions are employee organizations formed to protect worker rights; Collective Bargaining is the formal negotiation process between union representatives and management over wages, hours, benefits, and safety.'
  },
  {
    pattern: /equal\s+employment|affirmative\s+action|sexual\s+harassment/i,
    label: 'Equal Employment Opportunity (EEO) & Anti-Discrimination Laws',
    explanation: 'Laws prohibiting hiring, pay, or promotion discrimination based on race, gender, religion, age, or disability. Affirmative Action actively recruits underrepresented groups; sexual harassment laws ban quid pro quo favors and hostile work environments.'
  },
  {
    pattern: /internal\s+recruiting|external\s+recruiting|contingent\s+work/i,
    label: 'Internal vs. External Recruiting & Contingent Workers',
    explanation: 'Internal recruiting promotes existing employees (cheaper, boosts morale); External recruiting brings in fresh outside talent and ideas. Contingent workers are temporary, part-time, or freelance contractors hired for flexibility.'
  },
  {
    pattern: /unstructured\s+vs\.?\s+structured/i,
    label: 'Unstructured vs. Structured Job Interviews',
    explanation: 'Unstructured interviews ask casual, open-ended questions that vary by candidate (prone to bias); Structured interviews ask every candidate the exact same job-related questions so comparisons are fair and legally defensible.'
  },
  {
    pattern: /shadowing|apprenticeship|job\s+rotation/i,
    label: 'On-the-Job Training (Shadowing, Apprenticeships & Job Rotation)',
    explanation: 'Shadowing lets a new hire observe an experienced worker; Apprenticeships combine classroom instruction with years of hands-on mentoring in skilled trades; Job Rotation moves employees through different departments to build broad skills.'
  },
  {
    pattern: /objective\s+vs\.?\s+subjective|formal\s+vs\.?\s+informal/i,
    label: 'Formal/Informal & Objective/Subjective Appraisals',
    explanation: 'Objective appraisals measure quantifiable output (units sold, error rates); Subjective appraisals judge traits or behaviors (teamwork, attitude) and must guard against manager bias.'
  },
  {
    pattern: /base\s+pay|incentives/i,
    label: 'Base Pay, Incentives & Fringe Benefits',
    explanation: 'Base Pay is the guaranteed hourly wage or annual salary; Incentives are performance bonuses, sales commissions, or profit-sharing; Benefits are non-cash perks like health insurance, paid vacation, and retirement plans.'
  },
  {
    pattern: /promotion|transfer|disciplining|dismissal|downsizing/i,
    label: 'Promotions, Transfers, Discipline & Dismissals',
    explanation: 'Promotions move employees up to higher authority/pay; Transfers move them laterally to another role at the same level; Dismissals take three forms: Layoffs (temporary cut due to slow sales), Downsizing (permanent elimination of positions), and Firing (termination for poor performance or misconduct).'
  },
  {
    pattern: /four\s+eras\s+of\s+marketing|product\s+lines,\s*product\s+mixes/i,
    label: 'The 4 Eras of Marketing & Product Line vs. Product Mix',
    explanation: 'Marketing evolved through 4 eras: (1) Production Era ("make as much as possible"), (2) Sales Era ("sell what we make via hard advertising"), (3) Marketing Concept Era ("find out what customers want first"), and (4) Customer Relationship Era. A Product Line is a group of closely related products; a Product Mix is the entire collection of all product lines a firm sells.'
  },
  {
    pattern: /brand\s+names|brand\s+marks|trademarks|manufacturer.*brands|private\s*-\s*label|co\s*-\s*branding/i,
    label: 'Branding Elements & Types of Brands',
    explanation: 'A Brand Name is the spoken word (Nike); a Brand Mark is the visual symbol (the Swoosh); a Trademark is a legally registered brand protected from copycats. Manufacturer Brands are owned by producers (Kellogg’s); Private-Label (Store) Brands are owned by retailers (Costco Kirkland); Co-branding combines two brands on one product (Intel Inside a Dell PC).'
  },
  {
    pattern: /wholesalers|agents\s*&\s*brokers|nonstore\s+retailers/i,
    label: 'Wholesalers vs. Agents/Brokers vs. Retailers',
    explanation: 'Merchant Wholesalers buy goods in bulk from factories and take legal ownership ("title") before reselling to stores; Agents & Brokers bring buyers and sellers together for a commission without ever taking ownership of the goods; Retailers sell directly to final consumers.'
  },
  {
    pattern: /rail.*road.*pipeline|modes\s+of\s+transportation|storage\s+warehouses|distribution\s+centers/i,
    label: 'Logistics: 5 Transportation Modes & Warehousing',
    explanation: '1. Rail (heavy bulk over land), 2. Road/Trucks (flexible door-to-door delivery), 3. Water/Ships (cheapest for international bulk cargo, slowest), 4. Pipelines (oil & natural gas), 5. Air (fastest for urgent high-value goods, most expensive). Storage Warehouses hold goods long-term; Distribution Centers rapidly sort and ship goods out to stores.'
  },
  {
    pattern: /integrated\s+marketing\s+communication|inform.*persuade.*remind/i,
    label: 'Promotion Goals (Inform, Persuade, Remind) & IMC',
    explanation: 'Promotion has 3 core goals: Inform buyers about a new product, Persuade them to switch brands, and Remind loyal buyers the product is still the best. Integrated Marketing Communication (IMC) coordinates advertising, PR, sales promo, and personal selling so the customer hears one consistent message.'
  },
  {
    pattern: /brand\s+advertising|institutional|reach.*frequency.*continuity/i,
    label: 'Advertising Types & Media Selection (Reach, Frequency, Continuity)',
    explanation: 'Brand advertising promotes a specific product; Institutional advertising promotes the company’s overall image; Public Service Announcements (PSAs) promote social causes. Media planners balance Reach (how many different people see the ad), Frequency (how many times each person sees it), Continuity (how long the campaign runs), and Cost.'
  },
  {
    pattern: /publicity|press\s+release|public\s+relations/i,
    label: 'Public Relations (PR) vs. Publicity',
    explanation: 'Public Relations (PR) is the ongoing management function that builds goodwill and positive relationships with the public and media. Publicity is unpaid media coverage (news stories, press releases)—it is free and carries high credibility, but the company cannot control what journalists say.'
  },
  {
    pattern: /\bcpa\b|\bcma\b|forensic\s+accountant/i,
    label: 'Accounting Practitioners (CPA, CMA, Tax & Forensic Accountants)',
    explanation: 'A CPA (Certified Public Accountant) is licensed by the state to audit public companies; a CMA (Certified Management Accountant) works inside a firm managing internal costs; Forensic Accountants investigate financial crimes, embezzlement, and fraud.'
  },
  {
    pattern: /relevant.*reliable|gaap/i,
    label: 'GAAP (Generally Accepted Accounting Principles)',
    explanation: 'Standardized rules ensuring all financial statements meet 4 qualities: (1) Relevant (useful for decisions), (2) Reliable (accurate, objective, verifiable), (3) Consistent (using the same accounting methods year after year), and (4) Comparable (allowing side-by-side comparison across companies).'
  },
  {
    pattern: /cost\s+of\s+goods\s+sold|operating\s+expenses|net\s+income/i,
    label: 'Income Statement Breakdown (Revenue to Net Income)',
    explanation: 'Follows a strict subtraction ladder: Sales Revenue minus Cost of Goods Sold (COGS: direct cost of making/buying the product) = Gross Profit. Gross Profit minus Operating Expenses (rent, salaries, utilities, ads) and taxes = Net Income (Bottom-Line Profit).'
  },
  {
    pattern: /liquidity\s+ratios|activity\s+ratios|debt\s+to\s+owners|profitability\s+ratios/i,
    label: 'The 4 Categories of Financial Ratios',
    explanation: '1. Liquidity Ratios: Can we pay our short-term bills over the next 12 months? 2. Activity Ratios: How fast are we turning inventory and receivables into cash? 3. Debt-to-Equity (Leverage) Ratios: How heavily are we relying on borrowed debt? 4. Profitability Ratios: How much net profit are we earning per dollar of sales or owner equity?'
  },
  {
    pattern: /solvency\s+and\s+efficiency|forecasting.*budgeting.*financial\s+controls/i,
    label: 'Financial Management: Solvency, Efficiency & Financial Planning',
    explanation: 'Financial managers must ensure Solvency (having enough cash on hand to pay bills as they come due) and Efficiency (earning the highest possible return on assets). They do this through Forecasting future cash needs, setting Budgets, and enforcing Financial Controls.'
  },
  {
    pattern: /checking|money\s+market|\bcds\b|nonbanks|credit\s+unions|investment\s+banks/i,
    label: 'Bank Deposit Accounts & Financial Institutions',
    explanation: 'Banks offer Checking accounts (for daily spending), Savings/Money Market accounts, and CDs (Certificates of Deposit that lock money for a fixed term at higher interest). Credit Unions are nonprofit, member-owned cooperatives; Investment Banks help corporations issue new stock (IPOs) and bonds; Nonbanks include insurance firms, pension funds, and brokerages.'
  },
  {
    pattern: /deregulation|2008\s+crash|financial\s+panics/i,
    label: 'Banking Deregulation & The 2008 Global Financial Crisis',
    explanation: 'When banking regulations were loosened (deregulation), banks made high-risk subprime mortgage loans and bundled them into complex investments. When housing prices collapsed in 2008, massive defaults triggered a global banking panic—proving why financial regulation and public confidence are vital.'
  },
  {
    pattern: /contributions\s+of\s+small\s+business|first\s+jobs\s+for\s+new\s+employees|home\s*-\s*based|web\s*-\s*based/i,
    label: 'Contributions & Types of Small Businesses (Home-Based vs. Web-Based)',
    explanation: 'Small businesses generate over 60% of net new jobs, provide first jobs for new workers entering the workforce, and drive rapid product innovation. Home-based businesses slash overhead rent costs, while Web-based (e-commerce) businesses allow small founders to reach global buyers 24/7.'
  },
  {
    pattern: /why\s+write\s+a\s+business\s+plan|reasons\s+why\s+not|help\s+you\s+get\s+financing/i,
    label: 'Why Write a Business Plan (And Why Some Founders Skip It)',
    explanation: 'Writing a formal Business Plan helps you secure bank/investor financing and forces you to think through every operational detail before spending money. Why some skip it: in fast-moving markets, founders may need to act immediately or already have personal financing.'
  },
  {
    pattern: /ease\s+of\s+start\s+up|increased\s+financial\s+resources|fewer\s+regulatory\s+control/i,
    label: 'Key Advantages of Partnerships',
    explanation: '1. Easy & inexpensive to form compared to corporations; 2. Pooled financial capital & stronger credit borrowing power from multiple partners; 3. Combined management skills & complementary expertise; 4. Taxed only once as personal income with fewer government regulations.'
  },
  {
    pattern: /leader\s+vs\.\s+manager|dealing\s+with\s+change\s+vs\.\s+complexity/i,
    label: 'Leader vs. Manager (Change vs. Complexity)',
    explanation: 'Managers cope with COMPLEXITY—they bring order, consistency, budgeting, and staffing to keep daily operations running smoothly. Leaders cope with CHANGE—they set a bold future direction, align people around a vision, and inspire them to overcome obstacles.'
  },
  {
    pattern: /areas\s+in\s+which\s+change\s+is\s+often\s+needed|overcome\s+employee\s+resistance/i,
    label: 'Managing Organizational Change (4 Target Areas & Execution)',
    explanation: 'Organizational change happens in 4 core areas: People, Technology, Strategy, and Structure. To implement change successfully, leaders must (1) recognize problems/opportunities early and devise solutions, (2) build allies across departments, and (3) overcome employee resistance through clear communication.'
  },
  {
    pattern: /functional.*divisional.*hybrid.*matrix|four\s+principal\s+types\s+of\s+structures/i,
    label: 'The 4 Principal Organizational Structures',
    explanation: '1. Functional Structure: Groups workers by job specialty (Marketing, Finance, Engineering)—efficient, but creates departmental silos. 2. Divisional Structure: Groups workers by product line, customer group, or geographic region. 3. Hybrid Structure: Combines functional and divisional units in large corporations. 4. Matrix Structure: Dual authority where employees report to both a functional boss and a project manager.'
  },
  {
    pattern: /action.*production.*project.*advice|cross\s*-\s*functional/i,
    label: 'Types of Workplace Teams (Action, Production, Project, Advice, Cross-Functional)',
    explanation: '1. Action Teams: Specialized crews executing high-stakes events (surgical teams, airline crews). 2. Production Teams: Frontline workers building goods day-to-day. 3. Project Teams: Assembled to solve a specific one-time project. 4. Advice Teams: Committees recommending policy to top management. 5. Cross-Functional Teams: Members from different departments (design, engineering, marketing) collaborating together.'
  },
  {
    pattern: /availability\s+and\s+cost\s+of\s+resources|nearness\s+to\s+suppliers|nearness\s+to\s+customers|tax\s+relief/i,
    label: 'Operations Planning: 4 Facility Location Factors',
    explanation: 'When choosing where to locate a factory or office, managers weigh 4 factors: (1) Availability & cost of materials, energy, and labor; (2) Nearness to suppliers (cuts transport costs for heavy raw inputs); (3) Nearness to customers (speeds up delivery time to market); and (4) Local tax relief & government support.'
  },
  {
    pattern: /recruiting\s+process|internal\s+recruiting|external\s+recruiting/i,
    label: 'Internal vs. External Recruiting',
    explanation: 'Internal Recruiting fills job openings by promoting or transferring current employees (boosts morale, lower cost, candidate already knows company culture). External Recruiting hires from outside the firm via job boards, colleges, or agencies (brings fresh perspectives and new technical skills, but costs more and takes longer).'
  },
  {
    pattern: /background\s+information|reference\s+checks|credit\s*&\s*legal\s+checks|employment\s+tests/i,
    label: 'The 3-Step Employee Selection Process',
    explanation: '1. Background Information: Screening application forms, résumés, reference checks, and credit/legal records. 2. Interviewing: Structured interviews (same standardized questions for every candidate to ensure fairness) vs. unstructured interviews. 3. Employment Tests: Ability, performance, personality tests, and physical/drug screenings.'
  },
  {
    pattern: /orientation.*training.*development|on\s*-\s*the\s*-\s*job|off\s*-\s*the\s*-\s*job/i,
    label: 'Orientation vs. Training vs. Management Development',
    explanation: 'Orientation introduces new hires to company policies, coworkers, and culture. Training teaches technical skills for a worker’s current job (On-the-Job coaching/job rotation vs. Off-the-Job classroom/computer simulations). Development prepares employees for future leadership and management roles.'
  },
  {
    pattern: /objective\s+appraisals|subjective\s+appraisals|bars|behaviorally\s+anchored/i,
    label: 'Performance Appraisals (Objective vs. Subjective & 360-Degree)',
    explanation: 'Objective Appraisals measure numerical results (units produced, sales volume, error rates)—hard to dispute. Subjective Appraisals evaluate employee traits or behaviors using manager judgment, often guided by BARS (Behaviorally Anchored Rating Scales) or 360-Degree Feedback from bosses, peers, and subordinates.'
  },
  {
    pattern: /wages.*salary|incentives.*benefits|base\s+pay/i,
    label: 'Employee Compensation: Wages, Salary, Incentives & Benefits',
    explanation: '1. Base Pay: Wages (paid by the hour or piece produced) vs. Salary (fixed monthly/annual pay). 2. Incentives: Commissions, bonuses, profit-sharing, and stock options that tie pay to performance. 3. Benefits (Fringe Benefits): Health insurance, paid vacation, retirement plans, and legally required Social Security & workers’ compensation.'
  },
  {
    pattern: /moving\s*&\s*replacing\s+employees|promotion.*transfer|disciplining|dismissal|downsizing/i,
    label: 'Moving, Separating & Replacing Employees',
    explanation: 'Promotions move high performers up to positions of greater authority and pay; Transfers move workers laterally to build broader skills; Disciplining & Demotion address policy violations; Dismissal separates employees via firing (for poor performance/misconduct) or Downsizing/Layoffs (cutting staff to reduce costs).'
  },
  {
    pattern: /primary\s+data|secondary\s+data|focus\s+group|observation.*survey/i,
    label: 'Marketing Research: Secondary vs. Primary Data',
    explanation: 'Researchers always check Secondary Data first (existing census stats, trade reports, internal records) because it is fast and cheap. Next, they gather Primary Data (new custom research collected first-hand via customer surveys, focus groups, or behavioral observation) to answer specific questions.'
  },
  {
    pattern: /production\s+differentiation:\s+packaging|functions\s+of\s+packaging|packaging/i,
    label: 'The 6 Functions of Product Packaging',
    explanation: 'Packaging does much more than hold a product: (1) Protects contents from spoilage/damage, (2) Grabs buyer attention on crowded shelves, (3) Describes ingredients & safety warnings, (4) Explains product benefits, (5) Displays pricing & barcodes, and (6) Adds consumer convenience (resealable pouches, easy-pour spouts).'
  },
  {
    pattern: /supply\s+chain\s+management|physical\s+distribution|logistics/i,
    label: 'Supply Chain Management vs. Logistics & Physical Distribution',
    explanation: 'Supply Chain Management oversees the entire end-to-end journey from raw material suppliers -> factory -> warehouses -> retailers -> final customer. Physical Distribution (Logistics) focuses specifically on storing, handling, and transporting finished goods efficiently so products arrive on time at minimal cost.'
  },
  {
    pattern: /creative\s+selling|order\s+processing|sales\s+support|personal\s+selling/i,
    label: 'Personal Selling & The 3 Core Sales Tasks',
    explanation: 'Personal Selling uses direct one-on-one communication to close sales and build relationships through 3 tasks: (1) Creative Selling (persuading prospects to buy complex or unfamiliar products), (2) Order Processing (handling routine repeat orders), and (3) Sales Support (educating buyers and providing technical assistance).'
  },
  {
    pattern: /differs\s+from\s+bookkeeping|measuring,\s+classifying,\s+analyzing/i,
    label: 'Accounting vs. Bookkeeping',
    explanation: 'Bookkeeping is the narrow, routine task of recording daily financial transactions (sales, bills, receipts). Accounting is much broader: it classifies, summarizes, analyzes, and interprets those records into financial statements and ratios so managers and investors can make informed decisions.'
  },
  {
    pattern: /borrowing\s+funds|capital\s+expenditures|extending\s+credit\s+to\s+customers/i,
    label: 'Why Firms Need Funds: Short-Term Operations vs. Capital Expenditures',
    explanation: 'Businesses need money for two time horizons: (1) Short-Term Operating Needs (paying daily bills, buying inventory, and extending credit to customers before they pay), and (2) Long-Term Capital Expenditures (major investments in land, factories, buildings, and heavy equipment that pay off over many years).'
  },
  {
    pattern: /long\s*-\s*term\s+loans|debt\s+financing|equity\s+financing/i,
    label: 'Long-Term Financing: Debt Financing vs. Equity Financing',
    explanation: 'Debt Financing borrows money (via long-term bank loans or corporate bonds) that MUST be repaid with fixed interest, regardless of whether the firm makes a profit—but owners keep 100% control. Equity Financing raises money by selling ownership stock (retained earnings, venture capital, IPOs)—never has to be repaid, but dilutes ownership.'
  },
  {
    pattern: /board\s+of\s+governors|reserve\s+banks|how\s+money\s+is\s+created/i,
    label: 'Central Banking (The Fed) & How Money Is Created',
    explanation: 'The Central Bank (Federal Reserve) regulates the banking system through its Board of Governors and Reserve Banks. It controls the money supply and inflation using 3 tools: (1) Reserve Requirements (cash % banks must hold back), (2) The Discount Rate (interest rate charged to banks), and (3) Open-Market Operations (buying/selling government bonds).'
  },
  {
    pattern: /savings\s+and\s+loans|mutual\s+savings|credit\s+unions.*nonbanks/i,
    label: 'The 5 Types of Financial Institutions',
    explanation: '1. Commercial Banks: Full-service profit-seeking banks serving businesses and consumers. 2. Savings Institutions (S&Ls / Mutual Savings): Specialize in home mortgages and savings. 3. Credit Unions: Tax-exempt, member-owned nonprofit cooperatives offering lower loan rates. 4. Nonbanks: Insurance firms, pension funds, and brokerages that don’t take traditional deposits. 5. Investment Banks: Help corporations issue stock and execute mergers.'
  },
  {
    pattern: /medium\s+of\s+exchange|store\s+of\s+wealth|portability.*divisibility|what\s+money\s+is/i,
    label: 'What Money Is: 3 Functions & 5 Characteristics',
    explanation: 'Money serves 3 Functions: (1) Medium of Exchange (replaces barter), (2) Store of Wealth (saves purchasing power), and (3) Standard/Unit of Value (prices goods). To work as money, currency needs 5 Characteristics: Portability, Divisibility, Durability, Uniqueness (hard to counterfeit), and Stability in value.'
  },
  {
    pattern: /fdic|saif|ncua|changing\s+bank/i,
    label: 'Deposit Insurance Agencies (FDIC, SAIF, NCUA) & Bank Regulation',
    explanation: 'To prevent bank runs and protect savers if a financial institution fails, government agencies insure deposits: FDIC (Federal Deposit Insurance Corporation) insures commercial bank accounts, SAIF insures savings & loan associations, and NCUA (National Credit Union Administration) insures credit union accounts.'
  },
  {
    pattern: /controlling\s+function|why\s+is\s+control\s+needed|establish\s+standards.*monitor/i,
    label: 'The Controlling Function: 4 Steps & Why Control Is Needed',
    explanation: 'Controlling follows 4 steps: (1) Establish clear standards, (2) Monitor actual performance, (3) Compare results against standards, and (4) Take corrective action. Managers need control to adapt to change/uncertainty, catch errors early, reduce costs, and empower teamwork.'
  },
  {
    pattern: /motivation:\s*looking\s*forward|motivating\s+for\s+the\s+future/i,
    label: 'Motivating Employees for the Future: Key Takeaways',
    explanation: 'No single motivation theory fits every worker or culture. Effective modern managers combine fair extrinsic base pay (hygiene factors) with intrinsic job enrichment, clear attainable goals (MBO), transparent equity, and personalized recognition.'
  }
];

/**
 * Finds all matching concept explanations across a slide's combined text.
 */
export function matchSlideConceptsFromText(fullSlideText: string): DetailedTakeaway[] {
  const matches: DetailedTakeaway[] = [];
  for (const entry of BULLET_CONCEPT_EXPLAINERS) {
    if (entry.pattern.test(fullSlideText)) {
      if (!matches.some(m => m.label.toLowerCase() === entry.label.toLowerCase())) {
        matches.push({
          label: entry.label,
          explanation: entry.explanation
        });
      }
    }
    if (matches.length >= 5) break;
  }
  return matches;
}

/**
 * Unpacks any slide bullet into a clear, student-friendly takeaway explanation.
 * Returns null if the bullet is just a short heading without a specific concept match,
 * allowing slide-level concept matching to handle grouped sub-bullets cleanly.
 */
export function explainSlideBullet(bullet: string, slideTitle: string): DetailedTakeaway | null {
  const cleanB = bullet.replace(/^[•\-\*\d\.\s]+/, '').trim();

  // Check against our curated concept dictionary first
  for (const entry of BULLET_CONCEPT_EXPLAINERS) {
    if (entry.pattern.test(cleanB)) {
      return {
        label: entry.label,
        explanation: entry.explanation
      };
    }
  }

  return null;
}

/**
 * Specialized Topic Guides for Diagram-Heavy & Core Curriculum Slides.
 * Provides full, plain-English teaching explanations even when a slide only displays a diagram or short bullet headings.
 */
export function matchSpecializedTopicGuide(
  title: string,
  full: string,
  bullets: string[]
): TopicGuide | null {
  const t = title.toLowerCase();

  // Slide 18: Seven Key Business Rules Overview
  if (/seven key business rules/i.test(t) && bullets.length <= 2) {
    return {
      title: 'Seven Key Business Rules for 21st-Century Success',
      coreRule: 'To survive and thrive in modern business, leaders must master seven core rules: (1) satisfy all stakeholders, (2) cope with rapid uncertainty, (3) master the 4 pillars of competition, (4) navigate global interdependence, (5) uphold strict ethics and social responsibility, (6) embrace workforce diversity, and (7) build technical, analytical, and human skills.',
      whyItMatters: 'Serves as the master checklist of managerial competencies for the entire introductory chapter.',
      detailedTakeaways: [
        { label: 'Rules 1–3: Market & Operational Mastery', explanation: 'Balance stakeholder needs (Rule 1), stay agile under uncertainty (Rule 2), and outperform rivals in customer responsiveness, quality, innovation, and efficiency (Rule 3).' },
        { label: 'Rules 4–6: Global, Ethical & Diverse Leadership', explanation: 'Adapt to globalized markets (Rule 4), act ethically beyond minimum laws (Rule 5), and harness diverse teams to serve diverse customers (Rule 6).' },
        { label: 'Rule 7: Personal Skill Triumvirate', explanation: 'Develop Technical skills (doing the job), Analytical/Conceptual skills (solving complex problems), and Interpersonal skills (leading people).' }
      ],
      examTrap: 'Exam Tip: Be ready to list at least five of the seven business rules in short-answer questions and explain how they connect to modern management.',
      activeRecallPrompt: {
        question: 'What are the seven key business rules for success in the 21st century?',
        hint: 'Think: Stakeholders, Uncertainty, Competition, Globalization, Ethics, Diversity, Personal Skills.',
        answer: '1. Manage stakeholders; 2. Deal with uncertainty; 3. Master competition; 4. Navigate globalization; 5. Practice ethics and social responsibility; 6. Manage diversity; 7. Cultivate job, analytical, and people skills.',
        stepByStepSolution: 'Step 1: Group into external environment rules (uncertainty, competition, globalization). Step 2: Add social/people rules (stakeholders, ethics, diversity). Step 3: Conclude with personal skill development.'
      }
    };
  }

  // Slide 25 & 73: Management Skills (Rule #7 / Technical, Human, Conceptual)
  if (/rule\s*#\s*7|management skills|technical skills.*human skills/i.test(full)) {
    return {
      title: /rule\s*#\s*7/i.test(t) ? 'Self-Development Rule #7: Essential Personal Skills' : 'The Three Essential Management Skills',
      coreRule: 'Every successful manager and business professional must cultivate three core skill sets: Technical Skills (ability to perform specialized job tasks), Human/Interpersonal Skills (ability to communicate, motivate, and work well with people), and Conceptual/Analytical Skills (ability to think abstractly, diagnose complex problems, and see the whole organization).',
      whyItMatters: 'Explains why technical brilliance alone is not enough to get promoted into executive leadership—you need people skills and big-picture analytical thinking.',
      detailedTakeaways: [
        { label: '1. Technical Skills (Job Know-How)', explanation: 'Mastery of specific tools, methods, and procedures (e.g., accounting, coding, operating machinery). Most critical for entry-level workers and first-line supervisors.' },
        { label: '2. Human / Interpersonal Skills (People Mastery)', explanation: 'The ability to listen, empathize, resolve conflict, and inspire teamwork. Equally essential at every level of management from supervisor to CEO.' },
        { label: '3. Conceptual / Analytical Skills (Big-Picture Thinking)', explanation: 'The ability to analyze complex situations, spot market trends, and understand how all parts of the company interact. Most critical for Top Managers setting long-term strategy.' }
      ],
      examTrap: 'Exam Trap: Examiners frequently ask which management level needs which skill most: First-line managers need TECHNICAL skills most; Top managers need CONCEPTUAL skills most; ALL managers need HUMAN skills equally!',
      activeRecallPrompt: {
        question: 'Describe the three essential management skills and explain how their importance shifts as a manager rises from first-line supervisor to top executive.',
        hint: 'Technical, Human, and Conceptual skills.',
        answer: 'Technical skills (specific job tasks) are most important for first-line supervisors; Human skills (working with people) are equally vital at all levels; Conceptual skills (big-picture analytical thinking) become most important for top executives.',
        stepByStepSolution: 'Step 1: Define Technical, Human, and Conceptual skills. Step 2: Match Technical to supervisory level and Conceptual to top management. Step 3: Note that Human skills remain critical across all tiers.'
      }
    };
  }

  // Slide 32: Micropreneurs, Intrapreneurs, Entrepreneurial Teams
  if (/micropreneur|intrapreneur/i.test(full)) {
    return {
      title: 'Small Business Owners vs. Entrepreneurs: Types & Roles',
      coreRule: 'Not all business starters have the same goals. Small business owners manage a single local business for steady income, whereas Classic Entrepreneurs take high risks to scale rapidly. Special variations include Micropreneurs (who keep their business small for work-life balance), Intrapreneurs (who innovate inside a large company), and Entrepreneurial Teams.',
      whyItMatters: 'Clarifies key terminology tested heavily on multiple-choice exams—especially the distinction between a micropreneur and an intrapreneur.',
      detailedTakeaways: [
        { label: 'Micropreneurs (Lifestyle Entrepreneurs)', explanation: 'Founders who start a small (often home-based or online) business and intentionally keep it small so they can do work they love while enjoying a balanced personal lifestyle.' },
        { label: 'Classic Entrepreneurs', explanation: 'Ambitious risk-takers who launch a company from scratch with the goal of rapid growth, market disruption, and substantial wealth creation.' },
        { label: 'Intrapreneurs (Corporate Innovators)', explanation: 'Employees inside an existing large corporation who are given freedom and company budget to develop new products like an entrepreneur—without risking their own personal money.' },
        { label: 'Entrepreneurial Teams', explanation: 'Two or more co-founders who combine complementary expertise (e.g., a tech engineer + a marketing/finance expert) to launch and scale a venture.' }
      ],
      examTrap: 'Exam Trap: Never confuse a Micropreneur (solo founder keeping a business small for lifestyle balance) with an Intrapreneur (an employee innovating inside a giant company like Google or Sony).',
      activeRecallPrompt: {
        question: 'What is the difference between a micropreneur and an intrapreneur?',
        hint: 'One owns a small lifestyle business; the other works inside a big corporation.',
        answer: 'A micropreneur is an independent owner who starts a business and intentionally keeps it small to maintain work-life balance. An intrapreneur is a salaried employee inside a large corporation who uses company resources to develop innovative new products.',
        stepByStepSolution: 'Step 1: Define micropreneur (independent, lifestyle-focused, stays small). Step 2: Define intrapreneur (internal corporate employee, zero personal financial risk). Step 3: Contrast ownership and risk.'
      }
    };
  }

  // Slide 33: Opportunity vs Necessity & Entrepreneurial Traits
  if (/opportunity\s+vs\.?\s+necessity|tolerance for ambiguity/i.test(full)) {
    return {
      title: 'Entrepreneurial Motivation & Psychological Traits',
      coreRule: 'People enter entrepreneurship through two paths: Opportunity Entrepreneurs (who voluntarily pursue a lucrative market gap) and Necessity Entrepreneurs (who start a business to survive because no jobs are available). Successful entrepreneurs share four core traits: high self-confidence (internal locus of control), high need for achievement, high tolerance for ambiguity/risk, and high energy.',
      whyItMatters: 'Explains both the economic push/pull factors behind business creation and the mindset required to survive startup pressure.',
      detailedTakeaways: [
        { label: 'Opportunity vs. Necessity Entrepreneurship', explanation: 'Opportunity entrepreneurs are pulled into business by an exciting idea or profit potential; Necessity entrepreneurs are pushed into self-employment by unemployment or economic hardship.' },
        { label: 'Self-Confidence & Personal Control', explanation: 'Entrepreneurs possess an "internal locus of control"—they believe their own effort and decisions control their destiny rather than external luck.' },
        { label: 'Need for Achievement & Action Orientation', explanation: 'Driven by setting challenging goals, taking initiative immediately, and building tangible results rather than waiting for instructions.' },
        { label: 'Tolerance for Ambiguity & High Energy', explanation: 'Comfort making decisions with incomplete information under financial uncertainty, backed by the physical and mental stamina to work long hours.' }
      ],
      examTrap: 'Exam Trap: Look for scenario questions where someone loses their job and starts a roadside stall to feed their family—that is NECESSITY entrepreneurship, not opportunity entrepreneurship.',
      activeRecallPrompt: {
        question: 'Distinguish between opportunity entrepreneurship and necessity entrepreneurship, and list three psychological traits of successful entrepreneurs.',
        hint: 'Pulled by market gap vs pushed by lack of jobs.',
        answer: 'Opportunity entrepreneurship occurs when someone voluntarily starts a firm to exploit a market gap, while necessity entrepreneurship occurs when someone starts a business because they lack other job options. Key traits include self-confidence, high tolerance for ambiguity/risk, and high need for achievement.',
        stepByStepSolution: 'Step 1: Contrast opportunity (choice/pull) vs necessity (survival/push). Step 2: List 3 psychological traits (self-confidence, tolerance for ambiguity, action orientation/energy).'
      }
    };
  }

  // Slide 35: Buying an Existing Business vs Starting from Scratch
  if (/buy or start|negotiating an existing business|why is the owner selling/i.test(full)) {
    return {
      title: 'Owning a Business: Buying an Existing Firm vs. Starting From Scratch',
      coreRule: 'Instead of starting from scratch, an entrepreneur can buy an existing business. Buying an established firm reduces startup uncertainty, provides immediate cash flow, and comes with existing customers, suppliers, and trained staff. However, the buyer must conduct strict due diligence to uncover why the owner is selling and avoid inheriting hidden debts or a dying reputation.',
      whyItMatters: 'Teaches students how to evaluate a business acquisition and avoid overpaying for a failing enterprise.',
      detailedTakeaways: [
        { label: 'Why Buy an Existing Business?', explanation: 'Reduces uncertainty and generates profits faster: the customer base, location, supplier relationships, and operating systems are already proven and running.' },
        { label: 'Three Due-Diligence Questions', explanation: 'Before buying, always investigate: (1) How does the business actually work? (2) Why is the owner really selling? (3) Is the asking price fair based on audited financial records?' },
        { label: 'True vs. Stated Reasons Sellers Sell', explanation: 'Owners may claim they are retiring or have health issues, when in reality the business is being crushed by new competitors, losing a lease, or facing obsolete products.' }
      ],
      examTrap: 'Exam Trap: Never rely solely on the seller’s word for why they are selling. Always audit independent tax returns, talk to suppliers/customers, and check local competition.',
      activeRecallPrompt: {
        question: 'What are the main advantages of buying an existing business over starting from scratch, and what three questions must a buyer investigate before purchasing?',
        hint: 'Immediate cash flow and lower uncertainty; how it works, why selling, price.',
        answer: 'Buying an existing business reduces uncertainty and generates immediate cash flow with an established customer base. A buyer must ask: (1) How does the business work? (2) Why is the owner selling? (3) Is the price right?',
        stepByStepSolution: 'Step 1: State advantages (proven concept, immediate revenue, existing suppliers). Step 2: List the 3 due-diligence questions. Step 3: Mention the risk of hidden problems.'
      }
    };
  }

  // Slide 36: Starting Up (Idea, Mentors, SCORE, ACE)
  if (/begins with an idea|score|ace|trade associations/i.test(full)) {
    return {
      title: 'Starting Up: From Business Idea to Mentorship & Experience',
      coreRule: 'Launching a successful startup begins with a viable idea backed by practical industry knowledge. Founders bridge their knowledge gap through three steps: (1) reading industry literature, (2) seeking guidance from experienced mentors, SCORE, ACE, and trade associations, and (3) gaining hands-on work experience before risking their own capital.',
      whyItMatters: 'Shows new entrepreneurs how to get free expert guidance and industry experience so they don’t make costly rookie mistakes.',
      detailedTakeaways: [
        { label: 'Step 1 & Step 3: Read & Get Hands-On Experience', explanation: 'Working inside a similar business first lets you learn supplier networks, customer habits, and operational pitfalls on someone else’s dime.' },
        { label: 'SCORE (Service Corps of Retired Executives)', explanation: 'A volunteer association of retired executives who offer free mentoring and business-plan coaching to aspiring entrepreneurs.' },
        { label: 'ACE (Active Corps of Executives) & Mentors', explanation: 'Currently employed business leaders and personal mentors who provide up-to-date operational advice and industry contacts.' },
        { label: 'Trade Associations', explanation: 'Organizations representing specific industries (e.g., Restaurant Association) that publish market data, benchmarks, and training for members.' }
      ],
      examTrap: 'Exam Trap: Know the acronyms SCORE (Service Corps of Retired Executives) and ACE (Active Corps of Executives)—both provide free advisory support to small businesses.',
      activeRecallPrompt: {
        question: 'What are the three steps for learning about a business before launching, and what roles do SCORE and Trade Associations play?',
        hint: 'Read, talk to experts, get experience.',
        answer: 'The three steps are: (1) Read about the business, (2) Talk to knowledgeable people (mentors, SCORE, ACE, trade associations), and (3) Get practical work experience. SCORE provides free mentoring from retired executives, while Trade Associations offer industry-specific research and networking.',
        stepByStepSolution: 'Step 1: List the 3 learning steps. Step 2: Define SCORE and ACE. Step 3: Explain how trade associations help new owners.'
      }
    };
  }

  // Slide 38: Getting Financing (Detailed Funding Sources)
  if (/angel investors.*venture capitalists|incubator|enterprise zone/i.test(full)) {
    return {
      title: 'Startup Financing Sources: Bootstrapping, Loans, Angels & VCs',
      coreRule: 'Entrepreneurs fund startups using a mix of personal savings, debt (loans that must be repaid with interest), and equity (selling partial ownership to investors). Beyond family, friends, and banks, founders tap Supplier Trade Credit, SBA-Backed Loans, Angel Investors, Venture Capitalists (VCs), Business Incubators, and Enterprise Zones.',
      whyItMatters: 'Every funding source has a trade-off between cost, risk, and loss of ownership control.',
      detailedTakeaways: [
        { label: 'Personal Savings & Friends/Family', explanation: 'The #1 source of startup seed money. You keep 100% ownership, but risk personal savings, credit card debt, or second home mortgages.' },
        { label: 'SBA-Backed Loans & Financial Institutions', explanation: 'Banks are often reluctant to lend to risky startups; SBA-backed loans carry a government guarantee that convinces banks to lend.' },
        { label: 'Angel Investors vs. Venture Capitalists', explanation: 'Angels are wealthy individuals investing their own money in early startups; Venture Capitalists (VCs) are institutional firms investing millions into high-growth companies in exchange for large equity stakes and board seats.' },
        { label: 'Incubators & Enterprise Zones', explanation: 'Incubators provide cheap workspace, shared clerical support, and mentoring; Enterprise Zones are government-designated areas offering tax breaks to businesses that locate there.' }
      ],
      examTrap: 'Exam Trap: Don’t confuse Angel Investors (wealthy individuals investing personal cash early on) with Venture Capitalists (professional firms investing pooled institutional funds for high equity stakes).',
      activeRecallPrompt: {
        question: 'Compare Angel Investors and Venture Capitalists, and explain the difference between a Business Incubator and an Enterprise Zone.',
        hint: 'Individual vs firm; workspace support vs geographic tax zone.',
        answer: 'Angel investors are wealthy individuals who invest their own money in early-stage startups, while Venture Capitalists are professional investment firms that invest large pooled funds for significant equity. Business Incubators are facilities offering low-cost space and mentoring to new firms, whereas Enterprise Zones are geographic areas where governments offer tax incentives to attract business investment.',
        stepByStepSolution: 'Step 1: Contrast Angels (personal funds) with VCs (institutional funds). Step 2: Define Incubators (shared startup facility). Step 3: Define Enterprise Zones (tax-incentive regions).'
      }
    };
  }

  // Slide 39: Achieving Success in Small Business (Why Small Businesses Fail)
  if (/why small businesses fail|keep a small business healthy/i.test(full)) {
    return {
      title: 'Achieving Small Business Success: Why Firms Fail & How to Survive',
      coreRule: 'Small businesses fail primarily because of five preventable factors: inadequate management skills, lack of financial support (undercapitalization), difficulty hiring/retaining good employees, aggressive competition, and burdensome government paperwork. Keeping a small business healthy requires accurate accounting records, listening closely to customers, and effective employee management.',
      whyItMatters: 'Equips founders with a survival playbook to avoid the traps that sink over half of new businesses within five years.',
      detailedTakeaways: [
        { label: 'Top Causes of Failure: Management & Cash', explanation: 'Founders often know how to make a product (e.g., bake bread) but lack management skills (budgeting, marketing, HR) and run out of working capital (undercapitalization).' },
        { label: 'Staffing, Competition & Paperwork', explanation: 'Small firms struggle to match big corporate salaries/benefits, face price wars from giant chains, and get bogged down by tax and regulatory filings.' },
        { label: 'Survival Rule 1: Keep Good Records & Ask for Help', explanation: 'Hire a qualified accountant and legal advisor early—accurate cash-flow tracking spots financial trouble before the bank account hits zero.' },
        { label: 'Survival Rules 2 & 3: Customer Focus & People Management', explanation: 'Stay personally connected to shifting customer needs and build a supportive culture that retains loyal employees.' }
      ],
      examTrap: 'Exam Trap: In exam questions, remember that "Keep good records and know when to ask for professional help (accountants/lawyers)" is the #1 operational defense against small business failure.',
      activeRecallPrompt: {
        question: 'List the five main reasons why small businesses fail and explain three practices that keep a small business healthy.',
        hint: 'Management, finance, hiring, competition, paperwork.',
        answer: 'Small businesses fail due to: (1) inadequate management skills, (2) lack of financial support, (3) difficulty hiring/keeping good employees, (4) aggressive competition, and (5) government paperwork. They stay healthy by keeping accurate records/asking for help, staying in tune with customers, and learning to manage employees well.',
        stepByStepSolution: 'Step 1: State the 5 failure causes. Step 2: State the 3 health practices (record-keeping, customer responsiveness, employee leadership).'
      }
    };
  }

  // Slide 67: The Levels of Management
  if (/levels of management/i.test(t)) {
    return {
      title: 'The Three Levels of Management Pyramid',
      coreRule: 'Organizations structure management into a three-tier pyramid: Top Managers (CEO, President, VPs) who set long-term corporate strategy and vision; Middle Managers (Division Heads, Plant Managers) who translate corporate goals into departmental tactical plans; and First-Line / Supervisory Managers (Foremen, Shift Supervisors, Office Managers) who oversee non-managerial workers in daily operations.',
      whyItMatters: 'Explains the organizational hierarchy diagram and clarifies who makes strategic vs. tactical vs. operational decisions.',
      detailedTakeaways: [
        { label: '1. Top Management (Corporate Executives)', explanation: 'Includes the CEO, COO, CFO, and Vice Presidents. Responsible for the entire company’s long-term survival, strategic planning (1–5 years), and external stakeholder relations.' },
        { label: '2. Middle Management (Tactical Coordinators)', explanation: 'Includes Regional Managers, Department Heads, and Plant Managers. They bridge the gap between top executives and front-line supervisors by implementing tactical plans (6–24 months).' },
        { label: '3. First-Line / Supervisory Management', explanation: 'Includes Shift Supervisors, Team Leaders, and Foremen. They directly supervise rank-and-file employees and manage daily operational schedules (1–52 weeks).' }
      ],
      examTrap: 'Exam Trap: First-line managers are the ONLY management tier that directly supervises non-managerial (rank-and-file) workers!',
      activeRecallPrompt: {
        question: 'Identify the three levels of the management pyramid, give a job title example for each, and explain what each level is responsible for.',
        hint: 'Top, Middle, and First-Line (Supervisory) managers.',
        answer: '1. Top Managers (e.g., CEO, VP): Set long-term corporate strategy. 2. Middle Managers (e.g., Division Head, Plant Manager): Translate strategy into departmental tactical plans. 3. First-Line Managers (e.g., Shift Supervisor): Directly supervise non-managerial employees in daily tasks.',
        stepByStepSolution: 'Step 1: Describe Top Management. Step 2: Describe Middle Management. Step 3: Describe First-Line Supervisory Management.'
      }
    };
  }

  // Slide 68: Decision Making (4 Phases)
  if (/decision making/i.test(t) || /phase 1.*dream up possible solutions/i.test(full)) {
    return {
      title: 'The Four Phases of Rational Decision Making',
      coreRule: 'Effective managers do not make impulsive guesses; they follow a structured four-phase rational decision-making process: (Phase 1) Identify the problem or opportunity, (Phase 2) Brainstorm/dream up possible alternative solutions, (Phase 3) Weigh the alternatives and select the best one, and (Phase 4) Implement the chosen solution and evaluate its real-world results.',
      whyItMatters: 'Provides a repeatable mental model for solving any corporate case study or operational crisis.',
      detailedTakeaways: [
        { label: 'Phase 1: Identify the Problem or Opportunity', explanation: 'Diagnose the root cause of the issue (not just surface symptoms). For example, falling sales might be a quality problem, not an advertising problem.' },
        { label: 'Phase 2: Think Up Possible Solutions', explanation: 'Brainstorm a wide range of creative options without judging or dismissing ideas too early.' },
        { label: 'Phase 3: Weigh Alternatives & Select One', explanation: 'Evaluate each option’s financial cost, time required, risks, and benefits, then choose the optimal course of action.' },
        { label: 'Phase 4: Implement & Evaluate', explanation: 'Put the decision into action, monitor the outcome, and adjust if the problem isn’t fully solved.' }
      ],
      examTrap: 'Exam Trap: Students often forget the second half of Phase 4: a decision is NOT complete when implemented—you must EVALUATE whether it actually worked!',
      activeRecallPrompt: {
        question: 'List the four sequential phases of the rational managerial decision-making process.',
        hint: 'Identify -> Brainstorm -> Weigh & Select -> Implement & Evaluate.',
        answer: 'Phase 1: Identify the problem or opportunity. Phase 2: Dream up possible solutions. Phase 3: Weigh alternative solutions and select one. Phase 4: Implement the solution and evaluate its effectiveness.',
        stepByStepSolution: 'Step 1: Diagnosis (Phase 1). Step 2: Ideation (Phase 2). Step 3: Evaluation & Selection (Phase 3). Step 4: Execution & Feedback loop (Phase 4).'
      }
    };
  }

  // Slide 71: SWOT Analysis
  if (/swot analysis/i.test(t)) {
    return {
      title: 'SWOT Analysis: Strategic Situational Assessment',
      coreRule: 'SWOT Analysis is a strategic planning framework that evaluates an organization’s internal capabilities alongside its external market environment across four dimensions: Strengths and Weaknesses (Internal factors the company CAN control) and Opportunities and Threats (External market forces the company CANNOT directly control).',
      whyItMatters: 'One of the most heavily tested frameworks in university business exams and case study assignments.',
      detailedTakeaways: [
        { label: 'S — Strengths (Internal & Positive)', explanation: 'Internal core competencies and advantages the firm possesses (e.g., strong brand reputation, patented technology, cash reserves, skilled workforce).' },
        { label: 'W — Weaknesses (Internal & Negative)', explanation: 'Internal limitations holding the firm back (e.g., outdated factory equipment, high debt, poor distribution, lack of management depth).' },
        { label: 'O — Opportunities (External & Positive)', explanation: 'Favorable external market trends the firm can exploit (e.g., growing consumer demographic, new foreign trade agreement, a rival going bankrupt).' },
        { label: 'T — Threats (External & Negative)', explanation: 'External environmental hazards that could harm the business (e.g., new government regulations, rising inflation, disruptive new competitors).' }
      ],
      examTrap: 'Exam Trap: The #1 exam mistake is confusing Internal vs. External factors! Strengths & Weaknesses are ALWAYS INTERNAL to the company; Opportunities & Threats are ALWAYS EXTERNAL in the environment.',
      activeRecallPrompt: {
        question: 'What does SWOT stand for, and which elements are internal to the organization versus external to the environment?',
        hint: 'S & W are inside the firm; O & T are outside in the market.',
        answer: 'SWOT stands for Strengths, Weaknesses, Opportunities, and Threats. Strengths and Weaknesses are internal factors within the organization’s control, whereas Opportunities and Threats are external environmental forces outside the organization’s direct control.',
        stepByStepSolution: 'Step 1: Define S, W, O, and T. Step 2: Classify S and W as internal organizational factors. Step 3: Classify O and T as external environmental forces.'
      }
    };
  }

  // Slide 72: Organizing: The Org Chart
  if (/org chart/i.test(t)) {
    return {
      title: 'Organizing: The Organization Chart (Org Chart)',
      coreRule: 'An Organization Chart (Org Chart) is a visual diagram that maps out a company’s internal structure. By looking at the boxes and connecting lines, anyone can immediately see four things: (1) who reports to whom (the Chain of Command), (2) the levels of management hierarchy, (3) how work is divided into departments, and (4) each manager’s Span of Control.',
      whyItMatters: 'Eliminates workplace confusion by visually clarifying authority, reporting relationships, and communication channels.',
      detailedTakeaways: [
        { label: 'Boxes (Positions & Departments)', explanation: 'Each box represents a specific job title or department, showing how the division of labor is organized across the firm.' },
        { label: 'Vertical Lines (Chain of Command)', explanation: 'Solid vertical lines connecting boxes show the formal hierarchy of authority—who has the right to give orders and who reports to whom.' },
        { label: 'Horizontal Layers (Levels of Management)', explanation: 'Shows whether the organization is "Tall" (many vertical layers of managers) or "Flat" (few layers with wide spans of control).' }
      ],
      examTrap: 'Exam Trap: An org chart shows the FORMAL organization structure, not the informal social network (office friendships and grapevine communication).',
      activeRecallPrompt: {
        question: 'What is an Organization Chart (Org Chart), and what key structural relationships does it visually reveal?',
        hint: 'Think about the boxes, vertical lines, and levels.',
        answer: 'An Org Chart is a visual diagram of a firm’s formal structure. It reveals the chain of command (who reports to whom), the division of labor (departments/job titles), the hierarchy levels, and each manager’s span of control.',
        stepByStepSolution: 'Step 1: Define Org Chart. Step 2: Explain what the boxes represent (roles/departments). Step 3: Explain what the lines represent (reporting hierarchy and chain of command).'
      }
    };
  }

  // Slide 76 & 77: Controlling & The 4-Step Control Process
  if (/^controlling$/i.test(t) || /control process/i.test(t)) {
    return {
      title: 'The Controlling Function & The 4-Step Control Process',
      coreRule: 'Controlling is the fourth management function: monitoring performance to ensure that plans are actually being achieved and taking corrective action when results fall short. It operates through a strict four-step cycle: (1) Establish clear performance standards, (2) Monitor actual performance, (3) Compare performance against standards, and (4) Take corrective action if needed.',
      whyItMatters: 'Without controlling, even the best strategic plan fails because managers have no way to detect errors, waste, or missed targets.',
      detailedTakeaways: [
        { label: 'Step 1: Establish Standards', explanation: 'Set specific, measurable targets (e.g., "Produce 1,000 units per day with less than 1% defects" or "Increase quarterly sales by 10%").' },
        { label: 'Step 2: Monitor Actual Performance', explanation: 'Measure real operational output using financial reports, quality inspections, sales dashboards, and customer feedback.' },
        { label: 'Step 3: Compare Performance Against Standards', explanation: 'Check whether actual results match, beat, or fall below the target standard—identifying any performance gap (variance).' },
        { label: 'Step 4: Take Corrective Action', explanation: 'If results fall short, fix the root cause (retrain staff, repair machines, or revise unrealistic targets). Why control? To adapt to change, catch errors early, cut waste, and empower teamwork.' }
      ],
      examTrap: 'Exam Trap: Memorize the exact chronological order of the 4-Step Control Process: (1) Establish Standards -> (2) Monitor Performance -> (3) Compare -> (4) Take Corrective Action.',
      activeRecallPrompt: {
        question: 'What are the four sequential steps of the management control process, and why is controlling necessary?',
        hint: 'Standards -> Monitor -> Compare -> Correct.',
        answer: 'The four steps are: (1) Establish standards, (2) Monitor performance, (3) Compare performance against standards, and (4) Take corrective action if needed. Controlling is needed to detect errors, reduce waste, deal with uncertainty, and ensure goals are met.',
        stepByStepSolution: 'Step 1: List the 4 steps in exact order. Step 2: State why managers need control (error detection, cost reduction, handling complexity).'
      }
    };
  }

  // Slide 86, 87, 88, 89, 90: Functional, Divisional, Hybrid, Matrix Structures
  if (/^(functional|divisional|hybrid|matrix)\s+structure$/i.test(t)) {
    return {
      title: `${title}: How It Works, Pros & Cons`,
      coreRule: 'Organizations group departments in three classic ways before moving to a Matrix: (1) Functional Structure groups workers by their specialized skill (Marketing, Finance, Production); (2) Divisional Structure groups workers into self-contained units by Product, Customer group, or Geographic region; and (3) Hybrid Structure blends both—using divisions for distinct markets while keeping shared functions (like HR and Legal) centralized.',
      whyItMatters: 'Helps you visually read the structural diagrams on Slides 86–89 and know when companies switch from Functional to Divisional or Hybrid.',
      detailedTakeaways: [
        { label: 'Functional Structure (Slide 86)', explanation: 'Groups people doing similar jobs together (Engineering Dept, Accounting Dept, Marketing Dept). Great for small-to-medium firms with a single product line: saves money and builds deep technical skill, but departments can become isolated "silos."' },
        { label: 'Divisional Structure (Slides 87–88)', explanation: 'Creates autonomous divisions around specific Products (e.g., Pepsi Beverages vs. Frito-Lay Snacks), Customers (Consumer vs. Military), or Regions (Africa, Europe, Asia). Fast customer response, but duplicates functions across divisions.' },
        { label: 'Hybrid Structure (Slide 89)', explanation: 'Used by large corporations to get the best of both worlds: product/regional divisions handle fast market execution, while centralized functional departments (IT, Finance, Legal) avoid costly duplication.' }
      ],
      examTrap: 'Exam Trap: Know when a firm outgrows a Functional structure: once a company expands into many different products or countries, it switches to a DIVISIONAL or HYBRID structure to stay responsive.',
      activeRecallPrompt: {
        question: 'Compare a Functional Structure, a Divisional Structure, and a Hybrid Structure, stating when each is most effective.',
        hint: 'Grouped by skill vs grouped by product/region/customer vs combined.',
        answer: 'A Functional structure groups employees by specialized skill (best for smaller firms with few products). A Divisional structure groups employees into self-contained units by product, customer, or geography (best for diverse products/markets). A Hybrid structure combines autonomous divisions with centralized corporate functions like HR and Finance.',
        stepByStepSolution: 'Step 1: Define Functional structure and its advantage (efficiency). Step 2: Define Divisional structure and its 3 subtypes (product, customer, geographic). Step 3: Explain how Hybrid combines both.'
      }
    };
  }

  // Slide 99: Facility Layout
  if (/facility layout/i.test(t)) {
    return {
      title: 'Operations Planning: Facility Layout Designs',
      coreRule: 'Facility Layout is the physical arrangement of workstations, machinery, and equipment inside a factory or service business so materials and people flow smoothly at minimum cost. Operations managers choose among three primary layouts based on what they produce: Process Layout, Product (Assembly-Line) Layout, and Fixed-Position Layout.',
      whyItMatters: 'A poor layout wastes hours moving parts back and forth; the right layout maximizes production speed and safety.',
      detailedTakeaways: [
        { label: '1. Process Layout (Job-Shop / Functional Layout)', explanation: 'Groups similar machines or functions together in one area (e.g., all X-ray machines in one hospital wing, all grinding machines in one factory corner). Used for intermittent, custom, or varied jobs.' },
        { label: '2. Product Layout (Assembly-Line Layout)', explanation: 'Arranges workstations in a straight sequential line where the product moves along a conveyor belt from station to station (e.g., car assembly plant, bottling factory). Best for high-volume mass production.' },
        { label: '3. Fixed-Position Layout', explanation: 'Because the product is too massive or heavy to move (e.g., building a bridge, skyscraper, cruise ship, or jumbo jet), the product stays in one fixed spot and workers, tools, and materials are brought to it.' }
      ],
      examTrap: 'Exam Trap: Multiple-choice questions love asking: "Which facility layout is used to build a hydroelectric dam, ship, or house?" Always answer: FIXED-POSITION LAYOUT!',
      activeRecallPrompt: {
        question: 'Distinguish between Process Layout, Product (Assembly-Line) Layout, and Fixed-Position Layout, giving a real-world example of each.',
        hint: 'Hospital vs Car Factory vs Building a Ship.',
        answer: '1. Process Layout groups similar functions together for varied tasks (e.g., a hospital). 2. Product Layout arranges stations in a sequential line for mass production (e.g., automobile assembly). 3. Fixed-Position Layout keeps a massive product stationary while workers and materials move to it (e.g., shipbuilding or construction).',
        stepByStepSolution: 'Step 1: Define Process layout + example. Step 2: Define Product layout + example. Step 3: Define Fixed-Position layout + example.'
      }
    };
  }

  // Slide 101 & 102: Gantt Chart & PERT Chart
  if (/gantt chart|pert chart|scheduling tools/i.test(t)) {
    return {
      title: 'Operations Scheduling Tools: Gantt Charts vs. PERT Charts',
      coreRule: 'To ensure complex production projects finish on time, operations managers use two visual scheduling tools: a Gantt Chart (a horizontal bar chart showing which tasks must be completed in which weeks and tracking progress) and a PERT Chart (a network diagram mapping task dependencies, time estimates, and the "Critical Path"—the longest sequence of tasks that determines the minimum time needed to finish the project).',
      whyItMatters: 'Professors almost always test the difference between a Gantt Chart (simple bar timeline) and a PERT Chart (network diagram with a Critical Path).',
      detailedTakeaways: [
        { label: 'Gantt Chart (Slide 101 — Bar Timeline)', explanation: 'A visual bar graph listing project tasks on the vertical axis and calendar time on the horizontal axis. Bars show planned start/end dates alongside shaded bars showing actual progress completed so far.' },
        { label: 'PERT Chart (Slide 102 — Program Evaluation & Review Technique)', explanation: 'A flowchart of boxes/nodes and arrows used for complex projects. It maps which tasks must finish before the next task can start and estimates how long each step takes.' },
        { label: 'The Critical Path (Exam Favorite!)', explanation: 'In a PERT chart, the Critical Path is the longest path of dependent tasks from start to finish. If ANY task on the critical path is delayed by 1 day, the entire project is delayed by 1 day!' }
      ],
      examTrap: 'Exam Trap: Remember that if a non-critical task is slightly delayed, the project may still finish on time; but ANY delay on the CRITICAL PATH delays the entire project completion date.',
      activeRecallPrompt: {
        question: 'Compare a Gantt Chart and a PERT Chart, and explain what the "Critical Path" means in project management.',
        hint: 'Horizontal bar chart vs network arrow diagram.',
        answer: 'A Gantt chart is a horizontal bar chart showing start and completion dates for tasks over time. A PERT chart is a network diagram showing the sequence and dependencies among tasks for complex projects. The Critical Path is the longest sequence of dependent tasks in a PERT chart; any delay along it delays the entire project.',
        stepByStepSolution: 'Step 1: Define Gantt chart (bar timeline). Step 2: Define PERT chart (dependency network). Step 3: Define Critical Path and explain why managers monitor it closely.'
      }
    };
  }

  // Slide 107: Maslow's Hierarchy of Needs
  if (/maslow/i.test(t)) {
    return {
      title: "Maslow's Hierarchy of Needs (5-Level Motivation Pyramid)",
      coreRule: "Abraham Maslow proposed that human beings are motivated by five levels of unmet needs arranged in a pyramid from basic survival at the bottom to personal fulfillment at the top: (1) Physiological, (2) Safety, (3) Social/Belongingness, (4) Esteem, and (5) Self-Actualization. Lower-level needs must be substantially satisfied before higher-level needs become motivating.",
      whyItMatters: 'Teaches managers that you cannot motivate an underpaid, unsafe worker with a "Worker of the Month" plaque—basic survival and safety come first!',
      detailedTakeaways: [
        { label: '1. Physiological Needs (Bottom Base)', explanation: 'Most basic survival needs: food, water, shelter, rest. In the workplace: paying a living wage and providing lunch breaks and comfortable temperatures.' },
        { label: '2. Safety Needs', explanation: 'Protection from physical danger and economic insecurity. In the workplace: safe factory equipment, job security, health insurance, and pension plans.' },
        { label: '3. Social (Belongingness / Love) Needs', explanation: 'The need for friendship, affection, and acceptance by others. In the workplace: friendly coworkers, team spirit, and supportive supervisors.' },
        { label: '4. Esteem & 5. Self-Actualization (Top Peak)', explanation: 'Esteem is the need for status, recognition, promotions, and respect. Self-Actualization is reaching your full human potential through creative, challenging, meaningful work.' }
      ],
      examTrap: 'Exam Trap: Memorize the exact 5 levels from bottom to top: Physiological -> Safety -> Social -> Esteem -> Self-Actualization. Once a need is satisfied, it NO LONGER motivates!',
      activeRecallPrompt: {
        question: "List the five levels of Maslow's Hierarchy of Needs from bottom to top and give one workplace example for each level.",
        hint: 'Physiological -> Safety -> Social -> Esteem -> Self-Actualization.',
        answer: '1. Physiological (living wage), 2. Safety (safe working conditions/job security), 3. Social (team camaraderie), 4. Esteem (job title/recognition bonus), and 5. Self-Actualization (challenging creative projects that fulfill personal potential).',
        stepByStepSolution: 'Step 1: List the 5 levels in bottom-to-top order. Step 2: Pair each level with a concrete workplace policy or reward. Step 3: State the progression rule (lower needs first).'
      }
    };
  }

  // Slide 126 & 127: Consumer Buying Process & Influencing Factors
  if (/consumer buying process|factors influencing buying behavior/i.test(t)) {
    return {
      title: 'Consumer Buying Behavior: The 5-Step Process & Key Influences',
      coreRule: 'Before consumers buy a product, they go through a structured five-step decision process: (1) Problem/Need Recognition, (2) Information Search, (3) Evaluation of Alternatives, (4) Purchase Decision, and (5) Postpurchase Behavior (cognitive dissonance or satisfaction). At every step, their choices are shaped by Cultural, Social, Personal, and Psychological factors.',
      whyItMatters: 'Explains the visual diagrams on Slides 126 and 127 so students understand how marketers influence buyers at every stage.',
      detailedTakeaways: [
        { label: 'Steps 1–3: Need Recognition, Search & Evaluation', explanation: 'The buyer realizes a need (e.g., broken laptop), searches for information (reviews, ads, friends), and compares competing brands on price and features.' },
        { label: 'Steps 4–5: Purchase & Postpurchase Evaluation', explanation: 'The buyer purchases the item and then evaluates whether they are happy or feel "buyer’s remorse" (cognitive dissonance)—which is why great customer service after the sale is critical.' },
        { label: '4 Factors Influencing Buying Behavior (Slide 127)', explanation: '1. Cultural (culture, subculture, social class); 2. Social (family, reference groups, opinion leaders); 3. Personal (age, life stage, occupation, income); 4. Psychological (motivation, perception, learning, attitudes).' }
      ],
      examTrap: 'Exam Trap: Know the term "Cognitive Dissonance" (Postpurchase doubt/remorse) in Step 5—marketers combat it with warranties, thank-you emails, and money-back guarantees.',
      activeRecallPrompt: {
        question: 'List the five steps of the consumer buying process in order and identify the four major categories of factors that influence buying behavior.',
        hint: 'Need -> Search -> Evaluate -> Purchase -> Postpurchase; Cultural, Social, Personal, Psychological.',
        answer: 'The 5 steps are: (1) Problem/Need recognition, (2) Information search, (3) Evaluation of alternatives, (4) Purchase decision, and (5) Postpurchase behavior. The 4 influencing factor categories are Cultural, Social, Personal, and Psychological.',
        stepByStepSolution: 'Step 1: List the 5 stages chronologically. Step 2: Explain postpurchase cognitive dissonance. Step 3: List the 4 influencing factor groups.'
      }
    };
  }

  // Slide 136 & 137: Product Life Cycle & New Product Development
  if (/product life cycle|developing a new product/i.test(t)) {
    return {
      title: /life cycle/i.test(t) ? 'The Product Life Cycle (4 Stages)' : 'The 6 Stages of Developing a New Product',
      coreRule: 'Products, like living organisms, pass through a four-stage Product Life Cycle (PLC): (1) Introduction (high launch costs, slow sales, zero/negative profit), (2) Growth (rapidly rising sales, peak profits, new competitors enter), (3) Maturity (sales peak and plateau, intense price competition), and (4) Decline (falling sales and profits as new technologies replace the product). Before launch, new products go through a 6-step development funnel.',
      whyItMatters: 'Both the 4-stage Product Life Cycle curve and the 6-step New Product Development funnel are classic exam diagrams.',
      detailedTakeaways: [
        { label: 'Stage 1: Introduction & Stage 2: Growth', explanation: 'In Introduction, heavy R&D and promotional spending keep profits negative while educating buyers. In Growth, word spreads, sales skyrocket, and profits peak—attracting rival copycats.' },
        { label: 'Stage 3: Maturity & Stage 4: Decline', explanation: 'In Maturity, most target buyers already own the product, forcing price cuts and brand differentiation. In Decline, obsolescence shrinks demand until the product is phased out.' },
        { label: '6 Steps of New Product Development (Slide 137)', explanation: '1. Idea Generation -> 2. Idea Screening (filtering out bad ideas) -> 3. Business/Product Analysis -> 4. Concept Development & Prototyping -> 5. Test Marketing -> 6. Commercialization (full market launch).' }
      ],
      examTrap: 'Exam Trap: Industry profits typically peak during the late GROWTH stage (not Maturity!), because in the Maturity stage fierce competition forces companies to slash prices.',
      activeRecallPrompt: {
        question: 'Name the four stages of the Product Life Cycle in order and explain what happens to sales and profits in each stage.',
        hint: 'Introduction -> Growth -> Maturity -> Decline.',
        answer: '1. Introduction: Low sales, negative/zero profit due to high launch costs. 2. Growth: Rapidly rising sales and peak profits as the market adopts the product. 3. Maturity: Sales peak and flatten while profits decline due to fierce price competition. 4. Decline: Both sales and profits fall as better alternatives replace the product.',
        stepByStepSolution: 'Step 1: List the 4 stages in order. Step 2: Describe the sales curve vs the profit curve in each stage. Step 3: Note why profits peak in Growth while sales peak in Maturity.'
      }
    };
  }

  // Slide 146 & 147: Types of Distribution Channels & Intermediary Value Added
  if (/types of distribution channels|intermediary value added/i.test(t)) {
    return {
      title: 'Marketing Channels & How Intermediaries Add Value',
      coreRule: 'A Distribution Channel (Marketing Channel) is the path a product takes from producer to final consumer. Firms use either Direct Channels (Producer -> Consumer, with zero middlemen) or Indirect Channels using Intermediaries (Producer -> Wholesaler -> Retailer -> Consumer). While critics complain middlemen raise prices, intermediaries actually lower total system costs by drastically reducing the number of transactions and adding four utilities: Time, Place, Possession, and Information utility.',
      whyItMatters: 'Explains the classic textbook diagram showing how 1 wholesaler between 4 manufacturers and 4 customers cuts total transactions from 16 down to 8!',
      detailedTakeaways: [
        { label: 'Channel 1: Direct Channel (Producer -> Consumer)', explanation: 'The maker sells straight to the buyer (e.g., farmers market, Dell.com, bakery). Gives the producer total control, but limits geographic reach.' },
        { label: 'Channels 2 & 3: Retailer & Wholesaler Channels', explanation: 'Producer -> Retailer -> Consumer (used for cars, large supermarkets like Walmart) or Producer -> Wholesaler -> Retailer -> Consumer (used for thousands of small convenience stores).' },
        { label: 'Why Intermediaries Survive (Transaction Efficiency)', explanation: 'Without a wholesaler, 4 factories selling to 4 stores require 4 × 4 = 16 separate shipments. With 1 central wholesaler, it takes only 4 + 4 = 8 shipments—cutting shipping costs in half!' },
        { label: 'Utilities Added by Intermediaries', explanation: 'Time utility (having goods available when wanted), Place utility (having goods convenient near buyers), Possession utility (helping transfer ownership/credit), and Information/Service utility.' }
      ],
      examTrap: 'Exam Trap: Look for the classic True/False question: "Eliminating wholesalers always eliminates their costs." FALSE! Someone still has to ship, store, and sort the goods—wholesalers do it more efficiently than individual factories can.',
      activeRecallPrompt: {
        question: 'Explain the difference between a direct and an indirect distribution channel, and explain how intermediaries reduce total transaction costs.',
        hint: 'Zero middlemen vs wholesalers/retailers; 4×4=16 vs 4+4=8.',
        answer: 'A direct channel moves goods straight from producer to consumer with no intermediaries, while an indirect channel uses middlemen like wholesalers and retailers. Intermediaries reduce costs by consolidating shipments (e.g., reducing 16 direct manufacturer-to-store transactions down to 8) and adding time, place, and possession utility.',
        stepByStepSolution: 'Step 1: Contrast direct vs indirect channels. Step 2: Explain the transaction-reduction math. Step 3: Name the utilities intermediaries provide.'
      }
    };
  }

  // Slide 158: 7 Steps of Personal Selling Process
  if (/steps of personal selling/i.test(t)) {
    return {
      title: 'The 7 Steps of the Personal Selling Process',
      coreRule: 'Personal selling—face-to-face or one-on-one consultative selling—follows a structured seven-step sequence: (1) Prospecting and Qualifying, (2) Pre-approach, (3) Approach, (4) Make the Presentation, (5) Answer Objections, (6) Close the Sale, and (7) Follow Up. Modern selling focuses on building long-term customer relationships in Step 7 rather than just making a one-time sale.',
      whyItMatters: 'The 7 steps of personal selling are a staple multiple-choice and short-answer sequence in marketing exams.',
      detailedTakeaways: [
        { label: '1. Prospecting & Qualifying + 2. Pre-approach', explanation: 'Prospecting finds potential leads; Qualifying checks if they actually have the need, budget, and authority to buy. Pre-approach researches the client’s specific business before the meeting.' },
        { label: '3. Approach + 4. Presentation + 5. Objections', explanation: 'Make a professional first impression (Approach), demonstrate how the product solves their problem (Presentation), and treat customer hesitations (Objections) as requests for more clarity.' },
        { label: '6. Trial Close / Closing + 7. Follow-Up', explanation: 'Ask for the order (Closing), and then Follow Up after delivery to ensure installation went smoothly, solve any issues, and generate repeat referrals.' }
      ],
      examTrap: 'Exam Trap: Don’t confuse "Prospecting" (finding names of potential buyers) with "Qualifying" (making sure those leads actually have the money and authority to buy).',
      activeRecallPrompt: {
        question: 'List the seven steps of the personal selling process in chronological order.',
        hint: 'Prospect/Qualify -> Pre-approach -> Approach -> Presentation -> Objections -> Close -> Follow-up.',
        answer: '1. Prospecting and Qualifying, 2. Pre-approach, 3. Approach, 4. Make the Presentation, 5. Answer Objections, 6. Close the Sale, and 7. Follow Up.',
        stepByStepSolution: 'Step 1: Preparation stages (Prospect/Qualify, Pre-approach). Step 2: Face-to-face stages (Approach, Presentation, Objections, Close). Step 3: Post-sale relationship stage (Follow-up).'
      }
    };
  }

  // Slide 166, 169, 172: Users of Accounting, 6 Steps of Accounting, Statement of Cash Flows
  if (/^users$/i.test(t) || /6 steps of the accounting process/i.test(t) || /statement of cash flows/i.test(t)) {
    return {
      title: /^users$/i.test(t)
        ? 'Internal and External Users of Accounting Information'
        : /6 steps/i.test(t)
        ? 'The 6-Step Accounting Cycle (From Transactions to Statements)'
        : 'The Statement of Cash Flows (Operating, Investing & Financing)',
      coreRule: /^users$/i.test(t)
        ? 'Accounting serves two distinct audiences: Internal Users (company managers, executives, and department heads who use Managerial Accounting to plan budgets and control costs) and External Users (investors, bank lenders, suppliers, labor unions, and government tax agencies like the IRS/GRA who use audited Financial Accounting statements to judge creditworthiness, taxes, and profitability).'
        : /6 steps/i.test(t)
        ? 'The Accounting Process (Accounting Cycle) transforms raw daily receipts into formal financial statements through six ordered steps: (1) Analyze source documents (receipts, invoices), (2) Record transactions in a chronological Journal, (3) Post journal entries into Ledger accounts, (4) Prepare a Trial Balance to verify debits equal credits, (5) Prepare the three Financial Statements (Balance Sheet, Income Statement, Cash Flows), and (6) Analyze the financial statements.'
        : 'While the Income Statement shows accounting profit on paper, the Statement of Cash Flows tracks actual cash flowing in and out of the company’s bank accounts across three categories: (1) Cash Flows from Operating Activities (daily customer sales and supplier/wage payments), (2) Cash Flows from Investing Activities (buying or selling buildings, machinery, or equipment), and (3) Cash Flows from Financing Activities (borrowing/repaying bank loans, issuing stock, or paying dividends).',
      whyItMatters: 'Explains the visual accounting diagrams so students master users, the 6-step bookkeeping/accounting cycle, and the 3 cash-flow buckets.',
      detailedTakeaways: [
        { label: 'Internal vs. External Users (Slide 166)', explanation: 'Managers inside the firm need detailed cost and budget data; outside investors, banks, and tax authorities need standardized GAAP financial reports.' },
        { label: 'The 6-Step Accounting Cycle (Slide 169)', explanation: '1. Analyze source documents -> 2. Record in Journal (book of original entry) -> 3. Post to Ledger -> 4. Take a Trial Balance -> 5. Prepare Financial Statements -> 6. Analyze results.' },
        { label: '3 Cash Flow Activities (Slide 172)', explanation: 'Operating (cash from core day-to-day sales), Investing (cash spent on or received from long-term fixed assets), and Financing (cash from debt loans or equity stock).' }
      ],
      examTrap: 'Exam Trap: In the 6-step accounting process, transactions are ALWAYS recorded chronologically in the JOURNAL first, and then transferred ("posted") to the LEDGER!',
      activeRecallPrompt: {
        question: /6 steps/i.test(t)
          ? 'What are the six sequential steps of the accounting process?'
          : /cash flows/i.test(t)
          ? 'What are the three categories of cash activities reported on a Statement of Cash Flows?'
          : 'Distinguish between internal users and external users of accounting information, giving two examples of each.',
        hint: /6 steps/i.test(t)
          ? 'Source documents -> Journal -> Ledger -> Trial Balance -> Financial Statements -> Analyze.'
          : /cash flows/i.test(t)
          ? 'Operating, Investing, and Financing.'
          : 'Inside managers vs outside investors/banks/tax authorities.',
        answer: /6 steps/i.test(t)
          ? '1. Analyze source documents, 2. Record transactions in a journal, 3. Transfer (post) journal entries to a ledger, 4. Take a trial balance, 5. Prepare financial statements, and 6. Analyze the financial statements.'
          : /cash flows/i.test(t)
          ? 'The Statement of Cash Flows reports cash inflows and outflows across: (1) Operating activities (day-to-day business), (2) Investing activities (buying/selling long-term assets), and (3) Financing activities (debt loans, stock, and dividends).'
          : 'Internal users are managers and employees inside the firm who use accounting to plan and control operations. External users are outside parties such as shareholders, bank lenders, suppliers, and government tax authorities who evaluate financial health and tax compliance.',
        stepByStepSolution: 'Step 1: State the core definitions clearly. Step 2: List the sequential steps or categories in exact order. Step 3: Connect to how financial decisions are made.'
      }
    };
  }

  // Slide 184, 186, 188: Financial Leverage, Money Supply (M1/M2), How the Fed Controls Money Supply
  if (/financial leverage|the money supply|how the fed controls/i.test(t)) {
    return {
      title: /leverage/i.test(t)
        ? 'Financial Leverage & Cost of Capital'
        : /money supply$/i.test(t)
        ? 'The Money Supply: M1 (Spendable Cash) vs. M2 (Near Money)'
        : 'How the Central Bank (Fed) Controls the Money Supply',
      coreRule: /leverage/i.test(t)
        ? 'Financial Leverage is the use of borrowed money (debt) to finance investments and amplify the Return on Equity (ROE) for shareholders. If a firm borrows money at 6% interest (its Cost of Capital) and invests it in a factory that earns a 15% return, the extra 9% profit goes straight to the owners. However, high leverage magnifies losses and bankruptcy risk if sales drop.'
        : /money supply$/i.test(t)
        ? 'Central banks measure a nation’s money supply using two main definitions: M1 (money that can be spent immediately: paper currency, coins, checking accounts, and traveler’s checks) and M2 (everything in M1 PLUS "near money" that takes a quick step to convert into cash: savings accounts, money market accounts, and small time deposits/CDs).'
        : 'The Central Bank (such as the Federal Reserve or Bank of Ghana) controls inflation and economic growth by expanding or shrinking the money supply using three primary monetary policy tools: (1) Reserve Requirements, (2) The Discount Rate (interest rate charged to commercial banks), and (3) Open-Market Operations (buying and selling government treasury bonds).',
      whyItMatters: 'Explains the core macroeconomic and corporate finance diagrams on Slides 184, 186, and 188.',
      detailedTakeaways: [
        { label: 'Financial Leverage Rule (Slide 184)', explanation: 'Debt acts like a lever: as long as your Return on Investment exceeds the interest rate on borrowed debt (Cost of Capital), leverage boosts owner profits. If earnings fall below interest costs, leverage causes financial distress.' },
        { label: 'M1 vs. M2 Money Supply (Slide 186)', explanation: 'M1 = Instantly spendable money (cash + checking accounts). M2 = M1 + easily accessible savings (savings accounts, money market funds, small CDs).' },
        { label: '3 Central Bank Monetary Tools (Slide 188)', explanation: 'To GROW the money supply (fight recession): Lower the reserve requirement, lower the discount rate, or BUY government bonds. To SHRINK the money supply (fight inflation): Raise the reserve requirement, raise the discount rate, or SELL government bonds.' }
      ],
      examTrap: 'Exam Trap: On monetary policy exam questions, remember: when the Central Bank BUYS government bonds in Open-Market Operations, it puts cash INTO banks, which INCREASES the money supply!',
      activeRecallPrompt: {
        question: /leverage/i.test(t)
          ? 'What is financial leverage, and when does using debt benefit shareholders versus hurt them?'
          : /money supply$/i.test(t)
          ? 'What is the difference between M1 and M2 in measuring the money supply?'
          : 'What are the three tools the Central Bank (Fed) uses to control the money supply, and how does it use them to fight inflation?',
        hint: /leverage/i.test(t)
          ? 'Compare the return earned on borrowed funds against the interest rate paid.'
          : /money supply$/i.test(t)
          ? 'Instant spending money vs savings/near-money.'
          : 'Reserve requirement, discount rate, open-market operations.',
        answer: /leverage/i.test(t)
          ? 'Financial leverage is using borrowed debt to finance assets and boost Return on Equity. It benefits shareholders when the return earned on the borrowed money is higher than the interest cost of the debt, but hurts them if earnings fall below the required interest payments.'
          : /money supply$/i.test(t)
          ? 'M1 consists of money that is immediately accessible for spending (coins, paper currency, checking accounts). M2 includes all of M1 plus "near money" savings instruments (savings accounts, money market accounts, and small certificates of deposit).'
          : 'The three tools are: (1) Reserve requirements, (2) The discount rate, and (3) Open-market operations. To fight inflation (shrink the money supply), the central bank raises reserve requirements, raises the discount rate, or sells government bonds.',
        stepByStepSolution: 'Step 1: Define the core financial concept. Step 2: Break down the components or directional mechanism. Step 3: State the impact on the business or economy.'
      }
    };
  }

  // Slide 43: Basic Forms of Ownership (Overview Diagram)
  if (/^basic forms of ownership$/i.test(t)) {
    return {
      title: 'The Three Basic Forms of Business Ownership',
      coreRule: 'When launching a business, every founder must choose one of three fundamental legal structures: (1) Sole Proprietorship (1 owner, easiest to start, unlimited personal liability), (2) Partnership (2 or more co-owners pooling resources and sharing profits/liabilities), or (3) Corporation (a separate legal entity owned by shareholders with limited liability protection, but subject to double taxation).',
      whyItMatters: 'Choosing the right ownership form determines who controls the business, how taxes are paid, and whether your personal house and savings are at risk if the business fails.',
      detailedTakeaways: [
        { label: '1. Sole Proprietorship (Most Common)', explanation: 'Owned by one person. You keep all profits and make all decisions, but you have unlimited personal liability for all business debts.' },
        { label: '2. Partnership (Pooled Resources)', explanation: 'Two or more owners share capital, skills, and workload. General partners still face unlimited liability unless they form a Limited Partnership or LLP.' },
        { label: '3. Corporation (Most Revenue & Shielded Liability)', explanation: 'A state-chartered legal person separate from its owners. Shareholders enjoy limited liability (can only lose what they invested), and the company can raise vast capital by selling stock.' }
      ],
      examTrap: 'Exam Trap: In terms of sheer numbers, Sole Proprietorships are the most common form of business (~72%), but Corporations generate the vast majority (~80%+) of total business sales revenue!',
      activeRecallPrompt: {
        question: 'Compare the three basic forms of business ownership in terms of number of owners, legal liability, and ability to raise capital.',
        hint: 'Sole Proprietorship vs Partnership vs Corporation.',
        answer: '1. Sole Proprietorship: 1 owner, unlimited personal liability, hardest to raise capital. 2. Partnership: 2+ owners, shared unlimited liability for general partners, pooled partner capital. 3. Corporation: Unlimited shareholders, limited liability protection, easiest to raise large capital by issuing stock.',
        stepByStepSolution: 'Step 1: Contrast ownership count. Step 2: Contrast unlimited vs limited liability. Step 3: Contrast capital-raising power.'
      }
    };
  }

  // Slide 94: Operations Management (Overview Diagram)
  if (/^operations management$/i.test(t)) {
    return {
      title: 'Operations Management: Transforming Inputs into Goods & Services',
      coreRule: 'Operations Management is the specialized area of management that oversees the transformation process—converting inputs (land, labor, capital, raw materials, information) into finished outputs (high-quality goods and services) as efficiently and effectively as possible. It encompasses production planning, facility location/layout, inventory control, scheduling, and quality assurance.',
      whyItMatters: 'Operations is the core engine of every business—if a firm cannot produce its product reliably at competitive cost, marketing and finance cannot save it.',
      detailedTakeaways: [
        { label: 'Inputs -> Transformation -> Outputs', explanation: 'Operations takes raw resources (workers, machines, raw materials, energy) and applies conversion processes to create finished goods and services.' },
        { label: 'Manufacturing vs. Service Operations', explanation: 'Manufacturing produces tangible goods that can be stored in inventory (cars, phones); Service operations deliver intangible experiences consumed immediately (hospitals, airlines, banking).' },
        { label: 'Core Responsibilities of Operations Managers', explanation: 'Choosing facility location and layout, managing suppliers and inventory (JIT/MRP/ERP), scheduling workflows (Gantt/PERT), and enforcing quality control (TQM/Six Sigma).' }
      ],
      examTrap: 'Exam Trap: Operations Management applies to BOTH factories (goods) AND service providers (hospitals, banks, hotels, universities)—not just physical manufacturing!',
      activeRecallPrompt: {
        question: 'What is Operations Management, and what happens during the transformation process?',
        hint: 'Inputs -> Transformation/Conversion -> Outputs.',
        answer: 'Operations Management is the management function that designs and oversees the system converting organizational inputs (raw materials, labor, capital, information) into finished outputs (goods and services) that add form utility for customers.',
        stepByStepSolution: 'Step 1: Define Operations Management. Step 2: Describe the Input -> Transformation -> Output model. Step 3: Note that it applies to both goods and services.'
      }
    };
  }

  // Slide 131, 134, 150, 160: External Marketing Environment, Business Marketing, Online Retailing, Different Marketing Strategies
  if (/external marketing environment|business marketing|online retailing|different marketing strategies/i.test(t)) {
    return {
      title: /external marketing/i.test(t)
        ? 'The External Marketing Environment (5 Macro Forces)'
        : /business marketing/i.test(t)
        ? 'Business-to-Business (B2B) vs. Consumer (B2C) Marketing'
        : /online retailing/i.test(t)
        ? 'Online Retailing (E-Commerce) & Multichannel Distribution'
        : 'Modern Promotional & Marketing Strategies Overview',
      coreRule: /external marketing/i.test(t)
        ? 'Marketers must continually scan five external environmental forces outside their direct control: (1) Competitive forces (direct and indirect rivals), (2) Economic forces (inflation, interest rates, consumer income), (3) Technological forces (digital platforms, AI), (4) Socio-cultural forces (shifting demographics and lifestyles), and (5) Political-Legal/Regulatory forces (consumer protection laws).'
        : /business marketing/i.test(t)
        ? 'Business-to-Business (B2B) Marketing sells goods and services to other companies, governments, or institutions for use in their own operations or to manufacture other products—unlike B2C marketing, which sells to final household consumers. B2B markets feature fewer but much larger buyers, rational/technical purchasing committees, long-term contracts, and direct personal selling.'
        : /online retailing/i.test(t)
        ? 'Online Retailing (E-Commerce / Nonstore Retailing) allows businesses to sell directly to consumers 24/7 across the globe via websites and mobile apps without the high rent and staffing costs of physical brick-and-mortar stores. Most leading retailers today use an Omnichannel (Multichannel) strategy—combining physical stores with online ordering and home delivery.'
        : 'Successful marketers combine multiple promotional strategies tailored to their audience: Mass Advertising, Personal Selling, Sales Promotions (coupons, trade shows), Public Relations, Guerrilla Marketing (low-cost viral stunts), Word-of-Mouth, and Digital/Social Media Marketing.',
      whyItMatters: 'Unpacks the visual marketing diagrams so you can answer exam comparison questions on B2B vs. B2C, e-commerce, and environmental scanning.',
      detailedTakeaways: [
        { label: 'B2B vs. B2C Buyer Behavior (Slide 134)', explanation: 'B2C buyers make smaller, often emotional purchases for personal use; B2B buyers purchase in huge dollar volumes using professional purchasing agents who evaluate technical specifications, price, and supplier reliability.' },
        { label: 'Online Retailing Advantages & Challenges (Slide 150)', explanation: 'Pros: 24/7 global reach, low overhead, personalized recommendations. Cons: Customers cannot physically touch the product before buying, high return shipping costs, and cybersecurity/fraud risks.' },
        { label: 'Choosing the Right Marketing Strategy (Slide 160)', explanation: 'Match the strategy to the product and buyer: use B2B personal selling for expensive industrial machinery, and B2C social/guerrilla/mass promotion for everyday consumer brands.' }
      ],
      examTrap: 'Exam Trap: Remember that the B2B market is actually LARGER in total dollar volume than the B2C market because raw materials and parts are bought and sold multiple times along the supply chain before a final consumer buys the finished product!',
      activeRecallPrompt: {
        question: /business marketing/i.test(t)
          ? 'How does Business-to-Business (B2B) marketing differ from Business-to-Consumer (B2C) marketing in terms of buyer size, decision process, and promotional tools?'
          : /online retailing/i.test(t)
          ? 'What are the main advantages and disadvantages of Online Retailing compared to traditional brick-and-mortar stores?'
          : 'Identify the five external forces in the marketing environment that marketers must monitor.',
        hint: 'Think about who is buying, how they decide, and what external forces shape the market.',
        answer: /business marketing/i.test(t)
          ? 'B2B marketing involves fewer but much larger buyers, rational/technical buying committees rather than impulse buying, and relies heavily on direct personal selling rather than mass TV advertising.'
          : /online retailing/i.test(t)
          ? 'Advantages include 24/7 global customer access and lower physical store rent/overhead. Disadvantages include customers being unable to touch/try goods first, shipping/return logistics costs, and online security concerns.'
          : 'The five external marketing environment forces are Competitive, Economic, Technological, Socio-cultural (Demographic), and Political-Legal/Regulatory forces.',
        stepByStepSolution: 'Step 1: Define the marketing concept on the slide. Step 2: Contrast the key dimensions or list the core forces. Step 3: Connect to a practical business example.'
      }
    };
  }

  return null;
}
