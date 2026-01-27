import { useEffect, useRef } from 'react';

interface AdSenseInArticleProps {
  slot: string;
  className?: string;
}

export default function AdSenseInArticle({ slot, className = '' }: AdSenseInArticleProps) {
  const adRef = useRef<HTMLElement>(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    // 광고가 이미 푸시되었는지 확인
    if (pushedRef.current) return;
    
    const tryPushAd = () => {
      try {
        if (typeof window !== 'undefined' && window.adsbygoogle && adRef.current) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          pushedRef.current = true;
        }
      } catch (e) {
        console.error('AdSense error', e);
      }
    };

    // 스크립트가 로드되었는지 확인
    if (typeof window !== 'undefined' && window.adsbygoogle) {
      // 이미 로드된 경우 바로 실행
      tryPushAd();
    } else {
      // 스크립트 로드 대기 (최대 5초)
      let attempts = 0;
      const checkInterval = setInterval(() => {
        attempts++;
        if (typeof window !== 'undefined' && window.adsbygoogle) {
          clearInterval(checkInterval);
          tryPushAd();
        } else if (attempts > 50) {
          // 5초 후 타임아웃
          clearInterval(checkInterval);
          console.warn('AdSense script loading timeout');
        }
      }, 100);
    }
  }, []);

  return (
    <div className={`my-10 flex flex-col items-center ${className}`}>
      <span className="text-[10px] text-muted-foreground self-end mr-2 mb-1 font-medium">
        ADVERTISEMENT
      </span>
      <ins
        ref={adRef}
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
