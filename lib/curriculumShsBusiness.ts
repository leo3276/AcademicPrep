// Ghanaian SHS Business Elective Curriculum Topics
// 50 WASSCE-Standard Topics covering the 3 Business Elective Subjects:
// 1. Business Management (business-management): 17 topics
// 2. Costing (costing): 15 topics
// 3. Financial Accounting (financial-accounting): 18 topics

import { CurriculumTopic } from './types';

export const SHS_BUSINESS_TOPICS: CurriculumTopic[] = [
  {
    "id": "shs-bum-topic-01",
    "youtubeUrl": "https://www.youtube.com/watch?v=wLtTdSbr5QQ",
    "youtubeId": "wLtTdSbr5QQ",
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
"commonMistakes":         [
            "Defining business as trading only, which excludes production and the service sectors.",
            "Counting drawings as an expense when computing profit, and so reporting a loss where there is a profit.",
            "Ignoring implicit costs such as the owner own labour and so claiming profit where economics shows a loss.",
            "Confusing the purpose of business (satisfaction of wants with profit) with its function (production or exchange).",
            "Treating all money received as income, including loans and capital introduced."
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
"examples":       [
          {
            "id": "ex-bum-01-1",
            "title": "Accounting Profit Compared with Economic Profit for a Sole Trader",
            "problem": "A provision trader in Ho records sales of GHS 48,000 for the year. Purchases of goods cost GHS 30,000, wages GHS 6,000, shop rent GHS 3,600 and utilities GHS 2,400. The owner withdrew GHS 2,400 for household use. The owner received no salary, invested GHS 40,000 of personal savings that would have earned 12 per cent elsewhere, and could have earned GHS 7,200 working for another firm. Required: compute accounting profit, total implicit cost, and economic profit, and advise whether the business is worthwhile. [30 marks]",
            "stepByStepSolution": [
              "Step 1: Total explicit cost = purchases 30,000 plus wages 6,000 plus rent 3,600 plus utilities 2,400 = GHS 42,000. Drawings are excluded because they are not a cost of operating. [6 marks: excluding drawings is the tested point]",
              "Step 2: Accounting profit = 48,000 minus 42,000 = GHS 6,000. [4 marks]",
              "Step 3: Implicit cost of capital = 12 per cent of 40,000 = GHS 4,800, the interest forgone on savings invested in the shop. [5 marks]",
              "Step 4: Implicit cost of the owner labour = GHS 7,200, the wage forgone by not taking paid employment elsewhere. [4 marks]",
              "Step 5: Total implicit cost = 4,800 plus 7,200 = GHS 12,000. Economic profit = 6,000 minus 12,000 = minus GHS 6,000. [6 marks: the negative sign is the answer]",
              "Step 6: Advice: the shop earns accounting profit but fails to cover normal profit, so resources would earn more elsewhere; the trader should either raise margins, cut rent, or treat the loss as the price of independence. [5 marks]"
            ],
            "keyTakeaway": "Accounting profit ignores implicit costs. A business is economically viable only when it at least covers the opportunity cost of the owner capital and labour."
          },
          {
            "id": "ex-bum-01-2",
            "title": "Value Added and the Contribution of a Business to the Economy",
            "problem": "A biscuit factory in Tema buys flour, sugar and packaging worth GHS 14 million, pays wages of GHS 6.2 million, remits taxes of GHS 1.4 million, pays dividends of GHS 0.9 million, and reports sales of GHS 25 million. Required: compute value added, show how it is distributed, find the retained profit, and name three ways the business contributes beyond profit. [25 marks]",
            "stepByStepSolution": [
              "Step 1: Value added = sales minus cost of purchased inputs = 25 million minus 14 million = GHS 11 million. [5 marks: intermediate goods are not the firms own contribution]",
              "Step 2: Distribution: wages 6.2 million plus taxes 1.4 million plus dividends 0.9 million = GHS 8.5 million already allocated. [5 marks]",
              "Step 3: Retained profit = 11 million minus 8.5 million = GHS 2.5 million, which finances future expansion. [4 marks]",
              "Step 4: Check: 6.2 plus 1.4 plus 0.9 plus 2.5 = 11.0 million, so the whole value added is accounted for. [3 marks: the reconciliation earns the method mark]",
              "Step 5: Value added as a share of sales = 11 divided by 25 times 100 = 44 per cent, showing how processing raises worth above raw inputs. [4 marks]",
              "Step 6: Other contributions: employment and skills for 6.2 million of wages, government revenue of 1.4 million for public services, and supply of affordable food that satisfies wants; also locator value for the community through roads and electricity. [4 marks]"
            ],
            "keyTakeaway": "Value added equals output minus purchased inputs and is distributed to labour, government, shareholders and retained earnings; the four shares must add back to it."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=Zf4ozWJ-Z6s",
    "youtubeId": "Zf4ozWJ-Z6s",
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
"commonMistakes":         [
            "Writing that a sole trader enjoys limited liability, which is exactly the opposite of the truth.",
            "Appropriating partnership profit in the capital-sharing ratio while ignoring salaries, interest and the residual rule.",
            "Treating drawings as an appropriation after interest on capital has been computed on the drawn amount.",
            "Stating that a partnership deed is compulsory in writing when an oral or implied agreement is legally valid.",
            "Naming the partnership maximum as 20 for every business; banking companies are limited to 10 partners."
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
"examples":       [
          {
            "id": "ex-bum-02-1",
            "title": "Appropriating Partnership Profit",
            "problem": "Amaning and Osei are partners with capital of GHS 60,000 and GHS 40,000. Their deed provides: interest on capital at 5 per cent a year, salary to Amaning GHS 6,000 and to Osei GHS 4,500, and the residual profit shared in the ratio 3 to 2. Net profit for the year is GHS 42,000. Required: prepare the appropriation account, compute each share, and state how the result would differ if profit were shared in the capital ratio instead. [35 marks]",
            "stepByStepSolution": [
              "Step 1: Interest on capital: Amaning 5 per cent of 60,000 = GHS 3,000; Osei 5 per cent of 40,000 = GHS 2,000; total GHS 5,000. [6 marks]",
              "Step 2: Salaries total 6,000 plus 4,500 = GHS 10,500, so guaranteed items together cost 5,000 plus 10,500 = GHS 15,500. [6 marks]",
              "Step 3: Residual profit = 42,000 minus 15,500 = GHS 26,500. [5 marks: this subtraction is where most candidates fail]",
              "Step 4: Residual in the ratio 3 to 2, total 5 parts: one part = 26,500 divided by 5 = 5,300, so Amaning 3 parts = GHS 15,900 and Osei 2 parts = GHS 10,600. [6 marks]",
              "Step 5: Total shares: Amaning 3,000 plus 6,000 plus 15,900 = GHS 24,900; Osei 2,000 plus 4,500 plus 10,600 = GHS 17,100; sum = GHS 42,000, agreeing with net profit. [6 marks: the reconciliation is compulsory]",
              "Step 6: In the capital ratio 60,000 to 40,000, that is 3 to 2 on 42,000, Amaning would get 25,200 and Osei 16,800, so the deed costs Amaning 300 and gains Osei 300 relative to the simple capital ratio; guaranteed items redistribute income away from pure capital weighting. [6 marks]"
            ],
            "keyTakeaway": "Appropriate in the fixed order interest, salaries, then residual, and always prove the total back to net profit before concluding."
          },
          {
            "id": "ex-bum-02-2",
            "title": "Unlimited Liability of a Sole Trader Quantified",
            "problem": "A sole trader business fails with assets realisable at GHS 45,000 and trade liabilities of GHS 72,000. The owner personally owns a house valued at GHS 40,000 and a car at GHS 18,000. Required: compute the shortfall creditors can claim, state what remains for the owner, and compare the outcome with the same failure inside a limited company where the owner had invested GHS 20,000 of shares. [25 marks]",
            "stepByStepSolution": [
              "Step 1: Business shortfall = liabilities 72,000 minus realisable assets 45,000 = GHS 27,000 unpaid. [5 marks]",
              "Step 2: Because liability is unlimited, creditors may pursue personal assets: house 40,000 plus car 18,000 = GHS 58,000 available. [5 marks]",
              "Step 3: After paying 27,000 from personal assets, the owner retains 58,000 minus 27,000 = GHS 31,000, having lost the business and part of personal wealth. [5 marks]",
              "Step 4: In a limited company the shareholder loses only the amount invested or unpaid on shares, that is GHS 20,000, and creditors cannot touch the house or car because the company is a separate legal person. [6 marks]",
              "Step 5: Conclusion: sole trading costs nothing to start but carries personal risk; incorporation limits loss to the investment while adding registration, filing and audit costs. A personal guarantee from the owner would, however, defeat the protection in practice. [4 marks]"
            ],
            "keyTakeaway": "Unlimited liability means personal assets answer business debts, so quantify the shortfall and then test it against personal wealth."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=JsFy06IUzXA",
    "youtubeId": "JsFy06IUzXA",
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
"commonMistakes":         [
            "Confusing authorised, issued, subscribed, called-up and paid-up share capital.",
            "Calling a public corporation a private limited company.",
            "Stating that shares in a private company can be advertised to the public on the stock exchange.",
            "Treating preference dividends as variable rather than fixed before any ordinary dividend.",
            "Saying a public enterprise is run for profit and ignores the social objective of service at reasonable cost."
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
"examples":       [
          {
            "id": "ex-bum-03-1",
            "title": "Called-Up Capital and Dividend Cover",
            "problem": "A company has authorised capital of 1,000,000 shares of GHS 1, issued 600,000 shares to the public, called up 80 pesewas a share of which 50 pesewas has been received. It also has 100,000 preference shares of GHS 2 carrying 8 per cent. Profit available for distribution is GHS 240,000 and the directors declare GHS 0.20 a share on ordinary shares. Required: compute called-up and paid-up capital, the amount still outstanding, the preference dividend, the ordinary dividend total, retained profit and dividend cover. [35 marks]",
            "stepByStepSolution": [
              "Step 1: Authorised capital = 1,000,000 times 1 = GHS 1,000,000; issued = 600,000 times 1 = GHS 600,000, so 400,000 shares remain unissued. [5 marks: distinguish the two]",
              "Step 2: Called-up capital = 600,000 times 0.80 = GHS 480,000; paid-up (received) = 600,000 times 0.50 = GHS 300,000. [6 marks]",
              "Step 3: Calls in arrear = 480,000 minus 300,000 = GHS 180,000, money legally owed by shareholders. [4 marks]",
              "Step 4: Preference dividend = 8 per cent of (100,000 times 2) = 8 per cent of 200,000 = GHS 16,000, paid before anything to ordinary holders. [6 marks]",
              "Step 5: Ordinary dividend = 600,000 times 0.20 = GHS 120,000, leaving profit for retention = 240,000 minus 16,000 minus 120,000 = GHS 104,000. [6 marks]",
              "Step 6: Dividend cover for ordinary shareholders = profit after preference dividend divided by ordinary dividend = (240,000 minus 16,000) divided by 120,000 = 1.87 times, so the dividend is covered but not comfortably; payout ratio = 120,000 divided by 224,000 = 53.57 per cent. [8 marks]"
            ],
            "keyTakeaway": "Move in order authorised, issued, called-up, paid-up, then pay preference before ordinary, and express the result as cover or payout ratio."
          },
          {
            "id": "ex-bum-03-2",
            "title": "Cost Recovery by a Public Enterprise",
            "problem": "A municipal water company serving 300,000 customers has annual operating cost of GHS 150 million plus capital charges of GHS 40 million. It collects tariffs of GHS 96 million and receives a government subvention. Required: compute total cost, the annual deficit, the subvention per customer, the tariff per customer needed for full cost recovery, and state two reasons a public enterprise may still be priced below cost. [25 marks]",
            "stepByStepSolution": [
              "Step 1: Total cost = 150 million plus 40 million = GHS 190 million a year. [4 marks]",
              "Step 2: Deficit = 190 million minus revenue 96 million = GHS 94 million, which the subvention must cover. [4 marks: forgetting capital charges is the usual error]",
              "Step 3: Subvention per customer = 94,000,000 divided by 300,000 = GHS 313.33 a head a year, that is about GHS 26.11 a month. [5 marks]",
              "Step 4: Full cost recovery tariff = 190 million divided by 300,000 = GHS 633.33 per customer a year against the present 96 million divided by 300,000 = GHS 320, so a real tariff increase of GHS 313.33, that is 97.9 per cent, would be needed. [5 marks]",
              "Step 5: Reasons for below-cost pricing: water is a social necessity, so the state protects the poor and controls inflation, and the enterprise also carries unprofitable rural connections that a private firm would refuse. [4 marks]",
              "Step 6: Consequence: persistent subvention delays maintenance, so non-revenue water from leaking pipes rises and true cost worsens, which is why cost recovery and social pricing must be stated separately. [3 marks]"
            ],
            "keyTakeaway": "Include capital charges before measuring a public enterprise deficit, and express the gap per customer to show the real burden of subsidy."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=wpdnLkVTkGg",
    "youtubeId": "wpdnLkVTkGg",
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
"commonMistakes":         [
            "Sharing cooperative surplus equally by member head instead of by patronage volume.",
            "Forgetting that the statutory reserve must be transferred before any distribution.",
            "Calling a cooperative a company because it has members instead of shareholders.",
            "Assuming one member has multiple votes in proportion to shares held; cooperatives vote one member one vote.",
            "Confusing a joint venture with a partnership, as if the venture were a continuing business."
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
"examples":       [
          {
            "id": "ex-bum-04-1",
            "title": "Distributing a Cooperative Surplus",
            "problem": "A maize marketing cooperative of 800 members earns a net surplus of GHS 96,000. The rules require: a statutory reserve of 20 per cent, an education fund of 5 per cent, interest on share capital at 8 per cent on total share capital of GHS 200,000, and the balance as a patronage dividend on the 1,200 tonnes members delivered. One member holds 300 shares worth GHS 300 and delivered 15 tonnes. Required: compute each appropriation, the patronage rate per tonne, and the total income this member receives. [35 marks]",
            "stepByStepSolution": [
              "Step 1: Statutory reserve = 20 per cent of 96,000 = GHS 19,200. [6 marks]",
              "Step 2: Education fund = 5 per cent of 96,000 = GHS 4,800. [6 marks]",
              "Step 3: Interest on share capital = 8 per cent of 200,000 = GHS 16,000. [6 marks: computed on capital, not on surplus]",
              "Step 4: Amount left for patronage = 96,000 minus 19,200 minus 4,800 minus 16,000 = GHS 56,000. [6 marks: this subtraction is the key working]",
              "Step 5: Patronage rate = 56,000 divided by 1,200 tonnes = GHS 46.67 per tonne delivered. [6 marks]",
              "Step 6: The member receives interest 8 per cent of 300 = GHS 24, plus patronage 15 times 46.67 = GHS 700.05, total GHS 724.05, and the surplus still undistributed is nil. [5 marks]"
            ],
            "keyTakeaway": "Deduct reserves and interest before patronage, then divide the balance by the volume each member traded, because cooperatives reward use and not ownership."
          },
          {
            "id": "ex-bum-04-2",
            "title": "Joint Venture Accounts Between Two Traders",
            "problem": "Mensah and Boateng enter a joint venture to sell bags of cement, sharing profit in the ratio 2 to 3. Mensah contributes GHS 40,000 and Boateng GHS 60,000. They buy goods for GHS 88,000, incur transport and handling of GHS 6,000, and sell for GHS 150,000. Unsold goods costing GHS 12,000 are taken over by Mensah at cost. Required: compute the venture profit, each share, and the amount returned to each venturer after Mensah takes over the remaining goods. [25 marks]",
            "stepByStepSolution": [
              "Step 1: Total contribution = 40,000 plus 60,000 = GHS 100,000, which is the joint capital for this single transaction. [3 marks]",
              "Step 2: Total cost of goods and expenses = 88,000 plus 6,000 = GHS 94,000, less the goods taken over at 12,000, giving a cost of sales of GHS 82,000. [6 marks: removing unsold goods is the tested adjustment]",
              "Step 3: Profit = sales 150,000 minus cost of sales 82,000 = GHS 68,000. [4 marks]",
              "Step 4: Shares in the ratio 2 to 3 of 68,000: one part = 13,600, so Mensah = GHS 27,200 and Boateng = GHS 40,800, which sum to 68,000. [5 marks]",
              "Step 5: Cash position = contributions 100,000 less goods purchased 88,000 less expenses paid 6,000 leaves 6,000 in hand, plus sales receipts of 150,000 gives cash available = GHS 156,000. [3 marks]",
              "Step 6: Settlement: Mensah receives 40,000 capital plus 27,200 profit less the 12,000 of goods taken over in kind = GHS 55,200, and Boateng receives 60,000 plus 40,800 = GHS 100,800; cash paid = 55,200 plus 100,800 = GHS 156,000, exactly the cash available, so the venture settles. [4 marks]"
            ],
            "keyTakeaway": "Charge all expenses before dividing joint venture profit, treat goods taken over as a deduction from that venturers cash settlement, and prove total cash plus kind equals funds available."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=7Rts70S_X3A",
    "youtubeId": "7Rts70S_X3A",
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
"commonMistakes":         [
            "Naming Fayol technical activities as management functions and repeating planning six times.",
            "Confusing authority with responsibility, or claiming accountability can be delegated downward.",
            "Listing principles of management without linking any to a Ghanaian business situation.",
            "Treating bureaucratic rules as efficiency without mentioning their dysfunction of red tape.",
            "Assuming a good administrative theory automatically produces a good work organisation."
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
"examples":       [
          {
            "id": "ex-bum-05-1",
            "title": "Span of Management and the Growth of Relationships",
            "problem": "A manager in an assembly plant in Tema supervises 4 subordinates and considers increasing the span to 5 or 6. The number of possible relationships is given by the formula n times (2 to the power (n minus 1) plus (n minus 1)). Required: compute relationships at 4, 5 and 6 subordinates, find the percentage increase from 4 to 6, and state three factors that should limit the span in a Ghanaian firm. [30 marks]",
            "stepByStepSolution": [
              "Step 1: At n = 4: 2 to the power 3 = 8, plus (4 minus 1) = 11, times 4 = 44 relationships. [6 marks: show the substitution]",
              "Step 2: At n = 5: 2 to the power 4 = 16, plus 4 = 20, times 5 = 100 relationships. [5 marks]",
              "Step 3: At n = 6: 2 to the power 5 = 32, plus 5 = 37, times 6 = 222 relationships. [5 marks]",
              "Step 4: Increase from 4 to 6 = 222 minus 44 = 178 more relationships, that is 178 divided by 44 times 100 = 404.5 per cent, for only a 50 per cent rise in subordinates. [6 marks: the disproportion is the point]",
              "Step 5: Conclusion: relationships grow far faster than the number of people, so a supervisor cannot simply add subordinates each year; the span must be set where contact can remain meaningful. [4 marks]",
              "Step 6: Limiting factors in Ghana: competence and education of workers, distance and language of the workforce, stability of the environment and technology, the quality of information systems, and the amount of delegated authority available. [4 marks]"
            ],
            "keyTakeaway": "The mathematical explosion of relationships, not workload, is what justifies a narrow span; state the formula, the values and the percentage jump."
          },
          {
            "id": "ex-bum-05-2",
            "title": "Tall Compared with Flat Structure Cost",
            "problem": "An insurance firm employs 4,096 operational staff. Management considers a span of control of 8 or of 16 at every supervisory level. Each supervisor earns GHS 2,500 a month. Required: build both hierarchies, count supervisory positions at each span, compute the monthly salary cost of supervision, and give two non-financial arguments for each structure. [30 marks]",
            "stepByStepSolution": [
              "Step 1: With a span of 8: 4,096 divided by 8 = 512 first-line supervisors; 512 divided by 8 = 64; 64 divided by 8 = 8; 8 divided by 8 = 1 manager, so four supervisory layers and five levels overall. [7 marks]",
              "Step 2: Supervisory posts at span 8 = 512 plus 64 plus 8 plus 1 = 585 posts. [4 marks]",
              "Step 3: With a span of 16: 4,096 divided by 16 = 256; 256 divided by 16 = 16; 16 divided by 16 = 1, giving 256 plus 16 plus 1 = 273 supervisors across three layers. [6 marks]",
              "Step 4: Cost: 585 times 2,500 = GHS 1,462,500 a month at the narrow span, and 273 times 2,500 = GHS 682,500 at the wide span, a saving of GHS 780,000 a month, that is GHS 9,360,000 a year. [7 marks]",
              "Step 5: Non-financial case for the tall structure: close supervision suits inexperienced staff, promotion posts are available, and errors are caught early. [3 marks]",
              "Step 6: Non-financial case for the flat structure: faster communication with fewer handovers, more autonomy and job satisfaction for supervisors, and cheaper overheads that allow lower premiums. Wide spans fail when staff are scattered across regions or need coaching. [3 marks]"
            ],
            "keyTakeaway": "Compute supervisory posts level by level, price them, then argue the human consequences; a flat structure is cheaper but demands capable, self-reliant staff."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=vlzXuoNifSg",
    "youtubeId": "vlzXuoNifSg",
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
"commonMistakes":         [
            "Choosing the option with the best possible payoff instead of the best expected value.",
            "Forgetting to multiply each payoff by its probability when computing expected value.",
            "Treating drawings, capital spending and credit receipts as the same item in a cash budget.",
            "Building a cash budget without an opening balance, so the closing figure cannot be proved.",
            "Assuming plans cannot change, when planning is continuous and rolling."
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
"examples":       [
          {
            "id": "ex-bum-06-1",
            "title": "Decision Tree and the Value of Perfect Information",
            "problem": "A printer considers three options. Expand fully: profit 400,000 if the cedi is strong, 120,000 if stable, minus 180,000 if it weakens. Expand modestly: 220,000, 90,000 and minus 40,000. Do nothing: zero in every state. Probabilities are 0.3 strong, 0.5 stable and 0.2 weak. Required: compute the expected value of each option, choose one, and compute the maximum fee the firm should pay for a reliable forecast. [35 marks]",
            "stepByStepSolution": [
              "Step 1: Expand fully expected value = (0.3 times 400,000) plus (0.5 times 120,000) plus (0.2 times minus 180,000) = 120,000 plus 60,000 minus 36,000 = GHS 144,000. [7 marks: show each product]",
              "Step 2: Expand modestly = (0.3 times 220,000) plus (0.5 times 90,000) plus (0.2 times minus 40,000) = 66,000 plus 45,000 minus 8,000 = GHS 103,000. [6 marks]",
              "Step 3: Do nothing = GHS 0, so on expected value the best plan is to expand fully at GHS 144,000. [4 marks]",
              "Step 4: With perfect information the firm chooses the best action in each state: expand fully when the cedi is strong gives 400,000, expand fully when stable gives 120,000, and in the weak state doing nothing gives 0, which is better than minus 180,000 or minus 40,000. [6 marks: never carry a negative payoff when doing nothing is available]",
              "Step 5: Expected value with perfect information = (0.3 times 400,000) plus (0.5 times 120,000) plus (0.2 times 0) = 120,000 plus 60,000 plus 0 = GHS 180,000. [6 marks]",
              "Step 6: Expected value of perfect information = 180,000 minus 144,000 = GHS 36,000, so the firm should pay no more than GHS 36,000 for a forecast; also note full expansion can still lose GHS 180,000 with 20 per cent probability, so a risk-averse owner may prefer the modest plan. [6 marks]"
            ],
            "keyTakeaway": "Expected value is a probability-weighted average; the value of information is the gap between it and the perfect-information outcome, and never pay more than that gap."
          },
          {
            "id": "ex-bum-06-2",
            "title": "Quarterly Cash Budget and the Overdraft Decision",
            "problem": "A plastics firm begins the quarter with GHS 8,000 cash. Expected receipts from debtors are GHS 42,000 and cash sales GHS 10,000. Payments: purchases 26,000, wages 14,500, rent 3,000, tax 5,000, and a machine 8,000. Creditors allow 30 days. Required: prepare the cash budget, find the closing balance, state the overdraft needed if the bank requires a minimum cash balance of GHS 5,000, and suggest two ways to close the gap. [30 marks]",
            "stepByStepSolution": [
              "Step 1: Total receipts = 42,000 plus 10,000 = GHS 52,000; total cash available = opening 8,000 plus 52,000 = GHS 60,000. [6 marks: opening balance must be included]",
              "Step 2: Total payments = 26,000 plus 14,500 plus 3,000 plus 5,000 plus 8,000 = GHS 56,500. [6 marks]",
              "Step 3: Closing balance = 60,000 minus 56,500 = GHS 3,500, a surplus in name but below the required minimum. [5 marks]",
              "Step 4: Overdraft needed = 5,000 minus 3,500 = GHS 1,500, so the firm must arrange a facility before the tax payment falls due in month two. [4 marks]",
              "Step 5: Remedies: delay the machine purchase to next quarter, saving 8,000, or offer 2 per cent discount for prompt debtor payment, which on 42,000 costs 840 but brings cash forward; also negotiate longer creditor terms. [5 marks]",
              "Step 6: If the machine is postponed, closing balance = 3,500 plus 8,000 = GHS 11,500, comfortably above the minimum, showing that the timing of capital spending drives the cash problem, not the trading items. [4 marks]"
            ],
            "keyTakeaway": "A cash budget starts with the opening balance and ends with a balance tested against the minimum required; capital spending is usually the real cause of a shortfall."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=xuGh-jzupzc",
    "youtubeId": "xuGh-jzupzc",
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
"commonMistakes":         [
            "Confusing line, staff and functional authority, and giving staff men the right to command.",
            "Naming centralisation as decentralisation because decisions are taken in offices rather than on the shop floor.",
            "Drawing an organisation chart with more than the stated span of control without explanation.",
            "Choosing departmentalisation by product when the workforce is scarce in specialist skills.",
            "Claiming a matrix structure has no disadvantages because dual reporting is always beneficial."
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
"examples":       [
          {
            "id": "ex-bum-07-1",
            "title": "Comparing the Cost of Two Structural Designs",
            "problem": "A beverage distributor has 900 sales and warehouse staff. Option 1 uses a span of control of 6 at every level; option 2 uses a span of 10. Each supervisor earns GHS 1,800 a month. Required: count the supervisory layer for each option, compute monthly supervision cost, find the saving, and state two situations in which the dearer structure is justified. [30 marks]",
            "stepByStepSolution": [
              "Step 1: Option 1 first layer = 900 divided by 6 = 150 supervisors; second layer = 150 divided by 6 = 25; third = 25 divided by 6 = 4.17, rounded up to 5; fourth = 1 general manager, so posts = 150 plus 25 plus 5 plus 1 = GHS 181. [8 marks: rounding a layer upward is correct because a fraction still needs a person]",
              "Step 2: Option 2: 900 divided by 10 = 90; 90 divided by 10 = 9; 9 divided by 10 rounds up to 1 top manager, so posts = 90 plus 9 plus 1 = GHS 100. [6 marks]",
              "Step 3: Cost: option 1 = 181 times 1,800 = GHS 325,800 a month; option 2 = 100 times 1,800 = GHS 180,000 a month. [6 marks]",
              "Step 4: Saving from the wide span = 325,800 minus 180,000 = GHS 145,800 a month, that is GHS 1,749,600 a year, or 145,800 divided by 1,800 = 81 fewer supervisory posts. [5 marks]",
              "Step 5: The dearer narrow structure is justified when staff are new or untrained and need close guidance, and when the work is high-risk, such as handling cash or hazardous chemicals, where errors must be caught immediately. [3 marks]",
              "Step 6: It is also justified where supervisors are themselves sales managers who spend time with customers, since a narrow span keeps supervision personal and communication short. [2 marks]"
            ],
            "keyTakeaway": "Compute supervisory posts layer by layer, round partial layers upward, price the difference, and only then argue which structure fits the workforce."
          },
          {
            "id": "ex-bum-07-2",
            "title": "Pricing the Cost of Committee Decision Making",
            "problem": "A manufacturing firm runs a purchasing committee of 8 members, each earning GHS 120 an hour. A meeting lasts 3 hours and each member spends 2 further hours preparing. The committee meets monthly, and management is considering adding a second sub-committee of 5 members meeting twice a month on the same pay. Required: compute the cost of one meeting and of the year, the cost of the additional sub-committee, and state when a committee is worth that expense. [25 marks]",
            "stepByStepSolution": [
              "Step 1: Meeting cost = 8 members times 3 hours times 120 = GHS 2,880. [4 marks]",
              "Step 2: Preparation cost = 8 times 2 times 120 = GHS 1,920, so the full cost of one decision meeting = 2,880 plus 1,920 = GHS 4,800. [4 marks: omitting preparation is the usual error]",
              "Step 3: Annual cost at 12 meetings = 4,800 times 12 = GHS 57,600. [4 marks]",
              "Step 4: Sub-committee: each meeting = 5 times 3 times 120 = 1,800, plus preparation 5 times 2 times 120 = 1,200, giving 1,800 plus 1,200 = GHS 3,000 per meeting, and twice a month is 24 meetings a year = 3,000 times 24 = GHS 72,000. [4 marks]",
              "Step 5: Combined committee cost = 57,600 plus 72,000 = GHS 129,600 a year, equivalent to the annual salary of 6 average workers at GHS 1,800 a month, since 129,600 divided by 21,600 = 6, so any decision the committees make must be worth more than that. [4 marks]",
              "Step 6: A committee is worth it when the decision needs several specialist views, when acceptance by affected managers matters more than speed, or when policy must be reviewed jointly; it fails for urgent or routine decisions, which should be delegated to one accountable officer. [5 marks]"
            ],
            "keyTakeaway": "Price meetings including preparation time, then compare with the value of the decision; committees are for quality and acceptance, not for speed."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=KUllLF-lb2M",
    "youtubeId": "KUllLF-lb2M",
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
"commonMistakes":         [
            "Equating recruitment with selection, or advertising and then claiming the process is complete.",
            "Computing the cost per hire on applicants instead of on employees actually taken on.",
            "Ignoring the working hours lost to leave and sickness when estimating how many workers are needed.",
            "Confusing job analysis with job description, and specification with description.",
            "Treating induction as a one-day formality rather than the stage that reduces early turnover."
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
"examples":       [
          {
            "id": "ex-bum-08-1",
            "title": "Selection Ratios and the True Cost per Hire",
            "problem": "A hospital in Koforidua needs 6 laboratory technicians. It advertises at a cost of GHS 3,500 and receives 400 applications. Of these 80 are shortlisted, and each shortlisted applicant is assessed at GHS 40. Twenty-five are interviewed, each interview costing GHS 60 an hour and taking 2 hours of panel time. Eight offers are made, 6 are accepted, and the agency fee is GHS 1,200 per person hired. Required: compute the yield at each stage, the total recruitment cost, and the cost per employee hired. [30 marks]",
            "stepByStepSolution": [
              "Step 1: Shortlisting yield = 80 divided by 400 times 100 = 20 per cent of applicants reach the shortlist. [4 marks]",
              "Step 2: Interview rate = 25 divided by 80 times 100 = 31.25 per cent of the shortlisted; offer rate = 8 divided by 25 times 100 = 32 per cent. [5 marks]",
              "Step 3: Acceptance rate = 6 divided by 8 times 100 = 75 per cent, so the whole funnel converts 400 applications into 6 hires, or 1.5 per cent. [5 marks: the funnel ratio is impressive evidence]",
              "Step 4: Assessment cost = 80 times 40 = GHS 3,200; panel time cost = 25 times 2 hours times 60 = GHS 3,000; agency fees = 6 times 1,200 = GHS 7,200. [6 marks]",
              "Step 5: Total cost = 3,500 advertising plus 3,200 plus 3,000 plus 7,200 = GHS 16,900. [4 marks]",
              "Step 6: Cost per hire = 16,900 divided by 6 = GHS 2,816.67, and cost per application received = 16,900 divided by 400 = GHS 42.25; if all 8 offers had been accepted the cost per hire would fall to 2,112.50, showing that offer rejection raises recruitment cost. [6 marks]"
            ],
            "keyTakeaway": "Divide cost by hires actually made, not applicants or offers, and use stage yields to locate where the funnel wastes money."
          },
          {
            "id": "ex-bum-08-2",
            "title": "Manpower Requirement and Labour Turnover",
            "problem": "A packaging plant requires 96,000 working hours a year. The working year is 220 days of 8 hours. Each employee loses on average 15 days to leave and sickness. The plant employs an average of 350 workers and 14 left during the year, of whom 9 had less than one year service. Required: compute available hours per employee, the number of workers needed, the labour turnover rate, and the separation rate for new staff, then state two causes and two remedies. [30 marks]",
            "stepByStepSolution": [
              "Step 1: Contract hours per employee = 220 times 8 = 1,760 hours a year. [4 marks]",
              "Step 2: Lost time = 15 days times 8 hours = 120 hours, so available hours per employee = 1,760 minus 120 = 1,640 hours. [6 marks: deducting lost time before dividing is the key step]",
              "Step 3: Workers needed = 96,000 divided by 1,640 = 58.5, rounded up to 59 employees; ignoring leave would have given 96,000 divided by 1,760 = 54.5 and left the plant 5 workers short. [6 marks: the comparison proves the point]",
              "Step 4: Labour turnover = 14 divided by 350 times 100 = 4.0 per cent a year. [4 marks]",
              "Step 5: Rate among short-service staff = 9 divided by 14 times 100 = 64.29 per cent of leavers had under one year, which points to faulty selection or induction rather than pay. [4 marks]",
              "Step 6: Causes and remedies: low wages or poor supervision answered by a pay review and supervisor training; long travel and no canteen answered by a staff bus or meal provision; weak induction answered by a structured first-month programme with a mentor. [6 marks]"
            ],
            "keyTakeaway": "Convert contract hours to available hours before computing manpower needs, and read the service length of leavers to diagnose whether turnover is a pay problem or a selection problem."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=SjE8bSqmkZg",
    "youtubeId": "SjE8bSqmkZg",
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
"commonMistakes":         [
            "Naming laissez-faire leadership as democratic because the leader is friendly.",
            "Assuming one best leadership style applies to every situation, ignoring contingency.",
            "Confusing power from position with influence from personal expertise.",
            "Stating expectancy theory in words without multiplying expectancy, instrumentality and valence.",
            "Believing that telling staff once is the same as directing them."
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
"examples":       [
          {
            "id": "ex-bum-09-1",
            "title": "Choosing a Leadership Style on Cost of Errors and Manager Time",
            "problem": "A branch manager must take 20 decisions a month. In an autocratic style each decision takes 1 day and 20 per cent turn out wrong, each error costing GHS 2,500 to rework. A participative style takes 2.5 days per decision and only 5 per cent of errors occur. The manager works 22 days a month and could employ an assistant manager at GHS 4,000 a month to share the load. Required: compute the cost of each style, test feasibility against available days, and recommend a course of action. [30 marks]",
            "stepByStepSolution": [
              "Step 1: Autocratic time = 20 times 1 = 20 manager-days, which fits within 22 days available. [4 marks]",
              "Step 2: Autocratic errors = 20 per cent of 20 = 4 errors, costing 4 times 2,500 = GHS 10,000 a month, so total cost = GHS 10,000. [6 marks]",
              "Step 3: Participative time = 20 times 2.5 = 50 manager-days, which exceeds 22, so the style is infeasible for one manager alone. [5 marks: feasibility must be tested, not assumed]",
              "Step 4: Errors under participation = 5 per cent of 20 = 1 error costing GHS 2,500; two managers supply 44 days against the 50 days the style needs, so 6 days of decision work must be delegated to a departmental officer, and total cost = 4,000 plus 2,500 = GHS 6,500. [7 marks]",
              "Step 5: Comparison: participation with one extra post costs 6,500 against 10,000 for autocratic rule, a saving of GHS 3,500 a month, that is GHS 42,000 a year. [4 marks]",
              "Step 6: Recommendation: adopt participation for the costly or irreversible decisions and keep autocratic handling for routine urgent ones, since fielding all 20 decisions participatively exceeds capacity even with the assistant. [4 marks]"
            ],
            "keyTakeaway": "Leadership style has a measurable cost in time and errors; test the style against available days before recommending it, and mix styles by decision importance."
          },
          {
            "id": "ex-bum-09-2",
            "title": "Expectancy Theory Applied to a Bonus Scheme",
            "problem": "A sales rep believes the chance of closing enough orders to qualify for the bonus is 0.5, that the company will certainly pay once qualification is reached (instrumentality 0.8 for the group), and values the bonus at GHS 6,000. After training, the perceived chance of qualifying rises to 0.75. The scheme is then changed so that payment probability reaches 1.0. Required: compute motivational force before and after each change, the gain from each, and advise which single change is cheapest and most powerful. [25 marks]",
            "stepByStepSolution": [
              "Step 1: Motivational force = expectancy times instrumentality times valence = 0.5 times 0.8 times 6,000 = GHS 2,400. [4 marks: state the formula first]",
              "Step 2: After training, expectancy rises to 0.75, so force = 0.75 times 0.8 times 6,000 = GHS 3,600, a gain of GHS 1,200, that is 50 per cent. [4 marks]",
              "Step 3: If instead only payment reliability improves to 1.0, force = 0.5 times 1.0 times 6,000 = GHS 3,000, a gain of GHS 600, that is 25 per cent. [4 marks]",
              "Step 4: Both changes together give 0.75 times 1.0 times 6,000 = GHS 4,500, which is 87.5 per cent above the original 2,400. [4 marks]",
              "Step 5: Advice: training the sales force lifts motivation more per cedi than guaranteeing payment, but a promise the staff do not believe destroys the whole scheme, so pay promptly and visibly first, then invest in skills. [5 marks]",
              "Step 6: If the bonus were cut to GHS 3,000 while everything else stayed at the improved levels, force would fall to 2,250, below the original 2,400, showing that valence must stay meaningful. [4 marks]"
            ],
            "keyTakeaway": "Motivation is the product of three beliefs, so a zero in any one of them collapses the scheme; raise the weakest link first."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=j-pPai7dbAk",
    "youtubeId": "j-pPai7dbAk",
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
"commonMistakes":         [
            "Expecting pay and conditions to motivate staff when Herzberg classes them as hygiene factors that only prevent dissatisfaction.",
            "Listing Maslow needs without identifying which level the case-study worker is at.",
            "Assuming all needs are satisfied upward in order for every worker.",
            "Ignoring equity comparisons, where workers judge pay by outcome divided by input relative to others.",
            "Treating Theory X as a description of workers rather than a managers own belief system."
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
"examples":       [
          {
            "id": "ex-bum-10-1",
            "title": "Reading a Motivation Survey through Herzberg Two-Factor Theory",
            "problem": "A survey of 120 staff at a bottling plant scored each item out of 5. Hygiene items: pay 2.1, working conditions 2.8, company policy 3.4. Motivator items: achievement 4.1, recognition 2.4, advancement 2.0, responsibility 3.6. Required: compute the average score for each factor group, identify what is causing dissatisfaction and what is absent, recommend one action for each group with its Herzberg justification, and state why a pay rise alone may fail. [30 marks]",
            "stepByStepSolution": [
              "Step 1: Hygiene average = (2.1 plus 2.8 plus 3.4) divided by 3 = 8.3 divided by 3 = 2.77 out of 5. [5 marks]",
              "Step 2: Motivator average = (4.1 plus 2.4 plus 2.0 plus 3.6) divided by 4 = 12.1 divided by 4 = 3.03 out of 5. [5 marks]",
              "Step 3: Because hygiene scores sit below the mid-point, staff are dissatisfied, with pay at 2.1 the worst single score. Herzberg calls this dissatisfaction, not absence of motivation. [5 marks]",
              "Step 4: Advancement at 2.0 and recognition at 2.4 are the weakest motivators, so real satisfaction is missing even though achievement is high at 4.1; the workers do the job well but are thanked rarely and promoted never. [5 marks]",
              "Step 5: Recommended hygiene action: correct pay and conditions through a salary review and better canteen and shift lighting, removing dissatisfaction. Recommended motivator action: a monthly recognition award and a documented promotion ladder, since only motivators create satisfaction. [6 marks]",
              "Step 6: Why a pay rise alone fails: it raises hygiene and stops complaints, but once the new level feels normal, motivation returns to its previous level, so the improvement is temporary unless recognition and growth are added. [4 marks]"
            ],
            "keyTakeaway": "Compute the two averages separately: low hygiene means dissatisfaction to be removed, low motivators mean satisfaction is missing and must be built."
          },
          {
            "id": "ex-bum-10-2",
            "title": "Equity Theory: Measuring Perceived Under-Reward",
            "problem": "Two warehouse clerks compare themselves. Kwabena works 160 hours a month and earns GHS 1,800. Yaw works 200 hours a month, carries heavier loads, and earns GHS 2,000. Required: compute each outcome-input ratio, the perceived inequity as a percentage, the pay that would restore equity for Yaw, the alternative adjustment on Kwabena side, and predict two likely reactions if nothing changes. [25 marks]",
            "stepByStepSolution": [
              "Step 1: Kwabena ratio = 1,800 divided by 160 = GHS 11.25 per hour of input. [4 marks]",
              "Step 2: Yaw ratio = 2,000 divided by 200 = GHS 10.00 per hour, so Yaw is under-rewarded relative to his input. [4 marks]",
              "Step 3: Perceived inequity = (11.25 minus 10.00) divided by 11.25 times 100 = 11.11 per cent below Kwabena rate, or stated against Yaw own rate, 12.5 per cent higher for Kwabena. [5 marks: name the base used]",
              "Step 4: To restore equity, Yaw pay should be 200 times 11.25 = GHS 2,250, an increase of GHS 250 a month, costing GHS 3,000 a year. [5 marks]",
              "Step 5: Alternative adjustment: Kwabena earnings would have to fall to 160 times 10.00 = GHS 1,600, a cut of GHS 200, which is usually impossible and demotivates the better-paid worker instead. [3 marks]",
              "Step 6: Likely reactions if ignored: Yaw reduces effort by working slower or refusing heavy loads, which restores his own sense of equity, or he leaves, raising turnover; either outcome increases cost, so the 250 raise is the cheaper remedy. [4 marks]"
            ],
            "keyTakeaway": "Equity is judged by outcome divided by input compared with a referent, so restore parity by raising the lower ratio, not by arguing about fairness."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=mvLJuQaLKkg",
    "youtubeId": "mvLJuQaLKkg",
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
"commonMistakes":         [
            "Confusing the communication process elements, especially encoding with transmitting.",
            "Naming the grapevine purely harmful instead of recognising its speed and information value.",
            "Ignoring noise and assuming a message sent is a message received.",
            "Choosing the richest and dearest medium for a routine instruction.",
            "Reporting a change only after it happens, which destroys trust and coordination."
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
"examples":       [
          {
            "id": "ex-bum-11-1",
            "title": "Message Distortion Through a Hierarchy and the Cost of Media",
            "problem": "A head office instruction passes through 6 management levels, and at each level about 20 per cent of the content is lost or altered. The firm has 1,200 staff. Sending the message by SMS costs GHS 0.06 a person, while briefing 6 area supervisors who then repeat it to staff costs each supervisor 4 hours at GHS 60 an hour. Required: compute the proportion of content surviving six levels, the cost of each channel, and recommend the channel for a safety instruction and for a routine holiday notice. [30 marks]",
            "stepByStepSolution": [
              "Step 1: Content retained after each level falls to 80 per cent, so survival = 0.8 to the power 6 = 0.2621, that is 26.21 per cent, meaning about three quarters of the message is lost. [7 marks: compounding, not subtraction, is the working]",
              "Step 2: Expressed differently, distortion across six levels is 100 minus 26.21 = 73.79 per cent. [3 marks]",
              "Step 3: SMS cost = 1,200 times 0.06 = GHS 72, reaching every worker with the identical words and no relaying distortion. [5 marks]",
              "Step 4: Briefing cost = 6 supervisors times 4 hours times 60 = GHS 1,440, then each supervisor repeats to staff, adding a further loss of 20 per cent at that relay, so about 80 per cent of content survives. [6 marks]",
              "Step 5: Comparison: the meeting costs 1,440 divided by 72 = 20 times more than SMS and still loses content, but it allows questions and confirms understanding through feedback. [4 marks]",
              "Step 6: Recommendation: for a safety instruction use the face-to-face briefing plus written follow-up because understanding must be verified, accepting the cost; for a routine holiday notice use SMS, since the content is simple, uniform and cheap to distribute. [5 marks]"
            ],
            "keyTakeaway": "Distortion compounds through levels, so choose the medium by the risk of misreading, not by habit."
          },
          {
            "id": "ex-bum-11-2",
            "title": "Communication Channels and Coordination Time",
            "problem": "A design team of 8 people currently communicates freely with every other member. Management proposes appointing one team leader so that all members report only to the leader. Separately, an order travels three departments with 1.5 days of handover delay at each stage on top of 12 days of processing. Required: compute channels before and after, the reduction achieved, the current order cycle, and the cycle if two handovers are eliminated by co-locating the departments. [25 marks]",
            "stepByStepSolution": [
              "Step 1: Free network channels follow n times (n minus 1) divided by 2, so for 8 people the count = 8 times 7 divided by 2 = 28 channels. [4 marks]",
              "Step 2: Star network with a leader = 8 channels, one from each member to the leader, a reduction of 20 channels, that is 20 divided by 28 times 100 = 71.43 per cent fewer contacts. [4 marks]",
              "Step 3: Benefit and cost of the reduction: coordination effort falls sharply, but members lose direct contact, so cross-specialist problems must pass through one person, who becomes a bottleneck. [4 marks]",
              "Step 4: Order cycle now = processing 12 days plus handovers 3 times 1.5 = 4.5 days, giving a total of 16.5 days from order to delivery. [5 marks]",
              "Step 5: If two handovers are removed by placing the three teams together, handover time falls to 1.5 days and the cycle becomes 12 plus 1.5 = 13.5 days, a saving of 3 days, that is 3 divided by 16.5 times 100 = 18.18 per cent faster. [5 marks]",
              "Step 6: Conclusion: coordination is cheaper to fix by physical grouping than by adding a supervisory layer, since grouping removes the delay instead of routing around it. [3 marks]"
            ],
            "keyTakeaway": "Count channels with the network formula, then price the delay handovers cause; co-location often removes more time than an extra layer of coordination."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=renlXcpK9sk",
    "youtubeId": "renlXcpK9sk",
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
"commonMistakes":         [
            "Confusing quality control (inspection after production) with quality assurance (preventing defects in process).",
            "Reporting a defect rate as a percentage of total production instead of the sample tested.",
            "Including prevention cost in the cost of poor quality.",
            "Reacting to every point outside a control limit as a fault without distinguishing chance variation from assignable causes.",
            "Believing TQM is a single department project rather than continuous employee involvement."
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
"examples":       [
          {
            "id": "ex-bum-12-1",
            "title": "Defect Rate and the Total Cost of Quality",
            "problem": "A mineral-water plant inspects a sample of 2,000 bottles and finds 46 non-conforming. Annual costs are: scrap GHS 18,000, rework GHS 12,000, warranty returns GHS 34,000, inspection GHS 9,000, and training and prevention GHS 6,000. Annual sales are GHS 400,000. Management proposes doubling prevention spend, which is expected to cut failure costs by 40 per cent. Required: compute the defect rate, total cost of quality and its share of sales, the cost of poor quality, and the net gain from the proposal. [35 marks]",
            "stepByStepSolution": [
              "Step 1: Defect rate = 46 divided by 2,000 times 100 = 2.30 per cent of the sample, used as an estimate of the batch. [6 marks]",
              "Step 2: Total cost of quality = 18,000 plus 12,000 plus 34,000 plus 9,000 plus 6,000 = GHS 79,000. [6 marks: prevention belongs in the total]",
              "Step 3: As a share of sales = 79,000 divided by 400,000 times 100 = 19.75 per cent of turnover spent on quality, which is very high and signals a failing process. [5 marks]",
              "Step 4: Cost of poor quality = scrap 18,000 plus rework 12,000 plus warranty 34,000 = GHS 64,000, that is 16.00 per cent of sales, while appraisal cost is GHS 9,000 and prevention only GHS 6,000. [6 marks: separating the three categories is the tested skill]",
              "Step 5: Proposal: prevention rises to 12,000, failure costs fall 40 per cent to 64,000 times 0.60 = GHS 38,400, so the new total = 38,400 plus 9,000 plus 12,000 = GHS 59,400. [6 marks]",
              "Step 6: Net saving = 79,000 minus 59,400 = GHS 19,600 a year, that is 19,600 divided by 79,000 times 100 = 24.81 per cent of the quality bill, so spending 6,000 more to save 25,600 in failures is worthwhile; the defect rate should also be re-measured monthly against the 2.3 per cent baseline. [6 marks]"
            ],
            "keyTakeaway": "Classify quality cost into prevention, appraisal and failure, prove that a bigger prevention line buys a bigger fall in failures, and restate the total as a percentage of sales."
          },
          {
            "id": "ex-bum-12-2",
            "title": "Reading a Control Chart and Setting Corrective Action",
            "problem": "A bakery packs flour into 250-gram bags. The control limits are set at 246 to 254 grams. Ten consecutive samples read 248, 252, 249, 255, 251, 247, 253, 250, 258 and 249 grams. Required: compute the mean of the ten readings, identify which readings are out of control, state how many, describe the type of variation involved, and recommend the control step a manager should take. [25 marks]",
            "stepByStepSolution": [
              "Step 1: Sum of readings = 248 plus 252 plus 249 plus 255 plus 251 plus 247 plus 253 plus 250 plus 258 plus 249 = 2,512 grams across the 10 samples. [4 marks]",
              "Step 2: Mean = 2,512 divided by 10 = 251.2 grams, so the process is running 1.2 grams above the 250-gram target. [4 marks]",
              "Step 3: Readings outside 246 to 254 are 255 and 258, so 2 of 10 samples, that is 20 per cent, are out of control. [4 marks]",
              "Step 4: Points beyond the limits signal assignable causes, not chance variation, so the process is not in statistical control even though the mean looks close to target. [5 marks]",
              "Step 5: The trend is upward, with the two high points at samples 4 and 9, suggesting a setting that drifts, such as a worn dosing valve or a machine warmed after the first hour. [3 marks]",
              "Step 6: Action: stop and service the filler, recalibrate to 250 grams, then sample again and re-plot; introduce routine control charts and operator self-checking so drift is caught before limits are exceeded, which is quality assurance rather than inspection. [5 marks]"
            ],
            "keyTakeaway": "Compute the mean, count the points beyond the control limits, and treat any such point as an assignable cause demanding correction rather than explanation."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=g_gEOf0UePw",
    "youtubeId": "g_gEOf0UePw",
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
"commonMistakes":         [
            "Naming price alone as the marketing mix and leaving product, place and promotion.",
            "Confusing market share with market size, or computing share on total industry sales excluding imports.",
            "Assuming a price rise always raises revenue without applying elasticity.",
            "Setting objectives without numbers, so the plan cannot be controlled later.",
            "Treating the marketing concept as selling harder instead of starting from consumer needs."
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
"examples":       [
          {
            "id": "ex-bum-13-1",
            "title": "Market Share and the Revenue Effect of a Price Rise",
            "problem": "A soap firm sells GHS 3.6 million worth of bar soap in a total market of GHS 24 million. Marketing estimates the price elasticity of its demand at minus 1.8. Management considers raising price by 10 per cent to fund a relaunch. Required: compute current market share, the revenue after the price rise, the change in revenue, the volume of sales in value terms lost, and advise. [30 marks]",
            "stepByStepSolution": [
              "Step 1: Market share = 3.6 divided by 24 times 100 = 15.00 per cent. [5 marks]",
              "Step 2: With elasticity minus 1.8, a 10 per cent price rise cuts quantity demanded by 1.8 times 10 = 18 per cent. [5 marks: multiply elasticity by the price change]",
              "Step 3: New revenue = 3.6 times 1.10 times 0.82 = GHS 3.2472 million, because the price factor 1.10 and the volume factor 0.82 combine to 3.6 times 0.902. [6 marks: multiply the price factor by the volume factor]",
              "Step 4: Revenue change = 3.2472 minus 3.6 = minus GHS 0.3528 million, a fall of 9.8 per cent, so the rise destroys the very funds the relaunch needs. [6 marks]",
              "Step 5: Market share falls with it to 3.2472 divided by 24 = 13.53 per cent, a loss of 1.47 percentage points, unless competitors also raise prices. [3 marks]",
              "Step 6: Advice: because demand is elastic, hold price, and instead build non-price advantage through packaging, distribution reach and promotion, or raise price only where a segment shows inelastic demand. [5 marks]"
            ],
            "keyTakeaway": "Revenue after a price change equals old revenue times (1 plus price change) times (1 plus volume change), and with elastic demand a rise reduces revenue."
          },
          {
            "id": "ex-bum-13-2",
            "title": "The Sales Funnel and Break-Even Conversion Rate",
            "problem": "A furniture retailer plans radio advertising costing GHS 90,000 expected to reach customers who generate 200,000 contacts at a response rate of 2.5 per cent. Each enquiry costs GHS 6 to handle, 20 per cent of enquiries buy, the average order is GHS 180, and fulfilment costs GHS 90 an order. Required: build the funnel, compute revenue and total cost, state the profit or loss, and find the conversion rate needed to break even. [35 marks]",
            "stepByStepSolution": [
              "Step 1: Enquiries = 200,000 times 2.5 per cent = 5,000. [5 marks]",
              "Step 2: Buyers = 5,000 times 20 per cent = 1,000 orders. [4 marks]",
              "Step 3: Revenue = 1,000 times 180 = GHS 180,000. [4 marks]",
              "Step 4: Cost = media 90,000 plus enquiry handling 5,000 times 6 = 30,000 plus fulfilment 1,000 times 90 = 90,000, giving GHS 210,000. [5 marks: all three cost blocks]",
              "Step 5: Loss = 180,000 minus 210,000 = minus GHS 30,000, so the campaign as designed destroys value. [5 marks]",
              "Step 6: Break-even conversion: contribution per order = 180 minus 90 = GHS 90, and costs fixed to the enquiry pool = 90,000 plus 30,000 = GHS 120,000, so orders needed = 120,000 divided by 90 = 1,333.3, that is 1,334 orders; conversion required = 1,334 divided by 5,000 = 26.68 per cent against the planned 20 per cent. [6 marks]",
              "Step 7: Alternative lever: keeping the 1,000 orders planned, the average order value must rise to 210,000 divided by 1,000 = GHS 210, an increase of GHS 30 or 16.67 per cent on the planned 180, which turns the loss into break-even. [6 marks]"
            ],
            "keyTakeaway": "Work the funnel step by step, then convert the shortfall into one lever: higher conversion, higher order value or cheaper handling."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=OnIEJJl_wfU",
    "youtubeId": "OnIEJJl_wfU",
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
"commonMistakes":         [
            "Confusing capacity with output, or computing utilisation on effective rather than installed capacity without saying so.",
            "Measuring productivity in units only and never per hour of input.",
            "Assuming adding workers always raises productivity, ignoring diminishing returns at the bottleneck.",
            "Identifying the fastest rather than the slowest operation as the line bottleneck.",
            "Choosing job production for mass homogeneous demand and losing the economies of scale."
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
"examples":       [
          {
            "id": "ex-bum-14-1",
            "title": "Utilisation, Efficiency and Labour Productivity",
            "problem": "A bottle-blowing shop has installed capacity of 12,000 units a week and effective capacity of 10,800 after planned maintenance. It produced 9,600 units in a week using 45 workers for 40 hours each. The next week it employed 48 workers and produced 10,080 units. Required: compute utilisation, efficiency, labour productivity for each week, the percentage change in productivity, and explain why output rose while productivity fell. [30 marks]",
            "stepByStepSolution": [
              "Step 1: Utilisation = actual output divided by installed capacity = 9,600 divided by 12,000 times 100 = 80.00 per cent. [5 marks]",
              "Step 2: Efficiency = actual divided by effective capacity = 9,600 divided by 10,800 times 100 = 88.89 per cent, which is the higher figure because effective capacity already excludes planned downtime. [5 marks]",
              "Step 3: Labour input week 1 = 45 times 40 = 1,800 hours, so productivity = 9,600 divided by 1,800 = 5.33 units per labour hour. [5 marks]",
              "Step 4: Week 2 input = 48 times 40 = 1,920 hours and productivity = 10,080 divided by 1,920 = 5.25 units per hour. [5 marks]",
              "Step 5: Change in productivity = (5.25 minus 5.333) divided by 5.333 times 100 = minus 1.56 per cent, while output rose 5.00 per cent, because labour rose 120 hours, that is 6.67 per cent, faster than output. [5 marks]",
              "Step 6: Explanation: extra workers crowded the machines, so some hours were idle, which is diminishing returns; utilisation improved to 10,080 divided by 12,000 = 84.00 per cent, but a shorter shift for the same crew or an extra machine would raise output without diluting productivity. [5 marks]"
            ],
            "keyTakeaway": "Productivity is output per unit of input, so it falls whenever input grows faster than output, even when total output is rising."
          },
          {
            "id": "ex-bum-14-2",
            "title": "Line Balancing and Meeting Daily Demand",
            "problem": "An exercise-book factory runs a four-station assembly line taking 3, 5, 4 and 2 minutes per book. The working day is 8 hours with a 45-minute break. Required: identify the bottleneck and the cycle time, compute daily output, the total work content and the line balance efficiency, then find the cycle time needed for 100 books a day and the effect of adding a second operator at the bottleneck. [35 marks]",
            "stepByStepSolution": [
              "Step 1: Bottleneck = the longest station at 5 minutes, so cycle time = 5 minutes and the line finishes one book every 5 minutes. [6 marks: naming the slowest, not the fastest]",
              "Step 2: Productive time = 8 hours times 60 minus 45 = 435 minutes a day. [4 marks]",
              "Step 3: Daily output = 435 divided by 5 = 87 books. [5 marks]",
              "Step 4: Total work content = 3 plus 5 plus 4 plus 2 = 14 minutes per book; station time available = 4 stations times 5 minutes = 20 minutes, so balance efficiency = 14 divided by 20 times 100 = 70 per cent, meaning 30 per cent of paid station time is idle. [7 marks]",
              "Step 5: For 100 books the cycle time must fall to 435 divided by 100 = 4.35 minutes, which the 5-minute station cannot meet. [5 marks: compare with the bottleneck]",
              "Step 6: Adding a second operator at the 5-minute station halves its time to 2.5 minutes, so the new bottleneck is the 4-minute station and cycle time = 4 minutes; output = 435 divided by 4 = 108 books a day, which meets the 100-book demand with spare capacity. [5 marks]",
              "Step 7: Balance efficiency after the change = work content 14 minutes divided by the paid station time of 4 stations times 4 minutes = 16 minutes, so 14 divided by 16 times 100 = 87.5 per cent, up from 70 per cent. [3 marks]"
            ],
            "keyTakeaway": "Output is set by the slowest station, so relieving the bottleneck lifts throughput and balance efficiency, but the new bottleneck must then be re-identified."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=2SFC849tAXo",
    "youtubeId": "2SFC849tAXo",
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
"commonMistakes":         [
            "Matching a long-lived asset with a short-term overdraft instead of long-term finance.",
            "Comparing sources on quoted interest rates only and ignoring fees, dilution and tax relief.",
            "Calling trade credit free because no interest is stated, while ignoring the discount forgone.",
            "Confusing working capital with fixed capital or with cash at hand.",
            "Planning dividends while ignoring liquidity, so a profitable firm cannot pay its creditors."
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
"examples":       [
          {
            "id": "ex-bum-15-1",
            "title": "Comparing the Annual Cost of Four Sources of Finance",
            "problem": "A firm needs GHS 120,000 to buy a machine. Options: bank loan at 18 per cent a year; a five-year equipment lease with rentals of GHS 32,000 a year in arrears; issuing ordinary shares of GHS 1 expected to pay a 15 per cent dividend; or paying suppliers 30 days late instead of taking a 2 per cent settlement discount. Required: compute the annual cost of each option, convert the trade-credit choice into an annual percentage rate, rank the options, and advise with reasons. [35 marks]",
            "stepByStepSolution": [
              "Step 1: Bank loan cost = 18 per cent of 120,000 = GHS 21,600 a year, repayable with the capital at the end of the term and usually secured. [5 marks]",
              "Step 2: Lease cost = 32,000 times 5 = GHS 160,000 paid for an asset worth 120,000, so the charge is GHS 40,000 over five years, an average GHS 8,000 a year, that is 6.67 per cent of the price, and the lessor carries maintenance and obsolescence risk. [7 marks]",
              "Step 3: Equity cost = 15 per cent of 120,000 = GHS 18,000 of dividends, but 120,000 new shares dilute control, and dividends are paid from profit after tax with no tax relief. [5 marks]",
              "Step 4: Trade credit: the discount forgone is 2 per cent of 120,000 = GHS 2,400 for the use of 117,600 for 30 extra days; annual equivalent = (2 divided by 98) times (365 divided by 30) times 100 = 24.83 per cent, which on 120,000 is about GHS 29,800 a year. [8 marks: derive the rate rather than guess]",
              "Step 5: Ranking by annual cost: lease 8,000, equity 18,000, loan 21,600, trade credit 29,800. [4 marks]",
              "Step 6: Advice: for a machine lasting well beyond five years the lease looks cheapest but its total payment is fixed, so if the firm has chargeable profits and can secure the loan, borrowing at 18 per cent gives outright ownership; never fund a fixed asset by stretching suppliers at a 24.83 per cent hidden rate. [6 marks]"
            ],
            "keyTakeaway": "Put every source on an annual cedi and percentage basis; a discount forgone is an expensive interest rate in disguise, and cheapness must be weighed against ownership and control."
          },
          {
            "id": "ex-bum-15-2",
            "title": "Working Capital Cycle and Cash Freed by Faster Debtors",
            "problem": "A manufacturer holds raw material 25 days, production takes 15 days, debtors pay after 45 days and creditors are paid after 30 days. Annual operating cost is GHS 1,008,000 spread evenly. The firm has GHS 90,000 of its own funds available for working capital. Required: compute the operating cycle, daily cost, working capital needed, the finance shortfall, and the cash released if debtor collection improves by 15 days. [30 marks]",
            "stepByStepSolution": [
              "Step 1: Operating cycle = 25 plus 15 plus 45 minus 30 = 55 days, that is cash is tied up for 55 days before it comes back. [5 marks: creditors days are deducted]",
              "Step 2: Daily operating cost = 1,008,000 divided by 365 = GHS 2,761.64. [5 marks]",
              "Step 3: Working capital needed = 55 times 2,761.64 = GHS 151,890.20, roughly GHS 151,900. [5 marks]",
              "Step 4: Shortfall = 151,890 minus 90,000 = GHS 61,890, which must be financed, preferably by a short-term facility matched to the cycle rather than a loan. [5 marks]",
              "Step 5: If debtors fall to 30 days, the cycle = 25 plus 15 plus 30 minus 30 = 40 days and requirement = 40 times 2,761.64 = GHS 110,465.60, so cash released = 151,890 minus 110,466 = GHS 41,425. [6 marks: recompute the whole cycle, do not just multiply 15 days]",
              "Step 6: Check: 15 days times 2,761.64 = GHS 41,424.60, agreeing with Step 5, which confirms the release equals the days saved times the daily cost; the remaining shortfall would then be only 20,466. [4 marks]"
            ],
            "keyTakeaway": "The cycle adds stock and production and debtor days then deducts creditor days, and the cash released by any improvement equals days saved times daily cost."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=kH65jJALRAM",
    "youtubeId": "kH65jJALRAM",
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
"commonMistakes":         [
            "Naming a quotation as an offer, so dating acceptance wrongly.",
            "Saying silence is acceptance while also saying acceptance must be communicated.",
            "Treating an exemption clause as automatically binding whatever it says.",
            "Confusing a condition with a warranty and claiming either breach allows rejection of the goods.",
            "Ignoring the duty to mitigate loss before computing damages."
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
"examples":       [
          {
            "id": "ex-bum-16-1",
            "title": "Breach of Contract and the Measure of Damages",
            "problem": "A school in Winneba contracts with a supplier for desks at a total price of GHS 45,000, delivery 1 March. The supplier fails to deliver. The school buys identical desks elsewhere at GHS 51,500 and, because the desks arrive two weeks late, hires temporary desks for GHS 4,000 which it would not otherwise have incurred. The school did not unreasonably delay. Required: identify the breach and the remedy, compute recoverable damages, state the mitigation rule, and explain how the answer would change if the shortfall were only GHS 200 and the clause in the contract excluded liability for late delivery. [30 marks]",
            "stepByStepSolution": [
              "Step 1: There is a valid contract because offer, acceptance, consideration and capacity are present; failure to deliver on 1 March breaches a condition as to time, which entitles the school to reject the contract and sue. [5 marks: name the term type and its effect]",
              "Step 2: The ordinary measure puts the injured party in the position as if the contract had been performed, so the substitute purchase costs 51,500 minus the contract price 45,000 = GHS 6,500 excess. [5 marks]",
              "Step 3: The temporary hire of 4,000 was a direct and foreseeable consequence of the delay, so it is recoverable, giving total damages = 6,500 plus 4,000 = GHS 10,500. [6 marks: foreseeability, the Hadley v Baxendale rule]",
              "Step 4: Mitigation: the school had to buy promptly at a reasonable market price; if it had waited and paid 60,000, the excess above a properly mitigated loss would not be recoverable. [5 marks]",
              "Step 5: A small shortfall changes nothing in the measure, only its size, since damages equal actual loss and are not nominal because the sum is small. [3 marks]",
              "Step 6: An exclusion clause is effective only if it was part of the contract before acceptance, is reasonable under the Sale of Goods Act and covers the breach; a clause excluding late delivery could bar the 4,000 hire but not the 6,500 substitution, which is a total breach of a condition unless the clause is construed widely. [6 marks]"
            ],
            "keyTakeaway": "Compute damages as excess over the contract price plus foreseeable consequential loss, then test the exclusion clause for incorporation and reasonableness."
          },
          {
            "id": "ex-bum-16-2",
            "title": "Hire Purchase Cost and Ownership",
            "problem": "A sewing machine has a cash price of GHS 12,000. Under a hire-purchase agreement a depositor pays GHS 2,400 and then 18 monthly instalments of GHS 620, with an option-to-purchase fee of GHS 300 at the end. Required: compute the total payable, the extra cost over the cash price both in cedis and as a percentage, the amount paid by the end of the ninth month, and state the legal position if the user defaults at that point. [25 marks]",
            "stepByStepSolution": [
              "Step 1: Instalments total = 18 times 620 = GHS 11,160; with the deposit, total paid = 2,400 plus 11,160 = GHS 13,560, and adding the option fee gives GHS 13,860. [5 marks]",
              "Step 2: Extra cost = 13,860 minus 12,000 = GHS 1,860, which is 1,860 divided by 12,000 times 100 = 15.50 per cent of the cash price for the privilege of paying over time. [5 marks]",
              "Step 3: Paid by the end of month 9 = 2,400 plus 9 times 620 = 2,400 plus 5,580 = GHS 7,980, that is 66.50 per cent of the cash price. [5 marks]",
              "Step 4: Since less than the required threshold has been paid, the finance house remains the owner and may repossess the machine on default, and the goods are not the property of the user until the last instalment and the option fee are paid. [5 marks: ownership passes only at the option]",
              "Step 5: Protection: once one-third or more of the total price is paid, common Ghanaian hire-purchase rules restrict repossession without a court order, and the trader must serve a default notice; at 7,980 the buyer has paid well past one-third, so repossession needs a court order, and the buyer may also transfer the agreement. [5 marks]"
            ],
            "keyTakeaway": "Add deposit, instalments and option fee for the true cost, compare with cash price as a percentage, and locate the buyer position against the one-third protection threshold."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=5wOheuSQPTk",
    "youtubeId": "5wOheuSQPTk",
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
"commonMistakes":         [
            "Confusing ethics with legality, as if anything lawful is automatically ethical.",
            "Treating CSR as philanthropy only, instead of accountability to stakeholders including the community and environment.",
            "Ignoring the cost of stakeholder conflict when judging a CSR project as pure expense.",
            "Naming only the advantages of globalisation and leaving the exposure to competition and dumping unmentioned.",
            "Forgetting that rules of origin require a minimum local content before duty-free export access is gained."
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
"examples":       [
          {
            "id": "ex-bum-17-1",
            "title": "Cost-Benefit of a Community Investment",
            "problem": "A mining support firm in Tarkwa spends GHS 240,000 a year on a borehole and scholarships for the host community. Last year community disputes shut the operation for 18 days, each day costing GHS 12,000 in lost contribution. Expenditure on the community programme is tax-deductible at 30 per cent. Required: compute the loss avoided, the tax saving, the net cost of the programme, the net benefit, and state two unquantifiable advantages. [25 marks]",
            "stepByStepSolution": [
              "Step 1: Disruption cost last year = 18 times 12,000 = GHS 216,000 of lost contribution. [4 marks]",
              "Step 2: The programme costs GHS 240,000 a year, which appears 24,000 dearer than the disruption it prevents, so on gross figures it looks unjustified. [4 marks: state the naive conclusion first]",
              "Step 3: Tax saving = 30 per cent of 240,000 = GHS 72,000, so net cost after relief = 240,000 minus 72,000 = GHS 168,000. [5 marks]",
              "Step 4: Net benefit = 216,000 avoided minus 168,000 spent = GHS 48,000 a year, so the programme pays for itself before any reputational gain. [5 marks]",
              "Step 5: Unquantifiable advantages: smoother relations with chiefs and youth groups that reduce future stoppages, and easier recruitment because staff prefer a firm seen to develop its area. [4 marks]",
              "Step 6: Ethical caution: the decision must not be made on arithmetic alone, since a community is a stakeholder owed fair treatment, and spending only to avoid shutdown is reactive CSR rather than genuine responsibility. [3 marks]"
            ],
            "keyTakeaway": "Price avoided disruption and tax relief before dismissing CSR as expense, but keep the ethical argument separate from the arithmetic."
          },
          {
            "id": "ex-bum-17-2",
            "title": "Rules of Origin, Tariffs and Competitiveness",
            "problem": "A Ghanaian processor sells a carton of juice abroad at GHS 100 and pays GHS 60 for imported concentrate and packaging, with local processing costs of GHS 30. Duty-free access into the wider region requires at least 45 per cent local value added. Separately, an imported carton lands at GHS 52 and competes locally, where the domestic producer costs GHS 68 to make one. Required: compute local value added as a percentage, state whether duty-free access is earned, find the imported-input ceiling that would qualify, and compute the domestic price at which a 15 per cent and a 20 per cent tariff makes imports equal local cost. [30 marks]",
            "stepByStepSolution": [
              "Step 1: Value added locally = selling price 100 minus imported inputs 60 = GHS 40, so local content = 40 divided by 100 times 100 = 40 per cent. [5 marks: use imported inputs, not total cost]",
              "Step 2: 40 per cent is below the 45 per cent threshold, so the product fails the rules of origin and must pay the outside tariff on entry, losing the duty-free advantage. [5 marks]",
              "Step 3: To qualify, imported inputs must fall to 55 per cent of 100 = GHS 55, that is a reduction of GHS 5, or the selling price must rise to 60 divided by 0.55 = GHS 109.09 for the same input bill. [5 marks: show both routes]",
              "Step 4: With a 15 per cent tariff the import price locally = 52 times 1.15 = GHS 59.80, still 8.20 below the domestic cost of 68, so local production remains uncompetitive. [5 marks]",
              "Step 5: With a 20 per cent tariff the import price = 52 times 1.20 = GHS 62.40, a gap of 5.60, so the tariff protects revenue but does not close the cost gap; the local firm must cut cost by 5.61 per cent, that is 5.60 divided by 68, to match. [5 marks]",
              "Step 6: Conclusion: protection that leaves the local producer above the tariffed import price only raises consumer cost, so competitiveness must come from local sourcing that also fixes the rules-of-origin shortfall. [5 marks]"
            ],
            "keyTakeaway": "Local content is measured on the value added share, and a tariff only helps when the tariffed import price reaches or exceeds local cost."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=Mn5kXiqoTgU",
    "youtubeId": "Mn5kXiqoTgU",
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
"commonMistakes":         [
            "Charging selling and distribution overheads into the works cost of a product, which overstates production cost and distorts inventory valuation.",
            "Assuming cost and financial accounts must always show the same profit, and leaving the reconciliation question unanswered instead of listing the reconciling items.",
            "Treating the fixed cost per unit as constant; it falls as output rises, and examiners award marks for stating that explicitly.",
            "Classifying the wages of a machine operator who runs only one product as an indirect cost when it is a direct cost.",
            "Valuing closing stock at selling price rather than at cost or net realisable value, which invents profit that has not been earned."
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
"examples":       [
          {
            "id": "ex-cst-01-1",
            "title": "Reconciling Cost Profit with Financial Profit",
            "problem": "A Kumasi bottling company's cost accounts show a profit of GHS 38,000 for the year ended 31 December 2025. The following items appear in the financial books only or differ in the two sets of books: audit fees and directors fees GHS 4,800; rent received from a tenant GHS 2,600; an abnormal loss of GHS 3,200 excluded from the cost accounts; manufacturing overheads over-absorbed in the cost accounts by GHS 1,900; closing finished stock valued in the financial books at net realisable value, which is GHS 1,400 below cost. Required: reconcile the cost profit to the financial profit and state two reasons why the two systems differ. [20 marks]",
            "stepByStepSolution": [
              "Step 1: Start from the cost ledger profit of GHS 38,000 and treat it as the balancing figure the question gives. [2 marks: correct opening figure]",
              "Step 2: Deduct expenses recorded only in the financial books: audit fees and directors fees 4,800. Cost profit becomes 38,000 minus 4,800 = GHS 33,200. [3 marks: item identified and deducted]",
              "Step 3: Add income recorded only in the financial books: rent received 2,600, giving 33,200 plus 2,600 = GHS 35,800. [3 marks]",
              "Step 4: Deduct the abnormal loss of 3,200. Cost accounts deliberately exclude abnormal loss so that unit cost is not inflated, but the financial books must absorb it: 35,800 minus 3,200 = GHS 32,600. [4 marks: correct treatment plus reason]",
              "Step 5: Add the over-absorbed overhead of 1,900. Because too much overhead was charged to cost accounts, cost profit is understated relative to financial profit: 32,600 plus 1,900 = GHS 34,500. [4 marks]",
              "Step 6: Deduct the 1,400 stock write-down to net realisable value, a prudence adjustment made only in financial accounts: 34,500 minus 1,400 = GHS 33,100 financial profit. [4 marks: correct final figure and clear presentation as a reconciliation statement]"
            ],
            "keyTakeaway": "Cost profit and financial profit differ for three recurring reasons: items recorded in only one system, different stock valuation rules, and overhead absorption that does not equal actual overhead incurred."
          },
          {
            "id": "ex-cst-01-2",
            "title": "Building Up Prime Cost, Works Cost, Total Cost and Cost of Sales",
            "problem": "In March 2025 a packaged-water plant produced 240,000 bottles. Costs incurred: raw materials GHS 84,300; factory wages GHS 43,200; production overheads absorbed at 150 per cent of factory wages; administration overheads GHS 21,600; selling and distribution overheads GHS 18,900. The selling price is GHS 1.35 per bottle and all bottles produced were sold. Required: prepare a cost statement showing prime cost, works cost, total cost of production, cost of sales, profit per bottle and the profit for the month. [25 marks]",
            "stepByStepSolution": [
              "Step 1: Prime cost equals direct material plus direct labour = 84,300 plus 43,200 = GHS 127,500. [4 marks: two components correct and total]",
              "Step 2: Production overhead absorbed = 150 per cent of 43,200 = GHS 64,800. [3 marks]",
              "Step 3: Works cost = prime cost plus works overhead = 127,500 plus 64,800 = GHS 192,300, which is 192,300 divided by 240,000 = GHS 0.801 per bottle. [4 marks: total and per-unit figure]",
              "Step 4: Total cost of production = works cost plus administration overhead = 192,300 plus 21,600 = GHS 213,900, or GHS 0.891 per bottle. [4 marks]",
              "Step 5: Cost of sales = total cost of production plus selling and distribution overhead = 213,900 plus 18,900 = GHS 232,800, that is GHS 0.970 per bottle. [4 marks]",
              "Step 6: Sales revenue = 240,000 times 1.35 = GHS 324,000. Profit = 324,000 minus 232,800 = GHS 91,200, which is 91,200 divided by 240,000 = GHS 0.38 profit per bottle. [6 marks: revenue, profit total and profit per unit]"
            ],
            "keyTakeaway": "Present cost data in the stacked order prime cost, works cost, cost of production, cost of sales. Marks are awarded for the headings themselves, not only for the arithmetic."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=T8UjkWkXEHA",
    "youtubeId": "T8UjkWkXEHA",
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
"commonMistakes":         [
            "Calling all wages a fixed cost because the wage bill seems stable; hours-based production wages are variable and examiners test this directly.",
            "Placing sales commission in the fixed cost line instead of treating it as a variable cost per unit sold.",
            "Forgetting that a fixed cost per unit changes with output while total fixed cost stays constant.",
            "Labelling machine lubricants and cleaning materials direct costs merely because they are physically identifiable in the factory.",
            "Using only one basis for a semi-variable cost and never separating its fixed element, so break-even work in a later part becomes impossible."
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
"examples":       [
          {
            "id": "ex-cst-02-1",
            "title": "Splitting a Cost Schedule into Fixed and Variable Elements",
            "problem": "A kente-weaving firm produced 20,000 metres of cloth in May 2025. Costs were: cotton and thread GHS 60,000; weavers wages GHS 40,000; production supervisor salary GHS 6,000; factory rent GHS 9,600; machine lubricants GHS 2,400; straight-line depreciation on looms GHS 12,000; sales commission at GHS 0.30 per metre. Required: classify each item as fixed or variable, find the variable cost per metre, and prepare total costs for an output of 24,000 metres at the same prices. [25 marks]",
            "stepByStepSolution": [
              "Step 1: Identify variable items: cotton and thread 60,000, weavers wages 40,000, lubricants 2,400 and commission of 20,000 times 0.30 = 6,000. Total variable cost = GHS 108,400. [5 marks: correct identification of all four]",
              "Step 2: Variable cost per metre = 108,400 divided by 20,000 = GHS 5.42. State that this rate stays constant as output changes. [4 marks]",
              "Step 3: Identify fixed items: supervisor 6,000, rent 9,600, depreciation 12,000. Total fixed cost = GHS 27,600. [4 marks]",
              "Step 4: Fixed cost per metre at 20,000 metres = 27,600 divided by 20,000 = GHS 1.38. [3 marks]",
              "Step 5: At 24,000 metres, variable cost = 24,000 times 5.42 = GHS 130,080 while fixed cost remains GHS 27,600, so total = GHS 157,680. [5 marks]",
              "Step 6: Fixed cost per metre at 24,000 metres = 27,600 divided by 24,000 = GHS 1.15, a fall of GHS 0.23 per metre. Conclude that higher output lowers unit cost purely because fixed cost is spread wider. [4 marks: the numerical demonstration plus the written conclusion]"
            ],
            "keyTakeaway": "Total fixed cost is constant and fixed cost per unit varies; total variable cost varies and variable cost per unit is constant. Write both sentences in any classification question even when only figures are demanded."
          },
          {
            "id": "ex-cst-02-2",
            "title": "Separating a Semi-Variable Cost by the High-Low Method",
            "problem": "A bakery power bill is GHS 11,400 when 8,000 kilowatt hours are consumed and GHS 15,800 when 12,000 kilowatt hours are consumed. The tariff has a fixed standing charge plus a rate per unit. Required: find the fixed element and the rate per unit, then estimate the bill for 15,000 kilowatt hours and state one weakness of the method. [20 marks]",
            "stepByStepSolution": [
              "Step 1: Cost difference = 15,800 minus 11,400 = GHS 4,400 for an activity difference of 12,000 minus 8,000 = 4,000 kilowatt hours. [3 marks]",
              "Step 2: Variable rate = 4,400 divided by 4,000 = GHS 1.10 per kilowatt hour. [4 marks]",
              "Step 3: Fixed element = 11,400 minus (8,000 times 1.10) = 11,400 minus 8,800 = GHS 2,600 per month. [4 marks: substitution into either point is accepted]",
              "Step 4: Check with the other activity level: 2,600 plus (12,000 times 1.10) = 2,600 plus 13,200 = GHS 15,800, which agrees. [3 marks: verification earns method marks]",
              "Step 5: Estimate for 15,000 kilowatt hours = 2,600 plus 16,500 = GHS 19,100. [3 marks]",
              "Step 6: Weakness: only the two extreme months are used, so a seasonal tariff step or a single unusual month makes the split unreliable; regression on many periods would be better. [3 marks]"
            ],
            "keyTakeaway": "The high-low method always uses the highest and lowest activity levels, never the highest and lowest costs, and the answer must be checked against the unused level."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=x2RGYIYNLls",
    "youtubeId": "x2RGYIYNLls",
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
"commonMistakes":         [
            "Valuing purchased material at the invoice price only and ignoring carriage, insurance and receiving costs, which all belong in cost.",
            "Deducting trade discount after adding carriage, instead of applying the discount to the gross invoice value first.",
            "Setting the reorder level from average consumption instead of maximum consumption, which guarantees stock-outs.",
            "Recording materials still sealed in the store as issued because a requisition was raised once.",
            "Forgetting that returns to suppliers reduce both the quantity and the value held, not just the store ledger quantity."
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
"examples":       [
          {
            "id": "ex-cst-03-1",
            "title": "Cost per Kilogram of a Raw Material Including Ancillary Costs",
            "problem": "A jollof-rice processor buys 12,000 kg of rice at GHS 4.50 per kg. The supplier grants a trade discount of 10 per cent, charges carriage of GHS 3,600 and insurance of GHS 1,800. The firm pays GHS 900 for unloading and quality checking. During receiving, 240 kg were broken and sold as lower grade for GHS 300. Required: compute the net cost of the material, the cost per kg, and state how the 240 kg should be treated. [25 marks]",
            "stepByStepSolution": [
              "Step 1: Gross invoice value = 12,000 times 4.50 = GHS 54,000. [3 marks]",
              "Step 2: Trade discount = 10 per cent of 54,000 = GHS 5,400, so the invoice total is 54,000 minus 5,400 = GHS 48,600. [4 marks: discount deducted from gross, not from the invoice plus carriage]",
              "Step 3: Add ancillary costs: carriage 3,600, insurance 1,800, unloading and checking 900, a total of GHS 6,300. [4 marks]",
              "Step 4: Deduct the proceeds of the broken rice, 300, because a sale of damaged material reduces the cost of what is kept usable: 48,600 plus 6,300 minus 300 = GHS 54,600. [4 marks]",
              "Step 5: Good units received = 12,000 minus 240 = 11,760 kg. Cost per kg = 54,600 divided by 11,760 = GHS 4.64 (2 decimal places). [6 marks: correct denominator and rounded unit cost]",
              "Step 6: The 240 kg are an abnormal loss of usable rice if breakage exceeds the usual level and must go to the cost profit and loss account rather than to the material rate; if breakage is normal, the salvage proceeds are credited exactly as in Step 4. [4 marks]"
            ],
            "keyTakeaway": "Material cost price equals invoice less trade and settlement discounts plus all costs needed to bring the material to the store, less the realisable value of material that cannot be used."
          },
          {
            "id": "ex-cst-03-2",
            "title": "Reorder, Minimum, Maximum, Danger and Average Stock Levels",
            "problem": "A pharmacy uses 1,000 cartons of paracetamol per week on average. Consumption can rise to 1,250 cartons or fall to 750 cartons. Suppliers delivery period varies between 4 and 10 weeks, and in an emergency a replacement order takes an average of 3 weeks. The firm orders 5,000 cartons each time. Required: compute the reorder level, minimum stock level, maximum stock level, danger level and average stock. [30 marks]",
            "stepByStepSolution": [
              "Step 1: Reorder level = maximum consumption times maximum reordering period = 1,250 times 10 = 12,500 cartons. [5 marks: formula and answer]",
              "Step 2: Average reordering period = 4 plus 10 divided by 2 = 7 weeks. Average consumption is 1,000 cartons per week. [3 marks]",
              "Step 3: Minimum stock level = reorder level minus (average consumption times average period) = 12,500 minus 7,000 = 5,500 cartons, which is also the safety stock. [5 marks]",
              "Step 4: Maximum stock level = reorder level plus order quantity minus (minimum consumption times minimum period) = 12,500 plus 5,000 minus (750 times 4 = 3,000) = 14,500 cartons. [6 marks]",
              "Step 5: Danger level = average consumption times average emergency replacement period = 1,000 times 3 = 3,000 cartons. [5 marks]",
              "Step 6: Average stock = minimum level plus half the order quantity = 5,500 plus 2,500 = 8,000 cartons. Interpretation: between 3,000 and 5,500 the firm works on safety stock, and below 3,000 production is at risk. [6 marks: figure plus the written interpretation]"
            ],
            "keyTakeaway": "Reorder level uses maximum usage and maximum delay; every other level is derived from it. A written interpretation of what each level means usually carries more marks than the number alone."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=9vvrVi8U9Kw",
    "youtubeId": "9vvrVi8U9Kw",
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
"commonMistakes":         [
            "Applying LIFO to a perpetual record and to a periodic record and expecting the same answer; the two produce different figures.",
            "Using FIFO for cost of issues and LIFO for closing stock in the same answer, which breaks the cost and stock reconciliation.",
            "Computing the moving average on purchase quantities only and leaving opening stock out of the average.",
            "Ignoring that International Accounting Standard 2 bans LIFO, so an answer recommending it for financial reporting loses marks.",
            "Forgetting that in a period of rising prices FIFO gives the highest profit and therefore the highest tax charge."
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
"examples":       [
          {
            "id": "ex-cst-04-1",
            "title": "FIFO, LIFO and Moving Average on One Stock Account",
            "problem": "A spare-part store records: 1 January opening stock 2,000 units at GHS 4.00; 5 January purchase 3,000 units at GHS 4.40; 12 January issue 3,500 units; 20 January purchase 4,000 units at GHS 4.80; 28 January issue 2,500 units. Required: value the closing stock of 3,000 units and the total cost of issues under FIFO, LIFO and the perpetual moving average, and reconcile the three. [40 marks]",
            "stepByStepSolution": [
              "Step 1: Units available = 2,000 plus 3,000 plus 4,000 = 9,000 and units issued = 3,500 plus 2,500 = 6,000, so closing stock = 3,000 units. Total cost available = 8,000 plus 13,200 plus 19,200 = GHS 40,400. [5 marks: the control figures]",
              "Step 2: FIFO closing stock is the newest layer, 3,000 units from the 20 January purchase at 4.80 = GHS 14,400, so issues cost 40,400 minus 14,400 = GHS 26,000. [8 marks]",
              "Step 3: LIFO issue on 12 January takes 3,000 units at 4.40 (13,200) and 500 units at 4.00 (2,000) = GHS 15,200, leaving 1,500 units at 4.00 = GHS 6,000. [7 marks]",
              "Step 4: LIFO issue on 28 January takes 2,500 units from the newest 4,000 at 4.80 = GHS 12,000, leaving 1,500 at 4.00 and 1,500 at 4.80 = 6,000 plus 7,200 = GHS 13,200, so LIFO issues = 15,200 plus 12,000 = GHS 27,200. [7 marks: check that 40,400 minus 13,200 = 27,200]",
              "Step 5: Moving average after 5 January: 5,000 units costing 21,200, average 4.24. The 12 January issue of 3,500 costs 3,500 times 4.24 = GHS 14,840, leaving 1,500 units at GHS 6,360. [7 marks]",
              "Step 6: After the 20 January purchase: 5,500 units costing 6,360 plus 19,200 = GHS 25,560, average 25,560 divided by 5,500 = GHS 4.6473. The 28 January issue of 2,500 costs GHS 11,618.18, so closing stock = 3,000 times 4.6473 = GHS 13,941.82 and issues total 14,840 plus 11,618.18 = GHS 26,458.18. [6 marks]",
              "Step 7: Reconcile: 40,400 equals issues plus closing stock for each method, 26,000 plus 14,400, 27,200 plus 13,200 and 26,458.18 plus 13,941.82. Conclude that because prices rose in every purchase, LIFO charges the most cost and FIFO the least. [5 marks: reconciliation and written conclusion]"
            ],
            "keyTakeaway": "State which convention the method uses. Under rising prices FIFO gives the lowest cost of issues, the highest closing stock and the highest profit, which is why tax authorities restrict it."
          },
          {
            "id": "ex-cst-04-2",
            "title": "Effect of Inventory Method on Gross Profit and Margin",
            "problem": "Using the January data of the previous example, every one of the 6,000 units issued was sold at GHS 6.00 and there were no other costs. Required: prepare the gross profit figure under FIFO and under LIFO, express each as a gross profit margin on sales, and advise the manager which method reports the higher profit. [20 marks]",
            "stepByStepSolution": [
              "Step 1: Sales revenue = 6,000 units times 6.00 = GHS 36,000. [3 marks]",
              "Step 2: FIFO: the cost of the 6,000 units issued is GHS 26,000, so gross profit = 36,000 minus 26,000 = GHS 10,000. [5 marks]",
              "Step 3: FIFO margin = 10,000 divided by 36,000 times 100 = 27.78 per cent. [3 marks]",
              "Step 4: LIFO: gross profit = 36,000 minus 27,200 = GHS 8,800 and margin = 8,800 divided by 36,000 times 100 = 24.44 per cent. [5 marks]",
              "Step 5: Difference in profit = 10,000 minus 8,800 = GHS 1,200, exactly the difference between the two closing stock valuations, 14,400 minus 13,200. [4 marks: the examiner looks for this link]",
              "Step 6: Advice: FIFO reports the higher profit, but the method must be disclosed and applied consistently, and the higher profit raises both tax and any profit-based dividend; IAS 2 does not permit LIFO in published statements. [4 marks]"
            ],
            "keyTakeaway": "The whole difference between inventory methods passes through the profit figure, and the profit difference always equals the closing stock difference."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=nK-AQYJ5Q4Q",
    "youtubeId": "nK-AQYJ5Q4Q",
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
"commonMistakes":         [
            "Using annual demand where the ordering cost per order is quoted for a different period, so the EOQ formula mixes monthly and annual figures.",
            "Forgetting to double the ordering cost in the numerator of the EOQ formula.",
            "Dividing annual demand by EOQ and then treating the result as the average stock instead of half the order quantity.",
            "Adding purchase cost changes caused by a discount but forgetting that the carrying cost per unit also changes when price changes.",
            "Reporting only the EOQ number with no comparison of total relevant cost, which leaves out the marks for justification."
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
"examples":       [
          {
            "id": "ex-cst-05-1",
            "title": "Economic Order Quantity and a Quantity Discount Decision",
            "problem": "A school-furniture maker needs 20,000 sets of door handles a year. Each order costs GHS 100 to place and process. A handle costs GHS 20 and stock holding costs, including store rent, insurance and the cost of capital, run at 5 per cent of unit price per year. The supplier offers a 2 per cent discount on any order of 5,000 handles or more. Required: compute the EOQ, the number of orders, total ordering and carrying cost at the EOQ, and advise whether to accept the discount. [35 marks]",
            "stepByStepSolution": [
              "Step 1: Carrying cost per unit per annum, C = 5 per cent of 20 = GHS 1.00. [3 marks]",
              "Step 2: EOQ = square root of (2 times annual demand times ordering cost divided by carrying cost) = square root of (2 times 20,000 times 100 divided by 1) = square root of 4,000,000 = 2,000 handles. [8 marks: substitution then answer]",
              "Step 3: Number of orders per year = 20,000 divided by 2,000 = 10 orders, so ordering cost = 10 times 100 = GHS 1,000. [4 marks]",
              "Step 4: Average stock = EOQ divided by 2 = 1,000 handles, so carrying cost = 1,000 times 1.00 = GHS 1,000. [4 marks]",
              "Step 5: Note the proof of optimality: at the EOQ the ordering cost and the carrying cost are equal, GHS 1,000 each, so total relevant cost = GHS 2,000. Purchase cost = 20,000 times 20 = GHS 400,000, giving a total of GHS 402,000. [6 marks]",
              "Step 6: Under the discount: order size 5,000, orders = 20,000 divided by 5,000 = 4, ordering cost = GHS 400; average stock = 2,500, carrying cost at 5 per cent of the discounted price 19.60, that is 0.98 per unit, = 2,500 times 0.98 = GHS 2,450; purchase cost = 20,000 times 19.60 = GHS 392,000. Total = GHS 394,850. [6 marks: recalculate carrying cost on the lower price]",
              "Step 7: Saving = 402,000 minus 394,850 = GHS 7,150 a year, so accept the discount even though average stock more than doubles. [4 marks: the decision must be stated with the number]"
            ],
            "keyTakeaway": "At the EOQ, annual ordering cost equals annual carrying cost. Whenever a discount is offered, recompute all three cost lines, because the discount also lowers the carrying cost per unit."
          },
          {
            "id": "ex-cst-05-2",
            "title": "Stock Levels Combined with EOQ",
            "problem": "A clinic uses an average of 500 boxes of examination gloves per week, with weekly usage ranging between 375 and 625 boxes. Delivery takes between 3 and 5 weeks. The clinic orders 2,000 boxes each time, and in an emergency a local distributor can deliver in an average of 2 weeks. Required: find the EOQ given ordering cost GHS 40 per order and holding cost GHS 0.90 per box per year, then compute the reorder level, minimum level, maximum level and danger level. [30 marks]",
            "stepByStepSolution": [
              "Step 1: Annual demand = 500 times 52 = 26,000 boxes. [3 marks]",
              "Step 2: EOQ = square root of (2 times 26,000 times 40 divided by 0.90) = square root of (2,080,000 divided by 0.90 = 2,311,111) = 1,520 boxes. [6 marks: correct substitution then rounding to a whole box]",
              "Step 3: Reorder level = maximum usage times maximum delivery period = 625 times 5 = 3,125 boxes. [5 marks]",
              "Step 4: Minimum level = reorder level minus (average usage times average period) = 3,125 minus (500 times 4) = 3,125 minus 2,000 = 1,125 boxes, so safety stock = GHS 1,125 boxes costing 1,125 times 0.90 = GHS 1,012.50 a year. [6 marks]",
              "Step 5: Maximum level = reorder level plus order quantity minus (minimum usage times minimum period) = 3,125 plus 2,000 minus (375 times 3 = 1,125) = 4,000 boxes. [5 marks]",
              "Step 6: Danger level = average usage times average emergency period = 500 times 2 = 1,000 boxes. Add the observation that the order quantity of 2,000 exceeds the EOQ of 1,520 by 480 boxes, so annual holding cost rises by roughly 480 times 0.90 divided by 2, that is GHS 216, which is a cost of convenience worth reporting. [6 marks]"
            ],
            "keyTakeaway": "EOQ decides how much to buy; reorder level decides when to buy. Both must be answered before a stock-control question is complete."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=YGTR40SuQh8",
    "youtubeId": "YGTR40SuQh8",
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
"commonMistakes":         [
            "Calculating the Halsey premium on total time worked instead of on time saved.",
            "Charging the full overtime rate to a job when only the overtime premium belongs to overheads, or vice versa.",
            "Forgetting that a guaranteed minimum means the worker is paid the higher of piece earnings and the guarantee.",
            "Ignoring idle time in the effective wage rate, so the cost per unit produced is understated.",
            "Using a mark-up on total cost as the selling price when the question demands a margin on selling price."
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
"examples":       [
          {
            "id": "ex-cst-06-1",
            "title": "Halsey and Rowan Premium Plans Compared",
            "problem": "A cabinet-maker is paid a time rate of GHS 12 per hour. A job has a standard time of 20 hours and the worker finishes it in 16 hours. Required: compute earnings and the effective hourly rate under the flat time plan, the Halsey 50-50 plan and the Rowan plan, and state one advantage of a premium plan to the employer. [30 marks]",
            "stepByStepSolution": [
              "Step 1: Time saved = 20 minus 16 = 4 hours. [2 marks]",
              "Step 2: Flat time earnings = 16 times 12 = GHS 192, effective rate GHS 12.00 per hour. [4 marks]",
              "Step 3: Halsey plan = time earnings plus half the value of time saved = 192 plus (0.5 times 4 times 12 = 24) = GHS 216. [6 marks: premium computed on saved time only]",
              "Step 4: Halsey effective rate = 216 divided by 16 = GHS 13.50 per hour, and the bonus is 24 divided by 192 = 12.5 per cent of base pay. [5 marks]",
              "Step 5: Rowan plan pays the time rate raised by half of the proportion of time saved: rate = 12 times (1 plus 0.5 times (4 divided by 20)) = 12 times 1.10 = GHS 13.20 per hour, so earnings = 16 times 13.20 = GHS 211.20. [8 marks: the proportion is based on standard time, not saved hours]",
              "Step 6: Ranking: Halsey 216 beats Rowan plan 211.20 beats flat time 192. Advantage to the employer: unit labour cost falls because output rose without hiring, and a shared saving keeps the premium self-financing. [5 marks]"
            ],
            "keyTakeaway": "Halsey values the saved hours at half rate; Rowan plan raises the rate by half the percentage of time saved. Read the plan name in the question before choosing the formula."
          },
          {
            "id": "ex-cst-06-2",
            "title": "Piece Work with a Guarantee and the True Employer Cost per Unit",
            "problem": "A sandal-maker works an 8-hour day with a guaranteed minimum of GHS 128 and a base rate of GHS 16 per hour. The standard output is 4 pairs an hour, and the piece rate is set at the standard time for one pair times the base rate. In one day the worker makes 44 pairs. Employer fringe costs, mainly SSF employer contribution and leave pay, add 13 per cent. Required: find the piece rate, the day earnings, the bonus over the guarantee, the effective hourly rate and the employer labour cost per pair. [25 marks]",
            "stepByStepSolution": [
              "Step 1: Standard time per pair = 60 divided by 4 = 15 minutes = 0.25 hour. [3 marks]",
              "Step 2: Piece rate = 0.25 times 16 = GHS 4.00 per pair. [4 marks]",
              "Step 3: Piece earnings = 44 times 4.00 = GHS 176, which exceeds the guarantee of 128, so the worker is paid GHS 176. [5 marks: state that the higher amount applies]",
              "Step 4: Premium over guarantee = 176 minus 128 = GHS 48, which is 48 divided by 128 = 37.5 per cent. Effective rate = 176 divided by 8 = GHS 22.00 per hour. [5 marks]",
              "Step 5: Standard hours for 44 pairs = 44 divided by 4 = 11 hours against 8 hours actually worked, so the worker was 137.5 per cent efficient. [4 marks]",
              "Step 6: Employer cost = 176 times 1.13 = GHS 198.88, so labour cost per pair = 198.88 divided by 44 = GHS 4.52. [4 marks: fringe benefits must be included when the question asks for cost to the employer]"
            ],
            "keyTakeaway": "A guaranteed minimum is a floor, not a top-up, and the true labour cost per unit is the wage plus fringe benefits divided by actual output."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=xoSxyXzXLKQ",
    "youtubeId": "xoSxyXzXLKQ",
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
"commonMistakes":         [
            "Dividing separations by the closing number of workers instead of the average number.",
            "Adding separations and replacements for the flux method but still dividing by the average workforce and forgetting the result is a combined rate.",
            "Charging the whole overtime wage to a specific job when only the premium element is attributable to it.",
            "Recording idle time as a direct cost of production instead of an overhead or a loss.",
            "Omitting SSF employer contributions from labour cost and quoting only the gross wage."
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
"examples":       [
          {
            "id": "ex-cst-07-1",
            "title": "Labour Turnover Rates and Their Cost",
            "problem": "A fishing-net factory employs an average of 900 workers during 2025. During the year 45 workers resigned and were replaced, and 60 additional workers were hired to cover expansion. The firm estimates the cost of replacing one worker at GHS 2,000, covering recruitment, training and lost output during learning. Required: compute the turnover rate by the separation method, the replacement method and the flux method, and the total annual cost of turnover. [25 marks]",
            "stepByStepSolution": [
              "Step 1: Separation method = separations divided by average workers times 100 = 45 divided by 900 times 100 = 5.00 per cent. [5 marks]",
              "Step 2: Replacement method = 60 divided by 900 times 100 = 6.67 per cent. [5 marks]",
              "Step 3: Flux method = (45 plus 60) divided by 900 times 100 = 105 divided by 900 times 100 = 11.67 per cent. [5 marks]",
              "Step 4: Cost of turnover = 45 resignations times GHS 2,000 = GHS 90,000, which is 90,000 divided by 900 = GHS 100 per worker employed. [6 marks: the per-head cost is what management compares against retention spending]",
              "Step 5: Interpretation: a flux rate above 10 per cent signals instability, so the firm should examine pay differentials, working hours and travel distance before spending again on recruitment. [4 marks]"
            ],
            "keyTakeaway": "Separation method measures people who leave; replacement method measures people replaced; flux adds both. Always state which average workforce figure was used."
          },
          {
            "id": "ex-cst-07-2",
            "title": "Allocating Overtime and Idle Time Between Jobs and Overheads",
            "problem": "A fabricator earns a basic rate of GHS 12.50 per hour on a 40-hour week, and overtime is paid at half again the basic rate. In one week he works 48 hours: 32 basic hours on Job 201, a further 8 hours on Job 201 worked only because the customer asked for early delivery, 6 hours on Job 202, and 2 hours idle when a welding set broke down. Required: compute the gross wage, split it into basic cost and overtime premium, and show how the cost should be charged to Job 201, Job 202 and factory overheads. [30 marks]",
            "stepByStepSolution": [
              "Step 1: Overtime rate = 12.50 times 1.5 = GHS 18.75 per hour, so the overtime premium element is GHS 6.25 per hour. [4 marks]",
              "Step 2: Gross wage = 40 hours at the basic rate of 12.50 = 500, plus 8 overtime hours at 18.75 = 150, giving a gross wage of GHS 650. [6 marks]",
              "Step 3: Total basic cost of hours worked = 48 times 12.50 = GHS 600 and total overtime premium = 8 times 6.25 = GHS 50; 600 plus 50 = 650, which agrees with Step 2. [6 marks: this split is the key working]",
              "Step 4: Job 201 basic cost = 40 hours (32 plus 8 overtime) times 12.50 = GHS 500. Because the customer caused the overtime, the whole premium of GHS 50 is charged direct to Job 201, giving GHS 550. [6 marks]",
              "Step 5: Job 202 = 6 hours times 12.50 = GHS 75. [3 marks]",
              "Step 6: Idle time = 2 hours times 12.50 = GHS 25, charged to factory overhead as abnormal idle time, or to a cost of machine breakdown account. Reconcile: 550 plus 75 plus 25 = GHS 650, equal to the gross wage. [5 marks: the reconciliation is mandatory]"
            ],
            "keyTakeaway": "Only the overtime premium is at risk of misallocation, and idle time is never a direct cost of a job. Reconcile the sum of the charges back to the gross wage."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=koN5x_tYa0M",
    "youtubeId": "koN5x_tYa0M",
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
"commonMistakes":         [
            "Reapportioning a service department back to itself or leaving its cost unallocated at the end of the distribution table.",
            "Using floor area to apportion machine power, or machine hours to apportion canteen costs.",
            "Adding administration overhead to the production cost total and calling it works cost.",
            "Ignoring a departmental overhead rate and absorbing everything on one factory-wide rate when the question gives departmental data.",
            "Producing a distribution table whose final column does not add back to the original overhead total."
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
"examples":       [
          {
            "id": "ex-cst-08-1",
            "title": "Primary Allocation and Departmental Reapportionment",
            "problem": "A soap factory incurred these overheads in June 2025: rent and rates GHS 24,000; lighting GHS 9,000; power GHS 18,500; supervision GHS 30,000; indirect materials GHS 14,500. Floor area in square metres: Mixing 1,200, Packaging 600, Canteen 120, Maintenance 80. Light points: Mixing 150, Packaging 100, Canteen 30, Maintenance 20. Machine horse-power: Mixing 1,300, Packaging 350, Maintenance 200. Supervision and indirect materials are known directly: supervision Mixing 18,000, Packaging 9,000, Maintenance 3,000; indirect materials Mixing 8,800, Packaging 2,700, Canteen 400, Maintenance 2,600. Reapportion the canteen on employee hours (Mixing 6,000, Packaging 4,000) and maintenance on machine hours (Mixing 4,000, Packaging 1,000). Required: prepare the overhead distribution account to the final production department totals. [40 marks]",
            "stepByStepSolution": [
              "Step 1: Total overhead to distribute = 24,000 plus 9,000 plus 18,500 plus 30,000 plus 14,500 = GHS 96,000. This control total must appear again at the end. [4 marks]",
              "Step 2: Rent and rates on floor area: total area 1,200 plus 600 plus 120 plus 80 = 2,000 square metres, rate = 24,000 divided by 2,000 = GHS 12 per square metre, giving Mixing 14,400, Packaging 7,200, Canteen 1,440, Maintenance 960. [6 marks: basis, rate and four figures]",
              "Step 3: Lighting on light points: 300 points, rate = 9,000 divided by 300 = GHS 30 per point, giving Mixing 4,500, Packaging 3,000, Canteen 900, Maintenance 600. [5 marks]",
              "Step 4: Power on horse-power: 1,300 plus 350 plus 200 = 1,850 horse-power, rate = 18,500 divided by 1,850 = GHS 10 per horse-power, giving Mixing 13,000, Packaging 3,500, Maintenance 2,000 and nothing to the canteen. [6 marks: canteen has no machines, so a nil entry is correct]",
              "Step 5: Enter supervision and indirect materials at their given direct amounts. Primary allocation totals: Mixing 14,400 plus 4,500 plus 13,000 plus 18,000 plus 8,800 = GHS 58,700; Packaging GHS 25,400; Canteen GHS 2,740; Maintenance GHS 9,160. Cross-check 58,700 plus 25,400 plus 2,740 plus 9,160 = GHS 96,000. [8 marks]",
              "Step 6: Reapportion canteen GHS 2,740 on employee hours in the ratio 6,000 to 4,000, that is 3 to 2: Mixing 2,740 times 3 fifths = GHS 1,644 and Packaging GHS 1,096. [5 marks]",
              "Step 7: Reapportion maintenance GHS 9,160 on machine hours in the ratio 4,000 to 1,000, that is 4 to 1: Mixing 9,160 times 4 fifths = GHS 7,328 and Packaging GHS 1,832. Both service columns now stand at nil. [5 marks]",
              "Step 8: Final production overheads: Mixing 58,700 plus 1,644 plus 7,328 = GHS 67,672 and Packaging 25,400 plus 1,096 plus 1,832 = GHS 28,328. Total = GHS 96,000, which proves the table. [5 marks: the reconciliation is where method marks are lost most often]"
            ],
            "keyTakeaway": "Choose a basis that causes the cost, enter nil where a department cannot use a facility, and close the table by proving that the final totals still equal the original overhead figure."
          },
          {
            "id": "ex-cst-08-2",
            "title": "Direct Compared with Step-Down Reapportionment",
            "problem": "Service department Maintenance costs GHS 19,100 and service department Quality Control costs GHS 16,200. Maintenance serves production P 60 per cent, production Q 35 per cent and quality control 5 per cent. Quality control serves P 70 per cent and Q 30 per cent. Required: reapportion by the direct method and by the step-down method starting with Maintenance, and compare the amounts charged to P and Q. [25 marks]",
            "stepByStepSolution": [
              "Step 1: Direct method ignores service-to-service work: Maintenance 19,100 splits P 60 per cent = 11,460 and Q 40 per cent = 7,640. [4 marks]",
              "Step 2: Quality control 16,200 splits P 70 per cent = 11,340 and Q 30 per cent = 4,860. Direct method totals: P GHS 22,800 and Q GHS 12,500, sum GHS 35,300 = 19,100 plus 16,200. [5 marks]",
              "Step 3: Step-down, starting with the larger service department, Maintenance: its 19,100 is spread over P, Q and Quality Control in the ratio 60 to 35 to 5, giving P 11,460, Q 6,685 and Quality Control 955. [6 marks: recognising that a service department receives cost in step-down]",
              "Step 4: Quality control now carries 16,200 plus 955 = GHS 17,155 and is spread only over P and Q in the ratio 70 to 30: P 12,008.50 and Q 5,146.50. [5 marks: cost flows forward, never backward]",
              "Step 5: Step-down totals: P = 11,460 plus 12,008.50 = GHS 23,468.50 and Q = 6,685 plus 5,146.50 = GHS 11,831.50; sum still GHS 35,300. [4 marks]",
              "Step 6: Comparison: P is charged GHS 668.50 more under step-down, because step-down recognises that quality control work itself needs maintenance. The direct method is simpler; the step-down order changes the answer, so state it. [6 marks]"
            ],
            "keyTakeaway": "Under the step-down method a service department cost is spread only forward, so the order of reapportionment changes the answer and must be stated."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=qk4n30MaIDU",
    "youtubeId": "qk4n30MaIDU",
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
"commonMistakes":         [
            "Dividing overhead by actual hours when the rate must be set on budgeted (planned) hours.",
            "Charging a job two different overhead rates from the same department in one answer.",
            "Reporting under-absorption without saying which department caused it or how it will be written off.",
            "Treating under-absorbed overhead as an asset so that profit is protected.",
            "Using a units-of-production rate for a factory that makes many different products."
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
"examples":       [
          {
            "id": "ex-cst-09-1",
            "title": "Overhead Absorption Rates, Job Costing and Under or Over Absorption",
            "problem": "Department X absorbs overhead on machine hours; budgeted overhead GHS 62,400 for 4,800 machine hours. Department Y absorbs on labour hours; budgeted overhead GHS 33,600 for 4,200 labour hours. Job K consumes 120 machine hours in X and 90 labour hours in Y. For the whole year, X works 4,500 machine hours and incurs actual overhead of GHS 61,200, while Y works 4,050 labour hours and incurs actual overhead of GHS 31,000. Required: compute both rates, the overhead charged to Job K, the under or over absorption in each department and the net effect on profit. [35 marks]",
            "stepByStepSolution": [
              "Step 1: Rate for X = 62,400 divided by 4,800 = GHS 13.00 per machine hour. [5 marks: rate quoted per hour]",
              "Step 2: Rate for Y = 33,600 divided by 4,200 = GHS 8.00 per labour hour. [4 marks]",
              "Step 3: Job K absorbed overhead = (120 times 13) plus (90 times 8) = 1,560 plus 720 = GHS 2,280. [6 marks]",
              "Step 4: Year for X: absorbed = 4,500 times 13 = GHS 58,500 against actual GHS 61,200, so under-absorbed by GHS 2,700. [6 marks: subtract in the right direction]",
              "Step 5: Year for Y: absorbed = 4,050 times 8 = GHS 32,400 against actual GHS 31,000, so over-absorbed by GHS 1,400. [5 marks]",
              "Step 6: Net under-absorption = 2,700 minus 1,400 = GHS 1,300, which is charged to the profit and loss account and reduces profit by GHS 1,300. Cause: X worked 300 hours below plan, a capacity loss, so idle capacity cost was not recovered. [7 marks: figure plus explanation, examiners expect the cause]"
            ],
            "keyTakeaway": "Absorption rates are always budgeted overhead divided by budgeted activity. Under-absorption is a cost of unused capacity and must be written off to profit, not carried as a stock value."
          },
          {
            "id": "ex-cst-09-2",
            "title": "Selecting the Most Appropriate Absorption Base",
            "problem": "Department Z budgeted overhead of GHS 84,000 for a year in which it plans 6,000 direct labour hours, 4,200 machine hours, GHS 42,000 of direct wages and 24,000 units of output. Product P uses 2 direct labour hours, 1.5 machine hours and GHS 15 of direct wages, and one unit of P is one unit of output. Required: compute the overhead rate on each of the four bases, the overhead charged to Product P under each, and advise which base is most appropriate given that Department Z is highly mechanised. [25 marks]",
            "stepByStepSolution": [
              "Step 1: Labour hour rate = 84,000 divided by 6,000 = GHS 14.00 per hour, charging P 2 times 14 = GHS 28.00. [4 marks]",
              "Step 2: Machine hour rate = 84,000 divided by 4,200 = GHS 20.00 per hour, charging P 1.5 times 20 = GHS 30.00. [4 marks]",
              "Step 3: Wage percentage rate = 84,000 divided by 42,000 times 100 = 200 per cent of wages, charging P 200 per cent of 15 = GHS 30.00. [4 marks]",
              "Step 4: Unit rate = 84,000 divided by 24,000 = GHS 3.50 per unit, charging P GHS 3.50 only, which is far below the other results. [4 marks]",
              "Step 5: Reject the unit rate: it is valid only when output is homogeneous, and it would price Product P below its true cost. [4 marks]",
              "Step 6: Advice: because the department is mechanised, overhead is driven by machine time, so the machine hour rate of GHS 20.00 is most appropriate. The wage rate would push overhead onto higher-paid, labour-intensive work and mislead pricing. [5 marks: the choice plus the reason]"
            ],
            "keyTakeaway": "Match the base to what actually causes the cost. Automation points to a machine hour rate; the unit rate is defensible only for single-product departments."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=FnuDtblh6yQ",
    "youtubeId": "FnuDtblh6yQ",
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
"commonMistakes":         [
            "Reapportioning costs twice, once into an activity pool and again into the product cost.",
            "Choosing a cost driver that has no causal link to the pool, such as units produced for a set-up cost pool.",
            "Adding the fixed cost of unused capacity into the activity rate so that the rate rises each year.",
            "Concluding ABC is better without showing the under- or overcosting of individual products.",
            "Treating batch-level costs as unit-level costs and charging them per unit instead of per batch."
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
"examples":       [
          {
            "id": "ex-cst-10-1",
            "title": "Traditional Recovery Compared with Activity-Based Costing",
            "problem": "A printer makes Product A, 20,000 copies a year, and Product B, a short run of 2,000 specialised copies. Total overhead is GHS 1,080,000 and total direct labour hours are 54,000, of which A uses 40,000 and B uses 14,000. Four activity pools and drivers: machine set-ups 240,000 over 300 set-ups (A 100, B 200); purchase ordering 180,000 over 90 orders (A 30, B 60); quality inspection 360,000 over 12,000 inspections (A 9,000, B 3,000); machine running 300,000 over 15,000 machine hours (A 12,000, B 3,000). Required: compute the overhead charged to each product by the labour-hour rate and by ABC, the cost per unit under both, and explain the difference. [40 marks]",
            "stepByStepSolution": [
              "Step 1: Traditional rate = 1,080,000 divided by 54,000 = GHS 20 per direct labour hour. [4 marks]",
              "Step 2: Traditional charges: A = 40,000 times 20 = GHS 800,000 and B = 14,000 times 20 = GHS 280,000. Per unit: A GHS 40.00 and B GHS 140.00. [6 marks]",
              "Step 3: Driver rates: set-ups 240,000 divided by 300 = GHS 800 per set-up; orders 180,000 divided by 90 = GHS 2,000 per order; inspections 360,000 divided by 12,000 = GHS 30 each; machine running 300,000 divided by 15,000 = GHS 20 per hour. [8 marks: all four rates]",
              "Step 4: ABC for A: set-ups 100 times 800 = 80,000; orders 30 times 2,000 = 60,000; inspections 9,000 times 30 = 270,000; machine running 12,000 times 20 = 240,000. Total = GHS 650,000. [6 marks]",
              "Step 5: ABC for B: set-ups 200 times 800 = 160,000; orders 60 times 2,000 = 120,000; inspections 3,000 times 30 = 90,000; machine running 3,000 times 20 = 60,000. Total = GHS 430,000. [5 marks]",
              "Step 6: Check: 650,000 plus 430,000 = GHS 1,080,000, so the whole overhead is still absorbed and only its allocation has moved. [3 marks]",
              "Step 7: Per unit under ABC: A = 650,000 divided by 20,000 = GHS 32.50 and B = 430,000 divided by 2,000 = GHS 215.00. Conclusion: the labour-hour rate overcosts A by GHS 7.50 a unit and undercosts B by GHS 75.00, so the high-volume product has been subsidising the low-volume, set-up-hungry product. Pricing, not accounting, is what is at risk. [8 marks]"
            ],
            "keyTakeaway": "ABC leaves total overhead unchanged; it moves overhead between products. The classic finding is that high-volume standard products are overcosted and low-volume complex ones undercosted."
          },
          {
            "id": "ex-cst-10-2",
            "title": "Pricing a Special Order Using Activity Rates",
            "problem": "A packaging firm receives an order for 4,000 printed cartons. Direct material will cost GHS 1,800 and direct labour 150 hours at GHS 12 per hour. Activity rates are GHS 800 per set-up, GHS 2,000 per purchase order and GHS 30 per inspection. The order needs 3 set-ups, 1 purchase order and 40 inspections. The firm marks up total cost by 25 per cent. Required: compute the full cost of the order, the price to quote, the price per carton, and state the lowest price the firm could accept if the order uses idle capacity. [25 marks]",
            "stepByStepSolution": [
              "Step 1: Direct material 1,800 plus direct labour 150 times 12 = 1,800, so prime cost = GHS 3,600. [4 marks]",
              "Step 2: Activity costs: set-ups 3 times 800 = 2,400; purchase order 1 times 2,000 = 2,000; inspections 40 times 30 = 1,200; total = GHS 5,600. [6 marks]",
              "Step 3: Full cost of the order = 3,600 plus 5,600 = GHS 9,200, so cost per carton = 9,200 divided by 4,000 = GHS 2.30. [5 marks]",
              "Step 4: Quote price = 9,200 times 1.25 = GHS 11,500, that is GHS 2.875, rounded to GHS 2.88 per carton. [5 marks: show mark-up on cost, which differs from margin on price]",
              "Step 5: Minimum acceptable price with spare capacity = the incremental cost only. Set-ups and the purchase order are batch costs caused by this order, so the floor is 3,600 plus 5,600 = GHS 9,200, or GHS 2.30 per carton; anything below that destroys contribution. [5 marks]",
              "Step 6: If the order had to displace regular work, the floor would rise by the contribution lost on the displaced output, which is the point examiners test in the next part of the question. [3 marks]"
            ],
            "keyTakeaway": "Batch-level costs such as set-ups and purchase orders are triggered by the order as a whole, so they belong in a special-order floor price even when no unit-level overhead is charged."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=Gwo2fq29OUY",
    "youtubeId": "Gwo2fq29OUY",
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
"commonMistakes":         [
            "Including fixed overhead in unit variable cost, which moves the break-even point and loses both marks.",
            "Computing the profit-volume ratio as contribution divided by total cost instead of contribution divided by sales value.",
            "Treating fixed cost as if it changes when output changes inside the relevant range.",
            "Answering a marginal-versus-absorption profit question without reconciling the difference through stock.",
            "Using sales units where the break-even formula demands the contribution per unit."
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
"examples":       [
          {
            "id": "ex-cst-11-1",
            "title": "Marginal Costing versus Absorption Costing Profit with Stock Build-Up",
            "problem": "A maker of school exercise books sells each unit at GHS 40. Variable production cost is GHS 24 a unit and fixed production overhead is GHS 360,000 a year. In 2025 the firm produced 50,000 units and sold 45,000, with no opening stock. Selling and distribution costs are GHS 2 a unit sold and are wholly variable. Required: prepare the profit statement under marginal costing and under absorption costing, reconcile the two, and state when each method should be used. [40 marks]",
            "stepByStepSolution": [
              "Step 1: Sales = 45,000 times 40 = GHS 1,800,000. Variable production cost of sales = 45,000 times 24 = GHS 1,080,000 and variable selling cost = 45,000 times 2 = GHS 90,000. [5 marks]",
              "Step 2: Contribution = 1,800,000 minus 1,080,000 minus 90,000 = GHS 630,000, so contribution per unit sold = 40 minus 24 minus 2 = GHS 14. [6 marks]",
              "Step 3: Marginal profit = 630,000 minus fixed overhead 360,000 = GHS 270,000. [5 marks: deduct the whole fixed cost in the period]",
              "Step 4: Absorption cost per unit = 24 plus (360,000 divided by 50,000 produced) = 24 plus 7.20 = GHS 31.20. [6 marks: divide by production, not sales, which is the most common error]",
              "Step 5: Absorption profit = 1,800,000 minus (45,000 times 31.20 = 1,404,000) minus variable selling 90,000 = GHS 306,000. [6 marks]",
              "Step 6: Reconciliation: closing stock = 5,000 units carrying fixed overhead of 5,000 times 7.20 = GHS 36,000, and 270,000 plus 36,000 = GHS 306,000, which agrees. [6 marks]",
              "Step 7: Use: marginal costing is for break-even, pricing and make-or-buy decisions and for internal reporting; absorption costing is required for external statements and tax because IAS 2 demands fixed production overhead in inventory cost. [5 marks]"
            ],
            "keyTakeaway": "When production exceeds sales, absorption profit is higher by the fixed overhead trapped in closing stock. The difference is always fixed overhead per unit times the change in stock units."
          },
          {
            "id": "ex-cst-11-2",
            "title": "Break-Even, Margin of Safety and Target Profit",
            "problem": "A firm sells a product at GHS 15 with variable cost of GHS 9 and fixed costs of GHS 180,000 a year. Current sales are 42,000 units. Required: find the contribution per unit, the profit-volume ratio, break-even in units and value, the margin of safety in units and per cent, the sales needed for a target profit of GHS 90,000, and the new break-even if a 10 per cent price cut is considered. [35 marks]",
            "stepByStepSolution": [
              "Step 1: Contribution per unit = 15 minus 9 = GHS 6. [3 marks]",
              "Step 2: Profit-volume ratio = 6 divided by 15 times 100 = 40 per cent. [4 marks]",
              "Step 3: Break-even units = 180,000 divided by 6 = 30,000 units; break-even value = 180,000 divided by 40 per cent = GHS 450,000, which checks as 30,000 times 15. [6 marks]",
              "Step 4: Margin of safety = 42,000 minus 30,000 = 12,000 units, that is 12,000 divided by 42,000 times 100 = 28.57 per cent, or GHS 180,000 of sales value. [6 marks]",
              "Step 5: Profit at current sales = 12,000 times 6 = GHS 72,000, or equivalently contribution 252,000 minus fixed 180,000. [4 marks]",
              "Step 6: Sales for a target profit of 90,000 = (180,000 plus 90,000) divided by 6 = 45,000 units = GHS 675,000. [6 marks]",
              "Step 7: After a 10 per cent price cut, price = 13.50 and contribution = 4.50, so break-even rises to 180,000 divided by 4.50 = 40,000 units, which is only 2,000 units below current sales, cutting the margin of safety to 4.76 per cent. Advise against the cut unless volume grows materially. [6 marks]"
            ],
            "keyTakeaway": "A price change moves contribution per unit, so break-even moves sharply and disproportionately. Always finish a break-even answer with the margin of safety and a recommendation."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=rYBsiy0ARBQ",
    "youtubeId": "rYBsiy0ARBQ",
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
"commonMistakes":         [
            "Drawing the total cost line starting at zero instead of at the fixed cost level on the vertical axis.",
            "Extending the graph past the relevant range where fixed costs or selling prices would change.",
            "Reading the break-even point off the horizontal axis instead of reporting both units and sales value.",
            "Accepting a special order on the grounds that price exceeds total unit cost when only variable cost is relevant.",
            "Ignoring the contribution lost on displaced regular sales when capacity is already full."
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
"examples":       [
          {
            "id": "ex-cst-12-1",
            "title": "Constructing a Break-Even Chart from Coordinates",
            "problem": "A firm has fixed costs of GHS 240,000, sells at GHS 20 a unit and its variable cost is GHS 12 a unit. Required: compute the coordinates needed to draw the revenue and total cost lines from nil output to 60,000 units in 10,000 steps, state the break-even point, find the profit at 50,000 units by two methods, and give two limitations of the chart. [35 marks]",
            "stepByStepSolution": [
              "Step 1: Revenue line passes through (0, 0) and (60,000, 1,200,000) because 60,000 times 20 = GHS 1,200,000. [4 marks]",
              "Step 2: Total cost line starts at (0, 240,000) since fixed cost is incurred even at nil output, and ends at (60,000, 240,000 plus 720,000 = 960,000) because 60,000 times 12 = 720,000. [6 marks]",
              "Step 3: Table: at 10,000 units revenue 200,000 and cost 360,000; at 20,000 revenue 400,000 and cost 480,000; at 30,000 revenue 600,000 and cost 600,000; at 40,000 revenue 800,000 and cost 720,000; at 50,000 revenue 1,000,000 and cost 840,000. [8 marks: a labelled table earns full method marks]",
              "Step 4: Break-even = 240,000 divided by (20 minus 12) = 30,000 units, sales value GHS 600,000, which agrees with the coordinate where the two lines meet. [6 marks]",
              "Step 5: Profit at 50,000 units from the chart = 1,000,000 minus 840,000 = GHS 160,000. Check: units above break-even 20,000 times contribution 8 = GHS 160,000. [5 marks: two independent methods]",
              "Step 6: Limitations: it assumes selling price, variable cost per unit and fixed cost stay constant, and it assumes a single product or a constant sales mix, so real Ghanaian firms with seasonal costs outgrew the model. [4 marks]"
            ],
            "keyTakeaway": "The revenue line starts at the origin and the total cost line starts at fixed cost. The vertical gap between them is profit or loss, and the intersection must equal the algebraic break-even."
          },
          {
            "id": "ex-cst-12-2",
            "title": "Special Order Decision with and without Spare Capacity",
            "problem": "A furniture workshop sells a chair at GHS 20 with variable cost of GHS 12. Normal output is 40,000 chairs a year and its full capacity is 46,000. A Ghanaian hotel offers GHS 14 a chair for 6,000 chairs, to be delivered within the year. Regular customers will not be affected if the order is accepted. Required: advise whether to accept, and rework the advice if the workshop can only produce 44,000 chairs in total. [25 marks]",
            "stepByStepSolution": [
              "Step 1: Spare capacity = 46,000 minus 40,000 = 6,000 chairs, so the order can be filled without displacing regular sales. [3 marks]",
              "Step 2: Incremental revenue = 6,000 times 14 = GHS 84,000 and incremental variable cost = 6,000 times 12 = GHS 72,000. [5 marks]",
              "Step 3: Incremental contribution = 84,000 minus 72,000 = GHS 12,000. Fixed costs are unaffected, so profit rises by GHS 12,000. Accept. [5 marks: state the decision explicitly]",
              "Step 4: Rejected reasoning: full absorption cost per chair is 12 plus (fixed cost divided by 40,000), which exceeds GHS 14 and would wrongly reject the order. Fixed cost is not incremental. [4 marks]",
              "Step 5: Capacity capped at 44,000: only 4,000 chairs of spare capacity exist, so 2,000 regular chairs at GHS 20 are displaced. Lost contribution = 2,000 times (20 minus 12) = GHS 16,000. [5 marks]",
              "Step 6: Net effect = 12,000 gained minus 16,000 lost = GHS 4,000 fall in profit, so reject. The minimum price worth accepting is 12 plus (16,000 divided by 6,000) = GHS 14.67 a chair. [6 marks: the reservation price is the strongest answer]"
            ],
            "keyTakeaway": "A special order floor price is variable cost plus any contribution lost on displaced sales. Spare capacity is the whole basis of the decision, so quantify it first."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=4GcKM5uqnEw",
    "youtubeId": "4GcKM5uqnEw",
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
"commonMistakes":         [
            "Adding a mark-up percentage to the selling price instead of to cost, or quoting margin when mark-up is asked.",
            "Charging a set-up cost per unit produced instead of to the batch as a whole.",
            "Including selling overhead inside the cost figure and then applying the profit mark-up on that inflated base.",
            "Treating normal batch spoilage as abnormal and writing it off to the profit and loss account.",
            "Leaving the job card unbalanced so that the total cost does not agree with material plus labour plus overhead."
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
"examples":       [
          {
            "id": "ex-cst-13-1",
            "title": "Job Cost Sheet and a Target Margin Price",
            "problem": "Job R57 covers printing 8,000 exercise books. Materials: paper GHS 4,200 and ink GHS 780. Labour: printing 18 hours at GHS 22, binding 26 hours at GHS 18, finishing 12 hours at GHS 16. Overheads: the printing department absorbs at GHS 14 per machine hour and the job uses 18 machine hours; the binding department absorbs at GHS 9 per labour hour for the binding and finishing hours together. Administration overhead is 10 per cent of works cost. The firm wants a profit equal to 25 per cent of the selling price. Required: prepare the job cost sheet and quote the price, both total and per book. [35 marks]",
            "stepByStepSolution": [
              "Step 1: Direct material = 4,200 plus 780 = GHS 4,980. [3 marks]",
              "Step 2: Direct labour = printing 18 times 22 = 396; binding 26 times 18 = 468; finishing 12 times 16 = 192; total = GHS 1,056. [6 marks: three subtotals then the total]",
              "Step 3: Prime cost = 4,980 plus 1,056 = GHS 6,036. [3 marks]",
              "Step 4: Overheads absorbed = printing 18 machine hours times 14 = GHS 252; binding department 26 plus 12 = 38 labour hours times 9 = GHS 342; total overhead = GHS 594. [6 marks: use the hours already computed in Step 2]",
              "Step 5: Works cost = 6,036 plus 594 = GHS 6,630. [4 marks]",
              "Step 6: Administration at 10 per cent of works cost = GHS 663, so total cost = GHS 7,293, which is 7,293 divided by 8,000 = GHS 0.9116 per book. [5 marks]",
              "Step 7: A profit of 25 per cent of selling price means cost is 75 per cent of selling price. Price = 7,293 divided by 0.75 = GHS 9,724, and per book = 9,724 divided by 8,000 = GHS 1.2155, quoted at GHS 1.22. [8 marks: dividing by 0.75 is the test of understanding]",
              "Step 8: Contrast: a 25 per cent mark-up on cost would give 7,293 times 1.25 = GHS 9,116.25, which is GHS 607.75 less. Examiners award the margin method only when the question says profit on selling price. [4 marks]"
            ],
            "keyTakeaway": "A profit of x per cent of selling price divides cost by (1 minus x); a mark-up of x per cent on cost multiplies by (1 plus x). Read which one the question asks for."
          },
          {
            "id": "ex-cst-13-2",
            "title": "Batch Costing with Normal and Abnormal Loss",
            "problem": "A tailor produces a batch of 5,000 school blazers. Material cost GHS 92,500; labour 3,750 hours at GHS 11 per hour; overheads absorbed at GHS 7.50 per labour hour; machine set-up cost for the batch GHS 4,600. Normal expected spoilage is 4 per cent of the batch and spoilt garments realise nothing. Actual spoilage was 600 garments. Required: compute the batch cost, the cost per good garment, the value of output transferred to finished stock, and the loss charged to the cost profit and loss account. [30 marks]",
            "stepByStepSolution": [
              "Step 1: Labour = 3,750 times 11 = GHS 41,250 and overhead = 3,750 times 7.50 = GHS 28,125. [4 marks]",
              "Step 2: Batch cost = 92,500 plus 41,250 plus 28,125 plus 4,600 = GHS 166,475. The set-up cost is charged once to the whole batch because it is a batch-level, not a unit-level, cost. [6 marks]",
              "Step 3: Normal loss = 4 per cent of 5,000 = 200 garments, so expected good output = 4,800 garments. Since the spoilt cloth has no scrap value, the cost of normal loss is borne by the good garments. [5 marks]",
              "Step 4: Cost per good garment = 166,475 divided by 4,800 = GHS 34.68 (34.6823). Compare with the unadjusted 166,475 divided by 5,000 = GHS 33.295; the difference of GHS 1.39 per garment is the cost of normal spoilage. [6 marks]",
              "Step 5: Abnormal loss = actual spoilage 600 minus normal 200 = 400 garments, valued at 400 times 34.6823 = GHS 13,872.92 and charged to the cost profit and loss account. [5 marks]",
              "Step 6: Good garments produced = 5,000 minus 600 = 4,400, transferred at 4,400 times 34.6823 = GHS 152,602.08. Reconcile: 152,602.08 plus 13,872.92 = GHS 166,475, equal to the batch cost. [4 marks: the reconciliation must be shown]"
            ],
            "keyTakeaway": "Normal loss cost is carried by good production through a higher unit rate; abnormal loss is removed at that same standard rate and charged to the cost profit and loss account."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=tdFRcj97NfI",
    "youtubeId": "tdFRcj97NfI",
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
"commonMistakes":         [
            "Charging the full annual depreciation of plant to a contract that used it for only part of the year.",
            "Including the cost of plant still on site at the year end in the contract cost instead of deducting its value.",
            "Taking profit on a partly completed contract using the full notional profit without scaling by cash received.",
            "Postponing the recognition of an anticipated contract loss instead of providing for it in full immediately.",
            "Treating cash received from the customer as the value of work done rather than the certified figure."
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
"examples":       [
          {
            "id": "ex-cst-14-1",
            "title": "Contract Account and Profit on a Partly Completed Contract",
            "problem": "A building firm starts a contract on 1 March 2025 at a contract price of GHS 1,200,000. To 31 December 2025: materials issued to site GHS 320,000, of which GHS 40,000 remains unused; direct wages GHS 240,000; overheads charged at 10 per cent of wages; plant bought for GHS 240,000 on 1 March and depreciated at 20 per cent a year on a time basis. Work certified at 31 December 2025 is GHS 640,000 and the customer has paid GHS 560,000. Estimated further cost to complete is GHS 456,000. Required: prepare the contract account for the year, compute the notional profit, the profit transferred to general accounts and the value of work in progress. [40 marks]",
            "stepByStepSolution": [
              "Step 1: Materials charged to the contract = 320,000 issued minus 40,000 unused on site = GHS 280,000. [4 marks: unused material is never a contract cost]",
              "Step 2: Wages GHS 240,000; overheads = 10 per cent of 240,000 = GHS 24,000. [4 marks]",
              "Step 3: Notional depreciation = 240,000 times 20 per cent times 10 twelfths = GHS 40,000, because the plant was used for only 10 of the 12 months. [5 marks: the time-basis adjustment is a standing examiner demand]",
              "Step 4: Total cost to date = 280,000 plus 240,000 plus 24,000 plus 40,000 = GHS 584,000. [5 marks]",
              "Step 5: Notional profit = work certified minus cost to date = 640,000 minus 584,000 = GHS 56,000. [5 marks]",
              "Step 6: Percentage completion = 640,000 divided by 1,200,000 times 100 = 53.33 per cent, which is above 50 per cent, so part of the notional profit may be taken. [4 marks]",
              "Step 7: Profit transferred = notional profit times cash received divided by work certified = 56,000 times (560,000 divided by 640,000) = 56,000 times 7 eighths = GHS 49,000, and GHS 7,000 is held back as reserve. [6 marks]",
              "Step 8: Overall check: estimated total cost = 584,000 plus 456,000 = GHS 1,040,000 against a price of 1,200,000, so total estimated profit = GHS 160,000 and the GHS 49,000 taken is prudent, being only 30.6 per cent of it. [5 marks]",
              "Step 9: Work in progress = cost of work done plus profit transferred minus notional profit = 584,000 plus 49,000 minus 56,000 = GHS 577,000. Show separately the unused material of GHS 40,000 and plant carried at 240,000 minus 40,000 = GHS 200,000, and note retention of 80,000 still recoverable from the customer. [6 marks]"
            ],
            "keyTakeaway": "Compute notional profit as work certified minus cost, test percentage completion, then scale the profit taken by cash received. Disclose unused material, plant and retention separately."
          },
          {
            "id": "ex-cst-14-2",
            "title": "Anticipated Loss on a Contract",
            "problem": "A road contract is priced at GHS 900,000. At 30 June 2025 costs incurred are GHS 780,000 and the contractor estimates a further GHS 240,000 to finish. Work certified to date is GHS 600,000 and the customer retains 10 per cent of every certificate. Required: state whether any profit may be taken, compute the amount to be charged to the general profit and loss account, value work in progress and show the amount currently receivable from the customer. [25 marks]",
            "stepByStepSolution": [
              "Step 1: Estimated total cost = 780,000 plus 240,000 = GHS 1,020,000 against a price of GHS 900,000, so an anticipated total loss of GHS 120,000. [6 marks: this conclusion is the whole point of the question]",
              "Step 2: No profit can be taken, because prudence forbids recognising profit while a contract is loss-making. [4 marks]",
              "Step 3: The full anticipated loss of GHS 120,000 must be provided in the period it becomes known; it is not spread over the remaining contract life. Charge GHS 120,000 to the contract account and to the cost profit and loss account. [6 marks]",
              "Step 4: Work in progress on the contract account = costs incurred 780,000 minus loss provided 120,000 less work certified 600,000 = GHS 60,000 of unrecovered cost, disclosed under stock and work in progress. [5 marks]",
              "Step 5: Retention = 10 per cent of 600,000 = GHS 60,000, so cash currently due from the customer = 600,000 minus 60,000 = GHS 540,000, with the retention collectable only on completion. [4 marks]"
            ],
            "keyTakeaway": "A foreseeable contract loss is recognised in full immediately. Retentions are contract assets, not cash already received, and must be shown separately."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=WWw1VopaaE8",
    "youtubeId": "WWw1VopaaE8",
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
"commonMistakes":         [
            "Adding abnormal loss units into the equivalent unit calculation, which lowers the rate and overstates profit.",
            "Dividing total cost by units introduced instead of by expected output net of normal loss.",
            "Forgetting the scrap value of normal loss when computing the cost per equivalent unit.",
            "Valuing closing work in progress at 100 per cent for both materials and conversion when completion differs.",
            "Mixing FIFO and weighted average equivalent units in one process statement."
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
"examples":       [
          {
            "id": "ex-cst-15-1",
            "title": "Process Cost Account with Normal and Abnormal Loss",
            "problem": "Process A of a shea-butter refinery introduces 25,000 units of paste in April 2025. Material cost is GHS 76,000 and conversion cost of labour and overhead is GHS 69,000. Normal loss is 20 per cent of input and the residue realised from spoilt units is GHS 5,000 in total. Actual output transferred to Process B is 19,000 units. Required: prepare the process account, compute the cost per unit, value the abnormal loss and state the effect if output had been 20,400 units. [30 marks]",
            "stepByStepSolution": [
              "Step 1: Normal loss = 20 per cent of 25,000 = 5,000 units, so expected good output = 20,000 units. [3 marks]",
              "Step 2: Net cost to be absorbed by production = 76,000 plus 69,000 minus the 5,000 scrap proceeds = GHS 140,000. Deducting scrap value lowers the rate, which is why examiners look for it. [5 marks]",
              "Step 3: Cost per unit = 140,000 divided by 20,000 expected units = GHS 7.00. Never divide by the 25,000 units introduced. [6 marks: the denominator choice is the marks]",
              "Step 4: Actual loss = 25,000 minus 19,000 = 6,000 units, of which 5,000 are normal, so abnormal loss = 1,000 units. [4 marks]",
              "Step 5: Abnormal loss = 1,000 times 7.00 = GHS 7,000, transferred to the abnormal loss account and thence to the cost profit and loss account, because it is not a cost of good production. [5 marks]",
              "Step 6: Process account balance: debits 145,000; credits = output 19,000 times 7 = 133,000, plus abnormal loss 7,000, plus scrap 5,000 = GHS 145,000, so the account closes. [5 marks]",
              "Step 7: If output had been 20,400 units, loss would be 4,600, that is 400 less than normal, giving an abnormal gain of 400 units times 7.00 = GHS 2,800 credited to the abnormal gain account and to the cost profit and loss account; output would be credited at 20,400 times 7 = GHS 142,800 and debits of 145,000 plus 2,800 would equal credits of 142,800 plus 5,000. [5 marks]"
            ],
            "keyTakeaway": "Divide process cost by expected output after normal loss and after crediting scrap proceeds. Abnormal loss is charged out at the same rate and abnormal gain is its mirror image."
          },
          {
            "id": "ex-cst-15-2",
            "title": "Equivalent Units with Opening and Closing Work in Progress",
            "problem": "Process B has opening work in progress of 2,000 units valued at GHS 4,200 for material and GHS 3,600 for conversion. During the period 18,000 units are introduced at material cost GHS 55,800 and conversion cost GHS 29,700. Units completed and transferred are 17,000 and closing work in progress is 3,000 units, 100 per cent complete as to material and one-third complete as to conversion. There is no loss. Required: by the weighted average method compute equivalent units for material and conversion, the cost per equivalent unit, the value of completed units and the value of closing work in progress. [35 marks]",
            "stepByStepSolution": [
              "Step 1: Units to account for = 2,000 opening plus 18,000 introduced = 20,000, and completed 17,000 plus closing 3,000 = 20,000, so physical quantities reconcile. [4 marks]",
              "Step 2: Equivalent units for material = 17,000 completed plus 3,000 times 100 per cent = 20,000 equivalent units. [5 marks]",
              "Step 3: Equivalent units for conversion = 17,000 plus 3,000 times one-third = 17,000 plus 1,000 = 18,000 equivalent units. [5 marks]",
              "Step 4: Material cost pooled = 4,200 opening plus 55,800 added = GHS 60,000, so cost per equivalent unit = 60,000 divided by 20,000 = GHS 3.00. [5 marks]",
              "Step 5: Conversion cost pooled = 3,600 plus 29,700 = GHS 33,300, so cost per equivalent unit = 33,300 divided by 18,000 = GHS 1.85. [5 marks]",
              "Step 6: Completed units = 17,000 times (3.00 plus 1.85) = 17,000 times 4.85 = GHS 82,450. Closing work in progress = (3,000 times 3.00) plus (1,000 times 1.85) = 9,000 plus 1,850 = GHS 10,850. [5 marks]",
              "Step 7: Total accounted for = 82,450 plus 10,850 = GHS 93,300, which equals total input cost of 4,200 plus 3,600 plus 55,800 plus 29,700 = GHS 93,300. Note that weighted average deliberately ignores the opening percentage of completion; under FIFO the opening work would be finished first and only current-period cost divided by current-period equivalent units. [6 marks: reconciliation plus the method note]"
            ],
            "keyTakeaway": "Under weighted average, opening stock cost and units are merged with current period cost and units, so equivalent units are completed units plus closing work in progress weighted by degree of completion."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=zvJG7CewkMM",
    "youtubeId": "zvJG7CewkMM",
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
"commonMistakes":         [
            "Writing Assets = Capital + Liabilities in the wrong order and then failing the adjustment questions that depend on it.",
            "Treating drawings as an expense; drawings reduce capital directly and never appear in the income statement.",
            "Confusing the Business Entity concept with the Going Concern concept when a question describes an owner mixing personal and shop cash.",
            "Recording a transaction that cannot be expressed in money, which breaks the Money Measurement concept.",
            "Anticipating a profit while ignoring a known loss, which violates Prudence."
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
"examples":       [
          {
            "id": "ex-fac-01-1",
            "title": "Applying the Accounting Equation after Year-End Movements",
            "problem": "Kofi starts business with capital of GHS 45,000. During the year he earns revenue of GHS 28,000, incurs expenses of GHS 16,500, and withdraws GHS 3,000 for personal use. At the year end his liabilities are GHS 9,400. Required: (a) closing capital; (b) total assets at the year end. [WASSCE-style, 8 marks]",
            "stepByStepSolution": [
              "Step 1: Opening capital = GHS 45,000 [1 mark]",
              "Step 2: Net profit for the year = revenue − expenses = 28,000 − 16,500 = GHS 11,500 [2 marks]",
              "Step 3: Closing capital = opening capital + net profit − drawings = 45,000 + 11,500 − 3,000 = GHS 53,500 [2 marks]",
              "Step 4: Apply the equation Assets = Liabilities + Capital = 9,400 + 53,500 [2 marks]",
              "Step 5: Total assets = GHS 62,900 [1 mark]"
            ],
            "keyTakeaway": "Drawings and profit both move capital, so the equation must be rebuilt after every capital change — never answered from opening capital alone."
          },
          {
            "id": "ex-fac-01-2",
            "title": "Identifying the Accounting Concept Being Violated",
            "problem": "In each situation, name the accounting concept or convention that has been broken: (a) A shopkeeper values unsold stock at its expected selling price rather than cost. (b) A business changes its depreciation method from straight line to reducing balance without disclosing it. (c) A trader records the purchase of a delivery van in the purchases book. (d) The owners of a company keep their personal household ledger in the same books as the company records. [8 marks]",
            "stepByStepSolution": [
              "Step 1: (a) breaches the Prudence (Conservatism) concept — profit must not be anticipated, and stock must be valued at cost or net realisable value, whichever is lower. [2 marks]",
              "Step 2: (b) breaches the Consistency convention — accounting policies must be applied from one period to the next, and any change must be disclosed with its effect. [2 marks]",
              "Step 3: (c) breaches the Materiality and Classification requirement — a non-current asset must be capitalised in the assets account, not debited to purchases, which would understate assets and overstate cost of sales. [2 marks]",
              "Step 4: (d) breaches the Business Entity concept — the business is separate from its owners, so household transactions do not belong in the business records. [2 marks]"
            ],
            "keyTakeaway": "WASSCE Section A tests concept identification through scenarios; match the symptom to the concept name exactly."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=lwEolJH7rDI",
    "youtubeId": "lwEolJH7rDI",
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
"commonMistakes":         [
            "Posting a transaction twice, once as a debit and once as a credit of different amounts.",
            "Writing the wrong date column folio in the journal, which destroys the audit trail.",
            "Confusing the returns inwards book with the returns outwards book, so trade receivables and payables both go wrong.",
            "Entering cash sales in the sales day book; the sales day book records credit sales only.",
            "Totalling the purchases day book and posting the total to the debit of the purchases account as if it were cash."
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
"examples":       [
          {
            "id": "ex-fac-02-1",
            "title": "Journalising a Month of Transactions",
            "problem": "Ama commenced business on 1 September 2025 and recorded these transactions. Required: journal entries with narrations. (i) Introduced cash GHS 20,000 and a shop premises valued at GHS 60,000. (ii) Bought fixtures on credit from Boakye Ltd for GHS 4,500. (iii) Paid GHS 1,200 by cheque for one year insurance in advance. (iv) Sold goods costing GHS 2,600 on credit to Yaw for GHS 4,000. (v) Yaw returned goods with a selling price of GHS 350. (vi) Paid Boakye Ltd GHS 4,500 less 5 per cent discount. [WASSCE 20 marks]",
            "stepByStepSolution": [
              "Step 1: Dr Cash 20,000; Dr Premises 60,000; Cr Capital 80,000 — narration \"Being capital introduced\". [4 marks: 1 for each correct side and total]",
              "Step 2: Dr Fixtures 4,500; Cr Boakye Ltd (Purchases Ledger Control) 4,500 — credit sales/purchase of a non-current asset on credit goes to the supplier account, not the purchases book. [3 marks]",
              "Step 3: Dr Prepaid Insurance 1,200; Cr Bank 1,200 — payment in advance is an asset, not an expense of the year. [3 marks]",
              "Step 4: Dr Yaw (Receivables) 4,000; Cr Sales 4,000, and separately Dr Cost of Sales 2,600; Cr Inventory 2,600 if the perpetual method is used. [4 marks]",
              "Step 5: Dr Returns Inwards 350; Cr Yaw 350. [3 marks]",
              "Step 6: Dr Boakye Ltd 4,500; Cr Bank 4,275; Cr Discount Received 225 — 5 per cent of 4,500 = 225, and discount received is income to the seller of the debt, recorded on the credit side. [3 marks]"
            ],
            "keyTakeaway": "Every journal entry needs equal debits and credits plus a narration; discount received is always a credit, discount allowed always a debit."
          },
          {
            "id": "ex-fac-02-2",
            "title": "Batch Posting from the Day Books",
            "problem": "Adi's day books for October show: Sales day book GHS 18,400 including VAT at 15 per cent; Purchases day book GHS 9,600 including VAT; Returns inwards GHS 800; Returns outwards GHS 450; Discount allowed column GHS 320; Discount received column GHS 210. Required: the double entries for the total postings to the ledger. [15 marks]",
            "stepByStepSolution": [
              "Step 1: Net of VAT on sales = 18,400 ÷ 1.15 = GHS 16,000; VAT on sales = GHS 2,400. [3 marks]",
              "Step 2: Net of VAT on purchases = 9,600 ÷ 1.15 = GHS 8,347.83; VAT on purchases = GHS 1,252.17. [3 marks]",
              "Step 3: Dr Receivables (Sales Ledger Control) 18,400; Cr Sales 16,000; Cr Output VAT 2,400. [3 marks]",
              "Step 4: Dr Purchases 8,347.83; Dr Input VAT 1,252.17; Cr Payables (Purchases Ledger Control) 9,600. [3 marks]",
              "Step 5: Dr Returns Inwards 800; Cr Receivables 800, and Dr Payables 450; Cr Returns Outwards 450. [2 marks]",
              "Step 6: Dr Discount Allowed 320; Cr Receivables 320, and Dr Payables 210; Cr Discount Received 210. [1 mark]"
            ],
            "keyTakeaway": "Day books are posted in total to control accounts; only individual balances go to the personal ledger accounts."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=kyrOLeqtu6s",
    "youtubeId": "kyrOLeqtu6s",
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
"commonMistakes":         [
            "Recording a cheque received from a customer in the payments side of the cash book.",
            "Forgetting that contra entries between the cash column and the bank column appear on both sides of the cash book.",
            "Deducting bank charges from the bank statement balance instead of the cash book balance in the reconciliation.",
            "Treating an un-presented cheque as an addition rather than a deduction from the statement balance.",
            "Writing the discount allowed column total as the amount actually received from the customer."
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
"examples":       [
          {
            "id": "ex-fac-03-1",
            "title": "Preparing a Three-Column Cash Book",
            "problem": "Record the following in Adjoa's three-column cash book (cash, bank, discount) for March 2025 and show the totals carried down. 1 Mar: brought forward cash GHS 1,450, bank GHS 6,200. 4 Mar: received GHS 900 from Kwame by cheque less 2 per cent discount. 7 Mar: paid wages by cheque GHS 1,100. 10 Mar: deposited cash GHS 800 into the bank. 14 Mar: paid GHS 600 to Efua by cheque less 5 per cent discount. 20 Mar: cash sales GHS 470 paid into bank the same day. 25 Mar: withdrew GHS 500 cash from the bank for office use. 28 Mar: bank charges GHS 25 debited by the bank. [20 marks]",
            "stepByStepSolution": [
              "Step 1: 1 Mar — Dr side, balance b/f: Cash 1,450 and Bank 6,200. [2 marks]",
              "Step 2: 4 Mar — Dr Bank 882, Dr Discount Allowed 18 (2 per cent of 900). [3 marks]",
              "Step 3: 7 Mar — Cr Bank 1,100 wages. [1 mark]",
              "Step 4: 10 Mar — contra: Cr Cash 800 and Dr Bank 800; both sides of the cash book, no discount and no ledger entry. [3 marks]",
              "Step 5: 14 Mar — Cr Bank 570, Cr Discount Received 30 (5 per cent of 600). [3 marks]",
              "Step 6: 20 Mar — Dr Bank 470 sales (cash sales deposited immediately enter the bank column only). [1 mark]",
              "Step 7: 25 Mar — contra: Cr Bank 500 and Dr Cash 500. [3 marks]",
              "Step 8: 28 Mar — Cr Bank 25 bank charges; this is entered in the cash book first, because the statement notified it. [1 mark]",
              "Step 9: Carry down: Cash 1,450 + 500 − 800 = GHS 1,150; Bank 6,200 + 882 + 800 + 470 − 1,100 − 570 − 500 − 25 = GHS 6,157. Discount allowed total GHS 18, discount received GHS 30. [3 marks]"
            ],
            "keyTakeaway": "Contras never touch the ledger, and bank charges must be entered in the cash book before the reconciliation is begun."
          },
          {
            "id": "ex-fac-03-2",
            "title": "Bank Reconciliation Statement",
            "problem": "On 30 June 2025 Yaw's cash book showed a bank balance of GHS 12,480 while the bank statement showed GHS 14,905. Investigation revealed: (a) cheques paid to suppliers of GHS 3,400 posted on 29 June but not yet presented; (b) a cheque from a customer of GHS 2,150 banked on 30 June and not yet credited; (c) standing charges of GHS 380 on the statement not in the cash book; (d) credit transfer of GHS 605 from a customer collected by the bank and not recorded in the cash book; (e) bank charges GHS 25 on the statement only. Required: reconcile the two balances. [15 marks]",
            "stepByStepSolution": [
              "Step 1: Start from the cash book balance: GHS 12,480. [1 mark]",
              "Step 2: Add the standing charges not yet recorded: less GHS 380 (this reduces the cash book, so subtract). [2 marks]",
              "Step 3: Less bank charges GHS 25 not yet recorded. [2 marks]",
              "Step 4: Add the credit transfer GHS 605 that increases the bank balance but is missing from the cash book. [2 marks]",
              "Step 5: Adjusted (true) cash book balance = 12,480 − 380 − 25 + 605 = GHS 12,680. [2 marks]",
              "Step 6: Now move from the statement balance: start GHS 14,905, less unpresented cheques GHS 3,400, add cheque not yet credited GHS 2,150. [4 marks]",
              "Step 7: Reconciled statement balance = 14,905 − 3,400 + 2,150 = GHS 13,655, then note the residual difference of GHS 975 arises because items (c), (d) and (e) were already absorbed in Step 5; recompute using one consistent direction: 14,905 − 3,400 + 2,150 = 13,655 against adjusted cash book 12,680 shows an unresolved difference of GHS 975 to be investigated. [1 mark]",
              "Step 8: Correct presentation: the reconciliation must agree, so item (b) of GHS 2,150 is a lodgement not yet credited and is ADDED to the statement side, while unpresented cheques of GHS 3,400 are DEDUCTED, giving 13,655; the cash book side after the three omissions must therefore be brought to 13,655 by recording the credit transfer 605, standing charges 380 and bank charges 25 which yields 12,680, leaving 975 — an error to be reported to the examiner rather than forced. [2 marks]"
            ],
            "keyTakeaway": "Adjust the cash book first for omissions, then reconcile timing differences; if the two sides still disagree, an error exists and must be stated, not plugged."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=91dQlwdwf44",
    "youtubeId": "91dQlwdwf44",
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
"commonMistakes":         [
            "Compiling a trial balance from account titles rather than balances, so the totals never agree.",
            "Casting an account wrongly and calling it an error of omission.",
            "Omitting a ledger balance entirely, then failing to detect that only one side is affected.",
            "Recording a double-entry error the same amount on both sides when correcting a commission error.",
            "Putting the credit balance of a contra account, such as bank overdraft, on the debit side."
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
"examples":       [
          {
            "id": "ex-fac-04-1",
            "title": "Casting a Suspense Account from Four Errors",
            "problem": "A firm's trial balance showed debits of GHS 84,320 against credits of GHS 81,655. On checking, the following errors were found: (i) a purchase of GHS 1,150 was entered in the purchases book but not posted to the supplier's account; (ii) discounts allowed of GHS 240 were debited to the discount received account; (iii) the sales account total was overcast by GHS 1,000; (iv) cash drawings of GHS 425 were posted to the debit of the drawings account and the credit of the bank account. Required: the opening suspense balance, the correcting entries and the closing suspense balance. [20 marks]",
            "stepByStepSolution": [
              "Step 1: Opening suspense = 84,320 − 81,655 = GHS 2,665 debit excess, so the suspense account is credited with GHS 2,665 to balance the trial balance. [3 marks]",
              "Step 2: Error (i) is an error of omission affecting only one side; correct by Dr Suspense 1,150, Cr Supplier (Payables) 1,150. [4 marks]",
              "Step 3: Error (ii) has the same amount on both sides, so it is an error of principle/classification with no effect on agreement; correct by Dr Discount Allowed 240, Cr Discount Received 240. Suspense untouched. [5 marks]",
              "Step 4: Error (iii) overstates credits by 1,000; correct by Dr Sales 1,000, Cr Suspense 1,000. [4 marks]",
              "Step 5: Error (iv) is committed the two sides in the wrong accounts but equal amounts, so no suspense effect; correct by Dr Drawings already debit, so instead reverse the wrong pair: Dr Bank 425, Cr Drawings 425. [4 marks]",
              "Step 6: Suspense account: credit side 2,665 + 1,000 = 3,665; debit side 1,150; closing balance = 3,665 − 1,150 = GHS 2,515 credit, which must be further investigated since a cleared suspense is the aim. [2 marks]"
            ],
            "keyTakeaway": "Only single-sided errors pass through the suspense account; errors of principle and compensating errors never disturb it."
          },
          {
            "id": "ex-fac-04-2",
            "title": "Effect of Errors on the Income Statement",
            "problem": "State, with reasons, the effect on gross profit and net profit of each of the following uncorrected errors: (a) sales of GHS 2,300 omitted from the sales day book; (b) purchases of GHS 1,750 recorded twice in the purchases account; (c) closing inventory of GHS 3,400 valued at GHS 4,300; (d) discount allowed of GHS 300 credited instead of debited. [16 marks]",
            "stepByStepSolution": [
              "Step 1: (a) Sales understated by 2,300, so gross profit and net profit are both understated by GHS 2,300. [4 marks]",
              "Step 2: (b) Purchases overstated by 1,750, so cost of sales is overstated and gross profit and net profit are both overstated downward, i.e. understated by GHS 1,750. [4 marks]",
              "Step 3: (c) Closing inventory overstated by 900, so cost of sales is understated by 900 and gross profit and net profit are overstated by GHS 900. [4 marks]",
              "Step 4: (d) Discount allowed credited instead of debited reduces expenses twice over — it is short by 600 in the debit column, so net profit is overstated by GHS 600 while gross profit is unaffected because discount allowed is not a cost of sales item. [4 marks]"
            ],
            "keyTakeaway": "Test each error twice: does it touch cost of sales (gross profit), or only overheads and income (net profit only)?"
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=lmQ7D32Btz0",
    "youtubeId": "lmQ7D32Btz0",
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
"commonMistakes":         [
            "Charging the full amount of insurance paid in advance as an expense of the year.",
            "Adding closing stock to purchases instead of deducting it when computing cost of sales.",
            "Providing for depreciation on land, which is not depreciated.",
            "Recording accrued expenses as income because they are unpaid.",
            "Writing off a bad debt in the year it occurs rather than crediting the receivable account directly."
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
"examples":       [
          {
            "id": "ex-fac-05-1",
            "title": "Year-End Adjustments with Effect on Final Accounts",
            "problem": "Ofori's books at 31 December 2025 show these figures before adjustment: insurance paid GHS 1,800 covering 1 October 2025 to 30 September 2026; rent received in advance GHS 900 for one quarter; depreciation on machinery 10 per cent straight line, machinery cost GHS 24,000; accrued wages GHS 650; doubtful debts provision to be raised at 5 per cent of debtors of GHS 14,000; closing stock GHS 5,200. Required: the adjustment entries and the amount charged or credited in the income statement for each. [20 marks]",
            "stepByStepSolution": [
              "Step 1: Prepaid insurance: 9 of the 12 months fall in the next year, so prepayment = 1,800 × 9/12 = GHS 1,350; expense charged = 1,800 − 1,350 = GHS 450. Dr Prepaid Insurance 1,350, Cr Insurance expense 1,350. [4 marks]",
              "Step 2: Rent received in advance GHS 900 is a liability; Dr Rent Income 900, Cr Outstanding Rent (current liability) 900, so only the earned portion remains in income. [3 marks]",
              "Step 3: Depreciation = 24,000 × 10 per cent = GHS 2,400; Dr Depreciation expense 2,400, Cr Accumulated Depreciation 2,400. [3 marks]",
              "Step 4: Accrued wages GHS 650; Dr Wages expense 650, Cr Accrued Wages (current liability) 650. [3 marks]",
              "Step 5: Provision for doubtful debts = 14,000 × 5 per cent = GHS 700; Dr Increase in Provision (expense) 700, Cr Provision for Doubtful Debts 700, assuming no opening provision. [3 marks]",
              "Step 6: Closing stock of GHS 5,200 is removed from the trading account cost of sales and shown as a current asset: Dr Closing Stock 5,200, Cr Trading Account 5,200. [1 mark]"
            ],
            "keyTakeaway": "Each adjustment has two effects, one in the income statement and one in the statement of financial position; write both or the trial balance will not agree."
          },
          {
            "id": "ex-fac-05-2",
            "title": "Adjusting for Depreciation on Disposal",
            "problem": "A vehicle bought on 1 January 2023 for GHS 36,000 is sold on 30 September 2025 for GHS 12,000. Depreciation is at 20 per cent per annum on the reducing balance method, and the firm charges a full year in the year of purchase and none in the year of disposal. Required: (a) accumulated depreciation to the date of disposal; (b) profit or loss on disposal. [15 marks]",
            "stepByStepSolution": [
              "Step 1: Year 2023 depreciation = 36,000 × 20 per cent = 7,200; carrying amount = 28,800. [3 marks]",
              "Step 2: Year 2024 depreciation = 28,800 × 20 per cent = 5,760; carrying amount = 23,040. [3 marks]",
              "Step 3: No charge in the year of disposal under the stated policy, so accumulated depreciation = 7,200 + 5,760 = GHS 12,960. [3 marks]",
              "Step 4: Net book value at disposal = 36,000 − 12,960 = GHS 23,040. [2 marks]",
              "Step 5: Loss on disposal = proceeds − net book value = 12,000 − 23,040 = GHS (11,040), a loss charged to the income statement. [4 marks]"
            ],
            "keyTakeaway": "Disposal always needs three lines: cost removed, accumulated depreciation removed, proceeds recorded, and the residual difference is the profit or loss."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=QzqxyM0l-Do",
    "youtubeId": "QzqxyM0l-Do",
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
"commonMistakes":         [
            "Deducting drawings as a business expense in the income statement.",
            "Using the sales figure inclusive of VAT as the revenue line in the income statement.",
            "Adding opening stock to cost of sales instead of subtracting it.",
            "Charging non-current assets to the purchases account, which destroys the gross profit figure.",
            "Showing carriage inward in the balance sheet instead of adding it to cost of sales."
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
"examples":       [
          {
            "id": "ex-fac-06-1",
            "title": "Preparing the Income Statement and Statement of Financial Position Extract",
            "problem": "From Kwabena's adjusted trial balance at 31 December 2025 (GHS): Sales 210,000; Purchases 128,000; Carriage inward 3,400; Carriage outward 2,600; Opening stock 19,000; Closing stock 24,500; Wages 32,000; Rent 14,400; Insurance 2,300; Depreciation on equipment 4,800; Bad debts 900; Trade receivables 41,000; Trade payables 26,300; Bank 18,700; Equipment at cost 48,000; Accumulated depreciation 9,600; Capital 1 January 2025 88,000; Drawings 7,200. Required: income statement for the year and a statement of financial position extract showing net assets and capital. [25 marks]",
            "stepByStepSolution": [
              "Step 1: Cost of sales = opening stock 19,000 + purchases 128,000 + carriage inward 3,400 − closing stock 24,500 = GHS 125,900. [5 marks: 1 each correct component and total]",
              "Step 2: Gross profit = sales 210,000 − cost of sales 125,900 = GHS 84,100. [3 marks]",
              "Step 3: Overheads = wages 32,000 + rent 14,400 + insurance 2,300 + depreciation 4,800 + bad debts 900 + carriage outward 2,600 = GHS 57,000. Carriage outward is a distribution cost, never part of cost of sales. [5 marks]",
              "Step 4: Net profit = 84,100 − 57,000 = GHS 27,100. [2 marks]",
              "Step 5: Closing capital = opening 88,000 + net profit 27,100 − drawings 7,200 = GHS 107,900. [4 marks]",
              "Step 6: Net assets = equipment (48,000 − 9,600) 38,400 + receivables 41,000 + bank 18,700 + closing stock 24,500 − payables 26,300 = GHS 96,300. [4 marks]",
              "Step 7: Reconcile: net assets 96,300 must equal closing capital 107,900; the 11,600 difference proves an omitted item (here the closing stock was counted once in cost of sales and once as an asset, so it is deducted from the asset side or added back to capital, and the corrected net assets = GHS 107,900 once the double counting is removed). [2 marks]"
            ],
            "keyTakeaway": "Close the statement with the capital reconciliation; if net assets and closing capital disagree, an item has been double counted or missed."
          },
          {
            "id": "ex-fac-06-2",
            "title": "Trading Account with Multiple Adjustments",
            "problem": "A trader has sales of GHS 96,000 for the year. Purchases were GHS 61,500, less returns outwards of GHS 2,000 and including goods of GHS 3,000 taken by the owner for personal use. Opening stock was GHS 12,400 and closing stock GHS 14,800. Carriage inward GHS 1,800. Required: gross profit margin as a percentage. [12 marks]",
            "stepByStepSolution": [
              "Step 1: Net purchases = 61,500 − 2,000 returns outwards − 3,000 drawings of goods = GHS 56,500. [4 marks]",
              "Step 2: Cost of sales = 12,400 + 56,500 + 1,800 − 14,800 = GHS 55,900. [4 marks]",
              "Step 3: Gross profit = 96,000 − 55,900 = GHS 40,100. [2 marks]",
              "Step 4: Gross profit margin = 40,100 ÷ 96,000 × 100 = 41.77 per cent. [2 marks]"
            ],
            "keyTakeaway": "Goods taken by the owner reduce purchases and drawings, not sales; the margin is always computed on net sales."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=7dUBuw3CmB4",
    "youtubeId": "7dUBuw3CmB4",
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
"commonMistakes":         [
            "Adding factory overheads to administrative overheads in the trading account.",
            "Omitting the adjustment for opening and closing work in progress from cost of production.",
            "Charging factory rent to the income statement as an admin expense.",
            "Valuing finished goods at selling price rather than production cost.",
            "Forgetting that abnormal wastage is excluded from cost of production and written off direct."
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
"examples":       [
          {
            "id": "ex-fac-07-1",
            "title": "Manufacturing Account and Income Statement",
            "problem": "Akosongo Ltd's figures for the year ended 31 May 2025 (GHS): Raw material purchases 84,000; Opening raw materials 12,000; Closing raw materials 9,500; Direct labour 46,000; Factory rent 18,000; Factory lighting and power 6,400; Factory supervision 11,000; Depreciation on plant 9,600; Opening work in progress 7,200; Closing work in progress 5,400; Opening finished goods 14,000; Closing finished goods 16,800; Sales 240,000; Administration expenses 22,000; Selling and distribution expenses 17,500. Required: manufacturing account, cost of sales section and income statement. [25 marks]",
            "stepByStepSolution": [
              "Step 1: Raw materials consumed = 12,000 + 84,000 − 9,500 = GHS 86,500. [3 marks]",
              "Step 2: Prime cost = 86,500 + direct labour 46,000 = GHS 132,500. [3 marks]",
              "Step 3: Factory overheads = 18,000 + 6,400 + 11,000 + 9,600 = GHS 45,000. [4 marks]",
              "Step 4: Cost of production = 132,500 + 45,000 + opening WIP 7,200 − closing WIP 5,400 = GHS 179,300. [5 marks]",
              "Step 5: Cost of sales = 179,300 + opening finished goods 14,000 − closing finished goods 16,800 = GHS 176,500. [4 marks]",
              "Step 6: Gross profit = 240,000 − 176,500 = GHS 63,500. [2 marks]",
              "Step 7: Net profit = 63,500 − administration 22,000 − selling and distribution 17,500 = GHS 24,000. [4 marks]"
            ],
            "keyTakeaway": "Three stages must stay separate: prime cost, add factory overheads to reach cost of production, then adjust for finished goods to reach cost of sales."
          },
          {
            "id": "ex-fac-07-2",
            "title": "Treatment of Abnormal and Normal Loss",
            "problem": "A factory introduces 20,000 units of raw material costing GHS 60,000, plus labour GHS 30,000 and overheads GHS 20,000. 5 per cent of input is a normal loss expected in the process. Actual output for the period was 17,800 units. Required: (a) the expected output; (b) the cost per unit; (c) the value of abnormal loss or gain. [15 marks]",
            "stepByStepSolution": [
              "Step 1: Normal loss = 20,000 × 5 per cent = 1,000 units, so expected output = 19,000 units. [3 marks]",
              "Step 2: Total process cost = 60,000 + 30,000 + 20,000 = GHS 110,000, and no cost is attached to normal loss. [3 marks]",
              "Step 3: Cost per unit = 110,000 ÷ 19,000 = GHS 5.7895 per unit. [3 marks]",
              "Step 4: Actual output 17,800 units is 1,200 units below expected output, so an abnormal loss of 1,200 units arises. [3 marks]",
              "Step 5: Abnormal loss valued at 1,200 × 5.7895 = GHS 6,947.40, charged to the income statement as a period cost and excluded from cost of production. [3 marks]"
            ],
            "keyTakeaway": "Normal loss shares the cost among good units; abnormal loss is valued at full cost and written straight to the income statement."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=lhxzgYw2DJg",
    "youtubeId": "lhxzgYw2DJg",
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
"commonMistakes":         [
            "Preparing a trading account for a club that has no trading activity.",
            "Charging subscription income received in advance to the income and expenditure account.",
            "Treating the sale of old furniture as a revenue receipt.",
            "Writing off the entire cost of a newly acquired asset to the income and expenditure account in one year.",
            "Ignoring the opening balance sheet of a club when computing the closing capital (accumulated fund)."
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
"examples":       [
          {
            "id": "ex-fac-08-1",
            "title": "Income and Expenditure Account with Subscription Adjustments",
            "problem": "A reading club's receipts and payments for the year ended 30 June 2025 show: subscriptions received GHS 42,000; rent paid GHS 9,600; refreshments GHS 6,300; printing GHS 1,900; proceeds from sale of old chairs GHS 750; donation received GHS 5,000. Subscriptions were GHS 3,200 in arrears at 1 July 2024 and GHS 4,100 in arrears at 30 June 2025, with GHS 1,500 received in advance at 1 July 2024 and GHS 2,000 in advance at 30 June 2025. Rent was GHS 1,200 unpaid at the year end. Required: income and expenditure account for the year. [20 marks]",
            "stepByStepSolution": [
              "Step 1: Subscriptions for the year = 42,000 − 3,200 arrears brought forward + 4,100 arrears carried forward − 1,500 advance brought forward + 2,000 advance carried forward. [4 marks]",
              "Step 2: 42,000 − 3,200 = 38,800; + 4,100 = 42,900; − 1,500 = 41,400; + 2,000 = GHS 43,400 income from subscriptions. [3 marks]",
              "Step 3: Rent charged = 9,600 paid + 1,200 outstanding = GHS 10,800. [3 marks]",
              "Step 4: Refreshments 6,300 and printing 1,900 are both revenue expenses charged in full. [2 marks]",
              "Step 5: Proceeds of GHS 750 from old chairs and the donation of GHS 5,000 are excluded from the income and expenditure account; the proceeds go to the disposal of fixed assets and the donation to the capital side as a capital or restricted receipt. [3 marks]",
              "Step 6: Surplus = 43,400 − (10,800 + 6,300 + 1,900) = 43,400 − 19,000 = GHS 24,400, transferred to the accumulated fund. [5 marks]"
            ],
            "keyTakeaway": "Only revenue items belonging to the period are charged; capital receipts and trading profits of a club bypass the income and expenditure account."
          },
          {
            "id": "ex-fac-08-2",
            "title": "Reconciling the Accumulated Fund",
            "problem": "A parents association had an accumulated fund of GHS 31,000 at 1 January 2025. During the year it recorded a surplus of GHS 8,400, sold equipment with a net book value of GHS 2,000 for GHS 2,600, and the treasurer donated kitchenware valued at GHS 1,100 to the association. Required: accumulated fund at 31 December 2025. [12 marks]",
            "stepByStepSolution": [
              "Step 1: Opening accumulated fund = GHS 31,000. [1 mark]",
              "Step 2: Add the surplus for the year GHS 8,400. [3 marks]",
              "Step 3: Add the profit on disposal of 2,600 − 2,000 = GHS 600. [3 marks]",
              "Step 4: Add the donated kitchenware valued at GHS 1,100, credited to the fund and added to assets. [3 marks]",
              "Step 5: Closing accumulated fund = 31,000 + 8,400 + 600 + 1,100 = GHS 41,100. [2 marks]"
            ],
            "keyTakeaway": "The accumulated fund moves exactly like capital: surplus, capital profits and donations in, losses out."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=Lcig9kbGPoY",
    "youtubeId": "Lcig9kbGPoY",
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
"commonMistakes":         [
            "Applying interest on capital before the profit is known, so the appropriation total exceeds distributable profit.",
            "Splitting the residual profit equally when the agreement says profit-sharing ratio.",
            "Debiting salaries drawn by partners to the income statement as a business expense.",
            "Ignoring a partner who joined part way through the year when allocating interest on capital.",
            "Recording goodwill in the books when no payment has been made for it."
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
"examples":       [
          {
            "id": "ex-fac-09-1",
            "title": "Appropriation Account and Current Accounts",
            "problem": "Adjei and Bonsu share profits in the ratio 3 : 2. Their capital accounts show GHS 60,000 and GHS 40,000. The partnership agreement provides: interest on capital at 6 per cent per annum, Adjei's salary of GHS 8,000 a year, and residual profit shared equally. For the year ended 31 December 2025 the profit before appropriations was GHS 31,000, and both partners withdrew GHS 5,000 each. Required: the appropriation schedule and the effect on current accounts. [20 marks]",
            "stepByStepSolution": [
              "Step 1: Interest on capital = 60,000 × 6 per cent = 3,600 for Adjei and 40,000 × 6 per cent = 2,400 for Bonsu; total 6,000. [4 marks]",
              "Step 2: Partner salary 8,000 is an appropriation, not an expense, so it is deducted after interest. [2 marks]",
              "Step 3: Residual profit = 31,000 − 6,000 − 8,000 = GHS 17,000. [3 marks]",
              "Step 4: Residual shared equally = 8,500 each. [3 marks]",
              "Step 5: Total shares — Adjei 3,600 + 8,000 + 8,500 = GHS 20,100; Bonsu 2,400 + 8,500 = GHS 10,900; sum 31,000, which proves the appropriation is complete. [4 marks]",
              "Step 6: Current accounts: each partner is credited with the share of profit and debited with drawings of 5,000, so balances move by +15,100 for Adjei and +5,900 for Bonsu. [4 marks]"
            ],
            "keyTakeaway": "Appropriations are always in the fixed order: interest on capital, partner salary, then residual in the agreed ratio, and the total must equal distributable profit."
          },
          {
            "id": "ex-fac-09-2",
            "title": "Admission of a New Partner with Goodwill",
            "problem": "Mensah and Osei share profits 2 : 1 and their capitals are GHS 50,000 and GHS 30,000. Adjoa is admitted on 1 January 2025 for a one quarter share, bringing cash of GHS 25,000 as capital and paying GHS 9,000 for goodwill in cash, which stays in the business. The new profit-sharing ratio is 2 : 1 : 1. Required: the journal entries and the effect on capital accounts. [18 marks]",
            "stepByStepSolution": [
              "Step 1: Record Adjoa's cash capital: Dr Bank 25,000, Cr Adjoa Capital 25,000. [3 marks]",
              "Step 2: Record premium for goodwill brought in cash and retained: Dr Bank 9,000, Cr Goodwill 9,000 — since it remains in the books, goodwill is raised in the name of the old partners in their old ratio. [4 marks]",
              "Step 3: Split the goodwill credit to Mensah 6,000 and Osei 3,000, in the old ratio 2 : 1. [4 marks]",
              "Step 4: Capital balances after admission: Mensah 56,000, Osei 33,000, Adjoa 25,000. [3 marks]",
              "Step 5: Note that the old ratio 2 : 1 becomes 2 : 1 : 1, so the sacrificing ratio is nil for Osei and one twelfth for Mensah; because goodwill was retained in full, no further compensation entry is needed. [4 marks]"
            ],
            "keyTakeaway": "Distinguish private goodwill (paid between partners personally) from business goodwill (paid in and retained), because only the latter touches the bank."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=ezyce6aVz2k",
    "youtubeId": "ezyce6aVz2k",
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
"commonMistakes":         [
            "Revaluing only the assets that have increased and ignoring those that have fallen.",
            "Writing goodwill to the old partners in the NEW ratio when it is raised on a change in ownership.",
            "Carrying on the old profit-sharing ratio after a partner dies.",
            "Omitting interest on the deceased partner's loan from the date of death to the payment date.",
            "Transferring accumulated losses when a partner retires."
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
"examples":       [
          {
            "id": "ex-fac-10-1",
            "title": "Retirement with Goodwill and Revaluation",
            "problem": "Baah, Cutter and Doku share profits 4 : 3 : 2. Baah retires on 30 June 2025. Agreement: goodwill valued at GHS 45,000, premises revalued upward by GHS 30,000, stock written down by GHS 4,000, and a provision for legal claim of GHS 6,000 created. Baah's capital balance before adjustments is GHS 58,000 and his current account GHS 2,500 credit. Required: the revaluation and goodwill entries and the amount due to Baah. [20 marks]",
            "stepByStepSolution": [
              "Step 1: Revaluation gain on premises 30,000 shared 4 : 3 : 2 gives Baah 13,333.33, Cutter 10,000, Doku 6,666.67. Dr Premises 30,000, Cr Capital accounts in the old ratio. [5 marks]",
              "Step 2: Stock write-down 4,000 shared 4 : 3 : 2 gives Baah 1,777.78, Cutter 1,333.33, Doku 888.89; Dr Capital accounts, Cr Stock 4,000. [4 marks]",
              "Step 3: Provision for claim 6,000 shared in the same ratio: Baah 2,666.67, Cutter 2,000, Doku 1,333.33; Dr Capital accounts, Cr Provision 6,000. [4 marks]",
              "Step 4: Goodwill 45,000 raised in the old ratio gives Baah 20,000, Cutter 15,000, Doku 10,000, then credited out to Baah alone in the gaining ratio so the continuing partners bear it. [3 marks]",
              "Step 5: Amount due to Baah = 58,000 + 13,333.33 − 1,777.78 − 2,666.67 + 20,000 + 2,500 = GHS 89,388.88. [4 marks]"
            ],
            "keyTakeaway": "Every revaluation adjustment passes through the capital accounts in the OLD ratio, and the retiring partner is settled from capital plus current account."
          },
          {
            "id": "ex-fac-10-2",
            "title": "Death of a Partner with Part-Year Appropriations",
            "problem": "Ebow and Fosu share profits 3 : 2. Ebow dies on 30 September 2025. Profit for the year to 31 December 2025 is GHS 40,000, deemed to accrue evenly. Ebow's capital was GHS 44,000 and his drawings to the date of death GHS 3,000. Interest on capital is 5 per cent per annum. Required: the amount payable to Ebow's estate. [15 marks]",
            "stepByStepSolution": [
              "Step 1: Share of profit to 30 September = 40,000 × 9/12 × 3/5 = GHS 18,000. [4 marks]",
              "Step 2: Interest on capital to date of death = 44,000 × 5 per cent × 9/12 = GHS 1,650. [4 marks]",
              "Step 3: Total additions = 18,000 + 1,650 = GHS 19,650. [2 marks]",
              "Step 4: Deduct drawings of GHS 3,000. [2 marks]",
              "Step 5: Amount due to the estate = 44,000 + 19,650 − 3,000 = GHS 60,650. [3 marks]"
            ],
            "keyTakeaway": "On death, time-apportion both the profit and the interest on capital; the personal representative is entitled only to the period actually served."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=UV5QDV4HYIM",
    "youtubeId": "UV5QDV4HYIM",
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
"commonMistakes":         [
            "Selling book assets privately and crediting the proceeds to the realisation account.",
            "Paying a partner's private loan from the business before firm creditors.",
            "Ignoring the rule in Garner v Murray when a partner is insolvent.",
            "Closing the realisation account before all assets are realised and liabilities settled.",
            "Sharing a capital loss in the profit-sharing ratio instead of the capital ratio when the agreement is silent."
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
"examples":       [
          {
            "id": "ex-fac-11-1",
            "title": "Realisation Account on Dissolution",
            "problem": "Gyan, Halm and Issah share profits 5 : 3 : 2. On dissolution on 31 August 2025 the balances are: capital Gyan 40,000, Halm 30,000, Issah 10,000; premises 62,000; equipment 24,000; stock 15,000; receivables 18,000; bank 6,000; payables 21,000; accrued expenses 3,000. Realisations: premises 71,000, equipment 19,500, stock 12,000, receivables 15,600. Halm agreed to take over the equipment at 21,000. Realisation expenses of 1,800 were paid by Gyan. Required: the realisation account and the loss shared. [25 marks]",
            "stepByStepSolution": [
              "Step 1: Transfer book values of assets to the debit of realisation: 62,000 + 24,000 + 15,000 + 18,000 = GHS 119,000. [4 marks]",
              "Step 2: Transfer liabilities to the credit: payables 21,000 + accrued 3,000 = GHS 24,000. [3 marks]",
              "Step 3: Record proceeds: premises 71,000, stock 12,000, receivables 15,600 = 98,600 credit. [4 marks]",
              "Step 4: Halm takes equipment at 21,000, credited to realisation and debited to his capital account. [3 marks]",
              "Step 5: Realisation expenses 1,800 debited to the realisation account. [3 marks]",
              "Step 6: Total debits = 119,000 + 1,800 = 120,800; total credits = 24,000 + 98,600 + 21,000 = 143,600. [4 marks]",
              "Step 7: Profit on realisation = 143,600 − 120,800 = GHS 22,800, shared 5 : 3 : 2 as 11,400, 6,840 and 4,560. [4 marks]"
            ],
            "keyTakeaway": "The realisation account balances once every asset is either sold or taken over and every liability settled; the residual figure is the profit or loss on realisation."
          },
          {
            "id": "ex-fac-11-2",
            "title": "Dealing with an Insolvent Partner",
            "problem": "In the previous example, Issah can contribute only GHS 6,000 of the GHS 11,000 owing to him after all settlements, so he is insolvent by GHS 5,000. Required: show how the shortfall is borne by Gyan and Halm under the rule in Garner v Murray. [10 marks]",
            "stepByStepSolution": [
              "Step 1: Under Garner v Murray the loss arising from a partner's insolvency is borne in the CAPITAL ratio, not the profit-sharing ratio, because it is a capital loss. [3 marks]",
              "Step 2: Gyan and Halm capital contributions before the shortfall are 51,400 and 36,840; their relative capitals are therefore 51,400 : 36,840. [3 marks]",
              "Step 3: Shortfall of 5,000 shared: Gyan bears 5,000 × 51,400 ÷ 88,240 = GHS 2,912.06; Halm bears 5,000 × 36,840 ÷ 88,240 = GHS 2,087.94. [4 marks]"
            ],
            "keyTakeaway": "Insolvency of a partner shifts a capital loss, and capital losses fall on the capital ratio unless the partnership deed says otherwise."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=ATCqrvyE3uc",
    "youtubeId": "ATCqrvyE3uc",
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
"commonMistakes":         [
            "Debiting the share application account with the allotment amount instead of transferring only the relevant sum.",
            "Charging issue expenses of shares to the income statement.",
            "Recording debenture interest as an appropriation rather than an expense.",
            "Ignoring calls in arrears when computing shares allotted and fully paid.",
            "Treating a share premium as distributable profit."
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
"examples":       [
          {
            "id": "ex-fac-12-1",
            "title": "Issue of Shares at a Premium with Applications and Refunds",
            "problem": "Tano Ltd invites applications for 200,000 ordinary shares of GHS 1 each at a premium of 50 pesewas, payable 20 pesewas on application, 30 pesewas on allotment and the balance on a call of 50 pesewas. Applications are received for 300,000 shares and allotment is made pro rata to applicants for 200,000 shares. Required: journal entries for application, allotment and the call, and the amount of share capital and share premium raised. [20 marks]",
            "stepByStepSolution": [
              "Step 1: Application money received = 300,000 × 0.20 = GHS 60,000; Dr Bank 60,000, Cr Share Application 60,000. [4 marks]",
              "Step 2: Excess application money refundable = 100,000 × 0.20 = GHS 20,000, and the amount transferable to allotment = 200,000 × 0.20 = GHS 40,000; Dr Share Application 60,000, Cr Share Allotment 40,000, Cr Bank 20,000. [5 marks]",
              "Step 3: Allotment due = 200,000 × (0.30 + 0.50 premium treated separately): the allotment call for capital is 0.30 and premium 0.50; Dr Share Allotment 60,000 and Dr Share Premium 100,000, Cr Share Capital 200,000. [4 marks]",
              "Step 4: Final call = 200,000 × 0.50 = GHS 100,000; Dr Share First and Final Call 100,000, Cr Share Capital 100,000. [3 marks]",
              "Step 5: Share capital raised = 200,000 × 1.00 = GHS 200,000 and share premium = 200,000 × 0.50 = GHS 100,000; total cash = GHS 300,000 less the 20,000 refund = GHS 280,000. [4 marks]"
            ],
            "keyTakeaway": "Share premium is a separate reserve that is not distributable as dividend; keep the premium and capital columns apart at every stage."
          },
          {
            "id": "ex-fac-12-2",
            "title": "Debentures and Interest Charge",
            "problem": "Asonsola Ltd issues 40,000 debentures of GHS 25 each at par on 1 April 2025 carrying interest at 9 per cent per annum, payable half yearly on 30 September and 31 March. Required: the entries on issue, the interest paid on 30 September 2025, and the charge to the income statement for the year ended 31 December 2025. [15 marks]",
            "stepByStepSolution": [
              "Step 1: Issue proceeds = 40,000 × 25 = GHS 1,000,000; Dr Bank 1,000,000, Cr 9 per cent Debentures 1,000,000. [4 marks]",
              "Step 2: Half-year interest = 1,000,000 × 9 per cent × 6/12 = GHS 45,000; Dr Debenture Interest 45,000, Cr Bank 45,000. [4 marks]",
              "Step 3: Accrued interest from 1 October to 31 December = 1,000,000 × 9 per cent × 3/12 = GHS 22,500; Dr Debenture Interest 22,500, Cr Accrued Interest 22,500. [4 marks]",
              "Step 4: Total charge to the income statement for the nine months to 31 December = 45,000 + 22,500 = GHS 67,500, deducted before profit before tax because debenture interest is a finance cost. [3 marks]"
            ],
            "keyTakeaway": "Debenture interest is an expense that must be accrued for the period, while dividend on shares is an appropriation paid only out of profit."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=mr1_jRtPcYQ",
    "youtubeId": "mr1_jRtPcYQ",
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
"commonMistakes":         [
            "Proposing a final dividend and treating it as a liability before the general meeting approves it.",
            "Charging directors fees to administration only after they have been paid.",
            "Presenting tax on profit as an appropriation of profit.",
            "Reconciling profit to operating profit instead of to profit before tax.",
            "Including the value of internally generated goodwill as an intangible asset."
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
"examples":       [
          {
            "id": "ex-fac-13-1",
            "title": "Statement of Profit or Loss for a Limited Liability Company",
            "problem": "From Volta Ltd's trial balance at 31 December 2025 (GHS): gross profit 148,000; distribution costs 32,000; administrative expenses 41,500; directors' fees 18,000; audit fee 6,000; debenture interest paid for nine months at 45,000 with 22,500 accrued; other interest income 8,000; corporation tax rate 25 per cent; ordinary share capital 400,000 shares of GHS 1 with an interim dividend of 5 pesewas paid; recommended final dividend 10 pesewas. Required: the statement of profit or loss and the note on dividends. [25 marks]",
            "stepByStepSolution": [
              "Step 1: Operating profit = 148,000 − 32,000 − 41,500 − 18,000 − 6,000 = GHS 50,500. [5 marks]",
              "Step 2: Finance costs = 45,000 paid + 22,500 accrued = GHS 67,500, deducted after operating profit. [5 marks]",
              "Step 3: Investment income of GHS 8,000 is added, giving profit before tax = 50,500 − 67,500 + 8,000 = GHS (8,900), a loss, so no corporation tax is charged. [5 marks]",
              "Step 4: Where a loss arises, tax charge is nil and the loss is carried forward; state this explicitly rather than entering a negative tax figure. [3 marks]",
              "Step 5: Interim dividend = 400,000 × 0.05 = GHS 20,000, shown in the notes and in the statement of changes in equity. [3 marks]",
              "Step 6: Final dividend of 400,000 × 0.10 = GHS 40,000 is NOT a liability at 31 December because it is only recommended; it is disclosed in the notes only. [4 marks]"
            ],
            "keyTakeaway": "Only dividends that are proposed before the year end or paid during the year reduce profit; a recommended final dividend is a note, not a charge."
          },
          {
            "id": "ex-fac-13-2",
            "title": "Reconciling Profit before Tax with Operating Cash Flow",
            "problem": "Pra line Ltd reports profit before tax of GHS 62,000 for 2025. Depreciation charged 18,000; profit on disposal of equipment 4,000; increase in inventory 7,500; increase in receivables 5,200; increase in payables 6,800; interest paid 12,000; tax paid 9,500. Required: cash generated from operations and net cash from operating activities. [15 marks]",
            "stepByStepSolution": [
              "Step 1: Start with profit before tax 62,000 and add back non-cash depreciation: 62,000 + 18,000 = GHS 80,000. [3 marks]",
              "Step 2: Deduct the non-operating profit on disposal: 80,000 − 4,000 = GHS 76,000. [3 marks]",
              "Step 3: Working capital movements: inventory up 7,500 and receivables up 5,200 absorb cash; payables up 6,800 releases cash. Net movement = −7,500 − 5,200 + 6,800 = GHS (5,900). [4 marks]",
              "Step 4: Cash generated from operations = 76,000 − 5,900 = GHS 70,100. [2 marks]",
              "Step 5: Net cash from operating activities = 70,100 − interest 12,000 − tax 9,500 = GHS 48,600. [3 marks]"
            ],
            "keyTakeaway": "The indirect method reverses non-cash and non-operating items first, then adjusts for working capital, then shows interest and tax as operating outflows."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=c8GMzUbxMqk",
    "youtubeId": "c8GMzUbxMqk",
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
"commonMistakes":         [
            "Charging the whole head-office rent to one department without a stated basis.",
            "Transferring goods between departments at cost when the policy says transfer price.",
            "Including opening stock of a department that closed during the year.",
            "Ignoring the abnormal wastage allowance when allocating overheads by floor area.",
            "Presenting a branch debtors balance as part of head office debtors without adjustment."
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
"examples":       [
          {
            "id": "ex-fac-14-1",
            "title": "Departmental Accounts with Overhead Apportionment",
            "problem": "Offin Stores runs a Shoe department and a Bag department for 2025. Sales: shoes GHS 120,000, bags GHS 80,000. Cost of goods: shoes 72,000, bags 46,000. Direct expenses: shoes 14,000, bags 9,000. Shared expenses total GHS 40,000 and are to be apportioned on floor area, shoes 600 m² and bags 400 m². Shoe department closing stock 18,000 and bag department 12,000, opening stock 15,000 and 10,000 respectively. Required: departmental trading and profit and loss accounts. [20 marks]",
            "stepByStepSolution": [
              "Step 1: Gross profit before stock adjustment — shoes: 120,000 − 72,000 = 48,000; bags: 80,000 − 46,000 = 34,000. [3 marks]",
              "Step 2: Adjust cost of sales for stock: shoes cost of sales = 72,000 + 15,000 − 18,000 = 69,000; bags = 46,000 + 10,000 − 12,000 = 44,000. [5 marks]",
              "Step 3: Revised gross profit — shoes 120,000 − 69,000 = GHS 51,000; bags 80,000 − 44,000 = GHS 36,000. [3 marks]",
              "Step 4: Apportion shared expenses on floor area: total 1,000 m², so shoes 60 per cent = GHS 24,000 and bags 40 per cent = GHS 16,000. [4 marks]",
              "Step 5: Net profit — shoes 51,000 − 14,000 − 24,000 = GHS 13,000; bags 36,000 − 9,000 − 16,000 = GHS 11,000. [3 marks]",
              "Step 6: Present each department separately and add a combined column, showing sales, cost of sales, gross profit, direct expenses, apportioned expenses and net profit. [2 marks]"
            ],
            "keyTakeaway": "Departmental accounting demands a stated basis for every shared cost; the basis must be shown as a note beside each apportioned figure."
          },
          {
            "id": "ex-fac-14-2",
            "title": "Branch Accounts at Invoice Price with Goods in Transit",
            "problem": "Head office sends goods costing GHS 60,000 to the Kumasi branch at an invoice price of 25 per cent above cost. The branch sells goods for GHS 74,000, incurs expenses of GHS 9,500, and at the year end goods costing GHS 7,000 are still in transit. Required: the goods sent to branch account, the branch stock account and the branch profit. [18 marks]",
            "stepByStepSolution": [
              "Step 1: Invoice price of goods sent = 60,000 × 1.25 = GHS 75,000; credit Goods Sent to Branch 75,000. [4 marks]",
              "Step 2: Load (mark-up) = 75,000 − 60,000 = GHS 15,000, credited to a Stock Reserve (Mark-up) account. [3 marks]",
              "Step 3: Goods in transit at year end are deducted from the branch adjustment: 7,000 of cost becomes 8,750 at invoice price. [4 marks]",
              "Step 4: Cost of goods actually received by the branch = 60,000 − 7,000 = GHS 53,000; gross profit at branch = 74,000 − 53,000 − branch expenses of 9,500 = GHS 11,500. [4 marks]",
              "Step 5: The stock reserve carried at the year end must be released as the goods are sold, so the head office profit on the branch is the branch net profit adjusted for the unrealised load on remaining stock. [3 marks]"
            ],
            "keyTakeaway": "When goods are sent at invoice price, separate the load into a stock reserve account so unrealised profit is not reported as earned."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=rIWeycaj7oQ",
    "youtubeId": "rIWeycaj7oQ",
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
"commonMistakes":         [
            "Computing capital as closing assets minus closing liabilities without removing profit and drawings.",
            "Using purchases instead of cost of sales when solving for credit sales by the gross profit mark-up method.",
            "Ignoring the cash sales column when reconciling debtors.",
            "Deducting drawings of goods from purchases without also reducing drawings.",
            "Assuming the markup on cost equals the margin on sales."
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
"examples":       [
          {
            "id": "ex-fac-15-1",
            "title": "Computing Profit from Incomplete Records by Comparative Statement of Affairs",
            "problem": "A trader's position: 1 January 2025 — premises 120,000, equipment 40,000, stock 18,000, receivables 12,400, cash at bank 9,600, payables 21,000, accrued expenses 3,400. 31 December 2025 — premises 130,000, equipment 36,500, stock 22,000, receivables 15,800, cash at bank 14,200, payables 24,600, accrued expenses 2,800. During the year he introduced GHS 10,000 and withdrew GHS 18,000. Required: profit for the year. [15 marks]",
            "stepByStepSolution": [
              "Step 1: Opening capital = opening assets (120,000 + 40,000 + 18,000 + 12,400 + 9,600 = 200,000) − opening liabilities (21,000 + 3,400 = 24,400) = GHS 175,600. [4 marks]",
              "Step 2: Closing assets = 130,000 + 36,500 + 22,000 + 15,800 + 14,200 = GHS 218,500. [2 marks]",
              "Step 3: Closing liabilities = 24,600 + 2,800 = GHS 27,400, so closing capital = 218,500 − 27,400 = GHS 191,100. [3 marks]",
              "Step 4: Movement in capital = 191,100 − 175,600 = GHS 15,500 increase. [2 marks]",
              "Step 5: Profit = increase in capital + drawings − additional capital = 15,500 + 18,000 − 10,000 = GHS 23,500. [4 marks]"
            ],
            "keyTakeaway": "Additional capital reduces the profit figure and drawings increase it, because both are capital movements rather than income."
          },
          {
            "id": "ex-fac-15-2",
            "title": "Reconstructing Credit Sales from the Debtors Account",
            "problem": "A trader has opening debtors of GHS 22,000 and closing debtors of GHS 26,500. Cash received from debtors during the year was GHS 148,000, discounts allowed GHS 2,300, returns inwards GHS 4,100, and a bad debt of GHS 1,800 was written off. Required: credit sales for the year. [10 marks]",
            "stepByStepSolution": [
              "Step 1: Set the debtors account: debit side opening balance 22,000 plus credit sales X; credit side receipts 148,000, discount 2,300, returns 4,100, bad debt 1,800 and closing balance 26,500. [4 marks]",
              "Step 2: Total credits = 148,000 + 2,300 + 4,100 + 1,800 + 26,500 = GHS 182,700. [2 marks]",
              "Step 3: Credit sales = 182,700 − 22,000 = GHS 160,700. [4 marks]"
            ],
            "keyTakeaway": "Control-account logic solves almost every incomplete-records question: build the account with one unknown and balance it."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=B9xPqYZDkSE",
    "youtubeId": "B9xPqYZDkSE",
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
"commonMistakes":         [
            "Posting individual ledger balances into the control account total as well, which double counts.",
            "Omitting cash received by the business from a credit customer from the sales ledger control account.",
            "Forgetting set-off between a customer who is also a supplier.",
            "Debiting the purchases ledger control account for returns outwards instead of crediting it.",
            "Balancing the control account without showing the balance carried down twice."
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
"examples":       [
          {
            "id": "ex-fac-16-1",
            "title": "Preparing the Sales Ledger Control Account",
            "problem": "For the month of May 2025 the following totals are available (GHS): opening balance of trade receivables 34,600; credit sales day book 78,400; cash received from receivables 61,200; discount allowed 1,400; returns inwards 2,900; bad debts written off 1,850; cash sales banked 4,300. Required: the sales ledger control account and the closing balance. [15 marks]",
            "stepByStepSolution": [
              "Step 1: Debit side: balance b/d 34,600 and credit sales 78,400 = GHS 113,000. Cash sales are excluded because they never pass through receivables. [4 marks]",
              "Step 2: Credit side entries: bank (receipts) 61,200, discount allowed 1,400, returns inwards 2,900, bad debts 1,850 = 67,350. [5 marks]",
              "Step 3: Closing balance c/d = 113,000 − 67,350 = GHS 45,650. [3 marks]",
              "Step 4: Bring the balance down on 1 June as a debit of GHS 45,650 so the account is properly balanced. [3 marks]"
            ],
            "keyTakeaway": "Cash sales and cash purchases never appear in a control account; only credit transactions and their settlements do."
          },
          {
            "id": "ex-fac-16-2",
            "title": "Reconciling Control Account with the List of Balances",
            "problem": "The sales ledger control account shows a balance of GHS 45,650 while the individual customer balances total GHS 44,910. Investigation reveals: (a) a credit note of GHS 800 issued to Ama was posted to her account but not to the control account; (b) a customer balance of GHS 650 was written off as a bad debt in the control account but not in his personal account; (c) sales of GHS 1,240 were entered in the sales day book as 1,420. Required: reconcile the two figures. [15 marks]",
            "stepByStepSolution": [
              "Step 1: Adjust the list of balances: deduct the credit note 800 not recorded there? The credit note IS in the personal accounts, so the list is already correct for (a) while the control account is overstated by 800. [4 marks]",
              "Step 2: For (b), the customer account must be reduced by 650, so the list of balances falls from 44,910 to GHS 44,260. [4 marks]",
              "Step 3: For (c), the control account was overstated by 180 (1,420 − 1,240), so it falls from 45,650 to GHS 45,470. [4 marks]",
              "Step 4: After (a), the control account falls by a further 800 to GHS 44,670. [2 marks]",
              "Step 5: Final comparison: control account 44,670 against list of balances 44,260, leaving a difference of GHS 410 which must be reported as still to be found, not forced. [1 mark]"
            ],
            "keyTakeaway": "Adjust each side separately, then compare; a residual difference is itself the answer the examiner expects you to disclose."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=YA-RAVPOZeg",
    "youtubeId": "YA-RAVPOZeg",
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
"commonMistakes":         [
            "Using average inventory where opening inventory alone is available and the question demands closing inventory.",
            "Confusing the current ratio with the acid test by leaving inventory in both.",
            "Expressing a ratio as a percentage when it should be stated as a multiple, or the reverse.",
            "Computing gross profit margin on gross profit instead of net sales.",
            "Comparing two years of ratios without noting a change in inventory or depreciation policy."
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
"examples":       [
          {
            "id": "ex-fac-17-1",
            "title": "Liquidity and Profitability Ratio Set",
            "problem": "Aburi Foods reports for 2025 (GHS): revenue 320,000; cost of sales 198,000; net profit before tax 26,400; inventory opening 22,000 and closing 26,000; receivables 34,000; payables 28,500; cash and bank 12,000; short-term borrowings 15,000. Required: gross profit margin, current ratio, acid test ratio, receivables collection period in days, and return on capital employed if capital employed is 140,000. [25 marks]",
            "stepByStepSolution": [
              "Step 1: Gross profit = 320,000 − 198,000 = 122,000; margin = 122,000 ÷ 320,000 × 100 = 38.13 per cent. [4 marks]",
              "Step 2: Current assets = 26,000 + 34,000 + 12,000 = GHS 72,000; current liabilities = 28,500 + 15,000 = GHS 43,500. [5 marks]",
              "Step 3: Current ratio = 72,000 ÷ 43,500 = 1.65 : 1. [4 marks]",
              "Step 4: Acid test = (72,000 − 26,000) ÷ 43,500 = 46,000 ÷ 43,500 = 1.06 : 1. [4 marks]",
              "Step 5: Receivables days = 34,000 ÷ 320,000 × 365 = 38.8 days. [4 marks]",
              "Step 6: Return on capital employed = 26,400 ÷ 140,000 × 100 = 18.86 per cent. [4 marks]"
            ],
            "keyTakeaway": "State every ratio with its unit — a multiple for liquidity and a percentage for profitability — and interpret it in one sentence."
          },
          {
            "id": "ex-fac-17-2",
            "title": "Interpreting a Deteriorating Position",
            "problem": "A company reports a gross profit margin of 42 per cent in 2024 and 35 per cent in 2025, while its current ratio falls from 2.1 to 1.3 and inventory days rise from 60 to 95. Required: explain what has happened and advise management. [12 marks]",
            "stepByStepSolution": [
              "Step 1: The margin has fallen by 7 percentage points, meaning cost of sales rose faster than revenue, or prices were cut; either way selling pressure is squeezing profit. [3 marks]",
              "Step 2: The current ratio falling to 1.3 shows liquidity is tightening, and because inventory days rose from 60 to 95, part of the current assets is now slow-moving stock rather than cash. [3 marks]",
              "Step 3: The combination indicates obsolete or unsold inventory: it depresses the margin through write-downs and lengthens the holding period. [3 marks]",
              "Step 4: Advise management to run an inventory review, clear slow lines at discount, renegotiate supplier credit terms, and reprice rather than deepen discounting. [3 marks]"
            ],
            "keyTakeaway": "WASSCE awards most marks for the interpretation, not the calculation — always link two ratios to explain one another."
          }
        ],
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
    "youtubeUrl": "https://www.youtube.com/watch?v=3NeVwnqaebk",
    "youtubeId": "3NeVwnqaebk",
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
"commonMistakes":         [
            "Charging VAT on zero-rated items and reporting output VAT on them.",
            "Recovering input VAT on a motor car for the proprietor where relief is blocked.",
            "Adding VAT to the invoice total when computing the net amount in the purchases account.",
            "Recording PAYE as an expense of the employer rather than a deduction from gross pay.",
            "Treating VAT registered purchases of non-current assets as having no input VAT at all."
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
"examples":       [
          {
            "id": "ex-fac-18-1",
            "title": "VAT Return and Net Payable to GRA",
            "problem": "A registered dealer records for January 2026 (GHS): standard-rated sales 120,000 exclusive of VAT; zero-rated sales 30,000; standard-rated purchases 74,000 inclusive of VAT at 15 per cent; purchases of a delivery van 46,000 exclusive of VAT; irrecoverable bad debt of 5,800 inclusive of VAT. Required: output VAT, input VAT, and the net amount due to or from the GRA. [20 marks]",
            "stepByStepSolution": [
              "Step 1: Output VAT = 120,000 × 15 per cent = GHS 18,000; zero-rated sales attract no VAT but are still declared. [4 marks]",
              "Step 2: Purchases of 74,000 inclusive of VAT have a net cost of 74,000 ÷ 1.15 = GHS 64,347.83 and input VAT of GHS 9,652.17. [5 marks]",
              "Step 3: Van purchase input VAT = 46,000 × 15 per cent = GHS 6,900, recoverable to the extent the van is used for taxable supplies. [3 marks]",
              "Step 4: Total input VAT = 9,652.17 + 6,900 = GHS 16,552.17. [2 marks]",
              "Step 5: Net VAT due to GRA = 18,000 − 16,552.17 = GHS 1,447.83. [3 marks]",
              "Step 6: The bad debt of 5,800 allows VAT relief on the unpaid output VAT of 5,800 − 5,800 ÷ 1.15 = GHS 756.52, reducing the amount due to GHS 691.31 once a written-off debt claim is filed. [3 marks]"
            ],
            "keyTakeaway": "Output VAT is computed on the net figure while input VAT is extracted from gross figures; only the difference is remitted."
          },
          {
            "id": "ex-fac-18-2",
            "title": "Payroll: Gross to Net Pay with Statutory Deductions",
            "problem": "A worker at Tema earns a gross monthly salary of GHS 3,600. Statutory deductions: SSF tier 1 at 13.5 per cent of gross, and PAYE income tax of GHS 268 for the bracket. The employer's tier 2 contribution is 13 per cent. A housing loan repayment of GHS 150 is deducted under an approved scheme. Required: net pay, total cost to the employer, and the payroll journal entries. [18 marks]",
            "stepByStepSolution": [
              "Step 1: SSF tier 1 (employee) = 3,600 × 13.5 per cent = GHS 486. [3 marks]",
              "Step 2: PAYE = GHS 268 as given, withheld by the employer as agent. [2 marks]",
              "Step 3: Housing loan = GHS 150 deducted and remitted to the lender. [2 marks]",
              "Step 4: Net pay = 3,600 − 486 − 268 − 150 = GHS 2,696 credited to the employee's bank. [4 marks]",
              "Step 5: Employer tier 2 = 3,600 × 13 per cent = GHS 468, so total payroll cost = 3,600 + 468 = GHS 4,068. [3 marks]",
              "Step 6: Journal: Dr Wages and Salaries 3,600; Cr Bank 2,696; Cr SSF Payable 486; Cr PAYE Withholding Payable 268; Cr Housing Loan Payable 150. Then Dr Employer SSF Contribution 468, Cr SSF Payable 468. [4 marks]"
            ],
            "keyTakeaway": "PAYE and SSF tier 1 are liabilities owed on someone else's behalf, so they are never expenses of the employer; only tier 2 is an expense."
          }
        ],
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
