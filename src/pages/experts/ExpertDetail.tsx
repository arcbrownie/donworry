import { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { setCanonicalTag } from "@/lib/utils";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import { AuthorCard } from "@/components/ui/AuthorCard";
import { Badge } from "@/components/ui/badge";
import { getExpertById, expertArticles } from "@/lib/experts";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/ui/BlogCard";

export default function ExpertDetail() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const expert = id ? getExpertById(id) : undefined;

  useEffect(() => {
    if (expert) {
      setCanonicalTag(location.pathname);
      document.title = `${expert.name} ${expert.title} | 돈워리 전문가`;
    }
  }, [expert, location.pathname]);

  if (!expert) {
    return (
      <div className="min-h-screen bg-background">
        <MainNavigation />
        <section className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">전문가를 찾을 수 없습니다</h1>
          <Link to="/experts">
            <Button>전문가 목록으로 돌아가기</Button>
          </Link>
        </section>
        <Footer />
      </div>
    );
  }

  const relatedArticles = expertArticles[expert.id] || [];

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="container">
          <Link to="/experts">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              전문가 목록으로
            </Button>
          </Link>
          
          <AuthorCard expert={expert} showFullInfo={true} />
        </div>
      </section>

      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">상세 정보</h2>
          
          <div className="space-y-6">
            {expert.intro && (
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-foreground leading-relaxed text-lg italic">
                  "{expert.intro}"
                </p>
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">소개</h3>
              <p className="text-muted-foreground leading-relaxed">
                {expert.bio}
              </p>
            </div>

            {expert.specialty && (
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">전문 분야</h3>
                <div className="flex flex-wrap gap-2">
                  {expert.specialty.split(', ').map((item, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-sm bg-primary/10 text-primary border-primary/20 py-2 px-3"
                    >
                      {item.trim()}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {relatedArticles.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  작성한 글
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {relatedArticles.map((articlePath) => (
                    <BlogCard
                      key={articlePath}
                      title="관련 글"
                      excerpt="전문가가 작성한 글을 확인하세요"
                      emoji="📝"
                      category="content"
                      path={articlePath}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
