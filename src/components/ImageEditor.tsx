import { useRef, useState } from "react";

const ImageEditor = () => {
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) { 
      setFileName(file.name);
      const r = new FileReader(); 
      r.onload = () => setImage(r.result as string); 
      r.readAsDataURL(file); 
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const applyFilter = (filter: string) => {
    const canvas = canvasRef.current;
    if (!canvas || !image) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = new Image();
    img.src = image;
    img.onload = () => {
      canvas.width = img.width / 2;
      canvas.height = img.height / 2;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        if (filter === "grayscale") {
          const avg = (data[i] + data[i+1] + data[i+2]) / 3;
          data[i] = data[i+1] = data[i+2] = avg;
        } else if (filter === "invert") {
          data[i] = 255 - data[i]; data[i+1] = 255 - data[i+1]; data[i+2] = 255 - data[i+2];
        } else if (filter === "brightness") {
          data[i] = Math.min(255, data[i] + 60);
          data[i+1] = Math.min(255, data[i+1] + 60);
          data[i+2] = Math.min(255, data[i+2] + 60);
        }
      }
      ctx.putImageData(imageData, 0, 0);
    };
  };

  return (
    <div className="text-center p-4">
      {/* Input oculto */}
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageUpload} 
        className="hidden" 
        ref={fileInputRef}
      />
      
      {/* Botón personalizado para seleccionar archivo */}
      <div 
        onClick={triggerFileInput}
        className="inline-flex flex-col items-center justify-center w-80 h-32 cursor-pointer bg-white/10 hover:bg-white/20 border-2 border-dashed border-white/30 hover:border-white/50 rounded-xl transition-all duration-300 mb-6 group"
      >
        <div className="flex items-center space-x-3">
          <svg className="w-8 h-8 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <div>
            <p className="text-white font-medium group-hover:text-white/90 transition-colors duration-300">
              {fileName ? 'Cambiar imagen' : 'Seleccionar archivo'}
            </p>
            <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors duration-300">
              {fileName || 'Ningún archivo seleccionado'}
            </p>
          </div>
        </div>
      </div>
      {image && (
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <button onClick={() => applyFilter("grayscale")} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">🔲 Escala de Grises</button>
          <button onClick={() => applyFilter("invert")} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">🔄 Invertir Colores</button>
          <button onClick={() => applyFilter("brightness")} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">☀️ Brillo</button>
          <button onClick={() => { const img = new Image(); img.src = image; img.onload = () => { const c = canvasRef.current!; const ctx = c.getContext("2d")!; c.width = img.width/2; c.height = img.height/2; ctx.drawImage(img, 0, 0, c.width, c.height); }; }} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">↩️ Original</button>
        </div>
      )}
      <canvas ref={canvasRef} className="border mt-4 max-w-full rounded-lg shadow" />
    </div>
  );
};

export default ImageEditor;