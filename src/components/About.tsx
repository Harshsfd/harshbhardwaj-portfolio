import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expert in Python, Django, React.js, and modern web technologies"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Proficient in MySQL, MongoDB, and optimizing data storage solutions"
    },
    {
      icon: Globe,
      title: "API Development",
      description: "Skilled in RESTful API design and real-time application development"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Reduced API response times by 25% and improved UX by 20%"
    }
  ];

  return (
    <section id="about" className="bg-secondary/30 section-padding">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">
          About Me
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Passionate and results-driven Software Developer with hands-on experience in full-stack web development. 
          Skilled in Python, Django, React.js, and RESTful API design with a proven ability to build scalable, 
          user-centric applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {highlights.map((item, index) => (
          <Card key={index} className="card-hover bg-gradient-card border-0 shadow-card">
            <CardContent className="p-6 text-center">
              <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-card border-0 shadow-card">
          <CardContent className="p-8">
            <h3 className="text-2xl font-display font-semibold mb-6 text-center">
              Professional Journey
            </h3>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="mb-4">
                With a strong foundation in computer science engineering and hands-on experience at 
                Pie Infocomm Pvt. Ltd., I've developed expertise in building robust web applications 
                that solve real-world problems.
              </p>
              <p className="mb-4">
                My approach combines technical excellence with user-centric design, having successfully 
                automated manual processes, enhanced UI responsiveness, and optimized system performance 
                across multiple projects.
              </p>
              <p>
                I'm passionate about leveraging cutting-edge technologies and agile methodologies to 
                deliver impactful software solutions that make a difference.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;