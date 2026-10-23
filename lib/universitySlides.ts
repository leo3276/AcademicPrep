// University Slides Intelligence & Strategic Study Planner Engine
// Provides models, presets, and algorithmic spaced-repetition study plan generators.

export type SlideImportance = 'CORE_FUNDAMENTAL' | 'SUPPORTING' | 'CONTEXT_LOW_YIELD';

export interface KeyDefinition {
  term: string;
  definition: string;
}

export interface ActiveRecallPrompt {
  question: string;
  answer: string;
  hint?: string;
}

export interface SlideAnalysis {
  pageNumber: number;
  title: string;
  importance: SlideImportance;
  importanceScore: number; // 1 to 10
  categoryTag: string; // 'Concept', 'Equation', 'Algorithm', 'Theorem', 'Example', 'Overview'
  coreRule: string; // The 1-2 sentence core takeaway (No fluff)
  keyFormulas: string[];
  keyDefinitions: KeyDefinition[];
  examTrap: string; // Where examiners trick students or common misconceptions
  activeRecallPrompt: ActiveRecallPrompt;
  estimatedStudyMinutes: number;
}

export interface StudyPlanSession {
  day: number;
  title: string;
  slideNumbers: number[];
  allocatedMinutes: number;
  focus: string;
  checklist: string[];
}

export interface StudyPlanPhase {
  phaseNumber: number;
  name: string;
  objective: string;
  days: string;
  sessions: StudyPlanSession[];
}

export interface CramSheetSummary {
  mustMemorizeTheorems: string[];
  formulasToRecite: string[];
  highFrequencyQuestions: string[];
}

export interface CompleteSlideStudyPackage {
  id: string;
  deckTitle: string;
  courseCode: string;
  subject: string;
  totalSlides: number;
  highYieldCount: number;
  estimatedHoursTotal: number;
  slides: SlideAnalysis[];
  studyPlan: {
    daysUntilExam: number;
    dailyMinutes: number;
    targetGrade: string;
    phases: StudyPlanPhase[];
  };
  cramSheetSummary: CramSheetSummary;
  analyzedAt: string;
}

/**
 * High-Yield University Course Presets
 * Allows university students to instantly test and explore the engine with realistic slide decks.
 */
