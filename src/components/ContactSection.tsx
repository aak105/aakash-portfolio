
import { Mail, MessageSquare, ExternalLink, MapPin, Phone, Linkedin, Github, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-slate-800 dark:text-slate-100 mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Whether you're working on governance challenges, data projects, or social impact initiatives, I'd love to hear from you.
          </p>
          <div className="w-24 h-px bg-slate-300 dark:bg-slate-600 mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <Card className="bg-gradient-to-br from-blue-50 to-stone-50 dark:from-blue-900/10 dark:to-stone-900/10 border-blue-200/50 dark:border-blue-800/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-serif text-slate-800 dark:text-slate-100">
                  Get in Touch
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">aakashsharma.cs1@gmail.com</span>
                </div>
                
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <Phone className="w-4 h-4 text-green-500" />
                  <span className="text-sm">+91-8890991609</span>
                </div>
                
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span className="text-sm">Rajasthan, India</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interests */}
          <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10 border-green-200/50 dark:border-green-800/50">
            <CardContent className="p-6">
              <h3 className="text-lg font-serif text-slate-800 dark:text-slate-100 mb-4">
                I'm excited to discuss:
              </h3>
              
              <div className="space-y-2 text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Data governance and policy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Public sector technology</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">Social impact measurement</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Rural development initiatives</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Links - Centered */}
        <div className="max-w-2xl mx-auto mt-12">
          <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
            <CardContent className="p-6">
              <h3 className="text-lg font-serif text-slate-800 dark:text-slate-100 mb-4 text-center">
                Connect with me
              </h3>
              
              <div className="grid md:grid-cols-3 gap-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2 text-blue-600" />
                    LinkedIn
                  </a>
                </Button>
                
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://github.com/aak105" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2 dark:text-white" />
                    GitHub
                  </a>
                </Button>

                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://public.tableau.com/app/profile/aakash.sharma7942/vizzes" target="_blank" rel="noopener noreferrer">
                    <BarChart3 className="w-4 h-4 mr-2 text-orange-500" />
                    Tableau
                  </a>
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                <p className="text-xs text-slate-500 dark:text-slate-400 italic text-center">
                  "I'm always interested in connecting with fellow practitioners, researchers, and changemakers working on public sector innovation."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
