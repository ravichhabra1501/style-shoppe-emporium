
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MinusIcon, PlusIcon, ShoppingCart } from 'lucide-react';
import { getProductById } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = productId ? getProductById(productId) : undefined;
  
  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-8">Sorry, the product you're looking for doesn't exist.</p>
        <Button onClick={() => navigate('/products')}>
          Continue Shopping
        </Button>
      </div>
    );
  }

  const incrementQuantity = () => {
    setQuantity(q => q + 1);
  };

  const decrementQuantity = () => {
    setQuantity(q => (q > 1 ? q - 1 : 1));
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  // Get related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="py-8">
      <div className="container-custom">
        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product Image */}
          <div className="rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover"
              style={{ aspectRatio: '1/1' }}
            />
          </div>
          
          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-shop-navy mb-2">{product.name}</h1>
            <p className="text-2xl font-semibold text-shop-purple mb-4">
              ${product.price.toFixed(2)}
            </p>
            <div className="border-t border-b py-6 my-4">
              <p className="text-gray-700 mb-6">
                {product.description}
              </p>

              {/* Quantity Selector */}
              <div className="flex items-center mb-6">
                <span className="mr-4 font-medium">Quantity:</span>
                <div className="flex items-center border rounded-md">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-10 w-10 rounded-none"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                  >
                    <MinusIcon className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-10 w-10 rounded-none"
                    onClick={incrementQuantity}
                  >
                    <PlusIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Add to Cart Button */}
              <Button 
                className="w-full md:w-auto bg-shop-purple hover:bg-shop-purple/90"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </div>
            
            {/* Additional Info */}
            <div className="mt-auto">
              <p className="text-gray-700 mb-1">
                <span className="font-medium">Category:</span> {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">SKU:</span> {product.id}-{product.category.slice(0, 3).toUpperCase()}
              </p>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-shop-navy mb-6">You May Also Like</h2>
            <div className="product-grid">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
