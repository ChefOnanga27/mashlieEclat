import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, LogIn } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-gradient-to-r from-amber-900 to-amber-800 shadow-lg">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.jpg" alt="logo" className="h-10 w-10 rounded-full shadow-md" />
            <span className="text-2xl font-bold text-amber-100">MachlieEclat</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-amber-100 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="text-amber-100 hover:text-white transition-colors"
            >
              Accueil
            </Link>
            <Link
              to="/products"
              className="text-amber-100 hover:text-white transition-colors"
            >
              Produits
            </Link>
            <Link
              to="/about"
              className="text-amber-100 hover:text-white transition-colors"
            >
              À Propos
            </Link>
            <Link
              to="/contact"
              className="text-amber-100 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Auth buttons - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/login"
              className="flex items-center gap-2 px-4 py-2 text-amber-100 hover:text-white transition-colors"
            >
              <LogIn className="h-5 w-5" />
              <span>Connexion</span>
            </Link>
            <Link
              to="/register"
              className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-400 transition-all shadow-md hover:shadow-lg"
            >
              <User className="h-5 w-5" />
              <span>Inscription</span>
            </Link>
          </div>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-amber-700">
            <Link
              to="/"
              className="block text-amber-100 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/products"
              className="block text-amber-100 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Produits
            </Link>
            <Link
              to="/about"
              className="block text-amber-100 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              À Propos
            </Link>
            <Link
              to="/contact"
              className="block text-amber-100 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Auth buttons - Mobile */}
            <div className="flex flex-col gap-3 pt-4 border-t border-amber-700">
              <Link
                to="/login"
                className="flex items-center justify-center gap-2 px-4 py-2 text-amber-100 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <LogIn className="h-5 w-5" />
                <span>Connexion</span>
              </Link>
              <Link
                to="/register"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-400 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="h-5 w-5" />
                <span>Inscription</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}