'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { recordLivePageView } from '@/lib/trafficTracker';

export default function TrafficTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    
    // Extract subject if on a subject page, topic page, or quiz page
    let subjectId: string | undefined;
    const match = pathname.match(/\/jhs\/([a-z-]+)/);
    if (match && match[1]) {
      const candidate = match[1];
      const validSubjects = ['math', 'science', 'english', 'social', 'ict', 'rme', 'french', 'twi', 'career-tech'];
      if (validSubjects.includes(candidate)) {
        subjectId = candidate;
      }
    }

    recordLivePageView(pathname, subjectId);
  }, [pathname]);

  return null;
}
