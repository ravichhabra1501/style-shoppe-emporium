
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Filter, ChevronDown } from 'lucide-react';
import { products, getProductsByCategory } from '@/data/products';

const ProductListing = () => {
  const { categoryId } = useParams<{ categoryId?: string }>();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 1000 });
  const [sortBy, setSortBy] = useState<string>('default');

  useEffect(() => {
    let result = categoryId ? getProductsByCategory(categoryId) : products;
    
    // Apply price filter
    result = result.filter(product => 
      product.price >= priceRange.min && product.price <= priceRange.max
    );
    
    // Apply sorting
    if (sortBy === 'price-asc') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result = [...result].sort((a, b) => b.price - a.price);
    }
    
    setFilteredProducts(result);
  }, [categoryId, priceRange, sortBy]);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'min' | 'max') => {
    const value = parseFloat(e.target.value);
    setPriceRange(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const categoryTitle = categoryId 
    ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1) 
    : 'All Products';

  return (
    <div className="min-h-screen py-8">
      <div className="container-custom">
        <h1 className="text-3xl font-bold text-shop-navy mb-8">{categoryTitle}</h1>
        
        <div className="flex flex-col md:flex-row justify-between mb-6">
          {/* Mobile Filter Toggle */}
          <Button 
            variant="outline" 
            className="flex md:hidden items-center gap-2 mb-4 md:mb-0"
            onClick={toggleFilter}
          >
            <Filter className="h-4 w-4" />
            Filter & Sort
            <ChevronDown className={`h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
          </Button>
          
          {/* Product Count */}
          <p className="text-gray-500 mb-4 md:mb-0">
            Showing {filteredProducts.length} products
          </p>
          
          {/* Desktop Sort */}
          <div className="hidden md:block">
            <select 
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-shop-purple"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="default">Sort by: Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
        
        {/* Mobile Filter Panel */}
        {isFilterOpen && (
          <div className="md:hidden bg-white p-4 rounded-md shadow-md mb-6">
            <div className="mb-4">
              <h3 className="font-medium mb-2">Sort By</h3>
              <select 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-shop-purple"
                value={sortBy}
                onChange={handleSortChange}
              >
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Price Range</h3>
              <div className="flex gap-2 items-center">
                <input 
                  type="number" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-shop-purple" 
                  placeholder="Min"
                  value={priceRange.min}
                  onChange={(e) => handlePriceChange(e, 'min')}
                  min={0}
                />
                <span>to</span>
                <input 
                  type="number" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-shop-purple" 
                  placeholder="Max"
                  value={priceRange.max}
                  onChange={(e) => handlePriceChange(e, 'max')}
                  min={priceRange.min}
                />
              </div>
            </div>
          </div>
        )}
        
        {/* Desktop Sidebar and Product Grid */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Filter Sidebar */}
          <div className="hidden md:block w-64 shrink-0">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-medium mb-4">Price Range</h3>
              <div className="space-y-2">
                <div className="flex flex-col">
                  <label className="text-sm text-gray-500 mb-1">Min Price</label>
                  <input 
                    type="range" 
                    min={0} 
                    max={1000} 
                    value={priceRange.min}
                    onChange={(e) => handlePriceChange(e, 'min')}
                    className="w-full"
                  />
                  <span className="text-sm">${priceRange.min}</span>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-500 mb-1">Max Price</label>
                  <input 
                    type="range" 
                    min={priceRange.min} 
                    max={1000} 
                    value={priceRange.max}
                    onChange={(e) => handlePriceChange(e, 'max')}
                    className="w-full"
                  />
                  <span className="text-sm">${priceRange.max}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="product-grid">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-500">No products found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
