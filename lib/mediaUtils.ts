// Media utility functions for AcademicPrep Blog & Content System
// Supports images and video embedding (YouTube, Vimeo, direct MP4/WebM)

export interface ParsedVideo {
  type: 'youtube' | 'vimeo' | 'direct';
  embedUrl: string;
  originalUrl: string;
}

/**
 * Parses any video URL (YouTube standard, short, embed, Vimeo, or direct MP4)
 * and returns an embeddable URL and player type.
 */
export function parseVideoUrl(url?: string | null): ParsedVideo | null {
  if (!url || typeof url !== 'string') return null;
  const trimmed = url.trim();
  if (!trimmed) return null;

  // 1. YouTube Standard & Watch
  // e.g. https://www.youtube.com/watch?v=VIDEO_ID or http://youtube.com/watch?v=VIDEO_ID&feature=...
  const ytWatchMatch = trimmed.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/i);
  if (ytWatchMatch && ytWatchMatch[1]) {
    const videoId = ytWatchMatch[1];
    return {
      type: 'youtube',
      embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`,
      originalUrl: trimmed,
    };
  }

  // 2. Vimeo
  // e.g. https://vimeo.com/123456789 or https://player.vimeo.com/video/123456789
  const vimeoMatch = trimmed.match(/(?:vimeo\.com\/(?:video\/)?|player\.vimeo\.com\/video\/)(\d+)/i);
  if (vimeoMatch && vimeoMatch[1]) {
    const videoId = vimeoMatch[1];
    return {
      type: 'vimeo',
      embedUrl: `https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0`,
      originalUrl: trimmed,
    };
  }

  // 3. Direct video file (mp4, webm, ogg, mov) or Supabase storage video URL
  return {
    type: 'direct',
    embedUrl: trimmed,
    originalUrl: trimmed,
  };
}

/**
 * Validates whether a given string is a valid HTTP/HTTPS URL
 */
export function isValidMediaUrl(url?: string | null): boolean {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  if (!trimmed) return false;
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}
