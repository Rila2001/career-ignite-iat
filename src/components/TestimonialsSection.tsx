import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Developer",
    company: "TCS",
    image: "PS",
    rating: 5,
    quote: "IAT Technologies transformed my career completely. From a commerce graduate with no coding experience, I'm now a Software Developer at TCS. The hands-on training and placement support were exceptional!",
    course: "Full-Stack Development",
    salary: "₹5.2 LPA",
  },
  {
    name: "Rajesh Kumar",
    role: "Data Analyst",
    company: "Infosys",
    image: "RK",
    rating: 5,
    quote: "The Data Science course at IAT was incredibly comprehensive. The real-time projects gave me the confidence to crack interviews. Got placed at Infosys within 2 months of completing the course!",
    course: "Data Science",
    salary: "₹6.5 LPA",
  },
  {
    name: "Sneha Ramachandran",
    role: "DevOps Engineer",
    company: "Wipro",
    image: "SR",
    rating: 5,
    quote: "Best decision of my life joining IAT for DevOps training. The trainers are industry experts who taught us real-world scenarios. The placement team arranged 8 interviews and I got placed at Wipro!",
    course: "DevOps & Cloud",
    salary: "₹7.2 LPA",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glow-gradient opacity-20 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Success Stories</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Our Students, <span className="text-gradient">Their Success</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Hear from our graduates who transformed their careers 
            and landed their dream jobs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative bg-card-gradient border border-border/50 rounded-3xl p-8 hover:border-accent/50 transition-all duration-500 hover:shadow-glow-sm"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent-gradient rounded-xl flex items-center justify-center shadow-glow-sm">
                <Quote className="w-6 h-6 text-accent-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-8 leading-relaxed">"{testimonial.quote}"</p>

              {/* Profile */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-accent-gradient rounded-full flex items-center justify-center text-accent-foreground font-bold text-lg">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role} @ {testimonial.company}</p>
                </div>
              </div>

              {/* Course & Salary Tags */}
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border/50">
                <span className="text-xs bg-secondary px-3 py-1.5 rounded-full text-muted-foreground">
                  {testimonial.course}
                </span>
                <span className="text-xs bg-accent/20 px-3 py-1.5 rounded-full text-accent font-semibold">
                  {testimonial.salary}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-16 bg-accent-gradient rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10,000+", label: "Students Placed" },
              { value: "500+", label: "Hiring Partners" },
              { value: "₹6.5 LPA", label: "Average Package" },
              { value: "90%", label: "Placement Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-accent-foreground mb-2">{stat.value}</p>
                <p className="text-sm text-accent-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
