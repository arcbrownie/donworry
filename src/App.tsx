import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Category hub pages
import SavingsHub from "./pages/savings/SavingsHub";
import SavingsGuide from "./pages/savings/SavingsGuide";
import FinanceHub from "./pages/finance/FinanceHub";
import FinanceGuide from "./pages/finance/FinanceGuide";

// Debt pages
import DebtHub from "./pages/debt/DebtHub";
import DebtTest from "./pages/debt/DebtTest";
import DebtGuide from "./pages/debt/DebtGuide";
import DebtGuideContent from "./pages/debt/DebtGuideContent";
import CreditRecoveryCommittee from "./pages/debt/CreditRecoveryCommittee";
import PersonalRehabilitationBankruptcy from "./pages/debt/PersonalRehabilitationBankruptcy";

// Content pages
import ContentHub from "./pages/content/ContentHub";
import PersonalRehabilitation2026 from "./pages/content/PersonalRehabilitation2026";
import WeeklyHolidayPayGuide from "./pages/content/WeeklyHolidayPayGuide";
import FirstLoanGuide2030 from "./pages/content/FirstLoanGuide2030";
import SocialBeginnerSalaryGuide from "./pages/content/SocialBeginnerSalaryGuide";
import OnePersonHouseholdSavingsDetailed from "./pages/content/OnePersonHouseholdSavingsDetailed";

// Calculator pages
import CalculatorHub from "./pages/cal/CalculatorHub";
import SavingsCalculatorHub from "./pages/cal/SavingsCalculatorHub";
import FinanceCalculatorHub from "./pages/cal/FinanceCalculatorHub";
import PartTimeCalculator from "./pages/cal/PartTimeCalculator";
import FreelancerCalculator from "./pages/cal/FreelancerCalculator";
import YouthTaxCalculator from "./pages/cal/YouthTaxCalculator";
import SoldierCalculator from "./pages/cal/SoldierCalculator";
import UnemploymentCalculator from "./pages/cal/UnemploymentCalculator";
import DebtReductionCalculator from "./pages/cal/DebtReductionCalculator";
import InterestSavingCalculator from "./pages/cal/InterestSavingCalculator";

// Legal pages
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import About from "./pages/legal/About";
import Disclaimer from "./pages/legal/Disclaimer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
