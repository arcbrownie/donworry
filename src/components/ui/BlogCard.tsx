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
    생활: "bg-emerald-100 text-emerald-700",
    금융: "bg-primary/10 text-primary",
    채무: "bg-secondary/10 text-secondary",
  };

  const CardContent = () => (
    <>
      {/* Thumbnail */}
      <div className="blog-card-thumbnail relative">
        <span className="text-5xl">{emoji}</span>
        {isPlaceholder && (
          <div className="absolute inset-0 bg-muted/50 flex items-center justify-center">
            <span className="text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
              콘텐츠 준비중
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[category] || "bg-muted text-muted-foreground"}`}>
            {category}
          </span>
        </div>
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {excerpt}
        </p>
        <div className="flex items-center text-sm text-primary font-medium">
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