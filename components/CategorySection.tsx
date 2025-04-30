'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Category {
  id: string;
  name: string;
  image?: string;
}

const categories: Category[] = [
  { id: '1', name: 'Guides', image: '/images/guides.jpg' },
  { id: '2', name: 'Travels', image: '/images/travels.jpg' },
  { id: '3', name: 'Foods', image: '/images/foods.jpg' },
  { id: '4', name: 'Stories', image: '/images/stories.jpg' },
  { id: '5', name: 'Cities', image: '/images/city-night.jpg' },
  { id: '6', name: 'Countries', image: '/images/countries.jpg' },
  { id: '7', name: 'Vlogs', image: '/images/vlogs.jpg' },
];

interface CategorySectionProps {
  onCategorySelect: (category: string) => void;
  selectedCategory: string | null;
}

export default function CategorySection({ onCategorySelect, selectedCategory }: CategorySectionProps) {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) => Math.min(prev + 1, categories.length - 7));
  };

  const prevSlide = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="my-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-serif">Explore by category</h2>
        <div className="flex gap-2">
          <button 
            onClick={prevSlide}
            disabled={startIndex === 0}
            className="w-8 h-8 flex items-center justify-center bg-black text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            ←
          </button>
          <button 
            onClick={nextSlide}
            disabled={startIndex >= categories.length - 7}
            className="w-8 h-8 flex items-center justify-center bg-black text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4">
        {categories.slice(startIndex, startIndex + 7).map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.name)}
            className={`group relative aspect-square overflow-hidden ${
              selectedCategory === category.name ? 'ring-2 ring-black' : ''
            }`}
          >
            {category.image && (
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-110 transition duration-300"
              />
            )}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />
            <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-medium">
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
} 