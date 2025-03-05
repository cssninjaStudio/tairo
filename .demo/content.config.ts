import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const schema = z.object({
  components: z.string().array(),
  toc: z.boolean(),
  icon: z.object({
    src: z.string(),
    srcDark: z.string().optional(),
  }),
})

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      source: 'documentation/**',
      type: 'page',
      schema,
    }),
  },
})
