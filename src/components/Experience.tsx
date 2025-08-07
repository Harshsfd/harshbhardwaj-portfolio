import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experience = {
    title: "Junior Software Developer",
    company: "Pie Infocomm Pvt. Ltd.",
    location: "Noida, India",
    duration: "Aug 2022 – Sep 2022",
    achievements: [
      "Developed a task automation tool using Python and Django, reducing manual workload by 30%",
      "Enhanced UI responsiveness with Bootstrap and JavaScript, improving UX by 20%",
      "Optimized API response time by 25% in real-time applications",
      "Built front-end components using React.js for scalable SPA development"
    ]
  };

  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Government Engineering College, Nilokheri, Haryana",
      duration: "2022 – 2025",
      cgpa: "7.5"
    },
    {
      degree: "Diploma in Computer Engineering", 
      institution: "Government Polytechnic, Nilokheri, Haryana",
      duration: "2019 – 2022",
      cgpa: "8.0"
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">
          Experience & Education
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Professional journey and academic foundation in computer science
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Experience Section */}
        <div>
          <h3 className="text-2xl font-display font-semibold mb-8 text-center">
            Professional Experience
          </h3>
          <Card className="card-hover bg-gradient-card border-0 shadow-card">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Building className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold">{experience.title}</h4>
                      <p className="text-lg text-primary font-medium">{experience.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {experience.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-4">Key Achievements:</h5>
                    <ul className="space-y-3">
                      {experience.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-display font-semibold mb-8 text-center">
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="card-hover bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h4 className="font-semibold text-lg mb-2">{edu.degree}</h4>
                    <p className="text-primary font-medium mb-3">{edu.institution}</p>
                    <div className="flex justify-center gap-4 text-sm text-muted-foreground mb-3">
                      <span>{edu.duration}</span>
                    </div>
                    <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                      CGPA: {edu.cgpa}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;