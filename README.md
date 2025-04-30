# Mother's Day Tribute Blog

A modern blog website built with Next.js and Tailwind CSS, dedicated to sharing stories and tributes for Mother's Day.

## Features

- 🎨 Modern and responsive design
- 🔍 Client-side search functionality
- 📱 Mobile-friendly interface
- 🏷️ Category-based filtering
- 📖 Dynamic article pages
- 🎯 Featured articles carousel
- 💅 Beautiful typography with Tailwind Typography

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- @tailwindcss/typography

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── articles/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── page.tsx
│   └── layout.tsx
├── components/
│   ├── ArticleCard.tsx
│   ├── CategorySection.tsx
│   ├── HeroSection.tsx
│   └── Sidebar.tsx
├── data/
│   └── articles.ts
└── public/
    └── images/
```

## Features Implementation

### Home Page (/)
- Hero Section with featured stories carousel
- Category filtering
- Search functionality
- Recent articles grid
- Sidebar with author profile and highlights

### Article Detail Page (/articles/:id)
- Full article content
- Author information
- Reading time
- Category tag
- Responsive image display

## Contributing

Feel free to contribute to this project by creating issues or submitting pull requests.

## License

MIT
