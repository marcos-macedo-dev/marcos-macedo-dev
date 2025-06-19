<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useAlert } from '@/stores/useAlert'

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
</script>

<template>
  <section
    id="contato"
    class="relative isolate bg-gradient-to-bl from-zinc-900 via-zinc-950 to-black py-24 px-6"
  >
    <!-- Glows -->
    <div
      class="absolute top-[-150px] left-[60%] w-[400px] h-[400px] rounded-full bg-purple-700/20 blur-[150px]"
    ></div>
    <div
      class="absolute bottom-[-180px] left-[-120px] w-[500px] h-[500px] rounded-full bg-purple-600/25 blur-[160px]"
    ></div>
    <div
      class="absolute top-[50%] right-[-200px] w-[350px] h-[350px] rounded-full bg-purple-800/15 blur-[140px]"
    ></div>

    <div class="max-w-3xl mx-auto">
      <!-- Cabeçalho -->
      <div class="mb-12 text-center">
        <h3 class="text-sm uppercase tracking-widest text-purple-500 mb-2">Contato</h3>
        <h2 class="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Fale Comigo
        </h2>
        <p class="max-w-xl mx-auto text-base text-gray-400 leading-relaxed">
          Tem dúvidas, sugestões ou deseja um orçamento? Envie uma mensagem e retornarei
          rapidamente.
        </p>
      </div>

      <!-- Formulário -->
      <form class="grid gap-6" @submit.prevent="handleSubmit">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <!-- Nome -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-300 mb-1">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Seu nome"
              v-model="name"
              class="w-full rounded-xl bg-zinc-900 border border-zinc-700 py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition"
            />
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="seu@email.com"
              v-model="email"
              class="w-full rounded-xl bg-zinc-900 border border-zinc-700 py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition"
            />
          </div>
        </div>

        <!-- Mensagem -->
        <div>
          <label for="message" class="block text-sm font-medium text-gray-300 mb-1">Mensagem</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Escreva sua mensagem aqui..."
            v-model="message"
            class="w-full rounded-xl bg-zinc-900 border border-zinc-700 py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition resize-none"
          ></textarea>
        </div>

        <!-- Botão -->
        <div class="flex justify-center">
          <button
            type="submit"
            disabled
            class="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-8 py-3 text-sm sm:text-base font-semibold text-white shadow-md hover:bg-purple-700 hover:shadow-purple-500/40 focus:outline-none focus:ring-4 focus:ring-purple-500/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
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
