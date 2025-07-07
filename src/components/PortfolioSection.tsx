
import { useState, useEffect } from "react";
import { ExternalLink, Github, ArrowRight, Database } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  description: string;
  long_description: string;
  tech_stack: string[];
  image_url: string;
  project_url: string;
  github_url: string;
  category: string;
  featured: boolean;
}

const PortfolioSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setProjects(data || []);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const cvProjects = [
    {
      title: "Political & Election Data Analysis",
      description: "Comprehensive analysis of India's political and election data with interactive dashboards for researchers",
      category: "Data Analytics",
      techStack: ["Python", "Tableau", "SQL", "Power BI"],
      impact: "Enabled researchers to identify voting patterns and political trends across multiple states"
    },
    {
      title: "Agri Market Intelligence System",
      description: "Market analysis platform for mustard and wheat crop data serving rural agri-finance decisions",
      category: "Agricultural Analytics",
      techStack: ["Python", "Data Analytics", "Market Research", "Visualization"],
      impact: "Helped startup understand yield patterns and pricing trends for better financial products"
    },
    {
      title: "Disability Data Platform - Belongg AI",
      description: "AI-powered data cleaning and query generation system for accessibility research",
      category: "AI/ML",
      techStack: ["LLMs", "Vector Database", "SQL", "Data Cleaning", "Python"],
      impact: "Automated metadata generation and improved accessibility data quality by 90%"
    },
    {
      title: "Citizen Grievance Portal",
      description: "End-to-end grievance management system for Haryana state government",
      category: "Governance Tech",
      techStack: ["Dashboard Development", "Analytics", "Workflow Management"],
      impact: "Processed 130,000+ grievances with 80% resolution rate"
    },
    {
      title: "SDG Integration Framework",
      description: "Comprehensive framework integrating SDGs into panchayat-level planning across Punjab",
      category: "Public Policy",
      techStack: ["Data Framework", "KPI Design", "Survey Tools", "Analytics"],
      impact: "Enabled data-led planning across 13,000+ panchayats"
    },
    {
      title: "NITI Aayog Dashboard",
      description: "Executive dashboard for NITI for States Portal integrating diverse government datasets",
      category: "Government Analytics",
      techStack: ["Power BI", "DAX", "Data Integration", "Tableau"],
      impact: "Streamlined policy monitoring and state performance tracking at national level"
    }
  ];

  if (isLoading) {
    return (
      <section id="portfolio" className="py-20 bg-slate-50 dark:bg-slate-800">
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
    <section id="portfolio" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-slate-800 dark:text-slate-100 mb-6">
            Projects & Impact
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Building systems that bridge technology and governance for meaningful change
          </p>
          <div className="w-24 h-px bg-slate-300 dark:bg-slate-600 mx-auto mt-6"></div>
        </div>

        {/* Highlighted Data Assets Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-8 border border-blue-200/50 dark:border-blue-700/50">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Database className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <h3 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-100">
                  Data Assets & Analytics
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Specialized in creating data-driven solutions for public governance and social impact
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Interactive Data Assets</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">1000+</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Datasets Curated</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">90%</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Efficiency Improvement</div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('/data-assets', '_blank')}
                className="group border-blue-300 dark:border-blue-600 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30"
              >
                <Database className="w-4 h-4 mr-2" />
                Explore Data Assets
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* CV Projects Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-100 mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {cvProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-serif text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs mb-2">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                    <div className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-2">Impact:</div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                      {project.impact}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Database Projects */}
        {projects.length > 0 && (
          <div>
            <h3 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-100 mb-8 text-center">
              Additional Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl font-serif text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      {project.featured && (
                        <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          Featured
                        </Badge>
                      )}
                    </div>
                    {project.category && (
                      <Badge variant="outline" className="w-fit text-xs">
                        {project.category}
                      </Badge>
                    )}
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {project.tech_stack && project.tech_stack.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {project.tech_stack.map((tech, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-center gap-2 pt-2">
                      {project.project_url && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.project_url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            View
                          </a>
                        </Button>
                      )}
                      {project.github_url && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-1" />
                            Code
                          </a>
                        </Button>
                      )}
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

export default PortfolioSection;
