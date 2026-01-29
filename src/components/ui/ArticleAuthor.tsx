import { AuthorCard } from "./AuthorCard";
import { getExpertById } from "@/lib/experts";

interface ArticleAuthorProps {
  expertId: string;
  publishedDate?: string;
  lastUpdated?: string;
  /** 작성일·최종 수정일 오른쪽에 배치할 내용 (예: 이 글 공유하기 + 아이콘) */
  rightSlot?: React.ReactNode;
}

export function ArticleAuthor({ expertId, publishedDate, lastUpdated, rightSlot }: ArticleAuthorProps) {
  const expert = getExpertById(expertId);
  
  if (!expert) {
    return null;
  }

  const hasDates = publishedDate || lastUpdated;
  const hasBottomRow = hasDates || rightSlot;

  return (
    <section className="mt-12 pt-8 border-t border-border">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-foreground mb-2">작성자 정보</h2>
        <p className="text-sm text-muted-foreground">
          이 글은 <strong className="text-foreground">{expert.name}</strong> {expert.title}가 작성했습니다.
        </p>
      </div>
      
      <AuthorCard expert={expert} />
      
      {hasBottomRow && (
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          {hasDates && (
            <div className="text-xs text-muted-foreground space-y-1 order-2 sm:order-1">
              {publishedDate && (
                <p>작성일: {new Date(publishedDate).toLocaleDateString('ko-KR')}</p>
              )}
              {lastUpdated && (
                <p>최종 수정일: {new Date(lastUpdated).toLocaleDateString('ko-KR')}</p>
              )}
            </div>
          )}
          {rightSlot && (
            <div className="order-1 sm:order-2 sm:flex-shrink-0">
              {rightSlot}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
