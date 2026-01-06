import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CalculatorLayout } from "@/components/layout/CalculatorLayout";

const debtFeatures = [
  {
    path: "/debt/test",
    emoji: "🩺",
    title: "맞춤형 채무조정 진단",
    description: "연체 기간, 채무액, 소득을 입력하면 회생 vs 신속채무조정 중 나에게 맞는 방법을 추천해드려요.",
    tag: "자가진단",
  },
  {
    path: "/debt/guide",
    emoji: "📖",
    title: "채무조정 완벽 가이드",
    description: "개인회생, 개인파산, 신속채무조정의 차이점과 신청 방법을 쉽게 설명해드려요.",
    tag: "가이드",
  },
];

const blogPosts = [
  {
    emoji: "💡",
    title: "개인회생 vs 개인파산, 뭐가 다를까?",
    excerpt: "비슷해 보이지만 완전히 다른 두 제도. 나에게 맞는 선택은?",
  },
  {
    emoji: "📋",
    title: "신속채무조정 신청 전 체크리스트",
    excerpt: "준비해야 할 서류와 주의사항을 한눈에 정리했어요.",
  },
  {
    emoji: "🔍",
    title: "채무조정 후 신용점수 회복하기",
    excerpt: "조정 완료 후 신용을 다시 쌓는 현실적인 방법들.",
  },
];

export default function DebtHub() {
  return (
    <CalculatorLayout
      title="💙 채무조정 안내"
      description="빚 때문에 힘드시죠? 돈워리가 새 출발을 도와드릴게요."
      seoContent="개인회생, 개인파산, 신속채무조정 등 채무조정 제도에 대한 모든 정보를 쉽고 따뜻하게 안내해드립니다. 나에게 맞는 채무조정 방법을 찾아보세요."
    >
      {/* Main Features */}
      <div className="space-y-4">
        {debtFeatures.map((feature) => (
          <Link
            key={feature.path}
            to={feature.path}
            className="group therapy-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 block"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <span className="text-2xl">{feature.emoji}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-primary bg-accent px-2 py-0.5 rounded-full">
                    {feature.tag}
                  </span>
                </div>
                <h2 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {feature.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-4" />
            </div>
          </Link>
        ))}
      </div>

      {/* Blog Section */}
      <div className="therapy-card">
        <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <span>📝</span> 채무조정 이야기
        </h2>
        <div className="space-y-4">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-therapy-soft hover:bg-accent/50 transition-colors cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <span className="text-xl">{post.emoji}</span>
                <div>
                  <h3 className="font-medium text-foreground mb-1">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">
          더 많은 글이 곧 업데이트됩니다 ✨
        </p>
      </div>

      {/* CTA */}
      <div className="therapy-card text-center bg-gradient-to-br from-primary/5 to-therapy-soft">
        <span className="text-4xl mb-4 block">🤝</span>
        <h2 className="text-lg font-semibold text-foreground mb-2">
          혼자 고민하지 마세요
        </h2>
        <p className="text-muted-foreground mb-4">
          무료 상담을 통해 전문가의 도움을 받아보세요.
        </p>
        <Link
          to="/debt/test"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
        >
          무료 진단 시작하기 <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </CalculatorLayout>
  );
}
