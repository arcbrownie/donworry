"use client";

import React, { useEffect } from 'react';

interface AdSenseInArticleProps {
  slot: string;
  className?: string;
}

export default function AdSenseInArticle({ slot, className = '' }: AdSenseInArticleProps) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error('AdSense error', e);
    }
  }, []);

  return (
    <div className={`my-10 flex flex-col items-center ${className}`}>
      <ins
        className="adsbygoogle block"
        style={{ 
          display: 'block',
          minHeight: '250px',
          background: 'linear-gradient(135deg, hsl(232 68% 30% / 0.05) 0%, hsl(280 78% 31% / 0.05) 100%)',
          borderRadius: '0.75rem'
        }}
        data-ad-client="ca-pub-8888557569927473"
        data-ad-slot={slot}
        data-ad-format="fluid"
        data-layout="in-article"
      />
    </div>
  );
}
