
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Target, BookOpen, Lightbulb } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

/**
 * AboutSection Component
 * 
 * Comprehensive about section featuring personal story, vision, mission,
 * and core values. Enhanced with animated background and clean layout.
 */
const AboutSection = () => {
  // Core values and interests
  const coreValues = [
    { icon: Heart, label: "Empathy", color: "text-red-500" },
    { icon: Target, label: "Impact", color: "text-blue-500" },
    { icon: Lightbulb, label: "Innovation", color: "text-yellow-500" },
    { icon: BookOpen, label: "Learning", color: "text-green-500" }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-500 relative">
      {/* Animated Background */}
      <AnimatedBackground variant="secondary" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-slate-800 dark:text-slate-100 mb-6">
            About Me
          </h2>
          <div className="w-24 h-px bg-slate-300 dark:bg-slate-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Personal Story and Core Values Side by Side */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Personal Story */}
            <Card className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <CardContent className="p-8">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    I'm Aakash Sharma — a data and governance professional working at the intersection of public policy, technology, and social impact.
                  </p>
                  
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Born and raised in a small town in Rajasthan, I've always believed that quiet, thoughtful systems can create real change. My journey started with computer science and led me through grassroots governance, rural management, and data analytics — shaping me into someone who builds with empathy, not just efficiency.
                  </p>
                  
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Over the years, I've worked with district administrations, think tanks, and consulting firms — from managing citizen grievance portals in the Chief Secretary's Office to automating dashboards with Sattva's India Data Insights, and co-creating inclusive metadata tools as a Belongg AI fellow.
                  </p>
                  
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    What ties my work together is a clear belief: <strong>data should serve people, not just systems</strong>. Whether I'm working with tribal communities, state governments, or public platforms — I focus on ethical data use, open systems, and inclusive design.
                  </p>
                  
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Outside work, I find inspiration in music, mountains, and meaningful conversations. I write about data ethics and governance, and explore how we can build public systems that are not only efficient, but also just and compassionate.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Core Values */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-100 mb-8">
                💼 Core Values
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {coreValues.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <Card key={index} className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6 text-center">
                        <div className="flex justify-center mb-4">
                          <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-full">
                            <IconComponent className={`w-6 h-6 ${value.color}`} />
                          </div>
                        </div>
                        <h3 className="font-medium text-slate-800 dark:text-slate-200">
                          {value.label}
                        </h3>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision First */}
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200/50 dark:border-green-800/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-100 mb-4">
                  🌟 Vision
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  To make a significant and lasting contribution to the world of open and public data.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-800 border-blue-200/50 dark:border-blue-800/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-100 mb-4">
                  🎯 Mission
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  To design and deliver people-first data systems that improve public governance and create room for equity, trust, and transparency in social development.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Insights and Perspectives Section Placeholder */}
          <div className="text-center py-8">
            <h3 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-100 mb-4">
              💡 Insights & Perspectives
            </h3>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Through my work across government, consulting, and grassroots programs, I've developed unique perspectives on how data can transform public systems and create meaningful impact for communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
