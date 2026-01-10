# Implementation Plan - ANTA BHFA MicroSite

**Source:** [Figma Design](https://www.figma.com/design/ifTYSKlWj1kfrZbyU0OrDG/ANTA?node-id=167-2)  
**Node ID:** 167:2 (Home)  
**Date:** 2025-01-27  
**Status:** Analysis Complete

---

## 1. Design Structure Analysis

### 1.1 Hierarchical Component Structure

```
Home (167:2) - Root Container
│
├── Background Layers (aria-hidden, absolute positioned)
│   ├── Blue Base Layer (#59c2ff)
│   ├── Background Image Layer (110.36% × 164.34%, positioned)
│   ├── Gradient Overlays (combined gradients)
│   └── Overlay Image (opacity 0.15)
│
└── Main Content Container (167:6) - Relative positioned, z-10
    │
    ├── Top Label (167:7)
    │   └── "anta beverly hills flagship" (18px, tracking 23.4px)
    │
    └── Info Section (167:9)
        │
        ├── Logo (167:10)
        │   └── ANTA Logo SVG (190px × 103px)
        │
        └── Content Section (167:17)
            │
            ├── Hero Section (167:18)
            │   │
            │   ├── Hero Heading Group (244:3)
            │   │   ├── "FIRST ACCESS" (167:19)
            │   │   │   └── Font: NIKE:Italic, 140px, bold, italic
            │   │   │
            │   │   └── Description (167:24)
            │   │       ├── "be among the first to experience" (40px)
            │   │       └── "the new anta beverly hills flagship" (50px)
            │   │
            │   ├── KAI 3 CNY Text (167:25)
            │   │   ├── "A FIRST LOOK INSIDE THE SPACE," (28px)
            │   │   └── "PLUS THE LAUNCH OF THE KAI 3 CNY" (50px)
            │   │
            │   ├── Date/Time Card (167:26)
            │   │   ├── Date Section (167:27)
            │   │   │   └── "sat 1.17.26" (36px)
            │   │   └── Time Section (167:29)
            │   │       └── "10 AM – 2 PM" (36px)
            │   │
            │   └── Address (244:193)
            │       └── "330 n bVERLY dR, bEVERLY hILLS, CA 90210" (32px)
            │
            └── Form Section (167:31)
                │
                ├── Form Instructions (167:113)
                │   └── "Please complete the form below..." (24px)
                │
                ├── Form Fields Container (167:114)
                │   │
                │   ├── Personal Information Group (244:8)
                │   │   ├── Row 1: First Name + Last Name (167:118)
                │   │   ├── Row 2: Email + Phone (167:124)
                │   │   └── Row 3: Shirt Size + Sneaker Size (167:130)
                │   │
                │   ├── Creator/Media Header (244:6)
                │   │   ├── "Are you creator? Are you with media?" (24px)
                │   │   └── "If so, please enter your details below:" (20px)
                │   │
                │   └── Creator/Media Fields (244:187)
                │       ├── Row 1: Email + Media (244:10)
                │       └── Row 2: Instagram Profile (244:181)
                │
                ├── Submit Button (167:172)
                │   └── "SUBMIT RSVP" (32px, #d7000f)
                │
                └── Footer Section (244:192)
                    ├── Disclaimer (244:190)
                    │   └── "*LIMITED FIRST ACCESS..." (16px, text-shadow)
                    │
                    └── Bottom Label (244:172)
                        └── "anta beverly hills flagship" (18px, tracking 23.4px)
```

### 1.2 Component Breakdown by Visual Sections

#### **Section 1: Background System**
- **Type:** Layered background system
- **Layers:** 4 layers (base color, image, gradients, overlay)
- **Positioning:** Absolute, full viewport coverage
- **Complexity:** Medium (gradient combinations)

#### **Section 2: Header**
- **Type:** Simple text label
- **Content:** "anta beverly hills flagship"
- **Styling:** Uppercase, wide tracking, centered
- **Complexity:** Low

#### **Section 3: Logo**
- **Type:** SVG image
- **Dimensions:** 190px × 103px
- **Complexity:** Low

#### **Section 4: Hero Content**
- **Type:** Multi-part content section
- **Sub-sections:**
  1. Hero heading ("FIRST ACCESS")
  2. Description text (2 lines)
  3. KAI 3 CNY announcement (2 lines)
  4. Date/Time card (2-column layout)
  5. Address text
- **Complexity:** Medium-High (responsive typography, card component)

#### **Section 5: Form Section**
- **Type:** Registration form with backdrop blur
- **Sub-sections:**
  1. Form instructions
  2. Personal information fields (3 rows, 2 columns)
  3. Creator/Media section header
  4. Creator/Media fields (2 rows)
  5. Submit button
  6. Disclaimer and footer
- **Complexity:** High (form validation, responsive layout, UX states)

---

## 2. Component Architecture Plan

### 2.1 Component Organization Strategy

**Approach:** One component per major visual section (following RULE-000: Simplicity First)

```
src/components/
├── BackgroundLayers.astro      # Background system (4 layers)
├── HeroSection.astro           # Hero heading + description + KAI 3 CNY
├── DateTimeCard.astro          # Date/Time card component
├── Address.astro               # Address display
├── FormSection.astro           # Form container + instructions
├── FormFields.astro           # Form input fields (reusable)
├── SubmitButton.astro          # Submit button with states
└── Footer.astro                # Disclaimer + bottom label
```

**Alternative (Simpler):** Keep in `index.astro` with clear section comments (current approach)

**Recommendation:** **Keep current approach** - Single page component is simpler and follows RULE-000. Only extract if components are reused elsewhere.

### 2.2 Current Implementation Status

✅ **Already Implemented:**
- Background layers system
- Top label
- Logo
- Hero heading with responsive typography
- Description text
- KAI 3 CNY text
- Date/Time card (responsive)
- Address
- Form section with backdrop blur
- Form fields (all rows)
- Submit button
- Disclaimer and footer
- Form submission logic with loading/success/error states

### 2.3 Implementation Gaps & Refinements Needed

#### **Gap 1: Font Variant Mismatches**
**Issue:** Figma uses specific font variants that may not match current implementation
- `'Sharp_Grotesk:Book_15'` vs `font-sharp-grotesk`
- `'Sharp_Grotesk:Medium_15'` vs `font-sharp-grotesk-medium-20`
- `'Sharp_Grotesk:SemiBold_15'` vs `font-sharp-grotesk-semibold-25`

**Action:** Verify font files exist or use CSS `letter-spacing` to match tracking values

#### **Gap 2: Typography Refinements**
**Issue:** Some font sizes and line heights may not match exactly
- Hero heading: Should use `italic` class (already implemented ✅)
- Description text: Font variant tracking may differ
- KAI 3 CNY: Font variant tracking may differ

**Action:** Compare current implementation with Figma values, adjust if needed

#### **Gap 3: Layout Dimensions**
**Issue:** Some container widths may not match Figma exactly
- Description container: 1278px (Figma) vs current implementation
- KAI 3 CNY container: 1226px (Figma) vs current implementation
- Address container: 1226px (Figma) vs current implementation

**Action:** Review and adjust max-widths if visual differences exist

#### **Gap 4: Spacing Refinements**
**Issue:** Some spacing values may need adjustment
- Logo top padding: 30px (Figma) vs current implementation
- Hero section gap: 38px (Figma) vs 40px (current)

**Action:** Verify spacing matches Figma design

---

## 3. Implementation Phases

### Phase 1: Verification & Refinement (Current Phase)
**Goal:** Ensure current implementation matches Figma design exactly

**Tasks:**
1. ✅ Extract all design tokens from Figma
2. ✅ Compare with current implementation
3. ⏳ Verify font variants match Figma
4. ⏳ Verify typography scales match Figma
5. ⏳ Verify spacing values match Figma
6. ⏳ Verify layout dimensions match Figma
7. ⏳ Test responsive breakpoints
8. ⏳ Visual comparison with Figma

**Estimated Time:** 2-3 hours

### Phase 2: Component Extraction (Optional)
**Goal:** Extract reusable components if needed for other pages

**Tasks:**
1. Identify components that will be reused
2. Extract to `src/components/`
3. Update `index.astro` to use components
4. Test component isolation

**Estimated Time:** 1-2 hours (only if needed)

### Phase 3: Accessibility Enhancements
**Goal:** Ensure full accessibility compliance

**Tasks:**
1. Verify ARIA attributes
2. Test keyboard navigation
3. Test screen reader compatibility
4. Verify focus states
5. Verify color contrast ratios

**Estimated Time:** 1-2 hours

### Phase 4: Performance Optimization
**Goal:** Optimize loading and rendering performance

**Tasks:**
1. Optimize background images
2. Lazy load form section if needed
3. Optimize font loading
4. Verify Core Web Vitals

**Estimated Time:** 1 hour

---

## 4. Detailed Implementation Checklist

### 4.1 Background System ✅
- [x] Blue base layer (#59c2ff)
- [x] Background image layer (positioned)
- [x] Gradient overlays (combined)
- [x] Overlay image (opacity 0.15)
- [x] Proper z-index layering
- [x] aria-hidden on decorative layers

### 4.2 Typography System ⚠️
- [x] ANTA font (NIKE) for hero heading
- [x] ANTA italic variant for hero heading
- [x] Sharp Grotesk base font
- [ ] Verify all font variants match Figma
- [x] Responsive font sizes (mobile → tablet → desktop)
- [x] Letter spacing values
- [x] Line heights

### 4.3 Hero Section ⚠️
- [x] "FIRST ACCESS" heading (responsive)
- [x] Description text (responsive)
- [x] KAI 3 CNY text (responsive)
- [ ] Verify font variants match Figma exactly
- [ ] Verify container widths match Figma
- [x] Date/Time card component
- [x] Address display

### 4.4 Form Section ✅
- [x] Form container with backdrop blur
- [x] Form instructions
- [x] Personal information fields (3 rows)
- [x] Creator/Media section header
- [x] Creator/Media fields (2 rows)
- [x] Submit button with states
- [x] Form submission logic
- [x] Loading state
- [x] Success state
- [x] Error state
- [x] Form validation

### 4.5 Responsive Design ✅
- [x] Mobile-first approach
- [x] Tablet breakpoint (md: 768px)
- [x] Desktop breakpoint (lg: 1024px)
- [x] Form fields stack on mobile
- [x] Date/Time card stacks on mobile
- [ ] Verify all breakpoints match design

### 4.6 Accessibility ✅
- [x] Semantic HTML
- [x] ARIA attributes (aria-live, aria-busy)
- [x] Form labels
- [x] Keyboard navigation
- [x] Focus states
- [ ] Screen reader testing

---

## 5. Technical Specifications

### 5.1 Layout Specifications

**Page Container:**
- Min height: `100vh`
- Padding: `50px` top, `48px` bottom, `20px` horizontal
- Gap: `20px` between main sections

**Content Container:**
- Max width: None (full width with padding)
- Gap: `40px` between sections

**Hero Section:**
- Gap: `38px` (Figma) vs `40px` (current) - **Needs verification**
- Container widths: `1278px` (description), `1226px` (KAI 3 CNY)

**Form Section:**
- Max width: `876px`
- Padding: `24px` × `40px`
- Backdrop blur: `6px`
- Gap: `28px` between sections

### 5.2 Typography Specifications

**Hero Heading:**
- Font: `NIKE:Italic` (ANTA italic)
- Size: `80px` → `100px` → `140px`
- Line height: `70px` → `90px` → `110px`
- Weight: Bold
- Style: Italic
- Transform: Uppercase

**Description Text:**
- Font: `Sharp Grotesk Medium 25` (first line), `Sharp Grotesk Medium 15` (second line)
- Size: `24px` → `32px` → `40px` (first line), `32px` → `40px` → `50px` (second line)
- Line height: `40px` → `56px` → `56px`
- Letter spacing: `1.2px` (first line), `2.5px` (second line)

**Date/Time Card:**
- Font: `Sharp Grotesk SemiBold 25`
- Size: `28px` → `36px`
- Letter spacing: `1.08px`
- Line height: `20px`

**Form Inputs:**
- Font: `Sharp Grotesk Book 20`
- Size: `16px`
- Color: `#212121`
- Background: `rgba(255, 255, 255, 0.5)`
- Border: `1px solid white`
- Padding: `16px` × `12px`
- Height: `48px`

**Submit Button:**
- Font: `Sharp Grotesk SemiBold 15`
- Size: `24px` → `28px` → `32px`
- Letter spacing: `3.2px`
- Background: `#d7000f`
- Hover: `#b8323d`

### 5.3 Color Specifications

**Brand Colors:**
- Blue: `#59c2ff` (background base)
- Blue gradient: `#46afe8` (gradient end)
- Red: `#d7000f` (buttons)
- Red hover: `#b8323d`

**Neutral Colors:**
- White: `#ffffff` (text, borders)
- Dark gray: `#212121` (form text)
- Black: `#000000`

**Opacity Variants:**
- White 10%: `rgba(255, 255, 255, 0.1)` (cards)
- White 50%: `rgba(255, 255, 255, 0.5)` (form inputs)
- Black 30%: `rgba(0, 0, 0, 0.3)` (overlays)
- Overlay 15%: `0.15` (overlay image)

### 5.4 Spacing Specifications

**Base Spacing:**
- `10px` - Form field gaps
- `12px` - Form field groups
- `16px` - Input padding X
- `20px` - Container padding, card padding Y
- `24px` - Form sections, button padding X
- `28px` - Form container spacing
- `30px` - Logo top padding (Figma)
- `36px` - Content sections, field group gaps
- `38px` - Hero section gap (Figma)
- `40px` - Major sections, form container padding Y
- `48px` - Page padding bottom
- `50px` - Page padding top

---

## 6. Responsive Breakpoints

### Mobile (< 768px)
- Single column layout
- Smaller font sizes
- Stacked form inputs
- Stacked date/time card
- Full-width containers

### Tablet (768px - 1024px)
- Two-column form inputs
- Horizontal date/time card
- Medium font sizes
- Max-width containers

### Desktop (> 1024px)
- Two-column form inputs
- Horizontal date/time card
- Large font sizes
- Max-width containers

---

## 7. Form Field Specifications

### Personal Information Fields
1. **First Name** (required)
   - Type: `text`
   - Autocomplete: `given-name`
   - Placeholder: "First Name"

2. **Last Name** (required)
   - Type: `text`
   - Autocomplete: `family-name`
   - Placeholder: "Last Name"

3. **Email** (required)
   - Type: `email`
   - Autocomplete: `email`
   - Placeholder: "Email Adress" (note: typo in Figma)

4. **Phone Number** (optional)
   - Type: `tel`
   - Autocomplete: `tel`
   - Placeholder: "Phone Number"

5. **Shirt Size** (optional)
   - Type: `select`
   - Options: XS, S, M, L, XL, XXL
   - Placeholder: "Shirt Size"

6. **Sneaker Size** (optional)
   - Type: `select`
   - Options: 5 - 13 (half sizes)
   - Placeholder: "Sneaker Size"

### Creator/Media Fields
1. **Email Address** (optional)
   - Type: `email`
   - Autocomplete: `email`
   - Placeholder: "Email Address"

2. **Media you work with** (optional)
   - Type: `text`
   - Placeholder: "Media you work with"

3. **Instagram Profile** (optional)
   - Type: `text`
   - Placeholder: "Instagram Profile"

---

## 8. Form UX States

### Default State
- All fields visible
- Submit button enabled
- No error messages

### Loading State
- Submit button disabled
- Button shows spinner + "Submitting..."
- `aria-busy="true"` on button
- Form fields remain visible

### Success State
- Submit button replaced with success message
- Success message: "🎉 You're in! We'll be in touch soon with details about the run."
- Form reset
- `aria-live="polite"` on action container

### Error State
- Error message appears below form
- Error message: "Something went wrong. Please try again."
- Submit button restored to default state
- Form fields remain filled
- `aria-live="polite"` on error container

---

## 9. Next Steps

### Immediate Actions (Priority 1)
1. **Verify Font Variants**
   - Check if font files with tracking values exist
   - If not, use CSS `letter-spacing` to match Figma
   - Update font classes if needed

2. **Verify Typography Scales**
   - Compare current implementation with Figma values
   - Adjust font sizes if needed
   - Verify line heights match

3. **Verify Spacing Values**
   - Check logo top padding (30px vs current)
   - Check hero section gap (38px vs 40px)
   - Adjust if visual differences exist

4. **Verify Layout Dimensions**
   - Check container widths match Figma
   - Adjust max-widths if needed

### Short-term Actions (Priority 2)
1. **Visual Comparison**
   - Side-by-side comparison with Figma
   - Identify any visual discrepancies
   - Adjust styling to match exactly

2. **Responsive Testing**
   - Test at 375px (mobile)
   - Test at 768px (tablet)
   - Test at 1280px (desktop)
   - Verify all breakpoints work correctly

3. **Accessibility Audit**
   - Test with screen reader
   - Test keyboard navigation
   - Verify focus states
   - Check color contrast

### Long-term Actions (Priority 3)
1. **Component Extraction** (if needed)
   - Extract reusable components
   - Update component structure
   - Test component isolation

2. **Performance Optimization**
   - Optimize images
   - Optimize fonts
   - Verify Core Web Vitals

---

## 10. Risk Assessment

### Low Risk ✅
- Background system (already implemented)
- Form structure (already implemented)
- Form submission logic (already implemented)

### Medium Risk ⚠️
- Font variant matching (may need CSS adjustments)
- Typography scale matching (may need fine-tuning)
- Spacing value matching (minor adjustments)

### High Risk ❌
- None identified

---

## 11. Success Criteria

### Visual Match
- [ ] Pixel-perfect match with Figma design
- [ ] Typography matches exactly
- [ ] Colors match exactly
- [ ] Spacing matches exactly
- [ ] Layout matches exactly

### Functional Match
- [ ] Form submission works correctly
- [ ] All form states work correctly
- [ ] Responsive breakpoints work correctly
- [ ] Accessibility features work correctly

### Code Quality
- [ ] Follows RULE-000 (Simplicity First)
- [ ] Uses design tokens
- [ ] Clean, maintainable code
- [ ] No linting errors
- [ ] Proper TypeScript types

---

## 12. Estimated Timeline

**Phase 1: Verification & Refinement** - 2-3 hours
**Phase 2: Component Extraction** (optional) - 1-2 hours
**Phase 3: Accessibility Enhancements** - 1-2 hours
**Phase 4: Performance Optimization** - 1 hour

**Total Estimated Time:** 5-8 hours (depending on optional tasks)

---

## Summary

The current implementation is **~90% complete**. The main gaps are:
1. Font variant matching (minor CSS adjustments)
2. Typography scale verification (fine-tuning)
3. Spacing value verification (minor adjustments)
4. Layout dimension verification (minor adjustments)

**Recommendation:** Focus on Phase 1 (Verification & Refinement) to ensure pixel-perfect match with Figma design. The implementation is already solid; it just needs fine-tuning.
