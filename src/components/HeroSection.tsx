
import { useState, useEffect } from "react";
import { ChevronDown, Quote } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

interface HeroContent {
  title: string;
  subtitle: string;
  quote: string;
  cta: string;
}

const HeroSection = () => {
  const [content, setContent] = useState<HeroContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHeroContent = async () => {
      try {
        const { data, error } = await supabase
          .from('site_content')
          .select('content')
          .eq('section', 'hero')
          .single();

        if (error) throw error;
        setContent(data.content as HeroContent);
      } catch (error) {
        console.error('Error fetching hero content:', error);
        // Fallback content
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

  if (isLoading) {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-96 mb-4"></div>
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-64"></div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-transparent to-stone-100 dark:from-blue-900/20 dark:to-stone-900/20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Title */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-slate-800 dark:text-slate-100 leading-tight tracking-tight">
              {content?.title}
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
              {content?.subtitle}
            </p>
          </div>

          {/* Quote */}
          <div className="relative py-8">
            <Quote className="w-8 h-8 text-slate-400 dark:text-slate-500 mx-auto mb-4" />
            <blockquote className="text-base md:text-lg italic font-serif text-slate-700 dark:text-slate-200 max-w-2xl mx-auto">
              "{content?.quote}"
            </blockquote>
          </div>

          {/* CTA */}
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-slate-400 dark:text-slate-500" />
      </div>
    </section>
  );
};

export default HeroSection;
