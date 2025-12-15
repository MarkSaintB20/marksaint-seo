import Header from "@/components/Header";
import Contact from "@/components/Contact";
import FloatingCTA from "@/components/FloatingCTA";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Scale, FileText, Target, Layers } from "lucide-react";
import { Link } from "wouter";

export default function CaseManginiRusso() {
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
              <span className="text-foreground">Mangini Russo Advogados</span>
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
                Advocacia
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Case de Sucesso: <span className="text-primary">Mangini Russo Advogados</span> – Clusterização e Arquitetura SEO
              </h1>
              <p className="text-xl text-muted-foreground">
                Consultoria estratégica com clusterização de conteúdo por áreas do Direito e definição de arquitetura inicial otimizada para SEO.
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
              <p className="text-lg text-muted-foreground mb-6">
                <strong className="text-foreground">Mangini Russo Advogados</strong> é um escritório de advocacia multidisciplinar, atuando em diversas áreas do Direito. O projeto focou na estruturação estratégica do site para estabelecer autoridade temática e facilitar a geração de leads qualificados.
              </p>
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Segmento</div>
                      <div className="font-bold">Advocacia Multidisciplinar</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Tipo de Projeto</div>
                      <div className="font-bold">Consultoria + Arquitetura</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Foco</div>
                      <div className="font-bold">Clusterização de Conteúdo</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                        <Layers className="w-6 h-6 text-destructive" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Falta de Estrutura Temática</h3>
                        <p className="text-sm text-muted-foreground">
                          Ausência de organização clara por áreas do Direito, dificultando a compreensão do Google sobre a especialização do escritório.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-destructive/10 rounded">
                        <FileText className="w-6 h-6 text-destructive" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Conteúdo Não Clusterizado</h3>
                        <p className="text-sm text-muted-foreground">
                          Conteúdos dispersos sem estratégia de pillar pages e cluster de tópicos relacionados.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-destructive/10 rounded">
                        <Target className="w-6 h-6 text-destructive" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Arquitetura Inadequada</h3>
                        <p className="text-sm text-muted-foreground">
                          Estrutura de site não otimizada para SEO, sem hierarquia clara de páginas e categorias.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-destructive/10 rounded">
                        <Scale className="w-6 h-6 text-destructive" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Baixa Autoridade Temática</h3>
                        <p className="text-sm text-muted-foreground">
                          Dificuldade em estabelecer autoridade em múltiplas áreas do Direito simultaneamente.
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
                  A consultoria estratégica identificou a necessidade de uma arquitetura de informação robusta, baseada em clusterização de conteúdo por áreas do Direito:
                </p>
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Análise de Áreas de Atuação</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                        <span>Mapeamento completo das áreas de atuação do escritório</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                        <span>Pesquisa de volume de busca por área do Direito</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                        <span>Análise de concorrência e oportunidades de diferenciação</span>
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
                    <span className="text-primary">→</span> Consultoria de SEO Estratégica
                  </h3>
                  <Card>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Definição de estratégia de conteúdo baseada em pillar pages e clusters</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Pesquisa de keywords por área do Direito (Trabalhista, Empresarial, Cível, etc.)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Mapeamento de intenção de busca do público-alvo</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-secondary">→</span> Clusterização de Conteúdo
                  </h3>
                  <Card>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Criação de clusters temáticos por área do Direito</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Definição de pillar pages principais (páginas de serviço por área)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Estruturação de conteúdos de suporte (artigos de blog relacionados)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Estratégia de internal linking entre pillar pages e clusters</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">→</span> Arquitetura Inicial do Site
                  </h3>
                  <Card>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Definição de hierarquia de páginas (Home → Áreas de Atuação → Serviços Específicos)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Estruturação de URLs amigáveis para SEO</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Planejamento de navegação e breadcrumbs</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Roadmap de implementação de conteúdo</span>
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
                          <Target className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-bold mb-1">Maior Clareza Temática</div>
                          <p className="text-sm text-muted-foreground">
                            Google compreende melhor as áreas de especialização do escritório
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Layers className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-bold mb-1">Base Sólida para Crescimento</div>
                          <p className="text-sm text-muted-foreground">
                            Fundação estratégica para fortalecimento de presença orgânica
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="prose prose-lg max-w-none">
                  <h3 className="text-xl font-bold mb-4">Próximos Passos Recomendados</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Implementação das pillar pages por área do Direito</li>
                    <li>Produção de conteúdo de blog seguindo a estratégia de clusters</li>
                    <li>Otimização técnica on-page de todas as páginas</li>
                    <li>Estratégia de link building com foco em autoridade jurídica</li>
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
                Quer estruturar seu escritório para dominar o SEO jurídico?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Agende uma consultoria estratégica e descubra como clusterizar seu conteúdo para gerar leads qualificados.
              </p>
              <Button size="lg" className="text-lg px-8">
                Solicitar Consultoria
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
