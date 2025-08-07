import axios from "axios";
import { CategoriesAPIResponseSchema } from "../utils/recipes-schema";

export async function getCategories() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list";
  const { data } = await axios(url);
  const result = CategoriesAPIResponseSchema.safeParse(data);


  try {
    result.success
  } catch (error) {
    
  }
  if (result.success) {
    // Los datos son válidos
    console.log(result.data);
  } else {
    // Hubo errores de validación
    console.error(result.error);
  }

  return result.data
}
