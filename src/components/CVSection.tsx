
import { Calendar, MapPin, Download, Code, Database, BarChart3, Mail, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const CVSection = () => {
  const experiences = [
    {
      title: "Consultant",
      organization: "Chief Secretary to Government of Haryana' Office",
      period: "Jul 2024 – Present",
      location: "Chandigarh, India",
      description: "Led monitoring of ~1,30,000 citizen grievances across 80+ categories; achieved 80% resolution rate. Orchestrated end-to-end grievance redressal workflows and executed advanced governance analytics.",
      skills: ["Governance Analytics", "Grievance Management", "Policy Analysis", "ERP Systems"],
      logo: "🏛️"
    },
    {
      title: "Chief Minister's Associate",
      organization: "CMGGA Program, Haryana",
      period: "Mar 2023 – Jun 2024",
      location: "Yamunanagar, India",
      description: "Collaborated on 35 programs across 7 domains and 30+ departments. Supported 3000+ BPL families and supervised 119 ponds under Amrit Sarovar mission.",
      skills: ["Program Management", "Rural Development", "Data-driven Review", "Cross-department Collaboration"],
      logo: "🌾"
    },
    {
      title: "Associate Consultant – Data Analyst",
      organization: "Sattva Consulting Pvt. Ltd.",
      period: "Oct 2021 – Mar 2023",
      location: "Bangalore, India",
      description: "Developed 50+ interactive data assets using Tableau/PowerBI. Automated data pipelines reducing extraction time by 90%. Contributed to NITI Aayog Project dashboard.",
      skills: ["Power BI", "Tableau", "Python", "Data Pipeline", "DAX"],
      logo: "📊"
    },
    {
      title: "Young Professional",
      organization: "SIRD Punjab (UNDP Partnership)",
      period: "Sep 2020 – Oct 2021",
      location: "Chandigarh, India",
      description: "Enabled data-led planning across 13,000+ panchayats. Designed SDG integration framework with 100+ KPIs. Impacted 6000+ elected women representatives through TNA survey.",
      skills: ["SDG Framework", "Panchayat Planning", "Training Design", "Survey Research"],
      logo: "🌍"
    }
  ];

  const education = [
    {
      degree: "Data Science for Social Impact",
      institution: "Ashoka University",
      period: "2024–2025",
      note: "100% Scholarship",
      type: "Professional Executive Development Program"
    },
    {
      degree: "Rural Management",
      institution: "NIRD&PR Hyderabad",
      period: "2018–2020",
      note: "Post Graduate Diploma",
      type: "PGDM"
    },
    {
      degree: "Computer Science",
      institution: "JNU Jaipur",
      period: "2013–2017",
      note: "Bachelor of Technology",
      type: "B.Tech"
    }
  ];

  const skills = [
    { name: "Python", level: 90, icon: Code },
    { name: "SQL", level: 88, icon: Database },
    { name: "Power BI", level: 92, icon: BarChart3 },
    { name: "Tableau", level: 85, icon: BarChart3 },
    { name: "Data Analytics", level: 90, icon: Database },
    { name: "Project Management", level: 88, icon: BarChart3 },
    { name: "Stakeholder Management", level: 85, icon: Code },
    { name: "SPSS", level: 82, icon: BarChart3 }
  ];

  const projects = [
    {
      title: "Political & Election Data Analysis",
      description: "Assisted researchers in analyzing India's political and election data with interactive dashboards"
    },
    {
      title: "Agri Market Analysis",
      description: "Analyzed mustard and wheat crop market data for Bangalore-based Rural Agri Finance Start-up"
    },
    {
      title: "Disability Data Fellow - Belongg AI",
      description: "Automated data cleaning and LLM-based query generation for vector and SQL databases"
    }
  ];

  const publications = [
    {
      title: "Advancing citizen welfare in Haryana through the novel 'Mukhyamantri Antyodaya Parivar Utthan Yojana' Initiative",
      journal: "Durbeen",
      date: "May 2024"
    }
  ];

  const downloadCV = () => {
    // Create a link to download the CV PDF
    const link = document.createElement('a');
    link.href = '/aakash-sharma-cv.pdf'; // You'll need to add this PDF to the public folder
    link.download = 'Aakash_Sharma_CV.pdf';
    link.click();
  };

  return (
    <section id="cv" className="py-12 bg-gradient-to-br from-white via-slate-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 via-blue-700 to-cyan-600 dark:from-slate-100 dark:via-blue-300 dark:to-cyan-300 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-600 dark:text-slate-300 mb-6">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>aakashsharma.cs1@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91-8890991609</span>
            </div>
            <a 
              href="https://www.linkedin.com/in/aakashsharma8a6888131/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Compact Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-slate-100">Work Experience</h3>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 border border-cyan-200/30 dark:border-cyan-700/30 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{exp.logo}</span>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{exp.title}</h3>
                      <p className="text-cyan-600 dark:text-cyan-400 font-medium">{exp.organization}</p>
                    </div>
                  </div>
                  <div className="md:ml-auto flex flex-col md:items-end text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-slate-100">Education</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 border border-cyan-200/30 dark:border-cyan-700/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-sm text-cyan-600 dark:text-cyan-400 font-medium mb-2">{edu.type}</div>
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
          <h3 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-slate-100">Skills & Tools</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <skill.icon className="w-4 h-4 text-cyan-500 mr-2" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{skill.name}</span>
                  </div>
                  <span className="text-cyan-600 dark:text-cyan-400 font-medium text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 via-blue-500 to-slate-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-slate-100">Personal Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 border border-cyan-200/30 dark:border-cyan-700/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">{project.title}</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Publications Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-slate-100">Publications</h3>
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 border border-cyan-200/30 dark:border-cyan-700/30">
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">{publications[0].title}</h4>
            <p className="text-cyan-600 dark:text-cyan-400 font-medium">{publications[0].journal}, {publications[0].date}</p>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="text-center">
          <Button 
            onClick={downloadCV}
            className="bg-gradient-to-r from-cyan-600 via-blue-600 to-slate-700 hover:from-cyan-700 hover:via-blue-700 hover:to-slate-800 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/30 group"
          >
            <Download className="mr-3 w-5 h-5 group-hover:animate-bounce" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
