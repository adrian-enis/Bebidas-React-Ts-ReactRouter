/**
 * @file Componente de diseño principal de la aplicación.
 * @module Layout
 */

import { Outlet } from "react-router-dom";
import Header from "../components/Header";

/**
 * Componente que define la estructura principal de la página.
 * @function Layout
 * @returns {JSX.Element}
 */
const Layout = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto py-16">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
