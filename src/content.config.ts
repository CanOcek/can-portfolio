import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    categories: z.array(z.string()),
    technologies: z.array(z.string()),
    role: z.string(),
    featured: z.boolean(),
    status: z.string(),
    draft: z.boolean(),
    date: z.string().optional(),
    cover: z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    }).optional(),
    visual: z.object({
      kind: z.enum([
        "pipeline",
        "music",
        "crm",
        "procedural",
        "pathfinding",
        "hardware",
        "game",
        "database",
        "aircraft",
      ]),
      label: z.string(),
      caption: z.string(),
    }),
  }),
});

export const collections = { projects };
