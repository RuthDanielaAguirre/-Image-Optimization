import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { jsPDF } from "jspdf";

const MarkdownEditor = () => {
  const [text, setText] = useState(() => localStorage.getItem("tutorialContent") || "## Mis notas\n\nEscribe aquí tus apuntes en Markdown...");

  useEffect(() => { localStorage.setItem("tutorialContent", text); }, [text]);

  const exportToPDF = () => {
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(text, 180);
    doc.text(lines, 10, 10);
    doc.save("Tutorial_Notas.pdf");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const r = new FileReader();
      r.onload = () => setText((prev) => prev + `\n\n![${file.name}](${r.result})`);
      r.readAsDataURL(file);
    }
  };

  return (
    <div className="mt-4">
      <div className="flex flex-wrap gap-2 mb-2">
        <label className="cursor-pointer bg-gray-200 dark:bg-gray-700 px-3 py-1.5 rounded text-sm hover:bg-gray-300">
          📎 Subir imagen
          <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
        </label>
        <button onClick={exportToPDF} className="bg-green-500 text-white px-3 py-1.5 rounded text-sm hover:bg-green-600">
          📄 Exportar PDF
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <textarea
          className="w-full h-60 border p-3 rounded-lg font-mono text-sm bg-white dark:bg-gray-900 dark:text-gray-100"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800 prose dark:prose-invert max-w-none overflow-auto h-60">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;