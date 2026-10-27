import { defineCollection, type ImageFunction } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projectsSchema = ({ image }: { image: ImageFunction }) =>
  z.object({
    order: z.number().int().positive(),
    title: z.string(),
    description: z.string(),
    image: image(),
    imageAlt: z.string(),
    topic: z.array(z.string()),
    url: z.object({
      demo: z.url(),
      repo: z.url(),
    }),
  });

export const collections = {
  projects: defineCollection({
    loader: glob({
      pattern: "**/*.{md,mdx}",
      base: "./src/content/projects",
    }),
    schema: projectsSchema,
  }),
};
