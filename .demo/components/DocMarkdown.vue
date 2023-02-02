<script lang="ts">
import remarkShiki from '@stefanprobst/remark-shiki'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { getHighlighter, setCDN } from 'shiki-es'
import { unified, type Processor } from 'unified'

let processor: Processor
let processorPromise: Promise<Processor> | null = null

async function createProcessor() {
  if (process.client) {
    setCDN('https://unpkg.com/shiki@0.12.1/')
  }

  const highlighter = await getHighlighter({
    theme: 'material-lighter',
    langs: [
      'vue',
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
  })

  const _processor = unified()
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

  return _processor
}

export function getProcessor() {
  if (processor) {
    return Promise.resolve(processor)
  }

  if (processorPromise) {
    return processorPromise
  }

  processorPromise = createProcessor()

  return processorPromise
}

// import type { Processor } from 'unified'

// async function loadModules() {
//   if (process.client) {
//     setCDN('https://unpkg.com/shiki@0.12.1/')
//   }

//   const [
//     remarkShiki,
//     rehypeExternalLinks,
//     rehypeRaw,
//     [rehypeSanitize, defaultSchema],
//     rehypeStringify,
//     remarkGfm,
//     remarkParse,
//     remarkRehype,
//     getHighlighter,
//     unified,
//   ] = await Promise.all([
//     import('@stefanprobst/remark-shiki').then((m) => m.default),
//     import('rehype-external-links').then((m) => m.default),
//     import('rehype-raw').then((m) => m.default),
//     import('rehype-sanitize').then(
//       (m) => [m.default, m.defaultSchema] as const,
//     ),
//     import('rehype-stringify').then((m) => m.default),
//     import('remark-gfm').then((m) => m.default),
//     import('remark-parse').then((m) => m.default),
//     import('remark-rehype').then((m) => m.default),
//     import('shiki-es').then((m) => m.getHighlighter),
//     import('unified').then((m) => m.unified),
//   ])

//   return {
//     remarkShiki,
//     rehypeExternalLinks,
//     rehypeRaw,
//     rehypeSanitize,
//     defaultSchema,
//     rehypeStringify,
//     remarkGfm,
//     remarkParse,
//     remarkRehype,
//     getHighlighter,
//     unified,
//   }
// }

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
    const colorMode = useColorMode()
    const loaded = ref(false)
    const html = ref('')
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

    watchEffect(async () => {
      let source = props.source
      if (!source) return
      const processor = await getProcessor()
      if (!processor) return

      const vfile = await processor.process(source)
      html.value = vfile.toString()
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
        innerHTML: html.value,
      })
    }

    // const processor = ref<Processor>()
    // const colorMode = useColorMode()
    // const loaded = ref(false)
    // const html = ref('')
    // const isDark = computed({
    //   get() {
    //     return colorMode.value === 'dark'
    //   },
    //   set(value) {
    //     if (value) {
    //       colorMode.preference = 'dark'
    //     } else {
    //       colorMode.preference = 'light'
    //     }
    //   },
    // })

    // watchEffect(async () => {
    //   const theme = isDark.value ? 'material-ocean' : 'material-lighter'
    //   const {
    //     remarkShiki,
    //     rehypeExternalLinks,
    //     rehypeRaw,
    //     rehypeSanitize,
    //     defaultSchema,
    //     rehypeStringify,
    //     remarkGfm,
    //     remarkParse,
    //     remarkRehype,
    //     getHighlighter,
    //     unified,
    //   } = await loadModules()
    //   const highlighter = await getHighlighter({
    //     theme,
    //     langs: [
    //       'vue',
    //       'html',
    //       'vue-html',
    //       'javascript',
    //       'typescript',
    //       'json',
    //       'jsonc',
    //       'bash',
    //       'css',
    //     ],
    //   })

    //   processor.value = unified()
    //     .use(remarkParse)
    //     .use(remarkGfm)
    //     .use(remarkShiki, { highlighter })
    //     .use(remarkRehype, { allowDangerousHtml: true })
    //     .use(rehypeRaw)
    //     .use(rehypeSanitize, {
    //       ...defaultSchema,
    //       attributes: {
    //         ...defaultSchema.attributes,
    //         pre: [
    //           ...(defaultSchema.attributes?.pre || []),
    //           ['className'],
    //           ['style'],
    //         ],
    //         code: [
    //           ...(defaultSchema.attributes?.code || []),
    //           ['className'],
    //           ['style'],
    //         ],
    //         i: [...(defaultSchema.attributes?.i || []), ['className']],
    //         span: [
    //           ...(defaultSchema.attributes?.span || []),
    //           ['className'],
    //           ['style'],
    //         ],
    //       },
    //     })
    //     .use(rehypeExternalLinks, { rel: ['nofollow'], target: '_blank' })
    //     .use(rehypeStringify)
    // })

    // watchEffect(async () => {
    //   const _processor = unref(processor)
    //   if (!props.source) return
    //   if (!_processor) return

    //   html.value = (await _processor.process(props.source)).toString()
    //   loaded.value = true
    // })
    // return () => {
    //   if (!loaded.value)
    //     return h(resolveComponent('BasePlaceload'), {
    //       class: 'h-24 w-full rounded',
    //     })
    //   return h('div', {
    //     class:
    //       'markdown' +
    //       (props.noLines ? '' : ' with-line-number') +
    //       (props.noHighlight ? '' : ' with-highlight'),
    //     innerHTML: html.value,
    //   })
    // }
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
.markdown :deep(.shiki) {
  background: var(--color-muted-100) !important;
}
:global(.dark .markdown .shiki) {
  background: var(--color-muted-900) !important;
}
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
