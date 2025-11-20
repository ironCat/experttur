import { defineCollection, z } from "astro:content";

const articles = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        slug: z.string().optional(),
        country: z.string(),
        direction: z.string(),
        thumbnail: z.string().optional(),
        excerpt: z.string().optional(),
        tags: z.array(z.string()).default([]),
        publishedAt: z.string().optional(),
        featured: z.boolean().default(false),
        priority: z.number().optional(),
    }),
});

const countries = defineCollection({
    type: "data",
    schema: z.object({
        id: z.string(),
        name: z.string(),
        slug: z.string(),
        heroImage: z.string().optional(),
        description: z.string().optional(),
        region: z.string().optional(),
        direction: z.string().optional(),
    }),
});

const directions = defineCollection({
    type: "data",
    schema: z.object({
        id: z.string(),
        label: z.string(),
        description: z.string().optional(),
        priority: z.number().optional(),
    }),
});

const partners = defineCollection({
    type: "data",
    schema: z.object({
        id: z.string(),
        position: z.enum([
            "home_hero",
            "home_inline",
            "home_sidebar_right",
            "directions_sidebar",
            "countries_sidebar",
            "article_inline",
            "article_sidebar",
            "footer_banner",
        ]),
        title: z.string().optional(),
        theme: z.string().optional(),
        ctaLabel: z.string().optional(),
        ctaUrl: z.string().optional(),
        // raw code snippet for AdSense or other partner scripts
        snippet: z.string().optional(),
    }),
});

export const collections = {
    articles,
    countries,
    directions,
    partners,
};
