import LazyImage from "../components/LazyImage";
import TestEjercicio2 from "../components/tests/TestEjercicio2";

const images = [
  "https://picsum.photos/seed/a/600/400",
  "https://picsum.photos/seed/b/600/400", 
  "https://picsum.photos/seed/c/600/400",
  "https://picsum.photos/seed/d/600/400",
  "https://picsum.photos/seed/e/600/400",
  "https://picsum.photos/seed/f/600/400",
];

const Ejercicio2 = () => (
  <div className="min-h-screen pt-32 pb-20">
    <div className="max-w-6xl mx-auto px-8">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in">
        <div className="inline-flex items-center space-x-3 mb-6 px-4 py-2 bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-white/10">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
            <span className="text-white text-sm font-bold">◆</span>
          </div>
          <span className="text-sm font-medium text-slate-500 dark:text-white/60 tracking-wide">EXERCISE 02</span>
        </div>
        
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-slate-700 to-slate-900 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">Lazy</span>
          <br />
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Loading</span>
        </h1>
        
        <p className="text-xl text-slate-600 dark:text-white/60 max-w-3xl mx-auto leading-relaxed font-medium mb-8">
          Experience progressive image loading with the Intersection Observer API. Images load only when they become visible in the viewport.
        </p>
        
        <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
          <span className="text-slate-600 dark:text-white/60 text-sm font-medium">Scroll down to see the lazy loading effect</span>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-12 mb-16 animate-slide-up">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((src, i) => (
            <div key={i} className="space-y-4">
              <LazyImage src={src} alt={`Optimized image ${i + 1}`} />
              <div className="text-center">
                <span className="text-white/40 text-sm font-medium tracking-wide">
                  IMAGE {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Assessment */}
      <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-12 animate-slide-up" style={{ animationDelay: '200ms' }}>
        <TestEjercicio2 />
      </div>
    </div>
  </div>
);

export default Ejercicio2;