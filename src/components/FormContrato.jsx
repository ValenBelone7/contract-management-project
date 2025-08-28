import { useState, useEffect } from "react";

export default function FormContrato({ onSave, onAgregar, onCancel, initialData }) {
  const [formData, setFormData] = useState({
    inquilinoNombre: "",
    inquilinoApellido: "",
    inquilinoDni: "",
    inquilinoDireccion: "",
    propietarioNombre: "",
    propietarioApellido: "",
    propietarioDni: "",
    propietarioDireccion: "",
    propiedadDireccion: "",
    fechaInicio: "",
    fechaFin: "",
    montoMensual: "",
    frecuenciaActualizacion: "6 meses",
    indiceActualizacion: "IPC",
  });

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.inquilinoNombre || !formData.inquilinoDni) {
      alert("⚠️ El inquilino debe tener nombre y DNI");
      return;
    }
    if (onSave) onSave(formData);
    else if (onAgregar) onAgregar(formData);

    setFormData({
      inquilinoNombre: "",
      inquilinoApellido: "",
      inquilinoDni: "",
      inquilinoDireccion: "",
      propietarioNombre: "",
      propietarioApellido: "",
      propietarioDni: "",
      propietarioDireccion: "",
      propiedadDireccion: "",
      fechaInicio: "",
      fechaFin: "",
      montoMensual: "",
      frecuenciaActualizacion: "6 meses",
      indiceActualizacion: "IPC",
    });
    if (onCancel) onCancel();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto bg-gray-100 rounded-3xl shadow-lg p-8 space-y-10"
    >
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        {initialData ? "Editar Contrato" : "Cargar Contrato"}
      </h2>

      {/* Inquilino */}
      <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <h3 className="text-xl font-semibold text-indigo-600 border-b pb-2">
          Datos del Inquilino
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm text-gray-600">Nombre</label>
            <input
              type="text"
              name="inquilinoNombre"
              value={formData.inquilinoNombre}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Apellido</label>
            <input
              type="text"
              name="inquilinoApellido"
              value={formData.inquilinoApellido}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">DNI / CUIT</label>
            <input
              type="text"
              name="inquilinoDni"
              value={formData.inquilinoDni}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Dirección</label>
            <input
              type="text"
              name="inquilinoDireccion"
              value={formData.inquilinoDireccion}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>
      </div>

      {/* Propietario */}
      <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <h3 className="text-xl font-semibold text-indigo-600 border-b pb-2">
          Datos del Propietario
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm text-gray-600">Nombre</label>
            <input
              type="text"
              name="propietarioNombre"
              value={formData.propietarioNombre}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Apellido</label>
            <input
              type="text"
              name="propietarioApellido"
              value={formData.propietarioApellido}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">DNI / CUIT</label>
            <input
              type="text"
              name="propietarioDni"
              value={formData.propietarioDni}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Dirección</label>
            <input
              type="text"
              name="propietarioDireccion"
              value={formData.propietarioDireccion}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>
      </div>

      {/* Contrato */}
      <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <h3 className="text-xl font-semibold text-indigo-600 border-b pb-2">
          Datos del Contrato
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-gray-600">Dirección de la propiedad</label>
            <input
              type="text"
              name="propiedadDireccion"
              value={formData.propiedadDireccion}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Fecha de inicio</label>
            <input
              type="date"
              name="fechaInicio"
              value={formData.fechaInicio}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Fecha de fin</label>
            <input
              type="date"
              name="fechaFin"
              value={formData.fechaFin}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Monto mensual ($)</label>
            <input
              type="number"
              name="montoMensual"
              value={formData.montoMensual}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Frecuencia de actualización</label>
            <select
              name="frecuenciaActualizacion"
              value={formData.frecuenciaActualizacion}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="3 meses">Cada 3 meses</option>
              <option value="6 meses">Cada 6 meses</option>
              <option value="9 meses">Cada 9 meses</option>
              <option value="12 meses">Cada 12 meses</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600">Índice de actualización</label>
            <select
              name="indiceActualizacion"
              value={formData.indiceActualizacion}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="IPC">IPC</option>
              <option value="UVA">UVA</option>
              <option value="ICL">ICL</option>
            </select>
          </div>
        </div>
      </div>

      {/* Botones */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <button
          type="submit"
          className="flex-1 bg-gradient-to-r from-indigo-500 to-indigo-400 text-white font-semibold py-3 rounded-xl shadow-md hover:from-indigo-600 hover:to-indigo-500 transition"
        >
          {initialData ? "Guardar Cambios" : "Guardar Contrato"}
        </button>
        {initialData && (
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-400 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-gray-500 transition"
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}
