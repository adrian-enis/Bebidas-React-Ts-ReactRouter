/**
 * @file Slice de Zustand para manejar el estado de las recetas.
 * @module recipeSlice
 */

import type { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeServices"
import type { Categories } from "../types/Index"

/**
 * @typedef {object} RecipeSliceType - El estado y las acciones para las recetas.
 * @property {Categories} categories - Las categorías de bebidas.
 * @property {function} fetchCategories - La función para obtener las categorías.
 */
export type RecipeSliceType = {
    categories: Categories
    fetchCategories: () => Promise<void>
}

/**
 * Crea un slice de Zustand para manejar el estado de las recetas.
 * @function createRecipeSlice
 * @param {function} set - La función para actualizar el estado.
 * @returns {object} El slice de estado de las recetas.
 */
export const  createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
    categories: {
        drinks:[]
    },
    fetchCategories: async () => {
        try {
            const categories = await getCategories()
            // Valida si las categorias existen antes de actualizar el estado
            if(categories) {
                set({
                    categories
                })
            }
        } catch (error) {
            console.error('Hubo un error al obtener las categorias:', error)
        }
    }
})
