<template>
  <footer class="relative bg-zinc-950 text-gray-400 py-10 px-6">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <!-- Branding + Social -->
      <div class="flex flex-col items-center md:items-start gap-3">
        <a
          href="https://instagram.com/m4rcos_macedo"
          class="flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconsComp name="Instagram" class="h-6 w-6 text-purple-500" />
          <span class="text-lg font-semibold text-white">m4rcos_macedo</span>
        </a>
        <p class="text-sm text-gray-500 text-center md:text-left">
          Criando soluções digitais para fortalecer sua presença online.
        </p>
      </div>

      <!-- Navegação -->
      <nav>
        <ul class="flex gap-6 flex-wrap justify-center">
          <li><a href="#hero" class="hover:text-white transition">Início</a></li>
          <li><a href="#sobre" class="hover:text-white transition">Sobre</a></li>
          <li><a href="#pacotes" class="hover:text-white transition">Pacotes</a></li>
          <li><a href="#contato" class="hover:text-white transition">Contato</a></li>
        </ul>
      </nav>

      <!-- Voltar ao topo -->
      <button
        @click="scrollToTop"
        aria-label="Voltar ao topo"
        class="flex items-center rounded-full gap-2 border border-gray-600 px-4 py-2 transition hover:border-white hover:text-white"
        type="button"
      >
        <IconsComp name="ArrowUp" class="h-4 w-4 animate-bounce" />
        <span class="text-sm">Topo</span>
      </button>
    </div>

    <!-- Linha separadora -->
    <div class="border-t border-zinc-800 mt-8 pt-4 text-center text-xs text-gray-600">
      © 2025 Ararion. Todos os direitos reservados.
    </div>
  </footer>
</template>

<script setup>
import IconsComp from './IconsComp.vue'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>
