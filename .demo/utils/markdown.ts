import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import rehypeShikiji, { type RehypeShikijiOptions } from 'rehype-shikiji'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

// this is used to cache the markdown processor
let processor: ReturnType<typeof createProcessor>

export function getMarkdownProcessors(
  themes: Record<string, any> = {},
  langs: RehypeShikijiOptions['langs'] = [],
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

async function createProcessor(options: RehypeShikijiOptions) {
  return (
    unified()
      // @ts-expect-error
      .use(remarkParse)
      // @ts-expect-error
      .use(remarkGfm)
      // @ts-expect-error
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
