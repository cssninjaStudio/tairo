<script setup lang="ts">
export interface AccordionItem {
  title: string
  content: string
}
export interface AccordionProps {
  items: AccordionItem[]
  openItems?: number[]
  exclusive?: boolean
}

const props = withDefaults(defineProps<AccordionProps>(), {
  items: () => [],
  openItems: () => [],
})

const internalOpenItems = ref(props.openItems)
const toggle = (key: number) => {
  const wasOpen = internalOpenItems.value.includes(key)

  if (props.exclusive) {
    internalOpenItems.value.splice(0, internalOpenItems.value.length)

    if (!wasOpen) {
      internalOpenItems.value.push(key)
    }

    return
  }

  if (wasOpen) {
    internalOpenItems.value.splice(internalOpenItems.value.indexOf(key), 1)
  } else {
    internalOpenItems.value.push(key)
  }
}
</script>

<template>
  <div class="single-accordion" :class="[exclusive && 'is-exclusive']">
    <details
      v-for="(item, key) in items"
      :key="key"
      class="accordion-item"
      :open="internalOpenItems?.includes(key) ?? undefined"
      :class="[internalOpenItems?.includes(key) && 'is-active']"
    >
      <slot name="accordion-item" :item="item" :index="key" :toggle="toggle">
        <summary
          class="accordion-header"
          tabindex="0"
          @keydown.space.prevent="() => toggle(key)"
          @click.prevent="() => toggle(key)"
        >
          <slot name="accordion-item-summary" :item="item" :index="key" :toggle="toggle">
            {{ item.title }}
          </slot>
        </summary>
        <div class="accordion-content">
          <slot name="accordion-item-content" :item="item" :index="key" :toggle="toggle">
            {{ item.content }}
          </slot>
        </div>
      </slot>
    </details>
  </div>
</template>