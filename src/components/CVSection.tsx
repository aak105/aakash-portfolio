
import { useState } from "react";
import { Calendar, MapPin, Download, Code, Database, BarChart3, Mail, Phone, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CVSection = () => {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

  const experiences = [
    {
      title: "Consultant",
      organization: "Chief Secretary to Government of Haryana' Office",
      period: "Jul 2024 – Present",
      location: "Chandigarh, India",
      shortDescription: "Led monitoring of ~1,30,000 citizen grievances across 80+ categories; achieved 80% resolution rate.",
      fullDescription: "Led the monitoring of ~1,30,000 citizen grievances across 80+ grievances categories by developing a citizen-centric online portal; achieved an 80% resolution rate; Resolved grievances by segregating them into policy recommendations and implementation issues. Orchestrated end-to-end grievance redressal workflows of 500+ complaints received at the CM office with all the line departments at state-level and ensuring service delivery. Executed advanced governance analytics for insight generation, policy alteration, and achieve operational efficiency. Additionally supported at Haryana Urban Development Authority's projects on ERP and OBPAS software upgradation, Executive Human resource management dashboard development, and Central File Monitoring Dashboard.",
      skills: ["Governance Analytics", "Grievance Management", "Policy Analysis", "ERP Systems"],
      logo: "🏛️"
    },
    {
      title: "Chief Minister's Associate",
      organization: "CMGGA Program, Haryana",
      period: "Mar 2023 – Jun 2024",
      location: "Yamunanagar, India",
      shortDescription: "Collaborated on 35 programs across 7 domains and 30+ departments. Supported 3000+ BPL families.",
      fullDescription: "Collaborated with Deputy Commissioner and district officials in cross-collaboration for implementing, and monitoring 35 programs across 7 domains, 30+ departments, and 12 SDGs. Supported 3000+ below Poverty Line families by facilitating linkage with various income generation avenues (skilling, loans, employment) and building strong monitoring and review systems in district under the Antyodaya Parivar Utthan Yojana. Supervised the construction and maintenance of 119 ponds under the 'Amrit Sarovar' mission. This included 30 ponds for recreational activities and 10 ponds for income-generating initiatives, resulting in an annual income increase of 20 lakhs. Mobilized 15 lakhs INR through CSR and Zila Parishad funds for renovation project of 11 playschools. Enhanced the adoption rate of the flagship tablet-based learning scheme by 30% and impacted over 15,000 students across the district within four months by building a cascading review system in the district. Leveraged data-backed review and targeted interventions to Improve district service delivery ranking by 16 places (18th to 2nd). Streamlined the supply of dual desks for over 4000 students across districts and established a dignified learning environment by ensuring fairness and transparency across the process.",
      skills: ["Program Management", "Rural Development", "Data-driven Review", "Cross-department Collaboration"],
      logo: "🌾"
    },
    {
      title: "Associate Consultant – Data Analyst",
      organization: "Sattva Consulting Pvt. Ltd.",
      period: "Oct 2021 – Mar 2023",
      location: "Bangalore, India",
      shortDescription: "Developed 50+ interactive data assets using Tableau/PowerBI. Automated data pipelines reducing extraction time by 90%.",
      fullDescription: "Developed and Deployed 50+ interactive data assets using data extraction, cleaning, and visualising tools (Tableau/PowerBI) on public and open government data for efficient impact evaluation and data storytelling. Curated & Maintained 1000+ primary and secondary well-structured datasets within cloud-based database, while playing a key role in development of organization's central data repository to manage data quality, accessibility. Automated data pipelines to reduce extraction time by 90% and enhanced team efficiency by using Python scripts. Used DAX along with Power BI for complex and large datasets. Contributed to executive dashboard design for NITI Aayog Project (NITI for States Portal) by integrating diverse datasets.",
      skills: ["Power BI", "Tableau", "Python", "Data Pipeline", "DAX"],
      logo: "📊"
    },
    {
      title: "Young Professional",
      organization: "SIRD Punjab (UNDP Partnership)",
      period: "Sep 2020 – Oct 2021",
      location: "Chandigarh, India",
      shortDescription: "Enabled data-led planning across 13,000+ panchayats. Designed SDG integration framework with 100+ KPIs.",
      fullDescription: "Enabled data-led planning across 13,000+ panchayats by managing a project on integrating SDGs into panchayat-level planning in collaboration with SDGCC-UNDP. Ideated and Designed SDG integration framework and Panchayat Indicator Framework with 100+ KPIs. Impacted over 6000+ elected women representatives (EWR) by conducting a Training Needs Assessment (TNA) Survey in partnership with SEWA Bharat to design training modules.",
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

  const coreSkills = [
    {
      category: "Leadership & Management",
      skills: [
        { name: "Critical Thinking", level: 95 },
        { name: "Leadership", level: 90 },
        { name: "Stakeholder Management", level: 92 },
        { name: "Project Management", level: 88 }
      ]
    },
    {
      category: "Research & Analysis",
      skills: [
        { name: "Analytical Thinking", level: 95 },
        { name: "Research", level: 90 },
        { name: "Monitoring and Evaluation", level: 88 },
        { name: "Strategy and Planning", level: 85 }
      ]
    },
    {
      category: "System & Process",
      skills: [
        { name: "System Building", level: 90 },
        { name: "Process Building", level: 88 },
        { name: "Communication", level: 92 }
      ]
    }
  ];

  const itSkills = [
    {
      category: "Data Analysis & Visualization",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 88 },
        { name: "Power BI", level: 92 },
        { name: "Tableau", level: 85 },
        { name: "Looker Studio", level: 80 },
        { name: "SPSS", level: 82 }
      ]
    },
    {
      category: "Data Management",
      skills: [
        { name: "Data Analytics", level: 90 },
        { name: "DBMS", level: 85 },
        { name: "Snowflake", level: 78 },
        { name: "Data Cataloging", level: 80 }
      ]
    },
    {
      category: "Project Management Tools",
      skills: [
        { name: "ClickUp", level: 85 },
        { name: "Notion", level: 88 },
        { name: "MS Office", level: 90 }
      ]
    },
    {
      category: "Data Collection",
      skills: [
        { name: "ODK", level: 85 },
        { name: "Survey Design", level: 88 }
      ]
    }
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
    const link = document.createElement('a');
    link.href = '/aakash-sharma-cv.pdf';
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

        {/* Timeline Work Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-slate-100">Work Experience</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-2xl shadow-lg">
                    {exp.logo}
                  </div>
                  
                  {/* Content card */}
                  <Card className="flex-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-cyan-200/30 dark:border-cyan-700/30 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{exp.title}</h3>
                          <p className="text-cyan-600 dark:text-cyan-400 font-medium">{exp.organization}</p>
                        </div>
                        <div className="flex flex-col md:items-end text-sm text-slate-500">
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

                      <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                        {expandedExperience === index ? exp.fullDescription : exp.shortDescription}
                      </p>

                      <div className="flex items-center justify-between">
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
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}
                          className="ml-4"
                        >
                          {expandedExperience === index ? (
                            <>
                              <ChevronUp className="w-4 h-4 mr-1" />
                              Less
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-4 h-4 mr-1" />
                              More
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-slate-100">Education</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-cyan-200/30 dark:border-cyan-700/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-sm text-cyan-600 dark:text-cyan-400 font-medium mb-2">{edu.type}</div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">{edu.degree}</h4>
                  <p className="text-slate-600 dark:text-slate-300 mb-2">{edu.institution}</p>
                  <p className="text-slate-500 text-sm mb-2">{edu.period}</p>
                  {edu.note && (
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-xs font-medium">
                      {edu.note}
                    </span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Skills Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-slate-100">Skills & Expertise</h3>
          
          {/* Core Skills */}
          <div className="mb-12">
            <h4 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6 text-center">Core Skills</h4>
            <div className="grid lg:grid-cols-3 gap-8">
              {coreSkills.map((category, catIndex) => (
                <Card key={catIndex} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-cyan-200/30 dark:border-cyan-700/30">
                  <CardContent className="p-6">
                    <h5 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4">{category.category}</h5>
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">{skill.name}</span>
                            <span className="text-cyan-600 dark:text-cyan-400 font-medium text-sm">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* IT Skills */}
          <div>
            <h4 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6 text-center">IT Tools & Technologies</h4>
            <div className="grid lg:grid-cols-2 gap-8">
              {itSkills.map((category, catIndex) => (
                <Card key={catIndex} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-cyan-200/30 dark:border-cyan-700/30">
                  <CardContent className="p-6">
                    <h5 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4">{category.category}</h5>
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">{skill.name}</span>
                            <span className="text-cyan-600 dark:text-cyan-400 font-medium text-sm">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-slate-100">Personal Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-cyan-200/30 dark:border-cyan-700/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">{project.title}</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Publications Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-slate-100">Publications</h3>
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-cyan-200/30 dark:border-cyan-700/30">
            <CardContent className="p-6">
              <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">{publications[0].title}</h4>
              <p className="text-cyan-600 dark:text-cyan-400 font-medium">{publications[0].journal}, {publications[0].date}</p>
            </CardContent>
          </Card>
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
