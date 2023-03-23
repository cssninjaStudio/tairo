<script setup lang="ts">
import type { Lang } from 'shiki'
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
    theme?: { light: string; dark: string }
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
const htmlTheme = ref<Record<string, string>>({
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
const theme = computed(() => (isDark.value ? 'dark' : 'light'))
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
  const _theme = theme.value
  if (!source || !processors.value || htmlTheme.value[_theme]) return

  const vfile = await processors.value[_theme].process(source)
  htmlTheme.value[_theme] = vfile.toString()
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
    v-html="htmlTheme[theme]"
  ></BaseProse>
</template>

<style scoped>
.markdown :deep(a[target='_blank']) {
  align-items: center;
  display: inline-flex;
  gap: 0.25rem;
}

.markdown :deep(a[target='_blank']::after) {
  content: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cpath fill="none" stroke="%236944EC" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3"%2F%3E%3C%2Fsvg%3E');
  width: 0.8rem;
  margin-top: 0.1rem;
  opacity: 0.8;
  transition: opacity 0.1s ease-out, width 0.1s ease-out;
}

.markdown :deep(a[target='_blank']:hover::after),
.markdown :deep(a[target='_blank']:focus::after) {
  width: 0.9rem;
  opacity: 1;
}

.markdown :deep(.shiki .highlighted-line) {
  background-color: var(--color-primary-100);
  padding: 4px 4px 4px 6px;
  margin-left: -6px;
}
/* .markdown :deep(.shiki) {
  background: var(--color-muted-100) !important;
}
:global(.dark .markdown .shiki) {
  background: var(--color-muted-900) !important;
} */
:global(.dark .markdown .shiki .highlighted-line) {
  background-color: #0d0e14;
}

.markdown.with-line-number :deep(.shiki code) {
  counter-reset: step;
  counter-increment: step 0;
}

.markdown.with-line-number :deep(.shiki code .line::before) {
  content: counter(step);
  counter-increment: step;
  width: 1rem;
  margin-right: 1.5rem;
  display: inline-block;
  text-align: right;
  color: #898d98;
}
</style>
