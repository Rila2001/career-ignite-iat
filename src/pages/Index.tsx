import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>IAT Technologies | Chennai's #1 IT Training Institute | 100% Placement Support</title>
        <meta 
          name="description" 
          content="Transform your career with IAT Technologies, Chennai's leading IT training institute. Master AI, Data Science, Full-Stack Development & more with 100% placement support. Book your free demo class today!" 
        />
        <meta name="keywords" content="IT training Chennai, software training, placement support, AI ML course, Data Science course, Full-Stack Development, DevOps training, Cyber Security course" />
        <meta property="og:title" content="IAT Technologies | Chennai's #1 IT Training Institute" />
        <meta property="og:description" content="Master in-demand IT skills with 100% placement support. Join 10,000+ successful alumni at Chennai's top IT training institute." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://iattechnologies.com" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <CoursesSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
        <FloatingCTA />
      </main>
    </>
  );
};

export default Index;
