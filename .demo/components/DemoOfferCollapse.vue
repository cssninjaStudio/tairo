<script setup lang="ts">
import AddonCollapseTransition from './AddonCollapseTransition.vue'

const props = defineProps<{
  slug: string
  title: string
  subtitle: string
  icon: string
  remaining: string
}>()

const target = ref(null)
const open = ref(false)
onClickOutside(target, () => (open.value = false))
</script>

<template>
  <BaseCard
    ref="target"
    rounded="lg"
    shadow="hover"
    class="p-5"
  >
    <!-- Trigger -->
    <button
      type="button"
      class="click-blur flex w-full items-center gap-3"
      @click="open = !open"
    >
      <Icon :name="props.icon" class="size-8" />
      <span class="block text-start">
        <span
          class="font-heading text-muted-800 dark:text-muted-200 block text-sm font-medium"
        >
          {{ props.title }}
        </span>
        <span class="font-heading text-muted-400 block text-xs font-medium">
          {{ props.subtitle }}
        </span>
      </span>
      <Icon
        name="lucide:chevron-down"
        class="text-muted-400 ms-auto size-5 transition-transform duration-300"
        :class="open ? 'rotate-180' : ''"
      />
    </button>
    <AddonCollapseTransition>
      <div v-if="open" class="group flex items-center justify-between pt-4">
        <DemoLinkArrow to="#" label="Get this offer" />
        <span class="font-heading text-muted-400 text-xs">{{ props.remaining }} left</span>
      </div>
    </AddonCollapseTransition>
  </BaseCard>
</template>
