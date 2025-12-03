import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send,
  CheckCircle2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const courses = [
  "AI & Machine Learning",
  "Data Science & Analytics",
  "Full-Stack Development",
  "DevOps & Cloud Computing",
  "Cyber Security",
  "Software Testing",
  "RPA & Automation",
  "Digital Marketing",
  "Networking / CCNA",
  "Tally & Accounting",
];

const modes = ["Online", "Classroom", "Hybrid"];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    mode: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted!",
      description: "Our team will contact you within 24 hours.",
    });
    setFormData({ name: "", phone: "", email: "", course: "", mode: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-glow-gradient opacity-30 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Start Your <span className="text-gradient">IT Career Today</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Fill out the form below or reach out directly. Our counselors are ready to help you 
            choose the perfect course for your career goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card-gradient border border-border/50 rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-foreground mb-6">Enquire Now</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Full Name *</label>
                  <Input
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-accent"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Phone Number *</label>
                  <Input
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Email Address *</label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-accent"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Select Course *</label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    required
                    className="w-full h-11 px-4 bg-secondary/50 border border-border/50 rounded-lg text-foreground focus:border-accent focus:outline-none"
                  >
                    <option value="">Choose a course</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>{course}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Preferred Mode *</label>
                  <select
                    value={formData.mode}
                    onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                    required
                    className="w-full h-11 px-4 bg-secondary/50 border border-border/50 rounded-lg text-foreground focus:border-accent focus:outline-none"
                  >
                    <option value="">Choose mode</option>
                    {modes.map((mode) => (
                      <option key={mode} value={mode}>{mode}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Message (Optional)</label>
                <Textarea
                  placeholder="Tell us about your goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-secondary/50 border-border/50 focus:border-accent min-h-[100px]"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full">
                <Send className="w-5 h-5" />
                Submit Enquiry
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to receive calls/messages from IAT Technologies
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-card-gradient border border-border/50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <a 
                  href="tel:+919876543210" 
                  className="flex items-start gap-4 group hover:bg-secondary/50 p-4 rounded-xl transition-colors -mx-4"
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Call Us</p>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                    <p className="text-muted-foreground">+91 98765 43211</p>
                  </div>
                </a>

                <a 
                  href="mailto:info@iattechnologies.com"
                  className="flex items-start gap-4 group hover:bg-secondary/50 p-4 rounded-xl transition-colors -mx-4"
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email Us</p>
                    <p className="text-muted-foreground">info@iattechnologies.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 -mx-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Visit Us</p>
                    <p className="text-muted-foreground">
                      123, Anna Salai, Guindy,<br />
                      Chennai - 600032, Tamil Nadu
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits List */}
            <div className="bg-accent/10 border border-accent/30 rounded-3xl p-8">
              <h4 className="text-lg font-bold text-foreground mb-4">What Happens Next?</h4>
              <div className="space-y-3">
                {[
                  "Our counselor will call you within 24 hours",
                  "We'll understand your career goals",
                  "You'll get a free demo class invite",
                  "Customized course recommendation",
                  "Flexible payment options explained",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
