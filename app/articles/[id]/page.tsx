import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/data/articles';
import { notFound } from 'next/navigation';

interface ArticlePageProps {
  params: {
    id: string;
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find((a) => a.id === params.id);

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Link
        href="/"
        className="inline-flex items-center text-gray-600 hover:text-black mb-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Back to Home
      </Link>

      <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-8">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex items-center gap-4 mb-6">
        <span className="bg-gray-100 text-sm px-3 py-1 rounded-full">
          {article.category}
        </span>
        <span className="text-gray-500 text-sm">{article.readingTime} min read</span>
        <time className="text-gray-500 text-sm">{article.submissionDate}</time>
      </div>

      <h1 className="text-4xl font-bold mb-6">{article.title}</h1>

      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-gray-200 rounded-full" />
        <div>
          <p className="font-medium">{article.authorName}</p>
          <p className="text-sm text-gray-500">Travel Writer</p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">{article.excerpt}</p>
        <div className="text-gray-800">{article.content}</div>
      </div>
    </article>
  );
} 