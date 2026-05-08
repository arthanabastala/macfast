import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4 ${
        scrolled ? 'bg-mac-cream/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img src="/logomac.png" alt="MAC Logo" className="h-10 w-auto object-contain" />
          <span className="text-sm text-mac-forest/70 font-semibold uppercase tracking-wider">PT.MAC GLOBAL NUSANTARA</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-mac-forest/70 hover:text-mac-forest font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/something"
            className="bg-mac-orange hover:opacity-90 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-mac-orange/40"
          >
            Order Sekarang
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-mac-forest p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl flex flex-col p-6 gap-4 border-t border-gray-100 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-mac-forest py-2 border-b border-gray-100"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/something"
              className="mt-4 bg-mac-orange text-center text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-md"
            >
              Order Sekarang
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
