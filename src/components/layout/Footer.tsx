import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const footerLinks = {
  categories: [
    { label: "생활", path: "/life" },
    { label: "금융", path: "/finance" },
    { label: "채무조정", path: "/debt" },
  ],
  services: [
    { label: "채무조정 진단", path: "/debt/test" },
    { label: "채무조정 가이드", path: "/debt/guide" },
    { label: "생활 계산기", path: "/cal/life" },
    { label: "금융 계산기", path: "/cal/finance" },
  ],
  info: [
    { label: "서비스 소개", path: "/about" },
    { label: "개인정보처리방침", path: "/privacy" },
    { label: "이용약관", path: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-button flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" fill="white" fillOpacity={0.3} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-foreground">돈워리</span>
                <span className="text-[10px] text-muted-foreground">일상은 가볍게, 돈 걱정은 없게</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              어제보다 가벼운 오늘을 만드는 금융 솔루션
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">카테고리</h3>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">주요 서비스</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={`${link.path}-${index}`}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">정보</h3>
            <ul className="space-y-2">
              {footerLinks.info.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Donworry. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-center md:text-right">
              본 서비스는 참고용이며, 정확한 상담은 전문가와 진행하세요.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}