import Header from "@/components/Header";
import Contact from "@/components/Contact";
import FloatingCTA from "@/components/FloatingCTA";
import { GraduationCap, Target, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Sobre() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Sobre a <span className="text-primary">MarkSaint SEO</span> e Marco Antonio Claro Santos
              </h1>
              <p className="text-xl text-muted-foreground">
                Especialista em auditoria técnica, arquitetura de conteúdo e SEO estratégico para B2B e negócios locais.
              </p>
            </div>
          </div>
        </section>

        {/* Quem é Marco Antonio */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Quem é <span className="text-secondary">Marco Antonio Claro Santos</span>
                  </h2>
                  <div className="space-y-4 text-lg text-muted-foreground">
                    <p>
                      Analista de SEO e especialista em curadoria de conteúdo, Marco Antonio traz uma perspectiva única para o mundo do marketing digital.
                    </p>
                    <p>
                      Graduado em <strong className="text-foreground">Filosofia pela PUC-SP</strong>, sua formação acadêmica contribui diretamente para uma análise crítica aprofundada, pensamento estruturado e capacidade de diagnóstico estratégico em projetos de SEO.
                    </p>
                    <p>
                      Essa base filosófica permite uma compreensão mais profunda dos comportamentos de busca, intenções do usuário e da construção de narrativas que realmente convertem.
                    </p>
                  </div>
                </div>
                <Card className="border-2 border-primary/20">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <GraduationCap className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Formação Acadêmica</h3>
                        <p className="text-muted-foreground">Filosofia pela PUC-SP</p>
                      </div>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-secondary rounded-full"></span>
                        <span>Visão crítica e pensamento analítico</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-secondary rounded-full"></span>
                        <span>Capacidade de diagnóstico estratégico</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-secondary rounded-full"></span>
                        <span>Análise profunda de comportamento do usuário</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-secondary rounded-full"></span>
                        <span>Construção de narrativas eficazes</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* O que a MarkSaint SEO faz */}
        <section className="py-16 bg-muted/20">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                O que a <span className="text-primary">MarkSaint SEO</span> faz
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 bg-primary/10 rounded">
                        <Target className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Auditoria Técnica</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Diagnóstico completo de problemas técnicos, gargalos de indexação, performance e estrutura do site. Identificação de oportunidades escondidas para crescimento orgânico.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-secondary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 bg-secondary/10 rounded">
                        <Lightbulb className="w-6 h-6 text-secondary" />
                      </div>
                      <h3 className="text-xl font-bold">Correções Críticas</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Remoção de malwares, correção de erros técnicos críticos e implementação de melhorias que impactam diretamente no ranqueamento e segurança do site.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 bg-primary/10 rounded">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Arquitetura de Conteúdo</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Definição estratégica de estrutura de páginas, categorias, hierarquia de serviços e clusterização de conteúdo para máxima relevância temática.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-secondary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 bg-secondary/10 rounded">
                        <Target className="w-6 h-6 text-secondary" />
                      </div>
                      <h3 className="text-xl font-bold">SEO para B2B e Negócios Locais</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Estratégias focadas em decisores (C-level, gerentes) e otimização para negócios locais, gerando leads qualificados e resultados mensuráveis.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Abordagem e Metodologia */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Abordagem e <span className="text-secondary">Metodologia de SEO</span>
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  O trabalho da MarkSaint SEO une <strong className="text-foreground">diagnóstico técnico rigoroso</strong>, pesquisa profunda de intenção de busca, arquitetura de informação estratégica e otimização contínua guiada por dados do Search Console e Analytics.
                </p>
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="text-center p-6 bg-muted/30 rounded-lg">
                    <div className="text-4xl font-bold text-primary mb-2">01</div>
                    <h3 className="font-bold mb-2">Diagnóstico</h3>
                    <p className="text-sm text-muted-foreground">Auditoria completa e identificação de oportunidades</p>
                  </div>
                  <div className="text-center p-6 bg-muted/30 rounded-lg">
                    <div className="text-4xl font-bold text-primary mb-2">02</div>
                    <h3 className="font-bold mb-2">Implementação</h3>
                    <p className="text-sm text-muted-foreground">Correções técnicas e arquitetura de conteúdo</p>
                  </div>
                  <div className="text-center p-6 bg-muted/30 rounded-lg">
                    <div className="text-4xl font-bold text-primary mb-2">03</div>
                    <h3 className="font-bold mb-2">Otimização</h3>
                    <p className="text-sm text-muted-foreground">Monitoramento e ajustes contínuos baseados em dados</p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground">
                  Cada projeto é tratado de forma única, com estratégias personalizadas que consideram o contexto do negócio, o comportamento do público-alvo e as particularidades do mercado de atuação.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Segmentos Atendidos */}
        <section className="py-16 bg-muted/20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Segmentos e <span className="text-primary">Tipos de Projetos</span> Atendidos
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "E-commerce",
                  "Locação de Espaços",
                  "Tecnologia/Softwares",
                  "Advocacia",
                  "Agências Parceiras",
                  "B2B Tech"
                ].map((segment, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="font-medium">{segment}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Contact />
      <FloatingCTA />
    </div>
  );
}
