import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Shankar",
    role: "Software Developer @ TCS",
    course: "Full-Stack Development",
    quote: "IATT-ல join பண்ணது என் life-ல best decision! Zero coding knowledge-ல இருந்து 6 months-ல TCS-ல job கிடைச்சது. Trainers super supportive! 🙏",
    rating: 5,
  },
  {
    name: "Karthik Raja",
    role: "Data Analyst @ Infosys",
    course: "Data Science",
    quote: "Placement support amazing-ஆ இருந்தது. Resume building, mock interviews எல்லாம் proper-ஆ guide பண்ணாங்க. Thanks IATT team! 💯",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary/30 relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Students <span className="text-gradient">Feedback</span>
          </h2>
          <p className="text-muted-foreground">
            எங்க students என்ன சொல்றாங்கன்னு கேளுங்க! 🌟
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-card-gradient border border-border/50 rounded-2xl p-6 hover:border-accent/50 transition-all"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-accent/30 mb-4" />

              {/* Quote Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">"{item.quote}"</p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">{item.name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="text-sm text-accent">{item.role}</p>
                  <p className="text-xs text-muted-foreground">Course: {item.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-12 bg-accent/10 border border-accent/30 rounded-2xl p-6 max-w-2xl mx-auto">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-accent">10,000+</p>
              <p className="text-xs text-muted-foreground">Trained Students</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-accent">90%</p>
              <p className="text-xs text-muted-foreground">Placement Rate</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-accent">500+</p>
              <p className="text-xs text-muted-foreground">Hiring Partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
