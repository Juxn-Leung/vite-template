import { defineStore } from 'pinia'

export const useCounterStoreForUser = defineStore('user', {
  state: () => {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      count: 0
    }
  }
})
