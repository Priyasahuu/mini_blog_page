'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="py-6 px-4 md:px-8 border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 6H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

          <Link href="/" className="text-xl font-serif absolute left-1/2 -translate-x-1/2">
        Personal Travel Blog
      </Link>

          <button className="p-2 hover:bg-gray-100 rounded-full transition">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 21L16.65 16.65" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
        </div>
      </nav>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
            <div className="flex justify-between items-center mb-12">
              <span className="text-white text-xl font-serif">Personal Travel Blog</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-white p-2"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            <nav className="space-y-8">
              <Link 
                href="/" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-2xl text-white hover:text-gray-300"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-2xl text-white hover:text-gray-300"
              >
                About me
              </Link>
              <Link 
                href="/categories" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-2xl text-white hover:text-gray-300"
              >
                Categories
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-2xl text-white hover:text-gray-300"
              >
                Contact
              </Link>
    </nav>

            <div className="mt-12 p-6 bg-white/10 rounded-lg">
              <h3 className="text-white text-xl mb-4">Newsletter</h3>
              <p className="text-gray-300 mb-4">Subscribe to our newsletter to get the latest updates.</p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-white/20 text-white px-4 py-2 rounded mb-4"
              />
              <button className="w-full bg-white text-black px-4 py-2 rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 