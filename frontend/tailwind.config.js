/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        'bg-primary': '#0F0F0F',
        'bg-secondary': '#1A1A1A',
        'bg-tertiary': '#252525',
        'text-primary': '#FFFFFF',
        'text-secondary': '#B0B0B0',
        'text-tertiary': '#808080',
        'accent-primary': '#FF6B6B',
        'accent-blue': '#5A9FFF',
        'accent-blue-hover': '#7BB3FF',
        // Status colors
        'success': '#10B981',
        'warning': '#F59E0B',
        'error': '#EF4444',
        'info': '#3B82F6',
        // Collection color schemes
        'collection-1': '#8B5CF6',
        'collection-1-accent': '#A78BFA',
        'collection-2': '#EC4899',
        'collection-2-accent': '#F472B6',
        'collection-3': '#F59E0B',
        'collection-3-accent': '#FBBF24',
        'collection-4': '#10B981',
        'collection-4-accent': '#34D399',
        'collection-5': '#06B6D4',
        'collection-5-accent': '#22D3EE',
        'collection-6': '#F97316',
        'collection-6-accent': '#FB923C',
        'collection-7': '#6366F1',
        'collection-7-accent': '#818CF8',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      aspectRatio: {
        'video': '16 / 9',
        'square': '1 / 1',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

