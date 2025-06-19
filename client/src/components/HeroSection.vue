<template>
  <section
    id="inicio"
    class="relative isolate min-h-[100vh] flex items-center overflow-hidden py-24 px-6"
    aria-label="Seção inicial com apresentação de Antonio Marcos, Desenvolvedor Full Stack"
  >
    <!-- Glows decorativos roxinhos -->
    <div
      class="absolute left-[-250px] top-1/4 w-[600px] h-[600px] rounded-full bg-purple-600/30 blur-[140px] pointer-events-none select-none"
      aria-hidden="true"
    ></div>

    <div
      class="absolute right-[-200px] bottom-0 w-[500px] h-[500px] rounded-full bg-purple-700/20 blur-[140px] pointer-events-none select-none"
      aria-hidden="true"
    ></div>

    <!-- Conteúdo principal -->
    <div
      class="z-10 w-full max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16"
    >
      <div id="particles-js" class="absolute inset-0"></div>

      <!-- Texto e CTA -->
      <header class="flex-1 relative">
        <!-- Imagem de fundo desfoque -->
        <img
          src="../assets/images/cup.png"
          alt=""
          aria-hidden="true"
          class="absolute inset-0 w-[500px] h-[500px] opacity-40 blur-[10px] pointer-events-none select-none animate-floating"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
        />

        <h1
          class="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight relative tracking-tight"
        >
          Antonio Marcos<br />
          <span class="text-purple-300"> Desenvolvedor Full Stack </span>
        </h1>

        <p class="mt-6 text-lg sm:text-xl text-purple-200 max-w-xl relative leading-relaxed">
          Eu transformo ideias em soluções digitais.<br class="hidden sm:block" />
          Crio aplicações
          <span class="text-white font-semibold">rápidas</span>,
          <span class="text-white font-semibold">modernas</span> e
          <span class="text-white font-semibold">escaláveis</span> que fazem negócios prosperarem na
          internet.
        </p>

        <!-- CTA -->
        <nav aria-label="Ações principais" class="mt-8 flex flex-wrap gap-4 relative">
          <a
            href="#contato"
            class="inline-flex gap-2 items-center justify-center rounded-lg bg-purple-600 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg hover:bg-purple-700 hover:shadow-purple-500/40 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-opacity-50 transition"
          >
            <IconsComp name="Contact" aria-hidden="true" />
            <span>Entre em Contato</span>
          </a>
        </nav>
      </header>

      <!-- Avatar -->
      <figure class="flex-1 relative max-w-[520px] w-full">
        <div
          class="relative w-full h-[620px] rounded-3xl overflow-hidden border border-purple-700 bg-purple-900/70 backdrop-blur-xl shadow-[0_0_80px_#7c3aed]/20 transition hover:shadow-[0_0_120px_#7c3aed]/30 transform-3d"
        >
          <img
            src="../assets/images/avatar.jpg"
            alt="Foto profissional de Antonio Marcos sorrindo"
            class="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-700"
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
        </div>

        <!-- Ícone decorativo -->
        <img
          src="../assets/images/puzzle.png"
          alt=""
          aria-hidden="true"
          class="absolute -top-8 -left-14 w-32 rotate-12 drop-shadow-2xl animate-floating select-none pointer-events-none"
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
/* global particlesJS */

onMounted(() => {
  particlesJS.load('particles-js', 'particles.json', function () {
    console.log('Particles.js config loaded')
  })
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
