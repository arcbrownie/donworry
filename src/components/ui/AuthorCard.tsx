"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Expert } from "@/lib/experts";
import { ExternalLink } from "lucide-react";

interface AuthorCardProps {
  expert: Expert;
  showFullInfo?: boolean;
}

export function AuthorCard({ expert, showFullInfo = true }: AuthorCardProps) {
  const initials = expert.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
      <div className="flex items-start gap-4">
        {/* 프로필 이미지 */}
        <Avatar className="w-16 h-16 border-2 border-primary/30">
          <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-bold text-lg">
            {initials}
          </AvatarFallback>
        </Avatar>

        {/* 전문가 정보 */}
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">
                {expert.name}
              </h3>
              <p className="text-sm text-muted-foreground font-medium">
                {expert.title}
              </p>
            </div>
            <Link
              href={`/experts/${expert.id}`}
              className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1"
            >
              프로필 보기
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>

          {showFullInfo && (
            <>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {expert.bio}
              </p>

              {/* 전문 분야 */}
              {expert.specialty && (
                <div className="flex flex-wrap gap-2">
                  {expert.specialty.split(', ').map((item, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {item.trim()}
                    </Badge>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Card>
  );
}
