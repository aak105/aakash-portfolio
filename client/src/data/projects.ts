export interface Project {
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
  created_at: string;
  updated_at: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Political & Election Data Analysis",
    description: "Comprehensive analysis of India's political and election data with interactive dashboards for researchers",
    long_description: "A comprehensive platform for analyzing India's political landscape through data visualization and interactive dashboards. Features include constituency-wise voting patterns, candidate performance metrics, and historical election trends across different levels of government.",
    tech_stack: ["Python", "R", "Tableau", "PostgreSQL", "React"],
    image_url: "https://images.unsplash.com/photo-1529539795054-3c162aab037a?w=600&h=400&fit=crop",
    project_url: "https://indiadatainsights.com",
    github_url: "https://github.com/aakash-sharma/election-data-analysis",
    category: "Data Analytics",
    featured: true,
    created_at: "2023-06-15T10:00:00Z",
    updated_at: "2023-06-15T10:00:00Z"
  },
  {
    id: "2",
    title: "Government Portal Accessibility Framework",
    description: "Standardized framework for improving accessibility across government web portals",
    long_description: "Developed a comprehensive framework to standardize accessibility features across government digital platforms. Includes automated testing tools, design guidelines, and implementation strategies to ensure digital inclusion for all citizens.",
    tech_stack: ["TypeScript", "Node.js", "React", "WCAG 2.1", "Jest"],
    image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    project_url: "https://accessibility-framework.gov.in",
    github_url: "https://github.com/aakash-sharma/govt-accessibility-framework",
    category: "Digital Governance",
    featured: true,
    created_at: "2023-07-20T10:00:00Z",
    updated_at: "2023-07-20T10:00:00Z"
  },
  {
    id: "3",
    title: "Rural Development Impact Dashboard",
    description: "Real-time monitoring and evaluation platform for rural development programs",
    long_description: "Interactive dashboard system for tracking the impact of rural development initiatives across India. Features real-time data integration, performance metrics, and predictive analytics to support evidence-based policy decisions.",
    tech_stack: ["Python", "Django", "D3.js", "PostgreSQL", "Apache Kafka"],
    image_url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
    project_url: "https://rural-dashboard.gov.in",
    github_url: "https://github.com/aakash-sharma/rural-development-dashboard",
    category: "Social Impact",
    featured: true,
    created_at: "2023-08-10T10:00:00Z",
    updated_at: "2023-08-10T10:00:00Z"
  },
  {
    id: "4",
    title: "Data Privacy Compliance Tool",
    description: "Automated tool for ensuring data privacy compliance across government systems",
    long_description: "Comprehensive tool for auditing and ensuring data privacy compliance across government digital infrastructure. Includes automated scanning, risk assessment, and remediation recommendations based on Indian data protection regulations.",
    tech_stack: ["Python", "FastAPI", "MongoDB", "Redis", "Docker"],
    image_url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    project_url: "https://privacy-compliance.gov.in",
    github_url: "https://github.com/aakash-sharma/data-privacy-tool",
    category: "Security",
    featured: false,
    created_at: "2023-09-05T10:00:00Z",
    updated_at: "2023-09-05T10:00:00Z"
  }
];