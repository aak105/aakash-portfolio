
import { useState, useEffect } from "react";
import { ArrowRight, Download, Mail } from "lucide-react";
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
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-slate-600/5 dark:from-blue-400/10 dark:via-purple-400/10 dark:to-slate-400/10"></div>
        
        {/* Floating Data Points */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}

        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-10">
          {Array.from({ length: 5 }).map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-300 dark:text-blue-600 animate-pulse"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Profile Image with 3D Effect */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-4xl font-bold text-blue-600 dark:text-blue-400">
                AS
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 dark:from-slate-100 dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent animate-fade-in">
          Bridging Public Systems with Data, Technology, and Purpose.
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
          I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Aakash Sharma</span>, a consultant working at the intersection of public governance, social impact, and data systems. From building grievance redressal tech to simplifying metadata for inclusion, I help governments and civil society solve real problems with tech-powered insights.
        </p>

        {/* Stats Cards */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {[
            { label: 'Years Experience', value: '5+' },
            { label: 'Projects Delivered', value: '15+' },
            { label: 'Lives Impacted', value: '10K+' }
          ].map((stat, index) => (
            <div key={index} className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
              <div className="text-slate-600 dark:text-slate-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <Button 
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
          >
            View My Projects
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
          
          <Button 
            variant="outline" 
            className="border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 group"
          >
            <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
            Download CV
          </Button>
          
          <Button 
            onClick={scrollToContact}
            variant="ghost" 
            className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 group"
          >
            <Mail className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
            Let's Connect
          </Button>
        </div>
      </div>

      {/* Parallax Mouse Effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
