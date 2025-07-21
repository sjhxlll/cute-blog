import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        published: z.date(),
        description: z.string().optional(),
        image: z.string().optional(),
        tags: z.array(z.string()).optional(),
        category: z.string().optional(),
        draft: z.boolean().optional(),
        // --- 在这里给 unlisted 登记户口！---
        unlisted: z.boolean().optional(),
    })
});

export const collections = {
    'posts': postCollection,
};
