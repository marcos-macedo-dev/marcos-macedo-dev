<script setup>
import { useAlert } from '@/stores/useAlert'
import { computed, ref, watch, nextTick, onBeforeUnmount } from 'vue'

import IconsComp from '@/components/IconsComp.vue'

const alert = useAlert()

const information = computed(() => {
  if (alert.status >= 500) return ['XCircle', 'red', 'white']
  if (alert.status >= 300) return ['AlertCircle', 'yellow', 'black']
  if (alert.status >= 200) return ['CheckCircle', 'green', 'white']
  return ['Info', 'blue', 'white']
})

const isVisible = ref(false)
const timeout = ref(null)

watch(
  () => alert.visible,
  async (newVal) => {
    if (newVal) {
      isVisible.value = true
      await nextTick()
      timeout.value = setTimeout(() => {
        isVisible.value = false
        alert.hide()
      }, 7000)
    }
  }
)

onBeforeUnmount(() => {
  clearTimeout(timeout.value)
})
</script>

<template>
  <transition name="fade-slide">
    <div v-if="isVisible" class="toast-container">
      <div class="toast-content" :style="{ background: information[1] }">
        <!-- Usando o componente IconsComp para exibir o ícone dinâmico -->
        <IconsComp :name="information[0]" :color="information[2]" class="icon" />
        <span class="message" :style="{ color: information[2] }">{{ alert.message }}</span>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.toast-container {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: auto;
  max-width: 90%;
}

/* Estilo do Toast */
.toast-content {
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  font-size: 14px;
  padding: 12px 18px;
  border-radius: 8px;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  font-weight: 500;
  transition: opacity 0.3s ease-in-out;
}

/* Ícone */
.icon {
  font-size: 22px;
}

/* Anima o fade */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition:
    opacity 0.3s,
    bottom 0.3s ease-in-out;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  bottom: -100px;
}

@media screen and (max-width: 548px) {
  .toast-container {
    width: 100%;
  }
}
</style>
