import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { 
  BarChart3, 
  FileText, 
  Share2, 
  ShieldCheck, 
  Wrench, 
  Palette, 
  ArrowRight 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ServiceModal from "./ServiceModal";

const servicesData = [
  {
    id: "marketing-360",
    icon: BarChart3,
    image: "/images/icon-analytics.png",
    title: "Marketing Digital 360º",
    subtitle: "Crescimento sustentável via estratégia omnichannel",
    description: "Crescimento sustentável via estratégia omnichannel: funis otimizados, mídia paga como acelerador do tráfego orgânico, automação de leads.",
    fullDescription: "Nosso serviço de Marketing Digital 360º integra todas as dimensões do seu crescimento digital em uma estratégia coerente. Não tratamos SEO, mídia paga e automação como silos isolados, mas como partes de um ecossistema que se reforça mutuamente.",
    benefits: [
      "Funis de conversão otimizados para cada estágio da jornada do cliente",
      "Mídia paga estrategicamente usada para acelerar tráfego orgânico",
      "Automação de leads que nutre prospects até a decisão de compra",
      "Análise integrada de ROI em todos os canais",
      "Ajustes contínuos baseados em dados em tempo real"
    ]
  },
  {
    id: "conteudo",
    icon: FileText,
    image: "/images/icon-strategy.png",
    title: "Produção de Conteúdo",
    subtitle: "Conteúdo que posiciona: otimizado para SEO semântico",
    description: "Conteúdo que posiciona: otimizado para SEO semântico, estruturado em hierarquia H1–H4, autoridade temática, orientado a conversão.",
    fullDescription: "Criamos conteúdo que não apenas atrai tráfego, mas posiciona sua marca como autoridade em seu mercado. Cada artigo, guia e página é estruturada seguindo princípios de hierarquia semântica rigorosa e intenção de busca.",
    benefits: [
      "Pesquisa de keywords aprofundada com análise de intenção",
      "Estrutura semântica impecável (H1→H4) para máxima relevância",
      "Conteúdo pillar e cluster para topical authority",
      "Otimização de metadata e rich snippets",
      "Integração com estratégia de link building"
    ]
  },
  {
    id: "redes-sociais",
    icon: Share2,
    image: "/images/icon-growth.png",
    title: "Gestão de Redes Sociais",
    subtitle: "Planejamento editorial estratégico com feedback loop",
    description: "Planejamento editorial estratégico, copy orientada a engajamento, coleta de insights comportamentais para alimentar SEO.",
    fullDescription: "Suas redes sociais não são apenas um canal de divulgação, são uma fonte de inteligência comportamental que alimenta toda sua estratégia digital. Gerenciamos com foco em engajamento qualificado e coleta de dados.",
    benefits: [
      "Calendário editorial estratégico alinhado com SEO",
      "Copy que converte: cada post tem objetivo claro",
      "Análise de sentimento e comportamento do público",
      "Insights que informam estratégia de conteúdo",
      "Community management profissional e responsivo"
    ]
  },
  {
    id: "seguranca",
    icon: ShieldCheck,
    image: "/images/icon-analytics.png",
    title: "Segurança Web",
    subtitle: "SSL, conformidade LGPD/GDPR e selos de confiança",
    description: "SSL, selos de segurança reconhecidos, conformidade LGPD/GDPR, ícones de confiança em formulários e checkout. Segurança = conversão.",
    fullDescription: "Segurança não é apenas uma questão técnica, é um fator de conversão. Um visitante que não confia no seu site não compra. Implementamos camadas de segurança que protegem dados e aumentam conversões simultaneamente.",
    benefits: [
      "Certificado SSL de alta validação com selos visíveis",
      "Conformidade total com LGPD e GDPR",
      "Ícones de segurança em formulários e checkout",
      "Auditoria de vulnerabilidades contínua",
      "Proteção contra malware e ataques DDoS"
    ]
  },
  {
    id: "wordpress",
    icon: Wrench,
    image: "/images/icon-strategy.png",
    title: "Manutenção WordPress",
    subtitle: "Atualizações, otimização e suporte contínuo",
    description: "Atualizações de segurança, otimização de performance, suporte contínuo. Seu site, sempre operacional, sempre seguro.",
    fullDescription: "WordPress é poderoso, mas requer manutenção constante. Oferecemos suporte proativo para garantir que seu site está sempre atualizado, rápido e seguro, sem que você precise se preocupar com detalhes técnicos.",
    benefits: [
      "Atualizações automáticas de core, plugins e temas",
      "Otimização de performance (cache, compressão, CDN)",
      "Backups diários com restauração garantida",
      "Monitoramento 24/7 de uptime",
      "Suporte técnico prioritário via WhatsApp"
    ]
  },
  {
    id: "identidade",
    icon: Palette,
    image: "/images/icon-growth.png",
    title: "Identidade Visual",
    subtitle: "Design que reforça sua posição de mercado",
    description: "Logo, paleta, tom visual que reforçam sua posição de mercado. Design que fala antes do copy.",
    fullDescription: "Sua identidade visual é a primeira impressão que seus clientes têm. Criamos uma identidade coerente, memorável e estrategicamente alinhada com seu posicionamento de mercado.",
    benefits: [
      "Design de logo único e registrável",
      "Paleta de cores psicologicamente estratégica",
      "Guia de estilo completo (brand guidelines)",
      "Aplicação em todos os touchpoints digitais",
      "Evolução de marca ao longo do tempo"
    ]
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null);

  return (
    <>
      <section id="services" className="py-24 bg-muted/30 relative">
        <div className="container">
          <ScrollReveal className="mb-16 max-w-3xl" direction="up" delay={0}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 border-l-4 border-secondary pl-6">
              Soluções Integradas
            </h2>
            <p className="text-lg text-muted-foreground pl-6">
              Não entregamos apenas serviços isolados. Construímos um ecossistema digital robusto onde cada peça fortalece o todo.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <Card 
                key={service.id}
                className="group border border-border/60 bg-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-none overflow-hidden"
              >
                <div className="h-1 w-full bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="h-32 bg-muted/50 overflow-hidden flex items-center justify-center border-b border-border/50">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300 scale-110 group-hover:scale-100"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <button 
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-secondary transition-colors group-hover:translate-x-1 duration-300"
                  >
                    Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </CardContent>
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-transparent border-r-muted group-hover:border-r-secondary transition-colors"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ServiceModal 
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </>
  );
}
