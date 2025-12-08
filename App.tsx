import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import AIChat from './components/AIChat';
import { PRODUCTS, BUSINESS_NAME, BUSINESS_ADDRESS, BUSINESS_PHONE, BUSINESS_WHATSAPP } from './constants';
import { Category } from './types';
import { MapPin, Phone, MessageCircle, Clock, Mail } from 'lucide-react';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      <main>
        <Hero />

        {/* Catalog Section */}
        <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-stone-900">Curated Collection</h2>
              <p className="mt-2 text-stone-500">Hand-picked items for your sanctuary.</p>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === 'All'
                    ? 'bg-stone-900 text-white'
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-400'
                }`}
              >
                All
              </button>
              {Object.values(Category).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? 'bg-stone-900 text-white'
                      : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 xl:gap-x-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-stone-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </section>

        {/* Location & Contact Section */}
        <section id="contact" className="bg-white border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-stone-900 mb-6">Visit Our Showroom</h2>
                  <p className="text-stone-600 text-lg leading-relaxed">
                    Experience the texture and quality of our pieces in person. Our design consultants are ready to help you create your dream space.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-50 p-3 rounded-lg text-amber-700">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-900">Address</h3>
                      <p className="text-stone-600">{BUSINESS_ADDRESS}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-amber-50 p-3 rounded-lg text-amber-700">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-900">Hours</h3>
                      <p className="text-stone-600">Mon - Fri: 10:00 AM - 7:00 PM</p>
                      <p className="text-stone-600">Sat - Sun: 11:00 AM - 5:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-amber-50 p-3 rounded-lg text-amber-700">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-900">Contact</h3>
                      <p className="text-stone-600">Phone: {BUSINESS_PHONE}</p>
                      <p className="text-stone-600">Email: hello@luminahome.com</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                   <a 
                    href={`https://wa.me/${BUSINESS_WHATSAPP}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white hover:bg-green-700 py-4 px-6 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                   <a 
                    href={`tel:${BUSINESS_PHONE}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-stone-900 text-white hover:bg-stone-800 py-4 px-6 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl"
                  >
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-96 lg:h-full w-full bg-stone-200 rounded-2xl overflow-hidden shadow-inner relative group">
                {/* 
                  In a real app, this would be a Google Maps iframe or library. 
                  Using an image placeholder for aesthetic integrity in this demo. 
                */}
                <img 
                  src="https://picsum.photos/id/1015/1000/1000" 
                  alt="Map Location"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-xl shadow-lg flex items-center gap-2">
                    <MapPin className="text-red-500 h-6 w-6" />
                    <span className="font-bold text-stone-900">We are here</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-stone-900 text-stone-400 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-white mb-2">{BUSINESS_NAME}</h2>
              <p className="text-sm">Timeless design for modern living.</p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Shipping Info</a>
            </div>
            <p className="text-sm">&copy; {new Date().getFullYear()} Lumina Home.</p>
          </div>
        </footer>
      </main>

      {/* AI Assistant Widget */}
      <AIChat />
    </div>
  );
};

export default App;