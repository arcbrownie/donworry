"use client";

import { Share2, MessageCircle } from "lucide-react";
import { Button } from "./button";

interface ShareButtonsProps {
  title: string;
  description?: string;
}

export function ShareButtons({ title, description }: ShareButtonsProps) {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = description ? `${title} - ${description}` : title;

  const handleKakaoShare = () => {
    // 카카오톡 공유 (URL Scheme)
    const kakaoUrl = `https://sharer.kakao.com/talk/friends/picker/link?app_key=javascript_key&url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`;
    // 대체: 웹에서 URL 복사 후 카카오톡 열기
    if (navigator.share) {
      navigator.share({
        title: title,
        text: shareText,
        url: currentUrl,
      }).catch(() => {
        // 실패 시 URL 복사
        copyToClipboard();
      });
    } else {
      window.open(`https://story.kakao.com/share?url=${encodeURIComponent(currentUrl)}`, '_blank', 'width=600,height=400');
    }
  };

  const handleInstagramShare = () => {
    // 인스타그램은 직접 공유 불가 - 클립보드 복사 후 안내
    copyToClipboard();
    alert("링크가 복사되었습니다! 인스타그램 스토리나 DM에 붙여넣기 해주세요.");
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText}\n${currentUrl}`);
      alert("링크가 클립보드에 복사되었습니다!");
    } catch {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = `${shareText}\n${currentUrl}`;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert("링크가 클립보드에 복사되었습니다!");
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: shareText,
          url: currentUrl,
        });
      } catch {
        // 사용자가 취소한 경우
      }
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="flex items-center gap-2 justify-center pt-4 border-t border-border/30">
      <span className="text-sm text-muted-foreground mr-2">결과 공유하기</span>
      
      {/* 카카오톡 */}
      <Button
        variant="outline"
        size="sm"
        onClick={handleKakaoShare}
        className="gap-1.5 bg-[#FEE500] hover:bg-[#FDD835] text-[#3C1E1E] border-[#FEE500]"
      >
        <MessageCircle className="w-4 h-4" />
        카카오톡
      </Button>

      {/* 인스타그램 */}
      <Button
        variant="outline"
        size="sm"
        onClick={handleInstagramShare}
        className="gap-1.5 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 text-white border-0"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
        인스타
      </Button>

      {/* 일반 공유 */}
      <Button
        variant="outline"
        size="sm"
        onClick={handleNativeShare}
        className="gap-1.5"
      >
        <Share2 className="w-4 h-4" />
        공유
      </Button>
    </div>
  );
}
