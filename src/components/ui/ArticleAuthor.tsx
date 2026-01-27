import { AuthorCard } from "./AuthorCard";
import { getExpertById } from "@/lib/experts";

interface ArticleAuthorProps {
  expertId: string;
  publishedDate?: string;
  lastUpdated?: string;
}

export function ArticleAuthor({ expertId, publishedDate, lastUpdated }: ArticleAuthorProps) {
  const expert = getExpertById(expertId);
  
  if (!expert) {
    return null;
  }

  return (
    <section className="mt-12 pt-8 border-t border-border">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-foreground mb-2">작성자 정보</h2>
        <p className="text-sm text-muted-foreground">
          이 글은 <strong className="text-foreground">{expert.name}</strong> {expert.title}가 작성했습니다.
        </p>
      </div>
      
      <AuthorCard expert={expert} />
      
      {(publishedDate || lastUpdated) && (
        <div className="mt-4 text-xs text-muted-foreground space-y-1">
          {publishedDate && (
            <p>작성일: {new Date(publishedDate).toLocaleDateString('ko-KR')}</p>
          )}
          {lastUpdated && (
            <p>최종 수정일: {new Date(lastUpdated).toLocaleDateString('ko-KR')}</p>
          )}
        </div>
      )}
    </section>
  );
}
