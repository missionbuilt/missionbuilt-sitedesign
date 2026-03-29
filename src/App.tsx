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
import FieldNotesBlog from "./pages/FieldNotesBlog";
import Resources from "./pages/Resources";
import InteractiveChecklist from "./pages/InteractiveChecklist";
import ChapterPage from "./pages/chapters/ChapterPage";

const queryClient = new QueryClient();

const App = () => {
  
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
                <Route path="/playbook" element={<FieldNotes />} />
                <Route path="/field-notes" element={<FieldNotesBlog />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/mission-alignment-checklist" element={<InteractiveChecklist />} />
                <Route path="/playbook/:chapterSlug" element={<ChapterPage />} />
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
