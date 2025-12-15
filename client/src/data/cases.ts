export interface CaseData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  excerpt: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  highlights: string[];
}

export const casesData: CaseData[] = [
  {
    id: "361-sport",
    slug: "361-sport",
    title: "361 Sport",
    subtitle: "Auditoria SEO para E-commerce de Tênis Esportivos",
    category: "E-commerce",
    excerpt: "Marca de tênis esportivos com presença em bolsa de valores. Auditoria completa identificando gargalos técnicos e oportunidades de crescimento orgânico.",
    results: [
      { metric: "Base Técnica", value: "Sólida", description: "Fundação para escalar SEO" },
      { metric: "Categorias", value: "Otimizadas", description: "Melhor organização e filtros" },
      { metric: "Páginas de Produto", value: "Otimizadas", description: "Estrutura e conteúdo melhorados" }
    ],
    highlights: [
      "Base técnica sólida para escalar SEO",
      "Melhor organização de categorias e filtros",
      "Otimização de páginas de produto"
    ]
  },
  {
    id: "espaco-mind",
    slug: "espaco-mind",
    title: "Espaço MIND",
    subtitle: "SEO para Locação de Espaços",
    category: "Locação de Espaços",
    excerpt: "Espaço de locação e aluguel para eventos. Projeto completo incluindo remoção de malwares, correções técnicas e refatoração de conteúdo.",
    results: [
      { metric: "Search Console", value: "+300%", description: "Crescimento em impressões e cliques" },
      { metric: "Segurança", value: "100%", description: "Malwares removidos" },
      { metric: "Arquitetura", value: "Otimizada", description: "Estrutura clara e focada" }
    ],
    highlights: [
      "Crescimento de +300% no Search Console",
      "Remoção de malwares e correções críticas",
      "Arquitetura de conteúdo otimizada"
    ]
  },
  {
    id: "plmx",
    slug: "plmx",
    title: "PLMX",
    subtitle: "SEO para Site de Softwares Siemens",
    category: "Tecnologia B2B",
    excerpt: "Site focado em softwares Siemens no segmento tecnológico/industrial B2B. Auditoria completa com foco em geração de leads qualificados.",
    results: [
      { metric: "Crescimento Orgânico", value: "+300%", description: "Tráfego e visibilidade" },
      { metric: "Segurança", value: "Restaurada", description: "Malwares críticos removidos" },
      { metric: "Leads B2B", value: "Qualificados", description: "Arquitetura focada em conversão" }
    ],
    highlights: [
      "Crescimento orgânico acima de 300%",
      "Remoção de malwares críticos",
      "Arquitetura focada em produtos/soluções"
    ]
  },
  {
    id: "mangini-russo-advogados",
    slug: "mangini-russo-advogados",
    title: "Mangini Russo Advogados",
    subtitle: "Clusterização e Arquitetura SEO",
    category: "Advocacia",
    excerpt: "Escritório de advocacia multidisciplinar. Consultoria estratégica com clusterização de conteúdo por áreas do Direito.",
    results: [
      { metric: "Clareza Temática", value: "Máxima", description: "Para o Google" },
      { metric: "Presença Orgânica", value: "Base Sólida", description: "Fundação estabelecida" },
      { metric: "Arquitetura", value: "Otimizada", description: "Estrutura inicial completa" }
    ],
    highlights: [
      "Maior clareza temática para o Google",
      "Base sólida para presença orgânica",
      "Arquitetura inicial otimizada"
    ]
  },
  {
    id: "b20-conteudo-digital",
    slug: "b20-conteudo-digital",
    title: "B20 Conteúdo Digital",
    subtitle: "Parceria e Produção de Conteúdo",
    category: "Agência Digital",
    excerpt: "Agência parceira com foco em produção de conteúdo otimizado, estruturação de headings e construção de autoridade.",
    results: [
      { metric: "Conteúdo", value: "Alinhado", description: "Com estratégia de SEO" },
      { metric: "Base On-Page", value: "Melhorada", description: "Otimização técnica" },
      { metric: "Modelo", value: "Escalável", description: "Para tráfego orgânico" }
    ],
    highlights: [
      "Conteúdo alinhado à estratégia de SEO",
      "Melhora de base on-page",
      "Modelo para escalar tráfego orgânico"
    ]
  }
];
