import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function MobileFloatingCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 bg-gradient-to-t from-background via-background to-transparent">
      <Link
        to="/debt/test"
        className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold text-lg shadow-xl hover:from-orange-600 hover:to-orange-500 transition-all"
      >
        <span className="text-xl">⏱️</span>
        30초 내 채무 진단하기
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  );
}
