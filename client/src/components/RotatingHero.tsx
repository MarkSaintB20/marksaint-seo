import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const heroVariants = [
  {
    id: 1,
    headline: "Sua presença digital não é acaso, é método.",
    subheadline: "Estratégia de Marketing Digital + Conteúdo + SEO + Segurança Web. Tudo integrado, orientado por dados, ajustado para seu crescimento.",
    image: "/images/hero-bg.png",
    badge: "AGÊNCIA DE SEO & PERFORMANCE B2B",
    accent: "método"
  },
  {
    id: 2,
    headline: "Dados como bússola, crescimento como destino.",
    subheadline: "Cada decisão é baseada em análise profunda. Cada estratégia é estruturada. Cada resultado é mensurável e previsível.",
    image: "/images/hero-variant-1.png",
    badge: "METODOLOGIA COMPROVADA",
    accent: "crescimento"
  },
  {
    id: 3,
    headline: "Performance é construída, não improvisa.",
    subheadline: "Seguimos uma metodologia de 6 etapas que garante cobertura completa da sua presença digital e resultados consistentes.",
    image: "/images/hero-variant-2.png",
    badge: "6 ETAPAS DE EXCELÊNCIA",
    accent: "construída"
  }
];

export default function RotatingHero() {
  const [currentVariant, setCurrentVariant] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setCurrentVariant((prev) => (prev + 1) % heroVariants.length);
    }, 6000); // Muda a cada 6 segundos

    return () => clearInterval(interval);
  }, [isAutoRotating]);

  const variant = heroVariants[currentVariant];

  const handleNext = () => {
    setCurrentVariant((prev) => (prev + 1) % heroVariants.length);
    setIsAutoRotating(false);
  };

  const handlePrev = () => {
    setCurrentVariant((prev) => (prev - 1 + heroVariants.length) % heroVariants.length);
    setIsAutoRotating(false);
  };

  const goToVariant = (index: number) => {
    setCurrentVariant(index);
    setIsAutoRotating(false);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
      </div>
      
      <div className="absolute right-0 top-0 h-full w-1/3 bg-muted/30 skew-x-12 translate-x-20 hidden lg:block z-0"></div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 max-w-2xl">
          <div className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium border border-primary/20 transition-all duration-500",
            "animate-in fade-in slide-in-from-left-5"
          )}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {variant.badge}
          </div>
          
          <div className="min-h-[200px] overflow-hidden">
            <h1 className={cn(
              "text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] transition-all duration-700",
              "animate-in slide-in-from-left-10 fade-in"
            )}>
              {variant.headline.split(variant.accent).map((part, idx) => (
                <span key={idx}>
                  {part}
                  {idx === 0 && <span className="text-primary">{variant.accent}</span>}
                </span>
              ))}
            </h1>
          </div>
          
          <div className={cn(
            "min-h-[80px] transition-all duration-700",
            "animate-in slide-in-from-left-10 fade-in delay-100"
          )}>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              {variant.subheadline}
            </p>
          </div>
          
          <div className={cn(
            "flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-700",
            "animate-in slide-in-from-left-10 fade-in delay-200"
          )}>
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg h-14 px-8 rounded-none border-l-4 border-primary shadow-lg transition-transform hover:translate-y-[-2px]"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Quero uma Auditoria SEO
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg h-14 px-8 rounded-none border-2 hover:bg-muted/50"
              onClick={() => window.open("https://wa.me/5511998650424", "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5 text-green-600" />
              Falar pelo WhatsApp
            </Button>
          </div>
          
          <div className="pt-8 flex items-center gap-8 text-sm text-muted-foreground font-mono">
            <div className="flex items-center gap-2">
              <div className="w-1 h-4 bg-secondary"></div>
              <span>DATA-DRIVEN</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-4 bg-primary"></div>
              <span>ROI FOCUSED</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-4 bg-foreground"></div>
              <span>SECURE</span>
            </div>
          </div>
        </div>
        
        <div className="relative hidden lg:block">
          <div className={cn(
            "relative z-10 border border-border bg-background/50 backdrop-blur-sm p-2 shadow-2xl transition-all duration-700",
            "animate-in slide-in-from-right-10 fade-in delay-300"
          )}>
            <img 
              src={variant.image}
              alt={variant.headline}
              className="w-full h-auto object-cover grayscale-[20%] contrast-125"
            />
            
            {/* Floating Data Cards */}
            <div className="absolute -bottom-10 -left-10 bg-card border border-border p-6 shadow-xl max-w-xs animate-in fade-in zoom-in duration-500 delay-500">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-mono text-muted-foreground">TRÁFEGO ORGÂNICO</span>
                <span className="text-green-500 text-xs font-bold">+142%</span>
              </div>
              <div className="h-2 w-full bg-muted overflow-hidden">
                <div className="h-full bg-primary w-[75%]"></div>
              </div>
              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                <span>Jan</span>
                <span>Dez</span>
              </div>
            </div>
          </div>
          
          {/* Decorative Grid Behind */}
          <div className="absolute -top-10 -right-10 w-full h-full border-2 border-primary/10 z-0"></div>
          <div className="absolute -bottom-5 -left-5 w-full h-full border border-secondary/20 z-0"></div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
          aria-label="Anterior"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-2">
          {heroVariants.map((_, index) => (
            <button
              key={index}
              onClick={() => goToVariant(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                currentVariant === index 
                  ? "bg-primary w-8" 
                  : "bg-muted-foreground hover:bg-primary/50"
              )}
              aria-label={`Ir para variante ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
          aria-label="Próximo"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
