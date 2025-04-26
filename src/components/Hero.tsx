
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gray-900">
      {/* Background image */}
      <div 
        className="absolute inset-0 overflow-hidden bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3)', 
          opacity: 0.6
        }}
      />
      
      {/* Content */}
      <div className="relative container-custom py-32 md:py-48 flex items-center">
        <div className="max-w-lg">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Discover Your Perfect Style
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Shop our latest collection of premium fashion, accessories, and more.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-shop-purple hover:bg-shop-purple/90">
              <Link to="/products">
                Shop Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
              <Link to="/products/featured">
                Featured Items
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
