
import { Calendar, MapPin, Download, Code, Database, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const CVSection = () => {
  const experiences = [
    {
      title: "Consultant",
      organization: "Chief Secretary's Office, Government of Haryana",
      period: "Jul 2024 – Present",
      location: "Chandigarh, India",
      description: "Led grievance analytics for 1.3L+ cases; implemented dashboards for ERP, OBPAS & HR systems across state departments.",
      skills: ["Data Analytics", "Dashboard Development", "ERP Systems", "Public Governance"]
    },
    {
      title: "CMGGA Fellow",
      organization: "Yamunanagar District Administration",
      period: "Mar 2023 – Jun 2024",
      location: "Yamunanagar, India",
      description: "Worked on 35+ schemes; boosted education, water access, livelihoods, Amrit Sarovar project implementation, and dual desk initiatives.",
      skills: ["Project Management", "Field Implementation", "Scheme Monitoring", "Rural Development"]
    },
    {
      title: "Associate Consultant (Data Analyst)",
      organization: "Sattva Consulting",
      period: "Oct 2021 – Mar 2023",
      location: "Bangalore, India",
      description: "Built 50+ dashboards; automated data pipelines; contributed to NITI Aayog's portal development and social impact analytics.",
      skills: ["Power BI", "Data Engineering", "Python", "Social Impact Analytics"]
    },
    {
      title: "Young Professional",
      organization: "SIRD Punjab (UNDP Partnership)",
      period: "Sep 2020 – Oct 2021",
      location: "Chandigarh, India",
      description: "Created SDG framework; impacted 13K+ panchayats; trained 6K+ elected women representatives on governance and data systems.",
      skills: ["SDG Framework", "Capacity Building", "Rural Governance", "Training & Development"]
    }
  ];

  const education = [
    {
      degree: "Data Science for Social Impact",
      institution: "Ashoka University",
      period: "2024–2025",
      note: "100% Scholarship"
    },
    {
      degree: "PGDM – Rural Management",
      institution: "NIRDPR Hyderabad",
      period: "2018–2020",
      note: ""
    },
    {
      degree: "B.Tech – Computer Science",
      institution: "JNU Jaipur",
      period: "2013–2017",
      note: ""
    }
  ];

  const skills = [
    { name: "Python", level: 90, icon: Code },
    { name: "SQL", level: 88, icon: Database },
    { name: "Power BI", level: 92, icon: BarChart3 },
    { name: "Tableau", level: 85, icon: BarChart3 },
    { name: "Data Governance", level: 90, icon: Database },
    { name: "Public Policy", level: 88, icon: BarChart3 },
    { name: "LLMs & AI", level: 85, icon: Code },
    { name: "SPSS", level: 82, icon: BarChart3 }
  ];

  return (
    <section id="cv" className="py-20 bg-gradient-to-br from-white via-slate-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 via-blue-700 to-cyan-600 dark:from-slate-100 dark:via-blue-300 dark:to-cyan-300 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A timeline of impact-driven roles across government, consulting, and international development
          </p>
        </div>

        {/* Work Experience Timeline */}
        <div className="relative mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">Work Experience</h3>
          
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-slate-500"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-4 border-white dark:border-slate-900 z-10 shadow-lg"></div>

              {/* Content Card */}
              <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'} animate-fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-3xl p-8 border border-cyan-200/30 dark:border-cyan-700/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 transform hover:scale-105 group">
                  <div className="flex items-center mb-4">
                    <Calendar className="w-5 h-5 text-cyan-500 mr-3" />
                    <span className="text-cyan-600 dark:text-cyan-400 font-semibold">{exp.period}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">{exp.title}</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-3 font-medium">{exp.organization}</p>
                  
                  <div className="flex items-center mb-4">
                    <MapPin className="w-4 h-4 text-slate-500 mr-2" />
                    <span className="text-slate-500 text-sm">{exp.location}</span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
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

        {/* Education Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">Education</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 border border-cyan-200/30 dark:border-cyan-700/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 transform hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">{edu.degree}</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-2">{edu.institution}</p>
                <p className="text-slate-500 text-sm mb-2">{edu.period}</p>
                {edu.note && (
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-xs font-medium">
                    {edu.note}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">Skills & Tools</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center">
                    <skill.icon className="w-5 h-5 text-cyan-500 mr-3" />
                    <span className="text-slate-700 dark:text-slate-300 font-semibold">{skill.name}</span>
                  </div>
                  <span className="text-cyan-600 dark:text-cyan-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 via-blue-500 to-slate-600 h-3 rounded-full transition-all duration-1000 shadow-sm"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="text-center">
          <Button className="bg-gradient-to-r from-cyan-600 via-blue-600 to-slate-700 hover:from-cyan-700 hover:via-blue-700 hover:to-slate-800 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/30 group">
            <Download className="mr-3 w-5 h-5 group-hover:animate-bounce" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
