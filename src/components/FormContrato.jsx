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
    if (initialData) {
      setFormData(initialData);
    }
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

    if (onSave) {
      onSave(formData); // edición
    } else if (onAgregar) {
      onAgregar(formData); // nuevo contrato
    }

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

    if (onCancel) onCancel(); // cerrar formulario si viene de editar
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 bg-white p-12 rounded-2xl shadow-lg max-w-6xl mx-auto space-y-8">
      <h2 className="text-xl font-bold text-gray-800">{initialData ? "Editar Contrato" : "Cargar Contrato"}</h2>

      {/* Datos Inquilino */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">Inquilino</h3>
        <div className="grid grid-cols-4 gap-6">
          <input type="text" name="inquilinoNombre" value={formData.inquilinoNombre} onChange={handleChange} placeholder="Nombre" className="w-full p-3 border rounded-lg" />
          <input type="text" name="inquilinoApellido" value={formData.inquilinoApellido} onChange={handleChange} placeholder="Apellido" className="w-full p-3 border rounded-lg" />
          <input type="text" name="inquilinoDni" value={formData.inquilinoDni} onChange={handleChange} placeholder="DNI/CUIT" className="w-full p-3 border rounded-lg" />
          <input type="text" name="inquilinoDireccion" value={formData.inquilinoDireccion} onChange={handleChange} placeholder="Dirección" className="w-full p-3 border rounded-lg" />
        </div>
      </div>

      {/* Datos Propietario */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">Propietario</h3>
        <div className="grid grid-cols-4 gap-6">
          <input type="text" name="propietarioNombre" value={formData.propietarioNombre} onChange={handleChange} placeholder="Nombre" className="w-full p-3 border rounded-lg" />
          <input type="text" name="propietarioApellido" value={formData.propietarioApellido} onChange={handleChange} placeholder="Apellido" className="w-full p-3 border rounded-lg" />
          <input type="text" name="propietarioDni" value={formData.propietarioDni} onChange={handleChange} placeholder="DNI/CUIT" className="w-full p-3 border rounded-lg" />
          <input type="text" name="propietarioDireccion" value={formData.propietarioDireccion} onChange={handleChange} placeholder="Dirección" className="w-full p-3 border rounded-lg" />
        </div>
      </div>

      {/* Datos Contrato */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">Contrato</h3>
        <div className="grid grid-cols-3 gap-4">
          <input type="text" name="propiedadDireccion" value={formData.propiedadDireccion} onChange={handleChange} placeholder="Dirección de la propiedad" className="w-full p-3 border rounded-lg" />
          <input type="date" name="fechaInicio" value={formData.fechaInicio} onChange={handleChange} className="w-full p-3 border rounded-lg" />
          <input type="date" name="fechaFin" value={formData.fechaFin} onChange={handleChange} className="w-full p-3 border rounded-lg" />
          <input type="number" name="montoMensual" value={formData.montoMensual} onChange={handleChange} placeholder="Monto mensual ($)" className="w-full p-3 border rounded-lg" />
          <select name="frecuenciaActualizacion" value={formData.frecuenciaActualizacion} onChange={handleChange} className="w-full p-3 border rounded-lg">
            <option value="3 meses">Cada 3 meses</option>
            <option value="6 meses">Cada 6 meses</option>
            <option value="9 meses">Cada 9 meses</option>
            <option value="12 meses">Cada 12 meses</option>
          </select>
          <select name="indiceActualizacion" value={formData.indiceActualizacion} onChange={handleChange} className="w-full p-3 border rounded-lg">
            <option value="IPC">IPC</option>
            <option value="UVA">UVA</option>
            <option value="ICL">ICL</option>
          </select>
        </div>
      </div>

      <div className="flex space-x-2">
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          {initialData ? "Guardar Cambios" : "Guardar Contrato"}
        </button>
        {initialData && (
          <button type="button" onClick={onCancel} className="w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500">
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}





