'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import RecentArticles from '@/components/RecentArticles';
import { articles } from '@/data/articles';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const featuredArticles = articles.filter(article => article.isFeatured);
  const recentArticles = articles.slice(0, 3); // Get first 3 articles for recent section

  return (
    <div className="min-h-screen">
      <HeroSection featuredArticles={featuredArticles} />

      <div className="mt-12">
        <CategorySection
          onCategorySelect={setSelectedCategory}
          selectedCategory={selectedCategory}
        />

        <div className="mt-12">
          <h2 className="text-2xl font-serif mb-6">Recent articles</h2>
              <RecentArticles articles={recentArticles} />
        </div>
      </div>
    </div>
  );
}