export const UNIVERSITY_COURSE_PRESETS: CompleteSlideStudyPackage[] = [
  {
    id: 'preset-cs340-os',
    deckTitle: 'Virtual Memory, Page Tables & TLB Translation',
    courseCode: 'CS 340',
    subject: 'Computer Science / Computer Systems',
    totalSlides: 28,
    highYieldCount: 11,
    estimatedHoursTotal: 4.5,
    analyzedAt: '2026-10-23T08:00:00Z',
    cramSheetSummary: {
      mustMemorizeTheorems: [
        'Virtual Address Translation: VPN (Virtual Page Number) indexes Page Table; Offset directly maps to physical frame.',
        'Effective Memory Access Time (EMAT): EMAT = (TLB Hit Rate × TLB Time) + ((1 - Hit Rate) × (TLB Time + Memory Time + Physical Access)).',
        'Belady\'s Anomaly: Certain page replacement policies (like FIFO) encounter MORE page faults when given MORE physical frames.',
        'Working Set Model: A process thrashes if the sum of all working sets of active processes exceeds total physical memory size.'
      ],
      formulasToRecite: [
        'Number of Pages = 2^(Virtual Address Bits - Offset Bits)',
        'Page Table Size = Number of Page Table Entries × Size per Entry',
        'EMAT = h * (t_tlb + t_mem) + (1 - h) * (t_tlb + 2 * t_mem)',
        'Working Set W(t, Δ) = { pages referenced in interval [t - Δ, t] }'
      ],
      highFrequencyQuestions: [
        'Why does a multi-level page table reduce memory overhead for sparse address spaces?',
        'Walk through the exact hardware sequence that occurs when a CPU encounters a TLB miss followed by a Page Fault.',
        'Contrast LRU vs FIFO page replacement on the reference string 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5 with 3 frames.'
      ]
    },
    studyPlan: {
      daysUntilExam: 7,
      dailyMinutes: 45,
      targetGrade: 'A / First Class',
      phases: [
        {
          phaseNumber: 1,
          name: 'Core Architecture & Foundations',
          objective: 'Master address translation math and page table hierarchies.',
          days: 'Days 1 - 2',
          sessions: [
            {
              day: 1,
              title: 'Virtual Addressing & Offset Deconstruction',
              slideNumbers: [3, 4, 7, 8],
              allocatedMinutes: 45,
              focus: 'Address splitting (VPN + Offset) and physical frame indexing.',
              checklist: [
                'Derive page table size from a 32-bit architecture with 4KB page size',
                'Verify understanding of Valid/Invalid bit in page table entries',
                'Attempt active recall prompt on Slide 8'
              ]
            },
            {
              day: 2,
              title: 'Multi-Level Paging & Spatial Efficiency',
              slideNumbers: [10, 11, 13],
              allocatedMinutes: 40,
              focus: 'Why sparse memory allocations save RAM using 2-level hierarchical paging.',
              checklist: [
                'Sketch a 2-level page directory lookup tree',
                'Calculate memory savings when only 8MB of 4GB address space is mapped',
                'Complete active recall test on Slide 11'
              ]
            }
          ]
        },
        {
          phaseNumber: 2,
          name: 'Hardware Acceleration & Replacement Algorithms',
          objective: 'Solve quantitative TLB access times and simulate page replacement algorithms.',
          days: 'Days 3 - 4',
          sessions: [
            {
              day: 3,
              title: 'Translation Lookaside Buffer (TLB) & EMAT Calculation',
              slideNumbers: [15, 16, 18],
              allocatedMinutes: 50,
              focus: 'EMAT calculations, TLB hit rates, and hardware miss handling.',
              checklist: [
                'Solve 3 EMAT numerical problems with 95% and 99% hit rates',
                'Distinguish hardware-managed vs software-managed TLBs',
                'Review Slide 16 Exam Trap'
              ]
            },
            {
              day: 4,
              title: 'Page Replacement Algorithms: FIFO, LRU & Optimal',
              slideNumbers: [20, 21, 23],
              allocatedMinutes: 45,
              focus: 'Simulating trace reference strings under frame constraints.',
              checklist: [
                'Simulate FIFO, LRU, and Optimal on a 12-page reference string',
                'Explain Belady\'s anomaly and prove why LRU is immune to it (Stack Property)',
                'Complete active recall prompt on Slide 21'
              ]
            }
          ]
        },
        {
          phaseNumber: 3,
          name: 'System Pathology & Spaced Recall',
          objective: 'Diagnose thrashing, working set parameters, and drill self-tests.',
          days: 'Days 5 - 6',
          sessions: [
            {
              day: 5,
              title: 'Thrashing, Working Set Model & Page Fault Service Routines',
              slideNumbers: [24, 26, 27],
              allocatedMinutes: 45,
              focus: 'What causes system lockups when swap I/O saturates.',
              checklist: [
                'Diagram the 6 steps of a Page Fault interrupt service routine',
                'Define the Working Set parameter Δ and how OS monitors working set sizes',
                'Review Slide 26 Exam Trap'
              ]
            },
            {
              day: 6,
              title: 'Comprehensive Closed-Book Active Recall Drill',
              slideNumbers: [3, 8, 11, 16, 21, 26],
              allocatedMinutes: 45,
              focus: 'Flashcard recitation of all 11 core fundamental slides.',
              checklist: [
                'Run through all 11 active recall challenge cards without viewing answers',
                'Redo any missed calculations from memory',
                'Review the 1-page formula sheet'
              ]
            }
          ]
        },
        {
          phaseNumber: 4,
          name: 'Final High-Yield Exam Eve Scan',
          objective: 'Rapid 30-minute formula review and exam trap sanity check.',
          days: 'Day 7',
          sessions: [
            {
              day: 7,
              title: 'Pre-Exam High-Yield Cram Session',
              slideNumbers: [8, 11, 16, 21, 26],
              allocatedMinutes: 30,
              focus: 'Top 5 examiner trap slides and memorized formula verification.',
              checklist: [
                'Verify EMAT formula with memory access overhead',
                'Review Belady anomaly conditions',
                'Rest well before exam hall'
              ]
            }
          ]
        }
      ]
    },
    slides: [
      {
        pageNumber: 1,
        title: 'Course Introduction & Administrative Logistics',
        importance: 'CONTEXT_LOW_YIELD',
        importanceScore: 1,
        categoryTag: 'Overview',
        coreRule: 'Course admin slides containing office hours and grading policy are purely logistical.',
        keyFormulas: [],
        keyDefinitions: [],
        examTrap: 'Zero exam value. Skip immediately when studying under time pressure.',
        activeRecallPrompt: {
          question: 'Do administrative logistics appear on midterm examinations?',
          answer: 'No. Skip this slide to conserve revision energy.'
        },
        estimatedStudyMinutes: 1
      },
      {
        pageNumber: 3,
        title: 'Motivation: Why Physical Addressing Fails Multiprogramming',
        importance: 'SUPPORTING',
        importanceScore: 6,
        categoryTag: 'Concept',
        coreRule: 'Physical addressing provides no memory isolation between concurrent processes and makes dynamic address relocation impossible.',
        keyFormulas: [],
        keyDefinitions: [
          { term: 'Physical Addressing', definition: 'CPU access directly reads/writes physical RAM memory addresses without intermediate mapping.' },
          { term: 'Address Isolation', definition: 'Ensuring process A cannot access or corrupt the memory addresses allocated to process B.' }
        ],
        examTrap: 'Students often forget that virtual memory protects the OS kernel from rogue user processes, not just processes from each other.',
        activeRecallPrompt: {
          question: 'What are the two fatal security and operational limitations of physical addressing in multi-tasking operating systems?',
          answer: '1. Lack of memory protection/isolation between processes. 2. Difficulty relocating processes dynamically in physical RAM.'
        },
        estimatedStudyMinutes: 4
      },
      {
        pageNumber: 8,
        title: 'Virtual Address Translation & Hardware MMU',
        importance: 'CORE_FUNDAMENTAL',
        importanceScore: 10,
        categoryTag: 'Theorem',
        coreRule: 'The CPU generates virtual addresses split into Virtual Page Number (VPN) and Offset. The MMU replaces the VPN with a Physical Frame Number (PFN) while preserving the offset identically.',
        keyFormulas: [
          'VPN = Virtual Address >> Offset Bits',
          'Physical Address = (PFN << Offset Bits) | Offset',
          'Page Size = 2^(Offset Bits) bytes'
        ],
        keyDefinitions: [
          { term: 'MMU (Memory Management Unit)', definition: 'Hardware chip inside the CPU that translates virtual memory addresses to physical RAM addresses on the fly.' },
          { term: 'Page vs Frame', definition: 'A Page is a fixed-size chunk of virtual memory. A Frame is a fixed-size chunk of physical RAM.' }
        ],
        examTrap: 'CRITICAL: The offset NEVER changes during address translation! Examiners test whether students alter the offset bits. Frame size MUST equal page size.',
        activeRecallPrompt: {
          question: 'If a system has a 32-bit virtual address and 4KB page size, how many bits are used for the offset and how many for the VPN?',
          answer: 'Offset: 12 bits (since 4KB = 2^12 bytes). VPN: 32 - 12 = 20 bits (allowing 2^20 = 1,048,576 virtual pages).'
        },
        estimatedStudyMinutes: 12
      },
      {
        pageNumber: 11,
        title: 'Hierarchical Multi-Level Page Tables',
        importance: 'CORE_FUNDAMENTAL',
        importanceScore: 9,
        categoryTag: 'Architecture',
        coreRule: 'Single flat page tables consume gigabytes of memory even for tiny processes. Multi-level paging breaks the page table into tree levels, allocating sub-tables only for valid allocated memory regions.',
        keyFormulas: [
          'Two-Level Split: VPN_Level1 (10 bits) | VPN_Level2 (10 bits) | Offset (12 bits)'
        ],
        keyDefinitions: [
          { term: 'Page Directory', definition: 'Top-level array of pointers referencing second-level page tables.' },
          { term: 'Sparse Allocation', definition: 'Process address space where large ranges of memory (e.g. between stack and heap) are unallocated.' }
        ],
        examTrap: 'Trade-off trap: Multi-level page tables save memory space at the expense of TIME—each memory dereference now requires multiple RAM lookups instead of one.',
        activeRecallPrompt: {
          question: 'Why does a 2-level page table take LESS space in physical memory than a single-level page table for a small 4MB program?',
          answer: 'Unused intermediate page tables do not need to be allocated in RAM at all; only the top-level Page Directory and active sub-tables exist.'
        },
        estimatedStudyMinutes: 10
      },
      {
        pageNumber: 16,
        title: 'Translation Lookaside Buffer (TLB) & Effective Memory Access Time',
        importance: 'CORE_FUNDAMENTAL',
        importanceScore: 10,
        categoryTag: 'Equation',
        coreRule: 'The TLB is an associative hardware cache inside the MMU that stores recent VPN-to-PFN mappings, avoiding multiple RAM dereferences.',
        keyFormulas: [
          'EMAT = h * (t_tlb + t_mem) + (1 - h) * (t_tlb + 2 * t_mem)',
          'For 2-level page table: Miss penalty requires 2 extra memory lookups!'
        ],
        keyDefinitions: [
          { term: 'TLB Hit Rate (h)', definition: 'Fraction of virtual address lookups found in the TLB cache without querying RAM.' },
          { term: 'TLB Flush', definition: 'Clearing all entries in the TLB upon a process context switch to prevent cross-process data leakage.' }
        ],
        examTrap: 'Don\'t forget: On a TLB hit, memory access time is t_tlb + t_mem (1 RAM read for actual data). On a TLB miss with 2-level paging, you pay t_tlb + 2*t_mem (table traversal) + t_mem (data read)!',
        activeRecallPrompt: {
          question: 'If TLB search is 2ns, RAM access is 100ns, and TLB hit rate is 98%, calculate the EMAT for a single-level page table.',
          answer: 'EMAT = 0.98*(2 + 100) + 0.02*(2 + 100 + 100) = 0.98*(102) + 0.02*(202) = 99.96 + 4.04 = 104.0 ns.'
        },
        estimatedStudyMinutes: 14
      },
      {
        pageNumber: 21,
        title: 'Page Replacement Algorithms & Belady\'s Anomaly',
        importance: 'CORE_FUNDAMENTAL',
        importanceScore: 10,
        categoryTag: 'Algorithm',
        coreRule: 'When physical RAM is full during a page fault, the OS must evict a frame. Optimal (MIN) evicts the page not needed for the longest future time; LRU approximates Optimal using past recency.',
        keyFormulas: [
          'Hit Ratio = 1 - (Page Faults / Total References)'
        ],
        keyDefinitions: [
          { term: 'Belady\'s Anomaly', definition: 'The phenomenon where increasing the number of physical frames results in an increased number of page faults under FIFO.' },
          { term: 'Stack Algorithms', definition: 'Class of algorithms (including LRU and Optimal) where the set of pages in n frames is strictly a subset of pages in n+1 frames, making them immune to Belady\'s anomaly.' }
        ],
        examTrap: 'Examiners ALWAYS test FIFO vs LRU on reference strings where FIFO triggers Belady\'s Anomaly. Remember: LRU can NEVER exhibit Belady\'s anomaly because it is a stack algorithm.',
        activeRecallPrompt: {
          question: 'What property makes LRU immune to Belady\'s Anomaly, and why does FIFO fail this property?',
          answer: 'LRU satisfies the "Stack Algorithm" inclusion property: for any reference string, the set of pages in N frames is always a subset of pages in N+1 frames. FIFO does not preserve this inclusion.'
        },
        estimatedStudyMinutes: 15
      },
      {
        pageNumber: 26,
        title: 'Thrashing & The Working Set Model',
        importance: 'CORE_FUNDAMENTAL',
        importanceScore: 9,
        categoryTag: 'Concept',
        coreRule: 'Thrashing occurs when total memory allocated to active processes is less than the sum of their working sets, causing CPU utilization to plummet as the disk becomes saturated with page swapping.',
        keyFormulas: [
          'D = Σ W_i (Demand for frames) > M (Total RAM frames) => System Thrashes'
        ],
        keyDefinitions: [
          { term: 'Thrashing', definition: 'A state where a computer spends more time paging (swapping pages in/out of disk) than executing instructions.' },
          { term: 'Working Set Window (Δ)', definition: 'A fixed parameter measuring recent page references used by the OS to estimate a process\'s locality of reference.' }
        ],
        examTrap: 'Paradox trap: When CPU utilization drops due to thrashing, naive CPU schedulers increase multiprogramming by launching more processes, which makes thrashing catastrophically worse!',
        activeRecallPrompt: {
          question: 'How does an operating system resolve thrashing once it is detected?',
          answer: 'It must suspend (swap out entirely) one or more active processes to free their frames, allowing remaining processes to satisfy their working sets.'
        },
        estimatedStudyMinutes: 10
      }
    ]
  },
  {
    id: 'preset-me201-thermo',
    deckTitle: 'The Second Law of Thermodynamics, Entropy & Carnot Cycles',
    courseCode: 'ME 201',
    subject: 'Mechanical & Chemical Engineering',
    totalSlides: 24,
    highYieldCount: 9,
    estimatedHoursTotal: 4.0,
    analyzedAt: '2026-10-23T08:00:00Z',
    cramSheetSummary: {
      mustMemorizeTheorems: [
        'Kelvin-Planck Statement: It is impossible for any heat engine operating in a cycle to receive heat from a single reservoir and produce a net amount of work.',
        'Clausius Statement: Heat cannot spontaneously flow from a colder body to a hotter body without external work input.',
        'Carnot Principles: No heat engine can be more efficient than a reversible engine between the same two thermal reservoirs.',
        'Clausius Inequality: $\\oint \\frac{\\delta Q}{T} \\le 0$. Equality holds strictly for reversible cycles.'
      ],
      formulasToRecite: [
        'Carnot Efficiency: $\\eta_{th,rev} = 1 - \\frac{T_L}{T_H}$ (Temperatures MUST be in Kelvin!)',
        'COP_HP = $\\frac{Q_H}{W_{net}} = \\frac{1}{1 - T_L/T_H}$',
        'Entropy Definition: $dS = \\left(\\frac{\\delta Q}{T}\\right)_{rev}$',
        'Entropy Generation: $S_{gen} \\ge 0$ for any real (irreversible) process'
      ],
      highFrequencyQuestions: [
        'Prove that violating the Clausius statement leads directly to a violation of the Kelvin-Planck statement.',
        'Why does a heat pump always have a Coefficient of Performance (COP) exactly 1 greater than an identical refrigerator?',
        'Calculate the maximum theoretical work output of an engine operating between 800°C and 25°C.'
      ]
    },
    studyPlan: {
      daysUntilExam: 5,
      dailyMinutes: 50,
      targetGrade: 'A / First Class',
      phases: [
        {
          phaseNumber: 1,
          name: 'The 2nd Law & Thermal Reservoir Formulations',
          objective: 'Master reservoir work cycles and heat engine efficiency bounds.',
          days: 'Days 1 - 2',
          sessions: [
            {
              day: 1,
              title: 'Kelvin-Planck, Clausius & Reversibility',
              slideNumbers: [2, 4, 6],
              allocatedMinutes: 45,
              focus: 'Equivalence proof of Kelvin-Planck and Clausius statements.',
              checklist: [
                'State Kelvin-Planck and Clausius word-for-word',
                'Diagram a combined refrigerator-engine system proving statement equivalence',
                'Attempt active recall prompt on Slide 4'
              ]
            },
            {
              day: 2,
              title: 'Carnot Heat Engine & Maximum Thermodynamic Efficiency',
              slideNumbers: [8, 9, 11],
              allocatedMinutes: 50,
              focus: 'Carnot 4-process cycle on P-v and T-s diagrams.',
              checklist: [
                'Derive Carnot efficiency equation $\\eta = 1 - T_L/T_H$',
                'Solve numerical efficiency problems converting Celsius to Kelvin',
                'Complete active recall test on Slide 9'
              ]
            }
          ]
        },
        {
          phaseNumber: 2,
          name: 'Entropy & Clausius Inequality',
          objective: 'Calculate entropy changes in open and closed thermal systems.',
          days: 'Days 3 - 4',
          sessions: [
            {
              day: 3,
              title: 'Clausius Inequality & Entropy Quantification',
              slideNumbers: [13, 15, 17],
              allocatedMinutes: 50,
              focus: 'Entropy as a state function and the increase of entropy principle.',
              checklist: [
                'Evaluate $\\oint \\delta Q / T$ for reversible vs irreversible cycles',
                'Calculate entropy generation $S_{gen}$ for an uninsulated heat exchanger',
                'Review Slide 15 Exam Trap'
              ]
            },
            {
              day: 4,
              title: 'Isentropic Efficiencies & Work Devices (Turbine / Compressor)',
              slideNumbers: [19, 21, 23],
              allocatedMinutes: 45,
              focus: 'Actual work vs ideal isentropic work for nozzles, turbines, and compressors.',
              checklist: [
                'Define isentropic turbine efficiency vs compressor efficiency',
                'Plot isentropic vs real expansion on a Mollier (h-s) chart',
                'Complete active recall prompt on Slide 21'
              ]
            }
          ]
        },
        {
          phaseNumber: 3,
          name: 'Active Synthesis & Exam Drills',
          objective: 'Closed-book flashcard mastery of all core thermodynamics proofs.',
          days: 'Day 5',
          sessions: [
            {
              day: 5,
              title: 'Final High-Yield Exam Drill & Formula Recitation',
              slideNumbers: [4, 9, 15, 21],
              allocatedMinutes: 40,
              focus: 'Formula derivations without consulting formula sheet.',
              checklist: [
                'Verify Kelvin temperature conversion habit',
                'Recite Clausius Inequality proof',
                'Check off all active recall prompts'
              ]
            }
          ]
        }
      ]
    },
    slides: [
      {
        pageNumber: 4,
        title: 'The Second Law: Kelvin-Planck & Clausius Statements',
        importance: 'CORE_FUNDAMENTAL',
        importanceScore: 10,
        categoryTag: 'Theorem',
        coreRule: 'No cyclic device can convert all absorbed heat into 100% mechanical work (Kelvin-Planck), and heat cannot spontaneously flow from cold to hot without external work (Clausius).',
        keyFormulas: [
          'W_net = Q_H - Q_L (Q_L must be > 0)',
          '\\eta_{th} = W_{net} / Q_H = 1 - (Q_L / Q_H) < 1'
        ],
        keyDefinitions: [
          { term: 'Thermal Energy Reservoir', definition: 'A hypothetical body with large thermal heat capacity that can absorb or supply finite heat without temperature change.' },
          { term: 'Source vs Sink', definition: 'A source supplies heat at high temperature; a sink absorbs waste heat at low temperature.' }
        ],
        examTrap: 'Examiners frequently ask students to "prove that violating Clausius violates Kelvin-Planck". Practice the combined engine-refrigerator schematic proof.',
        activeRecallPrompt: {
          question: 'Can a heat engine operate with 100% thermal efficiency if all internal friction and turbulence are completely eliminated?',
          answer: 'NO. Even in a 100% frictionless, reversible engine, the Kelvin-Planck statement demands that some heat Q_L must be rejected to a low-temperature sink.'
        },
        estimatedStudyMinutes: 12
      },
      {
        pageNumber: 9,
        title: 'The Carnot Cycle & Theoretical Maximum Efficiency',
        importance: 'CORE_FUNDAMENTAL',
        importanceScore: 10,
        categoryTag: 'Equation',
        coreRule: 'The Carnot cycle is composed of 4 totally reversible processes (2 isothermal, 2 isentropic). Its efficiency depends SOLELY on the absolute temperatures of the thermal reservoirs.',
        keyFormulas: [
          '\\eta_{Carnot} = 1 - (T_L / T_H)',
          'T must ALWAYS be in Kelvin (K = °C + 273.15)'
        ],
        keyDefinitions: [
          { term: 'Reversible Process', definition: 'A process that can be reversed without leaving any trace on the surroundings.' },
          { term: 'Carnot Heat Engine', definition: 'The theoretical most efficient cycle operating between two thermal boundaries.' }
        ],
        examTrap: 'FATAL EXAM ERROR: Substituting Celsius values into the Carnot equation! E.g. 1 - (20/100) = 80% is completely wrong; 1 - (293/373) = 21.4% is correct.',
        activeRecallPrompt: {
          question: 'What are the four individual processes that comprise the Carnot cycle in sequence?',
          answer: '1. Reversible Isothermal Heat Addition (T_H = constant). 2. Reversible Adiabatic Expansion (Isentropic). 3. Reversible Isothermal Heat Rejection (T_L = constant). 4. Reversible Adiabatic Compression (Isentropic).'
        },
        estimatedStudyMinutes: 15
      },
      {
        pageNumber: 15,
        title: 'The Clausius Inequality & Definition of Entropy',
        importance: 'CORE_FUNDAMENTAL',
        importanceScore: 10,
        categoryTag: 'Equation',
        coreRule: 'For any thermodynamic cycle, the cyclic integral of δQ/T is less than or equal to zero. If the integral equals zero, the cycle is internally reversible.',
        keyFormulas: [
          '\\oint \\frac{\\delta Q}{T} \\le 0',
          'dS = \\left(\\frac{\\delta Q}{T}\\right)_{int,rev}',
          'S_{gen} = \\Delta S_{sys} + \\Delta S_{surr} \\ge 0'
        ],
        keyDefinitions: [
          { term: 'Entropy (S)', definition: 'A thermodynamic property measuring microscopic disorder and the degree of irreversibility in a system.' },
          { term: 'Entropy Generation (S_gen)', definition: 'Entropy created exclusively due to internal irreversibilities (friction, mixing, finite temperature heat transfer).' }
        ],
        examTrap: 'Remember: Entropy CAN decrease for an open system (e.g. ice freezing in a freezer), but the TOTAL entropy of the universe (System + Surroundings) MUST always increase!',
        activeRecallPrompt: {
          question: 'Under what specific condition is the cyclic integral of δQ/T strictly equal to zero?',
          answer: 'When the entire cycle is internally reversible.'
        },
        estimatedStudyMinutes: 14
      }
    ]
  },
  {
    id: 'preset-bch305-biochem',
    deckTitle: 'Cellular Respiration, Glycolysis & Oxidative Phosphorylation',
    courseCode: 'BCH 305',
    subject: 'Biochemistry / Pre-Med / Molecular Biology',
    totalSlides: 26,
    highYieldCount: 10,
    estimatedHoursTotal: 4.2,
    analyzedAt: '2026-10-23T08:00:00Z',
    cramSheetSummary: {
      mustMemorizeTheorems: [
        'Committed Step of Glycolysis: Phosphofructokinase-1 (PFK-1) converting Fructose-6-phosphate to Fructose-1,6-bisphosphate.',
        'Allosteric Regulation of PFK-1: Inhibited by high ATP and Citrate; Strongly activated by Fructose-2,6-bisphosphate and AMP.',
        'Chemiosmotic Hypothesis (Mitchell): ATP synthesis is coupled to the electrochemical proton gradient (Proton Motive Force) across the inner mitochondrial membrane.',
        'Net ATP Yield per Glucose: 30 to 32 ATP depending on the NADH shuttle system (Malate-Aspartate vs Glycerol-3-Phosphate).'
      ],
      formulasToRecite: [
        'Glycolysis Net: Glucose + 2 NAD+ + 2 ADP + 2 Pi -> 2 Pyruvate + 2 NADH + 2 ATP + 2 H2O + 2 H+',
        'Proton Motive Force (PMF): $\\Delta p = \\Delta \\psi - (2.3 RT/F) \\Delta pH$',
        'P/O Ratio: ~2.5 ATP per NADH, ~1.5 ATP per FADH2'
      ],
      highFrequencyQuestions: [
        'Explain why Oligomycin inhibits both ATP synthesis and electron transport, while DNP (an uncoupler) inhibits ATP synthesis but STIMULATES electron transport.',
        'Trace the path of 2 electrons from NADH to Complex I, Ubiquinone (Q), Complex III, Cytochrome c, Complex IV, to Oxygen.',
        'Why does FADH2 yield fewer ATPs than NADH?'
      ]
    },
    studyPlan: {
      daysUntilExam: 6,
      dailyMinutes: 40,
      targetGrade: 'A / Distinction',
      phases: [
        {
          phaseNumber: 1,
          name: 'Glycolysis & Regulatory Gateways',
          objective: 'Master irreversible enzymatic steps and allosteric controls.',
          days: 'Days 1 - 2',
          sessions: [
            {
              day: 1,
              title: 'The 3 Irreversible Enzymatic Steps of Glycolysis',
              slideNumbers: [3, 5, 7],
              allocatedMinutes: 40,
              focus: 'Hexokinase, PFK-1, and Pyruvate Kinase energetics.',
              checklist: [
                'Write out the substrates and cofactors for Hexokinase, PFK-1, and Pyruvate Kinase',
                'Identify where substrate-level phosphorylation occurs in the payoff phase',
                'Complete active recall test on Slide 5'
              ]
            },
            {
              day: 2,
              title: 'Allosteric Regulation of PFK-1 & Fructose-2,6-BP',
              slideNumbers: [9, 10],
              allocatedMinutes: 40,
              focus: 'Energy charge signaling and hormonal regulation (Insulin vs Glucagon).',
              checklist: [
                'Sketch the allosteric curve of PFK-1 in the presence of AMP vs ATP',
                'Explain how PFK-2/FBPase-2 bifunctional enzyme operates',
                'Review Slide 10 Exam Trap'
              ]
            }
          ]
        },
        {
          phaseNumber: 2,
          name: 'Mitochondrial Complexes & Electron Transport',
          objective: 'Trace electron carriers from NADH/FADH2 through Complexes I - IV.',
          days: 'Days 3 - 4',
          sessions: [
            {
              day: 3,
              title: 'Electron Transport Chain Complexes I, II, III, IV',
              slideNumbers: [14, 16, 17],
              allocatedMinutes: 45,
              focus: 'Proton pumping stoichiometry (4H+, 0H+, 4H+, 2H+) and Q cycle.',
              checklist: [
                'Trace electron flow through Iron-Sulfur centers and Cytochromes',
                'Identify why Complex II (Succinate Dehydrogenase) does not pump protons',
                'Complete active recall prompt on Slide 16'
              ]
            },
            {
              day: 4,
              title: 'Chemiosmosis, ATP Synthase Mechanism & Uncouplers',
              slideNumbers: [19, 21, 23],
              allocatedMinutes: 45,
              focus: 'Fo/F1 rotational catalysis and mitochondrial poisons/inhibitors.',
              checklist: [
                'Distinguish Cyanide vs Carbon Monoxide vs Oligomycin vs DNP',
                'Calculate net ATP yield per mole of glucose',
                'Review Slide 21 Exam Trap'
              ]
            }
          ]
        },
        {
          phaseNumber: 3,
          name: 'High-Yield Clinical & Exam Synthesis',
          objective: 'Flashcard drills and clinical correlation questions.',
          days: 'Days 5 - 6',
          sessions: [
            {
              day: 5,
              title: 'Metabolic Poisons & Clinical Vignettes Drill',
              slideNumbers: [5, 10, 16, 21],
              allocatedMinutes: 40,
              focus: 'Brown fat thermogenesis, lactic acidosis, and inhibitor identification.',
              checklist: [
                'Test all 4 active recall cards closed-book',
                'Draft the 1-page pathway summary',
                'Review P/O ratios'
              ]
            },
            {
              day: 6,
              title: 'Final Pre-Exam Rapid Scan',
              slideNumbers: [5, 16, 21],
              allocatedMinutes: 30,
              focus: 'Top high-yield formulas and committed regulation steps.',
              checklist: [
                'Recite the 3 irreversible steps of glycolysis',
                'Verify understanding of DNP uncoupling mechanism'
              ]
            }
          ]
        }
      ]
    },
    slides: [
      {
        pageNumber: 5,
        title: 'Glycolysis: The Rate-Limiting Committed Step (PFK-1)',
        importance: 'CORE_FUNDAMENTAL',
        importanceScore: 10,
        categoryTag: 'Enzyme',
        coreRule: 'Phosphofructokinase-1 (PFK-1) catalyzes the phosphorylation of Fructose-6-phosphate to Fructose-1,6-bisphosphate. This is the primary committed, non-reversible regulatory bottleneck of carbohydrate metabolism.',
        keyFormulas: [
          'Fructose-6-P + ATP --(PFK-1)--> Fructose-1,6-BP + ADP'
        ],
        keyDefinitions: [
          { term: 'Committed Step', definition: 'An enzymatic reaction after which the molecule is committed to continuing through that specific metabolic pathway.' },
          { term: 'Allosteric Effector', definition: 'A small molecule that binds to a site other than the active site to alter enzyme conformation and activity.' }
        ],
        examTrap: 'Common mistake: Confusing Hexokinase (Step 1) with the committed step! Hexokinase is NOT the committed step because Glucose-6-P can diverge into glycogen synthesis or the Pentose Phosphate Pathway.',
        activeRecallPrompt: {
          question: 'Why is PFK-1 considered the "committed step" of glycolysis while Hexokinase is not?',
          answer: 'Glucose-6-phosphate (produced by Hexokinase) can enter Glycogen synthesis or the PPP. Once Fructose-1,6-bisphosphate is created by PFK-1, it has NO metabolic fate other than glycolysis.'
        },
        estimatedStudyMinutes: 12
      },
      {
        pageNumber: 16,
        title: 'Mitochondrial Electron Transport: Complex I to IV Stoichiometry',
        importance: 'CORE_FUNDAMENTAL',
        importanceScore: 10,
        categoryTag: 'Mechanism',
        coreRule: 'Electrons flow exergonically from NADH through Complex I -> Q -> Complex III -> Cytochrome c -> Complex IV -> O2, pumping a total of 10 protons across the inner mitochondrial membrane per NADH.',
        keyFormulas: [
          'Protons pumped per NADH: Complex I (4H+) + Complex III (4H+) + Complex IV (2H+) = 10 H+',
          'Protons pumped per FADH2: Complex II (0H+) + Complex III (4H+) + Complex IV (2H+) = 6 H+'
        ],
        keyDefinitions: [
          { term: 'Complex II (Succinate Dehydrogenase)', definition: 'The only enzyme participating in both the Citric Acid Cycle and the ETC. Does NOT span the membrane and pumps ZERO protons.' },
          { term: 'Ubiquinone (Coenzyme Q)', definition: 'A lipid-soluble mobile electron carrier shuttling 2 electrons from Complexes I and II to Complex III.' }
        ],
        examTrap: 'Why does FADH2 yield ~1.5 ATP whereas NADH yields ~2.5 ATP? Because FADH2 feeds into Complex II, completely bypassing the 4 protons pumped by Complex I!',
        activeRecallPrompt: {
          question: 'How many total protons are pumped into the intermembrane space per electron pair donated by NADH vs FADH2?',
          answer: 'NADH: 10 protons (4 + 4 + 2). FADH2: 6 protons (0 + 4 + 2).'
        },
        estimatedStudyMinutes: 14
      },
      {
        pageNumber: 21,
        title: 'Uncouplers vs Electron Transport Inhibitors',
        importance: 'CORE_FUNDAMENTAL',
        importanceScore: 9,
        categoryTag: 'Pharmacology',
        coreRule: 'ETC inhibitors (Cyanide, CO) block electron transfer, halting both respiration (O2 consumption) and ATP synthesis. Uncouplers (DNP, Thermogenin) dissipate the proton gradient, collapsing ATP synthesis while ACCELERATING O2 consumption and generating heat.',
        keyFormulas: [
          'Uncoupling: High O2 consumption + Zero ATP synthesis + High heat generation'
        ],
        keyDefinitions: [
          { term: '2,4-Dinitrophenol (DNP)', definition: 'A lipophilic protonophore that shuttles protons across the inner mitochondrial membrane, dissipating the proton gradient without passing through ATP synthase.' },
          { term: 'Thermogenin (UCP-1)', definition: 'Physiological uncoupling protein found in brown adipose tissue used by infants and hibernating mammals to generate body heat.' }
        ],
        examTrap: 'Clinical question classic: If a patient presents with hyperthermia, rapid breathing (tachypnea), and depleted ATP after taking a toxic diet drug, the culprit is an UNCOUPLER (like DNP), not an ETC inhibitor!',
        activeRecallPrompt: {
          question: 'What happens to oxygen consumption and body temperature when 2,4-dinitrophenol (DNP) is added to respiring mitochondria?',
          answer: 'Oxygen consumption INCREASES as the ETC attempts to rebuild the leaking proton gradient; temperature INCREASES as energy is dissipated as pure heat.'
        },
        estimatedStudyMinutes: 12
      }
    ]
  }
];

