<template>
  <section
    id="projetos"
    ref="section"
    class="relative isolate bg-gradient-to-b from-zinc-950 via-zinc-950 to-black py-24 px-6 overflow-hidden"
  >
    <div
      class="absolute top-[-140px] left-1/3 h-[360px] w-[360px] rounded-full bg-blue-600/20 blur-[150px]"
      aria-hidden="true"
    ></div>
    <div
      class="absolute bottom-[-120px] right-16 h-[420px] w-[420px] rounded-full bg-blue-500/15 blur-[160px]"
      aria-hidden="true"
    ></div>

    <div class="relative z-10 mx-auto flex max-w-7xl flex-col gap-12">
      <header class="text-center">
        <p class="projects-eyebrow text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
          Projetos em destaque
        </p>
        <h2
          class="projects-title mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
        >
          Transformando ideias em produtos digitais completos
        </h2>
        <p class="projects-subtitle mx-auto mt-4 max-w-3xl text-base text-blue-100/80 sm:text-lg">
          Seleção dos projetos que mais representam minha atuação como desenvolvedor full stack, com
          foco em performance, integrações e experiências modernas.
        </p>
      </header>

      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          :class="[
            'project-card relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/70 p-8 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-500/40',
            index % 2 === 0 ? 'lg:-translate-y-2' : 'lg:translate-y-2',
          ]"
        >
          <div class="mb-6 flex items-start justify-between gap-4">
            <div>
              <p class="text-xs uppercase tracking-[0.3em] text-blue-400">{{ project.category }}</p>
              <h3 class="mt-2 text-2xl font-bold leading-tight text-white">{{ project.title }}</h3>
            </div>
            <span class="rounded-full border border-white/10 px-3 py-1 text-xs text-blue-100/90">
              {{ project.year }}
            </span>
          </div>

          <p class="mb-6 text-base leading-relaxed text-blue-100/90">
            {{ project.description }}
          </p>

          <div class="project-highlight mb-6 rounded-2xl border border-white/5 bg-black/40 p-4">
            <p class="text-sm font-semibold text-blue-200/90">Destaque</p>
            <p class="mt-1 text-sm text-blue-100/80">{{ project.highlight }}</p>
          </div>

          <ul class="mb-6 flex flex-wrap gap-2 text-sm text-blue-100">
            <li
              v-for="tech in project.stack"
              :key="tech"
              class="project-pill rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1"
            >
              {{ tech }}
            </li>
          </ul>

          <div class="flex flex-wrap gap-3">
            <a
              v-for="link in project.links"
              :key="link.label"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition"
              :class="[
                link.primary
                  ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-blue-500/40 shadow-lg'
                  : 'border border-white/20 text-white hover:border-blue-400/60 hover:text-blue-300',
              ]"
            >
              <Icon :icon="link.icon" class="h-4 w-4" aria-hidden="true" />
              <span>{{ link.label }}</span>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Icon } from '@iconify/vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const section = ref(null)

