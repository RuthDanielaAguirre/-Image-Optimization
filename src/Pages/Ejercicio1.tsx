import ImageOptimizer from "../components/ImageOptimizer";

const Ejercicio1 = () => (
  <div className="min-h-screen pt-32 pb-20">
    <div className="max-w-6xl mx-auto px-8">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in">
        <div className="inline-flex items-center space-x-3 mb-6 px-4 py-2 bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-white/10">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <span className="text-white text-sm font-bold">◈</span>
          </div>
          <span className="text-sm font-medium text-slate-500 dark:text-white/60 tracking-wide">EXERCISE 01</span>
        </div>
        
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-slate-700 to-slate-900 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">Image</span>
          <br />
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Optimization</span>
        </h1>
        
        <p className="text-xl text-slate-600 dark:text-white/60 max-w-3xl mx-auto leading-relaxed font-medium">
          Master advanced image optimization techniques. Compare formats, analyze compression rates, and understand the trade-offs between quality and file size.
        </p>
      </div>

      {/* Main Content */}
      <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-12 animate-slide-up">
        <ImageOptimizer />
      </div>
    </div>
  </div>
);

export default Ejercicio1;