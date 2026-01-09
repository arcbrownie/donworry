import { Link } from "react-router-dom";
import { ArrowRight, Calculator } from "lucide-react";

interface CalculatorWidgetProps {
  title: string;
  description: string;
  emoji: string;
  path: string;
  tag?: string;
  variant?: "life" | "finance" | "debt";
}

export default function CalculatorWidget({
  title,
  description,
  emoji,
  path,
  tag,
  variant = "finance",
}: CalculatorWidgetProps) {
  const variantStyles = {
    life: "category-card-life",
    finance: "category-card-finance",
    debt: "category-card-debt",
  };

  return (
    <Link
      to={path}
      className={`group block p-4 rounded-xl ${variantStyles[variant]} shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1`}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-background/80 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
          <span className="text-2xl">{emoji}</span>
        </div>
        <div className="flex-1 min-w-0">
          {tag && (
            <span className="inline-block text-[10px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-1.5">
              {tag}
            </span>
          )}
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm md:text-base">
            {title}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
            {description}
          </p>
        </div>
        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-3" />
      </div>
    </Link>
  );
}