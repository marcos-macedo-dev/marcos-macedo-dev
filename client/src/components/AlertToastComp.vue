<script setup>
import { useAlert } from '@/stores/useAlert'
import { computed, ref, watch, nextTick, onBeforeUnmount } from 'vue'

import IconsComp from '@/components/IconsComp.vue'

const alert = useAlert()

const information = computed(() => {
  if (alert.status >= 500) return ['XCircle', '#ff5252'] // Red
  if (alert.status >= 300) return ['AlertCircle', '#ffc107'] // Yellow
  if (alert.status >= 200) return ['CheckCircle', '#2ed573'] // Green
  return ['Info', '#2979ff'] // Blue
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
      <div class="toast-content">
        <IconsComp :name="information[0]" :style="{ color: information[1] }" class="icon" />
        <span class="message" style="color: white;">{{ alert.message }}</span>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.toast-container {
  position: fixed;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: auto;
  max-width: 90%;
}

.toast-content {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  padding: 16px 24px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  font-weight: 600;
  
  /* Glassmorphism */
  background: rgba(30, 30, 45, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.icon {
  font-size: 24px;
}

/* Animations */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

@media screen and (max-width: 548px) {
  .toast-container {
    width: 100%;
  }
}
</style>