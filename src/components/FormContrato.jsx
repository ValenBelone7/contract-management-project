import { useState } from "react";

export default function ContratoForm() {
  const [formData, setFormData] = useState({
    // Inquilino
    inquilinoNombre: "",
    inquilinoApellido: "",
    inquilinoDni: "",
    inquilinoDireccion: "",
    // Propietario
    propietarioNombre: "",
    propietarioApellido: "",
    propietarioDni: "",
    propietarioDireccion: "",
    // Contrato
    propiedadDireccion: "",
    fechaInicio: "",
    fechaFin: "",
    montoMensual: "",
    frecuenciaActualizacion: "6 meses",
    indiceActualizacion: "IPC",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contrato cargado:", formData);
    // 🚀 Acá más adelante lo mandás al backend con fetch/axios
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 bg-light-dark rounded-2xl shadow-md space-y-6"
    >
      <h2 className="text-xl font-bold text-gray-800">Cargar Contrato</h2>

      {/* Datos Inquilino */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">Inquilino</h3>
        <div className="grid grid-cols-4 gap-6">
          <input type="text" name="inquilinoNombre" value={formData.inquilinoNombre} onChange={handleChange} placeholder="Nombre" className="input" />
          <input type="text" name="inquilinoApellido" value={formData.inquilinoApellido} onChange={handleChange} placeholder="Apellido" className="input" />
          <input type="text" name="inquilinoDni" value={formData.inquilinoDni} onChange={handleChange} placeholder="DNI/CUIT" className="input" />
          <input type="text" name="inquilinoDireccion" value={formData.inquilinoDireccion} onChange={handleChange} placeholder="Dirección" className="input" />
        </div>
      </div>

      {/* Datos Propietario */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-4">Propietario</h3>
        <div className="grid grid-cols-4 gap-6">
          <input type="text" name="propietarioNombre" value={formData.propietarioNombre} onChange={handleChange} placeholder="Nombre" className="input" />
          <input type="text" name="propietarioApellido" value={formData.propietarioApellido} onChange={handleChange} placeholder="Apellido" className="input" />
          <input type="text" name="propietarioDni" value={formData.propietarioDni} onChange={handleChange} placeholder="DNI/CUIT" className="input" />
          <input type="text" name="propietarioDireccion" value={formData.propietarioDireccion} onChange={handleChange} placeholder="Dirección" className="input" />
        </div>
      </div>

      {/* Datos Contrato */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">Contrato</h3>
        <div className="grid grid-cols-3 gap-4">
          <input type="text" name="propiedadDireccion" value={formData.propiedadDireccion} onChange={handleChange} placeholder="Dirección de la propiedad" className="input" />
          <input type="date" name="fechaInicio" value={formData.fechaInicio} onChange={handleChange} className="input" />
          <input type="date" name="fechaFin" value={formData.fechaFin} onChange={handleChange} className="input" />
          <input type="number" name="montoMensual" value={formData.montoMensual} onChange={handleChange} placeholder="Monto mensual ($)" className="input" />
          <select name="frecuenciaActualizacion" value={formData.frecuenciaActualizacion} onChange={handleChange} className="input">
            <option value="3 meses">Cada 3 meses</option>
            <option value="6 meses">Cada 6 meses</option>
            <option value="9 meses">Cada 9 meses</option>
            <option value="12 meses">Cada 12 meses</option>
          </select>
          <select name="indiceActualizacion" value={formData.indiceActualizacion} onChange={handleChange} className="input">
            <option value="IPC">IPC</option>
            <option value="UVA">UVA</option>
            <option value="ICL">ICL</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Guardar Contrato
      </button>
    </form>
  );
}
