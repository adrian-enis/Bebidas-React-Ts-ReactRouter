import type { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeServices"
import type { Categories } from "../types/Index"


export type RecipeSliceType = {
    categories: Categories
    fetchCategories: () => Promise<void>
}

export const  createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
    categories: {
        drinks:[]
    },
    fetchCategories: async () => {
       const categories = await getCategories()
       set({
        categories
       })
    }
})