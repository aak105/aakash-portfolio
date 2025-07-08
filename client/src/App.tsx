
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Router, Route } from "wouter";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import DataAssets from "./pages/DataAssets";
import NotFound from "./pages/NotFound";



const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Route path="/" component={Index} />
        <Route path="/admin" component={Admin} />
        <Route path="/data-assets" component={DataAssets} />
        <Route path="/aakash-portfolio/data-assets" component={DataAssets} />
        <Route component={NotFound} />
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
