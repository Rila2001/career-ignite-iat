import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border/50 py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              <span className="text-accent">IAT</span> Technologies
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Chennai's #1 IT Training Institute. Transform your career with 100% placement support! 🎓
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              <a href="#courses" className="hover:text-accent transition-colors">Courses</a>
              <a href="#why-us" className="hover:text-accent transition-colors">Why Us</a>
              <a href="#testimonials" className="hover:text-accent transition-colors">Reviews</a>
              <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                +91 98765 43210
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                info@iattechnologies.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                Chennai, Tamil Nadu
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/50 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 IAT Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
