// Blog & Articles Management Store for AcademicPrep
// Handles client & server retrieval, caching, and mutations for educational articles and updates.

export type BlogCategory = 'Study Tips' | 'BECE Updates' | 'Exam Strategy' | 'Announcements';

export const BLOG_CATEGORIES: BlogCategory[] = [
  'Study Tips',
  'BECE Updates',
  'Exam Strategy',
  'Announcements',
];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: BlogCategory;
  readTimeMinutes: number;
  publishedAt: string;
  featured?: boolean;
  mediaType?: 'image' | 'video' | null;
  mediaUrl?: string | null;
  mediaCaption?: string | null;
}

export interface BlogDraft {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: BlogCategory;
  readTimeMinutes: number;
  featured?: boolean;
  mediaType?: 'image' | 'video' | null;
  mediaUrl?: string | null;
  mediaCaption?: string | null;
}

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'How to Score Raw 1s in Core Mathematics & Integrated Science for BECE 2026',
    excerpt:
      'Step-by-step revision strategy focusing on high-frequency WAEC topics, formula recall, and chief examiner report pointers.',
    author: 'AcademicPrep Editorial',
    category: 'Exam Strategy',
    readTimeMinutes: 4,
    publishedAt: '2026-09-28T09:00:00Z',
    featured: true,
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    mediaCaption: 'Examiner-recommended study blueprint for scoring Grade 1 in Core Subjects.',
    content: `Achieving a Grade 1 in Core Mathematics and Integrated Science is not about studying 12 hours a day; it is about targeting the exact areas where WAEC examiners award the most marks.

1. Master the Top Recurring Science Topics
Every BECE Integrated Science Paper 2 (Theory) features compulsory questions on:
• Soil Science and Plant Nutrition
• Photosynthesis and Respiration
• Simple Machines, Work, and Energy
• Acids, Bases, and Salts
• Electric Circuits and Magnetism

Make sure you know the exact diagrams for standard laboratory apparatus (e.g., separating funnel, distillation setup, and seed germination).

2. Mathematics: The Method Mark Rule
WAEC examiners use "M-Marks" (Method marks) and "A-Marks" (Accuracy marks). Even if your final calculation is wrong, showing every single step guarantees up to 80% of the question's total score.
• Always state the formula first.
• Substitute values into the formula clearly.
• Write down all intermediate calculations.
• Remember to specify units (cm², kg, GHS, etc.) in your final answer.

3. Complete at Least 5 Past Papers Under Timed Conditions
Speed is the number one obstacle for most JHS candidates. Use the "Past Questions" and "Curriculum Quizzes" on AcademicPrep to simulate real 60-minute objective papers so you never run out of time in the exam hall.`,
  },
  {
    id: 'post-2',
    title: '5 Costly Mistakes JHS Candidates Make in English Language Comprehension',
    excerpt:
      'Learn how to answer summary questions, identify figures of speech, and avoid grammatical blunders that deduct marks.',
    author: 'Kofi Mensah (English Specialist)',
    category: 'Study Tips',
    readTimeMinutes: 5,
    publishedAt: '2026-09-25T14:30:00Z',
    featured: false,
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80',
    mediaCaption: 'Effective reading and summary techniques for BECE English Section B.',
    content: `Chief Examiner Reports consistently highlight that students lose the easiest marks in English Section B (Comprehension and Summary). Here are the five mistakes you must eliminate:

1. Lifting Directly from the Passage
When a question asks you to "explain in your own words", copying sentences word-for-word results in zero marks. Practice summarizing sentences using synonyms.

2. Misidentifying Grammatical Functions
Know the difference between a Noun Clause and an Adverbial Clause of Time. Whenever WAEC asks "What grammatical name is given to this expression and what is its function?", follow this standard answer formula:
• Name: Noun Clause
• Function: It serves as the subject/object of the verb "..."

3. Neglecting Punctuation in Summary Writing
In summary questions, every sentence must start with a capital letter and end with a full stop. Incomplete sentences receive severe penalties.

4. Writing Too Much in Summary Questions
If the question says "In three sentences, summarize...", writing four sentences means the fourth sentence will simply not be marked. Stick strictly to the instructed number of points.

5. Leaving Vocabulary Questions Blank
Always make an educated guess using context clues from the surrounding sentences. Never leave any question unanswered!`,
  },
  {
    id: 'post-3',
    title: 'Official 2026 BECE Timetable & Registration Updates Announced by WAEC',
    excerpt:
      'Key dates, candidate registration verification details, and rules for school and private candidates across all regions.',
    author: 'AcademicPrep News Desk',
    category: 'BECE Updates',
    readTimeMinutes: 3,
    publishedAt: '2026-09-20T11:00:00Z',
    featured: false,
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
    mediaCaption: 'Official WAEC exam registration timelines and centre accreditation details.',
    content: `The West African Examinations Council (WAEC) has released the preliminary schedule and guidelines for the upcoming Basic Education Certificate Examination (BECE).

Key Examination Information:
• Examination Sitting Date: Scheduled to commence in July 2026.
• Candidate Biodata Verification: All heads of basic schools must finalize biometric capturing and spelling of names by the end of November.
• Index Number Allocation: Confirmation slips will be distributed two months prior to the first paper.

Important Advice for Candidates:
1. Double-check the spelling of your full name on your school's registration slip. Correcting a name after certificate issuance involves a lengthy process.
2. Ensure your subject selections correctly reflect whether you are sitting for French, Ghanaian Language, or ICT.
3. Stay updated by checking AcademicPrep announcements regularly.`,
  },
  {
    id: 'post-4',
    title: 'Active Recall & The 20-Minute Study Rule: Boost Your Memory',
    excerpt:
      'How to retain complicated definitions in Social Studies and RME without cramming the night before.',
    author: 'Leo Kofi Derksen',
    category: 'Study Tips',
    readTimeMinutes: 4,
    publishedAt: '2026-09-15T16:00:00Z',
    featured: false,
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/watch?v=ukLnPbI9ngo',
    mediaCaption: 'Video masterclass: How to retain difficult definitions and science diagrams with active recall.',
    content: `Passive reading (just staring at notes or re-reading a textbook) gives you the illusion of learning. Within 48 hours, over 70% of that information vanishes from your memory.

What is Active Recall?
Active recall means closing your notebook and actively forcing your brain to retrieve the information.

How to use it today on AcademicPrep:
1. Read a lesson topic for 15 minutes in the JHS Curriculum section.
2. Close the browser tab or look away and write down the key definitions on a rough sheet of paper.
3. Immediately take the topic's interactive quiz. The instant feedback reinforces your neural pathways.
4. Repeat this 3 days later.

By replacing passive reading with active testing, you will remember facts effortlessly when sitting for your BECE.`,
  },
];

