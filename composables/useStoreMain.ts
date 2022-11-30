import { acceptHMRUpdate, defineStore } from 'pinia'

export const useStoreMain = defineStore('main', () => {
  const logger = useLogger('store:main')
  const isServer = process.server
  logger.log(':start', isServer)
  const api = useStoreApi()

  const user = ref(null) as any

  async function getUser() {
    logger.log(':getUser start')
    const { data } = await api.ftch('/users/me')
    logger.log(':getUser data', data)
    user.value = data
  }

  return {
    user,
    getUser,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useStoreMain, import.meta.hot))
