import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Developer workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white section-padding">
        <div className="animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            Harsh Bhardwaj
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/90">
            Software Developer
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/80">
            Passionate full-stack developer with expertise in Python, Django, React.js, 
            and building scalable, user-centric applications
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>harshbhardwajsfd@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 8569921708</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="btn-gradient btn-glow font-semibold px-8 py-3"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-black hover:bg-white/10 hover:border-white/50"
                onClick={() => window.open('https://github.com/Harshsfd', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-black hover:bg-white/10 hover:border-white/50"
                onClick={() => window.open('https://linkedin.com/in/harshsfd', '_blank')}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;