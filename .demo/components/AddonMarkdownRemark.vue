<script setup lang="ts">
// eslint-disable vue/no-v-text-v-html-on-component
import type { IThemeRegistration, Lang } from 'shiki'
import type { ProcessorThemes } from '~/utils/markdown'

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
    theme?: { light: IThemeRegistration; dark: IThemeRegistration }
    /**
     * List of languages to highlight code blocks
     *
     * @see https://github.com/shikijs/shiki/blob/main/docs/languages.md#all-languages
     */
    langs?: Lang[]
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
    theme: () => ({
      light: 'material-theme-lighter',
      dark: 'material-theme-ocean',
    }),
    langs: () => ['html', 'vue', 'bash'],
  },
)

const processors = shallowRef<ProcessorThemes>()
const colorMode = useColorMode()
const loaded = ref(false)
const htmlContent = ref<Record<string, string>>({
  light: '',
  dark: '',
})
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
  if (processors.value) return
  processors.value = await getMarkdownProcessors(props.theme, props.langs)
})

watchEffect(async () => {
  let source = props.source
  const _mode = mode.value
  if (!source || !processors.value || htmlContent.value[_mode]) return

  const vfile = await processors.value[_mode].processor.process(source)
  htmlContent.value[_mode] = vfile.toString()
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
    <div v-html="htmlContent[mode]"></div>
  </BaseProse>
</template>

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
