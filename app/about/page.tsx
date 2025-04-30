'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      {/* Profile Section */}
      <div className="bg-white p-8 text-center mb-12">
        <div className="w-32 h-32 relative mx-auto mb-6">
          <Image
            src="/images/author.jpg"
            alt="Priya Sahu"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-serif mb-6">
          My name is<br />
          Priya Sahu
        </h1>
        <div className="flex justify-center gap-3 mb-8">
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
          <a href="#" className="w-8 h-8 bg-black text-white flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
        <p className="text-gray-600 italic mb-8">
          Some beautiful paths can't be discovered without getting lost.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-6 mb-12">
        <div className="aspect-square relative">
          <Image
            src="/images/about-1.jpg"
            alt="Travel moment"
            fill
            className="object-cover"
          />
        </div>
        <div className="aspect-square relative">
          <Image
            src="/images/about-2.jpg"
            alt="Travel moment"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6 text-gray-600">
        <p>
          I've been traveling the world for over 5 years now, and I've learned that the best stories come from unexpected adventures and getting out of your comfort zone.
        </p>
        <p>
          Through my blog, I aim to inspire others to explore the world, experience different cultures, and create their own unforgettable memories.
        </p>
        <p>
          Whether you're a seasoned traveler or planning your first trip, I hope my stories and tips help you on your journey.
        </p>
        <p>
          I believe that travel is not just about visiting new places, but about the transformative experiences that shape who we are. Every journey teaches us something new about ourselves and the world around us.
        </p>
        <p>
          Join me as I share my adventures, photography, and travel tips from around the globe. Let's explore this beautiful world together!
        </p>
      </div>

      {/* Instagram Feed */}
      <div className="mt-16">
        <h2 className="text-sm font-medium mb-4">Follow me on Instagram</h2>
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