'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/lib/authContext';

/**
 * Functional Learning Route Guard
 * Enforces that any functional learning tool, syllabus chapter, quiz,
 * exam, study lounge, or slide studio requires an account (Login / Register).
 */
export default function PortalAuthGuard() {
  const pathname = usePathname();
  const router = useRouter();
  const { student, isLoading } = useAuth();

  useEffect(() => {
    if (isLoading) return;

    const isProtected =
      pathname.startsWith('/jhs') ||
      pathname.startsWith('/shs') ||
      pathname.startsWith('/university') ||
      pathname.startsWith('/chat');

    if (isProtected && !student) {
      if (pathname.startsWith('/university')) {
        router.push('/login?mode=register&level=UNIVERSITY&redirect=/university');
      } else if (pathname.startsWith('/shs')) {
        router.push(`/login?mode=register&level=SHS+1&redirect=${encodeURIComponent(pathname)}`);
      } else if (pathname.startsWith('/jhs')) {
        router.push(`/login?mode=register&level=JHS+1&redirect=${encodeURIComponent(pathname)}`);
      } else {
        router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
      }
    }
  }, [pathname, student, isLoading, router]);

  return null;
}
