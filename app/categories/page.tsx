'use client';

import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/data/articles';

interface CategoryGroup {
  name: string;
  articles: typeof articles;
}

export default function CategoriesPage() {
  // Group articles by category
  const categories = articles.reduce<CategoryGroup[]>((acc, article) => {
    const existingCategory = acc.find(cat => cat.name === article.category);
    if (existingCategory) {
      existingCategory.articles.push(article);
    } else {
      acc.push({ name: article.category, articles: [article] });
    }
    return acc;
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <h1 className="text-3xl font-serif mb-12">Categories</h1>

      <div className="space-y-16">
        {categories.map((category) => (
          <section key={category.name} className="space-y-8">
            <h2 className="text-2xl font-serif">{category.name}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.articles.map((article) => (
                <article key={article.id} className="group">
                  <div className="aspect-[4/3] relative mb-4 overflow-hidden bg-gray-100">
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <span>{article.category}</span>
                      <span>{article.readingTime} min read</span>
                    </div>
                    <h3 className="font-serif mb-2 line-clamp-2 group-hover:text-gray-600 transition">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <Link
                      href={`/articles/${article.id}`}
                      className="inline-block bg-black text-white px-4 py-2 text-sm hover:bg-gray-900 transition"
                    >
                      Read more
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="flex justify-end gap-2">
              <button className="w-8 h-8 flex items-center justify-center bg-black text-white">
                ←
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-black text-white">
                →
              </button>
            </div>
          </section>
        ))}
      </div>

      {/* Instagram Footer */}
      <div className="mt-16 mb-8">
        <h3 className="text-sm font-medium mb-4">Follow me on Instagram</h3>
        <div className="grid grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square relative bg-gray-100">
              <Image
                src={`/images/instagram-${i}.jpg`}
                alt={`Instagram post ${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 