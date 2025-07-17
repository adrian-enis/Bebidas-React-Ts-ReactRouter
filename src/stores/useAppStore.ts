import {create} from "zustand"
import { createRecipeSlice} from "./recipeSlice"
import type {RecipeSliceType } from  "./recipeSlice"


export const useAppStore = create<RecipeSliceType>((...a) => ({
    ...createRecipeSlice(...a)
}))