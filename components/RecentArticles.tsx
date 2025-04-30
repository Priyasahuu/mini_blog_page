import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/data/articles';

interface RecentArticlesProps {
  articles: Article[];
}

export default function RecentArticles({ articles }: RecentArticlesProps) {
  return (
    <section className="my-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-12">
      {articles.map((article) => (
            <article key={article.id} className="border border-gray-200">
              <div className="grid grid-cols-2">
                <div className="aspect-square relative bg-gray-100">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="uppercase text-xs text-gray-600">{article.category}</span>
                      <span className="text-xs text-gray-600">{article.readingTime} min read</span>
                    </div>
            <h3 className="text-xl font-serif mb-3">{article.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                  </div>
            <Link
              href={`/articles/${article.id}`}
                    className="inline-block bg-black text-white px-4 py-2 text-xs hover:bg-gray-900 transition w-fit"
            >
              Read more
            </Link>
                </div>
          </div>
        </article>
      ))}
    </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-6 mb-8 border border-gray-200">
            <div className="text-center mb-6">
              <div className="w-20 h-20 relative rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="/images/author.jpg"
                  alt="Priya Sahu"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-lg">Priya Sahu</h3>
              <p className="text-gray-600 text-sm mt-2">
                Travel enthusiast sharing stories and tips from around the world. Join me on my journey as we explore new destinations and cultures together.
              </p>
            </div>
            <div className="flex justify-center gap-3">
              <a href="#" className="w-8 h-8 bg-black text-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.5 6.5h-3.5v-2.5c0-1.38 1.12-2.5 2.5-2.5h1.5v-3h-2.5c-3.02 0-5.5 2.48-5.5 5.5v2.5h-3v3h3v12h5v-12h3.5l1-3z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-black text-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-black text-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="bg-white p-6 mb-8 border border-gray-200">
            <h3 className="font-serif text-lg mb-4">Destinations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Asia</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Europe</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">North America</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Africa</a></li>
            </ul>
          </div>

          <div className="bg-white p-6 mb-8 border border-gray-200">
            <h3 className="font-serif text-lg mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">Subscribe to our newsletter to get the latest updates.</p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border mb-4"
            />
            <button className="w-full bg-black text-white px-4 py-2 hover:bg-gray-900 transition">
              Sign up
            </button>
          </div>

          <div className="bg-white p-6 mt-8 border border-gray-200">
            <h3 className="font-serif text-lg mb-4">Where to next?</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Japan</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Paris in June</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Dubai in June</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 