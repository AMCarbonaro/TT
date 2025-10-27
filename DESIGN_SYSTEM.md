# Design System & UI/UX Guidelines

## Overview

This document defines the complete design system, UI/UX guidelines, and visual specifications for the adult content streaming platform. This serves as the design reference for implementing consistent, accessible, and professional user interfaces.

**Design Philosophy:** Clean, modern, professional, with emphasis on content showcasing and ease of navigation.

---

## Table of Contents

1. [Brand Identity](#1-brand-identity)
2. [Color Palette](#2-color-palette)
3. [Typography](#3-typography)
4. [Layout Grid System](#4-layout-grid-system)
5. [Component Library](#5-component-library)
6. [Icons & Imagery](#6-icons--imagery)
7. [Spacing & Layout](#7-spacing--layout)
8. [Animation & Transitions](#8-animation--transitions)
9. [Responsive Design](#9-responsive-design)
10. [Accessibility Guidelines](#10-accessibility-guidelines)

---

## 1. Brand Identity

### Brand Values

**Core Values:**
- Professional quality
- User-centric experience
- Discreet and respectful
- Premium content offering
- Trust and safety

### Logo Guidelines

**Usage:**
- Primary logo for header/navigation
- Minimalist design suitable for adult industry
- Flexible horizontal and vertical layouts
- Monochrome versions for light/dark backgrounds
- Minimum size: 120px width

### Tagline (Optional)

**Purpose:** Brief description of platform value
**Examples:**
- "Premium Adult Entertainment"
- "Curated Content Collections"
- Leave blank for minimalist approach

### Brand Voice

**Tone:**
- Professional and mature
- Direct and clear
- Respectful to users
- Discreet marketing
- Focus on quality content

---

## 2. Color Palette

### Primary Brand Colors

**Dark Theme (Recommended):**
- **Background Primary:** `#0F0F0F` (almost black)
- **Background Secondary:** `#1A1A1A` (dark gray)
- **Background Tertiary:** `#252525` (card backgrounds)

**Light Theme (Alternative):**
- **Background Primary:** `#FFFFFF` (pure white)
- **Background Secondary:** `#F5F5F5` (light gray)
- **Background Tertiary:** `#E5E5E5` (card backgrounds)

### Text Colors

**Dark Theme:**
- **Primary Text:** `#FFFFFF` (white)
- **Secondary Text:** `#B0B0B0` (medium gray)
- **Tertiary Text:** `#808080` (lighter gray)
- **Link Color:** `#5A9FFF` (blue accent)
- **Link Hover:** `#7BB3FF` (lighter blue)

**Light Theme:**
- **Primary Text:** `#000000` (black)
- **Secondary Text:** `#555555` (medium gray)
- **Tertiary Text:** `#999999` (lighter gray)
- **Link Color:** `#0066CC` (blue)
- **Link Hover:** `#0052A3` (darker blue)

### Accent Colors

**Primary Accent:**
- `#FF6B6B` - Red/Coral for CTAs and highlights

**Status Colors:**
- **Success:** `#10B981` (green)
- **Warning:** `#F59E0B` (amber)
- **Error:** `#EF4444` (red)
- **Info:** `#3B82F6` (blue)

### Collection Color Schemes (7 Unique)

**Collection 1 - Classic:**
- Primary: `#8B5CF6` (Purple)
- Accent: `#A78BFA`
- Gradient: Linear-gradient(135deg, #667eea 0%, #764ba2 100%)

**Collection 2 - Modern:**
- Primary: `#EC4899` (Pink)
- Accent: `#F472B6`
- Gradient: Linear-gradient(135deg, #f093fb 0%, #f5576c 100%)

**Collection 3 - Bold:**
- Primary: `#F59E0B` (Amber)
- Accent: `#FBBF24`
- Gradient: Linear-gradient(135deg, #fa709a 0%, #fee140 100%)

**Collection 4 - Fresh:**
- Primary: `#10B981` (Green)
- Accent: `#34D399`
- Gradient: Linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)

**Collection 5 - Cool:**
- Primary: `#06B6D4` (Cyan)
- Accent: `#22D3EE`
- Gradient: Linear-gradient(135deg, #667eea 0%, #764ba2 100%)

**Collection 6 - Warm:**
- Primary: `#F97316` (Orange)
- Accent: `#FB923C`
- Gradient: Linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)

**Collection 7 - Mystic:**
- Primary: `#6366F1` (Indigo)
- Accent: `#818CF8`
- Gradient: Linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)

### Color Usage Rules

**Accessibility:**
- Minimum contrast ratio: 4.5:1 for normal text
- Minimum contrast ratio: 3:1 for large text (18pt+)
- Colorblind-friendly palette (avoid red-green dependency)
- Test with color blindness simulators

**Semantic Usage:**
- Primary color: CTAs, links, active states
- Accent colors: Collection-specific accents
- Status colors: System feedback only
- Text colors: Strict hierarchy

---

## 3. Typography

### Font Families

**Primary Font (Body):**
- **System Stack:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`
- **Web Font Alternative:** Inter or Roboto
- **Usage:** Body text, descriptions, UI elements

**Secondary Font (Headings):**
- **Option 1:** Same as primary (system font)
- **Option 2:** Montserrat or Poppins (web font)
- **Usage:** Titles, headings, emphasis

**Monospace (Code/Technical):**
- `'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace`
- **Usage:** Debug info, technical display

### Font Sizes

**Scale (rem units):**
- **xs:** 0.75rem (12px)
- **sm:** 0.875rem (14px)
- **base:** 1rem (16px)
- **lg:** 1.125rem (18px)
- **xl:** 1.25rem (20px)
- **2xl:** 1.5rem (24px)
- **3xl:** 1.875rem (30px)
- **4xl:** 2.25rem (36px)
- **5xl:** 3rem (48px)

**Usage:**
- **Page Titles:** 3xl - 4xl
- **Section Headings:** 2xl - 3xl
- **Card Titles:** xl - 2xl
- **Body Text:** base - lg
- **Labels/Captions:** sm - base
- **Fine Print:** xs - sm

### Font Weights

**Available Weights:**
- **Light:** 300
- **Regular:** 400
- **Medium:** 500
- **Semibold:** 600
- **Bold:** 700

**Usage:**
- **Body text:** Regular (400)
- **Headings:** Semibold (600) or Bold (700)
- **Emphasis:** Medium (500) or Semibold (600)
- **Light text:** Light (300)

### Line Heights

**Ratios:**
- **Tight:** 1.2 (headings)
- **Normal:** 1.5 (body text)
- **Relaxed:** 1.75 (long-form content)

### Text Hierarchy

**H1 (Page Title):**
- Size: 3xl-4xl
- Weight: Bold (700)
- Line height: 1.2
- Color: Primary text

**H2 (Section Heading):**
- Size: 2xl-3xl
- Weight: Semibold (600)
- Line height: 1.2
- Color: Primary text

**H3 (Subsection):**
- Size: xl-2xl
- Weight: Semibold (600)
- Line height: 1.3
- Color: Primary text

**Body:**
- Size: base-lg
- Weight: Regular (400)
- Line height: 1.5
- Color: Primary or secondary text

**Caption:**
- Size: sm
- Weight: Regular (400)
- Line height: 1.5
- Color: Secondary or tertiary text

---

## 4. Layout Grid System

### Container Widths

**Breakpoints:**
- **Mobile:** Full width with padding (320px+)
- **Tablet:** 768px max-width
- **Desktop:** 1280px max-width
- **Large Desktop:** 1536px max-width

**Container Padding:**
- **Mobile:** 1rem (16px)
- **Tablet:** 1.5rem (24px)
- **Desktop:** 2rem (32px)

### Grid System

**12-Column Grid (Desktop):**
- Total columns: 12
- Gutter width: 1.5rem (24px)
- Column width: Calculated

**Usage:**
- Full width: 12 columns
- Half width: 6 columns
- Third width: 4 columns
- Quarter width: 3 columns
- Two-thirds: 8 columns

### Responsive Breakpoints

**Breakpoint Scale (Tailwind-based):**
- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px
- **2xl:** 1536px

**Grid Adaptations:**
- **Mobile (< 768px):** Single column, stack vertically
- **Tablet (768px - 1024px):** 2-column grid
- **Desktop (> 1024px):** 3-4 column grid

### Spacing Scale

**Base Unit:** 4px (0.25rem)

**Spacing Values:**
- **0:** 0px
- **1:** 0.25rem (4px)
- **2:** 0.5rem (8px)
- **3:** 0.75rem (12px)
- **4:** 1rem (16px)
- **5:** 1.25rem (20px)
- **6:** 1.5rem (24px)
- **8:** 2rem (32px)
- **10:** 2.5rem (40px)
- **12:** 3rem (48px)
- **16:** 4rem (64px)
- **20:** 5rem (80px)
- **24:** 6rem (96px)

---

## 5. Component Library

### Buttons

**Primary Button:**
```css
Background: Primary accent color (#FF6B6B)
Text: White (#FFFFFF)
Padding: 0.75rem 1.5rem
Border radius: 0.5rem
Font weight: Medium (500)
Hover: Lighter shade, slight lift (transform: translateY(-1px))
Active: Darker shade
Disabled: 50% opacity, cursor not-allowed
```

**Secondary Button:**
```css
Background: Transparent
Border: 2px solid primary color
Text: Primary color
Padding: 0.75rem 1.5rem
Border radius: 0.5rem
Hover: Fill background with primary color
```

**Text Button:**
```css
Background: Transparent
Border: None
Text: Primary color
Padding: 0.5rem 1rem
Underline on hover
```

**Button Sizes:**
- **Small:** 0.5rem 1rem (padding)
- **Medium:** 0.75rem 1.5rem (default)
- **Large:** 1rem 2rem

### Cards

**Collection Card:**
```css
Background: Background tertiary color
Border radius: 1rem
Padding: 1rem
Hover: Scale 1.02, add shadow
Transition: 0.3s ease
```

**Video Card:**
```css
Aspect ratio: 16:9 (thumbnail)
Border radius: 0.5rem
Overflow: hidden
Title below thumbnail
Duration badge overlay
Hover: Play button overlay, slight scale
```

**Performer Card:**
```css
Aspect ratio: 1:1 (profile photo)
Border radius: 50% or 0.5rem
Hover: Border highlight, scale effect
```

### Navigation

**Header:**
- Height: 64px (4rem)
- Background: Background secondary with blur
- Logo: Left aligned
- Nav links: Right aligned
- Sticky: Yes (stays on scroll)

**Footer:**
- Background: Background secondary
- Text: Secondary text color
- Links: Organized in columns
- Legal links: Bottom section

**Breadcrumbs:**
```css
Text size: sm
Text color: Secondary
Separator: / or >
Current page: Primary color, no link
```

**Tabs:**
```css
Active tab: Underline or solid background
Inactive: Transparent background
Hover: Background highlight
Transition: 0.2s ease
```

### Forms

**Input Field:**
```css
Background: Background tertiary
Border: 1px solid border color
Border radius: 0.5rem
Padding: 0.75rem 1rem
Focus: Border primary color, outline
Disabled: Opacity 0.5
```

**Checkbox:**
```css
Size: 1.25rem × 1.25rem
Border radius: 0.25rem
Checked: Primary color background
Focus: Ring outline
```

**Dropdown:**
```css
Same as input field
Dropdown arrow icon
Position: Dropdown below
Max height: 200px
Scrollable
```

**Validation States:**
```css
Valid: Green border
Invalid: Red border
Error message: Red text, below field
Success message: Green text
```

### Modals & Lightboxes

**Modal:**
```css
Background overlay: rgba(0,0,0,0.7)
Content: Background primary
Border radius: 1rem
Padding: 2rem
Max width: 90vw or 600px
Max height: 90vh
Scrollable content
Close button: Top right corner
```

**Lightbox (Photo Viewer):**
```css
Full screen overlay
Center image
Navigation arrows left/right
Close button top right
Image zoom capability
Photo counter (e.g., "3 of 12")
Keyboard navigation (arrows, ESC)
```

### Video Player

**Player Container:**
```css
Aspect ratio: 16:9
Background: Black
Full width responsive
```

**Player Controls:**
```css
Controls bar: Bottom of player
Background gradient: rgba(0,0,0,0.7)
Controls: White or primary color
Hover: Show controls (fade in)
Auto-hide: After 3 seconds of inactivity
```

---

## 6. Icons & Imagery

### Icon System

**Icon Library:**
- **Recommendation:** Heroicons or Lucide React
- **Style:** Outline style (primary)
- **Size:** 24px default

**Icon Sizes:**
- **xs:** 12px
- **sm:** 16px
- **md:** 24px (default)
- **lg:** 32px
- **xl:** 40px

### Video Thumbnails

**Aspect Ratio:** 16:9 (standard video)
**Sizes:**
- **Small (grid):** 320px × 180px
- **Medium:** 480px × 270px
- **Large:** 640px × 360px

**Requirements:**
- High quality JPEG or WebP
- Optimized for web (compressed)
- Descriptive alt text for accessibility

### Profile Photos

**Aspect Ratio:** 1:1 (square)
**Sizes:**
- **Small:** 48px × 48px
- **Medium:** 96px × 96px
- **Large:** 256px × 256px

**Display:**
- Circular or rounded square (border-radius: 50% or 0.5rem)
- Border: 2px solid background color

### Photo Gallery

**Aspect Ratio:** Varied (maintain original ratio)
**Grid:**
- **Responsive:** 2-4 columns based on screen size
- **Masonry layout optional** for varied ratios
- **Hover:** Scale effect or border highlight

### Image Optimization

**Formats:**
- **WebP** (modern browsers)
- **JPEG fallback** (older browsers)
- **Lazy loading** for all images below fold

**Loading States:**
- Skeleton loader (placeholder)
- Blur-up effect
- Progressive loading

---

## 7. Spacing & Layout

### Layout Patterns

**Page Layout:**
```
Header (64px height)
  ↓
Container (max-width: 1280px, padding: 2rem)
  ↓
Content area
  ↓
Footer
```

**Component Spacing:**
- **Sections:** 3rem - 4rem vertical spacing
- **Cards in grid:** 1.5rem gap
- **Form elements:** 1rem vertical spacing
- **Buttons:** 0.5rem - 1rem spacing

### Whitespace Principles

**Breathing Room:**
- Use generous whitespace for premium feel
- Group related elements
- Separate sections clearly
- Let content breathe

**Padding Guidelines:**
- **Container:** 1rem - 2rem
- **Cards:** 1rem - 1.5rem
- **Buttons:** 0.75rem - 1.5rem
- **Inputs:** 0.75rem - 1rem

### Alignment

**Text Alignment:**
- **Left:** Default for most content
- **Center:** Headings, CTAs, hero text
- **Right:** Specific cases only

**Content Alignment:**
- **Start:** Left (LTR)
- **Center:** Headers, cards
- **Space-between:** Flex layouts
- **Space-around:** Even distribution

---

## 8. Animation & Transitions

### Transition Durations

**Standard Durations:**
- **Fast:** 150ms
- **Normal:** 200ms
- **Slow:** 300ms
- **Very slow:** 500ms

### Easing Functions

**Common Easing:**
- **ease-in-out:** Default for most
- **ease-out:** Hover effects
- **ease-in:** Leave transitions
- **cubic-bezier:** Custom animations

### Common Animations

**Page Transitions:**
```css
Fade in: opacity 0 → 1 (200ms)
Slide in: translateY(10px) → 0 (300ms)
```

**Hover Effects:**
```css
Button: translateY(-2px), scale(1.02)
Card: translateY(-4px), box-shadow
Link: Underline slide-in
```

**Loading States:**
```css
Skeleton: Pulse animation
Spinner: Rotate animation
Progress bar: Width animation
```

**Modal/Lightbox:**
```css
Open: Fade in + scale(0.95 → 1)
Close: Fade out + scale(1 → 0.95)
Backdrop: Fade in/out
```

### Loading Animations

**Skeleton Loader:**
```css
Background: Gradient shimmer
Animation: Moving gradient (1.5s linear)
```

**Spinner:**
```css
Rotation animation
Border gradient
Pulsing effect
```

---

## 9. Responsive Design

### Mobile-First Approach

**Design Philosophy:**
- Start with mobile layout
- Scale up for larger screens
- Progressive enhancement
- Touch-friendly interactions

### Breakpoint Strategy

**Content Adaptations:**
- **< 640px (Mobile):**
  - Single column layout
  - Hamburger menu
  - Stacked cards
  - Simplified navigation

- **640px - 768px (Large Mobile):**
  - 2-column grid for content
  - Tablet-friendly buttons
  - Slightly larger text

- **768px - 1024px (Tablet):**
  - 2-3 column grid
  - Sidebar navigation possible
  - Larger touch targets

- **> 1024px (Desktop):**
  - 3-4 column grid
  - Hover effects active
  - Multi-level navigation
  - Full feature set

### Touch Targets

**Minimum Sizes:**
- **Buttons:** 44px × 44px minimum
- **Links:** 44px height minimum
- **Form inputs:** 44px height
- **Icons:** 24px + padding

### Responsive Typography

**Fluid Type:**
```css
Font size: clamp(1rem, 2vw, 1.5rem)
Responsive headings: Use vw units carefully
Mobile: Smaller base size
Desktop: Larger base size
```

---

## 10. Accessibility Guidelines

### WCAG 2.1 Level AA Compliance

**Requirements:**
- Contrast ratio: 4.5:1 for normal text
- Contrast ratio: 3:1 for large text
- Keyboard navigation support
- Screen reader compatibility
- Focus indicators visible

### Keyboard Navigation

**Requirements:**
- All interactive elements keyboard accessible
- Logical tab order
- Skip links for main content
- ESC key closes modals
- Arrow keys for custom components

**Focus States:**
```css
Outline: 2px solid primary color
Offset: 2px from element
Visible on all interactive elements
Never remove focus styles
```

### Screen Reader Support

**Semantic HTML:**
- Use proper heading hierarchy (h1-h6)
- Use semantic elements (nav, main, article, section)
- Form labels properly associated
- ARIA labels where needed

**ARIA Attributes:**
- aria-label for icon buttons
- aria-expanded for dropdowns
- aria-hidden for decorative elements
- role attributes where needed

### Alt Text Guidelines

**Images:**
- All images require alt text
- Decorative images: alt=""
- Informative images: Descriptive alt text
- Icons: Context-based labels

### Color & Contrast

**Text Readability:**
- Never rely on color alone for information
- Use icons + color for status
- Sufficient contrast ratios
- Test with color blindness simulators

### Form Accessibility

**Requirements:**
- Labels for all inputs
- Error messages clearly associated
- Required fields indicated (*)
- Help text provided
- Success/error states announced

### Focus Management

**Modal/Dialog:**
- Trap focus within modal
- Return focus to trigger on close
- Announce modal opening to screen readers

**Dynamic Content:**
- Announce updates to screen readers (aria-live)
- Loading states communicated
- Error messages announced

### Responsive Accessibility

**Mobile:**
- Touch targets minimum 44px
- Readable text without zoom
- Accessible gestures
- Landscape and portrait support

---

## Summary

### Design System Checklist

**Visual Elements:**
- Brand colors and collection schemes defined
- Typography scale and hierarchy established
- Icon system and imagery guidelines
- Component library specifications

**Layout:**
- Grid system and breakpoints
- Spacing scale and whitespace
- Responsive adaptations
- Container widths and padding

**Interactions:**
- Animation durations and easing
- Hover and focus states
- Loading animations
- Transitions and effects

**Accessibility:**
- WCAG 2.1 Level AA compliance
- Keyboard navigation
- Screen reader support
- Color contrast verification

---

**Document Version:** 1.0  
**Last Updated:** January 2025  
**Project:** Adult Content Streaming Platform
