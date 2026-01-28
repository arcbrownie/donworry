"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import { AuthorCard } from "@/components/ui/AuthorCard";
import { Badge } from "@/components/ui/badge";
import { getExpertById, getExpertArticles } from "@/lib/experts";
import { ArrowLeft, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/ui/BlogCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

export default function ExpertDetail() {
  const params = useParams();
  const id = params?.id as string | undefined;
  const expert = id ? getExpertById(id) : undefined;
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());

    api.on("select", () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    });
  }, [api]);

  if (!expert) {
    return (
      <div className="min-h-screen bg-background">
        <MainNavigation />
        <section className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">자문단을 찾을 수 없습니다</h1>
          <Link href="/experts">
            <Button>자문단 목록으로 돌아가기</Button>
          </Link>
        </section>
        <Footer />
      </div>
    );
  }

  const relatedArticles = expert ? getExpertArticles(expert.id) : [];

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="container">
          <Link href="/experts">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              자문단 목록으로
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
                <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  작성한 글
                </h3>
                <div className="relative">
                  <Carousel
                    opts={{
                      align: "start",
                      slidesToScroll: 1,
                    }}
                    setApi={setApi}
                    className="w-full"
                  >
                    <CarouselContent className="-ml-2 md:-ml-4">
                      {relatedArticles.map((article, index) => (
                        <CarouselItem key={article.path} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 h-full">
                          <div className="h-full">
                            <BlogCard
                              title={article.title}
                              excerpt={article.excerpt}
                              emoji={article.emoji}
                              category={article.category}
                              path={article.path}
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {relatedArticles.length > 1 && (
                      <>
                        <CarouselPrevious className="hidden md:flex -left-12 border-primary text-primary hover:bg-primary/10 hover:text-primary" />
                        <CarouselNext className="hidden md:flex -right-12 border-primary text-primary hover:bg-primary/10 hover:text-primary" />
                        {/* Mobile Navigation */}
                        <div className="flex justify-center gap-2 mt-4 md:hidden">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 border-primary text-primary hover:bg-primary/10"
                            disabled={!canScrollPrev}
                            onClick={() => api?.scrollPrev()}
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 border-primary text-primary hover:bg-primary/10"
                            disabled={!canScrollNext}
                            onClick={() => api?.scrollNext()}
                          >
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </>
                    )}
                  </Carousel>
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
