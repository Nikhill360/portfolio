"use client";

import { AnimatedSection } from "./animated-section";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

const technicalSkills = [
  { name: "HTML & CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "Node.js", level: 70 },
];

const designSkills = [
  { name: "UI/UX Design", level: 90 },
  { name: "Figma", level: 85 },
  { name: "Adobe XD", level: 80 },
  { name: "Photoshop", level: 75 },
  { name: "Illustrator", level: 70 },
  { name: "Motion Design", level: 65 },
];

const softSkills = [
  "Communication",
  "Problem Solving",
  "Teamwork",
  "Time Management",
  "Adaptability",
  "Creativity",
  "Critical Thinking",
  "Attention to Detail",
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical abilities, design skills, and professional competencies.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            </TabsList>
            <TabsContent value="technical">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {technicalSkills.map((skill, index) => (
                  <AnimatedSection key={index} delay={0.1 * index} className="space-y-2">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{skill.name}</h3>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </AnimatedSection>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="design">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {designSkills.map((skill, index) => (
                  <AnimatedSection key={index} delay={0.1 * index} className="space-y-2">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{skill.name}</h3>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </AnimatedSection>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="soft">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {softSkills.map((skill, index) => (
                  <AnimatedSection key={index} delay={0.05 * index}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-muted/50 h-full">
                        <CardContent className="p-6 flex items-center justify-center h-full">
                          <h3 className="font-medium text-center">{skill}</h3>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="mt-16">
          <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-2">5+</h3>
                  <p className="text-muted-foreground">Years of Experience</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-2">50+</h3>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-2">30+</h3>
                  <p className="text-muted-foreground">Happy Clients</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}