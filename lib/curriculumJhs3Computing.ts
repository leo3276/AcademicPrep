// Ghanaian JHS 3 Computing Curriculum Topics
// Based on NaCCA / GES Common Core Programme (CCP) BECE Candidate Syllabus
// 14 Comprehensive Topics across Terms 1, 2, and 3

import { CurriculumTopic } from './types';

export const JHS3_COMPUTING_TOPICS: CurriculumTopic[] = [
  {
    "id": "jhs3-ict-t1-computational-thinking-decomposition",
    "subjectId": "ict",
    "level": "JHS 3",
    "term": 1,
    "orderIndex": 1,
    "title": "Computational Thinking: Decomposition, Pattern Recognition, Abstraction & Algorithm Design",
    "description": "Master the 4 fundamental pillars of computational thinking: breaking down complex problems (decomposition), identifying trends (pattern recognition), filtering out irrelevant details (abstraction), and designing step-by-step solutions (algorithms).",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=qYZF69hCgcU",
    "youtubeId": "qYZF69hCgcU",
    "keyNotes": "• The 4 Pillars of Computational Thinking:\n  1. Decomposition: Breaking down a complex problem, system, or dataset into smaller, manageable sub-problems (e.g. dividing a school grading software into student registration, score entry, mark computation, and report printing).\n  2. Pattern Recognition: Observing similarities, regularities, trends, and repeating characteristics across different sub-problems to apply common solution templates.\n  3. Abstraction: Focusing exclusively on essential, relevant information while filtering out unnecessary background details (e.g. a student database requires name, ID, and marks; eye color or shoe size are abstracted away).\n  4. Algorithm Design: Formulating an unambiguous, step-by-step set of ordered instructions or finite rules to solve the problem systematically.\n• Characteristics of an Effective Algorithm:\n  - Finiteness: Must terminate after a countable number of execution steps.\n  - Definiteness (Unambiguity): Every operation must be clear and have exactly one interpretation.\n  - Input: Accepts zero or more valid input data elements.\n  - Output: Produces at least one verified output or result.\n  - Effectiveness: Every operation must be basic enough to be carried out exactly.\n• Chief Examiner BECE Warning:\n  - Candidates often confuse 'abstraction' with 'decomposition'. Remember: Decomposition splits a problem into components; Abstraction strips away irrelevant details.",
    "examples": [
      {
        "id": "ex-jhs3ict-t1-1",
        "title": "Applying Computational Thinking to an Automated Library Management System",
        "problem": "A junior high school wishes to digitize its manual library system. Explain how a software engineer applies: (a) Decomposition, (b) Abstraction.",
        "stepByStepSolution": [
          "Step 1 (Decomposition): Break the library system into 4 distinct modular subsystems: (1) Book Cataloging/Inventory, (2) User/Student Registration, (3) Book Borrowing/Check-out, and (4) Book Return and Fine Calculation [B1 mark].",
          "Step 2 (Abstraction - Part b): Identify the essential attributes needed for a book record: ISBN, Title, Author, Year of Publication, and Shelf Number [B1 mark].",
          "Step 3: Filter out irrelevant details such as the weight of the book, the author's marital status, or the color of the cover, as they do not affect borrowing logic [B1 mark]."
        ],
        "keyTakeaway": "Decomposition partitions a system into modules; Abstraction isolates essential attributes from irrelevant noise."
      },
      {
        "id": "ex-jhs3ict-t1-2",
        "title": "Identifying the Four Pillars in Real-World Problem Solving",
        "problem": "Match the following actions to their computational thinking pillar: (1) Spotting that all grade calculations use sum divided by count, (2) Designing a recipe for jollof rice, (3) Omitting bus route numbers when drawing a subway map.",
        "stepByStepSolution": [
          "Step 1: Spotting identical mathematical formulas across subjects is Pattern Recognition [B1 mark].",
          "Step 2: Designing an ordered step-by-step procedure to prepare a meal is Algorithm Design [B1 mark].",
          "Step 3: Leaving out ground road details to focus only on transit stations is Abstraction [B1 mark]."
        ],
        "keyTakeaway": "Algorithms provide ordered steps; Abstraction simplifies complex realities into useful models."
      }
    ]
  },
  {
    "id": "jhs3-ict-t2-advanced-algorithms-flowcharts",
    "subjectId": "ict",
    "level": "JHS 3",
    "term": 1,
    "orderIndex": 2,
    "title": "Advanced Algorithms: Pseudocode, Structured Flowcharts & Trace Tables",
    "description": "Design robust algorithms using structured pseudocode, standard ANSI flowchart symbols, decision branching, loop iterations, and dry-running with trace tables.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=kM9ASKAni_s",
    "youtubeId": "kM9ASKAni_s",
    "keyNotes": "• Standard ANSI Flowchart Symbols:\n  - Terminator (Oval / Rounded Rectangle): Represents START or STOP of the algorithm.\n  - Process (Rectangle): Represents computational processing, variable initialization, or arithmetic calculations (e.g. Sum = A + B).\n  - Input / Output (Parallelogram): Represents reading input from keyboard or displaying output on screen (e.g. READ Mark, PRINT Grade).\n  - Decision (Diamond): Evaluates a conditional Boolean expression resulting in True/False or Yes/No paths (e.g. Is Score >= 50?).\n  - Connector (Small Circle): Connects separate flow lines on the same page.\n  - Flow Lines (Arrows): Indicate the exact sequential direction of program execution.\n• Structured Pseudocode Conventions:\n  - Written in human-readable English resembling programming logic without strict language syntax.\n  - Standard keywords capitalized: BEGIN, END, READ/INPUT, PRINT/DISPLAY, IF...THEN...ELSE...ENDIF, WHILE...DO...ENDWHILE, FOR...TO...NEXT.\n  - Indentation used to show nested control blocks.\n• Dry Running and Trace Tables:\n  - A technique used to manually trace logic step-by-step to detect logic errors (bugs) before coding.\n  - Columns represent program variables, conditions, and screen output; rows record values after each step.\n• Chief Examiner BECE Warning:\n  - Never use a rectangle for an INPUT statement or a diamond for a simple calculation!\n  - Always label outgoing arrows of a decision diamond with 'Yes' / 'No' or 'True' / 'False'.",
    "examples": [
      {
        "id": "ex-jhs3ict-t2-1",
        "title": "Writing Structured Pseudocode for BECE Grading Logic",
        "problem": "Write structured pseudocode that accepts a candidate's BECE raw mark (0-100), outputs 'Grade 1' if mark >= 80, 'Pass' if mark >= 50, otherwise outputs 'Fail'.",
        "stepByStepSolution": [
          "Step 1: Initialize algorithm and read input:\n  BEGIN\n    INPUT CandidateMark [B1 mark]",
          "Step 2: Construct conditional branching hierarchy:\n    IF CandidateMark >= 80 THEN\n      PRINT \"Grade 1\"\n    ELSE IF CandidateMark >= 50 THEN\n      PRINT \"Pass\"\n    ELSE\n      PRINT \"Fail\"\n    ENDIF [M1 mark]",
          "Step 3: Terminate algorithm gracefully:\n  END [A1 mark]"
        ],
        "keyTakeaway": "Use proper keywords (INPUT, IF, ELSE, ENDIF) with clear indentation and unambiguous condition checks."
      },
      {
        "id": "ex-jhs3ict-t2-2",
        "title": "Constructing a Trace Table for a Loop Algorithm",
        "problem": "Trace the execution of this algorithm: Count = 1; Total = 0; WHILE Count <= 3 DO Total = Total + (Count * 2); Count = Count + 1; ENDWHILE. State the final values of Count and Total.",
        "stepByStepSolution": [
          "Step 1 (Initialization): Count = 1, Total = 0 [B1 mark].",
          "Step 2 (Iteration 1): Is Count (1) <= 3? YES -> Total = 0 + (1 * 2) = 2; Count becomes 1 + 1 = 2.",
          "Step 3 (Iteration 2): Is Count (2) <= 3? YES -> Total = 2 + (2 * 2) = 6; Count becomes 2 + 1 = 3.",
          "Step 4 (Iteration 3): Is Count (3) <= 3? YES -> Total = 6 + (3 * 2) = 12; Count becomes 3 + 1 = 4 [M1 mark].",
          "Step 5 (Termination): Is Count (4) <= 3? NO -> Loop exits. Final values: Count = 4, Total = 12 [A1 mark]."
        ],
        "keyTakeaway": "Trace tables record exact variable states across every iteration to verify loop logic and exit conditions."
      }
    ]
  },
  {
    "id": "jhs3-ict-t3-programming-fundamentals-python",
    "subjectId": "ict",
    "level": "JHS 3",
    "term": 1,
    "orderIndex": 3,
    "title": "Programming Concepts: Variables, Data Types, Operators & Syntax (Python / Text-based Coding)",
    "description": "Explore fundamental text-based programming in Python: memory variables, naming rules, primitive data types (int, float, str, bool), arithmetic and relational operators, comments, and console I/O.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=kqtD5dpn9C8",
    "youtubeId": "kqtD5dpn9C8",
    "keyNotes": "• What is a Computer Program?\n  - A set of ordered instructions written in a programming language that a computer can parse and execute to accomplish a specific computation.\n  - Source Code: Human-readable code written by a programmer.\n  - Translators:\n    * Compiler: Translates the entire high-level source code into machine code all at once before execution (e.g. C, C++).\n    * Interpreter: Translates and executes source code line-by-line in real time (e.g. Python, JavaScript).\n• Variables and Identifiers:\n  - Variable: A named storage location in computer memory (RAM) designed to hold a value that can change during program execution.\n  - Naming Rules:\n    1. Must begin with a letter (a-z, A-Z) or underscore (_). Never start with a number!\n    2. Cannot contain spaces or special symbols (@, $, %, !).\n    3. Cannot be a reserved keyword (e.g. print, if, else, while, for).\n    4. Python is case-sensitive (Score, score, and SCORE are 3 distinct variables).\n• Primitive Data Types:\n  - Integer (int): Whole numbers without decimal places (e.g. 25, -7, 0).\n  - Floating-point (float): Numbers with fractional decimal points (e.g. 3.142, -0.75).\n  - String (str): Sequences of characters enclosed in quotation marks (e.g. \"Accra\", 'BECE 2026').\n  - Boolean (bool): Logical values representing only True or False.\n• Operators:\n  - Arithmetic: + (addition), - (subtraction), * (multiplication), / (float division), // (integer division), % (modulus/remainder), ** (exponentiation).\n  - Relational / Comparison: == (equal to), != (not equal to), > (greater than), < (less than), >=, <=.\n  - Logical: and, or, not.\n• Chief Examiner BECE Warning:\n  - In programming, '=' is the assignment operator (stores a value into a variable: x = 5), whereas '==' is the comparison operator (checks equality: x == 5). Never confuse the two!",
    "examples": [
      {
        "id": "ex-jhs3ict-t3-1",
        "title": "Evaluating Arithmetic Expressions in Python",
        "problem": "Given a = 14 and b = 4, evaluate the result and state the data type of: (a) a / b, (b) a // b, (c) a % b.",
        "stepByStepSolution": [
          "Step 1 (Part a): Division operator (/) returns a float: 14 / 4 = 3.5 [B1 mark].",
          "Step 2 (Part b): Integer floor division (//) truncates decimals: 14 // 4 = 3 (Type: int) [B1 mark].",
          "Step 3 (Part c): Modulus operator (%) returns the remainder of division: 14 divided by 4 is 3 remainder 2. Result = 2 (Type: int) [B1 mark]."
        ],
        "keyTakeaway": "'/' yields float; '//' yields quotient integer; '%' yields the remainder."
      },
      {
        "id": "ex-jhs3ict-t3-2",
        "title": "Validating Variable Identifier Names",
        "problem": "Identify which of the following variable names are INVALID in Python and explain why: (1) 2026_exam, (2) total_score, (3) student name, (4) class.",
        "stepByStepSolution": [
          "Step 1: '2026_exam' is INVALID because an identifier cannot begin with a numeric digit [B1 mark].",
          "Step 2: 'total_score' is VALID (uses letters and underscore).",
          "Step 3: 'student name' is INVALID because variable names cannot contain spaces [B1 mark].",
          "Step 4: 'class' is INVALID because it is a reserved Python keyword [B1 mark]."
        ],
        "keyTakeaway": "Identifiers cannot start with numbers, contain spaces, or use reserved programming keywords."
      }
    ]
  },
  {
    "id": "jhs3-ict-t4-control-structures-loops",
    "subjectId": "ict",
    "level": "JHS 3",
    "term": 1,
    "orderIndex": 4,
    "title": "Program Control Structures: Conditional Statements & Loop Iterations",
    "description": "Master programmatic control flow: sequential execution, selection structures (if, if-else, if-elif-else), and repetition structures (counted for loops and conditional while loops).",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=6iF8Xb7Z3wQ",
    "youtubeId": "6iF8Xb7Z3wQ",
    "keyNotes": "• The 3 Fundamental Control Structures:\n  1. Sequence: Instructions execute one after the other in strict linear order from top to bottom.\n  2. Selection (Branching): The program evaluates a logical condition and decides which block of instructions to execute:\n     - One-way selection: if condition:\n     - Two-way selection: if condition: ... else:\n     - Multi-way selection: if condition1: ... elif condition2: ... else:\n  3. Iteration (Repetition / Loops): A block of instructions is repeated multiple times until a terminating condition is met.\n• Types of Loops:\n  - Count-Controlled Loops (for loop): Used when the exact number of iterations is known before entering the loop (e.g. for i in range(1, 11): prints numbers 1 to 10).\n  - Condition-Controlled Loops (while loop): Repeated as long as a Boolean condition remains True. Used when the number of iterations depends on user input or dynamic events (e.g. while password != \"Correct\":).\n• Loop Components:\n  - Initialization: Setting the starting value of the loop counter.\n  - Condition Check: Evaluating whether the loop should continue or exit.\n  - Update / Increment: Changing the loop variable towards the termination condition.\n  - Infinite Loop: A critical software bug where the loop termination condition is never reached, freezing the computer program.\n• Chief Examiner BECE Warning:\n  - In a while loop, always update the loop variable inside the body! Omitting 'count += 1' causes an infinite loop that crashes the system.",
    "examples": [
      {
        "id": "ex-jhs3ict-t4-1",
        "title": "Predicting Output of a Python Count-Controlled Loop",
        "problem": "Determine the exact console output produced by the following Python snippet:\nfor k in range(2, 11, 2):\n    print(k, end=' ')",
        "stepByStepSolution": [
          "Step 1: Understand range(start, stop, step): starts at 2, increments by 2, stops BEFORE reaching 11 [B1 mark].",
          "Step 2: Values generated:\n  k = 2 (printed)\n  k = 4 (printed)\n  k = 6 (printed)\n  k = 8 (printed)\n  k = 10 (printed) [M1 mark]",
          "Step 3: When k reaches 12, it exceeds the stop value 11. Final output: '2 4 6 8 10 ' [A1 mark]."
        ],
        "keyTakeaway": "range(start, stop, step) generates numbers up to but excluding the stop value."
      },
      {
        "id": "ex-jhs3ict-t4-2",
        "title": "Detecting and Correcting an Infinite Loop Bug",
        "problem": "Identify the critical programming error in the code below and provide the corrected version:\nx = 1\nwhile x < 5:\n    print('Learning ICT')",
        "stepByStepSolution": [
          "Step 1: In the code, variable x is initialized to 1. The condition 'x < 5' is evaluated as True [B1 mark].",
          "Step 2: The loop prints 'Learning ICT', but x is never modified inside the loop body. Thus x remains 1 indefinitely, creating an infinite loop that never terminates [B1 mark].",
          "Step 3: Corrected code must increment x in every iteration:\nx = 1\nwhile x < 5:\n    print('Learning ICT')\n    x = x + 1 [B1 mark]"
        ],
        "keyTakeaway": "Always increment or modify the loop counter within a while loop to prevent infinite loop errors."
      }
    ]
  },
  {
    "id": "jhs3-ict-t5-html-web-development",
    "subjectId": "ict",
    "level": "JHS 3",
    "term": 2,
    "orderIndex": 5,
    "title": "Web Design Fundamentals: HTML5 Document Structure, Semantic Tags, Hyperlinks & Tables",
    "description": "Construct clean, standards-compliant web pages using HTML5: the document skeleton, heading hierarchies, paragraphs, ordered/unordered lists, hyperlinks, images, and data tables.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=UB1O30fR-EE",
    "youtubeId": "UB1O30fR-EE",
    "keyNotes": "• What is HTML?\n  - HTML stands for HyperText Markup Language. It is the universal standard markup language used to structure web pages and their content.\n  - HTML uses 'tags' enclosed in angle brackets: <tagname>content</tagname>.\n  - Container Tags: Have an opening and closing tag (e.g. <p>...</p>, <h1>...</h1>).\n  - Empty / Void Tags: Do not enclose text and do not require closing tags (e.g. <br>, <hr>, <img src=\"...\">).\n• Standard HTML5 Document Skeleton:\n  <!DOCTYPE html>  <!-- Declares HTML5 document type -->\n  <html lang=\"en\">\n    <head>\n      <meta charset=\"UTF-8\">\n      <title>Page Title</title> <!-- Appears on browser tab -->\n    </head>\n    <body>\n      <!-- Visible content goes here -->\n    </body>\n  </html>\n• Core Structural & Formatting Tags:\n  - Headings: <h1> (largest/most important) down to <h6> (smallest).\n  - Paragraphs: <p>...</p>.\n  - Line Break: <br> (forces next text to new line without paragraph margin).\n  - Horizontal Rule: <hr> (inserts a thematic divider line).\n  - Hyperlinks: <a href=\"https://academicprep.com\">Click Here</a> ('href' attribute defines target destination URL).\n  - Images: <img src=\"ghana_flag.png\" alt=\"Ghana National Flag\" width=\"200\"> ('src' specifies image file path; 'alt' provides alternative text for accessibility).\n• Lists and Tables:\n  - Ordered List: <ol> with <li> items (numbered: 1, 2, 3...).\n  - Unordered List: <ul> with <li> items (bullet points).\n  - Tables: <table> defines table, <tr> defines table row, <th> defines table header cell (bold/centered), <td> defines standard data cell.\n• Chief Examiner BECE Warning:\n  - Visible webpage content MUST be placed inside the <body> tag, NOT inside the <head> tag! The <head> contains metadata and page title only.",
    "examples": [
      {
        "id": "ex-jhs3ict-t5-1",
        "title": "Constructing an HTML Hyperlink and Image Tag",
        "problem": "Write the exact HTML code to: (a) Create a clickable hyperlink with the text 'Visit GES Portal' linking to 'https://ges.gov.gh', (b) Embed an image named 'school_crest.jpg' with alternative text 'School Crest'.",
        "stepByStepSolution": [
          "Step 1 (Part a): Use the anchor tag <a> with href attribute:\n<a href=\"https://ges.gov.gh\">Visit GES Portal</a> [B1 mark]",
          "Step 2 (Part b): Use the void image tag <img> with src and alt attributes:\n<img src=\"school_crest.jpg\" alt=\"School Crest\"> [B1 mark]",
          "Step 3: Verify syntax: check quotes around attribute values and closing of the anchor tag [B1 mark]."
        ],
        "keyTakeaway": "<a> uses 'href' for destination URLs; <img> uses 'src' for file paths and 'alt' for descriptions."
      },
      {
        "id": "ex-jhs3ict-t5-2",
        "title": "Coding an HTML Table with Headers and Data Cells",
        "problem": "Write the HTML markup to create a simple 2-row table displaying Subject and Score for English (85%).",
        "stepByStepSolution": [
          "Step 1: Open table container:\n<table> [B1 mark]",
          "Step 2: Create header row with <tr> and <th>:\n  <tr>\n    <th>Subject</th>\n    <th>Score</th>\n  </tr> [B1 mark]",
          "Step 3: Create data row with <tr> and <td>, then close table:\n  <tr>\n    <td>English</td>\n    <td>85%</td>\n  </tr>\n</table> [B1 mark]"
        ],
        "keyTakeaway": "<tr> creates rows; <th> creates bold header cells; <td> creates standard table data cells."
      }
    ]
  },
  {
    "id": "jhs3-ict-t6-css-styling-multimedia",
    "subjectId": "ict",
    "level": "JHS 3",
    "term": 2,
    "orderIndex": 6,
    "title": "Web Styling & Multimedia: CSS Basics, Typography, Colors & Audio/Video",
    "description": "Style modern web pages using Cascading Style Sheets (CSS): inline, internal, and external styles, selectors, font styling, box model basics, and HTML5 audio/video embedding.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=yfoY53QXEnI",
    "youtubeId": "yfoY53QXEnI",
    "keyNotes": "• What is CSS?\n  - CSS stands for Cascading Style Sheets. It controls the visual presentation, formatting, and layout of HTML elements on a web page.\n  - Separation of Concerns: HTML provides the structural content; CSS provides the presentation and styling; JavaScript provides interactive functionality.\n• Three Ways of Applying CSS:\n  1. Inline Styles: Placed directly within an HTML tag using the 'style' attribute (e.g. <p style=\"color: blue; font-size: 16px;\">Text</p>).\n  2. Internal (Embedded) Styles: Placed inside a <style>...</style> block within the <head> section of an HTML document.\n  3. External Style Sheets: Written in a separate file with a .css extension and linked in the HTML <head> using: <link rel=\"stylesheet\" href=\"styles.css\">. Best practice for multi-page websites!\n• CSS Syntax Rule:\n  selector {\n    property: value;\n  }\n  Example:\n  h1 {\n    color: darkgreen;\n    font-family: Arial, sans-serif;\n    text-align: center;\n  }\n• Essential CSS Properties:\n  - color: Text font color.\n  - background-color: Background fill color of an element.\n  - font-size: Size of text (e.g. 18px, 1.2rem).\n  - font-family: Typeface (e.g. 'Times New Roman', Tahoma, sans-serif).\n  - text-align: Alignment (left, center, right, justify).\n  - margin: Transparent space outside the element border.\n  - padding: Transparent space inside the element between content and border.\n• Embedding HTML5 Multimedia:\n  - Audio: <audio controls><source src=\"anthem.mp3\" type=\"audio/mpeg\"></audio>\n  - Video: <video width=\"400\" controls><source src=\"lesson.mp4\" type=\"video/mp4\"></video>\n• Chief Examiner BECE Warning:\n  - Remember the semicolon (;) after each CSS property declaration, and enclose property-value declarations in curly braces { }!",
    "examples": [
      {
        "id": "ex-jhs3ict-t6-1",
        "title": "Writing Internal CSS to Style Headings and Paragraphs",
        "problem": "Write the CSS rule to make all <h2> headings centered in dark red, and all paragraphs have a font size of 16px and line height of 1.5.",
        "stepByStepSolution": [
          "Step 1: Write the selector for h2 with text-align and color:\nh2 {\n  color: darkred;\n  text-align: center;\n} [B1 mark]",
          "Step 2: Write the selector for p with font-size and line-height:\np {\n  font-size: 16px;\n  line-height: 1.5;\n} [B1 mark]",
          "Step 3: Ensure all properties terminate with semicolons and blocks use curly braces [B1 mark]."
        ],
        "keyTakeaway": "CSS rules require selector { property: value; } with correct property spelling."
      },
      {
        "id": "ex-jhs3ict-t6-2",
        "title": "Comparing Inline, Internal, and External CSS",
        "problem": "Explain why professional web developers prefer External CSS over Inline CSS for building multi-page school websites.",
        "stepByStepSolution": [
          "Step 1: Maintenance & Consistency: A single change in one .css file automatically updates the design across hundreds of web pages simultaneously [B1 mark].",
          "Step 2: Clean Code: Separates design rules from HTML content, making HTML pages easier to read and debug [B1 mark].",
          "Step 3: Browser Caching & Speed: Browsers cache external CSS files after the first load, speeding up page loading times for subsequent pages [B1 mark]."
        ],
        "keyTakeaway": "External CSS ensures visual consistency across multiple web pages and faster loading through browser caching."
      }
    ]
  },
  {
    "id": "jhs3-ict-t7-database-management-systems",
    "subjectId": "ict",
    "level": "JHS 3",
    "term": 2,
    "orderIndex": 7,
    "title": "Database Fundamentals: DBMS Concepts, Tables, Fields, Records & SQL Basics",
    "description": "Explore structured data organization: flat files vs relational databases, tables, records, fields, data types, primary keys, foreign keys, and basic SQL query operations.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=wR0JG0e4U94",
    "youtubeId": "wR0JG0e4U94",
    "keyNotes": "• What is a Database?\n  - An organized, structured collection of related data stored electronically on a computer system so that it can be searched, updated, and retrieved efficiently.\n  - DBMS (Database Management System): Specialized software used to create, maintain, query, and manage databases (e.g. MySQL, Microsoft Access, Oracle, SQLite, PostgreSQL).\n• Fundamental Database Components:\n  - Table (Entity / Relation): A grid of rows and columns storing related information about an entity (e.g. Students table).\n  - Field (Attribute / Column): A single vertical category of information (e.g. FirstName, DateOfBirth, Gender).\n  - Record (Tuple / Row): A complete horizontal row of data representing one specific entity or individual (e.g. all information belonging to Student ID 1042).\n• Keys in a Relational Database:\n  - Primary Key: A unique field in a table that uniquely identifies each individual record. It cannot contain duplicate values or NULL (empty) values (e.g. Ghana Card Number, BECE Index Number, Student ID).\n  - Foreign Key: A field in one table that links to the primary key of another table, establishing a relationship between the two tables.\n• Introduction to SQL (Structured Query Language):\n  - Universal language used to communicate with relational databases.\n  - Core SQL Statements:\n    * SELECT: Retrieves data from a database (e.g. SELECT FirstName, Score FROM Students;).\n    * WHERE: Filters records based on a specific condition (e.g. WHERE Score >= 80;).\n    * INSERT INTO: Adds new records into a table.\n    * UPDATE: Modifies existing records.\n    * DELETE: Removes records from a table.\n• Chief Examiner BECE Warning:\n  - Remember: Fields are columns (attributes); Records are horizontal rows (instances). A primary key must NEVER contain duplicate entries!",
    "examples": [
      {
        "id": "ex-jhs3ict-t7-1",
        "title": "Identifying Database Terminology in a School Register",
        "problem": "In a database table containing StudentID, SurName, Class, and FeePaid: (a) Which field should serve as the Primary Key? (b) What is a single row of data called?",
        "stepByStepSolution": [
          "Step 1 (Part a): StudentID is the Primary Key because it uniquely identifies every student; two students can share the same surname or class, but IDs must be unique [B1 mark].",
          "Step 2 (Part b): A single complete horizontal row containing the information of one student is called a Record (or Tuple) [B1 mark].",
          "Step 3: A single column (e.g. FeePaid) is called a Field (or Attribute) [B1 mark]."
        ],
        "keyTakeaway": "Primary keys must be unique. Horizontal rows are Records; vertical columns are Fields."
      },
      {
        "id": "ex-jhs3ict-t7-2",
        "title": "Interpreting a Basic SQL Query",
        "problem": "Explain in plain English what the following SQL statement performs:\nSELECT StudentName, RawScore FROM BECE_Results WHERE RawScore >= 400 ORDER BY RawScore DESC;",
        "stepByStepSolution": [
          "Step 1 (SELECT): Extracts only the StudentName and RawScore columns from the BECE_Results table [B1 mark].",
          "Step 2 (WHERE): Filters the records to display only candidates who scored 400 or higher [B1 mark].",
          "Step 3 (ORDER BY): Sorts the final output in descending order (DESC), from highest score to lowest score [B1 mark]."
        ],
        "keyTakeaway": "SELECT specifies columns; WHERE specifies filter conditions; ORDER BY sorts records."
      }
    ]
  },
  {
    "id": "jhs3-ict-t8-computer-networking-protocols",
    "subjectId": "ict",
    "level": "JHS 3",
    "term": 2,
    "orderIndex": 8,
    "title": "Computer Networking: OSI/TCP-IP Models, IP Addressing, Network Hardware & Wireless LANs",
    "description": "Understand computer network architectures: PAN, LAN, MAN, WAN, network hardware (routers, switches, modems, access points), IP addressing, DNS, and data communication protocols (HTTP, HTTPS, FTP, SMTP).",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=IPvYjXCsTg8",
    "youtubeId": "IPvYjXCsTg8",
    "keyNotes": "• Types of Computer Networks:\n  - PAN (Personal Area Network): Short-range connectivity around an individual person (within 10 meters) using Bluetooth or Wi-Fi Direct.\n  - LAN (Local Area Network): Connects computers within a limited physical area such as a school computer laboratory, office, or home.\n  - MAN (Metropolitan Area Network): Spans an entire city or large metropolitan district (e.g. connecting all public hospital branches in Accra).\n  - WAN (Wide Area Network): Spans across countries, continents, or the entire globe (the Internet is the largest global WAN).\n• Essential Network Hardware Devices:\n  - Network Interface Card (NIC): Hardware chip inside a computer with a unique physical MAC address enabling connection to a network.\n  - Switch: Intelligent networking device that connects multiple computers in a LAN and forwards data packets only to the intended destination device.\n  - Router: Directs data packets between different networks (e.g. connects your school LAN to the external Internet via ISP).\n  - Modem (Modulator-Demodulator): Converts digital computer signals into analog signals for transmission over telephone/fiber lines and vice versa.\n  - Wireless Access Point (WAP): Transmits and receives radio signals allowing wireless laptops and smartphones to connect to a wired network.\n• IP Addressing and Protocols:\n  - IP Address: Unique numerical identifier assigned to every device connected to a computer network (e.g. IPv4: 192.168.1.1, comprising 4 octets).\n  - Domain Name System (DNS): The 'phonebook' of the internet; translates human-friendly domain names (e.g. www.ges.gov.gh) into numerical IP addresses.\n  - Protocols:\n    * HTTP (HyperText Transfer Protocol) & HTTPS (Secure HTTP with SSL/TLS encryption).\n    * FTP (File Transfer Protocol): Used for transferring files between client and server.\n    * SMTP (Simple Mail Transfer Protocol): Used for sending emails.\n• Chief Examiner BECE Warning:\n  - Do NOT confuse a Switch with a Router! A switch connects devices within the SAME local network; a router forwards data BETWEEN DIFFERENT networks.",
    "examples": [
      {
        "id": "ex-jhs3ict-t8-1",
        "title": "Differentiating Network Types based on Geographic Span",
        "problem": "Classify each network setup as PAN, LAN, MAN, or WAN: (a) Bluetooth connection between a smartphone and wireless earbuds, (b) The global banking network of Ecobank connecting Africa and Europe, (c) 30 desktop computers interconnected in a school ICT lab.",
        "stepByStepSolution": [
          "Step 1 (Part a): Personal Area Network (PAN) because the span is within personal range (< 10 meters) [B1 mark].",
          "Step 2 (Part b): Wide Area Network (WAN) because it crosses international national borders and continents [B1 mark].",
          "Step 3 (Part c): Local Area Network (LAN) because it is confined within a single school building [B1 mark]."
        ],
        "keyTakeaway": "PAN = personal space; LAN = building/campus; MAN = city; WAN = country/global."
      },
      {
        "id": "ex-jhs3ict-t8-2",
        "title": "Explaining the Function of DNS (Domain Name System)",
        "problem": "Why is the Domain Name System (DNS) essential when you type 'www.waecgh.org' into your web browser?",
        "stepByStepSolution": [
          "Step 1: Computers and routers on the Internet communicate using numerical IP addresses (such as 197.251.184.22), not English names [B1 mark].",
          "Step 2: Humans cannot easily memorize 12-digit IP addresses for every website they visit [B1 mark].",
          "Step 3: The DNS server acts as a digital phonebook that automatically looks up 'www.waecgh.org' and resolves it into the server's numerical IP address so data packets reach the WAEC web server [B1 mark]."
        ],
        "keyTakeaway": "DNS translates human-readable web addresses (domain names) into computer-readable IP addresses."
      }
    ]
  },
  {
    "id": "jhs3-ict-t9-advanced-spreadsheets-analytics",
    "subjectId": "ict",
    "level": "JHS 3",
    "term": 2,
    "orderIndex": 9,
    "title": "Advanced Spreadsheets: Logical Functions, Lookup Formulas, Data Validation & Pivot Tables",
    "description": "Perform advanced data analysis using Microsoft Excel / Google Sheets: nested IF functions, VLOOKUP, COUNTIF, SUMIF, data validation rules, conditional formatting, and summary Pivot Tables.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=eI_7oc-E3h0",
    "youtubeId": "eI_7oc-E3h0",
    "keyNotes": "• Advanced Formulas & Functions:\n  - Nested IF: Evaluates multiple logical conditions sequentially:\n    =IF(B2>=80, \"Grade 1\", IF(B2>=70, \"Grade 2\", IF(B2>=60, \"Grade 3\", \"Pass\")))\n  - VLOOKUP (Vertical Lookup): Searches for a value in the leftmost column of a table and returns a value in the same row from a specified column:\n    =VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])\n  - COUNTIF: Counts the number of cells within a range that meet a specific criterion:\n    =COUNTIF(C2:C50, \">=50\") (counts how many students passed).\n  - SUMIF: Adds values in a range that satisfy a specific condition:\n    =SUMIF(D2:D50, \"Girls\", E2:E50) (sums fees paid by girls).\n• Data Validation & Conditional Formatting:\n  - Data Validation: Prevents data entry mistakes by restricting cell inputs to permitted ranges (e.g. restricting mark entry to whole numbers between 0 and 100, or providing a drop-down list of school houses).\n  - Conditional Formatting: Automatically applies formatting (cell color, bold text, data bars) based on cell values (e.g. highlighting marks below 50 in red).\n• Absolute vs. Relative Cell Referencing:\n  - Relative Reference (A1): Automatically adjusts row and column references when a formula is copied to another cell.\n  - Absolute Reference ($A$1): Locks the column and row using dollar signs ($) so the reference remains fixed when the formula is copied.\n• Chief Examiner BECE Warning:\n  - All formulas in spreadsheets MUST begin with an equal sign (=). Forgetting '=' treats the formula as plain text!\n  - Understand the role of '$' in absolute referencing (e.g. $B$1).",
    "examples": [
      {
        "id": "ex-jhs3ict-t9-1",
        "title": "Writing a Nested IF Formula for Student Pass/Fail Decision",
        "problem": "In cell C2, write an Excel formula that outputs 'Distinction' if the score in B2 is 80 or above, 'Credit' if B2 is 50 or above, otherwise 'Remedial'.",
        "stepByStepSolution": [
          "Step 1: Start formula with '=' sign [B1 mark].",
          "Step 2: Construct the first IF condition for Distinction: =IF(B2>=80, \"Distinction\", ...) [B1 mark].",
          "Step 3: Nest the second IF condition for Credit and Remedial, matching parentheses: =IF(B2>=80, \"Distinction\", IF(B2>=50, \"Credit\", \"Remedial\")) [B1 mark]."
        ],
        "keyTakeaway": "Nested IFs evaluate sequentially from highest threshold to lowest, with matched closing parentheses."
      },
      {
        "id": "ex-jhs3ict-t9-2",
        "title": "Applying Absolute Cell Referencing in Financial Tax Calculations",
        "problem": "In a payroll sheet, salary is in cell B5 and tax rate (15%) is stored in cell G1. What formula in C5 calculates tax, ensuring it can be copied down to C20 without error?",
        "stepByStepSolution": [
          "Step 1: Tax is calculated as Salary multiplied by Tax Rate: B5 * G1 [B1 mark].",
          "Step 2: To keep G1 fixed when copied down rows 6 to 20, lock cell G1 using absolute dollar signs: $G$1 [B1 mark].",
          "Step 3: Final formula in C5: =B5 * $G$1 [B1 mark]."
        ],
        "keyTakeaway": "Use dollar signs ($G$1) to freeze reference cells so they do not shift when formulas are dragged."
      }
    ]
  },
  {
    "id": "jhs3-ict-t10-desktop-publishing-graphic-design",
    "subjectId": "ict",
    "level": "JHS 3",
    "term": 3,
    "orderIndex": 10,
    "title": "Desktop Publishing & Graphic Design: Layout Principles, Color Models & Image Formats",
    "description": "Explore desktop publishing (DTP) concepts: document templates, master pages, typography, margins, CMYK vs RGB color spaces, resolution (DPI), and vector vs raster graphics.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=0h9V4Q2zW40",
    "youtubeId": "0h9V4Q2zW40",
    "keyNotes": "• What is Desktop Publishing (DTP)?\n  - The creation of high-quality printed documents and digital publications using specialized layout software (e.g. Adobe InDesign, Microsoft Publisher, CorelDRAW, Canva).\n  - DTP differs from Word Processing because DTP focuses on precise object positioning, multi-column page layout, typography, and prepress prep.\n• Core Principles of Graphic Design:\n  - Contrast: Using differences in color, size, and weight to make elements stand out.\n  - Alignment: Lining up visual elements to create visual order and clean margins.\n  - Proximity: Grouping related items close together to show logical connection.\n  - Repetition / Consistency: Repeating fonts, color palettes, and header styles across pages.\n• Color Spaces:\n  - RGB (Red, Green, Blue): Additive color model used for digital screen displays (monitors, smartphones, TV).\n  - CMYK (Cyan, Magenta, Yellow, blacK): Subtractive color model used for commercial physical printing (inkjet and offset printers).\n• Vector vs. Raster Graphics:\n  - Raster (Bitmap) Graphics: Composed of a fixed grid of colored pixels. When enlarged, they lose sharpness and become pixelated/blurry (e.g. JPEG, PNG, GIF, BMP). Measured in DPI/PPI.\n  - Vector Graphics: Composed of mathematical formulas (lines, curves, shapes). Can be scaled infinitely without any loss of quality or clarity (e.g. SVG, EPS, AI). Ideal for company logos and typography.\n• Chief Examiner BECE Warning:\n  - Remember: RGB is for SCREENS; CMYK is for PRINTERS! Vector graphics never pixelate when zoomed in.",
    "examples": [
      {
        "id": "ex-jhs3ict-t10-1",
        "title": "Differentiating RGB and CMYK Color Models for Graphic Production",
        "problem": "A graphic designer creates a school anniversary brochure. (a) Which color model should be used when designing for an online Instagram flyer? (b) Which color model should be exported when sending the file to an offset commercial printing press? Explain each choice.",
        "stepByStepSolution": [
          "Step 1 (Part a): Use RGB (Red, Green, Blue) for the digital Instagram flyer because smartphone and computer screens produce colors by emitting light via RGB pixels [B1 mark].",
          "Step 2 (Part b): Use CMYK (Cyan, Magenta, Yellow, blacK) for the commercial printing press because physical paper printing relies on subtractive ink absorption [B1 mark].",
          "Step 3: Sending an RGB file directly to a four-color printing press results in dull, shifted, or inaccurate printed colors [B1 mark]."
        ],
        "keyTakeaway": "RGB is additive light for digital screens; CMYK is subtractive ink for commercial physical printing."
      },
      {
        "id": "ex-jhs3ict-t10-2",
        "title": "Selecting Vector vs Raster Graphics for School Crest Publication",
        "problem": "Explain why the official school crest should be created as a vector graphic (SVG/AI) rather than a raster bitmap (JPEG/PNG) when producing large roadside billboards.",
        "stepByStepSolution": [
          "Step 1: Vector graphics are composed of scalable mathematical vectors (lines and curves), allowing them to be enlarged to any billboard size without loss of resolution or pixelation [B1 mark].",
          "Step 2: Raster graphics (JPEG/PNG) consist of a finite grid of pixels; scaling them up to billboard dimensions causes pixelation, jagged edges, and severe blurring [B1 mark].",
          "Step 3: Vector formats also maintain crisp geometric edges and accurate color separation required for large-format print cutters [B1 mark]."
        ],
        "keyTakeaway": "Vector graphics scale infinitely without losing sharpness, making them essential for logos, crests, and billboards."
      }
    ]
  },
  {
    "id": "jhs3-ict-t11-cybersecurity-encryption-digital-forensics",
    "subjectId": "ict",
    "level": "JHS 3",
    "term": 3,
    "orderIndex": 11,
    "title": "Advanced Cybersecurity: Cryptography, SSL/TLS, Firewalls & Multi-Factor Authentication",
    "description": "Defend computer systems against sophisticated cyber attacks: symmetric/asymmetric encryption, SSL/TLS certificates, firewalls, two-factor authentication (2FA), and biometric defense.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=inWWhr5tnEA",
    "youtubeId": "inWWhr5tnEA",
    "keyNotes": "• Fundamentals of Cryptography:\n  - Cryptography: The science of protecting information by transforming readable plain text into unintelligible cipher text (encryption) and back (decryption).\n  - Plaintext: Readable original message before encryption.\n  - Ciphertext: Scrambled unreadable code output after encryption.\n  - Symmetric Encryption: Uses the SAME secret cryptographic key to encrypt and decrypt data (faster, e.g. AES).\n  - Asymmetric Encryption: Uses a mathematically linked Key Pair: a Public Key (freely shared to encrypt) and a Private Key (kept secret to decrypt, e.g. RSA).\n• Secure Web Browsing (SSL/TLS):\n  - SSL (Secure Sockets Layer) / TLS (Transport Layer Security): Cryptographic protocols that encrypt data transmitted between a user's web browser and web servers.\n  - Indicated by the padlock icon in the browser address bar and the 'https://' prefix.\n• Network Defense Mechanisms:\n  - Firewall: Hardware or software security system that inspects all incoming and outgoing network traffic and blocks unauthorized access based on predefined security rules.\n  - Multi-Factor Authentication (MFA / 2FA): Requires two or more distinct pieces of evidence before granting access:\n    1. Something you know (Password or PIN).\n    2. Something you have (Mobile OTP code, security token).\n    3. Something you are (Biometric fingerprint, facial recognition, iris scan).\n• Chief Examiner BECE Warning:\n  - 2FA is effective because knowing a password alone is NOT enough for a hacker to access the account; they still need physical possession of your mobile phone for the OTP code.",
    "examples": [
      {
        "id": "ex-jhs3ict-t11-1",
        "title": "Differentiating Symmetric from Asymmetric Encryption",
        "problem": "Explain the fundamental difference in key management between symmetric and asymmetric encryption.",
        "stepByStepSolution": [
          "Step 1: Symmetric encryption uses a single shared secret key for both encrypting and decrypting data [B1 mark].",
          "Step 2: Asymmetric encryption uses two distinct but mathematically related keys: a Public Key for encryption and a Private Key for decryption [B1 mark].",
          "Step 3: Asymmetric solves the key exchange dilemma because the private key is never transmitted over the internet [B1 mark]."
        ],
        "keyTakeaway": "Symmetric = 1 shared key; Asymmetric = 2 keys (Public to encrypt, Private to decrypt)."
      },
      {
        "id": "ex-jhs3ict-t11-2",
        "title": "Evaluating Multi-Factor Authentication (2FA) Security",
        "problem": "A student logs into their online BECE portal using: (1) An 8-character password, (2) A 6-digit OTP code sent via SMS to their phone. Identify the two authentication factors.",
        "stepByStepSolution": [
          "Step 1: The password represents 'Something you know' (knowledge factor) [B1 mark].",
          "Step 2: The SMS OTP code received on the personal phone represents 'Something you have' (possession factor) [B1 mark].",
          "Step 3: This setup successfully implements Two-Factor Authentication (2FA), thwarting attacks where a hacker only stole the password [B1 mark]."
        ],
        "keyTakeaway": "2FA combines something you know (password) with something you have (phone/OTP) or are (biometrics)."
      }
    ]
  },
  {
    "id": "jhs3-ict-t12-ict-laws-data-protection-ethics",
    "subjectId": "ict",
    "level": "JHS 3",
    "term": 3,
    "orderIndex": 12,
    "title": "Legal & Ethical Frameworks: Ghana Data Protection Act 2012, Cyber Security Act 2020 & Copyright",
    "description": "Examine digital legal frameworks: Ghana's Data Protection Act (Act 843), Cybersecurity Act (Act 1038), intellectual property rights, software piracy, and digital ethics.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Xh0l0JdZ8eU",
    "youtubeId": "Xh0l0JdZ8eU",
    "keyNotes": "• Ghana Data Protection Act, 2012 (Act 843):\n  - Enacted by the Parliament of Ghana to protect the privacy of personal data and regulate the processing of personal information.\n  - Data Subject: The individual whose personal data is being held or processed (e.g. citizens, students).\n  - Data Controller: Any public or private institution that determines the purpose and manner of processing personal data (e.g. banks, telcos, schools, WAEC).\n  - Core Principles:\n    1. Consent: Personal data must only be collected with the clear consent of the data subject.\n    2. Purpose Specification: Data must be collected for a specific, explicitly stated lawful purpose and not reused for unrelated activities.\n    3. Data Quality & Accuracy: Data must be kept accurate, complete, and up to date.\n    4. Security Safeguards: Reasonable technical measures must be put in place to prevent loss, theft, or unauthorized access.\n• Cybersecurity Act, 2020 (Act 1038):\n  - Established the Cyber Security Authority (CSA) of Ghana.\n  - Criminalizes online offenses: cyber harassment, cyberstalking, child sexual abuse material, identity theft, unauthorized system intrusion (hacking), and digital extortion.\n• Intellectual Property and Software Licensing:\n  - Copyright: Legal right granted to the creator of original literary, musical, artistic, or software works.\n  - Software Piracy: Unauthorized copying, distribution, downloading, or commercial sale of copyrighted software.\n  - Proprietary Software: Commercial closed-source software where users buy a licence but do not get source code (e.g. Windows, Microsoft 365).\n  - Open Source Software (OSS): Software distributed with source code freely accessible to view, modify, and redistribute (e.g. Linux, Python, Blender).\n• Chief Examiner BECE Warning:\n  - Distinguish clearly between Act 843 (Data Protection / Privacy) and Act 1038 (Cybersecurity / Cybercrime).",
    "examples": [
      {
        "id": "ex-jhs3ict-t12-1",
        "title": "Applying Data Protection Principles under Act 843",
        "problem": "A commercial hospital in Ghana sells its patients' mobile telephone numbers and medical records to a private insurance company without patients' knowledge. State two legal principles violated under the Data Protection Act (Act 843).",
        "stepByStepSolution": [
          "Step 1: Violation of Consent Principle: Personal and medical data was disclosed to a third party without the express written consent of the data subjects (patients) [B1 mark].",
          "Step 2: Violation of Purpose Specification Principle: Data collected strictly for medical healthcare treatment was diverted for commercial insurance advertising [B1 mark].",
          "Step 3: The hospital is liable to administrative fines and prosecution by the Data Protection Commission (DPC) [B1 mark]."
        ],
        "keyTakeaway": "Entities cannot share or sell personal data without consent or for unauthorized commercial purposes."
      },
      {
        "id": "ex-jhs3ict-t12-2",
        "title": "Contrasting Proprietary Software with Open Source Software",
        "problem": "Compare Microsoft Windows with Linux Ubuntu in terms of: (a) Source code accessibility, (b) Software cost and licence terms.",
        "stepByStepSolution": [
          "Step 1 (Source code): Windows is closed-source proprietary software (source code is kept secret by Microsoft); Linux Ubuntu is open-source (anyone can inspect and modify source code) [B1 mark].",
          "Step 2 (Cost and licence): Windows requires purchasing a commercial paid licence per computer; Linux Ubuntu is free to download, install, and distribute under open licence (GPL) [B1 mark]."
        ],
        "keyTakeaway": "Proprietary software is closed-source and commercial; open-source software is publicly accessible and customizable."
      }
    ]
  },
  {
    "id": "jhs3-ict-t13-cloud-computing-iot",
    "subjectId": "ict",
    "level": "JHS 3",
    "term": 3,
    "orderIndex": 13,
    "title": "Emerging Technologies: Cloud Computing, Internet of Things (IoT) & Big Data",
    "description": "Explore the modern digital frontier: cloud service models (IaaS, PaaS, SaaS), cloud storage (Google Drive, OneDrive), smart connected devices in IoT, and big data characteristics.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=M988_fsOSWo",
    "youtubeId": "M988_fsOSWo",
    "keyNotes": "• What is Cloud Computing?\n  - The on-demand delivery of computing services—including servers, storage, databases, networking, and software—over the Internet ('the cloud') on a pay-as-you-go basis.\n  - Advantages of Cloud: Accessibility from any device worldwide, automatic software updates, cost reduction (no physical on-premise servers needed), automated backups, and scalability.\n• Cloud Service Models:\n  1. SaaS (Software as a Service): End-user applications delivered over a web browser without local installation (e.g. Gmail, Google Docs, Microsoft Office 365, Canva).\n  2. PaaS (Platform as a Service): Provides hardware and software tools for developers to build, test, and deploy applications online (e.g. Google App Engine, Heroku).\n  3. IaaS (Infrastructure as a Service): Provides virtualized computing resources such as virtual servers, network bandwidth, and storage (e.g. Amazon Web Services - AWS, Microsoft Azure).\n• The Internet of Things (IoT):\n  - A global network of physical objects ('things') embedded with sensors, software, and connectivity that collect and exchange data with other devices over the Internet without human intervention.\n  - Real-World Examples in Ghana: Smart electricity prepaid meters, GPS fleet vehicle tracking, automated drip irrigation sensors, and smart home security cameras.\n• Big Data (The 3 Vs):\n  - Volume: Vast quantities of data generated every second.\n  - Velocity: High speed at which new data is generated and transmitted.\n  - Variety: Diverse formats of data (structured text, video, audio, social media posts).\n• Chief Examiner BECE Warning:\n  - Cloud storage (e.g. Google Drive) requires active internet access to synchronize files, but allows instant file recovery even if a laptop is physically damaged or stolen!",
    "examples": [
      {
        "id": "ex-jhs3ict-t13-1",
        "title": "Classifying Cloud Computing Services",
        "problem": "A student uses Google Docs to write an essay on a school laptop, then continues editing the same document on a smartphone at home. What cloud service model does this illustrate and why?",
        "stepByStepSolution": [
          "Step 1: This represents Software as a Service (SaaS) [B1 mark].",
          "Step 2: Google Docs is fully hosted on cloud servers, accessible via any web browser without needing local software installation [B1 mark].",
          "Step 3: Document changes are automatically saved to cloud storage in real time, enabling seamless multi-device continuity [B1 mark]."
        ],
        "keyTakeaway": "SaaS provides web-based software applications accessible anywhere across multiple devices."
      },
      {
        "id": "ex-jhs3ict-t13-2",
        "title": "Explaining How IoT Solves Agricultural Problems in Ghana",
        "problem": "Describe how an automated Internet of Things (IoT) soil moisture system helps a Ghanaian maize farmer conserve water and boost yields.",
        "stepByStepSolution": [
          "Step 1: IoT soil sensors embedded in farmlands continuously measure ground moisture levels [B1 mark].",
          "Step 2: When moisture drops below a set threshold, the sensor transmits a wireless signal over the internet to a smart irrigation valve [B1 mark].",
          "Step 3: The valve automatically activates drip irrigation and shuts off once adequate moisture is restored, preventing water wastage and crop drying [B1 mark]."
        ],
        "keyTakeaway": "IoT combines sensors, connectivity, and automated actuators to solve agricultural and environmental challenges."
      }
    ]
  },
  {
    "id": "jhs3-ict-t14-artificial-intelligence-robotics",
    "subjectId": "ict",
    "level": "JHS 3",
    "term": 3,
    "orderIndex": 14,
    "title": "Artificial Intelligence (AI), Machine Learning, Robotics & Future Careers in Computing",
    "description": "Examine future technologies: Artificial Intelligence principles, Machine Learning, computer vision, robotics in industry/medicine, ethical AI dilemmas, and emerging careers in tech.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=2ePf9rue1Ao",
    "youtubeId": "2ePf9rue1Ao",
    "keyNotes": "• What is Artificial Intelligence (AI)?\n  - The branch of computer science dedicated to creating software and machines capable of performing tasks that typically require human intelligence.\n  - Human-like Cognitive Capabilities: Learning, reasoning, problem-solving, visual perception, speech recognition, and natural language understanding.\n• Machine Learning (ML) and Deep Learning:\n  - Machine Learning: A subset of AI where computer algorithms learn patterns from large training datasets to make predictions or decisions without being explicitly programmed.\n  - Training Data: Examples fed to an AI model to teach it (e.g. thousands of chest X-ray images to detect tuberculosis).\n• Robotics in Modern Society:\n  - Robot: A programmable mechanical machine capable of carrying out a complex series of actions automatically, especially by guidance of an onboard computer or AI system.\n  - Key Components: Sensors (gather environmental data), Controller (computer 'brain'), Actuators (motors and pneumatic arms that create physical motion), Power supply.\n  - Applications: Autonomous surgical assistants, automobile assembly line welders, disaster rescue rovers, agricultural drone crop sprayers.\n• Ethical Considerations of AI:\n  - Algorithmic Bias: AI reproducing human racial or gender prejudices present in training data.\n  - Job Displacement: Automation replacing manual and clerical jobs.\n  - Deepfakes: AI-manipulated synthetic audio and video impersonating people maliciously.\n• Future Tech Careers for Ghanaian Youth:\n  - Data Scientist, Software Engineer, Cloud Architect, Cybersecurity Analyst, AI Prompt Engineer, Roboticist.\n• Chief Examiner BECE Warning:\n  - Remember: AI does NOT have human feelings or consciousness; it operates based on statistical data models and mathematical algorithms!",
    "examples": [
      {
        "id": "ex-jhs3ict-t14-1",
        "title": "Analyzing the 4 Essential Subsystems of an Agricultural Weed-Spraying Robot",
        "problem": "Ghanaian agricultural engineers design an autonomous robot that navigates cocoa farms to detect and spray weeds. Outline the roles of its: (a) Sensors, (b) Controller/AI, and (c) Actuators.",
        "stepByStepSolution": [
          "Step 1 (Sensors): Cameras and ultrasonic distance sensors capture real-time visual images of leaves and measure distance to obstacles in the farm [B1 mark].",
          "Step 2 (Controller/AI): An onboard computer running a computer vision Machine Learning model processes images to differentiate cocoa crop leaves from unwanted weeds [B1 mark].",
          "Step 3 (Actuators): Electric motors drive wheels to navigate rows, and pneumatic valve nozzles spray herbicide precisely onto the identified weeds [B1 mark]."
        ],
        "keyTakeaway": "Robots combine sensors (to perceive), a computer/AI controller (to decide), and actuators/motors (to act physically)."
      },
      {
        "id": "ex-jhs3ict-t14-2",
        "title": "Evaluating Ethical Concerns: AI Deepfakes and Algorithmic Bias",
        "problem": "Explain two major ethical risks associated with the unregulated use of generative Artificial Intelligence in modern society.",
        "stepByStepSolution": [
          "Step 1: Deepfakes and Misinformation: Generative AI can synthesize realistic fake audio and video footage of national leaders or citizens, fueling political instability and character assassination [B1 mark].",
          "Step 2: Algorithmic Bias and Discrimination: If an AI model is trained on historic datasets that reflect gender, racial, or tribal biases, the automated software will perpetuate discrimination in job hiring or credit approvals [B1 mark].",
          "Step 3: Mitigating these risks requires strict data protection laws, algorithmic auditing, and watermarking synthetic media [B1 mark]."
        ],
        "keyTakeaway": "AI ethics focuses on eliminating algorithmic bias, combating malicious deepfakes, and ensuring transparency."
      }
    ]
  }
];
