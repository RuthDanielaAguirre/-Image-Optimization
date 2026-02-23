const FigmaComponent = () => (
  <div className="p-6 max-w-4xl mx-auto">
    <h2 className="text-xl font-bold mb-3">🎨 Diseño exportado desde Figma</h2>
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
      Navbar diseñada en Figma y exportada como SVG — Autoría propia — Licencia: uso educativo
    </p>

    <div className="border rounded-xl overflow-hidden shadow-md bg-white p-6">
      <img 
        src="/Navbar.svg" 
        alt="Navbar exportada desde Figma" 
        className="w-full h-auto"
      />
    </div>

    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm">
      <p className="font-semibold mb-2">📋 Proceso de exportación:</p>
      <ol className="text-gray-600 dark:text-gray-400 list-decimal list-inside space-y-1">
        <li>Navbar diseñada en Figma con logo TechGap y links de navegación</li>
        <li>Selección del frame completo en Figma</li>
        <li>Panel derecho → Export → formato SVG</li>
        <li>Archivo SVG copiado a <code>/public</code> y referenciado con img</li>
      </ol>
    </div>
  </div>
);

export default FigmaComponent;