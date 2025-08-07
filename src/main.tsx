/**
 * @file Punto de entrada de la aplicación.
 * @module main
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './router'

/**
 * Renderiza el componente principal de la aplicación en el DOM.
 * @function
 * @name renderApp
 * @returns {void}
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
