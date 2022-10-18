
<template>
  <h1>test组件</h1>
  <ul>
    <li
      v-for="(item, index) in list"
      :key="index"
    >
      {{ item }}
    </li>
  </ul>
  <br>
  <p>{{ handleDouble }}</p>
  <button @click="handlContAdd">
    count+1
  </button>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import mainStore from '@/store'

const { list } = storeToRefs(mainStore.useCounterStoreForUser)
const { count, handleDouble } = storeToRefs(mainStore.useCounterStoreForApp)

const handlContAdd = () => {
  count.value++
}
</script>
