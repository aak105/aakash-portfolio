
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AboutContent {
  title: string;
  content: string;
  values: string[];
  mission: string;
}

const AboutSection = () => {
  const [content, setContent] = useState<AboutContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAboutContent = async () => {
      try {
        const { data, error } = await supabase
          .from('site_content')
          .select('content')
          .eq('section', 'about')
          .single();

        if (error) throw error;
        setContent(data.content as AboutContent);
      } catch (error) {
        console.error('Error fetching about content:', error);
        // Fallback content
        setContent({
          title: "About Me",
          content: "I work at the intersection of data, governance, and social impact, bringing a small-town, grounded perspective to complex public challenges.",
          values: ["Clarity", "Impact", "Simplicity", "Sincerity", "Curiosity"],
          mission: "To leverage ethical technology and data-driven insights for meaningful social change"
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchAboutContent();
  }, []);

  if (isLoading) {
    return (
      <section id="about" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="animate-pulse max-w-4xl mx-auto">
            <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-48 mb-8 mx-auto"></div>
            <div className="space-y-4">
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-slate-800 dark:text-slate-100 mb-6">
              {content?.title}
            </h2>
            <div className="w-24 h-px bg-slate-300 dark:bg-slate-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                {content?.content}
              </p>
              
              <Card className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-serif text-slate-800 dark:text-slate-100 mb-4">
                    Core Values
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {content?.values.map((value, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600"
                      >
                        {value}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-blue-50 to-stone-50 dark:from-blue-900/10 dark:to-stone-900/10 border-blue-200/50 dark:border-blue-800/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-serif text-slate-800 dark:text-slate-100 mb-4">
                    Mission
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed italic">
                    {content?.mission}
                  </p>
                </CardContent>
              </Card>

              <div className="text-center">
                <blockquote className="text-sm text-slate-500 dark:text-slate-400 italic font-serif">
                  "Small-town roots, systems thinking, global impact"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
