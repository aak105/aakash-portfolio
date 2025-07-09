
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

const RecommendedReading = () => {
  // Inspiring books collection with uploaded images
  const inspiringBooks = [
    {
      title: "Mastering the Data Paradox",
      author: "Nitin Seth",
      description: "A pragmatic guide for navigating the overload and underuse of data in the AI era.",
      image: "/lovable-uploads/940f9bff-e8b1-46f7-bf83-8ed6b6ddada9.png"
    },
    {
      title: "Homo Deus: A Brief History of Tomorrow",
      author: "Yuval Noah Harari", 
      description: "An exploration of humanity's future shaped by data, algorithms, and human desires.",
      image: "/lovable-uploads/85568b84-9355-460b-9b52-e6f00e681509.png"
    },
    {
      title: "I Too Had a Dream",
      author: "Verghese Kurien",
      description: "An inspiring memoir on cooperative action, systems thinking, and rural transformation.",
      image: "/lovable-uploads/056b2bad-2659-437c-8a1a-350fca3aae54.png"
    },
    {
      title: "World Development Report 2021: Data for Better Lives",
      author: "World Bank",
      description: "A foundational document exploring how public data can be responsibly used for development and inclusion.",
      image: "/lovable-uploads/7da59162-62f6-4a7e-bd27-d8d773952999.png"
    },
    {
      title: "The Third Way: India's Revolutionary Approach to Data",
      author: "Rahul Matthan",
      description: "A compelling framework for India's distinct path in data governance, balancing innovation and public interest.",
      image: "" // No image provided for this book
    },
    {
      title: "The Emperor's Mirror",
      author: "Dr. N. Bhaskaran Rao",
      description: "A powerful critique of media narratives and their influence on perception, policy, and democratic discourse.",
      image: "/lovable-uploads/9964eff2-bf60-48bd-be84-2dc641233ef4.png"
    }
  ];

  return (
    <section id="reading" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-500 relative">
      {/* Animated Background */}
      <AnimatedBackground variant="tertiary" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-100">
                📚 Recommended Reading
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Books that have shaped my thinking on data, governance, and social impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inspiringBooks.map((book, index) => (
              <Card key={index} className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <CardContent className="p-0">
                  {book.image && (
                    <div className="aspect-[3/4] overflow-hidden">
                      <img 
                        src={book.image} 
                        alt={book.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2 line-clamp-2">
                      {book.title}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                      by {book.author}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {book.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedReading;
