
import React from 'react';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { categories, getFeaturedProducts } from '@/data/products';

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      
      {/* Categories Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-shop-navy mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard 
                key={category.id} 
                id={category.id} 
                name={category.name} 
                image={category.image} 
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-12 bg-shop-light-gray">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-shop-navy">Featured Products</h2>
            <Button asChild variant="outline">
              <Link to="/products">View All</Link>
            </Button>
          </div>
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter/Promotion */}
      <section className="py-16 bg-shop-soft-purple">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-shop-navy mb-4">Join Our Community</h2>
            <p className="text-lg text-gray-700 mb-8">
              Subscribe to our newsletter for exclusive deals, style tips, and new arrivals.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-shop-purple"
              />
              <Button className="bg-shop-purple hover:bg-shop-purple/90 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
