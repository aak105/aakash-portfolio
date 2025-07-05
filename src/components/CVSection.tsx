
import { Calendar, MapPin, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const CVSection = () => {
  const experiences = [
    {
      title: "Consultant",
      organization: "Chief Secretary's Office, Government of Haryana",
      period: "2023 - Present",
      location: "Chandigarh, India",
      description: "Leading digital transformation initiatives and policy implementation across state departments.",
      skills: ["Digital Governance", "Policy Analysis", "Stakeholder Management"]
    },
    {
      title: "CMGGA Fellow",
      organization: "Yamunanagar, Haryana",
      period: "2022 - 2023",
      location: "Yamunanagar, India",
      description: "Implemented district-level interventions and built comprehensive monitoring dashboards for administrative efficiency.",
      skills: ["Dashboard Development", "Data Analytics", "Field Implementation"]
    },
    {
      title: "Data Fellow",
      organization: "Sattva Consulting",
      period: "2021 - 2022",
      location: "Bangalore, India",
      description: "Developed data systems and analytical frameworks for social impact organizations and foundations.",
      skills: ["Data Systems", "Python", "Social Impact Analytics"]
    },
    {
      title: "SDG Integration Consultant",
      organization: "UNDP x SIRD Punjab",
      period: "2020 - 2021",
      location: "Chandigarh, India",
      description: "Designed and implemented SDG monitoring frameworks for panchayat-level governance structures.",
      skills: ["SDG Framework", "Monitoring & Evaluation", "Capacity Building"]
    }
  ];

  const skills = [
    { name: "Data Systems", level: 95 },
    { name: "AI for Social Impact", level: 90 },
    { name: "Python", level: 88 },
    { name: "SQL", level: 85 },
    { name: "Governance", level: 92 },
    { name: "Public Policy", level: 90 },
    { name: "SDGs", level: 88 }
  ];

  return (
    <section id="cv" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-700 dark:from-slate-100 dark:to-blue-300 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A timeline of impact-driven roles across government, consulting, and international development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-slate-900 z-10"></div>

              {/* Content Card */}
              <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'} animate-fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/20 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center mb-3">
                    <Calendar className="w-5 h-5 text-blue-500 mr-2" />
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">{exp.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">{exp.title}</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-2">{exp.organization}</p>
                  
                  <div className="flex items-center mb-3">
                    <MapPin className="w-4 h-4 text-slate-500 mr-1" />
                    <span className="text-slate-500 text-sm">{exp.location}</span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">Core Expertise</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-700 dark:text-slate-300 font-semibold">{skill.name}</span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download CV Button */}
        <div className="text-center mt-16">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
            <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
            Download Full Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
