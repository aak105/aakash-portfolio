
import { useState, useEffect } from "react";
import { Heart, Target, BookOpen, Mountain, Music, Coffee } from "lucide-react";
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
        setContent(data.content as unknown as AboutContent);
      } catch (error) {
        console.error('Error fetching about content:', error);
        // Updated fallback content
        setContent({
          title: "About Me",
          content: "I'm Aakash Sharma — a data and governance professional working at the intersection of public policy, technology, and social impact. Born and raised in a small town in Rajasthan, I've always believed that quiet, thoughtful systems can create real change. My journey started with computer science and led me through grassroots governance, rural management, and data analytics — shaping me into someone who builds with empathy, not just efficiency.",
          values: ["Clarity", "Impact", "Simplicity", "Sincerity", "Curiosity"],
          mission: "To design and deliver people-first data systems that improve public governance and create room for equity, trust, and transparency in social development."
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
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-slate-800 dark:text-slate-100 mb-6">
              {content?.title}
            </h2>
            <div className="w-24 h-px bg-slate-300 dark:bg-slate-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-6">
              {/* Personal Image */}
              <div className="relative mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop" 
                  alt="Governance and Technology" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                {content?.content}
              </p>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                Over the years, I've worked with district administrations, think tanks, and consulting firms — from managing citizen grievance portals in the Chief Secretary's Office to automating dashboards with Sattva's India Data Insights, and co-creating inclusive metadata tools as a Belongg AI fellow.
              </p>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                What ties my work together is a clear belief: <span className="font-medium italic">data should serve people, not just systems.</span> Whether I'm working with tribal communities, state governments, or public platforms — I focus on ethical data use, open systems, and inclusive design.
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
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-xl font-serif text-slate-800 dark:text-slate-100">
                      Mission
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {content?.mission}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-stone-50 to-amber-50 dark:from-stone-900/10 dark:to-amber-900/10 border-amber-200/50 dark:border-amber-800/50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    <h3 className="text-xl font-serif text-slate-800 dark:text-slate-100">
                      Vision
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    To make a significant and lasting contribution to the world of open and public data — building systems that are ethical, accessible, and impactful. I envision a future where public data is not just open, but actively used to drive meaningful change, especially for communities that have long been underserved or excluded.
                  </p>
                </CardContent>
              </Card>

              {/* Interests Section */}
              <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10 border-green-200/50 dark:border-green-800/50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Coffee className="w-6 h-6 text-green-600 dark:text-green-400" />
                    <h3 className="text-xl font-serif text-slate-800 dark:text-slate-100">
                      Beyond Work
                    </h3>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <Music className="w-8 h-8 text-purple-500" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">Music</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Mountain className="w-8 h-8 text-green-500" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">Mountains</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <BookOpen className="w-8 h-8 text-blue-500" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">Reading</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 italic font-serif text-center mt-4">
                    "Outside work, I find inspiration in music, mountains, and meaningful conversations."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
