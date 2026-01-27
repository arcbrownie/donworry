"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { experts, getExpertsByCategory } from "@/lib/experts";
import { PiggyBank, CreditCard, Scale, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const categoryInfo = {
  savings: {
    label: '재테크 · 절약',
    icon: PiggyBank,
    color: 'text-category-life',
    bgColor: 'bg-category-life/10',
  },
  finance: {
    label: '금융 · 대출',
    icon: CreditCard,
    color: 'text-category-finance',
    bgColor: 'bg-category-finance/10',
  },
  debt: {
    label: '채무조정',
    icon: Scale,
    color: 'text-category-debt',
    bgColor: 'bg-category-debt/10',
  },
};

export default function ExpertsHub() {
  const [carouselApis, setCarouselApis] = useState<Record<string, CarouselApi>>({});
  const [canScrollStates, setCanScrollStates] = useState<Record<string, { prev: boolean; next: boolean }>>({});

  const handleCarouselApi = useCallback((category: string, api: CarouselApi | undefined) => {
    if (api) {
      setCarouselApis(prev => ({ ...prev, [category]: api }));
    }
  }, []);

  // 각 카테고리별 Carousel API 상태 업데이트
  useEffect(() => {
    const cleanupFunctions: (() => void)[] = [];
    
    Object.entries(carouselApis).forEach(([category, api]) => {
      if (api) {
        const updateScrollState = () => {
          setCanScrollStates(prev => ({
            ...prev,
            [category]: {
              prev: api.canScrollPrev(),
              next: api.canScrollNext(),
            },
          }));
        };
        
        updateScrollState();
        api.on("select", updateScrollState);
        
        cleanupFunctions.push(() => {
          api.off("select", updateScrollState);
        });
      }
    });
    
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, [carouselApis]);

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            💼 돈워리 전문가 소개
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            신뢰할 수 있는 금융 정보를 제공하는 전문가들입니다
          </p>
        </div>
      </section>

      <section className="container py-16">
        <div className="space-y-16">
          {(['savings', 'finance', 'debt'] as const).map((category) => {
            const categoryExperts = getExpertsByCategory(category);
            const info = categoryInfo[category];
            const Icon = info.icon;

            return (
              <div key={category}>
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-12 h-12 rounded-xl ${info.bgColor} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {info.label} 전문가
                  </h2>
                </div>

                {categoryExperts.length > 0 && (
                  <div className="relative">
                    <Carousel
                      opts={{
                        align: "start",
                        slidesToScroll: 1,
                      }}
                      setApi={(api) => handleCarouselApi(category, api)}
                      className="w-full"
                    >
                      <CarouselContent className="-ml-2 md:-ml-4">
                        {categoryExperts.map((expert) => {
                          const initials = expert.name
                            .split(' ')
                            .map(n => n[0])
                            .join('')
                            .toUpperCase()
                            .slice(0, 2);

                          return (
                            <CarouselItem key={expert.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 h-full">
                              <Link href={`/experts/${expert.id}`} className="h-full block">
                                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                                  <div className="flex flex-col items-center text-center">
                                    <Avatar className="w-20 h-20 mb-4 border-2 border-primary/30">
                                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-bold text-xl">
                                        {initials}
                                      </AvatarFallback>
                                    </Avatar>

                                    <h3 className="text-lg font-bold text-foreground mb-1">
                                      {expert.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground font-medium mb-3">
                                      {expert.title}
                                    </p>
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                                      {expert.bio}
                                    </p>

                                    {expert.specialty && (
                                      <div className="flex flex-wrap gap-1 justify-center">
                                        {expert.specialty.split(', ').map((item, index) => (
                                          <Badge
                                            key={index}
                                            variant="secondary"
                                            className="text-xs bg-primary/10 text-primary border-primary/20"
                                          >
                                            {item.trim()}
                                          </Badge>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                </Card>
                              </Link>
                            </CarouselItem>
                          );
                        })}
                      </CarouselContent>
                      {categoryExperts.length > 1 && (
                        <>
                          <CarouselPrevious className="hidden md:flex -left-12 border-primary text-primary hover:bg-primary/10 hover:text-primary" />
                          <CarouselNext className="hidden md:flex -right-12 border-primary text-primary hover:bg-primary/10 hover:text-primary" />
                          {/* Mobile Navigation */}
                          <div className="flex justify-center gap-2 mt-4 md:hidden">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 border-primary text-primary hover:bg-primary/10"
                              disabled={!canScrollStates[category]?.prev}
                              onClick={() => carouselApis[category]?.scrollPrev()}
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 border-primary text-primary hover:bg-primary/10"
                              disabled={!canScrollStates[category]?.next}
                              onClick={() => carouselApis[category]?.scrollNext()}
                            >
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </>
                      )}
                    </Carousel>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
