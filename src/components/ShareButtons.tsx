"use client";

import React, { useState, useEffect } from "react";
import { Facebook, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12.186 24h-.007c-3.573-.024-6.334-1.062-8.184-3.078C2.35 19.05 1.5 16.316 1.472 12.6V11.4c.03-3.724.879-6.457 2.525-8.322C5.845 1.062 8.606.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.876-6.54 2.52C4.307 6.451 3.616 8.695 3.589 11.4v1.2c.027 2.704.718 4.948 2.056 6.461 1.43 1.644 3.63 2.498 6.54 2.52 2.623-.02 4.358-.535 5.8-1.897.526-.5.946-1.09 1.257-1.764.198-.426.346-.857.443-1.283.097-.426.145-.856.145-1.283v-5.49h2.184v5.49c0 .64-.064 1.254-.193 1.84-.13.586-.323 1.15-.58 1.69-.57 1.2-1.39 2.22-2.44 3.04-1.78 1.38-4.08 2.086-6.83 2.106z" />
    </svg>
  );
}

export function ShareButtons({ className }: { className?: string }) {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [copied, setCopied] = useState(false);
  const [pressing, setPressing] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);
      setTitle(document.title);
    }
  }, []);

  const handleFacebook = () => {
    setPressing("facebook");
    setTimeout(() => {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        "_blank",
        "width=600,height=400"
      );
      setPressing(null);
    }, 120);
  };

  const handleThreads = () => {
    setPressing("threads");
    setTimeout(() => {
      window.open(
        `https://www.threads.net/intent/post?text=${encodeURIComponent(title + " " + url)}`,
        "_blank",
        "width=600,height=400"
      );
      setPressing(null);
    }, 120);
  };

  const handleCopy = async () => {
    setPressing("copy");
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = url;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
    setTimeout(() => setPressing(null), 120);
  };

  const buttonBase =
    "inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground shadow-sm transition-transform duration-150 active:scale-95 hover:bg-accent/50";

  return (
    <div className={cn("flex flex-col items-end gap-3", className)}>
      <p className="text-sm font-semibold text-foreground">이 글 공유하기</p>
      <div className="flex flex-wrap items-center justify-end gap-2">
        <button
          type="button"
          onClick={handleFacebook}
          className={cn(
            buttonBase,
            pressing === "facebook" && "scale-95"
          )}
          aria-label="페이스북 공유"
        >
          <Facebook className="h-4 w-4" />
          페이스북
        </button>
        <button
          type="button"
          onClick={handleThreads}
          className={cn(
            buttonBase,
            pressing === "threads" && "scale-95"
          )}
          aria-label="쓰레드 공유"
        >
          <ThreadsIcon className="h-4 w-4" />
          쓰레드
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className={cn(
            buttonBase,
            pressing === "copy" && "scale-95"
          )}
          aria-label="링크 복사"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-green-600" />
              링크가 복사되었습니다!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              링크 복사
            </>
          )}
        </button>
      </div>
    </div>
  );
}
