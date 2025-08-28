import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faFileContract } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <div className="bg-gray-900 relative isolate px-6 pt-14 lg:px-8">
      {/* Fondo superior */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Contenido Hero */}
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
          Gestión de contratos inmobiliarios
        </h1>
        <p className="mt-8 text-lg font-medium text-gray-400 sm:text-xl/8">
          Ingresá, consultá y administrá contratos de alquiler de manera simple, rápida y profesional.
        </p>

        {/* Opciones con íconos */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/contrato"
            className="flex flex-col items-center justify-center gap-3 rounded-xl bg-white/5 p-6 shadow-lg hover:bg-white/10 transition"
          >
            <FontAwesomeIcon icon={faFileContract} className="text-indigo-400 w-12 h-12" />
            <span className="text-lg font-semibold text-white">Ingresar Contrato</span>
          </Link>

          <Link
            to="/buscar"
            className="flex flex-col items-center justify-center gap-3 rounded-xl bg-white/5 p-6 shadow-lg hover:bg-white/10 transition"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-green-400 w-12 h-12" />
            <span className="text-lg font-semibold text-white">Buscar Contrato</span>
          </Link>
        </div>
      </div>

      {/* Fondo inferior */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
