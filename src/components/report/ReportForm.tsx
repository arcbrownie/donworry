"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ExternalLink } from "lucide-react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdL0RCuosYfxdk12P4_KvszNEfOIb3ypWsFXOVKPEaG8oeaog/viewform?usp=dialog";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_REPORT_ID;

export function ReportForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Formspree 미설정 시 Google Form 링크만 표시
  if (!FORMSPREE_ID) {
    return (
      <div className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-sm">
        <p className="text-muted-foreground text-center mb-6">
          아래 버튼을 눌러 제보해 주세요.
        </p>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Google Form으로 제보하기
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setLoading(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const data = await res.json();
        alert(data.error || "제출에 실패했습니다. 잠시 후 다시 시도해 주세요.");
      }
    } catch {
      alert("제출에 실패했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
        <p className="text-foreground font-medium">제보해 주셔서 감사합니다.</p>
        <p className="text-muted-foreground text-sm mt-1">
          서비스 개선에 반영하겠습니다. 매달 말일 당첨자에게 개별 연락 드립니다.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-sm space-y-5"
    >
      <div className="space-y-2">
        <Label htmlFor="contact">연락처 (선택, 당첨 시 연락용)</Label>
        <Input
          id="contact"
          name="email"
          type="email"
          placeholder="example@email.com"
          className="max-w-md"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="type">제보 유형 (선택)</Label>
        <select
          id="type"
          name="type"
          className="flex h-10 w-full max-w-md rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="">선택해 주세요</option>
          <option value="오류 제보">오류 제보</option>
          <option value="서비스 개선 제안">서비스 개선 제안</option>
          <option value="기타">기타</option>
        </select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="content">내용 (필수)</Label>
        <Textarea
          id="content"
          name="message"
          placeholder="오류가 있거나 개선이 필요한 부분을 알려주세요."
          rows={5}
          required
          className="resize-y"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button type="submit" disabled={loading} className="sm:min-w-[140px]">
          {loading ? "제출 중…" : "제보하기"}
        </Button>
        <Button
          type="button"
          variant="outline"
          asChild
          className="sm:min-w-[200px]"
        >
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
            Google Form으로 제보하기
            <ExternalLink className="h-4 w-4 ml-1" />
          </a>
        </Button>
      </div>
    </form>
  );
}
