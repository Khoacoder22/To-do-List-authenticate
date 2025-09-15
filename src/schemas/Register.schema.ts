import z from "zod";

export const Registerschema = z.object({
    body: z.object({
        name : z.string().min(3, "Name must be at least 3 characters long"),
        dob: z.date().refine(date => date >= new Date('1900-01-01'), {
            message: "Date of birth must be after January 1, 1900",
        }),
        user : z.string().regex(/^[a-zA-Z0-9_]{3,}$/, "Username must be at least 3 characters long and contain only letters, numbers, and underscores"), 
        password: z.string().min(6, "Password must be at least 6 characters long"),           
    }),
    query: z.object({}),
    params: z.object({})
})