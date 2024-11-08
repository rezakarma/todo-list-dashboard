import { z } from "zod";

export const nameShcema = z.object({
  name: z.string().min(1),
});

export const cityShcema = z.object({
  city: z.string().min(1),
});

export const todoSchema = z.object({
  title: z.string().min(1),
});
