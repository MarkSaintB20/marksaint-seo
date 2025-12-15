import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Lightbulb, Target, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <img 
          src="/images/about-bg.png"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Story */}
          <div className="space-y-8">
            <div className="inline-block mb-4 px-3 py-1 bg-primary/10 text-primary text-xs font-mono font-bold uppercase tracking-widest border border-primary/20">
              Nossa História
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Filosofia Como <span className="text-primary">Fundação</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                MarkSaint SEO foi fundada por <span className="font-semibold text-foreground">Marco Antonio Claro Santos</span>, um profissional com formação em Filosofia que trouxe uma perspectiva única para o mundo do marketing digital.
              </p>

              <p>
                Durante seus estudos em Filosofia, Marco Antonio aprendeu que o conhecimento verdadeiro não vem de achismos ou tendências passageiras, mas de método rigoroso e análise profunda. Essa visão transformou sua abordagem ao SEO e marketing digital.
              </p>

              <p>
                <span className="text-primary font-semibold">"Performance não é acaso, é método."</span> Essa frase resume a filosofia da MarkSaint: cada decisão é baseada em dados, cada estratégia é estruturada, e cada resultado é mensurável.
              </p>

              <p>
                A formação filosófica de Marco Antonio permitiu que ele enxergasse além das táticas superficiais. Ele compreendeu que SEO é, fundamentalmente, sobre comunicação clara, hierarquia de ideias e construção de autoridade — conceitos que estudou profundamente em Filosofia.
              </p>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground italic">
                "A Filosofia me ensinou a questionar, a analisar e a buscar a verdade. No marketing digital, isso significa questionar o status quo, analisar dados e buscar a verdade sobre o que funciona realmente."
              </p>
              <p className="text-sm font-semibold text-foreground mt-3">— Marco Antonio Claro Santos</p>
            </div>
          </div>

          {/* Right Side - Values */}
          <div className="grid gap-6">
            <Card className="border-border bg-card hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Rigor Intelectual</h3>
                    <p className="text-muted-foreground text-sm">
                      Cada estratégia é fundamentada em pesquisa profunda e análise crítica, não em modismos do momento.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg text-secondary shrink-0">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Método Estruturado</h3>
                    <p className="text-muted-foreground text-sm">
                      Seguimos uma metodologia de 6 etapas que garante cobertura completa e resultados previsíveis.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Foco em Resultados</h3>
                    <p className="text-muted-foreground text-sm">
                      Não medimos sucesso por atividades, mas por impacto mensurável no seu negócio.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg text-secondary shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Parceria Estratégica</h3>
                    <p className="text-muted-foreground text-sm">
                      Você não é um cliente, é um parceiro no caminho para construir presença digital duradoura.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
