import { useState } from "react";

const questions = [
  { question: "¿Qué hace Lazy Loading?", options: ["Carga todas las imágenes de inmediato", "Carga imágenes solo cuando son visibles", "Reduce la calidad de las imágenes"], answer: "Carga imágenes solo cuando son visibles" },
  { question: "¿Qué API de JavaScript se usa para detectar visibilidad?", options: ["Fetch API", "Intersection Observer", "Canvas API"], answer: "Intersection Observer" },
  { question: "¿Qué atributo HTML5 activa lazy loading nativo?", options: ['loading="lazy"', 'defer="true"', 'async="lazy"'], answer: 'loading="lazy"' },
  { question: "¿Qué ventaja principal tiene Lazy Loading?", options: ["Mejora los colores", "Reduce el tiempo de carga inicial", "Aumenta la resolución"], answer: "Reduce el tiempo de carga inicial" },
  { question: "¿Qué significa threshold: 0.1 en Intersection Observer?", options: ["Carga cuando el 100% es visible", "Carga cuando el 10% es visible", "Carga cada 10 segundos"], answer: "Carga cuando el 10% es visible" },
];

const TestEjercicio2 = () => {
  const [selected, setSelected] = useState<string[]>(Array(questions.length).fill(""));
  const [checked, setChecked] = useState(false);
  const correct = selected.filter((ans, i) => ans === questions[i].answer).length;

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-2xl">🧪</span>
          <h2 className="text-2xl font-bold text-white">Test — Lazy Loading</h2>
        </div>
        <p className="text-white/60">Demuestra tu conocimiento sobre carga diferida</p>
      </div>

      {questions.map((q, i) => (
        <div key={i} className="glass rounded-xl p-6 space-y-4">
          <p className="font-semibold text-white text-lg">
            <span className="text-white/60 mr-2">{i + 1}.</span>
            {q.question}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {q.options.map((opt) => {
              let style = "glass-card border border-white/20 text-white/80 hover:border-white/40 hover:bg-white/10";
              if (checked) { 
                if (opt === q.answer) style = "border-green-400 text-green-300 bg-green-500/20"; 
                else if (opt === selected[i]) style = "border-red-400 text-red-300 bg-red-500/20"; 
              } else if (selected[i] === opt) {
                style = "border-blue-400 text-blue-300 bg-blue-500/20";
              }
              return (
                <button 
                  key={opt} 
                  className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${style}`} 
                  onClick={() => { 
                    if (!checked) { 
                      const n = [...selected]; 
                      n[i] = opt; 
                      setSelected(n); 
                    }
                  }}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <div className="text-center space-y-4">
        <button 
          onClick={() => setChecked(true)} 
          className="glass-button px-8 py-3 rounded-xl text-white font-semibold transition-all duration-300"
        >
          Verificar Respuestas
        </button>
        
        {checked && (
          <div className="glass rounded-xl p-6 text-center">
            <p className="text-xl font-bold text-white mb-2">
              {correct}/{questions.length} respuestas correctas
            </p>
            <p className="text-white/70">
              {correct >= questions.length * 0.8 ? 
                "¡Excelente trabajo! Dominas el Lazy Loading" : 
                "¡Buen intento! Repasa los conceptos clave"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestEjercicio2;