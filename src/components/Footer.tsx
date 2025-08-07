import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display font-bold text-2xl mb-4">Harsh Bhardwaj</h3>
            <p className="text-background/80 mb-4">
              Software Developer passionate about creating innovative solutions 
              and building scalable applications.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => window.open('https://github.com/Harshsfd', '_blank')}
                className="p-2 hover:bg-background/10 rounded-lg transition-colors"
              >
                <Github className="w-5 h-5" />
              </button>
              <button 
                onClick={() => window.open('https://linkedin.com/in/harshsfd', '_blank')}
                className="p-2 hover:bg-background/10 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button 
                onClick={() => window.open('mailto:harshbhardwajsfd@gmail.com')}
                className="p-2 hover:bg-background/10 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
              </button>
              <button 
                onClick={() => window.open('tel:+918569921708')}
                className="p-2 hover:bg-background/10 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span className="text-background/80">harshbhardwajsfd@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span className="text-background/80">+91 8569921708</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60">
            © {currentYear} Harsh Bhardwaj. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;