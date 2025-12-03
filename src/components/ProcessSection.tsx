import { 
  MessageCircle, 
  Play, 
  CreditCard, 
  BookOpen, 
  Briefcase, 
  Trophy,
  ArrowRight 
} from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MessageCircle,
    title: "Enquiry",
    description: "Reach out to us via call, WhatsApp, or fill out our enquiry form. Our counselors will understand your goals.",
  },
  {
    step: "02",
    icon: Play,
    title: "Free Demo Class",
    description: "Attend a free demo session to experience our training methodology and meet our expert trainers.",
  },
  {
    step: "03",
    icon: CreditCard,
    title: "Enroll",
    description: "Choose your course and payment plan. We offer 0% EMI and flexible payment options.",
  },
  {
    step: "04",
    icon: BookOpen,
    title: "Training & Projects",
    description: "Learn through hands-on training, work on real-time projects, and build your portfolio.",
  },
  {
    step: "05",
    icon: Briefcase,
    title: "Mock Interviews",
    description: "Prepare with soft skills training, resume building, and multiple mock interview sessions.",
  },
  {
    step: "06",
    icon: Trophy,
    title: "Placement",
    description: "Get unlimited interview opportunities until you land your dream job with our partner companies.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-glow-gradient opacity-20 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Your Journey to <span className="text-gradient">Success</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A proven 6-step process that has helped thousands of students transform their careers 
            and land high-paying IT jobs.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="group relative bg-card-gradient border border-border/50 rounded-2xl p-8 hover:border-accent/50 transition-all duration-500"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-accent-gradient rounded-lg flex items-center justify-center shadow-glow-sm">
                <span className="text-sm font-bold text-accent-foreground">{step.step}</span>
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <step.icon className="w-8 h-8 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>

              {/* Arrow Connector (hidden on last item) */}
              {index < steps.length - 1 && index !== 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-accent/50" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-card-gradient border border-accent/30 rounded-2xl p-6 sm:p-8">
            <div className="text-left">
              <h3 className="text-xl font-bold text-foreground">Ready to Start Your Journey?</h3>
              <p className="text-muted-foreground">Book your free demo class today and take the first step</p>
            </div>
            <button className="bg-accent-gradient text-accent-foreground px-8 py-4 rounded-xl font-bold hover:shadow-glow transition-all hover:scale-105">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
