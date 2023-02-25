<script lang="ts">
import remarkShiki from '@stefanprobst/remark-shiki'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {
  getHighlighter,
  setCDN,
  type HighlighterOptions,
  type Lang,
} from 'shiki-es'
import { unified, type Processor } from 'unified'

type ProcessorThemes = Record<string, Processor>

let _processors: ProcessorThemes
let _processorsPromise: Promise<ProcessorThemes> | null = null

async function createProcessor(options: HighlighterOptions) {
  if (process.client) {
    setCDN('/shiki/')
  }

  const highlighter = await getHighlighter(options)

  return unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkShiki, { highlighter })
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSanitize, {
      ...defaultSchema,
      attributes: {
        ...defaultSchema.attributes,
        pre: [
          ...(defaultSchema.attributes?.pre || []),
          ['className'],
          ['style'],
        ],
        code: [
          ...(defaultSchema.attributes?.code || []),
          ['className'],
          ['style'],
        ],
        i: [...(defaultSchema.attributes?.i || []), ['className']],
        span: [
          ...(defaultSchema.attributes?.span || []),
          ['className'],
          ['style'],
          ['dataHint'],
        ],
      },
    })
    .use(rehypeExternalLinks, {
      rel: ['noopener noreferrer'],
      target: '_blank',
    })
    .use(rehypeStringify)
}

export function getProcessors(
  themes: Record<string, string> = {},
  langs: Lang[] = [],
) {
  if (_processors) {
    return Promise.resolve(_processors)
  }

  if (_processorsPromise) {
    return _processorsPromise
  }

  _processorsPromise = new Promise(async (resolve, reject) => {
    try {
      const processors: ProcessorThemes = {}
      for (const theme in themes) {
        const processor = await createProcessor({
          langs,
          theme: themes[theme],
        })
        processors[theme] = processor
      }
      resolve(processors)
    } catch (error) {
      reject(error)
    }
  })

  return _processorsPromise
}

export default defineComponent({
  name: 'BaseMarkdown',
  props: {
    source: {
      type: String,
      default: '',
    },
    noLines: {
      type: Boolean,
    },
    noHighlight: {
      type: Boolean,
    },
  },
  setup(props) {
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

    watchEffect(async () => {
      if (processors.value) return
      processors.value = await getProcessors(
        {
          light: 'material-lighter',
          dark: 'material-ocean',
        },
        [
          'vue',
          'html',
          'vue-html',
          'json',
          'javascript',
          'typescript',
          'bash',
          'css',
          'scss',
          'diff',
          'astro',
        ],
      )
    })

    watchEffect(async () => {
      let source = props.source
      const _theme = theme.value
      if (!source || !processors.value || htmlTheme.value[_theme]) return

      const vfile = await processors.value[_theme].process(source)
      htmlTheme.value[_theme] = vfile.toString()
      loaded.value = true
    })

    return () => {
      if (!loaded.value)
        return h(resolveComponent('BasePlaceload'), {
          class: 'h-24 w-full rounded',
        })
      return h('div', {
        class:
          'markdown' +
          (props.noLines ? '' : ' with-line-number') +
          (props.noHighlight ? '' : ' with-highlight'),
        innerHTML: htmlTheme.value[theme.value],
      })
    }
  },
})
</script>

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

.markdown.with-highlight :deep(.shiki .highlighted-line) {
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
:global(.dark .markdown.with-highlight .shiki .highlighted-line) {
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
