# Figma Design Extraction - Complete Variables & Styles

**Source:** [Figma Design](https://www.figma.com/design/ifTYSKlWj1kfrZbyU0OrDG/ANTA?node-id=167-2)  
**Extracted:** 2025-01-27  
**Node ID:** 167:2 (Home)

---

## Overview

This document contains a complete extraction of all variables, styles, and design tokens from the Figma design. All values have been verified against the design code and organized by category.

---

## 1. Colors

### Brand Colors
```typescript
#59c2ff  // Primary brand blue (background base)
#46afe8  // Blue gradient end color
#d7000f  // Primary CTA/action color (buttons)
#b8323d  // Red hover state (derived)
```

### Neutral Colors
```typescript
#ffffff  // White (text, borders)
#212121  // Dark gray (form input text/placeholders)
#000000  // Black
```

### Opacity Variants
```typescript
rgba(255, 255, 255, 0.1)   // White 10% - Card backgrounds
rgba(255, 255, 255, 0.5)   // White 50% - Form inputs, card borders
rgba(0, 0, 0, 0.3)         // Black 30% - Gradient overlay
rgba(33, 33, 33, 1)        // Dark gray 100% - Gradient overlay start
rgba(33, 33, 33, 0.02)     // Dark gray 2% - Gradient overlay end
rgba(0, 0, 0, 0.25)        // Black 25% - Text shadow
0.15                       // Overlay opacity (15%)
```

---

## 2. Typography

### Font Families

**ANTA Font (Display):**
- Internal name: `'NIKE'`
- Variants: `'NIKE:Italic'` (used for hero heading)
- Usage: Hero display text ("FIRST ACCESS")

**Sharp Grotesk (Body):**
- Base: `'Sharp Grotesk'`
- Variants extracted from Figma:
  - `'Sharp_Grotesk:Book_20'` - Book weight, 20 tracking
  - `'Sharp_Grotesk:Book_15'` - Book weight, 15 tracking
  - `'Sharp_Grotesk:Medium_20'` - Medium weight, 20 tracking
  - `'Sharp_Grotesk:Medium_25'` - Medium weight, 25 tracking
  - `'Sharp_Grotesk:Medium_15'` - Medium weight, 15 tracking
  - `'Sharp_Grotesk:SemiBold_25'` - SemiBold weight, 25 tracking
  - `'Sharp_Grotesk:SemiBold_15'` - SemiBold weight, 15 tracking

### Font Sizes (Desktop - from Figma)

```typescript
140px  // Hero display ("FIRST ACCESS")
50px   // Large headings (description, KAI 3 CNY)
40px   // Medium headings ("be among the first to experience")
36px   // Date/time card text
32px   // Address text, button text
28px   // KAI 3 CNY subheading
24px   // Form instructions, creator question
20px   // Creator instruction text
18px   // Top/bottom label ("anta beverly hills flagship")
16px   // Form input placeholders, disclaimer text
0px    // Reset value (used in flex layouts)
```

### Responsive Font Sizes

**Hero Display:**
- Mobile: `80px`
- Tablet: `100px`
- Desktop: `140px`

**Large Heading:**
- Mobile: `32px`
- Tablet: `40px`
- Desktop: `50px`

**Medium Heading:**
- Mobile: `24px`
- Tablet: `32px`
- Desktop: `40px`

**Small Heading:**
- Mobile: `20px`
- Tablet: `24px`
- Desktop: `28px`

**Body Text:**
- Mobile: `16px`
- Tablet: `18px`
- Desktop: `20px`

**Button Text:**
- Mobile: `24px`
- Tablet: `28px`
- Desktop: `32px`

**Address Text:**
- Mobile: `20px`
- Tablet: `24px`
- Desktop: `32px`

### Line Heights

```typescript
110px  // Hero display (desktop)
90px   // Hero display (tablet)
70px   // Hero display (mobile)
56px   // Large headings, body large
40px   // Medium headings, form instructions
32px   // Body small, address (mobile)
20px   // Date/time card
normal // Default line height
0      // Zero line height (for display text)
```

### Letter Spacing (Tracking)

```typescript
23.4px  // Ultra wide - Uppercase labels ("anta beverly hills flagship")
3.2px   // Extra wide - Button text ("SUBMIT RSVP")
2.5px   // Widest - Large emphasized text ("the new anta beverly hills flagship")
1.5px   // Wide - Large headings ("PLUS THE LAUNCH OF THE KAI 3 CNY")
1.2px   // Normal - Medium headings ("be among the first to experience")
1.08px  // Wider - Date/time card text
0.84px  // Tight - Small headings ("A FIRST LOOK INSIDE THE SPACE")
0.8px   // Tight - Disclaimer text
```

---

## 3. Spacing

### Base Spacing Scale

```typescript
10px   // Gap between form fields (horizontal)
12px   // Form field groups (vertical), input padding Y
16px   // Input padding horizontal
20px   // Container padding, vertical spacing, card padding Y
24px   // Form sections, button padding horizontal, form container padding X
28px   // Form container spacing
30px   // Logo top padding
36px   // Content sections, field group gaps
38px   // Hero section gap
40px   // Major section spacing, form groups, form container padding Y
48px   // Page padding bottom
50px   // Page padding top
```

### Component-Specific Spacing

**Input Fields:**
```typescript
paddingX: 16px
paddingY: 12px
height: 48px
gap: 10px (between fields in row)
```

**Button:**
```typescript
paddingX: 24px
paddingY: 20px
width: 294px (desktop)
```

**Card (Date/Time):**
```typescript
paddingX: 0px
paddingY: 20px
height: 77px
borderWidth: 2px
dateWidth: 364px
dateContentWidth: 460px
timeWidth: 420px
maxWidth: 854px
```

**Form Container:**
```typescript
containerPaddingX: 24px
containerPaddingY: 40px
sectionGap: 24px
fieldGroupGap: 36px
fieldGap: 12px
fieldRowGap: 10px
backdropBlur: 6px
```

**Page:**
```typescript
paddingX: 20px
paddingY: 0px
paddingTop: 50px
paddingBottom: 48px
gap: 20px (between main sections)
```

---

## 4. Borders

### Border Radius
```typescript
4px  // All rounded elements (buttons, inputs, cards)
```

### Border Width
```typescript
1px  // Thin borders (form inputs)
2px  // Medium borders (date/time card)
```

### Border Style
```typescript
solid  // All borders
```

### Border Colors
```typescript
white                    // #ffffff - Form inputs, buttons
rgba(255, 255, 255, 0.5) // White 50% - Card borders
```

---

## 5. Effects

### Shadows
```typescript
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)  // Disclaimer text
```

### Blur
```typescript
backdrop-blur: 6px  // Form container backdrop filter
```

### Opacity
```typescript
opacity: 0.15  // Background overlay image
```

---

## 6. Gradients

### Background Gradients (Combined)

**Black Overlay:**
```css
linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%)
```

**Blue Gradient:**
```css
linear-gradient(0deg, rgba(89, 194, 255, 0) 49.961%, rgba(70, 175, 232, 1) 60.477%)
```

**Dark Overlay Gradient:**
```css
linear-gradient(-7.844187734917796e-7deg, rgba(33, 33, 33, 1) 0%, rgba(33, 33, 33, 0.02) 29.067%)
```

**Combined (used in style attribute):**
```css
linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), 
linear-gradient(0deg, rgba(89, 194, 255, 0) 49.961%, rgba(70, 175, 232, 1) 60.477%), 
linear-gradient(-7.844187734917796e-7deg, rgba(33, 33, 33, 1) 0%, rgba(33, 33, 33, 0.02) 29.067%)
```

---

## 7. Layout Dimensions

### Container Max Widths

```typescript
1278px  // Description container width
1226px  // KAI 3 CNY text width, address width
1100px  // Bottom label width
876px   // Form container max width
854px   // Date/time card max width
730px   // Form instructions width
460px   // Date content width
420px   // Time section width
364px   // Date section width
294px   // Button width
190px   // Logo width
```

### Heights

```typescript
1533px  // Main content container height
1422px  // Info section height
1337px  // Content wrapper height
1279px  // Content section height
381px   // Hero section height
121px   // Description container min height
103px   // Logo height
77px    // Date/time card height
48px    // Input field height
```

### Background Image Positioning

```typescript
height: 110.36%
width: 164.34%
left: -32.17%
top: 18.37%
```

### Logo Dimensions

```typescript
width: 190px
height: 103px
svgWidth: 191
svgHeight: 103
```

---

## 8. Breakpoints

```typescript
sm: 640px   // Small devices
md: 768px   // Tablet
lg: 1024px  // Desktop
xl: 1280px  // Large desktop
```

---

## 9. Component-Specific Styles

### Hero Heading ("FIRST ACCESS")
```typescript
fontFamily: 'NIKE:Italic'
fontSize: 140px (desktop), 100px (tablet), 80px (mobile)
lineHeight: 110px (desktop), 90px (tablet), 70px (mobile)
color: white
textTransform: uppercase
textAlign: center
fontStyle: italic
fontWeight: bold
```

### Top/Bottom Label ("anta beverly hills flagship")
```typescript
fontFamily: 'Sharp_Grotesk:Book_20'
fontSize: 18px
letterSpacing: 23.4px
color: white
textTransform: uppercase
textAlign: center
```

### Date/Time Card
```typescript
backgroundColor: rgba(255, 255, 255, 0.1)
borderWidth: 2px
borderColor: rgba(255, 255, 255, 0.5)
borderStyle: solid
borderRadius: 4px
paddingY: 20px
paddingX: 0px
height: 77px
maxWidth: 854px
fontFamily: 'Sharp_Grotesk:SemiBold_25'
fontSize: 36px
letterSpacing: 1.08px
lineHeight: 20px
color: white
textTransform: uppercase
```

### Form Inputs
```typescript
backgroundColor: rgba(255, 255, 255, 0.5)
borderWidth: 1px
borderColor: white
borderStyle: solid
borderRadius: 4px
paddingX: 16px
paddingY: 12px
height: 48px
fontFamily: 'Sharp_Grotesk:Book_20'
fontSize: 16px
color: #212121
placeholderColor: #212121
```

### Submit Button
```typescript
backgroundColor: #d7000f
borderWidth: 1px
borderColor: white
borderStyle: solid
borderRadius: 4px
paddingX: 24px
paddingY: 20px
width: 294px
fontFamily: 'Sharp_Grotesk:SemiBold_15'
fontSize: 32px
letterSpacing: 3.2px
color: white
textTransform: uppercase
hoverBackgroundColor: #b8323d
```

### Form Container
```typescript
backdropFilter: blur(6px)
paddingX: 24px
paddingY: 40px
gap: 28px (between sections)
maxWidth: 876px
```

### Disclaimer Text
```typescript
fontFamily: 'Sharp_Grotesk:Book_20'
fontSize: 16px
letterSpacing: 0.8px
lineHeight: 32px
color: white
textShadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
textAlign: center
```

---

## 10. Missing Font Variants

The following font variants are used in Figma but may need to be added to the design tokens:

```typescript
'Sharp_Grotesk:Book_15'      // Book weight, 15 tracking
'Sharp_Grotesk:Medium_15'    // Medium weight, 15 tracking
'Sharp_Grotesk:SemiBold_15'  // SemiBold weight, 15 tracking
```

**Note:** These variants may map to existing font files with different tracking values, or may need custom font-face declarations.

---

## 11. Layout Structure

### Page Structure (from Figma)
```
Home (167:2)
├── Background Layers
│   ├── Blue base (#59c2ff)
│   ├── Background image (110.36% × 164.34%, positioned)
│   ├── Gradient overlays (combined)
│   └── Overlay image (opacity 0.15)
├── Main Content (167:6)
│   ├── Top Label (167:7)
│   └── Info Section (167:9)
│       ├── Logo (167:10)
│       └── Content (167:17)
│           ├── Hero Section (167:18)
│           │   ├── FIRST ACCESS (167:19)
│           │   ├── Description (167:24)
│           │   ├── KAI 3 CNY (167:25)
│           │   ├── Date/Time Card (167:26)
│           │   └── Address (244:193)
│           └── Form Section (167:31)
│               ├── Instructions (167:113)
│               ├── Form Fields (167:114)
│               │   ├── Personal Info (244:8)
│               │   └── Creator/Media (244:187)
│               ├── Submit Button (167:172)
│               └── Footer (244:192)
│                   ├── Disclaimer (244:190)
│                   └── Bottom Label (244:172)
```

---

## 12. Responsive Behavior

### Mobile (< 768px)
- Single column layout
- Smaller font sizes
- Full-width form inputs
- Stacked date/time card

### Tablet (768px - 1024px)
- Two-column form inputs
- Medium font sizes
- Horizontal date/time card

### Desktop (> 1024px)
- Two-column form inputs
- Large font sizes
- Full-width containers with max-widths

---

## 13. Accessibility Considerations

### Text Contrast
- White text on dark backgrounds (high contrast)
- Dark gray (#212121) text on light backgrounds (form inputs)

### Focus States
- Form inputs should have visible focus states
- Button should have hover and focus states

### Semantic HTML
- Proper heading hierarchy (h1, h2, etc.)
- Form labels associated with inputs
- ARIA attributes for dynamic content

---

## 14. Implementation Notes

### Font Variants
- Figma uses font variant names like `'Sharp_Grotesk:Book_15'` which may need to be mapped to actual font files
- Check if these variants exist in `/public/fonts/` or if they need custom font-face declarations

### Gradient Overlays
- Complex gradients are combined in a single `background-image` style attribute
- This is an exception to the "no inline styles" rule (RULE-003)

### Background Image
- Uses absolute positioning with percentage-based dimensions
- Image extends beyond viewport bounds for effect

### Form Inputs
- All inputs use same styling pattern
- Placeholder text uses same color as input text (#212121)
- Inputs have semi-transparent white background

---

## 15. Tailwind Class Mappings

### Common Patterns

```astro
<!-- Hero Heading -->
<div class="font-anta italic font-bold text-[80px] md:text-[100px] lg:text-[140px] text-white uppercase text-center leading-[70px] md:leading-[90px] lg:leading-[110px]">
  FIRST ACCESS
</div>

<!-- Top Label -->
<p class="font-sharp-grotesk text-[18px] text-white text-center tracking-[23.4px] uppercase">
  anta beverly hills flagship
</p>

<!-- Date/Time Card -->
<div class="bg-[rgba(255,255,255,0.1)] border-2 border-[rgba(255,255,255,0.5)] border-solid rounded-[4px] py-[20px] px-0 max-w-[854px]">
  <!-- Content -->
</div>

<!-- Form Input -->
<input class="bg-[rgba(255,255,255,0.5)] border border-white rounded-[4px] px-[16px] py-[12px] h-[48px] text-[#212121] text-[16px] font-sharp-grotesk" />

<!-- Submit Button -->
<button class="bg-[#d7000f] border border-white rounded-[4px] px-[24px] py-[20px] text-white text-[32px] font-sharp-grotesk-semibold-25 tracking-[3.2px] uppercase hover:bg-[#b8323d] transition-colors">
  SUBMIT RSVP
</button>

<!-- Form Container -->
<div class="backdrop-blur-[6px] backdrop-filter px-[24px] py-[40px] gap-[28px] max-w-[876px]">
  <!-- Form content -->
</div>
```

---

## Summary

All design variables and styles have been extracted from the Figma design. The existing design tokens file (`src/lib/design-tokens.ts`) contains most of these values. The following may need updates:

1. **Font Variants:** Add `Book_15`, `Medium_15`, `SemiBold_15` variants if they exist in font files
2. **Layout Dimensions:** Add specific container widths (1278px, 1226px, 1100px, etc.)
3. **Spacing:** Add 30px spacing value for logo top padding
4. **Component Styles:** Document component-specific style combinations

The design tokens file is comprehensive and covers all major design system values. Minor additions may be needed for specific component implementations.
