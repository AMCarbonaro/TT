import { notFound } from 'next/navigation';
import VideoTabs from '@/components/VideoTabs';
import { videos } from '@/lib/data';

export async function generateStaticParams() {
  return videos.map((video) => ({
    slug: video.slug,
  }));
}

interface VideoPageProps {
  params: {
    slug: string;
  };
}

export default function VideoPage({ params }: VideoPageProps) {
  const video = videos.find(v => v.slug === params.slug);

  if (!video) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="container mx-auto px-4 py-8">
        {/* Video Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-4">{video.title}</h1>
          <p className="text-text-secondary text-lg mb-4">{video.description}</p>
          
          <div className="flex items-center gap-4 text-sm text-text-secondary mb-6">
            <span>{video.duration}</span>
            <span>•</span>
            <span>{video.viewCount.toLocaleString()} views</span>
            <span>•</span>
            <span>{new Date(video.releaseDate).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Video Tabs Component */}
        <VideoTabs video={video} />
      </div>
    </main>
  );
}