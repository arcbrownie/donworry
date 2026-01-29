"use client";

import React, { useState, useEffect } from "react";
import { Share2, MessageCircle, Link2, Twitter, Copy, Check } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface BlogShareButtonsProps {
  title: string;
  description?: string;
  url?: string;
  className?: string;
  variant?: "sticky" | "bottom-fixed" | "inline";
  /** inline일 때 오른쪽 정렬 (블로그 푸터용) */
  alignRight?: boolean;
}

export function BlogShareButtons({ 
  title, 
  description, 
  url,
  className,
  variant = "sticky",
  alignRight = false
}: BlogShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const currentUrl = url || (typeof window !== "undefined" ? window.location.href : "");
  const shareText = description 
    ? `${title} - ${description.substring(0, 100)}${description.length > 100 ? "..." : ""}` 
    : title;

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = currentUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleKakaoShare = () => {
    // 카카오톡 공유 (모바일 네이티브 공유 우선)
    if (navigator.share && isMobile) {
      navigator.share({
        title: title,
        text: shareText,
        url: currentUrl,
      }).catch(() => {
        // 실패 시 URL 복사
        copyToClipboard();
      });
    } else {
      // 웹에서 카카오톡 스토리 공유
      window.open(
        `https://story.kakao.com/share?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`,
        '_blank',
        'width=600,height=400'
      );
    }
  };

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`;
    window.open(twitterUrl, '_blank', 'width=550,height=420');
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

  const buttonBaseClasses = "gap-2 transition-all duration-200";
  const buttonSize = variant === "inline" ? "sm" : "default";

  const shareButtons = (
    <div className={cn(
      "flex items-center gap-2 flex-wrap",
      variant === "inline" && (alignRight ? "justify-end" : "justify-center"),
      variant !== "inline" && className
    )}>
      {/* 카카오톡 공유 */}
      <Button
        variant="outline"
        size={buttonSize}
        onClick={handleKakaoShare}
        className={cn(
          buttonBaseClasses,
          "bg-[#FEE500] hover:bg-[#FDD835] text-[#3C1E1E] border-[#FEE500] hover:border-[#FDD835]"
        )}
        aria-label="카카오톡 공유"
      >
        <MessageCircle className="w-4 h-4" />
        {variant !== "inline" && <span>카카오톡</span>}
      </Button>

      {/* 링크 복사 */}
      <Button
        variant="outline"
        size={buttonSize}
        onClick={copyToClipboard}
        className={cn(
          buttonBaseClasses,
          "bg-gradient-to-br from-[#1A237E] to-[#4A148C] hover:from-[#1A237E]/90 hover:to-[#4A148C]/90 text-white border-transparent"
        )}
        aria-label="링크 복사"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            {variant !== "inline" && <span>복사됨</span>}
          </>
        ) : (
          <>
            <Link2 className="w-4 h-4" />
            {variant !== "inline" && <span>링크 복사</span>}
          </>
        )}
      </Button>

      {/* Twitter/X 공유 */}
      <Button
        variant="outline"
        size={buttonSize}
        onClick={handleTwitterShare}
        className={cn(
          buttonBaseClasses,
          "bg-black hover:bg-gray-900 text-white border-black hover:border-gray-900"
        )}
        aria-label="Twitter 공유"
      >
        <Twitter className="w-4 h-4" />
        {variant !== "inline" && <span>트위터</span>}
      </Button>

      {/* 네이티브 공유 (모바일) */}
      {isMobile && navigator.share && (
        <Button
          variant="outline"
          size={buttonSize}
          onClick={handleNativeShare}
          className={cn(
            buttonBaseClasses,
            "bg-gradient-to-br from-[#1A237E]/10 to-[#4A148C]/10 hover:from-[#1A237E]/20 hover:to-[#4A148C]/20 text-[#1A237E] border-[#1A237E]/20"
          )}
          aria-label="공유"
        >
          <Share2 className="w-4 h-4" />
          {variant !== "inline" && <span>공유</span>}
        </Button>
      )}
    </div>
  );

  if (variant === "sticky") {
    return (
      <div className="sticky top-[100px] z-30 mb-8">
        <div className="bg-card border border-border rounded-xl p-4 shadow-soft">
          <p className="text-sm font-semibold text-foreground mb-3">이 글 공유하기</p>
          {shareButtons}
        </div>
      </div>
    );
  }

  if (variant === "bottom-fixed") {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg md:hidden">
        <div className="container py-3">
          <p className="text-xs text-muted-foreground mb-2 text-center">이 글 공유하기</p>
          {shareButtons}
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "py-4 border-t border-border/30",
      alignRight && "text-right",
      className
    )}>
      <p className="text-sm font-semibold text-foreground mb-3">이 글 공유하기</p>
      {shareButtons}
    </div>
  );
}
