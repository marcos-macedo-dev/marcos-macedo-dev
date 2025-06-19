<template>
  <section id="competencias" class="relative isolate bg-zinc-950 py-24 px-6 overflow-hidden">
    <!-- Glows decorativos com novas posições -->
    <div
      class="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[160px] pointer-events-none select-none"
      aria-hidden="true"
    ></div>

    <div
      class="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-purple-700/15 blur-[140px] pointer-events-none select-none"
      aria-hidden="true"
    ></div>

    <div
      class="absolute top-10 right-[-150px] w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none select-none"
      aria-hidden="true"
    ></div>

    <div class="z-10 max-w-7xl mx-auto w-full flex flex-col gap-12">
      <!-- Título e descrição -->
      <header class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-5xl font-extrabold text-white tracking-tight mb-4">Minhas Competências</h2>
        <p class="text-purple-300 text-lg max-w-xl mx-auto leading-relaxed">
          Combinando habilidades técnicas e ferramentas modernas para construir aplicações robustas,
          eficientes e escaláveis.
        </p>
      </header>

      <!-- Skills e Ferramentas lado a lado -->
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-20">
        <!-- Skills -->
        <section
          class="flex-1 bg-zinc-900/70 rounded-2xl p-8 backdrop-blur-md border border-purple-700/30 shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h3 class="text-3xl font-semibold text-white mb-8 text-center tracking-wide">Skills</h3>
          <ul class="grid grid-cols-2 sm:grid-cols-3 gap-6 text-purple-300 text-base font-medium">
            <li
              v-for="skill in skills"
              :key="skill.name"
              class="flex items-center gap-4 p-3 rounded-md bg-zinc-800 hover:bg-purple-700/50 transition-colors duration-300 select-none cursor-default"
              :title="skill.name"
            >
              <Icon
                :icon="skill.icon"
                class="w-6 h-6 text-purple-400 flex-shrink-0"
                aria-hidden="true"
              />
              <span class="truncate">{{ skill.name }}</span>
            </li>
          </ul>
        </section>

        <!-- Linha divisória -->
        <div class="hidden lg:block w-px bg-purple-700/50 rounded mx-6" aria-hidden="true"></div>

        <!-- Ferramentas -->
        <section
          class="flex-1 bg-zinc-900/70 rounded-2xl p-8 backdrop-blur-md border border-purple-700/30 shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h3 class="text-3xl font-semibold text-white mb-8 text-center tracking-wide">
            Ferramentas
          </h3>
          <ul class="grid grid-cols-2 sm:grid-cols-3 gap-6 text-purple-300 text-base font-medium">
            <li
              v-for="tool in tools"
              :key="tool.name"
              class="flex items-center gap-4 p-3 rounded-md bg-zinc-800 hover:bg-purple-700/50 transition-colors duration-300 select-none cursor-default"
              :title="tool.name"
            >
              <Icon
                :icon="tool.icon"
                class="w-6 h-6 text-purple-400 flex-shrink-0"
                aria-hidden="true"
              />
              <span class="truncate">{{ tool.name }}</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const skills = [
  { name: 'Vue.js', icon: 'simple-icons:vuedotjs' },
  { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
  { name: 'Express', icon: 'simple-icons:express' },
  { name: 'Sequelize', icon: 'simple-icons:sequelize' },
  { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
  { name: 'JavaScript', icon: 'simple-icons:javascript' },
  { name: 'MySQL', icon: 'simple-icons:mysql' },
  { name: 'Git & GitHub', icon: 'simple-icons:git' },
  { name: 'API REST', icon: 'material-symbols:api' },
]

const tools = [
  { name: 'VSCode', icon: 'simple-icons:visualstudiocode' },
  { name: 'Postman', icon: 'simple-icons:postman' },
  { name: 'Figma', icon: 'simple-icons:figma' },
  { name: 'Linux', icon: 'simple-icons:linux' },
  { name: 'Vercel', icon: 'simple-icons:vercel' },
  { name: 'GitHub', icon: 'simple-icons:github' },
  { name: 'Firebase', icon: 'simple-icons:firebase' },
  { name: 'Netlify', icon: 'simple-icons:netlify' },
  { name: 'Insomnia', icon: 'simple-icons:insomnia' },
]
</script>
