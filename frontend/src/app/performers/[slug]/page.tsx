import { notFound } from 'next/navigation';
import Link from 'next/link';
import PerformerTabs from '@/components/PerformerTabs';

// Mock data for now - will be replaced with API calls
const performers = [
  {
    slug: 'alexandra-rose',
    name: 'Alexandra Rose',
    bio: 'Award-winning performer known for her elegance and versatility. With over 5 years of experience in the industry, Alexandra brings sophistication and passion to every performance.',
    profilePhotoUrl: 'https://via.placeholder.com/400x400/8B5CF6/FFFFFF?text=AR',
    coverPhotoUrl: 'https://via.placeholder.com/1200x400/8B5CF6/FFFFFF?text=Alexandra+Rose',
    videoCount: 12,
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
    ],
    photos: [
      { url: 'https://via.placeholder.com/400x400/8B5CF6/FFFFFF?text=Photo+1', alt: 'Professional headshot' },
      { url: 'https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Photo+2', alt: 'Behind the scenes' },
      { url: 'https://via.placeholder.com/300x400/8B5CF6/FFFFFF?text=Photo+3', alt: 'Portrait' },
      { url: 'https://via.placeholder.com/400x400/8B5CF6/FFFFFF?text=Photo+4', alt: 'Candid moment' },
    ],
    socialMedia: [
      { platform: 'onlyfans', handle: '@alexandra_rose_official', url: 'https://onlyfans.com/alexandra_rose_official' },
    ],
  },
  {
    slug: 'marcus-stone',
    name: 'Marcus Stone',
    bio: 'Professional performer with over 5 years of experience in the industry. Known for his charismatic presence and dedication to authentic performances.',
    profilePhotoUrl: 'https://via.placeholder.com/400x400/8B5CF6/FFFFFF?text=MS',
    coverPhotoUrl: 'https://via.placeholder.com/1200x400/8B5CF6/FFFFFF?text=Marcus+Stone',
    videoCount: 8,
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
    ],
    photos: [
      { url: 'https://via.placeholder.com/400x400/8B5CF6/FFFFFF?text=Photo+1', alt: 'Professional headshot' },
      { url: 'https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Photo+2', alt: 'Behind the scenes' },
    ],
    socialMedia: [
      { platform: 'onlyfans', handle: '@marcus_stone_official', url: 'https://onlyfans.com/marcus_stone_official' },
    ],
  },
  {
    slug: 'luna-midnight',
    name: 'Luna Midnight',
    bio: 'Rising star known for her captivating performances and unique style. Luna brings fresh energy and creativity to every project.',
    profilePhotoUrl: 'https://via.placeholder.com/400x400/EC4899/FFFFFF?text=LM',
    coverPhotoUrl: 'https://via.placeholder.com/1200x400/EC4899/FFFFFF?text=Luna+Midnight',
    videoCount: 5,
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
    ],
    photos: [
      { url: 'https://via.placeholder.com/400x400/EC4899/FFFFFF?text=Photo+1', alt: 'Professional headshot' },
      { url: 'https://via.placeholder.com/400x300/EC4899/FFFFFF?text=Photo+2', alt: 'Behind the scenes' },
    ],
    socialMedia: [
      { platform: 'onlyfans', handle: '@luna_midnight_official', url: 'https://onlyfans.com/luna_midnight_official' },
    ],
  },
  {
    slug: 'jordan-rivers',
    name: 'Jordan Rivers',
    bio: 'Versatile performer specializing in both solo and collaborative content. Jordan brings authenticity and passion to every performance.',
    profilePhotoUrl: 'https://via.placeholder.com/400x400/F59E0B/FFFFFF?text=JR',
    coverPhotoUrl: 'https://via.placeholder.com/1200x400/F59E0B/FFFFFF?text=Jordan+Rivers',
    videoCount: 7,
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
    photos: [
      { url: 'https://via.placeholder.com/400x400/F59E0B/FFFFFF?text=Photo+1', alt: 'Professional headshot' },
    ],
    socialMedia: [
      { platform: 'onlyfans', handle: '@jordan_rivers_official', url: 'https://onlyfans.com/jordan_rivers_official' },
    ],
  },
  {
    slug: 'sage-wilder',
    name: 'Sage Wilder',
    bio: 'Experienced performer with a focus on authentic and passionate performances. Sage brings depth and emotion to every project.',
    profilePhotoUrl: 'https://via.placeholder.com/400x400/F59E0B/FFFFFF?text=SW',
    coverPhotoUrl: 'https://via.placeholder.com/1200x400/F59E0B/FFFFFF?text=Sage+Wilder',
    videoCount: 9,
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
    photos: [
      { url: 'https://via.placeholder.com/400x400/F59E0B/FFFFFF?text=Photo+1', alt: 'Professional headshot' },
    ],
    socialMedia: [
      { platform: 'onlyfans', handle: '@sage_wilder_official', url: 'https://onlyfans.com/sage_wilder_official' },
    ],
  },
];

interface PerformerPageProps {
  params: {
    slug: string;
  };
}

export default function PerformerPage({ params }: PerformerPageProps) {
  const performer = performers.find(p => p.slug === params.slug);

  if (!performer) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="container mx-auto px-4 py-8">
        {/* Performer Header */}
        <div className="mb-8">
          {/* Cover Photo */}
          <div className="aspect-video w-full rounded-lg overflow-hidden mb-6">
            <img
              src={performer.coverPhotoUrl}
              alt={`${performer.name} cover`}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Profile Info */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <img
                src={performer.profilePhotoUrl}
                alt={performer.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-bg-secondary"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-text-primary mb-2">{performer.name}</h1>
              <p className="text-text-secondary text-lg mb-4">{performer.bio}</p>
              <div className="flex items-center gap-4 text-sm text-text-secondary">
                <span>{performer.videoCount} videos</span>
                <span>•</span>
                <span>Professional Performer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Performer Tabs Component */}
        <PerformerTabs performer={performer} />
      </div>
    </main>
  );
}
