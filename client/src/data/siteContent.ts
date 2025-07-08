export interface SiteContent {
  section: string;
  content: any;
}

export const siteContent: Record<string, any> = {
  hero: {
    title: "Solving Public Problems with Data, Design, and Grit",
    subtitle: "I'm Aakash Sharma – a technologist-turned-governance consultant blending data systems, AI tools, and policy to drive change on the ground.",
    quote: "Here's someone who cares deeply, works quietly, thinks structurally, and builds for people.",
    cta: "Let's build better systems together"
  },
  about: {
    title: "About Me",
    content: "I work at the intersection of data, governance, and social impact, bringing a small-town, grounded perspective to complex public challenges. My journey spans from computer science to rural management, from governance consulting to data analytics – always with the goal of building systems that serve people better.",
    values: ["Clarity", "Impact", "Simplicity", "Sincerity", "Curiosity"],
    mission: "To leverage ethical technology and data-driven insights for meaningful social change"
  }
};