
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Trash2, MinusIcon, PlusIcon, ArrowRight } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const { items, removeItem, updateQuantity, clearCart, totalPrice } = useCart();

  const handleCheckout = () => {
    // In a real application, this would navigate to checkout
    // For now, we'll just show a success message
    alert('Checkout functionality would be implemented here!');
  };

  if (items.length === 0) {
    return (
      <div className="py-16">
        <div className="container-custom text-center">
          <h1 className="text-3xl font-bold text-shop-navy mb-6">Your Cart</h1>
          <p className="text-xl text-gray-600 mb-8">Your cart is currently empty.</p>
          <Button 
            className="bg-shop-purple hover:bg-shop-purple/90"
            onClick={() => navigate('/products')}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="container-custom">
        <h1 className="text-3xl font-bold text-shop-navy mb-8">Your Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 text-gray-600 font-medium">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-center">Total</div>
              </div>
              
              <div className="divide-y">
                {items.map((item) => (
                  <div key={item.product.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 items-center">
                    {/* Product */}
                    <div className="col-span-6 flex items-center gap-4">
                      <div className="w-20 h-20 shrink-0">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div>
                        <Link to={`/product/${item.product.id}`} className="font-medium hover:text-shop-purple">
                          {item.product.name}
                        </Link>
                        <p className="text-sm text-gray-500">{item.product.category}</p>
                      </div>
                    </div>
                    
                    {/* Price - Mobile */}
                    <div className="md:hidden flex justify-between items-center">
                      <span className="text-gray-600">Price:</span>
                      <span>${item.product.price.toFixed(2)}</span>
                    </div>
                    
                    {/* Desktop Price */}
                    <div className="hidden md:block col-span-2 text-center">
                      ${item.product.price.toFixed(2)}
                    </div>
                    
                    {/* Quantity - Mobile */}
                    <div className="md:hidden flex justify-between items-center">
                      <span className="text-gray-600">Quantity:</span>
                      <div className="flex items-center border rounded-md">
                        <button 
                          className="px-2 py-1"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <MinusIcon className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button 
                          className="px-2 py-1"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <PlusIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Desktop Quantity */}
                    <div className="hidden md:flex col-span-2 justify-center items-center">
                      <div className="flex items-center border rounded-md">
                        <button 
                          className="px-2 py-1"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <MinusIcon className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button 
                          className="px-2 py-1"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <PlusIcon className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Total - Mobile */}
                    <div className="md:hidden flex justify-between items-center">
                      <span className="text-gray-600">Total:</span>
                      <span className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                    </div>
                    
                    {/* Desktop Total */}
                    <div className="hidden md:block col-span-2 text-center font-medium">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </div>
                    
                    {/* Remove Button */}
                    <div className="md:hidden flex justify-end">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-gray-500 hover:text-red-500"
                        onClick={() => removeItem(item.product.id)}
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                    
                    <div className="hidden md:flex items-center justify-center">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-gray-500 hover:text-red-500"
                        onClick={() => removeItem(item.product.id)}
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-4 flex justify-between">
              <Button 
                variant="outline" 
                onClick={() => navigate('/products')}
              >
                Continue Shopping
              </Button>
              <Button 
                variant="ghost" 
                className="text-red-500 hover:text-red-600 hover:bg-red-50"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-80 shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="text-shop-purple">${totalPrice.toFixed(2)}</span>
                </div>
              </div>
              
              <Button 
                className="w-full mt-6 bg-shop-purple hover:bg-shop-purple/90 flex items-center justify-center gap-2"
                onClick={handleCheckout}
              >
                Proceed to Checkout
                <ArrowRight className="h-4 w-4" />
              </Button>
              
              <div className="mt-6 text-sm text-gray-500 text-center">
                <p>We accept secure payment methods</p>
                <div className="flex justify-center gap-2 mt-2">
                  <span className="bg-gray-200 px-2 py-1 rounded">Visa</span>
                  <span className="bg-gray-200 px-2 py-1 rounded">MasterCard</span>
                  <span className="bg-gray-200 px-2 py-1 rounded">PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
