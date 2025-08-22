import { useEffect, useState } from "react";
import FormContrato from "../components/FormContrato";

export default function Buscar() {
  const [contratos, setContratos] = useState([]);
  const [editando, setEditando] = useState(null); // índice del contrato a editar

  useEffect(() => {
    const savedContratos = JSON.parse(localStorage.getItem("contratos") || "[]");
    setContratos(savedContratos);
  }, []);

  const borrarContrato = (index) => {
    const nuevosContratos = contratos.filter((_, i) => i !== index);
    setContratos(nuevosContratos);
    localStorage.setItem("contratos", JSON.stringify(nuevosContratos));
  };

  const guardarEdicion = (formData) => {
    const nuevosContratos = [...contratos];
    nuevosContratos[editando] = formData;
    setContratos(nuevosContratos);
    localStorage.setItem("contratos", JSON.stringify(nuevosContratos));
    setEditando(null); // cerrar formulario
  };

  // Si estamos editando, mostramos solo el formulario
  if (editando !== null) {
    return (
      <div className="max-w-6xl mx-auto mt-6 p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">Editar Contrato</h2>
        <FormContrato
          initialData={contratos[editando]}
          onSave={guardarEdicion}
          onCancel={() => setEditando(null)}
        />
      </div>
    );
  }

  // Lista normal de contratos
  if (contratos.length === 0) return <p>No hay contratos cargados.</p>;

  return (
    <div className="max-w-6xl mx-auto mt-12 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">Contratos Guardados</h2>

      {contratos.map((c, index) => (
        <div key={index} className="border p-4 mb-4 rounded-lg">
          <p>
            <strong>Inquilino:</strong> {c.inquilinoNombre} {c.inquilinoApellido[0]}.
            {" - DNI: "} {c.inquilinoDni}
          </p>
          <p>
            <strong>Propietario:</strong> {c.propietarioNombre} {c.propietarioApellido[0]}.
            {" - DNI: "} {c.propietarioDni}
          </p>
          <p><strong>Dirección de la propiedad:</strong> {c.propietarioDireccion}</p>
          <p><strong>Fecha Inicio:</strong> {c.fechaInicio}</p>
          <p><strong>Fecha Fin:</strong> {c.fechaFin}</p>
          <p><strong>Monto:</strong> ${c.montoMensual}</p>
          <p><strong>Frecuencia actualización:</strong> {c.frecuenciaActualizacion}</p>
          <p><strong>Índice actualización:</strong> {c.indiceActualizacion}</p>

          <div className="flex space-x-2 mt-2">
            <button
              onClick={() => borrarContrato(index)}
              className="bg-blue-600 text-white py-1 px-3 text-sm rounded-lg hover:bg-blue-700"
            >
              Eliminar
            </button>
            <button
              onClick={() => setEditando(index)}
              className="bg-green-600 text-white py-1 px-3 text-sm rounded-lg hover:bg-green-700"
            >
              Editar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}




