
<template>
  <h1>hello组件</h1>

  <p>app_count: {{ count }}</p>
  <p>app_PlusOne: {{ doubleCountPlusOne }}</p>
  <p>app_storage: {{ handleShowCount }}</p>

  <button @click="handleAdd">
    增加 1
  </button>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import mainStore from '@/store'

const { count, doubleCountPlusOne, handleShowCount } = storeToRefs(mainStore.useCounterStoreForApp)

const handleAdd = () => {
  count.value++
}
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
