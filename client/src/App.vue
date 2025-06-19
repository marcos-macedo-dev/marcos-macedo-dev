<script setup>
import AlertToastComp from './components/AlertToastComp.vue'
// main.js ou no setup do App.vue
document.documentElement.classList.add('dark')
</script>

<template>
  <AlertToastComp />
  <RouterView />
</template>

<style scoped></style>
