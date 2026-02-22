import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

const Home = lazy(() => import("./Pages/Home"));
const Ejercicio1 = lazy(() => import("./Pages/Ejercicio1"));
const Ejercicio2 = lazy(() => import("./Pages/Ejercicio2"));
const Ejercicio3 = lazy(() => import("./Pages/Ejercicio3"));
const Ejercicio4 = lazy(() => import("./Pages/Ejercicio4"));
const Ejercicio5 = lazy(() => import("./Pages/Ejercicio5"));

function App() {
  return (
    <div className="min-h-screen relative">
      <Router>
        <Navbar />
        <div className="fixed top-8 right-8 z-50">
          <ThemeToggle />
        </div>
        <main className="relative z-10">
          <Suspense 
            fallback={
              <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white/80 dark:bg-white/10 backdrop-blur-xl border border-gray-200 dark:border-white/20 rounded-3xl p-12 text-center max-w-sm mx-auto">
                  <div className="w-16 h-16 border-4 border-transparent border-t-accent-primary rounded-full animate-spin mx-auto mb-6" />
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-slate-700 to-slate-900 dark:from-white dark:to-gray-200 bg-clip-text text-transparent mb-2">Loading Experience</h3>
                  <p className="text-slate-600 dark:text-white/60 text-sm">Preparing your workspace...</p>
                </div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ejercicio1" element={<Ejercicio1 />} />
              <Route path="/ejercicio2" element={<Ejercicio2 />} />
              <Route path="/ejercicio3" element={<Ejercicio3 />} />
              <Route path="/ejercicio4" element={<Ejercicio4 />} />
              <Route path="/ejercicio5" element={<Ejercicio5 />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;