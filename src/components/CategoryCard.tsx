
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  id: string;
  name: string;
  image: string;
}

const CategoryCard = ({ id, name, image }: CategoryCardProps) => {
  return (
    <Link 
      to={`/products/${id}`}
      className="group relative overflow-hidden rounded-lg"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-5">
          <h3 className="text-white text-xl md:text-2xl font-semibold">{name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
