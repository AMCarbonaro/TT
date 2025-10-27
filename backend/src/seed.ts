import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create 7 collections with unique branding
  const collections = [
    {
      name: 'Classic Elegance',
      slug: 'classic-elegance',
      description: 'Timeless sophistication meets modern sensuality in our most refined collection.',
      colorScheme: { primary: '#8B5CF6', accent: '#A78BFA' },
      sortOrder: 1,
    },
    {
      name: 'Modern Passion',
      slug: 'modern-passion',
      description: 'Contemporary desires brought to life with cutting-edge production values.',
      colorScheme: { primary: '#EC4899', accent: '#F472B6' },
      sortOrder: 2,
    },
    {
      name: 'Bold Adventures',
      slug: 'bold-adventures',
      description: 'Push boundaries and explore new territories of pleasure and excitement.',
      colorScheme: { primary: '#F59E0B', accent: '#FBBF24' },
      sortOrder: 3,
    },
    {
      name: 'Fresh Encounters',
      slug: 'fresh-encounters',
      description: 'New faces, new experiences, and fresh perspectives on intimate connection.',
      colorScheme: { primary: '#10B981', accent: '#34D399' },
      sortOrder: 4,
    },
    {
      name: 'Cool Confidence',
      slug: 'cool-confidence',
      description: 'Sleek, sophisticated, and effortlessly alluring performances.',
      colorScheme: { primary: '#06B6D4', accent: '#22D3EE' },
      sortOrder: 5,
    },
    {
      name: 'Warm Intimacy',
      slug: 'warm-intimacy',
      description: 'Tender moments and genuine connections in an intimate setting.',
      colorScheme: { primary: '#F97316', accent: '#FB923C' },
      sortOrder: 6,
    },
    {
      name: 'Mystic Desires',
      slug: 'mystic-desires',
      description: 'Explore the mysterious and enchanting side of adult entertainment.',
      colorScheme: { primary: '#6366F1', accent: '#818CF8' },
      sortOrder: 7,
    },
  ];

  // Create collections
  for (const collectionData of collections) {
    const collection = await prisma.collection.upsert({
      where: { slug: collectionData.slug },
      update: collectionData,
      create: collectionData,
    });
    console.log(`✅ Created collection: ${collection.name}`);
  }

  // Create sample performers
  const performers = [
    {
      name: 'Alexandra Rose',
      slug: 'alexandra-rose',
      bio: 'Award-winning performer known for her elegance and versatility.',
      stageName: 'Alexandra Rose',
      videoCount: 0,
    },
    {
      name: 'Marcus Stone',
      slug: 'marcus-stone',
      bio: 'Professional performer with over 5 years of experience in the industry.',
      stageName: 'Marcus Stone',
      videoCount: 0,
    },
    {
      name: 'Luna Midnight',
      slug: 'luna-midnight',
      bio: 'Rising star known for her captivating performances and unique style.',
      stageName: 'Luna Midnight',
      videoCount: 0,
    },
    {
      name: 'Jordan Rivers',
      slug: 'jordan-rivers',
      bio: 'Versatile performer specializing in both solo and collaborative content.',
      stageName: 'Jordan Rivers',
      videoCount: 0,
    },
    {
      name: 'Sage Wilder',
      slug: 'sage-wilder',
      bio: 'Experienced performer with a focus on authentic and passionate performances.',
      stageName: 'Sage Wilder',
      videoCount: 0,
    },
  ];

  // Create performers
  for (const performerData of performers) {
    const performer = await prisma.performer.upsert({
      where: { slug: performerData.slug },
      update: performerData,
      create: performerData,
    });
    console.log(`✅ Created performer: ${performer.name}`);
  }

  // Get collections and performers for video creation
  const allCollections = await prisma.collection.findMany();
  const allPerformers = await prisma.performer.findMany();

  // Create sample videos
  const videos = [
    {
      title: 'Elegant Evening',
      slug: 'elegant-evening',
      description: 'A sophisticated performance showcasing timeless beauty and grace.',
      collectionId: allCollections[0].id, // Classic Elegance
      hlsManifestUrl: 'https://example.com/videos/elegant-evening.m3u8',
      thumbnailUrl: 'https://via.placeholder.com/640x360/8B5CF6/FFFFFF?text=Elegant+Evening',
      has480p: true,
      has720p: true,
      has1080p: true,
      durationSeconds: 1800, // 30 minutes
      performerCount: 2,
      isPublished: true,
      publishedAt: new Date(),
    },
    {
      title: 'Modern Connection',
      slug: 'modern-connection',
      description: 'Contemporary desires meet cutting-edge production in this stunning performance.',
      collectionId: allCollections[1].id, // Modern Passion
      hlsManifestUrl: 'https://example.com/videos/modern-connection.m3u8',
      thumbnailUrl: 'https://via.placeholder.com/640x360/EC4899/FFFFFF?text=Modern+Connection',
      has480p: true,
      has720p: true,
      has1080p: true,
      has4k: true,
      durationSeconds: 2400, // 40 minutes
      performerCount: 1,
      isPublished: true,
      publishedAt: new Date(),
    },
    {
      title: 'Bold Exploration',
      slug: 'bold-exploration',
      description: 'Push boundaries and discover new territories of pleasure.',
      collectionId: allCollections[2].id, // Bold Adventures
      hlsManifestUrl: 'https://example.com/videos/bold-exploration.m3u8',
      thumbnailUrl: 'https://via.placeholder.com/640x360/F59E0B/FFFFFF?text=Bold+Exploration',
      has480p: true,
      has720p: true,
      has1080p: true,
      durationSeconds: 2100, // 35 minutes
      performerCount: 3,
      isPublished: true,
      publishedAt: new Date(),
    },
  ];

  // Create videos
  for (const videoData of videos) {
    const video = await prisma.video.upsert({
      where: { slug: videoData.slug },
      update: videoData,
      create: videoData,
    });
    console.log(`✅ Created video: ${video.title}`);

    // Create video-performer relationships
    const videoPerformers = allPerformers.slice(0, videoData.performerCount);
    for (let i = 0; i < videoPerformers.length; i++) {
      await prisma.videoPerformer.create({
        data: {
          videoId: video.id,
          performerId: videoPerformers[i].id,
          billingOrder: i + 1,
        },
      });
    }

    // Update performer video counts
    for (const performer of videoPerformers) {
      await prisma.performer.update({
        where: { id: performer.id },
        data: { videoCount: { increment: 1 } },
      });
    }
  }

  // Update collection video counts
  for (const collection of allCollections) {
    const videoCount = await prisma.video.count({
      where: { collectionId: collection.id, deletedAt: null },
    });
    await prisma.collection.update({
      where: { id: collection.id },
      data: { videoCount },
    });
  }

  console.log('🎉 Database seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

