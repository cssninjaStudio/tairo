<script setup lang="ts">
const props = defineProps<{
  name: string
  to: string
}>()

const { toggle } = useSidebar()
const { xl } = useTailwindBreakpoints()

function onClick() {
  console.log('onClick', props.name, xl.value)
  if (xl.value) {
    return
  }

  toggle()
}
</script>

<template>
  <li class="mb-1 flex min-h-[2rem] items-center">
    <NuxtLink
      :to="props.to"
      class="nui-focus text-muted-400 hover:text-primary-500 flex w-full items-center transition-colors duration-300"
      @click.passive="onClick"
    >
      <span class="font-sans text-sm">{{ props.name }}</span>
    </NuxtLink>
  </li>
</template>
