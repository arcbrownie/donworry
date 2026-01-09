import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, CheckCircle, Shield } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const navigationItems = [
  {
    label: "생활",
    emoji: "🏠",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    items: [
      { path: "/life", label: "생활 허브", emoji: "🏡", description: "일상 재테크 팁 모음" },
      { 
        label: "생활 계산기", 
        emoji: "🧮", 
        description: "생활에 필요한 계산기",
        isFolder: true,
        subItems: [
          { path: "/cal/part-time", label: "알바 실수령액", emoji: "💰", description: "2026 최저임금 반영" },
          { path: "/cal/soldier", label: "군인 적금", emoji: "🎖️", description: "전역일 & 만기금액" },
        ]
      },
    ],
  },
  {
    label: "금융",
    emoji: "💰",
    color: "text-primary",
    bgColor: "bg-primary/5",
    items: [
      { path: "/finance", label: "금융 허브", emoji: "🏦", description: "대출·금리 정보 모음" },
      { 
        label: "금융 계산기", 
        emoji: "🧮", 
        description: "금융에 필요한 계산기",
        isFolder: true,
        subItems: [
          { path: "/cal/freelancer", label: "프리랜서 환급", emoji: "💼", description: "3.3% 세금 계산" },
          { path: "/cal/youth-tax", label: "청년 세금감면", emoji: "🎓", description: "중기청 90% 감면" },
        ]
      },
    ],
  },
  {
    label: "채무조정",
    emoji: "⚖️",
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
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl gradient-button flex items-center justify-center shadow-soft group-hover:shadow-elevated transition-shadow">
            <Shield className="w-7 h-7 text-white" fill="white" fillOpacity={0.3} />
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="font-bold text-xl text-foreground leading-tight">돈워리</span>
              <span className="font-medium text-sm text-muted-foreground leading-tight hidden md:inline">Don't Worry</span>
            </div>
            <span className="text-xs text-muted-foreground leading-tight hidden sm:block">일상은 가볍게, 돈 걱정은 없게</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navigationItems.map((category) => (
            <DropdownMenu key={category.label}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg hover:bg-accent transition-colors ${
                    category.items.some((item) => 
                      item.isFolder 
                        ? item.subItems?.some(sub => isActive(sub.path))
                        : isActive(item.path)
                    )
                      ? "bg-accent text-accent-foreground"
                      : ""
                  }`}
                >
                  <span className="text-xl">{category.emoji}</span>
                  <span className="font-bold text-lg">{category.label}</span>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="start" 
                className="w-64 p-2 bg-popover border border-border shadow-elevated"
              >
                {category.items.map((item, idx) => (
                  item.isFolder ? (
                    <DropdownMenuSub key={item.label}>
                      <DropdownMenuSubTrigger className="flex items-start gap-3 px-3 py-3 rounded-lg cursor-pointer transition-colors hover:bg-muted">
                        <span className="text-xl mt-0.5">{item.emoji}</span>
                        <div className="flex flex-col flex-1">
                          <span className="font-medium text-foreground">{item.label}</span>
                          <span className="text-xs text-muted-foreground">{item.description}</span>
                        </div>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent className="w-56 p-2 bg-popover border border-border shadow-elevated">
                          {item.subItems?.map((subItem) => (
                            <DropdownMenuItem key={subItem.path} asChild>
                              <Link
                                to={subItem.path}
                                className={`flex items-start gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${
                                  isActive(subItem.path)
                                    ? "bg-accent text-accent-foreground"
                                    : "hover:bg-muted"
                                }`}
                              >
                                <span className="text-lg">{subItem.emoji}</span>
                                <div className="flex flex-col">
                                  <span className="font-medium text-foreground text-sm">{subItem.label}</span>
                                  <span className="text-xs text-muted-foreground">{subItem.description}</span>
                                </div>
                                {isActive(subItem.path) && (
                                  <CheckCircle className="w-4 h-4 text-primary ml-auto mt-1" />
                                )}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  ) : (
                    <DropdownMenuItem key={item.path} asChild>
                      <Link
                        to={item.path!}
                        className={`flex items-start gap-3 px-3 py-3 rounded-lg cursor-pointer transition-colors ${
                          isActive(item.path!)
                            ? "bg-accent text-accent-foreground"
                            : "hover:bg-muted"
                        }`}
                      >
                        <span className="text-xl mt-0.5">{item.emoji}</span>
                        <div className="flex flex-col">
                          <span className="font-medium text-foreground">{item.label}</span>
                          <span className="text-xs text-muted-foreground">{item.description}</span>
                        </div>
                        {isActive(item.path!) && (
                          <CheckCircle className="w-4 h-4 text-primary ml-auto mt-1" />
                        )}
                      </Link>
                    </DropdownMenuItem>
                  )
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/debt/test">
            <Button className="btn-premium bg-primary/90 hover:bg-primary">
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-lg">🩺</span> 무료 진단받기
              </span>
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="w-12 h-12">
              <Menu className="w-7 h-7" />
              <span className="sr-only">메뉴 열기</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 p-0 bg-background">
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                  <div className="w-10 h-10 rounded-lg gradient-button flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" fill="white" fillOpacity={0.3} />
                  </div>
                  <span className="font-bold text-lg">돈워리</span>
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
                      {category.items.map((item, idx) => (
                        item.isFolder ? (
                          <Collapsible key={item.label} className="space-y-1">
                            <CollapsibleTrigger className="flex items-center gap-3 px-3 py-3 rounded-lg transition-colors hover:bg-muted w-full">
                              <span className="text-lg">{item.emoji}</span>
                              <div className="flex flex-col flex-1 text-left">
                                <span className="font-medium text-sm">{item.label}</span>
                                <span className="text-xs text-muted-foreground">{item.description}</span>
                              </div>
                              <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform data-[state=open]:rotate-90" />
                            </CollapsibleTrigger>
                            <CollapsibleContent className="pl-4 space-y-1">
                              {item.subItems?.map((subItem) => (
                                <Link
                                  key={subItem.path}
                                  to={subItem.path}
                                  onClick={() => setMobileOpen(false)}
                                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                                    isActive(subItem.path)
                                      ? "bg-accent text-accent-foreground"
                                      : "hover:bg-muted"
                                  }`}
                                >
                                  <span className="text-base">{subItem.emoji}</span>
                                  <div className="flex flex-col">
                                    <span className="font-medium text-sm">{subItem.label}</span>
                                    <span className="text-xs text-muted-foreground">{subItem.description}</span>
                                  </div>
                                </Link>
                              ))}
                            </CollapsibleContent>
                          </Collapsible>
                        ) : (
                          <Link
                            key={item.path}
                            to={item.path!}
                            onClick={() => setMobileOpen(false)}
                            className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                              isActive(item.path!)
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
                        )
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