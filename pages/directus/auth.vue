<script lang="ts" setup>
const logger = useLogger('PageDirectusAuth')
const api = useStoreApi()
const storeMain = useStoreMain()
const router = useRouter()
const route = useRoute()
const UI = useStoreUI()
</script>

<template>
  <div class="flex flex-row w-full">
    <DirectusAuth />
  </div>
</template>
