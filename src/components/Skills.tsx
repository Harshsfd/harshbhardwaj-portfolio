import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "C++", "C", "JavaScript"],
      color: "bg-primary"
    },
    {
      category: "Frontend Technologies",
      skills: ["React.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
      color: "bg-accent"
    },
    {
      category: "Backend Technologies",
      skills: ["Django", "Node.js", "Express.js", "RESTful APIs"],
      color: "bg-success"
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB"],
      color: "bg-primary"
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "GitHub", "Postman", "VS Code", "Figma", "Canva"],
      color: "bg-accent"
    },
    {
      category: "AI & Modern Tools",
      skills: ["OpenAI API", "LangChain", "Hugging Face", "Prompt Engineering", "EmailJS"],
      color: "bg-success"
    },
    {
      category: "Operating Systems",
      skills: ["Windows", "Linux (Lubuntu)"],
      color: "bg-primary"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">
          Technical Skills
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A comprehensive toolkit built through hands-on experience and continuous learning
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="card-hover bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-center">
                {category.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="text-sm py-1 px-3 font-medium bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Key Achievements */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-display font-semibold mb-8">Key Technical Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 bg-gradient-card rounded-lg shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">30%</div>
            <div className="text-muted-foreground">Reduced Manual Workload</div>
          </div>
          <div className="p-6 bg-gradient-card rounded-lg shadow-card">
            <div className="text-3xl font-bold text-accent mb-2">25%</div>
            <div className="text-muted-foreground">API Response Time Improvement</div>
          </div>
          <div className="p-6 bg-gradient-card rounded-lg shadow-card">
            <div className="text-3xl font-bold text-success mb-2">20%</div>
            <div className="text-muted-foreground">UX Enhancement</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;