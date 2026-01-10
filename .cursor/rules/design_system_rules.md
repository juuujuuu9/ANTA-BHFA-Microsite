# ANTA BHFA MicroSite - Design System Rules

**Source:** [Figma Design](https://www.figma.com/design/ifTYSKlWj1kfrZbyU0OrDG/ANTA?node-id=167-2)  
**Last Updated:** 2025-01-27  
**Framework:** Astro + TypeScript + Tailwind CSS

---

## Overview

This document defines the design system rules for integrating Figma designs into the ANTA BHFA MicroSite codebase. Follow these rules to ensure consistency, maintainability, and accurate design implementation.

---

## 1. Token Definitions

### Location
- **TypeScript Tokens:** `src/lib/design-tokens.ts`
- **CSS Variables:** `src/styles/tokens.css` (optional, if using CSS variables)
- **Tailwind Config:** `tailwind.config.mjs`

### Token Structure

Design tokens are organized into categories:
- `colors` - Brand, neutral, semantic, and opacity variants
- `typography` - Font families, sizes, weights, line heights, letter spacing
- `spacing` - Base spacing scale and component-specific spacing
- `borders` - Border radius, width, style
- `effects` - Shadows, blur, opacity
- `gradients` - Background gradient definitions
- `breakpoints` - Responsive breakpoints
- `layout` - Container widths, component dimensions
- `transitions` - Animation timing and properties

### Usage Pattern

```typescript
// Import tokens in Astro components
import { colors, typography, spacing } from '@/lib/design-tokens';

// Use in component logic or style attributes
const buttonStyle = {
  backgroundColor: colors.brand.red,
  padding: `${spacing.button.paddingY} ${spacing.button.paddingX}`,
};
```

### Token Naming Convention

- **Colors:** `colors.brand.blue`, `colors.neutral.white`, `colors.opacity.white50`
- **Typography:** `typography.fonts.anta`, `typography.sizes.xl`, `typography.letterSpacing.ultraWide`
- **Spacing:** `spacing.md`, `spacing.form.containerPaddingX`
- **Borders:** `borders.radius.sm`, `borders.width.thin`

---

## 2. Component Library

### Location
- **Components:** `src/components/` (create as needed)
- **Pages:** `src/pages/` (Astro pages)
- **Layouts:** `src/layouts/Layout.astro`

### Component Architecture

**Astro Component Pattern:**
```astro
---
// src/components/ComponentName.astro
interface Props {
  title?: string;
  // Define props as needed
}

const { title } = Astro.props;
---

<section class="component-classes">
  {title && <h2>{title}</h2>}
  <slot />
</section>
```

### Component Organization

- **One component per Figma section** (Hero, Form, Card, etc.)
- **Keep components simple** - avoid over-engineering (RULE-000)
- **Colocate related components** in feature folders if needed
- **Use Astro slots** for flexible content composition

### Component Checklist

When creating components from Figma:
- [ ] Extract colors → Use design tokens or Tailwind arbitrary values
- [ ] Extract spacing → Use design tokens or Tailwind spacing scale
- [ ] Extract typography → Use font classes + size utilities
- [ ] Make responsive → Add breakpoint variants (`md:`, `lg:`)
- [ ] Add semantic HTML → Proper heading hierarchy, landmarks
- [ ] Test accessibility → Keyboard nav, screen reader labels

---

## 3. Frameworks & Libraries

### Technology Stack

- **Framework:** Astro (static site generator)
- **Language:** TypeScript (strict mode, no `any`)
- **Styling:** Tailwind CSS (utility-first)
- **Build System:** Astro's built-in Vite bundler
- **Database:** PostgreSQL with Drizzle ORM
- **Email:** Resend service

### Styling Approach

**Primary:** Tailwind CSS utility classes
- Use Tailwind utilities for all styling
- Prefer arbitrary values `bg-[#59c2ff]` for one-off colors
- Add to `tailwind.config.mjs` if used ≥3 times
- Avoid inline `style` props (except for dynamic gradients)

**Example:**
```astro
<!-- ✅ CORRECT - Tailwind utilities -->
<div class="bg-[#59c2ff] text-white p-[24px] rounded-[4px]">
  Content
</div>

<!-- ❌ AVOID - Inline styles (except dynamic gradients) -->
<div style="background-color: #59c2ff; padding: 24px;">
  Content
</div>
```

### Responsive Design

**Mobile-first approach:**
- Base styles = mobile (375px)
- `md:` = tablet (768px)
- `lg:` = desktop (1024px)
- `xl:` = large desktop (1280px)

**Pattern:**
```astro
<!-- Mobile-first responsive -->
<div class="text-[24px] md:text-[32px] lg:text-[40px]">
  Responsive text
</div>
```

---

## 4. Asset Management

### Image Storage

- **Static assets:** `public/images/` (referenced as `/images/filename.jpg`)
- **Optimized imports:** `src/assets/` (use Astro's `Image` component)

### Image Usage Pattern

```astro
---
// For static images (public folder)
<img src="/images/home-bg.jpg" alt="Background" />

// For optimized images (src/assets)
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---
<Image src={heroImage} alt="Hero" class="w-full" />
```

### Image Optimization

- Export from Figma as WebP or optimized PNG
- Use Astro's `Image` component for automatic optimization
- Place frequently used images in `public/` for direct references
- Use `src/assets/` for images that need optimization

### Font Assets

- **Location:** `public/fonts/`
- **Fonts:** ANTA_font.ttf, SharpGrotesk variants
- **Declaration:** `src/styles/global.css` (via `@font-face`)

---

## 5. Icon System

### Current Approach

- **SVG Inline:** Icons are embedded as inline SVG in components
- **Logo:** ANTA logo is inline SVG in `index.astro`

### Icon Pattern

```astro
<!-- Inline SVG for logos/icons -->
<svg width="191" height="103" viewBox="0 0 191 103" fill="none">
  <path d="..." fill="white"/>
</svg>
```

### Icon Naming Convention

- Use descriptive names: `anta-logo`, `icon-close`, etc.
- Keep SVGs inline for simple icons
- Consider icon library if many icons needed (not currently used)

---

## 6. Typography System

### Font Families

**ANTA Font (Display):**
- **Class:** `font-anta`
- **Usage:** Hero headings, large display text
- **Weight:** Bold/Italic variants
- **File:** `public/fonts/ANTA_font.ttf`

**Sharp Grotesk (Body):**
- **Base:** `font-sharp-grotesk`
- **Variants:**
  - `font-sharp-grotesk-medium-20` - Medium weight, 20 tracking
  - `font-sharp-grotesk-medium-25` - Medium weight, 25 tracking
  - `font-sharp-grotesk-semibold-25` - SemiBold weight, 25 tracking
- **Files:** `public/fonts/SharpGrotesk-*.otf`

### Typography Scale

**Responsive Font Sizes:**
```astro
<!-- Hero Display -->
<h1 class="text-[80px] md:text-[100px] lg:text-[140px]">
  FIRST ACCESS
</h1>

<!-- Large Heading -->
<h2 class="text-[32px] md:text-[40px] lg:text-[50px]">
  Heading
</h2>

<!-- Body Text -->
<p class="text-[16px] md:text-[18px] lg:text-[20px]">
  Body text
</p>
```

**Letter Spacing (Tracking):**
- Ultra wide: `tracking-[23.4px]` (uppercase labels)
- Extra wide: `tracking-[3.2px]` (buttons)
- Wide: `tracking-[1.5px]` - `tracking-[2.5px]` (headings)
- Normal: `tracking-[0.8px]` - `tracking-[1.2px]` (body)

**Line Heights:**
- Hero: `leading-[70px] md:leading-[90px] lg:leading-[110px]`
- Headings: `leading-[40px] md:leading-[56px]`
- Body: `leading-[32px]` - `leading-[56px]`

---

## 7. Color System

### Brand Colors

```typescript
colors.brand.blue      // #59c2ff - Primary brand color
colors.brand.blueGradient // #46afe8 - Blue gradient end
colors.brand.red       // #d7000f - CTA/buttons
colors.brand.redHover  // #b8323d - Red hover state
```

### Neutral Colors

```typescript
colors.neutral.white     // #ffffff
colors.neutral.darkGray  // #212121 - Form text
colors.neutral.black     // #000000
```

### Opacity Variants

```typescript
colors.opacity.white10   // rgba(255, 255, 255, 0.1) - Cards
colors.opacity.white50   // rgba(255, 255, 255, 0.5) - Form inputs
colors.opacity.black30   // rgba(0, 0, 0, 0.3) - Overlays
```

### Usage in Tailwind

```astro
<!-- Brand colors -->
<div class="bg-[#59c2ff]">Blue background</div>
<div class="bg-[#d7000f] hover:bg-[#b8323d]">Red button</div>

<!-- Opacity variants -->
<div class="bg-[rgba(255,255,255,0.1)]">Card background</div>
<input class="bg-[rgba(255,255,255,0.5)] border-white" />
```

---

## 8. Spacing System

### Base Spacing Scale

```typescript
spacing.xs    // 10px - Form field gaps
spacing.sm    // 12px - Field groups
spacing.md    // 16px - Input padding X
spacing.lg    // 20px - Container padding
spacing.xl    // 24px - Form sections
spacing['2xl'] // 28px - Form container spacing
spacing['3xl'] // 36px - Content sections
spacing['4xl'] // 40px - Major sections
```

### Component Spacing

```typescript
spacing.input.paddingX  // 16px
spacing.input.paddingY  // 12px
spacing.input.height    // 48px
spacing.button.paddingX // 24px
spacing.button.paddingY // 20px
```

### Usage in Tailwind

```astro
<!-- Use spacing tokens or Tailwind scale -->
<div class="p-[20px] gap-[40px]">
  <!-- Or use Tailwind spacing scale -->
  <div class="p-5 gap-10">
</div>
```

---

## 9. Border & Radius System

### Border Radius

```typescript
borders.radius.sm  // 4px - All rounded elements
```

### Border Width

```typescript
borders.width.thin   // 1px
borders.width.medium // 2px
```

### Usage

```astro
<!-- Rounded corners -->
<div class="rounded-[4px]">Card</div>
<input class="rounded-[4px] border border-white" />

<!-- Border width -->
<div class="border-2 border-white">Thick border</div>
```

---

## 10. Effects & Gradients

### Background Gradients

**Combined Gradient (from Figma):**
```astro
<div 
  class="absolute inset-0"
  style="background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), linear-gradient(0deg, rgba(89, 194, 255, 0) 49.961%, rgba(70, 175, 232, 1) 60.477%), linear-gradient(-7.844187734917796e-7deg, rgba(33, 33, 33, 1) 0%, rgba(33, 33, 33, 0.02) 29.067%);"
></div>
```

**Note:** Complex gradients use inline `style` attribute (exception to no-inline-styles rule).

### Backdrop Blur

```astro
<div class="backdrop-blur-[6px] backdrop-filter">
  Form container
</div>
```

### Text Shadow

```astro
<p class="text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
  Text with shadow
</p>
```

---

## 11. Form Components

### Form Input Pattern

```astro
<input
  type="text"
  class="bg-[rgba(255,255,255,0.5)] border border-solid border-white px-[16px] py-[12px] h-[48px] rounded-[4px] text-[#212121] text-[16px] font-sharp-grotesk w-full"
  placeholder="First Name"
/>
```

### Form Container Pattern

```astro
<div class="backdrop-blur-[6px] backdrop-filter flex flex-col gap-[28px] items-center px-[24px] py-[40px] w-full">
  <!-- Form fields -->
</div>
```

### Button Pattern

```astro
<button
  type="submit"
  class="bg-[#d7000f] border border-solid border-white px-[24px] py-[20px] rounded-[4px] text-white text-[32px] font-sharp-grotesk-semibold-25 tracking-[3.2px] uppercase hover:bg-[#b8323d] transition-colors"
>
  SUBMIT RSVP
</button>
```

### Form UX Rules

Follow the form UX rules from `.cursorrules`:
- Inline confirmation replaces submit button on success
- Inline error appears below form on failure
- Loading state: disable button, show spinner
- Use `aria-live` for accessibility
- No `alert()` for runtime UX

---

## 12. Project Structure

### File Organization

```
src/
├── components/        # Reusable UI components (create from Figma sections)
├── layouts/          # Page layouts (Layout.astro base)
├── lib/             # Core functionality
│   ├── db/          # Database (Drizzle schema, connection, seed)
│   ├── auth.ts      # Authentication helpers
│   ├── session.ts   # Session management
│   ├── email.ts     # Resend email functions
│   ├── design-tokens.ts # Design tokens (THIS FILE)
│   └── submissions.ts # Form submission helpers
├── pages/           # Astro pages and API routes
│   ├── index.astro  # Landing page (main form)
│   ├── login.astro  # Admin login
│   ├── admin.astro  # Admin dashboard
│   └── api/        # API endpoints
└── styles/          # Global styles
    ├── global.css   # Font declarations + global styles
    └── tokens.css   # CSS custom properties (optional)
```

### Component Creation Pattern

**From Figma to Component:**
1. Extract design tokens (colors, spacing, typography)
2. Create Astro component in `src/components/`
3. Apply Tailwind classes matching Figma styles
4. Make responsive with breakpoint variants
5. Test at 375px, 768px, 1280px

---

## 13. Figma Integration Workflow

### Step-by-Step Process

1. **Extract Design Tokens**
   - Colors → Use design tokens or arbitrary values
   - Spacing → Use design tokens or Tailwind scale
   - Typography → Use font classes + size utilities
   - Effects → Use Tailwind utilities or inline styles (gradients)

2. **Create Component Structure**
   - One Astro component per Figma section
   - Use semantic HTML
   - Add proper ARIA attributes

3. **Apply Tailwind Classes**
   - Match Figma styles exactly
   - Use arbitrary values for one-off styles
   - Add to config if pattern repeats ≥3 times

4. **Make Responsive**
   - Mobile-first: base → `md:` → `lg:`
   - Test at breakpoints: 375px, 768px, 1280px

5. **Optimize Assets**
   - Export images from Figma as WebP/PNG
   - Use Astro Image component for optimization
   - Place in `public/images/` or `src/assets/`

6. **Test & Refine**
   - Visual comparison with Figma
   - Accessibility testing
   - Responsive behavior
   - Form interactions

---

## 14. Common Patterns

### Background Layers (Hero Section)

```astro
<div aria-hidden="true" class="absolute inset-0 pointer-events-none">
  <!-- Blue base -->
  <div class="absolute bg-[#59c2ff] inset-0"></div>
  
  <!-- Background image -->
  <div class="absolute inset-0 overflow-hidden">
    <img 
      alt="" 
      class="absolute h-[110.36%] left-[-32.17%] max-w-none top-[18.37%] w-[164.34%] object-cover"
      src="/images/home-bg.jpg"
    />
  </div>
  
  <!-- Gradient overlays -->
  <div 
    class="absolute inset-0"
    style="background-image: linear-gradient(...);"
  ></div>
  
  <!-- Overlay image -->
  <img 
    alt="" 
    class="absolute max-w-none object-cover opacity-[0.15] size-full"
    src="/images/home-overlay.jpg"
  />
</div>
```

### Date/Time Card

```astro
<div class="bg-[rgba(255,255,255,0.1)] border-2 border-[rgba(255,255,255,0.5)] border-solid flex flex-col md:flex-row items-start justify-center px-0 py-[20px] rounded-[4px] w-full max-w-[854px]">
  <div class="flex h-[77px] items-center justify-center w-full md:w-[364px]">
    <p class="font-sharp-grotesk-semibold-25 text-[28px] md:text-[36px] text-white tracking-[1.08px] uppercase">
      sat 1.17.26
    </p>
  </div>
  <div class="flex h-[77px] items-center justify-center w-full md:w-[420px]">
    <p class="font-sharp-grotesk-semibold-25 text-[28px] md:text-[36px] text-white tracking-[1.08px] uppercase">
      10 AM – 2 PM
    </p>
  </div>
</div>
```

---

## 15. Accessibility Guidelines

### Semantic HTML

- Use proper heading hierarchy (`h1`, `h2`, `h3`, etc.)
- Use semantic elements (`<nav>`, `<main>`, `<section>`, `<article>`)
- Use form elements correctly (`<form>`, `<label>`, `<input>`)

### ARIA Attributes

- `aria-live="polite"` for dynamic content updates
- `aria-busy="true"` for loading states
- `aria-hidden="true"` for decorative elements
- Proper `alt` text for images

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Focus states visible and clear
- Logical tab order

### Color Contrast

- Text on colored backgrounds must meet WCAG AA (4.5:1)
- Use design tokens for consistent contrast
- Test with accessibility tools

---

## 16. Performance Considerations

### Image Optimization

- Use Astro's `Image` component for automatic optimization
- Export from Figma as WebP or optimized PNG
- Lazy load images below the fold

### Font Loading

- Fonts declared in `src/styles/global.css`
- Use `font-display: swap` for better performance
- Preload critical fonts if needed

### Code Splitting

- Astro automatically code-splits pages
- Use `client:load` sparingly for client-side hydration
- Keep components lightweight

---

## 17. Testing Checklist

### Visual Testing

- [ ] Compare with Figma design pixel-perfect
- [ ] Test at breakpoints: 375px, 768px, 1280px
- [ ] Verify colors match design tokens
- [ ] Check typography scales correctly
- [ ] Verify spacing matches design

### Functional Testing

- [ ] Form submission works correctly
- [ ] Loading states display properly
- [ ] Error states display properly
- [ ] Success states display properly
- [ ] All links work correctly

### Accessibility Testing

- [ ] Keyboard navigation works
- [ ] Screen reader announces content correctly
- [ ] Focus states visible
- [ ] Color contrast meets WCAG AA
- [ ] ARIA attributes correct

---

## 18. Maintenance

### Updating Design Tokens

1. Update `src/lib/design-tokens.ts` with new values
2. Update `tailwind.config.mjs` if needed
3. Update `DESIGN_TOKENS.md` documentation
4. Test components using updated tokens

### Adding New Components

1. Create component in `src/components/`
2. Follow existing component patterns
3. Use design tokens for styling
4. Make responsive with breakpoints
5. Test accessibility

### Design System Evolution

- Document new patterns as they emerge
- Update this file when patterns change
- Keep tokens and components in sync
- Follow RULE-000: Simplicity First

---

## 19. References

- **Figma Design:** https://www.figma.com/design/ifTYSKlWj1kfrZbyU0OrDG/ANTA?node-id=167-2
- **Design Tokens:** `src/lib/design-tokens.ts`
- **Design Tokens Doc:** `DESIGN_TOKENS.md`
- **Project Rules:** `.cursorrules`
- **Astro Docs:** https://docs.astro.build
- **Tailwind Docs:** https://tailwindcss.com/docs

---

## 20. Quick Reference

### Common Tailwind Classes

```astro
<!-- Colors -->
bg-[#59c2ff]           <!-- Brand blue -->
bg-[#d7000f]           <!-- Brand red -->
bg-[rgba(255,255,255,0.5)] <!-- White 50% opacity -->
text-white              <!-- White text -->
text-[#212121]          <!-- Dark gray text -->

<!-- Typography -->
font-anta               <!-- ANTA display font -->
font-sharp-grotesk      <!-- Sharp Grotesk base -->
font-sharp-grotesk-semibold-25 <!-- SemiBold variant -->
text-[32px]             <!-- Font size -->
tracking-[3.2px]        <!-- Letter spacing -->
leading-[56px]          <!-- Line height -->
uppercase               <!-- Uppercase text -->

<!-- Spacing -->
p-[24px]                <!-- Padding -->
gap-[40px]              <!-- Gap -->
w-full                  <!-- Full width -->
max-w-[854px]           <!-- Max width -->

<!-- Borders -->
rounded-[4px]           <!-- Border radius -->
border-2                <!-- Border width -->
border-white            <!-- Border color -->

<!-- Effects -->
backdrop-blur-[6px]     <!-- Backdrop blur -->
opacity-[0.15]          <!-- Opacity -->
```

---

**Last Updated:** 2025-01-27  
**Maintained By:** Development Team  
**Version:** 1.0.0
