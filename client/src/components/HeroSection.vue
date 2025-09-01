<template>
  <section
    id="inicio"
    class="relative isolate min-h-[100vh] flex items-center overflow-hidden py-16 px-4 sm:py-24 sm:px-6 lg:px-12"
    aria-label="Seção inicial com apresentação de Antonio Marcos, Desenvolvedor Full Stack"
  >
    <div id="particles-js" class="absolute inset-0"></div>

    <!-- Glows decorativos -->
    <div
      class="absolute left-[-200px] top-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/30 blur-[140px] pointer-events-none select-none"
      aria-hidden="true"
    ></div>
    <div
      class="absolute right-[-160px] bottom-0 w-[360px] h-[360px] rounded-full bg-blue-700/20 blur-[140px] pointer-events-none select-none"
      aria-hidden="true"
    ></div>

    <!-- Conteúdo principal -->
    <div
      class="z-10 w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 px-4 sm:px-6"
    >
      <!-- Texto e CTA -->
      <header class="flex-1 relative max-w-xl text-center lg:text-left">
        <img
          src="../assets/images/cup.png"
          alt=""
          aria-hidden="true"
          class="absolute inset-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] opacity-40 blur-[2px] pointer-events-none select-none animate-floating"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
        />

        <h1
          class="title text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight relative tracking-tight"
        >
          Antonio Marcos<br />
          <span class="text-blue-300">Desenvolvedor Full Stack</span>
        </h1>

        <p
          class="subtitle mt-6 text-base sm:text-lg lg:text-xl text-blue-200 max-w-xl mx-auto lg:mx-0 leading-relaxed relative"
        >
          Eu transformo ideias em soluções digitais.<br class="hidden sm:block" />
          Crio aplicações
          <span class="text-white font-semibold">rápidas</span>,
          <span class="text-white font-semibold">modernas</span> e
          <span class="text-white font-semibold">escaláveis</span> que fazem negócios prosperarem na
          internet.
        </p>

        <!-- CTA Principal -->
        <nav
          aria-label="Ações principais"
          class="buttons mt-8 flex justify-center lg:justify-start gap-4 relative flex-wrap"
        >
          <a
            href="#contato"
            class="inline-flex gap-2 items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg hover:bg-blue-700 hover:shadow-blue-500/40 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 transition"
          >
            <IconsComp name="Contact" aria-hidden="true" />
            <span>Entre em Contato</span>
          </a>

          <a
            href="/curriculo.pdf"
            target="_blank"
            class="inline-flex gap-2 items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-sm sm:text-base font-semibold text-white hover:border-blue-500 hover:text-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 transition opacity-50 cursor-not-allowed pointer-events-none"
            aria-disabled="true"
          >
            <IconsComp name="Download" aria-hidden="true" />
            <span>Baixar CV</span>
          </a>
        </nav>

        <!-- Social Links -->
        <div class="social-links mt-6 flex justify-center lg:justify-start gap-6">
          <a
            href="https://github.com/seuusuario"
            target="_blank"
            aria-label="GitHub"
            class="hover:text-blue-400 text-blue-300 transition"
          >
            <IconsComp name="GitHub" class="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/antonio-marcos-9305bb2b4/"
            target="_blank"
            aria-label="LinkedIn"
            class="hover:text-blue-400 text-blue-300 transition"
          >
            <IconsComp name="Linkedin" class="w-6 h-6" />
          </a>
          <a
            href="mailto:marcosmacedo784@gmail.com"
            aria-label="Email"
            class="hover:text-blue-400 text-blue-300 transition"
          >
            <IconsComp name="Mail" class="w-6 h-6" />
          </a>
          <a
            href="https://github.com/marcos-macedo-dev"
            target="_blank"
            aria-label="GitHub"
            class="hover:text-blue-400 text-blue-300 transition"
          >
            <IconsComp name="Github" class="w-6 h-6" />
          </a>
        </div>
      </header>

      <!-- Avatar -->
      <figure
        class="avatar flex-1 relative max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[520px] w-full"
      >
        <div
          class="relative w-full h-[320px] sm:h-[420px] md:h-[440px] lg:h-[620px] rounded-3xl overflow-hidden border border-blue-700 bg-blue-900/70 backdrop-blur-xl shadow-[0_0_80px_#2563eb]/20 transition hover:shadow-[0_0_120px_#2563eb]/30 transform-3d"
        >
          <img
            src="../assets/images/avatar.png"
            alt="Foto profissional de Antonio Marcos sorrindo"
            class="w-full h-full object-cover object-top opacity-95 hover:scale-105 transition-transform duration-700"
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
        </div>

        <img
          src="../assets/images/puzzle.png"
          alt=""
          aria-hidden="true"
          class="absolute -top-6 -left-10 w-16 sm:w-20 md:w-28 rotate-12 drop-shadow-2xl animate-floating select-none pointer-events-none"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
        />
      </figure>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import IconsComp from '../components/IconsComp.vue'
import { gsap } from 'gsap'
/* global particlesJS */

onMounted(() => {
  particlesJS.load('particles-js', 'particles.json', function () {
    console.log('Particles.js config loaded')
  })

  // Animações GSAP
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.from('.title', {
    y: -50,
    opacity: 0,
    duration: 1,
  })

  tl.from(
    '.subtitle',
    {
      y: -20,
      opacity: 0,
      duration: 0.8,
    },
    '-=0.6'
  )

  tl.from(
    '.buttons',
    {
      y: 20,
      opacity: 0,
      duration: 0.8,
    },
    '-=0.6'
  )

  tl.from(
    '.social-links a',
    {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
    },
    '-=0.5'
  )

  tl.from(
    '.avatar',
    {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
    },
    '-=1'
  )
})
</script>

<style scoped>
@keyframes floating {
  0%,
  100% {
    transform: translateY(0) rotate(14deg);
  }
  50% {
    transform: translateY(-12px) rotate(16deg);
  }
}
.animate-floating {
  animation: floating 3.5s ease-in-out infinite;
}
</style>
