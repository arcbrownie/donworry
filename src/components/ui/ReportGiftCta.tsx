import Link from "next/link";
import { Card } from "./card";
import { MessageCircle, Gift } from "lucide-react";

export function ReportGiftCta() {
  return (
    <Card className="p-4 mt-4 bg-muted/50 border border-border">
      <Link
        href="/report"
        className="flex items-center gap-3 text-foreground hover:opacity-90 transition-opacity"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <MessageCircle className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-foreground">오류 제보하고 스타벅스 기프티콘 받기</p>
          <p className="text-sm text-muted-foreground">
            잘못된 정보를 알려주시면 매달 3분을 선정해 기프티콘을 보내드려요.
          </p>
        </div>
        <Gift className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden />
      </Link>
    </Card>
  );
}
