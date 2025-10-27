'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-bg-secondary border-b border-bg-tertiary sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-text-primary">
            Teen Tiny
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/performers" className="text-text-secondary hover:text-text-primary transition-colors">
              Performers
            </Link>
            <Link href="/search" className="text-text-secondary hover:text-text-primary transition-colors">
              Search
            </Link>
          </nav>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-text">
              Sign In
            </button>
            <button className="btn-primary">
              Subscribe
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-bg-tertiary py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/performers" 
                className="text-text-secondary hover:text-text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Performers
              </Link>
              <Link 
                href="/search" 
                className="text-text-secondary hover:text-text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Search
              </Link>
              <div className="pt-4 border-t border-bg-tertiary space-y-2">
                <button className="btn-text w-full text-left">
                  Sign In
                </button>
                <button className="btn-primary w-full">
                  Subscribe
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
