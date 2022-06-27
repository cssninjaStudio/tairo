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
  <div
    class="block bg-white border border-slate-200 overflow-hidden"
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
        key > 0 && 'border-t border-slate-200',
      ]"
    >
      <slot name="accordion-item" :item="item" :index="key" :toggle="toggle">
        <summary
          class="list-none"
          tabindex="0"
          @keydown.space.prevent="() => toggle(key)"
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
                tag="h4"
                size="sm"
                weight="semibold"
                lead="none"
                class="text-slate-800 dark:text-white"
              >
                {{ item.title }}
              </BaseHeading>

              <div
                v-if="props.action === 'dot'"
                class="h-3 w-3 rounded-full transition-colors duration-300"
                :class="
                  internalOpenItems?.includes(key)
                    ? 'bg-primary-500'
                    : 'bg-slate-200'
                "
              ></div>
              <div
                v-else-if="props.action === 'chevron'"
                class="flex items-center justify-center h-8 w-8 rounded-full bg-white border border-slate-200 transition-all duration-300"
                :class="
                  internalOpenItems?.includes(key)
                    ? 'text-primary-500 rotate-180'
                    : 'text-slate-400'
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="w-4 h-4"
                  width="32"
                  height="32"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m6 9l6 6l6-6"
                  ></path>
                </svg>
              </div>
              <div
                v-else-if="props.action === 'plus'"
                class="flex items-center justify-center h-8 w-8 rounded-full bg-white border border-slate-200 transition-all duration-300"
                :class="
                  internalOpenItems?.includes(key)
                    ? 'text-primary-500 rotate-45'
                    : 'text-slate-400'
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="w-4 h-4"
                  width="32"
                  height="32"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v14m-7-7h14"
                  ></path>
                </svg>
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
              class="text-slate-500 dark:text-slate-400"
            >
              {{ item.content }}
            </BaseParagraph>
          </slot>
        </div>
      </slot>
    </details>
  </div>
</template>
