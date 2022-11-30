<script lang="ts" setup>
useHead({
  title: 'dinu',
  link: [
    // {
    //   rel: 'icon', type: 'image/png', href: '/nuxt.png',
    // },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
::-webkit-scrollbar {
  width: 0;
  height: 0;
}

html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}

.vcol {
  flex: 10000 1 0%;
  height: auto;
  min-height: 0;
  max-height: 100%;
}

.br {
  outline: 1px solid red;
}
.bg {
  outline: 1px solid green;
}
.bb {
  outline: 1px solid blue;
}
</style>
