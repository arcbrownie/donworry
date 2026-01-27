import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  emoji: string;
  category: string;
  path?: string;
  isPlaceholder?: boolean;
}

export default function BlogCard({
  title,
  excerpt,
  emoji,
  category,
  path = "#",
  isPlaceholder = false,
}: BlogCardProps) {
  const categoryColors: Record<string, string> = {
    생활: "bg-category-life/25 text-category-life",
    "재테크/절약": "bg-category-life/25 text-category-life",
    "재테크 · 절약": "bg-category-life/25 text-category-life",
    금융: "bg-category-finance/25 text-category-finance",
    "금융/대출": "bg-category-finance/25 text-category-finance",
    "금융 · 대출": "bg-category-finance/25 text-category-finance",
    채무조정: "bg-category-debt/25 text-category-debt",
    채무: "bg-category-debt/25 text-category-debt",
  };

  const categoryGradient: Record<string, string> = {
    생활: "group-hover:bg-gradient-to-br group-hover:from-category-life-light group-hover:to-card",
    "재테크/절약": "group-hover:bg-gradient-to-br group-hover:from-category-life-light group-hover:to-card",
    "재테크 · 절약": "group-hover:bg-gradient-to-br group-hover:from-category-life-light group-hover:to-card",
    금융: "group-hover:bg-gradient-to-br group-hover:from-category-finance-light group-hover:to-card",
    "금융/대출": "group-hover:bg-gradient-to-br group-hover:from-category-finance-light group-hover:to-card",
    "금융 · 대출": "group-hover:bg-gradient-to-br group-hover:from-category-finance-light group-hover:to-card",
    채무조정: "group-hover:bg-gradient-to-br group-hover:from-category-debt-light group-hover:to-card",
    채무: "group-hover:bg-gradient-to-br group-hover:from-category-debt-light group-hover:to-card",
  };

  const CardContent = () => (
    <>
      {/* Content */}
      <div className={`p-4 transition-all duration-300 h-full flex flex-col ${categoryGradient[category] || ""}`}>
        <div className="flex items-start gap-3 mb-3">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${categoryColors[category] || "bg-muted text-muted-foreground"}`}>
            <span className="text-2xl">{emoji}</span>
          </div>
          <div className="flex-1">
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full inline-block ${categoryColors[category] || "bg-muted text-muted-foreground"}`}>
              {category}
            </span>
            {isPlaceholder && (
              <div className="mt-2">
                <span className="text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded inline-block">
                  콘텐츠 준비중
                </span>
              </div>
            )}
            {!isPlaceholder && (
              <div className="mt-2 h-[24px]"></div>
            )}
          </div>
        </div>
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors text-base md:text-lg min-h-[3rem]">
          {title}
        </h3>
        <p className="text-base text-muted-foreground line-clamp-2 mb-3 min-h-[2.5rem]">
          {excerpt}
        </p>
        <div className="flex items-center text-sm text-primary font-medium mt-auto pt-1">
          자세히 보기
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </>
  );

  if (isPlaceholder) {
    return (
      <div className="blog-card group cursor-default opacity-70">
        <CardContent />
      </div>
    );
  }

  return (
    <Link to={path} className="blog-card group">
      <CardContent />
    </Link>
  );
}