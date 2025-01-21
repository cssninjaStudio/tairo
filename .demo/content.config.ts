import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const schema = z.object({
  components: z.string().array(),
  toc: z.boolean(),
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
