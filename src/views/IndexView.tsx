/**
 * @file Vista principal de la aplicación.
 * @module IndexView
 */

import { useAppStore } from "../stores/useAppStore"

/**
 * Componente que renderiza la página de inicio.
 * @function IndexView
 * @returns {JSX.Element}
 */
function IndexView() {
  useAppStore((state) => state.categories)
  return (
    <>
        <h1>Inicio</h1>
    </>
  )
}

export default IndexView
