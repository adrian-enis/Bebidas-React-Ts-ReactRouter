import { useMemo } from "react";
import { NavLink, useLocation } from "react-router";

function Header() {
 
  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === "/", [pathname]);
  return (
    <header className={isHome ? "bg-header bg-center bg-cover transi" : "bg-slate-800"}>
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src="/logo.svg" alt="logotipo" />
          </div>
          <nav className="flex gap-4">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
              to="/"
            >
              Inicio
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
              to="/favoritos"
            >
              Favoritos
            </NavLink>
          </nav>
        </div>
        {isHome && (
          <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
            <div className="space-y-4">
              <label
                htmlFor="ingredientes"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Nombre o Ingredientes
              </label>
              <input
                id="ingredient"
                name="ingredient"
                type="text"
                placeholder="Nombre o Ingredientes. Ej. Vodka, Tequila, Cafe"
                className="p-3 w-full rounded-lg focus:outline-none text-white bg-amber-700 placeholder:text-amber-50"
              />
            </div>
            <div className="space-y-4">
              <label
                htmlFor="ingredientes"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Categoria
              </label>
              <select
                id="ingredient"
                name="ingredient"
                className="p-3 w-full rounded-lg focus:outline-none text-white bg-amber-700 placeholder:text-amber-50"
                placeholder="Nombre o Ingredientes. Ej. Vodka, Tequila, Cafe"
              >
                <option value="">-- Seleccione --</option>
              </select>
            </div>
            <input type="submit" value="Buscar Recetas" className="cursor-pointer bg-orange-800 hover:bg-orange-900 w-full p-3 rounded-lg  font-extrabold text-lg text-white uppercase"  />
          </form>
        )}
      </div>
    </header>
  );
}

export default Header;
