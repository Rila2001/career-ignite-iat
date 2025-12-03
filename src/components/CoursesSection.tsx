import { Button } from "@/components/ui/button";
import { 
  Brain, 
  BarChart3, 
  Code2, 
  Cloud, 
  Shield, 
  TestTube, 
  Cog, 
  Megaphone,
  ArrowRight,
  Clock,
  Users,
  Briefcase
} from "lucide-react";

const courses = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Master Python, TensorFlow, Deep Learning, NLP & Computer Vision",
    duration: "4-6 Months",
    outcome: "ML Engineer / AI Developer",
    projects: "5+ Real Projects",
    popular: true,
  },
  {
    icon: BarChart3,
    title: "Data Science & Analytics",
    description: "Excel in Python, SQL, Power BI, Tableau & Statistical Analysis",
    duration: "3-5 Months",
    outcome: "Data Analyst / Scientist",
    projects: "4+ Live Projects",
    popular: true,
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Build with React, Node.js, MongoDB, Express & REST APIs",
    duration: "5-6 Months",
    outcome: "Full-Stack Developer",
    projects: "6+ Portfolio Projects",
    popular: true,
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud Computing",
    description: "AWS, Azure, Docker, Kubernetes, Jenkins & CI/CD Pipelines",
    duration: "3-4 Months",
    outcome: "DevOps Engineer",
    projects: "3+ Cloud Projects",
    popular: false,
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description: "Ethical Hacking, Network Security, SIEM & Penetration Testing",
    duration: "4-5 Months",
    outcome: "Security Analyst",
    projects: "4+ Security Labs",
    popular: false,
  },
  {
    icon: TestTube,
    title: "Software Testing",
    description: "Manual & Automation Testing, Selenium, JIRA & API Testing",
    duration: "2-3 Months",
    outcome: "QA Engineer",
    projects: "3+ Test Projects",
    popular: false,
  },
  {
    icon: Cog,
    title: "RPA & Automation",
    description: "UiPath, Blue Prism, Automation Anywhere & Process Mining",
    duration: "2-3 Months",
    outcome: "RPA Developer",
    projects: "3+ Automation Bots",
    popular: false,
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "SEO, SEM, Social Media, Google Ads & Analytics",
    duration: "2-3 Months",
    outcome: "Digital Marketer",
    projects: "Live Campaigns",
    popular: false,
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-glow-gradient opacity-30 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Courses</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Industry-Leading <span className="text-gradient">IT Training Programs</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose from 50+ courses designed by industry experts. Each program includes real-time projects, 
            placement support, and certification.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className="group relative bg-card-gradient border border-border/50 rounded-2xl p-6 hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-sm"
            >
              {/* Popular Badge */}
              {course.popular && (
                <div className="absolute -top-3 right-4 bg-accent-gradient px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-accent-foreground">Popular</span>
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <course.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-2">{course.title}</h3>
              <p className="text-sm text-muted-foreground mb-5">{course.description}</p>

              {/* Meta Info */}
              <div className="space-y-2 mb-5">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-accent" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Briefcase className="w-4 h-4 text-accent" />
                  {course.outcome}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4 text-accent" />
                  {course.projects}
                </div>
              </div>

              {/* CTA */}
              <Button variant="outline" size="sm" className="w-full group/btn">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All 50+ Courses
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
