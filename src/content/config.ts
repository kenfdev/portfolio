import { defineCollection, z } from 'astro:content';

const about = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['en', 'ja']),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['en', 'ja']),
    techStack: z.array(z.string()),
    role: z.string().optional(),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    order: z.number(),
  }),
});

const skills = defineCollection({
  type: 'data',
  schema: z.object({
    category: z.string(),
    lang: z.enum(['en', 'ja']),
    items: z.array(
      z.object({
        name: z.string(),
        years: z.number(),
      })
    ),
  }),
});

export const collections = {
  about,
  projects,
  skills,
};
