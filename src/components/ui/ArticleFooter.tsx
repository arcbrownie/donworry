import { ArticleAuthor } from "./ArticleAuthor";
import { ReportGiftCta } from "./ReportGiftCta";
import { BlogShareButtons } from "./BlogShareButtons";

interface ArticleFooterProps {
  expertId: string;
  publishedDate?: string;
  lastUpdated?: string;
  shareTitle?: string;
  shareDescription?: string;
}

/**
 * 블로그/가이드 포스트 푸터: FAQ 바로 아래 배치
 * - 작성자 정보 하단: 작성일·최종 수정일(왼쪽) | 이 글 공유하기 + 아이콘(오른쪽)
 * - 오류 제보 + 스타벅스 기프티콘 CTA
 */
export function ArticleFooter({
  expertId,
  publishedDate,
  lastUpdated,
  shareTitle,
  shareDescription,
}: ArticleFooterProps) {
  const shareSlot =
    shareTitle &&
    (
      <BlogShareButtons
        title={shareTitle}
        description={shareDescription}
        variant="inline"
        className="!border-0 !pt-0 !pb-0"
        alignRight
      />
    );

  return (
    <div className="mt-12 pt-8 border-t border-border text-left">
      <ArticleAuthor
        expertId={expertId}
        publishedDate={publishedDate}
        lastUpdated={lastUpdated}
        rightSlot={shareSlot}
      />
      <ReportGiftCta />
    </div>
  );
}
