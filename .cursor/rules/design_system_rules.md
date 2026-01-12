# Design System Rules for Figma Integration

This document provides comprehensive rules for integrating Figma designs into the ANTA BHFA MicroSite codebase using the Model Context Protocol (MCP).

## Table of Contents
1. [Design Token Definitions](#design-token-definitions)
2. [Component Library](#component-library)
3. [Frameworks & Libraries](#frameworks--libraries)
4. [Asset Management](#asset-management)
5. [Icon System](#icon-system)
6. [Styling Approach](#styling-approach)
7. [Project Structure](#project-structure)
8. [Figma-to-Code Workflow](#figma-to-code-workflow)

---

## Design Token Definitions

### Location
Design tokens are defined in multiple locations:

1. **TypeScript Design Tokens** (`src/lib/design-tokens.ts`)
   - Comprehensive token definitions extracted from Figma
   - Includes colors, typography, spacing, borders, shadows, gradients, breakpoints, layout, and transitions
   - Exports typed constants for programmatic use

2. **Tailwind Configuration** (`tailwind.config.mjs`)
   - Custom theme extensions for colors, fonts, spacing, border radius, and max widths
   - Maps design tokens to Tailwind utility classes

3. **CSS Font Definitions** (`src/styles/global.css`)
   - `@font-face` declarations for all font variants
   - Font utility classes (e.g., `.font-sharp-grotesk-book-20`)

### Token Structure

#### Colors
```typescript
// From src/lib/design-tokens.ts
colors: {
  brand: {
    blue: '#59c2ff',
    red: '#d7000f',
    redHover: '#b8323d',
  },
  neutral: {
    white: '#ffffff',
    darkGray: '#212121',
  },
  semantic: {
    success: { bg, border, text },
    error: { bg, border, text },
  },
  opacity: {
    white10: 'rgba(255, 255, 255, 0.1)',
    white50: 'rgba(255, 255, 255, 0.5)',
    // ...
  }
}
```

**Usage Pattern:**
- Use Tailwind arbitrary values: `bg-[#59c2ff]`, `text-[#212121]`
- Or use Tailwind config values: `bg-anta-blue`, `text-anta-dark-gray`
- For opacity variants: `bg-[rgba(255,255,255,0.5)]`

#### Typography
```typescript
// Font families with tracking variants
fonts: {
  anta: 'NIKE', // Internal font name
  sharpGroteskBook15: 'Sharp Grotesk Book 15',
  sharpGroteskMedium20: 'Sharp Grotesk Medium 20',
  // ... (15, 20, 25 tracking variants)
}

// Responsive font sizes
responsive: {
  hero: { mobile: '80px', tablet: '100px', desktop: '140px' },
  headingLarge: { mobile: '32px', tablet: '40px', desktop: '50px' },
  // ...
}
```

**Usage Pattern:**
- Font classes: `font-anta`, `font-sharp-grotesk-book-20`
- Responsive sizes: `text-[60px] md:text-[80px] lg:text-[100px] xl:text-[140px]`
- Letter spacing: `tracking-[14px] md:tracking-[23.4px]`

#### Spacing
```typescript
spacing: {
  xs: '10px',   // Form field gaps
  sm: '12px',   // Field groups
  md: '16px',   // Input padding
  lg: '20px',   // Container padding
  xl: '24px',   // Form sections
  // ...
}
```

**Usage Pattern:**
- Tailwind spacing: `gap-[10px]`, `p-[16px]`, `px-[24px]`
- Or use Tailwind scale: `gap-2.5` (10px), `p-4` (16px)

### Token Transformation
- **No transformation system** - tokens are used directly as Tailwind classes
- Design tokens file (`design-tokens.ts`) serves as documentation/reference
- Actual implementation uses Tailwind utilities with arbitrary values or config extensions

---

## Component Library

### Location
Components are stored in `src/components/` (currently empty - components are inline in pages)

### Architecture
- **Framework**: Astro components (`.astro` files)
- **Pattern**: Single-file components with frontmatter for logic and template for markup
- **Styling**: Tailwind CSS utilities applied directly in class attributes

### Component Structure
```astro
---
// Component logic (TypeScript)
interface Props {
  title?: string;
}

const { title } = Astro.props;
---

<!-- Component markup -->
<section class="...">
  {title && <h2>{title}</h2>}
  <slot />
</section>
```

### Current Implementation Pattern
- **No separate component library** - components are currently inline in `src/pages/index.astro`
- **Future pattern**: Extract reusable sections into `src/components/` (e.g., `Hero.astro`, `Form.astro`, `Card.astro`)

### Component Documentation
- No Storybook or component documentation system currently
- Components follow Astro's standard component pattern

---

## Frameworks & Libraries

### UI Framework
- **Astro** (`^4.15.0`) - Static site generator with server-side rendering
- **TypeScript** (`^5.5.0`) - Type safety
- **Tailwind CSS** (`^3.4.19`) - Utility-first CSS framework

### Styling Framework
- **Tailwind CSS** via `@astrojs/tailwind` integration
- **No CSS-in-JS** - all styles via Tailwind utilities
- **No CSS Modules** - global Tailwind classes only
- **Custom CSS** only for `@font-face` declarations in `src/styles/global.css`

### Build System
- **Astro Build** - handles bundling and optimization
- **Vite** (underlying) - Astro uses Vite for dev server and builds
- **Deployment**: Vercel serverless functions via `@astrojs/vercel`

### Bundler
- **Vite** (via Astro) - handles module resolution, HMR, and production builds

---

## Asset Management

### Storage Location
- **Static assets**: `public/` directory (served as-is)
- **Optimized assets**: `src/assets/` (imported and optimized by Astro)

### Current Assets
```
public/
├── fonts/          # Font files (Sharp Grotesk variants, ANTA font)
├── images/          # Images (anta-logo.png, home-bg.jpg, home-overlay.jpg)
├── favicon.ico
└── favicon.svg
```

### Asset Optimization
- **Images**: Use Astro's `<Image>` component for automatic optimization
  ```astro
  import { Image } from 'astro:assets';
  import heroImage from '../assets/hero.jpg';
  <Image src={heroImage} alt="Hero" />
  ```
- **Fonts**: Served from `public/fonts/` with `font-display: swap` for performance
- **No CDN** - assets served from same domain

### Asset Naming Convention
- **Kebab-case**: `home-bg.jpg`, `anta-logo.png`
- **Font files**: Match font family name (e.g., `SharpGrotesk-Book20.otf`)

### Image Handling Pattern
```astro
<!-- Static reference (public/) -->
<img src="/images/home-bg.jpg" alt="Background" />

<!-- Optimized import (src/assets/) -->
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---
<Image src={heroImage} alt="Hero" />
```

---

## Icon System

### Current Implementation
- **No icon library** - using inline SVG for logo
- **SVG pattern**: Inline SVG in components
  ```astro
  <svg width="191" height="103" viewBox="0 0 191 103" fill="none">
    <path d="..." fill="white"/>
  </svg>
  ```

### Icon Naming Convention
- N/A (no icon system currently)

### Future Recommendations
- Consider using Astro's `<Icon>` component with icon sets (e.g., `astro-icon`)
- Or continue with inline SVG for brand-specific icons

---

## Styling Approach

### CSS Methodology
- **Utility-First CSS** (Tailwind CSS)
- **No CSS Modules**
- **No Styled Components**
- **Minimal custom CSS** (only for `@font-face` declarations)

### Global Styles
- **Location**: `src/styles/global.css`
- **Contents**:
  - Tailwind directives (`@tailwind base/components/utilities`)
  - Font face declarations
  - Font utility classes
  - Global reset (in Layout.astro)

### Responsive Design
- **Mobile-first approach**: Base styles for mobile, then `md:`, `lg:`, `xl:` breakpoints
- **Breakpoints** (from `tailwind.config.mjs`):
  - `sm`: 640px
  - `md`: 768px (tablet)
  - `lg`: 1024px (desktop)
  - `xl`: 1280px (large desktop)

### Responsive Pattern
```astro
<!-- Mobile-first responsive -->
<div class="text-[60px] md:text-[80px] lg:text-[100px] xl:text-[140px]">
  <!-- Mobile: 60px, Tablet: 80px, Desktop: 100px, Large: 140px -->
</div>
```

### Custom CSS Usage
- **Avoid custom CSS** - use Tailwind utilities whenever possible
- **Only exceptions**: Font declarations, complex animations (if needed)

---

## Project Structure

### Directory Organization
```
src/
├── components/        # Reusable UI components (currently empty)
├── layouts/          # Page layouts (Layout.astro)
├── lib/              # Core functionality
│   ├── db/           # Database (Drizzle schema, connection, migrations)
│   ├── design-tokens.ts  # Design token definitions
│   ├── auth.ts       # Authentication helpers
│   ├── session.ts    # Session management
│   ├── email.ts      # Resend email functions
│   └── submissions.ts # Form submission helpers
├── pages/            # Astro pages and API routes
│   ├── index.astro   # Landing page (main form)
│   ├── login.astro   # Admin login
│   ├── admin.astro   # Admin dashboard
│   └── api/          # API endpoints
├── styles/           # Global styles (global.css)
└── assets/           # Optimized assets (images, etc.)

public/               # Static assets (fonts, images, favicon)
```

### Feature Organization
- **File-based routing**: Astro pages in `src/pages/` automatically become routes
- **API routes**: `src/pages/api/` for serverless functions
- **No feature folders** - flat structure by file type

### Naming Conventions
- **Files**: kebab-case (e.g., `design-tokens.ts`, `form-submissions.ts`)
- **Components**: PascalCase (e.g., `Layout.astro`, future `Hero.astro`)
- **Functions**: camelCase (e.g., `createFormSubmission`, `getAllAdmins`)

---

## Figma-to-Code Workflow

### Step 1: Extract Design Tokens
1. **Colors**: Extract hex codes from Figma → Use Tailwind arbitrary values `bg-[#hex]` or add to `tailwind.config.mjs` if used ≥3 times
2. **Typography**: Extract font family, size, weight, tracking → Map to font classes and responsive sizes
3. **Spacing**: Extract padding/margin values → Use Tailwind spacing utilities
4. **Borders**: Extract radius, width → Use Tailwind border utilities

### Step 2: Create Component Structure
1. **Identify sections** in Figma design
2. **Create Astro component** in `src/components/` (or inline in page if single-use)
3. **Apply Tailwind classes** matching Figma styles

### Step 3: Apply Styles
```astro
<!-- Example: Hero section from Figma -->
<div class="flex flex-col gap-[40px] items-center w-full">
  <h1 class="font-anta text-[60px] md:text-[80px] lg:text-[100px] xl:text-[140px] text-white uppercase">
    FIRST ACCESS
  </h1>
</div>
```

### Step 4: Responsive Implementation
- **Base styles**: Mobile (default)
- **md:** (768px+): Tablet adjustments
- **lg:** (1024px+): Desktop adjustments
- **xl:** (1280px+): Large desktop adjustments

### Step 5: Asset Integration
- **Export images** from Figma as WebP or optimized PNG
- **Place in `public/images/`** for static references
- **Or import** in `src/assets/` for Astro optimization

### Step 6: Font Application
- **Use font utility classes**: `font-anta`, `font-sharp-grotesk-book-20`, etc.
- **Responsive font sizes**: `text-[24px] md:text-[32px] lg:text-[40px]`
- **Letter spacing**: `tracking-[0.72px] md:tracking-[1.2px]`

### Common Patterns

#### Background Layers
```astro
<!-- Multiple background layers (from Figma) -->
<div class="relative">
  <div class="fixed bg-[#59c2ff] inset-0"></div>
  <img src="/images/home-bg.jpg" class="fixed inset-0 w-full h-full object-cover" />
  <div class="fixed inset-0 bg-black opacity-65"></div>
</div>
```

#### Form Inputs
```astro
<input
  type="text"
  class="bg-[rgba(255,255,255,0.5)] border border-white h-[48px] px-[16px] py-[12px] rounded-[4px] font-sharp-grotesk-book-20 text-[#212121] text-[16px]"
/>
```

#### Cards with Glass Effect
```astro
<div class="bg-[rgba(255,255,255,0.1)] border-2 border-[rgba(255,255,255,0.5)] rounded-[4px] p-[20px]">
  <!-- Card content -->
</div>
```

---

## Key Rules for Figma Integration

### 1. Token Extraction
- ✅ Extract colors as hex codes → Use `bg-[#hex]` or add to Tailwind config
- ✅ Extract spacing → Use Tailwind spacing scale or arbitrary values
- ✅ Extract typography → Use font classes + responsive sizes
- ✅ Extract borders → Use Tailwind border utilities

### 2. Component Creation
- ✅ One Astro component per Figma section/component
- ✅ Keep components simple - match Figma exactly
- ✅ Use Tailwind utilities, avoid custom CSS

### 3. Responsive Design
- ✅ Mobile-first: Base → `md:` → `lg:` → `xl:`
- ✅ Test at: 375px (mobile), 768px (tablet), 1280px (desktop)

### 4. Font Handling
- ✅ Use font utility classes: `font-anta`, `font-sharp-grotesk-book-20`
- ✅ Apply responsive font sizes: `text-[24px] md:text-[32px]`
- ✅ Apply letter spacing: `tracking-[0.72px]`

### 5. Asset Management
- ✅ Static images → `public/images/`
- ✅ Optimized images → `src/assets/` with `<Image>` component
- ✅ Fonts → `public/fonts/` (already configured)

### 6. Styling Best Practices
- ✅ Prefer Tailwind utilities over custom CSS
- ✅ Use arbitrary values for one-off styles: `bg-[#59c2ff]`
- ✅ Add to Tailwind config if pattern repeats ≥3 times
- ✅ Keep components focused and simple

---

## Quick Reference

### Font Classes
- `font-anta` - ANTA/NIKE font (hero headings)
- `font-sharp-grotesk-book-15` - Book weight, 15 tracking
- `font-sharp-grotesk-book-20` - Book weight, 20 tracking
- `font-sharp-grotesk-medium-15` - Medium weight, 15 tracking
- `font-sharp-grotesk-medium-20` - Medium weight, 20 tracking
- `font-sharp-grotesk-semibold-15` - SemiBold weight, 15 tracking
- `font-sharp-grotesk-semibold-25` - SemiBold weight, 25 tracking
- `font-sharp-grotesk-bold-15` - Bold weight, 15 tracking

### Color Utilities
- `bg-[#59c2ff]` - Brand blue
- `bg-[#d7000f]` - Brand red
- `bg-[rgba(255,255,255,0.5)]` - White 50% opacity
- `text-[#212121]` - Dark gray text

### Spacing Pattern
- `gap-[10px]` - Form field gaps
- `p-[16px]` - Input padding
- `px-[24px]` - Button horizontal padding

### Breakpoints
- `md:` - 768px+ (tablet)
- `lg:` - 1024px+ (desktop)
- `xl:` - 1280px+ (large desktop)

---

## Example: Converting Figma Section to Code

### Figma Design
- Section: Hero heading "FIRST ACCESS"
- Font: ANTA (NIKE), 140px (desktop), 80px (mobile)
- Color: White
- Spacing: 40px gap below

### Code Implementation
```astro
<div class="flex flex-col gap-[40px] items-center">
  <h1 class="font-anta text-[60px] md:text-[80px] lg:text-[100px] xl:text-[140px] text-white uppercase leading-[44px] md:leading-[70px] lg:leading-[90px] xl:leading-[110px]">
    FIRST ACCESS
  </h1>
</div>
```

---

## Notes for MCP Integration

When using Figma MCP tools:
1. **Extract design tokens** first (colors, typography, spacing)
2. **Map to Tailwind classes** using patterns above
3. **Create Astro components** matching Figma sections
4. **Apply responsive breakpoints** (mobile-first)
5. **Test at key breakpoints** (375px, 768px, 1280px)

This design system is optimized for rapid Figma-to-code conversion while maintaining consistency and performance.
