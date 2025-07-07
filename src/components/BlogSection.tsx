
import { useState, useEffect } from "react";
import { Calendar, ArrowRight, ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  published: boolean;
  reading_time: number;
  tags: string[];
  created_at: string;
}

const BlogSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Predefined blog posts from CV
  const featuredPosts = [
    {
      title: "Unifying India's Government Web Portals: Streamlining Development and Enhancing Accessibility",
      excerpt: "In the pursuit of digitalization and improved governance, the Indian government has launched numerous web portals aimed at simplifying public services. However, the rapid proliferation of disparate web portals without a clear vision for interoperability is hindering their effectiveness...",
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
      readingTime: 8,
      tags: ["Digital Governance", "Public Policy", "Technology", "Interoperability"],
      publishedAt: "2023-06-15",
      linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7068137790332448768/"
    },
    {
      title: "Implementing Technology in Government Systems: A Delicate Balance for Success",
      excerpt: "In today's rapidly evolving world, technology has the potential to revolutionize government systems and enhance public service delivery. However, implementing technology in the government sector requires careful consideration and strategic planning...",
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
      readingTime: 6,
      tags: ["Technology", "Public Policy", "Government", "Digital Transformation"],
      publishedAt: "2023-07-10",
      linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7079273979156307968/"
    },
    {
      title: "Lost in Translation: The Cost of the 'Chinese Whisper' Effect on Public Welfare Policies",
      excerpt: "In today's fast-paced and complex world, the communication of public welfare policies from top to bottom is of paramount importance. However, what happens when the transmission of this information gets distorted or lost in translation due to the insidious 'Chinese Whisper' effect?",
      content: `In today's fast-paced and complex world, the communication of public welfare policies from top to bottom is of paramount importance. However, what happens when the transmission of this information gets distorted or lost in translation due to the insidious 'Chinese Whisper' effect? The unfortunate answer is a substantial cost borne by the state.

The 'Chinese Whisper' effect, also known as the 'Telephone' game, can occur when a message is passed from person to person, and the message gets altered or distorted along the way. This can happen for various reasons, such as misunderstandings or biases, leading to the original message getting lost or misinterpreted.

In the context of public welfare policies, the ramifications of this effect can be devastating. The state invests significant resources, both in time and money, in developing and implementing these policies to aid the public. However, if the policies are not communicated effectively or lost in translation, the intended beneficiaries may not receive the assistance they require.

The cost of such a loss can be enormous for the state, leading to wasted resources and missed opportunities. Additionally, the public's trust in the government's ability to deliver effective policies may be eroded, resulting in a loss of confidence in the government and potentially damaging the state's reputation.

To mitigate the 'Chinese Whisper' effect, it is crucial to ensure that policies are communicated clearly and effectively at every level. This requires a significant investment in communication and education programs that help individuals understand and interpret policies accurately. Furthermore, it necessitates using multiple communication channels to reach as many people as possible, including social media, television, and community outreach.

In conclusion, the 'Chinese Whisper' effect can have significant costs for the state, both in terms of wasted resources and a loss of public trust. By investing in effective communication and education programs, we can reduce the risk of miscommunication and ensure that public welfare policies reach those who need them most, ultimately leading to a more equitable and just society.`,
      readingTime: 5,
      tags: ["Policy Communication", "Public Welfare", "Governance", "Communication"],
      publishedAt: "2023-05-20",
      linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7056311826413682688/"
    }
  ];

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('published', true)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setPosts(data || []);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPosts();
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
            Exploring the intersection of data, technology, and public governance
          </p>
          <div className="w-24 h-px bg-slate-300 dark:bg-slate-600 mx-auto mt-6"></div>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-100 mb-8 text-center">
            Featured Articles
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 h-full flex flex-col">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-serif text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <span>{post.readingTime} min read</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-3 flex-1">
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
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href={post.linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Read on LinkedIn
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Database Posts */}
        {posts.length > 0 && (
          <div>
            <h3 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-100 mb-8 text-center">
              Latest Posts
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-serif text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.created_at).toLocaleDateString()}</span>
                      </div>
                      {post.reading_time && <span>{post.reading_time} min read</span>}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                    
                    <Button variant="outline" size="sm" className="group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 dark:text-slate-400 text-lg mb-6">
              More articles coming soon! Check out my featured posts above.
            </p>
          </div>
        )}
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
    </section>
  );
};

export default BlogSection;
