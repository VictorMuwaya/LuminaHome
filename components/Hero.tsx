import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-stone-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-60"
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80"
          alt="Modern interior"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
          Elevate Your Living Space
        </h1>
        <p className="mt-6 text-xl text-stone-200 max-w-3xl drop-shadow-md">
          Discover a curated collection of modern minimalist furniture and home decor. Designed for life, crafted for you.
        </p>
        <div className="mt-10">
          <a
            href="#products"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-stone-900 bg-amber-50 hover:bg-white hover:scale-105 transition-all duration-200 shadow-xl"
          >
            Shop Collection
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;