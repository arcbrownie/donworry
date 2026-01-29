"use client";

import Link from "next/link";

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

  const tagStyles = {
    life: "text-category-life bg-category-life/25",
    finance: "text-category-finance bg-category-finance/25",
    debt: "text-category-debt bg-category-debt/25",
  };

  return (
    <Link
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block p-4 rounded-xl ${variantStyles[variant]} shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1`}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-background/80 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
          <span className="text-2xl">{emoji}</span>
        </div>
        <div className="flex-1 min-w-0">
          {tag && (
            <span className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded-full mb-1.5 ${tagStyles[variant]}`}>
              {tag}
            </span>
          )}
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-base md:text-lg">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}