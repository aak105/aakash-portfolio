
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedBackground from "@/components/AnimatedBackground";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-500 relative">
      {/* Animated Background */}
      <AnimatedBackground variant="secondary" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-light text-slate-800 dark:text-slate-100 mb-4">
              Let's Connect
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Ready to collaborate on building better systems? Let's discuss how we can work together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-slate-800 dark:text-slate-100 mb-6">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span>aakashsharma.cs1@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span>Chandigarh, India</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-slate-800 dark:text-slate-100 mb-6">
                  Connect Online
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/aakashsharma8a6888131/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/aak105"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Tableau Portfolio */}
            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-medium text-slate-800 dark:text-slate-100 mb-4">
                    Data Visualizations
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    Explore my interactive dashboards and data stories on Tableau Public
                  </p>
                  <Button asChild className="w-full">
                    <a
                      href="https://public.tableau.com/app/profile/aakash.sharma7942/vizzes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Tableau Portfolio
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
