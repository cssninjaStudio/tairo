<script setup lang="ts">
// eslint-disable vue/no-v-text-v-html-on-component
import { getMarkdownProcessors } from '~/utils/bundles/markdown/rehype'
import light from '~/utils/shiki/theme/cssninja-light'
import dark from '~/utils/shiki/theme/cssninja-dark'
import type { LanguageInput, BuiltinLanguage } from 'shiki'

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
    themes?: { light: any, dark: any }
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
    langs: () => [
      'html',
      'vue',
      'bash',
      'dockerfile',
      'json',
      'yaml',
      'markdown',
      'diff',
    ],
  },
)

const processor = shallowRef<any>()
const loaded = ref(false)
const htmlContent = ref<string>('')

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

onNuxtReady(async () => {
  if (processor.value) return
  processor.value = await getMarkdownProcessors(props.themes, props.langs)
})

watch([() => props.source, processor], async ([source, _processor]) => {
  if (!source || !_processor) return

  const vfile = await _processor.process(source)
  htmlContent.value = vfile.toString()
  loaded.value = true
}, { immediate: true })
</script>

<template>
  <BasePlaceload v-if="!loaded" class="h-24 w-full rounded" />
  <BaseProse
    v-else
    :class="[
      proseSize,
      'markdown',
      props.lines ? 'with-line-number' : '',
      props.fullwidth ? 'max-w-none' : '',
    ]"
  >
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="htmlContent" />
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
</style>
