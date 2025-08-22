import { Link } from "react-router-dom";

export default function CardsPrincipales() {
  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      <Link to="/contrato">
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <div className="flex items-center justify-center h-40">
            <img src="/contrato1.png" alt="Ingresar Contrato" className="max-h-full max-w-full object-contain" />
          </div>
          <h2 className="mt-4 text-lg font-semibold">Ingresar Contrato</h2>
        </div>
      </Link>

      <Link to="/buscar">
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <div className="flex items-center justify-center h-40">
            <img src="/lupa.png" alt="Buscar Contrato" className="max-h-full max-w-full object-contain" />
          </div>
          <h2 className="mt-4 text-lg font-semibold">Buscar Contrato</h2>
        </div>
      </Link>
    </div>
  );
}


