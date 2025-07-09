
import { useState, useEffect } from "react";
import { Calendar, Clock, ArrowRight, PenTool, Globe, Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image_url: string;
  published: boolean;
  tags: string[];
  reading_time: number;
  created_at: string;
}

const BlogSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Featured blog posts with enhanced content
  const featuredPosts = [
    {
      title: "Unifying India's Government Web Portals: Streamlining Development and Enhancing Accessibility",
      excerpt: "Exploring the challenges posed by the abundance of web portals in India and discussing the importance of a standardized framework for unified development.",
      content: "In the pursuit of digitalization and improved governance, the Indian government has launched numerous web portals and applications aimed at simplifying public services. However, the rapid proliferation of disparate web portals without a clear vision for interoperability is hindering their effectiveness...",
      tags: ["Digital Governance", "Policy", "Technology", "Accessibility"],
      readingTime: 8,
      date: "2023-06-15",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
      icon: <Globe className="w-5 h-5" />,
      linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7068137790332448768/"
    },
    {
      title: "Implementing Technology in Government Systems: A Delicate Balance for Success",
      excerpt: "A careful examination of how technology should be implemented in government systems, emphasizing the importance of maintaining continuity while embracing innovation.",
      content: "In today's rapidly evolving world, technology has the potential to revolutionize government systems and enhance public service delivery. However, implementing technology in the government sector requires careful consideration and strategic planning...",
      tags: ["Technology", "Government", "Implementation", "Policy"],
      readingTime: 6,
      date: "2023-07-20",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=300&fit=crop",
      icon: <PenTool className="w-5 h-5" />,
      linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7079273979156307968/"
    },
    {
      title: "Lost in Translation: The Cost of the 'Chinese Whisper' Effect on Public Welfare Policies",
      excerpt: "Examining how miscommunication in policy implementation leads to wasted resources and eroded public trust, and proposing solutions for effective policy communication.",
      content: "In today's fast-paced and complex world, the communication of public welfare policies from top to bottom is of paramount importance. However, what happens when the transmission of this information gets distorted or lost in translation...",
      tags: ["Policy Communication", "Governance", "Public Welfare", "Administration"],
      readingTime: 5,
      date: "2023-05-10",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=300&fit=crop",
      icon: <Users className="w-5 h-5" />,
      linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7056311826413682688/"
    }
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('published', true)
          .order('created_at', { ascending: false })
          .limit(6);

        if (error) throw error;
        setPosts(data || []);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <section id="blog" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="animate-pulse">
            <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-48 mb-8 mx-auto"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-64 bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-slate-800 dark:text-slate-100 mb-6">
            Thoughts & Insights
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Exploring the intersection of data, governance, and social impact through thoughtful analysis and real-world experiences
          </p>
          <div className="w-24 h-px bg-slate-300 dark:bg-slate-600 mx-auto mt-6"></div>
        </div>

        {/* Featured Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 text-white">
                  {post.icon}
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-serif text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                  {post.title}
                </CardTitle>
                
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readingTime} min</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={post.linkedinUrl} target="_blank" rel="noopener noreferrer" className="group">
                      Read on LinkedIn
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Database Posts (if any) */}
        {posts.length > 0 && (
          <div>
            <h3 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-100 mb-8 text-center">
              Latest Articles
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
                  {post.image_url && (
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image_url} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-serif text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </CardTitle>
                    
                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.created_at).toLocaleDateString()}</span>
                      </div>
                      {post.reading_time && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.reading_time} min</span>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                    
                    <div className="pt-2">
                      <Button variant="outline" size="sm">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
