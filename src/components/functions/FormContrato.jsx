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
        className="max-w-4xl mx-auto bg-gray-900 backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-10 text-white"
      >
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
        {initialData ? "Editar Contrato" : "Cargar Contrato"}
      </h2>

      {/* Inquilino */}
      <div className="bg-white/5 rounded-2xl shadow-lg p-6 space-y-4">
        <h3 className="text-lg font-semibold text-indigo-400 border-b border-gray-700 pb-2">
          Datos del Inquilino
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Input label="Nombre" name="inquilinoNombre" value={formData.inquilinoNombre} onChange={handleChange} />
          <Input label="Apellido" name="inquilinoApellido" value={formData.inquilinoApellido} onChange={handleChange} />
          <Input label="DNI / CUIT" name="inquilinoDni" value={formData.inquilinoDni} onChange={handleChange} />
          <Input label="Dirección" name="inquilinoDireccion" value={formData.inquilinoDireccion} onChange={handleChange} />
        </div>
      </div>

      {/* Propietario */}
      <div className="bg-white/5 rounded-2xl shadow-lg p-6 space-y-4">
        <h3 className="text-lg font-semibold text-indigo-400 border-b border-gray-700 pb-2">
          Datos del Propietario
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Input label="Nombre" name="propietarioNombre" value={formData.propietarioNombre} onChange={handleChange} />
          <Input label="Apellido" name="propietarioApellido" value={formData.propietarioApellido} onChange={handleChange} />
          <Input label="DNI / CUIT" name="propietarioDni" value={formData.propietarioDni} onChange={handleChange} />
          <Input label="Dirección" name="propietarioDireccion" value={formData.propietarioDireccion} onChange={handleChange} />
        </div>
      </div>

      {/* Contrato */}
      <div className="bg-white/5 rounded-2xl shadow-lg p-6 space-y-4">
        <h3 className="text-lg font-semibold text-indigo-400 border-b border-gray-700 pb-2">
          Datos del Contrato
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Input label="Dirección de la propiedad" name="propiedadDireccion" value={formData.propiedadDireccion} onChange={handleChange} />
          <Input label="Fecha de inicio" type="date" name="fechaInicio" value={formData.fechaInicio} onChange={handleChange} />
          <Input label="Fecha de fin" type="date" name="fechaFin" value={formData.fechaFin} onChange={handleChange} />
          <Input label="Monto mensual ($)" type="number" name="montoMensual" value={formData.montoMensual} onChange={handleChange} />
          
          <Select
            label="Frecuencia de actualización"
            name="frecuenciaActualizacion"
            value={formData.frecuenciaActualizacion}
            onChange={handleChange}
            options={["3 meses", "6 meses", "9 meses", "12 meses"]}
          />
          <Select
            label="Índice de actualización"
            name="indiceActualizacion"
            value={formData.indiceActualizacion}
            onChange={handleChange}
            options={["IPC", "UVA", "ICL"]}
          />
        </div>
      </div>

      {/* Botones */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <button
          type="submit"
          className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-3 rounded-xl shadow-md hover:from-indigo-600 hover:to-purple-600 transition"
        >
          {initialData ? "Guardar Cambios" : "Guardar Contrato"}
        </button>
        {initialData && (
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-700 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-gray-600 transition"
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}

// Subcomponente input estilizado
function Input({ label, type = "text", ...props }) {
  return (
    <div>
      <label className="block text-sm text-gray-300">{label}</label>
      <input
        type={type}
        {...props}
        className="w-full mt-1 p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
    </div>
  );
}

// Subcomponente select estilizado
function Select({ label, options, ...props }) {
  return (
    <div>
      <label className="block text-sm text-gray-300">{label}</label>
      <select
        {...props}
        className="w-full mt-1 p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        {options.map((op) => (
          <option key={op} value={op}>
            {op}
          </option>
        ))}
      </select>
    </div>
  );
}
