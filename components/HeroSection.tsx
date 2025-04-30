'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/data/articles';

interface HeroSectionProps {
  featuredArticles: Article[];
}

export default function HeroSection({ featuredArticles }: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredArticles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length);
  };

  const currentArticle = featuredArticles[currentIndex];

  return (
    <section className="relative w-full min-h-[70vh] bg-gray-50">
      <div className="absolute inset-0">
        <Image
          src={currentArticle.imageUrl}
          alt={currentArticle.title}
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      </div>

      <div className="relative h-full flex items-end">
        <div className="container mx-auto px-4 md:px-8 py-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
              {currentArticle.title}
            </h1>
            <Link
              href={`/articles/${currentArticle.id}`}
              className="inline-block bg-white text-black px-6 py-2 text-sm hover:bg-gray-100 transition"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 flex gap-2">
        <button 
          onClick={prevSlide} 
          className="w-10 h-10 flex items-center justify-center bg-white text-black hover:bg-gray-100 transition"
        >
          ←
        </button>
        <button 
          onClick={nextSlide} 
          className="w-10 h-10 flex items-center justify-center bg-white text-black hover:bg-gray-100 transition"
        >
          →
        </button>
      </div>

      <div className="absolute bottom-8 left-8 flex items-center gap-2">
        {featuredArticles.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
    </div>
    </section>
  );
} 