import Link from 'next/link';

export default function PerformersPage() {
  const performers = [
    {
      slug: 'alexandra-rose',
      name: 'Alexandra Rose',
      profilePhoto: 'https://via.placeholder.com/200x200/8B5CF6/FFFFFF?text=AR',
      videoCount: 12,
      bio: 'Award-winning performer known for her elegance and versatility.',
    },
    {
      slug: 'marcus-stone',
      name: 'Marcus Stone',
      profilePhoto: 'https://via.placeholder.com/200x200/8B5CF6/FFFFFF?text=MS',
      videoCount: 8,
      bio: 'Professional performer with over 5 years of experience.',
    },
    {
      slug: 'luna-moon',
      name: 'Luna Moon',
      profilePhoto: 'https://via.placeholder.com/200x200/EC4899/FFFFFF?text=LM',
      videoCount: 5,
      bio: 'Rising star known for her captivating performances.',
    },
    {
      slug: 'drake-wild',
      name: 'Drake Wild',
      profilePhoto: 'https://via.placeholder.com/200x200/F59E0B/FFFFFF?text=DW',
      videoCount: 7,
      bio: 'Versatile performer specializing in collaborative content.',
    },
    {
      slug: 'sophia-star',
      name: 'Sophia Star',
      profilePhoto: 'https://via.placeholder.com/200x200/F59E0B/FFFFFF?text=SS',
      videoCount: 9,
      bio: 'Experienced performer with authentic performances.',
    },
    {
      slug: 'blake-thunder',
      name: 'Blake Thunder',
      profilePhoto: 'https://via.placeholder.com/200x200/10B981/FFFFFF?text=BT',
      videoCount: 6,
      bio: 'Dynamic performer known for intense performances.',
    },
  ];

  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-text-primary">
          All Performers
        </h1>
        <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
          Meet our talented performers and explore their individual profiles, videos, and social media.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {performers.map((performer) => (
            <Link
              key={performer.slug}
              href={`/performers/${performer.slug}`}
              className="collection-card group text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={performer.profilePhoto}
                  alt={performer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {performer.name}
              </h3>
              <p className="text-text-secondary text-sm mb-2">
                {performer.bio}
              </p>
              <p className="text-accent-primary text-sm font-medium">
                {performer.videoCount} videos
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
