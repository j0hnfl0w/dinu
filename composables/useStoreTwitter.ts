import { acceptHMRUpdate, defineStore, skipHydrate } from 'pinia'

export const useStoreTwitter = defineStore('twitter', () => {
  const logger = useLogger('store:twitter')
  const isServer = process.server
  logger.log(':start', isServer)

  async function getTweets() {
    return []
  }

  return {
    getTweets,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useStoreTwitter, import.meta.hot))
