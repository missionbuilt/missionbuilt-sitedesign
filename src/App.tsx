import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Index from "./pages/Index";
import AboutMe from "./pages/AboutMe";
import Training from "./pages/Training";
import Chapters from "./pages/Chapters";
import Log from "./pages/Log";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "@/context/ThemeContext";
import LogoDownload from "./pages/LogoDownload";

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/traininglogs" element={<Training />} />
              <Route path="/chapters" element={<Chapters />} />
              <Route path="/log/:id" element={<Log />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/logo-download" element={<LogoDownload />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
          <Toaster />
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

const queryClient = new QueryClient();

export default App;
