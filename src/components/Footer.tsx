import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent-gradient rounded-xl flex items-center justify-center shadow-glow-sm">
                <GraduationCap className="w-7 h-7 text-accent-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">IAT Technologies</span>
                <span className="text-xs text-muted-foreground">Chennai's #1 IT Training</span>
              </div>
            </a>
            <p className="text-sm text-muted-foreground">
              Transforming careers through industry-ready IT training with 100% placement support. 
              Join 10,000+ successful alumni.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "All Courses", "Placement", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Popular Courses</h4>
            <ul className="space-y-3">
              {[
                "AI & Machine Learning",
                "Data Science",
                "Full-Stack Development",
                "DevOps & Cloud",
                "Cyber Security",
                "Software Testing",
              ].map((course) => (
                <li key={course}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground block mb-1">Address:</strong>
                123, Anna Salai, Guindy,<br />
                Chennai - 600032, Tamil Nadu
              </li>
              <li>
                <strong className="text-foreground block mb-1">Phone:</strong>
                +91 98765 43210<br />
                +91 98765 43211
              </li>
              <li>
                <strong className="text-foreground block mb-1">Email:</strong>
                info@iattechnologies.com
              </li>
              <li>
                <strong className="text-foreground block mb-1">Hours:</strong>
                Mon - Sat: 9:00 AM - 8:00 PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} IAT Technologies. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Terms & Conditions
              </a>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-accent-foreground hover:shadow-glow transition-all"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
