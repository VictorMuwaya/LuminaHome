import React from 'react';
import { Leaf, PenTool, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative mb-12 lg:mb-0">
             <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&w=800&q=80"
                  alt="Artisan working on furniture"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
             </div>
             {/* Decorative elements */}
             <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-stone-100 rounded-full -z-10"></div>
             <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-50 rounded-full -z-10"></div>
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-sm font-bold text-amber-600 tracking-wide uppercase mb-3">Our Story</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 leading-tight">
              Crafting homes that tell your story.
            </h3>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              Founded in 2020, Lumina Home began with a simple philosophy: furniture should be as functional as it is beautiful. We collaborate with independent artisans to bring you pieces that stand the test of time, both in style and durability.
            </p>
            <p className="text-lg text-stone-600 mb-10 leading-relaxed">
              We believe in sustainable practices, fair wages, and the beauty of natural materials. Every curve, joint, and stitch is considered to ensure your home feels uniquely yours.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-stone-100 pt-8">
              <div className="flex flex-col gap-3 group">
                <div className="w-12 h-12 bg-stone-100 group-hover:bg-stone-900 transition-colors duration-300 rounded-full flex items-center justify-center text-stone-900 group-hover:text-white">
                   <Leaf size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900">Sustainable</h4>
                  <p className="text-sm text-stone-500">Ethically sourced.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 group">
                <div className="w-12 h-12 bg-stone-100 group-hover:bg-stone-900 transition-colors duration-300 rounded-full flex items-center justify-center text-stone-900 group-hover:text-white">
                   <PenTool size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900">Handcrafted</h4>
                  <p className="text-sm text-stone-500">Skilled artisans.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 group">
                 <div className="w-12 h-12 bg-stone-100 group-hover:bg-stone-900 transition-colors duration-300 rounded-full flex items-center justify-center text-stone-900 group-hover:text-white">
                   <Heart size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900">Passion</h4>
                  <p className="text-sm text-stone-500">Made with love.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;