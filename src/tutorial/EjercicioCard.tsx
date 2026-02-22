import { Link } from "react-router-dom";

const EjercicioCard = ({ title, path, desc }: { title: string; path: string; desc: string }) => (
  <div className="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800 hover:shadow-md transition">
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{desc}</p>
    <Link to={path} className="inline-block bg-blue-500 text-white px-4 py-1.5 rounded text-sm hover:bg-blue-600">
      Ver ejercicio →
    </Link>
  </div>
);

export default EjercicioCard;