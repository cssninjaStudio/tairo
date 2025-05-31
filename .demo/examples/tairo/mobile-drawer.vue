<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <div>
    <BaseButton @click="isOpen = true">
      Open
    </BaseButton>
    <TairoMobileDrawer v-model="isOpen">
      <div class="space-y-3 min-h-[40dvh]">
        <ul class="font-sans text-lg space-y-2">
          <li>
            <NuxtLink
              to="/"
              class="text-muted-600 dark:text-muted-400 underline-offset-8"
              exact-active-class="underline font-medium text-muted-900! dark:text-white!"
            >
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/documentation"
              class="text-muted-600 dark:text-muted-400 underline-offset-8"
              exact-active-class="underline font-medium text-muted-900! dark:text-white!"
            >
              Documentation
            </NuxtLink>
          </li>
        </ul>
      </div>
    </TairoMobileDrawer>
  </div>
</template>
