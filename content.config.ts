import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: 'page',
      source: 'posts/**',
      schema: z.object({
        title: z.string(),
        date: z.string(),
        description: z.string().optional(),
        externalUrl: z.string().optional(),
        layout: z.string().optional(),
      }),
    }),
    projects: defineCollection({
      type: 'page',
      source: 'projects/**',
      schema: z.object({
        title: z.string(),
        date: z.string(),
        description: z.string().optional(),
        category: z.string().optional(),
        event: z.string().optional(),
        organization: z.string().optional(),
        layout: z.string().optional(),
      }),
    }),
  },
})