const projects = [
  {
    title: 'Ararion',
    category: 'Landing Page (Frontend)',
    description:
      'Desenvolvi esta landing page para apresentar pacotes de divulgação de forma clara e visualmente atraente. Meu objetivo foi criar uma experiência direta, moderna e totalmente responsiva.',
    highlight:
      'Trabalhei animações suaves, gradientes e efeitos visuais que aumentam a retenção e facilitam que empresas entendam rapidamente a proposta.',
    stack: ['Vue.js', 'TailwindCSS', 'JavaScript', 'CSS'],
    year: '2025',
    links: [
      {
        label: 'Live',
        url: 'https://ararion.vercel.app',
        icon: 'mdi:open-in-new',
        primary: true,
      },
      {
        label: 'Repositório',
        url: 'https://github.com/marcos-macedo-dev/ararion',
        icon: 'mdi:github',
        primary: false,
      },
    ],
  },
  {
    title: 'Lan_House',
    category: 'Sistemas / Low level',
    description:
      'Criei este repositório para estudar e demonstrar lógicas de baixo nível em C, explorando estruturas internas e algoritmos fundamentais.',
    highlight:
      'O projeto reúne exercícios e implementações que utilizo para reforçar conceitos essenciais da linguagem C.',
    stack: ['C'],
    year: '2025',
    links: [
      {
        label: 'Repositório',
        url: 'https://github.com/marcos-macedo-dev/Lan_House',
        icon: 'mdi:github',
        primary: true,
      },
    ],
  },
  {
    title: 'instituicao_governamental_municipal',
    category: 'Frontend (Vue) / Projeto institucional',
    description:
      'Desenvolvi este portal como demonstração de como informações públicas podem ser organizadas de maneira acessível, objetiva e confiável.',
    highlight:
      'O foco foi criar páginas funcionais e fáceis de navegar, atendendo às necessidades típicas de órgãos municipais.',
    stack: ['Vue.js', 'JavaScript', 'CSS'],
    year: '2025',
    links: [
      {
        label: 'Repositório',
        url: 'https://github.com/marcos-macedo-dev/instituicao_governamental_municipal',
        icon: 'mdi:github',
        primary: true,
      },
    ],
  },
  {
    title: 'SmartSafe',
    category: 'Aplicativo Mobile + API + Sistema Web (Segurança Feminina)',
    description:
      'Desenvolvi o SmartSafe como uma solução completa voltada à segurança feminina, permitindo alertar contatos e agentes com rapidez, enviar localização em tempo real e acessar conteúdos de prevenção.',
    highlight:
      'Estruturei três módulos integrados: o app para acionamento imediato, o painel administrativo para análise de ocorrências e a interface para agentes que recebem os alertas em tempo real.',
    stack: ['Flutter (Dart)', 'Node.js', 'JavaScript', 'Vue.js', 'TailwindCSS'],
    year: '2025',
    links: [
      {
        label: 'Documento técnico',
        url: '/mnt/data/Documento - SmartSafe.pdf',
        icon: 'mdi:file-document',
        primary: true,
      },
    ],
  },
  {
    title: 'green_vision',
    category: 'Full-stack (front + api)',
    description:
      'Estruturei este projeto para servir como base de aplicações que exigem upload e processamento de dados, com backend e frontend trabalhando de forma integrada.',
    highlight:
      'O repositório entrega uma arquitetura modular que facilita criar fluxos completos de envio, tratamento e exibição de informações.',
    stack: ['JavaScript', 'TypeScript', 'Vue', 'CSS', 'HTML'],
    year: '2025',
    links: [
      {
        label: 'Repositório',
        url: 'https://github.com/marcos-macedo-dev/green_vision',
        icon: 'mdi:github',
        primary: true,
      },
    ],
  },
  {
    title: 'Jardineiro Inteligente',
    category: 'IoT / Full-stack',
    description:
      'Desenvolvi um sistema de irrigação automática capaz de monitorar o solo e acionar a rega de forma inteligente, com controle via app e dashboard.',
    highlight:
      'Integrei sensores físicos, lógica embarcada no microcontrolador e toda a camada web/mobile para permitir automação e controle remoto completos.',
    stack: [
      'Arduino (C/C++)',
      'Node.js (API)',
      'Vue',
      'React Native (Expo)',
      'JavaScript',
      'HTML',
      'CSS',
    ],
    year: '2025',
    links: [
      {
        label: 'Repositório',
        url: 'https://github.com/marcos-macedo-dev/jardineiro_inteligente',
        icon: 'mdi:github',
        primary: true,
      },
      {
        label: 'DOC (no repo)',
        url: 'https://github.com/marcos-macedo-dev/jardineiro_inteligente/blob/main/DOC.pdf',
        icon: 'mdi:file-document',
        primary: false,
      },
    ],
  },
  {
    title: 'Portfólio Pessoal (marcos-macedo-dev)',
    category: 'Portfólio / Frontend',
    description:
      'Construí meu portfólio para apresentar meus projetos, minha trajetória e minhas habilidades de maneira objetiva e organizada.',
    highlight:
      'Projetei uma experiência limpa e direta, facilitando que recrutadores e parceiros encontrem tudo o que faço em poucos segundos.',
    stack: ['Vue.js', 'TailwindCSS', 'JavaScript', 'HTML', 'CSS'],
    year: '2025',
    links: [
      {
        label: 'Site (portfólio)',
        url: 'https://marcos-macedo-dev.vercel.app',
        icon: 'mdi:open-in-new',
        primary: true,
      },
      {
        label: 'Repositório',
        url: 'https://github.com/marcos-macedo-dev/marcos-macedo-dev',
        icon: 'mdi:github',
        primary: false,
      },
    ],
  },
]

let ctx

onMounted(() => {
  if (!section.value) return

  // gsap.context garante que os seletores sejam resolvidos apenas dentro desta seção
  ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: {
        immediateRender: false,
      },
      scrollTrigger: {
        trigger: section.value,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      },
    })

    tl.from('.projects-eyebrow', {
      opacity: 0,
      y: -10,
      duration: 0.4,
      ease: 'power2.out',
    })
      .from(
        '.projects-title',
        {
          opacity: 0,
          y: -30,
          duration: 0.7,
          ease: 'power3.out',
        },
        '-=0.1',
      )
      .from(
        '.projects-subtitle',
        {
          opacity: 0,
          y: -15,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.3',
      )
      .from(
        '.project-card',
        {
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
        },
        '-=0.2',
      )
      .from(
        '.project-highlight',
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.2,
          ease: 'power2.out',
        },
        '-=0.4',
      )
      .from(
        '.project-pill',
        {
          opacity: 0,
          y: 15,
          duration: 0.4,
          stagger: 0.05,
          ease: 'power2.out',
        },
        '-=0.45',
      )
      .from(
        '.project-link',
        {
          opacity: 0,
          y: 10,
          duration: 0.35,
          stagger: 0.06,
          ease: 'power2.out',
        },
        '-=0.4',
      )

    // leve efeito de scroll/parallax nos cards
    gsap.utils.toArray('.project-card').forEach((card, i) => {
      gsap.to(card, {
        y: i % 2 === 0 ? -12 : 12,
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    })
  }, section.value)
})

onBeforeUnmount(() => {
  // remove animações e ScrollTrigger criados por este contexto
  ctx?.revert()
})
</script>
