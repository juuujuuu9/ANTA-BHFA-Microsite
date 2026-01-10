# Figma Design Extraction Summary

**Date:** 2025-01-27  
**Source:** [Figma Design - Home Page](https://www.figma.com/design/ifTYSKlWj1kfrZbyU0OrDG/ANTA?node-id=167-2)  
**Node ID:** 167:2

---

## ✅ Extraction Complete

All variables and styles have been extracted from the Figma design and organized into structured files.

---

## Files Created/Updated

### 1. **FIGMA_EXTRACTION.md** (NEW)
Complete extraction document with all design variables, styles, and component specifications from Figma.

**Contents:**
- All colors (brand, neutral, opacity variants)
- Complete typography system (fonts, sizes, line heights, letter spacing)
- Spacing scale and component-specific spacing
- Borders, effects, and gradients
- Layout dimensions and container widths
- Component-specific styles
- Responsive breakpoints
- Tailwind class mappings

### 2. **src/lib/design-tokens.ts** (UPDATED)
Added missing design tokens extracted from Figma:

**New Font Variants:**
- `antaItalic: 'NIKE:Italic'` - ANTA italic variant for hero heading
- `sharpGroteskBook15: 'Sharp Grotesk Book 15'`
- `sharpGroteskBook20: 'Sharp Grotesk Book 20'`
- `sharpGroteskMedium15: 'Sharp Grotesk Medium 15'`
- `sharpGroteskSemibold15: 'Sharp Grotesk SemiBold 15'`

**New Spacing Values:**
- `'2.5xl': '30px'` - Logo top padding
- `'3.5xl': '38px'` - Hero section gap

**New Letter Spacing:**
- `tighter: '0.84px'` - Small headings

**New Layout Dimensions:**
- `containers` - Additional container widths (description, kaiText, address, bottomLabel, button)
- `heights` - Component heights (mainContent, infoSection, contentWrapper, etc.)

**Updated Utility Classes:**
- Added all new font variant mappings

---

## Key Design Tokens Extracted

### Colors
- **Brand:** `#59c2ff`, `#46afe8`, `#d7000f`, `#b8323d`
- **Neutral:** `#ffffff`, `#212121`, `#000000`
- **Opacity:** `rgba(255,255,255,0.1)`, `rgba(255,255,255,0.5)`, `rgba(0,0,0,0.3)`

### Typography
- **Fonts:** ANTA (NIKE), Sharp Grotesk variants (Book, Medium, SemiBold with tracking values)
- **Sizes:** 16px - 140px (responsive scales)
- **Letter Spacing:** 0.8px - 23.4px
- **Line Heights:** 20px - 110px

### Spacing
- **Base Scale:** 10px, 12px, 16px, 20px, 24px, 28px, 30px, 36px, 38px, 40px, 48px, 50px
- **Component-Specific:** Input (16px × 12px, 48px height), Button (24px × 20px), Card (20px padding)

### Layout
- **Max Widths:** 1100px, 1226px, 1278px, 854px, 876px, 730px, 460px, 420px, 364px, 294px
- **Heights:** 48px (input), 77px (card), 103px (logo), 121px (description), 381px (hero), etc.

### Effects
- **Backdrop Blur:** 6px (form container)
- **Opacity:** 0.15 (overlay image)
- **Text Shadow:** `0px 4px 4px rgba(0, 0, 0, 0.25)`

### Gradients
- Combined background gradients (black overlay + blue gradient + dark overlay)

---

## Component Styles Extracted

### Hero Heading ("FIRST ACCESS")
- Font: NIKE:Italic, 140px (desktop), bold, italic, uppercase
- Line height: 110px (desktop)
- Color: white

### Date/Time Card
- Background: `rgba(255,255,255,0.1)`
- Border: 2px solid `rgba(255,255,255,0.5)`
- Border radius: 4px
- Font: Sharp Grotesk SemiBold 25, 36px
- Letter spacing: 1.08px

### Form Inputs
- Background: `rgba(255,255,255,0.5)`
- Border: 1px solid white
- Border radius: 4px
- Padding: 16px × 12px
- Height: 48px
- Font: Sharp Grotesk Book 20, 16px
- Color: #212121

### Submit Button
- Background: #d7000f
- Border: 1px solid white
- Border radius: 4px
- Padding: 24px × 20px
- Width: 294px
- Font: Sharp Grotesk SemiBold 15, 32px
- Letter spacing: 3.2px
- Hover: #b8323d

### Form Container
- Backdrop blur: 6px
- Padding: 24px × 40px
- Max width: 876px
- Gap: 28px

---

## Responsive Breakpoints

- **Mobile:** < 768px (base styles)
- **Tablet:** 768px - 1024px (`md:` prefix)
- **Desktop:** > 1024px (`lg:` prefix)
- **Large Desktop:** 1280px (`xl:` prefix)

---

## Font Variants Mapping

### From Figma to Code

| Figma Font Name | Design Token | Tailwind Class | Usage |
|----------------|--------------|----------------|-------|
| `'NIKE:Italic'` | `fonts.antaItalic` | `font-anta italic` | Hero heading |
| `'Sharp_Grotesk:Book_20'` | `fonts.sharpGroteskBook20` | `font-sharp-grotesk-book-20` | Form inputs, labels |
| `'Sharp_Grotesk:Book_15'` | `fonts.sharpGroteskBook15` | `font-sharp-grotesk-book-15` | Body text variants |
| `'Sharp_Grotesk:Medium_20'` | `fonts.sharpGroteskMedium20` | `font-sharp-grotesk-medium-20` | Medium headings |
| `'Sharp_Grotesk:Medium_25'` | `fonts.sharpGroteskMedium25` | `font-sharp-grotesk-medium-25` | Large headings |
| `'Sharp_Grotesk:Medium_15'` | `fonts.sharpGroteskMedium15` | `font-sharp-grotesk-medium-15` | Small headings |
| `'Sharp_Grotesk:SemiBold_25'` | `fonts.sharpGroteskSemibold25` | `font-sharp-grotesk-semibold-25` | Date/time, address |
| `'Sharp_Grotesk:SemiBold_15'` | `fonts.sharpGroteskSemibold15` | `font-sharp-grotesk-semibold-15` | Button text |

**Note:** Font variant names with tracking values (15, 20, 25) may need to be mapped to actual font files or use CSS `letter-spacing` to achieve the same effect.

---

## Next Steps

### 1. Verify Font Files
Check if the following font files exist in `/public/fonts/`:
- `SharpGrotesk-Book15.otf` (or similar)
- `SharpGrotesk-Medium15.otf` (or similar)
- `SharpGrotesk-SemiBold15.otf` (or similar)

If they don't exist, use existing font files with CSS `letter-spacing` to match Figma tracking values.

### 2. Update Tailwind Config (if needed)
If new font variants are added, update `tailwind.config.mjs`:

```javascript
fontFamily: {
  'sharp-grotesk-book-15': ['Sharp Grotesk Book 15', ...],
  'sharp-grotesk-medium-15': ['Sharp Grotesk Medium 15', ...],
  'sharp-grotesk-semibold-15': ['Sharp Grotesk SemiBold 15', ...],
}
```

### 3. Update CSS Font Declarations (if needed)
If new font files are added, update `src/styles/global.css` with `@font-face` declarations.

### 4. Use Design Tokens
Import and use design tokens in components:

```typescript
import { colors, typography, spacing, layout } from '@/lib/design-tokens';
```

---

## Documentation Files

1. **FIGMA_EXTRACTION.md** - Complete extraction with all details
2. **EXTRACTION_SUMMARY.md** - This file (quick reference)
3. **DESIGN_TOKENS.md** - Original design tokens documentation
4. **src/lib/design-tokens.ts** - TypeScript design tokens (updated)
5. **src/styles/tokens.css** - CSS custom properties (existing)

---

## Validation

✅ All colors extracted  
✅ All typography values extracted  
✅ All spacing values extracted  
✅ All layout dimensions extracted  
✅ All effects and gradients extracted  
✅ Design tokens file updated  
✅ No linting errors  
✅ Documentation created  

---

**Status:** ✅ Complete  
**Ready for:** Implementation and component development
