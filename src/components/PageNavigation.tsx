
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PageNavigation = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const pages = [
    { id: 'home', name: 'Home', icon: '🏠' },
    { id: 'about', name: 'About', icon: '👋' },
    { id: 'cv', name: 'CV', icon: '📄' },
    { id: 'portfolio', name: 'Portfolio', icon: '💼' },
    { id: 'blog', name: 'Blog', icon: '📝' },
    { id: 'recommended-reading', name: 'Reading', icon: '📚' },
    { id: 'contact', name: 'Contact', icon: '📧' }
  ];

  const scrollToPage = (pageId: string, index: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentPage(index);
    
    const element = document.getElementById(pageId);
    element?.scrollIntoView({ behavior: 'smooth' });
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  const nextPage = () => {
    const nextIndex = (currentPage + 1) % pages.length;
    scrollToPage(pages[nextIndex].id, nextIndex);
  };

  const prevPage = () => {
    const prevIndex = currentPage === 0 ? pages.length - 1 : currentPage - 1;
    scrollToPage(pages[prevIndex].id, prevIndex);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isTransitioning) return;
      
      const sections = pages.map(page => document.getElementById(page.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setCurrentPage(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isTransitioning]);

  return (
    <>
      {/* Horizontal Page Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full px-6 py-3 border border-slate-200/50 dark:border-slate-700/50 shadow-lg">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevPage}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full"
              disabled={isTransitioning}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex items-center gap-3">
              {pages.map((page, index) => (
                <button
                  key={page.id}
                  onClick={() => scrollToPage(page.id, index)}
                  disabled={isTransitioning}
                  className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                    currentPage === index
                      ? 'bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-900 scale-110'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                  } ${isTransitioning ? 'opacity-50' : ''}`}
                >
                  <span className="text-lg">{page.icon}</span>
                  <span className="text-xs font-medium">{page.name}</span>
                </button>
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={nextPage}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full"
              disabled={isTransitioning}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Transition Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 z-40 bg-gradient-to-br from-slate-500/5 to-blue-500/5 backdrop-blur-sm transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        </div>
      )}
    </>
  );
};

export default PageNavigation;
