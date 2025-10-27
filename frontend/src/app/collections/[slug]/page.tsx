import { notFound } from 'next/navigation';
import Link from 'next/link';

// Mock data for now - will be replaced with API calls
const collections = [
  {
    slug: 'step-brother-adin',
    name: 'Step Brother Adin',
    description: 'Forbidden family fantasies that push boundaries and explore taboo desires with intense passion.',
    colorScheme: { primary: '#8B5CF6', accent: '#A78BFA' },
    videos: [
      {
        id: '1',
        title: 'Elegant Evening',
        slug: 'elegant-evening',
        thumbnailUrl: 'https://via.placeholder.com/640x360/8B5CF6/FFFFFF?text=Elegant+Evening',
        duration: '30:00',
        viewCount: 1250,
        releaseDate: '2024-01-15',
      },
      {
        id: '2',
        title: 'Sophisticated Desires',
        slug: 'sophisticated-desires',
        thumbnailUrl: 'https://via.placeholder.com/640x360/8B5CF6/FFFFFF?text=Sophisticated+Desires',
        duration: '25:30',
        viewCount: 980,
        releaseDate: '2024-01-10',
      },
      {
        id: '3',
        title: 'Refined Passion',
        slug: 'refined-passion',
        thumbnailUrl: 'https://via.placeholder.com/640x360/8B5CF6/FFFFFF?text=Refined+Passion',
        duration: '35:15',
        viewCount: 2100,
        releaseDate: '2024-01-05',
      },
    ],
  },
  {
    slug: 'teen-blowjobs',
    name: 'Teen Blowjobs',
    description: 'Fresh faces and eager performances showcasing the art of oral pleasure with youthful enthusiasm.',
    colorScheme: { primary: '#EC4899', accent: '#F472B6' },
    videos: [
      {
        id: '4',
        title: 'Modern Connection',
        slug: 'modern-connection',
        thumbnailUrl: 'https://via.placeholder.com/640x360/EC4899/FFFFFF?text=Modern+Connection',
        duration: '40:00',
        viewCount: 3200,
        releaseDate: '2024-01-20',
      },
      {
        id: '5',
        title: 'Digital Intimacy',
        slug: 'digital-intimacy',
        thumbnailUrl: 'https://via.placeholder.com/640x360/EC4899/FFFFFF?text=Digital+Intimacy',
        duration: '28:45',
        viewCount: 1850,
        releaseDate: '2024-01-18',
      },
    ],
  },
  {
    slug: 'adin-goes-to-japan',
    name: 'Adin Goes To Japan',
    description: 'Cultural exploration meets exotic encounters in the land of the rising sun with authentic experiences.',
    colorScheme: { primary: '#F59E0B', accent: '#FBBF24' },
    videos: [
      {
        id: '6',
        title: 'Bold Exploration',
        slug: 'bold-exploration',
        thumbnailUrl: 'https://via.placeholder.com/640x360/F59E0B/FFFFFF?text=Bold+Exploration',
        duration: '35:00',
        viewCount: 2800,
        releaseDate: '2024-01-22',
      },
    ],
  },
  {
    slug: 'tiny-ass-worship',
    name: 'Tiny Ass Worship',
    description: 'Devoted worship of petite perfection with intimate focus on every curve and detail.',
    colorScheme: { primary: '#10B981', accent: '#34D399' },
    videos: [
      {
        id: '7',
        title: 'New Beginnings',
        slug: 'new-beginnings',
        thumbnailUrl: 'https://via.placeholder.com/640x360/10B981/FFFFFF?text=New+Beginnings',
        duration: '32:20',
        viewCount: 1650,
        releaseDate: '2024-01-25',
      },
    ],
  },
  {
    slug: 'lets-rape-him',
    name: 'Lets Rape Him',
    description: 'Intense domination scenarios with powerful performances that command attention and respect.',
    colorScheme: { primary: '#06B6D4', accent: '#22D3EE' },
    videos: [
      {
        id: '8',
        title: 'Confident Styling',
        slug: 'confident-styling',
        thumbnailUrl: 'https://via.placeholder.com/640x360/06B6D4/FFFFFF?text=Confident+Styling',
        duration: '27:10',
        viewCount: 1950,
        releaseDate: '2024-01-28',
      },
    ],
  },
  {
    slug: 'kawaii-kink',
    name: 'Kawaii Kink',
    description: 'Adorably naughty content blending cute aesthetics with kinky desires for the perfect contrast.',
    colorScheme: { primary: '#EC4899', accent: '#F472B6' },
    videos: [
      {
        id: '9',
        title: 'Kawaii Dreams',
        slug: 'kawaii-dreams',
        thumbnailUrl: 'https://via.placeholder.com/640x360/EC4899/FFFFFF?text=Kawaii+Dreams',
        duration: '35:20',
        viewCount: 2800,
        releaseDate: '2024-02-05',
      },
      {
        id: '10',
        title: 'Cute Kink',
        slug: 'cute-kink',
        thumbnailUrl: 'https://via.placeholder.com/640x360/F472B6/FFFFFF?text=Cute+Kink',
        duration: '28:15',
        viewCount: 3200,
        releaseDate: '2024-02-08',
      },
    ],
  },
];

interface CollectionPageProps {
  params: {
    slug: string;
  };
}

export default function CollectionPage({ params }: CollectionPageProps) {
  const collection = collections.find(c => c.slug === params.slug);

  if (!collection) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-bg-primary relative">
      {/* Coming Soon Banner */}
      <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
        <div 
          className="w-[500px] h-32 transform rotate-45 bg-red-600 text-white flex items-center justify-center font-bold text-4xl shadow-2xl"
          style={{ transform: 'rotate(-30deg)' }}
        >
          COMING SOON
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Collection Header */}
        <div className="mb-8 text-center">
          <h1 
            className="text-4xl font-bold mb-4"
            style={{ color: collection.colorScheme.primary }}
          >
            {collection.name}
          </h1>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            {collection.description}
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {collection.videos.map((video) => (
            <Link
              key={video.id}
              href={`/videos/${video.slug}`}
              className="video-card group block"
            >
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-text-primary mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex justify-between text-sm text-text-secondary">
                  <span>{video.viewCount.toLocaleString()} views</span>
                  <span>{new Date(video.releaseDate).toLocaleDateString()}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
