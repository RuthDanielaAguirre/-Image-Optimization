import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false); // SIEMPRE empezar en modo claro

  useEffect(() => {
    const applyTheme = () => {
      const allElements = document.querySelectorAll('*[style*="color"]');
      const isDark = darkMode;
      
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        // Force update all text colors
        setTimeout(() => {
          document.body.style.color = '#1e293b';
        }, 10);
      }
    };
    
    applyTheme();
  }, [darkMode]);

  return (
    <button
      className="group bg-white/80 dark:bg-white/10 backdrop-blur-xl border border-gray-200 dark:border-white/20 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-110"
      onClick={() => setDarkMode(!darkMode)}
    >
      <div className="relative w-6 h-6 overflow-hidden">
        <div className={`absolute inset-0 transition-all duration-500 ${
          darkMode ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-6 opacity-0'
        }`}>
          <svg className="w-full h-full text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div className={`absolute inset-0 transition-all duration-500 ${
          darkMode ? 'transform translate-y-6 opacity-0' : 'transform translate-y-0 opacity-100'
        }`}>
          <svg className="w-full h-full text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;