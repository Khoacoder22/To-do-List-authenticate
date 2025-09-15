import z from "zod";

export const TodoItemSchema = z.object({
    body: z.object({
        name: z.string().min(1, "Name is required").max(100, "Name is too long"),
        des: z.string().optional(),
    }),
    query: z.object({}),
    params: z.object({})
})