# Mobile Design Variables & Styles Extraction

**Source:** [Figma Mobile Design - Node 213:3](https://www.figma.com/design/ifTYSKlWj1kfrZbyU0OrDG/ANTA?node-id=213-3)  
**Extracted:** 2025-01-27  
**Breakpoint:** Mobile (`<sm` / `<640px`)

---

## Overview

This document contains all variables and styles extracted from the Figma mobile design. These values differ from desktop in several key areas:

- **Typography:** Smaller font sizes, adjusted line heights
- **Spacing:** Different padding and gap values
- **Layout:** Different container widths and heights
- **Background:** Different image positioning

---

## 1. Typography Variables (Mobile)

### Font Sizes

| Element | Mobile Size | Desktop Size | Difference |
|---------|-------------|--------------|------------|
| **Hero Display** | `60px` | `80px` | -20px |
| **Top/Bottom Label** | `14px` | `18px` | -4px |
| **Description Line 1** | `24px` | `32px` | -8px |
| **Description Line 2** | `32px` | `40px` | -8px |
| **KAI Text Line 1** | `20px` | `24px` | -4px |
| **KAI Text Line 2** | `32px` | `40px` | -8px |
| **Date/Time Card** | `28px` | `36px` | -8px |
| **Address** | `28px` | `32px` | -4px |
| **Form Instructions** | `16px` | `20px` | -4px |
| **Creator Question** | `20px` | `24px` | -4px |
| **Creator Subtext** | `16px` | `20px` | -4px |
| **Form Inputs** | `14px` | `16px` | -2px |
| **Button** | `24px` | `32px` | -8px |
| **Disclaimer** | `14px` | `16px` | -2px |

### Line Heights

| Element | Mobile | Desktop | Difference |
|---------|--------|---------|------------|
| **Hero Display** | `44px` | `70px` | -26px |
| **Top/Bottom Label** | `22px` | `normal` | - |
| **Description Line 1** | `28px` | `40px` | -12px |
| **Description Line 2** | `32px` | `56px` | -24px |
| **KAI Text Line 1** | `28px` | `40px` | -12px |
| **KAI Text Line 2** | `32px` | `56px` | -24px |
| **Date/Time Card** | `20px` | `20px` | Same |
| **Address** | `28px` | `56px` | -28px |
| **Form Instructions** | `24px` | `32px` | -8px |
| **Creator Question** | `28px` | `28px` | Same |
| **Creator Subtext** | `32px` | `32px` | Same |
| **Disclaimer** | `24px` | `32px` | -8px |

### Letter Spacing (Tracking)

| Element | Mobile | Desktop | Difference |
|---------|--------|---------|------------|
| **Top/Bottom Label** | `14px` | `23.4px` | -9.4px |
| **Description Line 1** | `0.72px` | `1.2px` | -0.48px |
| **Description Line 2** | `0.96px` | `2.5px` | -1.54px |
| **KAI Text Line 1** | `0.6px` | `0.84px` | -0.24px |
| **KAI Text Line 2** | `0.96px` | `1.5px` | -0.54px |
| **Date/Time Card** | `0.84px` | `1.08px` | -0.24px |
| **Button** | `2.4px` | `3.2px` | -0.8px |
| **Disclaimer** | `0.7px` | `0.8px` | -0.1px |

### Font Families

| Element | Font Family | Notes |
|---------|-------------|-------|
| **Hero Display** | `NIKE:Italic` | Italic variant for mobile |
| **Top/Bottom Label** | `Sharp Grotesk Book 20` | Same as desktop |
| **Description** | `Sharp Grotesk Medium 15` | Same as desktop |
| **Description Bold** | `Sharp Grotesk Bold 15` | Used for "anta" |
| **KAI Text** | `Sharp Grotesk Book 20` | Same as desktop |
| **KAI Text Bold** | `Sharp Grotesk SemiBold 15` | Used for "KAI 3 CNY" |
| **Date/Time** | `Sharp Grotesk SemiBold 25` | Same as desktop |
| **Address** | `Sharp Grotesk SemiBold 25` | Same as desktop |
| **Form Instructions** | `Sharp Grotesk Medium 20` | Same as desktop |
| **Creator** | `Sharp Grotesk Medium 20` | Same as desktop |
| **Creator Subtext** | `Sharp Grotesk Book 20` | Same as desktop |
| **Form Inputs** | `Sharp Grotesk Book 20` | Same as desktop |
| **Button** | `Sharp Grotesk SemiBold 15` | Same as desktop |
| **Disclaimer** | `Sharp Grotesk Book 20` | Same as desktop |

---

## 2. Spacing Variables (Mobile)

### Page Layout

| Property | Mobile | Desktop | Difference |
|----------|--------|---------|------------|
| **Page Top Padding** | `80px` | `50px` | +30px |
| **Page Horizontal Padding** | `20px` | `20px` | Same |
| **Content Width** | `335px` | Full width | - |

### Logo Dimensions

| Property | Mobile | Desktop | Difference |
|----------|--------|---------|------------|
| **Logo Height** | `98px` | `103px` | -5px |
| **Logo Width** | `179px` | `190px` | -11px |

### Form Container

| Property | Mobile | Desktop | Difference |
|----------|--------|---------|------------|
| **Container Top Padding** | `56px` | `40px` | +16px |
| **Container Bottom Padding** | `20px` | `20px` | Same |
| **Container Horizontal Padding** | `24px` | `24px` | Same |
| **Form Gap** | `32px` | `28px` | +4px |

### Content Gaps

| Property | Mobile | Desktop | Difference |
|----------|--------|---------|------------|
| **Main Content Gap** | `24px` | `40px` | -16px |
| **Info Section Gap** | `30px` | `40px` | -10px |
| **Hero Content Gap** | `40px` | `40px` | Same |
| **Form Section Gap** | `24px` | `28px` | -4px |
| **Field Group Gap** | `12px` | `12px` | Same |
| **Field Gap** | `10px` | `10px` | Same |

### Date/Time Card

| Property | Mobile | Desktop | Difference |
|----------|--------|---------|------------|
| **Card Height (per row)** | `47px` | `77px` | -30px |
| **Card Width** | `255px` | `364px` / `420px` | -109px / -165px |
| **Card Padding Y** | `20px` | `20px` | Same |
| **Card Padding X** | `0px` | `0px` | Same |

### Button

| Property | Mobile | Desktop | Difference |
|----------|--------|---------|------------|
| **Button Width** | `294px` | `294px` | Same |
| **Button Padding X** | `24px` | `24px` | Same |
| **Button Padding Y** | `16px` | `20px` | -4px |

### Input Fields

| Property | Mobile | Desktop | Difference |
|----------|--------|---------|------------|
| **Input Height** | `48px` | `48px` | Same |
| **Input Padding X** | `16px` | `16px` | Same |
| **Input Padding Y** | `12px` | `12px` | Same |

---

## 3. Layout Dimensions (Mobile)

### Container Heights

| Container | Mobile Height | Notes |
|-----------|--------------|-------|
| **Main Container** | `1738px` | Total page height |
| **Content Wrapper** | `1613px` | Content area height |
| **Info Section** | `1187px` | Info section height |
| **Hero Content** | `1013px` | Hero content area |
| **Description Area** | `322px` | Description section |
| **Form Section** | `878px` | Form section height |
| **Form Fields** | `342px` | Form fields container |

### Container Widths

| Container | Mobile Width | Desktop Width | Difference |
|-----------|--------------|---------------|------------|
| **Content** | `335px` | Full width | - |
| **Info** | `325px` | Full width | - |
| **Form** | `335px` | `876px` max | - |
| **Form Instructions** | `327px` | `730px` max | - |
| **Address** | `325px` | `1226px` max | - |
| **Disclaimer** | `327px` | `730px` max | - |
| **Button** | `294px` | `294px` | Same |
| **Card Content** | `255px` | `364px` / `420px` | - |

---

## 4. Background Image Positioning (Mobile)

| Property | Mobile | Desktop | Difference |
|----------|--------|---------|------------|
| **Image Height** | `124.81%` | `110.36%` | +14.45% |
| **Image Width** | `512.7%` | `164.34%` | +348.36% |
| **Image Left** | `-206.35%` | `-32.17%` | -174.18% |
| **Image Top** | `0.02%` | `18.37%` | -18.35% |

**Note:** Mobile background image is significantly larger and positioned differently to achieve the desired visual effect.

---

## 5. Color Variables (Mobile)

Colors are the same as desktop. See `src/lib/design-tokens.ts` for complete color definitions.

**Key Colors:**
- Brand Blue: `#59c2ff`
- Brand Red: `#d7000f`
- Red Hover: `#b8323d`
- White: `#ffffff`
- Dark Gray: `#212121`
- White 10%: `rgba(255, 255, 255, 0.1)` (cards)
- White 50%: `rgba(255, 255, 255, 0.5)` (inputs)
- Black 30%: `rgba(0, 0, 0, 0.3)` (overlays)

---

## 6. Gradient Variables (Mobile)

### Base Blue Gradient
```css
linear-gradient(90deg, rgba(89, 194, 255, 1) 0%, rgba(89, 194, 255, 1) 100%), 
linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)
```

### Overlay Gradient
```css
linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), 
linear-gradient(0deg, rgba(89, 194, 255, 0) 68.862%, rgba(70, 175, 232, 1) 83.475%)
```

**Note:** Gradients are the same as desktop, but background image positioning differs.

---

## 7. Border & Radius Variables (Mobile)

Same as desktop:
- Border Radius: `4px`
- Border Width (thin): `1px`
- Border Width (medium): `2px`
- Border Style: `solid`

---

## 8. Effects Variables (Mobile)

Same as desktop:
- Text Shadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`
- Backdrop Blur: `6px`
- Overlay Opacity: `0.15`

---

## 9. Tailwind Class Mappings (Mobile)

### Typography Classes

```astro
<!-- Hero Display -->
<div class="text-[60px] leading-[44px] font-anta uppercase italic">
  FIRST ACCESS
</div>

<!-- Top/Bottom Label -->
<p class="text-[14px] leading-[22px] tracking-[14px] uppercase">
  anta beverly hills flagship
</p>

<!-- Description Line 1 -->
<p class="text-[24px] leading-[28px] tracking-[0.72px] uppercase">
  be among the first to experience
</p>

<!-- Description Line 2 -->
<p class="text-[32px] leading-[32px] tracking-[0.96px]">
  the new <span class="font-sharp-grotesk-semibold-15">anta</span> beverly hills flagship
</p>

<!-- Date/Time Card -->
<p class="text-[28px] leading-[20px] tracking-[0.84px] uppercase">
  sat 1.17.26
</p>

<!-- Address -->
<p class="text-[28px] leading-[28px] uppercase">
  330 n bVERLY dR, bEVERLY hILLS, CA 90210
</p>

<!-- Form Instructions -->
<p class="text-[16px] leading-[24px]">
  Please complete the form below to request first access.
</p>

<!-- Button -->
<button class="text-[24px] tracking-[2.4px] uppercase">
  SUBMIT RSVP
</button>

<!-- Disclaimer -->
<p class="text-[14px] leading-[24px] tracking-[0.7px]">
  *LIMITED FIRST ACCESS, GIFTED ITEMS AVAILABLE WHILE SUPPLIES LAST.
</p>
```

### Spacing Classes

```astro
<!-- Page Container -->
<div class="pt-[80px] px-[20px]">
  <!-- Content -->
</div>

<!-- Logo -->
<div class="h-[98px] w-[179px]">
  <!-- Logo SVG -->
</div>

<!-- Form Container -->
<div class="pt-[56px] pb-[20px] px-[24px] gap-[32px]">
  <!-- Form Content -->
</div>

<!-- Date/Time Card -->
<div class="h-[47px] w-[255px] py-[20px]">
  <!-- Card Content -->
</div>

<!-- Button -->
<button class="w-[294px] px-[24px] py-[16px]">
  SUBMIT RSVP
</button>
```

### Background Image Classes

```astro
<!-- Background Image (Mobile) -->
<img 
  alt=""
  class="absolute h-[124.81%] left-[-206.35%] max-w-none top-[0.02%] w-[512.7%]"
  src="/images/home-bg.jpg"
/>
```

---

## 10. Implementation Checklist

When implementing mobile views, ensure:

- [ ] Hero display uses `60px` font size (not `80px`)
- [ ] Hero line height is `44px` (not `70px`)
- [ ] Top/bottom labels use `14px` font size with `14px` tracking
- [ ] Page top padding is `80px` (not `50px`)
- [ ] Logo dimensions are `98px × 179px` (not `103px × 190px`)
- [ ] Form container top padding is `56px` (not `40px`)
- [ ] Form gap is `32px` (not `28px`)
- [ ] Date/time card height is `47px` per row (not `77px`)
- [ ] Button padding Y is `16px` (not `20px`)
- [ ] Button tracking is `2.4px` (not `3.2px`)
- [ ] Form inputs use `14px` font size (not `16px`)
- [ ] Background image uses mobile positioning values
- [ ] All text sizes match mobile specifications
- [ ] All spacing matches mobile specifications

---

## 11. File References

**Design Tokens:**
- `src/lib/design-tokens.ts` - Desktop/general tokens
- `src/lib/design-tokens-mobile.ts` - Mobile-specific tokens (NEW)

**Documentation:**
- `.cursor/rules/design_system_rules.mdc` - Mobile design system rules
- `MOBILE_EXTRACTION.md` - This file

**Implementation:**
- `src/pages/index.astro` - Main landing page (needs mobile updates)

---

## 12. Quick Reference Table

| Category | Mobile Value | Desktop Value | File Reference |
|----------|-------------|---------------|----------------|
| **Hero Font Size** | `60px` | `80px` | `design-tokens-mobile.ts` |
| **Hero Line Height** | `44px` | `70px` | `design-tokens-mobile.ts` |
| **Page Top Padding** | `80px` | `50px` | `design-tokens-mobile.ts` |
| **Logo Height** | `98px` | `103px` | `design-tokens-mobile.ts` |
| **Logo Width** | `179px` | `190px` | `design-tokens-mobile.ts` |
| **Form Container Top** | `56px` | `40px` | `design-tokens-mobile.ts` |
| **Form Gap** | `32px` | `28px` | `design-tokens-mobile.ts` |
| **Card Height** | `47px` | `77px` | `design-tokens-mobile.ts` |
| **Button Padding Y** | `16px` | `20px` | `design-tokens-mobile.ts` |
| **Button Tracking** | `2.4px` | `3.2px` | `design-tokens-mobile.ts` |
| **Input Font Size** | `14px` | `16px` | `design-tokens-mobile.ts` |

---

**Last Updated:** 2025-01-27  
**Extracted From:** Figma Node 213:3 (Mobile Home)  
**Next Steps:** Update `src/pages/index.astro` with mobile-specific values
