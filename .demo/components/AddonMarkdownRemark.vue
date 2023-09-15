<script setup lang="ts">
// eslint-disable vue/no-v-text-v-html-on-component
import light from '~/utils/shiki/theme/cssninja-light'
import dark from '~/utils/shiki/theme/cssninja-dark'
import { LanguageInput, BuiltinLanguage } from 'shikiji';

const props = withDefaults(
  defineProps<{
    /**
     * Markdown source
     */
    source: string
    /**
     * Prose size modifier
     */
    size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl'
    mode?: 'light' | 'dark'
    /**
     * Theme to use to highlight code blocks
     *
     * @see https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
     */
    themes?: { light: any; dark: any }
    /**
     * List of languages to highlight code blocks
     *
     * @see https://github.com/shikijs/shiki/blob/main/docs/languages.md#all-languages
     */
    langs?: Array<LanguageInput | BuiltinLanguage>
    /**
     * Show line numbers
     */
    lines?: boolean
    /**
     * Don't wrap content in default tailwind prose size
     */
    fullwidth?: boolean
  }>(),
  {
    lines: true,
    size: 'base',
    mode: undefined,
    themes: () => ({
      light,
      dark,
    }),
    langs: () => ['html', 'vue', 'bash', 'dockerfile', 'json', 'yaml', 'markdown'],
  },
)

const processor = shallowRef<any>()
const colorMode = useColorMode()
const loaded = ref(false)
const htmlContent = ref<string>('')
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(value) {
    if (value) {
      colorMode.preference = 'dark'
    } else {
      colorMode.preference = 'light'
    }
  },
})
const mode = computed(() => {
  if (props.mode !== undefined) return props.mode
  return isDark.value ? 'dark' : 'light'
})

const proseSize = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'prose-sm'
    case 'lg':
      return 'prose-lg'
    case 'xl':
      return 'prose-xl'
    case '2xl':
      return 'prose-2xl'
    case 'base':
    default:
      return 'prose-base'
  }
})

watchEffect(async () => {
  if (processor.value) return
  processor.value = await getMarkdownProcessors(props.themes, props.langs)
})

watchEffect(async () => {
  let source = props.source
  if (!source || !processor.value || htmlContent.value) return

  const vfile = await processor.value.process(source)
  htmlContent.value = vfile.toString()
  loaded.value = true
})
</script>

<template>
  <BasePlaceload v-if="!loaded" class="h-24 w-full rounded"></BasePlaceload>
  <BaseProse
    v-else
    :class="[
      proseSize,
      'markdown',
      props.lines ? 'with-line-number' : '',
      props.fullwidth ? 'max-w-none' : '',
    ]"
  >
    <div v-html="htmlContent"></div>
  </BaseProse>
</template>


<style>
html.dark .shiki,
html.dark .shiki span {
  background-color: var(--shiki-dark-bg) !important;
  color: var(--shiki-dark) !important;
}
</style>

<style scoped>
.markdown :deep(.shiki) {
  direction: ltr;
  @apply nui-focus;
}
.markdown.with-line-number :deep(.shiki code) {
  counter-reset: step;
  counter-increment: step 0;
}
.markdown.with-line-number :deep(.shiki code .line) {
  @apply inline w-full;
}
.markdown.with-line-number :deep(.shiki code .line::before) {
  content: counter(step);
  counter-increment: step;
  @apply w-4 me-6 inline text-right text-muted-400 dark:text-muted-500;
}
</style>
