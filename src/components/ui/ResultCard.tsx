import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ResultCardProps {
  title: string;
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "info";
  className?: string;
}

const variantStyles = {
  default: "bg-card border-border/50",
  success: "bg-success/10 border-success/30",
  warning: "bg-warning/10 border-warning/30",
  info: "bg-accent border-accent-foreground/20",
};

export function ResultCard({ title, children, variant = "default", className }: ResultCardProps) {
  return (
    <div className={cn(
      "rounded-2xl border p-6 shadow-card animate-slide-up",
      variantStyles[variant],
      className
    )}>
      <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
      {children}
    </div>
  );
}

interface ResultItemProps {
  label: string;
  value: string | number;
  highlight?: boolean;
  size?: "sm" | "md" | "lg";
}

export function ResultItem({ label, value, highlight = false, size = "md" }: ResultItemProps) {
  const sizeStyles = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl font-bold",
  };

  return (
    <div className="flex justify-between items-center py-2 border-b border-border/30 last:border-0">
      <span className="text-muted-foreground">{label}</span>
      <span className={cn(
        sizeStyles[size],
        highlight ? "text-primary font-semibold" : "text-foreground"
      )}>
        {typeof value === "number" ? value.toLocaleString("ko-KR") : value}
      </span>
    </div>
  );
}
