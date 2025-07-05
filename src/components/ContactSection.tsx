
import { useState } from "react";
import { Mail, Linkedin, Github, Instagram, MapPin, Send, Phone } from "lucide-react";
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
    // Auto-send to: aakashsharma.cs1@gmail.com
    const mailtoLink = `mailto:aakashsharma.cs1@gmail.com?subject=Contact from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
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
      url: 'https://www.linkedin.com/in/aakashsharma8a6888131/',
      color: 'hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: '#',
      color: 'hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-950/20'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/aakash_10_5',
      color: 'hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-950/20'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:aakashsharma.cs1@gmail.com',
      color: 'hover:text-cyan-600 hover:bg-cyan-50 dark:hover:bg-cyan-950/20'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 via-blue-700 to-cyan-600 dark:from-slate-100 dark:via-blue-300 dark:to-cyan-300 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Ready to collaborate on impactful technology solutions? Let's start a conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-3xl p-8 border border-cyan-200/30 dark:border-cyan-700/30 animate-fade-in shadow-lg">
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
                  className="mt-2 bg-white/80 dark:bg-slate-700/80 border-cyan-200 dark:border-cyan-600 focus:border-cyan-500 dark:focus:border-cyan-400 transition-all duration-300 rounded-xl"
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
                  className="mt-2 bg-white/80 dark:bg-slate-700/80 border-cyan-200 dark:border-cyan-600 focus:border-cyan-500 dark:focus:border-cyan-400 transition-all duration-300 rounded-xl"
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
                  className="mt-2 bg-white/80 dark:bg-slate-700/80 border-cyan-200 dark:border-cyan-600 focus:border-cyan-500 dark:focus:border-cyan-400 transition-all duration-300 resize-none rounded-xl"
                  placeholder="Tell me about your project or idea..."
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-600 via-blue-600 to-slate-700 hover:from-cyan-700 hover:via-blue-700 hover:to-slate-800 text-white py-4 rounded-xl text-lg font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 group"
              >
                Send Message
                <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
              </Button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Location */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 border border-cyan-200/30 dark:border-cyan-700/30 shadow-lg">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-cyan-500 mr-3" />
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Location</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                Chandigarh, India<br />
                Available for remote collaboration worldwide
              </p>
            </div>

            {/* Contact Info */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 border border-cyan-200/30 dark:border-cyan-700/30 shadow-lg">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-cyan-500 mr-3" />
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Email</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                aakashsharma.cs1@gmail.com
              </p>
            </div>

            {/* Social Links */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 border border-cyan-200/30 dark:border-cyan-700/30 shadow-lg">
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4">Connect With Me</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center p-4 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg group`}
                    title={social.name}
                  >
                    <social.icon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    <span className="font-medium text-sm">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-slate-500/10 dark:from-cyan-400/10 dark:via-blue-400/10 dark:to-slate-400/10 rounded-2xl p-8 border border-cyan-200/20 dark:border-cyan-700/20 shadow-lg">
              <blockquote className="text-xl italic text-slate-700 dark:text-slate-300 text-center mb-6 leading-relaxed">
                "I believe in building tools that serve people, not the other way around."
              </blockquote>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-slate-700 flex items-center justify-center text-white text-lg font-bold mx-auto mb-3 shadow-lg">
                  AS
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-medium">Aakash Sharma</p>
                <p className="text-slate-500 dark:text-slate-500 text-sm">Data-Driven Governance Consultant</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-slate-200/30 dark:border-slate-700/30">
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
