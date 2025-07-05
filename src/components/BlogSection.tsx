
import { Calendar, Clock, ArrowRight, Edit, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const categories = ["Governance", "AI & Ethics", "Tools", "Personal Journey"];
  
  const articles = [
    {
      title: "From Metadata to Inclusion: What I Learned at Belongg AI",
      excerpt: "How AI-powered classification systems can transform diversity and inclusion data processing, reducing manual work by 80% while improving data discoverability.",
      category: "AI & Ethics",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      color: "from-purple-500 to-pink-500",
      featured: true
    },
    {
      title: "Tracking Governance with Data: My Journey with Samadhan",
      excerpt: "Inside the development of a grievance redressal system that processes 1.3L+ complaints and maintains an 80% resolution rate.",
      category: "Governance",
      readTime: "12 min read",
      date: "Nov 28, 2024",
      color: "from-blue-500 to-cyan-500",
      featured: true
    },
    {
      title: "Using Python to Fix a 2-Day Manual Process",
      excerpt: "A technical deep-dive into automating data pipelines that save hundreds of hours and reduce human error in government reporting.",
      category: "Tools",
      readTime: "10 min read",
      date: "Nov 10, 2024",
      color: "from-green-500 to-emerald-500",
      featured: false
    },
    {
      title: "When SDGs Met Panchayats: The UNDP Framework I Helped Build",
      excerpt: "Building a comprehensive SDG monitoring system that impacted 13K+ panchayats and trained 6K+ elected women representatives.",
      category: "Personal Journey",
      readTime: "15 min read",
      date: "Oct 22, 2024",
      color: "from-orange-500 to-red-500",
      featured: false
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-white via-slate-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 via-blue-700 to-cyan-600 dark:from-slate-100 dark:via-blue-300 dark:to-cyan-300 bg-clip-text text-transparent">
            Insights & Perspectives
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Thoughts on governance, technology, and the intersection where real change happens
          </p>
        </div>

        {/* Category Filter & Add Post Button */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-12">
          <div className="flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-3 rounded-full border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-950/20 transition-all duration-300 hover:scale-105 font-medium"
              >
                {category}
              </button>
            ))}
          </div>
          
          <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 group">
            <Plus className="mr-2 w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
            Write New Post
          </Button>
        </div>

        {/* Featured Articles */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {articles.filter(article => article.featured).map((article, index) => (
            <article 
              key={index}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 transform hover:scale-105 border border-cyan-200/20 dark:border-cyan-700/20">
                {/* Gradient Header */}
                <div className={`h-3 bg-gradient-to-r ${article.color}`}></div>
                
                {/* Content */}
                <div className="p-8">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                    <div className="flex items-center text-slate-500 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {article.date}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-slate-500 text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      {article.readTime}
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
                          AS
                        </div>
                        <div className="ml-3">
                          <span className="text-slate-600 dark:text-slate-300 text-sm font-medium block">Aakash Sharma</span>
                        </div>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Read More Arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-6 h-6 text-cyan-500 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {articles.filter(article => !article.featured).map((article, index) => (
            <article 
              key={index}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${(index + 2) * 0.15}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 transform hover:scale-105 border border-cyan-200/10 dark:border-cyan-700/10">
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${article.color}`}></div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center text-slate-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {article.date}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed text-sm">
                    {article.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center text-slate-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </div>
                    
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                      <Edit className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button className="bg-gradient-to-r from-cyan-600 via-blue-600 to-slate-700 hover:from-cyan-700 hover:via-blue-700 hover:to-slate-800 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/30 group">
            Read All Posts
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
