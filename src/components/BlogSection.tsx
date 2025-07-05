
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const categories = ["Governance", "AI & Ethics", "Field Notes", "Tools & Tricks"];
  
  const articles = [
    {
      title: "What Grievances Can Teach Us About Governance Gaps",
      excerpt: "Analyzing patterns in citizen complaints reveals systemic issues and opportunities for public service improvement.",
      category: "Governance",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "How I Used Python to Automate Government Dashboards",
      excerpt: "A technical deep-dive into building automated reporting systems that save hundreds of hours of manual work.",
      category: "Tools & Tricks",
      readTime: "12 min read",
      date: "Nov 28, 2024",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Metadata for Equity: Lessons from Social Sector Data",
      excerpt: "Why proper data classification is crucial for inclusive policy-making and how AI can help scale these efforts.",
      category: "AI & Ethics",
      readTime: "10 min read",
      date: "Nov 10, 2024",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Building the Brain of a Civil Society Org – My Dream Project",
      excerpt: "Envisioning an AI-powered knowledge management system that could transform how NGOs leverage their collective wisdom.",
      category: "Field Notes",
      readTime: "6 min read",
      date: "Oct 22, 2024",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-700 dark:from-slate-100 dark:to-blue-300 bg-clip-text text-transparent">
            Insights & Perspectives
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Thoughts on governance, technology, and the intersection where real change happens
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-2 rounded-full border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <article 
              key={index}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-slate-50 dark:bg-slate-800 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${article.color}`}></div>
                
                {/* Content */}
                <div className="p-8">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center text-slate-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Read Time & Author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-slate-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold mr-2">
                        AS
                      </div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm font-medium">Aakash Sharma</span>
                    </div>
                  </div>

                  {/* Read More Arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-blue-500 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
            Read All Posts
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
