'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center"
            >
              <div className={`w-24 sm:w-32 h-8 sm:h-10 relative ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <g id="rice-leaf-logo">
                    <path d="M15 12C19 12 25 15 25 23C25 25 24 28 20 30C16 32 12 31 10 29C8 27 7 24 8 21C9 18 12 16 15 16" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round"/>
                    <path d="M20 15C22 17 22 21 20 23C18 25 15 25 13 23C11 21 11 17 13 15C15 13 18 13 20 15Z" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2"/>
                    <circle cx="16" cy="19" r="1" fill="currentColor"/>
                  </g>
                  <g id="company-name" fill="currentColor">
                    <text x="35" y="26" fontFamily="Arial" fontSize="18" fontWeight="bold" letterSpacing="1">진향미</text>
                  </g>
                  <path d="M35 28L100 28" stroke="currentColor" strokeWidth="1" strokeDasharray="1 3"/>
                </svg>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavButton onClick={() => scrollToSection('about')} scrolled={scrolled}>회사 소개</NavButton>
              <NavButton onClick={() => scrollToSection('products')} scrolled={scrolled}>제품 소개</NavButton>
              <NavButton onClick={() => scrollToSection('distribution')} scrolled={scrolled}>유통망</NavButton>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
            >
              <div className={`w-6 h-0.5 mb-1.5 ${scrolled ? 'bg-gray-800' : 'bg-white'}`}></div>
              <div className={`w-6 h-0.5 mb-1.5 ${scrolled ? 'bg-gray-800' : 'bg-white'}`}></div>
              <div className={`w-6 h-0.5 ${scrolled ? 'bg-gray-800' : 'bg-white'}`}></div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 md:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-64 bg-white shadow-lg"
            >
              <div className="p-4">
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition absolute right-4 top-4"
                >
                  <IoClose size={24} />
                </button>
                <div className="mt-16">
                  <nav className="flex flex-col space-y-4">
                    <MobileNavButton onClick={() => scrollToSection('about')}>
                      회사 소개
                    </MobileNavButton>
                    <MobileNavButton onClick={() => scrollToSection('products')}>
                      제품 소개
                    </MobileNavButton>
                    <MobileNavButton onClick={() => scrollToSection('distribution')}>
                      유통망
                    </MobileNavButton>
                  </nav>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavButton({ onClick, children, scrolled }) {
  return (
    <button 
      onClick={onClick}
      className={`relative text-sm sm:text-base group ${scrolled ? 'text-gray-800' : 'text-white'}`}
    >
      {children}
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
    </button>
  );
}

function MobileNavButton({ onClick, children }) {
  return (
    <button 
      onClick={onClick}
      className="block w-full px-4 py-3 text-left text-lg text-gray-800 hover:bg-gray-100 rounded-lg transition"
    >
      {children}
    </button>
  );
}
