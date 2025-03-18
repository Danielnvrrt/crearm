import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-primary">
          Crearm
        </a>

        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors ${
                isScrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-white hover:text-primary-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-background">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

const navLinks = [
  { label: 'Inicio', href: '#' },
  { label: 'Servicios', href: '#services' },
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Donde Estamos', href: '#location' },
  { label: 'Testimonios', href: '#why-choose-us' },
  { label: 'Contacto', href: '#contact' },
];
