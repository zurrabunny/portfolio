import { defineCollection, z } from 'astro:content';

const devlog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),

    // 🔥 add this
    pinned: z.boolean().default(false)
  }),
});

export const collections = {
  devlog,
};
