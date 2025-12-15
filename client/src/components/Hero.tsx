import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
      </div>
      
      <div className="absolute right-0 top-0 h-full w-1/3 bg-muted/30 skew-x-12 translate-x-20 hidden lg:block z-0"></div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 max-w-2xl animate-in slide-in-from-left-10 duration-700 fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            AGÊNCIA DE SEO & PERFORMANCE B2B
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            Sua presença digital não é acaso, é <span className="text-primary">método</span>.
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
            Estratégia de Marketing Digital + Conteúdo + SEO + Segurança Web. Tudo integrado, orientado por dados, ajustado para seu crescimento.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
        
        <div className="relative hidden lg:block animate-in slide-in-from-right-10 duration-1000 fade-in delay-200">
          <div className="relative z-10 border border-border bg-background/50 backdrop-blur-sm p-2 shadow-2xl">
            <img 
              src="/images/hero-bg.png" 
              alt="MarkSaint SEO Analytics Dashboard" 
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
    </section>
  );
}
