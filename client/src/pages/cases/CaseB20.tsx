import Header from "@/components/Header";
import Contact from "@/components/Contact";
import FloatingCTA from "@/components/FloatingCTA";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, TrendingUp, Users, Lightbulb } from "lucide-react";
import { Link } from "wouter";

export default function CaseB20() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      <Header />
      <main className="flex-grow">
        <section className="py-6 bg-muted/20 border-b border-border">
          <div className="container">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/cases">Cases</Link>
              <span>/</span>
              <span className="text-foreground">B20 Conteúdo Digital</span>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container">
            <Link href="/cases">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para Cases
              </Button>
            </Link>
            <div className="max-w-4xl">
              <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
                Agência Digital
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Case de Sucesso: <span className="text-primary">B20 Conteúdo Digital</span> – Parceria e Produção de Conteúdo
              </h1>
              <p className="text-xl text-muted-foreground">
                Parceria estratégica com foco em produção de conteúdo otimizado, estruturação de headings e construção de autoridade via SEO.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Visão Geral do <span className="text-secondary">Cliente</span>
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  A <strong className="text-foreground">B20 Conteúdo Digital</strong> é uma agência parceira da qual herdei boa parte do aprendizado prático em SEO e marketing de conteúdo. O projeto envolveu produção de conteúdo para blog, otimização on-page e apoio na construção de sinal de autoridade.
                </p>
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Segmento</div>
                        <div className="font-bold">Agência Digital</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Tipo de Projeto</div>
                        <div className="font-bold">Produção de Conteúdo + SEO</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Foco</div>
                        <div className="font-bold">Blog + Autoridade</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Desafios Iniciais em <span className="text-primary">SEO</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-destructive/10 rounded">
                        <FileText className="w-6 h-6 text-destructive" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Necessidade de Conteúdo Consistente</h3>
                        <p className="text-sm text-muted-foreground">
                          Demanda por produção regular de conteúdo otimizado para blog da agência.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-destructive/10 rounded">
                        <TrendingUp className="w-6 h-6 text-destructive" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Otimização On-Page</h3>
                        <p className="text-sm text-muted-foreground">
                          Necessidade de estruturação adequada de headings e otimização técnica de artigos.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-destructive/10 rounded">
                        <Users className="w-6 h-6 text-destructive" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Construção de Autoridade</h3>
                        <p className="text-sm text-muted-foreground">
                          Objetivo de estabelecer a agência como referência em marketing digital.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-destructive/10 rounded">
                        <Lightbulb className="w-6 h-6 text-destructive" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Alinhamento Estratégico</h3>
                        <p className="text-sm text-muted-foreground">
                          Conteúdo alinhado com estratégia geral de SEO e objetivos de negócio.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Diagnóstico e <span className="text-secondary">Auditoria SEO</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  O trabalho com a B20 envolveu análise contínua de oportunidades de conteúdo e alinhamento com a estratégia de SEO da agência:
                </p>
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Análise de Oportunidades de Conteúdo</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                        <span>Pesquisa de keywords relevantes para o público da agência</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                        <span>Análise de gaps de conteúdo em relação aos concorrentes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                        <span>Identificação de tópicos com alto potencial de tráfego</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Implementação: O que foi feito na <span className="text-primary">Prática</span>
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">→</span> Produção de Conteúdo para Blog
                  </h3>
                  <Card>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Redação de artigos otimizados para SEO sobre marketing digital, redes sociais e estratégias de conteúdo</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Pesquisa aprofundada de keywords e intenção de busca</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Produção regular e consistente de conteúdo de qualidade</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Alinhamento com calendário editorial da agência</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-secondary">→</span> Otimização On-Page
                  </h3>
                  <Card>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Estruturação adequada de headings (H1, H2, H3) em hierarquia semântica</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Otimização de títulos e meta descriptions</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Implementação de internal linking estratégico</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Otimização de imagens (alt text, compressão)</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">→</span> Construção de Autoridade
                  </h3>
                  <Card>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Conteúdo aprofundado e baseado em dados para estabelecer expertise</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Foco em E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Criação de conteúdo evergreen com potencial de ranqueamento a longo prazo</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Resultados e <span className="text-secondary">Próximos Passos</span>
              </h2>
              <div className="space-y-6">
                <Card className="border-2 border-primary/20 bg-primary/5">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Resultados Alcançados</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <FileText className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-bold mb-1">Conteúdo Alinhado</div>
                          <p className="text-sm text-muted-foreground">
                            Conteúdo consistente e alinhado à estratégia de SEO da agência
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <TrendingUp className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-bold mb-1">Base On-Page Sólida</div>
                          <p className="text-sm text-muted-foreground">
                            Melhora de base on-page para escalar tráfego orgânico
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="prose prose-lg max-w-none">
                  <h3 className="text-xl font-bold mb-4">Aprendizados da Parceria</h3>
                  <p className="text-muted-foreground mb-4">
                    A parceria com a B20 Conteúdo Digital foi fundamental para o desenvolvimento de habilidades práticas em:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Produção de conteúdo otimizado em escala</li>
                    <li>Alinhamento de conteúdo com objetivos de negócio</li>
                    <li>Estruturação técnica de artigos para SEO</li>
                    <li>Construção de autoridade através de conteúdo de qualidade</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Precisa de produção de conteúdo otimizado para SEO?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Agende uma consultoria e descubra como conteúdo estratégico pode transformar seu tráfego orgânico.
              </p>
              <Button size="lg" className="text-lg px-8">
                Falar com Especialista
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Contact />
      <FloatingCTA />
    </div>
  );
}
