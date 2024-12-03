import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-black shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
          <img src="/logo.jpg" alt="logo" className="h-6 w-6 justify-around" />
            <span className="text-xl font-bold text-white">MachlieEclat</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-white hover:text-green-500 transition">
              Accueil
            </Link>
            <Link
              to="/products"
              className="text-white hover:text-green-500 transition"
            >
              Produits
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-green-500 transition"
            >
              À Propos
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-green-500 transition"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            >
              Connexion
            </Link>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              to="/"
              className="block text-white hover:text-green-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/products"
              className="block text-white hover:text-green-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Produits
            </Link>
            <Link
              to="/about"
              className="block text-white hover:text-green-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              À Propos
            </Link>
            <Link
              to="/contact"
              className="block text-white hover:text-green-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="block px-4 py-2 bg-green-500 text-white rounded-md text-center hover:bg-green-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Connexion
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
