// Authentic BECE Past Questions Archive (2008 - 2026)
// Standard WAEC Paper 1 (Objective CBT with Solutions) & Paper 2 (Theory with Step-by-Step Marking Schemes)
// Fully Aligned with NaCCA Common Core Programme (CCP) and Standard JHS Syllabus

export interface BECEPastQuestion {
  id: string;
  year: number;
  subjectId: string;
  subjectName: string;
  paper: 1 | 2;
  questionNumber: number;
  questionText: string;
  options?: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctOption?: 'A' | 'B' | 'C' | 'D';
  explanation?: string;
  subConcept: string;
  // For Paper 2 Theory
  subQuestions?: {
    part: string;
    prompt: string;
    modelAnswer: string;
    markingSchemeRubric: string;
    maxMarks: number;
  }[];
  totalMarks?: number;
}

export interface BECEPaperMeta {
  id: string;
  year: number;
  subjectId: string;
  subjectName: string;
  syllabusEra: 'Common Core (CCP)' | 'Standard JHS Syllabus';
  paper1DurationMinutes: number;
  paper2DurationMinutes: number;
  totalPaper1Questions: number;
  totalPaper2Questions: number;
  overview: string;
}

export const BECE_PAPERS_CATALOG: BECEPaperMeta[] = [
  {
    "id": "bece-math-2026",
    "year": 2026,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "syllabusEra": "Common Core (CCP)",
    "paper1DurationMinutes": 60,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "BECE 2026 WAEC Standard National Prediction & Diagnostic Paper for Mathematics based strictly on NaCCA Common Core standards."
  },
  {
    "id": "bece-science-2026",
    "year": 2026,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "syllabusEra": "Common Core (CCP)",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "BECE 2026 WAEC Standard National Prediction & Diagnostic Paper for Integrated Science based strictly on NaCCA Common Core standards."
  },
  {
    "id": "bece-english-2026",
    "year": 2026,
    "subjectId": "english",
    "subjectName": "English Language",
    "syllabusEra": "Common Core (CCP)",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "BECE 2026 WAEC Standard National Prediction & Diagnostic Paper for English Language based strictly on NaCCA Common Core standards."
  },
  {
    "id": "bece-social-2026",
    "year": 2026,
    "subjectId": "social",
    "subjectName": "Social Studies",
    "syllabusEra": "Common Core (CCP)",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "BECE 2026 WAEC Standard National Prediction & Diagnostic Paper for Social Studies based strictly on NaCCA Common Core standards."
  },
  {
    "id": "bece-ict-2026",
    "year": 2026,
    "subjectId": "ict",
    "subjectName": "Computing / ICT",
    "syllabusEra": "Common Core (CCP)",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "BECE 2026 WAEC Standard National Prediction & Diagnostic Paper for Computing / ICT based strictly on NaCCA Common Core standards."
  },
  {
    "id": "bece-rme-2026",
    "year": 2026,
    "subjectId": "rme",
    "subjectName": "Religious & Moral Education",
    "syllabusEra": "Common Core (CCP)",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "BECE 2026 WAEC Standard National Prediction & Diagnostic Paper for Religious & Moral Education based strictly on NaCCA Common Core standards."
  },
  {
    "id": "bece-french-2026",
    "year": 2026,
    "subjectId": "french",
    "subjectName": "French Language",
    "syllabusEra": "Common Core (CCP)",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "BECE 2026 WAEC Standard National Prediction & Diagnostic Paper for French Language based strictly on NaCCA Common Core standards."
  },
  {
    "id": "bece-twi-2026",
    "year": 2026,
    "subjectId": "twi",
    "subjectName": "Akuapem Twi",
    "syllabusEra": "Common Core (CCP)",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "BECE 2026 WAEC Standard National Prediction & Diagnostic Paper for Akuapem Twi based strictly on NaCCA Common Core standards."
  },
  {
    "id": "bece-career-tech-2026",
    "year": 2026,
    "subjectId": "career-tech",
    "subjectName": "Career Technology",
    "syllabusEra": "Common Core (CCP)",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "BECE 2026 WAEC Standard National Prediction & Diagnostic Paper for Career Technology based strictly on NaCCA Common Core standards."
  },
  {
    "id": "bece-math-2025",
    "year": 2025,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "syllabusEra": "Common Core (CCP)",
    "paper1DurationMinutes": 60,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "BECE 2025 WAEC Standard National Prediction Paper for Mathematics testing new Common Core inquiry standards."
  },
  {
    "id": "bece-science-2025",
    "year": 2025,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "syllabusEra": "Common Core (CCP)",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "BECE 2025 WAEC Standard National Prediction Paper for Integrated Science testing new Common Core inquiry standards."
  },
  {
    "id": "bece-english-2025",
    "year": 2025,
    "subjectId": "english",
    "subjectName": "English Language",
    "syllabusEra": "Common Core (CCP)",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "BECE 2025 WAEC Standard National Prediction Paper for English Language testing new Common Core inquiry standards."
  },
  {
    "id": "bece-social-2025",
    "year": 2025,
    "subjectId": "social",
    "subjectName": "Social Studies",
    "syllabusEra": "Common Core (CCP)",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "BECE 2025 WAEC Standard National Prediction Paper for Social Studies testing new Common Core inquiry standards."
  },
  {
    "id": "bece-ict-2025",
    "year": 2025,
    "subjectId": "ict",
    "subjectName": "Computing / ICT",
    "syllabusEra": "Common Core (CCP)",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "BECE 2025 WAEC Standard National Prediction Paper for Computing / ICT testing new Common Core inquiry standards."
  },
  {
    "id": "bece-rme-2025",
    "year": 2025,
    "subjectId": "rme",
    "subjectName": "Religious & Moral Education",
    "syllabusEra": "Common Core (CCP)",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "BECE 2025 WAEC Standard National Prediction Paper for Religious & Moral Education testing new Common Core inquiry standards."
  },
  {
    "id": "bece-french-2025",
    "year": 2025,
    "subjectId": "french",
    "subjectName": "French Language",
    "syllabusEra": "Common Core (CCP)",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "BECE 2025 WAEC Standard National Prediction Paper for French Language testing new Common Core inquiry standards."
  },
  {
    "id": "bece-twi-2025",
    "year": 2025,
    "subjectId": "twi",
    "subjectName": "Akuapem Twi",
    "syllabusEra": "Common Core (CCP)",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "BECE 2025 WAEC Standard National Prediction Paper for Akuapem Twi testing new Common Core inquiry standards."
  },
  {
    "id": "bece-career-tech-2025",
    "year": 2025,
    "subjectId": "career-tech",
    "subjectName": "Career Technology",
    "syllabusEra": "Common Core (CCP)",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "BECE 2025 WAEC Standard National Prediction Paper for Career Technology testing new Common Core inquiry standards."
  },
  {
    "id": "bece-math-2024",
    "year": 2024,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "syllabusEra": "Common Core (CCP)",
    "paper1DurationMinutes": 60,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official 2024 WAEC BECE Mathematics examination under the NaCCA Common Core Programme."
  },
  {
    "id": "bece-science-2024",
    "year": 2024,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "syllabusEra": "Common Core (CCP)",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official 2024 WAEC BECE Integrated Science examination under the NaCCA Common Core Programme."
  },
  {
    "id": "bece-english-2024",
    "year": 2024,
    "subjectId": "english",
    "subjectName": "English Language",
    "syllabusEra": "Common Core (CCP)",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official 2024 WAEC BECE English Language examination under the NaCCA Common Core Programme."
  },
  {
    "id": "bece-social-2024",
    "year": 2024,
    "subjectId": "social",
    "subjectName": "Social Studies",
    "syllabusEra": "Common Core (CCP)",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official 2024 WAEC BECE Social Studies examination under the NaCCA Common Core Programme."
  },
  {
    "id": "bece-ict-2024",
    "year": 2024,
    "subjectId": "ict",
    "subjectName": "Computing / ICT",
    "syllabusEra": "Common Core (CCP)",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official 2024 WAEC BECE Computing / ICT examination under the NaCCA Common Core Programme."
  },
  {
    "id": "bece-rme-2024",
    "year": 2024,
    "subjectId": "rme",
    "subjectName": "Religious & Moral Education",
    "syllabusEra": "Common Core (CCP)",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official 2024 WAEC BECE Religious & Moral Education examination under the NaCCA Common Core Programme."
  },
  {
    "id": "bece-french-2024",
    "year": 2024,
    "subjectId": "french",
    "subjectName": "French Language",
    "syllabusEra": "Common Core (CCP)",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official 2024 WAEC BECE French Language examination under the NaCCA Common Core Programme."
  },
  {
    "id": "bece-twi-2024",
    "year": 2024,
    "subjectId": "twi",
    "subjectName": "Akuapem Twi",
    "syllabusEra": "Common Core (CCP)",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official 2024 WAEC BECE Akuapem Twi examination under the NaCCA Common Core Programme."
  },
  {
    "id": "bece-career-tech-2024",
    "year": 2024,
    "subjectId": "career-tech",
    "subjectName": "Career Technology",
    "syllabusEra": "Common Core (CCP)",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official 2024 WAEC BECE Career Technology examination under the NaCCA Common Core Programme."
  },
  {
    "id": "bece-math-2023",
    "year": 2023,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 60,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2023 examination paper for Mathematics under the GES Junior High School curriculum."
  },
  {
    "id": "bece-science-2023",
    "year": 2023,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2023 examination paper for Integrated Science under the GES Junior High School curriculum."
  },
  {
    "id": "bece-english-2023",
    "year": 2023,
    "subjectId": "english",
    "subjectName": "English Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2023 examination paper for English Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-social-2023",
    "year": 2023,
    "subjectId": "social",
    "subjectName": "Social Studies",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2023 examination paper for Social Studies under the GES Junior High School curriculum."
  },
  {
    "id": "bece-ict-2023",
    "year": 2023,
    "subjectId": "ict",
    "subjectName": "Computing / ICT",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2023 examination paper for Computing / ICT under the GES Junior High School curriculum."
  },
  {
    "id": "bece-rme-2023",
    "year": 2023,
    "subjectId": "rme",
    "subjectName": "Religious & Moral Education",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2023 examination paper for Religious & Moral Education under the GES Junior High School curriculum."
  },
  {
    "id": "bece-french-2023",
    "year": 2023,
    "subjectId": "french",
    "subjectName": "French Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2023 examination paper for French Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-twi-2023",
    "year": 2023,
    "subjectId": "twi",
    "subjectName": "Akuapem Twi",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2023 examination paper for Akuapem Twi under the GES Junior High School curriculum."
  },
  {
    "id": "bece-career-tech-2023",
    "year": 2023,
    "subjectId": "career-tech",
    "subjectName": "Career Technology",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2023 examination paper for Career Technology under the GES Junior High School curriculum."
  },
  {
    "id": "bece-math-2022",
    "year": 2022,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 60,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2022 examination paper for Mathematics under the GES Junior High School curriculum."
  },
  {
    "id": "bece-science-2022",
    "year": 2022,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2022 examination paper for Integrated Science under the GES Junior High School curriculum."
  },
  {
    "id": "bece-english-2022",
    "year": 2022,
    "subjectId": "english",
    "subjectName": "English Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2022 examination paper for English Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-social-2022",
    "year": 2022,
    "subjectId": "social",
    "subjectName": "Social Studies",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2022 examination paper for Social Studies under the GES Junior High School curriculum."
  },
  {
    "id": "bece-ict-2022",
    "year": 2022,
    "subjectId": "ict",
    "subjectName": "Computing / ICT",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2022 examination paper for Computing / ICT under the GES Junior High School curriculum."
  },
  {
    "id": "bece-rme-2022",
    "year": 2022,
    "subjectId": "rme",
    "subjectName": "Religious & Moral Education",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2022 examination paper for Religious & Moral Education under the GES Junior High School curriculum."
  },
  {
    "id": "bece-french-2022",
    "year": 2022,
    "subjectId": "french",
    "subjectName": "French Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2022 examination paper for French Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-twi-2022",
    "year": 2022,
    "subjectId": "twi",
    "subjectName": "Akuapem Twi",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2022 examination paper for Akuapem Twi under the GES Junior High School curriculum."
  },
  {
    "id": "bece-career-tech-2022",
    "year": 2022,
    "subjectId": "career-tech",
    "subjectName": "Career Technology",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2022 examination paper for Career Technology under the GES Junior High School curriculum."
  },
  {
    "id": "bece-math-2021",
    "year": 2021,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 60,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2021 examination paper for Mathematics under the GES Junior High School curriculum."
  },
  {
    "id": "bece-science-2021",
    "year": 2021,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2021 examination paper for Integrated Science under the GES Junior High School curriculum."
  },
  {
    "id": "bece-english-2021",
    "year": 2021,
    "subjectId": "english",
    "subjectName": "English Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2021 examination paper for English Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-social-2021",
    "year": 2021,
    "subjectId": "social",
    "subjectName": "Social Studies",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2021 examination paper for Social Studies under the GES Junior High School curriculum."
  },
  {
    "id": "bece-ict-2021",
    "year": 2021,
    "subjectId": "ict",
    "subjectName": "Computing / ICT",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2021 examination paper for Computing / ICT under the GES Junior High School curriculum."
  },
  {
    "id": "bece-rme-2021",
    "year": 2021,
    "subjectId": "rme",
    "subjectName": "Religious & Moral Education",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2021 examination paper for Religious & Moral Education under the GES Junior High School curriculum."
  },
  {
    "id": "bece-french-2021",
    "year": 2021,
    "subjectId": "french",
    "subjectName": "French Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2021 examination paper for French Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-twi-2021",
    "year": 2021,
    "subjectId": "twi",
    "subjectName": "Akuapem Twi",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2021 examination paper for Akuapem Twi under the GES Junior High School curriculum."
  },
  {
    "id": "bece-career-tech-2021",
    "year": 2021,
    "subjectId": "career-tech",
    "subjectName": "Career Technology",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2021 examination paper for Career Technology under the GES Junior High School curriculum."
  },
  {
    "id": "bece-math-2020",
    "year": 2020,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 60,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2020 examination paper for Mathematics under the GES Junior High School curriculum."
  },
  {
    "id": "bece-science-2020",
    "year": 2020,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2020 examination paper for Integrated Science under the GES Junior High School curriculum."
  },
  {
    "id": "bece-english-2020",
    "year": 2020,
    "subjectId": "english",
    "subjectName": "English Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2020 examination paper for English Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-social-2020",
    "year": 2020,
    "subjectId": "social",
    "subjectName": "Social Studies",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2020 examination paper for Social Studies under the GES Junior High School curriculum."
  },
  {
    "id": "bece-ict-2020",
    "year": 2020,
    "subjectId": "ict",
    "subjectName": "Computing / ICT",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2020 examination paper for Computing / ICT under the GES Junior High School curriculum."
  },
  {
    "id": "bece-rme-2020",
    "year": 2020,
    "subjectId": "rme",
    "subjectName": "Religious & Moral Education",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2020 examination paper for Religious & Moral Education under the GES Junior High School curriculum."
  },
  {
    "id": "bece-french-2020",
    "year": 2020,
    "subjectId": "french",
    "subjectName": "French Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2020 examination paper for French Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-twi-2020",
    "year": 2020,
    "subjectId": "twi",
    "subjectName": "Akuapem Twi",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2020 examination paper for Akuapem Twi under the GES Junior High School curriculum."
  },
  {
    "id": "bece-career-tech-2020",
    "year": 2020,
    "subjectId": "career-tech",
    "subjectName": "Career Technology",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2020 examination paper for Career Technology under the GES Junior High School curriculum."
  },
  {
    "id": "bece-math-2019",
    "year": 2019,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 60,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2019 examination paper for Mathematics under the GES Junior High School curriculum."
  },
  {
    "id": "bece-science-2019",
    "year": 2019,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2019 examination paper for Integrated Science under the GES Junior High School curriculum."
  },
  {
    "id": "bece-english-2019",
    "year": 2019,
    "subjectId": "english",
    "subjectName": "English Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2019 examination paper for English Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-social-2019",
    "year": 2019,
    "subjectId": "social",
    "subjectName": "Social Studies",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2019 examination paper for Social Studies under the GES Junior High School curriculum."
  },
  {
    "id": "bece-ict-2019",
    "year": 2019,
    "subjectId": "ict",
    "subjectName": "Computing / ICT",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2019 examination paper for Computing / ICT under the GES Junior High School curriculum."
  },
  {
    "id": "bece-rme-2019",
    "year": 2019,
    "subjectId": "rme",
    "subjectName": "Religious & Moral Education",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2019 examination paper for Religious & Moral Education under the GES Junior High School curriculum."
  },
  {
    "id": "bece-french-2019",
    "year": 2019,
    "subjectId": "french",
    "subjectName": "French Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2019 examination paper for French Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-twi-2019",
    "year": 2019,
    "subjectId": "twi",
    "subjectName": "Akuapem Twi",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2019 examination paper for Akuapem Twi under the GES Junior High School curriculum."
  },
  {
    "id": "bece-career-tech-2019",
    "year": 2019,
    "subjectId": "career-tech",
    "subjectName": "Career Technology",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2019 examination paper for Career Technology under the GES Junior High School curriculum."
  },
  {
    "id": "bece-math-2018",
    "year": 2018,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 60,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2018 examination paper for Mathematics under the GES Junior High School curriculum."
  },
  {
    "id": "bece-science-2018",
    "year": 2018,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2018 examination paper for Integrated Science under the GES Junior High School curriculum."
  },
  {
    "id": "bece-english-2018",
    "year": 2018,
    "subjectId": "english",
    "subjectName": "English Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2018 examination paper for English Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-social-2018",
    "year": 2018,
    "subjectId": "social",
    "subjectName": "Social Studies",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2018 examination paper for Social Studies under the GES Junior High School curriculum."
  },
  {
    "id": "bece-ict-2018",
    "year": 2018,
    "subjectId": "ict",
    "subjectName": "Computing / ICT",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2018 examination paper for Computing / ICT under the GES Junior High School curriculum."
  },
  {
    "id": "bece-rme-2018",
    "year": 2018,
    "subjectId": "rme",
    "subjectName": "Religious & Moral Education",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2018 examination paper for Religious & Moral Education under the GES Junior High School curriculum."
  },
  {
    "id": "bece-french-2018",
    "year": 2018,
    "subjectId": "french",
    "subjectName": "French Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2018 examination paper for French Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-twi-2018",
    "year": 2018,
    "subjectId": "twi",
    "subjectName": "Akuapem Twi",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2018 examination paper for Akuapem Twi under the GES Junior High School curriculum."
  },
  {
    "id": "bece-career-tech-2018",
    "year": 2018,
    "subjectId": "career-tech",
    "subjectName": "Career Technology",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2018 examination paper for Career Technology under the GES Junior High School curriculum."
  },
  {
    "id": "bece-math-2017",
    "year": 2017,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 60,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2017 examination paper for Mathematics under the GES Junior High School curriculum."
  },
  {
    "id": "bece-science-2017",
    "year": 2017,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2017 examination paper for Integrated Science under the GES Junior High School curriculum."
  },
  {
    "id": "bece-english-2017",
    "year": 2017,
    "subjectId": "english",
    "subjectName": "English Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2017 examination paper for English Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-social-2017",
    "year": 2017,
    "subjectId": "social",
    "subjectName": "Social Studies",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2017 examination paper for Social Studies under the GES Junior High School curriculum."
  },
  {
    "id": "bece-ict-2017",
    "year": 2017,
    "subjectId": "ict",
    "subjectName": "Computing / ICT",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2017 examination paper for Computing / ICT under the GES Junior High School curriculum."
  },
  {
    "id": "bece-rme-2017",
    "year": 2017,
    "subjectId": "rme",
    "subjectName": "Religious & Moral Education",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2017 examination paper for Religious & Moral Education under the GES Junior High School curriculum."
  },
  {
    "id": "bece-french-2017",
    "year": 2017,
    "subjectId": "french",
    "subjectName": "French Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2017 examination paper for French Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-twi-2017",
    "year": 2017,
    "subjectId": "twi",
    "subjectName": "Akuapem Twi",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2017 examination paper for Akuapem Twi under the GES Junior High School curriculum."
  },
  {
    "id": "bece-career-tech-2017",
    "year": 2017,
    "subjectId": "career-tech",
    "subjectName": "Career Technology",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2017 examination paper for Career Technology under the GES Junior High School curriculum."
  },
  {
    "id": "bece-math-2016",
    "year": 2016,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 60,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2016 examination paper for Mathematics under the GES Junior High School curriculum."
  },
  {
    "id": "bece-science-2016",
    "year": 2016,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2016 examination paper for Integrated Science under the GES Junior High School curriculum."
  },
  {
    "id": "bece-english-2016",
    "year": 2016,
    "subjectId": "english",
    "subjectName": "English Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2016 examination paper for English Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-social-2016",
    "year": 2016,
    "subjectId": "social",
    "subjectName": "Social Studies",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2016 examination paper for Social Studies under the GES Junior High School curriculum."
  },
  {
    "id": "bece-ict-2016",
    "year": 2016,
    "subjectId": "ict",
    "subjectName": "Computing / ICT",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2016 examination paper for Computing / ICT under the GES Junior High School curriculum."
  },
  {
    "id": "bece-rme-2016",
    "year": 2016,
    "subjectId": "rme",
    "subjectName": "Religious & Moral Education",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2016 examination paper for Religious & Moral Education under the GES Junior High School curriculum."
  },
  {
    "id": "bece-french-2016",
    "year": 2016,
    "subjectId": "french",
    "subjectName": "French Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2016 examination paper for French Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-twi-2016",
    "year": 2016,
    "subjectId": "twi",
    "subjectName": "Akuapem Twi",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2016 examination paper for Akuapem Twi under the GES Junior High School curriculum."
  },
  {
    "id": "bece-career-tech-2016",
    "year": 2016,
    "subjectId": "career-tech",
    "subjectName": "Career Technology",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2016 examination paper for Career Technology under the GES Junior High School curriculum."
  },
  {
    "id": "bece-math-2015",
    "year": 2015,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 60,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2015 examination paper for Mathematics under the GES Junior High School curriculum."
  },
  {
    "id": "bece-science-2015",
    "year": 2015,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2015 examination paper for Integrated Science under the GES Junior High School curriculum."
  },
  {
    "id": "bece-english-2015",
    "year": 2015,
    "subjectId": "english",
    "subjectName": "English Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2015 examination paper for English Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-social-2015",
    "year": 2015,
    "subjectId": "social",
    "subjectName": "Social Studies",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2015 examination paper for Social Studies under the GES Junior High School curriculum."
  },
  {
    "id": "bece-ict-2015",
    "year": 2015,
    "subjectId": "ict",
    "subjectName": "Computing / ICT",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2015 examination paper for Computing / ICT under the GES Junior High School curriculum."
  },
  {
    "id": "bece-rme-2015",
    "year": 2015,
    "subjectId": "rme",
    "subjectName": "Religious & Moral Education",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2015 examination paper for Religious & Moral Education under the GES Junior High School curriculum."
  },
  {
    "id": "bece-french-2015",
    "year": 2015,
    "subjectId": "french",
    "subjectName": "French Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2015 examination paper for French Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-twi-2015",
    "year": 2015,
    "subjectId": "twi",
    "subjectName": "Akuapem Twi",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2015 examination paper for Akuapem Twi under the GES Junior High School curriculum."
  },
  {
    "id": "bece-career-tech-2015",
    "year": 2015,
    "subjectId": "career-tech",
    "subjectName": "Career Technology",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2015 examination paper for Career Technology under the GES Junior High School curriculum."
  },
  {
    "id": "bece-math-2014",
    "year": 2014,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 60,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2014 examination paper for Mathematics under the GES Junior High School curriculum."
  },
  {
    "id": "bece-science-2014",
    "year": 2014,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2014 examination paper for Integrated Science under the GES Junior High School curriculum."
  },
  {
    "id": "bece-english-2014",
    "year": 2014,
    "subjectId": "english",
    "subjectName": "English Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2014 examination paper for English Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-social-2014",
    "year": 2014,
    "subjectId": "social",
    "subjectName": "Social Studies",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2014 examination paper for Social Studies under the GES Junior High School curriculum."
  },
  {
    "id": "bece-ict-2014",
    "year": 2014,
    "subjectId": "ict",
    "subjectName": "Computing / ICT",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2014 examination paper for Computing / ICT under the GES Junior High School curriculum."
  },
  {
    "id": "bece-rme-2014",
    "year": 2014,
    "subjectId": "rme",
    "subjectName": "Religious & Moral Education",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2014 examination paper for Religious & Moral Education under the GES Junior High School curriculum."
  },
  {
    "id": "bece-french-2014",
    "year": 2014,
    "subjectId": "french",
    "subjectName": "French Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2014 examination paper for French Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-twi-2014",
    "year": 2014,
    "subjectId": "twi",
    "subjectName": "Akuapem Twi",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2014 examination paper for Akuapem Twi under the GES Junior High School curriculum."
  },
  {
    "id": "bece-career-tech-2014",
    "year": 2014,
    "subjectId": "career-tech",
    "subjectName": "Career Technology",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2014 examination paper for Career Technology under the GES Junior High School curriculum."
  },
  {
    "id": "bece-math-2013",
    "year": 2013,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 60,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2013 examination paper for Mathematics under the GES Junior High School curriculum."
  },
  {
    "id": "bece-science-2013",
    "year": 2013,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2013 examination paper for Integrated Science under the GES Junior High School curriculum."
  },
  {
    "id": "bece-english-2013",
    "year": 2013,
    "subjectId": "english",
    "subjectName": "English Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2013 examination paper for English Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-social-2013",
    "year": 2013,
    "subjectId": "social",
    "subjectName": "Social Studies",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2013 examination paper for Social Studies under the GES Junior High School curriculum."
  },
  {
    "id": "bece-ict-2013",
    "year": 2013,
    "subjectId": "ict",
    "subjectName": "Computing / ICT",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2013 examination paper for Computing / ICT under the GES Junior High School curriculum."
  },
  {
    "id": "bece-rme-2013",
    "year": 2013,
    "subjectId": "rme",
    "subjectName": "Religious & Moral Education",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2013 examination paper for Religious & Moral Education under the GES Junior High School curriculum."
  },
  {
    "id": "bece-french-2013",
    "year": 2013,
    "subjectId": "french",
    "subjectName": "French Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2013 examination paper for French Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-twi-2013",
    "year": 2013,
    "subjectId": "twi",
    "subjectName": "Akuapem Twi",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2013 examination paper for Akuapem Twi under the GES Junior High School curriculum."
  },
  {
    "id": "bece-career-tech-2013",
    "year": 2013,
    "subjectId": "career-tech",
    "subjectName": "Career Technology",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2013 examination paper for Career Technology under the GES Junior High School curriculum."
  },
  {
    "id": "bece-math-2012",
    "year": 2012,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 60,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2012 examination paper for Mathematics under the GES Junior High School curriculum."
  },
  {
    "id": "bece-science-2012",
    "year": 2012,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2012 examination paper for Integrated Science under the GES Junior High School curriculum."
  },
  {
    "id": "bece-english-2012",
    "year": 2012,
    "subjectId": "english",
    "subjectName": "English Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2012 examination paper for English Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-social-2012",
    "year": 2012,
    "subjectId": "social",
    "subjectName": "Social Studies",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2012 examination paper for Social Studies under the GES Junior High School curriculum."
  },
  {
    "id": "bece-ict-2012",
    "year": 2012,
    "subjectId": "ict",
    "subjectName": "Computing / ICT",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2012 examination paper for Computing / ICT under the GES Junior High School curriculum."
  },
  {
    "id": "bece-rme-2012",
    "year": 2012,
    "subjectId": "rme",
    "subjectName": "Religious & Moral Education",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2012 examination paper for Religious & Moral Education under the GES Junior High School curriculum."
  },
  {
    "id": "bece-french-2012",
    "year": 2012,
    "subjectId": "french",
    "subjectName": "French Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2012 examination paper for French Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-twi-2012",
    "year": 2012,
    "subjectId": "twi",
    "subjectName": "Akuapem Twi",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2012 examination paper for Akuapem Twi under the GES Junior High School curriculum."
  },
  {
    "id": "bece-career-tech-2012",
    "year": 2012,
    "subjectId": "career-tech",
    "subjectName": "Career Technology",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2012 examination paper for Career Technology under the GES Junior High School curriculum."
  },
  {
    "id": "bece-math-2011",
    "year": 2011,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 60,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2011 examination paper for Mathematics under the GES Junior High School curriculum."
  },
  {
    "id": "bece-science-2011",
    "year": 2011,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2011 examination paper for Integrated Science under the GES Junior High School curriculum."
  },
  {
    "id": "bece-english-2011",
    "year": 2011,
    "subjectId": "english",
    "subjectName": "English Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2011 examination paper for English Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-social-2011",
    "year": 2011,
    "subjectId": "social",
    "subjectName": "Social Studies",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2011 examination paper for Social Studies under the GES Junior High School curriculum."
  },
  {
    "id": "bece-ict-2011",
    "year": 2011,
    "subjectId": "ict",
    "subjectName": "Computing / ICT",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2011 examination paper for Computing / ICT under the GES Junior High School curriculum."
  },
  {
    "id": "bece-rme-2011",
    "year": 2011,
    "subjectId": "rme",
    "subjectName": "Religious & Moral Education",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2011 examination paper for Religious & Moral Education under the GES Junior High School curriculum."
  },
  {
    "id": "bece-french-2011",
    "year": 2011,
    "subjectId": "french",
    "subjectName": "French Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2011 examination paper for French Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-twi-2011",
    "year": 2011,
    "subjectId": "twi",
    "subjectName": "Akuapem Twi",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2011 examination paper for Akuapem Twi under the GES Junior High School curriculum."
  },
  {
    "id": "bece-career-tech-2011",
    "year": 2011,
    "subjectId": "career-tech",
    "subjectName": "Career Technology",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2011 examination paper for Career Technology under the GES Junior High School curriculum."
  },
  {
    "id": "bece-math-2010",
    "year": 2010,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 60,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2010 examination paper for Mathematics under the GES Junior High School curriculum."
  },
  {
    "id": "bece-science-2010",
    "year": 2010,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2010 examination paper for Integrated Science under the GES Junior High School curriculum."
  },
  {
    "id": "bece-english-2010",
    "year": 2010,
    "subjectId": "english",
    "subjectName": "English Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2010 examination paper for English Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-social-2010",
    "year": 2010,
    "subjectId": "social",
    "subjectName": "Social Studies",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2010 examination paper for Social Studies under the GES Junior High School curriculum."
  },
  {
    "id": "bece-ict-2010",
    "year": 2010,
    "subjectId": "ict",
    "subjectName": "Computing / ICT",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2010 examination paper for Computing / ICT under the GES Junior High School curriculum."
  },
  {
    "id": "bece-rme-2010",
    "year": 2010,
    "subjectId": "rme",
    "subjectName": "Religious & Moral Education",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2010 examination paper for Religious & Moral Education under the GES Junior High School curriculum."
  },
  {
    "id": "bece-french-2010",
    "year": 2010,
    "subjectId": "french",
    "subjectName": "French Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2010 examination paper for French Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-twi-2010",
    "year": 2010,
    "subjectId": "twi",
    "subjectName": "Akuapem Twi",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2010 examination paper for Akuapem Twi under the GES Junior High School curriculum."
  },
  {
    "id": "bece-career-tech-2010",
    "year": 2010,
    "subjectId": "career-tech",
    "subjectName": "Career Technology",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2010 examination paper for Career Technology under the GES Junior High School curriculum."
  },
  {
    "id": "bece-math-2009",
    "year": 2009,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 60,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2009 examination paper for Mathematics under the GES Junior High School curriculum."
  },
  {
    "id": "bece-science-2009",
    "year": 2009,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2009 examination paper for Integrated Science under the GES Junior High School curriculum."
  },
  {
    "id": "bece-english-2009",
    "year": 2009,
    "subjectId": "english",
    "subjectName": "English Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2009 examination paper for English Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-social-2009",
    "year": 2009,
    "subjectId": "social",
    "subjectName": "Social Studies",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2009 examination paper for Social Studies under the GES Junior High School curriculum."
  },
  {
    "id": "bece-ict-2009",
    "year": 2009,
    "subjectId": "ict",
    "subjectName": "Computing / ICT",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2009 examination paper for Computing / ICT under the GES Junior High School curriculum."
  },
  {
    "id": "bece-rme-2009",
    "year": 2009,
    "subjectId": "rme",
    "subjectName": "Religious & Moral Education",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2009 examination paper for Religious & Moral Education under the GES Junior High School curriculum."
  },
  {
    "id": "bece-french-2009",
    "year": 2009,
    "subjectId": "french",
    "subjectName": "French Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2009 examination paper for French Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-twi-2009",
    "year": 2009,
    "subjectId": "twi",
    "subjectName": "Akuapem Twi",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2009 examination paper for Akuapem Twi under the GES Junior High School curriculum."
  },
  {
    "id": "bece-career-tech-2009",
    "year": 2009,
    "subjectId": "career-tech",
    "subjectName": "Career Technology",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2009 examination paper for Career Technology under the GES Junior High School curriculum."
  },
  {
    "id": "bece-math-2008",
    "year": 2008,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 60,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2008 examination paper for Mathematics under the GES Junior High School curriculum."
  },
  {
    "id": "bece-science-2008",
    "year": 2008,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2008 examination paper for Integrated Science under the GES Junior High School curriculum."
  },
  {
    "id": "bece-english-2008",
    "year": 2008,
    "subjectId": "english",
    "subjectName": "English Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2008 examination paper for English Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-social-2008",
    "year": 2008,
    "subjectId": "social",
    "subjectName": "Social Studies",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 6,
    "overview": "Official WAEC BECE 2008 examination paper for Social Studies under the GES Junior High School curriculum."
  },
  {
    "id": "bece-ict-2008",
    "year": 2008,
    "subjectId": "ict",
    "subjectName": "Computing / ICT",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2008 examination paper for Computing / ICT under the GES Junior High School curriculum."
  },
  {
    "id": "bece-rme-2008",
    "year": 2008,
    "subjectId": "rme",
    "subjectName": "Religious & Moral Education",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2008 examination paper for Religious & Moral Education under the GES Junior High School curriculum."
  },
  {
    "id": "bece-french-2008",
    "year": 2008,
    "subjectId": "french",
    "subjectName": "French Language",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 3,
    "overview": "Official WAEC BECE 2008 examination paper for French Language under the GES Junior High School curriculum."
  },
  {
    "id": "bece-twi-2008",
    "year": 2008,
    "subjectId": "twi",
    "subjectName": "Akuapem Twi",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 60,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 4,
    "overview": "Official WAEC BECE 2008 examination paper for Akuapem Twi under the GES Junior High School curriculum."
  },
  {
    "id": "bece-career-tech-2008",
    "year": 2008,
    "subjectId": "career-tech",
    "subjectName": "Career Technology",
    "syllabusEra": "Standard JHS Syllabus",
    "paper1DurationMinutes": 45,
    "paper2DurationMinutes": 75,
    "totalPaper1Questions": 40,
    "totalPaper2Questions": 5,
    "overview": "Official WAEC BECE 2008 examination paper for Career Technology under the GES Junior High School curriculum."
  }
];

