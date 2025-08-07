import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Users, Code } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "150+ Coding Problems Solved",
      description: "Solved 150+ coding problems on GeeksforGeeks and received official goodies for consistency",
      icon: Code,
      category: "Technical Skills",
      highlight: "GeeksforGeeks Recognition"
    },
    {
      title: "Project Display Competition",
      description: "Secured 2nd position in Project Display event at SIET Nilokheri",
      icon: Trophy,
      category: "Competition",
      highlight: "2nd Position"
    },
    {
      title: "Event Coordinator",
      description: "Served as Event Coordinator for Code 'N' Complete tech fest",
      icon: Users,
      category: "Leadership",
      highlight: "Tech Fest Leadership"
    },
    {
      title: "Project Impact",
      description: "Created projects that helped 500+ students and users with practical solutions",
      icon: Award,
      category: "Impact",
      highlight: "500+ Users Helped"
    }
  ];

  return (
    <section id="achievements" className="bg-secondary/30 section-padding">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">
          Achievements & Recognition
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Recognition for technical excellence, leadership, and community impact
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {achievements.map((achievement, index) => (
          <Card key={index} className="card-hover bg-gradient-card border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                  <achievement.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-semibold text-lg leading-tight">{achievement.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {achievement.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                  <Badge className="bg-success/10 text-success border-success/20 text-xs">
                    {achievement.highlight}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Statistics */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
        <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card">
          <div className="text-3xl font-bold text-primary mb-2">150+</div>
          <div className="text-sm text-muted-foreground">Problems Solved</div>
        </div>
        <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card">
          <div className="text-3xl font-bold text-accent mb-2">500+</div>
          <div className="text-sm text-muted-foreground">Users Helped</div>
        </div>
        <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card">
          <div className="text-3xl font-bold text-success mb-2">3</div>
          <div className="text-sm text-muted-foreground">Major Projects</div>
        </div>
        <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card">
          <div className="text-3xl font-bold text-primary mb-2">2nd</div>
          <div className="text-sm text-muted-foreground">Place Winner</div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;