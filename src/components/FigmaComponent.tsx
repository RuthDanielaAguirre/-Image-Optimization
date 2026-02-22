const FigmaComponent = () => (
  <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg text-center max-w-md mx-auto border border-purple-100 dark:border-gray-600">
    <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">F</div>
    <h2 className="text-2xl font-bold mb-2">Diseño desde Figma</h2>
    <p className="text-gray-600 dark:text-gray-300 mb-6">Este componente fue diseñado en Figma y convertido a JSX con Tailwind CSS.</p>
    <div className="flex gap-3 justify-center">
      <button className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-700 transition">Acción principal</button>
      <button className="border border-purple-600 text-purple-600 dark:text-purple-400 px-6 py-2 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-600 transition">Secundario</button>
    </div>
    <p className="text-xs text-gray-400 mt-6">Imagen: placeholder — Licencia: dominio público</p>
  </div>
);

export default FigmaComponent;