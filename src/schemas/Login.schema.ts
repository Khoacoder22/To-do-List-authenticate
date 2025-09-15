import z from "zod";

export const LoginSchema = z.object({
    body: z.object({
        username: z.string().min(3, "Username must be at least 3 characters long"),
        password: z.string().min(6, "Password must be at least 6 characters long")
    }),
    query: z.object({}),
    params: z.object({})
});

export type LoginInput = z.infer<typeof LoginSchema>["body"];