/**
 * Algorithmic Study Plan Generator
 * Synthesizes an active recall + spaced repetition timetable based on user constraints.
 */
export function generateAlgorithmicStudyPlan(
  slides: SlideAnalysis[],
  daysUntilExam: number = 7,
  dailyMinutes: number = 45,
  targetGrade: string = 'A / First Class'
): CompleteSlideStudyPackage['studyPlan'] {
  const safeDays = Math.max(2, Math.min(30, daysUntilExam));
  const safeMinutes = Math.max(20, Math.min(180, dailyMinutes));

  // Prioritize Core Fundamental and Supporting slides
  const coreSlides = slides.filter(s => s.importance === 'CORE_FUNDAMENTAL');
  const supportingSlides = slides.filter(s => s.importance === 'SUPPORTING');

  // Build 3 to 4 sequential phases:
  // Phase 1: Foundations & Core Rules (First 40% of time)
  // Phase 2: Mechanisms & Problem Solving (Middle 35% of time)
  // Phase 3: Active Recall & Stress Testing (Last 25% of time)
  const p1DaysCount = Math.max(1, Math.floor(safeDays * 0.4));
  const p2DaysCount = Math.max(1, Math.floor(safeDays * 0.35));
  const p3DaysCount = Math.max(1, safeDays - p1DaysCount - p2DaysCount);

  const sessions: StudyPlanSession[] = [];
  let currentDay = 1;

  // Distribute core slides into Phase 1 & 2
  const allTargetSlides = [...coreSlides, ...supportingSlides];
  const slidesPerDay = Math.max(1, Math.ceil(allTargetSlides.length / (p1DaysCount + p2DaysCount)));

  for (let d = 1; d <= safeDays; d++) {
    if (d <= p1DaysCount) {
      const daySlice = allTargetSlides.slice((d - 1) * slidesPerDay, d * slidesPerDay);
      const slideNums = daySlice.map(s => s.pageNumber);
      sessions.push({
        day: d,
        title: `Core Fundamentals & Definitions (Part ${d})`,
        slideNumbers: slideNums.length > 0 ? slideNums : [slides[0]?.pageNumber || 1],
        allocatedMinutes: safeMinutes,
        focus: 'Deconstruct governing laws, definitions, and slide takeaways without rote memorization.',
        checklist: [
          'Read slide core rules and state them out loud in your own words',
          'Identify and write down any unfamiliar terms in your personal glossary',
          'Attempt the active recall card on each assigned slide'
        ]
      });
    } else if (d <= p1DaysCount + p2DaysCount) {
      const idx = d - p1DaysCount;
      const daySlice = allTargetSlides.slice((d - 1) * slidesPerDay, d * slidesPerDay);
      const slideNums = daySlice.map(s => s.pageNumber);
      sessions.push({
        day: d,
        title: `Mechanisms, Formulas & Worked Examples (Day ${idx})`,
        slideNumbers: slideNums.length > 0 ? slideNums : coreSlides.map(s => s.pageNumber).slice(0, 3),
        allocatedMinutes: safeMinutes,
        focus: 'Practice formula substitutions, diagram sketching, and examiner pitfall analysis.',
        checklist: [
          'Solve 2 calculation problems or sketch key diagrams from memory',
          'Review the Examiner Trap warnings for today\'s slide deck',
          'Highlight any formulas that need instant recall'
        ]
      });
    } else if (d < safeDays) {
      // Spaced Repetition testing
      const highYieldPages = coreSlides.map(s => s.pageNumber);
      sessions.push({
        day: d,
        title: 'Spaced Retrieval Practice & Closed-Book Drills',
        slideNumbers: highYieldPages,
        allocatedMinutes: safeMinutes,
        focus: 'Closed-book flashcard drills across all high-yield fundamental slides.',
        checklist: [
          'Cycle through all high-yield flashcards with answers hidden',
          'Flag any slide where you hesitated for > 15 seconds for re-review',
          'Write down all governing formulas without looking at notes'
        ]
      });
    } else {
      // Final Day (Exam Eve)
      sessions.push({
        day: d,
        title: 'Final High-Yield Exam Eve Scan & Formula Recitation',
        slideNumbers: coreSlides.map(s => s.pageNumber).slice(0, 5),
        allocatedMinutes: Math.min(45, safeMinutes),
        focus: 'Zero new material. Rapid 30-minute scan of top 5 highest-yield slides and sleep hygiene.',
        checklist: [
          'Review the 1-page cheat sheet formulas',
          'Read the top examiner traps one last time',
          'Get 8 hours of restorative sleep before the exam hall'
        ]
      });
    }
  }

  return {
    daysUntilExam: safeDays,
    dailyMinutes: safeMinutes,
    targetGrade,
    phases: [
      {
        phaseNumber: 1,
        name: 'Phase 1: Conceptual Foundations & Terminology',
        objective: 'Extract governing rules and establish strong foundational understanding.',
        days: `Days 1 - ${p1DaysCount}`,
        sessions: sessions.filter(s => s.day <= p1DaysCount)
      },
      {
        phaseNumber: 2,
        name: 'Phase 2: Mechanics, Derivations & Examiner Traps',
        objective: 'Master problem-solving steps, formulas, and common exam traps.',
        days: `Days ${p1DaysCount + 1} - ${p1DaysCount + p2DaysCount}`,
        sessions: sessions.filter(s => s.day > p1DaysCount && s.day <= p1DaysCount + p2DaysCount)
      },
      {
        phaseNumber: 3,
        name: 'Phase 3: Active Retrieval & Spaced Recall',
        objective: 'Test retention with closed-book prompts and exam-eve rapid scanning.',
        days: `Days ${p1DaysCount + p2DaysCount + 1} - ${safeDays}`,
        sessions: sessions.filter(s => s.day > p1DaysCount + p2DaysCount)
      }
    ]
  };
}
