import { useState } from "react";

const questions = [
  { question: "¿Qué formato es ideal para exportar iconos desde Figma?", options: ["JPEG", "PNG", "SVG"], answer: "SVG" },
  { question: "¿Qué plugin exporta código JSX desde Figma?", options: ["Tailwind CSS for Figma", "Anima for Figma", "SVG Export"], answer: "Anima for Figma" },
  { question: "¿Para qué sirve el plugin 'Figma to Code'?", options: ["Comprimir imágenes", "Convertir diseños en código JSX", "Crear animaciones"], answer: "Convertir diseños en código JSX" },
  { question: "¿Qué formato se recomienda para imágenes estáticas exportadas de Figma?", options: ["SVG", "WebP o PNG", "BMP"], answer: "WebP o PNG" },
  { question: "¿Qué ventaja tiene exportar SVG desde Figma para React?", options: ["Ocupa más espacio", "Se puede usar directamente como componente JSX", "Solo funciona en PNG"], answer: "Se puede usar directamente como componente JSX" },
];

const TestEjercicio4 = () => {
  const [selected, setSelected] = useState<string[]>(Array(questions.length).fill(""));
  const [checked, setChecked] = useState(false);
  const correct = selected.filter((ans, i) => ans === questions[i].answer).length;

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
      <h2 className="text-2xl font-bold mb-6">🧪 Test — Figma y React</h2>
      {questions.map((q, i) => (
        <div key={i} className="mb-6">
          <p className="font-semibold mb-2">{i + 1}. {q.question}</p>
          <div className="flex flex-wrap gap-2">
            {q.options.map((opt) => {
              let style = "bg-gray-200 dark:bg-gray-700";
              if (checked) { if (opt === q.answer) style = "bg-green-400 text-white"; else if (opt === selected[i]) style = "bg-red-400 text-white"; }
              else if (selected[i] === opt) style = "bg-blue-500 text-white";
              return <button key={opt} className={`px-4 py-2 rounded ${style}`} onClick={() => { if (!checked) { const n=[...selected]; n[i]=opt; setSelected(n); }}}>{opt}</button>;
            })}
          </div>
        </div>
      ))}
      <button onClick={() => setChecked(true)} className="bg-green-500 text-white px-6 py-2 rounded">Verificar respuestas</button>
      {checked && <p className="mt-4 font-bold">{correct}/{questions.length} correctas {correct === questions.length ? "🎉" : "📚"}</p>}
    </div>
  );
};

export default TestEjercicio4;