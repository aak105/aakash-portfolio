import { useState } from "react";
import { Calendar, MapPin, Download, Code, Database, BarChart3, Mail, Phone, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedBackground from "@/components/AnimatedBackground";

/**
 * CVSection Component - Enhanced with Better Code Structure
 * 
 * Comprehensive CV section featuring:
 * - Skills categorized without percentages 
 * - Professional timeline with hover details
 * - Expandable work experience cards
 * - Clean, well-commented code structure for easy maintenance
 */
const CVSection = () => {
  // State management for interactive features
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null);
  const [activeTimelineItem, setActiveTimelineItem] = useState<string | null>(null);

  /**
   * Skills Data Structure - Organized by Categories
   * Removed percentages for cleaner presentation
   */
  const skillsData = {
    coreSkills: {
      title: "Core Skills",
      categories: {
        "Leadership & Management": [
          "Critical Thinking",
          "Analytical Thinking", 
          "Leadership",
          "Stakeholder Management",
          "Project Management"
        ],
        "Strategy & Planning": [
          "Strategy and Planning",
          "System and Process Building",
          "Monitoring and Evaluation",
          "Research"
        ],
        "Communication": [
          "Effective Communication in Multi-stakeholder Environment",
          "Public Speaking",
          "Report Writing"
        ]
      }
    },
    technicalSkills: {
      title: "IT Tools & Technical Skills",
      categories: {
        "Data Analysis & Visualization": [
          "Python",
          "SQL", 
          "Tableau",
          "Power BI",
          "Looker Studio",
          "Data Analytics"
        ],
        "Data Management": [
          "DBMS",
          "Snowflake",
          "Data Cataloging",
          "SPSS"
        ],
        "Project Management Tools": [
          "ClickUp",
          "Notion", 
          "MS Office"
        ],
        "Data Collection": [
          "ODK",
          "Survey Design"
        ]
      }
    }
  };

  /**
   * Professional Experience Data - Structured for Timeline View
   * Each experience includes summary and detailed description
   */
  const professionalExperience = [
    {
      id: "cs-haryana",
      position: "Consultant",
      organization: "Chief Secretary to Government of Haryana' Office",
      location: "Chandigarh",
      duration: "July'24 - Present",
      type: "Current",
      summary: "Led monitoring of ~1,30,000 citizen grievances across 80+ categories, achieving 80% resolution rate.",
      details: [
        "Led the monitoring of ~1,30,000 citizen grievances across 80+ grievances categories by developing a citizen-centric online portal; achieved an 80% resolution rate",
        "Resolved grievances by segregating them into policy recommendations and implementation issues",
        "Orchestrated end-to-end grievance redressal workflows of 500+ complaints received at the CM office with all the line departments at state-level",
        "Executed advanced governance analytics for insight generation, policy alteration, and achieve operational efficiency",
        "Additionally supported at Haryana Urban Development Authority's projects on ERP and OBPAS software upgradation, Executive Human resource management dashboard development, and Central File Monitoring Dashboard"
      ]
    },
    {
      id: "cmgga-haryana", 
      position: "Chief Minister's Associate",
      organization: "Chief Minister's Good Governance Associate (CMGGA) Program",
      location: "Haryana",
      duration: "Mar'23 - June'24",
      type: "Government",
      summary: "Collaborated with district officials implementing 35+ programs across 7 domains and impacting 15,000+ students.",
      details: [
        "Collaborated with Deputy Commissioner and district officials in cross-collaboration for implementing, and monitoring 35 programs across 7 domains, 30+ departments, and 12 SDGs",
        "Supported 3000+ below Poverty Line families by facilitating linkage with various income generation avenues (skilling, loans, employment) and building strong monitoring and review systems",
        "Supervised the construction and maintenance of 119 ponds under the 'Amrit Sarovar' mission. This included 30 ponds for recreational activities and 10 ponds for income-generating initiatives, resulting in an annual income increase of 20 lakhs",
        "Mobilized 15 lakhs INR through CSR and Zila Parishad funds for renovation project of 11 playschools",
        "Enhanced the adoption rate of the flagship tablet-based learning scheme by 30% and impacted over 15,000 students across the district within four months by building a cascading review system",
        "Leveraged data-backed review and targeted interventions to Improve district service delivery ranking by 16 places (18th to 2nd)",
        "Streamlined the supply of dual desks for over 4000 students across districts and established a dignified learning environment by ensuring fairness and transparency across the process"
      ]
    },
    {
      id: "sattva-consulting",
      position: "Associate Consultant – Data Analyst", 
      organization: "Sattva Consulting Pvt. Ltd. - India Data Insights",
      location: "Bengaluru",
      duration: "Oct '21 – Mar'23",
      type: "Private",
      summary: "Developed 50+ interactive data assets and maintained 1000+ datasets while automating data pipelines.",
      details: [
        "Developed and Deployed 50+ interactive data assets using data extraction, cleaning, and visualising tools (Tableau/PowerBI) on public and open government data for efficient impact evaluation and data storytelling",
        "Curated & Maintained 1000+ primary and secondary well-structured datasets within cloud-based database, while playing a key role in development of organization's central data repository to manage data quality, accessibility",
        "Automated data pipelines to reduce extraction time by 90% and enhanced team efficiency by using Python scripts",
        "Used DAX along with Power BI for complex and large datasets",
        "Contributed to executive dashboard design for NITI Aayog Project (NITI for States Portal) by integrating diverse datasets"
      ]
    },
    {
      id: "sird-punjab",
      position: "Young Professional",
      organization: "State Institute of Rural Development and Panchayats",
      location: "Punjab", 
      duration: "Sep '20 – Oct'21",
      type: "Government",
      summary: "Enabled data-led planning across 13,000+ panchayats and impacted 6000+ elected women representatives.",
      details: [
        "Enabled data-led planning across 13,000+ panchayats by managing a project on integrating SDGs into panchayat-level planning in collaboration with SDGCC-UNDP",
        "Ideated and Designed SDG integration framework and Panchayat Indicator Framework with 100+ KPIs",
        "Impacted over 6000+ elected women representatives (EWR) by conducting a Training Needs Assessment (TNA) Survey in partnership with SEWA Bharat to design training modules"
      ]
    }
  ];

  /**
   * Educational Background Data
   */
  const education = [
    {
      degree: "Professional Executive Development Program in Data Science for Social Impact",
      institution: "Ashoka University (Remote)",
      duration: "2024 - 2025",
      achievement: "Awarded 100% Scholarship"
    },
    {
      degree: "Post Graduate Diploma in Rural Management", 
      institution: "National Institute of Rural Development and Panchayats (NIRD), Hyderabad",
      duration: "2018-2020",
      achievement: ""
    },
    {
      degree: "Bachelor of Technology – Computer Science",
      institution: "Jaipur National University, Jaipur",
      duration: "2013-2017", 
      achievement: ""
    }
  ];

  /**
   * Toggle experience expansion handler
   */
  const toggleExperience = (id: string) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  /**
   * Render Skills Section with Categories
   */
  const renderSkillsSection = () => (
    <div className="grid md:grid-cols-2 gap-8">
      {Object.entries(skillsData).map(([key, skillGroup]) => (
        <Card key={key} className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
          <CardContent className="p-6">
            <h3 className="text-xl font-serif font-medium text-slate-800 dark:text-slate-100 mb-6">
              {skillGroup.title}
            </h3>
            
            <div className="space-y-6">
              {Object.entries(skillGroup.categories).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3 uppercase tracking-wider">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  /**
   * Render Professional Timeline
   */
  const renderProfessionalTimeline = () => (
    <div className="space-y-6">
      {professionalExperience.map((exp, index) => (
        <Card 
          key={exp.id}
          className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 cursor-pointer"
          onMouseEnter={() => setActiveTimelineItem(exp.id)}
          onMouseLeave={() => setActiveTimelineItem(null)}
        >
          <CardContent className="p-6">
            {/* Experience Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Badge 
                    variant={exp.type === 'Current' ? 'default' : 'secondary'}
                    className={exp.type === 'Current' ? 'bg-green-500' : ''}
                  >
                    {exp.type}
                  </Badge>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {exp.duration}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                  {exp.position}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-1">
                  {exp.organization}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                  📍 {exp.location}
                </p>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleExperience(exp.id)}
                className="ml-4"
              >
                {expandedExperience === exp.id ? <ChevronUp /> : <ChevronDown />}
              </Button>
            </div>

            {/* Summary */}
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              {exp.summary}
            </p>

            {/* Expanded Details */}
            {expandedExperience === exp.id && (
              <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mt-4">
                <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-3">
                  Key Responsibilities & Achievements:
                </h4>
                <ul className="space-y-2">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );

  /**
   * Render Education Section
   */
  const renderEducationSection = () => (
    <div className="space-y-4">
      {education.map((edu, index) => (
        <Card key={index} className="bg-gradient-to-r from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-800 border-blue-200/50 dark:border-blue-800/50">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">
                  {edu.degree}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-1">
                  {edu.institution}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {edu.duration}
                </p>
                {edu.achievement && (
                  <Badge variant="secondary" className="mt-2 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    {edu.achievement}
                  </Badge>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <section id="cv" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-500 relative">
      {/* Animated Background */}
      <AnimatedBackground variant="tertiary" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-slate-800 dark:text-slate-100 mb-6">
            Professional Profile
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6">
            A comprehensive overview of my professional journey, skills, and educational background
          </p>
          <div className="w-24 h-px bg-slate-300 dark:bg-slate-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-100 text-center mb-8">
              💼 Skills & Expertise
            </h3>
            {renderSkillsSection()}
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-100 text-center mb-8">
              🏢 Professional Experience
            </h3>
            {renderProfessionalTimeline()}
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-100 text-center mb-8">
              🎓 Education
            </h3>
            {renderEducationSection()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
