"use client";

import React, { useEffect } from "react";

interface AdSenseDisplayBottomProps {
  slot: string;
  className?: string;
}

/** 본 디스플레이 광고 (배경/테두리 최소화) */
export default function AdSenseDisplayBottom({ slot, className = "" }: AdSenseDisplayBottomProps) {
  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      let retryCount = 0;
      const maxRetries = 50;
      const checkAdSense = () => {
        if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
          window.adsbygoogle.push({});
        } else if (retryCount < maxRetries) {
          retryCount++;
          setTimeout(checkAdSense, 100);
        }
      };
      checkAdSense();
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-8888557569927473"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
