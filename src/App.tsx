import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Category hub pages
import LifeHub from "./pages/life/LifeHub";
import FinanceHub from "./pages/finance/FinanceHub";

// Debt pages
import DebtHub from "./pages/debt/DebtHub";
import DebtTest from "./pages/debt/DebtTest";
import DebtGuide from "./pages/debt/DebtGuide";

// Calculator pages
import CalculatorHub from "./pages/cal/CalculatorHub";
import LifeCalculatorHub from "./pages/cal/LifeCalculatorHub";
import FinanceCalculatorHub from "./pages/cal/FinanceCalculatorHub";
import PartTimeCalculator from "./pages/cal/PartTimeCalculator";
import FreelancerCalculator from "./pages/cal/FreelancerCalculator";
import YouthTaxCalculator from "./pages/cal/YouthTaxCalculator";
import SoldierCalculator from "./pages/cal/SoldierCalculator";

// Legal pages
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import About from "./pages/legal/About";

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
          <Route path="/life" element={<LifeHub />} />
          <Route path="/finance" element={<FinanceHub />} />
          
          {/* Debt routes */}
          <Route path="/debt" element={<DebtHub />} />
          <Route path="/debt/test" element={<DebtTest />} />
          <Route path="/debt/guide" element={<DebtGuide />} />
          
          {/* Calculator routes */}
          <Route path="/cal" element={<CalculatorHub />} />
          <Route path="/cal/life" element={<LifeCalculatorHub />} />
          <Route path="/cal/finance" element={<FinanceCalculatorHub />} />
          <Route path="/cal/part-time" element={<PartTimeCalculator />} />
          <Route path="/cal/freelancer" element={<FreelancerCalculator />} />
          <Route path="/cal/youth-tax" element={<YouthTaxCalculator />} />
          <Route path="/cal/soldier" element={<SoldierCalculator />} />
          
          {/* Legal routes */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/about" element={<About />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
