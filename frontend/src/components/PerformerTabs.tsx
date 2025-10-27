'use client';

import { useState } from 'react';
import Link from 'next/link';
import PhotoLightbox from './PhotoLightbox';

interface PerformerTabsProps {
  performer: {
    name: string;
    videos: Array<{
      id: string;
      title: string;
      slug: string;
      thumbnailUrl: string;
      duration: string;
      viewCount: number;
      releaseDate: string;
    }>;
    photos: Array<{
      url: string;
      alt: string;
    }>;
    socialMedia: Array<{
      platform: string;
      handle: string;
      url: string;
    }>;
  };
}

export default function PerformerTabs({ performer }: PerformerTabsProps) {
  const [activeTab, setActiveTab] = useState<'videos' | 'photos' | 'social'>('videos');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const VideosTab = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-text-primary mb-4">
        All videos featuring {performer.name}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {performer.videos.map((video) => (
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
              <h4 className="font-semibold text-text-primary mb-2 line-clamp-2">
                {video.title}
              </h4>
              <div className="flex justify-between text-sm text-text-secondary">
                <span>{video.viewCount.toLocaleString()} views</span>
                <span>{new Date(video.releaseDate).toLocaleDateString()}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  const PhotosTab = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-text-primary mb-4">
        Photo gallery of {performer.name}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {performer.photos.map((photo, index) => (
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

  const SocialTab = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-text-primary mb-4">
        Connect with {performer.name}
      </h3>
      <div className="space-y-4">
        {performer.socialMedia.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 p-4 bg-bg-tertiary rounded-lg hover:bg-bg-secondary transition-colors"
          >
            <div className="w-12 h-12 bg-accent-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {social.platform.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-text-primary capitalize">
                {social.platform}
              </h4>
              <p className="text-sm text-text-secondary">{social.handle}</p>
            </div>
            <div className="text-accent-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </a>
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
            className={`pb-4 ${activeTab === 'videos' ? 'tab-active' : 'tab-inactive'}`}
            onClick={() => setActiveTab('videos')}
          >
            Videos
          </button>
          <button 
            className={`pb-4 ${activeTab === 'photos' ? 'tab-active' : 'tab-inactive'}`}
            onClick={() => setActiveTab('photos')}
          >
            Photos
          </button>
          <button 
            className={`pb-4 ${activeTab === 'social' ? 'tab-active' : 'tab-inactive'}`}
            onClick={() => setActiveTab('social')}
          >
            Social Media
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {activeTab === 'videos' && <VideosTab />}
        {activeTab === 'photos' && <PhotosTab />}
        {activeTab === 'social' && <SocialTab />}
      </div>

      {/* Photo Lightbox */}
      <PhotoLightbox
        photos={performer.photos}
        isOpen={lightboxOpen}
        currentIndex={currentPhotoIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setCurrentPhotoIndex((prev) => (prev + 1) % performer.photos.length)}
        onPrev={() => setCurrentPhotoIndex((prev) => (prev - 1 + performer.photos.length) % performer.photos.length)}
      />
    </div>
  );
}
