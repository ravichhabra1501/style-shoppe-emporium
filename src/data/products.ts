
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Evening Gown",
    description: "Elegant evening gown perfect for formal occasions.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "dresses",
    featured: true
  },
  {
    id: "2",
    name: "Summer Dress",
    description: "Light and breezy summer dress for warm days.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "dresses",
    featured: false
  },
  {
    id: "3",
    name: "Luxury Watch",
    description: "Premium timepiece with Swiss movement.",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "watches",
    featured: true
  },
  {
    id: "4",
    name: "Sports Watch",
    description: "Water-resistant sports watch with multiple functions.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "watches",
    featured: false
  },
  {
    id: "5",
    name: "Leather Boots",
    description: "Genuine leather boots with durable soles.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "footwear",
    featured: true
  },
  {
    id: "6",
    name: "Running Shoes",
    description: "Lightweight running shoes for comfort and performance.",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "footwear",
    featured: false
  },
  {
    id: "7",
    name: "Classic Handbag",
    description: "Timeless design with quality materials.",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "accessories",
    featured: true
  },
  {
    id: "8",
    name: "Sunglasses",
    description: "UV protection with stylish frames.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "accessories",
    featured: false
  }
];

export const categories = [
  { id: "dresses", name: "Dresses", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
  { id: "watches", name: "Watches", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
  { id: "footwear", name: "Footwear", image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
  { id: "accessories", name: "Accessories", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" }
];

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(product => product.category === categoryId);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}
