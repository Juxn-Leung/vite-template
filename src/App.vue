<template>
  <fullscreen
    v-model="isFullscreen"
    fullscreen-class="fullscreen-class"
    :exit-on-click-wrapper="false"
  >
    <main class="app-main">
      <RouterView />
    </main>
  </fullscreen>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const isFullscreen = ref(false)
</script>

<style lang="scss">
.app-main {
  margin-top: 57px;
  background: #f4f7fc;
}
.fullscreen-class {
  background: #f4f7fc;
  overflow-y: auto;
}
</style>
