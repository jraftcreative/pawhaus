import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/data/products' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    price: z.number(),
    comparePrice: z.number().optional(),
    category: z.enum(['cats', 'dogs']),
    image: z.string(),
    imageAlt: z.string(),
    shortDescription: z.string(),
    description: z.string(),
    features: z.array(z.string()),
    tags: z.array(z.string()),
    inStock: z.boolean().default(true),
    featured: z.boolean().default(false),
    weight: z.string(),
    gallery: z.array(z.string()).optional(),
  }),
});

export const collections = { products };
