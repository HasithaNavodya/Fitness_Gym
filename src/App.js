import React, { useState, useRef, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About  from './Components/About';
import Services from './Components/Services'
import Contact from './Components/Contact';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const scrollToSection = (section) => {
    if (section === 'about') aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'services') servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'contact') contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <div className={isDark ? 'dark' : ''}>
        <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-900 transition-colors duration-300 text-center">
          <div className="p-12 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-blue-500 mx-4">
            <div className="text-6xl mb-4">🚀</div>
            <h2 className="text-2xl font-bold dark:text-white">Thank you for joining!</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Our team will contact you within 24 hours.</p>
            <button onClick={() => setIsSubmitted(false)} className="mt-8 text-blue-600 font-bold hover:underline">Back to Home</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={isDark ? 'dark' : ''}>
      <main className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Navbar 
          onNavClick={scrollToSection} 
          isDark={isDark} 
          setIsDark={setIsDark} 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
        />
        
        <Hero onJoinClick={() => scrollToSection('contact')} />
        
        <div ref={aboutRef}>
          <About />
        </div>
        
        <div ref={servicesRef}>
          <Services />
        </div>
        
        <div ref={contactRef}>
          <Contact onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }} />
        </div>

        <footer className="py-10 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900">
         <small>© 2026 Fitness Gym. All Rights Reserved.</small>
        </footer>
      </main>
    </div>
  );
}

export default App;