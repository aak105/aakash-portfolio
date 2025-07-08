import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock } from "lucide-react";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blogPosts";

const Admin = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Lock className="h-8 w-8 text-slate-600 dark:text-slate-300" />
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-light text-slate-800 dark:text-slate-100 mb-4">
              Portfolio Overview
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              This is a static version of the portfolio. Content is managed through data files.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Projects Summary */}
            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800 dark:text-slate-100">
                  Projects ({projects.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="border-b border-slate-200 dark:border-slate-700 pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium text-slate-800 dark:text-slate-100">
                            {project.title}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {project.tech_stack.slice(0, 3).map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {project.featured && (
                          <Badge variant="default" className="ml-2">
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Blog Posts Summary */}
            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800 dark:text-slate-100">
                  Blog Posts ({blogPosts.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="border-b border-slate-200 dark:border-slate-700 pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium text-slate-800 dark:text-slate-100">
                            {post.title}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                            {post.excerpt}
                          </p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {post.published && (
                          <Badge variant="default" className="ml-2">
                            Published
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-medium text-slate-800 dark:text-slate-100 mb-2">
                Static Site Configuration
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                This portfolio is configured as a static site. Content is managed through data files in the <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">client/src/data/</code> directory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;