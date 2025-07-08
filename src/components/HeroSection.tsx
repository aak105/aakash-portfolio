
import { useState, useEffect } from "react";
import { ChevronDown, Quote, Database, BarChart3, Users } from "lucide-react";

interface HeroContent {
  title: string;
  subtitle: string;
  quote: string;
  cta: string;
}

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const content: HeroContent = {
    title: "Solving Public Problems with Data, Design, and Grit",
    subtitle: "I'm Aakash Sharma – a technologist-turned-governance consultant blending data systems, AI tools, and policy to drive change on the ground.",
    quote: "You can't manage what you don't measure",
    cta: "Let's build better systems together"
  };

  if (isLoading) {
    return (
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="animate-pulse relative z-10 text-center">
          <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-96 mb-4 mx-auto"></div>
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-64 mx-auto"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Icons */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-32 left-20 animate-pulse">
          <Database className="w-16 h-16 text-blue-300 dark:text-blue-600" />
        </div>
        <div className="absolute top-52 right-32 animate-pulse delay-1000">
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
              {content.title}
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
              {content.subtitle}
            </p>
          </div>

          {/* Quote Section */}
          <div className="relative py-8">
            <Quote className="w-8 h-8 text-blue-400 dark:text-blue-500 mx-auto mb-4" />
            <blockquote className="text-base md:text-lg italic font-serif text-slate-700 dark:text-slate-200 max-w-2xl mx-auto">
              "You can't manage what you don't measure"
            </blockquote>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">- Peter Drucker</p>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-3 gap-8 py-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-blue-600 dark:text-blue-400">Years of Experience</span> across government, consulting, and grassroots programs
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400 mb-2">30+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-green-600 dark:text-green-400">Total Projects Executed</span> in public sector and social impact
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">100+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-purple-600 dark:text-purple-400">Government Schemes Worked On</span> across 30+ departments
              </div>
            </div>
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
