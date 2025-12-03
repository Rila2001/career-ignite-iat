import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, BookOpen, TrendingUp, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const stats = [
  { icon: Users, value: "10,000+", label: "Students Trained" },
  { icon: Award, value: "40+", label: "Years Experience" },
  { icon: BookOpen, value: "50+", label: "Course Domains" },
  { icon: TrendingUp, value: "90%", label: "Placement Rate" },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Circuit Pattern Background */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />
      
      {/* Glow Effect */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-glow-gradient blur-3xl opacity-50" />
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50 animate-fade-in">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Chennai's #1 IT Training Institute</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight animate-slide-up">
              Transform Your Career with{" "}
              <span className="text-gradient">Industry-Ready Skills</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-slide-up delay-100">
              Master in-demand technologies through hands-on projects, expert mentorship, 
              and <span className="text-foreground font-semibold">100% placement guidance</span>. 
              Your dream IT career starts here.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 animate-slide-up delay-200">
              {["Online & Classroom Training", "0% EMI Available", "Lifetime Support"].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  {feature}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-300">
              <Button variant="hero" size="xl" className="group">
                Book Free Demo Class
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="hero-outline" size="xl" className="group">
                <Play className="w-5 h-5" />
                Explore Courses
              </Button>
            </div>

            {/* Urgency Banner */}
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 animate-slide-up delay-400">
              <p className="text-sm text-accent font-medium">
                🎓 Limited seats available! New batch starting soon — Enroll now to secure your spot.
              </p>
            </div>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-card animate-scale-in">
              <img
                src={heroImage}
                alt="Students learning at IAT Technologies"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-card-gradient backdrop-blur-sm border border-border/50 rounded-2xl p-5 hover:border-accent/50 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <stat.icon className="w-6 h-6 text-accent mb-3" />
                  <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
