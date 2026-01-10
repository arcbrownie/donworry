import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, CheckCircle, Shield, PiggyBank, CreditCard, Scale } from "lucide-react";
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
    label: "재테크 · 절약",
    icon: PiggyBank,
    description: "티끌 모아 태산, 똑똑한 소비 습관",
    color: "text-category-debt",
    bgColor: "bg-category-debt/10",
    hoverColor: "hover:bg-category-debt/10 hover:text-category-debt",
    hoverBg: "hover:bg-category-debt/10",
    items: [
      { path: "/savings", label: "재테크 · 절약 정보", emoji: "🏡", description: "티끌 모아 태산, 똑똑한 소비 습관" },
      { 
        label: "재테크 · 절약 계산기", 
        emoji: "🔢", 
        description: "재테크 · 절약에 필요한 계산기",
        isFolder: true,
        subItems: [
          { path: "/cal/part-time", label: "알바 실수령액", emoji: "💰", description: "2026 최저임금 반영" },
          { path: "/cal/soldier", label: "군인 적금", emoji: "🎖️", description: "전역일 & 만기금액" },
          { path: "/cal/unemployment", label: "실업급여 예측", emoji: "🏥", description: "실업급여 예상액 계산" },
        ]
      },
    ],
  },
  {
    label: "금융 · 대출",
    icon: CreditCard,
    description: "나에게 딱 맞는 금리와 상품 찾기",
    color: "text-category-debt",
    bgColor: "bg-category-debt/10",
    hoverColor: "hover:bg-category-debt/10 hover:text-category-debt",
    hoverBg: "hover:bg-category-debt/10",
    items: [
      { path: "/finance", label: "대출·금리·세금 정보", emoji: "🏦", description: "나에게 딱 맞는 금리와 상품 찾기" },
      { 
        label: "금융 · 대출 계산기", 
        emoji: "🧮", 
        description: "금융 · 대출에 필요한 계산기",
        isFolder: true,
        subItems: [
          { path: "/cal/freelancer", label: "프리랜서 환급", emoji: "💼", description: "3.3% 세금 계산" },
          { path: "/cal/youth-tax", label: "청년 세금감면", emoji: "🎓", description: "중기청 90% 감면" },
          { path: "/cal/interest-saving", label: "이자 절감 계산기", emoji: "💵", description: "대출 이자 절감액" },
        ]
      },
    ],
  },
  {
    label: "채무조정",
    icon: Scale,
    description: "다시 시작하는 경제적 자유, 맞춤형 해결책",
    color: "text-category-debt",
    bgColor: "bg-category-debt/10",
    hoverColor: "hover:bg-category-debt/10 hover:text-category-debt",
    hoverBg: "hover:bg-category-debt/10",
    items: [
      { path: "/debt", label: "채무조정 정보", emoji: "📋", description: "다시 시작하는 경제적 자유, 맞춤형 해결책" },
      { path: "/debt/test", label: "채무조정 자가진단", emoji: "🩺", description: "맞춤 해결책 찾기" },
      { path: "/debt/credit-recovery-committee", label: "신용회복위원회 채무조정", emoji: "🏛️", description: "신용회복위원회를 통한 채무조정 안내" },
      { path: "/debt/personal-rehabilitation-bankruptcy", label: "개인회생 · 개인파산", emoji: "⚖️", description: "법원을 통한 채무 해결, 새로운 시작" },
      { 
        label: "채무조정 계산기", 
        emoji: "🧮", 
        description: "채무 관련 계산기",
        isFolder: true,
        subItems: [
          { path: "/cal/debt-reduction", label: "개인회생 탕감액", emoji: "📉", description: "채무 탕감 예상액" },
        ]
      },
    ],
  },
];

