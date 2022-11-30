<script lang="ts" setup>
const props = defineProps({
  collection: { type: String, required: true },
  nameField: { type: String, default: 'name' },
})
const api = useStoreApi()
const state = reactive({
  items: [],
})

async function getItems() {
  const path = props.collection.startsWith('directus') ? `/${props.collection.split('_')[1]}` : `/items/${props.collection}`
  const { data } = await api.ftch(path, {
    // key: path,
    method: 'get',
    baseURL: 'http://localhost:8055',
    params: {
      limit: -1,
      meta: ['total_count', 'filter_count'],
      // access_token: 'Qh35ze3NiVnIb0bQbKwZ6Gt39TDZuEsv',
    },
  })
  console.log(':getItems data', data)
  state.items = data
}
getItems()
</script>

<template>
  <div class="flex flex-col bg-hex-333 h-200px min-h-500px w-full min-w-300px max-w-300px">
    <div class="flex flex-row w-full py-2 px-4">
      {{ collection }}
    </div>
    <div class="px-4 vcol overflow-x-hidden overflow-y-scroll">
      <div v-for="i in state.items" :key="i.id" class="flex flex-col mb-2 w-full">
        <span>{{ i[nameField] }}</span>
        <small style="font-size: 10px">{{ i }}</small>
      </div>
    </div>
    <div class="flex flex-row w-full py-2 px-4">
      0 / 100
    </div>
  </div>
</template>
