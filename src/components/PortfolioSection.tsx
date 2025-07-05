import { ExternalLink, Tag, Upload, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PortfolioSection = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      title: "Samadhan Prakoshth – Grievance Redressal Portal",
      date: "Jul 2024 – Present",
      role: "Lead Consultant",
      description: "Led monitoring of 1.3L+ complaints with 80% resolution rate. Built comprehensive policy dashboards for tracking citizen grievances across multiple government departments. Implemented automated escalation workflows and real-time analytics.",
      tags: ["AI", "Governance", "Data4Good"],
      color: "from-cyan-500 to-blue-500",
      files: ["Sample grievance dashboard screenshots", "SOP PDFs"]
    },
    {
      title: "Antyodaya Parivar Yojana",
      date: "Mar 2023 – Jun 2024",
      role: "Implementation Lead",
      description: "Supported 3000+ BPL families with comprehensive livelihood mapping and tracking systems. Developed beneficiary databases and impact measurement frameworks for poverty alleviation schemes.",
      tags: ["Rural Development", "Data Systems", "Impact Tracking"],
      color: "from-green-500 to-emerald-500",
      files: ["Beneficiary tracking dashboards", "Impact reports"]
    },
    {
      title: "Amrit Sarovar Monitoring",
      date: "2023 – 2024",
      role: "Monitoring Consultant",
      description: "Oversaw 119 pond restorations generating 20 lakh income impact. Built monitoring systems for water conservation projects and community engagement tracking.",
      tags: ["Environment", "Community Impact", "Monitoring"],
      color: "from-blue-500 to-teal-500",
      files: ["Restoration progress reports", "Community impact studies"]
    },
    {
      title: "Tablet Scheme Adoption",
      date: "2023",
      role: "Data Analyst",
      description: "Improved technology adoption across 15K+ students using data-led review systems. Developed usage analytics and learning outcome tracking mechanisms.",
      tags: ["EdTech", "Data Analytics", "Digital Inclusion"],
      color: "from-purple-500 to-pink-500",
      files: ["Usage analytics reports", "Learning outcome data"]
    },
    {
      title: "Metadata Automation – Belongg AI",
      date: "2023",
      role: "AI Consultant",
      description: "Used LLMs to automate insights from unstructured disability data. Developed AI-powered classification systems for diversity and inclusion datasets.",
      tags: ["AI", "DEI", "Automation"],
      color: "from-indigo-500 to-purple-500",
      files: ["AI model documentation", "Classification results"]
    },
    {
      title: "NITI Aayog Dashboard",
      date: "2021 – 2023",
      role: "Data Engineer",
      description: "Contributed to 'NITI for States' portal with data engineering and Power BI development. Built state-level governance indicators and policy tracking systems.",
      tags: ["Government Tech", "Data Engineering", "Policy Analytics"],
      color: "from-orange-500 to-red-500",
      files: ["Dashboard screenshots", "Technical documentation"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 via-blue-700 to-cyan-600 dark:from-slate-100 dark:via-blue-300 dark:to-cyan-300 bg-clip-text text-transparent">
            Impact Portfolio
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Technology solutions that bridge the gap between public systems and citizen needs
          </p>
        </div>

        {/* Special Data Assets Card */}
        <div className="mb-12">
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-slate-500/10 backdrop-blur-md shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:scale-[1.02] border border-cyan-300/30 dark:border-cyan-600/30">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                      Data Assets & Dashboards
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Comprehensive portfolio from India Data Insights – Sattva Consulting
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Explore my complete collection of interactive dashboards, data stories, SDG reports, and analytical work created during my tenure as Data Analyst. Features 8+ interactive dashboards, 6 SDG reports, research articles, and Instagram data storytelling content.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Interactive Dashboards", "SDG Reports", "Data Stories", "Research Articles"].map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="flex items-center px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-xs font-medium"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    #{tag}
                  </span>
                ))}
              </div>

              <Button 
                onClick={() => navigate('/data-assets')}
                className="bg-gradient-to-r from-cyan-600 via-blue-600 to-slate-700 hover:from-cyan-700 hover:via-blue-700 hover:to-slate-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/30 group/btn"
              >
                View Data Portfolio
                <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>

        {/* Projects Masonry Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 transform hover:scale-105 animate-fade-in border border-cyan-200/20 dark:border-cyan-700/20"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient Header */}
              <div className={`h-3 bg-gradient-to-r ${project.color}`}></div>
              
              {/* Content */}
              <div className="p-8">
                {/* Date & Role */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm text-slate-500 font-medium">{project.date}</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-xs font-medium">
                    {project.role}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="flex items-center px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium hover:bg-cyan-100 dark:hover:bg-cyan-900/30 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors duration-200"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Files Section */}
                <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                  <div className="flex items-center mb-2">
                    <Upload className="w-4 h-4 text-slate-500 mr-2" />
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Project Files</span>
                  </div>
                  <div className="space-y-1">
                    {project.files.map((file, fileIndex) => (
                      <div key={fileIndex} className="text-xs text-slate-500 dark:text-slate-400 pl-6">
                        • {file}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 hover:bg-cyan-50 dark:hover:bg-cyan-950/20 p-2 h-auto font-semibold group/btn flex-1"
                  >
                    View Case Study
                    <ExternalLink className="ml-2 w-3 h-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-200" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-cyan-300 dark:border-cyan-600 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-950/20 p-2 h-auto text-xs"
                  >
                    <Upload className="w-3 h-3" />
                  </Button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
            Interested in collaborating on impactful technology solutions?
          </p>
          <Button className="bg-gradient-to-r from-cyan-600 via-blue-600 to-slate-700 hover:from-cyan-700 hover:via-blue-700 hover:to-slate-800 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/30">
            Let's Build Something Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
