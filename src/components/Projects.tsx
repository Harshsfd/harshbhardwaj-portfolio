import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Users, Zap, Mail } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SIET Resume Generator",
      description: "A comprehensive resume builder web application that generates ATS-optimized resumes with pre-designed templates.",
      features: [
        "Pre-designed professional templates",
        "Email functionality using EmailJS",
        "Form validation and live preview",
        "Real-time template switching",
        "ATS optimization features"
      ],
      tech: ["React.js", "EmailJS", "CSS3", "JavaScript"],
      impact: "200+ users",
      icon: Mail,
      liveUrl: "https://harshsfd.github.io/Siet-Resume-Generator/",
      githubUrl: "https://github.com/Harshsfd/Siet-Resume-Generator"
    },
    {
      title: "CPU Scheduling Visualizer",
      description: "An interactive tool for visualizing various CPU scheduling algorithms with real-time simulation capabilities.",
      features: [
        "Real-time algorithm simulation",
        "Gantt chart visualization",
        "Average waiting time calculation",
        "Turnaround time analysis",
        "Intuitive student-friendly interface"
      ],
      tech: ["JavaScript", "HTML5", "CSS3", "Chart.js"],
      impact: "300+ students",
      icon: Zap,
      liveUrl: "https://harshsfd.github.io/CPU-Scheduling-Visualizer/",
      githubUrl: "https://github.com/Harshsfd/CPU-Scheduling-Visualizer"
    },
    {
      title: "EduWeb Platform",
      description: "A comprehensive education-focused platform with user management, course listings, and AI chatbot integration.",
      features: [
        "User registration and authentication",
        "Course listing and management",
        "AI chatbot for student assistance",
        "Personalized dashboard",
        "Material recommendations system"
      ],
      tech: ["Django", "Python", "OpenAI API", "MySQL"],
      impact: "50%+ engagement rate",
      icon: Users,
      liveUrl: "https://harshsfd.github.io/Eweb/",
      githubUrl: "https://github.com/Harshsfd/Eweb"
    }
  ];

  return (
    <section id="projects" className="bg-secondary/30 section-padding">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">
          Featured Projects
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Innovative solutions that showcase technical expertise and real-world impact
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="card-hover bg-gradient-card border-0 shadow-card h-full flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {project.impact}
                    </Badge>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">{project.description}</p>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col">
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3 mt-auto">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
