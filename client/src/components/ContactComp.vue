<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useAlert } from '@/stores/useAlert'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const alert = useAlert()

// Campos do formulário
const name = ref('')
const email = ref('')
const message = ref('')
const isLoading = ref(false)

// Envio do formulário
const handleSubmit = async () => {
  if (!name.value || !email.value || !message.value) {
    alert.show('Preencha todos os campos!', 400)
    return
  }

  isLoading.value = true
  try {
    await axios.post('http://localhost:3000/api/contact', {
      name: name.value,
      email: email.value,
      message: message.value,
    })

    alert.show('Mensagem enviada com sucesso!', 200)
    name.value = ''
    email.value = ''
    message.value = ''
  } catch (error) {
    console.error('Erro ao enviar:', error)
    alert.show('Erro ao enviar mensagem. Tente novamente mais tarde.', 500)
  } finally {
    isLoading.value = false
  }
}

const section = ref(null)

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section.value,
      start: 'top center',
      end: 'bottom center',
      toggleActions: 'play none none reverse',
    },
  })

  tl.from('.contact-title', {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  })

  tl.from(
    '.contact-subtitle',
    {
      y: -20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    },
    '-=0.6'
  )

  tl.from(
    '.form-item',
    {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power3.out',
    },
    '-=0.5'
  )
})
</script>

<template>
  <section
    id="contato"
    ref="section"
    class="relative isolate bg-gradient-to-bl from-zinc-900 via-zinc-950 to-black py-24 px-6"
  >
    <!-- Glows -->
    <div
      class="absolute top-[-150px] left-[60%] w-[400px] h-[400px] rounded-full bg-blue-700/20 blur-[150px]"
    ></div>
    <div
      class="absolute bottom-[-180px] left-[-120px] w-[500px] h-[500px] rounded-full bg-blue-600/25 blur-[160px]"
    ></div>
    <div
      class="absolute top-[50%] right-[-200px] w-[350px] h-[350px] rounded-full bg-blue-800/15 blur-[140px]"
    ></div>

    <div class="max-w-3xl mx-auto">
      <!-- Cabeçalho -->
      <div class="mb-12 text-center">
        <h3 class="contact-subtitle text-sm uppercase tracking-widest text-blue-500 mb-2">
          Contato
        </h3>
        <h2
          class="contact-title text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight"
        >
          Fale Comigo
        </h2>
        <p class="contact-subtitle max-w-xl mx-auto text-base text-gray-400 leading-relaxed">
          Tem dúvidas, sugestões ou deseja um orçamento? Envie uma mensagem e retornarei
          rapidamente.
        </p>
      </div>

      <!-- Formulário -->
      <form class="grid gap-6" @submit.prevent="handleSubmit">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <!-- Nome -->
          <div class="form-item">
            <label for="name" class="block text-sm font-medium text-gray-300 mb-1">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Seu nome"
              v-model="name"
              class="w-full rounded-xl bg-zinc-900 border border-zinc-700 py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
            />
          </div>

          <!-- Email -->
          <div class="form-item">
            <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="seu@email.com"
              v-model="email"
              class="w-full rounded-xl bg-zinc-900 border border-zinc-700 py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
            />
          </div>
        </div>

        <!-- Mensagem -->
        <div class="form-item">
          <label for="message" class="block text-sm font-medium text-gray-300 mb-1">Mensagem</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Escreva sua mensagem aqui..."
            v-model="message"
            class="w-full rounded-xl bg-zinc-900 border border-zinc-700 py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition resize-none"
          ></textarea>
        </div>

        <!-- Botão -->
        <div class="form-item flex justify-center">
          <button
            type="submit"
            disabled
            class="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3 text-sm sm:text-base font-semibold text-white shadow-md hover:bg-blue-700 hover:shadow-blue-500/40 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <IconsComp
              :name="isLoading ? 'Spinner' : 'Send'"
              class="h-5 w-5"
              :class="{ 'animate-spin': isLoading }"
            />
            <span>{{ isLoading ? 'Enviando...' : 'Enviar Mensagem' }}</span>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
