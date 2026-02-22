import { useEffect, useRef, useState } from "react";

const LazyImage = ({ src, alt }: { src: string; alt: string }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setIsVisible(true);
            // Simulate loading progress
            const interval = setInterval(() => {
              setLoadProgress(prev => {
                if (prev >= 100) {
                  clearInterval(interval);
                  return 100;
                }
                return prev + 10;
              });
            }, 50);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (imgRef.current) observer.observe(imgRef.current);
    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, []);

  return (
    <div 
      ref={imgRef} 
      className="bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl min-h-64 flex items-center justify-center overflow-hidden group transition-all duration-500 hover:scale-[1.02]"
    >
      {isVisible ? (
        <div className="relative w-full h-full">
          {!isLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 p-8">
              {/* Loading Animation */}
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-4 border-white/10">
                  <div 
                    className="w-16 h-16 rounded-full border-4 border-transparent border-t-accent-primary transition-all duration-300"
                    style={{
                      transform: `rotate(${loadProgress * 3.6}deg)`,
                      borderTopColor: loadProgress > 50 ? '#8b5cf6' : '#6366f1'
                    }}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/80 text-xs font-bold">{loadProgress}%</span>
                </div>
              </div>
              
              {/* Loading Text */}
              <div className="text-center space-y-2">
                <h4 className="text-white font-semibold">Loading Image</h4>
                <p className="text-white/60 text-sm">Optimizing for best quality...</p>
              </div>
              
              {/* Progress Bar */}
              <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary transition-all duration-300 ease-out"
                  style={{ width: `${loadProgress}%` }}
                />
              </div>
            </div>
          )}
          
          <img 
            src={src} 
            alt={alt} 
            className={`w-full h-auto rounded-xl transition-all duration-700 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            onLoad={() => {
              setIsLoaded(true);
              setLoadProgress(100);
            }}
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Image info overlay */}
          {isLoaded && (
            <div className="absolute bottom-4 left-4 right-4 bg-white/80 dark:bg-white/10 backdrop-blur-xl border border-gray-200 dark:border-white/20 rounded-xl p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm font-medium truncate">{alt}</p>
              <p className="text-white/60 text-xs">Lazy loaded • Optimized</p>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-6 p-8">
          {/* Waiting State */}
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-gray-200 dark:border-white/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
            </div>
            <div className="absolute -inset-2 rounded-full border border-white/20 animate-ping" />
          </div>
          
          <div className="text-center space-y-2">
            <h4 className="text-white/80 font-medium">Awaiting Visibility</h4>
            <p className="text-white/50 text-sm">Image will load when in viewport</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;