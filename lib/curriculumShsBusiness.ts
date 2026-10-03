// Ghanaian SHS Business Elective Curriculum Topics
// 50 WASSCE-Standard Topics covering the 3 Business Elective Subjects:
// 1. Business Management (business-management): 17 topics
// 2. Costing (costing): 15 topics
// 3. Financial Accounting (financial-accounting): 18 topics

import { CurriculumTopic } from './types';

export const SHS_BUSINESS_TOPICS: CurriculumTopic[] = [
  {
    "id": "shs-bum-topic-01",
    "subjectId": "business-management",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 1,
    "title": "Nature, Scope & Purpose of Business",
    "description": "Core definitions, business objectives, functions, environmental forces (internal vs. external), and stakeholder interests in Ghana.",
    "isFreeTrial": true,
    "isVip": false,
    "keyNotes": "• Definition & Nature: Business encompasses all lawful commercial, industrial, and professional activities directed toward producing and distributing goods and services to satisfy human wants at a profit.\n• Primary Business Objectives: Profit maximization, survival and growth, market share expansion, social responsibility, and employee welfare.\n• Business Environment:\n  - Internal Environment (Controllable): Organizational culture, management structure, financial resources, human resources, physical assets.\n  - External Environment (Uncontrollable):\n    * Micro-environment: Customers, suppliers, competitors, distributors, financial institutions.\n    * Macro-environment (PESTLE): Political, Economic (inflation, exchange rates), Socio-cultural, Technological, Legal (Companies Act 2019), and Environmental factors.\n• Stakeholders in Business: Owners/shareholders, employees, customers, suppliers, government (GRA), local communities.",
    "detailedNotes": {
      "introduction": "Core definitions, business objectives, functions, environmental forces (internal vs. external), and stakeholder interests in Ghana.",
      "realWorldContext": "A retail business in Accra must navigate macro-economic fluctuations such as Cedi depreciation and fuel price adjustments.",
      "objectives": [
        "Define business and explain its primary economic and social objectives",
        "Differentiate between internal and external business environments using PESTLE analysis",
        "Evaluate competing interests among various business stakeholders"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Definition & Nature: Business encompasses all lawful commercial, industrial, and professional activities directed toward producing and distributing goods and services to satisfy human wants at a profit.\n• Primary Business Objectives: Profit maximization, survival and growth, market share expansion, social responsibility, and employee welfare.\n• Business Environment:\n  - Internal Environment (Controllable): Organizational culture, management structure, financial resources, human resources, physical assets.\n  - External Environment (Uncontrollable):\n    * Micro-environment: Customers, suppliers, competitors, distributors, financial institutions.\n    * Macro-environment (PESTLE): Political, Economic (inflation, exchange rates), Socio-cultural, Technological, Legal (Companies Act 2019), and Environmental factors.\n• Stakeholders in Business: Owners/shareholders, employees, customers, suppliers, government (GRA), local communities.",
          "bulletPoints": [
            "Definition & Nature: Business encompasses all lawful commercial, industrial, and professional activities directed toward producing and distributing goods and services to satisfy human wants at a profit.",
            "Primary Business Objectives: Profit maximization, survival and growth, market share expansion, social responsibility, and employee welfare.",
            "Business Environment:",
            "Internal Environment (Controllable): Organizational culture, management structure, financial resources, human resources, physical assets.",
            "External Environment (Uncontrollable):",
            "Stakeholders in Business: Owners/shareholders, employees, customers, suppliers, government (GRA), local communities."
          ],
          "keyTakeaway": "In WASSCE Section B, always use the PESTLE framework when asked to analyze external environmental factors influencing a business.",
          "realWorldExample": "A retail business in Accra must navigate macro-economic fluctuations such as Cedi depreciation and fuel price adjustments."
        }
      ],
      "wassceExamTips": [
        "In WASSCE Section B, always use the PESTLE framework when asked to analyze external environmental factors influencing a business."
      ],
      "summaryChecklist": [
        "Define business and explain its primary economic and social objectives",
        "Differentiate between internal and external business environments using PESTLE analysis",
        "Evaluate competing interests among various business stakeholders"
      ]
    },
    "quiz": {
      "id": "quiz-shs-bum-topic-01",
      "topicId": "shs-bum-topic-01",
      "title": "Nature, Scope & Purpose of Business Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bum-1-1",
          "quizId": "quiz-shs-bum-topic-01",
          "questionText": "Which of the following is an uncontrollable macro-environmental factor affecting businesses in Ghana?",
          "optionA": "Corporate leadership style",
          "optionB": "National inflation rate",
          "optionC": "Worker remuneration policy",
          "optionD": "Factory floor layout",
          "correctOption": "B",
          "explanation": "Inflation is a macroeconomic factor determined by the broader economy that individual businesses cannot directly control.",
          "subConcept": "Nature, Scope & Purpose of Business",
          "remediationTip": "Inflation is a macroeconomic factor determined by the broader economy that individual businesses cannot directly control."
        },
        {
          "id": "q-bum-1-2",
          "quizId": "quiz-shs-bum-topic-01",
          "questionText": "The primary long-term objective of any private commercial enterprise is:",
          "optionA": "Paying zero taxes",
          "optionB": "Survival, profitability, and sustainable growth",
          "optionC": "Maximizing import tariffs",
          "optionD": "Employing civil servants",
          "correctOption": "B",
          "explanation": "Private enterprises primarily aim to survive, generate profit, and grow market share.",
          "subConcept": "Nature, Scope & Purpose of Business",
          "remediationTip": "Private enterprises primarily aim to survive, generate profit, and grow market share."
        },
        {
          "id": "q-bum-1-3",
          "quizId": "quiz-shs-bum-topic-01",
          "questionText": "Which group of stakeholders is primarily concerned with timely payment of corporate taxes and regulatory compliance in Ghana?",
          "optionA": "Shareholders",
          "optionB": "The Government (e.g. GRA)",
          "optionC": "Competitors",
          "optionD": "Debtors",
          "correctOption": "B",
          "explanation": "The government relies on corporate compliance and tax payments to fund public infrastructure.",
          "subConcept": "Nature, Scope & Purpose of Business",
          "remediationTip": "The government relies on corporate compliance and tax payments to fund public infrastructure."
        }
      ]
    }
  },
  {
    "id": "shs-bum-topic-02",
    "subjectId": "business-management",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 2,
    "title": "Forms of Business Ownership: Sole Proprietorship & Partnership",
    "description": "Features, formation under Ghanaian law, advantages, disadvantages, the partnership deed, and grounds for dissolution.",
    "isFreeTrial": true,
    "isVip": false,
    "keyNotes": "• Sole Proprietorship:\n  - Definition: A business owned, financed, and managed by a single individual who bears all risks and retains all profits.\n  - Features: Easy formation (Registration of Business Names Act), unlimited liability (personal assets can be seized to pay business debts), lacks separate legal personality, limited capital base.\n• Partnership:\n  - Definition: A legal relationship existing between two to twenty persons carrying on business in common with a view to profit (Incorporated Private Partnerships Act, 1962).\n  - Features: Greater capital mobilization, shared decision-making, joint and several unlimited liability for general partners.\n  - Partnership Deed / Agreement: Written document governing capital contributions, profit/loss sharing ratios, interest on capital, drawings limits, and partners' salaries.\n  - Dissolution: Occurs upon bankruptcy, death or insanity of a partner, expiration of fixed term, mutual consent, or court order.",
    "detailedNotes": {
      "introduction": "Features, formation under Ghanaian law, advantages, disadvantages, the partnership deed, and grounds for dissolution.",
      "realWorldContext": "Neighborhood provision stores and beauty salons across Kumasi and Tamale operate predominantly as sole proprietorships.",
      "objectives": [
        "Compare the legal and operational features of sole proprietorships and partnerships",
        "Explain the concept and hazards of unlimited liability",
        "Draft the essential clauses required in a standard Partnership Deed"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Sole Proprietorship:\n  - Definition: A business owned, financed, and managed by a single individual who bears all risks and retains all profits.\n  - Features: Easy formation (Registration of Business Names Act), unlimited liability (personal assets can be seized to pay business debts), lacks separate legal personality, limited capital base.\n• Partnership:\n  - Definition: A legal relationship existing between two to twenty persons carrying on business in common with a view to profit (Incorporated Private Partnerships Act, 1962).\n  - Features: Greater capital mobilization, shared decision-making, joint and several unlimited liability for general partners.\n  - Partnership Deed / Agreement: Written document governing capital contributions, profit/loss sharing ratios, interest on capital, drawings limits, and partners' salaries.\n  - Dissolution: Occurs upon bankruptcy, death or insanity of a partner, expiration of fixed term, mutual consent, or court order.",
          "bulletPoints": [
            "Sole Proprietorship:",
            "Definition: A business owned, financed, and managed by a single individual who bears all risks and retains all profits.",
            "Features: Easy formation (Registration of Business Names Act), unlimited liability (personal assets can be seized to pay business debts), lacks separate legal personality, limited capital base.",
            "Partnership:",
            "Definition: A legal relationship existing between two to twenty persons carrying on business in common with a view to profit (Incorporated Private Partnerships Act, 1962).",
            "Features: Greater capital mobilization, shared decision-making, joint and several unlimited liability for general partners.",
            "Partnership Deed / Agreement: Written document governing capital contributions, profit/loss sharing ratios, interest on capital, drawings limits, and partners' salaries.",
            "Dissolution: Occurs upon bankruptcy, death or insanity of a partner, expiration of fixed term, mutual consent, or court order."
          ],
          "keyTakeaway": "In the absence of a partnership agreement, the Partnership Act states: profits and losses are shared EQUALLY, and no interest is allowed on capital.",
          "realWorldExample": "Neighborhood provision stores and beauty salons across Kumasi and Tamale operate predominantly as sole proprietorships."
        }
      ],
      "wassceExamTips": [
        "In the absence of a partnership agreement, the Partnership Act states: profits and losses are shared EQUALLY, and no interest is allowed on capital."
      ],
      "summaryChecklist": [
        "Compare the legal and operational features of sole proprietorships and partnerships",
        "Explain the concept and hazards of unlimited liability",
        "Draft the essential clauses required in a standard Partnership Deed"
      ]
    },
    "quiz": {
      "id": "quiz-shs-bum-topic-02",
      "topicId": "shs-bum-topic-02",
      "title": "Forms of Business Ownership: Sole Proprietorship & Partnership Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bum-2-1",
          "quizId": "quiz-shs-bum-topic-02",
          "questionText": "Under the Incorporated Private Partnerships Act of Ghana, what is the maximum number of partners allowed in an ordinary commercial partnership?",
          "optionA": "10",
          "optionB": "20",
          "optionC": "50",
          "optionD": "Unlimited",
          "correctOption": "B",
          "explanation": "Ordinary commercial partnerships have a statutory membership limit of 2 to 20 partners in Ghana.",
          "subConcept": "Forms of Business Ownership: Sole Proprietorship & Partnership",
          "remediationTip": "Ordinary commercial partnerships have a statutory membership limit of 2 to 20 partners in Ghana."
        },
        {
          "id": "q-bum-2-2",
          "quizId": "quiz-shs-bum-topic-02",
          "questionText": "The major operational disadvantage of both sole proprietorships and general partnerships is:",
          "optionA": "Double taxation",
          "optionB": "Unlimited liability for business debts",
          "optionC": "Excessive government auditing",
          "optionD": "Difficulty in registration",
          "correctOption": "B",
          "explanation": "Unlimited liability means owners can lose personal assets if the business cannot settle its obligations.",
          "subConcept": "Forms of Business Ownership: Sole Proprietorship & Partnership",
          "remediationTip": "Unlimited liability means owners can lose personal assets if the business cannot settle its obligations."
        },
        {
          "id": "q-bum-2-3",
          "quizId": "quiz-shs-bum-topic-02",
          "questionText": "In the absence of a written Partnership Agreement, profits and losses must be shared:",
          "optionA": "According to capital contributions",
          "optionB": "Equally among all partners",
          "optionC": "By age seniority",
          "optionD": "According to hours worked",
          "correctOption": "B",
          "explanation": "Statutory partnership law mandates equal sharing of profits and losses unless an agreement specifies otherwise.",
          "subConcept": "Forms of Business Ownership: Sole Proprietorship & Partnership",
          "remediationTip": "Statutory partnership law mandates equal sharing of profits and losses unless an agreement specifies otherwise."
        }
      ]
    }
  },
  {
    "id": "shs-bum-topic-03",
    "subjectId": "business-management",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 3,
    "title": "Limited Liability Companies & Public Enterprises",
    "description": "Companies Act 2019 (Act 992), private vs. public companies, shares, debentures, state-owned enterprises, and privatization in Ghana.",
    "isFreeTrial": true,
    "isVip": false,
    "keyNotes": "• Limited Liability Company Concept:\n  - Legal Entity Principle (Salomon v. Salomon): The company has a separate legal personality distinct from its shareholders. Can sue, be sued, own property, and enter contracts in its own name.\n  - Limited Liability: Shareholders can only lose the nominal value of their unpaid shares if the company goes into liquidation.\n• Private vs. Public Limited Company:\n  - Private Company (Ltd): 1 to 50 shareholders; restricts share transfers; cannot invite the general public to subscribe for shares; no public prospectus.\n  - Public Company (PLC): Minimum 1 shareholder, no statutory maximum; can invite public subscription; shares trade on the Ghana Stock Exchange (GSE).\n• Public Enterprises (SOEs):\n  - State-owned corporations established by Acts of Parliament (e.g. ECG, Ghana Water Company, VRA) to provide essential public utilities, avoid private monopoly exploitation, and spearhead capital-intensive development.\n  - Privatization / Divestiture: Selling state enterprises to private investors to eliminate fiscal drain and improve operational efficiency.",
    "detailedNotes": {
      "introduction": "Companies Act 2019 (Act 992), private vs. public companies, shares, debentures, state-owned enterprises, and privatization in Ghana.",
      "realWorldContext": "MTN Ghana converted from a private company into a Public Limited Company (PLC) in 2018, floating shares to thousands of Ghanaian retail investors.",
      "objectives": [
        "Analyze the legal doctrine of separate corporate personality and limited liability",
        "Distinguish between Private Limited Companies (Ltd) and Public Limited Companies (PLC)",
        "Evaluate the rationale for public state enterprises and the impact of privatization in Ghana"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Limited Liability Company Concept:\n  - Legal Entity Principle (Salomon v. Salomon): The company has a separate legal personality distinct from its shareholders. Can sue, be sued, own property, and enter contracts in its own name.\n  - Limited Liability: Shareholders can only lose the nominal value of their unpaid shares if the company goes into liquidation.\n• Private vs. Public Limited Company:\n  - Private Company (Ltd): 1 to 50 shareholders; restricts share transfers; cannot invite the general public to subscribe for shares; no public prospectus.\n  - Public Company (PLC): Minimum 1 shareholder, no statutory maximum; can invite public subscription; shares trade on the Ghana Stock Exchange (GSE).\n• Public Enterprises (SOEs):\n  - State-owned corporations established by Acts of Parliament (e.g. ECG, Ghana Water Company, VRA) to provide essential public utilities, avoid private monopoly exploitation, and spearhead capital-intensive development.\n  - Privatization / Divestiture: Selling state enterprises to private investors to eliminate fiscal drain and improve operational efficiency.",
          "bulletPoints": [
            "Limited Liability Company Concept:",
            "Legal Entity Principle (Salomon v. Salomon): The company has a separate legal personality distinct from its shareholders. Can sue, be sued, own property, and enter contracts in its own name.",
            "Limited Liability: Shareholders can only lose the nominal value of their unpaid shares if the company goes into liquidation.",
            "Private vs. Public Limited Company:",
            "Private Company (Ltd): 1 to 50 shareholders; restricts share transfers; cannot invite the general public to subscribe for shares; no public prospectus.",
            "Public Company (PLC): Minimum 1 shareholder, no statutory maximum; can invite public subscription; shares trade on the Ghana Stock Exchange (GSE).",
            "Public Enterprises (SOEs):",
            "State-owned corporations established by Acts of Parliament (e.g. ECG, Ghana Water Company, VRA) to provide essential public utilities, avoid private monopoly exploitation, and spearhead capital-intensive development.",
            "Privatization / Divestiture: Selling state enterprises to private investors to eliminate fiscal drain and improve operational efficiency."
          ],
          "keyTakeaway": "Remember: Debenture holders are creditors (they receive fixed interest regardless of profit), while shareholders are owners (they receive variable dividends).",
          "realWorldExample": "MTN Ghana converted from a private company into a Public Limited Company (PLC) in 2018, floating shares to thousands of Ghanaian retail investors."
        }
      ],
      "wassceExamTips": [
        "Remember: Debenture holders are creditors (they receive fixed interest regardless of profit), while shareholders are owners (they receive variable dividends)."
      ],
      "summaryChecklist": [
        "Analyze the legal doctrine of separate corporate personality and limited liability",
        "Distinguish between Private Limited Companies (Ltd) and Public Limited Companies (PLC)",
        "Evaluate the rationale for public state enterprises and the impact of privatization in Ghana"
      ]
    },
    "quiz": {
      "id": "quiz-shs-bum-topic-03",
      "topicId": "shs-bum-topic-03",
      "title": "Limited Liability Companies & Public Enterprises Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bum-3-1",
          "quizId": "quiz-shs-bum-topic-03",
          "questionText": "The fundamental legal characteristic of a registered company established by Salomon v. Salomon is that the company:",
          "optionA": "Cannot be sued in court",
          "optionB": "Has a separate legal personality distinct from its owners",
          "optionC": "Does not pay corporate tax",
          "optionD": "Cannot borrow money from banks",
          "correctOption": "B",
          "explanation": "Separate legal personality means the company is an independent legal entity from its shareholders.",
          "subConcept": "Limited Liability Companies & Public Enterprises",
          "remediationTip": "Separate legal personality means the company is an independent legal entity from its shareholders."
        },
        {
          "id": "q-bum-3-2",
          "quizId": "quiz-shs-bum-topic-03",
          "questionText": "A major difference between a private limited company and a public limited company in Ghana is that the private company:",
          "optionA": "Cannot issue shares to the general public",
          "optionB": "Has unlimited liability",
          "optionC": "Must be owned exclusively by the government",
          "optionD": "Has no board of directors",
          "correctOption": "A",
          "explanation": "Private limited companies are legally prohibited from advertising or offering shares to the public.",
          "subConcept": "Limited Liability Companies & Public Enterprises",
          "remediationTip": "Private limited companies are legally prohibited from advertising or offering shares to the public."
        },
        {
          "id": "q-bum-3-3",
          "quizId": "quiz-shs-bum-topic-03",
          "questionText": "Which type of corporate security gives the holder the status of a creditor entitled to fixed interest rather than an owner?",
          "optionA": "Ordinary share",
          "optionB": "Debenture",
          "optionC": "Preference share",
          "optionD": "Bonus share",
          "correctOption": "B",
          "explanation": "Debentures represent long-term loan capital; holders are creditors entitled to contractual interest.",
          "subConcept": "Limited Liability Companies & Public Enterprises",
          "remediationTip": "Debentures represent long-term loan capital; holders are creditors entitled to contractual interest."
        }
      ]
    }
  },
  {
    "id": "shs-bum-topic-04",
    "subjectId": "business-management",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 4,
    "title": "Cooperative Societies & Joint Ventures",
    "description": "Rochdale principles, consumer and producer cooperatives, credit unions, joint ventures, strategic alliances, and mergers.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Cooperative Societies:\n  - Definition: An autonomous voluntary association of persons united to meet their common economic, social, and cultural needs through a jointly owned and democratically controlled enterprise.\n  - Rochdale Principles: Open and voluntary membership, democratic control (one member, one vote regardless of shares), dividend based on patronage (purchases made), limited interest on share capital.\n  - Major Types:\n    * Agricultural / Producer Cooperatives (e.g. Kuapa Kokoo in Ghana).\n    * Credit Unions / Cooperative Credit Societies (promoting savings and soft loans for artisans and teachers).\n    * Consumer Cooperatives (wholesaling to members at affordable prices).\n• Joint Ventures & Strategic Alliances:\n  - Joint Venture: Two or more independent firms pool resources to undertake a specific business project or establish a new entity while retaining their independent identities.\n  - Merger: Complete union of two companies into a single new commercial entity.",
    "detailedNotes": {
      "introduction": "Rochdale principles, consumer and producer cooperatives, credit unions, joint ventures, strategic alliances, and mergers.",
      "realWorldContext": "Kuapa Kokoo is a renowned Ghanaian cocoa farmers' cooperative that established Divine Chocolate in the UK to market fair-trade cocoa products.",
      "objectives": [
        "Examine the foundational principles of cooperative organizations (one member, one vote)",
        "Assess the contributions of cocoa farmer cooperatives and credit unions in Ghana",
        "Explain the operational reasons why multinational corporations form joint ventures with local Ghanaian firms"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Cooperative Societies:\n  - Definition: An autonomous voluntary association of persons united to meet their common economic, social, and cultural needs through a jointly owned and democratically controlled enterprise.\n  - Rochdale Principles: Open and voluntary membership, democratic control (one member, one vote regardless of shares), dividend based on patronage (purchases made), limited interest on share capital.\n  - Major Types:\n    * Agricultural / Producer Cooperatives (e.g. Kuapa Kokoo in Ghana).\n    * Credit Unions / Cooperative Credit Societies (promoting savings and soft loans for artisans and teachers).\n    * Consumer Cooperatives (wholesaling to members at affordable prices).\n• Joint Ventures & Strategic Alliances:\n  - Joint Venture: Two or more independent firms pool resources to undertake a specific business project or establish a new entity while retaining their independent identities.\n  - Merger: Complete union of two companies into a single new commercial entity.",
          "bulletPoints": [
            "Cooperative Societies:",
            "Definition: An autonomous voluntary association of persons united to meet their common economic, social, and cultural needs through a jointly owned and democratically controlled enterprise.",
            "Rochdale Principles: Open and voluntary membership, democratic control (one member, one vote regardless of shares), dividend based on patronage (purchases made), limited interest on share capital.",
            "Major Types:",
            "Joint Ventures & Strategic Alliances:",
            "Joint Venture: Two or more independent firms pool resources to undertake a specific business project or establish a new entity while retaining their independent identities.",
            "Merger: Complete union of two companies into a single new commercial entity."
          ],
          "keyTakeaway": "In cooperatives, voting power is democratic: ONE PERSON, ONE VOTE. In limited companies, voting power is financial: ONE SHARE, ONE VOTE.",
          "realWorldExample": "Kuapa Kokoo is a renowned Ghanaian cocoa farmers' cooperative that established Divine Chocolate in the UK to market fair-trade cocoa products."
        }
      ],
      "wassceExamTips": [
        "In cooperatives, voting power is democratic: ONE PERSON, ONE VOTE. In limited companies, voting power is financial: ONE SHARE, ONE VOTE."
      ],
      "summaryChecklist": [
        "Examine the foundational principles of cooperative organizations (one member, one vote)",
        "Assess the contributions of cocoa farmer cooperatives and credit unions in Ghana",
        "Explain the operational reasons why multinational corporations form joint ventures with local Ghanaian firms"
      ]
    },
    "quiz": {
      "id": "quiz-shs-bum-topic-04",
      "topicId": "shs-bum-topic-04",
      "title": "Cooperative Societies & Joint Ventures Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bum-4-1",
          "quizId": "quiz-shs-bum-topic-04",
          "questionText": "Under international cooperative principles, voting power at annual general meetings is exercised on the basis of:",
          "optionA": "The total value of shares owned",
          "optionB": "One member, one vote regardless of share capital held",
          "optionC": "Age and traditional status",
          "optionD": "Level of formal education",
          "correctOption": "B",
          "explanation": "Cooperatives are democratic institutions where every member possesses exactly one vote.",
          "subConcept": "Cooperative Societies & Joint Ventures",
          "remediationTip": "Cooperatives are democratic institutions where every member possesses exactly one vote."
        },
        {
          "id": "q-bum-4-2",
          "quizId": "quiz-shs-bum-topic-04",
          "questionText": "A business arrangement where two independent companies pool capital and technology to execute a specific project is a:",
          "optionA": "Sole proprietorship",
          "optionB": "Joint venture",
          "optionC": "Cartel",
          "optionD": "Public corporation",
          "correctOption": "B",
          "explanation": "A joint venture combines resources of two or more independent firms for a shared business venture.",
          "subConcept": "Cooperative Societies & Joint Ventures",
          "remediationTip": "A joint venture combines resources of two or more independent firms for a shared business venture."
        },
        {
          "id": "q-bum-4-3",
          "quizId": "quiz-shs-bum-topic-04",
          "questionText": "In a cooperative society, surplus earnings are primarily distributed to members in the form of a:",
          "optionA": "Capital dividend",
          "optionB": "Patronage dividend based on level of transactions",
          "optionC": "Government pension",
          "optionD": "Stock option",
          "correctOption": "B",
          "explanation": "Patronage refund/dividend rewards members in proportion to their purchases or sales through the cooperative.",
          "subConcept": "Cooperative Societies & Joint Ventures",
          "remediationTip": "Patronage refund/dividend rewards members in proportion to their purchases or sales through the cooperative."
        }
      ]
    }
  },
  {
    "id": "shs-bum-topic-05",
    "subjectId": "business-management",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 5,
    "title": "Principles of Management & Administrative Theories",
    "description": "Henri Fayol's 14 administrative principles, F.W. Taylor's scientific management, Max Weber's bureaucracy, and modern management thought.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Henri Fayol's Administrative Management:\n  - Defined the 5 functions of management: Planning, Organizing, Commanding, Coordinating, and Controlling (POCCC).\n  - Fayol's 14 Principles of Management:\n    1. Division of Labor (Specialization increases efficiency)\n    2. Authority and Responsibility (Power matched with accountability)\n    3. Discipline (Obedience to organizational rules)\n    4. Unity of Command (An employee must receive orders from only ONE superior)\n    5. Unity of Direction (One head and one plan for a group of activities with the same objective)\n    6. Subordination of Individual Interest to General Interest\n    7. Remuneration (Fair compensation for employees and employer)\n    8. Centralization vs. Decentralization\n    9. Scalar Chain (Hierarchy of authority; 'gangplank' for emergency lateral communication)\n    10. Order (A place for everything and everything in its place)\n    11. Equity (Kindness and justice toward subordinates)\n    12. Stability of Tenure (Low turnover enhances stability)\n    13. Initiative (Encouraging creative thought and execution)\n    14. Esprit de Corps (Promoting team harmony and unity).\n• Scientific Management (Frederick Winslow Taylor): Time and motion studies, standardizing tools, differential piece-rate pay to eliminate soldiering.\n• Bureaucratic Model (Max Weber): Hierarchy, formal rules, meritocratic selection, impersonality.",
    "detailedNotes": {
      "introduction": "Henri Fayol's 14 administrative principles, F.W. Taylor's scientific management, Max Weber's bureaucracy, and modern management thought.",
      "realWorldContext": "Ghanaian banks and government ministries use scalar chain structures and formal Weberian rules to process transactions transparently.",
      "objectives": [
        "Examine Henri Fayol's 14 universal principles of administrative management",
        "Contrast Unity of Command with Unity of Direction",
        "Evaluate F.W. Taylor's Scientific Management and Max Weber's Bureaucratic model"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Henri Fayol's Administrative Management:\n  - Defined the 5 functions of management: Planning, Organizing, Commanding, Coordinating, and Controlling (POCCC).\n  - Fayol's 14 Principles of Management:\n    1. Division of Labor (Specialization increases efficiency)\n    2. Authority and Responsibility (Power matched with accountability)\n    3. Discipline (Obedience to organizational rules)\n    4. Unity of Command (An employee must receive orders from only ONE superior)\n    5. Unity of Direction (One head and one plan for a group of activities with the same objective)\n    6. Subordination of Individual Interest to General Interest\n    7. Remuneration (Fair compensation for employees and employer)\n    8. Centralization vs. Decentralization\n    9. Scalar Chain (Hierarchy of authority; 'gangplank' for emergency lateral communication)\n    10. Order (A place for everything and everything in its place)\n    11. Equity (Kindness and justice toward subordinates)\n    12. Stability of Tenure (Low turnover enhances stability)\n    13. Initiative (Encouraging creative thought and execution)\n    14. Esprit de Corps (Promoting team harmony and unity).\n• Scientific Management (Frederick Winslow Taylor): Time and motion studies, standardizing tools, differential piece-rate pay to eliminate soldiering.\n• Bureaucratic Model (Max Weber): Hierarchy, formal rules, meritocratic selection, impersonality.",
          "bulletPoints": [
            "Henri Fayol's Administrative Management:",
            "Defined the 5 functions of management: Planning, Organizing, Commanding, Coordinating, and Controlling (POCCC).",
            "Fayol's 14 Principles of Management:",
            "Scientific Management (Frederick Winslow Taylor): Time and motion studies, standardizing tools, differential piece-rate pay to eliminate soldiering.",
            "Bureaucratic Model (Max Weber): Hierarchy, formal rules, meritocratic selection, impersonality."
          ],
          "keyTakeaway": "Crucial distinction: Unity of Command = one employee, ONE boss. Unity of Direction = one team, ONE overall plan.",
          "realWorldExample": "Ghanaian banks and government ministries use scalar chain structures and formal Weberian rules to process transactions transparently."
        }
      ],
      "wassceExamTips": [
        "Crucial distinction: Unity of Command = one employee, ONE boss. Unity of Direction = one team, ONE overall plan."
      ],
      "summaryChecklist": [
        "Examine Henri Fayol's 14 universal principles of administrative management",
        "Contrast Unity of Command with Unity of Direction",
        "Evaluate F.W. Taylor's Scientific Management and Max Weber's Bureaucratic model"
      ]
    },
    "quiz": {
      "id": "quiz-shs-bum-topic-05",
      "topicId": "shs-bum-topic-05",
      "title": "Principles of Management & Administrative Theories Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bum-5-1",
          "quizId": "quiz-shs-bum-topic-05",
          "questionText": "Henri Fayol's principle stating that an employee should receive orders and instructions from only ONE supervisor is:",
          "optionA": "Unity of direction",
          "optionB": "Unity of command",
          "optionC": "Scalar chain",
          "optionD": "Division of labor",
          "correctOption": "B",
          "explanation": "Unity of command prevents conflicting orders and confusion by ensuring each subordinate reports to a single boss.",
          "subConcept": "Principles of Management & Administrative Theories",
          "remediationTip": "Unity of command prevents conflicting orders and confusion by ensuring each subordinate reports to a single boss."
        },
        {
          "id": "q-bum-5-2",
          "quizId": "quiz-shs-bum-topic-05",
          "questionText": "The management pioneer who advocated for time-and-motion studies and the \"one best way\" of doing work was:",
          "optionA": "Henri Fayol",
          "optionB": "Frederick Winslow Taylor",
          "optionC": "Max Weber",
          "optionD": "Elton Mayo",
          "correctOption": "B",
          "explanation": "F.W. Taylor pioneered Scientific Management using scientific observation and timing of work tasks.",
          "subConcept": "Principles of Management & Administrative Theories",
          "remediationTip": "F.W. Taylor pioneered Scientific Management using scientific observation and timing of work tasks."
        },
        {
          "id": "q-bum-5-3",
          "quizId": "quiz-shs-bum-topic-05",
          "questionText": "The hierarchical line of authority running from the highest executive to the lowest ranks in an organization is the:",
          "optionA": "Span of control",
          "optionB": "Scalar chain",
          "optionC": "Gangplank",
          "optionD": "Informal network",
          "correctOption": "B",
          "explanation": "The scalar chain represents the formal chain of command linking every level of the administrative hierarchy.",
          "subConcept": "Principles of Management & Administrative Theories",
          "remediationTip": "The scalar chain represents the formal chain of command linking every level of the administrative hierarchy."
        }
      ]
    }
  },
  {
    "id": "shs-bum-topic-06",
    "subjectId": "business-management",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 6,
    "title": "Management Functions: Planning & Decision Making",
    "description": "The planning hierarchy (strategic, tactical, operational), the planning process, MBO, SWOT analysis, and the decision-making cycle.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Planning Defined: Deciding in advance what to do, how to do it, when to do it, and who is to do it. Bridges the gap between where we are and where we want to go.\n• Levels of Planning:\n  - Strategic Planning: Long-term (3–5+ years), formulated by top management; sets organizational mission, vision, and broad corporate goals.\n  - Tactical / Intermediate Planning: Medium-term (1–2 years), undertaken by middle management; translates corporate goals into departmental targets.\n  - Operational Planning: Short-term (daily, weekly, monthly), developed by lower-level frontline supervisors; focuses on routine schedules and budgets.\n• The Systematic Planning Process:\n  1. Setting organizational objectives.\n  2. Environmental scanning (SWOT: Strengths, Weaknesses, Opportunities, Threats).\n  3. Formulating alternative courses of action.\n  4. Evaluating alternatives based on feasibility and cost.\n  5. Selecting the best course of action.\n  6. Implementing the chosen plan and establishing feedback control.\n• Rational Decision-Making Process: Identifying problem -> diagnosing root causes -> developing options -> evaluating -> choosing -> executing -> monitoring results.",
    "detailedNotes": {
      "introduction": "The planning hierarchy (strategic, tactical, operational), the planning process, MBO, SWOT analysis, and the decision-making cycle.",
      "realWorldContext": "A Ghanaian telecommunications company scanning competitor 5G rollouts and spectrum licensing uses strategic planning and SWOT analysis.",
      "objectives": [
        "Distinguish between strategic, tactical, and operational planning horizons",
        "Execute a comprehensive SWOT analysis for a Ghanaian commercial enterprise",
        "Apply the sequential steps in rational managerial decision-making"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Planning Defined: Deciding in advance what to do, how to do it, when to do it, and who is to do it. Bridges the gap between where we are and where we want to go.\n• Levels of Planning:\n  - Strategic Planning: Long-term (3–5+ years), formulated by top management; sets organizational mission, vision, and broad corporate goals.\n  - Tactical / Intermediate Planning: Medium-term (1–2 years), undertaken by middle management; translates corporate goals into departmental targets.\n  - Operational Planning: Short-term (daily, weekly, monthly), developed by lower-level frontline supervisors; focuses on routine schedules and budgets.\n• The Systematic Planning Process:\n  1. Setting organizational objectives.\n  2. Environmental scanning (SWOT: Strengths, Weaknesses, Opportunities, Threats).\n  3. Formulating alternative courses of action.\n  4. Evaluating alternatives based on feasibility and cost.\n  5. Selecting the best course of action.\n  6. Implementing the chosen plan and establishing feedback control.\n• Rational Decision-Making Process: Identifying problem -> diagnosing root causes -> developing options -> evaluating -> choosing -> executing -> monitoring results.",
          "bulletPoints": [
            "Planning Defined: Deciding in advance what to do, how to do it, when to do it, and who is to do it. Bridges the gap between where we are and where we want to go.",
            "Levels of Planning:",
            "Strategic Planning: Long-term (3–5+ years), formulated by top management; sets organizational mission, vision, and broad corporate goals.",
            "Tactical / Intermediate Planning: Medium-term (1–2 years), undertaken by middle management; translates corporate goals into departmental targets.",
            "Operational Planning: Short-term (daily, weekly, monthly), developed by lower-level frontline supervisors; focuses on routine schedules and budgets.",
            "The Systematic Planning Process:",
            "Rational Decision-Making Process: Identifying problem -> diagnosing root causes -> developing options -> evaluating -> choosing -> executing -> monitoring results."
          ],
          "keyTakeaway": "SWOT analysis: Strengths and Weaknesses are INTERNAL to the firm; Opportunities and Threats are EXTERNAL in the environment.",
          "realWorldExample": "A Ghanaian telecommunications company scanning competitor 5G rollouts and spectrum licensing uses strategic planning and SWOT analysis."
        }
      ],
      "wassceExamTips": [
        "SWOT analysis: Strengths and Weaknesses are INTERNAL to the firm; Opportunities and Threats are EXTERNAL in the environment."
      ],
      "summaryChecklist": [
        "Distinguish between strategic, tactical, and operational planning horizons",
        "Execute a comprehensive SWOT analysis for a Ghanaian commercial enterprise",
        "Apply the sequential steps in rational managerial decision-making"
      ]
    },
    "quiz": {
      "id": "quiz-shs-bum-topic-06",
      "topicId": "shs-bum-topic-06",
      "title": "Management Functions: Planning & Decision Making Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bum-6-1",
          "quizId": "quiz-shs-bum-topic-06",
          "questionText": "Long-term planning (3 to 5 years or more) that determines the overall direction and mission of an enterprise is termed:",
          "optionA": "Operational planning",
          "optionB": "Tactical planning",
          "optionC": "Strategic planning",
          "optionD": "Contingency planning",
          "correctOption": "C",
          "explanation": "Strategic planning is undertaken by top management to chart the long-term competitive path of the firm.",
          "subConcept": "Management Functions: Planning & Decision Making",
          "remediationTip": "Strategic planning is undertaken by top management to chart the long-term competitive path of the firm."
        },
        {
          "id": "q-bum-6-2",
          "quizId": "quiz-shs-bum-topic-06",
          "questionText": "In a SWOT analysis, which two components represent internal factors within the direct control of the enterprise?",
          "optionA": "Strengths and Weaknesses",
          "optionB": "Opportunities and Threats",
          "optionC": "Strengths and Opportunities",
          "optionD": "Weaknesses and Threats",
          "correctOption": "A",
          "explanation": "Strengths and weaknesses arise within the organization; opportunities and threats originate outside in the market.",
          "subConcept": "Management Functions: Planning & Decision Making",
          "remediationTip": "Strengths and weaknesses arise within the organization; opportunities and threats originate outside in the market."
        },
        {
          "id": "q-bum-6-3",
          "quizId": "quiz-shs-bum-topic-06",
          "questionText": "The first logical step in the rational managerial decision-making process is:",
          "optionA": "Selecting the cheapest option",
          "optionB": "Identifying and defining the specific problem",
          "optionC": "Dismissing non-performing staff",
          "optionD": "Borrowing bank capital",
          "correctOption": "B",
          "explanation": "Decision making begins with accurately diagnosing and defining the specific problem requiring a solution.",
          "subConcept": "Management Functions: Planning & Decision Making",
          "remediationTip": "Decision making begins with accurately diagnosing and defining the specific problem requiring a solution."
        }
      ]
    }
  },
  {
    "id": "shs-bum-topic-07",
    "subjectId": "business-management",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 7,
    "title": "Organizing & Organizational Structures",
    "description": "Organizational charts, line vs. staff vs. functional structures, span of control, delegation of authority, centralization vs. decentralization.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• The Organizing Function: Grouping business activities, defining job roles, allocating resources, and establishing authority relationships to accomplish plans.\n• Key Organizational Concepts:\n  - Span of Control: The number of subordinates a manager can effectively supervise. Wide span (flat structure, few levels) vs. Narrow span (tall structure, many levels).\n  - Chain of Command: The unbroken line of authority extending from top to bottom.\n  - Delegation of Authority: The downward transfer of formal authority from superior to subordinate. Three Elements: Responsibility (duty), Authority (power to act), Accountability (answering for results). Note: Accountability CANNOT be delegated!\n  - Centralization vs. Decentralization:\n    * Centralization: Decision-making retained at top management headquarters.\n    * Decentralization: Systematic dispersal of decision-making authority to lower management and regional branches.\n• Organizational Structures:\n  - Line Organization: Direct vertical line of authority from manager to worker.\n  - Line and Staff: Line managers exercise command; staff specialists provide advisory support.\n  - Functional Structure: Grouped by specialization (Marketing, Finance, HR, Production).",
    "detailedNotes": {
      "introduction": "Organizational charts, line vs. staff vs. functional structures, span of control, delegation of authority, centralization vs. decentralization.",
      "realWorldContext": "Ghana Commercial Bank (GCB) delegates routine loan approvals to regional branch managers through decentralization to speed up customer service.",
      "objectives": [
        "Design organizational charts showing line, functional, and committee relationships",
        "Evaluate factors determining the span of control in an enterprise",
        "Analyze the principles and barriers to effective delegation of authority"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• The Organizing Function: Grouping business activities, defining job roles, allocating resources, and establishing authority relationships to accomplish plans.\n• Key Organizational Concepts:\n  - Span of Control: The number of subordinates a manager can effectively supervise. Wide span (flat structure, few levels) vs. Narrow span (tall structure, many levels).\n  - Chain of Command: The unbroken line of authority extending from top to bottom.\n  - Delegation of Authority: The downward transfer of formal authority from superior to subordinate. Three Elements: Responsibility (duty), Authority (power to act), Accountability (answering for results). Note: Accountability CANNOT be delegated!\n  - Centralization vs. Decentralization:\n    * Centralization: Decision-making retained at top management headquarters.\n    * Decentralization: Systematic dispersal of decision-making authority to lower management and regional branches.\n• Organizational Structures:\n  - Line Organization: Direct vertical line of authority from manager to worker.\n  - Line and Staff: Line managers exercise command; staff specialists provide advisory support.\n  - Functional Structure: Grouped by specialization (Marketing, Finance, HR, Production).",
          "bulletPoints": [
            "The Organizing Function: Grouping business activities, defining job roles, allocating resources, and establishing authority relationships to accomplish plans.",
            "Key Organizational Concepts:",
            "Span of Control: The number of subordinates a manager can effectively supervise. Wide span (flat structure, few levels) vs. Narrow span (tall structure, many levels).",
            "Chain of Command: The unbroken line of authority extending from top to bottom.",
            "Delegation of Authority: The downward transfer of formal authority from superior to subordinate. Three Elements: Responsibility (duty), Authority (power to act), Accountability (answering for results). Note: Accountability CANNOT be delegated!",
            "Centralization vs. Decentralization:",
            "Organizational Structures:",
            "Line Organization: Direct vertical line of authority from manager to worker.",
            "Line and Staff: Line managers exercise command; staff specialists provide advisory support.",
            "Functional Structure: Grouped by specialization (Marketing, Finance, HR, Production)."
          ],
          "keyTakeaway": "Remember the classic WASSCE rule: Authority can be delegated, but ultimate accountability always remains with the delegating manager!",
          "realWorldExample": "Ghana Commercial Bank (GCB) delegates routine loan approvals to regional branch managers through decentralization to speed up customer service."
        }
      ],
      "wassceExamTips": [
        "Remember the classic WASSCE rule: Authority can be delegated, but ultimate accountability always remains with the delegating manager!"
      ],
      "summaryChecklist": [
        "Design organizational charts showing line, functional, and committee relationships",
        "Evaluate factors determining the span of control in an enterprise",
        "Analyze the principles and barriers to effective delegation of authority"
      ]
    },
    "quiz": {
      "id": "quiz-shs-bum-topic-07",
      "topicId": "shs-bum-topic-07",
      "title": "Organizing & Organizational Structures Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bum-7-1",
          "quizId": "quiz-shs-bum-topic-07",
          "questionText": "The number of subordinates who report directly to a single manager or supervisor is referred to as the:",
          "optionA": "Scalar chain",
          "optionB": "Span of control",
          "optionC": "Division of labor",
          "optionD": "Line authority",
          "correctOption": "B",
          "explanation": "Span of control defines the direct supervisory capacity of a manager.",
          "subConcept": "Organizing & Organizational Structures",
          "remediationTip": "Span of control defines the direct supervisory capacity of a manager."
        },
        {
          "id": "q-bum-7-2",
          "quizId": "quiz-shs-bum-topic-07",
          "questionText": "Which element of the delegation process cannot be abdicated or transferred away by the manager?",
          "optionA": "Routine clerical duties",
          "optionB": "Ultimate accountability for outcomes",
          "optionC": "Physical office space",
          "optionD": "Technical tasks",
          "correctOption": "B",
          "explanation": "While tasks and authority are delegated, the manager retains final accountability to their own superiors.",
          "subConcept": "Organizing & Organizational Structures",
          "remediationTip": "While tasks and authority are delegated, the manager retains final accountability to their own superiors."
        },
        {
          "id": "q-bum-7-3",
          "quizId": "quiz-shs-bum-topic-07",
          "questionText": "An organizational structure where staff specialists provide expert technical advice without direct command over line workers is a:",
          "optionA": "Pure line structure",
          "optionB": "Line and staff structure",
          "optionC": "Sole proprietorship",
          "optionD": "Informal syndicate",
          "correctOption": "B",
          "explanation": "In line and staff organization, staff officers advise and assist, while line managers command.",
          "subConcept": "Organizing & Organizational Structures",
          "remediationTip": "In line and staff organization, staff officers advise and assist, while line managers command."
        }
      ]
    }
  },
  {
    "id": "shs-bum-topic-08",
    "subjectId": "business-management",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 8,
    "title": "Staffing & Human Resource Management",
    "description": "Recruitment (internal vs. external), selection process, orientation, training and development, performance appraisal, and compensation.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Human Resource Management (HRM): The managerial process of acquiring, developing, motivating, and retaining the human talent required to achieve business goals.\n• Recruitment: Attracting a pool of qualified job applicants.\n  - Internal Recruitment (promotions, transfers): Boosts morale, cheaper, candidate is already known; risk of inbreeding and jealousy.\n  - External Recruitment (advertisements, employment agencies, universities): Injects fresh ideas; more expensive, requires extensive onboarding.\n• The Selection Process: Scrutinizing CVs/applications -> shortlisting -> employment interviews -> aptitude/skill testing -> background reference checks -> medical examination -> formal job offer.\n• Training vs. Development:\n  - Training: Teaching specific operational skills for current job performance (on-the-job: apprenticeship, job rotation; off-the-job: lectures, simulations).\n  - Development: Broad educational preparation for future managerial leadership roles.\n• Performance Appraisal: Systematic evaluation of an employee's job performance against established standards for promotions, salary reviews, and training needs.",
    "detailedNotes": {
      "introduction": "Recruitment (internal vs. external), selection process, orientation, training and development, performance appraisal, and compensation.",
      "realWorldContext": "Multinational firms in Ghana recruit through LinkedIn and competitive campus recruitment drives at UG Legon and KNUST.",
      "objectives": [
        "Compare the advantages and disadvantages of internal versus external recruitment",
        "Outline the sequential stages of the employee selection procedure",
        "Explain the methods and benefits of systematic performance appraisal"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Human Resource Management (HRM): The managerial process of acquiring, developing, motivating, and retaining the human talent required to achieve business goals.\n• Recruitment: Attracting a pool of qualified job applicants.\n  - Internal Recruitment (promotions, transfers): Boosts morale, cheaper, candidate is already known; risk of inbreeding and jealousy.\n  - External Recruitment (advertisements, employment agencies, universities): Injects fresh ideas; more expensive, requires extensive onboarding.\n• The Selection Process: Scrutinizing CVs/applications -> shortlisting -> employment interviews -> aptitude/skill testing -> background reference checks -> medical examination -> formal job offer.\n• Training vs. Development:\n  - Training: Teaching specific operational skills for current job performance (on-the-job: apprenticeship, job rotation; off-the-job: lectures, simulations).\n  - Development: Broad educational preparation for future managerial leadership roles.\n• Performance Appraisal: Systematic evaluation of an employee's job performance against established standards for promotions, salary reviews, and training needs.",
          "bulletPoints": [
            "Human Resource Management (HRM): The managerial process of acquiring, developing, motivating, and retaining the human talent required to achieve business goals.",
            "Recruitment: Attracting a pool of qualified job applicants.",
            "Internal Recruitment (promotions, transfers): Boosts morale, cheaper, candidate is already known; risk of inbreeding and jealousy.",
            "External Recruitment (advertisements, employment agencies, universities): Injects fresh ideas; more expensive, requires extensive onboarding.",
            "The Selection Process: Scrutinizing CVs/applications -> shortlisting -> employment interviews -> aptitude/skill testing -> background reference checks -> medical examination -> formal job offer.",
            "Training vs. Development:",
            "Training: Teaching specific operational skills for current job performance (on-the-job: apprenticeship, job rotation; off-the-job: lectures, simulations).",
            "Development: Broad educational preparation for future managerial leadership roles.",
            "Performance Appraisal: Systematic evaluation of an employee's job performance against established standards for promotions, salary reviews, and training needs."
          ],
          "keyTakeaway": "Do not confuse recruitment (attracting applicants) with selection (picking the best candidate from the applicant pool).",
          "realWorldExample": "Multinational firms in Ghana recruit through LinkedIn and competitive campus recruitment drives at UG Legon and KNUST."
        }
      ],
      "wassceExamTips": [
        "Do not confuse recruitment (attracting applicants) with selection (picking the best candidate from the applicant pool)."
      ],
      "summaryChecklist": [
        "Compare the advantages and disadvantages of internal versus external recruitment",
        "Outline the sequential stages of the employee selection procedure",
        "Explain the methods and benefits of systematic performance appraisal"
      ]
    },
    "quiz": {
      "id": "quiz-shs-bum-topic-08",
      "topicId": "shs-bum-topic-08",
      "title": "Staffing & Human Resource Management Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bum-8-1",
          "quizId": "quiz-shs-bum-topic-08",
          "questionText": "The process of attracting a pool of qualified applicants to apply for job vacancies in an organization is:",
          "optionA": "Recruitment",
          "optionB": "Selection",
          "optionC": "Orientation",
          "optionD": "Appraisal",
          "correctOption": "A",
          "explanation": "Recruitment involves generating and attracting candidates; selection chooses the best fit.",
          "subConcept": "Staffing & Human Resource Management",
          "remediationTip": "Recruitment involves generating and attracting candidates; selection chooses the best fit."
        },
        {
          "id": "q-bum-8-2",
          "quizId": "quiz-shs-bum-topic-08",
          "questionText": "A major disadvantage of relying exclusively on internal recruitment to fill executive vacancies is:",
          "optionA": "High financial cost",
          "optionB": "Risk of corporate inbreeding and lack of fresh ideas",
          "optionC": "Complete lack of applicant data",
          "optionD": "Violation of corporate laws",
          "correctOption": "B",
          "explanation": "Exclusive internal hiring limits innovation by recycling existing institutional viewpoints.",
          "subConcept": "Staffing & Human Resource Management",
          "remediationTip": "Exclusive internal hiring limits innovation by recycling existing institutional viewpoints."
        },
        {
          "id": "q-bum-8-3",
          "quizId": "quiz-shs-bum-topic-08",
          "questionText": "The systematic process of measuring an employee's actual job performance against predetermined standards is called:",
          "optionA": "Job description",
          "optionB": "Job analysis",
          "optionC": "Performance appraisal",
          "optionD": "Collective bargaining",
          "correctOption": "C",
          "explanation": "Performance appraisal evaluates an employee's contribution to guide promotions, training, and rewards.",
          "subConcept": "Staffing & Human Resource Management",
          "remediationTip": "Performance appraisal evaluates an employee's contribution to guide promotions, training, and rewards."
        }
      ]
    }
  },
  {
    "id": "shs-bum-topic-09",
    "subjectId": "business-management",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 9,
    "title": "Directing & Leadership in Business",
    "description": "The directing function, leadership theories, classic leadership styles (autocratic, democratic, laissez-faire, transformational), and leadership vs. management.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• The Directing Function: Guiding, overseeing, motivating, and leading subordinates to achieve organizational objectives.\n• Leadership Styles:\n  - Autocratic / Authoritarian Leadership: Leader centralizes all authority, makes decisions unilaterally without consulting subordinates, relies on coercion and close supervision. Effective in emergencies and crisis management, but kills employee initiative and lowers morale.\n  - Democratic / Participative Leadership: Encourages employee participation in decision-making, delegates authority, communicates transparently, values feedback. High employee commitment and satisfaction, but decision-making can be slow.\n  - Laissez-Faire / Free-Rein Leadership: Leader abdicates decision-making, giving complete freedom to subordinates to set goals and resolve problems. Works well with highly skilled professionals (researchers, software engineers), but can lead to chaos and lack of direction.\n  - Situational / Contingency Leadership (Fiedler): The most effective style depends on the maturity of subordinates, nature of task, and environmental context.\n• Leaders vs. Managers: Managers administer, maintain, and focus on systems and short-term control; Leaders innovate, inspire, focus on people, and set long-term vision.",
    "detailedNotes": {
      "introduction": "The directing function, leadership theories, classic leadership styles (autocratic, democratic, laissez-faire, transformational), and leadership vs. management.",
      "realWorldContext": "During emergency plant breakdowns in Ghanaian factories, supervisors adopt an autocratic style to ensure immediate safety protocol compliance.",
      "objectives": [
        "Analyze the behavioral characteristics, pros, and cons of autocratic, democratic, and laissez-faire leadership styles",
        "Apply the situational leadership model to diverse workplace scenarios in Ghana",
        "Contrast the core functions of leadership with administrative management"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• The Directing Function: Guiding, overseeing, motivating, and leading subordinates to achieve organizational objectives.\n• Leadership Styles:\n  - Autocratic / Authoritarian Leadership: Leader centralizes all authority, makes decisions unilaterally without consulting subordinates, relies on coercion and close supervision. Effective in emergencies and crisis management, but kills employee initiative and lowers morale.\n  - Democratic / Participative Leadership: Encourages employee participation in decision-making, delegates authority, communicates transparently, values feedback. High employee commitment and satisfaction, but decision-making can be slow.\n  - Laissez-Faire / Free-Rein Leadership: Leader abdicates decision-making, giving complete freedom to subordinates to set goals and resolve problems. Works well with highly skilled professionals (researchers, software engineers), but can lead to chaos and lack of direction.\n  - Situational / Contingency Leadership (Fiedler): The most effective style depends on the maturity of subordinates, nature of task, and environmental context.\n• Leaders vs. Managers: Managers administer, maintain, and focus on systems and short-term control; Leaders innovate, inspire, focus on people, and set long-term vision.",
          "bulletPoints": [
            "The Directing Function: Guiding, overseeing, motivating, and leading subordinates to achieve organizational objectives.",
            "Leadership Styles:",
            "Autocratic / Authoritarian Leadership: Leader centralizes all authority, makes decisions unilaterally without consulting subordinates, relies on coercion and close supervision. Effective in emergencies and crisis management, but kills employee initiative and lowers morale.",
            "Democratic / Participative Leadership: Encourages employee participation in decision-making, delegates authority, communicates transparently, values feedback. High employee commitment and satisfaction, but decision-making can be slow.",
            "Laissez-Faire / Free-Rein Leadership: Leader abdicates decision-making, giving complete freedom to subordinates to set goals and resolve problems. Works well with highly skilled professionals (researchers, software engineers), but can lead to chaos and lack of direction.",
            "Situational / Contingency Leadership (Fiedler): The most effective style depends on the maturity of subordinates, nature of task, and environmental context.",
            "Leaders vs. Managers: Managers administer, maintain, and focus on systems and short-term control; Leaders innovate, inspire, focus on people, and set long-term vision."
          ],
          "keyTakeaway": "There is no universally \"best\" leadership style; WASSCE examiners expect candidates to recommend a situational approach matching the context.",
          "realWorldExample": "During emergency plant breakdowns in Ghanaian factories, supervisors adopt an autocratic style to ensure immediate safety protocol compliance."
        }
      ],
      "wassceExamTips": [
        "There is no universally \"best\" leadership style; WASSCE examiners expect candidates to recommend a situational approach matching the context."
      ],
      "summaryChecklist": [
        "Analyze the behavioral characteristics, pros, and cons of autocratic, democratic, and laissez-faire leadership styles",
        "Apply the situational leadership model to diverse workplace scenarios in Ghana",
        "Contrast the core functions of leadership with administrative management"
      ]
    },
    "quiz": {
      "id": "quiz-shs-bum-topic-09",
      "topicId": "shs-bum-topic-09",
      "title": "Directing & Leadership in Business Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bum-9-1",
          "quizId": "quiz-shs-bum-topic-09",
          "questionText": "A leadership style where the manager retains all decision-making authority and enforces rigid compliance without subordinate input is:",
          "optionA": "Democratic",
          "optionB": "Autocratic",
          "optionC": "Laissez-faire",
          "optionD": "Transformational",
          "correctOption": "B",
          "explanation": "Autocratic leaders exercise absolute control over all decisions and demand strict obedience.",
          "subConcept": "Directing & Leadership in Business",
          "remediationTip": "Autocratic leaders exercise absolute control over all decisions and demand strict obedience."
        },
        {
          "id": "q-bum-9-2",
          "quizId": "quiz-shs-bum-topic-09",
          "questionText": "Under which workplace circumstance is a laissez-faire (free-rein) leadership style most effective?",
          "optionA": "In military basic training",
          "optionB": "With highly skilled, self-motivated research professionals and creative designers",
          "optionC": "During an active factory fire emergency",
          "optionD": "With untrained entry-level casual laborers",
          "correctOption": "B",
          "explanation": "Laissez-faire succeeds when team members possess high expertise, discipline, and self-direction.",
          "subConcept": "Directing & Leadership in Business",
          "remediationTip": "Laissez-faire succeeds when team members possess high expertise, discipline, and self-direction."
        },
        {
          "id": "q-bum-9-3",
          "quizId": "quiz-shs-bum-topic-09",
          "questionText": "According to modern management theory, the most effective leadership style is one that:",
          "optionA": "Never changes under any circumstances",
          "optionB": "Adapts flexibly to the maturity of workers and the demands of the situation",
          "optionC": "Relies solely on punishment",
          "optionD": "Allows employees to set their own salaries",
          "correctOption": "B",
          "explanation": "Contingency/situational leadership recognizes that effective leaders adapt their approach to specific contexts.",
          "subConcept": "Directing & Leadership in Business",
          "remediationTip": "Contingency/situational leadership recognizes that effective leaders adapt their approach to specific contexts."
        }
      ]
    }
  },
  {
    "id": "shs-bum-topic-10",
    "subjectId": "business-management",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 10,
    "title": "Motivation & Organizational Behavior",
    "description": "Theories of human motivation: Maslow's hierarchy of needs, Herzberg's two-factor theory, McGregor's Theory X and Y, and financial vs. non-financial incentives.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Motivation Defined: The internal and external driving forces that stimulate enthusiasm, commitment, and persistence in employees to achieve goals.\n• Major Motivation Theories:\n  - Abraham Maslow's Hierarchy of Needs:\n    1. Physiological Needs (food, water, shelter, basic wage).\n    2. Safety & Security Needs (job security, pension, health insurance).\n    3. Social / Belonging Needs (teamwork, acceptance, friendship).\n    4. Esteem Needs (recognition, status, job title, praise).\n    5. Self-Actualization Needs (reaching full personal and creative potential).\n  - Frederick Herzberg's Two-Factor (Dual-Factor) Theory:\n    * Hygiene Factors (Extrinsic: salary, working conditions, company policy, job security). If absent, causes dissatisfaction; if present, removes dissatisfaction but DOES NOT actively motivate!\n    * Motivator Factors (Intrinsic: achievement, recognition, challenging work, responsibility, personal advancement). Actively drive high performance.\n  - Douglas McGregor's Theory X & Theory Y:\n    * Theory X: Assumes employees are naturally lazy, dislike work, avoid responsibility, and must be coerced.\n    * Theory Y: Assumes employees view work as natural, seek responsibility, and exercise self-direction when committed to objectives.\n• Reward Systems: Financial incentives (bonuses, commission, profit sharing) vs. Non-financial incentives (job enrichment, employee of the month, flexible hours).",
    "detailedNotes": {
      "introduction": "Theories of human motivation: Maslow's hierarchy of needs, Herzberg's two-factor theory, McGregor's Theory X and Y, and financial vs. non-financial incentives.",
      "realWorldContext": "Offering end-of-year bonuses and health insurance packages through private HMOs motivates corporate employees in Accra.",
      "objectives": [
        "Explain Maslow's hierarchy of needs and its practical application in the Ghanaian workplace",
        "Differentiate clearly between Herzberg's hygiene factors and motivators",
        "Contrast managerial assumptions under McGregor's Theory X and Theory Y"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Motivation Defined: The internal and external driving forces that stimulate enthusiasm, commitment, and persistence in employees to achieve goals.\n• Major Motivation Theories:\n  - Abraham Maslow's Hierarchy of Needs:\n    1. Physiological Needs (food, water, shelter, basic wage).\n    2. Safety & Security Needs (job security, pension, health insurance).\n    3. Social / Belonging Needs (teamwork, acceptance, friendship).\n    4. Esteem Needs (recognition, status, job title, praise).\n    5. Self-Actualization Needs (reaching full personal and creative potential).\n  - Frederick Herzberg's Two-Factor (Dual-Factor) Theory:\n    * Hygiene Factors (Extrinsic: salary, working conditions, company policy, job security). If absent, causes dissatisfaction; if present, removes dissatisfaction but DOES NOT actively motivate!\n    * Motivator Factors (Intrinsic: achievement, recognition, challenging work, responsibility, personal advancement). Actively drive high performance.\n  - Douglas McGregor's Theory X & Theory Y:\n    * Theory X: Assumes employees are naturally lazy, dislike work, avoid responsibility, and must be coerced.\n    * Theory Y: Assumes employees view work as natural, seek responsibility, and exercise self-direction when committed to objectives.\n• Reward Systems: Financial incentives (bonuses, commission, profit sharing) vs. Non-financial incentives (job enrichment, employee of the month, flexible hours).",
          "bulletPoints": [
            "Motivation Defined: The internal and external driving forces that stimulate enthusiasm, commitment, and persistence in employees to achieve goals.",
            "Major Motivation Theories:",
            "Abraham Maslow's Hierarchy of Needs:",
            "Frederick Herzberg's Two-Factor (Dual-Factor) Theory:",
            "Douglas McGregor's Theory X & Theory Y:",
            "Reward Systems: Financial incentives (bonuses, commission, profit sharing) vs. Non-financial incentives (job enrichment, employee of the month, flexible hours)."
          ],
          "keyTakeaway": "Common WASSCE trap: In Herzberg's theory, money/salary is classified as a HYGIENE FACTOR, not a true motivator.",
          "realWorldExample": "Offering end-of-year bonuses and health insurance packages through private HMOs motivates corporate employees in Accra."
        }
      ],
      "wassceExamTips": [
        "Common WASSCE trap: In Herzberg's theory, money/salary is classified as a HYGIENE FACTOR, not a true motivator."
      ],
      "summaryChecklist": [
        "Explain Maslow's hierarchy of needs and its practical application in the Ghanaian workplace",
        "Differentiate clearly between Herzberg's hygiene factors and motivators",
        "Contrast managerial assumptions under McGregor's Theory X and Theory Y"
      ]
    },
    "quiz": {
      "id": "quiz-shs-bum-topic-10",
      "topicId": "shs-bum-topic-10",
      "title": "Motivation & Organizational Behavior Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bum-10-1",
          "quizId": "quiz-shs-bum-topic-10",
          "questionText": "In Herzberg's Two-Factor Theory of motivation, which of the following is classified as a true Motivator rather than a Hygiene factor?",
          "optionA": "Company administrative policy",
          "optionB": "Base monthly salary",
          "optionC": "Recognition and personal advancement",
          "optionD": "Physical working conditions",
          "correctOption": "C",
          "explanation": "Recognition, achievement, and advancement are intrinsic motivators that directly stimulate job satisfaction.",
          "subConcept": "Motivation & Organizational Behavior",
          "remediationTip": "Recognition, achievement, and advancement are intrinsic motivators that directly stimulate job satisfaction."
        },
        {
          "id": "q-bum-10-2",
          "quizId": "quiz-shs-bum-topic-10",
          "questionText": "A manager who assumes that workers inherently dislike work, avoid responsibility, and must be closely monitored and threatened adheres to:",
          "optionA": "Theory Y",
          "optionB": "Theory X",
          "optionC": "Hierarchy of needs",
          "optionD": "Scientific management",
          "correctOption": "B",
          "explanation": "McGregor's Theory X represents the negative, pessimistic assumption that workers avoid labor unless coerced.",
          "subConcept": "Motivation & Organizational Behavior",
          "remediationTip": "McGregor's Theory X represents the negative, pessimistic assumption that workers avoid labor unless coerced."
        },
        {
          "id": "q-bum-10-3",
          "quizId": "quiz-shs-bum-topic-10",
          "questionText": "According to Abraham Maslow, the highest and ultimate level of human psychological needs is:",
          "optionA": "Physiological need",
          "optionB": "Social need",
          "optionC": "Self-Actualization",
          "optionD": "Esteem need",
          "correctOption": "C",
          "explanation": "Self-actualization is the pinnacle of Maslow's pyramid, representing fulfillment of one's potential.",
          "subConcept": "Motivation & Organizational Behavior",
          "remediationTip": "Self-actualization is the pinnacle of Maslow's pyramid, representing fulfillment of one's potential."
        }
      ]
    }
  },
  {
    "id": "shs-bum-topic-11",
    "subjectId": "business-management",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 11,
    "title": "Communication & Coordination in Business",
    "description": "The communication process, directional communication flows, the grapevine (informal), communication barriers, and conflict resolution.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• The Communication Process:\n  - Sequential Model: Sender -> Encoding -> Message & Channel/Medium -> Receiver -> Decoding -> Feedback. (Noise represents any barrier that distorts the message).\n• Directional Flows in Formal Organizations:\n  - Downward Communication: Policies, instructions, goals flowing from superiors to subordinates.\n  - Upward Communication: Grievances, reports, suggestions flowing from subordinates to management.\n  - Horizontal / Lateral Communication: Coordination among managers or employees on the same hierarchical level.\n  - Diagonal Communication: Interaction across different departments and different hierarchical levels.\n• Informal Communication (The Grapevine): Spontaneous, unofficial rumor and news network; travels rapidly, carries emotional climate, but prone to distortion.\n• Barriers to Effective Communication:\n  - Semantic barriers (jargon, ambiguous language).\n  - Psychological barriers (prejudice, emotional anger, selective perception).\n  - Physical barriers (noise, distance, network failure).\n  - Organizational barriers (long scalar chains, status differences).",
    "detailedNotes": {
      "introduction": "The communication process, directional communication flows, the grapevine (informal), communication barriers, and conflict resolution.",
      "realWorldContext": "Companies in Ghana establish WhatsApp enterprise channels and suggestion boxes to facilitate rapid upward and lateral communication.",
      "objectives": [
        "Diagram the universal communication process including the critical role of feedback",
        "Analyze formal communication flows (upward, downward, horizontal) and the informal grapevine",
        "Identify barriers to communication and formulate managerial remedies"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• The Communication Process:\n  - Sequential Model: Sender -> Encoding -> Message & Channel/Medium -> Receiver -> Decoding -> Feedback. (Noise represents any barrier that distorts the message).\n• Directional Flows in Formal Organizations:\n  - Downward Communication: Policies, instructions, goals flowing from superiors to subordinates.\n  - Upward Communication: Grievances, reports, suggestions flowing from subordinates to management.\n  - Horizontal / Lateral Communication: Coordination among managers or employees on the same hierarchical level.\n  - Diagonal Communication: Interaction across different departments and different hierarchical levels.\n• Informal Communication (The Grapevine): Spontaneous, unofficial rumor and news network; travels rapidly, carries emotional climate, but prone to distortion.\n• Barriers to Effective Communication:\n  - Semantic barriers (jargon, ambiguous language).\n  - Psychological barriers (prejudice, emotional anger, selective perception).\n  - Physical barriers (noise, distance, network failure).\n  - Organizational barriers (long scalar chains, status differences).",
          "bulletPoints": [
            "The Communication Process:",
            "Sequential Model: Sender -> Encoding -> Message & Channel/Medium -> Receiver -> Decoding -> Feedback. (Noise represents any barrier that distorts the message).",
            "Directional Flows in Formal Organizations:",
            "Downward Communication: Policies, instructions, goals flowing from superiors to subordinates.",
            "Upward Communication: Grievances, reports, suggestions flowing from subordinates to management.",
            "Horizontal / Lateral Communication: Coordination among managers or employees on the same hierarchical level.",
            "Diagonal Communication: Interaction across different departments and different hierarchical levels.",
            "Informal Communication (The Grapevine): Spontaneous, unofficial rumor and news network; travels rapidly, carries emotional climate, but prone to distortion.",
            "Barriers to Effective Communication:",
            "Semantic barriers (jargon, ambiguous language).",
            "Psychological barriers (prejudice, emotional anger, selective perception).",
            "Physical barriers (noise, distance, network failure).",
            "Organizational barriers (long scalar chains, status differences)."
          ],
          "keyTakeaway": "Feedback is the most critical element: without feedback, the sender cannot verify if the receiver understood the message as intended.",
          "realWorldExample": "Companies in Ghana establish WhatsApp enterprise channels and suggestion boxes to facilitate rapid upward and lateral communication."
        }
      ],
      "wassceExamTips": [
        "Feedback is the most critical element: without feedback, the sender cannot verify if the receiver understood the message as intended."
      ],
      "summaryChecklist": [
        "Diagram the universal communication process including the critical role of feedback",
        "Analyze formal communication flows (upward, downward, horizontal) and the informal grapevine",
        "Identify barriers to communication and formulate managerial remedies"
      ]
    },
    "quiz": {
      "id": "quiz-shs-bum-topic-11",
      "topicId": "shs-bum-topic-11",
      "title": "Communication & Coordination in Business Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bum-11-1",
          "quizId": "quiz-shs-bum-topic-11",
          "questionText": "The step in the communication cycle that confirms to the sender that the message was received and accurately understood is:",
          "optionA": "Encoding",
          "optionB": "Decoding",
          "optionC": "Feedback",
          "optionD": "Noise filtration",
          "correctOption": "C",
          "explanation": "Feedback completes the loop by verifying whether comprehension occurred.",
          "subConcept": "Communication & Coordination in Business",
          "remediationTip": "Feedback completes the loop by verifying whether comprehension occurred."
        },
        {
          "id": "q-bum-11-2",
          "quizId": "quiz-shs-bum-topic-11",
          "questionText": "Unofficial, informal communication channels circulating rumors and news rapidly through an organization are known as the:",
          "optionA": "Scalar chain",
          "optionB": "Grapevine",
          "optionC": "Bulletin board",
          "optionD": "Official gazette",
          "correctOption": "B",
          "explanation": "The grapevine is the spontaneous informal network of social communication in workplaces.",
          "subConcept": "Communication & Coordination in Business",
          "remediationTip": "The grapevine is the spontaneous informal network of social communication in workplaces."
        },
        {
          "id": "q-bum-11-3",
          "quizId": "quiz-shs-bum-topic-11",
          "questionText": "A communication barrier arising from using confusing technical acronyms and specialized jargon that the receiver does not know is a:",
          "optionA": "Physical barrier",
          "optionB": "Semantic barrier",
          "optionC": "Physiological barrier",
          "optionD": "Environmental barrier",
          "correctOption": "B",
          "explanation": "Semantic barriers involve linguistic ambiguity, vocabulary mismatch, and technical jargon.",
          "subConcept": "Communication & Coordination in Business",
          "remediationTip": "Semantic barriers involve linguistic ambiguity, vocabulary mismatch, and technical jargon."
        }
      ]
    }
  },
  {
    "id": "shs-bum-topic-12",
    "subjectId": "business-management",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 12,
    "title": "Controlling & Total Quality Management (TQM)",
    "description": "The control process, budgetary control, management audit, quality assurance, Total Quality Management (TQM), and ISO standards.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• The Controlling Function: The process of monitoring performance, comparing actual results against predetermined standards, and taking corrective action to ensure business plans are fulfilled.\n• The Four Steps in the Control Process:\n  1. Establishing Performance Standards (measurable targets in quantity, quality, cost, or time).\n  2. Measuring Actual Performance (via inspections, financial statements, output metrics).\n  3. Comparing Actual Performance against Standards (identifying deviations/variances).\n  4. Taking Corrective Action (correcting operations, adjusting standards, retraining personnel).\n  - Management by Exception (MBE): Managers focus attention only on significant deviations from standard, ignoring minor variances.\n• Control Techniques:\n  - Budgetary Control: Using financial budgets to monitor revenue and departmental expenditure.\n  - Quality Control (QC): Inspecting output after production to reject defective units.\n  - Total Quality Management (TQM): An organization-wide philosophy focused on continuous improvement (Kaizen), customer satisfaction, and getting things \"right the first time\" with zero defects.",
    "detailedNotes": {
      "introduction": "The control process, budgetary control, management audit, quality assurance, Total Quality Management (TQM), and ISO standards.",
      "realWorldContext": "Ghana Standards Authority (GSA) enforces mandatory quality certifications and food safety standards on locally manufactured goods.",
      "objectives": [
        "Examine the four sequential steps in the managerial control cycle",
        "Explain the principle of Management by Exception (MBE)",
        "Evaluate the principles and benefits of Total Quality Management (TQM)"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• The Controlling Function: The process of monitoring performance, comparing actual results against predetermined standards, and taking corrective action to ensure business plans are fulfilled.\n• The Four Steps in the Control Process:\n  1. Establishing Performance Standards (measurable targets in quantity, quality, cost, or time).\n  2. Measuring Actual Performance (via inspections, financial statements, output metrics).\n  3. Comparing Actual Performance against Standards (identifying deviations/variances).\n  4. Taking Corrective Action (correcting operations, adjusting standards, retraining personnel).\n  - Management by Exception (MBE): Managers focus attention only on significant deviations from standard, ignoring minor variances.\n• Control Techniques:\n  - Budgetary Control: Using financial budgets to monitor revenue and departmental expenditure.\n  - Quality Control (QC): Inspecting output after production to reject defective units.\n  - Total Quality Management (TQM): An organization-wide philosophy focused on continuous improvement (Kaizen), customer satisfaction, and getting things \"right the first time\" with zero defects.",
          "bulletPoints": [
            "The Controlling Function: The process of monitoring performance, comparing actual results against predetermined standards, and taking corrective action to ensure business plans are fulfilled.",
            "The Four Steps in the Control Process:",
            "Management by Exception (MBE): Managers focus attention only on significant deviations from standard, ignoring minor variances.",
            "Control Techniques:",
            "Budgetary Control: Using financial budgets to monitor revenue and departmental expenditure.",
            "Quality Control (QC): Inspecting output after production to reject defective units.",
            "Total Quality Management (TQM): An organization-wide philosophy focused on continuous improvement (Kaizen), customer satisfaction, and getting things \"right the first time\" with zero defects."
          ],
          "keyTakeaway": "Remember: Control cannot exist without Planning. Standards used in control are directly derived from the goals set during planning.",
          "realWorldExample": "Ghana Standards Authority (GSA) enforces mandatory quality certifications and food safety standards on locally manufactured goods."
        }
      ],
      "wassceExamTips": [
        "Remember: Control cannot exist without Planning. Standards used in control are directly derived from the goals set during planning."
      ],
      "summaryChecklist": [
        "Examine the four sequential steps in the managerial control cycle",
        "Explain the principle of Management by Exception (MBE)",
        "Evaluate the principles and benefits of Total Quality Management (TQM)"
      ]
    },
    "quiz": {
      "id": "quiz-shs-bum-topic-12",
      "topicId": "shs-bum-topic-12",
      "title": "Controlling & Total Quality Management (TQM) Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bum-12-1",
          "quizId": "quiz-shs-bum-topic-12",
          "questionText": "The first essential step in the formal managerial control process is:",
          "optionA": "Dismissing underperforming employees",
          "optionB": "Establishing clear, measurable performance standards",
          "optionC": "Measuring actual output",
          "optionD": "Borrowing working capital",
          "correctOption": "B",
          "explanation": "Without predefined standards, there is no benchmark against which to evaluate actual performance.",
          "subConcept": "Controlling & Total Quality Management (TQM)",
          "remediationTip": "Without predefined standards, there is no benchmark against which to evaluate actual performance."
        },
        {
          "id": "q-bum-12-2",
          "quizId": "quiz-shs-bum-topic-12",
          "questionText": "The management practice of directing managerial intervention only toward significant deviations from plans is called:",
          "optionA": "Management by Objectives (MBO)",
          "optionB": "Management by Exception (MBE)",
          "optionC": "Laissez-faire management",
          "optionD": "Autocratic control",
          "correctOption": "B",
          "explanation": "Management by Exception allows leaders to conserve time by intervening only in major variances.",
          "subConcept": "Controlling & Total Quality Management (TQM)",
          "remediationTip": "Management by Exception allows leaders to conserve time by intervening only in major variances."
        },
        {
          "id": "q-bum-12-3",
          "quizId": "quiz-shs-bum-topic-12",
          "questionText": "Total Quality Management (TQM) is characterized primarily by its philosophy of:",
          "optionA": "Inspecting goods only at the final shipping port",
          "optionB": "Continuous improvement (Kaizen) and zero defects across all operations",
          "optionC": "Cutting production costs by using inferior materials",
          "optionD": "Maximizing executive salaries",
          "correctOption": "B",
          "explanation": "TQM emphasizes continuous improvement, organization-wide employee involvement, and customer satisfaction.",
          "subConcept": "Controlling & Total Quality Management (TQM)",
          "remediationTip": "TQM emphasizes continuous improvement, organization-wide employee involvement, and customer satisfaction."
        }
      ]
    }
  },
  {
    "id": "shs-bum-topic-13",
    "subjectId": "business-management",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 13,
    "title": "Marketing Management: The Marketing Mix",
    "description": "Marketing concepts, market research, segmentation, targeting, positioning (STP), the 4 Ps (Product, Price, Place, Promotion), and the product life cycle.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Marketing Defined: The management process responsible for identifying, anticipating, and satisfying customer requirements profitably.\n• Market Segmentation, Targeting & Positioning (STP):\n  - Segmentation: Dividing the total heterogenous market into distinct, identifiable groups of buyers (demographic, geographic, psychographic, behavioral).\n  - Targeting: Selecting one or more specific market segments to serve.\n  - Positioning: Establishing a distinctive, desirable brand image in the minds of target consumers relative to competitors.\n• The Marketing Mix (The 4 Ps):\n  - Product: Quality, design, features, branding, packaging, product life cycle (Introduction -> Growth -> Maturity -> Decline).\n  - Price: Pricing strategies (Cost-plus pricing, Penetration pricing, Price skimming, Competitive pricing).\n  - Place (Distribution): Channels through which goods reach the consumer (Direct selling, wholesaler -> retailer -> consumer).\n  - Promotion: Marketing communications mix (Advertising, Personal selling, Sales promotion, Public relations, Direct digital marketing).",
    "detailedNotes": {
      "introduction": "Marketing concepts, market research, segmentation, targeting, positioning (STP), the 4 Ps (Product, Price, Place, Promotion), and the product life cycle.",
      "realWorldContext": "Kasapreko and Fan Milk develop innovative packaging and localized promotional blitzes during festivals to dominate retail distribution.",
      "objectives": [
        "Differentiate between selling and customer-oriented marketing",
        "Analyze the components of the extended marketing mix (4 Ps)",
        "Evaluate pricing strategies (price skimming vs. market penetration) with Ghanaian examples"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Marketing Defined: The management process responsible for identifying, anticipating, and satisfying customer requirements profitably.\n• Market Segmentation, Targeting & Positioning (STP):\n  - Segmentation: Dividing the total heterogenous market into distinct, identifiable groups of buyers (demographic, geographic, psychographic, behavioral).\n  - Targeting: Selecting one or more specific market segments to serve.\n  - Positioning: Establishing a distinctive, desirable brand image in the minds of target consumers relative to competitors.\n• The Marketing Mix (The 4 Ps):\n  - Product: Quality, design, features, branding, packaging, product life cycle (Introduction -> Growth -> Maturity -> Decline).\n  - Price: Pricing strategies (Cost-plus pricing, Penetration pricing, Price skimming, Competitive pricing).\n  - Place (Distribution): Channels through which goods reach the consumer (Direct selling, wholesaler -> retailer -> consumer).\n  - Promotion: Marketing communications mix (Advertising, Personal selling, Sales promotion, Public relations, Direct digital marketing).",
          "bulletPoints": [
            "Marketing Defined: The management process responsible for identifying, anticipating, and satisfying customer requirements profitably.",
            "Market Segmentation, Targeting & Positioning (STP):",
            "Segmentation: Dividing the total heterogenous market into distinct, identifiable groups of buyers (demographic, geographic, psychographic, behavioral).",
            "Targeting: Selecting one or more specific market segments to serve.",
            "Positioning: Establishing a distinctive, desirable brand image in the minds of target consumers relative to competitors.",
            "The Marketing Mix (The 4 Ps):",
            "Product: Quality, design, features, branding, packaging, product life cycle (Introduction -> Growth -> Maturity -> Decline).",
            "Price: Pricing strategies (Cost-plus pricing, Penetration pricing, Price skimming, Competitive pricing).",
            "Place (Distribution): Channels through which goods reach the consumer (Direct selling, wholesaler -> retailer -> consumer).",
            "Promotion: Marketing communications mix (Advertising, Personal selling, Sales promotion, Public relations, Direct digital marketing)."
          ],
          "keyTakeaway": "Contrast Skimming (setting high initial price for premium buyers) with Penetration (setting low initial price to capture mass market share).",
          "realWorldExample": "Kasapreko and Fan Milk develop innovative packaging and localized promotional blitzes during festivals to dominate retail distribution."
        }
      ],
      "wassceExamTips": [
        "Contrast Skimming (setting high initial price for premium buyers) with Penetration (setting low initial price to capture mass market share)."
      ],
      "summaryChecklist": [
        "Differentiate between selling and customer-oriented marketing",
        "Analyze the components of the extended marketing mix (4 Ps)",
        "Evaluate pricing strategies (price skimming vs. market penetration) with Ghanaian examples"
      ]
    },
    "quiz": {
      "id": "quiz-shs-bum-topic-13",
      "topicId": "shs-bum-topic-13",
      "title": "Marketing Management: The Marketing Mix Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bum-13-1",
          "quizId": "quiz-shs-bum-topic-13",
          "questionText": "Setting a relatively low initial price for a new product to attract massive customer patronage and capture rapid market share is:",
          "optionA": "Price skimming",
          "optionB": "Penetration pricing",
          "optionC": "Prestige pricing",
          "optionD": "Cost-plus pricing",
          "correctOption": "B",
          "explanation": "Penetration pricing uses low entry prices to penetrate the market and discourage competitors.",
          "subConcept": "Marketing Management: The Marketing Mix",
          "remediationTip": "Penetration pricing uses low entry prices to penetrate the market and discourage competitors."
        },
        {
          "id": "q-bum-13-2",
          "quizId": "quiz-shs-bum-topic-13",
          "questionText": "The four classical components of the traditional Marketing Mix are:",
          "optionA": "People, Process, Profit, Planning",
          "optionB": "Product, Price, Place, Promotion",
          "optionC": "Partnership, Packaging, Power, Performance",
          "optionD": "Purchase, Payment, Production, Payroll",
          "correctOption": "B",
          "explanation": "The 4 Ps of marketing are Product, Price, Place, and Promotion.",
          "subConcept": "Marketing Management: The Marketing Mix",
          "remediationTip": "The 4 Ps of marketing are Product, Price, Place, and Promotion."
        },
        {
          "id": "q-bum-13-3",
          "quizId": "quiz-shs-bum-topic-13",
          "questionText": "The stage of the Product Life Cycle characterized by plateauing sales, intense competitor rivalry, and market saturation is:",
          "optionA": "Introduction",
          "optionB": "Growth",
          "optionC": "Maturity",
          "optionD": "Decline",
          "correctOption": "C",
          "explanation": "Maturity is the peak phase where sales reach maximum saturation and price wars intensify.",
          "subConcept": "Marketing Management: The Marketing Mix",
          "remediationTip": "Maturity is the peak phase where sales reach maximum saturation and price wars intensify."
        }
      ]
    }
  },
  {
    "id": "shs-bum-topic-14",
    "subjectId": "business-management",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 14,
    "title": "Production & Operations Management",
    "description": "Plant location factors, factory layout, production methods (job, batch, mass/flow), inventory management, and Just-In-Time (JIT).",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Production Management: Planning, organizing, directing, and controlling the transformation of inputs (raw materials, labor, machinery) into finished goods and services.\n• Factors Influencing Plant Location: Proximity to raw materials, proximity to markets, availability of power and water, transportation networks, supply of skilled labor, government industrial incentives.\n• Production Methods:\n  - Job Production: Producing a single unique unit customized to the exact specifications of an individual customer (e.g. custom wedding gown, architectural building). High unit cost, highly skilled labor.\n  - Batch Production: Producing a specific quantity of identical goods in groups or batches before switching equipment for another batch (e.g. bakery baking meat pies then bread; pharmaceutical tablets).\n  - Mass / Flow / Continuous Production: High-volume, continuous output of standardized products moving along an assembly line (e.g. soft drinks bottling, oil refining). High automation, low unit cost.\n• Inventory Control: Maintaining optimal stock levels to avoid stockouts and holding costs; Economic Order Quantity (EOQ) and Just-in-Time (JIT) systems.",
    "detailedNotes": {
      "introduction": "Plant location factors, factory layout, production methods (job, batch, mass/flow), inventory management, and Just-In-Time (JIT).",
      "realWorldContext": "Guinness Ghana Breweries in Kumasi operates flow production bottling lines running 24 hours to supply retail distributors.",
      "objectives": [
        "Evaluate physical and economic factors governing plant location decisions in Ghana",
        "Compare job, batch, and flow production methods in terms of cost, flexibility, and equipment",
        "Analyze the benefits of Just-In-Time (JIT) inventory management"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Production Management: Planning, organizing, directing, and controlling the transformation of inputs (raw materials, labor, machinery) into finished goods and services.\n• Factors Influencing Plant Location: Proximity to raw materials, proximity to markets, availability of power and water, transportation networks, supply of skilled labor, government industrial incentives.\n• Production Methods:\n  - Job Production: Producing a single unique unit customized to the exact specifications of an individual customer (e.g. custom wedding gown, architectural building). High unit cost, highly skilled labor.\n  - Batch Production: Producing a specific quantity of identical goods in groups or batches before switching equipment for another batch (e.g. bakery baking meat pies then bread; pharmaceutical tablets).\n  - Mass / Flow / Continuous Production: High-volume, continuous output of standardized products moving along an assembly line (e.g. soft drinks bottling, oil refining). High automation, low unit cost.\n• Inventory Control: Maintaining optimal stock levels to avoid stockouts and holding costs; Economic Order Quantity (EOQ) and Just-in-Time (JIT) systems.",
          "bulletPoints": [
            "Production Management: Planning, organizing, directing, and controlling the transformation of inputs (raw materials, labor, machinery) into finished goods and services.",
            "Factors Influencing Plant Location: Proximity to raw materials, proximity to markets, availability of power and water, transportation networks, supply of skilled labor, government industrial incentives.",
            "Production Methods:",
            "Job Production: Producing a single unique unit customized to the exact specifications of an individual customer (e.g. custom wedding gown, architectural building). High unit cost, highly skilled labor.",
            "Batch Production: Producing a specific quantity of identical goods in groups or batches before switching equipment for another batch (e.g. bakery baking meat pies then bread; pharmaceutical tablets).",
            "Mass / Flow / Continuous Production: High-volume, continuous output of standardized products moving along an assembly line (e.g. soft drinks bottling, oil refining). High automation, low unit cost.",
            "Inventory Control: Maintaining optimal stock levels to avoid stockouts and holding costs; Economic Order Quantity (EOQ) and Just-in-Time (JIT) systems."
          ],
          "keyTakeaway": "In essay questions comparing production methods, use a structured table comparing: output volume, unit cost, variety, machinery, and labor skill.",
          "realWorldExample": "Guinness Ghana Breweries in Kumasi operates flow production bottling lines running 24 hours to supply retail distributors."
        }
      ],
      "wassceExamTips": [
        "In essay questions comparing production methods, use a structured table comparing: output volume, unit cost, variety, machinery, and labor skill."
      ],
      "summaryChecklist": [
        "Evaluate physical and economic factors governing plant location decisions in Ghana",
        "Compare job, batch, and flow production methods in terms of cost, flexibility, and equipment",
        "Analyze the benefits of Just-In-Time (JIT) inventory management"
      ]
    },
    "quiz": {
      "id": "quiz-shs-bum-topic-14",
      "topicId": "shs-bum-topic-14",
      "title": "Production & Operations Management Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bum-14-1",
          "quizId": "quiz-shs-bum-topic-14",
          "questionText": "Manufacturing single, specialized, non-standardized products strictly according to individual customer orders is:",
          "optionA": "Flow production",
          "optionB": "Job production",
          "optionC": "Batch production",
          "optionD": "Continuous processing",
          "correctOption": "B",
          "explanation": "Job production custom-builds unique individual items from start to finish.",
          "subConcept": "Production & Operations Management",
          "remediationTip": "Job production custom-builds unique individual items from start to finish."
        },
        {
          "id": "q-bum-14-2",
          "quizId": "quiz-shs-bum-topic-14",
          "questionText": "Which production method is characterized by dedicated assembly lines, standardized parts, high capital investment, and low unit costs?",
          "optionA": "Job production",
          "optionB": "Cottage craft",
          "optionC": "Mass / Flow production",
          "optionD": "Artisanal shop",
          "correctOption": "C",
          "explanation": "Mass production exploits economies of scale through automated assembly lines and uniform specifications.",
          "subConcept": "Production & Operations Management",
          "remediationTip": "Mass production exploits economies of scale through automated assembly lines and uniform specifications."
        },
        {
          "id": "q-bum-14-3",
          "quizId": "quiz-shs-bum-topic-14",
          "questionText": "The inventory management philosophy that aims to minimize holding costs by delivering materials strictly when needed for production is:",
          "optionA": "First In First Out (FIFO)",
          "optionB": "Just-In-Time (JIT)",
          "optionC": "Buffer Stocking",
          "optionD": "LIFO",
          "correctOption": "B",
          "explanation": "Just-In-Time eliminates warehousing waste by coordinating suppliers to deliver components directly to the assembly line.",
          "subConcept": "Production & Operations Management",
          "remediationTip": "Just-In-Time eliminates warehousing waste by coordinating suppliers to deliver components directly to the assembly line."
        }
      ]
    }
  },
  {
    "id": "shs-bum-topic-15",
    "subjectId": "business-management",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 15,
    "title": "Financial Management & Sources of Finance",
    "description": "Short-term, medium-term, and long-term financing, working capital management, commercial banks, and the Ghana Stock Exchange (GSE).",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Financial Management: Planning, procuring, and controlling a firm's financial resources to maximize shareholder wealth.\n• Sources of Business Finance:\n  - Short-Term Finance (< 1 year): Trade credit, bank overdrafts, factoring of debtors, short-term promissory notes. Used to fund working capital.\n  - Medium-Term Finance (1–5 years): Equipment leasing, hire purchase, term bank loans. Used for purchasing commercial vehicles and light machinery.\n  - Long-Term Finance (> 5 years): Share capital (equity), retained earnings (ploughed-back profit), debentures, corporate bonds. Used for factory construction and major expansion.\n• Working Capital Management:\n  - Working Capital = Current Assets - Current Liabilities.\n  - Managing cash, accounts receivable, and inventory to maintain liquidity without sacrificing profitability.\n• The Ghana Stock Exchange (GSE):\n  - Secondary capital market providing liquidity for existing securities and enabling companies to raise equity capital from the public.",
    "detailedNotes": {
      "introduction": "Short-term, medium-term, and long-term financing, working capital management, commercial banks, and the Ghana Stock Exchange (GSE).",
      "realWorldContext": "SMEs in Ghana frequently utilize bank overdrafts from local commercial banks to bridge seasonal inventory cash-flow gaps.",
      "objectives": [
        "Classify sources of business finance into short-term, medium-term, and long-term categories",
        "Calculate working capital and explain the trade-off between liquidity and profitability",
        "Analyze the economic role of the Ghana Stock Exchange in mobilizing industrial capital"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Financial Management: Planning, procuring, and controlling a firm's financial resources to maximize shareholder wealth.\n• Sources of Business Finance:\n  - Short-Term Finance (< 1 year): Trade credit, bank overdrafts, factoring of debtors, short-term promissory notes. Used to fund working capital.\n  - Medium-Term Finance (1–5 years): Equipment leasing, hire purchase, term bank loans. Used for purchasing commercial vehicles and light machinery.\n  - Long-Term Finance (> 5 years): Share capital (equity), retained earnings (ploughed-back profit), debentures, corporate bonds. Used for factory construction and major expansion.\n• Working Capital Management:\n  - Working Capital = Current Assets - Current Liabilities.\n  - Managing cash, accounts receivable, and inventory to maintain liquidity without sacrificing profitability.\n• The Ghana Stock Exchange (GSE):\n  - Secondary capital market providing liquidity for existing securities and enabling companies to raise equity capital from the public.",
          "bulletPoints": [
            "Financial Management: Planning, procuring, and controlling a firm's financial resources to maximize shareholder wealth.",
            "Sources of Business Finance:",
            "Short-Term Finance (< 1 year): Trade credit, bank overdrafts, factoring of debtors, short-term promissory notes. Used to fund working capital.",
            "Medium-Term Finance (1–5 years): Equipment leasing, hire purchase, term bank loans. Used for purchasing commercial vehicles and light machinery.",
            "Long-Term Finance (> 5 years): Share capital (equity), retained earnings (ploughed-back profit), debentures, corporate bonds. Used for factory construction and major expansion.",
            "Working Capital Management:",
            "Working Capital = Current Assets - Current Liabilities.",
            "Managing cash, accounts receivable, and inventory to maintain liquidity without sacrificing profitability.",
            "The Ghana Stock Exchange (GSE):",
            "Secondary capital market providing liquidity for existing securities and enabling companies to raise equity capital from the public."
          ],
          "keyTakeaway": "Remember: An overdraft allows a business to withdraw funds beyond its account balance up to an agreed limit; interest is charged only on the daily overdrawn amount.",
          "realWorldExample": "SMEs in Ghana frequently utilize bank overdrafts from local commercial banks to bridge seasonal inventory cash-flow gaps."
        }
      ],
      "wassceExamTips": [
        "Remember: An overdraft allows a business to withdraw funds beyond its account balance up to an agreed limit; interest is charged only on the daily overdrawn amount."
      ],
      "summaryChecklist": [
        "Classify sources of business finance into short-term, medium-term, and long-term categories",
        "Calculate working capital and explain the trade-off between liquidity and profitability",
        "Analyze the economic role of the Ghana Stock Exchange in mobilizing industrial capital"
      ]
    },
    "quiz": {
      "id": "quiz-shs-bum-topic-15",
      "topicId": "shs-bum-topic-15",
      "title": "Financial Management & Sources of Finance Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bum-15-1",
          "quizId": "quiz-shs-bum-topic-15",
          "questionText": "Which of the following is classified as a short-term source of business financing?",
          "optionA": "Ordinary share capital",
          "optionB": "Bank overdraft",
          "optionC": "20-year corporate debenture",
          "optionD": "Mortgage loan",
          "correctOption": "B",
          "explanation": "Bank overdrafts provide short-term liquidity to settle immediate operational obligations.",
          "subConcept": "Financial Management & Sources of Finance",
          "remediationTip": "Bank overdrafts provide short-term liquidity to settle immediate operational obligations."
        },
        {
          "id": "q-bum-15-2",
          "quizId": "quiz-shs-bum-topic-15",
          "questionText": "Working capital is mathematically computed as:",
          "optionA": "Total Assets minus Total Liabilities",
          "optionB": "Current Assets minus Current Liabilities",
          "optionC": "Fixed Assets plus Cash in Hand",
          "optionD": "Gross Profit minus Net Profit",
          "correctOption": "B",
          "explanation": "Net working capital is the difference between current assets and current liabilities.",
          "subConcept": "Financial Management & Sources of Finance",
          "remediationTip": "Net working capital is the difference between current assets and current liabilities."
        },
        {
          "id": "q-bum-15-3",
          "quizId": "quiz-shs-bum-topic-15",
          "questionText": "The primary institutional marketplace in Ghana where existing corporate shares and government bonds are traded is the:",
          "optionA": "Bank of Ghana",
          "optionB": "Ghana Stock Exchange (GSE)",
          "optionC": "Registrar General's Department",
          "optionD": "Chamber of Commerce",
          "correctOption": "B",
          "explanation": "The GSE provides a centralized secondary market platform for buying and selling securities.",
          "subConcept": "Financial Management & Sources of Finance",
          "remediationTip": "The GSE provides a centralized secondary market platform for buying and selling securities."
        }
      ]
    }
  },
  {
    "id": "shs-bum-topic-16",
    "subjectId": "business-management",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 16,
    "title": "Business Law & Contract",
    "description": "Essential elements of a valid contract, offer and acceptance, consideration, capacity, legality, breach of contract, and consumer protection.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Meaning of Contract: A legally binding agreement between two or more parties that creates enforceable rights and obligations.\n• Essential Elements of a Valid Contract:\n  1. Offer: A clear, definite proposal made by the offeror indicating a willingness to be bound on specified terms.\n  2. Acceptance: Unconditional assent to all the terms of the offer. A counter-offer terminates the original offer!\n  3. Consideration: The price or value bargained for by the parties (something of economic value exchanged).\n  4. Intention to Create Legal Relations: Commercial agreements are presumed to be legally binding; domestic/social agreements are presumed not binding.\n  5. Capacity to Contract: Parties must be legally competent (infants/minors, insane persons, intoxicated individuals have restricted capacity).\n  6. Legality of Object: The purpose of the contract must not violate statutory laws or public policy.\n  7. Genuine Consent: Free from fraud, misrepresentation, duress, or undue influence.\n• Remedies for Breach of Contract: Damages (financial compensation), Specific Performance (court order compelling execution), Injunction, Rescission.",
    "detailedNotes": {
      "introduction": "Essential elements of a valid contract, offer and acceptance, consideration, capacity, legality, breach of contract, and consumer protection.",
      "realWorldContext": "Goods displayed on supermarket shelves in Ghana with price tags represent an \"invitation to treat\", not a legal offer.",
      "objectives": [
        "Examine the essential legal elements necessary to establish an enforceable commercial contract",
        "Distinguish between an offer, an acceptance, and an invitation to treat",
        "Evaluate legal remedies available to an aggrieved party upon breach of contract"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Meaning of Contract: A legally binding agreement between two or more parties that creates enforceable rights and obligations.\n• Essential Elements of a Valid Contract:\n  1. Offer: A clear, definite proposal made by the offeror indicating a willingness to be bound on specified terms.\n  2. Acceptance: Unconditional assent to all the terms of the offer. A counter-offer terminates the original offer!\n  3. Consideration: The price or value bargained for by the parties (something of economic value exchanged).\n  4. Intention to Create Legal Relations: Commercial agreements are presumed to be legally binding; domestic/social agreements are presumed not binding.\n  5. Capacity to Contract: Parties must be legally competent (infants/minors, insane persons, intoxicated individuals have restricted capacity).\n  6. Legality of Object: The purpose of the contract must not violate statutory laws or public policy.\n  7. Genuine Consent: Free from fraud, misrepresentation, duress, or undue influence.\n• Remedies for Breach of Contract: Damages (financial compensation), Specific Performance (court order compelling execution), Injunction, Rescission.",
          "bulletPoints": [
            "Meaning of Contract: A legally binding agreement between two or more parties that creates enforceable rights and obligations.",
            "Essential Elements of a Valid Contract:",
            "Remedies for Breach of Contract: Damages (financial compensation), Specific Performance (court order compelling execution), Injunction, Rescission."
          ],
          "keyTakeaway": "Crucial legal distinction: Display of goods in a shop window or advertisement is an \"Invitation to Treat\". The customer makes the \"Offer\" at the cashier counter.",
          "realWorldExample": "Goods displayed on supermarket shelves in Ghana with price tags represent an \"invitation to treat\", not a legal offer."
        }
      ],
      "wassceExamTips": [
        "Crucial legal distinction: Display of goods in a shop window or advertisement is an \"Invitation to Treat\". The customer makes the \"Offer\" at the cashier counter."
      ],
      "summaryChecklist": [
        "Examine the essential legal elements necessary to establish an enforceable commercial contract",
        "Distinguish between an offer, an acceptance, and an invitation to treat",
        "Evaluate legal remedies available to an aggrieved party upon breach of contract"
      ]
    },
    "quiz": {
      "id": "quiz-shs-bum-topic-16",
      "topicId": "shs-bum-topic-16",
      "title": "Business Law & Contract Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bum-16-1",
          "quizId": "quiz-shs-bum-topic-16",
          "questionText": "In contract law, goods displayed in a shop window with price tags attached legally constitute a/an:",
          "optionA": "Binding offer",
          "optionB": "Invitation to treat",
          "optionC": "Counter-offer",
          "optionD": "Contractual acceptance",
          "correctOption": "B",
          "explanation": "Displaying goods is an invitation to treat inviting customers to make an offer to buy.",
          "subConcept": "Business Law & Contract",
          "remediationTip": "Displaying goods is an invitation to treat inviting customers to make an offer to buy."
        },
        {
          "id": "q-bum-16-2",
          "quizId": "quiz-shs-bum-topic-16",
          "questionText": "The price or economic value bargained for and exchanged between contracting parties is known as:",
          "optionA": "Consideration",
          "optionB": "Indemnity",
          "optionC": "Goodwill",
          "optionD": "Collateral",
          "correctOption": "A",
          "explanation": "Consideration is the quid pro quo (something of value given in exchange for a promise).",
          "subConcept": "Business Law & Contract",
          "remediationTip": "Consideration is the quid pro quo (something of value given in exchange for a promise)."
        },
        {
          "id": "q-bum-16-3",
          "quizId": "quiz-shs-bum-topic-16",
          "questionText": "Which court order compels a defaulting party to carry out their exact contractual obligations as originally agreed?",
          "optionA": "Injunction",
          "optionB": "Specific Performance",
          "optionC": "Damages",
          "optionD": "Subrogation",
          "correctOption": "B",
          "explanation": "Specific performance is an equitable remedy ordering the defaulting party to perform the promised duty.",
          "subConcept": "Business Law & Contract",
          "remediationTip": "Specific performance is an equitable remedy ordering the defaulting party to perform the promised duty."
        }
      ]
    }
  },
  {
    "id": "shs-bum-topic-17",
    "subjectId": "business-management",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 17,
    "title": "Business Ethics, Corporate Social Responsibility & Globalization",
    "description": "Ethical behavior in commerce, corporate governance, consumer protection, environmental sustainability, CSR in Ghana, and multinational corporations.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Business Ethics: Moral principles, values, and standards that guide the conduct, decisions, and practices of commercial enterprises.\n  - Ethical Breaches: False advertising, hoarding goods to inflate prices, adulteration of products, insider trading, offering and receiving bribes, environmental dumping.\n• Corporate Social Responsibility (CSR):\n  - A business commitment to contribute to sustainable economic development by working with employees, their families, local communities, and society at large to improve quality of life.\n  - Areas of CSR: Building school blocks, awarding scholarships, drilling boreholes, constructing health centers, supporting green environmental initiatives.\n• Globalization & Multinational Corporations (MNCs):\n  - Globalization: The increasing worldwide integration and interdependence of national economies, cultures, and financial markets.\n  - MNCs (e.g. Unilever, Nestlé, MTN): Bring foreign direct investment, employment, and technology transfer, but may repatriate profits and dominate domestic competitors.",
    "detailedNotes": {
      "introduction": "Ethical behavior in commerce, corporate governance, consumer protection, environmental sustainability, CSR in Ghana, and multinational corporations.",
      "realWorldContext": "Telecommunications and mining companies in Ghana construct ICT centers and clinics in host communities as part of CSR obligations.",
      "objectives": [
        "Analyze the ethical responsibilities of businesses toward consumers, workers, and the environment",
        "Evaluate the social and developmental impact of CSR projects undertaken by corporate entities in Ghana",
        "Assess the benefits and challenges of multinational corporations in the Ghanaian economy"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Business Ethics: Moral principles, values, and standards that guide the conduct, decisions, and practices of commercial enterprises.\n  - Ethical Breaches: False advertising, hoarding goods to inflate prices, adulteration of products, insider trading, offering and receiving bribes, environmental dumping.\n• Corporate Social Responsibility (CSR):\n  - A business commitment to contribute to sustainable economic development by working with employees, their families, local communities, and society at large to improve quality of life.\n  - Areas of CSR: Building school blocks, awarding scholarships, drilling boreholes, constructing health centers, supporting green environmental initiatives.\n• Globalization & Multinational Corporations (MNCs):\n  - Globalization: The increasing worldwide integration and interdependence of national economies, cultures, and financial markets.\n  - MNCs (e.g. Unilever, Nestlé, MTN): Bring foreign direct investment, employment, and technology transfer, but may repatriate profits and dominate domestic competitors.",
          "bulletPoints": [
            "Business Ethics: Moral principles, values, and standards that guide the conduct, decisions, and practices of commercial enterprises.",
            "Ethical Breaches: False advertising, hoarding goods to inflate prices, adulteration of products, insider trading, offering and receiving bribes, environmental dumping.",
            "Corporate Social Responsibility (CSR):",
            "A business commitment to contribute to sustainable economic development by working with employees, their families, local communities, and society at large to improve quality of life.",
            "Areas of CSR: Building school blocks, awarding scholarships, drilling boreholes, constructing health centers, supporting green environmental initiatives.",
            "Globalization & Multinational Corporations (MNCs):",
            "Globalization: The increasing worldwide integration and interdependence of national economies, cultures, and financial markets.",
            "MNCs (e.g. Unilever, Nestlé, MTN): Bring foreign direct investment, employment, and technology transfer, but may repatriate profits and dominate domestic competitors."
          ],
          "keyTakeaway": "In WASSCE essays on CSR, balance arguments: CSR builds brand loyalty and community goodwill, but critics argue it diverts shareholder profits from core investments.",
          "realWorldExample": "Telecommunications and mining companies in Ghana construct ICT centers and clinics in host communities as part of CSR obligations."
        }
      ],
      "wassceExamTips": [
        "In WASSCE essays on CSR, balance arguments: CSR builds brand loyalty and community goodwill, but critics argue it diverts shareholder profits from core investments."
      ],
      "summaryChecklist": [
        "Analyze the ethical responsibilities of businesses toward consumers, workers, and the environment",
        "Evaluate the social and developmental impact of CSR projects undertaken by corporate entities in Ghana",
        "Assess the benefits and challenges of multinational corporations in the Ghanaian economy"
      ]
    },
    "quiz": {
      "id": "quiz-shs-bum-topic-17",
      "topicId": "shs-bum-topic-17",
      "title": "Business Ethics, Corporate Social Responsibility & Globalization Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-bum-17-1",
          "quizId": "quiz-shs-bum-topic-17",
          "questionText": "The voluntary commitment by corporate enterprises to improve the social, educational, and environmental welfare of host communities is:",
          "optionA": "Corporate Social Responsibility (CSR)",
          "optionB": "Transfer pricing",
          "optionC": "Public divestiture",
          "optionD": "Industrial arbitration",
          "correctOption": "A",
          "explanation": "CSR encompasses corporate social initiatives benefiting community and environmental welfare.",
          "subConcept": "Business Ethics, Corporate Social Responsibility & Globalization",
          "remediationTip": "CSR encompasses corporate social initiatives benefiting community and environmental welfare."
        },
        {
          "id": "q-bum-17-2",
          "quizId": "quiz-shs-bum-topic-17",
          "questionText": "Which of the following represents an unethical business practice in the marketplace?",
          "optionA": "Offering prompt payment discounts",
          "optionB": "Hoarding essential goods during shortages to artificially inflate prices",
          "optionC": "Conducting consumer satisfaction surveys",
          "optionD": "Providing product warranties",
          "correctOption": "B",
          "explanation": "Hoarding to exploit artificial shortages violates ethical standards and consumer protection laws.",
          "subConcept": "Business Ethics, Corporate Social Responsibility & Globalization",
          "remediationTip": "Hoarding to exploit artificial shortages violates ethical standards and consumer protection laws."
        },
        {
          "id": "q-bum-17-3",
          "quizId": "quiz-shs-bum-topic-17",
          "questionText": "A primary developmental benefit that multinational corporations (MNCs) bring to developing economies like Ghana is:",
          "optionA": "Abolition of all domestic competition",
          "optionB": "Foreign direct investment, employment creation, and modern technology transfer",
          "optionC": "Total exemption from environmental laws",
          "optionD": "Zero repatriation of capital",
          "correctOption": "B",
          "explanation": "MNCs inject capital, advanced technical expertise, and employment into host nations.",
          "subConcept": "Business Ethics, Corporate Social Responsibility & Globalization",
          "remediationTip": "MNCs inject capital, advanced technical expertise, and employment into host nations."
        }
      ]
    }
  },
  {
    "id": "shs-cst-topic-01",
    "subjectId": "costing",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 1,
    "title": "Nature, Scope & Objectives of Cost Accounting",
    "description": "Cost accounting vs. financial accounting vs. management accounting, cost centers, cost units, and the role of the cost accountant.",
    "isFreeTrial": true,
    "isVip": false,
    "keyNotes": "• Definition & Scope: Cost accounting is the application of accounting and costing principles, methods, and techniques to ascertain costs and control operations.\n• Cost Accounting vs. Financial Accounting:\n  - Financial Accounting: Prepares historical financial statements for external users (shareholders, GRA, creditors); statutory requirement; reports overall profitability.\n  - Cost Accounting: Generates detailed analytical cost data for internal management; used for planning, decision-making, cost control, and pricing; non-statutory.\n• Key Cost Terminology:\n  - Cost Unit: A quantitative unit of product, service, or time in relation to which costs may be ascertained (e.g. per bag of cement, per passenger-kilometer, per kilowatt-hour).\n  - Cost Center: A production or service location, function, or equipment group in respect of which costs may be accumulated and controlled (e.g. Assembly department, Machine shop, Canteen).",
    "detailedNotes": {
      "introduction": "Cost accounting vs. financial accounting vs. management accounting, cost centers, cost units, and the role of the cost accountant.",
      "realWorldContext": "A brewery in Accra uses \"crate of beer\" as its cost unit and the \"bottling plant\" as a major production cost center.",
      "objectives": [
        "Differentiate between Cost Accounting, Financial Accounting, and Management Accounting",
        "Identify appropriate cost units and cost centers across various industrial sectors in Ghana",
        "Analyze the primary objectives of cost ascertainment and cost control"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Definition & Scope: Cost accounting is the application of accounting and costing principles, methods, and techniques to ascertain costs and control operations.\n• Cost Accounting vs. Financial Accounting:\n  - Financial Accounting: Prepares historical financial statements for external users (shareholders, GRA, creditors); statutory requirement; reports overall profitability.\n  - Cost Accounting: Generates detailed analytical cost data for internal management; used for planning, decision-making, cost control, and pricing; non-statutory.\n• Key Cost Terminology:\n  - Cost Unit: A quantitative unit of product, service, or time in relation to which costs may be ascertained (e.g. per bag of cement, per passenger-kilometer, per kilowatt-hour).\n  - Cost Center: A production or service location, function, or equipment group in respect of which costs may be accumulated and controlled (e.g. Assembly department, Machine shop, Canteen).",
          "bulletPoints": [
            "Definition & Scope: Cost accounting is the application of accounting and costing principles, methods, and techniques to ascertain costs and control operations.",
            "Cost Accounting vs. Financial Accounting:",
            "Financial Accounting: Prepares historical financial statements for external users (shareholders, GRA, creditors); statutory requirement; reports overall profitability.",
            "Cost Accounting: Generates detailed analytical cost data for internal management; used for planning, decision-making, cost control, and pricing; non-statutory.",
            "Key Cost Terminology:",
            "Cost Unit: A quantitative unit of product, service, or time in relation to which costs may be ascertained (e.g. per bag of cement, per passenger-kilometer, per kilowatt-hour).",
            "Cost Center: A production or service location, function, or equipment group in respect of which costs may be accumulated and controlled (e.g. Assembly department, Machine shop, Canteen)."
          ],
          "keyTakeaway": "WASSCE Question 1 often requires a tabular comparison between Financial Accounting and Cost Accounting on users, time horizon, regulation, and report format.",
          "realWorldExample": "A brewery in Accra uses \"crate of beer\" as its cost unit and the \"bottling plant\" as a major production cost center."
        }
      ],
      "wassceExamTips": [
        "WASSCE Question 1 often requires a tabular comparison between Financial Accounting and Cost Accounting on users, time horizon, regulation, and report format."
      ],
      "summaryChecklist": [
        "Differentiate between Cost Accounting, Financial Accounting, and Management Accounting",
        "Identify appropriate cost units and cost centers across various industrial sectors in Ghana",
        "Analyze the primary objectives of cost ascertainment and cost control"
      ]
    },
    "quiz": {
      "id": "quiz-shs-cst-topic-01",
      "topicId": "shs-cst-topic-01",
      "title": "Nature, Scope & Objectives of Cost Accounting Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-cst-1-1",
          "quizId": "quiz-shs-cst-topic-01",
          "questionText": "The primary user group for which cost accounting information is generated is:",
          "optionA": "External financial auditors",
          "optionB": "Internal business management",
          "optionC": "The Ghana Revenue Authority",
          "optionD": "General public shareholders",
          "correctOption": "B",
          "explanation": "Cost accounting provides internal operational data to assist managers in pricing, planning, and control.",
          "subConcept": "Nature, Scope & Objectives of Cost Accounting",
          "remediationTip": "Cost accounting provides internal operational data to assist managers in pricing, planning, and control."
        },
        {
          "id": "q-cst-1-2",
          "quizId": "quiz-shs-cst-topic-01",
          "questionText": "A quantitative unit of product or service in relation to which costs are ascertained and expressed is a:",
          "optionA": "Cost center",
          "optionB": "Cost unit",
          "optionC": "Cost driver",
          "optionD": "Cost allocation",
          "correctOption": "B",
          "explanation": "A cost unit is the physical unit of output (e.g. barrel, liter, unit) to which costs attach.",
          "subConcept": "Nature, Scope & Objectives of Cost Accounting",
          "remediationTip": "A cost unit is the physical unit of output (e.g. barrel, liter, unit) to which costs attach."
        },
        {
          "id": "q-cst-1-3",
          "quizId": "quiz-shs-cst-topic-01",
          "questionText": "A production or service department within a factory where costs are accumulated and allocated is termed a:",
          "optionA": "Cost unit",
          "optionB": "Cost center",
          "optionC": "Cost sheet",
          "optionD": "Profit pool",
          "correctOption": "B",
          "explanation": "A cost center is a department or section of an organization for which costs are gathered.",
          "subConcept": "Nature, Scope & Objectives of Cost Accounting",
          "remediationTip": "A cost center is a department or section of an organization for which costs are gathered."
        }
      ]
    }
  },
  {
    "id": "shs-cst-topic-02",
    "subjectId": "costing",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 2,
    "title": "Classification of Costs",
    "description": "Classification by nature (elements: materials, labor, expenses), by traceability (direct vs. indirect), by behavior (fixed, variable, semi-variable), and by function.",
    "isFreeTrial": true,
    "isVip": false,
    "keyNotes": "• Classification by Element:\n  - Materials: Raw materials, components, cleaning supplies.\n  - Labor: Wages paid to factory operatives and supervisors.\n  - Expenses: Rent, machinery depreciation, power, patent royalties.\n• Classification by Traceability:\n  - Direct Costs: Costs that can be economically and directly traced to a specific cost unit (Direct Materials + Direct Labor + Direct Expenses = PRIME COST).\n  - Indirect Costs (Overheads): Costs that cannot be directly traced to a specific unit (Indirect Materials + Indirect Labor + Indirect Expenses = OVERHEADS).\n• Classification by Behavior with Output:\n  - Fixed Cost: Remains constant in total irrespective of output changes within the relevant range (unit fixed cost falls as output rises).\n  - Variable Cost: Varies in direct proportion to changes in production output (unit variable cost remains constant).\n  - Semi-Variable Cost: Contains both fixed and variable elements (e.g. electricity with standing meter charge plus per-unit tariff).",
    "detailedNotes": {
      "introduction": "Classification by nature (elements: materials, labor, expenses), by traceability (direct vs. indirect), by behavior (fixed, variable, semi-variable), and by function.",
      "realWorldContext": "In a Ghanaian furniture workshop, timber and carpenter wages are direct costs (Prime Cost), while factory sandpaper and machine oil are indirect overheads.",
      "objectives": [
        "Classify manufacturing costs by nature, function, and behavior",
        "Calculate Prime Cost, Production Cost, and Total Cost from raw manufacturing data",
        "Differentiate between fixed, variable, and semi-variable cost behaviors diagrammatically"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Classification by Element:\n  - Materials: Raw materials, components, cleaning supplies.\n  - Labor: Wages paid to factory operatives and supervisors.\n  - Expenses: Rent, machinery depreciation, power, patent royalties.\n• Classification by Traceability:\n  - Direct Costs: Costs that can be economically and directly traced to a specific cost unit (Direct Materials + Direct Labor + Direct Expenses = PRIME COST).\n  - Indirect Costs (Overheads): Costs that cannot be directly traced to a specific unit (Indirect Materials + Indirect Labor + Indirect Expenses = OVERHEADS).\n• Classification by Behavior with Output:\n  - Fixed Cost: Remains constant in total irrespective of output changes within the relevant range (unit fixed cost falls as output rises).\n  - Variable Cost: Varies in direct proportion to changes in production output (unit variable cost remains constant).\n  - Semi-Variable Cost: Contains both fixed and variable elements (e.g. electricity with standing meter charge plus per-unit tariff).",
          "bulletPoints": [
            "Classification by Element:",
            "Materials: Raw materials, components, cleaning supplies.",
            "Labor: Wages paid to factory operatives and supervisors.",
            "Expenses: Rent, machinery depreciation, power, patent royalties.",
            "Classification by Traceability:",
            "Direct Costs: Costs that can be economically and directly traced to a specific cost unit (Direct Materials + Direct Labor + Direct Expenses = PRIME COST).",
            "Indirect Costs (Overheads): Costs that cannot be directly traced to a specific unit (Indirect Materials + Indirect Labor + Indirect Expenses = OVERHEADS).",
            "Classification by Behavior with Output:",
            "Fixed Cost: Remains constant in total irrespective of output changes within the relevant range (unit fixed cost falls as output rises).",
            "Variable Cost: Varies in direct proportion to changes in production output (unit variable cost remains constant).",
            "Semi-Variable Cost: Contains both fixed and variable elements (e.g. electricity with standing meter charge plus per-unit tariff)."
          ],
          "keyTakeaway": "Memorize the Golden Formula: Prime Cost = Direct Materials + Direct Labor + Direct Expenses. Prime Cost + Factory Overheads = Production Cost.",
          "realWorldExample": "In a Ghanaian furniture workshop, timber and carpenter wages are direct costs (Prime Cost), while factory sandpaper and machine oil are indirect overheads."
        }
      ],
      "wassceExamTips": [
        "Memorize the Golden Formula: Prime Cost = Direct Materials + Direct Labor + Direct Expenses. Prime Cost + Factory Overheads = Production Cost."
      ],
      "summaryChecklist": [
        "Classify manufacturing costs by nature, function, and behavior",
        "Calculate Prime Cost, Production Cost, and Total Cost from raw manufacturing data",
        "Differentiate between fixed, variable, and semi-variable cost behaviors diagrammatically"
      ]
    },
    "quiz": {
      "id": "quiz-shs-cst-topic-02",
      "topicId": "shs-cst-topic-02",
      "title": "Classification of Costs Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-cst-2-1",
          "quizId": "quiz-shs-cst-topic-02",
          "questionText": "The summation of Direct Materials, Direct Labor, and Direct Expenses is defined as:",
          "optionA": "Production Cost",
          "optionB": "Prime Cost",
          "optionC": "Conversion Cost",
          "optionD": "Factory Overhead",
          "correctOption": "B",
          "explanation": "Prime Cost represents the primary direct costs directly traceable to manufacturing output.",
          "subConcept": "Classification of Costs",
          "remediationTip": "Prime Cost represents the primary direct costs directly traceable to manufacturing output."
        },
        {
          "id": "q-cst-2-2",
          "quizId": "quiz-shs-cst-topic-02",
          "questionText": "A cost that remains constant in total regardless of output changes, but decreases on a per-unit basis as output increases, is a:",
          "optionA": "Variable cost",
          "optionB": "Fixed cost",
          "optionC": "Semi-variable cost",
          "optionD": "Marginal cost",
          "correctOption": "B",
          "explanation": "Total fixed cost is static; spreading it over more units reduces the fixed cost per unit.",
          "subConcept": "Classification of Costs",
          "remediationTip": "Total fixed cost is static; spreading it over more units reduces the fixed cost per unit."
        },
        {
          "id": "q-cst-2-3",
          "quizId": "quiz-shs-cst-topic-02",
          "questionText": "Royalty paid per unit produced to a patent holder is classified as a:",
          "optionA": "Direct Expense",
          "optionB": "Indirect Material",
          "optionC": "Administrative Overhead",
          "optionD": "Fixed Cost",
          "correctOption": "A",
          "explanation": "Royalties directly linked to unit production are direct chargeable expenses included in Prime Cost.",
          "subConcept": "Classification of Costs",
          "remediationTip": "Royalties directly linked to unit production are direct chargeable expenses included in Prime Cost."
        }
      ]
    }
  },
  {
    "id": "shs-cst-topic-03",
    "subjectId": "costing",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 3,
    "title": "Materials Costing: Purchasing, Storage & Inventory Control",
    "description": "Material procurement cycle, storekeeping documents (purchase requisition, purchase order, goods received note, bin card, store ledger), and perpetual inventory.",
    "isFreeTrial": true,
    "isVip": false,
    "keyNotes": "• Material Control: Ensuring the right quantity and quality of materials are available at the right time while minimizing storage and holding costs.\n• Purchasing Documentation:\n  - Purchase Requisition: Storekeeper notifies purchasing manager that stock has reached re-order level.\n  - Purchase Order (PO): Purchasing officer sends legal commercial order to chosen supplier.\n  - Goods Received Note (GRN): Receiving department verifies incoming quantity and condition against delivery note.\n  - Materials Requisition Note: Factory foreman formally requests materials from the storeroom for production.\n• Bin Card vs. Stores Ledger Card:\n  - Bin Card: Kept in the storeroom by the storekeeper; records ONLY physical quantities received, issued, and balance; no monetary values.\n  - Stores Ledger Card: Maintained in the Cost Accounting department; records both physical quantities AND monetary cost values.\n• Perpetual Inventory System: Recording every receipt and issue continuously to show physical and book balances at all times without shutting down for stocktaking.",
    "detailedNotes": {
      "introduction": "Material procurement cycle, storekeeping documents (purchase requisition, purchase order, goods received note, bin card, store ledger), and perpetual inventory.",
      "realWorldContext": "Flour mills in Tema maintain computerized stores ledgers and warehouse bin cards to track wheat shipments and prevent theft.",
      "objectives": [
        "Trace the complete documentation flow in the purchasing and inventory issuance cycle",
        "Compare the functions of a Bin Card and a Stores Ledger Card",
        "Evaluate the operational merits of a Perpetual Inventory System"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Material Control: Ensuring the right quantity and quality of materials are available at the right time while minimizing storage and holding costs.\n• Purchasing Documentation:\n  - Purchase Requisition: Storekeeper notifies purchasing manager that stock has reached re-order level.\n  - Purchase Order (PO): Purchasing officer sends legal commercial order to chosen supplier.\n  - Goods Received Note (GRN): Receiving department verifies incoming quantity and condition against delivery note.\n  - Materials Requisition Note: Factory foreman formally requests materials from the storeroom for production.\n• Bin Card vs. Stores Ledger Card:\n  - Bin Card: Kept in the storeroom by the storekeeper; records ONLY physical quantities received, issued, and balance; no monetary values.\n  - Stores Ledger Card: Maintained in the Cost Accounting department; records both physical quantities AND monetary cost values.\n• Perpetual Inventory System: Recording every receipt and issue continuously to show physical and book balances at all times without shutting down for stocktaking.",
          "bulletPoints": [
            "Material Control: Ensuring the right quantity and quality of materials are available at the right time while minimizing storage and holding costs.",
            "Purchasing Documentation:",
            "Purchase Requisition: Storekeeper notifies purchasing manager that stock has reached re-order level.",
            "Purchase Order (PO): Purchasing officer sends legal commercial order to chosen supplier.",
            "Goods Received Note (GRN): Receiving department verifies incoming quantity and condition against delivery note.",
            "Materials Requisition Note: Factory foreman formally requests materials from the storeroom for production.",
            "Bin Card vs. Stores Ledger Card:",
            "Bin Card: Kept in the storeroom by the storekeeper; records ONLY physical quantities received, issued, and balance; no monetary values.",
            "Stores Ledger Card: Maintained in the Cost Accounting department; records both physical quantities AND monetary cost values.",
            "Perpetual Inventory System: Recording every receipt and issue continuously to show physical and book balances at all times without shutting down for stocktaking."
          ],
          "keyTakeaway": "Classic WASSCE distinction: Bin Cards record QUANTITY ONLY (kept in store); Stores Ledger records QUANTITY AND VALUES (kept in cost accounts office).",
          "realWorldExample": "Flour mills in Tema maintain computerized stores ledgers and warehouse bin cards to track wheat shipments and prevent theft."
        }
      ],
      "wassceExamTips": [
        "Classic WASSCE distinction: Bin Cards record QUANTITY ONLY (kept in store); Stores Ledger records QUANTITY AND VALUES (kept in cost accounts office)."
      ],
      "summaryChecklist": [
        "Trace the complete documentation flow in the purchasing and inventory issuance cycle",
        "Compare the functions of a Bin Card and a Stores Ledger Card",
        "Evaluate the operational merits of a Perpetual Inventory System"
      ]
    },
    "quiz": {
      "id": "quiz-shs-cst-topic-03",
      "topicId": "shs-cst-topic-03",
      "title": "Materials Costing: Purchasing, Storage & Inventory Control Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-cst-3-1",
          "quizId": "quiz-shs-cst-topic-03",
          "questionText": "A Bin Card is kept in the storeroom by the storekeeper to record:",
          "optionA": "Monetary values of stocks only",
          "optionB": "Physical quantities of materials received, issued, and in stock",
          "optionC": "Workers' gross wages and taxes",
          "optionD": "Suppliers' invoice numbers",
          "correctOption": "B",
          "explanation": "Bin cards track physical inventory quantities directly at the warehouse bins without financial values.",
          "subConcept": "Materials Costing: Purchasing, Storage & Inventory Control",
          "remediationTip": "Bin cards track physical inventory quantities directly at the warehouse bins without financial values."
        },
        {
          "id": "q-cst-3-2",
          "quizId": "quiz-shs-cst-topic-03",
          "questionText": "Which internal document is issued by the receiving bay to acknowledge that materials from a supplier have arrived and been inspected?",
          "optionA": "Purchase Requisition",
          "optionB": "Goods Received Note (GRN)",
          "optionC": "Invoice",
          "optionD": "Credit Note",
          "correctOption": "B",
          "explanation": "A GRN certifies the quantity and condition of goods delivered by an external supplier.",
          "subConcept": "Materials Costing: Purchasing, Storage & Inventory Control",
          "remediationTip": "A GRN certifies the quantity and condition of goods delivered by an external supplier."
        },
        {
          "id": "q-cst-3-3",
          "quizId": "quiz-shs-cst-topic-03",
          "questionText": "A continuous stock recording method that updates inventory balances after every receipt and issue of material is called a:",
          "optionA": "Periodic stocktaking system",
          "optionB": "Perpetual inventory system",
          "optionC": "Annual physical count",
          "optionD": "FIFO system",
          "correctOption": "B",
          "explanation": "The perpetual inventory system maintains real-time running balances of all inventory lines.",
          "subConcept": "Materials Costing: Purchasing, Storage & Inventory Control",
          "remediationTip": "The perpetual inventory system maintains real-time running balances of all inventory lines."
        }
      ]
    }
  },
  {
    "id": "shs-cst-topic-04",
    "subjectId": "costing",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 4,
    "title": "Inventory Valuation Methods: FIFO, LIFO & AVCO",
    "description": "First-In First-Out (FIFO), Last-In First-Out (LIFO), Weighted Average Cost (AVCO), stores ledger preparation, and impact on profit during inflation.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Inventory Pricing Methods:\n  - First-In, First-Out (FIFO):\n    * Principle: Assumes materials issued to production are drawn from the oldest stock first. Closing stock is valued at the most recent purchase prices.\n    * Effect in Inflationary Times: Produces lower cost of sales, higher gross profit, and higher closing stock valuation on the balance sheet.\n  - Last-In, First-Out (LIFO):\n    * Principle: Assumes materials issued to production are drawn from the newest stock first. Closing stock is valued at older, historic purchase prices.\n    * Effect in Inflationary Times: Produces higher cost of sales, lower reported profit (tax advantage), but undervalues inventory on the balance sheet. (Disallowed under IAS 2).\n  - Weighted Average Cost (AVCO):\n    * Principle: Materials are issued at a weighted average price computed after every receipt: Weighted Price = (Total Cost of Stock on Hand) / (Total Quantity on Hand).\n    * Smooths out violent market price fluctuations.",
    "detailedNotes": {
      "introduction": "First-In First-Out (FIFO), Last-In First-Out (LIFO), Weighted Average Cost (AVCO), stores ledger preparation, and impact on profit during inflation.",
      "realWorldContext": "During periods of high inflation in Ghana, manufacturing companies track material pricing closely to ensure cost recovery.",
      "objectives": [
        "Prepare comprehensive Stores Ledger Accounts using FIFO, LIFO, and AVCO methods",
        "Calculate closing stock values and Cost of Materials Issued from numerical data",
        "Analyze the comparative effects of FIFO and LIFO on reported corporate profit during periods of rising prices"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Inventory Pricing Methods:\n  - First-In, First-Out (FIFO):\n    * Principle: Assumes materials issued to production are drawn from the oldest stock first. Closing stock is valued at the most recent purchase prices.\n    * Effect in Inflationary Times: Produces lower cost of sales, higher gross profit, and higher closing stock valuation on the balance sheet.\n  - Last-In, First-Out (LIFO):\n    * Principle: Assumes materials issued to production are drawn from the newest stock first. Closing stock is valued at older, historic purchase prices.\n    * Effect in Inflationary Times: Produces higher cost of sales, lower reported profit (tax advantage), but undervalues inventory on the balance sheet. (Disallowed under IAS 2).\n  - Weighted Average Cost (AVCO):\n    * Principle: Materials are issued at a weighted average price computed after every receipt: Weighted Price = (Total Cost of Stock on Hand) / (Total Quantity on Hand).\n    * Smooths out violent market price fluctuations.",
          "bulletPoints": [
            "Inventory Pricing Methods:",
            "First-In, First-Out (FIFO):",
            "Last-In, First-Out (LIFO):",
            "Weighted Average Cost (AVCO):"
          ],
          "keyTakeaway": "In WASSCE practical problems, set up neat columns for Date, Receipts (Qty, Rate, Amt), Issues (Qty, Rate, Amt), and Balance (Qty, Rate, Amt).",
          "realWorldExample": "During periods of high inflation in Ghana, manufacturing companies track material pricing closely to ensure cost recovery."
        }
      ],
      "wassceExamTips": [
        "In WASSCE practical problems, set up neat columns for Date, Receipts (Qty, Rate, Amt), Issues (Qty, Rate, Amt), and Balance (Qty, Rate, Amt)."
      ],
      "summaryChecklist": [
        "Prepare comprehensive Stores Ledger Accounts using FIFO, LIFO, and AVCO methods",
        "Calculate closing stock values and Cost of Materials Issued from numerical data",
        "Analyze the comparative effects of FIFO and LIFO on reported corporate profit during periods of rising prices"
      ]
    },
    "quiz": {
      "id": "quiz-shs-cst-topic-04",
      "topicId": "shs-cst-topic-04",
      "title": "Inventory Valuation Methods: FIFO, LIFO & AVCO Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-cst-4-1",
          "quizId": "quiz-shs-cst-topic-04",
          "questionText": "During a period of rising prices (inflation), which inventory valuation method results in the highest reported net profit?",
          "optionA": "Last-In First-Out (LIFO)",
          "optionB": "First-In First-Out (FIFO)",
          "optionC": "Simple Average",
          "optionD": "Standard Costing",
          "correctOption": "B",
          "explanation": "FIFO issues older, cheaper stock to production, reducing cost of sales and increasing reported profit.",
          "subConcept": "Inventory Valuation Methods: FIFO, LIFO & AVCO",
          "remediationTip": "FIFO issues older, cheaper stock to production, reducing cost of sales and increasing reported profit."
        },
        {
          "id": "q-cst-4-2",
          "quizId": "quiz-shs-cst-topic-04",
          "questionText": "Under the Weighted Average Cost (AVCO) method, the issue price is re-calculated:",
          "optionA": "At the end of each financial year",
          "optionB": "Every time a new consignment of materials is received into the storeroom",
          "optionC": "Every time goods are issued to the factory floor",
          "optionD": "When raw materials expire",
          "correctOption": "B",
          "explanation": "A new weighted average rate is determined whenever new materials enter at different purchase prices.",
          "subConcept": "Inventory Valuation Methods: FIFO, LIFO & AVCO",
          "remediationTip": "A new weighted average rate is determined whenever new materials enter at different purchase prices."
        },
        {
          "id": "q-cst-4-3",
          "quizId": "quiz-shs-cst-topic-04",
          "questionText": "Which inventory valuation method is prohibited under International Accounting Standard 2 (IAS 2) because it understates closing inventory values?",
          "optionA": "FIFO",
          "optionB": "LIFO",
          "optionC": "Weighted Average",
          "optionD": "Specific Identification",
          "correctOption": "B",
          "explanation": "IAS 2 disallows LIFO because it distorts balance sheet inventory valuation during price changes.",
          "subConcept": "Inventory Valuation Methods: FIFO, LIFO & AVCO",
          "remediationTip": "IAS 2 disallows LIFO because it distorts balance sheet inventory valuation during price changes."
        }
      ]
    }
  },
  {
    "id": "shs-cst-topic-05",
    "subjectId": "costing",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 5,
    "title": "Stock Control Levels & Economic Order Quantity (EOQ)",
    "description": "Re-order level, minimum stock level, maximum stock level, buffer stock, EOQ formula calculation, and carrying vs. ordering cost graphs.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Stock Control Levels Formulas:\n  - Re-Order Level (ROL) = Maximum Consumption * Maximum Lead Time.\n  - Minimum Stock Level = ROL - (Normal Consumption * Normal Lead Time).\n  - Maximum Stock Level = ROL + Re-Order Quantity - (Minimum Consumption * Minimum Lead Time).\n  - Average Stock Level = Minimum Stock + 1/2(Re-Order Quantity).\n• Economic Order Quantity (EOQ):\n  - Definition: The optimal order size that minimizes the total costs of ordering and holding inventory.\n  - Formula: EOQ = sqrt( (2 * D * Co) / Ch )\n    * D = Annual Demand / Consumption in units.\n    * Co = Cost of placing one order.\n    * Ch = Cost of holding / carrying one unit for one year.\n  - Graphical Relationship: At the EOQ point, Total Ordering Cost EQUALS Total Carrying Cost! Total Cost curve is at its absolute minimum.",
    "detailedNotes": {
      "introduction": "Re-order level, minimum stock level, maximum stock level, buffer stock, EOQ formula calculation, and carrying vs. ordering cost graphs.",
      "realWorldContext": "Pharmaceutical distributors in Accra calculate EOQ to avoid running out of essential drugs while minimizing cold-room storage electricity costs.",
      "objectives": [
        "Calculate Re-order Level, Minimum Level, and Maximum Level using standard formulas",
        "Derive and calculate the Economic Order Quantity (EOQ) from given parameters",
        "Interpret the graphical trade-off between ordering costs and holding costs"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Stock Control Levels Formulas:\n  - Re-Order Level (ROL) = Maximum Consumption * Maximum Lead Time.\n  - Minimum Stock Level = ROL - (Normal Consumption * Normal Lead Time).\n  - Maximum Stock Level = ROL + Re-Order Quantity - (Minimum Consumption * Minimum Lead Time).\n  - Average Stock Level = Minimum Stock + 1/2(Re-Order Quantity).\n• Economic Order Quantity (EOQ):\n  - Definition: The optimal order size that minimizes the total costs of ordering and holding inventory.\n  - Formula: EOQ = sqrt( (2 * D * Co) / Ch )\n    * D = Annual Demand / Consumption in units.\n    * Co = Cost of placing one order.\n    * Ch = Cost of holding / carrying one unit for one year.\n  - Graphical Relationship: At the EOQ point, Total Ordering Cost EQUALS Total Carrying Cost! Total Cost curve is at its absolute minimum.",
          "bulletPoints": [
            "Stock Control Levels Formulas:",
            "Re-Order Level (ROL) = Maximum Consumption * Maximum Lead Time.",
            "Minimum Stock Level = ROL - (Normal Consumption * Normal Lead Time).",
            "Maximum Stock Level = ROL + Re-Order Quantity - (Minimum Consumption * Minimum Lead Time).",
            "Average Stock Level = Minimum Stock + 1/2(Re-Order Quantity).",
            "Economic Order Quantity (EOQ):",
            "Definition: The optimal order size that minimizes the total costs of ordering and holding inventory.",
            "Formula: EOQ = sqrt( (2 * D * Co) / Ch )",
            "Graphical Relationship: At the EOQ point, Total Ordering Cost EQUALS Total Carrying Cost! Total Cost curve is at its absolute minimum."
          ],
          "keyTakeaway": "In EOQ calculations, ensure time units match: annual demand must pair with annual holding cost per unit.",
          "realWorldExample": "Pharmaceutical distributors in Accra calculate EOQ to avoid running out of essential drugs while minimizing cold-room storage electricity costs."
        }
      ],
      "wassceExamTips": [
        "In EOQ calculations, ensure time units match: annual demand must pair with annual holding cost per unit."
      ],
      "summaryChecklist": [
        "Calculate Re-order Level, Minimum Level, and Maximum Level using standard formulas",
        "Derive and calculate the Economic Order Quantity (EOQ) from given parameters",
        "Interpret the graphical trade-off between ordering costs and holding costs"
      ]
    },
    "quiz": {
      "id": "quiz-shs-cst-topic-05",
      "topicId": "shs-cst-topic-05",
      "title": "Stock Control Levels & Economic Order Quantity (EOQ) Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-cst-5-1",
          "quizId": "quiz-shs-cst-topic-05",
          "questionText": "At the Economic Order Quantity (EOQ) point, which two cost components are precisely equal to each other?",
          "optionA": "Prime cost and factory overhead",
          "optionB": "Total annual ordering cost and total annual carrying (holding) cost",
          "optionC": "Purchase price and transportation cost",
          "optionD": "Direct labor cost and scrap loss",
          "correctOption": "B",
          "explanation": "EOQ occurs where the declining ordering cost curve intersects the rising carrying cost curve.",
          "subConcept": "Stock Control Levels & Economic Order Quantity (EOQ)",
          "remediationTip": "EOQ occurs where the declining ordering cost curve intersects the rising carrying cost curve."
        },
        {
          "id": "q-cst-5-2",
          "quizId": "quiz-shs-cst-topic-05",
          "questionText": "The stock level at which a new purchase order must be initiated to prevent stock-outs is the:",
          "optionA": "Maximum level",
          "optionB": "Re-order level",
          "optionC": "Danger level",
          "optionD": "Average stock",
          "correctOption": "B",
          "explanation": "The Re-Order Level is the trigger inventory point at which a replenishment order is placed.",
          "subConcept": "Stock Control Levels & Economic Order Quantity (EOQ)",
          "remediationTip": "The Re-Order Level is the trigger inventory point at which a replenishment order is placed."
        },
        {
          "id": "q-cst-5-3",
          "quizId": "quiz-shs-cst-topic-05",
          "questionText": "If annual demand is 10,000 units, ordering cost is GH₵ 50 per order, and holding cost is GH₵ 4 per unit/year, the EOQ is:",
          "optionA": "250 units",
          "optionB": "500 units",
          "optionC": "1,000 units",
          "optionD": "2,500 units",
          "correctOption": "B",
          "explanation": "EOQ = sqrt((2 * 10,000 * 50) / 4) = sqrt(250,000) = 500 units.",
          "subConcept": "Stock Control Levels & Economic Order Quantity (EOQ)",
          "remediationTip": "EOQ = sqrt((2 * 10,000 * 50) / 4) = sqrt(250,000) = 500 units."
        }
      ]
    }
  },
  {
    "id": "shs-cst-topic-06",
    "subjectId": "costing",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 6,
    "title": "Labor Costing: Remuneration & Incentive Schemes",
    "description": "Time rate systems, straight piece rate, piece rate with guaranteed day wage, differential piece rates (Taylor, Merrick), and Halsey & Rowan premium schemes.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Remuneration Systems:\n  - Time-Rate System: Wages based purely on hours worked: Earnings = Hours Worked * Hourly Rate. Advantage: Quality-focused, simple; Disadvantage: No incentive to produce more.\n  - Straight Piece-Rate System: Wages based purely on units produced: Earnings = Units Produced * Piece Rate. Advantage: Directly stimulates high output; Disadvantage: Quality may suffer, worker fatigue.\n• Premium Bonus Schemes (Reward for Time Saved):\n  - Time Saved = Time Allowed - Time Taken.\n  - Halsey Scheme: Worker receives standard time wage PLUS a bonus of 50% of the time saved: Bonus = 1/2 * (Time Saved) * Hourly Rate. Total Pay = (Time Taken * Rate) + Bonus.\n  - Rowan Scheme: Worker receives a bonus proportioned to the fraction of time saved: Bonus = (Time Saved / Time Allowed) * (Time Taken * Hourly Rate). Total Pay = (Time Taken * Rate) + Bonus.",
    "detailedNotes": {
      "introduction": "Time rate systems, straight piece rate, piece rate with guaranteed day wage, differential piece rates (Taylor, Merrick), and Halsey & Rowan premium schemes.",
      "realWorldContext": "Garment factories in the Tema Free Zones enclave pay sewing machine operators piece-rate bonuses to hit export production quotas.",
      "objectives": [
        "Compute gross earnings under Time-Rate and Piece-Rate wage systems",
        "Calculate employee bonuses and total remuneration using Halsey and Rowan incentive schemes",
        "Compare the motivational and cost effects of Halsey versus Rowan schemes"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Remuneration Systems:\n  - Time-Rate System: Wages based purely on hours worked: Earnings = Hours Worked * Hourly Rate. Advantage: Quality-focused, simple; Disadvantage: No incentive to produce more.\n  - Straight Piece-Rate System: Wages based purely on units produced: Earnings = Units Produced * Piece Rate. Advantage: Directly stimulates high output; Disadvantage: Quality may suffer, worker fatigue.\n• Premium Bonus Schemes (Reward for Time Saved):\n  - Time Saved = Time Allowed - Time Taken.\n  - Halsey Scheme: Worker receives standard time wage PLUS a bonus of 50% of the time saved: Bonus = 1/2 * (Time Saved) * Hourly Rate. Total Pay = (Time Taken * Rate) + Bonus.\n  - Rowan Scheme: Worker receives a bonus proportioned to the fraction of time saved: Bonus = (Time Saved / Time Allowed) * (Time Taken * Hourly Rate). Total Pay = (Time Taken * Rate) + Bonus.",
          "bulletPoints": [
            "Remuneration Systems:",
            "Time-Rate System: Wages based purely on hours worked: Earnings = Hours Worked * Hourly Rate. Advantage: Quality-focused, simple; Disadvantage: No incentive to produce more.",
            "Straight Piece-Rate System: Wages based purely on units produced: Earnings = Units Produced * Piece Rate. Advantage: Directly stimulates high output; Disadvantage: Quality may suffer, worker fatigue.",
            "Premium Bonus Schemes (Reward for Time Saved):",
            "Time Saved = Time Allowed - Time Taken.",
            "Halsey Scheme: Worker receives standard time wage PLUS a bonus of 50% of the time saved: Bonus = 1/2 * (Time Saved) * Hourly Rate. Total Pay = (Time Taken * Rate) + Bonus.",
            "Rowan Scheme: Worker receives a bonus proportioned to the fraction of time saved: Bonus = (Time Saved / Time Allowed) * (Time Taken * Hourly Rate). Total Pay = (Time Taken * Rate) + Bonus."
          ],
          "keyTakeaway": "In Halsey, bonus is always 50% of time saved times rate. In Rowan, bonus fraction is (Time Saved / Time Allowed) times actual wages.",
          "realWorldExample": "Garment factories in the Tema Free Zones enclave pay sewing machine operators piece-rate bonuses to hit export production quotas."
        }
      ],
      "wassceExamTips": [
        "In Halsey, bonus is always 50% of time saved times rate. In Rowan, bonus fraction is (Time Saved / Time Allowed) times actual wages."
      ],
      "summaryChecklist": [
        "Compute gross earnings under Time-Rate and Piece-Rate wage systems",
        "Calculate employee bonuses and total remuneration using Halsey and Rowan incentive schemes",
        "Compare the motivational and cost effects of Halsey versus Rowan schemes"
      ]
    },
    "quiz": {
      "id": "quiz-shs-cst-topic-06",
      "topicId": "shs-cst-topic-06",
      "title": "Labor Costing: Remuneration & Incentive Schemes Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-cst-6-1",
          "quizId": "quiz-shs-cst-topic-06",
          "questionText": "Under the Halsey Premium Bonus Scheme, the worker is typically awarded a bonus equal to what proportion of the time saved?",
          "optionA": "25%",
          "optionB": "50%",
          "optionC": "75%",
          "optionD": "100%",
          "correctOption": "B",
          "explanation": "The Halsey plan typically splits the savings equally: 50% bonus to the worker and 50% retained by the employer.",
          "subConcept": "Labor Costing: Remuneration & Incentive Schemes",
          "remediationTip": "The Halsey plan typically splits the savings equally: 50% bonus to the worker and 50% retained by the employer."
        },
        {
          "id": "q-cst-6-2",
          "quizId": "quiz-shs-cst-topic-06",
          "questionText": "A worker is allowed 10 hours to complete a job, finishes it in 8 hours at an hourly rate of GH₵ 10. Under the Rowan Scheme, the bonus earned is:",
          "optionA": "GH₵ 10",
          "optionB": "GH₵ 16",
          "optionC": "GH₵ 20",
          "optionD": "GH₵ 80",
          "correctOption": "B",
          "explanation": "Time saved = 2 hrs. Bonus = (Time Saved / Time Allowed) * (Time Taken * Rate) = (2/10) * (8 * 10) = 0.2 * 80 = GH₵ 16.",
          "subConcept": "Labor Costing: Remuneration & Incentive Schemes",
          "remediationTip": "Time saved = 2 hrs. Bonus = (Time Saved / Time Allowed) * (Time Taken * Rate) = (2/10) * (8 * 10) = 0.2 * 80 = GH₵ 16."
        },
        {
          "id": "q-cst-6-3",
          "quizId": "quiz-shs-cst-topic-06",
          "questionText": "Which wage system calculates total pay strictly by multiplying the number of units produced by a fixed rate per unit?",
          "optionA": "Time rate",
          "optionB": "Straight piece rate",
          "optionC": "Halsey scheme",
          "optionD": "Overtime premium",
          "correctOption": "B",
          "explanation": "Piece rate ties remuneration directly to physical output.",
          "subConcept": "Labor Costing: Remuneration & Incentive Schemes",
          "remediationTip": "Piece rate ties remuneration directly to physical output."
        }
      ]
    }
  },
  {
    "id": "shs-cst-topic-07",
    "subjectId": "costing",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 7,
    "title": "Labor Turnover & Payroll Administration",
    "description": "Causes, costs, and measurement of labor turnover (separation, flux, replacement methods), payroll deductions (SSNIT, PAYE in Ghana), and net pay.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Labor Turnover: The rate at which employees leave an organization and are replaced over a given period.\n  - Measurement Methods:\n    * Separation Method: (Separations / Average Workforce) * 100.\n    * Replacement Method: (Replacements / Average Workforce) * 100.\n    * Flux Method: [(Separations + Replacements) / Average Workforce] * 100.\n  - Costs of Labor Turnover: Preventive costs (welfare, safety, pensions) vs. Replacement costs (recruitment ads, interview time, training of green labor, scrap waste).\n• Ghanaian Payroll Structure:\n  - Gross Earnings = Basic Wage + Overtime + Allowances (transport, housing, risk).\n  - Mandatory Statutory Deductions:\n    * SSNIT Tier 1 & Tier 2: Employee contributes 5.5% of basic salary; Employer contributes 13% of basic salary.\n    * PAYE (Pay-As-You-Earn): Graduated income tax deducted at source under GRA rates.\n  - Net Pay (Take-Home Pay) = Gross Earnings - Total Deductions.",
    "detailedNotes": {
      "introduction": "Causes, costs, and measurement of labor turnover (separation, flux, replacement methods), payroll deductions (SSNIT, PAYE in Ghana), and net pay.",
      "realWorldContext": "Ghanaian employers must deduct 5.5% SSNIT from workers and remit it with their 13% employer contribution to the Social Security Trust by the 14th of each month.",
      "objectives": [
        "Calculate labor turnover rates using separation, replacement, and flux formulas",
        "Distinguish between preventive costs and replacement costs of labor turnover",
        "Prepare a standard payroll sheet calculating SSNIT (5.5%), PAYE, and Net Pay in Ghana"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Labor Turnover: The rate at which employees leave an organization and are replaced over a given period.\n  - Measurement Methods:\n    * Separation Method: (Separations / Average Workforce) * 100.\n    * Replacement Method: (Replacements / Average Workforce) * 100.\n    * Flux Method: [(Separations + Replacements) / Average Workforce] * 100.\n  - Costs of Labor Turnover: Preventive costs (welfare, safety, pensions) vs. Replacement costs (recruitment ads, interview time, training of green labor, scrap waste).\n• Ghanaian Payroll Structure:\n  - Gross Earnings = Basic Wage + Overtime + Allowances (transport, housing, risk).\n  - Mandatory Statutory Deductions:\n    * SSNIT Tier 1 & Tier 2: Employee contributes 5.5% of basic salary; Employer contributes 13% of basic salary.\n    * PAYE (Pay-As-You-Earn): Graduated income tax deducted at source under GRA rates.\n  - Net Pay (Take-Home Pay) = Gross Earnings - Total Deductions.",
          "bulletPoints": [
            "Labor Turnover: The rate at which employees leave an organization and are replaced over a given period.",
            "Measurement Methods:",
            "Costs of Labor Turnover: Preventive costs (welfare, safety, pensions) vs. Replacement costs (recruitment ads, interview time, training of green labor, scrap waste).",
            "Ghanaian Payroll Structure:",
            "Gross Earnings = Basic Wage + Overtime + Allowances (transport, housing, risk).",
            "Mandatory Statutory Deductions:",
            "Net Pay (Take-Home Pay) = Gross Earnings - Total Deductions."
          ],
          "keyTakeaway": "In WASSCE Payroll problems, remember that employer's SSNIT (13%) is an overhead expense for the company, NOT deducted from the worker's gross pay.",
          "realWorldExample": "Ghanaian employers must deduct 5.5% SSNIT from workers and remit it with their 13% employer contribution to the Social Security Trust by the 14th of each month."
        }
      ],
      "wassceExamTips": [
        "In WASSCE Payroll problems, remember that employer's SSNIT (13%) is an overhead expense for the company, NOT deducted from the worker's gross pay."
      ],
      "summaryChecklist": [
        "Calculate labor turnover rates using separation, replacement, and flux formulas",
        "Distinguish between preventive costs and replacement costs of labor turnover",
        "Prepare a standard payroll sheet calculating SSNIT (5.5%), PAYE, and Net Pay in Ghana"
      ]
    },
    "quiz": {
      "id": "quiz-shs-cst-topic-07",
      "topicId": "shs-cst-topic-07",
      "title": "Labor Turnover & Payroll Administration Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-cst-7-1",
          "quizId": "quiz-shs-cst-topic-07",
          "questionText": "Under the National Pensions Act of Ghana, what percentage of an employee's basic salary is deducted as the mandatory employee SSNIT contribution?",
          "optionA": "5.5%",
          "optionB": "13.0%",
          "optionC": "17.5%",
          "optionD": "18.5%",
          "correctOption": "A",
          "explanation": "The worker contributes 5.5% from gross basic salary; the employer contributes 13%.",
          "subConcept": "Labor Turnover & Payroll Administration",
          "remediationTip": "The worker contributes 5.5% from gross basic salary; the employer contributes 13%."
        },
        {
          "id": "q-cst-7-2",
          "quizId": "quiz-shs-cst-topic-07",
          "questionText": "If a company had an average workforce of 500, with 25 workers recruited to replace staff who resigned during the year, the replacement turnover rate is:",
          "optionA": "2.5%",
          "optionB": "5.0%",
          "optionC": "10.0%",
          "optionD": "12.5%",
          "correctOption": "B",
          "explanation": "Replacement Rate = (25 / 500) * 100 = 5%.",
          "subConcept": "Labor Turnover & Payroll Administration",
          "remediationTip": "Replacement Rate = (25 / 500) * 100 = 5%."
        },
        {
          "id": "q-cst-7-3",
          "quizId": "quiz-shs-cst-topic-07",
          "questionText": "Costs incurred to keep workers happy and prevent them from leaving (e.g. good pensions, medical care) are termed:",
          "optionA": "Replacement costs",
          "optionB": "Preventive costs",
          "optionC": "Prime costs",
          "optionD": "Idle time costs",
          "correctOption": "B",
          "explanation": "Preventive costs are proactive expenditures designed to maintain worker stability and prevent resignations.",
          "subConcept": "Labor Turnover & Payroll Administration",
          "remediationTip": "Preventive costs are proactive expenditures designed to maintain worker stability and prevent resignations."
        }
      ]
    }
  },
  {
    "id": "shs-cst-topic-08",
    "subjectId": "costing",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 8,
    "title": "Overheads: Classification & Allocation",
    "description": "Overhead classification (production, administration, selling, distribution), cost allocation vs. cost apportionment, and primary distribution sheets.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Overheads Defined: The aggregate of indirect materials, indirect labor, and indirect expenses which cannot be traced directly to a specific cost unit.\n• Classification by Function:\n  - Production Overheads: Factory rent, machinery depreciation, factory power, supervisor salaries.\n  - Administration Overheads: Head office rent, executive salaries, audit fees, secretarial expenses.\n  - Selling & Distribution Overheads: Salesmen commission, advertising, delivery van fuel and depreciation.\n• Three-Stage Overhead Treatment:\n  1. Allocation: Charging an overhead item that relates wholly and directly to a specific department (e.g. salary of canteen supervisor charged 100% to Canteen).\n  2. Apportionment: Sharing common overhead costs among multiple beneficiary departments on an equitable basis:\n     - Factory Rent & Rates: Apportioned on Floor Area (sq meters).\n     - Machinery Depreciation & Insurance: Apportioned on Capital Value of Machinery.\n     - Canteen & First Aid: Apportioned on Number of Employees.\n     - Electric Lighting: Apportioned on Number of Light Points or Floor Area.\n  3. Absorption: Charging overheads into individual cost units.",
    "detailedNotes": {
      "introduction": "Overhead classification (production, administration, selling, distribution), cost allocation vs. cost apportionment, and primary distribution sheets.",
      "realWorldContext": "A processing factory in Tema apportions its factory power bills across Machining, Assembly, and Packaging based on machine kilowatt hours.",
      "objectives": [
        "Classify overheads by organizational function (production, administration, selling)",
        "Distinguish between overhead allocation and overhead apportionment",
        "Prepare an Overhead Primary Distribution Sheet using appropriate apportionment bases"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Overheads Defined: The aggregate of indirect materials, indirect labor, and indirect expenses which cannot be traced directly to a specific cost unit.\n• Classification by Function:\n  - Production Overheads: Factory rent, machinery depreciation, factory power, supervisor salaries.\n  - Administration Overheads: Head office rent, executive salaries, audit fees, secretarial expenses.\n  - Selling & Distribution Overheads: Salesmen commission, advertising, delivery van fuel and depreciation.\n• Three-Stage Overhead Treatment:\n  1. Allocation: Charging an overhead item that relates wholly and directly to a specific department (e.g. salary of canteen supervisor charged 100% to Canteen).\n  2. Apportionment: Sharing common overhead costs among multiple beneficiary departments on an equitable basis:\n     - Factory Rent & Rates: Apportioned on Floor Area (sq meters).\n     - Machinery Depreciation & Insurance: Apportioned on Capital Value of Machinery.\n     - Canteen & First Aid: Apportioned on Number of Employees.\n     - Electric Lighting: Apportioned on Number of Light Points or Floor Area.\n  3. Absorption: Charging overheads into individual cost units.",
          "bulletPoints": [
            "Overheads Defined: The aggregate of indirect materials, indirect labor, and indirect expenses which cannot be traced directly to a specific cost unit.",
            "Classification by Function:",
            "Production Overheads: Factory rent, machinery depreciation, factory power, supervisor salaries.",
            "Administration Overheads: Head office rent, executive salaries, audit fees, secretarial expenses.",
            "Selling & Distribution Overheads: Salesmen commission, advertising, delivery van fuel and depreciation.",
            "Three-Stage Overhead Treatment:",
            "Factory Rent & Rates: Apportioned on Floor Area (sq meters).",
            "Machinery Depreciation & Insurance: Apportioned on Capital Value of Machinery.",
            "Canteen & First Aid: Apportioned on Number of Employees.",
            "Electric Lighting: Apportioned on Number of Light Points or Floor Area."
          ],
          "keyTakeaway": "Memorize standard bases: Rent -> Floor Area; Machine Depreciation -> Machine Value; Canteen -> Number of Employees.",
          "realWorldExample": "A processing factory in Tema apportions its factory power bills across Machining, Assembly, and Packaging based on machine kilowatt hours."
        }
      ],
      "wassceExamTips": [
        "Memorize standard bases: Rent -> Floor Area; Machine Depreciation -> Machine Value; Canteen -> Number of Employees."
      ],
      "summaryChecklist": [
        "Classify overheads by organizational function (production, administration, selling)",
        "Distinguish between overhead allocation and overhead apportionment",
        "Prepare an Overhead Primary Distribution Sheet using appropriate apportionment bases"
      ]
    },
    "quiz": {
      "id": "quiz-shs-cst-topic-08",
      "topicId": "shs-cst-topic-08",
      "title": "Overheads: Classification & Allocation Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-cst-8-1",
          "quizId": "quiz-shs-cst-topic-08",
          "questionText": "The process of charging an entire overhead cost directly to a single department that exclusively caused it is:",
          "optionA": "Overhead apportionment",
          "optionB": "Overhead allocation",
          "optionC": "Overhead absorption",
          "optionD": "Secondary reapportionment",
          "correctOption": "B",
          "explanation": "Allocation assigns whole items of cost directly to identifiable cost centers.",
          "subConcept": "Overheads: Classification & Allocation",
          "remediationTip": "Allocation assigns whole items of cost directly to identifiable cost centers."
        },
        {
          "id": "q-cst-8-2",
          "quizId": "quiz-shs-cst-topic-08",
          "questionText": "Which of the following is the most equitable basis for apportioning factory rent and rates across departments?",
          "optionA": "Number of employees",
          "optionB": "Floor area occupied (square meters)",
          "optionC": "Direct labor hours",
          "optionD": "Cost of raw materials",
          "correctOption": "B",
          "explanation": "Building rent relates to physical space occupied, making floor area the logical basis.",
          "subConcept": "Overheads: Classification & Allocation",
          "remediationTip": "Building rent relates to physical space occupied, making floor area the logical basis."
        },
        {
          "id": "q-cst-8-3",
          "quizId": "quiz-shs-cst-topic-08",
          "questionText": "Expenses incurred in stimulating demand, securing orders, and retaining customers are classified as:",
          "optionA": "Production overheads",
          "optionB": "Selling overheads",
          "optionC": "Distribution overheads",
          "optionD": "Prime costs",
          "correctOption": "B",
          "explanation": "Selling overheads relate directly to sales promotion, advertising, and customer acquisition.",
          "subConcept": "Overheads: Classification & Allocation",
          "remediationTip": "Selling overheads relate directly to sales promotion, advertising, and customer acquisition."
        }
      ]
    }
  },
  {
    "id": "shs-cst-topic-09",
    "subjectId": "costing",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 9,
    "title": "Overhead Absorption & Under/Over Absorption",
    "description": "Predetermined overhead absorption rates (POAR), direct labor hour rate, machine hour rate, calculating and accounting for under- or over-absorbed overheads.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Overhead Absorption: The final stage of charging overhead costs to individual products or jobs using a Predetermined Overhead Absorption Rate (POAR).\n• POAR Formula:\n  - POAR = (Budgeted Overhead Cost) / (Budgeted Activity Level).\n• Common Bases for POAR:\n  - Direct Labor Hour Rate: (Budgeted Overheads / Budgeted Labor Hours) [Best for labor-intensive work].\n  - Machine Hour Rate: (Budgeted Overheads / Budgeted Machine Hours) [Best for automated factories].\n  - Percentage on Direct Wages: (Budgeted Overheads / Budgeted Direct Wages) * 100.\n• Under-Absorption vs. Over-Absorption:\n  - Absorbed Overhead = Actual Activity * POAR.\n  - Over-Absorption: Absorbed Overhead > Actual Overhead incurred (Credit to Profit and Loss).\n  - Under-Absorption: Absorbed Overhead < Actual Overhead incurred (Debit to Profit and Loss as an expense).\n  - Causes of Variance: Actual overheads exceeded budget, or actual activity level differed from planned capacity.",
    "detailedNotes": {
      "introduction": "Predetermined overhead absorption rates (POAR), direct labor hour rate, machine hour rate, calculating and accounting for under- or over-absorbed overheads.",
      "realWorldContext": "Automated cocoa processing factories in Takoradi absorb manufacturing overheads primarily using machine hour rates.",
      "objectives": [
        "Calculate Predetermined Overhead Absorption Rates using labor hours, machine hours, and wage percentages",
        "Compute absorbed overheads and determine under- or over-absorption amounts",
        "Explain the managerial causes and accounting treatment of under/over-absorbed overheads"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Overhead Absorption: The final stage of charging overhead costs to individual products or jobs using a Predetermined Overhead Absorption Rate (POAR).\n• POAR Formula:\n  - POAR = (Budgeted Overhead Cost) / (Budgeted Activity Level).\n• Common Bases for POAR:\n  - Direct Labor Hour Rate: (Budgeted Overheads / Budgeted Labor Hours) [Best for labor-intensive work].\n  - Machine Hour Rate: (Budgeted Overheads / Budgeted Machine Hours) [Best for automated factories].\n  - Percentage on Direct Wages: (Budgeted Overheads / Budgeted Direct Wages) * 100.\n• Under-Absorption vs. Over-Absorption:\n  - Absorbed Overhead = Actual Activity * POAR.\n  - Over-Absorption: Absorbed Overhead > Actual Overhead incurred (Credit to Profit and Loss).\n  - Under-Absorption: Absorbed Overhead < Actual Overhead incurred (Debit to Profit and Loss as an expense).\n  - Causes of Variance: Actual overheads exceeded budget, or actual activity level differed from planned capacity.",
          "bulletPoints": [
            "Overhead Absorption: The final stage of charging overhead costs to individual products or jobs using a Predetermined Overhead Absorption Rate (POAR).",
            "POAR Formula:",
            "POAR = (Budgeted Overhead Cost) / (Budgeted Activity Level).",
            "Common Bases for POAR:",
            "Direct Labor Hour Rate: (Budgeted Overheads / Budgeted Labor Hours) [Best for labor-intensive work].",
            "Machine Hour Rate: (Budgeted Overheads / Budgeted Machine Hours) [Best for automated factories].",
            "Percentage on Direct Wages: (Budgeted Overheads / Budgeted Direct Wages) * 100.",
            "Under-Absorption vs. Over-Absorption:",
            "Absorbed Overhead = Actual Activity * POAR.",
            "Over-Absorption: Absorbed Overhead > Actual Overhead incurred (Credit to Profit and Loss).",
            "Under-Absorption: Absorbed Overhead < Actual Overhead incurred (Debit to Profit and Loss as an expense).",
            "Causes of Variance: Actual overheads exceeded budget, or actual activity level differed from planned capacity."
          ],
          "keyTakeaway": "Remember: If Absorbed Overhead is LESS than Actual Overhead, it is UNDER-absorbed (unfavorable); if MORE, it is OVER-absorbed (favorable).",
          "realWorldExample": "Automated cocoa processing factories in Takoradi absorb manufacturing overheads primarily using machine hour rates."
        }
      ],
      "wassceExamTips": [
        "Remember: If Absorbed Overhead is LESS than Actual Overhead, it is UNDER-absorbed (unfavorable); if MORE, it is OVER-absorbed (favorable)."
      ],
      "summaryChecklist": [
        "Calculate Predetermined Overhead Absorption Rates using labor hours, machine hours, and wage percentages",
        "Compute absorbed overheads and determine under- or over-absorption amounts",
        "Explain the managerial causes and accounting treatment of under/over-absorbed overheads"
      ]
    },
    "quiz": {
      "id": "quiz-shs-cst-topic-09",
      "topicId": "shs-cst-topic-09",
      "title": "Overhead Absorption & Under/Over Absorption Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-cst-9-1",
          "quizId": "quiz-shs-cst-topic-09",
          "questionText": "In a highly mechanized manufacturing plant where machinery dominates operations, the most suitable overhead absorption basis is the:",
          "optionA": "Direct labor cost percentage",
          "optionB": "Machine hour rate",
          "optionC": "Number of workers",
          "optionD": "Material volume",
          "correctOption": "B",
          "explanation": "Machine hours accurately reflect overhead usage in capital-intensive automated manufacturing.",
          "subConcept": "Overhead Absorption & Under/Over Absorption",
          "remediationTip": "Machine hours accurately reflect overhead usage in capital-intensive automated manufacturing."
        },
        {
          "id": "q-cst-9-2",
          "quizId": "quiz-shs-cst-topic-09",
          "questionText": "If budgeted overhead is GH₵ 100,000 for 20,000 labor hours, and actual hours worked were 22,000 while actual overhead was GH₵ 105,000, overhead is:",
          "optionA": "GH₵ 5,000 under-absorbed",
          "optionB": "GH₵ 5,000 over-absorbed",
          "optionC": "GH₵ 10,000 over-absorbed",
          "optionD": "Nil",
          "correctOption": "B",
          "explanation": "POAR = 100,000 / 20,000 = GH₵ 5/hr. Absorbed = 22,000 * 5 = GH₵ 110,000. Actual = GH₵ 105,000. Over-absorbed = 110,000 - 105,000 = GH₵ 5,000.",
          "subConcept": "Overhead Absorption & Under/Over Absorption",
          "remediationTip": "POAR = 100,000 / 20,000 = GH₵ 5/hr. Absorbed = 22,000 * 5 = GH₵ 110,000. Actual = GH₵ 105,000. Over-absorbed = 110,000 - 105,000 = GH₵ 5,000."
        },
        {
          "id": "q-cst-9-3",
          "quizId": "quiz-shs-cst-topic-09",
          "questionText": "Under-absorbed overhead occurs when:",
          "optionA": "Overhead absorbed into production is less than actual overhead incurred",
          "optionB": "Budgeted overhead exceeds actual overhead",
          "optionC": "Actual production equals planned capacity",
          "optionD": "Profit is zero",
          "correctOption": "A",
          "explanation": "Under-absorption means production was charged less overhead than the actual cost incurred.",
          "subConcept": "Overhead Absorption & Under/Over Absorption",
          "remediationTip": "Under-absorption means production was charged less overhead than the actual cost incurred."
        }
      ]
    }
  },
  {
    "id": "shs-cst-topic-10",
    "subjectId": "costing",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 10,
    "title": "Activity-Based Costing (ABC)",
    "description": "Limitations of traditional volume-based costing, cost pools, cost drivers, steps in ABC, and comparing ABC with traditional absorption costing.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Need for Activity-Based Costing:\n  - Traditional absorption costing allocates overheads based on single volume metrics (labor hours or machine hours), which distorts product costs in modern multi-product factories with high indirect costs.\n• Core Concepts of ABC:\n  - Activities consume resources; Products consume activities!\n  - Cost Pool: An account in which overhead costs related to a specific business activity are accumulated (e.g. Machine setup cost pool, Quality inspection cost pool, Material handling pool).\n  - Cost Driver: The factor or event that causes a change in the cost of an activity (e.g. Number of setups, Number of inspections, Number of purchase orders).\n• Steps in ABC:\n  1. Identify significant activities in the organization.\n  2. Assign overhead costs to activity cost pools.\n  3. Identify cost drivers for each activity.\n  4. Calculate Cost Driver Rate = (Cost Pool Total) / (Total Number of Driver Events).\n  5. Assign overhead costs to products based on their actual consumption of cost driver activities.",
    "detailedNotes": {
      "introduction": "Limitations of traditional volume-based costing, cost pools, cost drivers, steps in ABC, and comparing ABC with traditional absorption costing.",
      "realWorldContext": "High-tech pharmaceutical manufacturers in Ghana use ABC to avoid under-pricing complex low-volume custom drugs.",
      "objectives": [
        "Evaluate the distortions caused by traditional volume-based absorption costing",
        "Identify appropriate cost drivers for various industrial activity cost pools",
        "Compute unit product costs using Activity-Based Costing (ABC) principles"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Need for Activity-Based Costing:\n  - Traditional absorption costing allocates overheads based on single volume metrics (labor hours or machine hours), which distorts product costs in modern multi-product factories with high indirect costs.\n• Core Concepts of ABC:\n  - Activities consume resources; Products consume activities!\n  - Cost Pool: An account in which overhead costs related to a specific business activity are accumulated (e.g. Machine setup cost pool, Quality inspection cost pool, Material handling pool).\n  - Cost Driver: The factor or event that causes a change in the cost of an activity (e.g. Number of setups, Number of inspections, Number of purchase orders).\n• Steps in ABC:\n  1. Identify significant activities in the organization.\n  2. Assign overhead costs to activity cost pools.\n  3. Identify cost drivers for each activity.\n  4. Calculate Cost Driver Rate = (Cost Pool Total) / (Total Number of Driver Events).\n  5. Assign overhead costs to products based on their actual consumption of cost driver activities.",
          "bulletPoints": [
            "Need for Activity-Based Costing:",
            "Traditional absorption costing allocates overheads based on single volume metrics (labor hours or machine hours), which distorts product costs in modern multi-product factories with high indirect costs.",
            "Core Concepts of ABC:",
            "Activities consume resources; Products consume activities!",
            "Cost Pool: An account in which overhead costs related to a specific business activity are accumulated (e.g. Machine setup cost pool, Quality inspection cost pool, Material handling pool).",
            "Cost Driver: The factor or event that causes a change in the cost of an activity (e.g. Number of setups, Number of inspections, Number of purchase orders).",
            "Steps in ABC:"
          ],
          "keyTakeaway": "In ABC: Cost Driver Rate = Activity Cost Pool / Total Cost Driver Volume. Multiply this rate by the driver units consumed by each product.",
          "realWorldExample": "High-tech pharmaceutical manufacturers in Ghana use ABC to avoid under-pricing complex low-volume custom drugs."
        }
      ],
      "wassceExamTips": [
        "In ABC: Cost Driver Rate = Activity Cost Pool / Total Cost Driver Volume. Multiply this rate by the driver units consumed by each product."
      ],
      "summaryChecklist": [
        "Evaluate the distortions caused by traditional volume-based absorption costing",
        "Identify appropriate cost drivers for various industrial activity cost pools",
        "Compute unit product costs using Activity-Based Costing (ABC) principles"
      ]
    },
    "quiz": {
      "id": "quiz-shs-cst-topic-10",
      "topicId": "shs-cst-topic-10",
      "title": "Activity-Based Costing (ABC) Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-cst-10-1",
          "quizId": "quiz-shs-cst-topic-10",
          "questionText": "In Activity-Based Costing (ABC), the fundamental factor that causes a change in the cost of an activity is a:",
          "optionA": "Cost unit",
          "optionB": "Cost driver",
          "optionC": "Cost center",
          "optionD": "Cost sheet",
          "correctOption": "B",
          "explanation": "A cost driver is the causal factor driving activity consumption and costs.",
          "subConcept": "Activity-Based Costing (ABC)",
          "remediationTip": "A cost driver is the causal factor driving activity consumption and costs."
        },
        {
          "id": "q-cst-10-2",
          "quizId": "quiz-shs-cst-topic-10",
          "questionText": "Which of the following is the most appropriate cost driver for the \"Machine Setup\" activity cost pool?",
          "optionA": "Number of machine setups",
          "optionB": "Direct labor wages",
          "optionC": "Square meters of floor space",
          "optionD": "Total sales revenue",
          "correctOption": "A",
          "explanation": "Setup costs vary directly with the number of production setup changes executed.",
          "subConcept": "Activity-Based Costing (ABC)",
          "remediationTip": "Setup costs vary directly with the number of production setup changes executed."
        },
        {
          "id": "q-cst-10-3",
          "quizId": "quiz-shs-cst-topic-10",
          "questionText": "The fundamental premise of Activity-Based Costing states that:",
          "optionA": "Products directly consume costs",
          "optionB": "Activities consume resources, and products consume activities",
          "optionC": "Labor hours determine all factory expenses",
          "optionD": "All overheads are fixed in the long run",
          "correctOption": "B",
          "explanation": "ABC recognizes that activities create costs and products consume those activities.",
          "subConcept": "Activity-Based Costing (ABC)",
          "remediationTip": "ABC recognizes that activities create costs and products consume those activities."
        }
      ]
    }
  },
  {
    "id": "shs-cst-topic-11",
    "subjectId": "costing",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 11,
    "title": "Marginal Costing & Cost-Volume-Profit (CVP) Analysis",
    "description": "Marginal cost concept, contribution margin, profit-volume (P/V) ratio, break-even point in units and value, and margin of safety.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Principles of Marginal Costing:\n  - Marginal Cost: The variable cost of producing one additional unit (Direct Material + Direct Labor + Direct Expenses + Variable Overheads).\n  - Fixed costs are treated as PERIOD COSTS and charged wholly against the contribution of the period in the income statement.\n• Key CVP Formulas:\n  - Contribution Margin (CM) per unit = Selling Price (P) - Variable Cost per unit (V).\n  - Total Contribution = Total Revenue - Total Variable Costs = Fixed Costs + Profit.\n  - Profit / Volume (P/V) Ratio (Contribution-to-Sales Ratio) = (Contribution per unit / Selling Price) * 100.\n  - Break-Even Point (BEP): The sales level where Total Revenue EQUALS Total Costs (Zero Profit, Zero Loss):\n    * BEP in Units = (Total Fixed Costs) / (Contribution Margin per unit).\n    * BEP in Revenue = (Total Fixed Costs) / (P/V Ratio).\n  - Margin of Safety (MOS): The excess of actual or budgeted sales over the break-even sales volume:\n    * MOS in Units = Actual Sales Units - Break-Even Sales Units.\n    * MOS Ratio = (MOS / Actual Sales) * 100. Shows the cushion against operating at a loss!",
    "detailedNotes": {
      "introduction": "Marginal cost concept, contribution margin, profit-volume (P/V) ratio, break-even point in units and value, and margin of safety.",
      "realWorldContext": "A sachet water venture in Kumasi uses CVP analysis to determine the exact number of bags it must sell daily to cover generator fuel and factory rent.",
      "objectives": [
        "Differentiate between marginal costing (variable costing) and absorption costing",
        "Calculate Contribution Margin, P/V Ratio, and Break-Even Point in both units and revenue",
        "Compute Margin of Safety and interpret its significance for business risk"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Principles of Marginal Costing:\n  - Marginal Cost: The variable cost of producing one additional unit (Direct Material + Direct Labor + Direct Expenses + Variable Overheads).\n  - Fixed costs are treated as PERIOD COSTS and charged wholly against the contribution of the period in the income statement.\n• Key CVP Formulas:\n  - Contribution Margin (CM) per unit = Selling Price (P) - Variable Cost per unit (V).\n  - Total Contribution = Total Revenue - Total Variable Costs = Fixed Costs + Profit.\n  - Profit / Volume (P/V) Ratio (Contribution-to-Sales Ratio) = (Contribution per unit / Selling Price) * 100.\n  - Break-Even Point (BEP): The sales level where Total Revenue EQUALS Total Costs (Zero Profit, Zero Loss):\n    * BEP in Units = (Total Fixed Costs) / (Contribution Margin per unit).\n    * BEP in Revenue = (Total Fixed Costs) / (P/V Ratio).\n  - Margin of Safety (MOS): The excess of actual or budgeted sales over the break-even sales volume:\n    * MOS in Units = Actual Sales Units - Break-Even Sales Units.\n    * MOS Ratio = (MOS / Actual Sales) * 100. Shows the cushion against operating at a loss!",
          "bulletPoints": [
            "Principles of Marginal Costing:",
            "Marginal Cost: The variable cost of producing one additional unit (Direct Material + Direct Labor + Direct Expenses + Variable Overheads).",
            "Fixed costs are treated as PERIOD COSTS and charged wholly against the contribution of the period in the income statement.",
            "Key CVP Formulas:",
            "Contribution Margin (CM) per unit = Selling Price (P) - Variable Cost per unit (V).",
            "Total Contribution = Total Revenue - Total Variable Costs = Fixed Costs + Profit.",
            "Profit / Volume (P/V) Ratio (Contribution-to-Sales Ratio) = (Contribution per unit / Selling Price) * 100.",
            "Break-Even Point (BEP): The sales level where Total Revenue EQUALS Total Costs (Zero Profit, Zero Loss):",
            "Margin of Safety (MOS): The excess of actual or budgeted sales over the break-even sales volume:"
          ],
          "keyTakeaway": "In marginal costing, Closing Inventory is valued at VARIABLE PRODUCTION COST ONLY. Fixed overheads are never capitalized in stock!",
          "realWorldExample": "A sachet water venture in Kumasi uses CVP analysis to determine the exact number of bags it must sell daily to cover generator fuel and factory rent."
        }
      ],
      "wassceExamTips": [
        "In marginal costing, Closing Inventory is valued at VARIABLE PRODUCTION COST ONLY. Fixed overheads are never capitalized in stock!"
      ],
      "summaryChecklist": [
        "Differentiate between marginal costing (variable costing) and absorption costing",
        "Calculate Contribution Margin, P/V Ratio, and Break-Even Point in both units and revenue",
        "Compute Margin of Safety and interpret its significance for business risk"
      ]
    },
    "quiz": {
      "id": "quiz-shs-cst-topic-11",
      "topicId": "shs-cst-topic-11",
      "title": "Marginal Costing & Cost-Volume-Profit (CVP) Analysis Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-cst-11-1",
          "quizId": "quiz-shs-cst-topic-11",
          "questionText": "The Contribution Margin earned on a product is mathematically calculated as:",
          "optionA": "Selling Price minus Total Cost",
          "optionB": "Selling Price minus Variable Cost",
          "optionC": "Gross Profit minus Net Profit",
          "optionD": "Fixed Cost plus Variable Cost",
          "correctOption": "B",
          "explanation": "Contribution is the surplus of sales revenue over variable costs (P - V).",
          "subConcept": "Marginal Costing & Cost-Volume-Profit (CVP) Analysis",
          "remediationTip": "Contribution is the surplus of sales revenue over variable costs (P - V)."
        },
        {
          "id": "q-cst-11-2",
          "quizId": "quiz-shs-cst-topic-11",
          "questionText": "If a company has Fixed Costs of GH₵ 40,000, a selling price of GH₵ 20, and a variable cost of GH₵ 12 per unit, the Break-Even Point in units is:",
          "optionA": "2,000 units",
          "optionB": "5,000 units",
          "optionC": "8,000 units",
          "optionD": "10,000 units",
          "correctOption": "B",
          "explanation": "Contribution per unit = 20 - 12 = GH₵ 8. BEP = 40,000 / 8 = 5,000 units.",
          "subConcept": "Marginal Costing & Cost-Volume-Profit (CVP) Analysis",
          "remediationTip": "Contribution per unit = 20 - 12 = GH₵ 8. BEP = 40,000 / 8 = 5,000 units."
        },
        {
          "id": "q-cst-11-3",
          "quizId": "quiz-shs-cst-topic-11",
          "questionText": "The difference between actual or budgeted sales volume and the break-even sales volume is known as the:",
          "optionA": "Contribution margin",
          "optionB": "Margin of Safety",
          "optionC": "Gross margin",
          "optionD": "Operating leverage",
          "correctOption": "B",
          "explanation": "Margin of Safety measures how far sales can drop before the business begins making a loss.",
          "subConcept": "Marginal Costing & Cost-Volume-Profit (CVP) Analysis",
          "remediationTip": "Margin of Safety measures how far sales can drop before the business begins making a loss."
        }
      ]
    }
  },
  {
    "id": "shs-cst-topic-12",
    "subjectId": "costing",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 12,
    "title": "Break-Even Charts & Decision-Making Applications",
    "description": "Constructing break-even charts, angle of incidence, make-or-buy decisions, accepting special orders, and dropping unprofitable product lines.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• The Break-Even Chart:\n  - Graph plotting Sales Revenue, Fixed Costs, and Total Costs against Output (X-axis).\n  - Break-Even Point is the intersection of the Total Revenue line and Total Cost line.\n  - Angle of Incidence: The angle formed between the Sales line and Total Cost line at the break-even point. A wide angle indicates high profitability once break-even is crossed!\n• Managerial Decision-Making Using Marginal Costing:\n  - Make or Buy Decision: Compare the relevant variable cost of making internally with the external purchase quotation. If buying saves incremental variable cost, buy; otherwise make (considering spare capacity and quality).\n  - Special Order at Discount: Accept if the special offer price EXCEEDS the incremental variable cost, provided idle capacity exists and existing domestic market pricing is not cannibalized.\n  - Dropping a Product Line: Do not drop an apparently loss-making product if its revenue exceeds its variable cost (i.e. positive contribution), because its contribution helps cover unavoidable general fixed costs!",
    "detailedNotes": {
      "introduction": "Constructing break-even charts, angle of incidence, make-or-buy decisions, accepting special orders, and dropping unprofitable product lines.",
      "realWorldContext": "A Ghanaian poultry farm deciding whether to mix its own feed or purchase commercial feed from Agricare uses make-or-buy costing analysis.",
      "objectives": [
        "Construct and interpret Break-Even Charts and identify the Margin of Safety and Angle of Incidence",
        "Evaluate Make-or-Buy decisions using marginal contribution analysis",
        "Advise management on whether to accept special one-off export orders below standard list price"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• The Break-Even Chart:\n  - Graph plotting Sales Revenue, Fixed Costs, and Total Costs against Output (X-axis).\n  - Break-Even Point is the intersection of the Total Revenue line and Total Cost line.\n  - Angle of Incidence: The angle formed between the Sales line and Total Cost line at the break-even point. A wide angle indicates high profitability once break-even is crossed!\n• Managerial Decision-Making Using Marginal Costing:\n  - Make or Buy Decision: Compare the relevant variable cost of making internally with the external purchase quotation. If buying saves incremental variable cost, buy; otherwise make (considering spare capacity and quality).\n  - Special Order at Discount: Accept if the special offer price EXCEEDS the incremental variable cost, provided idle capacity exists and existing domestic market pricing is not cannibalized.\n  - Dropping a Product Line: Do not drop an apparently loss-making product if its revenue exceeds its variable cost (i.e. positive contribution), because its contribution helps cover unavoidable general fixed costs!",
          "bulletPoints": [
            "The Break-Even Chart:",
            "Graph plotting Sales Revenue, Fixed Costs, and Total Costs against Output (X-axis).",
            "Break-Even Point is the intersection of the Total Revenue line and Total Cost line.",
            "Angle of Incidence: The angle formed between the Sales line and Total Cost line at the break-even point. A wide angle indicates high profitability once break-even is crossed!",
            "Managerial Decision-Making Using Marginal Costing:",
            "Make or Buy Decision: Compare the relevant variable cost of making internally with the external purchase quotation. If buying saves incremental variable cost, buy; otherwise make (considering spare capacity and quality).",
            "Special Order at Discount: Accept if the special offer price EXCEEDS the incremental variable cost, provided idle capacity exists and existing domestic market pricing is not cannibalized.",
            "Dropping a Product Line: Do not drop an apparently loss-making product if its revenue exceeds its variable cost (i.e. positive contribution), because its contribution helps cover unavoidable general fixed costs!"
          ],
          "keyTakeaway": "In special order decisions: Ignore fixed costs if they will not increase! Any price above marginal cost yields positive contribution and boosts overall net profit.",
          "realWorldExample": "A Ghanaian poultry farm deciding whether to mix its own feed or purchase commercial feed from Agricare uses make-or-buy costing analysis."
        }
      ],
      "wassceExamTips": [
        "In special order decisions: Ignore fixed costs if they will not increase! Any price above marginal cost yields positive contribution and boosts overall net profit."
      ],
      "summaryChecklist": [
        "Construct and interpret Break-Even Charts and identify the Margin of Safety and Angle of Incidence",
        "Evaluate Make-or-Buy decisions using marginal contribution analysis",
        "Advise management on whether to accept special one-off export orders below standard list price"
      ]
    },
    "quiz": {
      "id": "quiz-shs-cst-topic-12",
      "topicId": "shs-cst-topic-12",
      "title": "Break-Even Charts & Decision-Making Applications Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-cst-12-1",
          "quizId": "quiz-shs-cst-topic-12",
          "questionText": "On a Break-Even Chart, a large (wide) Angle of Incidence indicates that:",
          "optionA": "The firm is suffering catastrophic losses",
          "optionB": "The rate of profit generation is very high once sales exceed the break-even point",
          "optionC": "Fixed costs are zero",
          "optionD": "Variable costs exceed sales price",
          "correctOption": "B",
          "explanation": "A wide angle of incidence reflects a high contribution margin and rapid profit growth beyond break-even.",
          "subConcept": "Break-Even Charts & Decision-Making Applications",
          "remediationTip": "A wide angle of incidence reflects a high contribution margin and rapid profit growth beyond break-even."
        },
        {
          "id": "q-cst-12-2",
          "quizId": "quiz-shs-cst-topic-12",
          "questionText": "When deciding whether to accept a special one-off export order during a period of idle capacity, the firm should accept if the price offered:",
          "optionA": "Exceeds the total absorption cost per unit",
          "optionB": "Exceeds the marginal (variable) cost of producing the extra units",
          "optionC": "Is equal to competitors' retail prices",
          "optionD": "Covers historical research and development costs",
          "correctOption": "B",
          "explanation": "With idle capacity, any price above marginal cost generates positive contribution.",
          "subConcept": "Break-Even Charts & Decision-Making Applications",
          "remediationTip": "With idle capacity, any price above marginal cost generates positive contribution."
        },
        {
          "id": "q-cst-12-3",
          "quizId": "quiz-shs-cst-topic-12",
          "questionText": "A product line showing an accounting net loss should generally NOT be discontinued if it:",
          "optionA": "Has the highest advertising budget",
          "optionB": "Generates a positive contribution margin toward covering unavoidable fixed overheads",
          "optionC": "Is favored by the managing director",
          "optionD": "Has zero inventory",
          "correctOption": "B",
          "explanation": "A positive contribution covers general fixed costs that would otherwise fall on remaining products.",
          "subConcept": "Break-Even Charts & Decision-Making Applications",
          "remediationTip": "A positive contribution covers general fixed costs that would otherwise fall on remaining products."
        }
      ]
    }
  },
  {
    "id": "shs-cst-topic-13",
    "subjectId": "costing",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 13,
    "title": "Job Costing & Batch Costing",
    "description": "Characteristics of job costing, job cost sheets, accounting for direct materials/labor/overheads, batch costing, and Economic Batch Quantity (EBQ).",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Job Costing:\n  - Costing method applied where work is executed according to customer's specific orders and individual requirements.\n  - Each job is distinct, identifiable, and of relatively short duration (e.g. printing wedding programs, motor vehicle repair, custom fabrication).\n  - Job Cost Sheet: Document used to accumulate all direct materials, direct labor hours, and absorbed factory overheads attributed to that specific job.\n• Batch Costing:\n  - A variation of job costing where production consists of a group of identical units (a batch) produced together.\n  - Cost per unit in a batch = (Total Batch Cost) / (Number of Units in Batch).\n  - Economic Batch Quantity (EBQ): The optimal batch size that balances machine setup costs against inventory holding costs:\n    * EBQ = sqrt( (2 * D * S) / (C * (1 - D/P)) ), where S = setup cost, P = production rate.",
    "detailedNotes": {
      "introduction": "Characteristics of job costing, job cost sheets, accounting for direct materials/labor/overheads, batch costing, and Economic Batch Quantity (EBQ).",
      "realWorldContext": "A commercial printing press in Accra prepares individual job cost cards for each school magazine and funeral program printing order.",
      "objectives": [
        "Prepare Job Cost Sheets computing prime cost, production cost, selling price, and profit markup",
        "Calculate cost per unit in batch manufacturing scenarios",
        "Distinguish between job costing and batch costing applications in Ghanaian small businesses"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Job Costing:\n  - Costing method applied where work is executed according to customer's specific orders and individual requirements.\n  - Each job is distinct, identifiable, and of relatively short duration (e.g. printing wedding programs, motor vehicle repair, custom fabrication).\n  - Job Cost Sheet: Document used to accumulate all direct materials, direct labor hours, and absorbed factory overheads attributed to that specific job.\n• Batch Costing:\n  - A variation of job costing where production consists of a group of identical units (a batch) produced together.\n  - Cost per unit in a batch = (Total Batch Cost) / (Number of Units in Batch).\n  - Economic Batch Quantity (EBQ): The optimal batch size that balances machine setup costs against inventory holding costs:\n    * EBQ = sqrt( (2 * D * S) / (C * (1 - D/P)) ), where S = setup cost, P = production rate.",
          "bulletPoints": [
            "Job Costing:",
            "Costing method applied where work is executed according to customer's specific orders and individual requirements.",
            "Each job is distinct, identifiable, and of relatively short duration (e.g. printing wedding programs, motor vehicle repair, custom fabrication).",
            "Job Cost Sheet: Document used to accumulate all direct materials, direct labor hours, and absorbed factory overheads attributed to that specific job.",
            "Batch Costing:",
            "A variation of job costing where production consists of a group of identical units (a batch) produced together.",
            "Cost per unit in a batch = (Total Batch Cost) / (Number of Units in Batch).",
            "Economic Batch Quantity (EBQ): The optimal batch size that balances machine setup costs against inventory holding costs:"
          ],
          "keyTakeaway": "In job costing: Selling Price = Total Cost + Profit Margin. Note the difference between Profit on Cost (Markup) vs. Profit on Selling Price (Margin).",
          "realWorldExample": "A commercial printing press in Accra prepares individual job cost cards for each school magazine and funeral program printing order."
        }
      ],
      "wassceExamTips": [
        "In job costing: Selling Price = Total Cost + Profit Margin. Note the difference between Profit on Cost (Markup) vs. Profit on Selling Price (Margin)."
      ],
      "summaryChecklist": [
        "Prepare Job Cost Sheets computing prime cost, production cost, selling price, and profit markup",
        "Calculate cost per unit in batch manufacturing scenarios",
        "Distinguish between job costing and batch costing applications in Ghanaian small businesses"
      ]
    },
    "quiz": {
      "id": "quiz-shs-cst-topic-13",
      "topicId": "shs-cst-topic-13",
      "title": "Job Costing & Batch Costing Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-cst-13-1",
          "quizId": "quiz-shs-cst-topic-13",
          "questionText": "Job costing is most appropriately applied in which of the following business environments?",
          "optionA": "Crude oil refinery",
          "optionB": "Custom automotive repair workshop",
          "optionC": "Cement manufacturing plant",
          "optionD": "Flour milling factory",
          "correctOption": "B",
          "explanation": "Vehicle repair executes discrete, customized jobs with distinct material and labor requirements.",
          "subConcept": "Job Costing & Batch Costing",
          "remediationTip": "Vehicle repair executes discrete, customized jobs with distinct material and labor requirements."
        },
        {
          "id": "q-cst-13-2",
          "quizId": "quiz-shs-cst-topic-13",
          "questionText": "In batch costing, the cost per finished unit is determined by:",
          "optionA": "Multiplying total batch costs by the number of units",
          "optionB": "Dividing total accumulated batch costs by the total number of units in that batch",
          "optionC": "Ignoring fixed overheads completely",
          "optionD": "Using standard sales prices",
          "correctOption": "B",
          "explanation": "Unit cost is the total expenditure of the batch divided by the number of units produced.",
          "subConcept": "Job Costing & Batch Costing",
          "remediationTip": "Unit cost is the total expenditure of the batch divided by the number of units produced."
        },
        {
          "id": "q-cst-13-3",
          "quizId": "quiz-shs-cst-topic-13",
          "questionText": "If a job incurs Direct Materials of GH₵ 3,000, Direct Labor of GH₵ 2,000, and Overheads are absorbed at 50% of direct labor, the Total Production Cost is:",
          "optionA": "GH₵ 5,000",
          "optionB": "GH₵ 6,000",
          "optionC": "GH₵ 7,500",
          "optionD": "GH₵ 10,000",
          "correctOption": "B",
          "explanation": "Overhead = 50% of 2,000 = GH₵ 1,000. Total Cost = 3,000 + 2,000 + 1,000 = GH₵ 6,000.",
          "subConcept": "Job Costing & Batch Costing",
          "remediationTip": "Overhead = 50% of 2,000 = GH₵ 1,000. Total Cost = 3,000 + 2,000 + 1,000 = GH₵ 6,000."
        }
      ]
    }
  },
  {
    "id": "shs-cst-topic-14",
    "subjectId": "costing",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 14,
    "title": "Contract Costing",
    "description": "Features of contract costing, contract accounts, work certified vs. uncertified, retention money, and profit recognition on incomplete contracts.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Nature of Contract Costing:\n  - Applied to large-scale, long-term construction contracts (e.g. highways, bridges, multi-story buildings, dams) usually executed on-site away from contractor's premises.\n• Key Contract Concepts:\n  - Architect's Certificate: Formal certificate issued by the client's supervising architect/engineer stating the value of work satisfactorily completed to date (Work Certified).\n  - Work Uncertified: Cost of work executed after the last architect's inspection; valued strictly at cost.\n  - Retention Money: A percentage (usually 10%) of the certified value withheld by the contractee to guard against latent structural defects during the defect liability period.\n  - Cash Received = Value of Work Certified - Retention Money.\n• Profit on Incomplete Contracts (Prudence Concept):\n  - Profit is recognized prudently based on degree of completion (e.g. 2/3 * Notional Profit * (Cash Received / Work Certified) when contract is 50% to 90% complete).",
    "detailedNotes": {
      "introduction": "Features of contract costing, contract accounts, work certified vs. uncertified, retention money, and profit recognition on incomplete contracts.",
      "realWorldContext": "Road contractors constructing the Pokuase Interchange or Tema Motorway expansion operate full contract costing accounts.",
      "objectives": [
        "Prepare Contract Accounts recording materials, plant depreciation, direct labor, and subcontractor fees",
        "Calculate Notional Profit, Work Certified, Work Uncertified, and Retention Money",
        "Apply the prudence concept to compute profit taken to the Statement of Profit or Loss"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Nature of Contract Costing:\n  - Applied to large-scale, long-term construction contracts (e.g. highways, bridges, multi-story buildings, dams) usually executed on-site away from contractor's premises.\n• Key Contract Concepts:\n  - Architect's Certificate: Formal certificate issued by the client's supervising architect/engineer stating the value of work satisfactorily completed to date (Work Certified).\n  - Work Uncertified: Cost of work executed after the last architect's inspection; valued strictly at cost.\n  - Retention Money: A percentage (usually 10%) of the certified value withheld by the contractee to guard against latent structural defects during the defect liability period.\n  - Cash Received = Value of Work Certified - Retention Money.\n• Profit on Incomplete Contracts (Prudence Concept):\n  - Profit is recognized prudently based on degree of completion (e.g. 2/3 * Notional Profit * (Cash Received / Work Certified) when contract is 50% to 90% complete).",
          "bulletPoints": [
            "Nature of Contract Costing:",
            "Applied to large-scale, long-term construction contracts (e.g. highways, bridges, multi-story buildings, dams) usually executed on-site away from contractor's premises.",
            "Key Contract Concepts:",
            "Architect's Certificate: Formal certificate issued by the client's supervising architect/engineer stating the value of work satisfactorily completed to date (Work Certified).",
            "Work Uncertified: Cost of work executed after the last architect's inspection; valued strictly at cost.",
            "Retention Money: A percentage (usually 10%) of the certified value withheld by the contractee to guard against latent structural defects during the defect liability period.",
            "Cash Received = Value of Work Certified - Retention Money.",
            "Profit on Incomplete Contracts (Prudence Concept):",
            "Profit is recognized prudently based on degree of completion (e.g. 2/3 * Notional Profit * (Cash Received / Work Certified) when contract is 50% to 90% complete)."
          ],
          "keyTakeaway": "Notional Profit = Value of Work Certified + Cost of Work Uncertified - Total Cost of Contract to Date.",
          "realWorldExample": "Road contractors constructing the Pokuase Interchange or Tema Motorway expansion operate full contract costing accounts."
        }
      ],
      "wassceExamTips": [
        "Notional Profit = Value of Work Certified + Cost of Work Uncertified - Total Cost of Contract to Date."
      ],
      "summaryChecklist": [
        "Prepare Contract Accounts recording materials, plant depreciation, direct labor, and subcontractor fees",
        "Calculate Notional Profit, Work Certified, Work Uncertified, and Retention Money",
        "Apply the prudence concept to compute profit taken to the Statement of Profit or Loss"
      ]
    },
    "quiz": {
      "id": "quiz-shs-cst-topic-14",
      "topicId": "shs-cst-topic-14",
      "title": "Contract Costing Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-cst-14-1",
          "quizId": "quiz-shs-cst-topic-14",
          "questionText": "A portion of the value of work certified withheld by the contractee to cover defect rectification is:",
          "optionA": "Notional profit",
          "optionB": "Retention money",
          "optionC": "Progress payment",
          "optionD": "Plant hire",
          "correctOption": "B",
          "explanation": "Retention money safeguards the client against contractor default or latent structural defects.",
          "subConcept": "Contract Costing",
          "remediationTip": "Retention money safeguards the client against contractor default or latent structural defects."
        },
        {
          "id": "q-cst-14-2",
          "quizId": "quiz-shs-cst-topic-14",
          "questionText": "In contract costing, \"Work Uncertified\" is valued in the Contract Account at:",
          "optionA": "Contract selling price",
          "optionB": "Cost price only",
          "optionC": "Market value plus 50% profit",
          "optionD": "Nil",
          "correctOption": "B",
          "explanation": "Work not yet certified by the architect is credited at actual cost incurred.",
          "subConcept": "Contract Costing",
          "remediationTip": "Work not yet certified by the architect is credited at actual cost incurred."
        },
        {
          "id": "q-cst-14-3",
          "quizId": "quiz-shs-cst-topic-14",
          "questionText": "If the Value of Work Certified is GH₵ 500,000 and the client retains 10% as retention money, the cash paid to the contractor is:",
          "optionA": "GH₵ 400,000",
          "optionB": "GH₵ 450,000",
          "optionC": "GH₵ 500,000",
          "optionD": "GH₵ 550,000",
          "correctOption": "B",
          "explanation": "Retention = 10% of 500,000 = GH₵ 50,000. Cash Received = 500,000 - 50,000 = GH₵ 450,000.",
          "subConcept": "Contract Costing",
          "remediationTip": "Retention = 10% of 500,000 = GH₵ 50,000. Cash Received = 500,000 - 50,000 = GH₵ 450,000."
        }
      ]
    }
  },
  {
    "id": "shs-cst-topic-15",
    "subjectId": "costing",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 15,
    "title": "Process Costing & Equivalent Units",
    "description": "Continuous mass manufacturing, process accounts, normal loss vs. abnormal loss vs. abnormal gain, scrap value, and equivalent units.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Nature of Process Costing:\n  - Applied in continuous mass production industries where raw materials pass through sequential processing stages (e.g. oil refining, chemical production, flour milling). Output of Process 1 becomes input of Process 2.\n• Treatment of Losses:\n  - Normal Loss: Inevitable, anticipated operational loss occurring under standard operating conditions (evaporation, shrinkage).\n    * Cost of Normal Loss is absorbed by good production units. Any scrap sale revenue is credited to the Process Account to reduce process cost.\n  - Abnormal Loss: Unanticipated loss exceeding normal expectation due to negligence, machinery breakdown, or substandard materials.\n    * Valued at the full cost of good units and transferred to an Abnormal Loss Account (charged directly to Profit and Loss).\n  - Abnormal Gain: Occurs when actual loss is LESS than the expected normal loss.\n• Equivalent Units of Production:\n  - Translating partially completed work-in-progress (WIP) into an equivalent number of fully completed units based on percentage stage of completion.",
    "detailedNotes": {
      "introduction": "Continuous mass manufacturing, process accounts, normal loss vs. abnormal loss vs. abnormal gain, scrap value, and equivalent units.",
      "realWorldContext": "Tema Oil Refinery (TOR) processes crude oil through distillation, cracking, and reforming processes using process costing.",
      "objectives": [
        "Prepare multi-stage Process Accounts accounting for input costs and inter-process transfers",
        "Differentiate between the accounting treatments of Normal Loss, Abnormal Loss, and Abnormal Gain",
        "Calculate Equivalent Units of Production for work-in-progress (WIP)"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Nature of Process Costing:\n  - Applied in continuous mass production industries where raw materials pass through sequential processing stages (e.g. oil refining, chemical production, flour milling). Output of Process 1 becomes input of Process 2.\n• Treatment of Losses:\n  - Normal Loss: Inevitable, anticipated operational loss occurring under standard operating conditions (evaporation, shrinkage).\n    * Cost of Normal Loss is absorbed by good production units. Any scrap sale revenue is credited to the Process Account to reduce process cost.\n  - Abnormal Loss: Unanticipated loss exceeding normal expectation due to negligence, machinery breakdown, or substandard materials.\n    * Valued at the full cost of good units and transferred to an Abnormal Loss Account (charged directly to Profit and Loss).\n  - Abnormal Gain: Occurs when actual loss is LESS than the expected normal loss.\n• Equivalent Units of Production:\n  - Translating partially completed work-in-progress (WIP) into an equivalent number of fully completed units based on percentage stage of completion.",
          "bulletPoints": [
            "Nature of Process Costing:",
            "Applied in continuous mass production industries where raw materials pass through sequential processing stages (e.g. oil refining, chemical production, flour milling). Output of Process 1 becomes input of Process 2.",
            "Treatment of Losses:",
            "Normal Loss: Inevitable, anticipated operational loss occurring under standard operating conditions (evaporation, shrinkage).",
            "Abnormal Loss: Unanticipated loss exceeding normal expectation due to negligence, machinery breakdown, or substandard materials.",
            "Abnormal Gain: Occurs when actual loss is LESS than the expected normal loss.",
            "Equivalent Units of Production:",
            "Translating partially completed work-in-progress (WIP) into an equivalent number of fully completed units based on percentage stage of completion."
          ],
          "keyTakeaway": "Cost per unit of good output = (Total Process Cost - Scrap Value of Normal Loss) / (Input Units - Normal Loss Units).",
          "realWorldExample": "Tema Oil Refinery (TOR) processes crude oil through distillation, cracking, and reforming processes using process costing."
        }
      ],
      "wassceExamTips": [
        "Cost per unit of good output = (Total Process Cost - Scrap Value of Normal Loss) / (Input Units - Normal Loss Units)."
      ],
      "summaryChecklist": [
        "Prepare multi-stage Process Accounts accounting for input costs and inter-process transfers",
        "Differentiate between the accounting treatments of Normal Loss, Abnormal Loss, and Abnormal Gain",
        "Calculate Equivalent Units of Production for work-in-progress (WIP)"
      ]
    },
    "quiz": {
      "id": "quiz-shs-cst-topic-15",
      "topicId": "shs-cst-topic-15",
      "title": "Process Costing & Equivalent Units Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-cst-15-1",
          "quizId": "quiz-shs-cst-topic-15",
          "questionText": "An unavoidable loss inherent in the manufacturing process that is expected under normal operating conditions is classified as:",
          "optionA": "Abnormal loss",
          "optionB": "Normal loss",
          "optionC": "Abnormal gain",
          "optionD": "Defective output",
          "correctOption": "B",
          "explanation": "Normal loss is an unavoidable engineering reality whose net cost is absorbed by good production.",
          "subConcept": "Process Costing & Equivalent Units",
          "remediationTip": "Normal loss is an unavoidable engineering reality whose net cost is absorbed by good production."
        },
        {
          "id": "q-cst-15-2",
          "quizId": "quiz-shs-cst-topic-15",
          "questionText": "How is the financial cost of an Abnormal Loss treated in process cost accounting?",
          "optionA": "Added to the cost of good units produced",
          "optionB": "Charged as an extraordinary loss to the Profit and Loss Account",
          "optionC": "Carried forward in closing inventory",
          "optionD": "Deducted from workers' wages",
          "correctOption": "B",
          "explanation": "Abnormal loss represents operational inefficiency and is charged directly against period profit.",
          "subConcept": "Process Costing & Equivalent Units",
          "remediationTip": "Abnormal loss represents operational inefficiency and is charged directly against period profit."
        },
        {
          "id": "q-cst-15-3",
          "quizId": "quiz-shs-cst-topic-15",
          "questionText": "If 200 units of work-in-progress are 60% complete with respect to conversion costs, the equivalent units of production are:",
          "optionA": "60 units",
          "optionB": "120 units",
          "optionC": "140 units",
          "optionD": "200 units",
          "correctOption": "B",
          "explanation": "Equivalent units = 200 * 60% = 120 completed unit equivalents.",
          "subConcept": "Process Costing & Equivalent Units",
          "remediationTip": "Equivalent units = 200 * 60% = 120 completed unit equivalents."
        }
      ]
    }
  },
  {
    "id": "shs-fac-topic-01",
    "subjectId": "financial-accounting",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 1,
    "title": "Nature, Principles & Conceptual Framework of Accounting",
    "description": "Purpose of accounting, users of financial statements, the fundamental accounting equation, GAAP, and accounting concepts (prudence, accruals, going concern).",
    "isFreeTrial": true,
    "isVip": false,
    "keyNotes": "• Accounting Defined: The art of recording, classifying, summarizing, and interpreting financial transactions to enable users to make informed decisions.\n• Users: Internal (managers, owners) and External (banks, investors, suppliers, GRA, employees).\n• The Fundamental Accounting Equation:\n  - Assets = Liabilities + Capital (Owner's Equity).\n  - Expanded: Assets = Liabilities + Capital + Revenue - Expenses - Drawings.\n• Underlying Accounting Concepts & Conventions:\n  - Entity Concept: Business is treated as separate and distinct from its owner.\n  - Going Concern: Presumes the business will continue operating indefinitely into the foreseeable future.\n  - Accruals / Matching Concept: Revenue and expenses are recognized in the period they occur, not when cash is received or paid.\n  - Prudence / Conservatism: Anticipate no profits, but provide for all potential losses.\n  - Historical Cost: Assets are recorded at their original acquisition purchase price.\n  - Consistency: Same accounting policies must be applied from one period to another.\n  - Money Measurement: Only transactions capable of monetary valuation are recorded.",
    "detailedNotes": {
      "introduction": "Purpose of accounting, users of financial statements, the fundamental accounting equation, GAAP, and accounting concepts (prudence, accruals, going concern).",
      "realWorldContext": "A sole trader depositing shop revenue into a personal bank account violates the Business Entity concept.",
      "objectives": [
        "State and explain the fundamental accounting equation and its variations",
        "Identify internal and external users of accounting information and their specific needs",
        "Evaluate core accounting concepts: going concern, accruals, prudence, and business entity"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Accounting Defined: The art of recording, classifying, summarizing, and interpreting financial transactions to enable users to make informed decisions.\n• Users: Internal (managers, owners) and External (banks, investors, suppliers, GRA, employees).\n• The Fundamental Accounting Equation:\n  - Assets = Liabilities + Capital (Owner's Equity).\n  - Expanded: Assets = Liabilities + Capital + Revenue - Expenses - Drawings.\n• Underlying Accounting Concepts & Conventions:\n  - Entity Concept: Business is treated as separate and distinct from its owner.\n  - Going Concern: Presumes the business will continue operating indefinitely into the foreseeable future.\n  - Accruals / Matching Concept: Revenue and expenses are recognized in the period they occur, not when cash is received or paid.\n  - Prudence / Conservatism: Anticipate no profits, but provide for all potential losses.\n  - Historical Cost: Assets are recorded at their original acquisition purchase price.\n  - Consistency: Same accounting policies must be applied from one period to another.\n  - Money Measurement: Only transactions capable of monetary valuation are recorded.",
          "bulletPoints": [
            "Accounting Defined: The art of recording, classifying, summarizing, and interpreting financial transactions to enable users to make informed decisions.",
            "Users: Internal (managers, owners) and External (banks, investors, suppliers, GRA, employees).",
            "The Fundamental Accounting Equation:",
            "Assets = Liabilities + Capital (Owner's Equity).",
            "Expanded: Assets = Liabilities + Capital + Revenue - Expenses - Drawings.",
            "Underlying Accounting Concepts & Conventions:",
            "Entity Concept: Business is treated as separate and distinct from its owner.",
            "Going Concern: Presumes the business will continue operating indefinitely into the foreseeable future.",
            "Accruals / Matching Concept: Revenue and expenses are recognized in the period they occur, not when cash is received or paid.",
            "Prudence / Conservatism: Anticipate no profits, but provide for all potential losses.",
            "Historical Cost: Assets are recorded at their original acquisition purchase price.",
            "Consistency: Same accounting policies must be applied from one period to another.",
            "Money Measurement: Only transactions capable of monetary valuation are recorded."
          ],
          "keyTakeaway": "In WASSCE Section A, questions routinely describe a business scenario and ask candidates to identify the specific accounting concept being applied or violated.",
          "realWorldExample": "A sole trader depositing shop revenue into a personal bank account violates the Business Entity concept."
        }
      ],
      "wassceExamTips": [
        "In WASSCE Section A, questions routinely describe a business scenario and ask candidates to identify the specific accounting concept being applied or violated."
      ],
      "summaryChecklist": [
        "State and explain the fundamental accounting equation and its variations",
        "Identify internal and external users of accounting information and their specific needs",
        "Evaluate core accounting concepts: going concern, accruals, prudence, and business entity"
      ]
    },
    "quiz": {
      "id": "quiz-shs-fac-topic-01",
      "topicId": "shs-fac-topic-01",
      "title": "Nature, Principles & Conceptual Framework of Accounting Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-fac-1-1",
          "quizId": "quiz-shs-fac-topic-01",
          "questionText": "The accounting convention which dictates that revenue should not be anticipated, but all possible losses must be provided for, is the:",
          "optionA": "Materiality concept",
          "optionB": "Prudence (Conservatism) concept",
          "optionC": "Historical cost concept",
          "optionD": "Consistency concept",
          "correctOption": "B",
          "explanation": "Prudence ensures assets and income are not overstated and liabilities are not understated.",
          "subConcept": "Nature, Principles & Conceptual Framework of Accounting",
          "remediationTip": "Prudence ensures assets and income are not overstated and liabilities are not understated."
        },
        {
          "id": "q-fac-1-2",
          "quizId": "quiz-shs-fac-topic-01",
          "questionText": "If a business possesses Assets of GH₵ 85,000 and Liabilities of GH₵ 35,000, the Owner's Capital is:",
          "optionA": "GH₵ 35,000",
          "optionB": "GH₵ 50,000",
          "optionC": "GH₵ 85,000",
          "optionD": "GH₵ 120,000",
          "correctOption": "B",
          "explanation": "Capital = Assets - Liabilities = 85,000 - 35,000 = GH₵ 50,000.",
          "subConcept": "Nature, Principles & Conceptual Framework of Accounting",
          "remediationTip": "Capital = Assets - Liabilities = 85,000 - 35,000 = GH₵ 50,000."
        },
        {
          "id": "q-fac-1-3",
          "quizId": "quiz-shs-fac-topic-01",
          "questionText": "The assumption that an enterprise will remain in operational existence for the foreseeable future without liquidation is the:",
          "optionA": "Accrual concept",
          "optionB": "Going concern concept",
          "optionC": "Entity concept",
          "optionD": "Realization concept",
          "correctOption": "B",
          "explanation": "The going concern assumption justifies carrying non-current assets at cost less depreciation rather than scrap value.",
          "subConcept": "Nature, Principles & Conceptual Framework of Accounting",
          "remediationTip": "The going concern assumption justifies carrying non-current assets at cost less depreciation rather than scrap value."
        }
      ]
    }
  },
  {
    "id": "shs-fac-topic-02",
    "subjectId": "financial-accounting",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 2,
    "title": "The Double Entry System & Books of Prime Entry",
    "description": "Rules of debit and credit, source documents, journals (Sales, Purchases, Returns, General Journal), and the Petty Cash Book with Imprest System.",
    "isFreeTrial": true,
    "isVip": false,
    "keyNotes": "• The Double Entry Rule: For every debit entry, there must be a corresponding credit entry of equal amount.\n  - Debit the receiving account (Assets and Expenses increase on Debit).\n  - Credit the giving account (Liabilities, Capital, and Revenue increase on Credit).\n• Books of Prime Entry (Subsidiary Books / Journals):\n  - Sales Journal: Records credit sales of inventory (source document: Sales Invoice).\n  - Purchases Journal: Records credit purchases of inventory (source document: Purchases Invoice).\n  - Returns Outwards / Purchases Returns Journal: Records goods returned to suppliers (Debit Note).\n  - Returns Inwards / Sales Returns Journal: Records goods returned by customers (Credit Note).\n  - General Journal: Records non-routine transactions (purchase/sale of non-current assets on credit, opening entries, correction of errors).\n• The Petty Cash Book & Imprest System:\n  - Used for minor routine disbursements (postage, stationery, tea supplies).\n  - Imprest System: Cashier maintains a fixed float. At the end of the period, the petty cashier is reimbursed the exact total spent, restoring the float.",
    "detailedNotes": {
      "introduction": "Rules of debit and credit, source documents, journals (Sales, Purchases, Returns, General Journal), and the Petty Cash Book with Imprest System.",
      "realWorldContext": "A boutique in Osu recording clothing sales on credit enters them first in the Sales Day Book before posting to the Sales Ledger.",
      "objectives": [
        "Apply the rules of double entry to record diverse commercial transactions",
        "Identify appropriate source documents for each book of original entry",
        "Prepare a Petty Cash Book using the analytical imprest system"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• The Double Entry Rule: For every debit entry, there must be a corresponding credit entry of equal amount.\n  - Debit the receiving account (Assets and Expenses increase on Debit).\n  - Credit the giving account (Liabilities, Capital, and Revenue increase on Credit).\n• Books of Prime Entry (Subsidiary Books / Journals):\n  - Sales Journal: Records credit sales of inventory (source document: Sales Invoice).\n  - Purchases Journal: Records credit purchases of inventory (source document: Purchases Invoice).\n  - Returns Outwards / Purchases Returns Journal: Records goods returned to suppliers (Debit Note).\n  - Returns Inwards / Sales Returns Journal: Records goods returned by customers (Credit Note).\n  - General Journal: Records non-routine transactions (purchase/sale of non-current assets on credit, opening entries, correction of errors).\n• The Petty Cash Book & Imprest System:\n  - Used for minor routine disbursements (postage, stationery, tea supplies).\n  - Imprest System: Cashier maintains a fixed float. At the end of the period, the petty cashier is reimbursed the exact total spent, restoring the float.",
          "bulletPoints": [
            "The Double Entry Rule: For every debit entry, there must be a corresponding credit entry of equal amount.",
            "Debit the receiving account (Assets and Expenses increase on Debit).",
            "Credit the giving account (Liabilities, Capital, and Revenue increase on Credit).",
            "Books of Prime Entry (Subsidiary Books / Journals):",
            "Sales Journal: Records credit sales of inventory (source document: Sales Invoice).",
            "Purchases Journal: Records credit purchases of inventory (source document: Purchases Invoice).",
            "Returns Outwards / Purchases Returns Journal: Records goods returned to suppliers (Debit Note).",
            "Returns Inwards / Sales Returns Journal: Records goods returned by customers (Credit Note).",
            "General Journal: Records non-routine transactions (purchase/sale of non-current assets on credit, opening entries, correction of errors).",
            "The Petty Cash Book & Imprest System:",
            "Used for minor routine disbursements (postage, stationery, tea supplies).",
            "Imprest System: Cashier maintains a fixed float. At the end of the period, the petty cashier is reimbursed the exact total spent, restoring the float."
          ],
          "keyTakeaway": "Remember: Trade discount is deducted on the invoice and NEVER recorded in the ledger accounts. Cash discount is recorded in the Cash Book!",
          "realWorldExample": "A boutique in Osu recording clothing sales on credit enters them first in the Sales Day Book before posting to the Sales Ledger."
        }
      ],
      "wassceExamTips": [
        "Remember: Trade discount is deducted on the invoice and NEVER recorded in the ledger accounts. Cash discount is recorded in the Cash Book!"
      ],
      "summaryChecklist": [
        "Apply the rules of double entry to record diverse commercial transactions",
        "Identify appropriate source documents for each book of original entry",
        "Prepare a Petty Cash Book using the analytical imprest system"
      ]
    },
    "quiz": {
      "id": "quiz-shs-fac-topic-02",
      "topicId": "shs-fac-topic-02",
      "title": "The Double Entry System & Books of Prime Entry Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-fac-2-1",
          "quizId": "quiz-shs-fac-topic-02",
          "questionText": "Which book of prime entry is used to record the purchase of factory machinery on credit?",
          "optionA": "Purchases Day Book",
          "optionB": "General Journal",
          "optionC": "Cash Book",
          "optionD": "Sales Day Book",
          "correctOption": "B",
          "explanation": "The Purchases Day Book records credit purchases of INVENTORY only; non-current assets on credit go to the General Journal.",
          "subConcept": "The Double Entry System & Books of Prime Entry",
          "remediationTip": "The Purchases Day Book records credit purchases of INVENTORY only; non-current assets on credit go to the General Journal."
        },
        {
          "id": "q-fac-2-2",
          "quizId": "quiz-shs-fac-topic-02",
          "questionText": "Under the Imprest System of petty cash, the reimbursement made to the petty cashier at the end of the month equals:",
          "optionA": "The original fixed cash float",
          "optionB": "The exact amount of vouchers spent during the period",
          "optionC": "Total bank balance",
          "optionD": "Half the monthly salary",
          "correctOption": "B",
          "explanation": "Reimbursing the exact total expenditure restores the cash float back to its agreed initial level.",
          "subConcept": "The Double Entry System & Books of Prime Entry",
          "remediationTip": "Reimbursing the exact total expenditure restores the cash float back to its agreed initial level."
        },
        {
          "id": "q-fac-2-3",
          "quizId": "quiz-shs-fac-topic-02",
          "questionText": "The source document sent by a seller to a buyer to rectify an overcharge or acknowledge returned damaged goods is a:",
          "optionA": "Debit Note",
          "optionB": "Credit Note",
          "optionC": "Cheque Counterfoil",
          "optionD": "Delivery Waybill",
          "correctOption": "B",
          "explanation": "A credit note informs the customer that their account has been credited (reduced).",
          "subConcept": "The Double Entry System & Books of Prime Entry",
          "remediationTip": "A credit note informs the customer that their account has been credited (reduced)."
        }
      ]
    }
  },
  {
    "id": "shs-fac-topic-03",
    "subjectId": "financial-accounting",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 3,
    "title": "The Cash Book & Bank Reconciliation Statements",
    "description": "Two-column and three-column cash books, reasons for discrepancies between cash book and bank statement, unpresented/uncredited cheques, and reconciliation.",
    "isFreeTrial": true,
    "isVip": false,
    "keyNotes": "• The Cash Book: A book of prime entry and a ledger account simultaneously, recording cash and bank transactions. Three-column cash book has Discount, Cash, and Bank columns.\n• Contra Entries: Transfer between Cash and Bank (e.g. cash deposited into bank: Dr Bank, Cr Cash). Marked with 'C'.\n• Bank Reconciliation Statement: Explains differences between the Bank balance in the Cash Book and the Bank Statement balance received from the bank.\n• Causes of Discrepancies:\n  1. Timing Differences:\n     - Unpresented Cheques: Cheques issued to creditors but not yet presented at bank for payment (Cash Book credited, Bank Statement not debited).\n     - Uncredited / Outstanding Lodgments: Cheques deposited but not yet cleared by the bank (Cash Book debited, Bank Statement not credited).\n  2. Items Recorded by Bank but Not in Cash Book:\n     - Bank charges, standing orders, direct debits, credit transfers, dishonored cheques (must be entered in Updated Cash Book first!).\n• Procedure: Update Cash Book first -> then prepare Bank Reconciliation Statement.",
    "detailedNotes": {
      "introduction": "Two-column and three-column cash books, reasons for discrepancies between cash book and bank statement, unpresented/uncredited cheques, and reconciliation.",
      "realWorldContext": "A distributor in Accra reconciling its Ecobank statement discovers standing orders for insurance that were not yet entered in the office cash book.",
      "objectives": [
        "Prepare a Three-Column Cash Book with discounts and contra entries",
        "Identify items causing variances between cash book and bank statement balances",
        "Prepare an Adjusted Cash Book followed by a Bank Reconciliation Statement"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• The Cash Book: A book of prime entry and a ledger account simultaneously, recording cash and bank transactions. Three-column cash book has Discount, Cash, and Bank columns.\n• Contra Entries: Transfer between Cash and Bank (e.g. cash deposited into bank: Dr Bank, Cr Cash). Marked with 'C'.\n• Bank Reconciliation Statement: Explains differences between the Bank balance in the Cash Book and the Bank Statement balance received from the bank.\n• Causes of Discrepancies:\n  1. Timing Differences:\n     - Unpresented Cheques: Cheques issued to creditors but not yet presented at bank for payment (Cash Book credited, Bank Statement not debited).\n     - Uncredited / Outstanding Lodgments: Cheques deposited but not yet cleared by the bank (Cash Book debited, Bank Statement not credited).\n  2. Items Recorded by Bank but Not in Cash Book:\n     - Bank charges, standing orders, direct debits, credit transfers, dishonored cheques (must be entered in Updated Cash Book first!).\n• Procedure: Update Cash Book first -> then prepare Bank Reconciliation Statement.",
          "bulletPoints": [
            "The Cash Book: A book of prime entry and a ledger account simultaneously, recording cash and bank transactions. Three-column cash book has Discount, Cash, and Bank columns.",
            "Contra Entries: Transfer between Cash and Bank (e.g. cash deposited into bank: Dr Bank, Cr Cash). Marked with 'C'.",
            "Bank Reconciliation Statement: Explains differences between the Bank balance in the Cash Book and the Bank Statement balance received from the bank.",
            "Causes of Discrepancies:",
            "Unpresented Cheques: Cheques issued to creditors but not yet presented at bank for payment (Cash Book credited, Bank Statement not debited).",
            "Uncredited / Outstanding Lodgments: Cheques deposited but not yet cleared by the bank (Cash Book debited, Bank Statement not credited).",
            "Bank charges, standing orders, direct debits, credit transfers, dishonored cheques (must be entered in Updated Cash Book first!).",
            "Procedure: Update Cash Book first -> then prepare Bank Reconciliation Statement."
          ],
          "keyTakeaway": "Step 1: Always update the Cash Book with bank charges, standing orders, and dishonored cheques before preparing the reconciliation statement.",
          "realWorldExample": "A distributor in Accra reconciling its Ecobank statement discovers standing orders for insurance that were not yet entered in the office cash book."
        }
      ],
      "wassceExamTips": [
        "Step 1: Always update the Cash Book with bank charges, standing orders, and dishonored cheques before preparing the reconciliation statement."
      ],
      "summaryChecklist": [
        "Prepare a Three-Column Cash Book with discounts and contra entries",
        "Identify items causing variances between cash book and bank statement balances",
        "Prepare an Adjusted Cash Book followed by a Bank Reconciliation Statement"
      ]
    },
    "quiz": {
      "id": "quiz-shs-fac-topic-03",
      "topicId": "shs-fac-topic-03",
      "title": "The Cash Book & Bank Reconciliation Statements Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-fac-3-1",
          "quizId": "quiz-shs-fac-topic-03",
          "questionText": "Cheques issued by a business to its suppliers that have not yet been presented to the bank for payment are termed:",
          "optionA": "Uncredited deposits",
          "optionB": "Unpresented cheques",
          "optionC": "Dishonored cheques",
          "optionD": "Stale cheques",
          "correctOption": "B",
          "explanation": "Unpresented cheques are drawn and entered in the cash book but not yet cleared by the payee's bank.",
          "subConcept": "The Cash Book & Bank Reconciliation Statements",
          "remediationTip": "Unpresented cheques are drawn and entered in the cash book but not yet cleared by the payee's bank."
        },
        {
          "id": "q-fac-3-2",
          "quizId": "quiz-shs-fac-topic-03",
          "questionText": "A transaction involving the withdrawal of cash from the office cash tilt for deposit into the business bank account is a:",
          "optionA": "Prepayment",
          "optionB": "Contra entry",
          "optionC": "Bad debt",
          "optionD": "Credit purchase",
          "correctOption": "B",
          "explanation": "A contra entry records internal fund transfers between cash and bank accounts.",
          "subConcept": "The Cash Book & Bank Reconciliation Statements",
          "remediationTip": "A contra entry records internal fund transfers between cash and bank accounts."
        },
        {
          "id": "q-fac-3-3",
          "quizId": "quiz-shs-fac-topic-03",
          "questionText": "Which of the following items requires an adjustment in the Cash Book before preparing a bank reconciliation statement?",
          "optionA": "Unpresented cheques",
          "optionB": "Uncredited lodgments",
          "optionC": "Bank service charges and ledger fees",
          "optionD": "Bank error on another customer's account",
          "correctOption": "C",
          "explanation": "Bank charges appear on the bank statement and must be posted into the cash book to update the cash balance.",
          "subConcept": "The Cash Book & Bank Reconciliation Statements",
          "remediationTip": "Bank charges appear on the bank statement and must be posted into the cash book to update the cash balance."
        }
      ]
    }
  },
  {
    "id": "shs-fac-topic-04",
    "subjectId": "financial-accounting",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 4,
    "title": "The Trial Balance & Correction of Errors",
    "description": "Functions of a trial balance, errors not affecting trial balance agreement (omission, commission, principle, compensating), and the Suspense Account.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Purpose of the Trial Balance: A statement listing all debit and credit balances extracted from the ledger at a specific date. Tests arithmetical accuracy of double-entry postings.\n• Errors That Do NOT Affect Trial Balance Agreement:\n  1. Error of Omission: Transaction completely omitted from both books.\n  2. Error of Commission: Correct amount entered in wrong person's account of the same class (e.g. debited to J. Mensah instead of K. Mensah).\n  3. Error of Principle: Transaction entered in the wrong class of account, violating accounting rules (e.g. motor repairs debited to Motor Vehicle asset account).\n  4. Error of Original Entry: Incorrect amount recorded in the source document and posted to both accounts (e.g. GH₵ 520 posted as GH₵ 250 in both accounts).\n  5. Complete Reversal of Entries: Correct accounts used, but debit posted as credit and vice versa.\n  6. Compensating Errors: Unrelated errors on both sides that coincidentally cancel each other out.\n• Errors That AFFECT Agreement: Unequal debit and credit entries, single entry, arithmetical miscalculations. Handled via the SUSPENSE ACCOUNT until investigated and cleared.",
    "detailedNotes": {
      "introduction": "Functions of a trial balance, errors not affecting trial balance agreement (omission, commission, principle, compensating), and the Suspense Account.",
      "realWorldContext": "An accountant recording a new air conditioner purchase under \"Repairs and Maintenance\" commits an Error of Principle.",
      "objectives": [
        "Extract and prepare a balanced Trial Balance from ledger accounts",
        "Analyze the six classic errors that do not affect trial balance agreement",
        "Use the General Journal and Suspense Account to correct bookkeeping errors"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Purpose of the Trial Balance: A statement listing all debit and credit balances extracted from the ledger at a specific date. Tests arithmetical accuracy of double-entry postings.\n• Errors That Do NOT Affect Trial Balance Agreement:\n  1. Error of Omission: Transaction completely omitted from both books.\n  2. Error of Commission: Correct amount entered in wrong person's account of the same class (e.g. debited to J. Mensah instead of K. Mensah).\n  3. Error of Principle: Transaction entered in the wrong class of account, violating accounting rules (e.g. motor repairs debited to Motor Vehicle asset account).\n  4. Error of Original Entry: Incorrect amount recorded in the source document and posted to both accounts (e.g. GH₵ 520 posted as GH₵ 250 in both accounts).\n  5. Complete Reversal of Entries: Correct accounts used, but debit posted as credit and vice versa.\n  6. Compensating Errors: Unrelated errors on both sides that coincidentally cancel each other out.\n• Errors That AFFECT Agreement: Unequal debit and credit entries, single entry, arithmetical miscalculations. Handled via the SUSPENSE ACCOUNT until investigated and cleared.",
          "bulletPoints": [
            "Purpose of the Trial Balance: A statement listing all debit and credit balances extracted from the ledger at a specific date. Tests arithmetical accuracy of double-entry postings.",
            "Errors That Do NOT Affect Trial Balance Agreement:",
            "Errors That AFFECT Agreement: Unequal debit and credit entries, single entry, arithmetical miscalculations. Handled via the SUSPENSE ACCOUNT until investigated and cleared."
          ],
          "keyTakeaway": "Error of Principle = wrong category (Capital vs Revenue expenditure). Error of Commission = right category, wrong personal name.",
          "realWorldExample": "An accountant recording a new air conditioner purchase under \"Repairs and Maintenance\" commits an Error of Principle."
        }
      ],
      "wassceExamTips": [
        "Error of Principle = wrong category (Capital vs Revenue expenditure). Error of Commission = right category, wrong personal name."
      ],
      "summaryChecklist": [
        "Extract and prepare a balanced Trial Balance from ledger accounts",
        "Analyze the six classic errors that do not affect trial balance agreement",
        "Use the General Journal and Suspense Account to correct bookkeeping errors"
      ]
    },
    "quiz": {
      "id": "quiz-shs-fac-topic-04",
      "topicId": "shs-fac-topic-04",
      "title": "The Trial Balance & Correction of Errors Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-fac-4-1",
          "quizId": "quiz-shs-fac-topic-04",
          "questionText": "Treating the purchase of a delivery van as motor vehicle running expenses is an example of an:",
          "optionA": "Error of commission",
          "optionB": "Error of principle",
          "optionC": "Error of omission",
          "optionD": "Compensating error",
          "correctOption": "B",
          "explanation": "Error of principle occurs when capital expenditure is treated as revenue expenditure, breaching accounting principles.",
          "subConcept": "The Trial Balance & Correction of Errors",
          "remediationTip": "Error of principle occurs when capital expenditure is treated as revenue expenditure, breaching accounting principles."
        },
        {
          "id": "q-fac-4-2",
          "quizId": "quiz-shs-fac-topic-04",
          "questionText": "Which error will cause a disagreement in the totals of the Trial Balance requiring a Suspense Account?",
          "optionA": "Complete omission of a cash sale",
          "optionB": "Entering a debit of GH₵ 5,000 to Purchases and crediting Cash with only GH₵ 500",
          "optionC": "Debiting K. Boateng instead of A. Boateng",
          "optionD": "Entering GH₵ 400 as GH₵ 40 in both debit and credit entries",
          "correctOption": "B",
          "explanation": "Unequal debit and credit amounts disrupt mathematical balance, creating a trial balance discrepancy.",
          "subConcept": "The Trial Balance & Correction of Errors",
          "remediationTip": "Unequal debit and credit amounts disrupt mathematical balance, creating a trial balance discrepancy."
        },
        {
          "id": "q-fac-4-3",
          "quizId": "quiz-shs-fac-topic-04",
          "questionText": "Posting a transaction correctly to the right class of accounts, but into the wrong person's personal ledger, is an:",
          "optionA": "Error of original entry",
          "optionB": "Error of commission",
          "optionC": "Error of principle",
          "optionD": "Reversal of entry",
          "correctOption": "B",
          "explanation": "Error of commission involves posting to the wrong individual's account of the correct type.",
          "subConcept": "The Trial Balance & Correction of Errors",
          "remediationTip": "Error of commission involves posting to the wrong individual's account of the correct type."
        }
      ]
    }
  },
  {
    "id": "shs-fac-topic-05",
    "subjectId": "financial-accounting",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 5,
    "title": "Year-End Balance Day Adjustments",
    "description": "Accruals and prepayments for income and expenditure, bad debts, allowance for doubtful debts, and depreciation methods (straight line, reducing balance).",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Accruals & Prepayments:\n  - Accrued Expense: Expense incurred during the period but not yet paid (Add to Expense; Current Liability on Balance Sheet).\n  - Prepaid Expense: Expense paid in advance for future period (Deduct from Expense; Current Asset on Balance Sheet).\n  - Accrued Income: Income earned but not yet received (Add to Income; Current Asset).\n  - Prepaid Income: Income received in advance (Deduct from Income; Current Liability).\n• Bad Debts & Allowance for Doubtful Debts:\n  - Bad Debt: A confirmed uncollectible debt written off directly as an expense (Dr Bad Debts, Cr Debtor).\n  - Allowance for Doubtful Debts: Prudent provision for estimated future defaults: (Debtors - Bad Debts) * Percentage Allowance. Only the INCREASE or DECREASE in allowance is charged to Profit and Loss!\n• Depreciation of Non-Current Assets:\n  - Straight Line Method: Equal annual charge: (Cost - Residual Value) / Useful Life.\n  - Reducing Balance Method: Constant percentage applied to Net Book Value (NBV) each year: Depreciation = Rate * (Cost - Accumulated Depreciation).",
    "detailedNotes": {
      "introduction": "Accruals and prepayments for income and expenditure, bad debts, allowance for doubtful debts, and depreciation methods (straight line, reducing balance).",
      "realWorldContext": "A Kumasi trader paying 2 years of shop rent upfront must prepay the second year's rent, reporting it as a current asset.",
      "objectives": [
        "Calculate and record adjustments for accrued and prepaid expenses and revenues",
        "Account for bad debts and adjustments in the allowance for doubtful debts",
        "Compute annual depreciation using the Straight Line and Reducing Balance methods"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Accruals & Prepayments:\n  - Accrued Expense: Expense incurred during the period but not yet paid (Add to Expense; Current Liability on Balance Sheet).\n  - Prepaid Expense: Expense paid in advance for future period (Deduct from Expense; Current Asset on Balance Sheet).\n  - Accrued Income: Income earned but not yet received (Add to Income; Current Asset).\n  - Prepaid Income: Income received in advance (Deduct from Income; Current Liability).\n• Bad Debts & Allowance for Doubtful Debts:\n  - Bad Debt: A confirmed uncollectible debt written off directly as an expense (Dr Bad Debts, Cr Debtor).\n  - Allowance for Doubtful Debts: Prudent provision for estimated future defaults: (Debtors - Bad Debts) * Percentage Allowance. Only the INCREASE or DECREASE in allowance is charged to Profit and Loss!\n• Depreciation of Non-Current Assets:\n  - Straight Line Method: Equal annual charge: (Cost - Residual Value) / Useful Life.\n  - Reducing Balance Method: Constant percentage applied to Net Book Value (NBV) each year: Depreciation = Rate * (Cost - Accumulated Depreciation).",
          "bulletPoints": [
            "Accruals & Prepayments:",
            "Accrued Expense: Expense incurred during the period but not yet paid (Add to Expense; Current Liability on Balance Sheet).",
            "Prepaid Expense: Expense paid in advance for future period (Deduct from Expense; Current Asset on Balance Sheet).",
            "Accrued Income: Income earned but not yet received (Add to Income; Current Asset).",
            "Prepaid Income: Income received in advance (Deduct from Income; Current Liability).",
            "Bad Debts & Allowance for Doubtful Debts:",
            "Bad Debt: A confirmed uncollectible debt written off directly as an expense (Dr Bad Debts, Cr Debtor).",
            "Allowance for Doubtful Debts: Prudent provision for estimated future defaults: (Debtors - Bad Debts) * Percentage Allowance. Only the INCREASE or DECREASE in allowance is charged to Profit and Loss!",
            "Depreciation of Non-Current Assets:",
            "Straight Line Method: Equal annual charge: (Cost - Residual Value) / Useful Life.",
            "Reducing Balance Method: Constant percentage applied to Net Book Value (NBV) each year: Depreciation = Rate * (Cost - Accumulated Depreciation)."
          ],
          "keyTakeaway": "In Doubtful Debts: Always deduct newly discovered Bad Debts from Trade Debtors FIRST, before calculating the percentage allowance on the remaining balance!",
          "realWorldExample": "A Kumasi trader paying 2 years of shop rent upfront must prepay the second year's rent, reporting it as a current asset."
        }
      ],
      "wassceExamTips": [
        "In Doubtful Debts: Always deduct newly discovered Bad Debts from Trade Debtors FIRST, before calculating the percentage allowance on the remaining balance!"
      ],
      "summaryChecklist": [
        "Calculate and record adjustments for accrued and prepaid expenses and revenues",
        "Account for bad debts and adjustments in the allowance for doubtful debts",
        "Compute annual depreciation using the Straight Line and Reducing Balance methods"
      ]
    },
    "quiz": {
      "id": "quiz-shs-fac-topic-05",
      "topicId": "shs-fac-topic-05",
      "title": "Year-End Balance Day Adjustments Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-fac-5-1",
          "quizId": "quiz-shs-fac-topic-05",
          "questionText": "An expense relating to the current accounting year that remains unpaid at the financial year-end must be:",
          "optionA": "Ignored until paid",
          "optionB": "Added to expenses in the Profit and Loss and shown as a Current Liability on the Balance Sheet",
          "optionC": "Deducted from sales revenue",
          "optionD": "Subtracted from owner's capital directly",
          "correctOption": "B",
          "explanation": "Accrued expenses increase current period expenses and represent a current liability owed.",
          "subConcept": "Year-End Balance Day Adjustments",
          "remediationTip": "Accrued expenses increase current period expenses and represent a current liability owed."
        },
        {
          "id": "q-fac-5-2",
          "quizId": "quiz-shs-fac-topic-05",
          "questionText": "A machine costing GH₵ 50,000 has a residual value of GH₵ 5,000 and an estimated useful life of 5 years. Using Straight Line Depreciation, annual depreciation is:",
          "optionA": "GH₵ 8,000",
          "optionB": "GH₵ 9,000",
          "optionC": "GH₵ 10,000",
          "optionD": "GH₵ 11,000",
          "correctOption": "B",
          "explanation": "Depreciation = (50,000 - 5,000) / 5 = 45,000 / 5 = GH₵ 9,000 per annum.",
          "subConcept": "Year-End Balance Day Adjustments",
          "remediationTip": "Depreciation = (50,000 - 5,000) / 5 = 45,000 / 5 = GH₵ 9,000 per annum."
        },
        {
          "id": "q-fac-5-3",
          "quizId": "quiz-shs-fac-topic-05",
          "questionText": "Under the Reducing Balance method, annual depreciation is computed as a fixed percentage of the asset's:",
          "optionA": "Original cost",
          "optionB": "Net Book Value (Cost minus Accumulated Depreciation)",
          "optionC": "Scrap value",
          "optionD": "Market replacement cost",
          "correctOption": "B",
          "explanation": "The reducing balance method applies the rate to the written-down net book value each year.",
          "subConcept": "Year-End Balance Day Adjustments",
          "remediationTip": "The reducing balance method applies the rate to the written-down net book value each year."
        }
      ]
    }
  },
  {
    "id": "shs-fac-topic-06",
    "subjectId": "financial-accounting",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 6,
    "title": "Preparation of Final Accounts of a Sole Trader",
    "description": "Trading, Profit and Loss Account (Statement of Profit or Loss), and Balance Sheet (Statement of Financial Position) with end-of-year adjustments.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• The Final Accounts Structure:\n  - Statement of Profit or Loss (Trading, Profit and Loss Account):\n    * Trading Section: Computes Gross Profit: Sales - Sales Returns - Cost of Goods Sold (COGS).\n      COGS = Opening Inventory + Net Purchases + Carriage Inwards - Closing Inventory.\n    * Profit and Loss Section: Adds Other Income (discount received, rent received) and subtracts Operating Expenses (salaries, electricity, carriage outwards, depreciation, bad debts) to determine Net Profit.\n  - Statement of Financial Position (Balance Sheet):\n    * Non-Current Assets (Cost, Accumulated Depreciation, Net Book Value).\n    * Current Assets (Closing Inventory, Trade Debtors less Allowance, Prepayments, Bank, Cash).\n    * Current Liabilities (Trade Creditors, Accruals, Bank Overdraft). Net Current Assets = Working Capital.\n    * Financed by: Capital + Net Profit - Drawings + Non-Current Liabilities (Loans).",
    "detailedNotes": {
      "introduction": "Trading, Profit and Loss Account (Statement of Profit or Loss), and Balance Sheet (Statement of Financial Position) with end-of-year adjustments.",
      "realWorldContext": "Ghana Revenue Authority requires sole proprietors to submit verified income statements to determine their annual personal income tax liability.",
      "objectives": [
        "Prepare a multi-step Statement of Profit or Loss incorporating all year-end adjustments",
        "Calculate Gross Profit, Cost of Goods Sold, and Net Profit accurately",
        "Draft a classified Statement of Financial Position balanced in vertical format"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• The Final Accounts Structure:\n  - Statement of Profit or Loss (Trading, Profit and Loss Account):\n    * Trading Section: Computes Gross Profit: Sales - Sales Returns - Cost of Goods Sold (COGS).\n      COGS = Opening Inventory + Net Purchases + Carriage Inwards - Closing Inventory.\n    * Profit and Loss Section: Adds Other Income (discount received, rent received) and subtracts Operating Expenses (salaries, electricity, carriage outwards, depreciation, bad debts) to determine Net Profit.\n  - Statement of Financial Position (Balance Sheet):\n    * Non-Current Assets (Cost, Accumulated Depreciation, Net Book Value).\n    * Current Assets (Closing Inventory, Trade Debtors less Allowance, Prepayments, Bank, Cash).\n    * Current Liabilities (Trade Creditors, Accruals, Bank Overdraft). Net Current Assets = Working Capital.\n    * Financed by: Capital + Net Profit - Drawings + Non-Current Liabilities (Loans).",
          "bulletPoints": [
            "The Final Accounts Structure:",
            "Statement of Profit or Loss (Trading, Profit and Loss Account):",
            "Statement of Financial Position (Balance Sheet):"
          ],
          "keyTakeaway": "Carriage Inwards is added to Purchases in the Trading Account; Carriage Outwards is an operating selling expense in the Profit and Loss Account.",
          "realWorldExample": "Ghana Revenue Authority requires sole proprietors to submit verified income statements to determine their annual personal income tax liability."
        }
      ],
      "wassceExamTips": [
        "Carriage Inwards is added to Purchases in the Trading Account; Carriage Outwards is an operating selling expense in the Profit and Loss Account."
      ],
      "summaryChecklist": [
        "Prepare a multi-step Statement of Profit or Loss incorporating all year-end adjustments",
        "Calculate Gross Profit, Cost of Goods Sold, and Net Profit accurately",
        "Draft a classified Statement of Financial Position balanced in vertical format"
      ]
    },
    "quiz": {
      "id": "quiz-shs-fac-topic-06",
      "topicId": "shs-fac-topic-06",
      "title": "Preparation of Final Accounts of a Sole Trader Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-fac-6-1",
          "quizId": "quiz-shs-fac-topic-06",
          "questionText": "How is Cost of Goods Sold (COGS) calculated in the Trading Account?",
          "optionA": "Opening Inventory + Purchases + Carriage Inwards - Closing Inventory",
          "optionB": "Sales minus Operating Expenses",
          "optionC": "Closing Inventory + Net Profit",
          "optionD": "Purchases + Carriage Outwards",
          "correctOption": "A",
          "explanation": "COGS measures direct merchandise costs: Opening Stock + Net Inward Goods - Unsold Closing Stock.",
          "subConcept": "Preparation of Final Accounts of a Sole Trader",
          "remediationTip": "COGS measures direct merchandise costs: Opening Stock + Net Inward Goods - Unsold Closing Stock."
        },
        {
          "id": "q-fac-6-2",
          "quizId": "quiz-shs-fac-topic-06",
          "questionText": "Where is Carriage Outwards (freight paid on delivering goods to customers) recorded in the final accounts?",
          "optionA": "Added to purchases in the Trading Account",
          "optionB": "Operating expense in the Profit and Loss Account",
          "optionC": "Non-current asset on the Balance Sheet",
          "optionD": "Deducted from sales returns",
          "correctOption": "B",
          "explanation": "Carriage outwards is a selling and distribution expense shown in the profit and loss account.",
          "subConcept": "Preparation of Final Accounts of a Sole Trader",
          "remediationTip": "Carriage outwards is a selling and distribution expense shown in the profit and loss account."
        },
        {
          "id": "q-fac-6-3",
          "quizId": "quiz-shs-fac-topic-06",
          "questionText": "On the Statement of Financial Position, owner's drawings made during the year are:",
          "optionA": "Added to trade creditors",
          "optionB": "Deducted from owner's capital",
          "optionC": "Listed as non-current assets",
          "optionD": "Added to net profit",
          "correctOption": "B",
          "explanation": "Drawings represent withdrawals by the owner, reducing equity capital.",
          "subConcept": "Preparation of Final Accounts of a Sole Trader",
          "remediationTip": "Drawings represent withdrawals by the owner, reducing equity capital."
        }
      ]
    }
  },
  {
    "id": "shs-fac-topic-07",
    "subjectId": "financial-accounting",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 7,
    "title": "Manufacturing Accounts",
    "description": "Direct costs, Prime Cost, factory overheads, Work-in-Progress (WIP), cost of production of finished goods, and unrealized profit on finished goods.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Nature of Manufacturing Accounts: Prepared by manufacturing entities to determine the production cost of finished goods before transferring them to the Trading Account.\n• Structure of Manufacturing Account:\n  - Direct Materials Consumed: Opening Raw Materials + Raw Material Purchases + Carriage on Raw Materials - Closing Raw Materials.\n  - + Direct Labor (Factory Wages).\n  - + Direct Expenses (Royalties, Hire of special machine).\n  - = PRIME COST.\n  - + Factory Overheads (Factory rent, power, supervisor salaries, factory plant depreciation).\n  - + Opening Work-in-Progress (WIP).\n  - - Closing Work-in-Progress (WIP).\n  - = PRODUCTION COST OF FINISHED GOODS (transferred to Trading Account).\n• Division of Expenses: Rent, electricity, and insurance are shared between the factory (Manufacturing Account) and administrative offices (Profit and Loss Account).",
    "detailedNotes": {
      "introduction": "Direct costs, Prime Cost, factory overheads, Work-in-Progress (WIP), cost of production of finished goods, and unrealized profit on finished goods.",
      "realWorldContext": "A plastic manufacturing company in Tema prepares a manufacturing account to determine the unit cost of buckets before setting retail prices.",
      "objectives": [
        "Distinguish between direct production costs and indirect factory overheads",
        "Calculate Raw Materials Consumed, Prime Cost, and Production Cost of Finished Goods",
        "Account for opening and closing Work-in-Progress (WIP) in manufacturing accounts"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Nature of Manufacturing Accounts: Prepared by manufacturing entities to determine the production cost of finished goods before transferring them to the Trading Account.\n• Structure of Manufacturing Account:\n  - Direct Materials Consumed: Opening Raw Materials + Raw Material Purchases + Carriage on Raw Materials - Closing Raw Materials.\n  - + Direct Labor (Factory Wages).\n  - + Direct Expenses (Royalties, Hire of special machine).\n  - = PRIME COST.\n  - + Factory Overheads (Factory rent, power, supervisor salaries, factory plant depreciation).\n  - + Opening Work-in-Progress (WIP).\n  - - Closing Work-in-Progress (WIP).\n  - = PRODUCTION COST OF FINISHED GOODS (transferred to Trading Account).\n• Division of Expenses: Rent, electricity, and insurance are shared between the factory (Manufacturing Account) and administrative offices (Profit and Loss Account).",
          "bulletPoints": [
            "Nature of Manufacturing Accounts: Prepared by manufacturing entities to determine the production cost of finished goods before transferring them to the Trading Account.",
            "Structure of Manufacturing Account:",
            "Direct Materials Consumed: Opening Raw Materials + Raw Material Purchases + Carriage on Raw Materials - Closing Raw Materials.",
            "+ Direct Labor (Factory Wages).",
            "+ Direct Expenses (Royalties, Hire of special machine).",
            "= PRIME COST.",
            "+ Factory Overheads (Factory rent, power, supervisor salaries, factory plant depreciation).",
            "+ Opening Work-in-Progress (WIP).",
            "Closing Work-in-Progress (WIP).",
            "= PRODUCTION COST OF FINISHED GOODS (transferred to Trading Account).",
            "Division of Expenses: Rent, electricity, and insurance are shared between the factory (Manufacturing Account) and administrative offices (Profit and Loss Account)."
          ],
          "keyTakeaway": "Administrative expenses, selling expenses, and showroom rent NEVER appear in the Manufacturing Account; they belong exclusively in the Profit and Loss Account!",
          "realWorldExample": "A plastic manufacturing company in Tema prepares a manufacturing account to determine the unit cost of buckets before setting retail prices."
        }
      ],
      "wassceExamTips": [
        "Administrative expenses, selling expenses, and showroom rent NEVER appear in the Manufacturing Account; they belong exclusively in the Profit and Loss Account!"
      ],
      "summaryChecklist": [
        "Distinguish between direct production costs and indirect factory overheads",
        "Calculate Raw Materials Consumed, Prime Cost, and Production Cost of Finished Goods",
        "Account for opening and closing Work-in-Progress (WIP) in manufacturing accounts"
      ]
    },
    "quiz": {
      "id": "quiz-shs-fac-topic-07",
      "topicId": "shs-fac-topic-07",
      "title": "Manufacturing Accounts Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-fac-7-1",
          "quizId": "quiz-shs-fac-topic-07",
          "questionText": "Which of the following items is included in the computation of Prime Cost in a Manufacturing Account?",
          "optionA": "Factory building depreciation",
          "optionB": "Direct manufacturing wages",
          "optionC": "Office manager's salary",
          "optionD": "Advertising expenses",
          "correctOption": "B",
          "explanation": "Prime Cost includes Direct Materials, Direct Labor (manufacturing wages), and Direct Expenses.",
          "subConcept": "Manufacturing Accounts",
          "remediationTip": "Prime Cost includes Direct Materials, Direct Labor (manufacturing wages), and Direct Expenses."
        },
        {
          "id": "q-fac-7-2",
          "quizId": "quiz-shs-fac-topic-07",
          "questionText": "How is Work-in-Progress (WIP) handled in the Manufacturing Account?",
          "optionA": "Opening WIP is added and Closing WIP is deducted from total manufacturing costs",
          "optionB": "Both opening and closing WIP are added to Prime Cost",
          "optionC": "WIP is ignored completely",
          "optionD": "Closing WIP is transferred to the Capital account",
          "correctOption": "A",
          "explanation": "Opening WIP represents uncompleted work brought forward to be finished; closing WIP is uncompleted work carried forward.",
          "subConcept": "Manufacturing Accounts",
          "remediationTip": "Opening WIP represents uncompleted work brought forward to be finished; closing WIP is uncompleted work carried forward."
        },
        {
          "id": "q-fac-7-3",
          "quizId": "quiz-shs-fac-topic-07",
          "questionText": "Office administration expenses and sales showroom salaries are recorded in the:",
          "optionA": "Manufacturing Account",
          "optionB": "Trading Account",
          "optionC": "Profit and Loss Account",
          "optionD": "Suspense Account",
          "correctOption": "C",
          "explanation": "Non-factory operational overheads belong in the Profit and Loss Account, not the Manufacturing Account.",
          "subConcept": "Manufacturing Accounts",
          "remediationTip": "Non-factory operational overheads belong in the Profit and Loss Account, not the Manufacturing Account."
        }
      ]
    }
  },
  {
    "id": "shs-fac-topic-08",
    "subjectId": "financial-accounting",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 8,
    "title": "Accounts of Non-Profit Making Organizations",
    "description": "Receipts and Payments Account, Income and Expenditure Account, Accumulated Fund, subscriptions in arrears/advance, and bar trading accounts.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Non-Profit Organizations (NGOs, clubs, churches, societies): Operate to render services and welfare to members rather than generate commercial profit.\n• Terminology Equivalents:\n  - Cash Book = Receipts and Payments Account (summary of all cash receipts and payments; includes capital and revenue items).\n  - Profit and Loss Account = Income and Expenditure Account (accruals basis; records revenue income and revenue expenditure only; balance is Surplus or Deficit).\n  - Capital = Accumulated Fund (Excess of Total Assets over Total Liabilities at start of year).\n  - Net Profit / Net Loss = Surplus / Deficit of Income over Expenditure.\n• Accounting for Subscriptions:\n  - Subscriptions due/in arrears at start = Asset (Add if relating to this year); in advance = Liability.\n  - Subscriptions Account is used to determine the exact subscription income earned for the current year.",
    "detailedNotes": {
      "introduction": "Receipts and Payments Account, Income and Expenditure Account, Accumulated Fund, subscriptions in arrears/advance, and bar trading accounts.",
      "realWorldContext": "Social and sports clubs like the Accra Polo Club or local old-students associations prepare Income and Expenditure accounts for AGM reports.",
      "objectives": [
        "Contrast a Receipts and Payments Account with an Income and Expenditure Account",
        "Calculate the opening Accumulated Fund using a Statement of Affairs",
        "Reconcile subscriptions received with subscription income earned in the Subscriptions Account"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Non-Profit Organizations (NGOs, clubs, churches, societies): Operate to render services and welfare to members rather than generate commercial profit.\n• Terminology Equivalents:\n  - Cash Book = Receipts and Payments Account (summary of all cash receipts and payments; includes capital and revenue items).\n  - Profit and Loss Account = Income and Expenditure Account (accruals basis; records revenue income and revenue expenditure only; balance is Surplus or Deficit).\n  - Capital = Accumulated Fund (Excess of Total Assets over Total Liabilities at start of year).\n  - Net Profit / Net Loss = Surplus / Deficit of Income over Expenditure.\n• Accounting for Subscriptions:\n  - Subscriptions due/in arrears at start = Asset (Add if relating to this year); in advance = Liability.\n  - Subscriptions Account is used to determine the exact subscription income earned for the current year.",
          "bulletPoints": [
            "Non-Profit Organizations (NGOs, clubs, churches, societies): Operate to render services and welfare to members rather than generate commercial profit.",
            "Terminology Equivalents:",
            "Cash Book = Receipts and Payments Account (summary of all cash receipts and payments; includes capital and revenue items).",
            "Profit and Loss Account = Income and Expenditure Account (accruals basis; records revenue income and revenue expenditure only; balance is Surplus or Deficit).",
            "Capital = Accumulated Fund (Excess of Total Assets over Total Liabilities at start of year).",
            "Net Profit / Net Loss = Surplus / Deficit of Income over Expenditure.",
            "Accounting for Subscriptions:",
            "Subscriptions due/in arrears at start = Asset (Add if relating to this year); in advance = Liability.",
            "Subscriptions Account is used to determine the exact subscription income earned for the current year."
          ],
          "keyTakeaway": "Capital expenditures (buying club buses, clubhouse construction) go to the Balance Sheet, NOT the Income and Expenditure Account!",
          "realWorldExample": "Social and sports clubs like the Accra Polo Club or local old-students associations prepare Income and Expenditure accounts for AGM reports."
        }
      ],
      "wassceExamTips": [
        "Capital expenditures (buying club buses, clubhouse construction) go to the Balance Sheet, NOT the Income and Expenditure Account!"
      ],
      "summaryChecklist": [
        "Contrast a Receipts and Payments Account with an Income and Expenditure Account",
        "Calculate the opening Accumulated Fund using a Statement of Affairs",
        "Reconcile subscriptions received with subscription income earned in the Subscriptions Account"
      ]
    },
    "quiz": {
      "id": "quiz-shs-fac-topic-08",
      "topicId": "shs-fac-topic-08",
      "title": "Accounts of Non-Profit Making Organizations Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-fac-8-1",
          "quizId": "quiz-shs-fac-topic-08",
          "questionText": "The equivalent of the Capital account in the financial statements of a non-profit making club is the:",
          "optionA": "General Reserve",
          "optionB": "Accumulated Fund",
          "optionC": "Surplus Pool",
          "optionD": "Subscription Fund",
          "correctOption": "B",
          "explanation": "The Accumulated Fund represents the net worth (Assets - Liabilities) of a non-profit organization.",
          "subConcept": "Accounts of Non-Profit Making Organizations",
          "remediationTip": "The Accumulated Fund represents the net worth (Assets - Liabilities) of a non-profit organization."
        },
        {
          "id": "q-fac-8-2",
          "quizId": "quiz-shs-fac-topic-08",
          "questionText": "In a club's Subscriptions Account, annual subscriptions received in advance for the following year are treated as a:",
          "optionA": "Current Asset",
          "optionB": "Current Liability",
          "optionC": "Capital receipt",
          "optionD": "Non-current asset",
          "correctOption": "B",
          "explanation": "Subscriptions collected in advance represent unearned revenue and must be carried as a current liability.",
          "subConcept": "Accounts of Non-Profit Making Organizations",
          "remediationTip": "Subscriptions collected in advance represent unearned revenue and must be carried as a current liability."
        },
        {
          "id": "q-fac-8-3",
          "quizId": "quiz-shs-fac-topic-08",
          "questionText": "A Receipts and Payments Account differs from an Income and Expenditure Account because it:",
          "optionA": "Includes non-cash depreciation",
          "optionB": "Records all cash receipts and payments regardless of whether they are capital or revenue",
          "optionC": "Excludes all cash transactions",
          "optionD": "Is prepared only by limited liability companies",
          "correctOption": "B",
          "explanation": "The Receipts and Payments account is purely a cash summary showing inflows and outflows.",
          "subConcept": "Accounts of Non-Profit Making Organizations",
          "remediationTip": "The Receipts and Payments account is purely a cash summary showing inflows and outflows."
        }
      ]
    }
  },
  {
    "id": "shs-fac-topic-09",
    "subjectId": "financial-accounting",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 9,
    "title": "Partnership Accounts: Formation & Profit Sharing",
    "description": "Partnership agreement, Capital Accounts (fixed vs. fluctuating), Current Accounts, Profit and Loss Appropriation Account, interest on capital/drawings.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Partnership Accounting Structure:\n  - In addition to standard Trading and Profit and Loss Accounts, partnerships prepare a Profit and Loss Appropriation Account to distribute net profit among partners according to their agreement.\n• The Profit and Loss Appropriation Account:\n  - Net Profit from Profit and Loss Account.\n  - + Interest on Drawings (penalty charged to partners for withdrawing business funds).\n  - - Interest on Capital (reward for capital contributed).\n  - - Partners' Salaries and Commissions (reward for active management).\n  - = Residual Divisible Profit / Loss (shared in the agreed Profit Sharing Ratio - PSR).\n• Fixed vs. Fluctuating Capital Systems:\n  - Fixed Capital System: Partner's Capital Account remains fixed at original contribution; all profit share, interest, drawings, and salaries are recorded in a separate PARTNER'S CURRENT ACCOUNT.\n  - Fluctuating Capital System: All adjustments are made directly in the single Capital Account.",
    "detailedNotes": {
      "introduction": "Partnership agreement, Capital Accounts (fixed vs. fluctuating), Current Accounts, Profit and Loss Appropriation Account, interest on capital/drawings.",
      "realWorldContext": "A legal or medical partnership in Accra prepares appropriation accounts to distribute annual professional earnings among senior partners.",
      "objectives": [
        "Prepare the Profit and Loss Appropriation Account for a partnership",
        "Distinguish between Fixed Capital and Fluctuating Capital accounting methods",
        "Calculate interest on capital, interest on drawings, and partners' profit shares"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Partnership Accounting Structure:\n  - In addition to standard Trading and Profit and Loss Accounts, partnerships prepare a Profit and Loss Appropriation Account to distribute net profit among partners according to their agreement.\n• The Profit and Loss Appropriation Account:\n  - Net Profit from Profit and Loss Account.\n  - + Interest on Drawings (penalty charged to partners for withdrawing business funds).\n  - - Interest on Capital (reward for capital contributed).\n  - - Partners' Salaries and Commissions (reward for active management).\n  - = Residual Divisible Profit / Loss (shared in the agreed Profit Sharing Ratio - PSR).\n• Fixed vs. Fluctuating Capital Systems:\n  - Fixed Capital System: Partner's Capital Account remains fixed at original contribution; all profit share, interest, drawings, and salaries are recorded in a separate PARTNER'S CURRENT ACCOUNT.\n  - Fluctuating Capital System: All adjustments are made directly in the single Capital Account.",
          "bulletPoints": [
            "Partnership Accounting Structure:",
            "In addition to standard Trading and Profit and Loss Accounts, partnerships prepare a Profit and Loss Appropriation Account to distribute net profit among partners according to their agreement.",
            "The Profit and Loss Appropriation Account:",
            "Net Profit from Profit and Loss Account.",
            "+ Interest on Drawings (penalty charged to partners for withdrawing business funds).",
            "Interest on Capital (reward for capital contributed).",
            "Partners' Salaries and Commissions (reward for active management).",
            "= Residual Divisible Profit / Loss (shared in the agreed Profit Sharing Ratio - PSR).",
            "Fixed vs. Fluctuating Capital Systems:",
            "Fixed Capital System: Partner's Capital Account remains fixed at original contribution; all profit share, interest, drawings, and salaries are recorded in a separate PARTNER'S CURRENT ACCOUNT.",
            "Fluctuating Capital System: All adjustments are made directly in the single Capital Account."
          ],
          "keyTakeaway": "Remember: Interest on Drawings increases divisible profit in the Appropriation Account; Interest on Capital and Partners' Salaries decrease divisible profit!",
          "realWorldExample": "A legal or medical partnership in Accra prepares appropriation accounts to distribute annual professional earnings among senior partners."
        }
      ],
      "wassceExamTips": [
        "Remember: Interest on Drawings increases divisible profit in the Appropriation Account; Interest on Capital and Partners' Salaries decrease divisible profit!"
      ],
      "summaryChecklist": [
        "Prepare the Profit and Loss Appropriation Account for a partnership",
        "Distinguish between Fixed Capital and Fluctuating Capital accounting methods",
        "Calculate interest on capital, interest on drawings, and partners' profit shares"
      ]
    },
    "quiz": {
      "id": "quiz-shs-fac-topic-09",
      "topicId": "shs-fac-topic-09",
      "title": "Partnership Accounts: Formation & Profit Sharing Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-fac-9-1",
          "quizId": "quiz-shs-fac-topic-09",
          "questionText": "In a partnership, interest charged on partners' cash drawings is recorded in the Profit and Loss Appropriation Account as an:",
          "optionA": "Expense reducing profit",
          "optionB": "Addition to net profit",
          "optionC": "Item of capital",
          "optionD": "Non-current liability",
          "correctOption": "B",
          "explanation": "Interest on drawings is collected by the partnership from the partner, increasing total distributable profit.",
          "subConcept": "Partnership Accounts: Formation & Profit Sharing",
          "remediationTip": "Interest on drawings is collected by the partnership from the partner, increasing total distributable profit."
        },
        {
          "id": "q-fac-9-2",
          "quizId": "quiz-shs-fac-topic-09",
          "questionText": "Under a Fixed Capital method, a partner's share of annual profit and salary is credited to their:",
          "optionA": "Capital Account",
          "optionB": "Current Account",
          "optionC": "Drawings Account",
          "optionD": "Suspense Account",
          "correctOption": "B",
          "explanation": "Under the fixed capital system, routine operational entitlements are posted to the partner's Current Account.",
          "subConcept": "Partnership Accounts: Formation & Profit Sharing",
          "remediationTip": "Under the fixed capital system, routine operational entitlements are posted to the partner's Current Account."
        },
        {
          "id": "q-fac-9-3",
          "quizId": "quiz-shs-fac-topic-09",
          "questionText": "If A and B share profits in the ratio 3:2, and divisible profit is GH₵ 60,000, partner A's share is:",
          "optionA": "GH₵ 24,000",
          "optionB": "GH₵ 30,000",
          "optionC": "GH₵ 36,000",
          "optionD": "GH₵ 40,000",
          "correctOption": "C",
          "explanation": "Partner A's share = (3 / 5) * 60,000 = GH₵ 36,000.",
          "subConcept": "Partnership Accounts: Formation & Profit Sharing",
          "remediationTip": "Partner A's share = (3 / 5) * 60,000 = GH₵ 36,000."
        }
      ]
    }
  },
  {
    "id": "shs-fac-topic-10",
    "subjectId": "financial-accounting",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 10,
    "title": "Partnership Accounts: Changes in Partnership",
    "description": "Admission of a new partner, retirement, revaluation of assets and liabilities, the Revaluation Account, and treatment of goodwill.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Causes of Reconstitution: Admission of a new partner, retirement, death, or change in profit-sharing ratio.\n• Revaluation of Assets and Liabilities:\n  - Assets and liabilities are revalued to current market values so incoming or retiring partners do not unfairly gain or lose from historical cost changes.\n  - The Revaluation Account:\n    * Credit with: Increases in asset values, decreases in liabilities.\n    * Debit with: Decreases in asset values, increases in liabilities.\n    * Balance is Revaluation Profit or Loss, shared among OLD partners in their OLD profit-sharing ratio!\n• Accounting for Goodwill:\n  - Goodwill: The reputation, customer loyalty, and established market connection that enables an existing firm to earn supernormal profits.\n  - When a new partner joins, goodwill is valued and either raised in the books or written off through the capital accounts of the partners in their new ratio.",
    "detailedNotes": {
      "introduction": "Admission of a new partner, retirement, revaluation of assets and liabilities, the Revaluation Account, and treatment of goodwill.",
      "realWorldContext": "When an established accounting consultancy in Ghana admits a junior partner, existing client goodwill and office property are formally revalued.",
      "objectives": [
        "Prepare a Revaluation Account upon the admission or retirement of a partner",
        "Calculate and distribute revaluation profit or loss among partners in the old PSR",
        "Account for goodwill adjustments upon partnership reconstitution"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Causes of Reconstitution: Admission of a new partner, retirement, death, or change in profit-sharing ratio.\n• Revaluation of Assets and Liabilities:\n  - Assets and liabilities are revalued to current market values so incoming or retiring partners do not unfairly gain or lose from historical cost changes.\n  - The Revaluation Account:\n    * Credit with: Increases in asset values, decreases in liabilities.\n    * Debit with: Decreases in asset values, increases in liabilities.\n    * Balance is Revaluation Profit or Loss, shared among OLD partners in their OLD profit-sharing ratio!\n• Accounting for Goodwill:\n  - Goodwill: The reputation, customer loyalty, and established market connection that enables an existing firm to earn supernormal profits.\n  - When a new partner joins, goodwill is valued and either raised in the books or written off through the capital accounts of the partners in their new ratio.",
          "bulletPoints": [
            "Causes of Reconstitution: Admission of a new partner, retirement, death, or change in profit-sharing ratio.",
            "Revaluation of Assets and Liabilities:",
            "Assets and liabilities are revalued to current market values so incoming or retiring partners do not unfairly gain or lose from historical cost changes.",
            "The Revaluation Account:",
            "Accounting for Goodwill:",
            "Goodwill: The reputation, customer loyalty, and established market connection that enables an existing firm to earn supernormal profits.",
            "When a new partner joins, goodwill is valued and either raised in the books or written off through the capital accounts of the partners in their new ratio."
          ],
          "keyTakeaway": "Revaluation profit or loss is ALWAYS divided among the OLD partners in their OLD profit-sharing ratio; the incoming partner has no share in it.",
          "realWorldExample": "When an established accounting consultancy in Ghana admits a junior partner, existing client goodwill and office property are formally revalued."
        }
      ],
      "wassceExamTips": [
        "Revaluation profit or loss is ALWAYS divided among the OLD partners in their OLD profit-sharing ratio; the incoming partner has no share in it."
      ],
      "summaryChecklist": [
        "Prepare a Revaluation Account upon the admission or retirement of a partner",
        "Calculate and distribute revaluation profit or loss among partners in the old PSR",
        "Account for goodwill adjustments upon partnership reconstitution"
      ]
    },
    "quiz": {
      "id": "quiz-shs-fac-topic-10",
      "topicId": "shs-fac-topic-10",
      "title": "Partnership Accounts: Changes in Partnership Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-fac-10-1",
          "quizId": "quiz-shs-fac-topic-10",
          "questionText": "An increase in the value of land and buildings upon the admission of a new partner is recorded in the Revaluation Account as a:",
          "optionA": "Debit entry",
          "optionB": "Credit entry",
          "optionC": "Deduction from capital",
          "optionD": "Current liability",
          "correctOption": "B",
          "explanation": "Asset value increases represent gains credited to the Revaluation Account.",
          "subConcept": "Partnership Accounts: Changes in Partnership",
          "remediationTip": "Asset value increases represent gains credited to the Revaluation Account."
        },
        {
          "id": "q-fac-10-2",
          "quizId": "quiz-shs-fac-topic-10",
          "questionText": "Profit arising from the revaluation of partnership assets prior to admitting a new partner must be distributed among:",
          "optionA": "All partners including the new partner in the new ratio",
          "optionB": "Old partners only in their old profit-sharing ratio",
          "optionC": "The incoming partner alone",
          "optionD": "The government as stamp duty",
          "correctOption": "B",
          "explanation": "Old partners earned the historical appreciation and receive the full revaluation gain in their old ratio.",
          "subConcept": "Partnership Accounts: Changes in Partnership",
          "remediationTip": "Old partners earned the historical appreciation and receive the full revaluation gain in their old ratio."
        },
        {
          "id": "q-fac-10-3",
          "quizId": "quiz-shs-fac-topic-10",
          "questionText": "The intangible value of a firm's established reputation and customer connections that enables it to earn surplus profits is:",
          "optionA": "Patent",
          "optionB": "Goodwill",
          "optionC": "Copyright",
          "optionD": "Trademark",
          "correctOption": "B",
          "explanation": "Goodwill represents the capitalized reputation and commercial advantage of an existing business.",
          "subConcept": "Partnership Accounts: Changes in Partnership",
          "remediationTip": "Goodwill represents the capitalized reputation and commercial advantage of an existing business."
        }
      ]
    }
  },
  {
    "id": "shs-fac-topic-11",
    "subjectId": "financial-accounting",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 11,
    "title": "Partnership Accounts: Dissolution",
    "description": "Reasons for dissolution, preparation of the Realization Account, discharge of external liabilities, and settlement under the Rule in Garner v. Murray.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Dissolution of Partnership: The complete termination of the partnership relationship and liquidation of the business.\n• The Realization Account:\n  - Prepared to record the sale and disposal of all partnership assets and settlement of external liabilities.\n  - Steps in Realization:\n    1. Transfer all asset book values (except Cash/Bank) to Debit side of Realization Account.\n    2. Credit Realization Account with proceeds from sale of assets (Dr Cash/Bank).\n    3. If an asset is taken over by a partner, credit Realization and debit partner's Capital Account.\n    4. Debit Realization with dissolution expenses paid.\n    5. Balance of Realization Account is Realization Profit or Loss, shared among partners in their PSR.\n• Priority of Cash Settlement:\n  1. Realization expenses.\n  2. Outside third-party creditors (secured and unsecured).\n  3. Partners' loans to the firm.\n  4. Partners' capital account balances.\n• Garner v. Murray Rule: Any capital deficiency caused by an insolvent partner must be borne by the solvent partners in proportion to their LAST AGREED CAPITALS.",
    "detailedNotes": {
      "introduction": "Reasons for dissolution, preparation of the Realization Account, discharge of external liabilities, and settlement under the Rule in Garner v. Murray.",
      "realWorldContext": "When a transport partnership in Kumasi dissolves, commercial buses are auctioned, debts paid, and residual proceeds distributed to partners.",
      "objectives": [
        "Prepare the Realization Account, Cash/Bank Account, and Partners' Capital Accounts upon dissolution",
        "Determine the statutory order of priority for settling claims on liquidation",
        "Apply the Rule in Garner v. Murray to resolve capital account deficiencies of insolvent partners"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Dissolution of Partnership: The complete termination of the partnership relationship and liquidation of the business.\n• The Realization Account:\n  - Prepared to record the sale and disposal of all partnership assets and settlement of external liabilities.\n  - Steps in Realization:\n    1. Transfer all asset book values (except Cash/Bank) to Debit side of Realization Account.\n    2. Credit Realization Account with proceeds from sale of assets (Dr Cash/Bank).\n    3. If an asset is taken over by a partner, credit Realization and debit partner's Capital Account.\n    4. Debit Realization with dissolution expenses paid.\n    5. Balance of Realization Account is Realization Profit or Loss, shared among partners in their PSR.\n• Priority of Cash Settlement:\n  1. Realization expenses.\n  2. Outside third-party creditors (secured and unsecured).\n  3. Partners' loans to the firm.\n  4. Partners' capital account balances.\n• Garner v. Murray Rule: Any capital deficiency caused by an insolvent partner must be borne by the solvent partners in proportion to their LAST AGREED CAPITALS.",
          "bulletPoints": [
            "Dissolution of Partnership: The complete termination of the partnership relationship and liquidation of the business.",
            "The Realization Account:",
            "Prepared to record the sale and disposal of all partnership assets and settlement of external liabilities.",
            "Steps in Realization:",
            "Priority of Cash Settlement:",
            "Garner v. Murray Rule: Any capital deficiency caused by an insolvent partner must be borne by the solvent partners in proportion to their LAST AGREED CAPITALS."
          ],
          "keyTakeaway": "Order of settlement: Outside creditors are paid BEFORE partners' loans; partners' loans are paid BEFORE partners' capital balances!",
          "realWorldExample": "When a transport partnership in Kumasi dissolves, commercial buses are auctioned, debts paid, and residual proceeds distributed to partners."
        }
      ],
      "wassceExamTips": [
        "Order of settlement: Outside creditors are paid BEFORE partners' loans; partners' loans are paid BEFORE partners' capital balances!"
      ],
      "summaryChecklist": [
        "Prepare the Realization Account, Cash/Bank Account, and Partners' Capital Accounts upon dissolution",
        "Determine the statutory order of priority for settling claims on liquidation",
        "Apply the Rule in Garner v. Murray to resolve capital account deficiencies of insolvent partners"
      ]
    },
    "quiz": {
      "id": "quiz-shs-fac-topic-11",
      "topicId": "shs-fac-topic-11",
      "title": "Partnership Accounts: Dissolution Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-fac-11-1",
          "quizId": "quiz-shs-fac-topic-11",
          "questionText": "In the event of a partnership dissolution, which claim is settled first from realized asset proceeds before all others?",
          "optionA": "Partners' capital balances",
          "optionB": "Partners' loans to the firm",
          "optionC": "External third-party liabilities and dissolution expenses",
          "optionD": "Partners' drawings",
          "correctOption": "C",
          "explanation": "External creditors and realization costs have legal priority over any internal partner claims.",
          "subConcept": "Partnership Accounts: Dissolution",
          "remediationTip": "External creditors and realization costs have legal priority over any internal partner claims."
        },
        {
          "id": "q-fac-11-2",
          "quizId": "quiz-shs-fac-topic-11",
          "questionText": "The primary account opened to calculate the net profit or loss on the disposal of assets and settlement of debts upon dissolution is the:",
          "optionA": "Revaluation Account",
          "optionB": "Realization Account",
          "optionC": "Appropriation Account",
          "optionD": "Suspense Account",
          "correctOption": "B",
          "explanation": "The Realization Account accumulates the book values and sale proceeds of all liquidated assets.",
          "subConcept": "Partnership Accounts: Dissolution",
          "remediationTip": "The Realization Account accumulates the book values and sale proceeds of all liquidated assets."
        },
        {
          "id": "q-fac-11-3",
          "quizId": "quiz-shs-fac-topic-11",
          "questionText": "According to the landmark ruling in Garner v. Murray, a capital deficit resulting from a partner's insolvency must be borne by solvent partners in:",
          "optionA": "Equal shares",
          "optionB": "Their profit-sharing ratio",
          "optionC": "Proportion to their last agreed capital balances",
          "optionD": "Cash order",
          "correctOption": "C",
          "explanation": "The rule in Garner v. Murray mandates that solvent partners bear an insolvent partner's deficit according to capital ratios.",
          "subConcept": "Partnership Accounts: Dissolution",
          "remediationTip": "The rule in Garner v. Murray mandates that solvent partners bear an insolvent partner's deficit according to capital ratios."
        }
      ]
    }
  },
  {
    "id": "shs-fac-topic-12",
    "subjectId": "financial-accounting",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 12,
    "title": "Company Accounts: Share Capital & Debentures",
    "description": "Types of shares (ordinary, preference), authorized vs. issued vs. called-up capital, issue of shares at par/premium, and accounting for debentures.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Corporate Capital Structure:\n  - Ordinary Shares (Equity): Owners of the company; carry voting rights; receive variable dividends; take residual risk upon liquidation.\n  - Preference Shares: Receive fixed dividend rate ahead of ordinary shareholders; priority repayment on liquidation; typically non-voting (Cumulative, Participating, Redeemable).\n• Share Capital Categories:\n  - Authorized / Stated Capital: Maximum capital the company is legally authorized to issue.\n  - Issued Capital: Portion of authorized capital actually issued to shareholders.\n  - Called-Up Capital: Total amount requested from shareholders to date.\n  - Paid-Up Capital: Actual cash received from shareholders for calls made.\n  - Calls in Arrears: Amount called up but not yet paid by shareholders.\n• Issue of Shares:\n  - At Par: Issued at nominal face value (e.g. GH₵ 1 share for GH₵ 1).\n  - At Premium: Issued at price above nominal face value (e.g. GH₵ 1 share for GH₵ 1.50; excess 50p credited to Share Premium Account / Stated Capital under Act 992).\n• Debentures: Long-term loan certificates paying fixed interest; classified as Non-Current Liabilities.",
    "detailedNotes": {
      "introduction": "Types of shares (ordinary, preference), authorized vs. issued vs. called-up capital, issue of shares at par/premium, and accounting for debentures.",
      "realWorldContext": "Commercial banks in Ghana floating rights issues to meet Bank of Ghana minimum capital requirements credit proceeds to Stated Capital.",
      "objectives": [
        "Distinguish between Ordinary Shares, Preference Shares, and Debentures",
        "Record journal entries for share subscriptions at par and at a premium",
        "Differentiate between authorized, issued, called-up, and paid-up capital"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Corporate Capital Structure:\n  - Ordinary Shares (Equity): Owners of the company; carry voting rights; receive variable dividends; take residual risk upon liquidation.\n  - Preference Shares: Receive fixed dividend rate ahead of ordinary shareholders; priority repayment on liquidation; typically non-voting (Cumulative, Participating, Redeemable).\n• Share Capital Categories:\n  - Authorized / Stated Capital: Maximum capital the company is legally authorized to issue.\n  - Issued Capital: Portion of authorized capital actually issued to shareholders.\n  - Called-Up Capital: Total amount requested from shareholders to date.\n  - Paid-Up Capital: Actual cash received from shareholders for calls made.\n  - Calls in Arrears: Amount called up but not yet paid by shareholders.\n• Issue of Shares:\n  - At Par: Issued at nominal face value (e.g. GH₵ 1 share for GH₵ 1).\n  - At Premium: Issued at price above nominal face value (e.g. GH₵ 1 share for GH₵ 1.50; excess 50p credited to Share Premium Account / Stated Capital under Act 992).\n• Debentures: Long-term loan certificates paying fixed interest; classified as Non-Current Liabilities.",
          "bulletPoints": [
            "Corporate Capital Structure:",
            "Ordinary Shares (Equity): Owners of the company; carry voting rights; receive variable dividends; take residual risk upon liquidation.",
            "Preference Shares: Receive fixed dividend rate ahead of ordinary shareholders; priority repayment on liquidation; typically non-voting (Cumulative, Participating, Redeemable).",
            "Share Capital Categories:",
            "Authorized / Stated Capital: Maximum capital the company is legally authorized to issue.",
            "Issued Capital: Portion of authorized capital actually issued to shareholders.",
            "Called-Up Capital: Total amount requested from shareholders to date.",
            "Paid-Up Capital: Actual cash received from shareholders for calls made.",
            "Calls in Arrears: Amount called up but not yet paid by shareholders.",
            "Issue of Shares:",
            "At Par: Issued at nominal face value (e.g. GH₵ 1 share for GH₵ 1).",
            "At Premium: Issued at price above nominal face value (e.g. GH₵ 1 share for GH₵ 1.50; excess 50p credited to Share Premium Account / Stated Capital under Act 992).",
            "Debentures: Long-term loan certificates paying fixed interest; classified as Non-Current Liabilities."
          ],
          "keyTakeaway": "Under the Companies Act 2019 (Act 992) of Ghana, shares have no par value, but for WASSCE examination standards, understand share premium principles.",
          "realWorldExample": "Commercial banks in Ghana floating rights issues to meet Bank of Ghana minimum capital requirements credit proceeds to Stated Capital."
        }
      ],
      "wassceExamTips": [
        "Under the Companies Act 2019 (Act 992) of Ghana, shares have no par value, but for WASSCE examination standards, understand share premium principles."
      ],
      "summaryChecklist": [
        "Distinguish between Ordinary Shares, Preference Shares, and Debentures",
        "Record journal entries for share subscriptions at par and at a premium",
        "Differentiate between authorized, issued, called-up, and paid-up capital"
      ]
    },
    "quiz": {
      "id": "quiz-shs-fac-topic-12",
      "topicId": "shs-fac-topic-12",
      "title": "Company Accounts: Share Capital & Debentures Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-fac-12-1",
          "quizId": "quiz-shs-fac-topic-12",
          "questionText": "Shareholders who receive a fixed rate of dividend before any distribution is made to ordinary shareholders are:",
          "optionA": "Debenture holders",
          "optionB": "Preference shareholders",
          "optionC": "Deferred shareholders",
          "optionD": "Founders",
          "correctOption": "B",
          "explanation": "Preference shares have a prior contractual claim on distributable profits at a specified percentage.",
          "subConcept": "Company Accounts: Share Capital & Debentures",
          "remediationTip": "Preference shares have a prior contractual claim on distributable profits at a specified percentage."
        },
        {
          "id": "q-fac-12-2",
          "quizId": "quiz-shs-fac-topic-12",
          "questionText": "When shares with a nominal face value of GH₵ 2 are issued to the public for GH₵ 2.80, the extra GH₵ 0.80 per share is credited to the:",
          "optionA": "Retained Earnings Account",
          "optionB": "Share Premium Account",
          "optionC": "Profit and Loss Account",
          "optionD": "Debenture Account",
          "correctOption": "B",
          "explanation": "Amounts received above nominal face value represent share premium (capital surplus).",
          "subConcept": "Company Accounts: Share Capital & Debentures",
          "remediationTip": "Amounts received above nominal face value represent share premium (capital surplus)."
        },
        {
          "id": "q-fac-12-3",
          "quizId": "quiz-shs-fac-topic-12",
          "questionText": "The portion of a company's issued share capital that has been demanded from shareholders but not yet remitted is termed:",
          "optionA": "Paid-up capital",
          "optionB": "Calls in arrears",
          "optionC": "Authorized capital",
          "optionD": "Uncalled capital",
          "correctOption": "B",
          "explanation": "Calls in arrears represent outstanding call debts owed by defaulting shareholders.",
          "subConcept": "Company Accounts: Share Capital & Debentures",
          "remediationTip": "Calls in arrears represent outstanding call debts owed by defaulting shareholders."
        }
      ]
    }
  },
  {
    "id": "shs-fac-topic-13",
    "subjectId": "financial-accounting",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 13,
    "title": "Company Accounts: Financial Statements & Published Accounts",
    "description": "Preparation of Statement of Profit or Loss, Statement of Changes in Equity, and Statement of Financial Position under IFRS / Companies Act 2019.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Components of Published Financial Statements (IFRS / Companies Act 2019):\n  1. Statement of Profit or Loss and Other Comprehensive Income: Revenue, Cost of Sales, Gross Profit, Distribution Costs, Administrative Expenses, Finance Costs, Profit Before Tax, Corporate Tax Expense, Net Profit After Tax.\n  2. Statement of Changes in Equity (SOCIE): Reconciles Stated Capital, Retained Earnings, and Revaluation Reserves from beginning to end of year.\n  3. Statement of Financial Position:\n     - Non-Current Assets: Property, Plant & Equipment, Intangibles.\n     - Current Assets: Inventories, Trade Receivables, Cash and Cash Equivalents.\n     - Equity: Stated Capital, Retained Earnings, General Reserves.\n     - Non-Current Liabilities: Long-term bank borrowings, Debentures.\n     - Current Liabilities: Trade payables, Current tax payable, Short-term provisions.\n• Dividends Treatment:\n  - Interim Dividend: Paid during the financial year; recorded in Statement of Changes in Equity.\n  - Final Proposed Dividend: Proposed by directors after year-end; disclosed in notes (not a liability until AGM approval).",
    "detailedNotes": {
      "introduction": "Preparation of Statement of Profit or Loss, Statement of Changes in Equity, and Statement of Financial Position under IFRS / Companies Act 2019.",
      "realWorldContext": "Ghanaian listed companies on the GSE publish annual audited financial statements conforming to IFRS and Act 992 requirements.",
      "objectives": [
        "Draft a published Statement of Profit or Loss according to modern IFRS presentation standards",
        "Prepare the Statement of Changes in Equity showing movements in retained earnings and reserves",
        "Construct a complete corporate Statement of Financial Position"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Components of Published Financial Statements (IFRS / Companies Act 2019):\n  1. Statement of Profit or Loss and Other Comprehensive Income: Revenue, Cost of Sales, Gross Profit, Distribution Costs, Administrative Expenses, Finance Costs, Profit Before Tax, Corporate Tax Expense, Net Profit After Tax.\n  2. Statement of Changes in Equity (SOCIE): Reconciles Stated Capital, Retained Earnings, and Revaluation Reserves from beginning to end of year.\n  3. Statement of Financial Position:\n     - Non-Current Assets: Property, Plant & Equipment, Intangibles.\n     - Current Assets: Inventories, Trade Receivables, Cash and Cash Equivalents.\n     - Equity: Stated Capital, Retained Earnings, General Reserves.\n     - Non-Current Liabilities: Long-term bank borrowings, Debentures.\n     - Current Liabilities: Trade payables, Current tax payable, Short-term provisions.\n• Dividends Treatment:\n  - Interim Dividend: Paid during the financial year; recorded in Statement of Changes in Equity.\n  - Final Proposed Dividend: Proposed by directors after year-end; disclosed in notes (not a liability until AGM approval).",
          "bulletPoints": [
            "Components of Published Financial Statements (IFRS / Companies Act 2019):",
            "Non-Current Assets: Property, Plant & Equipment, Intangibles.",
            "Current Assets: Inventories, Trade Receivables, Cash and Cash Equivalents.",
            "Equity: Stated Capital, Retained Earnings, General Reserves.",
            "Non-Current Liabilities: Long-term bank borrowings, Debentures.",
            "Current Liabilities: Trade payables, Current tax payable, Short-term provisions.",
            "Dividends Treatment:",
            "Interim Dividend: Paid during the financial year; recorded in Statement of Changes in Equity.",
            "Final Proposed Dividend: Proposed by directors after year-end; disclosed in notes (not a liability until AGM approval)."
          ],
          "keyTakeaway": "Corporate tax for the year is debited to the Statement of Profit or Loss and shown as a Current Liability on the Balance Sheet until paid to GRA.",
          "realWorldExample": "Ghanaian listed companies on the GSE publish annual audited financial statements conforming to IFRS and Act 992 requirements."
        }
      ],
      "wassceExamTips": [
        "Corporate tax for the year is debited to the Statement of Profit or Loss and shown as a Current Liability on the Balance Sheet until paid to GRA."
      ],
      "summaryChecklist": [
        "Draft a published Statement of Profit or Loss according to modern IFRS presentation standards",
        "Prepare the Statement of Changes in Equity showing movements in retained earnings and reserves",
        "Construct a complete corporate Statement of Financial Position"
      ]
    },
    "quiz": {
      "id": "quiz-shs-fac-topic-13",
      "topicId": "shs-fac-topic-13",
      "title": "Company Accounts: Financial Statements & Published Accounts Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-fac-13-1",
          "quizId": "quiz-shs-fac-topic-13",
          "questionText": "In published corporate financial statements, proposed dividends approved after the reporting period are treated under IFRS as:",
          "optionA": "A current liability on the balance sheet",
          "optionB": "A non-adjusting event disclosed in the notes to the financial statements",
          "optionC": "An immediate deduction from gross profit",
          "optionD": "A long-term loan",
          "correctOption": "B",
          "explanation": "Under IAS 10, dividends proposed after balance sheet date are disclosed in notes, not recognized as current liabilities.",
          "subConcept": "Company Accounts: Financial Statements & Published Accounts",
          "remediationTip": "Under IAS 10, dividends proposed after balance sheet date are disclosed in notes, not recognized as current liabilities."
        },
        {
          "id": "q-fac-13-2",
          "quizId": "quiz-shs-fac-topic-13",
          "questionText": "Which financial statement reports movements in stated capital, revaluation surplus, and retained earnings during the year?",
          "optionA": "Cash Flow Statement",
          "optionB": "Statement of Changes in Equity (SOCIE)",
          "optionC": "Value Added Statement",
          "optionD": "Manufacturing Account",
          "correctOption": "B",
          "explanation": "The Statement of Changes in Equity tracks all equity additions, profit transfers, and dividend distributions.",
          "subConcept": "Company Accounts: Financial Statements & Published Accounts",
          "remediationTip": "The Statement of Changes in Equity tracks all equity additions, profit transfers, and dividend distributions."
        },
        {
          "id": "q-fac-13-3",
          "quizId": "quiz-shs-fac-topic-13",
          "questionText": "Corporate income tax charged on the company's annual profits is presented in the Statement of Profit or Loss:",
          "optionA": "As part of Prime Cost",
          "optionB": "As a deduction from Profit Before Tax",
          "optionC": "As an addition to Sales Revenue",
          "optionD": "As a non-current asset",
          "correctOption": "B",
          "explanation": "Tax expense is deducted from Profit Before Tax to determine Net Profit After Tax.",
          "subConcept": "Company Accounts: Financial Statements & Published Accounts",
          "remediationTip": "Tax expense is deducted from Profit Before Tax to determine Net Profit After Tax."
        }
      ]
    }
  },
  {
    "id": "shs-fac-topic-14",
    "subjectId": "financial-accounting",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 14,
    "title": "Departmental & Branch Accounts",
    "description": "Departmental Trading and Profit and Loss Accounts, basis of expense apportionment, dependent vs. independent branches, and goods invoiced at cost or selling price.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Departmental Accounting:\n  - Enables management to evaluate the individual trading performance and profitability of separate departments (e.g. Supermarket with Grocery, Electronics, Clothing).\n  - Departmental Columnar Accounts: Separate columns for each department in the Trading and Profit and Loss Account.\n  - Apportionment of Expenses:\n    * Floor area: Rent, rates, cleaning, lighting.\n    * Sales turnover: Salesmen commission, advertising, bad debts.\n    * Number of employees: Staff welfare, canteen costs.\n• Branch Accounting:\n  - Dependent Branches: Keep no independent books; all accounting handled by Head Office (HO).\n    * HO maintains Branch Stock Account, Branch Debtors Account, and Branch Adjustment Account.\n  - Invoicing Methods: Goods sent to branch at Cost, or at Cost plus Markup (Selling Price).\n  - Independent Branches: Maintain complete separate double-entry books and prepare independent trial balances; reconciled with HO through Head Office Current Account.",
    "detailedNotes": {
      "introduction": "Departmental Trading and Profit and Loss Accounts, basis of expense apportionment, dependent vs. independent branches, and goods invoiced at cost or selling price.",
      "realWorldContext": "Melcom department stores in Ghana track profitability separately across provisions, home appliances, and furniture departments.",
      "objectives": [
        "Prepare Columnar Departmental Trading, Profit and Loss Accounts",
        "Apportion common operating expenses across departments using equitable bases",
        "Record transactions for dependent branches with goods invoiced at selling price"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Departmental Accounting:\n  - Enables management to evaluate the individual trading performance and profitability of separate departments (e.g. Supermarket with Grocery, Electronics, Clothing).\n  - Departmental Columnar Accounts: Separate columns for each department in the Trading and Profit and Loss Account.\n  - Apportionment of Expenses:\n    * Floor area: Rent, rates, cleaning, lighting.\n    * Sales turnover: Salesmen commission, advertising, bad debts.\n    * Number of employees: Staff welfare, canteen costs.\n• Branch Accounting:\n  - Dependent Branches: Keep no independent books; all accounting handled by Head Office (HO).\n    * HO maintains Branch Stock Account, Branch Debtors Account, and Branch Adjustment Account.\n  - Invoicing Methods: Goods sent to branch at Cost, or at Cost plus Markup (Selling Price).\n  - Independent Branches: Maintain complete separate double-entry books and prepare independent trial balances; reconciled with HO through Head Office Current Account.",
          "bulletPoints": [
            "Departmental Accounting:",
            "Enables management to evaluate the individual trading performance and profitability of separate departments (e.g. Supermarket with Grocery, Electronics, Clothing).",
            "Departmental Columnar Accounts: Separate columns for each department in the Trading and Profit and Loss Account.",
            "Apportionment of Expenses:",
            "Branch Accounting:",
            "Dependent Branches: Keep no independent books; all accounting handled by Head Office (HO).",
            "Invoicing Methods: Goods sent to branch at Cost, or at Cost plus Markup (Selling Price).",
            "Independent Branches: Maintain complete separate double-entry books and prepare independent trial balances; reconciled with HO through Head Office Current Account."
          ],
          "keyTakeaway": "If goods are invoiced to the branch at Selling Price, the unrealized profit loading must be eliminated via the Branch Adjustment Account!",
          "realWorldExample": "Melcom department stores in Ghana track profitability separately across provisions, home appliances, and furniture departments."
        }
      ],
      "wassceExamTips": [
        "If goods are invoiced to the branch at Selling Price, the unrealized profit loading must be eliminated via the Branch Adjustment Account!"
      ],
      "summaryChecklist": [
        "Prepare Columnar Departmental Trading, Profit and Loss Accounts",
        "Apportion common operating expenses across departments using equitable bases",
        "Record transactions for dependent branches with goods invoiced at selling price"
      ]
    },
    "quiz": {
      "id": "quiz-shs-fac-topic-14",
      "topicId": "shs-fac-topic-14",
      "title": "Departmental & Branch Accounts Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-fac-14-1",
          "quizId": "quiz-shs-fac-topic-14",
          "questionText": "What is the most suitable basis for apportioning showroom advertising expenditure across different departments?",
          "optionA": "Floor area of each department",
          "optionB": "Sales turnover of each department",
          "optionC": "Number of staff employed",
          "optionD": "Value of equipment",
          "correctOption": "B",
          "explanation": "Advertising directly relates to revenue generation and is apportioned based on sales turnover.",
          "subConcept": "Departmental & Branch Accounts",
          "remediationTip": "Advertising directly relates to revenue generation and is apportioned based on sales turnover."
        },
        {
          "id": "q-fac-14-2",
          "quizId": "quiz-shs-fac-topic-14",
          "questionText": "In branch accounting, when goods are invoiced to a dependent branch at selling price (cost plus markup), the markup is recorded in the:",
          "optionA": "Goods Sent to Branch Account",
          "optionB": "Branch Adjustment (Stock Reserve) Account",
          "optionC": "General Journal",
          "optionD": "Bank Account",
          "correctOption": "B",
          "explanation": "The Branch Adjustment Account isolates and tracks the unrealized profit loading on branch inventory.",
          "subConcept": "Departmental & Branch Accounts",
          "remediationTip": "The Branch Adjustment Account isolates and tracks the unrealized profit loading on branch inventory."
        },
        {
          "id": "q-fac-14-3",
          "quizId": "quiz-shs-fac-topic-14",
          "questionText": "An independent branch maintains its own complete double-entry records and reconciles with headquarters using the:",
          "optionA": "Petty Cash Book",
          "optionB": "Head Office Current Account",
          "optionC": "Suspense Account",
          "optionD": "Share Capital Account",
          "correctOption": "B",
          "explanation": "The Head Office Current Account serves as the reciprocal equity account for the branch.",
          "subConcept": "Departmental & Branch Accounts",
          "remediationTip": "The Head Office Current Account serves as the reciprocal equity account for the branch."
        }
      ]
    }
  },
  {
    "id": "shs-fac-topic-15",
    "subjectId": "financial-accounting",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 15,
    "title": "Incomplete Records & Single Entry",
    "description": "Nature of single entry, calculating profit using the Statement of Affairs method, and converting incomplete records to double entry via control accounts.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Incomplete Records: A situation where a business fails to maintain a complete double-entry bookkeeping system (common among small traders).\n• Method 1: Statement of Affairs Approach:\n  - Statement of Affairs is a balance sheet prepared from available physical records and estimates.\n  - Opening Capital = Opening Assets - Opening Liabilities.\n  - Closing Capital = Closing Assets - Closing Liabilities.\n  - Profit Calculation: Profit = (Closing Capital + Drawings) - (Opening Capital + Additional Capital Introduced).\n• Method 2: Conversion to Double Entry:\n  - Total Debtors Account: Used to determine missing Credit Sales figure.\n  - Total Creditors Account: Used to determine missing Credit Purchases figure.\n  - Summary Cash Book: Used to reconstruct cash sales, cash drawings, or stolen cash receipts.\n  - Mark-up / Margin formulas used to calculate missing inventory or sales figures.",
    "detailedNotes": {
      "introduction": "Nature of single entry, calculating profit using the Statement of Affairs method, and converting incomplete records to double entry via control accounts.",
      "realWorldContext": "Market stall owners in Makola and Kejetia markets rely on Statement of Affairs methods when applying for microfinance loans.",
      "objectives": [
        "Compute net profit from incomplete records using the Statement of Affairs method",
        "Reconstruct missing figures (Sales, Purchases, Drawings) using control accounts",
        "Convert single-entry records into comprehensive double-entry final accounts"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Incomplete Records: A situation where a business fails to maintain a complete double-entry bookkeeping system (common among small traders).\n• Method 1: Statement of Affairs Approach:\n  - Statement of Affairs is a balance sheet prepared from available physical records and estimates.\n  - Opening Capital = Opening Assets - Opening Liabilities.\n  - Closing Capital = Closing Assets - Closing Liabilities.\n  - Profit Calculation: Profit = (Closing Capital + Drawings) - (Opening Capital + Additional Capital Introduced).\n• Method 2: Conversion to Double Entry:\n  - Total Debtors Account: Used to determine missing Credit Sales figure.\n  - Total Creditors Account: Used to determine missing Credit Purchases figure.\n  - Summary Cash Book: Used to reconstruct cash sales, cash drawings, or stolen cash receipts.\n  - Mark-up / Margin formulas used to calculate missing inventory or sales figures.",
          "bulletPoints": [
            "Incomplete Records: A situation where a business fails to maintain a complete double-entry bookkeeping system (common among small traders).",
            "Method 1: Statement of Affairs Approach:",
            "Statement of Affairs is a balance sheet prepared from available physical records and estimates.",
            "Opening Capital = Opening Assets - Opening Liabilities.",
            "Closing Capital = Closing Assets - Closing Liabilities.",
            "Profit Calculation: Profit = (Closing Capital + Drawings) - (Opening Capital + Additional Capital Introduced).",
            "Method 2: Conversion to Double Entry:",
            "Total Debtors Account: Used to determine missing Credit Sales figure.",
            "Total Creditors Account: Used to determine missing Credit Purchases figure.",
            "Summary Cash Book: Used to reconstruct cash sales, cash drawings, or stolen cash receipts.",
            "Mark-up / Margin formulas used to calculate missing inventory or sales figures."
          ],
          "keyTakeaway": "Profit = Closing Capital + Drawings - Capital Introduced - Opening Capital. Memorize this formula thoroughly!",
          "realWorldExample": "Market stall owners in Makola and Kejetia markets rely on Statement of Affairs methods when applying for microfinance loans."
        }
      ],
      "wassceExamTips": [
        "Profit = Closing Capital + Drawings - Capital Introduced - Opening Capital. Memorize this formula thoroughly!"
      ],
      "summaryChecklist": [
        "Compute net profit from incomplete records using the Statement of Affairs method",
        "Reconstruct missing figures (Sales, Purchases, Drawings) using control accounts",
        "Convert single-entry records into comprehensive double-entry final accounts"
      ]
    },
    "quiz": {
      "id": "quiz-shs-fac-topic-15",
      "topicId": "shs-fac-topic-15",
      "title": "Incomplete Records & Single Entry Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-fac-15-1",
          "quizId": "quiz-shs-fac-topic-15",
          "questionText": "If a trader's Opening Capital is GH₵ 20,000, Closing Capital is GH₵ 35,000, and Drawings were GH₵ 5,000 with no new capital added, the Net Profit is:",
          "optionA": "GH₵ 10,000",
          "optionB": "GH₵ 15,000",
          "optionC": "GH₵ 20,000",
          "optionD": "GH₵ 25,000",
          "correctOption": "C",
          "explanation": "Profit = Closing Capital (35,000) + Drawings (5,000) - Opening Capital (20,000) = 40,000 - 20,000 = GH₵ 20,000.",
          "subConcept": "Incomplete Records & Single Entry",
          "remediationTip": "Profit = Closing Capital (35,000) + Drawings (5,000) - Opening Capital (20,000) = 40,000 - 20,000 = GH₵ 20,000."
        },
        {
          "id": "q-fac-15-2",
          "quizId": "quiz-shs-fac-topic-15",
          "questionText": "When converting incomplete records to double entry, missing credit sales are deduced by reconstructing the:",
          "optionA": "Purchases Ledger Control Account",
          "optionB": "Sales Ledger (Debtors) Control Account",
          "optionC": "Bank Reconciliation Statement",
          "optionD": "Trading Account",
          "correctOption": "B",
          "explanation": "Balancing the Debtors Control Account with cash received and closing debtors yields the credit sales figure.",
          "subConcept": "Incomplete Records & Single Entry",
          "remediationTip": "Balancing the Debtors Control Account with cash received and closing debtors yields the credit sales figure."
        },
        {
          "id": "q-fac-15-3",
          "quizId": "quiz-shs-fac-topic-15",
          "questionText": "A Statement of Affairs differs from a conventional Balance Sheet because it is:",
          "optionA": "Prepared only for public companies",
          "optionB": "Constructed from incomplete records and estimated valuations",
          "optionC": "Audited by the Supreme Court",
          "optionD": "Exempt from the accounting equation",
          "correctOption": "B",
          "explanation": "A Statement of Affairs estimates assets and liabilities where double-entry ledgers are missing.",
          "subConcept": "Incomplete Records & Single Entry",
          "remediationTip": "A Statement of Affairs estimates assets and liabilities where double-entry ledgers are missing."
        }
      ]
    }
  },
  {
    "id": "shs-fac-topic-16",
    "subjectId": "financial-accounting",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 16,
    "title": "Control Accounts: Sales Ledger & Purchases Ledger",
    "description": "Purpose of control accounts, Sales Ledger (Debtors) Control Account, Purchases Ledger (Creditors) Control Account, contra sets-off, and self-balancing ledgers.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Control Accounts (Total Accounts):\n  - A summary account in the General Ledger that checks the arithmetical accuracy of an entire subsidiary ledger.\n  - Acts as an internal check to detect bookkeeping errors and fraud.\n• Sales Ledger Control Account (Total Debtors Account):\n  - Debit: Opening Debtors, Credit Sales, Dishonored Cheques, Interest charged to customers.\n  - Credit: Cash/Cheques received from customers, Discounts Allowed, Returns Inwards, Bad Debts Written Off, Contra / Set-off, Closing Debtors.\n• Purchases Ledger Control Account (Total Creditors Account):\n  - Debit: Cash/Cheques paid to suppliers, Discounts Received, Returns Outwards, Contra / Set-off, Closing Creditors.\n  - Credit: Opening Creditors, Credit Purchases, Interest charged by suppliers.\n• Contra Settlement / Set-off:\n  - Occurs when a business both sells to and buys from the same entity. The smaller balance is settled by a contra entry: Dr Purchases Ledger Control, Cr Sales Ledger Control.",
    "detailedNotes": {
      "introduction": "Purpose of control accounts, Sales Ledger (Debtors) Control Account, Purchases Ledger (Creditors) Control Account, contra sets-off, and self-balancing ledgers.",
      "realWorldContext": "Large FMCG wholesale distributors in Ghana maintain automated control accounts to manage thousands of retail trade debtors.",
      "objectives": [
        "Prepare Sales Ledger Control and Purchases Ledger Control accounts from primary summaries",
        "Record contra entries between trade receivables and trade payables",
        "Evaluate the role of control accounts in internal audit and fraud prevention"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Control Accounts (Total Accounts):\n  - A summary account in the General Ledger that checks the arithmetical accuracy of an entire subsidiary ledger.\n  - Acts as an internal check to detect bookkeeping errors and fraud.\n• Sales Ledger Control Account (Total Debtors Account):\n  - Debit: Opening Debtors, Credit Sales, Dishonored Cheques, Interest charged to customers.\n  - Credit: Cash/Cheques received from customers, Discounts Allowed, Returns Inwards, Bad Debts Written Off, Contra / Set-off, Closing Debtors.\n• Purchases Ledger Control Account (Total Creditors Account):\n  - Debit: Cash/Cheques paid to suppliers, Discounts Received, Returns Outwards, Contra / Set-off, Closing Creditors.\n  - Credit: Opening Creditors, Credit Purchases, Interest charged by suppliers.\n• Contra Settlement / Set-off:\n  - Occurs when a business both sells to and buys from the same entity. The smaller balance is settled by a contra entry: Dr Purchases Ledger Control, Cr Sales Ledger Control.",
          "bulletPoints": [
            "Control Accounts (Total Accounts):",
            "A summary account in the General Ledger that checks the arithmetical accuracy of an entire subsidiary ledger.",
            "Acts as an internal check to detect bookkeeping errors and fraud.",
            "Sales Ledger Control Account (Total Debtors Account):",
            "Debit: Opening Debtors, Credit Sales, Dishonored Cheques, Interest charged to customers.",
            "Credit: Cash/Cheques received from customers, Discounts Allowed, Returns Inwards, Bad Debts Written Off, Contra / Set-off, Closing Debtors.",
            "Purchases Ledger Control Account (Total Creditors Account):",
            "Debit: Cash/Cheques paid to suppliers, Discounts Received, Returns Outwards, Contra / Set-off, Closing Creditors.",
            "Credit: Opening Creditors, Credit Purchases, Interest charged by suppliers.",
            "Contra Settlement / Set-off:",
            "Occurs when a business both sells to and buys from the same entity. The smaller balance is settled by a contra entry: Dr Purchases Ledger Control, Cr Sales Ledger Control."
          ],
          "keyTakeaway": "In Contra entries: The smaller balance is always debited to Purchases Ledger Control and credited to Sales Ledger Control.",
          "realWorldExample": "Large FMCG wholesale distributors in Ghana maintain automated control accounts to manage thousands of retail trade debtors."
        }
      ],
      "wassceExamTips": [
        "In Contra entries: The smaller balance is always debited to Purchases Ledger Control and credited to Sales Ledger Control."
      ],
      "summaryChecklist": [
        "Prepare Sales Ledger Control and Purchases Ledger Control accounts from primary summaries",
        "Record contra entries between trade receivables and trade payables",
        "Evaluate the role of control accounts in internal audit and fraud prevention"
      ]
    },
    "quiz": {
      "id": "quiz-shs-fac-topic-16",
      "topicId": "shs-fac-topic-16",
      "title": "Control Accounts: Sales Ledger & Purchases Ledger Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-fac-16-1",
          "quizId": "quiz-shs-fac-topic-16",
          "questionText": "Which of the following items is entered on the CREDIT side of the Sales Ledger Control Account?",
          "optionA": "Credit sales for the period",
          "optionB": "Dishonored customer cheques",
          "optionC": "Bad debts written off and discounts allowed",
          "optionD": "Interest on overdue accounts",
          "correctOption": "C",
          "explanation": "Bad debts and discounts allowed reduce customer debts, appearing on the credit side.",
          "subConcept": "Control Accounts: Sales Ledger & Purchases Ledger",
          "remediationTip": "Bad debts and discounts allowed reduce customer debts, appearing on the credit side."
        },
        {
          "id": "q-fac-16-2",
          "quizId": "quiz-shs-fac-topic-16",
          "questionText": "A contra entry (set-off) between a sales ledger and a purchases ledger is recorded as:",
          "optionA": "Dr Sales Ledger Control, Cr Purchases Ledger Control",
          "optionB": "Dr Purchases Ledger Control, Cr Sales Ledger Control",
          "optionC": "Dr Bank, Cr Cash",
          "optionD": "Dr Suspense Account, Cr Capital",
          "correctOption": "B",
          "explanation": "Contra reduces both balances: debit the liability (Creditors) and credit the asset (Debtors).",
          "subConcept": "Control Accounts: Sales Ledger & Purchases Ledger",
          "remediationTip": "Contra reduces both balances: debit the liability (Creditors) and credit the asset (Debtors)."
        },
        {
          "id": "q-fac-16-3",
          "quizId": "quiz-shs-fac-topic-16",
          "questionText": "The primary internal control purpose of preparing control accounts is to:",
          "optionA": "Compute statutory PAYE tax",
          "optionB": "Verify the arithmetical accuracy of subsidiary ledgers and pinpoint posting errors",
          "optionC": "Determine executive compensation",
          "optionD": "Replace the general journal",
          "correctOption": "B",
          "explanation": "Control accounts provide an independent summary total checking individual ledger accounts.",
          "subConcept": "Control Accounts: Sales Ledger & Purchases Ledger",
          "remediationTip": "Control accounts provide an independent summary total checking individual ledger accounts."
        }
      ]
    }
  },
  {
    "id": "shs-fac-topic-17",
    "subjectId": "financial-accounting",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 17,
    "title": "Accounting Ratios & Financial Statement Analysis",
    "description": "Profitability ratios (gross margin, net margin, ROCE), liquidity ratios (current, quick/acid-test), efficiency/activity ratios, and gearing.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Purpose of Ratio Analysis: Evaluating financial performance, profitability, liquidity, and solvency by comparing financial metrics over time or against industry standards.\n• Categories of Ratios:\n  - Profitability Ratios:\n    * Gross Profit Margin = (Gross Profit / Sales) * 100.\n    * Net Profit Margin = (Net Profit / Sales) * 100.\n    * Return on Capital Employed (ROCE) = (Operating Profit / Capital Employed) * 100. [Primary test of managerial efficiency!].\n  - Liquidity Ratios:\n    * Current Ratio = Current Assets / Current Liabilities. (Benchmark: 2:1).\n    * Quick / Acid-Test Ratio = (Current Assets - Inventory) / Current Liabilities. (Benchmark: 1:1; excludes illiquid inventory).\n  - Efficiency / Activity Ratios:\n    * Inventory Turnover = Cost of Goods Sold / Average Inventory (times per year).\n    * Debtors Collection Period = (Trade Debtors / Credit Sales) * 365 days.\n    * Creditors Payment Period = (Trade Creditors / Credit Purchases) * 365 days.\n  - Gearing / Solvency Ratios:\n    * Debt-to-Equity Ratio = (Long-Term Debt / Equity Capital) * 100. High gearing (> 50%) increases financial distress risk.",
    "detailedNotes": {
      "introduction": "Profitability ratios (gross margin, net margin, ROCE), liquidity ratios (current, quick/acid-test), efficiency/activity ratios, and gearing.",
      "realWorldContext": "Commercial banks in Ghana review an SME's current ratio and ROCE before approving business expansion credit facilities.",
      "objectives": [
        "Calculate profitability, liquidity, efficiency, and gearing ratios from financial statements",
        "Interpret ratio results to evaluate corporate liquidity and solvency",
        "Identify limitations of ratio analysis (inflation distortions, differing accounting policies)"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Purpose of Ratio Analysis: Evaluating financial performance, profitability, liquidity, and solvency by comparing financial metrics over time or against industry standards.\n• Categories of Ratios:\n  - Profitability Ratios:\n    * Gross Profit Margin = (Gross Profit / Sales) * 100.\n    * Net Profit Margin = (Net Profit / Sales) * 100.\n    * Return on Capital Employed (ROCE) = (Operating Profit / Capital Employed) * 100. [Primary test of managerial efficiency!].\n  - Liquidity Ratios:\n    * Current Ratio = Current Assets / Current Liabilities. (Benchmark: 2:1).\n    * Quick / Acid-Test Ratio = (Current Assets - Inventory) / Current Liabilities. (Benchmark: 1:1; excludes illiquid inventory).\n  - Efficiency / Activity Ratios:\n    * Inventory Turnover = Cost of Goods Sold / Average Inventory (times per year).\n    * Debtors Collection Period = (Trade Debtors / Credit Sales) * 365 days.\n    * Creditors Payment Period = (Trade Creditors / Credit Purchases) * 365 days.\n  - Gearing / Solvency Ratios:\n    * Debt-to-Equity Ratio = (Long-Term Debt / Equity Capital) * 100. High gearing (> 50%) increases financial distress risk.",
          "bulletPoints": [
            "Purpose of Ratio Analysis: Evaluating financial performance, profitability, liquidity, and solvency by comparing financial metrics over time or against industry standards.",
            "Categories of Ratios:",
            "Profitability Ratios:",
            "Liquidity Ratios:",
            "Efficiency / Activity Ratios:",
            "Gearing / Solvency Ratios:"
          ],
          "keyTakeaway": "In Acid-Test Ratio, ALWAYS subtract Inventory from Current Assets: Inventory cannot be converted to cash instantly at short notice.",
          "realWorldExample": "Commercial banks in Ghana review an SME's current ratio and ROCE before approving business expansion credit facilities."
        }
      ],
      "wassceExamTips": [
        "In Acid-Test Ratio, ALWAYS subtract Inventory from Current Assets: Inventory cannot be converted to cash instantly at short notice."
      ],
      "summaryChecklist": [
        "Calculate profitability, liquidity, efficiency, and gearing ratios from financial statements",
        "Interpret ratio results to evaluate corporate liquidity and solvency",
        "Identify limitations of ratio analysis (inflation distortions, differing accounting policies)"
      ]
    },
    "quiz": {
      "id": "quiz-shs-fac-topic-17",
      "topicId": "shs-fac-topic-17",
      "title": "Accounting Ratios & Financial Statement Analysis Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-fac-17-1",
          "quizId": "quiz-shs-fac-topic-17",
          "questionText": "If a company has Current Assets of GH₵ 80,000 (including Inventory of GH₵ 30,000) and Current Liabilities of GH₵ 25,000, the Quick (Acid-Test) Ratio is:",
          "optionA": "3.2 : 1",
          "optionB": "2.0 : 1",
          "optionC": "1.2 : 1",
          "optionD": "0.8 : 1",
          "correctOption": "B",
          "explanation": "Quick Assets = 80,000 - 30,000 = GH₵ 50,000. Quick Ratio = 50,000 / 25,000 = 2.0 : 1.",
          "subConcept": "Accounting Ratios & Financial Statement Analysis",
          "remediationTip": "Quick Assets = 80,000 - 30,000 = GH₵ 50,000. Quick Ratio = 50,000 / 25,000 = 2.0 : 1."
        },
        {
          "id": "q-fac-17-2",
          "quizId": "quiz-shs-fac-topic-17",
          "questionText": "The primary ratio used to evaluate the overall efficiency of management in generating operating profits from capital invested is:",
          "optionA": "Current Ratio",
          "optionB": "Return on Capital Employed (ROCE)",
          "optionC": "Debtors Collection Period",
          "optionD": "Inventory Turnover",
          "correctOption": "B",
          "explanation": "ROCE measures operating profitability relative to total capital resources employed.",
          "subConcept": "Accounting Ratios & Financial Statement Analysis",
          "remediationTip": "ROCE measures operating profitability relative to total capital resources employed."
        },
        {
          "id": "q-fac-17-3",
          "quizId": "quiz-shs-fac-topic-17",
          "questionText": "A company with a Debtors Collection Period of 90 days while granting 30-day credit terms indicates:",
          "optionA": "Highly efficient cash flow management",
          "optionB": "Poor debt collection and increased risk of bad debts",
          "optionC": "Zero financial risk",
          "optionD": "High inventory turnover",
          "correctOption": "B",
          "explanation": "Taking 90 days to collect on 30-day terms reveals lax credit control and potential bad debt risks.",
          "subConcept": "Accounting Ratios & Financial Statement Analysis",
          "remediationTip": "Taking 90 days to collect on 30-day terms reveals lax credit control and potential bad debt risks."
        }
      ]
    }
  },
  {
    "id": "shs-fac-topic-18",
    "subjectId": "financial-accounting",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 18,
    "title": "Value Added Tax (VAT), Payroll & Public Sector Accounting",
    "description": "Accounting for standard VAT, NHIL, GETFund in Ghana, input vs. output VAT, public sector accounting concepts, and the Consolidated Fund.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Value Added Tax (VAT) in Ghana:\n  - Consumption tax administered by the Ghana Revenue Authority (GRA). Standard VAT is charged alongside statutory levies (NHIL 2.5%, GETFund 2.5%, COVID-19 Health Recovery Levy 1%).\n  - Input VAT: VAT paid by a business on its purchases and business inputs.\n  - Output VAT: VAT collected by a business from its customers on taxable sales.\n  - VAT Remittance = Output VAT - Input VAT.\n    * If Output VAT > Input VAT: Remit the difference to GRA by the last working day of the following month.\n    * If Input VAT > Output VAT: Claim tax refund or offset credit.\n• Public Sector Accounting:\n  - Government accounting governed by the Public Financial Management Act (PFMA, 2016).\n  - Cash Basis of Accounting traditionally used (focuses on cash receipts and statutory expenditures against parliamentary budgetary appropriations).\n  - Consolidated Fund: The central treasury account of Ghana into which all general revenues, taxes, and loans are deposited, and from which constitutional withdrawals are made.",
    "detailedNotes": {
      "introduction": "Accounting for standard VAT, NHIL, GETFund in Ghana, input vs. output VAT, public sector accounting concepts, and the Consolidated Fund.",
      "realWorldContext": "Registered retailers in Ghana generate GRA Commissioner-General VAT invoices, calculating NHIL, GETFund, and VAT at the checkout counter.",
      "objectives": [
        "Calculate Input VAT, Output VAT, and net VAT payable or refundable to the GRA",
        "Record journal entries for statutory VAT, NHIL, and GETFund transactions",
        "Compare Public Sector Accounting (Cash/Fund basis) with Private Commercial Accounting"
      ],
      "sections": [
        {
          "title": "Comprehensive Syllabus Study Notes",
          "content": "• Value Added Tax (VAT) in Ghana:\n  - Consumption tax administered by the Ghana Revenue Authority (GRA). Standard VAT is charged alongside statutory levies (NHIL 2.5%, GETFund 2.5%, COVID-19 Health Recovery Levy 1%).\n  - Input VAT: VAT paid by a business on its purchases and business inputs.\n  - Output VAT: VAT collected by a business from its customers on taxable sales.\n  - VAT Remittance = Output VAT - Input VAT.\n    * If Output VAT > Input VAT: Remit the difference to GRA by the last working day of the following month.\n    * If Input VAT > Output VAT: Claim tax refund or offset credit.\n• Public Sector Accounting:\n  - Government accounting governed by the Public Financial Management Act (PFMA, 2016).\n  - Cash Basis of Accounting traditionally used (focuses on cash receipts and statutory expenditures against parliamentary budgetary appropriations).\n  - Consolidated Fund: The central treasury account of Ghana into which all general revenues, taxes, and loans are deposited, and from which constitutional withdrawals are made.",
          "bulletPoints": [
            "Value Added Tax (VAT) in Ghana:",
            "Consumption tax administered by the Ghana Revenue Authority (GRA). Standard VAT is charged alongside statutory levies (NHIL 2.5%, GETFund 2.5%, COVID-19 Health Recovery Levy 1%).",
            "Input VAT: VAT paid by a business on its purchases and business inputs.",
            "Output VAT: VAT collected by a business from its customers on taxable sales.",
            "VAT Remittance = Output VAT - Input VAT.",
            "Public Sector Accounting:",
            "Government accounting governed by the Public Financial Management Act (PFMA, 2016).",
            "Cash Basis of Accounting traditionally used (focuses on cash receipts and statutory expenditures against parliamentary budgetary appropriations).",
            "Consolidated Fund: The central treasury account of Ghana into which all general revenues, taxes, and loans are deposited, and from which constitutional withdrawals are made."
          ],
          "keyTakeaway": "Remember: Output VAT is a CURRENT LIABILITY owed to the government until remitted to GRA. Input VAT is a receivable offset against Output VAT.",
          "realWorldExample": "Registered retailers in Ghana generate GRA Commissioner-General VAT invoices, calculating NHIL, GETFund, and VAT at the checkout counter."
        }
      ],
      "wassceExamTips": [
        "Remember: Output VAT is a CURRENT LIABILITY owed to the government until remitted to GRA. Input VAT is a receivable offset against Output VAT."
      ],
      "summaryChecklist": [
        "Calculate Input VAT, Output VAT, and net VAT payable or refundable to the GRA",
        "Record journal entries for statutory VAT, NHIL, and GETFund transactions",
        "Compare Public Sector Accounting (Cash/Fund basis) with Private Commercial Accounting"
      ]
    },
    "quiz": {
      "id": "quiz-shs-fac-topic-18",
      "topicId": "shs-fac-topic-18",
      "title": "Value Added Tax (VAT), Payroll & Public Sector Accounting Practice Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-fac-18-1",
          "quizId": "quiz-shs-fac-topic-18",
          "questionText": "In VAT accounting, if a registered trader's Output VAT on sales is GH₵ 45,000 and Input VAT on purchases is GH₵ 28,000, the trader must:",
          "optionA": "Claim a refund of GH₵ 17,000 from GRA",
          "optionB": "Remit GH₵ 17,000 to the Ghana Revenue Authority (GRA)",
          "optionC": "Write off GH₵ 28,000 as a bad debt",
          "optionD": "Add GH₵ 45,000 to capital",
          "correctOption": "B",
          "explanation": "Net VAT payable = Output VAT (45,000) - Input VAT (28,000) = GH₵ 17,000 payable to GRA.",
          "subConcept": "Value Added Tax (VAT), Payroll & Public Sector Accounting",
          "remediationTip": "Net VAT payable = Output VAT (45,000) - Input VAT (28,000) = GH₵ 17,000 payable to GRA."
        },
        {
          "id": "q-fac-18-2",
          "quizId": "quiz-shs-fac-topic-18",
          "questionText": "The principal government account into which all national tax revenues, duties, and statutory earnings in Ghana are deposited is the:",
          "optionA": "Contingency Fund",
          "optionB": "Consolidated Fund",
          "optionC": "Heritage Fund",
          "optionD": "Stabilization Fund",
          "correctOption": "B",
          "explanation": "The Consolidated Fund is the central statutory treasury fund established under Article 175 of the 1992 Constitution.",
          "subConcept": "Value Added Tax (VAT), Payroll & Public Sector Accounting",
          "remediationTip": "The Consolidated Fund is the central statutory treasury fund established under Article 175 of the 1992 Constitution."
        },
        {
          "id": "q-fac-18-3",
          "quizId": "quiz-shs-fac-topic-18",
          "questionText": "The accounting system traditionally utilized by government ministries, departments, and agencies (MDAs) that recognizes transactions only when cash is paid or received is:",
          "optionA": "Accrual accounting",
          "optionB": "Cash basis of accounting",
          "optionC": "Inflation accounting",
          "optionD": "Mark-to-market accounting",
          "correctOption": "B",
          "explanation": "The cash basis records financial transactions strictly upon actual cash receipt or disbursement.",
          "subConcept": "Value Added Tax (VAT), Payroll & Public Sector Accounting",
          "remediationTip": "The cash basis records financial transactions strictly upon actual cash receipt or disbursement."
        }
      ]
    }
  }
];
