<template>
  <!-- Componente principal, contém todos os outros componentes da página -->
  <div class="font-sans bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100">
    <!-- Cabeçalho -->
    <Header />

    <!-- Corpo da página -->
    <main>
      <!-- Seção de Destaque -->
      <Hero />
      <!-- Seção de Sobre -->
      <Sobre />

      <Skills />
      <Projetos />

      <!-- Seção de Contato -->
      <Contato />
    </main>

    <!-- Rodapé -->
    <Footer />
  </div>
</template>

<script setup>
// Importa os componentes utilizados na página
import Header from '@/components/HeaderComp.vue'
import Hero from '@/components/HeroSection.vue'
import Sobre from '@/components/AboutMeComp.vue'
import Skills from '@/components/SkillsComp.vue'
import Projetos from '@/components/ProjectsComp.vue'
import Contato from '@/components/ContactComp.vue'
import Footer from '@/components/FooterComp.vue'
</script>
