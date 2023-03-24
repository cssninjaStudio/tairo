<script setup lang="ts">
const props = defineProps<{
  name: string
  children: {
    name: string
    icon: string
    to: string
    exact?: boolean
  }[]
}>()

const open = ref(false)
const route = useRoute()
const buttonRef = ref<HTMLElement>()

const hasActiveChild = computed(() => {
  return props.children.some((item) => {
    if (item.exact === true) {
      return route.path === item.to
    }

    return route.path.startsWith(item.to)
  })
})

watchEffect(() => {
  if (hasActiveChild.value) {
    open.value = true
  }
})

function onClick(event: MouseEvent) {
  open.value = !open.value
  if (!open.value) {
    buttonRef.value?.blur()
  }
}
</script>

<template>
  <li class="group mb-1 min-h-[2rem]">
    <a
      ref="buttonRef"
      href="#"
      class="nui-focus relative top-0.5 flex items-center"
      @click.stop.prevent="onClick"
    >
      <span
        class="relative inline-flex gap-2 items-center font-sans text-sm text-muted-400 transition-colors duration-300 group-hover:text-primary-500"
      >
        <span
          v-if="hasActiveChild"
          class="absolute top-2 -left-3 rounded-full bg-primary-500 h-1 w-1"
        ></span>
        <span>{{ props.name }}</span>
      </span>
      <Icon
        name="feather:chevron-down"
        class="ml-auto block h-4 w-4 text-muted-400 transition-transform duration-300"
        :class="{
          'group-focus-within:rotate-180': !open,
          'rotate-180': open,
        }"
      />
    </a>

    <div
      class="transition-all duration-150"
      :class="{
        'max-h-0 opacity-0 overflow-hidden group-focus-within:overflow-visible group-focus-within:max-h-max group-focus-within:opacity-100':
          !open,
        'max-h-max opacity-100': open,
      }"
    >
      <ul class="py-2">
        <li v-for="link of props.children" class="flex h-8 items-center w-full">
          <NuxtLink
            :to="link.to"
            :active-class="!link.exact ? 'text-primary-500' : ''"
            :exact-active-class="link.exact ? 'text-primary-500' : ''"
            class="flex pl-3 w-full nui-focus items-center text-muted-400 transition-colors duration-300 hover:text-primary-500 focus:text-primary-500"
          >
            <Icon :name="link.icon" class="mr-2 h-5 w-5" />
            <span class="font-sans text-xs">{{ link.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </li>
</template>
