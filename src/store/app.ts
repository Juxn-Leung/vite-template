import { defineStore } from 'pinia'
import storage from 'store'

export const useCounterStoreForApp = defineStore('app', {
  state: () => {
    return {
      count: 0
    }
  },
  getters: {
    handleDouble: (state) => state.count * 2,

    doubleCountPlusOne (): number {
      return this.handleDouble + 1
    },

    handleShowCount () {
      return storage.get('appCount')
    }
  },
  actions: {
    handleSetCount () {
      console.log('set count' + this.count)
      // storage.set('appCount', this.count)
      this.count++
    }
  }
})
