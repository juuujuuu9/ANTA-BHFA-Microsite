# Design Tokens Extraction Summary

**Source:** [Figma Design](https://www.figma.com/design/ifTYSKlWj1kfrZbyU0OrDG/ANTA?node-id=167-10)  
**Extracted:** 2025-01-27  
**Files Created:**
- `src/lib/design-tokens.ts` - TypeScript design tokens
- `src/styles/tokens.css` - CSS custom properties
- `tailwind.config.mjs` - Updated with design tokens

---

## Overview

All design variables and styles have been extracted from the Figma design and organized into structured token files. These tokens represent the complete design system used in the ANTA BHFA MicroSite.

## Token Categories

### 1. Colors

**Brand Colors:**
- `#59c2ff` - ANTA Blue (primary brand color)
- `#46afe8` - Blue gradient end
- `#d7000f` - ANTA Red (CTA/buttons)
- `#b8323d` - Red hover state

**Neutral Colors:**
- `#ffffff` - White
- `#212121` - Dark gray (form text)
- `#000000` - Black

**Semantic Colors:**
- Success: Green variants (`#dcfce7`, `#86efac`, `#166534`)
- Error: Red variants (`#fee2e2`, `#f87171`, `#991b1b`)

**Opacity Variants:**
- `rgba(255, 255, 255, 0.1)` - White 10% (cards)
- `rgba(255, 255, 255, 0.5)` - White 50% (form inputs)
- `rgba(0, 0, 0, 0.3)` - Black 30% (overlays)
- `rgba(33, 33, 33, 0.02)` - Dark gray 2% (gradient end)

### 2. Typography

**Font Families:**
- `NIKE` (ANTA font) - Display headings
- `Sharp Grotesk` - Base font family
- `Sharp Grotesk Medium 20` - Medium weight, 20 tracking
- `Sharp Grotesk Medium 25` - Medium weight, 25 tracking
- `Sharp Grotesk SemiBold 25` - SemiBold weight, 25 tracking

**Font Sizes (Responsive):**
- Hero: `80px` → `100px` → `140px`
- Large Heading: `32px` → `40px` → `50px`
- Medium Heading: `24px` → `32px` → `40px`
- Body: `16px` → `18px` → `20px`
- Button: `24px` → `28px` → `32px`

**Letter Spacing:**
- Ultra wide: `23.4px` (uppercase labels)
- Extra wide: `3.2px` (buttons)
- Wide: `1.5px` - `2.5px` (headings)
- Normal: `0.8px` - `1.2px` (body text)

**Line Heights:**
- Hero: `70px` → `90px` → `110px`
- Headings: `40px` → `56px`
- Body: `32px` - `56px`

### 3. Spacing

**Base Spacing Scale:**
- `10px` - Form field gaps
- `12px` - Field groups
- `16px` - Input padding X
- `20px` - Container padding
- `24px` - Form sections
- `28px` - Form container spacing
- `36px` - Content sections
- `40px` - Major sections
- `48px` - Page padding bottom
- `50px` - Page padding top

**Component Spacing:**
- Input: `16px` × `12px` padding, `48px` height
- Button: `24px` × `20px` padding
- Card: `20px` padding Y, `77px` height
- Form: `24px` × `40px` container padding

### 4. Borders

- Radius: `4px` (all rounded elements)
- Width: `1px` (thin), `2px` (medium)
- Style: `solid`

### 5. Effects

- Text shadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`
- Backdrop blur: `6px`
- Overlay opacity: `0.15`

### 6. Gradients

**Background Gradients:**
- Black overlay: `linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%)`
- Blue gradient: `linear-gradient(0deg, rgba(89, 194, 255, 0) 49.961%, rgba(70, 175, 232, 1) 60.477%)`
- Dark overlay: `linear-gradient(-7.844187734917796e-7deg, rgba(33, 33, 33, 1) 0%, rgba(33, 33, 33, 0.02) 29.067%)`

### 7. Layout

**Max Widths:**
- Form: `876px`
- Form instructions: `730px`
- Card: `854px`

**Component Dimensions:**
- Logo: `190px` × `103px`
- Card date section: `364px` width
- Card time section: `420px` width

**Background Image:**
- Height: `110.36%`
- Width: `164.34%`
- Left: `-32.17%`
- Top: `18.37%`

### 8. Breakpoints

- `sm`: `640px`
- `md`: `768px` (tablet)
- `lg`: `1024px` (desktop)
- `xl`: `1280px` (large desktop)

---

## Usage Examples

### TypeScript Tokens

```typescript
import { colors, typography, spacing } from '@/lib/design-tokens';

// Use in component logic
const buttonStyle = {
  backgroundColor: colors.brand.red,
  padding: `${spacing.button.paddingY} ${spacing.button.paddingX}`,
  fontSize: typography.responsive.button.mobile,
};
```

### CSS Variables

```css
.my-component {
  background-color: var(--color-brand-blue);
  padding: var(--spacing-xl);
  font-size: var(--font-size-md-mobile);
  letter-spacing: var(--letter-spacing-extra-wide);
}
```

### Tailwind Classes

```astro
<!-- Using Tailwind config extensions -->
<div class="bg-anta-blue text-white p-24px">
  Content
</div>

<!-- Using arbitrary values (still supported) -->
<div class="bg-[#59c2ff] text-white p-[24px]">
  Content
</div>
```

---

## File Structure

```
src/
├── lib/
│   └── design-tokens.ts    # TypeScript tokens (exported constants)
├── styles/
│   ├── tokens.css          # CSS custom properties
│   └── global.css          # Font declarations + imports tokens.css
tailwind.config.mjs          # Extended with design tokens
```

---

## Integration Notes

1. **TypeScript Tokens** (`design-tokens.ts`):
   - Use for type-safe token access in components
   - Import specific token categories as needed
   - Type exports available for TypeScript intellisense

2. **CSS Variables** (`tokens.css`):
   - Import in `global.css` if you want to use CSS variables
   - Useful for dynamic styling or CSS-only solutions
   - Can be overridden for theming

3. **Tailwind Config** (`tailwind.config.mjs`):
   - Extended with commonly used colors and spacing
   - Use `bg-anta-blue`, `text-anta-red`, etc.
   - Arbitrary values still work: `bg-[#59c2ff]`

---

## Next Steps

1. **Import CSS Variables** (optional):
   ```css
   /* In src/styles/global.css */
   @import './tokens.css';
   ```

2. **Use TypeScript Tokens**:
   ```typescript
   import { colors, spacing } from '@/lib/design-tokens';
   ```

3. **Use Tailwind Extensions**:
   ```astro
   <div class="bg-anta-blue p-24px">Content</div>
   ```

---

## Maintenance

- Update tokens when Figma design changes
- Keep TypeScript and CSS tokens in sync
- Document any new tokens added
- Follow RULE-000: Simplicity First - only add tokens that are actually used
