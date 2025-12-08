import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { BUSINESS_NAME } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <ShoppingBag className="h-6 w-6 text-stone-800" />
            <span className="font-bold text-xl tracking-tight text-stone-900">{BUSINESS_NAME}</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#products" className="hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Catalog</a>
              <a href="#about" className="hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
              <a href="#contact" className="hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-800 hover:text-amber-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#products" onClick={() => setIsMenuOpen(false)} className="block hover:bg-stone-50 hover:text-amber-600 px-3 py-2 rounded-md text-base font-medium">Catalog</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block hover:bg-stone-50 hover:text-amber-600 px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block hover:bg-stone-50 hover:text-amber-600 px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;