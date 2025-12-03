import { 
  Target, 
  Laptop, 
  Clock, 
  GraduationCap, 
  BookOpen, 
  Lightbulb, 
  Award, 
  Wallet,
  CheckCircle2
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "100% Placement Support",
    description: "Unlimited interview opportunities with top companies until you land your dream job",
    highlights: ["Resume Building", "Interview Prep", "Job Referrals"],
  },
  {
    icon: Laptop,
    title: "Real-Time Projects",
    description: "Work on live industry projects to build a strong portfolio and practical experience",
    highlights: ["Industry Projects", "Portfolio Dev", "Case Studies"],
  },
  {
    icon: Clock,
    title: "Unlimited Lab Access",
    description: "Practice anytime with 24/7 lab access to master technologies at your own pace",
    highlights: ["24/7 Access", "Cloud Labs", "Practice Tests"],
  },
  {
    icon: GraduationCap,
    title: "Industry Expert Trainers",
    description: "Learn from professionals with 10+ years of real-world industry experience",
    highlights: ["Certified Experts", "Industry Veterans", "Mentorship"],
  },
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "Updated course content aligned with latest industry standards and requirements",
    highlights: ["Latest Tech", "Industry-Aligned", "Hands-On Focus"],
  },
  {
    icon: Lightbulb,
    title: "Hands-On Training",
    description: "70% practical and 30% theory approach for better skill retention and mastery",
    highlights: ["70% Practical", "Live Coding", "Project-Based"],
  },
  {
    icon: Award,
    title: "Certification Partners",
    description: "Get certified with recognized bodies like TFSC, Donbosco, and TN Auto Skill",
    highlights: ["Industry Certs", "Global Recognition", "Career Boost"],
  },
  {
    icon: Wallet,
    title: "0% EMI Options",
    description: "Flexible payment options including 0% EMI and loan assistance for all courses",
    highlights: ["0% Interest", "Easy EMI", "Loan Support"],
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-glow-gradient opacity-20 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            What Makes IAT Technologies <span className="text-gradient">Different</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We don't just train students — we transform careers. Our comprehensive approach 
            ensures you're 100% job-ready from day one.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card-gradient border border-border/50 rounded-2xl p-6 hover:border-accent/50 transition-all duration-500 hover:shadow-glow-sm"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>

              {/* Highlights */}
              <div className="space-y-2">
                {feature.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Training Modes */}
        <div className="mt-16 bg-card-gradient border border-border/50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Flexible Learning Modes
            </h3>
            <p className="text-muted-foreground">Choose the learning style that fits your schedule</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Online Live Classes", desc: "Learn from anywhere with interactive live sessions", icon: "💻" },
              { title: "Classroom Training", desc: "Traditional hands-on learning in our Chennai center", icon: "🏫" },
              { title: "Hybrid Mode", desc: "Blend of online and offline for maximum flexibility", icon: "🔄" },
            ].map((mode) => (
              <div
                key={mode.title}
                className="text-center p-6 bg-secondary/50 rounded-2xl border border-border/30 hover:border-accent/50 transition-all"
              >
                <span className="text-4xl mb-4 block">{mode.icon}</span>
                <h4 className="text-lg font-semibold text-foreground mb-2">{mode.title}</h4>
                <p className="text-sm text-muted-foreground">{mode.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
