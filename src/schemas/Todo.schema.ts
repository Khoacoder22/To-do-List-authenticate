import z from "zod";

export const TodoSchema = z.object({
    body: z.object({
        name: z.string().min(1, "Name is required").max(100, "Name is too long")
    }),
    query: z.object({}),
    params: z.object({})
})