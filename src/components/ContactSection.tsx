
import { useState } from "react";
import { Mail, Linkedin, Github, Instagram, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: '#',
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: '#',
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: '#',
      color: 'hover:text-pink-600'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:aakash@example.com',
      color: 'hover:text-red-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-700 dark:from-slate-100 dark:to-blue-300 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Ready to collaborate on impactful technology solutions? Let's start a conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-slate-700/20 animate-fade-in">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-slate-700 dark:text-slate-300 font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-2 bg-white/50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-slate-700 dark:text-slate-300 font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-2 bg-white/50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-slate-700 dark:text-slate-300 font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="mt-2 bg-white/50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or idea..."
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
              >
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Location */}
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/20">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-blue-500 mr-3" />
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Location</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                Chandigarh, India<br />
                Available for remote collaboration worldwide
              </p>
            </div>

            {/* Social Links */}
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/20">
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4">Connect With Me</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                    title={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/10 dark:to-purple-400/10 rounded-2xl p-6 border border-blue-200/20 dark:border-blue-700/20">
              <blockquote className="text-lg italic text-slate-700 dark:text-slate-300 text-center">
                "I believe in building tools that serve people, not the other way around."
              </blockquote>
              <div className="text-center mt-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold mx-auto">
                  AS
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">Aakash Sharma</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-slate-200/20 dark:border-slate-700/20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-500 dark:text-slate-400">
            © 2024 Aakash Sharma. Built with passion for impact-driven technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
