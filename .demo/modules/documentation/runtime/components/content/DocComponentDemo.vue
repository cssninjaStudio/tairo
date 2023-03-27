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

const { md } = useTailwindBreakpoints()
</script>

<template>
  <DocLayoutSection :title="props.title" :tag="props.tag">
    <template #action>
      <div class="ml-auto" v-if="hasDemoContent">
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

    <BaseCard class="mb-4 p-6">
      <div v-if="'default' in $slots" :class="[hasDemoContent && 'mb-10']">
        <BaseProse class="prose-sm">
          <ContentSlot :use="$slots.default"></ContentSlot>
        </BaseProse>
      </div>

      <div v-if="hasDemoContent" class="flex flex-col gap-4">
        <component v-if="exampleComponent" :is="exampleComponent" />

        <AddonMarkdownRemark
          v-if="exampleMarkdown && showCode"
          :source="exampleMarkdown"
          fullwidth
          :lines="md ? true : false"
          class="doc-markdown"
        />
      </div>
    </BaseCard>
  </DocLayoutSection>
</template>

<style scoped>
.doc-markdown:deep(.line) {
  display: inline;
}
</style>
