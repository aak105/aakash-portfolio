
import { useState, useEffect } from "react";
import { ExternalLink, Github, ArrowRight, Database, TrendingUp, Users, FileText, BarChart, ChevronDown, ChevronUp, Brain, Target, Globe, Zap, BookOpen, PieChart } from "lucide-react";
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
      icon: <Brain className="w-6 h-6" />
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
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "NITI Aayog Dashboard",
      description: "Executive dashboard for NITI for States Portal integrating diverse government datasets",
      category: "Government Analytics",
      techStack: ["Power BI", "DAX", "Data Integration", "Tableau"],
      impact: "Streamlined policy monitoring and state performance tracking at national level",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const dataAssetsDetails = {
    dataDialogue: [
      { title: "Are all our children in school?", link: "https://indiadatainsights.com/are-all-our-children-in-school/" },
      { title: "what does the nfhs show about womens health in India ?", link: "https://indiadatainsights.com/what-does-the-nfhs-show-about-womens-health-in-india/" },
      { title: "State of Schools in India", link: "https://indiadatainsights.com/the-state-of-schools-in-india/" },
      { title: "Groundwater", link: "https://indiadatainsights.com/groundwater-making-the-invisible-visible/" },
      { title: "TB post pandemic", link: "https://indiadatainsights.com/tuberculosis-post-pandemic-a-call-for-better-health-infrastructure-funding/" },
      { title: "Access to Clean water", link: "https://indiadatainsights.com/sdg-6-cleanwater-sanitation/" },
      { title: "Access to Clean Energy", link: "https://indiadatainsights.com/this-month-from-india-data-insights-we-are-looking-at-sdg-7/" },
      { title: "Startup & Innovation", link: "https://indiadatainsights.com/exploring-indias-innovation-and-startup-landscape-insights-from-the-latest-data/" }
    ],
    dashboards: [
      { 
        title: "Aadhar Coverage Dashboard", 
        description: "Enhancing the interactive dashboard with updated Aadhaar coverage data", 
        link: "https://indiadatainsights.com/IDI-Interact/aadhaar-coverage/",
        icon: <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
      },
      { 
        title: "Indias Telecome Usage Data", 
        description: "Updating and maintaining an interactive dashboard on India's telecom usage", 
        link: "https://indiadatainsights.com/IDI-Interact/indias-telecom-usage/",
        icon: <Zap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
      },
      { 
        title: "India's Economic Indicators", 
        description: "Developing an interactive dashboard showcasing economic indicators", 
        link: "https://indiadatainsights.com/IDI-Interact/economic-indicators/",
        icon: <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
      },
      { 
        title: "Drinking Water Quality", 
        description: "Creating and maintaining a dashboard on water quality indicators", 
        link: "https://indiadatainsights.com/IDI-Interact/water-quality-dashboard/",
        icon: <BarChart className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
      },
      { 
        title: "Rural piped water supply coverage", 
        description: "Creating and updating a dashboard on rural piped water supply", 
        link: "https://indiadatainsights.com/IDI-Interact/rural-piped-water-supply-coverage/",
        icon: <Users className="w-5 h-5 text-teal-600 dark:text-teal-400" />
      },
      { 
        title: "Performance Grading Index", 
        description: "Designing and updating a dashboard on education performance", 
        link: "https://indiadatainsights.com/IDI-Interact/performance-grading-index/",
        icon: <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />
      },
      { 
        title: "SDG Index Dashboard", 
        description: "Developing an interactive dashboard for SDG index data", 
        link: "https://indiadatainsights.com/IDI-Interact/sdg-score-dashboard/",
        icon: <Target className="w-5 h-5 text-orange-600 dark:text-orange-400" />
      },
      { 
        title: "Education in Indian Schools", 
        description: "Updating interactive dashboards with school-related data", 
        link: "https://indiadatainsights.com/IDI-Interact/education-in-india-schools/",
        icon: <PieChart className="w-5 h-5 text-pink-600 dark:text-pink-400" />
      }
    ],
    sdgReports: [
      { title: "SDG data story from SDG 1", link: "https://indiadatainsights.com/reports/sdg-1-no-poverty-datashots/" },
      { title: "SDG data story from SDG 2", link: "https://indiadatainsights.com/reports/sdg-2-zero-hunger-datashots/" },
      { title: "SDG data story from SDG 4", link: "https://indiadatainsights.com/reports/sdg-4-quality-education-datashots/" },
      { title: "SDG data story from SDG 9", link: "https://indiadatainsights.com/reports/sdg-9-industry-infrastructure-and-innovation-datashots/" },
      { title: "SDG data story from SDG 8", link: "https://indiadatainsights.com/reports/sdg-8-decent-work-and-economic-growth-datashots/" },
      { title: "SDG data story from SDG 7", link: "https://indiadatainsights.com/reports/sdg-7-affordable-and-clean-energy-datashots/" }
    ],
    sustainableAgriculture: [
      { title: "Sustainable Agriculture - Organic Farming", link: "https://indiadatainsights.com/product/sustainable-agriculture-in-india-organic-farming/" },
      { title: "Sustainable Agriculture - Soil Health", link: "https://indiadatainsights.com/product/sustainable-agriculture-in-india-soil-health/" },
      { title: "Sustainable Agriculture - Water Management", link: "https://indiadatainsights.com/product/sustainable-agriculture-in-india-water-management/" },
      { title: "Sustainable Agriculture - Agriculture Input", link: "https://indiadatainsights.com/product/sustainable-agriculture-in-india-agriculture-inputs/" }
    ],
    socialMedia: [
      { title: "Create Data Design and story for online reach", link: "https://www.instagram.com/indiadatainsights/" }
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

        {/* Featured Projects Section - Moved above Data Assets */}
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
                      {/* Interactive Dashboards with Enhanced Design */}
                      <div>
                        <h4 className="text-xl font-serif font-medium text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-3">
                          <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg shadow-md">
                            <BarChart className="w-5 h-5 text-white" />
                          </div>
                          Interactive Dashboards
                        </h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {dataAssetsDetails.dashboards.map((dashboard, index) => (
                            <Card key={index} className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm group hover:shadow-xl hover:scale-105 transition-all duration-300 border-0 shadow-lg">
                              <CardContent className="p-5">
                                <div className="flex items-start justify-between mb-3">
                                  <div className="p-2 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-lg">
                                    {dashboard.icon}
                                  </div>
                                  <Button variant="ghost" size="sm" asChild className="opacity-0 group-hover:opacity-100 transition-opacity p-2">
                                    <a href={dashboard.link} target="_blank" rel="noopener noreferrer">
                                      <ExternalLink className="w-4 h-4" />
                                    </a>
                                  </Button>
                                </div>
                                <h5 className="font-semibold text-slate-800 dark:text-slate-100 mb-2 leading-snug">{dashboard.title}</h5>
                                <p className="text-xs text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">{dashboard.description}</p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>

                      {/* SDG Reports with Enhanced Design */}
                      <div>
                        <h4 className="text-xl font-serif font-medium text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-3">
                          <div className="p-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg shadow-md">
                            <TrendingUp className="w-5 h-5 text-white" />
                          </div>
                          SDG Data Stories & Reports
                        </h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {dataAssetsDetails.sdgReports.map((report, index) => (
                            <div key={index} className="group">
                              <Button variant="ghost" className="w-full justify-between text-left h-auto p-4 hover:bg-gradient-to-r hover:from-green-50 hover:to-teal-50 dark:hover:from-green-900/20 dark:hover:to-teal-900/20 rounded-lg transition-all duration-300" asChild>
                                <a href={report.link} target="_blank" rel="noopener noreferrer">
                                  <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">{report.title}</span>
                                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-green-600 dark:text-green-400" />
                                </a>
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Data Dialogue Articles */}
                      <div>
                        <h4 className="text-xl font-serif font-medium text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-3">
                          <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-md">
                            <FileText className="w-5 h-5 text-white" />
                          </div>
                          Data Dialogue Articles
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {dataAssetsDetails.dataDialogue.map((article, index) => (
                            <div key={index} className="group">
                              <Button variant="ghost" className="w-full justify-between text-left h-auto p-4 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20 rounded-lg transition-all duration-300" asChild>
                                <a href={article.link} target="_blank" rel="noopener noreferrer">
                                  <span className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{article.title}</span>
                                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-purple-600 dark:text-purple-400" />
                                </a>
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Sustainable Agriculture Reports */}
                      <div>
                        <h4 className="text-xl font-serif font-medium text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-3">
                          <div className="p-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg shadow-md">
                            <Target className="w-5 h-5 text-white" />
                          </div>
                          Sustainable Agriculture Reports
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {dataAssetsDetails.sustainableAgriculture.map((report, index) => (
                            <div key={index} className="group">
                              <Button variant="ghost" className="w-full justify-between text-left h-auto p-4 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 dark:hover:from-emerald-900/20 dark:hover:to-green-900/20 rounded-lg transition-all duration-300" asChild>
                                <a href={report.link} target="_blank" rel="noopener noreferrer">
                                  <span className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{report.title}</span>
                                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-600 dark:text-emerald-400" />
                                </a>
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Social Media Content */}
                      <div>
                        <h4 className="text-xl font-serif font-medium text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-3">
                          <div className="p-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg shadow-md">
                            <Users className="w-5 h-5 text-white" />
                          </div>
                          Data Storytelling & Social Media
                        </h4>
                        <div className="grid md:grid-cols-1 gap-3">
                          {dataAssetsDetails.socialMedia.map((content, index) => (
                            <div key={index} className="group">
                              <Button variant="ghost" className="w-full justify-between text-left h-auto p-4 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 dark:hover:from-pink-900/20 dark:hover:to-rose-900/20 rounded-lg transition-all duration-300" asChild>
                                <a href={content.link} target="_blank" rel="noopener noreferrer">
                                  <span className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{content.title}</span>
                                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-pink-600 dark:text-pink-400" />
                                </a>
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="text-center pt-6 border-t border-slate-200/50 dark:border-slate-700/50">
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
