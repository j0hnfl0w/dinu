<script lang="ts" setup>
const logger = useLogger('PageDirectusCollections')
const api = useStoreApi()
const storeMain = useStoreMain()
const router = useRouter()
const route = useRoute()
const UI = useStoreUI()

const collections = [
  ['tweets', 'body'],
]
</script>

<template>
  <div class="flex flex-col w-full p-4">
    <h1 class="font-bold text-2xl">
      Directus Collections
    </h1>
    <DirectusCollection v-for="[id, nameField] in collections" :key="id" :collection="id" :name-field="nameField" />
  </div>
</template>
