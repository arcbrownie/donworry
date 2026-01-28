"use client";

import React from "react";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/ui/BlogCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { getContentsByCategory } from "@/lib/content";
import { PiggyBank, CreditCard, Scale } from "lucide-react";

const categoryInfo = {
  '재테크 · 절약': {
    label: '재테크 · 절약',
    icon: PiggyBank,
    color: 'text-category-life',
    bgColor: 'bg-category-life/10',
  },
  '금융 · 대출': {
    label: '금융 · 대출',
    icon: CreditCard,
    color: 'text-category-finance',
    bgColor: 'bg-category-finance/10',
  },
  '채무조정': {
    label: '채무조정',
    icon: Scale,
    color: 'text-category-debt',
    bgColor: 'bg-category-debt/10',
  },
};

export default function ContentPage() {
  const savingsContents = getContentsByCategory('재테크 · 절약');
  const financeContents = getContentsByCategory('금융 · 대출');
  const debtContents = getContentsByCategory('채무조정');

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            최신 콘텐츠
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            돈워리가 준비한 최신 금융 정보를 확인하세요
          </p>
        </div>
      </section>

      <section className="container py-16">
        <div className="space-y-16">
          {/* 재테크 · 절약 */}
          {savingsContents.length > 0 && (() => {
            const savingsInfo = categoryInfo['재테크 · 절약'];
            const SavingsIcon = savingsInfo.icon;
            return (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-12 h-12 rounded-xl ${savingsInfo.bgColor} flex items-center justify-center`}>
                  <SavingsIcon className={`w-6 h-6 ${savingsInfo.color}`} />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  재테크 · 절약
                </h2>
              </div>
              <div className="relative">
                <Carousel
                  opts={{
                    align: "start",
                    slidesToScroll: 1,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {savingsContents.map((content) => (
                      <CarouselItem key={content.path} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                        <BlogCard
                          title={content.title}
                          excerpt={content.excerpt}
                          emoji={content.emoji}
                          category={content.category}
                          path={content.path}
                          isPlaceholder={content.isPlaceholder}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {savingsContents.length > 3 && (
                    <>
                      <CarouselPrevious className="hidden md:flex -left-12 border-primary text-primary hover:bg-primary/10 hover:text-primary" />
                      <CarouselNext className="hidden md:flex -right-12 border-primary text-primary hover:bg-primary/10 hover:text-primary" />
                    </>
                  )}
                </Carousel>
              </div>
            </div>
            );
          })()}

          {/* 금융 · 대출 */}
          {financeContents.length > 0 && (() => {
            const financeInfo = categoryInfo['금융 · 대출'];
            const FinanceIcon = financeInfo.icon;
            return (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-12 h-12 rounded-xl ${financeInfo.bgColor} flex items-center justify-center`}>
                  <FinanceIcon className={`w-6 h-6 ${financeInfo.color}`} />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  금융 · 대출
                </h2>
              </div>
              <div className="relative">
                <Carousel
                  opts={{
                    align: "start",
                    slidesToScroll: 1,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {financeContents.map((content) => (
                      <CarouselItem key={content.path} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                        <BlogCard
                          title={content.title}
                          excerpt={content.excerpt}
                          emoji={content.emoji}
                          category={content.category}
                          path={content.path}
                          isPlaceholder={content.isPlaceholder}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {financeContents.length > 3 && (
                    <>
                      <CarouselPrevious className="hidden md:flex -left-12 border-primary text-primary hover:bg-primary/10 hover:text-primary" />
                      <CarouselNext className="hidden md:flex -right-12 border-primary text-primary hover:bg-primary/10 hover:text-primary" />
                    </>
                  )}
                </Carousel>
              </div>
            </div>
            );
          })()}

          {/* 채무조정 */}
          {debtContents.length > 0 && (() => {
            const debtInfo = categoryInfo['채무조정'];
            const DebtIcon = debtInfo.icon;
            return (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-12 h-12 rounded-xl ${debtInfo.bgColor} flex items-center justify-center`}>
                  <DebtIcon className={`w-6 h-6 ${debtInfo.color}`} />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  채무조정
                </h2>
              </div>
              <div className="relative">
                <Carousel
                  opts={{
                    align: "start",
                    slidesToScroll: 1,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {debtContents.map((content) => (
                      <CarouselItem key={content.path} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                        <BlogCard
                          title={content.title}
                          excerpt={content.excerpt}
                          emoji={content.emoji}
                          category={content.category}
                          path={content.path}
                          isPlaceholder={content.isPlaceholder}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {debtContents.length > 3 && (
                    <>
                      <CarouselPrevious className="hidden md:flex -left-12 border-primary text-primary hover:bg-primary/10 hover:text-primary" />
                      <CarouselNext className="hidden md:flex -right-12 border-primary text-primary hover:bg-primary/10 hover:text-primary" />
                    </>
                  )}
                </Carousel>
              </div>
            </div>
            );
          })()}
        </div>
      </section>

      <Footer />
    </div>
  );
}
