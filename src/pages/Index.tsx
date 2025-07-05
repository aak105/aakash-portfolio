
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import HeroSection from "@/components/HeroSection";
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
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* Dark/Light Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group"
      >
        {darkMode ? (
          <Sun className="w-5 h-5 text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
        ) : (
          <Moon className="w-5 h-5 text-slate-600 group-hover:rotate-12 transition-transform duration-300" />
        )}
      </button>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 transition-colors duration-500">
        <HeroSection />
        <CVSection />
        <PortfolioSection />
        <BlogSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
