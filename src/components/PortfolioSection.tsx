
import { useState, useEffect } from "react";
import { ExternalLink, Github, ArrowRight, Database, TrendingUp, Users, FileText, BarChart, ChevronDown, ChevronUp } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import AnimatedBackground from "@/components/AnimatedBackground";

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
  const [isDataAssetsOpen, setIsDataAssetsOpen] = useState(false);

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
      impact: "Enabled researchers to identify voting patterns and political trends across multiple states",
      icon: <BarChart className="w-6 h-6" />
    },
    {
      title: "Agri Market Intelligence System",
      description: "Market analysis platform for mustard and wheat crop data serving rural agri-finance decisions",
      category: "Agricultural Analytics",
      techStack: ["Python", "Data Analytics", "Market Research", "Visualization"],
      impact: "Helped startup understand yield patterns and pricing trends for better financial products",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Disability Data Platform - Belongg AI",
      description: "AI-powered data cleaning and query generation system for accessibility research",
      category: "AI/ML",
      techStack: ["LLMs", "Vector Database", "SQL", "Data Cleaning", "Python"],
      impact: "Automated metadata generation and improved accessibility data quality by 90%",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Citizen Grievance Portal",
      description: "End-to-end grievance management system for Haryana state government",
      category: "Governance Tech",
      techStack: ["Dashboard Development", "Analytics", "Workflow Management"],
      impact: "Processed 130,000+ grievances with 80% resolution rate",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "SDG Integration Framework",
      description: "Comprehensive framework integrating SDGs into panchayat-level planning across Punjab",
      category: "Public Policy",
      techStack: ["Data Framework", "KPI Design", "Survey Tools", "Analytics"],
      impact: "Enabled data-led planning across 13,000+ panchayats",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "NITI Aayog Dashboard",
      description: "Executive dashboard for NITI for States Portal integrating diverse government datasets",
      category: "Government Analytics",
      techStack: ["Power BI", "DAX", "Data Integration", "Tableau"],
      impact: "Streamlined policy monitoring and state performance tracking at national level",
      icon: <BarChart className="w-6 h-6" />
    }
  ];

  const dataAssetsDetails = {
    dashboards: [
      { title: "Aadhaar Coverage", description: "Comprehensive analysis of Aadhaar adoption across India", theme: "Identity & Digital Infrastructure", link: "https://public.tableau.com/app/profile/aakash.sharma7942/viz/AadhaarCoverage/Dashboard" },
      { title: "Telecom Usage", description: "India's telecommunications infrastructure and usage patterns", theme: "Telecommunications & Connectivity", link: "https://public.tableau.com/app/profile/aakash.sharma7942/viz/TelecomUsage/Dashboard" },
      { title: "Economic Indicators", description: "Key economic metrics and trends analysis", theme: "Economic Growth & Development", link: "https://public.tableau.com/app/profile/aakash.sharma7942/viz/EconomicIndicators/Dashboard" },
      { title: "Water Quality", description: "Water quality assessment across Indian states", theme: "Environmental Monitoring", link: "https://public.tableau.com/app/profile/aakash.sharma7942/viz/WaterQuality/Dashboard" },
      { title: "Rural Water Supply", description: "Rural piped water supply coverage analysis", theme: "Rural Infrastructure", link: "https://public.tableau.com/app/profile/aakash.sharma7942/viz/RuralWaterSupply/Dashboard" },
      { title: "Education PGI", description: "Performance Grading Index for education sector", theme: "Education Analytics", link: "https://public.tableau.com/app/profile/aakash.sharma7942/viz/EducationPGI/Dashboard" },
      { title: "SDG Score", description: "Sustainable Development Goals progress tracking", theme: "Sustainable Development", link: "https://public.tableau.com/app/profile/aakash.sharma7942/viz/SDGScore/Dashboard" },
      { title: "School Dashboard", description: "Comprehensive education infrastructure analysis", theme: "Educational Infrastructure", link: "https://public.tableau.com/app/profile/aakash.sharma7942/viz/SchoolDashboard/Dashboard" }
    ],
    reports: [
      { title: "SDG 1 – No Poverty", link: "https://sattva.co.in/knowledge/sdg-report-poverty" },
      { title: "SDG 2 – Zero Hunger", link: "https://sattva.co.in/knowledge/sdg-report-hunger" },
      { title: "SDG 4 – Quality Education", link: "https://sattva.co.in/knowledge/sdg-report-education" },
      { title: "SDG 9 – Innovation", link: "https://sattva.co.in/knowledge/sdg-report-innovation" },
      { title: "SDG 8 – Decent Work", link: "https://sattva.co.in/knowledge/sdg-report-work" },
      { title: "SDG 7 – Clean Energy", link: "https://sattva.co.in/knowledge/sdg-report-energy" }
    ],
    articles: [
      { title: "Are All Our Children in School?", link: "https://sattva.co.in/knowledge/children-school-analysis" },
      { title: "What Does the NFHS Show About Women's Health in India?", link: "https://sattva.co.in/knowledge/nfhs-womens-health" },
      { title: "The State of Schools in India", link: "https://sattva.co.in/knowledge/state-schools-india" },
      { title: "Groundwater: Making the Invisible Visible", link: "https://sattva.co.in/knowledge/groundwater-analysis" },
      { title: "Tuberculosis Post-Pandemic: A Call for Better Health Infrastructure Funding", link: "https://sattva.co.in/knowledge/tuberculosis-health-infrastructure" },
      { title: "On the Road to Climate Resilience: Sustainable Agriculture in India", link: "https://sattva.co.in/knowledge/climate-agriculture" }
    ]
  };

  if (isLoading) {
    return (
      <section id="portfolio" className="py-12 bg-slate-50 dark:bg-slate-800 relative">
        <AnimatedBackground variant="secondary" />
        <div className="container mx-auto px-6 relative z-10">
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
    <section id="portfolio" className="py-12 bg-slate-50 dark:bg-slate-800 transition-colors duration-500 relative">
      <AnimatedBackground variant="secondary" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-slate-800 dark:text-slate-100 mb-6">
            Projects & Impact
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            Building systems that bridge technology and governance for meaningful change
          </p>
          
          <div className="w-24 h-px bg-slate-300 dark:bg-slate-600 mx-auto"></div>
        </div>

        {/* Data Assets Section with Enhanced Visual Styling */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50/30 dark:from-blue-900/30 dark:via-indigo-900/20 dark:to-purple-900/20 rounded-3xl p-8 border border-blue-200/60 dark:border-blue-700/40 relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
              <Database className="absolute top-6 right-6 w-32 h-32 text-blue-500 animate-pulse" />
              <BarChart className="absolute bottom-6 left-6 w-28 h-28 text-indigo-500 animate-pulse delay-1000" />
              <TrendingUp className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-purple-500 animate-pulse delay-2000" />
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg">
                    <Database className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif font-medium bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                    Data Assets & Analytics
                  </h3>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  Specialized in creating data-driven solutions for public governance and social impact
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-blue-200/40 dark:border-blue-700/40">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-3">20+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-semibold text-blue-700 dark:text-blue-400">Dashboards Built</span> for decision-making
                  </div>
                </div>
                <div className="text-center p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-indigo-200/40 dark:border-indigo-700/40">
                  <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-3">100+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-semibold text-indigo-700 dark:text-indigo-400">Data Assets</span> including reports and visualizations
                  </div>
                </div>
                <div className="text-center p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-purple-200/40 dark:border-purple-700/40">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-3">50+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-semibold text-purple-700 dark:text-purple-400">Datasets</span> from government and international sources
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Collapsible open={isDataAssetsOpen} onOpenChange={setIsDataAssetsOpen}>
                  <CollapsibleTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="group border-2 border-blue-300/60 dark:border-blue-600/60 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <Database className="w-5 h-5 mr-2" />
                      Explore Data Assets
                      {isDataAssetsOpen ? (
                        <ChevronUp className="w-5 h-5 ml-2 group-hover:-translate-y-1 transition-transform" />
                      ) : (
                        <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
                      )}
                    </Button>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent className="mt-8">
                    <div className="space-y-8">
                      {/* Interactive Dashboards */}
                      <div>
                        <h4 className="text-xl font-serif font-medium text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                          <BarChart className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          Interactive Dashboards
                        </h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {dataAssetsDetails.dashboards.map((dashboard, index) => (
                            <Card key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm group hover:shadow-lg transition-all duration-300">
                              <CardContent className="p-4">
                                <h5 className="font-medium text-slate-800 dark:text-slate-100 mb-2">{dashboard.title}</h5>
                                <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">{dashboard.description}</p>
                                <div className="flex items-center justify-between">
                                  <Badge variant="outline" className="text-xs">{dashboard.theme}</Badge>
                                  <Button variant="ghost" size="sm" asChild className="opacity-0 group-hover:opacity-100 transition-opacity">
                                    <a href={dashboard.link} target="_blank" rel="noopener noreferrer">
                                      <ExternalLink className="w-3 h-3" />
                                    </a>
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>

                      {/* SDG Reports */}
                      <div>
                        <h4 className="text-xl font-serif font-medium text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                          SDG Data Stories & Reports
                        </h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {dataAssetsDetails.reports.map((report, index) => (
                            <div key={index} className="group">
                              <Button variant="ghost" className="w-full justify-between text-left h-auto p-3" asChild>
                                <a href={report.link} target="_blank" rel="noopener noreferrer">
                                  <span className="text-sm text-slate-600 dark:text-slate-300">{report.title}</span>
                                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Articles */}
                      <div>
                        <h4 className="text-xl font-serif font-medium text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                          <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                          Data Dialogue Articles
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {dataAssetsDetails.articles.map((article, index) => (
                            <div key={index} className="group">
                              <Button variant="ghost" className="w-full justify-between text-left h-auto p-3" asChild>
                                <a href={article.link} target="_blank" rel="noopener noreferrer">
                                  <span className="text-sm text-slate-600 dark:text-slate-300">{article.title}</span>
                                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="text-center pt-4">
                        <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                          Built during tenure at India Data Insights – Sattva Consulting
                        </p>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
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
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                          {project.icon}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-serif text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                        {project.title}
                      </CardTitle>
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
