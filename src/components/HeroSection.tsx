
import { useState, useEffect } from "react";
import { ChevronDown, Quote, Database, BarChart3, Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";

interface HeroContent {
  title: string;
  subtitle: string;
  quote: string;
  cta: string;
}

/**
 * HeroSection Component
 * 
 * Main landing section with animated background, dynamic content from Supabase,
 * and key statistics. Features clean design without profile images.
 */
const HeroSection = () => {
  // State management for dynamic content
  const [content, setContent] = useState<HeroContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Fetch hero content from Supabase
   * Includes fallback content for reliability
   */
  useEffect(() => {
    const fetchHeroContent = async () => {
      try {
        const { data, error } = await supabase
          .from('site_content')
          .select('content')
          .eq('section', 'hero')
          .single();

        if (error) throw error;
        setContent(data.content as unknown as HeroContent);
      } catch (error) {
        console.error('Error fetching hero content:', error);
        // Fallback content for graceful degradation
        setContent({
          title: "Solving Public Problems with Data, Design, and Grit",
          subtitle: "I'm Aakash Sharma – a technologist-turned-governance consultant blending data systems, AI tools, and policy to drive change on the ground.",
          quote: "Here's someone who cares deeply, works quietly, thinks structurally, and builds for people.",
          cta: "Let's build better systems together"
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeroContent();
  }, []);

  // Loading state with skeleton UI
  if (isLoading) {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <AnimatedBackground variant="primary" />
        <div className="animate-pulse relative z-10">
          <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-96 mb-4"></div>
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-64"></div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground variant="primary" />
      
      {/* Background Icons - Enhanced with better positioning */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-20 animate-pulse">
          <Database className="w-16 h-16 text-blue-300 dark:text-blue-600" />
        </div>
        <div className="absolute top-40 right-32 animate-pulse delay-1000">
          <BarChart3 className="w-12 h-12 text-green-300 dark:text-green-600" />
        </div>
        <div className="absolute bottom-40 left-40 animate-pulse delay-2000">
          <Users className="w-14 h-14 text-purple-300 dark:text-purple-600" />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Main Title and Subtitle */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-slate-800 dark:text-slate-100 leading-tight tracking-tight">
              {content?.title}
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
              {content?.subtitle}
            </p>
          </div>

          {/* Quote Section with Enhanced Styling */}
          <div className="relative py-8">
            <Quote className="w-8 h-8 text-blue-400 dark:text-blue-500 mx-auto mb-4" />
            <blockquote className="text-base md:text-lg italic font-serif text-slate-700 dark:text-slate-200 max-w-2xl mx-auto">
              "{content?.quote}"
            </blockquote>
          </div>

          {/* Statistics Section - Key Performance Metrics */}
          <div className="grid grid-cols-3 gap-8 py-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400 mb-2">80+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Data Assets</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">1000+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Datasets Curated</div>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-slate-800 hover:bg-slate-700 dark:bg-slate-100 dark:hover:bg-white dark:text-slate-900 text-white px-8 py-3 text-base font-medium transition-all duration-300 rounded-full shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {content?.cta}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-slate-400 dark:text-slate-500" />
      </div>
    </section>
  );
};

export default HeroSection;
