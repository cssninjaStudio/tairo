<script setup lang="ts">
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
    theme: () => ({
      light: 'material-theme-lighter',
      dark: 'material-theme-ocean',
    }),
    langs: () => ['html', 'vue'],
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
const mode = computed(() => (isDark.value ? 'dark' : 'light'))
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
    v-html="htmlContent[mode]"
  ></BaseProse>
</template>

<style scoped>
.markdown :deep(.shiki) {
  @apply nui-focus;
}
.markdown.with-line-number :deep(.shiki code) {
  counter-reset: step;
  counter-increment: step 0;
}
.markdown.with-line-number :deep(.shiki code .line) {
  @apply inline-flex w-full h-[1.3rem];
}
.markdown.with-line-number :deep(.shiki code .line::before) {
  content: counter(step);
  counter-increment: step;
  @apply w-4 mr-6 inline-block text-right text-muted-400 dark:text-muted-500;
}
.markdown.with-line-number :deep(.shiki code .line:hover) {
  @apply bg-muted-100 dark:bg-muted-900;
}
.markdown.with-line-number :deep(.shiki code .line:hover::before) {
  @apply text-muted-500 dark:text-muted-400;
}
</style>
