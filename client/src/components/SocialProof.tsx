import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Antes não sabíamos por que o tráfego caia. Agora temos uma bússola: a MarkSaint nos deu metodologia e dados para prever e ajustar.",
    author: "Diretor de Marketing",
    role: "SaaS Mid-market",
    initials: "DM"
  },
  {
    quote: "Segurança e performance eram blindspots. Depois do work deles, meu CEO dorme tranquilo. E o ROI? +3x em 6 meses.",
    author: "VP de Operações",
    role: "Varejo Online",
    initials: "VP"
  },
  {
    quote: "Eles falam nossa linguagem: negócio, não jargão. Não é 'vamos fazer SEO', é 'vamos construir presença duradoura em tópicos estratégicos'.",
    author: "Sócio",
    role: "Consultoria",
    initials: "SC"
  }
];

const posts = [
  {
    title: "Hierarquia Semântica em HTML: Por Que H1 Importa",
    excerpt: "A estrutura correta de headings não é apenas estética, é como o Google entende a prioridade do seu conteúdo.",
    tags: ["SEO Técnico", "HTML"]
  },
  {
    title: "Auditoria SEO vs. Health Check: Qual Você Precisa?",
    excerpt: "Entenda a diferença entre uma verificação rápida de saúde do site e uma auditoria profunda de estratégia.",
    tags: ["Estratégia", "Auditoria"]
  },
  {
    title: "LGPD + SSL + UX: A Tríade de Confiança",
    excerpt: "Como a segurança e a conformidade legal impactam diretamente suas taxas de conversão e ranking.",
    tags: ["Segurança", "UX"]
  }
];

export default function SocialProof() {
  return (
    <div className="bg-background">
      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 border-b border-border">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Confiança Construída com <span className="text-primary">Resultados</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <Card key={index} className="bg-muted/10 border-border hover:bg-primary/5 transition-colors duration-300">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-lg italic text-muted-foreground mb-6 leading-relaxed">
                    "{item.quote}"
                  </blockquote>
                </CardContent>
                <CardFooter className="flex items-center gap-4">
                  <Avatar className="h-10 w-10 border border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary font-bold">{item.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-sm">{item.author}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-muted/30">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Insights & Estratégia</h2>
            <Button variant="ghost" className="hidden sm:flex gap-2 text-primary hover:text-primary/80">
              Ver todos os artigos <ArrowRight size={16} />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="group cursor-pointer hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                <div className="h-48 bg-gradient-to-br from-primary/5 to-primary/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                    <ExternalLink size={48} className="text-primary" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex gap-2 mb-3">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-muted text-muted-foreground border border-border rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter>
                  <span className="text-sm font-semibold text-primary flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    Ler Artigo <ArrowRight size={14} />
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" className="w-full">Ver todos os artigos</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
