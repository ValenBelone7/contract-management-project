export const Header = () => {
  return (
    <header className="bg-[#E8F4FC] text-[#0D4268] p-6 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">Inmobiliaria App</h1>
      <nav className="space-x-4">
        <a href="#" className="hover:text-[#2bbd8a]">Inicio</a>
        <a href="#" className="hover:text-[#2bbd8a]">Ingresar</a>
        <a href="#" className="hover:text-[#2bbd8a]">Ver contratos</a>
      </nav>
    </header>
  );
};
