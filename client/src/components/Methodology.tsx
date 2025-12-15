import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, Map, BarChart2, Layout, Lock, Target } from "lucide-react";

const steps = [
  {
    id: "item-1",
    number: "01",
    title: "Análise de Hierarquia Semântica",
    subtitle: "HTML Semântico: O Alicerce da Autoridade",
    description: "Validação e correção da estrutura H1→H4, coerência de tópicos, verificação de intent de busca em título e headings, profundidade semântica vs. repetição de keywords.",
    icon: Search
  },
  {
    id: "item-2",
    number: "02",
    title: "Mapeamento de Palavras-Chave",
    subtitle: "Pesquisa de Keywords: Seu Mapa Mental para Tráfego",
    description: "Identificação de primary/secondary/long-tail keywords, clusterização por intenção (info/commercial/transactional), lacunas vs. concorrentes, oportunidades de topical authority.",
    icon: Map
  },
  {
    id: "item-3",
    number: "03",
    title: "Análise de Tráfego e Comportamento",
    subtitle: "Dados como Bússola: Onde Sua Audiência Está",
    description: "Leitura de desempenho (sessões, taxa de rejeição, conversões por página), heatmaps para fricção/oportunidade de CTA, fontes de tráfego, termos que convertem.",
    icon: BarChart2
  },
  {
    id: "item-4",
    number: "04",
    title: "Estrutura de Informação & Categorias",
    subtitle: "Arquitetura Inteligente: Navegação que Vende",
    description: "Avaliação de categorias/subcategorias, interlinkagem interna, breadcrumbs, distribuição de temas para topical authority, fluxo lógico de descoberta.",
    icon: Layout
  },
  {
    id: "item-5",
    number: "05",
    title: "Sinais de Confiança e Segurança",
    subtitle: "Confiança é Moeda: Selos, SSL, Conformidade",
    description: "Presença de certificados SSL, selos de segurança (Norton, McAfee, etc.), ícones de pagamento, políticas de privacidade e termos claros, validação de formulários.",
    icon: Lock
  },
  {
    id: "item-6",
    number: "06",
    title: "Oferta de Valor Clara e Mensurável",
    subtitle: "Proposta Inequívoca: Quem, O Quê, Diferença",
    description: "Checklist: sua proposição é clara em primeiro scroll? CTAs estão presentes e convergem? Provas sociais, garantias, e acompanhamento de funil (discovery → decision) validam valor.",
    icon: Target
  }
];

export default function Methodology() {
  return (
    <section id="methodology" className="py-24 bg-background relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="sticky top-24">
            <div className="inline-block mb-4 px-3 py-1 bg-secondary/10 text-secondary text-xs font-mono font-bold uppercase tracking-widest">
              Nossa Metodologia
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Auditoria SEO <br/>
              <span className="text-primary">Orientada a Dados</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Não adivinhamos. Medimos. Nossa metodologia de 6 etapas disseca sua presença digital para encontrar oportunidades ocultas de crescimento e corrigir falhas estruturais.
            </p>
            
            <div className="p-6 bg-muted/50 border border-border border-l-4 border-l-primary">
              <p className="italic text-foreground font-medium">
                "A hierarquia semântica não é capricho de SEO, é o idioma em que buscadores conversam com seu negócio."
              </p>
            </div>
          </div>

          <div className="bg-card border border-border shadow-xl p-1">
            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
              {steps.map((step) => (
                <AccordionItem key={step.id} value={step.id} className="border-b border-border last:border-0 px-4 py-2 data-[state=open]:bg-muted/30 transition-colors">
                  <AccordionTrigger className="hover:no-underline py-6 group">
                    <div className="flex items-center gap-6 text-left">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 text-primary font-mono font-bold group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground transition-all">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground font-normal mt-1 hidden sm:block">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-[4.5rem] pr-4 pb-6">
                    <div className="flex gap-4">
                      <div className="w-1 bg-secondary/50 shrink-0"></div>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
