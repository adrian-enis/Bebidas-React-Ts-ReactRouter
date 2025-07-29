# Documentación del Proyecto de Bebidas

Este proyecto es una aplicación web para buscar y guardar recetas de bebidas.

## Descripción General

La aplicación permite a los usuarios buscar recetas de bebidas por nombre o ingredientes, y ver una lista de categorías. También tiene una sección para guardar las recetas favoritas.

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

1.  **`main.tsx`**: Es el punto de entrada de la aplicación. Renderiza el componente `AppRouter`.

2.  **`router.tsx`**: Define las rutas de la aplicación utilizando `react-router-dom`.
    *   `/`: La página de inicio, que renderiza el componente `IndexView`.
    *   `/favoritos`: La página de favoritos, que renderiza el componente `FavoritesView`.

3.  **`layout/Layout.tsx`**: Es el componente de diseño principal. Contiene el `Header` y el contenido de la ruta actual.

4.  **`components/Header.tsx`**: Es el encabezado de la aplicación.
    *   Muestra el logotipo y los enlaces de navegación a "Inicio" y "Favoritos".
    *   Contiene un formulario de búsqueda que permite a los usuarios buscar recetas por nombre o ingredientes, y filtrar por categoría.
    *   Cuando el componente se monta, llama a la función `fetchCategories` para obtener la lista de categorías de bebidas.

5.  **`views/IndexView.tsx`**: Es la vista principal de la aplicación. Actualmente muestra un título "Inicio".

6.  **`views/FavoritesView.tsx`**: Es la vista de favoritos. Actualmente muestra un título "Favoritos".

7.  **`stores/useAppStore.ts`**: Es el store principal de la aplicación, creado con `zustand`. Combina todos los "slices" del estado de la aplicación.

8.  **`stores/recipeSlice.ts`**: Es un "slice" del store que maneja el estado relacionado con las recetas.
    *   `categories`: Un array para almacenar la lista de categorías de bebidas.
    *   `fetchCategories`: Una función asíncrona que llama a `getCategories` del servicio `RecipeServices` para obtener las categorías.

9.  **`services/RecipeServices.ts`**: Este archivo es responsable de realizar las llamadas a la API para obtener los datos de las bebidas.
    *   `getCategories`: Una función asíncrona para obtener la lista de categorías de bebidas desde una API.

## Flujo de Datos

1.  Cuando la aplicación se carga, el componente `Header` se monta y llama a la función `fetchCategories` del store.
2.  La función `fetchCategories` llama a la función `getCategories` del servicio `RecipeServices`.
3.  El servicio `RecipeServices` realiza una llamada a una API externa para obtener la lista de categorías.
4.  Los datos obtenidos se guardan en el estado `categories` del `recipeSlice`.
5.  Los componentes que necesiten acceder a la lista de categorías pueden hacerlo a través del hook `useAppStore`.