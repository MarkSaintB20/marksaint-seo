import Header from "@/components/Header";
import Contact from "@/components/Contact";
import FloatingCTA from "@/components/FloatingCTA";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Shield, Cog } from "lucide-react";
import { Link } from "wouter";

export default function CasePLMX() {
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
              <span className="text-foreground">PLMX</span>
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
                Tecnologia B2B
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Case de Sucesso: <span className="text-primary">PLMX</span> – SEO para Site de Softwares Siemens
              </h1>
              <p className="text-xl text-muted-foreground">
                Crescimento orgânico acima de 300% através de auditoria completa, remoção de malwares e arquitetura focada em geração de leads B2B.
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
                A <strong className="text-foreground">PLMX</strong> é um site especializado em softwares Siemens, atuando no segmento tecnológico/industrial B2B. O site é o principal canal de geração de leads qualificados para soluções de engenharia e manufatura.
              </p>
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Segmento</div>
                      <div className="font-bold">Tecnologia/Industrial B2B</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Tipo de Projeto</div>
                      <div className="font-bold">SEO + Segurança + Arquitetura</div>
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
                        <Shield className="w-6 h-6 text-destructive" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Malwares Críticos</h3>
                        <p className="text-sm text-muted-foreground">
                          Presença de malwares comprometendo segurança e confiabilidade do site.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-destructive/10 rounded">
                        <Cog className="w-6 h-6 text-destructive" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Problemas Técnicos</h3>
                        <p className="text-sm text-muted-foreground">
                          Erros técnicos críticos afetando indexação e ranqueamento.
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
                Implementação: O que foi feito na <span className="text-primary">Prática</span>
              </h2>
              <div className="space-y-6">
                <Card className="border-l-4 border-l-destructive">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Segurança</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-destructive rounded-full mt-2"></span>
                        <span>Remoção completa de malwares</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-destructive rounded-full mt-2"></span>
                        <span>Implementação de medidas preventivas</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Técnica</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                        <span>Correções técnicas críticas de indexação</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                        <span>Otimização de performance e Core Web Vitals</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-secondary">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Conteúdo</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2"></span>
                        <span>Arquitetura focada em produtos/soluções Siemens</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2"></span>
                        <span>Refatoração de copy com foco em autoridade técnica e geração de leads B2B</span>
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
                Resultados e <span className="text-secondary">Próximos Passos</span>
              </h2>
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-primary mb-2">+300%</div>
                    <div className="text-sm text-muted-foreground">Crescimento Orgânico no Search Console</div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <span className="text-sm">Crescimento sustentável após correções</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-primary" />
                      <span className="text-sm">Site seguro e confiável</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Quer resultados similares para seu site B2B?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Agende uma consultoria gratuita e descubra como podemos transformar sua geração de leads.
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
