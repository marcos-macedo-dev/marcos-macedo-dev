<template>
  <section
    id="sobre"
    class="relative isolate bg-zinc-950 min-h-screen flex items-center py-16 px-4 sm:py-24 sm:px-6 lg:px-12 overflow-hidden"
  >
    <!-- Glows decorativos azulados -->
    <div
      class="absolute left-[-200px] top-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-blue-700/20 blur-[150px] pointer-events-none"
      aria-hidden="true"
    ></div>
    <div
      class="absolute right-[-100px] bottom-10 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none"
      aria-hidden="true"
    ></div>

    <div
      class="z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center"
    >
      <!-- Foto -->
      <figure class="lg:col-span-2 flex justify-center" aria-label="Foto de Antonio Marcos">
        <img
          src="@/assets/images/avatar2.png"
          alt="Antonio Marcos, desenvolvedor full stack"
          class="rounded-full w-62 h-62 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 border-2 border-blue-600 object-cover object-top shadow-md transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </figure>

      <!-- Conteúdo -->
      <article
        class="lg:col-span-3 rounded-2xl bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 p-6 sm:p-8 md:p-10 lg:p-12 shadow-md"
      >
        <header class="mb-6 sm:mb-8">
          <h2
            class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Sobre <span class="text-blue-500">Mim</span>
          </h2>
          <p class="mt-4 text-base sm:text-lg text-blue-300 max-w-prose font-light">
            Desenvolvedor Full Stack dedicado a transformar ideias em soluções digitais robustas e
            escaláveis, com foco em inovação, performance e experiência do usuário.
          </p>
        </header>

        <div
          class="space-y-6 text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-prose"
        >
          <p>
            Sou <strong class="text-white">Antonio Marcos</strong>, com experiência em
            desenvolvimento de aplicações web modernas utilizando
            <span class="text-blue-400 font-semibold">Vue.js</span>,
            <span class="text-blue-400 font-semibold">Node.js</span> e
            <span class="text-blue-400 font-semibold">Tailwind CSS</span>.
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
