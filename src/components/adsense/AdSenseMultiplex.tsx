"use client";

import React, { useEffect } from 'react';

interface AdSenseMultiplexProps {
  slot: string;
  className?: string;
}

export default function AdSenseMultiplex({ slot, className = '' }: AdSenseMultiplexProps) {
  useEffect(() => {
    try {
      if (typeof window === 'undefined') return;
      
      // AdSense 스크립트가 로드될 때까지 대기 (최대 50회 재시도 = 5초)
      let retryCount = 0;
      const maxRetries = 50;
      
      const checkAdSense = () => {
        if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
          window.adsbygoogle.push({});
        } else if (retryCount < maxRetries) {
          retryCount++;
          setTimeout(checkAdSense, 100);
        } else {
          console.warn('AdSense script failed to load after maximum retries');
        }
      };
      
      checkAdSense();
    } catch (e) {
      console.error('AdSense error', e);
    }
  }, []);

  return (
    <div className={`my-8 flex flex-col items-center ${className}`}>
      <ins
        className="adsbygoogle block"
        style={{ 
          display: 'block',
          minHeight: '200px',
          background: 'linear-gradient(135deg, hsl(232 68% 30% / 0.05) 0%, hsl(280 78% 31% / 0.05) 100%)',
          borderRadius: '0.75rem'
        }}
        data-ad-client="ca-pub-8888557569927473"
        data-ad-slot={slot}
        data-ad-format="autorelaxed"
      />
    </div>
  );
}
