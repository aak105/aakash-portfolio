
import { ExternalLink, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Samadhan Prakoshth – Unified Grievance Redressal",
      description: "Developed a comprehensive digital platform for streamlined grievance handling across multiple government departments. The system reduced resolution time by 40% and improved citizen satisfaction through transparent tracking and automated escalation workflows.",
      tags: ["Tech4Gov", "Digital Transformation", "Public Service"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Metadata Automation for Gender & Disability Data",
      description: "Created AI-powered metadata classification system for Belongg AI to automatically categorize and tag diversity and inclusion datasets. This reduced manual processing time by 80% and improved data discoverability for researchers and policymakers.",
      tags: ["AI Governance", "DEI", "Data Systems"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Panchayat SDG Framework – UNDP Punjab",
      description: "Designed and implemented a comprehensive SDG monitoring framework for rural governance structures. The system tracked 50+ indicators across 17 SDGs, enabling data-driven decision making at the grassroots level and improving policy outcomes.",
      tags: ["SDG Implementation", "Rural Development", "Monitoring & Evaluation"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "CMGGA District Interventions Dashboard",
      description: "Built an interactive dashboard for tracking administrative efficiency and citizen service delivery across Yamunanagar district. The platform provided real-time insights to district officials and improved service delivery metrics by 35%.",
      tags: ["Dashboard Development", "Performance Analytics", "Governance"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-700 dark:from-slate-100 dark:to-blue-300 bg-clip-text text-transparent">
            Impact Portfolio
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Technology solutions that bridge the gap between public systems and citizen needs
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative p-8">
                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="flex items-center px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View More Button */}
                <Button 
                  variant="ghost" 
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-0 h-auto font-semibold group/btn"
                >
                  View Full Case Study
                  <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-200" />
                </Button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
            Interested in collaborating on impactful technology solutions?
          </p>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Let's Build Something Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
