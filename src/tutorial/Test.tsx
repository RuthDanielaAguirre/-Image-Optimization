import { useState, useMemo } from "react";

const allQuestions = [
  { question: "¿Cuál es el formato más eficiente para imágenes en la web?", options: ["JPEG", "PNG", "WebP", "AVIF"], answer: "AVIF" },
  { question: "¿Qué herramienta permite diseñar interfaces web?", options: ["Photoshop", "Figma", "GIMP"], answer: "Figma" },
  { question: "¿Qué hace Lazy Loading?", options: ["Carga todas las imágenes", "Carga solo las visibles", "Reduce calidad"], answer: "Carga solo las visibles" },
  { question: "¿Qué API manipula píxeles en el navegador?", options: ["Canvas API", "Fetch API", "Storage API"], answer: "Canvas API" },
  { question: "¿SVG es formato vectorial o de mapa de bits?", options: ["Mapa de bits", "Vectorial", "Ambos"], answer: "Vectorial" },
  { question: "¿Qué método devuelve los píxeles de un canvas?", options: ["getContext()", "getImageData()", "readPixels()"], answer: "getImageData()" },
  { question: "PNG usa compresión...", options: ["Con pérdida", "Sin pérdida", "Vectorial"], answer: "Sin pérdida" },
  { question: "¿Qué atributo HTML activa Lazy Loading nativo?", options: ['src="lazy"', 'loading="lazy"', 'defer="lazy"'], answer: 'loading="lazy"' },
];

const shuffle = <T,>(arr: T[]) => [...arr].sort(() => Math.random() - 0.5);

const Test = () => {
  const questions = useMemo(() => shuffle(allQuestions), []);
  const [selected, setSelected] = useState<string[]>(Array(questions.length).fill(""));
  const [checked, setChecked] = useState(false);
  const correct = selected.filter((ans, i) => ans === questions[i].answer).length;

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl mt-6">
      <h2 className="text-2xl font-bold mb-2">🏆 Test Final</h2>
      <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">Preguntas aleatorias de todos los ejercicios.</p>
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
      <button onClick={() => setChecked(true)} className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">Verificar respuestas</button>
      {checked && <p className="mt-4 font-bold text-lg">{correct}/{questions.length} correctas {correct >= questions.length * 0.8 ? "🎉" : "📚 Repasa los ejercicios"}</p>}
    </div>
  );
};

export default Test;