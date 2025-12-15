import Header from "@/components/Header";
import Contact from "@/components/Contact";
import FloatingCTA from "@/components/FloatingCTA";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Shield, FileText, Target } from "lucide-react";
import { Link } from "wouter";

export default function CaseEspacoMind() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      <Header />
      <main className="flex-grow">
        {/* Breadcrumb */}
        <section className="py-6 bg-muted/20 border-b border-border">
          <div className="container">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/cases">Cases</Link>
              <span>/</span>
              <span className="text-foreground">Espaço MIND</span>
            </div>
          </div>
        </section>

        {/* Hero */}
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
                Locação de Espaços
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Case de Sucesso: <span className="text-primary">Espaço MIND</span> – SEO para Locação de Espaços
              </h1>
              <p className="text-xl text-muted-foreground">
                Crescimento de mais de 300% no Search Console através de correções críticas, remoção de malwares e arquitetura de conteúdo estratégica.
              </p>
            </div>
          </div>
        </section>

        {/* Visão Geral */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Visão Geral do <span className="text-secondary">Cliente</span>
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  O <strong className="text-foreground">Espaço MIND</strong> é um espaço de locação e aluguel para eventos diversos, oferecendo infraestrutura completa para eventos corporativos, sociais e culturais. O site é o principal canal de captação de leads e apresentação dos espaços disponíveis.
                </p>
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Segmento</div>
                        <div className="font-bold">Locação de Espaços</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Tipo de Projeto</div>
                        <div className="font-bold">SEO Completo + Segurança</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Resultado</div>
                        <div className="font-bold text-primary">+300% no GSC</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Desafios */}
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
                        <Shield className="w-6 h-6 text-destructive" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Malwares Críticos</h3>
                        <p className="text-sm text-muted-foreground">
                          Presença de malwares comprometendo a segurança do site e causando penalizações no Google.
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
                        <h3 className="font-bold mb-2">Problemas Técnicos</h3>
                        <p className="text-sm text-muted-foreground">
                          Erros técnicos críticos impedindo a correta indexação e ranqueamento do site.
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
                        <h3 className="font-bold mb-2">Arquitetura Inadequada</h3>
                        <p className="text-sm text-muted-foreground">
                          Falta de estrutura clara de páginas, categorias e hierarquia de serviços.
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
                        <h3 className="font-bold mb-2">Copy Não Otimizado</h3>
                        <p className="text-sm text-muted-foreground">
                          Textos sem foco em conversão, SEO ou intenção de busca do público-alvo.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnóstico */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Diagnóstico e <span className="text-secondary">Auditoria SEO</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  A auditoria revelou problemas críticos que exigiam ação imediata, especialmente relacionados à segurança e à base técnica do site:
                </p>
                <div className="grid gap-6">
                  <Card className="border-l-4 border-l-destructive">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-destructive">Segurança Comprometida</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-destructive rounded-full mt-2"></span>
                          <span>Detecção de múltiplos malwares injetados no código</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-destructive rounded-full mt-2"></span>
                          <span>Avisos de segurança no Google Search Console</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-destructive rounded-full mt-2"></span>
                          <span>Risco de penalização e perda de tráfego orgânico</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Problemas Técnicos</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                          <span>Erros de indexação e páginas órfãs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                          <span>Performance comprometida (velocidade de carregamento)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                          <span>Problemas de responsividade mobile</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                          <span>Falta de schema markup para eventos e locais</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-secondary">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Oportunidades de Conteúdo</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2"></span>
                          <span>Necessidade de arquitetura clara por tipo de evento</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2"></span>
                          <span>Copy focado em benefícios e conversão</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2"></span>
                          <span>Otimização para buscas locais (locação de espaços + cidade)</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementação */}
        <section className="py-16 bg-muted/20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Implementação: O que foi feito na <span className="text-primary">Prática</span>
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-destructive">→</span> Segurança
                  </h3>
                  <Card className="border-2 border-destructive/20">
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Remoção completa de todos os malwares identificados</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Implementação de medidas de segurança preventivas</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Solicitação de revisão no Google Search Console</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Monitoramento contínuo de segurança</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">→</span> Técnica
                  </h3>
                  <Card>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Correção de erros de indexação e implementação de sitemap otimizado</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Otimização de performance (compressão de imagens, minificação de código)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Melhoria de responsividade mobile</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Implementação de schema markup para eventos e locais</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-secondary">→</span> Conteúdo
                  </h3>
                  <Card>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Definição de arquitetura de conteúdo por tipo de evento (corporativo, social, cultural)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Refatoração completa de copy com foco em locação de espaços e conversão</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Otimização de títulos e meta descriptions para buscas locais</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Criação de páginas de serviço focadas em intenção de busca</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">→</span> UX/Conversão
                  </h3>
                  <Card>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Melhoria da navegação e hierarquia de informações</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Otimização de CTAs e formulários de contato</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Implementação de elementos de prova social (depoimentos, cases)</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resultados */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Resultados e <span className="text-secondary">Próximos Passos</span>
              </h2>
              <div className="space-y-6">
                <Card className="border-2 border-primary/20 bg-primary/5">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Resultados Alcançados</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="text-center p-6 bg-background rounded-lg">
                        <div className="text-5xl font-bold text-primary mb-2">+300%</div>
                        <div className="text-sm text-muted-foreground">Crescimento no Google Search Console</div>
                        <p className="text-xs text-muted-foreground mt-2">Impressões e cliques após correções</p>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <Shield className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <div className="font-bold mb-1">Site Seguro</div>
                            <p className="text-sm text-muted-foreground">
                              Malwares removidos e segurança restabelecida
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <Target className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <div className="font-bold mb-1">Arquitetura Otimizada</div>
                            <p className="text-sm text-muted-foreground">
                              Estrutura clara e focada em conversão
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="prose prose-lg max-w-none">
                  <h3 className="text-xl font-bold mb-4">Próximos Passos Recomendados</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Expansão de conteúdo com blog focado em dicas de eventos</li>
                    <li>Implementação de estratégia de link building local</li>
                    <li>Otimização para Google My Business e buscas locais</li>
                    <li>Criação de landing pages específicas por tipo de evento</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Seu site também tem problemas de segurança ou técnicos?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Agende uma auditoria gratuita e descubra o que está impedindo seu crescimento orgânico.
              </p>
              <Button size="lg" className="text-lg px-8">
                Solicitar Auditoria Gratuita
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
