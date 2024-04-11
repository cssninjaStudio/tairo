<script setup lang="ts">
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

const info = computed(() => {
  const [, folder, file] = props.demo?.match(demoRE) ?? []
  return { folder, file }
})

const hasDemoInfo = computed(() =>
  Boolean(info.value.folder && info.value.file),
)
const demoPending = ref(hasDemoInfo.value)
const exampleComponent = shallowRef()
const exampleSource = shallowRef()

const exampleMarkdown = computed(() => {
  if (!exampleSource.value) {
    return ''
  }
  return '```vue\n' + exampleSource.value + '\n```'
})

const hasDemoContent = computed(() =>
  Boolean(exampleComponent.value && exampleMarkdown.value),
)

const forceDark = ref(false)
const { md } = useTailwindBreakpoints()

await loadDemo()
watch(info, loadDemo)

async function loadDemo() {
  if (!info.value.folder || !info.value.file) {
    exampleComponent.value = null
    exampleSource.value = ''
    return
  }
  demoPending.value = true

  // dynamically import the example component and source
  // we can not use path alias, nor paths in variables
  // this is a limitation of vite
  try {
    const [compo, source] = await Promise.all([
      import(`../../examples/${info.value.folder}/${info.value.file}.vue`).then(
        m => m.default,
      ),
      import(
        `../../examples/${info.value.folder}/${info.value.file}.vue?raw`
      ).then(m => m.default),
    ])
    exampleComponent.value = markRaw(compo)
    exampleSource.value = source
  }
  catch {
    exampleComponent.value = null
    exampleSource.value = ''
  }
  finally {
    demoPending.value = false
  }
}
</script>

<template>
  <div class="border-muted-200 dark:border-muted-800 group mb-10 border-b">
    <div
      v-if="props.title || props.tag || (hasDemoContent && props.dark)"
      class="mb-4 flex items-center"
    >
      <BaseHeading
        v-if="props.title"
        as="h3"
        size="xl"
        anchor
        weight="medium"
        class="text-muted-800 dark:text-white"
      >
        <TairoTocAnchor :label="props.title">
          <template #prefix>
            <Icon name="lucide:hash" class="size-4" />
          </template>
        </TairoTocAnchor>
      </BaseHeading>

      <div
        v-if="props.tag"
        class="bg-muted-200 text-muted-600 dark:bg-muted-800 dark:text-muted-500 ms-3 hidden flex-none rounded-md px-2 py-1.5 text-xs font-semibold tracking-wide lg:block"
      >
        {{ props.tag }}
      </div>

      <div
        v-if="hasDemoContent && props.dark"
        class="ms-auto flex items-center gap-2"
      >
        <BaseCheckbox
          v-model="forceDark"
          :classes="{
            label: '!text-xs mt-1',
            wrapper:
              'dark:hidden scale-90 gap-2 items-center uppercase opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 flex-row-reverse',
          }"
        >
          dark preview
        </BaseCheckbox>
      </div>
    </div>

    <div v-if="'grid' in $slots" class="mb-4 grid gap-4 md:grid-cols-3">
      <ContentSlot :use="$slots.grid" />
    </div>

    <div
      :class="[
        condensed ? 'max-w-screen-sm pb-6' : 'pb-6',
        forceDark ? 'dark' : '',
      ]"
    >
      <div
        class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative mb-4 w-full rounded-md border bg-white p-6 transition-all duration-300"
      >
        <div v-if="'default' in $slots" :class="[hasDemoContent && 'mb-10']">
          <div
            class="prose prose-primary prose-muted dark:prose-invert prose-th:p-4 prose-td:p-4 prose-table:bg-white dark:prose-table:bg-muted-800 prose-table:border prose-table:border-muted-200 prose-tr:border-muted-200 prose-thead:border-muted-200 dark:prose-tr:border-muted-700 dark:prose-thead:border-muted-700 dark:prose-table:border-muted-700 prose-sm prose-p:text-muted-500 dark:prose-p:text-muted-400 prose-a:decoration-from-font prose-a:underline-offset-1"
          >
            <ContentSlot :use="$slots.default" :unwrap="false" />
          </div>
        </div>

        <div v-if="hasDemoContent" class="flex flex-col gap-4">
          <div>
            <component :is="exampleComponent" v-if="exampleComponent" />
          </div>

          <details v-if="exampleMarkdown && props.code" class="group mt-6">
            <summary
              class="nui-focus hover:bg-muted-100 dark:hover:bg-muted-700/70 text-muted-500 dark:text-muted-400 inline-flex cursor-pointer list-none items-center justify-center gap-2 rounded-lg px-2 py-1.5 font-sans text-[0.8rem] transition-all duration-100"
            >
              <span class="inline group-open:hidden">Show code</span>
              <span class="hidden group-open:inline">Hide code</span>
              <Icon
                name="lucide:chevron-down"
                class="text-muted-400 size-4 transition-transform duration-200 group-open:rotate-180"
              />
            </summary>
            <CodeGroup>
              <code filename="<app>/components/MyComponent.vue" language="vue">
                <AddonMarkdownRemark
                  :source="exampleMarkdown"
                  fullwidth
                  :lines="md ? true : false"
                  class="doc-markdown"
                  :mode="forceDark ? 'dark' : undefined"
                />
              </code>
            </CodeGroup>
          </details>
        </div>
      </div>
    </div>
  </div>
</template>
