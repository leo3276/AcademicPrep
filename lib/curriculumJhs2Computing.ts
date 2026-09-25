// Ghanaian JHS 2 Computing Curriculum Topics
// Based on NaCCA / GES Common Core Programme (CCP) Curriculum
// 13 Comprehensive Topics across Terms 1, 2, and 3

import { CurriculumTopic } from './types';

export const JHS2_COMPUTING_TOPICS: CurriculumTopic[] = [
  {
    "id": "jhs2-ict-t1-components-generation",
    "subjectId": "ict",
    "level": "JHS 2",
    "term": 1,
    "orderIndex": 1,
    "title": "Computer Architecture & Evolution: Internal Components & Generations",
    "description": "Examine computer generations (1st to 5th), the CPU architecture (ALU, CU, Registers, System Bus), clock speed, and motherboard architecture.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=FZGugFqDr60",
    "youtubeId": "FZGugFqDr60",
    "keyNotes": "• Five Generations of Computers:\n  1. 1st Generation (1940–1956): Vacuum Tubes (ENIAC, UNIVAC); massive size, consumed huge electricity, generated excessive heat, machine language.\n  2. 2nd Generation (1956–1963): Transistors; smaller, faster, cheaper, more energy-efficient, assembly language and early high-level languages (FORTRAN, COBOL).\n  3. 3rd Generation (1964–1971): Integrated Circuits (ICs); silicon semiconductor chips containing thousands of transistors; keyboards and monitors introduced; operating systems developed.\n  4. 4th Generation (1971–Present): Microprocessors (VLSI/VLSIC); thousands to millions of ICs on a single silicon chip (Intel 4004); birth of Personal Computers (PCs), laptops, and internet.\n  5. 5th Generation (Present & Beyond): Artificial Intelligence (AI) and Ultra Large Scale Integration (ULSI); quantum computing, parallel processing, natural language recognition.\n• Central Processing Unit (CPU) Architecture:\n  - Arithmetic Logic Unit (ALU): Performs all arithmetic operations (+, -, *, /) and logical comparisons (<, >, =, AND, OR, NOT).\n  - Control Unit (CU): The 'supervisor' of the CPU; directs flow of data and instructions between CPU, memory, and peripherals; executes the Fetch-Decode-Execute cycle.\n  - Registers: High-speed internal memory locations holding data immediately being processed (e.g., Program Counter, Accumulator, Instruction Register).\n  - System Clock: Generates quartz pulses measured in Megahertz (MHz) or Gigahertz (GHz) that synchronize CPU operations.",
    "examples": [
      {
        "id": "ex-jhs2ict-t1-1",
        "title": "Identifying Major Technologies of Computer Generations",
        "problem": "Match the following computer generations to their primary switching circuitry technology: (a) 1st Gen, (b) 2nd Gen, (c) 3rd Gen, (d) 4th Gen.",
        "stepByStepSolution": [
          "Step 1: 1st Generation relied on delicate glass Vacuum Tubes.",
          "Step 2: 2nd Generation replaced vacuum tubes with solid-state Transistors.",
          "Step 3: 3rd Generation integrated multiple transistors onto silicon Integrated Circuits (ICs).",
          "Step 4: 4th Generation concentrated complete processors onto Microprocessor chips (VLSI)."
        ],
        "keyTakeaway": "Computers evolved through vacuum tubes -> transistors -> integrated circuits -> microprocessors -> AI."
      },
      {
        "id": "ex-jhs2ict-t1-2",
        "title": "Differentiating the Roles of ALU and Control Unit",
        "problem": "Explain the distinct roles of the ALU and Control Unit when a computer evaluates 'IF score >= 50 THEN Pass'.",
        "stepByStepSolution": [
          "Step 1: Control Unit fetches the instruction from RAM, decodes it, and routes the data ('score' value and '50') to the ALU.",
          "Step 2: The ALU performs the logical comparison operation '>= 50' and determines whether the condition is TRUE or FALSE.",
          "Step 3: The Control Unit reads the comparison flag from the ALU and directs the CPU to execute the next instruction based on the outcome."
        ],
        "keyTakeaway": "The Control Unit directs instruction flow; the ALU performs actual math and logical comparisons."
      }
    ]
  },
  {
    "id": "jhs2-ict-t2-operating-systems",
    "subjectId": "ict",
    "level": "JHS 2",
    "term": 1,
    "orderIndex": 2,
    "title": "Operating Systems: Functions, Types & File Management",
    "description": "Understand the core functions of operating systems, GUI vs CLI, system vs application software, file paths, directory structures, and file extensions.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=26QPDBe-NB8",
    "youtubeId": "26QPDBe-NB8",
    "keyNotes": "• Definition of Operating System (OS): System software that manages computer hardware resources and software applications, acting as an intermediary between the user and computer hardware.\n• Core Functions of an OS:\n  1. Processor Management: Allocates CPU time to running processes (multitasking).\n  2. Memory Management: Coordinates RAM allocation to applications and manages virtual memory.\n  3. File Management: Organizes files into directories/folders and tracks file locations on secondary storage.\n  4. Device/Hardware Management: Uses device drivers to communicate with printers, keyboards, monitors, and disks.\n  5. Security & Access Control: Manages user accounts, authentication (passwords), and file permissions.\n  6. User Interface: Provides Command Line Interface (CLI - text based e.g. MS-DOS, Linux Bash) or Graphical User Interface (GUI - windows, icons, menus, pointers/WIMP e.g. Windows 11, macOS, Android).\n• File Organization & Paths:\n  - File Name & Extension: Name identifies content; extension (e.g. .docx, .xlsx, .pptx, .pdf, .jpg, .mp3, .py) indicates file type and default association.\n  - Absolute Path: Full path from root drive (e.g. C:\\Students\\BECE\\math_notes.docx).\n  - Relative Path: Path relative to current working folder.",
    "examples": [
      {
        "id": "ex-jhs2ict-t2-1",
        "title": "Comparing GUI and CLI Interfaces",
        "problem": "State two advantages of a Graphical User Interface (GUI) over a Command Line Interface (CLI) for everyday Ghanaian students.",
        "stepByStepSolution": [
          "Step 1: Intuitive visual interaction: GUI uses visual icons, buttons, and mouse pointers so users don't have to memorize complex syntax commands.",
          "Step 2: Multitasking visual clarity: Multiple application windows can be displayed side-by-side on the desktop, making switching between tasks seamless.",
          "Step 3: Accessibility: Novices and students with minimal training can operate computers easily using menus and touch gestures."
        ],
        "keyTakeaway": "GUI is user-friendly and visual; CLI requires memorizing text syntax but consumes fewer system resources."
      },
      {
        "id": "ex-jhs2ict-t2-2",
        "title": "Identifying File Formats by Extension",
        "problem": "Identify the appropriate default application category for the following file extensions: (a) document.docx, (b) accounts.xlsx, (c) presentation.pptx, (d) anthem.mp3.",
        "stepByStepSolution": [
          "Step 1: .docx -> Word Processing application (Microsoft Word, Google Docs).",
          "Step 2: .xlsx -> Spreadsheet application (Microsoft Excel, Google Sheets).",
          "Step 3: .pptx -> Presentation software (Microsoft PowerPoint, Google Slides).",
          "Step 4: .mp3 -> Digital Audio Player / Multimedia application."
        ],
        "keyTakeaway": "File extensions inform the operating system which application is needed to read and execute the file."
      }
    ]
  },
  {
    "id": "jhs2-ict-t3-word-processing-formatting",
    "subjectId": "ict",
    "level": "JHS 2",
    "term": 1,
    "orderIndex": 3,
    "title": "Advanced Word Processing: Tables, Headers, Footers & Formatting",
    "description": "Master document formatting, inserting and styling tables, headers, footers, page numbering, margins, tab stops, and mail merge.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=S-nHYzK-BVg",
    "youtubeId": "S-nHYzK-BVg",
    "keyNotes": "• Document Formatting Essentials:\n  - Margins: The blank white space around the top, bottom, left, and right borders of a page (Standard: 1 inch / 2.54 cm).\n  - Orientation: Portrait (vertical page layout) vs Landscape (horizontal page layout).\n  - Paragraph Alignment: Left align, Center align, Right align, and Justify (spreads text evenly between left and right margins).\n  - Line Spacing: Single (1.0), 1.5 lines, and Double (2.0) spacing.\n• Headers, Footers & Page Numbers:\n  - Header: Repetitive text printed in the top margin of every page (document title, school name).\n  - Footer: Repetitive text in the bottom margin (copyright, author, date).\n  - Page Numbering: Inserted in header or footer; can be customized as Roman numerals (i, ii, iii) or Arabic numerals (1, 2, 3).\n• Table Manipulation:\n  - Grids of Rows (horizontal) and Columns (vertical); intersection is a Cell.\n  - Merging Cells: Combining two or more adjacent cells into a single larger cell.\n  - Splitting Cells: Dividing one cell into multiple rows or columns.\n• Mail Merge Feature:\n  - An automated process of combining a template main document (e.g. form letter) with a structured data source (e.g. Excel spreadsheet of student names and addresses) to produce personalized individual letters, report cards, or envelopes en masse.",
    "examples": [
      {
        "id": "ex-jhs2ict-t3-1",
        "title": "Applying Table Cell Merging in a School Timetable",
        "problem": "Explain the procedure to merge 5 cells across a row in Microsoft Word to create a centered 'BREAK TIME' banner in a class timetable.",
        "stepByStepSolution": [
          "Step 1: Click and drag the mouse across the 5 adjacent cells in the target row to highlight them.",
          "Step 2: Right-click the highlighted selection and choose 'Merge Cells' (or navigate to Table Tools -> Layout tab -> click 'Merge Cells').",
          "Step 3: Type 'BREAK TIME' into the newly merged cell and click the 'Center Alignment' button to format it."
        ],
        "keyTakeaway": "Merging combines selected cells into one single wide cell across rows or columns."
      },
      {
        "id": "ex-jhs2ict-t3-2",
        "title": "The Utility of Mail Merge in School Administration",
        "problem": "A headmaster needs to print terminal report cards for 300 students with unique marks and attendance. Why is Mail Merge the most efficient tool?",
        "stepByStepSolution": [
          "Step 1: Creating 300 individual files manually is time-consuming and error-prone.",
          "Step 2: Mail Merge uses one master report card template with merge fields (<Student_Name>, <Math_Score>, <Teacher_Remark>).",
          "Step 3: It links to an Excel student database and automatically generates 300 customized, individual report cards in seconds."
        ],
        "keyTakeaway": "Mail merge saves hours of manual typing by fusing database records into a single template document."
      }
    ]
  },
  {
    "id": "jhs2-ict-t4-spreadsheets-basics",
    "subjectId": "ict",
    "level": "JHS 2",
    "term": 1,
    "orderIndex": 4,
    "title": "Introduction to Electronic Spreadsheets: Worksheets, Cells & Formulas",
    "description": "Explore spreadsheet anatomy (workbooks, sheets, columns, rows, cell addresses), data types, and fundamental formulas (SUM, AVERAGE, COUNT, MIN, MAX).",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=k1VUZEVuG14",
    "youtubeId": "k1VUZEVuG14",
    "keyNotes": "• Spreadsheet Terminology:\n  - Workbook: An Excel file containing one or more worksheets (.xlsx).\n  - Worksheet: A single grid page made of horizontal Rows (numbered 1, 2, 3...) and vertical Columns (lettered A, B, C... Z, AA...).\n  - Cell: The intersection of a row and a column.\n  - Cell Address / Reference: Column letter followed by row number (e.g. B4 = column B, row 4).\n  - Active Cell: The currently selected cell highlighted with a bold border.\n  - Name Box: Displays the address of the active cell.\n  - Formula Bar: Displays the actual formula, function, or data content entered in the active cell.\n• Data Types in Spreadsheets:\n  - Labels (Text): Left-aligned automatically by default (e.g. 'Student Name').\n  - Values (Numbers): Right-aligned automatically by default (e.g. 85, 450.50).\n  - Formulas & Functions: Mathematical instructions that always begin with an equal sign (=).\n• Essential Built-in Functions:\n  - =SUM(A1:A10): Calculates the total of numbers in range A1 to A10.\n  - =AVERAGE(B2:B20): Computes the arithmetic mean.\n  - =COUNT(C1:C15): Counts the number of cells containing numerical values.\n  - =MAX(D1:D30): Returns the highest numerical value in the range.\n  - =MIN(D1:D30): Returns the lowest numerical value in the range.\n• Order of Operations: Spreadsheets strictly follow BODMAS / PEMDAS.",
    "examples": [
      {
        "id": "ex-jhs2ict-t4-1",
        "title": "Writing a Formula to Calculate Total and Average Marks",
        "problem": "In an Excel worksheet, Kofi's scores are entered in cells C2 (Math: 78), D2 (Science: 84), and E2 (English: 90). Write the exact formula to compute: (a) his Total Mark in F2, (b) his Average Mark in G2.",
        "stepByStepSolution": [
          "Step 1: Every formula must start with an equal sign (=).",
          "Step 2: Total Mark formula in F2: '=SUM(C2:E2)' or '=C2+D2+E2'.",
          "Step 3: Average Mark formula in G2: '=AVERAGE(C2:E2)' or '=(C2+D2+E2)/3'.",
          "Step 4: Evaluating =SUM(78, 84, 90) yields 252; =AVERAGE(78, 84, 90) yields 84."
        ],
        "keyTakeaway": "Always use uppercase function names with an equal sign (=) and range notation (first_cell:last_cell)."
      },
      {
        "id": "ex-jhs2ict-t4-2",
        "title": "Interpreting Error Messages in Spreadsheets",
        "problem": "What does the error '#####' or '#DIV/0!' signify when displayed in an Excel cell?",
        "stepByStepSolution": [
          "Step 1: '#####' means the column width is too narrow to display the complete numerical value. Solution: Double-click column header boundary to widen it.",
          "Step 2: '#DIV/0!' means the formula is attempting to divide a number by zero or an empty cell, which is mathematically invalid."
        ],
        "keyTakeaway": "'#####' means expand column width; '#DIV/0!' indicates an illegal division by zero."
      }
    ]
  },
  {
    "id": "jhs2-ict-t5-computer-networks",
    "subjectId": "ict",
    "level": "JHS 2",
    "term": 1,
    "orderIndex": 5,
    "title": "Computer Networks: Topologies, Types & Transmission Media",
    "description": "Understand LAN, MAN, WAN, network topologies (Star, Bus, Ring, Mesh), guided media (copper, fiber optic), and wireless transmission (Wi-Fi, Bluetooth).",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=3QhU9jd03a0",
    "youtubeId": "3QhU9jd03a0",
    "keyNotes": "• Computer Network Definition: A collection of interconnected computers, servers, and communication devices that share hardware, software, data, and internet access.\n• Network Classifications by Geographic Scope:\n  - Personal Area Network (PAN): Interconnects personal devices within a few meters (Bluetooth connecting phone to wireless earbuds).\n  - Local Area Network (LAN): Confined to a single room, school lab, or building (JHS computer laboratory).\n  - Metropolitan Area Network (MAN): Spans a town or city (interconnecting branch banks across Accra).\n  - Wide Area Network (WAN): Spans countries or continents (the global Internet).\n• Network Physical Topologies:\n  - Star Topology: All nodes connect to a central switch/hub. If one cable fails, only that node goes down; if central hub fails, whole network crashes. (Most popular).\n  - Bus Topology: Nodes connect to a single central backbone cable terminated at both ends. Cheap, but if backbone cable breaks, entire network goes down.\n  - Ring Topology: Computers connected in a closed circular loop; data tokens travel in one direction.\n  - Mesh Topology: Every device connects to every other device; highly fault-tolerant and secure, but very expensive to cable.\n• Transmission Media:\n  - Guided (Bounded / Wired): Twisted Pair Cable (Ethernet RJ-45), Coaxial Cable, Fiber Optic Cable (uses light pulses, immune to electromagnetic interference, fastest speeds).\n  - Unguided (Unbounded / Wireless): Radio waves (Wi-Fi, Cellular 4G/5G), Microwaves (satellite communication, directional masts), Infrared.",
    "examples": [
      {
        "id": "ex-jhs2ict-t5-1",
        "title": "Choosing Network Topology for a School Computer Lab",
        "problem": "Recommend and justify the best network topology for wiring a new 30-computer JHS laboratory.",
        "stepByStepSolution": [
          "Step 1: Recommendation: Star Topology.",
          "Step 2: Justification 1: Ease of troubleshooting and fault tolerance. If student PC #4 has a damaged cable, the remaining 29 computers continue operating normally.",
          "Step 3: Justification 2: Scalability. Adding a new computer simply requires plugging another Ethernet cable into the central switch without disturbing the existing network."
        ],
        "keyTakeaway": "Star topology is standard in school labs due to central switch management and fault isolation."
      },
      {
        "id": "ex-jhs2ict-t5-2",
        "title": "Comparing Twisted Pair with Fiber Optic Cables",
        "problem": "Why are submarine fiber optic cables used to connect Ghana to global internet backbones instead of copper cables?",
        "stepByStepSolution": [
          "Step 1: Bandwidth capacity: Fiber optic transmits data as pulses of light through glass fibers, providing gigabits per second compared to limited electrical copper bandwidth.",
          "Step 2: Signal attenuation over distance: Fiber optic signals degrade far less over thousands of kilometers under the Atlantic Ocean.",
          "Step 3: Electromagnetic immunity: Fiber optic cables are completely immune to lightning strikes and electrical interference."
        ],
        "keyTakeaway": "Fiber optic uses light pulses through glass strands, offering tremendous speed, bandwidth, and resistance to interference."
      }
    ]
  },
  {
    "id": "jhs2-ict-t6-internet-web-browsing",
    "subjectId": "ict",
    "level": "JHS 2",
    "term": 2,
    "orderIndex": 6,
    "title": "Internet Architecture, Web Browsing & Search Techniques",
    "description": "Explore the client-server model, IP addresses, DNS, URLs, HTTP vs HTTPS, web browsers vs search engines, and Boolean search operators.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=7_LPdttKXPc",
    "youtubeId": "7_LPdttKXPc",
    "keyNotes": "• The Architecture of the Internet:\n  - The Internet: A global system of interconnected computer networks utilizing the standard TCP/IP protocol suite.\n  - World Wide Web (WWW): An information space of interlinked hypertext documents accessed via the Internet. (Created by Sir Tim Berners-Lee in 1989).\n  - Client-Server Architecture: Client computers (student laptops/phones) request web resources; Servers (high-performance host machines) store and deliver web pages.\n  - IP Address: Numerical identifier assigned to every device on a network (IPv4 e.g. 192.168.1.1; IPv6 128-bit).\n  - Domain Name System (DNS): The 'phonebook' of the internet that translates human-readable domain names (e.g. academicprep.com) into numerical IP addresses.\n• Anatomy of a Uniform Resource Locator (URL):\n  - Example: https://www.academicprep.com/jhs/science\n  - 'https://' = Protocol (Hypertext Transfer Protocol Secure, encrypted with SSL/TLS).\n  - 'www.academicprep.com' = Domain Name / Host Server.\n  - '/jhs/science' = Directory path and resource name.\n• Web Browser vs Search Engine:\n  - Web Browser: Application software used to view web pages (Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge).\n  - Search Engine: An internet-based database software program that searches the web for websites matching user keywords (Google, Bing, Yahoo).\n• Advanced Search Techniques:\n  - Quotation marks (\" \"): Exact phrase matching (e.g. \"Battle of Fomena\").\n  - Minus sign (-): Excludes specific terms (e.g. cocoa production -ivory coast).\n  - OR operator: Finds either term.\n  - Site: operator: Searches within a specific domain (e.g. site:gov.gh BECE timetable).",
    "examples": [
      {
        "id": "ex-jhs2ict-t6-1",
        "title": "Deconstructing a URL",
        "problem": "Break down the URL 'https://ges.gov.gh/curriculum/jhs' into its 3 fundamental components.",
        "stepByStepSolution": [
          "Step 1: Protocol: 'https://' specifies the secure HyperText Transfer Protocol.",
          "Step 2: Domain Name / Host: 'ges.gov.gh' identifies the registered domain of the Ghana Education Service.",
          "Step 3: Path / Location: '/curriculum/jhs' specifies the exact folder directory on the server."
        ],
        "keyTakeaway": "A URL consists of the Protocol, the Domain Name, and the Resource Path."
      },
      {
        "id": "ex-jhs2ict-t6-2",
        "title": "Distinguishing Web Browsers from Search Engines",
        "problem": "Explain why it is technically incorrect to state: 'Google Chrome is a search engine.'",
        "stepByStepSolution": [
          "Step 1: Define Google Chrome: Chrome is an application program (Web Browser) installed on a device to render and display HTML web pages.",
          "Step 2: Define Google Search: Google Search is an online service (Search Engine) that crawls and indexes web content.",
          "Step 3: Relationship: A user runs the Google Chrome browser to visit the Google search engine website."
        ],
        "keyTakeaway": "A browser is the software you view the web with; a search engine is an online website database you search with."
      }
    ]
  },
  {
    "id": "jhs2-ict-t7-spreadsheet-functions-charts",
    "subjectId": "ict",
    "level": "JHS 2",
    "term": 2,
    "orderIndex": 7,
    "title": "Intermediate Spreadsheets: Logical Functions (IF), Sorting & Charts",
    "description": "Learn logical condition testing with IF statements, sorting and filtering data, and generating and formatting column, bar, and pie charts.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=0kFj7f8v-7V",
    "youtubeId": "0kFj7f8v-7V",
    "keyNotes": "• The Logical IF Function:\n  - Syntax: =IF(logical_test, value_if_true, value_if_false)\n  - Purpose: Evaluates a condition and returns one value if the condition is TRUE, and another value if FALSE.\n  - Example: =IF(C2 >= 50, \"Pass\", \"Fail\")\n  - Nested IF: Placing an IF statement inside another IF statement to handle multiple grade boundaries (e.g. Grades 1 to 9).\n• Data Sorting & Filtering:\n  - Sorting: Arranging rows in ascending order (A to Z, smallest to largest) or descending order (Z to A, largest to smallest).\n  - Filtering: Temporarily displaying only rows that satisfy specific criteria (e.g. display only students with score > 80) while hiding other rows.\n• Chart Types & Applications:\n  - Column / Bar Chart: Compares discrete categories of data (e.g. comparing student scores across 4 subjects).\n  - Line Chart: Shows trends and changes continuous over time (e.g. temperature variations over 12 months).\n  - Pie Chart: Shows proportions of a whole (percentage breakdown of a household budget; slices must sum to 100%).\n• Chart Components: Chart Title, Legend (key explaining colors), Axes (X-axis category, Y-axis value), and Data Labels.",
    "examples": [
      {
        "id": "ex-jhs2ict-t7-1",
        "title": "Constructing a Logical IF Grading Formula",
        "problem": "In cell D2, a student has an aggregate score of 72. Write an Excel formula for cell E2 that assigns 'Distinction' if the score is 70 or above, otherwise 'Pass'.",
        "stepByStepSolution": [
          "Step 1: Identify condition: D2 >= 70.",
          "Step 2: Identify True outcome: 'Distinction'.",
          "Step 3: Identify False outcome: 'Pass'.",
          "Step 4: Combine into IF syntax: '=IF(D2>=70, \"Distinction\", \"Pass\")'."
        ],
        "keyTakeaway": "Text returned by IF statements must always be wrapped in double quotation marks."
      },
      {
        "id": "ex-jhs2ict-t7-2",
        "title": "Selecting the Right Chart for Electoral Results",
        "problem": "Which chart type is best suited to display the percentage share of presidential votes won by 4 political parties in Ghana, and why?",
        "stepByStepSolution": [
          "Step 1: Identify data nature: The vote shares represent percentage components of 100% total votes cast.",
          "Step 2: Select chart: A Pie Chart.",
          "Step 3: Justification: Pie charts are uniquely designed to visualize proportional shares of a whole where each slice represents a party's percentage contribution."
        ],
        "keyTakeaway": "Use Pie Charts to show percentage proportions of a single whole."
      }
    ]
  },
  {
    "id": "jhs2-ict-t8-presentation-software",
    "subjectId": "ict",
    "level": "JHS 2",
    "term": 2,
    "orderIndex": 8,
    "title": "Presentation Software: Designing Slide Shows & Multimedia",
    "description": "Design engaging presentations using slide layouts, visual themes, slide transitions, object animations, multimedia integration, and presenter tools.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=XF34-Wu6qWU",
    "youtubeId": "XF34-Wu6qWU",
    "keyNotes": "• Presentation Software Fundamentals:\n  - Purpose: Creating visual slide shows to support oral presentations, lectures, and business pitches (e.g. Microsoft PowerPoint, Google Slides, Apple Keynote).\n  - Slide: A single page in a presentation.\n  - Slide Layout: Pre-formatted templates arranging placeholders for titles, bullet lists, charts, and images.\n• Principles of Effective Slide Design:\n  - The 6 x 6 Rule: Maximum 6 bullet points per slide, with roughly 6 words per bullet to avoid text crowding.\n  - High Contrast: Dark text on light background, or light text on dark background.\n  - Consistent Typography: Use readable sans-serif fonts (Arial, Calibri, Trebuchet) with header size 32–40pt and body size 20–24pt.\n• Animation vs Transition:\n  - Slide Transition: The visual motion effect that occurs when advancing from one slide to the next slide (e.g. Fade, Wipe, Push).\n  - Custom Animation: Visual motion applied to individual elements ON a slide (e.g. title flying in, bullet points appearing on click).\n  - Animation Categories: Entrance (green), Emphasis (yellow), Exit (red), Motion Paths.\n• Delivery Views: Normal View, Slide Sorter View (overview of all slides for rearranging), Slide Show View (F5 - full screen audience presentation), and Presenter View (shows timer and speaker notes on private screen).",
    "examples": [
      {
        "id": "ex-jhs2ict-t8-1",
        "title": "Differentiating Transitions from Animations",
        "problem": "In a PowerPoint presentation on 'Pollution in Ghana', distinguish between applying a transition and applying an animation.",
        "stepByStepSolution": [
          "Step 1: Transition: Affects the entire slide as it appears on screen (e.g. Slide 2 fades smoothly into Slide 3).",
          "Step 2: Animation: Affects specific items on a single slide (e.g. a picture of River Pra flies in from the left after the headline appears).",
          "Step 3: Control: Transitions are configured under the Transitions tab; element movements are configured under the Animations tab."
        ],
        "keyTakeaway": "Transitions move between slides; animations move objects within a single slide."
      },
      {
        "id": "ex-jhs2ict-t8-2",
        "title": "Applying Design Best Practices to a Crowded Slide",
        "problem": "A student pastes 4 full paragraphs of text onto a single slide for a class project. Explain two design improvements to make it professional.",
        "stepByStepSolution": [
          "Step 1: Condense into key bullet points: Apply the 6x6 rule by extracting core ideas into 4 concise bullet points rather than paragraphs.",
          "Step 2: Add visual multimedia: Replace text descriptions with a labeled high-resolution photograph or diagram to reinforce oral delivery.",
          "Step 3: Move supporting details to Speaker Notes so the presenter can refer to them without cluttering the screen."
        ],
        "keyTakeaway": "Slides should feature concise bullet points and relevant imagery, not dense paragraphs."
      }
    ]
  },
  {
    "id": "jhs2-ict-t9-intro-algorithms-flowcharts",
    "subjectId": "ict",
    "level": "JHS 2",
    "term": 2,
    "orderIndex": 9,
    "title": "Algorithms & Problem Solving: Flowcharts & Pseudocode",
    "description": "Formulate computational solutions, master algorithmic sequences, flowchart standard symbols, pseudocode structures, and dry-run tracing.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=6hfOvs8pY1k",
    "youtubeId": "6hfOvs8pY1k",
    "keyNotes": "• Computational Thinking and Algorithms:\n  - Algorithm: A finite, step-by-step sequence of unambiguous instructions designed to solve a specific computational problem or complete a task.\n  - Characteristics of a Good Algorithm: Clear and unambiguous, well-defined inputs and outputs, finite (must terminate after finite steps), effective and feasible.\n• Core Control Structures:\n  1. Sequence: Executing instructions in chronological order, one after another.\n  2. Selection (Branching): Making decisions based on conditions (IF...THEN...ELSE).\n  3. Iteration (Looping): Repeating a block of instructions until a condition is met (WHILE...DO, FOR...NEXT).\n• Flowchart Symbols:\n  - Oval (Terminal): Marks START or STOP / END.\n  - Parallelogram: INPUT data or OUTPUT display (e.g. Read Score, Print Average).\n  - Rectangle (Process): Arithmetic calculations and data manipulation (e.g. Sum = A + B).\n  - Diamond (Decision): Tests a conditional question with two branch exits (Yes/No, True/False).\n  - Flow Lines (Arrows): Indicate directional sequence of execution.\n• Pseudocode: An informal, high-level English-like description of an algorithm that mimics programming syntax without strict language grammar.",
    "examples": [
      {
        "id": "ex-jhs2ict-t9-1",
        "title": "Writing Pseudocode to Find the Average of Two Numbers",
        "problem": "Write structured pseudocode to accept two numbers, calculate their average, and display the result.",
        "stepByStepSolution": [
          "Step 1: START",
          "Step 2: INPUT Num1, Num2",
          "Step 3: Sum = Num1 + Num2",
          "Step 4: Average = Sum / 2",
          "Step 5: OUTPUT Average",
          "Step 6: STOP"
        ],
        "keyTakeaway": "Pseudocode follows a logical sequence: Start -> Input -> Process -> Output -> Stop."
      },
      {
        "id": "ex-jhs2ict-t9-2",
        "title": "Mapping an Algorithm into Flowchart Symbols",
        "problem": "Identify the correct flowchart symbol for: (a) 'Is Age >= 18?', (b) 'Enter student mark', (c) 'Total = Mark1 + Mark2'.",
        "stepByStepSolution": [
          "Step 1: 'Is Age >= 18?' is a conditional decision with two branches (Yes/No) -> Diamond symbol.",
          "Step 2: 'Enter student mark' is capturing data from the user -> Parallelogram (Input/Output symbol).",
          "Step 3: 'Total = Mark1 + Mark2' is an internal arithmetic calculation -> Rectangle (Process symbol)."
        ],
        "keyTakeaway": "Diamond = Decision; Parallelogram = Input/Output; Rectangle = Process."
      }
    ]
  },
  {
    "id": "jhs2-ict-t10-block-programming",
    "subjectId": "ict",
    "level": "JHS 2",
    "term": 3,
    "orderIndex": 10,
    "title": "Programming Concepts: Block-Based Coding with Scratch",
    "description": "Implement interactive programs using Scratch: sprites, stages, coordinates (X, Y), event triggers, loops, conditional blocks, and variables.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Z1KEJz4sJzE",
    "youtubeId": "Z1KEJz4sJzE",
    "keyNotes": "• Block-Based Programming Environment (Scratch):\n  - Created by MIT Media Lab; allows learners to snap together graphical programming blocks like puzzle pieces, eliminating syntax errors.\n  - Stage: The background area where the interactive project plays out (dimensions: 480 pixels wide from X: -240 to +240; 360 pixels high from Y: -180 to +180). Center is (0, 0).\n  - Sprite: Visual objects, characters, or actors that perform actions based on coded scripts.\n• Major Block Palettes:\n  1. Motion (Blue): Controls position, movement, and direction (e.g. 'move 10 steps', 'go to x: 0 y: 0', 'point in direction 90').\n  2. Looks (Purple): Controls appearance, costumes, speech bubbles ('say Hello! for 2 secs').\n  3. Events (Yellow): Hat blocks that start scripts (e.g. 'when green flag clicked', 'when key space pressed').\n  4. Control (Orange): Manages execution flow with loops ('repeat 10', 'forever') and decisions ('if...then...else').\n  5. Sensing (Light Blue): Detects touching colors, mouse position, keyboard presses.\n  6. Variables (Dark Orange): Containers that store dynamic data values (e.g. 'Score', 'Lives', 'Timer').\n• Message Broadcasting: Allows sprites to communicate with each other by sending signals ('broadcast [Game Over]').",
    "examples": [
      {
        "id": "ex-jhs2ict-t10-1",
        "title": "Coding a Sprite to Move in a Square Path",
        "problem": "Describe the block sequence required in Scratch to make a sprite draw a complete square of side length 100 steps.",
        "stepByStepSolution": [
          "Step 1: Start block: 'When Green Flag clicked'.",
          "Step 2: Clear and lower pen: 'erase all', 'pen down'.",
          "Step 3: Repeat loop: Use 'repeat 4' block.",
          "Step 4: Inside loop: 'move 100 steps' followed by 'turn clockwise 90 degrees'.",
          "Step 5: Add 'wait 0.5 secs' inside the loop to observe the drawing animation."
        ],
        "keyTakeaway": "A square has 4 equal sides and 90-degree turns, perfectly modeled with a 'repeat 4' loop."
      },
      {
        "id": "ex-jhs2ict-t10-2",
        "title": "Implementing a Score Counter with Variables",
        "problem": "Explain how to program a coin-collecting game in Scratch where the score increases by 1 each time the player touches a gold coin.",
        "stepByStepSolution": [
          "Step 1: In the Variables palette, click 'Make a Variable' and name it 'Score'.",
          "Step 2: Under 'when green flag clicked', set 'Score' to 0.",
          "Step 3: Inside a 'forever' loop on the coin sprite, insert: 'if touching [PlayerSprite] then'.",
          "Step 4: Inside the condition: 'change [Score] by 1', play a sound, and 'hide' or relocate the coin."
        ],
        "keyTakeaway": "Variables store numerical scores and can be updated dynamically using 'change [Variable] by 1'."
      }
    ]
  },
  {
    "id": "jhs2-ict-t11-cybersecurity-threats",
    "subjectId": "ict",
    "level": "JHS 2",
    "term": 3,
    "orderIndex": 11,
    "title": "Cyber Security Threats: Malware, Phishing & Social Engineering",
    "description": "Analyze cybersecurity vectors: computer viruses, worms, trojans, ransomware, spyware, phishing scams, social engineering, and botnets.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=inWWhr5tnEA",
    "youtubeId": "inWWhr5tnEA",
    "keyNotes": "• Concept of Cyber Security: Technologies, processes, and practices designed to protect computer networks, devices, programs, and data from attack, unauthorized access, or destruction.\n• Malicious Software (Malware) Types:\n  - Virus: A malicious program that attaches itself to a host program or file and replicates only when the infected host file is executed.\n  - Worm: A standalone program that replicates automatically across a network without requiring a host program or human intervention, consuming bandwidth.\n  - Trojan Horse: Disguised as legitimate, harmless software (e.g. a free game) but contains hidden malicious payloads that open backdoors for hackers.\n  - Ransomware: Encrypts the victim's files and demands a monetary ransom payment (often in cryptocurrency) to restore access.\n  - Spyware: Secretly monitors and logs user activity, keystrokes (keyloggers), and passwords, transmitting them to cybercriminals.\n• Social Engineering & Phishing:\n  - Social Engineering: Manipulating psychological weaknesses to trick people into revealing confidential credentials.\n  - Phishing: Fraudulent communications (emails, SMS/'smishing', fake websites) disguised as coming from reputable institutions (e.g. banks, MTN MoMo, WAEC) to deceive victims into entering passwords or PINs.\n  - Denial of Service (DoS / DDoS): Flooding a web server with fake traffic to overwhelm it and crash legitimate user access.",
    "examples": [
      {
        "id": "ex-jhs2ict-t11-1",
        "title": "Differentiating a Computer Virus from a Worm",
        "problem": "Tabulate two key differences between a computer virus and a computer worm.",
        "stepByStepSolution": [
          "Step 1: Host Dependency: A virus requires an existing host file (.exe, .docx) to attach to; a worm is an independent standalone program.",
          "Step 2: Execution Mechanism: A virus requires human activation (e.g. running an infected file); a worm replicates and spreads automatically across network connections without human assistance."
        ],
        "keyTakeaway": "Viruses need human action and a host file; worms are self-replicating standalone programs."
      },
      {
        "id": "ex-jhs2ict-t11-2",
        "title": "Recognizing a Phishing Attempt",
        "problem": "Kofi receives an SMS stating: 'MTN Mobile Money Alert: Your account is suspended. Click http://mtn-login-verify.com to unlock.' How should he identify and respond to this threat?",
        "stepByStepSolution": [
          "Step 1: Identify red flags: Unofficial weird URL domain ('mtn-login-verify.com' instead of official MTN domain), urgency to create panic, and requesting credentials via SMS link.",
          "Step 2: Diagnosis: This is a classic 'smishing' (SMS phishing) scam designed to steal his Mobile Money PIN.",
          "Step 3: Response: Do NOT click the link; report the phone number to the official telecom provider and delete the message."
        ],
        "keyTakeaway": "Legitimate institutions never demand PINs or passwords via SMS links; never click unverified urgent links."
      }
    ]
  },
  {
    "id": "jhs2-ict-t12-data-protection-privacy",
    "subjectId": "ict",
    "level": "JHS 2",
    "term": 3,
    "orderIndex": 12,
    "title": "Information Privacy, Data Protection & Cyber Hygiene",
    "description": "Explore data security best practices: strong passwords, Two-Factor Authentication (2FA), data encryption, backups, and the Ghana Data Protection Act.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=sdpxddDzXfE",
    "youtubeId": "sdpxddDzXfE",
    "keyNotes": "• Principles of Cyber Hygiene:\n  - Strong Passwords: Minimum 12 characters combining uppercase letters, lowercase letters, numbers, and symbols (e.g. 'T3m@_Ak0s0mbo#2026'); never use predictable info (birthdays, names, '123456').\n  - Two-Factor Authentication (2FA): Requires two verification factors: (1) Something you know (password) + (2) Something you have (OTP code sent to mobile phone or biometric fingerprint).\n  - Regular Software Updates & Patching: Installing operating system and antivirus security patches to fix vulnerabilities exploited by hackers.\n• Data Backup Strategies:\n  - Data Backup: Creating duplicate copies of files on independent media to protect against hardware failure, theft, or ransomware.\n  - The 3-2-1 Backup Rule: Keep 3 copies of important data on 2 different physical media, with 1 copy stored offsite or in cloud storage (Google Drive, OneDrive).\n• Ghana Data Protection Act 2012 (Act 843):\n  - Enacted by the Parliament of Ghana to protect personal privacy and individual data rights.\n  - Establishes the Data Protection Commission (DPC).\n  - Principles: Data must be processed lawfully and transparently, collected for specific legitimate purposes, kept accurate and updated, and protected with adequate security measures.\n  - Rights of Data Subjects: Right to access their personal data, right to request correction of errors, and right to object to unauthorized data sharing.",
    "examples": [
      {
        "id": "ex-jhs2ict-t12-1",
        "title": "Evaluating Password Strength",
        "problem": "Compare the security of two passwords: Password A: 'kofimensah2010'; Password B: 'K0f!#M3n$ah92'. Explain why Password B is vastly superior.",
        "stepByStepSolution": [
          "Step 1: Password A uses ordinary lowercase words and a birth year, making it vulnerable to dictionary and brute-force cracking tools.",
          "Step 2: Password B integrates uppercase letters, lowercase letters, numbers (0, 3, 9, 2), and special symbols (!, #, $).",
          "Step 3: This high entropy exponentially increases the time required for automated password-cracking algorithms to guess it."
        ],
        "keyTakeaway": "Strong passwords blend uppercase, lowercase, numbers, and special symbols with no predictable dictionary words."
      },
      {
        "id": "ex-jhs2ict-t12-2",
        "title": "Understanding Two-Factor Authentication (2FA)",
        "problem": "A student's school portal password was compromised by a classmate who peeked at her keyboard. Why did 2FA prevent unauthorized access?",
        "stepByStepSolution": [
          "Step 1: Password is only Factor 1 (something she knows).",
          "Step 2: 2FA requires Factor 2 (something she has) — a unique, time-sensitive 6-digit OTP code sent directly to her registered phone.",
          "Step 3: Without physical possession of her mobile phone, the impostor cannot complete the authentication process."
        ],
        "keyTakeaway": "2FA blocks unauthorized logins even when passwords are stolen or compromised."
      }
    ]
  },
  {
    "id": "jhs2-ict-t13-digital-footprint-ethics",
    "subjectId": "ict",
    "level": "JHS 2",
    "term": 3,
    "orderIndex": 13,
    "title": "Digital Citizenship, Copyright & Intellectual Property",
    "description": "Understand digital footprints, netiquette, intellectual property rights, software piracy, copyright infringement, open-source licensing, and ethical AI use.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=ottnH4kH6qE",
    "youtubeId": "ottnH4kH6qE",
    "keyNotes": "• Digital Citizenship & Digital Footprint:\n  - Digital Footprint: The permanent record and trail of digital data left behind when using the internet (visited websites, social media posts, comments, photos, location logs).\n  - Passive Footprint: Collected without user direct intent (IP tracking, cookies).\n  - Active Footprint: Intentionally shared data (photos, blog posts, messages).\n  - Permanence: Content posted online can be archived, screenshotted, and retrieved years later by university admission boards and prospective employers.\n• Netiquette (Internet Etiquette):\n  - Respecting others online, avoiding cyberbullying and trolling, verifying information before sharing to combat fake news, and refraining from typing in ALL CAPS (viewed as shouting).\n• Intellectual Property and Copyright Law in Ghana:\n  - Copyright: Legal protection granted to creators of original literary, musical, artistic, and software works. (Copyright Act of Ghana 2005, Act 690).\n  - Plagiarism: Copying another person's creative work or ideas and passing them off as one's own without appropriate citation or attribution.\n  - Software Piracy: Unauthorized copying, downloading, distribution, or cracking of copyrighted commercial software (e.g. cracked Windows or games).\n• Software Licensing Models:\n  - Proprietary / Commercial: Source code is private; users must purchase a license (Microsoft Windows, Adobe Photoshop).\n  - Open Source: Source code is publicly available for anyone to inspect, modify, and enhance (Linux, Python, LibreOffice).\n  - Creative Commons (CC): Public licenses that grant creators flexible ways to license their works for free educational use with attribution.",
    "examples": [
      {
        "id": "ex-jhs2ict-t13-1",
        "title": "Managing One's Personal Digital Footprint",
        "problem": "Give two reasons why a JHS student should carefully consider what comments and photos they publish on social media platforms.",
        "stepByStepSolution": [
          "Step 1: Permanent traceability: Deleting a post does not guarantee permanent erasure; other users can screenshot, share, or archive it.",
          "Step 2: Reputational consequences: Future academic scholarships, high school prefect selections, and university admissions increasingly audit candidates' online history for character and maturity."
        ],
        "keyTakeaway": "A digital footprint is permanent; publish only respectful content that reflects positive character."
      },
      {
        "id": "ex-jhs2ict-t13-2",
        "title": "Distinguishing Proprietary from Open-Source Software",
        "problem": "Explain the difference between proprietary software (e.g. Microsoft Office) and open-source software (e.g. LibreOffice).",
        "stepByStepSolution": [
          "Step 1: Source code accessibility: In proprietary software, the source code is kept secret and owned exclusively by the company; in open-source software, the source code is freely open to the public.",
          "Step 2: Cost & distribution: Proprietary software requires purchasing paid commercial user licenses; open-source software can be freely downloaded, copied, and customized by anyone."
        ],
        "keyTakeaway": "Proprietary software is closed and commercial; open-source software is free, transparent, and community-driven."
      }
    ]
  }
];
