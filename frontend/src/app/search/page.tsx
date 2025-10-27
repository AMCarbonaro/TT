'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Mock search data
  const allContent = [
    // Videos
    { type: 'video', title: 'Elegant Evening', slug: 'elegant-evening', collection: 'Step Brother Adin' },
    { type: 'video', title: 'Modern Connection', slug: 'modern-connection', collection: 'Teen Blowjobs' },
    { type: 'video', title: 'Bold Exploration', slug: 'bold-exploration', collection: 'Adin Goes To Japan' },
    { type: 'video', title: 'Sophisticated Desires', slug: 'sophisticated-desires', collection: 'Step Brother Adin' },
    { type: 'video', title: 'Digital Intimacy', slug: 'digital-intimacy', collection: 'Teen Blowjobs' },
    { type: 'video', title: 'New Beginnings', slug: 'new-beginnings', collection: 'Tiny Ass Worship' },
    { type: 'video', title: 'Confident Styling', slug: 'confident-styling', collection: 'Lets Rape Him' },
    { type: 'video', title: 'Intimate Moments', slug: 'intimate-moments', collection: 'Kawaii Kink' },
    { type: 'video', title: 'Mystical Encounters', slug: 'mystical-encounters', collection: 'Kawaii Kink' },
    
    // Performers
    { type: 'performer', title: 'Alexandra Rose', slug: 'alexandra-rose', collection: 'Featured Performer' },
    { type: 'performer', title: 'Marcus Stone', slug: 'marcus-stone', collection: 'Featured Performer' },
    { type: 'performer', title: 'Luna Midnight', slug: 'luna-midnight', collection: 'Featured Performer' },
    { type: 'performer', title: 'Jordan Rivers', slug: 'jordan-rivers', collection: 'Featured Performer' },
    { type: 'performer', title: 'Sage Wilder', slug: 'sage-wilder', collection: 'Featured Performer' },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      if (query.trim() === '') {
        setSearchResults([]);
      } else {
        const results = allContent.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.collection.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(results);
      }
      setIsSearching(false);
    }, 300);
  };

  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-text-primary">
          Search Content
        </h1>
        
        {/* Search Input */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search videos, performers, collections..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="input-field w-full pr-12"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              {isSearching ? (
                <div className="animate-spin w-5 h-5 border-2 border-accent-primary border-t-transparent rounded-full"></div>
              ) : (
                <svg className="w-5 h-5 text-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              )}
            </div>
          </div>
        </div>

        {/* Search Results */}
        {searchQuery && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-text-primary mb-6">
              {isSearching ? 'Searching...' : `Search Results for "${searchQuery}"`}
            </h2>
            
            {!isSearching && searchResults.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-text-secondary text-lg mb-4">No results found</p>
                <p className="text-text-tertiary">Try searching for videos, performers, or collections</p>
              </div>
            ) : (
              <div className="space-y-4">
                {searchResults.map((result, index) => (
                  <Link
                    key={index}
                    href={`/${result.type}s/${result.slug}`}
                    className="block p-4 bg-bg-tertiary rounded-lg hover:bg-bg-secondary transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-accent-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">
                          {result.type === 'video' ? 'V' : 'P'}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-text-primary">{result.title}</h3>
                        <p className="text-sm text-text-secondary capitalize">
                          {result.type} • {result.collection}
                        </p>
                      </div>
                      <div className="text-accent-primary">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Popular Searches */}
        {!searchQuery && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-text-primary mb-6">Popular Searches</h2>
            <div className="flex flex-wrap gap-2">
              {['Elegant Evening', 'Alexandra Rose', 'Teen Blowjobs', 'Adin Goes To Japan', 'Kawaii Kink'].map((term) => (
                <button
                  key={term}
                  onClick={() => handleSearch(term)}
                  className="px-4 py-2 bg-bg-tertiary text-text-secondary rounded-full hover:bg-bg-secondary hover:text-text-primary transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
