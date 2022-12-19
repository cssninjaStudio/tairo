<script lang="ts">
import type { Processor } from 'unified'

async function loadModules() {
  const [
    remarkShiki,
    rehypeExternalLinks,
    rehypeRaw,
    [rehypeSanitize, defaultSchema],
    rehypeStringify,
    remarkGfm,
    remarkParse,
    remarkRehype,
    getHighlighter,
    unified,
  ] = await Promise.all([
    import('@stefanprobst/remark-shiki').then((m) => m.default),
    import('rehype-external-links').then((m) => m.default),
    import('rehype-raw').then((m) => m.default),
    import('rehype-sanitize').then(
      (m) => [m.default, m.defaultSchema] as const,
    ),
    import('rehype-stringify').then((m) => m.default),
    import('remark-gfm').then((m) => m.default),
    import('remark-parse').then((m) => m.default),
    import('remark-rehype').then((m) => m.default),
    import('shiki-es').then((m) => m.getHighlighter),
    import('unified').then((m) => m.unified),
  ])

  return {
    remarkShiki,
    rehypeExternalLinks,
    rehypeRaw,
    rehypeSanitize,
    defaultSchema,
    rehypeStringify,
    remarkGfm,
    remarkParse,
    remarkRehype,
    getHighlighter,
    unified,
  }
}

export default defineComponent({
  name: 'BaseMarkdown',
  props: {
    source: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const processor = ref<Processor>()
    const colorMode = useColorMode()
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
      const theme = isDark.value ? 'material-ocean' : 'material-lighter'
      const {
        remarkShiki,
        rehypeExternalLinks,
        rehypeRaw,
        rehypeSanitize,
        defaultSchema,
        rehypeStringify,
        remarkGfm,
        remarkParse,
        remarkRehype,
        getHighlighter,
        unified,
      } = await loadModules()
      const highlighter = await getHighlighter({
        theme,
        langs: ['vue', 'html', 'js', 'ts', 'json', 'bash', 'css'],
      })

      processor.value = unified()
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
            ],
          },
        })
        .use(rehypeExternalLinks, { rel: ['nofollow'], target: '_blank' })
        .use(rehypeStringify)
    })

    const html = computed(() => {
      if (!processor.value) return ''
      if (!props.source) return ''

      return processor.value.processSync(props.source).toString()
    })

    return () =>
      h('div', {
        class: 'markdown',
        innerHTML: html.value,
      })
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

.markdown :deep(.shiki .highlighted-line) {
  background-color: #3d4148;
  padding: 2px 2px 4px 0;
  border-radius: 0.1rem;
}

.markdown :deep(.shiki code) {
  counter-reset: step;
  counter-increment: step 0;
}

.markdown :deep(.shiki code .line::before) {
  content: counter(step);
  counter-increment: step;
  width: 1rem;
  margin-right: 1.5rem;
  display: inline-block;
  text-align: right;
  color: #898d98;
}
</style>
