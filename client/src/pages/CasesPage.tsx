import Header from "@/components/Header";
import Contact from "@/components/Contact";
import FloatingCTA from "@/components/FloatingCTA";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Building2, Scale, FileText, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const casesData = [
  {
    id: "361-sport",
    title: "361 Sport",
    subtitle: "Auditoria SEO para E-commerce de Tênis Esportivos",
    category: "E-commerce",
    icon: Building2,
    description: "Marca de tênis esportivos com presença em bolsa de valores. Auditoria completa identificando gargalos técnicos e oportunidades de crescimento orgânico.",
    highlights: [
      "Base técnica sólida para escalar SEO",
      "Melhor organização de categorias e filtros",
      "Otimização de páginas de produto"
    ],
    bgColor: "from-blue-500/10 to-purple-500/10"
  },
  {
    id: "espaco-mind",
    title: "Espaço MIND",
    subtitle: "SEO para Locação de Espaços",
    category: "Locação de Espaços",
    icon: Building2,
    description: "Espaço de locação e aluguel para eventos. Projeto completo incluindo remoção de malwares, correções técnicas e refatoração de conteúdo.",
    highlights: [
      "Crescimento de +300% no Search Console",
      "Remoção de malwares e correções críticas",
      "Arquitetura de conteúdo otimizada"
    ],
    bgColor: "from-green-500/10 to-teal-500/10"
  },
  {
    id: "plmx",
    title: "PLMX",
    subtitle: "SEO para Site de Softwares Siemens",
    category: "Tecnologia B2B",
    icon: Shield,
    description: "Site focado em softwares Siemens no segmento tecnológico/industrial B2B. Auditoria completa com foco em geração de leads qualificados.",
    highlights: [
      "Crescimento orgânico acima de 300%",
      "Remoção de malwares críticos",
      "Arquitetura focada em produtos/soluções"
    ],
    bgColor: "from-orange-500/10 to-red-500/10"
  },
  {
    id: "mangini-russo-advogados",
    title: "Mangini Russo Advogados",
    subtitle: "Clusterização e Arquitetura SEO",
    category: "Advocacia",
    icon: Scale,
    description: "Escritório de advocacia multidisciplinar. Consultoria estratégica com clusterização de conteúdo por áreas do Direito.",
    highlights: [
      "Maior clareza temática para o Google",
      "Base sólida para presença orgânica",
      "Arquitetura inicial otimizada"
    ],
    bgColor: "from-indigo-500/10 to-blue-500/10"
  },
  {
    id: "b20-conteudo-digital",
    title: "B20 Conteúdo Digital",
    subtitle: "Parceria e Produção de Conteúdo",
    category: "Agência Digital",
    icon: FileText,
    description: "Agência parceira com foco em produção de conteúdo otimizado, estruturação de headings e construção de autoridade.",
    highlights: [
      "Conteúdo alinhado à estratégia de SEO",
      "Melhora de base on-page",
      "Modelo para escalar tráfego orgânico"
    ],
    bgColor: "from-purple-500/10 to-pink-500/10"
  }
];

export default function CasesPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
                Cases de Sucesso
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Resultados <span className="text-primary">Reais</span> de Clientes Reais
              </h1>
              <p className="text-xl text-muted-foreground">
                Conheça os projetos que transformamos através de SEO estratégico, auditoria técnica e arquitetura de conteúdo.
              </p>
            </div>
          </div>
        </section>

        {/* Cases Grid */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {casesData.map((caseItem, index) => (
                <Card 
                  key={caseItem.id}
                  className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${caseItem.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <caseItem.icon className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="border-primary/20 text-primary">
                        {caseItem.category}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{caseItem.title}</h3>
                    <p className="text-sm text-muted-foreground">{caseItem.subtitle}</p>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground mb-6">
                      {caseItem.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {caseItem.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <TrendingUp className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={`/cases/${caseItem.id}`}>
                      <Button className="w-full group/btn">
                        Ver Case Completo
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Quer resultados como esses para o seu negócio?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Agende uma consultoria gratuita e descubra como podemos transformar sua presença orgânica.
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
