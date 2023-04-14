import remarkShiki from '@stefanprobst/remark-shiki'
import { hash } from 'ohash'
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
  type Highlighter,
  type HighlighterOptions,
  type IThemeRegistration,
  type Lang,
} from 'shiki'
import { unified, type Processor } from 'unified'

export type ProcessorThemes = Record<
  string,
  {
    processor: Processor
    highlighter: Highlighter
  }
>

// this is used to cache the markdown processors
const processors: Map<string, ProcessorThemes> = new Map()
const processorsPromise: Map<string, Promise<ProcessorThemes> | null> =
  new Map()

export function getMarkdownProcessors(
  themes: Record<string, IThemeRegistration> = {},
  langs: Lang[] = [],
) {
  const key = hash({ themes, langs })
  const processorCache = processors.get(key)
  if (processorCache) {
    return Promise.resolve(processorCache)
  }

  const processorPromiseCache = processorsPromise.get(key)
  if (processorPromiseCache) {
    return processorPromiseCache
  }

  const processorPromise = new Promise<ProcessorThemes>(
    async (resolve, reject) => {
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
    },
  )

  processorsPromise.set(key, processorPromise)

  return processorPromise
}

async function createProcessor(options: HighlighterOptions) {
  if (process.client) {
    // this allow to load shiki from /public/shiki/ folder instead of cdn
    // we need to first copy the shiki folder from node_modules to public
    // this is done with prepare pnpm script (see .demo/package.json)
    setCDN('/shiki/')
  }

  const highlighter = await getHighlighter(options)
  const processor = unified()
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

  return {
    processor,
    highlighter,
  }
}
