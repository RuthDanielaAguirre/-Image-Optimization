import FigmaComponent from "../components/FigmaComponent";
import TestEjercicio4 from "../components/tests/TestEjercicio4";

const Ejercicio4 = () => (
  <div className="p-6 max-w-4xl mx-auto">
    <h1 className="text-3xl font-bold mb-2">Ejercicio 4: Figma → React</h1>
    <p className="text-gray-500 dark:text-gray-400 mb-6">Diseño exportado desde Figma convertido en componente React.</p>
    <FigmaComponent />
    <hr className="my-10" />
    <TestEjercicio4 />
  </div>
);

export default Ejercicio4;