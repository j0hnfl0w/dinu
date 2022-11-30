<template>
  <div class="flex flex-col w-full min-h-100vh items-start content-start">
    <div class="flex flex-row w-full p-4 gap-x-4">
      <NuxtLink to="/">
        #dinu
      </NuxtLink>
      <NuxtLink to="/directus/auth">
        Directus Auth
      </NuxtLink>
      <NuxtLink to="/directus/collections">
        Directus Collections
      </NuxtLink>
      <NuxtLink to="/clones/twitter">
        Twitter Clone
      </NuxtLink>
    </div>
    <slot />
  </div>
</template>
