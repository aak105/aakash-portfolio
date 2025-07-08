
import { useState, useEffect } from "react";
import { Moon, Sun, ExternalLink, BarChart3, FileText, Instagram, TrendingUp, Building2, Calendar, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DataAssets = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const dashboards = [
    {
      title: "Aadhaar Coverage",
      description: "Comprehensive analysis of Aadhaar adoption across India",
      url: "https://indiadatainsights.com/IDI-Interact/aadhaar-coverage/",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&crop=center",
      theme: "Identity & Digital Infrastructure"
    },
    {
      title: "Telecom Usage",
      description: "India's telecommunications infrastructure and usage patterns",
      url: "https://indiadatainsights.com/IDI-Interact/indias-telecom-usage/",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=250&fit=crop&crop=center",
      theme: "Telecommunications & Connectivity"
    },
    {
      title: "Economic Indicators",
      description: "Key economic metrics and trends analysis",
      url: "https://indiadatainsights.com/IDI-Interact/economic-indicators/",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop&crop=center",
      theme: "Economic Growth & Development"
    },
    {
      title: "Water Quality",
      description: "Water quality assessment across Indian states",
      url: "https://indiadatainsights.com/IDI-Interact/water-quality-dashboard/",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop&crop=center",
      theme: "Environmental Monitoring"
    },
    {
      title: "Rural Water Supply",
      description: "Rural piped water supply coverage analysis",
      url: "https://indiadatainsights.com/IDI-Interact/rural-piped-water-supply-coverage/",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=250&fit=crop&crop=center",
      theme: "Rural Infrastructure"
    },
    {
      title: "Education PGI",
      description: "Performance Grading Index for education sector",
      url: "https://indiadatainsights.com/IDI-Interact/performance-grading-index/",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop&crop=center",
      theme: "Education Analytics"
    },
    {
      title: "SDG Score",
      description: "Sustainable Development Goals progress tracking",
      url: "https://indiadatainsights.com/IDI-Interact/sdg-score-dashboard/",
      image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?w=400&h=250&fit=crop&crop=center",
      theme: "Sustainable Development"
    },
    {
      title: "School Dashboard",
      description: "Comprehensive education infrastructure analysis",
      url: "https://indiadatainsights.com/IDI-Interact/education-in-india-schools/",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=250&fit=crop&crop=center",
      theme: "Educational Infrastructure"
    }
  ];

  const sdgReports = [
    {
      title: "SDG 1 – No Poverty",
      url: "https://indiadatainsights.com/reports/sdg-1-no-poverty-datashots/",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&h=200&fit=crop&crop=center"
    },
    {
      title: "SDG 2 – Zero Hunger",
      url: "https://indiadatainsights.com/reports/sdg-2-zero-hunger-datashots/",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=300&h=200&fit=crop&crop=center"
    },
    {
      title: "SDG 4 – Quality Education",
      url: "https://indiadatainsights.com/reports/sdg-4-quality-education-datashots/",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=300&h=200&fit=crop&crop=center"
    },
    {
      title: "SDG 9 – Innovation",
      url: "https://indiadatainsights.com/reports/sdg-9-industry-infrastructure-and-innovation-datashots/",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop&crop=center"
    },
    {
      title: "SDG 8 – Decent Work",
      url: "https://indiadatainsights.com/reports/sdg-8-decent-work-and-economic-growth-datashots/",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=300&h=200&fit=crop&crop=center"
    },
    {
      title: "SDG 7 – Clean Energy",
      url: "https://indiadatainsights.com/reports/sdg-7-affordable-and-clean-energy-datashots/",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=300&h=200&fit=crop&crop=center"
    }
  ];

  const articles = [
    {
      title: "Are All Our Children in School?",
      url: "https://indiadatainsights.com/are-all-our-children-in-school/",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop&crop=center"
    },
    {
      title: "What Does the NFHS Show About Women's Health in India?",
      url: "https://indiadatainsights.com/what-does-the-nfhs-show-about-womens-health-in-india/",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=center"
    },
    {
      title: "The State of Schools in India",
      url: "https://indiadatainsights.com/the-state-of-schools-in-india/",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=300&h=200&fit=crop&crop=center"
    },
    {
      title: "Groundwater: Making the Invisible Visible",
      url: "https://indiadatainsights.com/groundwater-making-the-invisible-visible/",
      image: "https://images.unsplash.com/photo-1441148345475-384310d6369d?w=300&h=200&fit=crop&crop=center"
    },
    {
      title: "Tuberculosis Post-Pandemic: A Call for Better Health Infrastructure Funding",
      url: "https://indiadatainsights.com/tuberculosis-post-pandemic-a-call-for-better-health-infrastructure-funding/",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=200&fit=crop&crop=center"
    },
    {
      title: "On the Road to Climate Resilience: Sustainable Agriculture in India",
      url: "https://indiadatainsights.com/on-the-road-to-climate-resilience-sustainable-agriculture-in-india/",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=300&h=200&fit=crop&crop=center"
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark' : ''}`}>
      {/* Dark/Light Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group"
      >
        {darkMode ? (
          <Sun className="w-5 h-5 text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
        ) : (
          <Moon className="w-5 h-5 text-slate-600 group-hover:rotate-12 transition-transform duration-300" />
        )}
      </button>

      {/* Main Content */}
      <div className="bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 transition-colors duration-500">
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-700 to-cyan-600 dark:from-slate-100 dark:via-blue-300 dark:to-cyan-300 bg-clip-text text-transparent animate-fade-in">
              Data Assets & Dashboards
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Showcasing analytical work during my tenure as <span className="font-semibold text-cyan-600 dark:text-cyan-400">Data Analyst</span> at India Data Insights – Sattva Consulting
            </p>
            <Button 
              onClick={() => window.history.back()}
              variant="outline"
              className="border-2 border-slate-400 dark:border-slate-500 hover:border-cyan-500 dark:hover:border-cyan-400 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 px-8 py-3 rounded-full font-semibold transition-all duration-300 animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              ← Back to Portfolio
            </Button>
          </div>
        </section>

        {/* KPI Statistics Section - Key Performance Metrics */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-slate-100">Key Performance Highlights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* KPI 1: Data Assets */}
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 border border-cyan-200/30 dark:border-cyan-700/30 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:scale-105 animate-fade-in">
                <div className="text-center mb-4">
                  <Database className="w-12 h-12 text-blue-500 dark:text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent mb-1">80+</div>
                  <h3 className="text-lg font-serif font-medium text-slate-700 dark:text-slate-300">Data Assets Created</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium"><span className="text-blue-600 dark:text-blue-400 font-semibold">50+</span> Interactive Dashboards</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium"><span className="text-blue-600 dark:text-blue-400 font-semibold">20+</span> Reports & Data Stories</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium"><span className="text-blue-600 dark:text-blue-400 font-semibold">10+</span> Insight Blogs</p>
                </div>
              </div>
              
              {/* KPI 2: SDGs Covered */}
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 border border-cyan-200/30 dark:border-cyan-700/30 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:scale-105 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="text-center mb-4">
                  <Target className="w-12 h-12 text-green-500 dark:text-green-400 mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300 bg-clip-text text-transparent mb-1">10+</div>
                  <h3 className="text-lg font-serif font-medium text-slate-700 dark:text-slate-300">SDGs Covered</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Addressing <span className="text-green-600 dark:text-green-400 font-semibold">poverty</span>, <span className="text-green-600 dark:text-green-400 font-semibold">education</span>, and <span className="text-green-600 dark:text-green-400 font-semibold">health</span></p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Supporting <span className="text-green-600 dark:text-green-400 font-semibold">clean water</span> and <span className="text-green-600 dark:text-green-400 font-semibold">energy</span> initiatives</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Promoting <span className="text-green-600 dark:text-green-400 font-semibold">sustainable communities</span></p>
                </div>
              </div>
              
              {/* KPI 3: Domains Covered */}
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 border border-cyan-200/30 dark:border-cyan-700/30 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-center mb-4">
                  <Globe className="w-12 h-12 text-purple-500 dark:text-purple-400 mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-500 dark:from-purple-400 dark:to-indigo-300 bg-clip-text text-transparent mb-1">12+</div>
                  <h3 className="text-lg font-serif font-medium text-slate-700 dark:text-slate-300">Domains Covered</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium"><span className="text-purple-600 dark:text-purple-400 font-semibold">Education</span> & <span className="text-purple-600 dark:text-purple-400 font-semibold">Healthcare</span> systems</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium"><span className="text-purple-600 dark:text-purple-400 font-semibold">Water</span>, <span className="text-purple-600 dark:text-purple-400 font-semibold">Energy</span> & <span className="text-purple-600 dark:text-purple-400 font-semibold">Digital Access</span></p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium"><span className="text-purple-600 dark:text-purple-400 font-semibold">Governance</span> & <span className="text-purple-600 dark:text-purple-400 font-semibold">Social Protection</span></p>
                </div>
              </div>
              
              {/* KPI 4: Dataset Types */}
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 border border-cyan-200/30 dark:border-cyan-700/30 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:scale-105 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="text-center mb-4">
                  <FileText className="w-12 h-12 text-amber-500 dark:text-amber-400 mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 dark:from-amber-400 dark:to-orange-300 bg-clip-text text-transparent mb-1">15+</div>
                  <h3 className="text-lg font-serif font-medium text-slate-700 dark:text-slate-300">Dataset Types</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium"><span className="text-amber-600 dark:text-amber-400 font-semibold">Survey Data</span> (NFHS, UDISE+, NSS)</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium"><span className="text-amber-600 dark:text-amber-400 font-semibold">Administrative Data</span> (State MIS)</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium"><span className="text-amber-600 dark:text-amber-400 font-semibold">Economic</span> & <span className="text-amber-600 dark:text-amber-400 font-semibold">Environmental</span> metrics</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Timeline - Improved Compact Design */}
        <section className="py-16 px-6 bg-slate-100/50 dark:bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">Professional Journey</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {experiences.map((exp, index) => (
                <div key={index} className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 border border-cyan-200/30 dark:border-cyan-700/30 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Company Logo */}
                  <div className="flex items-center mb-4">
                    <img 
                      src={exp.logo} 
                      alt={exp.organization}
                      className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-cyan-200 dark:border-cyan-600"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">{exp.organization}</p>
                    </div>
                  </div>

                  {/* Basic Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-cyan-600 dark:text-cyan-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-sm text-slate-500">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>

                  {/* Hover Details */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-4">
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expand Indicator */}
                  <div className="flex justify-center mt-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    <ChevronRight className="w-5 h-5 text-cyan-500 transform group-hover:rotate-90 transition-transform duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1: Interactive Dashboards - Grid Layout */}
        <section id="dashboards" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <BarChart3 className="w-10 h-10 text-cyan-600" />
                <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-cyan-600 dark:from-slate-100 dark:via-blue-300 dark:to-cyan-300 bg-clip-text text-transparent">
                  Interactive Dashboards
                </span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Built during my time at India Data Insights – Sattva Consulting
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {dashboards.map((dashboard, index) => (
                <Card key={index} className="group hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 transform hover:scale-105 animate-fade-in border border-cyan-200/20 dark:border-cyan-700/20 overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Theme Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={dashboard.image} 
                      alt={dashboard.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-cyan-500/90 text-white text-xs font-medium rounded-full">
                        {dashboard.theme}
                      </span>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-slate-800 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                      {dashboard.title}
                    </CardTitle>
                    {dashboard.description && (
                      <CardDescription className="text-slate-600 dark:text-slate-300">
                        {dashboard.description}
                      </CardDescription>
                    )}
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                      <iframe 
                        src={dashboard.url}
                        className="w-full h-64 border-0"
                        title={dashboard.title}
                        loading="lazy"
                      />
                    </div>
                    <Button 
                      onClick={() => window.open(dashboard.url, '_blank')}
                      className="w-full bg-gradient-to-r from-cyan-600 via-blue-600 to-slate-700 hover:from-cyan-700 hover:via-blue-700 hover:to-slate-800 text-white font-semibold transition-all duration-300 group/btn"
                    >
                      View Full Dashboard
                      <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Data Stories & SDG Reports - Grid Layout */}
        <section id="reports" className="py-20 px-6 bg-slate-100/50 dark:bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <TrendingUp className="w-10 h-10 text-cyan-600" />
                <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-cyan-600 dark:from-slate-100 dark:via-blue-300 dark:to-cyan-300 bg-clip-text text-transparent">
                  Data Stories & SDG Reports
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sdgReports.map((report, index) => (
                <Card key={index} onClick={() => window.open(report.url, '_blank')} className="cursor-pointer group hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:scale-105 animate-fade-in border border-cyan-200/20 dark:border-cyan-700/20 overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative h-32 overflow-hidden">
                    <img 
                      src={report.image} 
                      alt={report.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-800 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                        {report.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 group-hover:rotate-12 transition-all duration-300" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Data Dialogue Articles - Grid Layout */}
        <section id="articles" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <FileText className="w-10 h-10 text-cyan-600" />
                <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-cyan-600 dark:from-slate-100 dark:via-blue-300 dark:to-cyan-300 bg-clip-text text-transparent">
                  Data Dialogue Articles
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <Card key={index} onClick={() => window.open(article.url, '_blank')} className="cursor-pointer group hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:scale-105 animate-fade-in border border-cyan-200/20 dark:border-cyan-700/20 overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-medium text-slate-800 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                        {article.title}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-cyan-600 group-hover:rotate-12 transition-all duration-300 ml-2 flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Instagram Data Storytelling */}
        <section id="instagram" className="py-20 px-6 bg-slate-100/50 dark:bg-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <Instagram className="w-10 h-10 text-cyan-600" />
                <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-cyan-600 dark:from-slate-100 dark:via-blue-300 dark:to-cyan-300 bg-clip-text text-transparent">
                  Data Storytelling on Instagram
                </span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                Created 10+ data stories between June 2022 and March 2023 for India Data Insights' Instagram page
              </p>
              
              {/* Instagram Preview */}
              <div className="relative mb-8 max-w-md mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=400&fit=crop&crop=center" 
                  alt="Instagram Data Stories Preview"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">Sample Data Story Posts</p>
                </div>
              </div>
            </div>

            <Button 
              onClick={() => window.open('https://www.instagram.com/indiadatainsights/', '_blank')}
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30 group"
            >
              <Instagram className="mr-3 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              View Instagram Work
              <ExternalLink className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-cyan-200/20 dark:border-cyan-700/20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-slate-600 dark:text-slate-300 italic text-lg">
              "Data tells stories that drive change – from insights to impact."
            </p>
            <p className="text-slate-500 dark:text-slate-400 mt-4">
              © 2024 Aakash Sharma | Data Analyst Portfolio
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default DataAssets;
