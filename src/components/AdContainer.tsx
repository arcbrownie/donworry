import { cn } from "@/lib/utils";

interface AdContainerProps {
  size?: "banner" | "rectangle" | "leaderboard";
  className?: string;
}

const sizeStyles = {
  banner: "w-full h-[100px]",
  rectangle: "w-[300px] h-[250px]",
  leaderboard: "w-full max-w-[728px] h-[90px]",
};

export function AdContainer({ size = "rectangle", className }: AdContainerProps) {
  return (
    <div className={cn(
      "ad-container mx-auto",
      sizeStyles[size],
      className
    )}>
      <span className="text-xs">광고 영역 ({size === "rectangle" ? "300x250" : size === "banner" ? "Banner" : "728x90"})</span>
    </div>
  );
}