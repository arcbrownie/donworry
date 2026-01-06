import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DebtTest from "./pages/debt/DebtTest";
import PartTimeCalculator from "./pages/cal/PartTimeCalculator";
import FreelancerCalculator from "./pages/cal/FreelancerCalculator";
import YouthTaxCalculator from "./pages/cal/YouthTaxCalculator";
import SoldierCalculator from "./pages/cal/SoldierCalculator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/debt/test" element={<DebtTest />} />
          <Route path="/cal/part-time" element={<PartTimeCalculator />} />
          <Route path="/cal/freelancer" element={<FreelancerCalculator />} />
          <Route path="/cal/youth-tax" element={<YouthTaxCalculator />} />
          <Route path="/cal/soldier" element={<SoldierCalculator />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
