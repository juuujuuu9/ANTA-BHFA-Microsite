# ANTA Logo - Visual Structure Analysis

**Figma Node:** `167:10` (Frame 2)  
**Component Type:** Logo/Brand Identity

---

## Visual Hierarchy

```
┌─────────────────────────────────────┐
│         Frame 2 (190×103px)         │
│  ┌───────────────────────────────┐  │
│  │   Union (167:11)              │  │
│  │   ┌─────────────────────────┐ │  │
│  │   │  Graphic Element        │ │  │
│  │   │  (Swoosh/Arrow)         │ │  │
│  │   │  Color: White           │ │  │
│  │   └─────────────────────────┘ │  │
│  │   ┌─────────────────────────┐ │  │
│  │   │  Brand Text "ANTA"      │ │  │
│  │   │  Uppercase, Bold        │ │  │
│  │   │  Color: White           │ │  │
│  │   └─────────────────────────┘ │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

---

## Component Breakdown

### 1. Container
- **Type:** Frame/Div wrapper
- **Dimensions:** 190px × 103px
- **Position:** Relative
- **Purpose:** Provides sizing context

### 2. SVG Element
- **ViewBox:** `0 0 191 103`
- **Dimensions:** 191×103 (1px larger for proper rendering)
- **Fill:** None (transparent background)
- **Purpose:** Scalable vector container

### 3. Path Element
- **Type:** Single `<path>` element
- **Content:** Complex path data (logo shape + text)
- **Fill:** White (#ffffff)
- **Purpose:** Renders entire logo (graphic + text)

---

## Design Specifications

### Dimensions
```
Width:  190px (container)
Height: 103px (container)
SVG:    191×103 (viewBox accounts for stroke)
```

### Colors
```
Fill:   #ffffff (white)
Background: #59c2ff (ANTA blue - contextual)
```

### Typography
```
Font:   Custom (embedded in SVG path)
Style:  Bold, Uppercase
Weight: Bold
```

---

## Implementation Comparison

### Figma Structure
```
Frame 2 (167:10)
  └── Union (167:11)
      ├── Graphic Path
      └── Text Path
```

### Current Code Structure
```astro
<div class="h-[103px] w-[190px] relative">
  <svg width="191" height="103" viewBox="0 0 191 103">
    <path d="..." fill="white" />
  </svg>
</div>
```

### Proposed Component Structure (If Extracted)
```astro
<Logo 
  width={190}
  height={103}
  color="white"
/>
```

---

## Design Token Mapping

| Figma Value | Design Token | Tailwind Class | CSS Variable |
|------------|--------------|----------------|--------------|
| 190px width | `layout.logo.width` | `w-[190px]` | `--logo-width` |
| 103px height | `layout.logo.height` | `h-[103px]` | `--logo-height` |
| White fill | `colors.neutral.white` | `fill-white` | `--color-white` |

---

## Responsive Considerations

### Current
- Fixed size (190×103px)
- No responsive scaling

### Potential Enhancements
```astro
<!-- Small screens -->
<Logo class="w-[95px] h-[52px]" />

<!-- Medium screens -->
<Logo class="md:w-[190px] md:h-[103px]" />

<!-- Large screens -->
<Logo class="lg:w-[285px] lg:h-[155px]" />
```

---

## Accessibility Structure

### Current
```html
<svg>  <!-- No label -->
  <path />
</svg>
```

### Recommended
```html
<svg 
  aria-label="ANTA Logo"
  role="img"
>
  <title>ANTA Logo</title>
  <path />
</svg>
```

---

## File Organization

### Current Structure
```
src/pages/index.astro
  └── Inline SVG (lines 47-51)
```

### Proposed Structure (If Extracted)
```
src/components/
  └── Logo.astro
      ├── Props interface
      ├── SVG markup
      └── Design token imports
```

---

## Usage Patterns

### Single Use (Current)
```astro
<!-- index.astro -->
<div class="h-[103px] w-[190px] relative">
  <svg>...</svg>
</div>
```

### Multiple Uses (If Extracted)
```astro
<!-- index.astro -->
<Logo />

<!-- header.astro -->
<Logo size="small" />

<!-- footer.astro -->
<Logo size="small" color="dark" />
```

---

## Decision Matrix

| Factor | Keep Inline | Extract Component |
|--------|-------------|-------------------|
| **Uses** | 1 location | 3+ locations |
| **Complexity** | Low | Medium |
| **Maintainability** | Good | Better |
| **Reusability** | N/A | High |
| **RULE-000 Compliance** | ✅ Simple | ⚠️ If needed |
| **Recommendation** | ✅ **Current** | ⏳ **Future** |

---

**Status:** Analysis Complete - Keep Inline (Following RULE-000)
