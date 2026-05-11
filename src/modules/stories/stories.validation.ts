import { z } from "zod";

export const createStorySchema = z.object({
  caption: z
    .string()
    .trim()
    .max(200, "Caption cannot exceed 200 characters")
    .optional(),
  lat: z.number().min(-90).max(90).optional(),
  lng: z.number().min(-180).max(180).optional(),
  address: z.string().trim().optional(),
});
