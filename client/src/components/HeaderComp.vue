<template>
  <header
    :class="[
      'bg-zinc-900/20 backdrop-blur-xs border-b border-white/10 w-full z-50 sticky top-0 left-0 transition-transform duration-300',
      { '-translate-y-full': !showHeader },
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center">
        <img src="/logotipo.png" alt="Logo do portfólio de Antonio Marcos" class="h-6 w-auto" />
      </div>

      <!-- Navegação desktop -->
      <nav class="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-300">
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
      </nav>

      <!-- Menu mobile -->
      <button class="md:hidden p-2 rounded-lg hover:bg-zinc-800 transition" @click="open = !open">
        <LucideMenu class="w-6 h-6 text-zinc-100" />
      </button>
    </div>

    <!-- Menu mobile -->
    <transition name="fade">
      <div
        v-if="open"
        class="md:hidden bg-zinc-950/70 backdrop-blur-lg border-t border-white/10 px-6 pb-6"
      >
        <nav class="flex flex-col space-y-4 text-sm font-medium pt-4 text-zinc-300">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="hover:text-blue-500 transition"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { LucideMenu } from 'lucide-vue-next'

const open = ref(false)
const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Competências', href: '#competencias' },
  { label: 'Contato', href: '#contato' },
]

const showHeader = ref(true)
let lastScrollY = window.scrollY

const onScroll = () => {
  const currentScrollY = window.scrollY

  if (currentScrollY < 50) {
    showHeader.value = true
  } else if (currentScrollY > lastScrollY) {
    showHeader.value = false
  } else {
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
