import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/data/articles';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-gray-100 text-sm px-3 py-1 rounded-full">
            {article.category}
          </span>
          <span className="text-gray-500 text-sm">
            {article.readingTime} min read
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{article.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full" />
            <span className="text-sm font-medium">{article.authorName}</span>
          </div>
          <Link
            href={`/articles/${article.id}`}
            className="text-black font-medium hover:underline"
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
} 