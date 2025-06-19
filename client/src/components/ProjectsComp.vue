<template>
  <main class="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 p-6">
    <h2 class="text-3xl font-bold mb-8 text-center">Projetos</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <article v-for="project in projects" :key="project.id"
        class="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer">
        <h3 class="text-xl font-semibold mb-2">{{ project.name }}</h3>
        <p class="mb-4">{{ project.description }}</p>
        <a :href="project.link" target="_blank" rel="noopener" class="text-blue-600 dark:text-blue-400 hover:underline">
          Ver projeto
        </a>
      </article>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    name: 'Sistema de Controle de Tarefas',
    description: 'App para gerenciar tarefas diárias com interface simples e intuitiva.',
    link: 'https://github.com/seuusuario/sistema-tarefas'
  },
  {
    id: 2,
    name: 'Landing Page para Produto X',
    description: 'Página responsiva para lançamento de produto, com design moderno e conversão otimizada.',
    link: 'https://github.com/seuusuario/landing-produto-x'
  },
  {
    id: 3,
    name: 'Portfólio Pessoal',
    description: 'Website pessoal para apresentação dos meus projetos e habilidades.',
    link: 'https://seusite.com'
  }
])
</script>
