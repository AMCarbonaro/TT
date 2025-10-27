'use client';

import { useState } from 'react';
import Link from 'next/link';
import PhotoLightbox from './PhotoLightbox';

interface VideoTabsProps {
  video: {
    title: string;
    description: string;
    hlsManifestUrl: string;
    thumbnailUrl: string;
    duration: string;
    viewCount: number;
    releaseDate: string;
    performers: Array<{
      name: string;
      slug: string;
      profilePhoto: string;
    }>;
    photos: Array<{
      url: string;
      alt: string;
    }>;
  };
}

export default function VideoTabs({ video }: VideoTabsProps) {
  const [activeTab, setActiveTab] = useState<'video' | 'photos' | 'performers'>('video');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const VideoPlayer = () => (
    <div className="aspect-video bg-black rounded-lg overflow-hidden">
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center text-white">
          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <p className="text-lg">Video Player</p>
          <p className="text-sm opacity-75">Quality: Auto | 480p | 720p | 1080p | 4K</p>
        </div>
      </div>
    </div>
  );

  const PhotosTab = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-text-primary mb-4">Behind the Scenes</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {video.photos.map((photo, index) => (
          <div 
            key={index} 
            className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => {
              setCurrentPhotoIndex(index);
              setLightboxOpen(true);
            }}
          >
            <img
              src={photo.url}
              alt={photo.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );

  const PerformersTab = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-text-primary mb-4">Performers in this video</h3>
      <div className="space-y-4">
        {video.performers.map((performer) => (
          <Link
            key={performer.slug}
            href={`/performers/${performer.slug}`}
            className="flex items-center space-x-4 p-4 bg-bg-tertiary rounded-lg hover:bg-bg-secondary transition-colors cursor-pointer block"
          >
            <img
              src={performer.profilePhoto}
              alt={performer.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h4 className="font-semibold text-text-primary">{performer.name}</h4>
              <p className="text-sm text-text-secondary">View Profile →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      {/* Tab Navigation */}
      <div className="border-b border-bg-secondary mb-8">
        <nav className="flex space-x-8">
          <button 
            className={`pb-4 ${activeTab === 'video' ? 'tab-active' : 'tab-inactive'}`}
            onClick={() => setActiveTab('video')}
          >
            Video
          </button>
          <button 
            className={`pb-4 ${activeTab === 'photos' ? 'tab-active' : 'tab-inactive'}`}
            onClick={() => setActiveTab('photos')}
          >
            Photos
          </button>
          <button 
            className={`pb-4 ${activeTab === 'performers' ? 'tab-active' : 'tab-inactive'}`}
            onClick={() => setActiveTab('performers')}
          >
            Performers
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {activeTab === 'video' && <VideoPlayer />}
        {activeTab === 'photos' && <PhotosTab />}
        {activeTab === 'performers' && <PerformersTab />}
      </div>

      {/* Photo Lightbox */}
      <PhotoLightbox
        photos={video.photos}
        isOpen={lightboxOpen}
        currentIndex={currentPhotoIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setCurrentPhotoIndex((prev) => (prev + 1) % video.photos.length)}
        onPrev={() => setCurrentPhotoIndex((prev) => (prev - 1 + video.photos.length) % video.photos.length)}
      />
    </div>
  );
}
