
import { useState, useEffect } from "react";
import { Calendar, Clock, ArrowRight, PenTool, Globe, Users, Eye } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BlogModal from "./BlogModal";

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
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadHere = (post: any) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  // Featured blog posts with enhanced content
  const featuredPosts = [
    {
      title: "Unifying India's Government Web Portals: Streamlining Development and Enhancing Accessibility",
      excerpt: "Exploring the challenges posed by the abundance of web portals in India and discussing the importance of a standardized framework for unified development.",
      content: `Introduction:
In the pursuit of digitalization and improved governance, the Indian government has launched numerous web portals and applications aimed at simplifying public services. However, the rapid proliferation of disparate web portals without a clear vision for interoperability is hindering their effectiveness. In this post, I delve into the challenges posed by the abundance of web portals in India, explore the importance of a standardized framework, and discuss the benefits of unified development to enhance accessibility and streamline the development process.

The Challenges of Multiple Web Portals:
The current landscape of numerous web portals operating independently creates isolated silos of information and services. This fragmented approach poses a significant challenge for citizens seeking different services, as they must navigate through a multitude of portals, leading to confusion and frustration. To truly simplify access to government services, it is crucial to address the lack of interoperability among these portals.

To ensure successful adoption, it is essential to consider the needs of the end-users. Many citizens may not possess extensive technical proficiency or have reliable internet access. The complexity and diversity of portals act as significant barriers for users, impeding their ability to access vital services.

The Need for a Framework:
To overcome the challenges posed by multiple web portals, a comprehensive framework or standardized guidelines are necessary. Such a framework should prioritize interoperability, allowing for seamless integration and data sharing between portals. By adopting a unified approach, we can minimize redundant efforts, allocate resources more efficiently, and expedite the development process.

Benefits of Interoperability:
Interoperability among web portals brings several benefits. Firstly, it enhances the user experience by providing a single access point for multiple services. This simplifies the process for citizens, reducing frustration and improving accessibility. Secondly, it enables efficient data exchange between different government departments, facilitating informed decision-making and policy formulation. Moreover, interoperability encourages innovation, as developers can build upon existing infrastructure and develop value-added services.

The Way Forward:
To pave the way for successful future web portal initiatives, collaboration among government agencies and the adoption of interoperable standards are crucial. Establishing a centralized body responsible for formulating and implementing guidelines for web portal development can drive the standardization process. This body could provide a standardized technology stack, design principles, and security protocols, ensuring consistency and ease of integration across portals.`,
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
      content: `Introduction

In today's rapidly evolving world, technology has the potential to revolutionize government systems and enhance public service delivery. However, implementing technology in the government sector requires careful consideration and strategic planning. Simply replacing old processes with technological solutions without ensuring a smooth transition can lead to system failures and hinder public trust. In countries like India, where digital infrastructure is still developing and technological literacy varies, a cautious approach becomes even more crucial. This article explores the importance of balancing technological advancements with the need to maintain the integrity and continuity of government systems.

Understanding Technology as an Enabler

It is vital to recognize that technology is not a cure-all solution for all the issues faced by government systems. Instead, it should be viewed as an enabler—a tool that can enhance efficiency, transparency, and accessibility. By integrating technology thoughtfully, governments can improve their processes, streamline operations, and deliver services more effectively. However, it is essential to remember that technology is only as effective as the people who use it and the infrastructure that supports it.

The Importance of a Smooth Transition

When introducing technological solutions into government systems, it is crucial to ensure a smooth transition from old processes to new ones. Abruptly discarding existing systems without providing sufficient time for adaptation can lead to chaos, resistance, and potential failure. The key lies in finding a balance that incorporates technology while preserving the functional aspects of the current system.

Allowing Time for Adaptation and Acceptance

Successful implementation of technology in the government sector requires patience and gradual acceptance from the stakeholders involved. This is particularly true in areas where individuals may have limited exposure to technology or lack the necessary skills. By keeping the old processes intact during the transition phase, governments can provide time for individuals to become familiar with the new systems. This approach promotes acceptance and mitigates the risk of disruption to essential government functions.

Ensuring Continuity in Government Machinery

Governments are responsible for delivering critical services to their citizens. Therefore, maintaining the functionality of government machinery is of utmost importance. By preserving the old processes alongside the introduction of new technological solutions, governments can ensure that essential services continue uninterrupted. In case of any technological failures or system crashes, having familiar processes to fall back on guarantees that government services can still be delivered efficiently.`,
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
      content: `In today's fast-paced and complex world, the communication of public welfare policies from top to bottom is of paramount importance. However, what happens when the transmission of this information gets distorted or lost in translation due to the insidious 'Chinese Whisper' effect? The unfortunate answer is a substantial cost borne by the state.

The 'Chinese Whisper' effect, also known as the 'Telephone' game, can occur when a message is passed from person to person, and the message gets altered or distorted along the way. This can happen for various reasons, such as misunderstandings or biases, leading to the original message getting lost or misinterpreted.

In the context of public welfare policies, the ramifications of this effect can be devastating. The state invests significant resources, both in time and money, in developing and implementing these policies to aid the public. However, if the policies are not communicated effectively or lost in translation, the intended beneficiaries may not receive the assistance they require.

The cost of such a loss can be enormous for the state, leading to wasted resources and missed opportunities. Additionally, the public's trust in the government's ability to deliver effective policies may be eroded, resulting in a loss of confidence in the government and potentially damaging the state's reputation.

To mitigate the 'Chinese Whisper' effect, it is crucial to ensure that policies are communicated clearly and effectively at every level. This requires a significant investment in communication and education programs that help individuals understand and interpret policies accurately. Furthermore, it necessitates using multiple communication channels to reach as many people as possible, including social media, television, and community outreach.

In conclusion, the 'Chinese Whisper' effect can have significant costs for the state, both in terms of wasted resources and a loss of public trust. By investing in effective communication and education programs, we can reduce the risk of miscommunication and ensure that public welfare policies reach those who need them most, ultimately leading to a more equitable and just society.`,
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
                
                <div className="pt-2 flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleReadHere(post)}
                    className="flex-1"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    Read Here
                  </Button>
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={post.linkedinUrl} target="_blank" rel="noopener noreferrer" className="group">
                      LinkedIn
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

        <BlogModal 
          post={selectedPost}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};

export default BlogSection;
