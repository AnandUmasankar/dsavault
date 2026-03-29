import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const problems = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/problems' }),
  schema: z.object({
    title: z.string(),
    number: z.number(),
    difficulty: z.enum(['Easy', 'Medium', 'Hard']),
    tags: z.array(z.string()),
    companies: z.array(z.string()),
    frequency: z.string().optional(),
    youtube_url: z.string().url().optional(),
    related_problems: z.array(z.object({
      title: z.string(),
      slug: z.string(),
    })).optional().default([]),
    date_published: z.coerce.date(),
  }),
});

export const collections = { problems };
