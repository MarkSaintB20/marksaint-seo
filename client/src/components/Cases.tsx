import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, DollarSign, Search } from "lucide-react";

const cases = [
  {
    category: "SaaS B2B (Tech)",
    metrics: [
      { label: "Tráfego Orgânico", value: "+187%", icon: TrendingUp },
      { label: "Leads/Mês", value: "+145%", icon: Users },
      { label: "ROI (8 meses)", value: "3x", icon: DollarSign },
    ],
    actions: ["Auditoria semântica completa", "Pillar-cluster strategy"],
    bgImage: "/images/case-study-bg.png"
  },
  {
    category: "Ecommerce (Fashion)",
    metrics: [
      { label: "Conversões", value: "+92%", icon: TrendingUp },
      { label: "Impressões", value: "+250K", icon: Search },
      { label: "CPC em Search", value: "-35%", icon: DollarSign },
    ],
    actions: ["Otimização de metadata", "Rich snippets (product schema)"],
    bgImage: null
  },
  {
    category: "Agência Digital",
    metrics: [
      { label: "Visibilidade Branded", value: "+423%", icon: Search },
      { label: "Clientes Orgânicos", value: "+78%", icon: Users },
      { label: "MRR Adicional", value: "+€45K", icon: DollarSign },
    ],
    actions: ["Content hub", "Topical authority"],
    bgImage: null
  }
];

export default function Cases() {
  return (
    <section id="cases" className="py-24 bg-muted/20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Resultados que <span className="text-secondary">Falam</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Números reais de parceiros que confiaram em nossa metodologia. Sem promessas vazias, apenas crescimento mensurável.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-border ml-8 mb-2"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden border-l-4 border-l-secondary border-y border-r border-border bg-card hover:shadow-xl transition-all duration-300 group"
            >
              {item.bgImage && (
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity z-0">
                  <img src={item.bgImage} alt="" className="w-full h-full object-cover" />
                </div>
              )}
              
              <CardHeader className="relative z-10 pb-2">
                <Badge variant="outline" className="w-fit mb-2 bg-background/50 backdrop-blur-sm border-primary/20 text-primary">
                  {item.category}
                </Badge>
                <h3 className="text-xl font-bold">Case Study #{index + 1}</h3>
              </CardHeader>
              
              <CardContent className="relative z-10 pt-4 space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  {item.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-sm text-primary">
                          <metric.icon size={16} />
                        </div>
                        <span className="text-sm text-muted-foreground font-medium">{metric.label}</span>
                      </div>
                      <span className="text-xl font-bold text-primary font-mono">{metric.value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-border/50">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">O que foi feito:</p>
                  <ul className="space-y-1">
                    {item.actions.map((action, idx) => (
                      <li key={idx} className="text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
