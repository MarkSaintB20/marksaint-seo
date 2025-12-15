import Header from "@/components/Header";
import Contact from "@/components/Contact";
import FloatingCTA from "@/components/FloatingCTA";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const blogPosts = [
  {
    id: "auditoria-seo-oportunidades",
    title: "Como uma auditoria SEO revela oportunidades escondidas no seu site",
    excerpt: "Descubra como uma auditoria SEO completa pode identificar gargalos técnicos, problemas de indexação e oportunidades de crescimento orgânico que você nem sabia que existiam.",
    category: "Auditoria SEO",
    date: "15 de Dezembro, 2024",
    readTime: "8 min",
    featured: true
  },
  {
    id: "arquitetura-conteudo-passo-a-passo",
    title: "Arquitetura de conteúdo para agências e negócios locais: passo a passo",
    excerpt: "Aprenda a estruturar seu site com arquitetura de conteúdo estratégica, definindo hierarquia de páginas, categorias e clusters temáticos para máxima relevância no Google.",
    category: "Arquitetura de Conteúdo",
    date: "12 de Dezembro, 2024",
    readTime: "10 min",
    featured: true
  },
  {
    id: "seo-escritorios-advocacia",
    title: "SEO para escritórios de advocacia: estrutura de clusters que gera leads qualificados",
    excerpt: "Estratégias específicas de SEO para escritórios de advocacia, incluindo clusterização por áreas do Direito, otimização de conteúdo jurídico e geração de leads qualificados.",
    category: "SEO Jurídico",
    date: "10 de Dezembro, 2024",
    readTime: "12 min",
    featured: true
  },
  {
    id: "remocao-malwares-seo",
    title: "Remoção de malwares e SEO: por que segurança técnica é pré-requisito para crescer no orgânico",
    excerpt: "Entenda a relação crítica entre segurança do site e SEO. Malwares podem destruir seu ranqueamento e como removê-los é o primeiro passo para crescimento orgânico sustentável.",
    category: "Segurança & SEO",
    date: "8 de Dezembro, 2024",
    readTime: "9 min",
    featured: true
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
                Blog
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Blog da <span className="text-primary">MarkSaint SEO</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                SEO e Estratégia de Conteúdo: insights, cases e metodologias para crescimento orgânico sustentável.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Artigos em Destaque</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.filter(post => post.featured).map((post, index) => (
                  <Card 
                    key={post.id}
                    className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="border-primary/20 text-primary">
                          {post.category}
                        </Badge>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">
                        {post.excerpt}
                      </p>
                      <Link href={`/blog/${post.id}`}>
                        <Button variant="outline" className="group/btn">
                          Ler Artigo Completo
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-muted/20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Categorias</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  "Auditoria SEO",
                  "Arquitetura de Conteúdo",
                  "SEO Jurídico",
                  "Segurança & SEO",
                  "SEO Local",
                  "SEO B2B",
                  "E-commerce",
                  "Estudos de Caso"
                ].map((category, index) => (
                  <Card key={index} className="hover:border-primary/50 transition-colors cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-bold">{category}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-8 text-center">
                  <h2 className="text-3xl font-bold mb-4">
                    Receba insights de SEO direto no seu email
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Assine nossa newsletter e receba artigos exclusivos, cases de sucesso e dicas práticas de SEO toda semana.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input 
                      type="email" 
                      placeholder="Seu melhor email" 
                      className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
                    />
                    <Button size="lg">
                      Assinar Newsletter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Contact />
      <FloatingCTA />
    </div>
  );
}
