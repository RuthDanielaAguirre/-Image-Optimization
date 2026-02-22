const Home = () => {
  const features = [
    {
      title: "Image Optimization",
      description: "Advanced format conversion and compression analysis",
      icon: "◈",
      gradient: "from-blue-400 to-blue-600",
      delay: "0ms"
    },
    {
      title: "Lazy Loading",
      description: "Progressive image loading with Intersection Observer",
      icon: "◆",
      gradient: "from-purple-400 to-purple-600",
      delay: "100ms"
    },
    {
      title: "Canvas Manipulation",
      description: "Real-time image filters and pixel-level editing",
      icon: "◇",
      gradient: "from-emerald-400 to-emerald-600",
      delay: "200ms"
    },
    {
      title: "Figma Integration",
      description: "Design-to-code workflow with React components",
      icon: "◐",
      gradient: "from-orange-400 to-orange-600",
      delay: "300ms"
    },
    {
      title: "Interactive Tutorial",
      description: "Comprehensive learning experience with documentation",
      icon: "◑",
      gradient: "from-pink-400 to-pink-600",
      delay: "400ms"
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-8">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-3 mb-6 px-4 py-2 bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-white/10">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium tracking-wide force-light-text-secondary">ADVANCED IMAGE SUITE</span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="force-light-text">Image</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Optimization</span>
          </h1>
          
          <p className="text-xl max-w-2xl mx-auto leading-relaxed font-medium force-light-text-secondary">
            Master advanced image optimization techniques with our comprehensive suite of tools and interactive learning experiences.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-8 rounded-3xl hover:scale-105 transition-all duration-700 cursor-pointer animate-slide-up"
              style={{ animationDelay: feature.delay }}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white text-xl font-bold group-hover:rotate-6 transition-transform duration-500`}>
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 force-light-text">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed force-light-text-secondary">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex items-center text-accent-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Explore</span>
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '500ms' }}>
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold force-light-text mb-6">
              Ready to optimize your images?
            </h2>
            <p className="text-lg mb-8 leading-relaxed force-light-text-secondary">
              Start with any exercise and discover the power of modern image optimization techniques.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 px-8 py-4 rounded-2xl text-white font-semibold backdrop-blur-xl border border-indigo-400 dark:border-indigo-500 transition-all duration-300 hover:scale-105">
                Start Learning
              </button>
              <button className="px-8 py-4 rounded-2xl text-slate-700 dark:text-white/70 font-semibold border border-gray-300 dark:border-white/20 hover:border-gray-400 dark:hover:border-white/40 bg-white/50 dark:bg-white/5 backdrop-blur-xl transition-colors duration-300">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;