import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [location] = useLocation();
  const isHome = location === "/";

  const navLinks = [
    { name: "Início", href: "/", type: "page" },
    { name: "Sobre", href: isHome ? "#about" : "/sobre", type: isHome ? "anchor" : "page" },
    { name: "Serviços", href: "#services", type: "anchor" },
    { name: "Cases", href: "/cases", type: "page" },
    { name: "Blog", href: "/blog", type: "page" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-md border-border py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter text-primary hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center rounded-sm">
            M
          </div>
          <span className="hidden sm:inline-block font-display">MarkSaint SEO</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.type === "page" ? (
              <Link key={link.name} href={link.href}>
                <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  {link.name}
                </a>
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            )
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="default" 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold shadow-sm"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Agendar Auditoria
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 shadow-lg animate-in slide-in-from-top-5">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              link.type === "page" ? (
                <Link key={link.name} href={link.href}>
                  <a 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-medium text-foreground hover:text-primary py-2 border-b border-border/50 last:border-0"
                  >
                    {link.name}
                  </a>
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-base font-medium text-foreground hover:text-primary py-2 border-b border-border/50 last:border-0"
                >
                  {link.name}
                </a>
              )
            ))}
            <Button 
              className="w-full mt-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Agendar Auditoria
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
