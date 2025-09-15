import z from "zod";

export const updateItemSchema = z.object({
    body: z.object({
        name: z.string().min(1, "Name is required").max(100, "Name is too long").optional(),
        des: z.string().optional(),
    }),
    query: z.object({}),
    params: z.object({
        itemId: z.string().min(1, "itemId is required"),
    })
})