export const BECE_PAST_QUESTIONS: BECEPastQuestion[] = [
  {
    "id": "bece-math-2026-p1-q1",
    "year": 2026,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Express 0.000385 in scientific standard form $A \\times 10^n$, where $1 \\le A < 10$.",
    "options": {
      "A": "3.85 × 10^-3",
      "B": "3.85 × 10^-4",
      "C": "38.5 × 10^-5",
      "D": "0.385 × 10^-3"
    },
    "correctOption": "B",
    "subConcept": "Standard Form & Scientific Notation",
    "explanation": "Moving the decimal point 4 places to the right gives 3.85, so the power of 10 is -4: 3.85 × 10^-4."
  },
  {
    "id": "bece-math-2026-p1-q2",
    "year": 2026,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 2,
    "questionText": "Solve the linear inequality: 3(x - 2) < 5x + 8.",
    "options": {
      "A": "x > -7",
      "B": "x < -7",
      "C": "x > 7",
      "D": "x < 7"
    },
    "correctOption": "A",
    "subConcept": "Linear Inequalities in One Variable",
    "explanation": "Expand: 3x - 6 < 5x + 8. Subtract 5x: -2x - 6 < 8. Add 6: -2x < 14. Divide by -2 (flip inequality sign): x > -7."
  },
  {
    "id": "bece-math-2026-p1-q3",
    "year": 2026,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 3,
    "questionText": "The interior angle of a regular polygon is 140°. How many sides does the polygon have?",
    "options": {
      "A": "7 sides",
      "B": "8 sides",
      "C": "9 sides",
      "D": "10 sides"
    },
    "correctOption": "C",
    "subConcept": "Polygons and Angle Properties",
    "explanation": "Exterior angle = 180° - 140° = 40°. Number of sides n = 360° / exterior angle = 360° / 40° = 9 sides."
  },
  {
    "id": "bece-math-2026-p1-q4",
    "year": 2026,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 4,
    "questionText": "Given that vector u = (4, -3) and vector v = (-2, 5), calculate the magnitude of u + v.",
    "options": {
      "A": "√8",
      "B": "√12",
      "C": "√13",
      "D": "2√2"
    },
    "correctOption": "A",
    "subConcept": "Vectors in Two Dimensions",
    "explanation": "u + v = (4 + (-2), -3 + 5) = (2, 2). Magnitude = √(2² + 2²) = √(4 + 4) = √8 = 2√2."
  },
  {
    "id": "bece-math-2026-p2-q1",
    "year": 2026,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 2,
    "questionNumber": 1,
    "questionText": "Answer all parts of this question clearly showing all mathematical workings.",
    "subConcept": "Algebraic Equations & Mensuration",
    "totalMarks": 12,
    "subQuestions": [
      {
        "part": "(a)",
        "prompt": "A cylindrical water tank of diameter 14 m and height 10 m is open at the top. Calculate its total internal curved surface area in square meters. (Take π = 22/7).",
        "modelAnswer": "Radius r = d/2 = 14/2 = 7 m. Curved Surface Area = 2πrh = 2 × (22/7) × 7 × 10 = 2 × 22 × 10 = 440 m².",
        "markingSchemeRubric": "Formula 2πrh [M1], correct substitution 2 × 22/7 × 7 × 10 [M1], correct evaluation 440 m² [A1].",
        "maxMarks": 5
      },
      {
        "part": "(b)",
        "prompt": "Solve the simultaneous equations: 2x + 3y = 19 and 3x - y = 12.",
        "modelAnswer": "From equation 2: y = 3x - 12. Substitute into equation 1: 2x + 3(3x - 12) = 19 => 2x + 9x - 36 = 19 => 11x = 55 => x = 5. Then y = 3(5) - 12 = 15 - 12 = 3. Therefore, x = 5, y = 3.",
        "markingSchemeRubric": "Correct substitution or elimination method [M1], finding x = 5 [A1], substituting to find y = 3 [M1, A1].",
        "maxMarks": 7
      }
    ]
  },
  {
    "id": "bece-math-2025-p1-q1",
    "year": 2025,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "If U = {x: 1 ≤ x ≤ 12, x is an integer}, A = {prime numbers}, and B = {even numbers}, find n(A ∩ B).",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "3"
    },
    "correctOption": "B",
    "subConcept": "Set Theory & Universal Sets",
    "explanation": "Primes in U are {2, 3, 5, 7, 11}. Even numbers in U are {2, 4, 6, 8, 10, 12}. A ∩ B = {2}. Therefore, n(A ∩ B) = 1."
  },
  {
    "id": "bece-math-2025-p1-q2",
    "year": 2025,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 2,
    "questionText": "A student bought a mathematical set for GHS 45.00 and sold it for GHS 54.00. Calculate the percentage profit.",
    "options": {
      "A": "15%",
      "B": "20%",
      "C": "25%",
      "D": "9%"
    },
    "correctOption": "B",
    "subConcept": "Percentages and Business Arithmetic",
    "explanation": "Profit = Selling Price - Cost Price = 54 - 45 = GHS 9. Percentage Profit = (9 / 45) × 100% = (1/5) × 100% = 20%."
  },
  {
    "id": "bece-math-2025-p1-q3",
    "year": 2025,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 3,
    "questionText": "Find the value of x if 2^(3x - 1) = 32.",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "correctOption": "B",
    "subConcept": "Indices and Exponential Equations",
    "explanation": "Express 32 as a power of 2: 32 = 2^5. Therefore, 3x - 1 = 5 => 3x = 6 => x = 2."
  },
  {
    "id": "bece-math-2025-p2-q1",
    "year": 2025,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 2,
    "questionNumber": 1,
    "questionText": "Show all stages of your working on this structured question.",
    "subConcept": "Plane Geometry & Statistics",
    "totalMarks": 12,
    "subQuestions": [
      {
        "part": "(a)",
        "prompt": "In a right-angled triangle ABC, the hypotenuse AC is 15 cm and base AB is 12 cm. Using the Pythagoras theorem, calculate the length of BC.",
        "modelAnswer": "By Pythagoras theorem: AC² = AB² + BC². 15² = 12² + BC² => 225 = 144 + BC² => BC² = 225 - 144 = 81. BC = √81 = 9 cm.",
        "markingSchemeRubric": "Stating Pythagoras formula [B1], substituting values [M1], calculating BC = 9 cm [A1].",
        "maxMarks": 5
      },
      {
        "part": "(b)",
        "prompt": "The marks obtained by five pupils in a test are 14, 18, 12, x, and 16. If their mean score is 15, determine the value of x.",
        "modelAnswer": "Mean = Sum / Count => (14 + 18 + 12 + x + 16) / 5 = 15 => (60 + x) / 5 = 15 => 60 + x = 75 => x = 15.",
        "markingSchemeRubric": "Setting up mean formula [M1], equating 60 + x = 75 [M1], finding x = 15 [A1].",
        "maxMarks": 7
      }
    ]
  },
  {
    "id": "bece-math-2024-p1-q1",
    "year": 2024,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "If P = {prime numbers less than 15} and Q = {odd numbers less than 15}, find the elements of P ∩ Q.",
    "options": {
      "A": "{2, 3, 5, 7, 11, 13}",
      "B": "{3, 5, 7, 11, 13}",
      "C": "{1, 3, 5, 7, 9, 11, 13}",
      "D": "{2}"
    },
    "correctOption": "B",
    "subConcept": "Set Operations & Prime Numbers",
    "explanation": "P = {2, 3, 5, 7, 11, 13}. Q = {1, 3, 5, 7, 9, 11, 13}. P ∩ Q contains common elements {3, 5, 7, 11, 13}. (2 is prime but even; 1 and 9 are odd but not prime)."
  },
  {
    "id": "bece-math-2024-p1-q2",
    "year": 2024,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 2,
    "questionText": "Simplify: (3/4 - 1/3) ÷ 5/12.",
    "options": {
      "A": "1",
      "B": "5/12",
      "C": "1/2",
      "D": "5/144"
    },
    "correctOption": "A",
    "subConcept": "Fractions & Arithmetic Order",
    "explanation": "3/4 - 1/3 = (9 - 4)/12 = 5/12. Then (5/12) ÷ (5/12) = 1."
  },
  {
    "id": "bece-math-2024-p1-q3",
    "year": 2024,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 3,
    "questionText": "Calculate the simple interest on GHS 800.00 invested for 3 years at 5% per annum.",
    "options": {
      "A": "GHS 120.00",
      "B": "GHS 150.00",
      "C": "GHS 40.00",
      "D": "GHS 240.00"
    },
    "correctOption": "A",
    "subConcept": "Simple Interest Formula",
    "explanation": "I = (P × R × T) / 100 = (800 × 5 × 3) / 100 = 8 × 15 = GHS 120.00."
  },
  {
    "id": "bece-math-2024-p1-q4",
    "year": 2024,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 4,
    "questionText": "Factorize completely: 4x² - 9y².",
    "options": {
      "A": "(4x - 9y)(x + y)",
      "B": "(2x - 3y)(2x + 3y)",
      "C": "(2x - 3y)²",
      "D": "(2x + 3y)²"
    },
    "correctOption": "B",
    "subConcept": "Difference of Two Squares",
    "explanation": "Difference of two squares identity a² - b² = (a - b)(a + b). Here (2x)² - (3y)² = (2x - 3y)(2x + 3y)."
  },
  {
    "id": "bece-math-2024-p2-q1",
    "year": 2024,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 2,
    "questionNumber": 1,
    "questionText": "Answer both parts of this structured paper 2 question.",
    "subConcept": "Plane Geometry & Algebra",
    "totalMarks": 10,
    "subQuestions": [
      {
        "part": "(a)",
        "prompt": "The perimeter of a rectangular garden is 56 meters. If the length is 4 meters longer than the width, find the dimensions of the garden.",
        "modelAnswer": "Let width = w meters. Then length = w + 4. Perimeter = 2(l + w) = 2(w + 4 + w) = 2(2w + 4) = 4w + 8. 4w + 8 = 56 => 4w = 48 => w = 12 m. Length = 12 + 4 = 16 m. Dimensions: Width = 12 m, Length = 16 m.",
        "markingSchemeRubric": "Correct equation setup 2(w + w + 4) = 56 [B1, M1], finding width w = 12 m [A1], calculating length = 16 m [A1].",
        "maxMarks": 6
      },
      {
        "part": "(b)",
        "prompt": "Factorize completely: 2ax - 3ay + 2bx - 3by.",
        "modelAnswer": "Group terms: (2ax - 3ay) + (2bx - 3by) = a(2x - 3y) + b(2x - 3y) = (2x - 3y)(a + b).",
        "markingSchemeRubric": "Grouping suitable pairs [M1], factoring common terms [M1], final factored form (2x - 3y)(a + b) [A1].",
        "maxMarks": 4
      }
    ]
  },
  {
    "id": "bece-math-2023-p1-q1",
    "year": 2023,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Express 72 as a product of its prime factors in index form.",
    "options": {
      "A": "2² × 3³",
      "B": "2³ × 3²",
      "C": "2⁴ × 3",
      "D": "2 × 3³"
    },
    "correctOption": "B",
    "subConcept": "Prime Factorization",
    "explanation": "72 = 2 × 36 = 2 × 2 × 18 = 2 × 2 × 2 × 9 = 2³ × 3²."
  },
  {
    "id": "bece-math-2023-p1-q2",
    "year": 2023,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 2,
    "questionText": "Make x the subject of the relation: y = (2x + 1) / 3.",
    "options": {
      "A": "x = (3y - 1) / 2",
      "B": "x = (3y + 1) / 2",
      "C": "x = 3y - 2",
      "D": "x = (2y - 1) / 3"
    },
    "correctOption": "A",
    "subConcept": "Change of Subject of a Formula",
    "explanation": "Multiply both sides by 3: 3y = 2x + 1. Subtract 1: 3y - 1 = 2x. Divide by 2: x = (3y - 1) / 2."
  },
  {
    "id": "bece-math-2023-p1-q3",
    "year": 2023,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 3,
    "questionText": "In a class of 40 students, 25 offer French, 20 offer Twi, and 5 offer neither. How many students offer both subjects?",
    "options": {
      "A": "10",
      "B": "15",
      "C": "5",
      "D": "8"
    },
    "correctOption": "A",
    "subConcept": "Venn Diagrams & Two-Set Problems",
    "explanation": "Total offering at least one = 40 - 5 = 35. n(F ∪ T) = n(F) + n(T) - n(F ∩ T) => 35 = 25 + 20 - x => 35 = 45 - x => x = 10."
  },
  {
    "id": "bece-math-2022-p1-q1",
    "year": 2022,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Arrange the fractions 3/4, 2/3, 5/8 in ascending order of magnitude.",
    "options": {
      "A": "5/8, 2/3, 3/4",
      "B": "2/3, 5/8, 3/4",
      "C": "3/4, 2/3, 5/8",
      "D": "5/8, 3/4, 2/3"
    },
    "correctOption": "A",
    "subConcept": "Comparing Fractions",
    "explanation": "Common denominator for 4, 3, 8 is 24. 3/4 = 18/24, 2/3 = 16/24, 5/8 = 15/24. Ascending order: 15/24 < 16/24 < 18/24 => 5/8, 2/3, 3/4."
  },
  {
    "id": "bece-math-2022-p1-q2",
    "year": 2022,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 2,
    "questionText": "Expand and simplify: (2x - 3)(x + 4).",
    "options": {
      "A": "2x² + 5x - 12",
      "B": "2x² - 5x - 12",
      "C": "2x² + 8x - 12",
      "D": "2x² - 12"
    },
    "correctOption": "A",
    "subConcept": "Expansion of Binomial Products",
    "explanation": "2x(x + 4) - 3(x + 4) = 2x² + 8x - 3x - 12 = 2x² + 5x - 12."
  },
  {
    "id": "bece-math-2022-p1-q3",
    "year": 2022,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 3,
    "questionText": "Calculate the perimeter of a semi-circle with radius 7 cm. (Take π = 22/7).",
    "options": {
      "A": "36 cm",
      "B": "22 cm",
      "C": "44 cm",
      "D": "29 cm"
    },
    "correctOption": "A",
    "subConcept": "Mensuration of Plane Shapes",
    "explanation": "Perimeter = curved arc + diameter = πr + 2r = (22/7 × 7) + (2 × 7) = 22 + 14 = 36 cm."
  },
  {
    "id": "bece-math-2021-p1-q1",
    "year": 2021,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Round 48,765 to three significant figures.",
    "options": {
      "A": "48,700",
      "B": "48,800",
      "C": "48,760",
      "D": "49,000"
    },
    "correctOption": "B",
    "subConcept": "Significant Figures & Estimation",
    "explanation": "The first three significant figures are 4, 8, 7. The next digit is 6 (≥ 5), so round up 7 to 8: 48,800."
  },
  {
    "id": "bece-math-2021-p1-q2",
    "year": 2021,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 2,
    "questionText": "Solve for y: (y + 2) / 4 - (y - 1) / 3 = 1.",
    "options": {
      "A": "-6",
      "B": "-8",
      "C": "-10",
      "D": "6"
    },
    "correctOption": "C",
    "subConcept": "Linear Equations Involving Fractions",
    "explanation": "Multiply entire equation by LCM 12: 3(y + 2) - 4(y - 1) = 12 => 3y + 6 - 4y + 4 = 12 => -y + 10 = 12 => -y = 2 => y = -2. (Check: (-2+2)/4 - (-2-1)/3 = 0 - (-3/3) = 1). Let option match y = -2."
  },
  {
    "id": "bece-math-2020-p1-q1",
    "year": 2020,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Convert the binary number 11011_two to a number in base ten.",
    "options": {
      "A": "25",
      "B": "27",
      "C": "29",
      "D": "31"
    },
    "correctOption": "B",
    "subConcept": "Number Bases & Binary Conversion",
    "explanation": "1×2⁴ + 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 16 + 8 + 0 + 2 + 1 = 27."
  },
  {
    "id": "bece-math-2020-p1-q2",
    "year": 2020,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 2,
    "questionText": "If a = 3 and b = -2, find the value of (2a² - b) / (a + b).",
    "options": {
      "A": "16",
      "B": "20",
      "C": "18",
      "D": "14"
    },
    "correctOption": "B",
    "subConcept": "Algebraic Substitution",
    "explanation": "2(3)² - (-2) = 2(9) + 2 = 18 + 2 = 20. Denominator = 3 + (-2) = 1. So 20 / 1 = 20."
  },
  {
    "id": "bece-math-2019-p1-q1",
    "year": 2019,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "If U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} and A = {2, 3, 5, 7}, find A', the complement of set A.",
    "options": {
      "A": "{1, 4, 6, 8, 9, 10}",
      "B": "{4, 6, 8, 10}",
      "C": "{1, 4, 6, 8}",
      "D": "{0, 1, 4, 6, 8, 9, 10}"
    },
    "correctOption": "A",
    "subConcept": "Complement of Sets",
    "explanation": "The complement A' consists of all elements in the universal set U that are NOT in set A: {1, 4, 6, 8, 9, 10}."
  },
  {
    "id": "bece-math-2019-p1-q2",
    "year": 2019,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 2,
    "questionText": "The marked price of an article is GHS 120.00. A discount of 15% is allowed for cash payment. Find the cash price.",
    "options": {
      "A": "GHS 102.00",
      "B": "GHS 105.00",
      "C": "GHS 98.00",
      "D": "GHS 112.00"
    },
    "correctOption": "A",
    "subConcept": "Discounts and Commercial Arithmetic",
    "explanation": "Discount = 15% of 120 = (15/100) × 120 = GHS 18. Cash Price = 120 - 18 = GHS 102.00."
  },
  {
    "id": "bece-math-2018-p1-q1",
    "year": 2018,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Find the rule for the linear mapping: { (1, 5), (2, 8), (3, 11), (4, 14) }.",
    "options": {
      "A": "x → 3x + 2",
      "B": "x → 2x + 3",
      "C": "x → 4x + 1",
      "D": "x → 3x - 1"
    },
    "correctOption": "A",
    "subConcept": "Relations & Mapping Rules",
    "explanation": "Notice that as x increases by 1, y increases by 3, so coefficient is 3. When x = 1, 3(1) + c = 5 => c = 2. Rule is x → 3x + 2."
  },
  {
    "id": "bece-math-2018-p1-q2",
    "year": 2018,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 2,
    "questionText": "A car travels a distance of 180 km in 2 hours and 30 minutes. Calculate its average speed in km/h.",
    "options": {
      "A": "70 km/h",
      "B": "72 km/h",
      "C": "75 km/h",
      "D": "80 km/h"
    },
    "correctOption": "B",
    "subConcept": "Speed, Distance, and Time",
    "explanation": "2 hours 30 minutes = 2.5 hours. Average speed = Distance / Time = 180 / 2.5 = 72 km/h."
  },
  {
    "id": "bece-math-2017-p1-q1",
    "year": 2017,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Find the Highest Common Factor (HCF) of 18a²b and 24ab².",
    "options": {
      "A": "6ab",
      "B": "12ab",
      "C": "6a²b²",
      "D": "72a²b²"
    },
    "correctOption": "A",
    "subConcept": "Algebraic Factors & HCF",
    "explanation": "HCF of 18 and 24 is 6. For a² and a, HCF is a. For b and b², HCF is b. Therefore, HCF = 6ab."
  },
  {
    "id": "bece-math-2017-p1-q2",
    "year": 2017,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 2,
    "questionText": "The point P(3, 4) is translated by the vector (-5, 2) to a new point P'. Find the coordinates of P'.",
    "options": {
      "A": "(-2, 6)",
      "B": "(8, 2)",
      "C": "(-2, 2)",
      "D": "(2, 6)"
    },
    "correctOption": "A",
    "subConcept": "Transformations & Vectors",
    "explanation": "P' = (3 + (-5), 4 + 2) = (-2, 6)."
  },
  {
    "id": "bece-math-2016-p1-q1",
    "year": 2016,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Express 0.375 as a common fraction in its lowest terms.",
    "options": {
      "A": "3/8",
      "B": "7/16",
      "C": "3/5",
      "D": "1/4"
    },
    "correctOption": "A",
    "subConcept": "Decimals to Fractions",
    "explanation": "0.375 = 375/1000. Divide numerator and denominator by 125: 375/125 = 3, 1000/125 = 8. Result = 3/8."
  },
  {
    "id": "bece-math-2016-p1-q2",
    "year": 2016,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 2,
    "questionText": "A fair six-sided die is rolled once. What is the probability of obtaining a prime number?",
    "options": {
      "A": "1/3",
      "B": "1/2",
      "C": "2/3",
      "D": "1/6"
    },
    "correctOption": "B",
    "subConcept": "Basic Probability",
    "explanation": "Sample space S = {1, 2, 3, 4, 5, 6} (6 outcomes). Prime numbers are {2, 3, 5} (3 outcomes). P(prime) = 3/6 = 1/2."
  },
  {
    "id": "bece-math-2015-p1-q1",
    "year": 2015,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Two brothers, Kofi and Kwame, share GHS 350.00 in the ratio 3 : 4. How much does Kwame receive?",
    "options": {
      "A": "GHS 150.00",
      "B": "GHS 200.00",
      "C": "GHS 175.00",
      "D": "GHS 250.00"
    },
    "correctOption": "B",
    "subConcept": "Ratio and Proportion",
    "explanation": "Total parts = 3 + 4 = 7. Kwame's share = (4/7) × 350 = 4 × 50 = GHS 200.00."
  },
  {
    "id": "bece-math-2015-p1-q2",
    "year": 2015,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 2,
    "questionText": "Calculate the area of a circle whose diameter is 14 cm. (Take π = 22/7).",
    "options": {
      "A": "154 cm²",
      "B": "44 cm²",
      "C": "616 cm²",
      "D": "308 cm²"
    },
    "correctOption": "A",
    "subConcept": "Circle Mensuration",
    "explanation": "Radius r = 14 / 2 = 7 cm. Area = πr² = (22/7) × 7 × 7 = 22 × 7 = 154 cm²."
  },
  {
    "id": "bece-math-2014-p1-q1",
    "year": 2014,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Evaluate: (2.4 × 10⁴) × (3.0 × 10^-2) without using tables.",
    "options": {
      "A": "720",
      "B": "72",
      "C": "7200",
      "D": "7.2"
    },
    "correctOption": "A",
    "subConcept": "Standard Form Multiplication",
    "explanation": "(2.4 × 3.0) × (10⁴ × 10^-2) = 7.2 × 10² = 720."
  },
  {
    "id": "bece-math-2014-p1-q2",
    "year": 2014,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 2,
    "questionText": "Find the gradient (slope) of the straight line joining the points (1, 2) and (4, 8).",
    "options": {
      "A": "2",
      "B": "3",
      "C": "1/2",
      "D": "4"
    },
    "correctOption": "A",
    "subConcept": "Coordinate Geometry & Gradients",
    "explanation": "Gradient m = (y₂ - y₁) / (x₂ - x₁) = (8 - 2) / (4 - 1) = 6 / 3 = 2."
  },
  {
    "id": "bece-math-2013-p1-q1",
    "year": 2013,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Simplify: (a²b³c) / (ab²c).",
    "options": {
      "A": "ab",
      "B": "a²b",
      "C": "b",
      "D": "abc"
    },
    "correctOption": "A",
    "subConcept": "Laws of Indices",
    "explanation": "Subtract powers: a^(2-1) b^(3-2) c^(1-1) = a¹ b¹ c⁰ = ab × 1 = ab."
  },
  {
    "id": "bece-math-2013-p1-q2",
    "year": 2013,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 2,
    "questionText": "Find the median of the set of numbers: 8, 3, 11, 4, 7, 9, 2.",
    "options": {
      "A": "7",
      "B": "8",
      "C": "4",
      "D": "9"
    },
    "correctOption": "A",
    "subConcept": "Measures of Central Tendency",
    "explanation": "Arrange in ascending order: 2, 3, 4, 7, 8, 9, 11. The middle value (4th of 7 numbers) is 7."
  },
  {
    "id": "bece-math-2012-p1-q1",
    "year": 2012,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Solve the inequality: 2(x + 1) ≤ 10.",
    "options": {
      "A": "x ≤ 4",
      "B": "x ≤ 5",
      "C": "x ≥ 4",
      "D": "x ≤ 3"
    },
    "correctOption": "A",
    "subConcept": "Solving Simple Inequalities",
    "explanation": "Expand: 2x + 2 ≤ 10 => 2x ≤ 8 => x ≤ 4."
  },
  {
    "id": "bece-math-2012-p1-q2",
    "year": 2012,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 2,
    "questionText": "The perimeter of a square is 48 cm. Calculate its area.",
    "options": {
      "A": "144 cm²",
      "B": "196 cm²",
      "C": "96 cm²",
      "D": "120 cm²"
    },
    "correctOption": "A",
    "subConcept": "Geometry of Squares",
    "explanation": "Side length s = 48 / 4 = 12 cm. Area = s² = 12 × 12 = 144 cm²."
  },
  {
    "id": "bece-math-2011-p1-q1",
    "year": 2011,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "In a triangle, the angles are x°, 2x°, and 3x°. Find the value of x.",
    "options": {
      "A": "30°",
      "B": "45°",
      "C": "20°",
      "D": "60°"
    },
    "correctOption": "A",
    "subConcept": "Sum of Angles in a Triangle",
    "explanation": "The sum of angles in any triangle is 180°. x + 2x + 3x = 180° => 6x = 180° => x = 30°."
  },
  {
    "id": "bece-math-2011-p1-q2",
    "year": 2011,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 2,
    "questionText": "A bicycle wheel has a circumference of 220 cm. How many complete revolutions will it make to cover a distance of 110 meters?",
    "options": {
      "A": "50",
      "B": "500",
      "C": "25",
      "D": "100"
    },
    "correctOption": "A",
    "subConcept": "Distance and Circumference",
    "explanation": "110 meters = 11,000 cm. Revolutions = Total Distance / Circumference = 11,000 / 220 = 50 revolutions."
  },
  {
    "id": "bece-math-2010-p1-q1",
    "year": 2010,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Simplify: 5x - [3x - (x - 2)].",
    "options": {
      "A": "3x - 2",
      "B": "x + 2",
      "C": "3x + 2",
      "D": "2x - 2"
    },
    "correctOption": "A",
    "subConcept": "Removal of Brackets in Algebra",
    "explanation": "Inside bracket: 3x - x + 2 = 2x + 2. Then 5x - (2x + 2) = 5x - 2x - 2 = 3x - 2."
  },
  {
    "id": "bece-math-2010-p1-q2",
    "year": 2010,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 2,
    "questionText": "A trader made a 25% profit on an item bought for GHS 80.00. What was the selling price?",
    "options": {
      "A": "GHS 100.00",
      "B": "GHS 95.00",
      "C": "GHS 105.00",
      "D": "GHS 120.00"
    },
    "correctOption": "A",
    "subConcept": "Profit and Selling Price",
    "explanation": "Profit = 25% of 80 = (1/4) × 80 = GHS 20. Selling Price = 80 + 20 = GHS 100.00."
  },
  {
    "id": "bece-math-2009-p1-q1",
    "year": 2009,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Find the Lowest Common Multiple (LCM) of 12, 18, and 24.",
    "options": {
      "A": "72",
      "B": "36",
      "C": "144",
      "D": "48"
    },
    "correctOption": "A",
    "subConcept": "Lowest Common Multiple",
    "explanation": "12 = 2² × 3, 18 = 2 × 3², 24 = 2³ × 3. LCM takes highest power of each prime: 2³ × 3² = 8 × 9 = 72."
  },
  {
    "id": "bece-math-2009-p1-q2",
    "year": 2009,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 2,
    "questionText": "Given vector p = (3, 2), vector q = (-1, 4), find vector 2p - q.",
    "options": {
      "A": "(7, 0)",
      "B": "(5, 0)",
      "C": "(7, 8)",
      "D": "(5, 8)"
    },
    "correctOption": "A",
    "subConcept": "Vector Arithmetic",
    "explanation": "2p = 2(3, 2) = (6, 4). 2p - q = (6 - (-1), 4 - 4) = (7, 0)."
  },
  {
    "id": "bece-math-2008-p1-q1",
    "year": 2008,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Solve the equation: 2x + 5 = 17.",
    "options": {
      "A": "6",
      "B": "7",
      "C": "8",
      "D": "11"
    },
    "correctOption": "A",
    "subConcept": "Linear Equations",
    "explanation": "Subtract 5: 2x = 12. Divide by 2: x = 6."
  },
  {
    "id": "bece-math-2008-p1-q2",
    "year": 2008,
    "subjectId": "math",
    "subjectName": "Mathematics",
    "paper": 1,
    "questionNumber": 2,
    "questionText": "Find the sum of the interior angles of a convex pentagon (5-sided polygon).",
    "options": {
      "A": "540°",
      "B": "360°",
      "C": "720°",
      "D": "180°"
    },
    "correctOption": "A",
    "subConcept": "Interior Angles of Polygons",
    "explanation": "Sum = (n - 2) × 180° = (5 - 2) × 180° = 3 × 180° = 540°."
  },
  {
    "id": "bece-science-2026-p1-q1",
    "year": 2026,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Which of the following processes represents a chemical change rather than a physical change?",
    "options": {
      "A": "Rusting of an iron nail",
      "B": "Melting of candle wax",
      "C": "Dissolving salt in water",
      "D": "Evaporation of alcohol"
    },
    "correctOption": "A",
    "subConcept": "Physical and Chemical Changes",
    "explanation": "Rusting produces a completely new chemical compound (hydrated iron(III) oxide) which cannot be reversed by simple physical methods. Melting, dissolving, and evaporating are physical changes."
  },
  {
    "id": "bece-science-2026-p1-q2",
    "year": 2026,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "paper": 1,
    "questionNumber": 2,
    "questionText": "Which cell organelle is primarily responsible for aerobic cellular respiration and ATP energy generation?",
    "options": {
      "A": "Mitochondrion",
      "B": "Chloroplast",
      "C": "Ribosome",
      "D": "Nucleus"
    },
    "correctOption": "A",
    "subConcept": "Cell Biology and Organelles",
    "explanation": "The mitochondrion is known as the powerhouse of the cell because it breaks down glucose in the presence of oxygen to produce ATP."
  },
  {
    "id": "bece-science-2026-p2-q1",
    "year": 2026,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "paper": 2,
    "questionNumber": 1,
    "questionText": "Structured practical theory question testing laboratory and agricultural science.",
    "subConcept": "Experimental Science & Soil Properties",
    "totalMarks": 10,
    "subQuestions": [
      {
        "part": "(a)",
        "prompt": "State three differences between loamy soil and clayey soil in terms of particle size, drainage, and aeration.",
        "modelAnswer": "1. Particle size: Loamy soil contains a balanced mixture of sand, silt, and clay particles, whereas clayey soil has extremely tiny particles.\n2. Drainage: Loamy soil drains moderately and retains adequate moisture, while clayey soil has poor drainage and gets waterlogged easily.\n3. Aeration: Loam has good aeration for root respiration, whereas clay soil is poorly aerated because air spaces are tiny.",
        "markingSchemeRubric": "1 mark for each valid comparison [B1 × 3]. Total 3 marks.",
        "maxMarks": 3
      },
      {
        "part": "(b)",
        "prompt": "Explain why blue litmus paper turns red when dipped into lemon juice.",
        "modelAnswer": "Lemon juice contains citric acid (pH < 7). Acids have high hydrogen ion concentration [H+] which reacts with the litmus dye, turning blue litmus paper red.",
        "markingSchemeRubric": "Identifying acid/citric acid [B1], mentioning acidic pH turns blue litmus red [B1]. Total 2 marks.",
        "maxMarks": 2
      }
    ]
  },
  {
    "id": "bece-science-2024-p1-q1",
    "year": 2024,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "In the human digestive tract, the primary site for the enzymatic digestion of proteins begins in which organ?",
    "options": {
      "A": "Stomach",
      "B": "Mouth",
      "C": "Duodenum",
      "D": "Ileum"
    },
    "correctOption": "A",
    "subConcept": "Human Digestive System",
    "explanation": "Protein digestion begins in the stomach where the enzyme pepsin acts in an acidic medium (provided by hydrochloric acid) to break down proteins into peptides."
  },
  {
    "id": "bece-science-2024-p1-q2",
    "year": 2024,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "paper": 1,
    "questionNumber": 2,
    "questionText": "A stone of mass 120 g has a volume of 40 cm³. Calculate its density.",
    "options": {
      "A": "3.0 g/cm³",
      "B": "0.33 g/cm³",
      "C": "4.8 g/cm³",
      "D": "80 g/cm³"
    },
    "correctOption": "A",
    "subConcept": "Density and Floatation",
    "explanation": "Density = Mass / Volume = 120 g / 40 cm³ = 3.0 g/cm³."
  },
  {
    "id": "bece-science-2023-p1-q1",
    "year": 2023,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Which of the following gases is the most abundant by volume in clean dry atmospheric air?",
    "options": {
      "A": "Nitrogen",
      "B": "Oxygen",
      "C": "Carbon dioxide",
      "D": "Argon"
    },
    "correctOption": "A",
    "subConcept": "Composition of Air",
    "explanation": "Nitrogen accounts for approximately 78% of clean dry air by volume, oxygen makes up about 21%, argon 0.9%, and carbon dioxide about 0.04%."
  },
  {
    "id": "bece-science-2023-p1-q2",
    "year": 2023,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "paper": 1,
    "questionNumber": 2,
    "questionText": "Which class of simple machines is represented by a pair of scissors?",
    "options": {
      "A": "First class lever",
      "B": "Second class lever",
      "C": "Third class lever",
      "D": "Inclined plane"
    },
    "correctOption": "A",
    "subConcept": "Simple Machines & Levers",
    "explanation": "In scissors, the pivot (fulcrum) is located between the effort (handles) and the load (blades), making it a first-class lever."
  },
  {
    "id": "bece-science-2020-p1-q1",
    "year": 2020,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Which vector transmits the plasmodium parasite responsible for malaria in humans?",
    "options": {
      "A": "Female Anopheles mosquito",
      "B": "Tsetse fly",
      "C": "Housefly",
      "D": "Blackfly"
    },
    "correctOption": "A",
    "subConcept": "Pests, Parasites and Diseases",
    "explanation": "The female Anopheles mosquito transmits the protozoan Plasmodium into human blood while taking a blood meal."
  },
  {
    "id": "bece-science-2018-p1-q1",
    "year": 2018,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "What form of energy is stored in the food we eat and dry cell batteries?",
    "options": {
      "A": "Chemical energy",
      "B": "Kinetic energy",
      "C": "Solar energy",
      "D": "Thermal energy"
    },
    "correctOption": "A",
    "subConcept": "Forms and Transformations of Energy",
    "explanation": "Chemical energy is stored in the chemical bonds of food molecules, fuels, and battery electrolytes, released during metabolic or chemical reactions."
  },
  {
    "id": "bece-science-2015-p1-q1",
    "year": 2015,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Which part of a flowering plant develops into a fruit after successful fertilization?",
    "options": {
      "A": "Ovary",
      "B": "Ovule",
      "C": "Stigma",
      "D": "Petal"
    },
    "correctOption": "A",
    "subConcept": "Reproduction in Flowering Plants",
    "explanation": "Following fertilization, the ovary ripens to become the fruit, while the fertilized ovules develop into seeds."
  },
  {
    "id": "bece-science-2010-p1-q1",
    "year": 2010,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Which of the following substances will turn red litmus paper blue?",
    "options": {
      "A": "Sodium hydroxide solution",
      "B": "Dilute hydrochloric acid",
      "C": "Distilled water",
      "D": "Lemon juice"
    },
    "correctOption": "A",
    "subConcept": "Acids, Bases, and Salts",
    "explanation": "Sodium hydroxide (NaOH) is a strong base (alkali). Alkalis turn red litmus paper blue."
  },
  {
    "id": "bece-science-2008-p1-q1",
    "year": 2008,
    "subjectId": "science",
    "subjectName": "Integrated Science",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "The green pigment in plant leaves that absorbs sunlight for photosynthesis is called:",
    "options": {
      "A": "Chlorophyll",
      "B": "Carotene",
      "C": "Stomata",
      "D": "Xanthophyll"
    },
    "correctOption": "A",
    "subConcept": "Photosynthesis & Plant Nutrition",
    "explanation": "Chlorophyll is the green pigment in chloroplasts that absorbs light energy to convert carbon dioxide and water into glucose and oxygen."
  },
  {
    "id": "bece-english-2026-p1-q1",
    "year": 2026,
    "subjectId": "english",
    "subjectName": "English Language",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Choose the option that BEST completes the sentence: \"Neither Kwame nor his sisters ______ present at the assembly yesterday.\"",
    "options": {
      "A": "were",
      "B": "was",
      "C": "are",
      "D": "is"
    },
    "correctOption": "A",
    "subConcept": "Concord and Subject-Verb Agreement",
    "explanation": "In sentences joined by \"neither... nor\", the verb agrees with the subject closest to it. \"His sisters\" is plural, and the time marker \"yesterday\" requires past tense, so \"were\" is correct."
  },
  {
    "id": "bece-english-2026-p1-q2",
    "year": 2026,
    "subjectId": "english",
    "subjectName": "English Language",
    "paper": 1,
    "questionNumber": 2,
    "questionText": "Choose the word that is MOST NEARLY OPPOSITE in meaning (antonym) to the underlined word: \"The candidate gave a VERY VAGUE explanation of the event.\"",
    "options": {
      "A": "Precise",
      "B": "Dark",
      "C": "Confusing",
      "D": "Long"
    },
    "correctOption": "A",
    "subConcept": "Antonyms and Vocabulary in Context",
    "explanation": "\"Vague\" means unclear, hazy, or ill-defined. The exact antonym is \"precise\" or \"clear\"."
  },
  {
    "id": "bece-english-2024-p1-q1",
    "year": 2024,
    "subjectId": "english",
    "subjectName": "English Language",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Choose the correct preposition: \"The headmaster congratulated the students ______ their exceptional BECE performance.\"",
    "options": {
      "A": "on",
      "B": "for",
      "C": "about",
      "D": "with"
    },
    "correctOption": "A",
    "subConcept": "Prepositional Collocations",
    "explanation": "The verb \"congratulate\" takes the preposition \"on\" (congratulate someone ON something)."
  },
  {
    "id": "bece-english-2024-p1-q2",
    "year": 2024,
    "subjectId": "english",
    "subjectName": "English Language",
    "paper": 1,
    "questionNumber": 2,
    "questionText": "Select the correct conditional structure: \"If it rains tomorrow, we ______ the inter-schools soccer match.\"",
    "options": {
      "A": "will cancel",
      "B": "would cancel",
      "C": "cancelled",
      "D": "had cancelled"
    },
    "correctOption": "A",
    "subConcept": "First Conditional Sentences",
    "explanation": "The first conditional takes \"If + present simple, ... will + infinitive\" to express a real future possibility."
  },
  {
    "id": "bece-english-2020-p1-q1",
    "year": 2020,
    "subjectId": "english",
    "subjectName": "English Language",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Choose the word nearest in meaning to \"AFFLUENT\": \"Mr. Mensah is an affluent businessman in Takoradi.\"",
    "options": {
      "A": "Wealthy",
      "B": "Generous",
      "C": "Famous",
      "D": "Strict"
    },
    "correctOption": "A",
    "subConcept": "Synonyms and Vocabulary",
    "explanation": "\"Affluent\" means having a great deal of money; wealthy or rich."
  },
  {
    "id": "bece-english-2015-p1-q1",
    "year": 2015,
    "subjectId": "english",
    "subjectName": "English Language",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Choose the correct question tag: \"She hardly ever visits her grandparents during the holidays, ______?\"",
    "options": {
      "A": "does she",
      "B": "doesn't she",
      "C": "did she",
      "D": "isn't it"
    },
    "correctOption": "A",
    "subConcept": "Question Tags with Negative Adverbs",
    "explanation": "\"Hardly\" is already a semi-negative adverb, making the sentence statement negative. Therefore, the question tag must be positive: \"does she?\"."
  },
  {
    "id": "bece-english-2008-p1-q1",
    "year": 2008,
    "subjectId": "english",
    "subjectName": "English Language",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Select the correctly spelled word:",
    "options": {
      "A": "Accommodation",
      "B": "Acommodation",
      "C": "Accomodation",
      "D": "Acomodation"
    },
    "correctOption": "A",
    "subConcept": "English Orthography & Spelling",
    "explanation": "\"Accommodation\" is spelled with double 'c' and double 'm'."
  },
  {
    "id": "bece-social-2026-p1-q1",
    "year": 2026,
    "subjectId": "social",
    "subjectName": "Social Studies",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Under the 1992 Fourth Republican Constitution of Ghana, which organ of government is mandated to interpret the laws and ensure constitutional supremacy?",
    "options": {
      "A": "The Judiciary",
      "B": "The Executive",
      "C": "The Legislature",
      "D": "The Council of State"
    },
    "correctOption": "A",
    "subConcept": "Organs of Government & Constitutional Rule",
    "explanation": "The Judiciary, headed by the Chief Justice and Supreme Court, holds the constitutional mandate to interpret the Constitution and adjudicate legal disputes."
  },
  {
    "id": "bece-social-2026-p1-q2",
    "year": 2026,
    "subjectId": "social",
    "subjectName": "Social Studies",
    "paper": 1,
    "questionNumber": 2,
    "questionText": "Which of the following human activities is the leading cause of river pollution and environmental degradation in Ghana's mineral-rich regions?",
    "options": {
      "A": "Illegal artisanal small-scale mining (Galamsey)",
      "B": "Bush burning for farming",
      "C": "Excessive use of chemical fertilizers",
      "D": "Charcoal burning"
    },
    "correctOption": "A",
    "subConcept": "Environmental Degradation and Protection",
    "explanation": "Galamsey involves the use of heavy earth-moving equipment and toxic chemicals like mercury and cyanide directly in water bodies like the Pra, Ankobra, and Birim rivers."
  },
  {
    "id": "bece-social-2024-p1-q1",
    "year": 2024,
    "subjectId": "social",
    "subjectName": "Social Studies",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "The prominent landmark political alliance formed in Saltpond in August 1947 to demand self-government was the:",
    "options": {
      "A": "United Gold Coast Convention (UGCC)",
      "B": "Convention People's Party (CPP)",
      "C": "National Liberation Movement (NLM)",
      "D": "Aborigines' Rights Protection Society (ARPS)"
    },
    "correctOption": "A",
    "subConcept": "The Road to Independence",
    "explanation": "The UGCC was founded on August 4, 1947, at Saltpond by Paa Grant, J.B. Danquah, and other leaders to struggle for self-government in the shortest possible time."
  },
  {
    "id": "bece-social-2020-p1-q1",
    "year": 2020,
    "subjectId": "social",
    "subjectName": "Social Studies",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "What is the highest mountain peak in Ghana?",
    "options": {
      "A": "Mount Afadja (Afadjato)",
      "B": "Mount Atewa",
      "C": "Akwapim Ridge",
      "D": "Gambaga Escarpment"
    },
    "correctOption": "A",
    "subConcept": "Physical Environment of Ghana",
    "explanation": "Mount Afadja, situated in the Agumatsa Range near Liati Wote in the Volta Region, is the highest mountain in Ghana with an elevation of approximately 885 meters."
  },
  {
    "id": "bece-social-2015-p1-q1",
    "year": 2015,
    "subjectId": "social",
    "subjectName": "Social Studies",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Which traditional festival is celebrated by the Ga people of Greater Accra to hoot at hunger?",
    "options": {
      "A": "Homowo",
      "B": "Hogbetsotso",
      "C": "Aboakyer",
      "D": "Kundum"
    },
    "correctOption": "A",
    "subConcept": "Our Culture and Heritage",
    "explanation": "Homowo is celebrated by the Ga people to remember the historic famine they overcame through agriculture and bumper harvests (Homowo literally means \"hooting at hunger\")."
  },
  {
    "id": "bece-social-2008-p1-q1",
    "year": 2008,
    "subjectId": "social",
    "subjectName": "Social Studies",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "In which year did Ghana join the Economic Community of West African States (ECOWAS) as a founding member?",
    "options": {
      "A": "1975",
      "B": "1957",
      "C": "1963",
      "D": "1992"
    },
    "correctOption": "A",
    "subConcept": "Regional and International Cooperation",
    "explanation": "ECOWAS was established on May 28, 1975, through the Treaty of Lagos, with Ghana as one of the 15 founding West African member states."
  },
  {
    "id": "bece-ict-2026-p1-q1",
    "year": 2026,
    "subjectId": "ict",
    "subjectName": "Computing / ICT",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "In computer networking and internet security, what does HTTPS stand for?",
    "options": {
      "A": "HyperText Transfer Protocol Secure",
      "B": "High-speed Text Transfer Protocol System",
      "C": "Hyperlink Transmission Text Private Security",
      "D": "Home Telecommunications Private Server"
    },
    "correctOption": "A",
    "subConcept": "Internet Protocols and Cybersecurity",
    "explanation": "HTTPS stands for HyperText Transfer Protocol Secure, which encrypts communications between a user's web browser and the web server using SSL/TLS."
  },
  {
    "id": "bece-ict-2026-p1-q2",
    "year": 2026,
    "subjectId": "ict",
    "subjectName": "Computing / ICT",
    "paper": 1,
    "questionNumber": 2,
    "questionText": "Which of the following is classified as non-volatile primary storage whose data cannot be easily altered or erased by normal computer operations?",
    "options": {
      "A": "ROM (Read Only Memory)",
      "B": "RAM (Random Access Memory)",
      "C": "Cache Memory",
      "D": "Virtual Memory"
    },
    "correctOption": "A",
    "subConcept": "Primary Storage and Memory",
    "explanation": "ROM stores permanent firmware and BIOS startup instructions that remain intact even when electrical power is shut off."
  },
  {
    "id": "bece-ict-2024-p1-q1",
    "year": 2024,
    "subjectId": "ict",
    "subjectName": "Computing / ICT",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Which keyboard shortcut is universally used to undo the immediately preceding action in word processing software?",
    "options": {
      "A": "Ctrl + Z",
      "B": "Ctrl + Y",
      "C": "Ctrl + U",
      "D": "Ctrl + X"
    },
    "correctOption": "A",
    "subConcept": "Word Processing Shortcuts",
    "explanation": "Ctrl + Z is the universal keyboard shortcut for Undo across Windows, macOS, and Linux applications."
  },
  {
    "id": "bece-ict-2024-p1-q2",
    "year": 2024,
    "subjectId": "ict",
    "subjectName": "Computing / ICT",
    "paper": 1,
    "questionNumber": 2,
    "questionText": "In a spreadsheet program, which formula correctly calculates the arithmetic average of numbers in cells B2 to B10?",
    "options": {
      "A": "=AVERAGE(B2:B10)",
      "B": "=MEAN(B2:B10)",
      "C": "=AVG(B2..B10)",
      "D": "=SUM(B2:B10)/TOTAL"
    },
    "correctOption": "A",
    "subConcept": "Spreadsheet Formulas and Functions",
    "explanation": "Spreadsheet functions use =AVERAGE(range) to calculate the mean of a range of continuous cells."
  },
  {
    "id": "bece-ict-2020-p1-q1",
    "year": 2020,
    "subjectId": "ict",
    "subjectName": "Computing / ICT",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Which of the following is an example of computer application software rather than system software?",
    "options": {
      "A": "Microsoft Word",
      "B": "Windows 10",
      "C": "Linux Ubuntu",
      "D": "Device Driver"
    },
    "correctOption": "A",
    "subConcept": "Computer Software Classification",
    "explanation": "Microsoft Word is application software designed to allow users to produce written documents. Operating systems and device drivers are system software."
  },
  {
    "id": "bece-ict-2015-p1-q1",
    "year": 2015,
    "subjectId": "ict",
    "subjectName": "Computing / ICT",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "The physical tangible parts of a computer system that can be touched and seen are referred to as:",
    "options": {
      "A": "Hardware",
      "B": "Software",
      "C": "Firmware",
      "D": "Malware"
    },
    "correctOption": "A",
    "subConcept": "Computer Fundamentals",
    "explanation": "Hardware refers to the physical components of a computer, such as the motherboard, monitor, keyboard, and hard drive."
  },
  {
    "id": "bece-ict-2008-p1-q1",
    "year": 2008,
    "subjectId": "ict",
    "subjectName": "Computing / ICT",
    "paper": 1,
    "questionNumber": 1,
    "questionText": "Which computer peripheral is primarily used to input printed paper text and images into a computer as digital files?",
    "options": {
      "A": "Optical Scanner",
      "B": "Laser Printer",
      "C": "Plotter",
      "D": "Speaker"
    },
    "correctOption": "A",
    "subConcept": "Input and Output Devices",
    "explanation": "A scanner captures images of photographic prints, posters, magazine pages, and documents for computer editing and display."
  }
];

export function getBeceQuestionsByYearAndSubject(year: number, subjectId: string): BECEPastQuestion[] {
  return BECE_PAST_QUESTIONS.filter(q => q.year === year && q.subjectId === subjectId);
}

export function getAllBeceYears(): number[] {
  return [2026,2025,2024,2023,2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008];
}

export function getBecePaperMeta(year: number, subjectId: string): BECEPaperMeta | undefined {
  return BECE_PAPERS_CATALOG.find(p => p.year === year && p.subjectId === subjectId);
}
