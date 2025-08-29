import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 fixed inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="Logo"
              className="h-8 w-auto"
            />
            <span className="text-white font-bold">Inmobiliaria App</span>
          </a>
        </div>

        {/* Botón menú (mobile) */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2.5 text-gray-200 rounded-md"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menú escritorio */}
        <div className="hidden lg:flex lg:gap-x-12">

          <Link to="/" className="text-sm font-semibold text-white hover:text-indigo-400">
            Inicio
          </Link>

          <Link to="/contrato" className="text-sm font-semibold text-white hover:text-indigo-400">
            Ingresar
          </Link>

          <Link to="/buscar" className="text-sm font-semibold text-white hover:text-indigo-400">
            Ver contratos
          </Link>
          
        </div>

        {/* Login */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/login" className="text-sm font-semibold text-white hover:text-indigo-400">
            Log in →
          </Link>
        </div>
      </nav>

      {/* Menú mobile desplegable */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-900 px-6 pb-6">

          <Link to="/" className="block py-2 text-base font-semibold text-white hover:text-indigo-400">
            Inicio
          </Link>

          <Link to="/contrato" className="block py-2 text-base font-semibold text-white hover:text-indigo-400">
            Ingresar
          </Link>

          <Link to="/buscar" className="block py-2 text-base font-semibold text-white hover:text-indigo-400">
            Ver contratos
          </Link>

          <Link to="/login" className="block py-2 text-base font-semibold text-white hover:text-indigo-400">
            Log in
          </Link>

        </div>
      )}
    </header>
  );
};