export default function MainNavigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-border/50 backdrop-blur transition-colors duration-300 ${
      isScrolled 
        ? "bg-white/98 supports-[backdrop-filter]:bg-white/95 shadow-sm" 
        : "bg-background/95 supports-[backdrop-filter]:bg-background/80"
    }`}>
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-[22px] group">
          <div className="w-[43.2px] h-[43.2px] rounded-xl gradient-button flex items-center justify-center shadow-soft group-hover:shadow-elevated transition-shadow">
            <Shield className="w-[25.2px] h-[25.2px] text-white" fill="white" fillOpacity={0.3} />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-extrabold text-2xl text-foreground leading-tight">돈워리</span>
            <span className="font-semibold text-lg text-muted-foreground leading-tight hidden md:inline">Don't Worry</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          {navigationItems.map((category) => {
            // 첫 번째 서브메뉴 항목 찾기 (folder가 아닌 첫 번째 항목)
            const firstMenuItem = category.items.find(item => !item.isFolder);
            const firstMenuPath = firstMenuItem?.path || "/";
            
            return (
            <DropdownMenu 
              key={category.label}
              open={openDropdowns[category.label] || false}
              onOpenChange={(open) => {
                setOpenDropdowns(prev => ({ ...prev, [category.label]: open }));
              }}
            >
              <DropdownMenuTrigger asChild>
                <div 
                  className="relative flex items-center group cursor-pointer"
                  onMouseEnter={() => setOpenDropdowns(prev => ({ ...prev, [category.label]: true }))}
                  onMouseLeave={() => setOpenDropdowns(prev => ({ ...prev, [category.label]: false }))}
                >
                  <Link
                    to={firstMenuPath}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${category.hoverColor} ${
                      category.items.some((item) => 
                        item.isFolder 
                          ? item.subItems?.some(sub => isActive(sub.path))
                          : isActive(item.path)
                      )
                        ? `${category.bgColor} ${category.color}`
                        : ""
                    }`}
                    onClick={(e) => {
                      // Link 클릭은 네비게이션만 수행
                    }}
                  >
                    {category.icon && <category.icon className="w-6 h-6" strokeWidth={1.5} />}
                    <span 
                      className={`font-bold text-xl ${category.label === '채무조정' ? 'tracking-normal' : 'tracking-tight'}`} 
                      style={{ letterSpacing: category.label === '채무조정' ? '0' : '-0.02em' }}
                    >
                      {category.label}
                    </span>
                  </Link>
                  <button
                    type="button"
                    className="w-6 h-6 -ml-1 p-0 opacity-70 hover:opacity-100 flex items-center justify-center rounded hover:bg-muted/50 transition-colors pointer-events-auto"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                  >
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="start" 
                sideOffset={8}
                className="w-64 p-2 bg-popover border border-border shadow-elevated"
                onMouseEnter={() => setOpenDropdowns(prev => ({ ...prev, [category.label]: true }))}
                onMouseLeave={() => setOpenDropdowns(prev => ({ ...prev, [category.label]: false }))}
              >
                {category.items.map((item, idx) => (
                  item.isFolder ? (
                    <DropdownMenuSub key={item.label}>
                      <DropdownMenuSubTrigger className={`flex items-start gap-3 px-3 py-3 rounded-lg cursor-pointer transition-colors ${category.hoverBg}`}>
                        <span className="text-xl mt-0.5">{item.emoji}</span>
                        <div className="flex flex-col flex-1">
                          <span className="font-medium text-foreground tracking-tight" style={{ letterSpacing: item.label.includes('·') ? '-0.01em' : 'normal' }}>{item.label}</span>
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
                                    ? `${category.bgColor} ${category.color}`
                                    : category.hoverBg
                                }`}
                              >
                                <span className="text-lg">{subItem.emoji}</span>
                                <div className="flex flex-col">
                                  <span className="font-medium text-foreground text-sm tracking-tight" style={{ letterSpacing: subItem.label.includes('·') ? '-0.01em' : 'normal' }}>{subItem.label}</span>
                                  <span className="text-xs text-muted-foreground">{subItem.description}</span>
                                </div>
                                {isActive(subItem.path) && (
                                  <CheckCircle className={`w-4 h-4 ${category.color} ml-auto mt-1`} />
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
                            ? `${category.bgColor} ${category.color}`
                            : category.hoverBg
                        }`}
                      >
                        <span className="text-xl mt-0.5">{item.emoji}</span>
                        <div className="flex flex-col">
                          <span className="font-medium text-foreground tracking-tight" style={{ letterSpacing: item.label.includes('·') ? '-0.01em' : 'normal' }}>{item.label}</span>
                          <span className="text-xs text-muted-foreground">{item.description}</span>
                        </div>
                        {isActive(item.path!) && (
                          <CheckCircle className={`w-4 h-4 ${category.color} ml-auto mt-1`} />
                        )}
                      </Link>
                    </DropdownMenuItem>
                  )
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            );
          })}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/debt/test">
            <Button className="btn-premium px-[18px] py-2.5 bg-gradient-to-r from-blue-200/80 to-purple-200/80 hover:from-blue-300/80 hover:to-purple-300/80 active:from-blue-400/85 active:to-purple-400/85 text-primary shadow-soft border border-blue-300/30 hover:text-primary/95">
              <span className="relative z-10 flex items-center gap-3 font-bold">
                🩺 <span>채무조정 무료 진단</span>
              </span>
            </Button>
          </Link>
        </div>

        {/* Mobile Menu - Full Screen */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="w-12 h-12">
              <Menu className="w-8 h-8" />
              <span className="sr-only">메뉴 열기</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-full max-w-full p-0 bg-background">
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-5 border-b border-border">
                <Link to="/" className="flex items-center gap-[22px]" onClick={() => setMobileOpen(false)}>
                  <div className="w-[43.2px] h-[43.2px] rounded-xl gradient-button flex items-center justify-center">
                    <Shield className="w-[25.2px] h-[25.2px] text-white" fill="white" fillOpacity={0.3} />
                  </div>
                  <span className="font-bold text-xl">돈워리</span>
                </Link>
                <Button variant="ghost" size="icon" className="w-12 h-12" onClick={() => setMobileOpen(false)}>
                  <X className="w-7 h-7" />
                </Button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 overflow-y-auto p-4">
                {navigationItems.map((category) => {
                  // 첫 번째 서브메뉴 항목 찾기 (folder가 아닌 첫 번째 항목)
                  const firstMenuItem = category.items.find(item => !item.isFolder);
                  const firstMenuPath = firstMenuItem?.path || "/";
                  
                  return (
                  <div key={category.label} className="mb-6">
                    <Link
                      to={firstMenuPath}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg ${category.bgColor} mb-2 hover:opacity-80 transition-opacity`}
                    >
                      {category.icon && <category.icon className="w-5 h-5" strokeWidth={1.5} />}
                      <span 
                        className={`font-semibold ${category.color} ${category.label === '채무조정' ? 'tracking-normal' : 'tracking-tight'}`} 
                        style={{ letterSpacing: category.label === '채무조정' ? '0' : '-0.02em' }}
                      >
                        {category.label}
                      </span>
                    </Link>
                    <div className="space-y-1 pl-2">
                      {category.items.map((item, idx) => (
                        item.isFolder ? (
                          <Collapsible key={item.label} className="space-y-1">
                            <CollapsibleTrigger className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${category.hoverBg} w-full`}>
                              <span className="text-lg">{item.emoji}</span>
                              <div className="flex flex-col flex-1 text-left">
                                <span className="font-medium text-sm tracking-tight" style={{ letterSpacing: item.label.includes('·') ? '-0.01em' : 'normal' }}>{item.label}</span>
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
                                      ? `${category.bgColor} ${category.color}`
                                      : category.hoverBg
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
                                ? `${category.bgColor} ${category.color}`
                                : category.hoverBg
                            }`}
                          >
                            <span className="text-lg">{item.emoji}</span>
                            <div className="flex flex-col">
                              <span className="font-medium text-sm tracking-tight" style={{ letterSpacing: item.label.includes('·') ? '-0.01em' : 'normal' }}>{item.label}</span>
                              <span className="text-xs text-muted-foreground">{item.description}</span>
                            </div>
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                  );
                })}
              </nav>

              {/* Mobile CTA */}
              <div className="p-4 border-t border-border">
                <Link to="/debt/test" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full btn-premium px-[18px] py-3 bg-gradient-to-r from-blue-200/80 to-purple-200/80 hover:from-blue-300/80 hover:to-purple-300/80 active:from-blue-400/85 active:to-purple-400/85 text-primary shadow-soft border border-blue-300/30 hover:text-primary/95">
                    <span className="relative z-10 flex items-center justify-center gap-3 font-bold">
                      🩺 <span>채무조정 무료 진단</span>
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