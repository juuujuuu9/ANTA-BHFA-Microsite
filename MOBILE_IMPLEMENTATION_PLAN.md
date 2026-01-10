# Mobile Implementation Plan

**Source:** [Figma Mobile Design - Node 213:3](https://www.figma.com/design/ifTYSKlWj1kfrZbyU0OrDG/ANTA?node-id=213-3)  
**Current File:** `src/pages/index.astro`  
**Created:** 2025-01-27

---

## 1. Structure Analysis

### 1.1 Figma Mobile Structure (Node 213:3)

```
Mobile Home (213:3)
├── Background Layers (absolute, inset-0)
│   ├── Blue base gradient
│   ├── Background image (h-[124.81%], w-[512.7%], left-[-206.35%])
│   ├── Overlay gradients
│   └── Overlay image (opacity-15)
│
└── Main Content Container (213:178) [absolute, top-[80px], left-[20px], w-[335px]]
    ├── Top Label (213:179) [text-[14px], tracking-[14px]]
    │
    ├── Content Wrapper (213:180) [h-[1613px], w-[335px], pt-[16px]]
    │   └── Info Section (213:181) [h-[1187px], w-[325px], gap-[30px]]
    │       ├── Logo (213:182) [h-[98px], w-[179px]]
    │       │
    │       └── Hero Content (213:189) [gap-[80px], h-[1013px]]
    │           └── Hero Section (213:190) [gap-[40px]]
    │               ├── FIRST ACCESS Heading (213:191) [text-[60px], leading-[44px]]
    │               │
    │               └── Description Area (213:192) [h-[322px]]
    │                   └── Content (213:193) [gap-[30px]]
    │                       ├── Description Text (213:194) [gap-[32px]]
    │                       │   ├── Line 1 (213:195) [text-[24px], leading-[28px], tracking-[0.72px]]
    │                       │   └── Line 2 (272:160) [text-[32px], leading-[32px], tracking-[0.96px]]
    │                       │
    │                       ├── KAI Text (272:167) [gap-[12px]]
    │                       │   ├── Line 1 (213:197) [text-[20px], leading-[28px], tracking-[0.6px]]
    │                       │   └── Line 2 (272:165) [text-[32px], leading-[32px], tracking-[0.96px]]
    │                       │
    │                       └── Date/Time Card (213:198) [flex-col, h-[47px] per row, w-[255px]]
    │                           ├── Date (213:199) [text-[28px], tracking-[0.84px]]
    │                           └── Time (213:201) [text-[28px], tracking-[0.84px]]
    │
    │           └── Form Section (213:203) [backdrop-blur, gap-[32px], pt-[56px], pb-[20px], px-[24px]]
    │               ├── Address (272:169) [text-[28px], leading-[28px], w-[325px]]
    │               ├── Form Instructions (272:171) [text-[16px], leading-[24px], w-[327px]]
    │               │
    │               └── Form Fields Container (213:286) [gap-[24px], h-[342px], w-[335px]]
    │                   ├── Personal Info Fields (213:287) [w-[335px]]
    │                   │   └── Field Groups (213:288) [gap-[12px]]
    │                   │       ├── Group 1 (213:289) [gap-[10px]]
    │                   │       │   ├── First Name (213:291) [text-[14px]]
    │                   │       │   └── Last Name (213:293) [text-[14px]]
    │                   │       ├── Group 2 (213:295) [gap-[10px]]
    │                   │       │   ├── Email (213:297) [text-[14px]]
    │                   │       │   └── Phone (213:299) [text-[14px]]
    │                   │       └── Group 3 (213:301) [gap-[10px]]
    │                   │           ├── Shirt Size (213:303) [text-[14px]]
    │                   │           └── Sneaker Size (213:305) [text-[14px]]
    │                   │
    │                   └── Creator/Media Section (272:227) [gap-[24px]]
    │                       ├── Question (272:196) [gap-[10px]]
    │                       │   ├── Question Text (272:197) [text-[20px], leading-[28px]]
    │                       │   └── Fields (272:222) [gap-[10px]]
    │                       │       ├── Email (272:208) [text-[14px]]
    │                       │       ├── Media (272:210) [text-[14px]]
    │                       │       └── Instagram (272:213) [text-[14px]]
    │                       │
    │                       ├── Button (213:344) [w-[294px], px-[24px], py-[16px], text-[24px], tracking-[2.4px]]
    │                       └── Disclaimer (272:228) [text-[14px], leading-[24px], tracking-[0.7px], w-[327px]]
    │
    └── Bottom Label (213:348) [text-[14px], tracking-[14px], w-[335px]]
```

### 1.2 Current Implementation Structure

```
Layout
└── Main Container [pt-[50px], px-0]
    ├── Background Layers [fixed positioning]
    │
    └── Content Container [gap-[40px], px-[20px]]
        ├── Top Label [text-[18px], tracking-[23.4px]]
        │
        └── Info Section [gap-[40px]]
            ├── Logo [h-[103px], w-[190px]]
            │
            └── Main Content [gap-[40px]]
                ├── Hero Section [gap-[38px]]
                │   ├── FIRST ACCESS [text-[80px], leading-[70px]]
                │   ├── Description [text-[24px] → text-[32px]]
                │   ├── KAI Text [text-[20px] → text-[32px]]
                │   └── Date/Time Card [h-[77px], md:flex-row]
                │
                ├── Address [text-[20px] → text-[32px]]
                │
                └── Form Section [gap-[28px], py-[40px]]
                    ├── Form Instructions [text-2xl]
                    ├── Form Fields [gap-[36px]]
                    │   ├── Personal Info [md:flex-row]
                    │   └── Creator/Media [md:flex-row]
                    ├── Button [text-[24px] → text-[32px], tracking-[3.2px]]
                    └── Disclaimer [text-[16px]]
```

---

## 2. Key Structural Differences

### 2.1 Container Structure

| Aspect | Figma Mobile | Current Implementation | Change Needed |
|--------|--------------|----------------------|---------------|
| **Page Top Padding** | `80px` | `50px` | ✅ Update to `pt-[80px]` |
| **Content Width** | `335px` (fixed) | `w-full` | ✅ Add `w-[335px]` on mobile |
| **Content Positioning** | `absolute`, `top-[80px]`, `left-[20px]` | `relative`, centered | ⚠️ Consider if absolute needed |
| **Content Wrapper** | Explicit wrapper with `h-[1613px]`, `pt-[16px]` | No explicit wrapper | ⚠️ May not need explicit height |

### 2.2 Typography Differences

| Element | Figma Mobile | Current Mobile | Change Needed |
|---------|--------------|----------------|---------------|
| **Top Label** | `text-[14px]`, `tracking-[14px]` | `text-[18px]`, `tracking-[23.4px]` | ✅ Update |
| **Hero** | `text-[60px]`, `leading-[44px]` | `text-[80px]`, `leading-[70px]` | ✅ Update |
| **Description L1** | `text-[24px]`, `leading-[28px]`, `tracking-[0.72px]` | `text-[24px]`, `leading-[40px]`, `tracking-[1.2px]` | ✅ Update |
| **Description L2** | `text-[32px]`, `leading-[32px]`, `tracking-[0.96px]` | `text-[32px]`, `leading-[56px]`, `tracking-[2.5px]` | ✅ Update |
| **KAI L1** | `text-[20px]`, `leading-[28px]`, `tracking-[0.6px]` | `text-[20px]`, `leading-[40px]`, `tracking-[0.84px]` | ✅ Update |
| **KAI L2** | `text-[32px]`, `leading-[32px]`, `tracking-[0.96px]` | `text-[32px]`, `leading-[56px]`, `tracking-[1.5px]` | ✅ Update |
| **Date/Time** | `text-[28px]`, `leading-[20px]`, `tracking-[0.84px]` | `text-[28px]`, `leading-[20px]`, `tracking-[1.08px]` | ✅ Update |
| **Address** | `text-[28px]`, `leading-[28px]` | `text-[20px]`, `leading-[32px]` | ✅ Update |
| **Form Instructions** | `text-[16px]`, `leading-[24px]` | `text-2xl` (24px) | ✅ Update |
| **Inputs** | `text-[14px]` | `text-[16px]` | ✅ Update |
| **Button** | `text-[24px]`, `tracking-[2.4px]` | `text-[24px]`, `tracking-[3.2px]` | ✅ Update |
| **Disclaimer** | `text-[14px]`, `leading-[24px]`, `tracking-[0.7px]` | `text-[16px]`, `leading-[32px]`, `tracking-[0.8px]` | ✅ Update |
| **Bottom Label** | `text-[14px]`, `tracking-[14px]` | `text-[18px]`, `tracking-[23.4px]` | ✅ Update |

### 2.3 Spacing Differences

| Element | Figma Mobile | Current Mobile | Change Needed |
|---------|--------------|----------------|---------------|
| **Logo** | `h-[98px]`, `w-[179px]` | `h-[103px]`, `w-[190px]` | ✅ Update |
| **Info Gap** | `gap-[30px]` | `gap-[40px]` | ✅ Update |
| **Hero Gap** | `gap-[40px]` | `gap-[40px]` | ✅ Same |
| **Description Gap** | `gap-[32px]` | `gap-[36px]` | ✅ Update |
| **Form Container** | `pt-[56px]`, `gap-[32px]` | `py-[40px]`, `gap-[28px]` | ✅ Update |
| **Card Height** | `h-[47px]` per row | `h-[77px]` | ✅ Update |
| **Card Width** | `w-[255px]` | `w-full` | ✅ Update |
| **Button Padding** | `py-[16px]` | `py-[7px] pt-[10px]` | ✅ Update |

### 2.4 Layout Differences

| Element | Figma Mobile | Current Mobile | Change Needed |
|---------|--------------|----------------|---------------|
| **Form Fields** | Stacked vertically (no `md:flex-row`) | `md:flex-row` | ⚠️ Keep `md:flex-row` for desktop |
| **Date/Time Card** | `flex-col` (stacked) | `flex-col md:flex-row` | ✅ Same (correct) |
| **Address Position** | Inside form section, before instructions | Outside form section | ✅ Move inside form section |

### 2.5 Background Image Differences

| Property | Figma Mobile | Current | Change Needed |
|----------|--------------|---------|---------------|
| **Height** | `124.81%` | `object-cover` (100%) | ✅ Update |
| **Width** | `512.7%` | `100%` | ✅ Update |
| **Left** | `-206.35%` | `0` | ✅ Update |
| **Top** | `0.02%` | `0` | ✅ Update |

---

## 3. Implementation Plan

### Phase 1: Background Layers ✅

**Task 1.1:** Update background image positioning for mobile
- [ ] Change background image classes to mobile-specific values
- [ ] Update gradient overlays if needed
- [ ] Test background rendering on mobile viewport

**Changes:**
```astro
<!-- Current -->
<img class="fixed inset-0 object-cover object-center" src="/images/home-bg.jpg" />

<!-- Mobile -->
<img class="absolute h-[124.81%] left-[-206.35%] max-w-none top-[0.02%] w-[512.7%]" src="/images/home-bg.jpg" />
```

---

### Phase 2: Page Container ✅

**Task 2.1:** Update page top padding
- [ ] Change `pt-[50px]` to `pt-[80px]` (mobile base)
- [ ] Keep responsive: `pt-[80px] md:pt-[50px]` or just `pt-[80px]` if mobile-first

**Task 2.2:** Update content container width
- [ ] Add mobile width constraint: `w-full max-w-[335px] md:max-w-none`
- [ ] Or use `w-[335px] md:w-full` if fixed width needed

---

### Phase 3: Typography Updates ✅

**Task 3.1:** Top/Bottom Labels
- [ ] Update font size: `text-[14px] md:text-[18px]`
- [ ] Update tracking: `tracking-[14px] md:tracking-[23.4px]`
- [ ] Update line height: `leading-[22px]`

**Task 3.2:** Hero Display
- [ ] Update font size: `text-[60px] md:text-[80px] lg:text-[100px]`
- [ ] Update line height: `leading-[44px] md:leading-[70px] lg:leading-[90px]`
- [ ] Ensure italic font: `italic`

**Task 3.3:** Description Text
- [ ] Line 1: `text-[24px] leading-[28px] tracking-[0.72px] md:text-[32px] md:leading-[40px] md:tracking-[1.2px]`
- [ ] Line 2: `text-[32px] leading-[32px] tracking-[0.96px] md:text-[40px] md:leading-[56px] md:tracking-[2.5px]`

**Task 3.4:** KAI Text
- [ ] Line 1: `text-[20px] leading-[28px] tracking-[0.6px] md:text-[24px] md:leading-[40px] md:tracking-[0.84px]`
- [ ] Line 2: `text-[32px] leading-[32px] tracking-[0.96px] md:text-[40px] md:leading-[56px] md:tracking-[1.5px]`

**Task 3.5:** Date/Time Card
- [ ] Update font size: `text-[28px] md:text-[36px]`
- [ ] Update tracking: `tracking-[0.84px] md:tracking-[1.08px]`
- [ ] Line height stays: `leading-[20px]`

**Task 3.6:** Address
- [ ] Update font size: `text-[28px] md:text-[24px] lg:text-[32px]`
- [ ] Update line height: `leading-[28px] md:leading-[40px] lg:leading-[56px]`
- [ ] Move inside form section (before form instructions)

**Task 3.7:** Form Instructions
- [ ] Update font size: `text-[16px] md:text-[20px]`
- [ ] Update line height: `leading-[24px] md:leading-[32px]`

**Task 3.8:** Form Inputs
- [ ] Update font size: `text-[14px] md:text-[16px]`
- [ ] Update placeholder font size: `placeholder:text-[14px] md:placeholder:text-[16px]`

**Task 3.9:** Button
- [ ] Update font size: `text-[24px] md:text-[28px] lg:text-[32px]`
- [ ] Update tracking: `tracking-[2.4px] md:tracking-[3.2px]`
- [ ] Update padding: `py-[16px] md:py-[20px]`

**Task 3.10:** Disclaimer
- [ ] Update font size: `text-[14px] md:text-[16px]`
- [ ] Update line height: `leading-[24px] md:leading-[32px]`
- [ ] Update tracking: `tracking-[0.7px] md:tracking-[0.8px]`

---

### Phase 4: Spacing Updates ✅

**Task 4.1:** Logo Dimensions
- [ ] Update height: `h-[98px] md:h-[103px]`
- [ ] Update width: `w-[179px] md:w-[190px]`

**Task 4.2:** Info Section Gap
- [ ] Update gap: `gap-[30px] md:gap-[40px]`

**Task 4.3:** Description Gap
- [ ] Update gap: `gap-[32px] md:gap-[36px]`

**Task 4.4:** Form Container
- [ ] Update top padding: `pt-[56px] md:pt-[40px]`
- [ ] Update gap: `gap-[32px] md:gap-[28px]`

**Task 4.5:** Date/Time Card
- [ ] Update height: `h-[47px] md:h-[77px]`
- [ ] Update width: `w-[255px] md:w-[364px]` (date) / `md:w-[420px]` (time)

---

### Phase 5: Layout Restructuring ✅

**Task 5.1:** Move Address Inside Form Section
- [ ] Move address element before form instructions
- [ ] Update address styling for mobile

**Task 5.2:** Ensure Form Fields Stack on Mobile
- [ ] Verify `flex-col` is base (mobile)
- [ ] Ensure `md:flex-row` for desktop
- [ ] All form field groups should stack vertically on mobile

**Task 5.3:** Date/Time Card Layout
- [ ] Ensure `flex-col` on mobile (already correct)
- [ ] Verify `md:flex-row` for desktop

---

### Phase 6: Component-Specific Updates ✅

**Task 6.1:** Creator/Media Section
- [ ] Update question text sizes for mobile
- [ ] Ensure fields stack vertically on mobile
- [ ] Update spacing if needed

**Task 6.2:** Button Component
- [ ] Update width: `w-[294px]` (fixed on mobile, same on desktop)
- [ ] Update padding: `py-[16px] md:py-[20px]`
- [ ] Update font size and tracking (see Typography section)

---

## 4. Implementation Order

### Step 1: Quick Wins (High Impact, Low Risk)
1. ✅ Update page top padding (`pt-[80px]`)
2. ✅ Update logo dimensions
3. ✅ Update top/bottom labels typography
4. ✅ Update hero typography

### Step 2: Typography Updates (Medium Impact)
5. ✅ Update description text typography
6. ✅ Update KAI text typography
7. ✅ Update date/time card typography
8. ✅ Update address typography
9. ✅ Update form instructions typography
10. ✅ Update button typography
11. ✅ Update disclaimer typography

### Step 3: Spacing & Layout (Medium Impact)
12. ✅ Update info section gap
13. ✅ Update form container spacing
14. ✅ Update date/time card dimensions
15. ✅ Move address inside form section

### Step 4: Form Updates (High Impact)
16. ✅ Update form input font sizes
17. ✅ Ensure form fields stack correctly on mobile
18. ✅ Update creator/media section

### Step 5: Background & Polish (Low Impact, High Polish)
19. ✅ Update background image positioning
20. ✅ Test all breakpoints
21. ✅ Verify spacing matches Figma
22. ✅ Final visual comparison

---

## 5. Testing Checklist

After implementation, test:

- [ ] **Mobile Viewport (375px)**
  - [ ] All typography matches Figma specs
  - [ ] All spacing matches Figma specs
  - [ ] Form fields stack vertically
  - [ ] Date/time card stacks vertically
  - [ ] Background image renders correctly
  - [ ] Logo dimensions correct
  - [ ] Button width and padding correct

- [ ] **Tablet Viewport (768px)**
  - [ ] Responsive breakpoints work correctly
  - [ ] Form fields switch to side-by-side
  - [ ] Date/time card switches to horizontal
  - [ ] Typography scales appropriately

- [ ] **Desktop Viewport (1280px)**
  - [ ] All desktop values apply correctly
  - [ ] Layout matches desktop design
  - [ ] No mobile-specific styles leak through

- [ ] **Functionality**
  - [ ] Form submission works
  - [ ] Form validation works
  - [ ] Loading states display correctly
  - [ ] Error states display correctly
  - [ ] Success states display correctly

---

## 6. File Changes Summary

### Files to Modify:
1. **`src/pages/index.astro`** - Main implementation file
   - Update all typography classes
   - Update all spacing classes
   - Update layout structure
   - Update background image positioning

### Files Already Created:
1. **`src/lib/design-tokens-mobile.ts`** - Mobile design tokens ✅
2. **`.cursor/rules/design_system_rules.mdc`** - Design system rules ✅
3. **`MOBILE_EXTRACTION.md`** - Extraction documentation ✅
4. **`MOBILE_IMPLEMENTATION_PLAN.md`** - This file ✅

---

## 7. Estimated Effort

- **Phase 1 (Background):** 15 minutes
- **Phase 2 (Container):** 10 minutes
- **Phase 3 (Typography):** 45 minutes
- **Phase 4 (Spacing):** 20 minutes
- **Phase 5 (Layout):** 15 minutes
- **Phase 6 (Components):** 15 minutes
- **Testing & Polish:** 30 minutes

**Total Estimated Time:** ~2.5 hours

---

## 8. Notes

- **Mobile-First Approach:** All base styles should be mobile, then add `md:` and `lg:` breakpoints
- **Preserve Desktop:** Ensure desktop functionality remains intact
- **Incremental Updates:** Make changes incrementally and test after each phase
- **Reference Files:** Use `design-tokens-mobile.ts` for type-safe token access
- **Figma Comparison:** Compare side-by-side with Figma during implementation

---

**Last Updated:** 2025-01-27  
**Status:** Ready for Implementation  
**Next Step:** Begin Phase 1 - Background Layers
