
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/context/ThemeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutMe from "./pages/AboutMe";
import Privacy from "./pages/Privacy";
import FieldNotes from "./pages/FieldNotes";
import Chapter1 from "./pages/chapters/Chapter1";
import Chapter2 from "./pages/chapters/Chapter2";
import Chapter3 from "./pages/chapters/Chapter3";
import Chapter4 from "./pages/chapters/Chapter4";
import Chapter5 from "./pages/chapters/Chapter5";

const App = () => {
  // Create a new QueryClient instance inside the component
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ThemeProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/field-notes" element={<FieldNotes />} />
                <Route path="/field-notes/chapter-1" element={<Chapter1 />} />
                <Route path="/field-notes/chapter-2" element={<Chapter2 />} />
                <Route path="/field-notes/chapter-3" element={<Chapter3 />} />
                <Route path="/field-notes/chapter-4" element={<Chapter4 />} />
                <Route path="/field-notes/chapter-5" element={<Chapter5 />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Privacy />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
