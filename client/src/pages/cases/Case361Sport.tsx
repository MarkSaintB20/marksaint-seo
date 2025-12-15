import Header from "@/components/Header";
import Contact from "@/components/Contact";
import FloatingCTA from "@/components/FloatingCTA";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Search, Zap, Target } from "lucide-react";
import { Link } from "wouter";

export default function Case361Sport() {
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
              <span className="text-foreground">361 Sport</span>
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
                E-commerce
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Case de Sucesso: <span className="text-primary">361 Sport</span> – Auditoria SEO para E-commerce de Tênis Esportivos
              </h1>
              <p className="text-xl text-muted-foreground">
                Como uma auditoria técnica completa estabeleceu as bases para crescimento orgânico escalável em um e-commerce de alta visibilidade.
              </p>
            </div>
          </div>
        </section>

        {/* Visão Geral do Cliente */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Visão Geral do <span className="text-secondary">Cliente</span>
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  A <strong className="text-foreground">361 Sport</strong> é uma marca reconhecida internacionalmente no segmento de tênis esportivos, com presença institucional significativa no mercado e operações em diversos países. O e-commerce da marca representa um canal estratégico para vendas diretas ao consumidor final.
                </p>
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Segmento</div>
                        <div className="font-bold">E-commerce Esportivo</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Tipo de Projeto</div>
                        <div className="font-bold">Auditoria SEO Completa</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Foco</div>
                        <div className="font-bold">Técnico + On-Page</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Desafios Iniciais */}
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
                        <Search className="w-6 h-6 text-destructive" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Gargalos de Indexação</h3>
                        <p className="text-sm text-muted-foreground">
                          Problemas técnicos impedindo a correta indexação de páginas estratégicas de produtos e categorias.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-destructive/10 rounded">
                        <Zap className="w-6 h-6 text-destructive" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Performance Comprometida</h3>
                        <p className="text-sm text-muted-foreground">
                          Velocidade de carregamento e Core Web Vitals abaixo do ideal, impactando experiência e ranqueamento.
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
                        <h3 className="font-bold mb-2">Estrutura de Categorias</h3>
                        <p className="text-sm text-muted-foreground">
                          Organização de categorias e filtros não otimizada para SEO, dificultando o ranqueamento de páginas de coleção.
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
                        <h3 className="font-bold mb-2">Oportunidades Perdidas</h3>
                        <p className="text-sm text-muted-foreground">
                          Falta de aproveitamento de oportunidades de conteúdo e long-tail keywords no segmento esportivo.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnóstico e Auditoria */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Diagnóstico e <span className="text-secondary">Auditoria SEO</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  A auditoria SEO foi estruturada em três pilares fundamentais, cada um com análise profunda e recomendações específicas:
                </p>
                <div className="grid gap-6">
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">1. Auditoria Técnica</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                          <span>Análise completa de crawlability e indexabilidade</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                          <span>Identificação de erros 404, redirecionamentos incorretos e problemas de canonicalização</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                          <span>Avaliação de performance (Core Web Vitals, LCP, FID, CLS)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                          <span>Análise de sitemap XML e robots.txt</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-secondary">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">2. Auditoria On-Page</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2"></span>
                          <span>Revisão de title tags, meta descriptions e heading structure</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2"></span>
                          <span>Otimização de imagens (alt text, compressão, lazy loading)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2"></span>
                          <span>Análise de internal linking e estrutura de navegação</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2"></span>
                          <span>Implementação de schema markup para produtos</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">3. Oportunidades de Conteúdo</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                          <span>Pesquisa de keywords de cauda longa no segmento esportivo</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                          <span>Identificação de gaps de conteúdo em relação aos concorrentes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                          <span>Estratégia de categorização por tipo de esporte e uso</span>
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
                    <span className="text-primary">→</span> Técnica
                  </h3>
                  <Card>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Correção de problemas de indexação e implementação de canonical tags adequadas</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Otimização de Core Web Vitals através de lazy loading e compressão de imagens</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Reestruturação de sitemap XML para priorizar páginas estratégicas</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Implementação de schema markup para produtos e reviews</span>
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
                          <span className="text-muted-foreground">Reorganização de categorias e filtros com foco em SEO</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Otimização de títulos e descrições de produtos para melhor ranqueamento</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Criação de estrutura de internal linking entre produtos relacionados</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Mapeamento de oportunidades de conteúdo para blog e guias de compra</span>
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
                          <span className="text-muted-foreground">Melhoria da navegação e breadcrumbs para facilitar descoberta de produtos</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Otimização de páginas de categoria para melhor experiência de filtro</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-2xl">✓</span>
                          <span className="text-muted-foreground">Implementação de elementos de confiança (reviews, badges de segurança)</span>
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
                    <h3 className="text-2xl font-bold mb-4">Resultados Alcançados</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <TrendingUp className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-bold mb-1">Base Técnica Sólida</div>
                          <p className="text-sm text-muted-foreground">
                            Fundação técnica robusta estabelecida para crescimento orgânico escalável
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Target className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-bold mb-1">Melhor Organização</div>
                          <p className="text-sm text-muted-foreground">
                            Categorias e filtros otimizados favorecendo ranqueamento de produtos
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="prose prose-lg max-w-none">
                  <h3 className="text-xl font-bold mb-4">Próximos Passos Recomendados</h3>
                  <p className="text-muted-foreground mb-4">
                    Com a base técnica estabelecida, os próximos passos incluem:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Implementação de estratégia de conteúdo para blog (guias, comparativos, reviews)</li>
                    <li>Expansão de link building através de parcerias com atletas e influenciadores</li>
                    <li>Otimização contínua baseada em dados do Search Console e Analytics</li>
                    <li>Testes A/B em páginas de categoria para melhorar conversão</li>
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
                Quer resultados similares para seu e-commerce?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Agende uma auditoria gratuita e descubra as oportunidades escondidas no seu site.
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
