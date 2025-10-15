import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import logoImage from "@/assets/logo-inovale.jpg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logoImage} alt="INOVALE Logo" className="h-12 w-12 rounded-full" />
              <span className="font-exo text-xl font-bold gradient-text">INOVALE</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pioneering AI-driven solutions for education and enterprise. Empowering the next
              generation with cutting-edge technology.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-exo text-lg font-bold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-exo text-lg font-bold mb-4 text-foreground">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/edtech"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  EdTech Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-software"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  AI Software Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-exo text-lg font-bold mb-4 text-foreground">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-sm">Kankarbagh, Patna, Bihar, India</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                <a
                  href="mailto:inovalproserve.contact@gmail.com"
                  className="text-sm hover:text-primary transition-colors"
                >
                  inovalproserve.contact@gmail.com
                </a>
              </li>
              <li className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                  <a href="tel:+919279855683" className="text-sm hover:text-primary transition-colors">
                    +91 9279855683
                  </a>
                </div>
                <a
                  href="tel:+918102123968"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors ml-7"
                >
                  +91 8102123968
                </a>
                <a
                  href="tel:+919263624743"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors ml-7"
                >
                  +91 9263624743
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} INOVALE. All rights reserved. Innovating for Tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