const BLOG_LOCAL_STORAGE_KEY = 'academicprep_blog_posts_v1';

/**
 * Client-side fetcher: grabs all blog posts from /api/blog with local cache fallback
 */
export async function fetchBlogPosts(category?: string): Promise<BlogPost[]> {
  const url = category && category !== 'ALL'
    ? `/api/blog?category=${encodeURIComponent(category)}`
    : '/api/blog';

  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) {
        if (typeof window !== 'undefined' && (!category || category === 'ALL')) {
          try {
            localStorage.setItem(BLOG_LOCAL_STORAGE_KEY, JSON.stringify(data));
          } catch {
            // storage quota fallback
          }
        }
        return data;
      }
    }
  } catch (err) {
    console.warn('Failed to fetch from /api/blog, checking local storage:', err);
  }

  // Fallback to local cache or defaults
  if (typeof window !== 'undefined') {
    try {
      const cached = localStorage.getItem(BLOG_LOCAL_STORAGE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return category && category !== 'ALL'
            ? parsed.filter((p) => p.category === category)
            : parsed;
        }
      }
    } catch {
      // Ignore
    }
  }

  return category && category !== 'ALL'
    ? INITIAL_BLOG_POSTS.filter((p) => p.category === category)
    : INITIAL_BLOG_POSTS;
}

/**
 * Fetch a single blog post by its ID
 */
export async function fetchBlogPostById(id: string): Promise<BlogPost | undefined> {
  try {
    const res = await fetch(`/api/blog?id=${encodeURIComponent(id)}`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data && data.id) {
        return data as BlogPost;
      }
    }
  } catch (err) {
    console.warn(`Failed to fetch article ${id} from API:`, err);
  }

  const all = await fetchBlogPosts();
  return all.find((p) => p.id === id);
}

/**
 * Admin action: Create a new blog post
 */
export async function createBlogPost(draft: BlogDraft): Promise<{ success: boolean; post?: BlogPost; error?: string }> {
  try {
    const res = await fetch('/api/blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(draft),
    });
    const data = await res.json();
    if (!res.ok) {
      return { success: false, error: data?.error || 'Failed to publish post.' };
    }
    return { success: true, post: data?.post };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Network error while publishing post.' };
  }
}

/**
 * Admin action: Update a blog post
 */
export async function updateBlogPost(id: string, updates: Partial<BlogDraft>): Promise<{ success: boolean; post?: BlogPost; error?: string }> {
  try {
    const res = await fetch('/api/blog', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, ...updates }),
    });
    const data = await res.json();
    if (!res.ok) {
      return { success: false, error: data?.error || 'Failed to update post.' };
    }
    return { success: true, post: data?.post };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Network error while updating post.' };
  }
}

/**
 * Admin action: Delete a blog post
 */
export async function deleteBlogPost(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch(`/api/blog?id=${encodeURIComponent(id)}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    if (!res.ok) {
      return { success: false, error: data?.error || 'Failed to delete post.' };
    }
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Network error while deleting post.' };
  }
}
