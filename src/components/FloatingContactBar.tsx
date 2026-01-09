import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingContactBar() {
  return (
    <div className="floating-bar">
      <div className="flex gap-3">
        <Button 
          variant="outline" 
          className="flex-1 py-6 text-base rounded-xl border-2"
          asChild
        >
          <a href="tel:1588-0000">
            <Phone className="w-5 h-5 mr-2" />
            무료 전화 상담
          </a>
        </Button>
        <Button 
          className="flex-1 py-6 text-base rounded-xl bg-[#FEE500] text-[#3C1E1E] hover:bg-[#FDD835]"
          asChild
        >
          <a href="https://pf.kakao.com/_donworry" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 mr-2" />
            카톡 문의
          </a>
        </Button>
      </div>
    </div>
  );
}