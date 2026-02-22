import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navigation = [
    { to: "/", label: "Home", icon: "◉" },
    { to: "/ejercicio1", label: "Optimization", icon: "◈" },
    { to: "/ejercicio2", label: "Lazy Load", icon: "◆" },
    { to: "/ejercicio3", label: "Canvas", icon: "◇" },
    { to: "/ejercicio4", label: "Figma", icon: "◐" },
    { to: "/ejercicio5", label: "Tutorial", icon: "◑" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/10 dark:bg-black/40 backdrop-blur-xl border-b border-white/20 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
              <span className="text-white text-sm font-bold">IM</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold force-light-text tracking-tight">
                Image Optimization
              </h1>
              <p className="text-xs font-medium tracking-wide force-light-text-secondary">ADVANCED SUITE</p>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`group relative px-4 py-2 rounded-xl font-medium transition-all duration-500 flex items-center space-x-3 ${
                    isActive 
                      ? 'force-light-text bg-white/20 border border-white/30' 
                      : 'force-light-text-secondary hover:bg-white/10 hover:force-light-text'
                  }`}
                >
                  <span className="text-white group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium">{item.label}</span>
                  {isActive && (
                    <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;