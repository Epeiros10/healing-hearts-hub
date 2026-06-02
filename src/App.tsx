import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TalkToSomeone from "./pages/TalkToSomeone";
import Contact from "./pages/Contact";
import BookPascalEmergency from "./pages/BookPascalEmergency";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Quiz from "./pages/Quiz";
import ShouldITextMyEx from "./pages/ShouldITextMyEx";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/CookieConsent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/talk" element={<TalkToSomeone />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book/pascal-emergency" element={<BookPascalEmergency />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/should-i-text-my-ex" element={<ShouldITextMyEx />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
