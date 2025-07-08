
import { useState, useEffect } from "react";
import { Moon, Sun, ExternalLink, BarChart3, FileText, Instagram, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const DataAssets = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check system preference for theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const dashboards = [
    {
      title: "Aadhaar Coverage",
      description: "Comprehensive analysis of Aadhaar adoption across India",
      url: "https://indiadatainsights.com/IDI-Interact/aadhaar-coverage/"
    },
    {
      title: "Telecom Usage", 
      description: "India's telecommunications infrastructure and usage patterns",
      url: "https://indiadatainsights.com/IDI-Interact/indias-telecom-usage/"
    },
    {
      title: "Economic Indicators",
      description: "Key economic metrics and trends analysis", 
      url: "https://indiadatainsights.com/IDI-Interact/economic-indicators/"
    },
    {
      title: "Water Quality",
      description: "Water quality assessment across Indian states",
      url: "https://indiadatainsights.com/IDI-Interact/water-quality-dashboard/"
    },
    {
      title: "Rural Water Supply",
      description: "Rural piped water supply coverage analysis",
      url: "https://indiadatainsights.com/IDI-Interact/rural-piped-water-supply-coverage/"
    },
    {
      title: "Education PGI",
      description: "Performance Grading Index for education sector",
      url: "https://indiadatainsights.com/IDI-Interact/performance-grading-index/"
    }
  ];

  const sdgReports = [
    {
      title: "SDG 1 – No Poverty",
      url: "https://indiadatainsights.com/reports/sdg-1-no-poverty-datashots/"
    },
    {
      title: "SDG 2 – Zero Hunger", 
      url: "https://indiadatainsights.com/reports/sdg-2-zero-hunger-datashots/"
    },
    {
      title: "SDG 4 – Quality Education",
      url: "https://indiadatainsights.com/reports/sdg-4-quality-education-datashots/"
    },
    {
      title: "SDG 9 – Innovation",
      url: "https://indiadatainsights.com/reports/sdg-9-industry-infrastructure-and-innovation-datashots/"
    }
  ];

  const articles = [
    {
      title: "Are All Our Children in School?",
      url: "https://indiadatainsights.com/are-all-our-children-in-school/"
    },
    {
      title: "What Does the NFHS Show About Women's Health in India?",
      url: "https://indiadatainsights.com/what-does-the-nfhs-show-about-womens-health-in-india/"
    },
    {
      title: "The State of Schools in India",
      url: "https://indiadatainsights.com/the-state-of-schools-in-india/"
    },
    {
      title: "Groundwater: Making the Invisible Visible", 
      url: "https://indiadatainsights.com/groundwater-making-the-invisible-visible/"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 transition-colors duration-500">
      {/* Dark/Light Mode Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 group shadow-lg hover:shadow-xl"
      >
        {darkMode ? (
          <Sun className="w-5 h-5 text-amber-500 group-hover:rotate-12 transition-transform duration-300" />
        ) : (
          <Moon className="w-5 h-5 text-slate-600 group-hover:rotate-12 transition-transform duration-300" />
        )}
      </button>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-700 to-cyan-600 dark:from-slate-100 dark:via-blue-300 dark:to-cyan-300 bg-clip-text text-transparent">
            Data Assets & Dashboards
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-4xl mx-auto">
            Showcasing analytical work during my tenure as <span className="font-semibold text-cyan-600 dark:text-cyan-400">Data Analyst</span> at India Data Insights – Sattva Consulting
          </p>
          <Button 
            onClick={() => navigate('/')}
            variant="outline"
            className="border-2 border-slate-400 dark:border-slate-500 hover:border-cyan-500 dark:hover:border-cyan-400 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            ← Back to Portfolio
          </Button>
        </div>
      </section>

      {/* Interactive Dashboards */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <BarChart3 className="w-10 h-10 text-cyan-600" />
              <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-cyan-600 dark:from-slate-100 dark:via-blue-300 dark:to-cyan-300 bg-clip-text text-transparent">
                Interactive Dashboards
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboards.map((dashboard, index) => (
              <Card key={index} className="group hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:scale-105 border border-cyan-200/20 dark:border-cyan-700/20">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                    {dashboard.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    {dashboard.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => window.open(dashboard.url, '_blank')}
                    className="w-full bg-gradient-to-r from-cyan-600 via-blue-600 to-slate-700 hover:from-cyan-700 hover:via-blue-700 hover:to-slate-800 text-white font-semibold transition-all duration-300 group/btn"
                  >
                    View Dashboard
                    <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Reports */}
      <section className="py-16 px-6 bg-slate-100/50 dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <TrendingUp className="w-10 h-10 text-cyan-600" />
              <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-cyan-600 dark:from-slate-100 dark:via-blue-300 dark:to-cyan-300 bg-clip-text text-transparent">
                SDG Reports
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdgReports.map((report, index) => (
              <Card key={index} onClick={() => window.open(report.url, '_blank')} className="cursor-pointer group hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:scale-105 border border-cyan-200/20 dark:border-cyan-700/20">
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

      {/* Articles */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <FileText className="w-10 h-10 text-cyan-600" />
              <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-cyan-600 dark:from-slate-100 dark:via-blue-300 dark:to-cyan-300 bg-clip-text text-transparent">
                Data Articles
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Card key={index} onClick={() => window.open(article.url, '_blank')} className="cursor-pointer group hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:scale-105 border border-cyan-200/20 dark:border-cyan-700/20">
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

      {/* Instagram Section */}
      <section className="py-16 px-6 bg-slate-100/50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Instagram className="w-10 h-10 text-cyan-600" />
              <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-cyan-600 dark:from-slate-100 dark:via-blue-300 dark:to-cyan-300 bg-clip-text text-transparent">
                Data Storytelling on Instagram
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              Created 10+ data stories between June 2022 and March 2023
            </p>
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
  );
};

export default DataAssets;
