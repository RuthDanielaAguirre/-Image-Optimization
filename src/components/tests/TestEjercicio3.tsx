import { useState } from "react";

const questions = [
  { question: "¿Qué API permite manipular imágenes pixel a pixel en el navegador?", options: ["WebGL", "Canvas API", "Intersection Observer"], answer: "Canvas API" },
  { question: "¿Qué método obtiene los datos de píxeles de un canvas?", options: ["getContext()", "getImageData()", "setTimeout()"], answer: "getImageData()" },
  { question: "¿Cuántos valores tiene cada píxel en el array de Canvas?", options: ["3 (RGB)", "4 (RGBA)", "1 (gris)"], answer: "4 (RGBA)" },
  { question: "¿Qué hace el filtro de escala de grises matemáticamente?", options: ["Elimina el canal alpha", "Promedia R, G y B y los iguala", "Invierte todos los valores"], answer: "Promedia R, G y B y los iguala" },
  { question: "¿Cómo se escribe el resultado de modificar píxeles de vuelta al canvas?", options: ["setImageData()", "putImageData()", "drawImage()"], answer: "putImageData()" },
];

const TestEjercicio3 = () => {
  const [selected, setSelected] = useState<string[]>(Array(questions.length).fill(""));
  const [checked, setChecked] = useState(false);
  const correct = selected.filter((ans, i) => ans === questions[i].answer).length;

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
      <h2 className="text-2xl font-bold mb-6">🧪 Test — Canvas API</h2>
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

export default TestEjercicio3;