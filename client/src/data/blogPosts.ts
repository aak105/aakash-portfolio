export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image_url: string;
  published: boolean;
  tags: string[];
  reading_time: number;
  created_at: string;
  updated_at: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Unifying India's Government Web Portals: Streamlining Development and Enhancing Accessibility",
    slug: "unifying-india-government-web-portals",
    content: "In the pursuit of digitalization and improved governance, the Indian government has launched numerous web portals and applications aimed at simplifying public services. However, the rapid proliferation of disparate web portals without a clear vision for interoperability is hindering their effectiveness. This article explores the challenges posed by the abundance of web portals in India and discusses the importance of a standardized framework for unified development...",
    excerpt: "Exploring the challenges posed by the abundance of web portals in India and discussing the importance of a standardized framework for unified development.",
    image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
    published: true,
    tags: ["Digital Governance", "Policy", "Technology", "Accessibility"],
    reading_time: 8,
    created_at: "2023-06-15T10:00:00Z",
    updated_at: "2023-06-15T10:00:00Z"
  },
  {
    id: "2",
    title: "Implementing Technology in Government Systems: A Delicate Balance for Success",
    slug: "implementing-technology-government-systems",
    content: "In today's rapidly evolving world, technology has the potential to revolutionize government systems and enhance public service delivery. However, implementing technology in the government sector requires careful consideration and strategic planning. This article examines how technology should be implemented in government systems, emphasizing the importance of maintaining continuity while embracing innovation...",
    excerpt: "A careful examination of how technology should be implemented in government systems, emphasizing the importance of maintaining continuity while embracing innovation.",
    image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=300&fit=crop",
    published: true,
    tags: ["Technology", "Government", "Implementation", "Policy"],
    reading_time: 6,
    created_at: "2023-07-20T10:00:00Z",
    updated_at: "2023-07-20T10:00:00Z"
  },
  {
    id: "3",
    title: "Data-Driven Policy Making: Lessons from Rural Development Programs",
    slug: "data-driven-policy-making-rural-development",
    content: "The integration of data analytics into policy-making processes has emerged as a critical factor in the success of rural development programs. This article explores how data-driven approaches can enhance the effectiveness of government initiatives, drawing lessons from successful rural development programs across India...",
    excerpt: "Exploring how data-driven approaches can enhance the effectiveness of government initiatives in rural development.",
    image_url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=300&fit=crop",
    published: true,
    tags: ["Data Analytics", "Rural Development", "Policy", "Impact Assessment"],
    reading_time: 7,
    created_at: "2023-08-10T10:00:00Z",
    updated_at: "2023-08-10T10:00:00Z"
  }
];