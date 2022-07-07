<script setup lang="ts">
export type AccordionShapes = 'straight' | 'rounded' | 'curved'
export type AccordionAction = 'dot' | 'chevron' | 'plus'

export interface AccordionItem {
  title: string
  content: string
}
export interface AccordionProps {
  items: AccordionItem[]
  openItems?: number[]
  exclusive?: boolean
  shape?: AccordionShapes
  action?: AccordionAction
}

const props = withDefaults(defineProps<AccordionProps>(), {
  items: () => [],
  openItems: () => [],
  shape: 'rounded',
  action: 'dot',
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
  <FocusLoop
    class="block overflow-hidden border border-muted-200 bg-white"
    :class="[
      exclusive && 'is-exclusive',
      props.shape === 'rounded' && 'rounded-md',
      props.shape === 'curved' && 'rounded-xl',
    ]"
  >
    <details
      v-for="(item, key) in items"
      :key="key"
      class="cursor-pointer"
      :open="internalOpenItems?.includes(key) ?? undefined"
      :class="[
        internalOpenItems?.includes(key) && 'is-active',
        key > 0 && 'border-t border-muted-200',
      ]"
    >
      <slot name="accordion-item" :item="item" :index="key" :toggle="toggle">
        <summary
          class="list-none"
          tabindex="0"
          @click.prevent="() => toggle(key)"
        >
          <slot
            name="accordion-item-summary"
            :item="item"
            :index="key"
            :toggle="toggle"
          >
            <div
              class="flex items-center justify-between"
              :class="[
                props.action === 'dot' && 'p-5',
                props.action === 'chevron' && 'px-5 py-3',
                props.action === 'plus' && 'px-5 py-3',
              ]"
            >
              <BaseHeading
                as="h4"
                size="sm"
                weight="semibold"
                lead="none"
                class="text-muted-800 dark:text-white"
              >
                {{ item.title }}
              </BaseHeading>

              <div
                v-if="props.action === 'dot'"
                class="h-3 w-3 rounded-full transition-colors duration-300"
                :class="
                  internalOpenItems?.includes(key)
                    ? 'bg-primary-500'
                    : 'bg-muted-200'
                "
              ></div>
              <div
                v-else-if="props.action === 'chevron'"
                class="flex h-8 w-8 items-center justify-center rounded-full border border-muted-200 bg-white transition-all duration-300"
                :class="
                  internalOpenItems?.includes(key)
                    ? 'text-primary-500 rotate-180'
                    : 'text-muted-400'
                "
              >
                <IconChevronDown class="h-4 w-4" />
              </div>
              <div
                v-else-if="props.action === 'plus'"
                class="flex h-8 w-8 items-center justify-center rounded-full border border-muted-200 bg-white transition-all duration-300"
                :class="
                  internalOpenItems?.includes(key)
                    ? 'text-primary-500 rotate-45'
                    : 'text-muted-400'
                "
              >
                <IconPlus class="h-4 w-4" />
              </div>
            </div>
          </slot>
        </summary>
        <div class="px-5 pb-5">
          <slot
            name="accordion-item-content"
            :item="item"
            :index="key"
            :toggle="toggle"
          >
            <BaseParagraph
              size="md"
              lead="tight"
              class="text-muted-500 dark:text-muted-400"
            >
              {{ item.content }}
            </BaseParagraph>
          </slot>
        </div>
      </slot>
    </details>
  </FocusLoop>
</template>
