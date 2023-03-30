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

const exampleComponent = shallowRef()
const exampleSource = shallowRef()

const exampleMarkdown = computed(() => {
  return '```vue\n' + exampleSource.value + '\n```'
})

watchEffect(async () => {
  if (!info.value.folder || !info.value.file) return

  // dynamically import the example component and source
  // we can not use path alias, nor paths in variables
  // this is a limitation of vite
  const [compo, source] = await Promise.all([
    import(
      `../../../examples/${info.value.folder}/${info.value.file}.vue`
    ).then((m) => m.default),
    import(
      `../../../examples/${info.value.folder}/${info.value.file}.vue?raw`
    ).then((m) => m.default),
  ])
  exampleComponent.value = markRaw(compo)
  exampleSource.value = source
})

const showCode = ref(false)
const hasDemoContent = computed(() =>
  Boolean(exampleComponent.value && exampleMarkdown.value),
)

const forceDark = ref(false)
const { md } = useTailwindBreakpoints()
</script>

<template>
  <DocLayoutSection class="group" :title="props.title" :tag="props.tag">
    <template #action>
      <div class="ml-auto flex gap-2 items-center" v-if="hasDemoContent">
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
          class="flex items-end gap-1 p-1 rounded-lg bg-muted-200 dark:bg-muted-800/50"
        >
          <BaseButtonAction
            v-if="exampleComponent"
            shape="rounded"
            class="h-[2.35rem] pr-3 focus:z-10"
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
            class="h-[2.35rem] pr-3 focus:z-10"
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
    </template>

    <div :class="forceDark ? 'dark' : ''">
      <BaseCard class="mb-4 p-6">
        <div v-if="'default' in $slots" :class="[hasDemoContent && 'mb-10']">
          <BaseProse
            class="prose-sm prose-p:text-muted-500 dark:prose-p:text-muted-400"
          >
            <ContentSlot :use="$slots.default"></ContentSlot>
          </BaseProse>
        </div>

        <div v-if="hasDemoContent" class="flex flex-col gap-4">
          <div>
            <component v-if="exampleComponent" :is="exampleComponent" />
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
      </BaseCard>
    </div>
  </DocLayoutSection>
</template>

<style scoped>
.doc-markdown:deep(.line) {
  display: inline;
}
</style>
