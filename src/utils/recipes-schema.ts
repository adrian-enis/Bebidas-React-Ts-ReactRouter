import {z} from "zod"

export const CategoriesAPIResponseSchema = z.object({
    drinks: z.array(z.object({
        strGlass: z.string()
    }))
})