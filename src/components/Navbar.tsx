import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Courses", href: "#courses" },
    { name: "Why Us", href: "#why-us" },
    { name: "Success Stories", href: "#testimonials" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-accent-gradient rounded-xl flex items-center justify-center shadow-glow-sm">
              <GraduationCap className="w-7 h-7 text-accent-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">IAT Technologies</span>
              <span className="text-xs text-muted-foreground">Chennai's #1 IT Training</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-accent transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero" size="lg">
              Book Free Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-border/50 animate-slide-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-accent transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="hero" size="lg" className="mt-4">
                Book Free Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
