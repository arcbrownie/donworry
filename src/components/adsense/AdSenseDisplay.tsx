import { useEffect, useRef } from 'react';

interface AdSenseDisplayProps {
  slot: string;
  className?: string;
}

export default function AdSenseDisplay({ slot, className = '' }: AdSenseDisplayProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    // 광고가 이미 푸시되었는지 확인
    if (pushedRef.current) return;
    
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushedRef.current = true;
      }
    } catch (e) {
      console.error('AdSense error', e);
    }
  }, []);

  return (
    <div className={`my-8 flex flex-col items-center ${className}`}>
      <span className="text-[10px] text-muted-foreground self-end mr-2 mb-1 font-medium">
        ADVERTISEMENT
      </span>
      <ins
        ref={adRef}
        className="adsbygoogle block"
        style={{ 
          display: 'block',
          minHeight: '100px',
          background: 'linear-gradient(135deg, hsl(232 68% 30% / 0.05) 0%, hsl(280 78% 31% / 0.05) 100%)',
          borderRadius: '0.75rem'
        }}
        data-ad-client="ca-pub-8888557569927473"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
