<script setup lang="ts">
const props = defineProps<{
  item: any
}>()

const route = useRoute()

const isActive = computed(() => {
  if (!props.item?.activePath) {
    return false
  }

  return route.path.startsWith(props.item.activePath)
})

const buttonRef = ref<HTMLElement>()
const isOpen = ref(isActive.value)

function onDropClick() {
  isOpen.value = !isOpen.value
  if (!isOpen.value) {
    buttonRef.value?.blur()
  }
}
</script>

<template>
  <div class="group">
    <button
      class="nui-focus text-muted-500 hover:bg-muted-200 dark:hover:bg-muted-900 hover:text-muted-600 dark:hover:text-muted-200 flex w-full cursor-pointer items-center gap-4 rounded-lg px-4 py-3 transition-colors duration-300"
      ref="buttonRef"
      @click.stop.prevent="onDropClick"
    >
      <Icon :name="item.icon.name" :class="item.icon.class" />
      <span
        class="block whitespace-nowrap font-sans text-sm"
        :class="[isActive && 'underline']"
      >
        {{ item.name }}
      </span>
      <span class="ml-auto flex items-center justify-center">
        <Icon
          name="lucide:chevron-up"
          class="h-4 w-4 transition-transform duration-200"
          :class="isOpen ? 'rotate-180' : ''"
        />
      </span>
    </button>

    <ul
      :class="{
        'max-h-0 overflow-hidden opacity-0 group-focus-within:max-h-max group-focus-within:overflow-visible group-focus-within:opacity-100':
          !isOpen,
        'max-h-max opacity-100': isOpen,
      }"
    >
      <li v-for="child in props.item.children" :key="child.to">
        <NuxtLink
          :to="child.to"
          exact-active-class="bg-muted-200 dark:bg-muted-900"
          class="nui-focus text-muted-500 hover:bg-muted-200 dark:hover:bg-muted-900 hover:text-muted-600 dark:hover:text-muted-200 flex cursor-pointer items-center gap-4 rounded-lg px-4 py-3 transition-colors duration-300"
        >
          <Icon :name="child.icon.name" :class="child.icon.class" />
          <span class="whitespace-nowrap font-sans text-sm">
            {{ child.name }}
          </span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
