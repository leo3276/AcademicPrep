// Ghanaian JHS 2 Computing Detailed Study Notes
// Based on NaCCA / GES Common Core Programme (CCP) Curriculum
// Complete textbook-grade notes for all 13 JHS 2 topics

import { DetailedNotes } from './types';

export const JHS2_COMPUTING_DETAILED_NOTES: Record<string, DetailedNotes> = {
  "jhs2-ict-t1-components-generation": {
    "topicId": "jhs2-ict-t1-components-generation",
    "introduction": "Computer systems have undergone dramatic technological transformations over the past eight decades, shrinking from multi-room behemoths that consumed immense electric power to microchips smaller than a fingernail. In JHS 2 Computing, students examine the five historical generations of computers, the internal architecture of the CPU (ALU, Control Unit, Registers), clock speed, and motherboard architecture.",
    "overview": "Computer systems have undergone dramatic technological transformations over the past eight decades, shrinking from multi-room behemoths that consumed immense electric power to microchips smaller than a fingernail. In JHS 2 Computing, students examine the five historical generations of computers, the internal architecture of the CPU (ALU, Control Unit, Registers), clock speed, and motherboard architecture.",
    "realWorldContext": "Modern smartphones used across Ghana contain multi-core microprocessors that are thousands of times more powerful than the room-sized vacuum-tube computers that guided the Apollo lunar missions in the 1960s.",
    "objectives": [
      "Trace the historical evolution of computer generations from 1st to 5th generation.",
      "Identify the primary switching technology and memory used in each generation.",
      "Explain the functions of the Arithmetic Logic Unit (ALU), Control Unit (CU), and Registers.",
      "Describe the Fetch-Decode-Execute (machine cycle) orchestrated by the CPU.",
      "Analyze the role of the system clock and clock speed in computer processing performance."
    ],
    "sections": [
      {
        "title": "1. The Five Generations of Computers",
        "content": "Computer history is categorized into five distinct generations based on the underlying electronic switching circuitry that drove computational processing.",
        "bulletPoints": [
          "First Generation (1940–1956): Utilized glass Vacuum Tubes. Enormous in physical size, consumed massive electricity, generated extreme heat, prone to frequent burnouts. Relied on binary Machine Language (0s and 1s) and magnetic drums. Examples: ENIAC, UNIVAC, EDVAC.",
          "Second Generation (1956–1963): Utilized solid-state Transistors invented at Bell Labs. Significantly smaller, faster, cheaper, more energy-efficient. Magnetic core primary memory; introduced Assembly Language and early high-level languages like FORTRAN and COBOL.",
          "Third Generation (1964–1971): Utilized Integrated Circuits (ICs) pioneered by Jack Kilby. Hundreds of transistors fabricated onto tiny silicon semiconductor chips. Keyboards and monitors replaced punch cards; rudimentary operating systems emerged.",
          "Fourth Generation (1971–Present): Powered by Microprocessors using Very Large Scale Integration (VLSI). Millions of transistors placed on a single microchip (Intel 4004). Ushered in personal computers (PCs), laptops, mobile phones, and the Internet.",
          "Fifth Generation (Present & Beyond): Characterized by Artificial Intelligence (AI), Ultra Large Scale Integration (ULSI), quantum computing, voice recognition, and parallel processing."
        ],
        "keyTakeaway": "Computers progressed from vacuum tubes to transistors, integrated circuits, microprocessors, and modern artificial intelligence.",
        "realWorldExample": "The ENIAC weighed over 27 tons and took up 1,800 square feet; a modern laptop weighs 1.5 kilograms and has millions of times more memory."
      },
      {
        "title": "2. The Central Processing Unit (CPU) Architecture",
        "content": "The Central Processing Unit, often called the 'brain' of the computer, interprets and executes all software instructions and coordinates hardware activities.",
        "bulletPoints": [
          "Arithmetic Logic Unit (ALU): The computational engine that carries out all arithmetic operations (addition, subtraction, multiplication, division) and logical decisions (AND, OR, NOT, comparisons such as greater than or equal to).",
          "Control Unit (CU): The supervisor of the CPU. It manages and synchronizes the flow of data across the system by issuing control signals, directing the ALU, memory, and input/output channels.",
          "Registers: Ultra-fast internal temporary memory storage locations inside the processor. Includes the Program Counter (PC), Memory Address Register (MAR), Instruction Register (IR), and the Accumulator (AC).",
          "The System Bus: A collection of parallel wires that transmits data and control signals. Divided into: Data Bus (carries actual data), Address Bus (carries memory locations), and Control Bus (transmits timing and control commands)."
        ],
        "keyTakeaway": "The CPU comprises the ALU for math and logic, the Control Unit for management, and Registers for rapid temporary storage.",
        "realWorldExample": "When calculating student grades, the ALU compares each test score to 50, while the Control Unit loads the scores from RAM and sends the results to the display screen."
      },
      {
        "title": "3. The Machine Cycle (Fetch-Decode-Execute)",
        "content": "Every single instruction processed by a computer must undergo a continuous four-step cycle managed by the Control Unit.",
        "bulletPoints": [
          "1. Fetch: The Control Unit retrieves the next instruction from the computer's primary memory (RAM) using the address stored in the Program Counter.",
          "2. Decode: The Control Unit translates the instruction into binary machine signals that the internal CPU circuitry can understand.",
          "3. Execute: The instruction is carried out. If mathematical or logical, the ALU performs the operation and stores the outcome in the Accumulator register.",
          "4. Store (Writeback): The final result is written back to temporary registers or transferred to primary memory (RAM) for subsequent use.",
          "Repetition: A modern CPU executes billions of these machine cycles every single second without error."
        ],
        "keyTakeaway": "The machine cycle consists of four distinct phases: Fetching, Decoding, Executing, and Storing.",
        "realWorldExample": "When a user presses the 'Enter' key on a calculator app, the CPU fetches the addition instruction, decodes it, adds the numbers in the ALU, and stores the answer on the screen."
      },
      {
        "title": "4. Clock Speed and Processor Performance Factors",
        "content": "Processor performance is determined by several architectural factors that dictate how rapidly instructions are processed.",
        "bulletPoints": [
          "System Clock: A quartz crystal oscillator on the motherboard that pulses electrical ticks at a fixed frequency to synchronize all CPU actions.",
          "Clock Speed: The number of clock cycles a processor can execute per second, measured in Gigahertz (GHz). 1 GHz equals 1 billion cycles per second. A 3.2 GHz processor ticks 3.2 billion times each second.",
          "Processor Word Size: The number of bits a CPU can process in a single clock cycle (e.g., 32-bit vs. 64-bit systems; 64-bit processors handle exponentially larger memory spaces).",
          "Multi-Core Processors: CPUs with two or more independent processing units (cores) on a single chip (Dual-Core, Quad-Core, Octa-Core) enabling true parallel multitasking.",
          "Cache Memory: High-speed static RAM (SRAM) integrated directly onto the CPU die (L1, L2, L3 cache) that stores frequently used data to prevent slow access delays to main RAM."
        ],
        "keyTakeaway": "Processor performance depends on clock speed (GHz), number of CPU cores, word size (64-bit), and on-die cache memory.",
        "realWorldExample": "A quad-core 2.8 GHz processor allows a user to edit a video, download a file, play music, and browse the web simultaneously without freezing."
      }
    ],
    "commonMistakes": [
      "Confusing the 1st generation switching technology (vacuum tubes) with the 2nd generation (transistors).",
      "Believing that the Control Unit performs arithmetic calculations; only the Arithmetic Logic Unit (ALU) does math and logic.",
      "Assuming that a higher clock speed is the sole factor in computer speed; multi-core architecture and RAM capacity also matter greatly.",
      "Thinking that registers are the same as hard drive storage; registers are microscopic, ultra-fast memory units inside the CPU chip itself."
    ],
    "beceExamTips": [
      "In BECE Section A, questions frequently ask for the primary technology of each generation: 1st = Vacuum tubes, 2nd = Transistors, 3rd = Integrated Circuits, 4th = Microprocessors.",
      "Memorize the full names of CPU components: ALU (Arithmetic Logic Unit), CU (Control Unit), RAM (Random Access Memory).",
      "Always state the four stages of the machine cycle in exact chronological order: Fetch -> Decode -> Execute -> Store."
    ],
    "summaryChecklist": [
      "Can I identify the core technology of all 5 computer generations?",
      "Can I distinguish between the roles of the ALU and the Control Unit?",
      "Do I understand the four steps of the CPU machine cycle?",
      "Can I explain how clock speed (GHz) affects processing performance?",
      "Can I identify the three components of the system bus (Data, Address, Control)?"
    ]
  },
  "jhs2-ict-t2-operating-systems": {
    "topicId": "jhs2-ict-t2-operating-systems",
    "introduction": "An operating system is the most fundamental system software running on any computer or smart device. Acting as an invisible manager, it controls hardware components, manages files, allocates memory, schedules CPU time, and presents a user-friendly interface that allows humans to interact effortlessly with complex electronic hardware.",
    "overview": "An operating system is the most fundamental system software running on any computer or smart device. Acting as an invisible manager, it controls hardware components, manages files, allocates memory, schedules CPU time, and presents a user-friendly interface that allows humans to interact effortlessly with complex electronic hardware.",
    "realWorldContext": "When an individual powers on a desktop running Microsoft Windows 11, a MacBook running macOS, or an Android smartphone, the operating system boots up immediately to supervise every touch, keystroke, and app launch.",
    "objectives": [
      "Define an operating system and distinguish system software from application software.",
      "Explain the major resource management functions of an operating system.",
      "Compare Graphical User Interfaces (GUI) with Command Line Interfaces (CLI).",
      "Understand file naming conventions, file paths, directory trees, and common file extensions.",
      "Identify the major desktop, server, and mobile operating systems in common use."
    ],
    "sections": [
      {
        "title": "1. Definition and Core Functions of an Operating System",
        "content": "Without an operating system, computer hardware is merely an inert collection of silicon chips, copper wires, and circuit boards incapable of running user applications.",
        "bulletPoints": [
          "Operating System (OS) Definition: A master collection of system software programs that supervises and controls all hardware and software operations on a computer system.",
          "Processor Management: The OS assigns CPU time slices to concurrent programs, employing preemptive multitasking to ensure smooth system responsiveness.",
          "Memory Management: Tracks every byte of primary storage (RAM) allocated to running programs and dynamically swaps dormant memory pages to disk (Virtual Memory).",
          "File and Disk Management: Structures data on storage drives using hierarchical file systems (NTFS, FAT32, ext4), managing permissions, read/write operations, and directories.",
          "Device Management: Utilizes specialized software translators called Device Drivers to communicate with peripheral devices like printers, webcams, and scanners.",
          "Security and Access Control: Prevents unauthorized user access through user authentication (passwords, PINs, biometrics) and enforces individual privilege boundaries."
        ],
        "keyTakeaway": "The OS manages the CPU, memory, storage files, peripheral hardware, and user security.",
        "realWorldExample": "When you print a document while listening to music and browsing the web, the OS manages CPU time so none of the tasks crash."
      },
      {
        "title": "2. Types of User Interfaces: GUI versus CLI",
        "content": "The user interface determines how human beings communicate commands to the operating system.",
        "bulletPoints": [
          "Graphical User Interface (GUI): A visual interaction environment built upon the WIMP paradigm: Windows, Icons, Menus, and Pointers. Users interact by pointing and clicking a mouse, tapping touchscreens, or dragging visual elements. Examples: Windows 11, macOS, Android, iOS.",
          "Advantages of GUI: Highly intuitive, requires no memorization of complex commands, visual confirmation of actions, friendly to young learners and non-technical users.",
          "Command Line Interface (CLI): A text-based interface where users type alphanumeric commands and strict syntax parameters at a prompt. Examples: MS-DOS, Linux Terminal / Bash, Windows PowerShell.",
          "Advantages of CLI: Consumes very little RAM and processing power, enables rapid automation of administrative scripts, and allows precise control over low-level system settings.",
          "Disadvantages of CLI: Unforgiving of typing typos, requires extensive memorization of command vocabularies, and presents a steep learning curve for novices."
        ],
        "keyTakeaway": "GUI uses visual windows, icons, and mouse pointers; CLI uses typed text commands with strict syntax.",
        "realWorldExample": "Clicking a yellow folder icon to open files is GUI; typing 'cd Documents' in a black terminal window is CLI."
      },
      {
        "title": "3. File Systems, Directory Paths & File Extensions",
        "content": "Computers organize thousands of user files using logical hierarchical directory structures.",
        "bulletPoints": [
          "File: A named collection of related data or instructions stored on secondary storage.",
          "Folder (Directory): A virtual container used to group, classify, and organize files and sub-folders.",
          "Hierarchical Tree: Files are organized from a root drive directory (e.g., C:\\ in Windows) branching down through nested folders.",
          "Absolute vs Relative Path: An absolute path gives the complete address from root (e.g., C:\\Users\\Admin\\Documents\\Math_Exam.pdf). A relative path specifies location relative to the active working directory.",
          "File Extensions: A suffix of 3 or 4 characters preceded by a dot that indicates the file format and tells the OS which application should open it: .docx (Word), .xlsx (Excel), .pptx (PowerPoint), .pdf (Portable Document), .jpg/.png (Image), .mp3 (Audio), .mp4 (Video), .html (Web page), .zip (Compressed archive)."
        ],
        "keyTakeaway": "File paths specify exact storage locations, and file extensions define the format and default software association.",
        "realWorldExample": "Double-clicking 'timetable.xlsx' automatically launches Microsoft Excel because the OS reads the '.xlsx' extension."
      },
      {
        "title": "4. Classification of Operating Systems",
        "content": "Operating systems are engineered for diverse computing form factors and operational environments.",
        "bulletPoints": [
          "Single-User, Single-Tasking OS: Designed to allow only one user to execute one program at a time (e.g., MS-DOS, early mobile embedded systems).",
          "Single-User, Multi-Tasking OS: Allows one user to run multiple applications simultaneously on desktop PCs and laptops (e.g., Windows 10/11, macOS, Ubuntu Linux).",
          "Multi-User, Multi-Tasking OS: Allows hundreds of remote users to log in simultaneously to access shared computational server resources (e.g., Linux enterprise servers, Unix).",
          "Mobile Operating Systems: Optimized for touchscreen handheld devices with power-saving mobile architectures (e.g., Google Android, Apple iOS).",
          "Real-Time Operating Systems (RTOS): Specialized systems that process incoming data instantaneously with strict timing deadlines (e.g., aircraft autopilots, medical life support)."
        ],
        "keyTakeaway": "Operating systems range from single-user mobile systems (Android/iOS) to robust multi-user enterprise server platforms (Linux/Windows Server).",
        "realWorldExample": "Android runs on millions of smartphones across Ghana, offering power efficiency and touchscreen gesture controls."
      }
    ],
    "commonMistakes": [
      "Confusing operating systems (system software) with application software like Microsoft Word or WhatsApp.",
      "Assuming that changing a file extension (e.g. renaming .txt to .mp4) actually converts the internal file format.",
      "Believing that an operating system is optional; computers cannot run user software without an active OS.",
      "Thinking that CLI is obsolete; network administrators and software engineers still use CLI extensively for server management."
    ],
    "beceExamTips": [
      "In BECE, memorize the WIMP acronym: Windows, Icons, Menus, Pointers.",
      "Be prepared to identify file extensions: .docx = Word processing, .xlsx = Spreadsheet, .pptx = Presentation, .pdf = Portable Document.",
      "Always cite device drivers when explaining how the OS communicates with newly connected hardware like printers."
    ],
    "summaryChecklist": [
      "Can I define an operating system and state its four primary functions?",
      "Can I contrast GUI and CLI with two pros and cons each?",
      "Do I understand what the WIMP concept stands for in GUI environments?",
      "Can I trace an absolute file path from the root directory?",
      "Can I identify 6 common file extensions and their matching software?"
    ]
  },
  "jhs2-ict-t3-word-processing-formatting": {
    "topicId": "jhs2-ict-t3-word-processing-formatting",
    "introduction": "Word processing software enables users to create, edit, format, and print professional text-based documents. Beyond basic typing, mastering advanced formatting tools such as tables, headers, footers, section breaks, margins, and mail merge allows students to prepare publication-ready essays, academic papers, and administrative communications.",
    "overview": "Word processing software enables users to create, edit, format, and print professional text-based documents. Beyond basic typing, mastering advanced formatting tools such as tables, headers, footers, section breaks, margins, and mail merge allows students to prepare publication-ready essays, academic papers, and administrative communications.",
    "realWorldContext": "From drafting terminal examination papers in Ghanaian schools to preparing official letters for government ministries, word processing software like Microsoft Word is the primary documentation tool across education and industry.",
    "objectives": [
      "Apply paragraph alignment, line spacing, indents, and margins to document design.",
      "Insert, format, and manipulate data tables (merging, splitting, borders, and shading).",
      "Configure page numbering, running headers, and running footers across multi-page documents.",
      "Explain the purpose, structure, and operational steps of the Mail Merge feature.",
      "Utilize proofing tools (spell check, grammar check, word count) to ensure document accuracy."
    ],
    "sections": [
      {
        "title": "1. Advanced Page and Paragraph Formatting",
        "content": "Professional document layout requires deliberate configuration of white space, margins, text alignment, and spacing.",
        "bulletPoints": [
          "Page Margins: The blank border area separating the text from the edges of the printed page. Standard default is Normal (1 inch / 2.54 cm on all four sides). Margins can be customized for binding.",
          "Page Orientation: Portrait (vertical page orientation, taller than wide, used for letters and essays) vs. Landscape (horizontal orientation, wider than tall, ideal for wide tables and certificates).",
          "Paragraph Alignment Options: Left Align (Ctrl + L), Center Align (Ctrl + E), Right Align (Ctrl + R), and Justify (Ctrl + J - aligns text flush against both left and right margins for a clean book-like edge).",
          "Line and Paragraph Spacing: Regulates vertical gaps between lines of text (Single 1.0, 1.15, 1.5 lines, Double 2.0 lines) and spacing before/after paragraphs.",
          "Tab Stops & Indentation: First-line indent (indents first line of paragraph by 0.5 inches) and Hanging indent (used in bibliographic citations where second and subsequent lines are indented)."
        ],
        "keyTakeaway": "Margins, orientation, alignment, and line spacing create visually balanced, readable, and professional documents.",
        "realWorldExample": "Publishing a formal school magazine requires 'Justify' alignment and 1.5 line spacing for neat, newspaper-style columns."
      },
      {
        "title": "2. Working with Tables in Documents",
        "content": "Tables arrange numerical and textual data into structured grids composed of horizontal rows and vertical columns.",
        "bulletPoints": [
          "Table Anatomy: Rows (horizontal), Columns (vertical), and Cells (individual rectangular compartments formed by row-column intersections).",
          "Inserting Tables: Created via the Insert tab by highlighting a grid dimension (e.g., 5 columns by 4 rows) or specifying exact numbers.",
          "Merging Cells: Combining two or more adjacent cells into a single larger cell to create unified table banners or grouped category titles.",
          "Splitting Cells: Dividing a single cell into multiple sub-cells across rows or columns.",
          "Table Styling: Applying cell shading colors, custom border weights, zebra striping for alternating row readability, and auto-fitting column widths to cell contents."
        ],
        "keyTakeaway": "Tables organize structured data through rows and columns, utilizing cell merging and splitting for customized layouts.",
        "realWorldExample": "Creating a weekly class timetable in Microsoft Word requires merging five cells across a row to format a single 'MID-DAY BREAK' banner."
      },
      {
        "title": "3. Headers, Footers and Pagination",
        "content": "Multi-page documents require repeating contextual metadata and page tracking in the top and bottom margins.",
        "bulletPoints": [
          "Running Header: Information placed in the top margin of a page that automatically repeats across all pages (e.g., book title, chapter title, school crest).",
          "Running Footer: Information placed in the bottom margin that repeats automatically across all pages (e.g., confidentiality notice, author, file name).",
          "Automated Page Numbering: Inserted inside headers or footers with dynamic page fields (e.g., 'Page 4 of 12'); numbers update automatically as text is added or deleted.",
          "Different First Page Option: Suppresses the header and footer on the cover title page while beginning page numbering on subsequent pages.",
          "Section Breaks: Splits a document into independent formatting zones, allowing portrait and landscape orientations or Roman and Arabic numeral numbering to coexist in the same document."
        ],
        "keyTakeaway": "Headers and footers repeat document titles and automated page numbers across pages without manual retyping.",
        "realWorldExample": "A BECE past question booklet displaying 'BECE 2026 Integrated Science' at the top of every page uses a running header."
      },
      {
        "title": "4. The Mail Merge Automation Feature",
        "content": "Mail Merge is an automated data processing feature that mass-produces customized documents from a single master template.",
        "bulletPoints": [
          "Core Purpose: Eliminates tedious manual typing when sending identical letters, report cards, or invitations to hundreds of individual recipients.",
          "Component 1 - The Main Document: The master document template containing static text, logos, and placeholders called 'Merge Fields' (e.g., <Parent_Name>, <Student_Score>).",
          "Component 2 - The Data Source: A structured database or spreadsheet (e.g., Microsoft Excel table) containing individual recipient records arranged in named columns.",
          "Component 3 - The Merged Output: The generated set of individual letters, certificates, or envelopes where merge fields are replaced with individual data records.",
          "Operational Steps: (1) Create main document -> (2) Connect to data source -> (3) Insert merge fields -> (4) Preview results -> (5) Finish & Merge (print or email)."
        ],
        "keyTakeaway": "Mail Merge blends a master template with a database table to generate hundreds of customized documents in seconds.",
        "realWorldExample": "A headmistress generating 500 personalized end-of-term academic reports with unique student names, attendance records, and teacher remarks."
      }
    ],
    "commonMistakes": [
      "Pressing the spacebar repeatedly to align text or create indents instead of using Tab stops or alignment buttons.",
      "Typing page numbers manually on every page; adding or deleting text causes manual numbers to shift to wrong positions.",
      "Confusing cell merging (combining cells) with cell splitting (dividing a cell).",
      "Deleting data source spreadsheet columns after linking them to a Word Mail Merge document, breaking the merge link."
    ],
    "beceExamTips": [
      "Remember the keyboard shortcuts: Ctrl + L (Left), Ctrl + E (Center), Ctrl + R (Right), Ctrl + J (Justify).",
      "Be prepared to list the two essential files required for a Mail Merge: the Main Document and the Data Source.",
      "Understand the difference between Portrait (tall/vertical) and Landscape (wide/horizontal) page orientations."
    ],
    "summaryChecklist": [
      "Can I apply all 4 paragraph alignments (Left, Center, Right, Justify)?",
      "Can I merge and split table cells to create a school timetable?",
      "Do I know how to configure running headers, footers, and page numbers?",
      "Can I explain how Mail Merge works and why schools use it?",
      "Can I differentiate between portrait and landscape page orientations?"
    ]
  },
  "jhs2-ict-t4-spreadsheets-basics": {
    "topicId": "jhs2-ict-t4-spreadsheets-basics",
    "introduction": "An electronic spreadsheet is a powerful software application designed to organize, calculate, analyze, and visualize numerical data in a tabular grid. Replacing paper ledger books, spreadsheet applications like Microsoft Excel and Google Sheets automate complex mathematical operations using built-in functions, cell references, and dynamic recalculation.",
    "overview": "An electronic spreadsheet is a powerful software application designed to organize, calculate, analyze, and visualize numerical data in a tabular grid. Replacing paper ledger books, spreadsheet applications like Microsoft Excel and Google Sheets automate complex mathematical operations using built-in functions, cell references, and dynamic recalculation.",
    "realWorldContext": "Bank accountants, shopkeepers in Makola market, and teachers computing terminal grades use electronic spreadsheets daily to balance accounts, compute averages, and analyze financial profits.",
    "objectives": [
      "Identify the basic anatomical components of a spreadsheet window (workbook, worksheet, row, column, cell, formula bar, name box).",
      "Distinguish between labels (text), values (numbers), and formulas.",
      "Construct basic arithmetic formulas using cell addresses and standard operators (+, -, *, /).",
      "Utilize essential built-in statistical functions: SUM, AVERAGE, COUNT, MIN, and MAX.",
      "Interpret common spreadsheet error indicators (e.g., #####, #DIV/0!, #VALUE!)."
    ],
    "sections": [
      {
        "title": "1. Spreadsheet Anatomy and Window Components",
        "content": "Understanding the organizational grid of a spreadsheet application is the foundation of numerical modeling.",
        "bulletPoints": [
          "Workbook vs Worksheet: A Workbook is the entire Excel file (.xlsx); a Worksheet is an individual page within the workbook made of thousands of intersecting cells.",
          "Columns: Vertical blocks identified by alphabetical letters along the top border (A, B, C... Z, AA, AB...).",
          "Rows: Horizontal blocks identified by numeric numbers down the left border (1, 2, 3... 1,048,576).",
          "Cell and Cell Reference: A cell is the intersection of a row and a column. It is referenced by its column letter followed by its row number (e.g., C5 = column C, row 5).",
          "Active Cell: The currently selected cell outlined with a thick border where incoming data or formulas will appear.",
          "Name Box: A display box located at the top-left that reveals the address of the currently active cell.",
          "Formula Bar: Located directly to the right of the Name Box; displays the underlying formula, function, or text of the active cell."
        ],
        "keyTakeaway": "A worksheet is a grid of rows and columns; cells are identified by their column letter and row number (e.g., B4).",
        "realWorldExample": "Cell A1 typically holds the table title, while cells B2 through B20 store student examination marks."
      },
      {
        "title": "2. Data Types: Labels, Values, and Formulas",
        "content": "Spreadsheets classify user inputs into distinct data types with specific formatting and alignment behaviors.",
        "bulletPoints": [
          "Labels (Text): Descriptive textual information such as names, dates as text, or headings. Automatically left-aligned by default. Cannot be used in mathematical calculations.",
          "Values (Numbers): Raw numerical quantities, currency, percentages, or decimals. Automatically right-aligned by default. Can be computed mathematically.",
          "Formulas: Mathematical statements created by the user to perform calculations using arithmetic operators: addition (+), subtraction (-), multiplication (*), division (/), and exponentiation (^).",
          "The Equal Sign Rule: Every formula or built-in function MUST start with an equal sign (=). Without the equal sign, the entry is treated merely as a plain text label.",
          "Dynamic Recalculation: When a number in a referenced cell changes, all dependent formulas recalculate their results instantaneously."
        ],
        "keyTakeaway": "Labels (text) align left; Values (numbers) align right; all formulas and functions MUST begin with an equal sign (=).",
        "realWorldExample": "Typing 'Total Marks' creates a label; typing '85' creates a value; typing '=B2+C2' creates a dynamic formula."
      },
      {
        "title": "3. Essential Built-in Spreadsheet Functions",
        "content": "Functions are predefined formulas built into spreadsheets that simplify complex or lengthy calculations across cell ranges.",
        "bulletPoints": [
          "Function Syntax: Consists of the equal sign, the function name, and arguments enclosed in parentheses: =FUNCTION_NAME(range).",
          "Cell Range: A collection of selected adjacent cells specified by the top-left cell, a colon (:), and the bottom-right cell (e.g., A1:A10 includes all cells from A1 down to A10).",
          "=SUM(range): Computes the total sum of all numerical values in the range (e.g., =SUM(C2:C30) totals 29 students' scores).",
          "=AVERAGE(range): Calculates the arithmetic mean of the numbers in the range (sum divided by count).",
          "=COUNT(range): Counts the total number of cells in the range that contain numeric data.",
          "=MAX(range): Scans the range and returns the largest (highest) numerical value.",
          "=MIN(range): Scans the range and returns the smallest (lowest) numerical value."
        ],
        "keyTakeaway": "Predefined functions (SUM, AVERAGE, COUNT, MIN, MAX) perform rapid statistical math across cell ranges (e.g., B2:B15).",
        "realWorldExample": "A teacher uses =AVERAGE(D2:D45) to determine the class mean score in a Science mock exam."
      },
      {
        "title": "4. Cell Referencing and Common Error Codes",
        "content": "Effective spreadsheet modeling requires understanding how cell references behave during formula copying, and how to debug errors.",
        "bulletPoints": [
          "Relative Cell Referencing: By default, when a formula is copied or autofilled to new cells, the cell addresses change relative to their new position (e.g., =A1+B1 copied down becomes =A2+B2).",
          "Absolute Cell Referencing: Freezes a cell address using dollar signs ($) so it does not change when copied (e.g., $A$1 locks column A and row 1, useful for fixed tax or exchange rates).",
          "Error Code '#####': The column is too narrow to display the complete number. Solution: Double-click the line separating column headers to auto-fit width.",
          "Error Code '#DIV/0!': The formula attempts to divide a number by zero or an empty cell. Solution: Verify that the divisor cell contains a non-zero number.",
          "Error Code '#VALUE!': The formula includes cells with incompatible data types (e.g., trying to add a number to a text word like =A1+'Kofi')."
        ],
        "keyTakeaway": "Relative references adjust when copied; absolute references ($A$1) stay frozen; errors like #DIV/0! flag logical mistakes.",
        "realWorldExample": "Multiplying product prices by a fixed 15% VAT rate stored in cell $F$1 requires absolute referencing so the VAT cell doesn't shift."
      }
    ],
    "commonMistakes": [
      "Forgetting to type the equal sign (=) before a formula, causing Excel to display the formula as plain text.",
      "Using an 'x' instead of an asterisk (*) for multiplication, or a division slash incorrectly.",
      "Panicking when '#####' appears on the screen instead of simply widening the column.",
      "Typing numbers directly into formulas (e.g. =75+80) instead of referencing cell addresses (e.g. =A1+B1), losing dynamic recalculation."
    ],
    "beceExamTips": [
      "Always write the equal sign when asked to state a formula in BECE exams (e.g., =SUM(A1:A5), not SUM(A1:A5)).",
      "Remember that ranges use a colon (:), not a hyphen or comma (e.g., B2:B10).",
      "Be prepared to identify what #DIV/0! means: attempting to divide a number by zero."
    ],
    "summaryChecklist": [
      "Can I identify rows, columns, cells, the name box, and the formula bar?",
      "Can I write correct formulas using SUM, AVERAGE, COUNT, MIN, and MAX?",
      "Do I understand why all formulas must begin with an equal sign (=)?",
      "Can I fix the '#####' column width display error?",
      "Can I explain the difference between relative and absolute cell references ($A$1)?"
    ]
  },
  "jhs2-ict-t5-computer-networks": {
    "topicId": "jhs2-ict-t5-computer-networks",
    "introduction": "A computer network is an interconnected collection of computing devices that communicate with one another to share data, software, peripherals, and internet connections. In an interconnected modern society, networking principles underpin everything from school computer laboratories to global telecommunications, banking ATMs, and cloud services.",
    "overview": "A computer network is an interconnected collection of computing devices that communicate with one another to share data, software, peripherals, and internet connections. In an interconnected modern society, networking principles underpin everything from school computer laboratories to global telecommunications, banking ATMs, and cloud services.",
    "realWorldContext": "When 40 computers in a school lab print assignments using a single shared laser printer, or when bank branches in Kumasi and Takoradi verify an account in Accra, computer networks make this real-time communication possible.",
    "objectives": [
      "Define a computer network and explain the benefits of networking (resource sharing, communication, cost reduction).",
      "Classify networks by geographical scope: PAN, LAN, MAN, and WAN.",
      "Compare the four major physical network topologies: Star, Bus, Ring, and Mesh.",
      "Distinguish between guided (wired) and unguided (wireless) transmission media.",
      "Identify essential network hardware devices (switches, routers, network interface cards, modems)."
    ],
    "sections": [
      {
        "title": "1. Definition, Purpose and Classifications of Networks",
        "content": "Networking connects independent digital systems to unlock collaborative resource sharing and communication.",
        "bulletPoints": [
          "Network Definition: Two or more computing devices linked together via communication channels to exchange data and share resources.",
          "Core Benefits: Hardware sharing (one printer shared among 30 PCs), software sharing (centralized network licensing), centralized data storage and backups, rapid electronic messaging.",
          "Personal Area Network (PAN): Spans a very short range (within 10 meters) around an individual; connects phones, tablets, smartwatches, and headphones via Bluetooth.",
          "Local Area Network (LAN): Confined to a geographically restricted area such as a single classroom, school building, or office suite.",
          "Metropolitan Area Network (MAN): Spans an entire town or city (e.g., connecting all district police stations or hospital branches across Accra).",
          "Wide Area Network (WAN): Spans extensive geographic regions, countries, or continents. The global Internet is the largest example of a WAN."
        ],
        "keyTakeaway": "Networks are classified by geographical scope: PAN (personal/short-range), LAN (building), MAN (city), and WAN (global/Internet).",
        "realWorldExample": "A school's ICT laboratory is a LAN; connecting that lab to universities across the globe is a WAN."
      },
      {
        "title": "2. Network Topologies and Physical Layouts",
        "content": "Network topology refers to the geometric arrangement and layout in which nodes and cables are interconnected.",
        "bulletPoints": [
          "Star Topology: Every computer is connected individually to a central hub or switch via dedicated cables. Most popular modern topology. If one cable fails, only that device is affected. However, if the central switch fails, the whole network collapses.",
          "Bus Topology: All computers are connected in a line to a single central backbone cable with terminators at both ends. Cheap to install, but if the main backbone cable breaks, the entire network goes down.",
          "Ring Topology: Computers are connected in a closed circular loop. Data travels in one continuous direction from computer to computer using a token. A break anywhere in the ring disrupts the entire network.",
          "Mesh Topology: Every computer is connected directly to every other computer via redundant links. Highly secure, fault-tolerant, and reliable, but extremely expensive and difficult to wire.",
          "Hybrid Topology: Combining two or more different topologies (e.g., Star-Bus or Star-Ring) to suit complex institutional layouts."
        ],
        "keyTakeaway": "Star topology uses a central switch; Bus uses a single backbone; Ring uses a loop; Mesh connects every node directly.",
        "realWorldExample": "Almost all school computer labs in Ghana utilize Star topology because a faulty cable on one desk doesn't affect the other 29 computers."
      },
      {
        "title": "3. Transmission Media: Guided vs. Unguided",
        "content": "Data travels across networks through physical cables (guided) or atmospheric electromagnetic waves (unguided).",
        "bulletPoints": [
          "Guided (Wired) Media: Physical transmission paths directing data along a conduit.",
          "1. Twisted Pair Cable (Ethernet RJ-45): Pairs of insulated copper wires twisted together to cancel electromagnetic interference. Standard for LAN connections up to 100 meters.",
          "2. Coaxial Cable: Central copper core surrounded by plastic insulation and braided metallic shielding. Used for cable television and legacy bus networks.",
          "3. Fiber Optic Cable: Hair-thin strands of ultra-pure glass or plastic that transmit data as pulses of light. Tremendous bandwidth, zero electromagnetic interference, can span long distances without signal degradation.",
          "Unguided (Wireless) Media: Broadcasts signals through the air using electromagnetic radiation: Radio waves (Wi-Fi, Cellular 4G/5G), Bluetooth (short-range PAN), Microwave (line-of-sight satellite and cellular towers), and Infrared."
        ],
        "keyTakeaway": "Guided media uses cables (twisted pair, coaxial, fiber optic); unguided media uses wireless waves (Wi-Fi, Bluetooth, microwave).",
        "realWorldExample": "Submarine fiber optic cables under the Atlantic Ocean deliver high-speed international internet bandwidth to landing stations in Accra."
      },
      {
        "title": "4. Essential Network Hardware Devices",
        "content": "Building an operational network requires specialized hardware components to direct, amplify, and route packets of data.",
        "bulletPoints": [
          "Network Interface Card (NIC): An expansion card or integrated circuit that provides a physical port (Ethernet RJ-45) or wireless chip to connect a computer to a network.",
          "Switch: An intelligent central device in a star topology that receives data packets and forwards them specifically to the target destination port using MAC addresses.",
          "Router: An intelligent networking device that connects different networks together (e.g., connecting a school LAN to the global Internet) and determines the best routing path.",
          "Modem (Modulator-Demodulator): Converts analog signals from telephone/coaxial lines into digital signals readable by computers, and vice versa.",
          "Wireless Access Point (WAP): A device that broadcasts radio signals allowing wireless devices (laptops, phones) to connect to a wired network."
        ],
        "keyTakeaway": "NICs connect devices to networks; switches connect devices within a LAN; routers connect different networks to the Internet.",
        "realWorldExample": "A Wi-Fi router in a school computer lab routes data packets between student laptops and the telecommunications provider's internet gateway."
      }
    ],
    "commonMistakes": [
      "Confusing the Internet (a global WAN hardware infrastructure) with the World Wide Web (an information service running on the internet).",
      "Assuming that Wi-Fi is the Internet; Wi-Fi is merely a wireless local area transmission technology that connects your phone to a router.",
      "Thinking that a switch and a router are identical; a switch connects computers in the same LAN, while a router connects different networks together.",
      "Believing that Fiber Optic cables conduct electricity; they conduct pulses of light through glass fibers."
    ],
    "beceExamTips": [
      "In BECE, always identify Star Topology as the recommended layout for a school computer lab and cite 'fault tolerance' as the reason.",
      "Know the definitions: LAN = Local Area Network; WAN = Wide Area Network; PAN = Personal Area Network.",
      "Remember that Fiber Optic uses light pulses and is completely immune to electrical interference."
    ],
    "summaryChecklist": [
      "Can I define a computer network and list three distinct advantages?",
      "Can I distinguish between PAN, LAN, MAN, and WAN by geographic scope?",
      "Can I compare the Star and Bus topologies, noting what happens if a cable breaks?",
      "Do I understand how fiber optic cables transmit data using light?",
      "Can I explain the roles of a Switch and a Router?"
    ]
  },
  "jhs2-ict-t6-internet-web-browsing": {
    "topicId": "jhs2-ict-t6-internet-web-browsing",
    "introduction": "The Internet is the vast global network of interconnected computer networks that powers modern communication, education, e-commerce, and information retrieval. Navigating this digital ocean requires an understanding of web architecture, the client-server relationship, URLs, domain names, the difference between browsers and search engines, and Boolean query techniques.",
    "overview": "The Internet is the vast global network of interconnected computer networks that powers modern communication, education, e-commerce, and information retrieval. Navigating this digital ocean requires an understanding of web architecture, the client-server relationship, URLs, domain names, the difference between browsers and search engines, and Boolean query techniques.",
    "realWorldContext": "When a student enters 'academicprep.com' into their smartphone browser to study BECE questions, client-server requests and domain name lookups occur in milliseconds to display the lesson on their screen.",
    "objectives": [
      "Explain the client-server architecture of the World Wide Web.",
      "Deconstruct a Uniform Resource Locator (URL) into protocol, domain name, and path.",
      "Explain how the Domain Name System (DNS) translates domain names into numerical IP addresses.",
      "Distinguish between a Web Browser and a Search Engine.",
      "Apply advanced search operators (Boolean, quotation marks, site filters) to locate academic information."
    ],
    "sections": [
      {
        "title": "1. The Internet and the World Wide Web",
        "content": "While often used interchangeably in everyday conversation, the Internet and the World Wide Web are distinct technological entities.",
        "bulletPoints": [
          "The Internet: The physical and logical worldwide infrastructure of interconnected computer networks communicating via TCP/IP protocols.",
          "The World Wide Web (WWW): An information service and collection of interlinked multimedia web pages formatted in HTML (Hypertext Markup Language) and accessed via the Internet. Created by Sir Tim Berners-Lee in 1989.",
          "Client-Server Architecture: The client (student's web browser on phone or PC) requests web resources over the internet; the web server (a high-capacity computer hosting the website) processes the request and sends back the HTML files, images, and scripts.",
          "Hypertext and Hyperlinks: Hypertext is text containing interactive clickable links (hyperlinks) that instantly navigate the reader to another location or web page."
        ],
        "keyTakeaway": "The Internet is the physical network infrastructure; the World Wide Web is the multimedia information service running on top of it.",
        "realWorldExample": "The Internet is like the national highway road network of Ghana; the World Wide Web is like the passenger buses and delivery trucks traveling on those roads."
      },
      {
        "title": "2. IP Addresses, DNS, and URLs",
        "content": "Every connected computer and online resource possesses a unique numerical identity and a standardized web address.",
        "bulletPoints": [
          "IP Address (Internet Protocol Address): A unique numerical identifier assigned to every device connected to a computer network (e.g., IPv4: 192.168.1.1; IPv6: 128-bit hexadecimal).",
          "Domain Name System (DNS): Because humans cannot easily memorize strings of numbers, DNS acts as the 'phonebook of the Internet', automatically translating friendly names (like google.com) into numerical IP addresses.",
          "Uniform Resource Locator (URL): The global address of a specific resource on the web. Example: https://www.moe.gov.gh/bece/timetable.pdf",
          "URL Component 1 - Protocol: 'https://' indicates Hypertext Transfer Protocol Secure (data is encrypted during transmission).",
          "URL Component 2 - Domain Name: 'www.moe.gov.gh' identifies the server hosting the site. (.gh = country code for Ghana, .gov = government entity).",
          "URL Component 3 - Resource Path: '/bece/timetable.pdf' specifies the exact folder and file name being retrieved."
        ],
        "keyTakeaway": "DNS translates human-readable domain names into IP addresses; URLs specify the protocol, domain, and exact file path.",
        "realWorldExample": "Typing 'waecgh.org' prompts DNS servers to locate the numerical server IP address of WAEC Ghana's web server."
      },
      {
        "title": "3. Web Browsers versus Search Engines",
        "content": "A widespread confusion exists among students regarding the distinction between a web browser and a search engine.",
        "bulletPoints": [
          "Web Browser: An application software installed on a device that retrieves, translates, and renders HTML documents into interactive visual web pages. Examples: Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, Opera.",
          "Key Browser Features: Address bar (Omnibox), navigation buttons (Back, Forward, Refresh), Bookmarks/Favorites, History, Tabbed browsing, and Incognito/Private mode.",
          "Search Engine: A specialized website and database service that uses automated software robots (crawlers/spiders) to index web pages across the world and return matching results for user keywords. Examples: Google Search, Microsoft Bing, Yahoo Search, DuckDuckGo.",
          "The Crucial Difference: You launch a Web Browser (software) to visit a Search Engine (website) to search for information."
        ],
        "keyTakeaway": "A Web Browser is the program used to view web pages; a Search Engine is an online service that indexes and finds web pages.",
        "realWorldExample": "Opening the Google Chrome application on a laptop to visit the Bing search engine website."
      },
      {
        "title": "4. Advanced Search Techniques and Information Literacy",
        "content": "Effective academic research requires employing precision search syntax and evaluating online credibility.",
        "bulletPoints": [
          "Exact Phrase Matching (\" \"): Wrapping terms in double quotation marks forces search engines to return pages containing that exact phrase in identical order (e.g., \"1948 Christiansborg Crossroads\").",
          "Excluding Unwanted Terms (-): Placing a hyphen/minus immediately before a word excludes pages containing that word (e.g., jaguar -car finds the animal, not the luxury vehicle).",
          "Domain Filtering (site:): Restricts search results strictly to a specific domain or country code (e.g., site:edu.gh BECE syllabus searches only Ghanaian educational institutions).",
          "File Type Search (filetype:): Restricts results to specific file formats (e.g., filetype:pdf social studies revision).",
          "Evaluating Source Credibility: Check author credentials, publication date (currency), domain extension (.edu, .gov are generally more credible than anonymous commercial blogs), and verify claims across multiple independent reputable sources."
        ],
        "keyTakeaway": "Quotation marks find exact phrases, minus signs exclude terms, and site: restricts searches to specific trusted domains.",
        "realWorldExample": "Searching '\"Yaa Asantewaa War\" site:gov.gh filetype:pdf' returns official Ghanaian government PDF documents about the 1900 war."
      }
    ],
    "commonMistakes": [
      "Stating that Google Chrome is a search engine; Google Chrome is a web browser, while Google Search is a search engine.",
      "Assuming that everything published on the Internet is true and verified; anyone can publish unverified misinformation.",
      "Confusing HTTP with HTTPS; HTTPS encrypts data to protect passwords and payment details from eavesdroppers.",
      "Putting spaces after the minus sign in search queries (e.g. typing '- car' instead of '-car')."
    ],
    "beceExamTips": [
      "Remember the three parts of a URL: Protocol, Domain Name, and Path.",
      "Be prepared to list at least three web browsers: Chrome, Firefox, Safari, Edge.",
      "Understand what DNS stands for: Domain Name System."
    ],
    "summaryChecklist": [
      "Can I distinguish between the Internet and the World Wide Web?",
      "Can I deconstruct a complete URL into protocol, domain, and path?",
      "Do I understand the difference between a Web Browser and a Search Engine?",
      "Can I apply quotation marks and the minus sign in web searches?",
      "Can I explain how HTTPS protects user privacy during online transactions?"
    ]
  },
  "jhs2-ict-t7-spreadsheet-functions-charts": {
    "topicId": "jhs2-ict-t7-spreadsheet-functions-charts",
    "introduction": "Intermediate spreadsheet proficiency involves automating decision-making using logical functions, managing large datasets through sorting and filtering, and communicating complex numerical trends visually through analytical charts. In JHS 2, students master the logical IF function, nested IF structures, data organization, and generating column, bar, line, and pie charts.",
    "overview": "Intermediate spreadsheet proficiency involves automating decision-making using logical functions, managing large datasets through sorting and filtering, and communicating complex numerical trends visually through analytical charts. In JHS 2, students master the logical IF function, nested IF structures, data organization, and generating column, bar, line, and pie charts.",
    "realWorldContext": "When schools generate terminal grading remarks (Pass/Fail) automatically for hundreds of students, or when businesses visualize monthly sales spikes using colorful bar charts, intermediate spreadsheet tools are in action.",
    "objectives": [
      "Construct logical IF formulas with relational operators (=, >, <, >=, <=, <>).",
      "Explain the concept and structure of Nested IF formulas for multi-tiered grading.",
      "Sort spreadsheet records in ascending and descending order across single or multiple keys.",
      "Apply data filtering to display specific subsets of information while hiding irrelevant records.",
      "Select, generate, and format appropriate chart types (Column, Bar, Line, Pie) to represent data."
    ],
    "sections": [
      {
        "title": "1. The Logical IF Function",
        "content": "The IF function is one of the most widely used logical tools in spreadsheets, enabling the computer to make automated decisions based on conditional tests.",
        "bulletPoints": [
          "Syntax: =IF(logical_test, value_if_true, value_if_false)",
          "Logical Test: An expression that evaluates to either TRUE or FALSE using relational operators: = (equal to), > (greater than), < (less than), >= (greater than or equal to), <= (less than or equal to), <> (not equal to).",
          "Value if True: The outcome displayed or calculated if the logical test is satisfied.",
          "Value if False: The outcome displayed or calculated if the logical test is not satisfied.",
          "Text Quotation Rule: Any text string returned by an IF formula must be enclosed in double quotation marks (e.g., =IF(B2>=50, \"Pass\", \"Fail\")). Numbers do not require quotation marks.",
          "Nested IF Statements: Placing an IF statement inside the value_if_false argument of another IF statement to test multiple sequential grade thresholds (e.g., assigning Grades A, B, C, D, or F)."
        ],
        "keyTakeaway": "The IF function checks a condition and outputs one result if TRUE, and another if FALSE; text outputs require quotes.",
        "realWorldExample": "=IF(C2>=50, \"Promoted\", \"Repeat\") automatically marks students who score 50 and above as Promoted."
      },
      {
        "title": "2. Data Sorting: Ascending vs. Descending Order",
        "content": "Sorting reorganizes rows of data in a worksheet into a logical alphanumeric order to facilitate rapid scanning and analysis.",
        "bulletPoints": [
          "Ascending Order: Arranging data from smallest to largest or earliest to latest: A to Z for text names, 0 to 9 for numerical marks, oldest to newest for calendar dates.",
          "Descending Order: Arranging data from largest to smallest: Z to A for text, 9 to 0 for numerical marks (ideal for ranking highest scoring students at the top), newest to oldest for dates.",
          "Single-Level Sorting: Sorting an entire table based on one column (e.g., sorting a class list alphabetically by Surname).",
          "Multi-Level Sorting: Sorting by a primary column, and then by a secondary column to resolve ties (e.g., sort primarily by Aggregate Score descending; if two students tie, sort secondarily by Surname ascending).",
          "Crucial Rule - Expand Selection: When sorting, always highlight or include all connected columns so that student names remain linked with their respective marks."
        ],
        "keyTakeaway": "Sorting arranges records alphabetically or numerically (ascending = A-Z/low-high; descending = Z-A/high-low).",
        "realWorldExample": "Sorting a 40-student mock exam table in descending order of total score instantly reveals who came 1st, 2nd, and 3rd."
      },
      {
        "title": "3. Data Filtering Techniques",
        "content": "Filtering allows users to isolate and analyze specific subsets of records without permanently deleting or altering the underlying data.",
        "bulletPoints": [
          "Autofilter Feature: Inserts small drop-down arrow buttons in the header row of each column in the table.",
          "How Filtering Works: When a user selects a filter criterion (e.g., show only Gender = 'Female'), rows that do not meet the condition are temporarily hidden from view.",
          "Number Filters: Applying numerical criteria such as 'Greater than 75', 'Between 50 and 60', or 'Top 10'.",
          "Text Filters: Filtering by conditions such as 'Begins with', 'Contains', or selecting specific check boxes.",
          "Reversibility: Filtering never destroys data; clicking 'Clear Filter' restores all hidden rows instantaneously to the screen."
        ],
        "keyTakeaway": "Filtering displays only the rows that meet chosen criteria while temporarily hiding irrelevant rows.",
        "realWorldExample": "Filtering a school register to show only students from 'JHS 2 Blue' who have paid their sports dues."
      },
      {
        "title": "4. Data Visualization with Charts",
        "content": "Charts transform dry tables of numerical figures into compelling, easily understood graphical illustrations.",
        "bulletPoints": [
          "Column / Bar Chart: Uses vertical columns or horizontal bars to compare distinct categories (e.g., comparing mathematics test scores across five schools).",
          "Line Chart: Connects data points with lines to illustrate continuous trends and patterns over time (e.g., tracking a patient's temperature every two hours or tracking annual rainfall).",
          "Pie Chart: A circular chart divided into proportional slices; shows the percentage breakdown of a whole (must sum to 100%, e.g., market share of telecom operators in Ghana).",
          "Chart Elements: Chart Title (describes the graph), Axes (X-axis horizontal category, Y-axis vertical numerical values), Axis Labels, Legend (key explaining colors), and Data Labels (exact values printed on bars).",
          "Creating a Chart: Select data range including headers -> click Insert tab -> choose Chart type -> format labels and colors."
        ],
        "keyTakeaway": "Use Column/Bar charts to compare categories, Line charts for continuous trends over time, and Pie charts for parts of a whole (100%).",
        "realWorldExample": "A pie chart showing that MTN holds 55%, Telecel 25%, and AT 20% of mobile subscribers in Ghana."
      }
    ],
    "commonMistakes": [
      "Forgetting quotation marks around text strings in IF formulas (e.g., writing =IF(A1>50, Pass, Fail) causes a #NAME? error).",
      "Sorting only one column without expanding the selection, detaching student names from their correct marks.",
      "Using a Pie chart to show changes over time; Line charts must be used for temporal trends.",
      "Creating a Pie chart with slices that do not represent proportions of a single whole."
    ],
    "beceExamTips": [
      "Remember the exact syntax of the IF function: =IF(condition, value_if_true, value_if_false).",
      "In BECE Section A questions about charts: Line chart = trends over time; Pie chart = proportions/percentages of a whole; Bar/Column = comparing categories.",
      "Understand what Ascending (A-Z, 0-9) and Descending (Z-A, 9-0) mean."
    ],
    "summaryChecklist": [
      "Can I write a working IF formula with relational operators and text outputs?",
      "Can I explain how multi-level sorting resolves ties in ranking?",
      "Do I understand how filtering temporarily hides rows without deleting data?",
      "Can I select the right chart type (Bar vs Line vs Pie) for a given dataset?",
      "Can I label the key components of a chart (Axes, Legend, Title, Data Labels)?"
    ]
  },
  "jhs2-ict-t8-presentation-software": {
    "topicId": "jhs2-ict-t8-presentation-software",
    "introduction": "Presentation software empowers users to design dynamic, visually captivating slide shows that support oral public speaking, educational lectures, and professional business pitches. Moving beyond cluttered text, mastering slide layouts, visual design principles (the 6x6 rule), slide transitions, custom animations, and presenter tools elevates student communication skills.",
    "overview": "Presentation software empowers users to design dynamic, visually captivating slide shows that support oral public speaking, educational lectures, and professional business pitches. Moving beyond cluttered text, mastering slide layouts, visual design principles (the 6x6 rule), slide transitions, custom animations, and presenter tools elevates student communication skills.",
    "realWorldContext": "When teachers deliver science lessons using digital projectors, or when corporate executives pitch new products in Accra, presentation software like Microsoft PowerPoint and Google Slides provides the visual backbone.",
    "objectives": [
      "Identify the core components of presentation software windows (slides, thumbnails, placeholders, notes pane).",
      "Apply effective graphic design principles (the 6x6 rule, contrast, typography, whitespace).",
      "Distinguish between slide transitions and custom animations.",
      "Incorporate multimedia elements: images, audio narration, video clips, and hyperlinks.",
      "Operate presentation delivery tools: Slide Sorter view, Presenter view, and keyboard shortcuts (F5, Esc, B, W)."
    ],
    "sections": [
      {
        "title": "1. Fundamentals of Presentation Software",
        "content": "Presentation software is specialized application software designed to structure and present information sequentially through electronic slides.",
        "bulletPoints": [
          "Popular Programs: Microsoft PowerPoint, Google Slides, Apple Keynote, Canva Presentations.",
          "Slide: An individual digital page within a presentation file (.pptx).",
          "Slide Show: The full-screen sequential display of slides to an audience.",
          "Placeholders: Designated dotted-line rectangular boxes on slide layouts that hold text, titles, bullet lists, charts, tables, or video files.",
          "Slide Master: The top slide in a hierarchy that stores theme information, fonts, and background graphics, ensuring consistent branding across all slides.",
          "Speaker Notes: A private notes pane beneath each slide visible only to the presenter in Presenter View, holding talking cues and references."
        ],
        "keyTakeaway": "Presentations consist of sequential slides containing placeholders for titles, text, charts, and multimedia.",
        "realWorldExample": "A school debate team using PowerPoint slides with charts and photos to visually reinforce their arguments on a projection screen."
      },
      {
        "title": "2. Visual Design Principles for High-Impact Slides",
        "content": "Poorly designed slides with crowded paragraphs distract audiences, while clean, visual slides enhance engagement and comprehension.",
        "bulletPoints": [
          "The 6 x 6 Design Rule: A practical guideline recommending no more than 6 bullet points per slide, with no more than 6 words per bullet point.",
          "High Visual Contrast: Ensure high contrast between text and background for effortless readability (e.g., crisp black or dark navy text on white background, or white text on deep dark background). Avoid yellow text on white.",
          "Consistent Typography: Limit presentations to two clean sans-serif font families (e.g., Arial, Calibri, Montserrat). Titles: 32–40pt; Body text: 20–24pt (never smaller than 18pt).",
          "Meaningful Imagery: Use high-resolution, relevant photographs and diagrams instead of decorative, distracting clipart.",
          "Judicious Use of Whitespace: Leave generous blank space around text and images to keep slides clean and focused."
        ],
        "keyTakeaway": "Follow the 6x6 rule, maintain high contrast, use clean readable fonts, and avoid cluttered blocks of text.",
        "realWorldExample": "Replacing a 200-word paragraph about photosynthesis with a labeled diagram of a green leaf and three bullet points."
      },
      {
        "title": "3. Slide Transitions versus Custom Animations",
        "content": "Motion effects should be applied purposefully to guide audience attention rather than as distracting gimmicks.",
        "bulletPoints": [
          "Slide Transition: The visual motion effect that occurs in the display as one slide exits and the next slide enters the screen during a slide show.",
          "Transition Categories: Subtle (Fade, Wipe, Push), Exciting (Dissolve, Ripple), Dynamic. Controlled by duration and sound options under the Transitions tab.",
          "Custom Animation: Visual motion applied to individual objects (text boxes, bullet lines, images, shapes) ON a single slide.",
          "Four Animation Types: (1) Entrance (green icons - how objects appear), (2) Emphasis (yellow icons - drawing attention while on screen), (3) Exit (red icons - how objects disappear), (4) Motion Paths (custom movement trajectories across the screen).",
          "Best Practice: Use subtle, consistent animations (like simple 'Fade' or 'Appear') on bullet points so ideas are revealed one by one as the speaker talks."
        ],
        "keyTakeaway": "Transitions move between slides; animations control how individual objects enter, emphasize, or exit a single slide.",
        "realWorldExample": "A slide fades in smoothly (transition), and then bullet points appear one click at a time as the speaker introduces them (animation)."
      },
      {
        "title": "4. Presentation Delivery and Keyboard Controls",
        "content": "Delivering a confident presentation requires mastering display modes and keyboard shortcuts.",
        "bulletPoints": [
          "Slide Sorter View: Displays thumbnail miniatures of all slides on one screen, making it effortless to reorder, delete, or hide slides.",
          "Slide Show View (F5): Launches the full-screen presentation starting from the very first slide.",
          "Shift + F5: Launches the slide show starting from the currently active slide.",
          "Presenter View: A dual-monitor display mode where the audience sees only the full-screen slide on the projector, while the speaker sees the current slide, upcoming slide preview, elapsed timer, and private speaker notes on their laptop.",
          "Delivery Shortcuts: Press 'B' during a slide show to turn the screen completely Black (to refocus audience attention on the speaker); press 'W' for White screen; press 'Esc' to exit."
        ],
        "keyTakeaway": "Use F5 to start from beginning, Shift+F5 from current slide, Presenter view for speaker notes, and 'B' to pause on a black screen.",
        "realWorldExample": "A student using Presenter View glances at their speaker notes on their laptop while the audience sees only the clean projection screen."
      }
    ],
    "commonMistakes": [
      "Pasting entire essays or paragraphs onto slides and reading them word-for-word to the audience.",
      "Confusing transitions (between slides) with animations (on objects within a slide).",
      "Using low-contrast color combinations (like light green text on a yellow background) that cannot be read on a projector.",
      "Overusing flashy, noisy animations on every word, which distracts and annoys the audience."
    ],
    "beceExamTips": [
      "In BECE questions, remember the shortcut F5 starts a slide show from Slide 1; Shift + F5 starts from the current slide.",
      "State the 6x6 rule clearly: Maximum 6 bullets per slide, maximum 6 words per bullet.",
      "Know the four types of animations: Entrance, Emphasis, Exit, and Motion Paths."
    ],
    "summaryChecklist": [
      "Can I identify placeholders, slide thumbnails, and the notes pane in presentation software?",
      "Can I explain and apply the 6x6 design rule?",
      "Do I understand the difference between a slide transition and an object animation?",
      "Can I name the four categories of animations (Entrance, Emphasis, Exit, Motion Path)?",
      "Can I list three keyboard shortcuts used during a live slide show (F5, Shift+F5, Esc, B)?"
    ]
  },
  "jhs2-ict-t9-intro-algorithms-flowcharts": {
    "topicId": "jhs2-ict-t9-intro-algorithms-flowcharts",
    "introduction": "An algorithm is a finite, unambiguous, step-by-step procedure formulated to solve a computational problem or accomplish a specific objective. As the bedrock of computer science and software development, algorithmic thinking empowers students to decompose complex challenges into sequential logic, represent decisions using standard flowchart symbols, and draft structured pseudocode prior to writing code.",
    "overview": "An algorithm is a finite, unambiguous, step-by-step procedure formulated to solve a computational problem or accomplish a specific objective. As the bedrock of computer science and software development, algorithmic thinking empowers students to decompose complex challenges into sequential logic, represent decisions using standard flowchart symbols, and draft structured pseudocode prior to writing code.",
    "realWorldContext": "Following a recipe to cook Ghanaian jollof rice, assembling a bicycle, or programming an automated teller machine (ATM) to dispense cash all follow strict algorithmic sequences.",
    "objectives": [
      "Define an algorithm and state the essential qualities of an effective algorithmic solution.",
      "Identify and explain the three fundamental control structures: Sequence, Selection, and Iteration.",
      "Draw and interpret standard ANSI flowchart symbols (Terminal, Input/Output, Process, Decision, Connector).",
      "Write structured pseudocode using standardized keywords (START, INPUT, IF/THEN/ELSE, WHILE, OUTPUT, STOP).",
      "Perform a trace table (dry run) to manually verify the accuracy of an algorithm."
    ],
    "sections": [
      {
        "title": "1. The Concept and Qualities of an Algorithm",
        "content": "Before a programmer writes a single line of software code in languages like Python or JavaScript, they must first formulate a robust algorithm.",
        "bulletPoints": [
          "Algorithm Definition: An ordered set of well-defined, unambiguous, finite instructions designed to solve a specific problem or perform a task.",
          "Core Characteristic 1 - Unambiguity: Every instruction must be completely clear and have only one possible interpretation.",
          "Core Characteristic 2 - Well-Defined Inputs and Outputs: Specifies exactly what data is accepted and what result is generated.",
          "Core Characteristic 3 - Finiteness: The procedure must terminate after a finite number of steps; it must never run into an infinite loop.",
          "Core Characteristic 4 - Feasibility & Independence: Instructions must be practicable using available resources, without relying on any specific programming language syntax."
        ],
        "keyTakeaway": "An algorithm is a step-by-step, finite, unambiguous recipe for solving a problem, independent of any programming language.",
        "realWorldExample": "An ATM withdrawal algorithm: (1) Insert card -> (2) Enter PIN -> (3) Verify PIN -> (4) Select Amount -> (5) Check balance -> (6) Dispense cash -> (7) Eject card."
      },
      {
        "title": "2. The Three Fundamental Control Structures",
        "content": "Every computer algorithm, regardless of complexity, is constructed using combinations of three basic control logic building blocks.",
        "bulletPoints": [
          "1. Sequence: Instructions are executed strictly in order, one line after another from top to bottom, without branching or skipping.",
          "2. Selection (Branching / Decision): The algorithm evaluates a conditional question and chooses one of multiple execution paths based on whether the condition is TRUE or FALSE. Represented by IF...THEN...ELSE statements.",
          "3. Iteration (Looping / Repetition): A designated block of instructions is executed repeatedly until a specific condition changes. Types include Count-controlled loops (FOR...NEXT) and Condition-controlled loops (WHILE...DO, REPEAT...UNTIL)."
        ],
        "keyTakeaway": "All programs are built from three control structures: Sequence (step-by-step), Selection (decisions), and Iteration (loops).",
        "realWorldExample": "Sequence: adding salt; Selection: IF soup is cold THEN reheat; Iteration: stir soup 10 times."
      },
      {
        "title": "3. Flowcharts and Standard Geometric Symbols",
        "content": "A flowchart is a standardized diagrammatic illustration of an algorithm that maps the logical flow of operations using geometric shapes connected by arrows.",
        "bulletPoints": [
          "Oval / Rounded Rectangle (Terminal): Indicates the START, BEGIN, STOP, or END of the flowchart.",
          "Parallelogram (Input / Output): Represents entering data into the system (e.g., Read Score, Input Age) or presenting output to the user (e.g., Print Result, Display Average).",
          "Rectangle (Process): Represents internal data manipulation, computational operations, or value assignments (e.g., Sum = A + B, Area = Length * Breadth).",
          "Diamond (Decision): Evaluates a conditional condition with two distinct exit flow arrows (typically labeled Yes/No or True/False).",
          "Small Circle (Connector): Connects separate flowchart segments on the same page to avoid messy intersecting lines.",
          "Flow Lines (Arrows): Pointed lines indicating the exact directional sequence of execution."
        ],
        "keyTakeaway": "Flowcharts use Ovals for Start/Stop, Parallelograms for Input/Output, Rectangles for Processing, and Diamonds for Decisions.",
        "realWorldExample": "A diamond symbol containing 'Score >= 50?' with a 'Yes' arrow pointing to 'Print Pass' and a 'No' arrow pointing to 'Print Fail'."
      },
      {
        "title": "4. Pseudocode and Dry-Run Verification",
        "content": "Pseudocode represents algorithms in structured, human-readable prose that mirrors programming logic without strict syntax rules.",
        "bulletPoints": [
          "Pseudocode Conventions: Uses uppercase keywords for control structures (START, STOP, INPUT, OUTPUT, IF, THEN, ELSE, ENDIF, WHILE, ENDWHILE) and indentation to show nested logic.",
          "Example Pseudocode: Finding the larger of two numbers: START -> INPUT A, B -> IF A > B THEN OUTPUT A ELSE OUTPUT B ENDIF -> STOP.",
          "Trace Table (Dry Run): A manual debugging technique where a human traces through an algorithm step-by-step using sample test inputs, recording the changing values of each variable in tabular columns.",
          "Purpose of Dry Running: Detects logical errors, off-by-one loop errors, and incorrect calculation formulas before code is programmed into a computer."
        ],
        "keyTakeaway": "Pseudocode uses structured English keywords; trace tables manually test variable values to catch logic bugs.",
        "realWorldExample": "Testing a grade-calculation algorithm on paper with mock scores (45, 60, 85) to verify that Pass/Fail cutoffs work properly."
      }
    ],
    "commonMistakes": [
      "Using a rectangle for Input/Output instead of a parallelogram.",
      "Forgetting to draw flow arrows, leaving lines with ambiguous direction.",
      "Writing a diamond decision symbol with only one exit path (a decision MUST have at least two branch exits: Yes/No).",
      "Creating infinite loops by forgetting to increment a counter variable inside a WHILE loop."
    ],
    "beceExamTips": [
      "Memorize the 4 primary flowchart symbols: Oval = Terminal (Start/Stop), Parallelogram = Input/Output, Rectangle = Process, Diamond = Decision.",
      "Always start pseudocode with START (or BEGIN) and conclude with STOP (or END).",
      "Remember that diamonds represent selection (IF/THEN), while loops represent iteration."
    ],
    "summaryChecklist": [
      "Can I define an algorithm and list four of its essential qualities?",
      "Can I explain Sequence, Selection, and Iteration?",
      "Can I draw the standard flowchart symbols for Terminal, Process, Input/Output, and Decision?",
      "Can I write structured pseudocode to calculate the area of a rectangle?",
      "Can I execute a manual dry run using a trace table?"
    ]
  },
  "jhs2-ict-t10-block-programming": {
    "topicId": "jhs2-ict-t10-block-programming",
    "introduction": "Block-based visual programming introduces computational thinking and software engineering concepts without the frustration of syntax errors and missing semicolons. Using Scratch, an educational visual environment developed by MIT, students snap together interlocking programming blocks to control animated characters (sprites), navigate a 2D Cartesian stage, implement loops, handle user events, and manage variables.",
    "overview": "Block-based visual programming introduces computational thinking and software engineering concepts without the frustration of syntax errors and missing semicolons. Using Scratch, an educational visual environment developed by MIT, students snap together interlocking programming blocks to control animated characters (sprites), navigate a 2D Cartesian stage, implement loops, handle user events, and manage variables.",
    "realWorldContext": "Educational coding initiatives across Ghana utilize Scratch to teach junior high students how to program interactive animations, educational quizzes, and video games.",
    "objectives": [
      "Identify the core components of the Scratch interface (Stage, Sprites, Block Palette, Scripts Area).",
      "Understand the 2D Cartesian coordinate system of the Scratch stage (X: -240 to +240, Y: -180 to +180).",
      "Utilize motion, looks, and sound blocks to animate sprites.",
      "Implement event-driven programming, conditional statements, and loops.",
      "Create and update dynamic variables to track scores, timers, and game states."
    ],
    "sections": [
      {
        "title": "1. The Scratch Interface and Stage Coordinates",
        "content": "Scratch replaces typed text syntax with colorful puzzle-like blocks that snap together logically in the scripts area.",
        "bulletPoints": [
          "The Stage: The primary display window where sprites move, draw, and interact. Dimensions: 480 pixels wide by 360 pixels high.",
          "Cartesian Coordinate System: Center of the stage is (X: 0, Y: 0). Horizontal X axis ranges from -240 (far left) to +240 (far right). Vertical Y axis ranges from -180 (bottom) to +180 (top).",
          "Sprite: Any visual actor, character, or object on the stage that can be programmed with scripts, costumes, and sounds.",
          "Costumes: Different visual appearances of a single sprite; switching costumes in a loop creates the illusion of walking or flying animation.",
          "Scripts Area: The large canvas workspace where blocks are dragged from the palette and snapped together to form executable programs."
        ],
        "keyTakeaway": "Scratch stage is 480x360 pixels with center at (0, 0); sprites are animated characters programmed in the scripts area.",
        "realWorldExample": "Setting a sprite's coordinates to X: 0, Y: 100 places the character in the upper-middle portion of the screen."
      },
      {
        "title": "2. Block Categories and Color Coding",
        "content": "Scratch organizes programming blocks into color-coded palettes based on their functional purpose.",
        "bulletPoints": [
          "Motion Blocks (Medium Blue): Controls movement, orientation, and positioning ('move 10 steps', 'turn right 15 degrees', 'go to x: y:', 'glide 1 secs to').",
          "Looks Blocks (Purple): Modifies sprite appearance, speech bubbles, and visual effects ('say Hello! for 2 secs', 'next costume', 'change size by 10').",
          "Sound Blocks (Magenta): Plays audio clips, drum beats, and sound effects ('play sound Pop until done').",
          "Events Blocks (Yellow): 'Hat' blocks that trigger scripts when specific real-time actions happen ('when green flag clicked', 'when key space pressed', 'when this sprite clicked').",
          "Control Blocks (Gold / Orange): Manages conditional logic and loops ('wait 1 secs', 'repeat 10', 'forever', 'if...then...else').",
          "Sensing Blocks (Light Blue): Detects physical interactions ('touching color?', 'mouse down?', 'distance to sprite', 'ask [question] and wait').",
          "Operators Blocks (Green): Handles mathematical calculations (+, -, *, /), random numbers, and boolean comparisons (<, =, >, and, or, not)."
        ],
        "keyTakeaway": "Blocks are color-coded: Blue for Motion, Purple for Looks, Yellow for Events, Orange for Control, and Green for Operators.",
        "realWorldExample": "Using 'when green flag clicked' (Events) followed by 'forever' (Control) and 'move 5 steps' (Motion) creates continuous sprite movement."
      },
      {
        "title": "3. Event-Driven Logic and Loops",
        "content": "Modern software relies on event listeners that trigger specific code sequences in response to user inputs.",
        "bulletPoints": [
          "Event-Driven Architecture: Scripts remain idle until a specific trigger event occurs, such as clicking the Green Flag, pressing an arrow key, or tapping a button.",
          "Finite Loop (Repeat N): Executes the enclosed blocks an exact specified number of times (e.g., 'repeat 4' [move 100, turn 90] draws a square).",
          "Infinite Loop (Forever): Executes continuously without stopping until the red stop sign is clicked or a 'stop all' block is triggered.",
          "Conditional Loops (Repeat Until): Executes repeatedly until a specific sensing condition becomes TRUE (e.g., 'repeat until touching edge').",
          "Conditional Selection (If...Then...Else): Checks a sensing or comparison operator; if TRUE, runs the first block set; if FALSE, runs the alternative block set."
        ],
        "keyTakeaway": "Events start scripts on user actions; 'repeat' runs a fixed count, 'forever' runs indefinitely, and 'if/then' makes decisions.",
        "realWorldExample": "Programming arrow keys: 'When Up Arrow key pressed' -> 'change y by 10' moves the sprite upward on demand."
      },
      {
        "title": "4. Variables and Message Broadcasting",
        "content": "Interactive games and simulations require managing dynamic memory and inter-sprite communication.",
        "bulletPoints": [
          "Variables (Dark Orange): Named memory containers that store values that can change during program execution (e.g., 'Score', 'Lives', 'Timer', 'Speed').",
          "Variable Blocks: 'set [Score] to 0', 'change [Score] by 1', 'show variable', 'hide variable'.",
          "Broadcasting Messages: Allows sprites to communicate with one another by broadcasting an invisible event signal across the project ('broadcast [Game Over]').",
          "Receiving Broadcasts: Other sprites have scripts starting with 'when I receive [Game Over]' that trigger coordinated reactions (e.g., stopping motion or showing a game over screen).",
          "Project Debugging: Testing scripts incrementally, isolating faulty block connections, and verifying variable values on the stage monitor."
        ],
        "keyTakeaway": "Variables store changeable values like scores and lives; broadcasting lets multiple sprites communicate and coordinate actions.",
        "realWorldExample": "When the player touches an obstacle, the obstacle broadcasts 'LoseLife', causing the heart sprite to reduce the 'Lives' variable by 1."
      }
    ],
    "commonMistakes": [
      "Confusing 'change variable by 1' (which adds 1 to the current score) with 'set variable to 1' (which resets the score to 1).",
      "Forgetting to initialize variables under 'when green flag clicked', causing the previous game's score to persist.",
      "Placing blocks inside a loop when they should only run once at the start (e.g., setting starting coordinates inside a 'forever' loop freezes the sprite).",
      "Confusing X coordinates (horizontal left/right) with Y coordinates (vertical up/down)."
    ],
    "beceExamTips": [
      "Remember the center of the Scratch stage is at coordinates X: 0, Y: 0.",
      "Understand the stage dimensions: Width = 480 pixels (-240 to +240); Height = 360 pixels (-180 to +180).",
      "Know that Yellow blocks are Events (e.g. Green flag clicked) and Orange blocks are Control (loops and if-conditions)."
    ],
    "summaryChecklist": [
      "Can I identify the Stage, Sprites, Block Palette, and Scripts Area?",
      "Do I understand the (X, Y) coordinates of the Scratch stage?",
      "Can I combine Events, Control, and Motion blocks to move a sprite?",
      "Can I create a 'Score' variable and increment it using 'change [Score] by 1'?",
      "Can I explain how message broadcasting allows two sprites to communicate?"
    ]
  },
  "jhs2-ict-t11-cybersecurity-threats": {
    "topicId": "jhs2-ict-t11-cybersecurity-threats",
    "introduction": "In an increasingly hyper-connected digital economy, cybersecurity is vital to safeguard personal data, financial assets, institutional infrastructure, and national sovereignty from malicious cyber threats. In JHS 2, students examine the taxonomy of malware (viruses, worms, trojans, ransomware, spyware), social engineering scams (phishing, smishing), denial of service attacks, and common threat vectors.",
    "overview": "In an increasingly hyper-connected digital economy, cybersecurity is vital to safeguard personal data, financial assets, institutional infrastructure, and national sovereignty from malicious cyber threats. In JHS 2, students examine the taxonomy of malware (viruses, worms, trojans, ransomware, spyware), social engineering scams (phishing, smishing), denial of service attacks, and common threat vectors.",
    "realWorldContext": "Mobile Money (MoMo) fraud syndicate calls and SMS messages targeting citizens across Ghana represent everyday real-world examples of social engineering and cyber deception.",
    "objectives": [
      "Define cybersecurity and distinguish between ethical computing and cybercrime.",
      "Differentiate the operational mechanisms of viruses, worms, trojan horses, ransomware, and spyware.",
      "Explain social engineering techniques, specifically email phishing and SMS phishing (smishing).",
      "Describe how Denial of Service (DoS) and Distributed Denial of Service (DDoS) attacks disrupt online services.",
      "Identify common malware infection vectors (infected flash drives, cracked software, email attachments)."
    ],
    "sections": [
      {
        "title": "1. The Cybersecurity Landscape and Malware Taxonomy",
        "content": "Malware (short for Malicious Software) is an umbrella term encompassing any software intentionally engineered to damage, disrupt, or gain unauthorized access to a computer system.",
        "bulletPoints": [
          "Computer Virus: A malicious program that attaches itself to a legitimate host program or executable file. It cannot run or spread independently; it activates and replicates only when the infected host file is executed by a human user.",
          "Computer Worm: A standalone malicious program that replicates automatically across computer networks without requiring a host program or human intervention. Worms rapidly consume network bandwidth and crash servers.",
          "Trojan Horse: Malicious software that masquerades as an attractive, legitimate program (e.g., a free game, video player, or PDF reader). Once installed, it secretly opens a backdoor for cybercriminals to remotely control the computer.",
          "Ransomware: A dangerous malware that encrypts user documents, photos, and databases, demanding a monetary ransom payment (usually in cryptocurrency like Bitcoin) to provide the decryption key.",
          "Spyware and Keyloggers: Covert software that monitors user activities, tracks visited websites, and records every keystroke typed (keylogging) to steal banking passwords, MoMo PINs, and personal communications."
        ],
        "keyTakeaway": "Malware includes viruses (host-dependent), worms (self-replicating across networks), trojans (disguised traps), ransomware (extortion), and spyware (secret snooping).",
        "realWorldExample": "A student downloads a free cracked computer game that secretly contains a keylogger, which transmits his email password to hackers."
      },
      {
        "title": "2. Social Engineering and Phishing Scams",
        "content": "Cybercriminals frequently bypass complex digital firewalls by exploiting human psychology—such as fear, greed, curiosity, or urgency—rather than cracking software code.",
        "bulletPoints": [
          "Social Engineering: The psychological manipulation of people into voluntarily divulging confidential personal information, passwords, or security credentials.",
          "Phishing: Deceptive emails or fake websites designed to look identical to trusted institutions (e.g., commercial banks, WAEC, Google, MTN) that trick victims into entering login details.",
          "Smishing (SMS Phishing): Fraudulent text messages sent to mobile phones claiming an account has been suspended or that the recipient has won a cash lottery, demanding immediate action via a malicious link or phone call.",
          "Vishing (Voice Phishing): Telephone phone calls from fraudsters posing as telecommunication customer service agents demanding Mobile Money PINs or verification codes.",
          "Red Flags of Phishing: Sense of urgent panic ('Account suspended! Act now!'), suspicious sender email addresses, generic greetings ('Dear Customer'), poor spelling, and mismatched hyperlink URLs."
        ],
        "keyTakeaway": "Social engineering manipulates human psychology; phishing uses fake emails and websites to trick victims into surrendering passwords.",
        "realWorldExample": "An SMS claiming 'Your MoMo account has been credited with GHS 5,000 by mistake, please send it back' is an everyday social engineering scam in Ghana."
      },
      {
        "title": "3. Network and Server Attacks: DoS and Botnets",
        "content": "Large-scale cyberattacks can paralyze government portals, educational databases, and commercial banking networks.",
        "bulletPoints": [
          "Denial of Service (DoS): An attack designed to shut down a machine or network, making it inaccessible to its intended legitimate users by overwhelming the target with bogus requests.",
          "Distributed Denial of Service (DDoS): A DoS attack launched simultaneously from thousands or millions of compromised computers scattered across the globe.",
          "Botnet: A network of private computers, routers, and smart devices infected with malware (termed 'zombies') and controlled remotely as a group by a cybercriminal without the owners' knowledge.",
          "Man-in-the-Middle (MitM) Attack: A cyber attack where an attacker secretly intercepts and alters communications between two parties who believe they are directly communicating with each other (common on unsecured public Wi-Fi networks).",
          "Consequences: Paralyzes online banking, crashes exam result checker portals, and causes immense financial loss to enterprises."
        ],
        "keyTakeaway": "DDoS attacks use botnets of infected zombie computers to overwhelm web servers and take services offline.",
        "realWorldExample": "When thousands of bot computers flood an examination result checking portal on release day, causing the website to crash for legitimate students."
      },
      {
        "title": "4. Threat Vectors and Protective Defenses",
        "content": "Understanding how malware enters digital devices enables users to implement effective proactive safeguards.",
        "bulletPoints": [
          "Common Infection Vectors: Infected USB flash drives inserted into shared computers; clicking unverified email attachments; downloading cracked software or pirated movies; visiting compromised websites; using unsecured public Wi-Fi hotspots.",
          "Antivirus and Anti-Malware Software: Utility programs that scan storage drives, detect virus signatures, quarantine infected files, and block malicious scripts (e.g., Windows Defender, Avast, Kaspersky).",
          "Virus Definitions Updates: Antivirus software must update its database of threat signatures daily to detect newly created zero-day viruses.",
          "Firewalls: Hardware or software security barriers that monitor and filter incoming and outgoing network traffic based on predetermined security rules, blocking unauthorized connections.",
          "System Patching: Regularly updating operating systems and web browsers to patch security vulnerabilities exploited by hackers."
        ],
        "keyTakeaway": "Malware spreads via flash drives, pirated software, and phishing links; defenses include updated antivirus, firewalls, and security patching.",
        "realWorldExample": "Inserting an infected USB drive into a school computer without scanning it can spread a shortcut virus across all lab computers."
      }
    ],
    "commonMistakes": [
      "Using the terms 'virus' and 'worm' interchangeably; viruses require a host file and human action, while worms replicate independently across networks.",
      "Believing that smartphones cannot be infected with malware; mobile phones running Android or iOS are frequent targets of spyware and malicious apps.",
      "Assuming that antivirus software provides lifetime protection without internet updates; outdated antivirus cannot recognize new malware strains.",
      "Thinking that legitimate banks will send SMS messages asking customers to reply with their PIN."
    ],
    "beceExamTips": [
      "In BECE Section A, understand the distinct definitions: Worm = self-replicating network program; Trojan = software disguised as something harmless; Ransomware = encrypts files for ransom.",
      "Cite the primary transmission vector in Ghanaian schools: infected USB flash drives.",
      "Explain that a firewall acts as a protective barrier monitoring network traffic."
    ],
    "summaryChecklist": [
      "Can I distinguish between a virus, a worm, and a trojan horse?",
      "Can I explain how ransomware extorts computer users?",
      "Do I know the red flags that indicate a phishing email or SMS scam?",
      "Can I describe how a DDoS attack crashes web servers?",
      "Can I list three proactive hygiene practices to protect computers from malware?"
    ]
  },
  "jhs2-ict-t12-data-protection-privacy": {
    "topicId": "jhs2-ict-t12-data-protection-privacy",
    "introduction": "Information privacy and personal data protection are fundamental rights in the modern digital era. As citizens store sensitive personal, academic, and financial information across smartphones, cloud servers, and institutional databases, understanding cyber hygiene—including password entropy, Multi-Factor Authentication (MFA), cryptographic encryption, data backup strategies, and statutory compliance with the Ghana Data Protection Act—is essential.",
    "overview": "Information privacy and personal data protection are fundamental rights in the modern digital era. As citizens store sensitive personal, academic, and financial information across smartphones, cloud servers, and institutional databases, understanding cyber hygiene—including password entropy, Multi-Factor Authentication (MFA), cryptographic encryption, data backup strategies, and statutory compliance with the Ghana Data Protection Act—is essential.",
    "realWorldContext": "When a bank sends a 6-digit One-Time Password (OTP) to your phone before completing an online transaction, or when the Ghana Card uses biometric fingerprints, robust data protection and privacy mechanisms are in play.",
    "objectives": [
      "Explain the principles of strong password generation and cyber hygiene.",
      "Describe the operation and security benefits of Two-Factor Authentication (2FA).",
      "Differentiate between data backup strategies and explain the 3-2-1 backup rule.",
      "Explain the concept of data encryption (plaintext vs. ciphertext).",
      "Analyze the fundamental rights and provisions of the Ghana Data Protection Act 2012 (Act 843)."
    ],
    "sections": [
      {
        "title": "1. Password Entropy and Authentication Best Practices",
        "content": "Passwords are the primary barrier protecting user accounts, yet weak, predictable passwords remain the leading cause of digital security breaches.",
        "bulletPoints": [
          "Password Entropy: A measure of the unpredictability and computational strength of a password against brute-force and dictionary cracking attacks.",
          "Anatomy of a Strong Password: At least 12 to 16 characters in length; combines uppercase letters (A–Z), lowercase letters (a–z), numbers (0–9), and special characters (!, @, #, $, %, ^, &, *).",
          "Weak Password Pitfalls: Never use personal identifiers (birthdays, child names, school names, phone numbers); never use common dictionary sequences ('password', '123456', 'qwerty').",
          "Passphrases: Memorable multi-word phrases that provide exceptional length and entropy (e.g., 'Kofi#Runs@VoltaLake2026!').",
          "Password Hygiene: Never reuse the same password across multiple accounts; never write passwords on sticky notes attached to monitors; utilize secure password managers."
        ],
        "keyTakeaway": "Strong passwords use 12+ mixed characters and symbols without predictable personal words; never share or reuse passwords.",
        "realWorldExample": "'kofimensah2010' can be cracked by automated software in seconds; 'K0f!#M3n$ah@2026' would take centuries to brute-force."
      },
      {
        "title": "2. Two-Factor (2FA) and Multi-Factor Authentication (MFA)",
        "content": "Because stolen passwords can compromise accounts, modern systems require secondary independent verification methods.",
        "bulletPoints": [
          "Authentication Factors: Classified into three categories:",
          "1. Something You Know: Passwords, PINs, or security question answers.",
          "2. Something You Have: Physical smartphone receiving an SMS OTP (One-Time Password), authenticator app token, or smart security key card.",
          "3. Something You Are (Biometrics): Physical biological traits like fingerprint scans, facial recognition, or iris scans.",
          "Two-Factor Authentication (2FA): Requires verification from two DIFFERENT categories (e.g., typing a password [know] + entering an SMS code sent to your phone [have]).",
          "Security Value: Even if a hacker steals your password, they cannot breach your account without physical access to your mobile phone or biometric fingerprint."
        ],
        "keyTakeaway": "2FA combines two distinct factors (something you know, have, or are) to block unauthorized logins even if a password is compromised.",
        "realWorldExample": "Logging into WhatsApp on a new phone requires both your phone number and the 6-digit SMS verification code sent to your handset."
      },
      {
        "title": "3. Cryptographic Encryption and the 3-2-1 Backup Strategy",
        "content": "Securing information requires protecting data in transit across the internet and maintaining redundant copies against disasters.",
        "bulletPoints": [
          "Data Encryption: The mathematical process of encoding plain readable text (Plaintext) into an unreadable scrambled format (Ciphertext) using an encryption algorithm and secret key.",
          "Decryption: The reverse process of converting ciphertext back into readable plaintext using the authorized secret key.",
          "Encryption in Transit vs at Rest: HTTPS encrypts data while traveling across the internet; full disk encryption (BitLocker) encrypts data stored on hard drives so thieves cannot read files if a laptop is stolen.",
          "Data Backup: Creating duplicate copies of vital files on separate storage media to guard against hardware crashes, theft, accidental deletion, or ransomware.",
          "The 3-2-1 Backup Rule: Maintain at least 3 copies of important data, stored on 2 different physical media types (e.g., computer hard drive + external SSD), with 1 copy kept offsite in secure cloud storage (Google Drive, OneDrive)."
        ],
        "keyTakeaway": "Encryption scrambles data into unreadable ciphertext; the 3-2-1 rule keeps 3 copies on 2 media with 1 copy in the cloud.",
        "realWorldExample": "WhatsApp end-to-end encryption ensures that only the sender and recipient can read messages; telecom networks cannot eavesdrop."
      },
      {
        "title": "4. The Ghana Data Protection Act 2012 (Act 843)",
        "content": "Ghana has enacted comprehensive statutory legislation to guarantee individual privacy rights in the digital age.",
        "bulletPoints": [
          "Legislative Objective: Passed by the Parliament of Ghana to protect the privacy of the individual and personal data by regulating the processing of personal information.",
          "Data Protection Commission (DPC): The statutory regulatory agency mandated to enforce compliance, register data controllers, and investigate privacy violations.",
          "Data Subject: The individual human being whose personal data is collected and processed (e.g., students, patients, bank customers).",
          "Data Controller: An entity (school, hospital, bank, telecom company) that determines the purpose and manner of processing personal data.",
          "Core Data Principles: Personal data must be obtained lawfully and fairly; processed only for specific, explicit, and legitimate purposes; kept accurate and up-to-date; not retained longer than necessary; and secured against loss or unauthorized access.",
          "Rights of Citizens: Right to be informed when data is collected, right to access their data, right to correct inaccuracies, and right to object to commercial processing."
        ],
        "keyTakeaway": "The Ghana Data Protection Act 2012 regulates how institutions collect and secure citizen data, overseen by the Data Protection Commission.",
        "realWorldExample": "A hospital in Ghana cannot lawfully sell patient medical records or phone numbers to private marketing companies without explicit consent."
      }
    ],
    "commonMistakes": [
      "Assuming that changing one letter in a password (e.g. 'Password1') makes it unbreakable; dictionary cracking tools test these variants instantly.",
      "Believing that keeping two copies of a file on the SAME computer hard drive counts as a backup; if the hard drive crashes, both copies are destroyed.",
      "Confusing encryption (reversible with a key) with file deletion.",
      "Thinking that the Data Protection Act applies only to government departments; all private businesses and schools collecting personal data are legally bound by it."
    ],
    "beceExamTips": [
      "Remember the three authentication factors: Something you know (password), Something you have (phone/token), Something you are (biometric fingerprint).",
      "Memorize the 3-2-1 backup rule: 3 copies, 2 different media, 1 offsite/cloud copy.",
      "Identify Act 843 as the Ghana Data Protection Act of 2012."
    ],
    "summaryChecklist": [
      "Can I generate a high-entropy password that meets security standards?",
      "Can I explain how Two-Factor Authentication (2FA) protects accounts?",
      "Do I understand the difference between plaintext and ciphertext in encryption?",
      "Can I apply the 3-2-1 backup strategy to protect important school files?",
      "Can I state three core principles of the Ghana Data Protection Act 2012?"
    ]
  },
  "jhs2-ict-t13-digital-footprint-ethics": {
    "topicId": "jhs2-ict-t13-digital-footprint-ethics",
    "introduction": "Digital citizenship encompasses the norms, ethics, and legal responsibilities governing appropriate and safe technology use. In an interconnected digital society, every online action leaves an indelible digital footprint. Students must navigate the nuances of online etiquette (netiquette), respect intellectual property and copyright laws, avoid software piracy and plagiarism, and evaluate the ethical implications of emerging artificial intelligence.",
    "overview": "Digital citizenship encompasses the norms, ethics, and legal responsibilities governing appropriate and safe technology use. In an interconnected digital society, every online action leaves an indelible digital footprint. Students must navigate the nuances of online etiquette (netiquette), respect intellectual property and copyright laws, avoid software piracy and plagiarism, and evaluate the ethical implications of emerging artificial intelligence.",
    "realWorldContext": "When students share content on social media, cite web sources in school projects, or download software, ethical and legal standards determine whether their conduct is responsible digital citizenship or copyright infringement.",
    "objectives": [
      "Define digital footprint and explain the distinction between active and passive digital footprints.",
      "Apply core netiquette rules across emails, forums, and social media platforms.",
      "Explain Intellectual Property (IP) and copyright protections under the Ghana Copyright Act 2005 (Act 690).",
      "Distinguish between software piracy, plagiarism, and legitimate fair use.",
      "Compare proprietary, open-source, and Creative Commons software and content licensing models."
    ],
    "sections": [
      {
        "title": "1. The Concept and Permanence of Digital Footprints",
        "content": "Whenever an individual interacts with the internet, they leave behind an indelible electronic trail of data.",
        "bulletPoints": [
          "Digital Footprint: The permanent record and trail of data, personal information, and digital activity created when using the internet.",
          "Active Digital Footprint: Data that a user intentionally shares online, such as posting photographs, writing comments, publishing blog posts, or sending emails.",
          "Passive Digital Footprint: Data collected about a user without their direct deliberate input, including browsing history, IP location logs, device metadata, and tracking cookies.",
          "The Myth of Deletion: Content posted online can be screenshotted, downloaded, shared, or archived by web crawlers (e.g., Wayback Machine) within seconds, making permanent deletion virtually impossible.",
          "Reputational Consequences: Universities, high school scholarship boards, and future corporate employers routinely review candidates' public digital footprints to assess character, integrity, and maturity."
        ],
        "keyTakeaway": "A digital footprint is the permanent trail of online activity; active is what you post intentionally, passive is what systems track.",
        "realWorldExample": "A student who posts offensive comments online may find that years later, those archived posts jeopardize a prestigious university scholarship."
      },
      {
        "title": "2. Netiquette: Internet Etiquette and Cyber Ethics",
        "content": "Netiquette represents the set of social conventions and ethical rules governing respectful, civilized digital communication.",
        "bulletPoints": [
          "Rule 1 - Remember the Human: Treat others online with the same courtesy, kindness, and respect you would offer face-to-face. Never type anything online you would not say in person.",
          "Rule 2 - Avoid Typing in ALL CAPS: In digital communication, text written entirely in capital letters is widely interpreted as SHOUTING and aggressive hostility.",
          "Rule 3 - Combat Cyberbullying: Refrain from cyber harassment, trolling, spreading malicious rumors, or sharing unconsented private photos. Stand up for victims and report abusive accounts.",
          "Rule 4 - Verify Before Sharing: Combat the viral spread of fake news, digital hoaxes, and misinformation by verifying headlines across reputable news portals before forwarding messages on WhatsApp.",
          "Rule 5 - Respect Others' Privacy: Never share someone else's personal contact details, private conversations, or photographs without their explicit permission."
        ],
        "keyTakeaway": "Netiquette demands treating others with empathy, avoiding ALL CAPS shouting, combating fake news, and protecting others' privacy.",
        "realWorldExample": "Verifying a viral WhatsApp rumor about school closures on the official GES website before forwarding it prevents public panic."
      },
      {
        "title": "3. Intellectual Property, Copyright & Software Piracy",
        "content": "Creative human innovations, software programs, music, and literary works are protected by intellectual property laws.",
        "bulletPoints": [
          "Intellectual Property (IP): Legal rights protecting creations of the human mind, including literary works, musical compositions, software code, inventions, and artistic symbols.",
          "Copyright: A legal right granted to original authors and creators protecting their works from unauthorized copying, reproduction, or distribution. In Ghana, protected under the Copyright Act 2005 (Act 690).",
          "Plagiarism: The dishonest act of copying someone else's written work, ideas, or research and passing them off as one's own without appropriate citation or quotation.",
          "Software Piracy: The illegal copying, downloading, distribution, or unauthorized commercial cracking of copyrighted software.",
          "Dangers of Pirated Software: Cracked software frequently contains hidden trojan malware, receives no security patches, lacks customer support, and subjects users to criminal penalties.",
          "Fair Use / Fair Dealing: Legal exceptions permitting limited use of copyrighted material without permission for nonprofit educational purposes, commentary, or research, provided proper attribution is given."
        ],
        "keyTakeaway": "Copyright protects creative works; piracy and plagiarism are illegal intellectual theft, whereas Fair Use permits limited educational citation.",
        "realWorldExample": "Copying text from Wikipedia into a school science essay without citing the source is plagiarism; downloading a cracked game is software piracy."
      },
      {
        "title": "4. Software Licensing Models: Proprietary vs. Open Source",
        "content": "Software is distributed under varying legal licensing agreements that govern how it can be utilized, inspected, and modified.",
        "bulletPoints": [
          "Proprietary / Commercial Software: The source code is kept secret and owned exclusively by the software company. Users purchase a license granting limited rights to use the software, but cannot copy, inspect, or modify the code (e.g., Microsoft Windows, Microsoft Office, Adobe Photoshop).",
          "Open-Source Software (OSS): The underlying human-readable source code is made freely available to the public. Anyone has the legal freedom to inspect, modify, enhance, and redistribute the software (e.g., Linux OS, Python programming language, LibreOffice, Mozilla Firefox, VLC media player).",
          "Freeware: Proprietary software made available free of charge, but the source code remains closed and protected (e.g., Adobe Acrobat Reader, Skype).",
          "Creative Commons (CC): A public copyright license system that enables creators to grant permissions to the public to share and build upon their work for free under specified conditions (e.g., Attribution - CC BY)."
        ],
        "keyTakeaway": "Proprietary software has closed secret code requiring paid licenses; open-source software has publicly accessible code that is free to modify and share.",
        "realWorldExample": "A school deploying LibreOffice across all lab computers saves thousands of Cedis in licensing fees while giving students free open-source software."
      }
    ],
    "commonMistakes": [
      "Believing that if an image or article is on Google, it is free to use without permission or citation.",
      "Thinking that typing in ALL CAPS makes text look important and impressive; it is universally viewed online as shouting and rude.",
      "Assuming that open-source software is inferior to commercial software; global internet servers and supercomputers overwhelmingly run on open-source Linux.",
      "Believing that deleting a social media post erases it permanently from the internet."
    ],
    "beceExamTips": [
      "Clearly distinguish between Plagiarism (copying text without attribution) and Software Piracy (unauthorized duplication of software).",
      "In questions on software types: Proprietary = closed source (Windows); Open Source = accessible source code (Linux).",
      "Memorize the definition of Digital Footprint: the permanent record of data left behind when using the internet."
    ],
    "summaryChecklist": [
      "Can I define digital footprint and differentiate between active and passive footprints?",
      "Can I state 4 core netiquette principles for respectful digital communication?",
      "Do I understand how the Ghana Copyright Act 2005 (Act 690) protects creative works?",
      "Can I explain why downloading cracked software is dangerous and illegal?",
      "Can I contrast proprietary software with open-source software using real examples?"
    ]
  }
};
