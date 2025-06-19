<template>
  <header
    :class="[
      'bg-white/70 dark:bg-zinc-950/70 backdrop-blur-lg border-b border-zinc-200 dark:border-white/10 w-full z-50 fixed top-0 left-0 transition-transform duration-300',
      { '-translate-y-full': !showHeader },
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center">
        <span class="font-bold text-2xl">Portfólio</span>
      </div>

      <!-- Navegação desktop -->
      <nav
        class="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-700 dark:text-zinc-300"
      >
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="relative group transition hover:text-blue-500"
        >
          {{ link.label }}
          <span
            class="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all group-hover:w-full"
          ></span>
        </a>

        <!-- Botão modo escuro -->
        <button
          @click="toggleDarkMode"
          class="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          title="Alternar tema"
        >
          <LucideSun v-if="isDark" class="w-5 h-5" />
          <LucideMoon v-else class="w-5 h-5" />
        </button>
      </nav>

      <!-- Menu mobile -->
      <button
        class="md:hidden p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
        @click="open = !open"
      >
        <LucideMenu class="w-6 h-6 text-zinc-900 dark:text-zinc-100" />
      </button>
    </div>

    <!-- Menu mobile -->
    <transition name="fade">
      <div
        v-if="open"
        class="md:hidden bg-white/70 dark:bg-zinc-950/70 backdrop-blur-lg border-t border-zinc-200 dark:border-white/10 px-6 pb-6"
      >
        <nav
          class="flex flex-col space-y-4 text-sm font-medium pt-4 text-zinc-700 dark:text-zinc-300"
        >
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="hover:text-blue-500 transition"
          >
            {{ link.label }}
          </a>

          <!-- Botão tema mobile -->
          <button
            @click="toggleDarkMode"
            class="flex items-center space-x-2 mt-2 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            <LucideSun v-if="isDark" class="w-5 h-5" />
            <LucideMoon v-else class="w-5 h-5" />
            <span>
              {{ isDark ? 'Modo Claro' : 'Modo Escuro' }}
            </span>
          </button>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { LucideMenu, LucideSun, LucideMoon } from 'lucide-vue-next'
import { useDark, useToggle } from '@vueuse/core'

// Controle de modo escuro
const isDark = useDark()
const toggleDark = useToggle(isDark)
const toggleDarkMode = () => toggleDark()

// Controle menu mobile
const open = ref(false)

// Links
const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Competências', href: '#competencias' },
  { label: 'Contato', href: '#contato' },
]

// Controle visibilidade do header
const showHeader = ref(true)
let lastScrollY = window.scrollY

const onScroll = () => {
  const currentScrollY = window.scrollY

  if (currentScrollY < 50) {
    // Sempre mostra no topo da página
    showHeader.value = true
  } else if (currentScrollY > lastScrollY) {
    // Descendo a página
    showHeader.value = false
  } else {
    // Subindo a página
    showHeader.value = true
  }

  lastScrollY = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
