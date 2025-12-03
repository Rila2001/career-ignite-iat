import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Users, Award, BookOpen, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Students Trained" },
  { icon: Award, value: "40+", label: "Years Experience" },
  { icon: BookOpen, value: "50+", label: "Courses" },
  { icon: TrendingUp, value: "90%", label: "Placement Rate" },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] bg-hero-gradient overflow-hidden flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-glow-gradient blur-3xl opacity-40" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/30 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-accent font-medium">🎓 Chennai's #1 IT Training Institute</span>
          </div>

          {/* Headline - Thanglish */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-slide-up">
            Unga Career-ஐ <span className="text-gradient">Transform</span> பண்ணுங்க!
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up">
            IT Industry-ல <span className="text-foreground font-semibold">Dream Job</span> வேணுமா? 
            IATT-ல join பண்ணுங்க! <span className="text-accent font-semibold">100% Placement Support</span> with 
            Real-time Projects & Expert Training.
          </p>

          {/* Key Points */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-up">
            {["✅ Online & Classroom", "✅ 0% EMI Available", "✅ Lifetime Support"].map((item) => (
              <span key={item} className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full">
                {item}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 animate-slide-up">
            <Button variant="hero" size="xl" className="group">
              🎯 Book Free Demo Class
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="xl" className="group">
              <Phone className="w-5 h-5" />
              Enquire Now
            </Button>
          </div>

          {/* Urgency */}
          <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 max-w-lg mx-auto animate-slide-up">
            <p className="text-sm text-accent font-medium">
              🔥 Limited Seats Only! New Batch Starting Soon — Enroll இப்போவே!
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-card-gradient backdrop-blur-sm border border-border/50 rounded-xl p-4 text-center hover:border-accent/50 transition-all animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
