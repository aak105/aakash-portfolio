import { X, Calendar, Clock, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogPost {
  title: string;
  content: string;
  excerpt: string;
  tags: string[];
  readingTime: number;
  date: string;
  image: string;
  linkedinUrl: string;
}

interface BlogModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

const BlogModal = ({ post, isOpen, onClose }: BlogModalProps) => {
  if (!post) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <DialogTitle className="text-2xl font-serif text-slate-800 dark:text-slate-100 pr-8 leading-tight">
              {post.title}
            </DialogTitle>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mt-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </DialogHeader>

        <div className="mt-6">
          {post.image && (
            <div className="relative h-64 w-full overflow-hidden rounded-lg mb-6">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {post.excerpt}
            </p>
            
            <div className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </div>

          <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            
            <Button asChild>
              <a 
                href={post.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Read Full Article on LinkedIn
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BlogModal;