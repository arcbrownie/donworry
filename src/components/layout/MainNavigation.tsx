import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Shield, CheckCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navigationItems = [
  {
    label: "생활",
    emoji: "🏠",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    items: [
      { path: "/life", label: "생활 허브", emoji: "🏡", description: "일상 재테크 팁 모음" },
      { path: "/cal/part-time", label: "알바 실수령액", emoji: "💰", description: "2026 최저임금 반영" },
      { path: "/cal/soldier", label: "군인 적금", emoji: "🎖️", description: "전역일 & 만기금액" },
    ],
  },
  {
    label: "금융",
    emoji: "💳",
    color: "text-primary",
    bgColor: "bg-primary/5",
    items: [
      { path: "/finance", label: "금융 허브", emoji: "🏦", description: "대출·금리 정보 모음" },
      { path: "/cal/freelancer", label: "프리랜서 환급", emoji: "💼", description: "3.3% 세금 계산" },
      { path: "/cal/youth-tax", label: "청년 세금감면", emoji: "🎓", description: "중기청 90% 감면" },
    ],
  },
  {
    label: "채무",
    emoji: "🛡️",
    color: "text-secondary",
    bgColor: "bg-secondary/5",
    items: [
      { path: "/debt", label: "채무조정 허브", emoji: "📋", description: "개인회생·파산 안내" },
      { path: "/debt/test", label: "자가진단", emoji: "🩺", description: "맞춤 해결책 찾기" },
      { path: "/debt/guide", label: "상세 가이드", emoji: "📖", description: "절차 및 비용 안내" },
    ],
  },
];

export default function MainNavigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg gradient-button flex items-center justify-center shadow-soft group-hover:shadow-elevated transition-shadow">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-foreground leading-tight">Donworry</span>
            <span className="text-[10px] text-muted-foreground leading-tight hidden sm:block">든든한 금융 파트너</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navigationItems.map((category) => (
            <DropdownMenu key={category.label}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-accent transition-colors ${
                    category.items.some((item) => isActive(item.path))
                      ? "bg-accent text-accent-foreground"
                      : ""
                  }`}
                >
                  <span>{category.emoji}</span>
                  <span className="font-medium">{category.label}</span>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="start" 
                className="w-64 p-2 bg-popover border border-border shadow-elevated"
              >
                {category.items.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link
                      to={item.path}
                      className={`flex items-start gap-3 px-3 py-3 rounded-lg cursor-pointer transition-colors ${
                        isActive(item.path)
                          ? "bg-accent text-accent-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      <span className="text-xl mt-0.5">{item.emoji}</span>
                      <div className="flex flex-col">
                        <span className="font-medium text-foreground">{item.label}</span>
                        <span className="text-xs text-muted-foreground">{item.description}</span>
                      </div>
                      {isActive(item.path) && (
                        <CheckCircle className="w-4 h-4 text-primary ml-auto mt-1" />
                      )}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/debt/test">
            <Button className="btn-premium">
              <span className="relative z-10 flex items-center gap-2">
                🩺 무료 진단받기
              </span>
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="w-10 h-10">
              <Menu className="w-5 h-5" />
              <span className="sr-only">메뉴 열기</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 p-0 bg-background">
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                  <div className="w-8 h-8 rounded-lg gradient-button flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-lg">Donworry</span>
                </Link>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 overflow-y-auto p-4">
                {navigationItems.map((category) => (
                  <div key={category.label} className="mb-6">
                    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${category.bgColor} mb-2`}>
                      <span className="text-lg">{category.emoji}</span>
                      <span className={`font-semibold ${category.color}`}>{category.label}</span>
                    </div>
                    <div className="space-y-1 pl-2">
                      {category.items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                            isActive(item.path)
                              ? "bg-accent text-accent-foreground"
                              : "hover:bg-muted"
                          }`}
                        >
                          <span className="text-lg">{item.emoji}</span>
                          <div className="flex flex-col">
                            <span className="font-medium text-sm">{item.label}</span>
                            <span className="text-xs text-muted-foreground">{item.description}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="p-4 border-t border-border">
                <Link to="/debt/test" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full btn-premium py-3">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      🩺 무료 채무진단 받기
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}