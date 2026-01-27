import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

// Category hub pages - Lazy loaded
const SavingsHub = lazy(() => import("./pages/savings/SavingsHub"));
const SavingsGuide = lazy(() => import("./pages/savings/SavingsGuide"));
const FinanceHub = lazy(() => import("./pages/finance/FinanceHub"));
const FinanceGuide = lazy(() => import("./pages/finance/FinanceGuide"));

// Debt pages - Lazy loaded
const DebtHub = lazy(() => import("./pages/debt/DebtHub"));
const DebtTest = lazy(() => import("./pages/debt/DebtTest"));
const DebtGuide = lazy(() => import("./pages/debt/DebtGuide"));
const DebtGuideContent = lazy(() => import("./pages/debt/DebtGuideContent"));
const CreditRecoveryCommittee = lazy(() => import("./pages/debt/CreditRecoveryCommittee"));
const PersonalRehabilitationBankruptcy = lazy(() => import("./pages/debt/PersonalRehabilitationBankruptcy"));

// Content pages - Lazy loaded
const ContentHub = lazy(() => import("./pages/content/ContentHub"));
const PersonalRehabilitation2026 = lazy(() => import("./pages/content/PersonalRehabilitation2026"));
const WeeklyHolidayPayGuide = lazy(() => import("./pages/content/WeeklyHolidayPayGuide"));
const FirstLoanGuide2030 = lazy(() => import("./pages/content/FirstLoanGuide2030"));
const SocialBeginnerSalaryGuide = lazy(() => import("./pages/content/SocialBeginnerSalaryGuide"));
const OnePersonHouseholdSavingsDetailed = lazy(() => import("./pages/content/OnePersonHouseholdSavingsDetailed"));
const CreditCardVsCheckCard = lazy(() => import("./pages/content/CreditCardVsCheckCard"));
const InvestmentGuideForBeginners = lazy(() => import("./pages/content/InvestmentGuideForBeginners"));

// Calculator pages - Lazy loaded
const CalculatorHub = lazy(() => import("./pages/cal/CalculatorHub"));
const SavingsCalculatorHub = lazy(() => import("./pages/cal/SavingsCalculatorHub"));
const FinanceCalculatorHub = lazy(() => import("./pages/cal/FinanceCalculatorHub"));
const PartTimeCalculator = lazy(() => import("./pages/cal/PartTimeCalculator"));
const FreelancerCalculator = lazy(() => import("./pages/cal/FreelancerCalculator"));
const YouthTaxCalculator = lazy(() => import("./pages/cal/YouthTaxCalculator"));
const SoldierCalculator = lazy(() => import("./pages/cal/SoldierCalculator"));
const UnemploymentCalculator = lazy(() => import("./pages/cal/UnemploymentCalculator"));
const DebtReductionCalculator = lazy(() => import("./pages/cal/DebtReductionCalculator"));
const InterestSavingCalculator = lazy(() => import("./pages/cal/InterestSavingCalculator"));

// Expert pages - Lazy loaded
const ExpertsHub = lazy(() => import("./pages/experts/ExpertsHub"));
const ExpertDetail = lazy(() => import("./pages/experts/ExpertDetail"));

// Legal pages - Lazy loaded
const PrivacyPolicy = lazy(() => import("./pages/legal/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/legal/TermsOfService"));
const About = lazy(() => import("./pages/legal/About"));
const Disclaimer = lazy(() => import("./pages/legal/Disclaimer"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Category hub routes */}
            <Route path="/savings" element={<SavingsHub />} />
            <Route path="/savings/guide" element={<SavingsGuide />} />
            <Route path="/finance" element={<FinanceHub />} />
            <Route path="/finance/guide" element={<FinanceGuide />} />
            
            {/* Content routes */}
            <Route path="/content" element={<ContentHub />} />
            <Route path="/personal-rehabilitation-2026-changes" element={<PersonalRehabilitation2026 />} />
            <Route path="/blog/weekly-holiday-pay-guide" element={<WeeklyHolidayPayGuide />} />
            <Route path="/blog/first-loan-guide-2030" element={<FirstLoanGuide2030 />} />
            <Route path="/blog/social-beginner-salary-guide" element={<SocialBeginnerSalaryGuide />} />
            <Route path="/blog/one-person-household-savings-detailed" element={<OnePersonHouseholdSavingsDetailed />} />
            <Route path="/blog/credit-card-vs-check-card" element={<CreditCardVsCheckCard />} />
            <Route path="/blog/investment-guide-for-beginners" element={<InvestmentGuideForBeginners />} />
            
            {/* Expert routes */}
            <Route path="/experts" element={<ExpertsHub />} />
            <Route path="/experts/:id" element={<ExpertDetail />} />
            
            {/* Debt routes */}
            <Route path="/debt" element={<DebtHub />} />
            <Route path="/debt/personal-rehabilitation-bankruptcy" element={<PersonalRehabilitationBankruptcy />} />
            <Route path="/debt/credit-recovery-committee" element={<CreditRecoveryCommittee />} />
            <Route path="/debt/test" element={<DebtTest />} />
            <Route path="/debt/guide" element={<DebtGuide />} />
            <Route path="/debt/guide-content" element={<DebtGuideContent />} />
            
            {/* Calculator routes */}
            <Route path="/cal" element={<CalculatorHub />} />
            <Route path="/cal/life" element={<SavingsCalculatorHub />} />
            <Route path="/cal/finance" element={<FinanceCalculatorHub />} />
            <Route path="/cal/part-time" element={<PartTimeCalculator />} />
            <Route path="/cal/freelancer" element={<FreelancerCalculator />} />
            <Route path="/cal/youth-tax" element={<YouthTaxCalculator />} />
            <Route path="/cal/soldier" element={<SoldierCalculator />} />
            <Route path="/cal/unemployment" element={<UnemploymentCalculator />} />
            <Route path="/cal/debt-reduction" element={<DebtReductionCalculator />} />
            <Route path="/cal/interest-saving" element={<InterestSavingCalculator />} />
            
            {/* Legal routes */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/about" element={<About />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
