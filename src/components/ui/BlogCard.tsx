"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  emoji: string;
  category: string;
  path?: string;
  isPlaceholder?: boolean;
}

export default function BlogCard({
  title,
  excerpt,
  emoji,
  category,
  path = "#",
  isPlaceholder = false,
}: BlogCardProps) {
  const categoryColors: Record<string, string> = {
    생활: "bg-category-life/25 text-category-life",
    "재테크/절약": "bg-category-life/25 text-category-life",
    "재테크 · 절약": "bg-category-life/25 text-category-life",
    금융: "bg-category-finance/25 text-category-finance",
    "금융/대출": "bg-category-finance/25 text-category-finance",
    "금융 · 대출": "bg-category-finance/25 text-category-finance",
    채무조정: "bg-category-debt/25 text-category-debt",
    채무: "bg-category-debt/25 text-category-debt",
  };

  /* 이미지 디자인: 카테고리별 아이콘 박스 배경 (연한 회색/노랑/파랑) */
  const categoryIconBg: Record<string, string> = {
    생활: "bg-gray-100",
    "재테크/절약": "bg-amber-50",
    "재테크 · 절약": "bg-amber-50",
    금융: "bg-sky-50",
    "금융/대출": "bg-sky-50",
    채무조정: "bg-violet-50",
    채무: "bg-violet-50",
  };

  const cardWrapperClass = "rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow overflow-hidden h-full flex flex-col";

  const CardContent = () => (
    <>
      <div className="p-5 h-full flex flex-col">
        <div className="flex items-start gap-3 mb-3">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${categoryIconBg[category] || "bg-gray-100"} ${categoryColors[category] || "text-muted-foreground"}`}>
            <span className="text-2xl">{emoji}</span>
          </div>
          <div className="flex-1 min-w-0">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full inline-block ${categoryColors[category] || "bg-muted text-muted-foreground"}`}>
              {category}
            </span>
            {isPlaceholder && (
              <div className="mt-2">
                <span className="text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded inline-block">
                  콘텐츠 준비중
                </span>
              </div>
            )}
            {!isPlaceholder && <div className="mt-2 h-[20px]" />}
          </div>
        </div>
        <h3 className="font-bold text-foreground mb-2 line-clamp-2 text-base leading-snug min-h-[2.75rem]">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 min-h-[2.5rem] truncate">
          {excerpt}
        </p>
        <div className="flex items-center text-sm font-semibold text-[#7C3AED] group-hover:text-purple-700 mt-auto pt-1">
          자세히 보기
          <ArrowRight className="w-4 h-4 ml-1 shrink-0" />
        </div>
      </div>
    </>
  );

  if (isPlaceholder) {
    return (
      <div className={`blog-card group cursor-default opacity-70 ${cardWrapperClass}`}>
        <CardContent />
      </div>
    );
  }

  return (
    <Link href={path} className={`blog-card group block ${cardWrapperClass}`}>
      <CardContent />
    </Link>
  );
}