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

export type ProcessorThemes = Record<string, Processor>

// this is used to cache the markdown processors
let _processors: ProcessorThemes
let _processorsPromise: Promise<ProcessorThemes> | null = null

export function getMarkdownProcessors(
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

async function createProcessor(options: HighlighterOptions) {
  if (process.client) {
    // this allow to load shiki from /public/shiki/ folder instead of cdn
    // we need to first copy the shiki folder from node_modules to public
    // this is done with demo:prepare pnpm script
    setCDN('/shiki/')
  }

  const highlighter = await getHighlighter(options)

  return (
    unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkShiki, { highlighter })
      .use(remarkRehype, { allowDangerousHtml: true })
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
