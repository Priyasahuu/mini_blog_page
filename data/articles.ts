export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  authorName: string;
  submissionDate: string;
  category: string;
  readingTime: number;
  imageUrl: string;
  isFeatured?: boolean;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "When Is The Best Time of Year To Visit Japan?",
    excerpt: "Discover the perfect seasons to experience Japan's unique culture and natural beauty, from cherry blossoms to autumn leaves.",
    content: "Japan is beautiful year-round, but each season offers something special. Spring brings the famous cherry blossoms, summer offers vibrant festivals, autumn showcases stunning foliage, and winter delivers serene snow scenes and hot springs...",
    authorName: "Sarah Johnson",
    submissionDate: "2024-03-15",
    category: "Guides",
    readingTime: 5,
    imageUrl: "/images/japan-hero.jpg",
    isFeatured: true
  },
  {
    id: "2",
    title: "Coventry City Guide Including Coventry Hotels",
    excerpt: "A comprehensive guide to exploring Coventry, from historic sites to modern attractions.",
    content: "Detailed guide about Coventry including the best places to stay, eat, and visit...",
    authorName: "Michael Chen",
    submissionDate: "2024-03-16",
    category: "Cities",
    readingTime: 4,
    imageUrl: "/images/coventry.jpg",
    isFeatured: true
  },
  {
    id: "3",
    title: "Planning a Trip to Japan in the Time of Covid",
    excerpt: "A comprehensive guide to planning your Japanese adventure in these challenging times.",
    content: "From booking flights to choosing destinations, this guide covers all aspects of planning a trip to Japan during the pandemic...",
    authorName: "Emma Wilson",
    submissionDate: "2024-03-13",
    category: "Guides",
    readingTime: 6,
    imageUrl: "/images/japan-covid.jpg",
    isFeatured: true
  },
  {
    id: "4",
    title: "How to Choose an African Safari",
    excerpt: "Find the perfect safari experience that matches your preferences and budget.",
    content: "Selecting the right safari depends on various factors including your budget, desired wildlife encounters, and comfort level...",
    authorName: "David Thompson",
    submissionDate: "2024-03-12",
    category: "Travels",
    readingTime: 7,
    imageUrl: "/images/placeholder.jpg",
    isFeatured: true
  },
  {
    id: "5",
    title: "Hidden Gems in Southeast Asia",
    excerpt: "Discover lesser-known destinations that offer unique experiences away from the tourist crowds.",
    content: "Beyond the popular destinations lie hidden treasures waiting to be explored. From secret beaches to mountain villages...",
    authorName: "Lisa Chen",
    submissionDate: "2024-03-11",
    category: "Travels",
    readingTime: 5,
    imageUrl: "/images/southeast-asia.jpg"
  },
  {
    id: "6",
    title: "Essential Travel Photography Tips",
    excerpt: "Learn how to capture stunning travel photos that tell a story.",
    content: "Whether you're using a smartphone or DSLR, these photography tips will help you capture memorable moments...",
    authorName: "James Wilson",
    submissionDate: "2024-03-10",
    category: "Guides",
    readingTime: 4,
    imageUrl: "/images/photography.jpg"
  },
  {
    id: "7",
    title: "Street Food Adventures in Bangkok",
    excerpt: "A culinary journey through the vibrant street food scene of Bangkok.",
    content: "Explore the bustling streets of Bangkok and discover amazing street food...",
    authorName: "Lisa Chen",
    submissionDate: "2024-03-09",
    category: "Foods",
    readingTime: 5,
    imageUrl: "/images/placeholder.jpg"
  },
  {
    id: "8",
    title: "Traditional Japanese Cuisine Guide",
    excerpt: "Discover the art and culture behind Japanese cuisine.",
    content: "From sushi to ramen, learn about the traditions and techniques...",
    authorName: "Michael Chen",
    submissionDate: "2024-03-08",
    category: "Foods",
    readingTime: 6,
    imageUrl: "/images/placeholder.jpg"
  },
  {
    id: "9",
    title: "Paris: A Walking Tour Guide",
    excerpt: "Explore the City of Light on foot with this comprehensive walking guide.",
    content: "Discover hidden corners and famous landmarks of Paris...",
    authorName: "Emma Wilson",
    submissionDate: "2024-03-07",
    category: "Cities",
    readingTime: 5,
    imageUrl: "/images/city-night.jpg"
  },
  {
    id: "10",
    title: "Mountain Trekking in Nepal",
    excerpt: "Essential guide for planning your Himalayan adventure.",
    content: "Everything you need to know about trekking in Nepal...",
    authorName: "David Thompson",
    submissionDate: "2024-03-06",
    category: "Travels",
    readingTime: 7,
    imageUrl: "/images/placeholder.jpg"
  },
  {
    id: "11",
    title: "Best Coffee Shops in Melbourne",
    excerpt: "A guide to Melbourne's world-famous coffee culture.",
    content: "Discover the best spots for your caffeine fix in Melbourne...",
    authorName: "Sarah Johnson",
    submissionDate: "2024-03-05",
    category: "Foods",
    readingTime: 4,
    imageUrl: "/images/placeholder.jpg"
  },
  {
    id: "12",
    title: "Tokyo: A First-Timer's Guide",
    excerpt: "Everything you need to know for your first visit to Tokyo.",
    content: "Navigate Tokyo like a pro with these essential tips...",
    authorName: "Michael Chen",
    submissionDate: "2024-03-04",
    category: "Cities",
    readingTime: 6,
    imageUrl: "/images/city-night.jpg"
  },
  {
    id: "13",
    title: "Ultimate Guide to Southeast Asian Street Food",
    excerpt: "From pad thai to pho, discover the best street food across Southeast Asia.",
    content: "A detailed exploration of street food culture and must-try dishes...",
    authorName: "Lisa Chen",
    submissionDate: "2024-03-03",
    category: "Foods",
    readingTime: 8,
    imageUrl: "/images/street-food.jpg"
  },
  {
    id: "14",
    title: "Mediterranean Food Journey",
    excerpt: "Explore the flavors of Greece, Italy, and Spain through their traditional dishes.",
    content: "A culinary tour of the Mediterranean region...",
    authorName: "Emma Wilson",
    submissionDate: "2024-03-02",
    category: "Foods",
    readingTime: 6,
    imageUrl: "/images/mediterranean.jpg"
  },
  {
    id: "15",
    title: "Mexican Cuisine: Beyond Tacos",
    excerpt: "Discover the rich diversity of authentic Mexican cuisine.",
    content: "Exploring regional Mexican dishes and their cultural significance...",
    authorName: "David Thompson",
    submissionDate: "2024-03-01",
    category: "Foods",
    readingTime: 7,
    imageUrl: "/images/mexican-food.jpg"
  },
  {
    id: "16",
    title: "London: Hidden Gems and Local Favorites",
    excerpt: "Discover London's secret spots and local hangouts.",
    content: "Beyond the tourist attractions, find the real London...",
    authorName: "Sarah Johnson",
    submissionDate: "2024-02-29",
    category: "Cities",
    readingTime: 6,
    imageUrl: "/images/london.jpg"
  },
  {
    id: "17",
    title: "Barcelona: A Cultural Guide",
    excerpt: "Experience the art, architecture, and soul of Barcelona.",
    content: "From Gaudi to Gothic Quarter, explore Barcelona's cultural heritage...",
    authorName: "Michael Chen",
    submissionDate: "2024-02-28",
    category: "Cities",
    readingTime: 5,
    imageUrl: "/images/barcelona.jpg"
  },
  {
    id: "18",
    title: "New York City on a Budget",
    excerpt: "How to experience the Big Apple without breaking the bank.",
    content: "Tips and tricks for budget-friendly NYC adventures...",
    authorName: "Emma Wilson",
    submissionDate: "2024-02-27",
    category: "Cities",
    readingTime: 7,
    imageUrl: "/images/nyc.jpg"
  },
  {
    id: "19",
    title: "Backpacking Through Europe",
    excerpt: "Essential tips for a successful European backpacking adventure.",
    content: "Everything you need to know about backpacking in Europe...",
    authorName: "David Thompson",
    submissionDate: "2024-02-26",
    category: "Guides",
    readingTime: 8,
    imageUrl: "/images/backpacking.jpg"
  },
  {
    id: "20",
    title: "Solo Travel Safety Tips",
    excerpt: "Stay safe and confident while traveling alone.",
    content: "Essential safety tips and advice for solo travelers...",
    authorName: "Sarah Johnson",
    submissionDate: "2024-02-25",
    category: "Guides",
    readingTime: 5,
    imageUrl: "/images/solo-travel.jpg"
  },
  {
    id: "21",
    title: "Adventure Travel Essentials",
    excerpt: "Gear up for your next outdoor adventure.",
    content: "Must-have equipment and preparation tips for adventure travel...",
    authorName: "James Wilson",
    submissionDate: "2024-02-24",
    category: "Guides",
    readingTime: 6,
    imageUrl: "/images/adventure-gear.jpg"
  },
  {
    id: "22",
    title: "Road Trip Through California",
    excerpt: "The ultimate Pacific Coast Highway adventure guide.",
    content: "Plan your perfect California coast road trip...",
    authorName: "Lisa Chen",
    submissionDate: "2024-02-23",
    category: "Travels",
    readingTime: 7,
    imageUrl: "/images/california.jpg"
  },
  {
    id: "23",
    title: "Island Hopping in Greece",
    excerpt: "Navigate the beautiful Greek islands like a pro.",
    content: "A comprehensive guide to Greek island hopping...",
    authorName: "Emma Wilson",
    submissionDate: "2024-02-22",
    category: "Travels",
    readingTime: 6,
    imageUrl: "/images/greece.jpg"
  },
  {
    id: "24",
    title: "Safari Adventures in Kenya",
    excerpt: "Experience the magic of African wildlife up close.",
    content: "Everything you need to know about Kenyan safaris...",
    authorName: "David Thompson",
    submissionDate: "2024-02-21",
    category: "Travels",
    readingTime: 8,
    imageUrl: "/images/kenya.jpg"
  },
  {
    id: "25",
    title: "Travel Stories: Lost in Translation",
    excerpt: "Humorous and heartwarming tales from around the world.",
    content: "Real stories of cultural misunderstandings and unexpected friendships...",
    authorName: "Sarah Johnson",
    submissionDate: "2024-02-20",
    category: "Stories",
    readingTime: 5,
    imageUrl: "/images/stories-1.jpg"
  },
  {
    id: "26",
    title: "Finding Home in Foreign Lands",
    excerpt: "Personal narratives of expat life and cultural adaptation.",
    content: "Stories of people who found their second home abroad...",
    authorName: "Michael Chen",
    submissionDate: "2024-02-19",
    category: "Stories",
    readingTime: 6,
    imageUrl: "/images/stories-2.jpg"
  },
  {
    id: "27",
    title: "Adventures in the Amazon",
    excerpt: "Tales from the world's largest rainforest.",
    content: "Personal experiences and encounters in the Amazon...",
    authorName: "James Wilson",
    submissionDate: "2024-02-18",
    category: "Stories",
    readingTime: 7,
    imageUrl: "/images/stories-3.jpg"
  },
  {
    id: "28",
    title: "Exploring Vietnam's Culture",
    excerpt: "A deep dive into Vietnamese traditions and modern life.",
    content: "Understanding Vietnam's rich cultural heritage...",
    authorName: "Lisa Chen",
    submissionDate: "2024-02-17",
    category: "Countries",
    readingTime: 6,
    imageUrl: "/images/vietnam.jpg"
  },
  {
    id: "29",
    title: "Morocco: A Country of Contrasts",
    excerpt: "From ancient medinas to modern cities, discover Morocco.",
    content: "Exploring the diverse landscapes and culture of Morocco...",
    authorName: "Emma Wilson",
    submissionDate: "2024-02-16",
    category: "Countries",
    readingTime: 7,
    imageUrl: "/images/morocco.jpg"
  },
  {
    id: "30",
    title: "Iceland: Land of Fire and Ice",
    excerpt: "Experience the natural wonders of Iceland.",
    content: "A comprehensive guide to exploring Iceland...",
    authorName: "David Thompson",
    submissionDate: "2024-02-15",
    category: "Countries",
    readingTime: 8,
    imageUrl: "/images/iceland.jpg"
  },
  {
    id: "31",
    title: "A Week in Bali",
    excerpt: "Daily video logs exploring Bali's beauty and culture.",
    content: "Video series showcasing Bali's highlights...",
    authorName: "Sarah Johnson",
    submissionDate: "2024-02-14",
    category: "Vlogs",
    readingTime: 5,
    imageUrl: "/images/bali-vlog.jpg"
  },
  {
    id: "32",
    title: "European Christmas Markets",
    excerpt: "Video tour of the best Christmas markets in Europe.",
    content: "Festive exploration of traditional Christmas markets...",
    authorName: "Michael Chen",
    submissionDate: "2024-02-13",
    category: "Vlogs",
    readingTime: 6,
    imageUrl: "/images/christmas-vlog.jpg"
  },
  {
    id: "33",
    title: "Train Journey Through India",
    excerpt: "Video documentary of Indian railway adventures.",
    content: "Experience India's vast railway network...",
    authorName: "James Wilson",
    submissionDate: "2024-02-12",
    category: "Vlogs",
    readingTime: 7,
    imageUrl: "/images/india-vlog.jpg"
  }
]; 