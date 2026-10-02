'use client';

import React, { useState } from 'react';
import { parseVideoUrl } from '@/lib/mediaUtils';
import { Play, Image as ImageIcon, Video as VideoIcon, AlertCircle } from 'lucide-react';

interface ArticleMediaRendererProps {
  mediaType?: 'image' | 'video' | null;
  mediaUrl?: string | null;
  mediaCaption?: string | null;
  title: string;
  className?: string;
  aspectRatio?: 'video' | 'auto' | 'square';
  priority?: boolean;
}

export default function ArticleMediaRenderer({
  mediaType,
  mediaUrl,
  mediaCaption,
  title,
  className = '',
  aspectRatio = 'video',
}: ArticleMediaRendererProps) {
  const [loadError, setLoadError] = useState(false);

  if (!mediaType || !mediaUrl || !mediaUrl.trim()) {
    return null;
  }

  const cleanUrl = mediaUrl.trim();

  // If mediaType is image
  if (mediaType === 'image') {
    if (loadError) {
      return (
        <div className={`w-full rounded-2xl bg-slate-100 border border-slate-200 p-6 text-center text-slate-400 ${className}`}>
          <ImageIcon className="w-8 h-8 mx-auto mb-1 opacity-50" />
          <span className="text-xs">Image unavailable</span>
        </div>
      );
    }

    return (
      <figure className={`w-full overflow-hidden space-y-2 ${className}`}>
        <div className="relative w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs">
          {/* Responsive image */}
          <img
            src={cleanUrl}
            alt={mediaCaption || title}
            onError={() => setLoadError(true)}
            className="w-full h-auto max-h-[520px] object-cover mx-auto transition-transform duration-300"
            loading="lazy"
          />
        </div>
        {mediaCaption && mediaCaption.trim() && (
          <figcaption className="text-xs text-slate-500 italic text-center px-3 font-normal leading-relaxed">
            {mediaCaption.trim()}
          </figcaption>
        )}
      </figure>
    );
  }

  // If mediaType is video
  if (mediaType === 'video') {
    const parsed = parseVideoUrl(cleanUrl);

    if (!parsed) {
      return null;
    }

    return (
      <figure className={`w-full space-y-2 ${className}`}>
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-md">
          {parsed.type === 'youtube' || parsed.type === 'vimeo' ? (
            <iframe
              src={parsed.embedUrl}
              title={mediaCaption || title}
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <video
              src={parsed.embedUrl}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-contain bg-black"
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        {mediaCaption && mediaCaption.trim() && (
          <figcaption className="text-xs text-slate-500 italic text-center px-3 font-normal leading-relaxed flex items-center justify-center gap-1.5">
            <VideoIcon className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span>{mediaCaption.trim()}</span>
          </figcaption>
        )}
      </figure>
    );
  }

  return null;
}
