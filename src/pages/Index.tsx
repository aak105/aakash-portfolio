
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CVSection from "@/components/CVSection";
import PortfolioSection from "@/components/PortfolioSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="bg-gradient-to-br from-slate-50 via-stone-50 to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/20 transition-colors duration-500">
        <HeroSection />
        <AboutSection />
        <CVSection />
        <PortfolioSection />
        <BlogSection />
        <ContactSection />
      </main>

      {/* Dark/Light Mode Toggle - Moved to bottom right */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 group shadow-lg"
      >
        {darkMode ? (
          <Sun className="w-5 h-5 text-amber-500 group-hover:rotate-12 transition-transform duration-300" />
        ) : (
          <Moon className="w-5 h-5 text-slate-600 group-hover:rotate-12 transition-transform duration-300" />
        )}
      </button>
    </div>
  );
};

export default Index;
