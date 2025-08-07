/**
 * @file Store principal de Zustand que combina todos los slices.
 * @module useAppStore
 */

import {create} from "zustand"
import { devtools } from "zustand/middleware"
import { createRecipeSlice} from "./recipeSlice"
import type {RecipeSliceType } from  "./recipeSlice"

/**
 * Hook de Zustand para acceder al store principal de la aplicación.
 * @function useAppStore
 * @returns {object} El estado y las acciones del store.
 */
export const useAppStore = create<RecipeSliceType>()(devtools((...a) => ({
    ...createRecipeSlice(...a)
})))