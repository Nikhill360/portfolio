"use client";

import { AnimatedSection } from "./animated-section";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Download, Heart, Lightbulb, Sparkles } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Get to know me better - my background, passions, and what drives me to create amazing digital experiences.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 blur-xl"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <img
                  src="/images/1.jpg"
                  alt="Riya Kohar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="space-y-6">
            <h3 className="text-2xl font-bold">
              I'm <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Riya Khohar</span>, a Creative Developer
            </h3>
            <p className="text-muted-foreground">
              With over 5 years of experience in web development and design, I specialize in creating engaging digital experiences that combine beautiful aesthetics with functional user interfaces.
            </p>
            <p className="text-muted-foreground">
              My journey began when I discovered my passion for coding during college. Since then, I've worked with various clients and companies to bring their visions to life through creative technology solutions.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring new design trends, experimenting with digital art, or hiking in nature to find inspiration.
            </p>

            {/* <div className="pt-4">
              <Button asChild>
                <Link href="#" download>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Link>
              </Button>
            </div> */}
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          <AnimatedSection delay={0.6}>
            <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Creative Thinking</h3>
                <p className="text-muted-foreground">
                  I approach each project with a fresh perspective, finding innovative solutions to complex problems.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.7}>
            <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Problem Solver</h3>
                <p className="text-muted-foreground">
                  I enjoy tackling challenges and finding elegant solutions that enhance user experiences.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.8}>
            <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Passionate Creator</h3>
                <p className="text-muted-foreground">
                  I put my heart into every project, ensuring attention to detail and quality in all my work.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}