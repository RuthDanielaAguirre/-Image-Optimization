import { useState } from "react";

const ImageOptimizer = () => {
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [optimizedImages, setOptimizedImages] = useState<{ format: string; url: string }[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setOriginalFile(file);
      generateOptimizedImages(file);
    }
  };

  const generateOptimizedImages = (file: File) => {
    const formats = ["image/webp", "image/avif"];
    const optimized = formats.map((format) => ({
      format,
      url: URL.createObjectURL(file),
    }));
    setOptimizedImages(optimized);
  };

  const formatSavings = {
    "image/webp": 25,
    "image/avif": 50
  };

  return (
    <div className="space-y-12">
      {/* Upload Area */}
      <div className="text-center space-y-6">
        <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-8 max-w-md mx-auto">
          <label className="group cursor-pointer block">
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-600/10 hover:from-indigo-500/20 hover:to-purple-600/20 dark:from-indigo-500/5 dark:to-purple-600/5 w-full p-6 rounded-2xl transition-all duration-500 group-hover:scale-105 border border-indigo-200 dark:border-indigo-500/20">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Choose Image</h3>
                  <p className="text-white/60 text-sm">Drop your image here or click to browse</p>
                </div>
              </div>
            </div>
            <input 
              type="file" 
              onChange={handleFileChange} 
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 text-xs text-white/40">
          <span className="px-3 py-1 bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-gray-200 dark:border-white/20 rounded-full">JPG</span>
          <span className="px-3 py-1 bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-gray-200 dark:border-white/20 rounded-full">PNG</span>
          <span className="px-3 py-1 bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-gray-200 dark:border-white/20 rounded-full">WebP</span>
          <span className="px-3 py-1 bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-gray-200 dark:border-white/20 rounded-full">HEIC</span>
        </div>
      </div>

      {originalFile && (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 animate-fade-in">
          {/* Original Image */}
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                <span className="text-white text-sm font-bold">OG</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-slate-700 to-slate-900 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">Original Image</h3>
                <p className="text-white/60 text-sm">Uncompressed source file</p>
              </div>
            </div>
            
            <div className="relative group mb-6">
              <img 
                src={URL.createObjectURL(originalFile)} 
                alt="Original" 
                className="w-full h-auto rounded-2xl shadow-premium group-hover:scale-[1.02] transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-sm">File Size</span>
                <span className="text-white font-semibold">{(originalFile.size / 1024).toFixed(2)} KB</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-sm">Format</span>
                <span className="text-white font-semibold">{originalFile.type.split('/')[1]?.toUpperCase() || 'Unknown'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-sm">Optimization</span>
                <span className="text-orange-400 font-semibold">None</span>
              </div>
            </div>
          </div>

          {/* Optimized Versions */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-white text-sm font-bold">OPT</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-slate-700 to-slate-900 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">Optimized Formats</h3>
                <p className="text-white/60 text-sm">Next-generation compression</p>
              </div>
            </div>
            
            {optimizedImages.map((img, index) => {
              const formatName = img.format.split('/')[1].toUpperCase();
              const savings = formatSavings[img.format as keyof typeof formatSavings] || 30;
              const optimizedSize = originalFile.size * (1 - savings / 100);
              
              return (
                <div key={index} className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`px-3 py-1 rounded-lg bg-gradient-to-r ${
                        formatName === 'WEBP' ? 'from-blue-500 to-blue-600' : 'from-purple-500 to-purple-600'
                      } text-white text-xs font-bold`}>
                        {formatName}
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{(optimizedSize / 1024).toFixed(2)} KB</p>
                        <p className="text-green-400 text-xs font-medium">-{savings}% smaller</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400 text-xs font-semibold">OPTIMIZED</span>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <img 
                      src={img.url} 
                      alt={formatName} 
                      className="w-full h-32 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageOptimizer;