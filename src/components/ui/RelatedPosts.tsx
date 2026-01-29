"use client";

import React from "react";
import Link from "next/link";
import { Card } from "./card";
import { ArrowRight } from "lucide-react";
import { getContentsByCategory } from "@/lib/content";
import { usePathname } from "next/navigation";

interface RelatedPostsProps {
  category: "재테크 · 절약" | "금융 · 대출" | "채무조정";
  currentPath?: string;
  limit?: number;
}

export function RelatedPosts({ category, currentPath, limit = 3 }: RelatedPostsProps) {
  const pathname = usePathname();
  const current = currentPath || pathname;
  
  const relatedPosts = getContentsByCategory(category)
    .filter(post => post.path !== current)
    .slice(0, limit);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <Card className="p-6 bg-gradient-to-br from-slate-50 to-slate-100/50 border-2 border-slate-200">
        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <span>📚</span>
          <span>함께 읽으면 좋은 글</span>
        </h3>
        <div className="space-y-3">
          {relatedPosts.map((post) => (
            <Link
              key={post.path}
              href={post.path}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all group"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{post.emoji}</span>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                    {post.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {post.excerpt}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
              </div>
            </Link>
          ))}
        </div>
      </Card>
    </div>
  );
}
