
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RecommendedReading from "@/components/RecommendedReading";
import CVSection from "@/components/CVSection";
import PortfolioSection from "@/components/PortfolioSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";

/**
 * Index Component - Main Landing Page
 * 
 * This is the main landing page that orchestrates all sections of the portfolio.
 * Features:
 * - Dark/Light mode toggle (moved to bottom right)
 * - Animated background throughout the page
 * - Navigation between sections
 * - Responsive design with smooth transitions
 * - Proper spacing and visual hierarchy
 */
const Index = () => {
  // Theme state management
  const [darkMode, setDarkMode] = useState(false);

  /**
   * Effect to handle dark mode class application to document
   * Ensures theme persistence and proper CSS class management
   */
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  /**
   * Toggle theme handler
   * Switches between light and dark modes
   */
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark' : ''}`}>
      <Navigation />
      
      {/* Main Content with Animated Background */}
      <main className="relative bg-gradient-to-br from-slate-50 via-stone-50 to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/20 transition-colors duration-500">
        {/* Global Animated Background */}
        <AnimatedBackground variant="primary" />
        
        {/* Content Sections with Reduced Spacing */}
        <div className="relative z-10">
          <section id="home" className="min-h-screen">
            <HeroSection />
          </section>
          
          <section id="about" className="py-12">
            <AboutSection />
          </section>

          <section id="cv" className="py-12">
            <CVSection />
          </section>

          <section id="portfolio" className="py-12">
            <PortfolioSection />
          </section>

          <section id="blog" className="py-12">
            <BlogSection />
          </section>

          <section id="recommended-reading" className="py-12">
            <RecommendedReading />
          </section>

          <section id="contact" className="py-12">
            <ContactSection />
          </section>
        </div>
      </main>
      
      {/* Dark/Light Mode Toggle - Bottom Right Position */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 group shadow-lg hover:shadow-xl"
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
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
