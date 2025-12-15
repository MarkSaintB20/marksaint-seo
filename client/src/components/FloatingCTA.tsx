import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // Hide floating button if user is already at contact section
      const contactSection = document.querySelector("#contact");
      if (contactSection) {
        const contactRect = contactSection.getBoundingClientRect();
        setIsVisible(contactRect.top > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScheduleClick = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511998650424", "_blank");
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col items-end gap-3 animate-in fade-in slide-in-from-bottom-5 duration-500">
      {/* Menu Items */}
      {isOpen && (
        <div className="flex flex-col gap-2 animate-in slide-in-from-bottom-3 duration-300">
          <button
            onClick={handleScheduleClick}
            className="group flex items-center justify-end gap-3 px-4 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="font-semibold text-sm">Agendar Consultoria</span>
            <Calendar className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleWhatsAppClick}
            className="group flex items-center justify-end gap-3 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="font-semibold text-sm">WhatsApp</span>
            <MessageCircle className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative w-14 h-14 rounded-full shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center font-bold text-lg",
          isOpen
            ? "bg-foreground text-background"
            : "bg-primary hover:bg-primary/90 text-primary-foreground"
        )}
        aria-label="Menu de ações"
      >
        {isOpen ? (
          <X className="w-6 h-6 animate-in rotate-in duration-300" />
        ) : (
          <div className="flex items-center justify-center animate-in fade-in duration-300">
            <span className="absolute w-14 h-14 rounded-full bg-secondary/20 animate-pulse"></span>
            <Calendar className="w-6 h-6 relative z-10" />
          </div>
        )}
      </button>

      {/* Floating Badge */}
      {!isOpen && (
        <div className="absolute bottom-20 right-0 bg-background border-2 border-primary px-3 py-1 rounded-full text-xs font-bold text-primary whitespace-nowrap shadow-lg animate-in slide-in-from-bottom-2 duration-500">
          Agende agora
        </div>
      )}
    </div>
  );
}
