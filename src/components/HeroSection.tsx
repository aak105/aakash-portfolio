
import { useState, useEffect } from "react";
import { ArrowRight, Download, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 via-blue-900/10 to-cyan-500/5 dark:from-slate-800/10 dark:via-blue-800/10 dark:to-cyan-400/10"></div>
        
        {/* Animated Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-30">
          {Array.from({ length: 8 }).map((_, i) => (
            <g key={i}>
              <line
                x1={`${10 + Math.random() * 80}%`}
                y1={`${10 + Math.random() * 80}%`}
                x2={`${20 + Math.random() * 60}%`}
                y2={`${20 + Math.random() * 60}%`}
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-cyan-400 dark:text-cyan-300 animate-pulse"
                style={{ 
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
              <circle
                cx={`${10 + Math.random() * 80}%`}
                cy={`${10 + Math.random() * 80}%`}
                r="2"
                fill="currentColor"
                className="text-cyan-500 dark:text-cyan-400 animate-pulse"
                style={{ 
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${2 + Math.random() * 1}s`
                }}
              />
            </g>
          ))}
        </svg>

        {/* Glowing Data Points */}
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse shadow-lg shadow-cyan-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Enhanced Profile Section */}
        <div className="mb-12 flex justify-center">
          <div className="relative group">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-slate-700 p-1 transform rotate-2 group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-cyan-500/20">
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-5xl font-bold text-transparent bg-gradient-to-br from-cyan-600 via-blue-700 to-slate-800 bg-clip-text">
                AS
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-cyan-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span className="text-white text-sm font-bold">✓</span>
            </div>
          </div>
        </div>

        {/* Updated Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-slate-800 via-blue-700 to-cyan-600 dark:from-slate-100 dark:via-blue-300 dark:to-cyan-300 bg-clip-text text-transparent animate-fade-in">
          Solving Public Problems with Data, Design, and Grit.
        </h1>

        {/* Updated Bio */}
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-5xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
          I'm <span className="font-semibold text-cyan-600 dark:text-cyan-400">Aakash Sharma</span> – a technologist-turned-governance consultant blending data systems, AI tools, and policy to drive change on the ground. From tracking 1.3L+ grievances to automating data pipelines, my work helps governments think, act, and scale smarter.
        </p>

        {/* Enhanced Stats Cards */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {[
            { label: '6+ Years in Public Data & Governance', value: '6+', icon: '📊' },
            { label: 'Built Dashboards for NITI Aayog & Chief Secretary\'s Office', value: '50+', icon: '🏛️' },
            { label: 'Led Projects on Grievance Redressal, SDGs, DEI Data', value: '1.3L+', icon: '🎯' }
          ].map((stat, index) => (
            <div key={index} className="group bg-white/70 dark:bg-slate-800/70 backdrop-blur-md rounded-3xl p-8 border border-cyan-200/30 dark:border-cyan-700/30 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 max-w-xs">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
              <div className="text-slate-600 dark:text-slate-300 text-sm leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <Button 
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-cyan-600 via-blue-600 to-slate-700 hover:from-cyan-700 hover:via-blue-700 hover:to-slate-800 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/30 group"
          >
            View Projects
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300" />
          </Button>
          
          <Button 
            variant="outline" 
            className="border-2 border-slate-400 dark:border-slate-500 hover:border-cyan-500 dark:hover:border-cyan-400 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-lg hover:bg-cyan-50 dark:hover:bg-cyan-950/20 group"
          >
            <Download className="mr-3 w-5 h-5 group-hover:animate-bounce" />
            Download Resume
          </Button>
          
          <Button 
            onClick={() => window.open('https://www.linkedin.com/in/aakashsharma8a6888131/', '_blank')}
            variant="ghost" 
            className="text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-500 transform hover:scale-110 hover:bg-cyan-50 dark:hover:bg-cyan-950/20 group"
          >
            <Linkedin className="mr-3 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Connect on LinkedIn
          </Button>
        </div>
      </div>

      {/* Enhanced Parallax Mouse Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-128 h-128 bg-gradient-to-r from-blue-500/10 to-slate-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
