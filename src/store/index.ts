import { useCounterStoreForApp } from './app'
import { useCounterStoreForUser } from './user'

export interface MainStore {
  useCounterStoreForApp: ReturnType<typeof useCounterStoreForApp>
  useCounterStoreForUser: ReturnType<typeof useCounterStoreForUser>
}

const mainStore: MainStore = {} as MainStore

export const registerStore = () => {
  mainStore.useCounterStoreForApp = useCounterStoreForApp()
  mainStore.useCounterStoreForUser = useCounterStoreForUser()
}

export default mainStore
