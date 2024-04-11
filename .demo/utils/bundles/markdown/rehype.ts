import type { RehypeShikiOptions } from '@shikijs/rehype'

// this is used to cache the markdown processor
let processor: ReturnType<typeof createProcessor>

export function getMarkdownProcessors(
  themes: Record<string, any> = {},
  langs: RehypeShikiOptions['langs'] = [],
) {
  if (processor) {
    return processor
  }

  processor = createProcessor({
    langs,
    themes,
  })

  return processor
}

async function createProcessor(options: RehypeShikiOptions) {
  const [
    rehypeExternalLinks,
    rehypeRaw,
    [rehypeSanitize, defaultSchema],
    rehypeStringify,
    rehypeShikiji,
    remarkGfm,
    remarkParse,
    remarkRehype,
    unified,
  ] = await Promise.all([
    import('rehype-external-links').then(m => m.default),
    import('rehype-raw').then(m => m.default),
    import('rehype-sanitize').then(m => [m.default, m.defaultSchema] as const),
    import('rehype-stringify').then(m => m.default),
    import('@shikijs/rehype').then(m => m.default),
    import('remark-gfm').then(m => m.default),
    import('remark-parse').then(m => m.default),
    import('remark-rehype').then(m => m.default),
    import('unified').then(m => m.unified),

  ])

  return (
    unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeShikiji, options)
      .use(rehypeRaw)
      // this but sanitize html but allow to add
      // classes and styles to markdown elements
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
      // this add noopener, noreferrer and _blank to external links
      .use(rehypeExternalLinks, {
        rel: ['noopener noreferrer'],
        target: '_blank',
      })
      .use(rehypeStringify)
  )
}
