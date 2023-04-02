<script setup lang="ts">
const props = defineProps<{
  tag?: string
  title?: string
  demo?: string
}>()

const demoRE = /^#examples\/([\w-]+)\/([\w-]+).vue$/

if (process.dev) {
  if (props.demo && !demoRE.test(props.demo)) {
    console.error(
      `Invalid demo path: ${props.demo}. Expected format: #examples/<folder>/<file>.vue`,
    )
  }
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
  return '```vue\n' + exampleSource.value + '\n```'
})

await useAsyncData(
  `demo-${props.demo}`,
  async () => {
    if (!info.value.folder || !info.value.file) return
    demoPending.value = true

    // dynamically import the example component and source
    // we can not use path alias, nor paths in variables
    // this is a limitation of vite
    try {
      const [compo, source] = await Promise.all([
        import(
          `../../examples/${info.value.folder}/${info.value.file}.vue`
        ).then((m) => m.default),
        import(
          `../../examples/${info.value.folder}/${info.value.file}.vue?raw`
        ).then((m) => m.default),
      ])
      exampleComponent.value = markRaw(compo)
      exampleSource.value = source
    } finally {
      demoPending.value = false
    }
  },
  {
    watch: [info],
    // server: false,
  },
)

const showCode = ref(false)
const hasDemoContent = computed(() =>
  Boolean(exampleComponent.value && exampleMarkdown.value),
)

const forceDark = ref(false)
const { md } = useTailwindBreakpoints()
</script>

<template>
  <div class="border-muted-200 dark:border-muted-800 mb-10 border-b py-6">
    <div class="mb-4 flex items-center">
      <BaseHeading
        as="h2"
        size="xl"
        anchor
        weight="medium"
        class="text-muted-800 dark:text-white"
        v-if="props.title"
      >
        <TairoTocAnchor :label="props.title" />
      </BaseHeading>

      <div
        v-if="props.tag"
        class="bg-muted-200 text-muted-600 dark:bg-muted-800 dark:text-muted-500 ms-3 hidden flex-none rounded-md px-2 py-1.5 text-xs font-semibold tracking-wide lg:block"
      >
        {{ props.tag }}
      </div>

      <div v-if="hasDemoContent" class="ms-auto flex items-center gap-2">
        <BaseCheckbox
          v-model="forceDark"
          condensed
          :classes="{
            label: '!text-xs mt-1',
            wrapper:
              'dark:hidden scale-90 gap-2 items-center uppercase opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 flex-row-reverse',
          }"
        >
          dark preview
        </BaseCheckbox>

        <div
          class="bg-muted-200 dark:bg-muted-800/50 flex items-end gap-1 rounded-lg p-1"
        >
          <BaseButtonAction
            v-if="exampleComponent"
            shape="rounded"
            class="h-[2.35rem] pe-3 focus:z-10"
            :class="
              showCode
                ? 'dark:!bg-muted-800'
                : 'dark:!bg-transparent dark:border-transparent'
            "
            :color="showCode ? 'muted' : 'default'"
            @click="showCode = false"
          >
            <Icon name="ph:circles-four" class="h-4 w-4" />
            <span>Demo</span>
          </BaseButtonAction>
          <BaseButtonAction
            v-if="exampleMarkdown"
            shape="rounded"
            class="h-[2.35rem] pe-3 focus:z-10"
            :class="
              !showCode
                ? 'dark:!bg-muted-800'
                : 'dark:!bg-transparent dark:border-transparent'
            "
            :color="!showCode ? 'muted' : 'default'"
            @click="showCode = true"
          >
            <Icon name="ph:terminal" class="h-4 w-4" />
            <span>Code</span>
          </BaseButtonAction>
        </div>
      </div>
    </div>

    <div :class="forceDark ? 'dark' : ''">
      <div
        class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative mb-4 w-full rounded-md border bg-white p-6 transition-all duration-300"
      >
        <div v-if="'default' in $slots" :class="[hasDemoContent && 'mb-10']">
          <div
            class="prose prose-primary prose-muted dark:prose-invert prose-th:p-4 prose-td:p-4 prose-table:bg-white dark:prose-table:bg-muted-800 prose-table:border prose-table:border-muted-200 dark:prose-table:border-muted-700 prose-sm prose-p:text-muted-500 dark:prose-p:text-muted-400"
          >
            <ContentSlot :use="$slots.default"></ContentSlot>
          </div>
        </div>

        <div v-if="hasDemoContent" class="flex flex-col gap-4">
          <div>
            <component :is="exampleComponent" v-if="exampleComponent" />
          </div>

          <AddonMarkdownRemark
            v-if="exampleMarkdown && showCode"
            :source="exampleMarkdown"
            fullwidth
            :lines="md ? true : false"
            class="doc-markdown"
            :theme="{
              light: 'cssninja-light-theme',
              dark: 'cssninja-dark-theme',
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.doc-markdown:deep(.line) {
  display: inline;
}
</style>
