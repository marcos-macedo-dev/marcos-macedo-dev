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
  name: "Marcos Macedo",
  profileImage: undefined,
  role: "Analista e Desenvolvedor de Sistemas",
  location: "Brasil",
  headline: "Atuo com desenvolvimento web e integracao de APIs para entregar aplicacoes praticas, seguras e escalaveis.",
  about:
    "Tenho 1 ano de experiencia com desenvolvimento de interfaces web e integracao de APIs, com foco em estabilidade, usabilidade e desempenho. Tambem tenho base em suporte tecnico, manutencao de equipamentos e atendimento a usuarios, o que fortalece minha visao pratica na resolucao de problemas.",
  email: "marcosmacedo784@gmail.com",
  social: {
    github: "https://github.com/marcos-macedo-dev",
    linkedin: "https://www.linkedin.com/in/antonio-marcos-9305bb2b4",
  },
  stacks: [
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "Vue.js",
    "Tailwind CSS",
    "React Native",
  ],
  projects: [
    {
      title: "Ararion",
      description:
        "Landing page para apresentar pacotes de divulgacao com foco em clareza visual, responsividade e conversao.",
      stack: ["Vue.js", "TailwindCSS", "JavaScript", "CSS"],
      liveUrl: "https://ararion.vercel.app",
      repoUrl: "https://github.com/marcos-macedo-dev/ararion",
    },
    {
      title: "Jardineiro Inteligente",
      description:
        "Sistema de irrigacao automatica com sensores, backend de suporte e interfaces web/mobile para monitoramento.",
      stack: ["Arduino", "Node.js", "Vue", "React Native", "JavaScript"],
      liveUrl: "https://github.com/marcos-macedo-dev/jardineiro_inteligente",
      repoUrl: "https://github.com/marcos-macedo-dev/jardineiro_inteligente",
    },
    {
      title: "Green Vision",
      description:
        "Base full stack para fluxos com upload, processamento e exibicao de dados de forma modular.",
      stack: ["JavaScript", "TypeScript", "Vue", "HTML", "CSS"],
      liveUrl: "https://github.com/marcos-macedo-dev/green_vision",
      repoUrl: "https://github.com/marcos-macedo-dev/green_vision",
    },
    {
      title: "Portal Institucional Municipal",
      description:
        "Projeto frontend para organizar informacoes publicas com navegacao simples e conteudo acessivel.",
      stack: ["Vue.js", "JavaScript", "CSS"],
      liveUrl: "https://github.com/marcos-macedo-dev/instituicao_governamental_municipal",
      repoUrl: "https://github.com/marcos-macedo-dev/instituicao_governamental_municipal",
    },
    {
      title: "Portfolio Pessoal",
      description:
        "Portfolio para apresentar trajetoria, habilidades e projetos de forma direta para recrutadores e parceiros.",
      stack: ["Vue.js", "TailwindCSS", "JavaScript", "HTML", "CSS"],
      liveUrl: "https://marcos-macedo-dev.vercel.app",
      repoUrl: "https://github.com/marcos-macedo-dev/marcos-macedo-dev",
    },
  ] satisfies Project[],
  timeline: [
    {
      period: "Experiencia atual",
      role: "Desenvolvedor JavaScript / Vue.js",
      company: "Projetos Independentes",
      description:
        "Desenvolvimento e manutencao de interfaces web, criacao de componentes em Vue.js e integracao de APIs com foco em performance e usabilidade.",
    },
    {
      period: "Experiencia complementar",
      role: "Estagio em TI",
      company: "Departamento de Tecnologia Municipal",
      description:
        "Atuacao com manutencao de computadores, limpeza, formatacao, restauracao, testes e organizacao de salas, alem de suporte ao desenvolvimento de sistemas da prefeitura.",
    },
    {
      period: "2025 - 2027",
      role: "Tecnologo em ADS",
      company: "Faculdade UniFAP",
      description:
        "Formacao superior focada em analise e desenvolvimento de sistemas, arquitetura de software e boas praticas de implementacao.",
    },
    {
      period: "2022 - 2024",
      role: "Ensino Medio + Base Tecnica em Informatica",
      company: "E.E.E.P Valter Nunes de Alencar",
      description:
        "Formacao regular com base tecnica em Informatica, onde desenvolvi fundamentos de informatica e organizacao para ambientes tecnicos.",
    },
  ] satisfies TimelineItem[],
};
