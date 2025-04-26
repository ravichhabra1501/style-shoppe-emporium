
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-xl font-bold text-shop-navy">StyleShoppe</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-shop-purple transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-shop-purple transition-colors">
              All Products
            </Link>
            <Link to="/products/dresses" className="text-gray-700 hover:text-shop-purple transition-colors">
              Dresses
            </Link>
            <Link to="/products/watches" className="text-gray-700 hover:text-shop-purple transition-colors">
              Watches
            </Link>
            <Link to="/products/footwear" className="text-gray-700 hover:text-shop-purple transition-colors">
              Footwear
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5 text-gray-600" />
            </Button>

            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5 text-gray-600" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 bg-shop-purple hover:bg-shop-purple text-white text-xs min-w-[18px] h-[18px] flex items-center justify-center rounded-full p-0">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-gray-600" />
              ) : (
                <Menu className="h-5 w-5 text-gray-600" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t mt-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-shop-purple transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-gray-700 hover:text-shop-purple transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                All Products
              </Link>
              <Link 
                to="/products/dresses" 
                className="text-gray-700 hover:text-shop-purple transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Dresses
              </Link>
              <Link 
                to="/products/watches" 
                className="text-gray-700 hover:text-shop-purple transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Watches
              </Link>
              <Link 
                to="/products/footwear" 
                className="text-gray-700 hover:text-shop-purple transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Footwear
              </Link>
              <Link 
                to="/products/accessories" 
                className="text-gray-700 hover:text-shop-purple transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Accessories
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
