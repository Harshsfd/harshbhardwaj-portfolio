import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "harshbhardwajsfd@gmail.com",
      action: () => window.open('mailto:harshbhardwajsfd@gmail.com'),
      primary: true
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8569921708",
      action: () => window.open('tel:+918569921708'),
      primary: true
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Harshsfd",
      action: () => window.open('https://github.com/Harshsfd', '_blank'),
      primary: false
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/harshsfd",
      action: () => window.open('https://linkedin.com/in/harshsfd', '_blank'),
      primary: false
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Haryana, India",
      action: () => {},
      primary: false
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">
          Let's Connect
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting projects. 
          Let's discuss how we can work together!
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Primary Contact */}
        <div className="text-center mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="btn-gradient btn-glow font-semibold px-8 py-3"
              onClick={() => window.open('mailto:harshbhardwajsfd@gmail.com')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('tel:+918569921708')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Me
            </Button>
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((contact, index) => (
            <Card 
              key={index} 
              className={`card-hover bg-gradient-card border-0 shadow-card cursor-pointer ${
                contact.primary ? 'ring-2 ring-primary/20' : ''
              }`}
              onClick={contact.action}
            >
              <CardContent className="p-6 text-center">
                <div className={`p-4 rounded-full mx-auto mb-4 w-fit ${
                  contact.primary ? 'bg-primary/10' : 'bg-secondary/50'
                }`}>
                  <contact.icon className={`w-6 h-6 ${
                    contact.primary ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{contact.label}</h3>
                <p className={`text-sm ${
                  contact.primary ? 'text-primary font-medium' : 'text-muted-foreground'
                }`}>
                  {contact.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary text-white border-0 shadow-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-semibold mb-4">
                Ready to start a project together?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-black hover:bg-white/10 hover:border-white/50"
                  onClick={() => window.open('https://github.com/Harshsfd', '_blank')}
                >
                  <Github className="w-5 h-5 mr-2" />
                  View GitHub
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-black hover:bg-white/10 hover:border-white/50"
                  onClick={() => window.open('https://linkedin.com/in/harshsfd', '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;