import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import Index from "./pages/index";
import NotFound from "./pages/NotFound";
import { PortfolioDetail1 } from './pages/PortfolioDetail1';
import { PortfolioDetail2 } from './pages/PortfolioDetail2';
import { PortfolioDetail3 } from './pages/PortfolioDetail3';
import { PortfolioDetail4 } from './pages/PortfolioDetail4';
import { PortfolioDetail5 } from './pages/PortfolioDetail5';
import { PortfolioDetail6 } from './pages/PortfolioDetail6';
import { PortfolioDetail7 } from './pages/PortfolioDetail7';
import { PortfolioDetail8 } from './pages/PortfolioDetail8';
import { PortfolioDetail9 } from './pages/PortfolioDetail9';
import { PortfolioDetail10 } from './pages/PortfolioDetail10';
import { PortfolioDetail11 } from './pages/PortfolioDetail11';
import { PortfolioDetail12 } from './pages/PortfolioDetail12';  
import { Project1Detail } from './pages/Project1Detail';
import { Project2Detail } from './pages/Project2Detail';
import { Project3Detail } from './pages/Project3Detail';
import { Project4Detail } from './pages/Project4Detail';
import { Project5Detail } from './pages/Project5Detail';
import { Project6Detail } from './pages/Project6Detail';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects/1" element={<Project1Detail />} />
            <Route path="/projects/2" element={<Project2Detail />} />
            <Route path="/projects/3" element={<Project3Detail />} />
            <Route path="/projects/4" element={<Project4Detail />} />
            <Route path="/projects/5" element={<Project5Detail />} />
            <Route path="/projects/6" element={<Project6Detail />} />
            <Route path="/portfolio/1" element={<PortfolioDetail1 />} />
            <Route path="/portfolio/2" element={<PortfolioDetail2 />} />
            <Route path="/portfolio/3" element={<PortfolioDetail3 />} />
            <Route path="/portfolio/4" element={<PortfolioDetail4 />} />
            <Route path="/portfolio/5" element={<PortfolioDetail5 />} />
            <Route path="/portfolio/6" element={<PortfolioDetail6 />} />
            <Route path="/portfolio/7" element={<PortfolioDetail7 />} />
            <Route path="/portfolio/8" element={<PortfolioDetail8 />} />
            <Route path="/portfolio/9" element={<PortfolioDetail9 />} />
            <Route path="/portfolio/10" element={<PortfolioDetail10 />} />
            <Route path="/portfolio/11" element={<PortfolioDetail11 />} />
            <Route path="/portfolio/12" element={<PortfolioDetail12 />} />  
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
