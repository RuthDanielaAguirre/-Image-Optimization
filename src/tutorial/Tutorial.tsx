import EjercicioCard from "./EjercicioCard";
import MarkdownEditor from "./MarkdownEditor";
import Test from "./Test";

const ejercicios = [
  { id: 1, title: "Ejercicio 1 — Optimización", path: "/ejercicio1", desc: "Formatos de imagen y conversión" },
  { id: 2, title: "Ejercicio 2 — Lazy Loading", path: "/ejercicio2", desc: "Carga diferida con Intersection Observer" },
  { id: 3, title: "Ejercicio 3 — Canvas API", path: "/ejercicio3", desc: "Filtros en tiempo real" },
  { id: 4, title: "Ejercicio 4 — Figma", path: "/ejercicio4", desc: "Diseño exportado a React" },
];

const Tutorial = () => (
  <div className="p-6 max-w-4xl mx-auto">
    <h1 className="text-3xl font-bold mb-2">📚 Tutorial Interactivo</h1>
    <p className="text-gray-500 dark:text-gray-400 mb-6">Documenta tus apuntes y repasa todos los ejercicios.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
      {ejercicios.map((e) => <EjercicioCard key={e.id} title={e.title} path={e.path} desc={e.desc} />)}
    </div>
    <h2 className="text-2xl font-bold mb-2">📝 Mis notas</h2>
    <MarkdownEditor />
    <Test />
  </div>
);

export default Tutorial;