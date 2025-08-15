import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Bot, Globe, Code, Zap } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AI Multi-Provider Chat",
      description: "A chatbot supporting multiple AI providers with real-time responses.",
      icon: Bot,
      tech: ["Next.js", "Tailwind CSS", "OpenAI API", "TypeScript"],
      liveUrl: "https://ai-multiprovider-chat.vercel.app/",
      githubUrl: "https://github.com/Harshsfd/Multi-Bot",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with modern UI/UX and animations.",
      icon: Globe,
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://harshbhardwaj-portfolio.vercel.app/",
      githubUrl: "https://github.com/Harshsfd/Portfolio",
    },
    {
      title: "Code Snippet Manager",
      description: "Organize and share code snippets with syntax highlighting.",
      icon: Code,
      tech: ["Next.js", "Prism.js", "MongoDB"],
      liveUrl: "https://codesnip.vercel.app/",
      githubUrl: "https://github.com/Harshsfd/CodeSnippet",
    },
    {
      title: "Fast Tools",
      description: "A collection of online utilities for developers.",
      icon: Zap,
      tech: ["React", "Tailwind CSS", "Vite"],
      liveUrl: "https://fasttools.vercel.app/",
      githubUrl: "https://github.com/Harshsfd/FastTools",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Icon className="w-6 h-6 text-primary" />
                    <CardTitle>{project.title}</CardTitle>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <div className="mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-xs mr-2 mb-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
