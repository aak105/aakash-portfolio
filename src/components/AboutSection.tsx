
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
        setContent(data.content as unknown as AboutContent);
      } catch (error) {
        console.error('Error fetching about content:', error);
        // Updated fallback content based on the user's requirements
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
                  <h3 className="text-xl font-serif text-slate-800 dark:text-slate-100 mb-4">
                    Mission
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {content?.mission}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-stone-50 to-amber-50 dark:from-stone-900/10 dark:to-amber-900/10 border-amber-200/50 dark:border-amber-800/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-serif text-slate-800 dark:text-slate-100 mb-4">
                    Vision
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    To make a significant and lasting contribution to the world of open and public data — building systems that are ethical, accessible, and impactful. I envision a future where public data is not just open, but actively used to drive meaningful change, especially for communities that have long been underserved or excluded.
                  </p>
                </CardContent>
              </Card>

              <div className="text-center">
                <blockquote className="text-sm text-slate-500 dark:text-slate-400 italic font-serif">
                  "Outside work, I find inspiration in music, mountains, and meaningful conversations."
                </blockquote>
              </div>
            </div>
          </div>

          {/* Books Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-serif text-slate-800 dark:text-slate-100 mb-8 text-center">
              Books That Inspired Me
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Mastering the Data Paradox",
                  author: "Nitin Seth",
                  description: "A pragmatic guide for navigating the overload and underuse of data in the AI era.",
                  goodreads: "#",
                  amazon: "#"
                },
                {
                  title: "Homo Deus: A Brief History of Tomorrow",
                  author: "Yuval Noah Harari",
                  description: "An exploration of humanity's future shaped by data, algorithms, and human desires.",
                  goodreads: "#",
                  amazon: "#"
                },
                {
                  title: "I Too Had a Dream",
                  author: "Verghese Kurien",
                  description: "An inspiring memoir on cooperative action, systems thinking, and rural transformation.",
                  goodreads: "#",
                  amazon: "#"
                },
                {
                  title: "World Development Report 2021: Data for Better Lives",
                  author: "World Bank",
                  description: "A foundational document exploring how public data can be responsibly used for development and inclusion.",
                  goodreads: "#",
                  amazon: "#"
                },
                {
                  title: "The Third Way: India's Revolutionary Approach to Data",
                  author: "Rahul Matthan",
                  description: "A compelling framework for India's distinct path in data governance, balancing innovation and public interest.",
                  goodreads: "#",
                  amazon: "#"
                },
                {
                  title: "The Emperor's Mirror",
                  author: "Dr. N. Bhaskaran Rao",
                  description: "A powerful critique of media narratives and their influence on perception, policy, and democratic discourse.",
                  goodreads: "#",
                  amazon: "#"
                }
              ].map((book, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-serif font-medium text-slate-800 dark:text-slate-100 mb-1">
                      {book.title}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                      {book.author}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {book.description}
                    </p>
                    <div className="flex gap-2 text-xs">
                      <a href={book.goodreads} className="text-blue-600 dark:text-blue-400 hover:underline">
                        🔗 Goodreads
                      </a>
                      <a href={book.amazon} className="text-blue-600 dark:text-blue-400 hover:underline">
                        🛒 Amazon
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
