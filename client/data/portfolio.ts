export type Project = {
  title: string;
  description: string;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
};

export type TimelineItem = {
  period: string;
  role: string;
  company: string;
  description: string;
};

export const portfolioData = {
  name: "Seu Nome",
  profileImage: "/images/minha-foto.jpg",
  role: "Full Stack Developer",
  location: "Brasil",
  headline: "Construindo produtos web performaticos com design intencional e codigo limpo.",
  about:
    "Atuo do backend ao frontend, transformando requisitos de negocio em experiencias digitais rapidas, acessiveis e prontas para escalar.",
  email: "seuemail@dominio.com",
  social: {
    github: "https://github.com/seuusuario",
    linkedin: "https://www.linkedin.com/in/seuusuario",
  },
  stacks: [
    "TypeScript",
    "Next.js",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Sequelize",
    "Vue.js",
    "Docker",
  ],
  projects: [
    {
      title: "Dashboard Operacional",
      description:
        "Painel para acompanhamento de indicadores em tempo real com filtros, alertas e exportacao de relatorios.",
      stack: ["Next.js", "TypeScript", "Chart.js", "Node.js"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com/seuusuario/dashboard-operacional",
    },
    {
      title: "Plataforma de Atendimento",
      description:
        "Sistema de atendimento com historico de interacoes, fila inteligente e integracao com canais externos.",
      stack: ["Vue", "Express", "PostgreSQL", "WebSocket"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com/seuusuario/plataforma-atendimento",
    },
    {
      title: "Portal Institucional",
      description:
        "Site institucional focado em SEO e performance, com CMS para atualizacao de conteudo sem deploy.",
      stack: ["Next.js", "ISR", "Tailwind", "SEO"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com/seuusuario/portal-institucional",
    },
  ] satisfies Project[],
  timeline: [
    {
      period: "2025 - Hoje",
      role: "Desenvolvedor Full Stack",
      company: "Empresa Atual",
      description:
        "Lideranca tecnica em modulo critico, ganho de performance no frontend e evolucao de APIs de alta demanda.",
    },
    {
      period: "2023 - 2025",
      role: "Desenvolvedor Backend",
      company: "Empresa Anterior",
      description:
        "Criacao de servicos REST, modelagem de dados e melhoria de observabilidade em producao.",
    },
  ] satisfies TimelineItem[],
};
