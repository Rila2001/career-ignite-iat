import { MessageCircle, Phone } from "lucide-react";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210?text=Hi,%20I%27m%20interested%20in%20IT%20training%20at%20IAT%20Technologies"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-foreground fill-current" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-2 bg-card border border-border rounded-lg text-sm text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with us
        </span>
        
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+919876543210"
        className="group relative w-14 h-14 bg-accent-gradient rounded-full flex items-center justify-center shadow-button hover:shadow-glow hover:scale-110 transition-all duration-300"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 text-accent-foreground" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-2 bg-card border border-border rounded-lg text-sm text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Call now
        </span>
      </a>
    </div>
  );
};

export default FloatingCTA;
