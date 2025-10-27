import Link from 'next/link';
import { getVideoCountByCollection } from '@/lib/data';

export default function HomePage() {
  const collections = [
    {
      slug: 'step-brother-adin',
      name: 'Step Brother Adin',
      description: 'Forbidden family fantasies that push boundaries and explore taboo desires with intense passion.',
      gradient: 'collection-gradient-1',
      color: 'collection-1',
    },
    {
      slug: 'teen-blowjobs',
      name: 'Teen Blowjobs',
      description: 'Fresh faces and eager performances showcasing the art of oral pleasure with youthful enthusiasm.',
      gradient: 'collection-gradient-2',
      color: 'collection-2',
    },
    {
      slug: 'adin-goes-to-japan',
      name: 'Adin Goes To Japan',
      description: 'Cultural exploration meets exotic encounters in the land of the rising sun with authentic experiences.',
      gradient: 'collection-gradient-3',
      color: 'collection-3',
    },
    {
      slug: 'tiny-ass-worship',
      name: 'Tiny Ass Worship',
      description: 'Devoted worship of petite perfection with intimate focus on every curve and detail.',
      gradient: 'collection-gradient-4',
      color: 'collection-4',
    },
    {
      slug: 'lets-rape-him',
      name: 'Lets Rape Him',
      description: 'Intense domination scenarios with powerful performances that command attention and respect.',
      gradient: 'collection-gradient-5',
      color: 'collection-5',
    },
    {
      slug: 'kawaii-kink',
      name: 'Kawaii Kink',
      description: 'Adorably naughty content blending cute aesthetics with kinky desires for the perfect contrast.',
      gradient: 'collection-gradient-6',
      color: 'collection-6',
    },
  ];

  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-text-primary">
          Teen Tiny
        </h1>
        <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
          Enjoy the journeys of Adin as he fucks tiny teens.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {collections.map((collection) => (
            <Link
              key={collection.slug}
              href={`/collections/${collection.slug}`}
              className="collection-card group"
            >
              <div className={`w-full h-48 ${collection.gradient} rounded-lg mb-4 flex items-center justify-center`}>
                <div className="text-white text-center">
                  <div className="text-2xl font-bold mb-2">{collection.name}</div>
                  <div className="text-sm opacity-90">{getVideoCountByCollection(collection.slug)} videos</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {collection.name}
              </h3>
              <p className="text-text-secondary text-sm">
                {collection.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

