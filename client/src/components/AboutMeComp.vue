<template>
  <section
    id="sobre"
    class="relative isolate bg-zinc-950 min-h-screen flex items-center py-24 px-6 overflow-hidden"
  >
    <!-- Glows decorativos sutis roxos, bem leves -->
    <div
      class="absolute left-[-200px] top-0 w-[400px] h-[400px] rounded-full bg-purple-700/20 blur-[150px] pointer-events-none"
      aria-hidden="true"
    ></div>
    <div
      class="absolute right-[-100px] bottom-10 w-[300px] h-[300px] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none"
      aria-hidden="true"
    ></div>

    <div class="z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-5 gap-16 items-center">
      <!-- Foto -->
      <figure class="md:col-span-2 flex justify-center" aria-label="Foto de Antonio Marcos">
        <img
          src="@/assets/images/avatar2.jpg"
          alt="Antonio Marcos, desenvolvedor full stack"
          class="rounded-full w-64 h-64 md:w-80 md:h-80 border-2 border-purple-600 object-cover shadow-md transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </figure>

      <!-- Conteúdo -->
      <article
        class="md:col-span-3 rounded-2xl bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 p-8 md:p-12 shadow-md"
      >
        <header class="mb-8">
          <h2 class="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Sobre
            <span class="text-purple-500"> Mim</span>
          </h2>
          <p class="mt-4 text-lg text-purple-300 max-w-prose font-light">
            Desenvolvedor Full Stack dedicado a transformar ideias em soluções digitais robustas e
            escaláveis, com foco em inovação, performance e experiência do usuário.
          </p>
        </header>

        <div class="space-y-6 text-base md:text-lg text-gray-400 leading-relaxed max-w-prose">
          <p>
            Sou <strong class="text-white">Antonio Marcos</strong>, com experiência em
            desenvolvimento de aplicações web modernas utilizando
            <span class="text-purple-400 font-semibold">Vue.js</span>,
            <span class="text-purple-400 font-semibold">Node.js</span> e
            <span class="text-purple-400 font-semibold">Tailwind CSS</span>.
          </p>
          <p>
            Busco criar interfaces elegantes e backends eficientes, alinhando tecnologia e design
            para entregar valor real e soluções que fazem a diferença.
          </p>
        </div>
      </article>
    </div>
  </section>
</template>
