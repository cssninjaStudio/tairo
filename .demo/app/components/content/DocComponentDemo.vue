<script setup lang="ts">
import { BaseMessage } from '#components'

const props = withDefaults(
  defineProps<{
    tag?: string
    title?: string
    demo?: string
    code?: boolean
    dark?: boolean
    condensed?: boolean
  }>(),
  {
    tag: undefined,
    title: undefined,
    demo: undefined,
    code: true,
    dark: true,
    condensed: false,
  },
)

const demoRE = /^#examples\/([\w-]+)\/([\w-]+).vue$/

if (import.meta.dev && props.demo && !demoRE.test(props.demo)) {
  console.error(
    `Invalid demo path: ${props.demo}. Expected format: #examples/<folder>/<file>.vue`,
  )
}

const slots = useSlots()

const info = computed(() => {
  const [, folder, file] = props.demo?.match(demoRE) ?? []
  return { folder, file }
})

const hasDemoInfo = computed(() =>
  Boolean(info.value.folder && info.value.file),
)
const demoPending = ref(hasDemoInfo.value)
const exampleComponent = shallowRef()

const hasDemoContent = computed(() =>
  Boolean(exampleComponent.value || 'demo' in slots),
)

const forceDark = ref(false)

await loadDemo()
watch(info, loadDemo)

async function loadDemo() {
  if (!info.value.folder || !info.value.file) {
    exampleComponent.value = null
    return
  }
  demoPending.value = true

  // dynamically import the example component and source
  // we can not use path alias, nor paths in variables
  // this is a limitation of vite
  try {
    // const compo = await import(`#examples/${info.value.folder}/${info.value.file}.vue`).then(
    //   m => m.default,
    // )
    // exampleComponent.value = markRaw(compo)
  }
  catch {
    if (import.meta.dev) {
      exampleComponent.value = h(
        BaseMessage,
        {
          variant: 'warning',
        },
        [
          `Unable to load demo component for`,
          h('strong', { class: 'text-semibold mx-1' }, `#examples/${info.value.folder}/${info.value.file}.vue`),
        ],
      )
    }
    else {
      exampleComponent.value = null
    }
  }
  finally {
    demoPending.value = false
  }
}
</script>

<template>
  <div class="group mb-10">
    <div
      v-if="props.title || props.tag || (hasDemoContent && props.dark)"
      class="mb-4 flex items-center"
    >
      <BaseHeading
        v-if="props.title"
        as="h3"
        size="xl"
        weight="medium"
        class="text-muted-800 dark:text-white"
      >
        {{ props.title }}
      </BaseHeading>

      <div
        v-if="props.tag"
        class="bg-muted-200 text-muted-600 dark:bg-muted-800 dark:text-muted-500 ms-3 hidden flex-none rounded-md px-2 py-1.5 text-xs font-semibold tracking-wide lg:block"
      >
        {{ props.tag }}
      </div>
    </div>

    <div v-if="'grid' in $slots" class="mb-4 grid gap-4 md:grid-cols-2">
      <slot name="grid" />
    </div>

    <div v-if="'default' in $slots || hasDemoContent" :class="[forceDark ? 'dark' : '']">
      <div
        class="border-muted-200 dark:border-muted-800 dark:bg-muted-900 relative w-full rounded-md border bg-white p-6 transition-all duration-300"
      >
        <div v-if="'default' in $slots" :class="[hasDemoContent && 'mb-10']">
          <div
            class="prose prose-primary prose-muted dark:prose-invert prose-th:p-4 prose-td:p-4 prose-table:bg-white dark:prose-table:bg-muted-800 prose-table:border prose-table:border-muted-200 prose-tr:border-muted-200 prose-thead:border-muted-200 dark:prose-tr:border-muted-700 dark:prose-thead:border-muted-700 dark:prose-table:border-muted-700 prose-sm prose-p:text-muted-500 dark:prose-p:text-muted-400 prose-a:decoration-from-font prose-a:underline-offset-1"
          >
            <slot />
          </div>
        </div>

        <div v-if="hasDemoContent" class="flex flex-col gap-4">
          <slot name="demo">
            <div>
              <component :is="exampleComponent" v-if="exampleComponent" />
            </div>
          </slot>
        </div>
      </div>
    </div>

    <details v-if="'source' in $slots && props.code" class="group mt-2">
      <summary
        class="focus-visible:nui-focus hover:bg-muted-100 dark:hover:bg-muted-700/70 text-muted-500 dark:text-muted-400 inline-flex cursor-pointer list-none items-center justify-center gap-2 rounded-md px-2 py-1.5 font-sans text-[0.8rem] transition-all duration-100"
      >
        <span class="inline group-open:hidden">Show code</span>
        <span class="hidden group-open:inline">Hide code</span>
        <Icon
          name="lucide:chevron-down"
          class="text-muted-400 size-4 transition-transform duration-200 group-open:rotate-180"
        />

        <ClientOnly>
          <div
            v-if="hasDemoContent && props.dark"
            class="ms-auto flex items-center gap-2"
          >
            <BaseCheckbox v-model="forceDark">
              dark preview
            </BaseCheckbox>
          </div>
        </ClientOnly>
      </summary>
      <slot name="source" />
    </details>
  </div>
</template>
