import ImageEditor from "../components/ImageEditor";
import TestEjercicio3 from "../components/tests/TestEjercicio3";

const Ejercicio3 = () => (
  <div className="p-6 max-w-4xl mx-auto">
    <h1 className="text-3xl font-bold mb-2">Ejercicio 3: Canvas API</h1>
    <p className="text-gray-500 dark:text-gray-400 mb-6">Sube una imagen y aplica filtros en tiempo real.</p>
    <ImageEditor />
    <hr className="my-10" />
    <TestEjercicio3 />
  </div>
);

export default Ejercicio3;