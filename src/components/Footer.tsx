const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-32 pb-12">
      <div className="max-w-6xl mx-auto px-8">
        <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
                <span className="text-white text-sm font-bold">IM</span>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-lg font-semibold bg-gradient-to-r from-slate-700 to-slate-900 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">Image Optimization Suite</h3>
                <p className="text-slate-500 dark:text-white/40 text-sm font-medium tracking-wide">ADVANCED TOOLS & LEARNING</p>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-8">
              <div className="text-center lg:text-right">
                <p className="text-slate-600 dark:text-white/60 text-sm font-medium">
                  Created by Ruth Daniela Aguirre
                </p>
                <p className="text-slate-500 dark:text-white/40 text-xs font-medium tracking-wide">
                  © {currentYear} • ALL RIGHTS RESERVED
                </p>
              </div>
              
            
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;