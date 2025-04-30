import Image from 'next/image';

export default function Sidebar() {
  return (
    <aside className="space-y-8">
      {/* Author Profile */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 relative mb-4">
            <Image
              src="/images/author.jpg"
              alt="Author"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
          <p className="text-gray-600 text-center mb-4">
            Travel enthusiast and storyteller. Sharing experiences and memories from around the world.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-black">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-bold mb-4">Highlights</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 relative rounded-lg overflow-hidden">
              <Image
                src="/images/highlight1.jpg"
                alt="Highlight 1"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-medium">Top Travel Destinations 2024</h4>
              <p className="text-sm text-gray-600">Must-visit places this year</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 relative rounded-lg overflow-hidden">
              <Image
                src="/images/highlight2.jpg"
                alt="Highlight 2"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-medium">Travel Photography Tips</h4>
              <p className="text-sm text-gray-600">Capture perfect moments</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 relative rounded-lg overflow-hidden">
              <Image
                src="/images/highlight3.jpg"
                alt="Highlight 3"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-medium">Budget Travel Guide</h4>
              <p className="text-sm text-gray-600">Travel more, spend less</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
} 