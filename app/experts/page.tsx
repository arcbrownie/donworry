"use client";

import React from "react";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { getExpertsByCategory } from "@/lib/experts";
import { PiggyBank, CreditCard, Scale } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            💼 돈워리 자문단 소개
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            신뢰할 수 있는 금융 정보를 제공하는 자문단입니다
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
                    {info.label} 자문단
                  </h2>
                </div>

                {categoryExperts.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categoryExperts.slice(0, 3).map((expert) => {
                      const initials = expert.name
                        .split(' ')
                        .map(n => n[0])
                        .join('')
                        .toUpperCase()
                        .slice(0, 2);

                      return (
                        <Card key={expert.id} className="p-6 hover:shadow-lg transition-shadow h-full">
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="w-20 h-20 mb-4 border-2 border-primary/30">
                              {expert.image && (
                                <AvatarImage src={expert.image} alt={expert.name} />
                              )}
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
                      );
                    })}
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
