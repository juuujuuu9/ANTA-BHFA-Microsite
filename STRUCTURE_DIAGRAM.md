# Design Structure Diagram

**Source:** [Figma Design](https://www.figma.com/design/ifTYSKlWj1kfrZbyU0OrDG/ANTA?node-id=167-2)  
**Visual representation of component hierarchy and layout**

---

## Visual Component Tree

```
┌─────────────────────────────────────────────────────────────┐
│                    Home (167:2)                             │
│              Full Viewport Container                        │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │     Background Layers (aria-hidden)                  │ │
│  │     ┌─────────────────────────────────────────────┐  │ │
│  │     │ Layer 1: Blue Base (#59c2ff)                │  │ │
│  │     └─────────────────────────────────────────────┘  │ │
│  │     ┌─────────────────────────────────────────────┐  │ │
│  │     │ Layer 2: Background Image                   │  │ │
│  │     │ (110.36% × 164.34%, positioned)             │  │ │
│  │     └─────────────────────────────────────────────┘  │ │
│  │     ┌─────────────────────────────────────────────┐  │ │
│  │     │ Layer 3: Gradient Overlays                  │  │ │
│  │     │ (Combined gradients)                        │  │ │
│  │     └─────────────────────────────────────────────┘  │ │
│  │     ┌─────────────────────────────────────────────┐  │ │
│  │     │ Layer 4: Overlay Image (opacity 0.15)      │  │ │
│  │     └─────────────────────────────────────────────┘  │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │     Main Content Container (167:6)                  │ │
│  │     Relative, z-10, Padding: 50px/48px/20px        │ │
│  │                                                       │ │
│  │  ┌───────────────────────────────────────────────┐  │ │
│  │  │ Top Label (167:7)                             │  │ │
│  │  │ "anta beverly hills flagship"                 │  │ │
│  │  │ 18px, tracking 23.4px, uppercase             │  │ │
│  │  └───────────────────────────────────────────────┘  │ │
│  │                                                       │ │
│  │  ┌───────────────────────────────────────────────┐  │ │
│  │  │ Info Section (167:9)                           │  │ │
│  │  │ Gap: 40px                                      │  │ │
│  │  │                                                 │  │ │
│  │  │  ┌─────────────────────────────────────────┐  │  │ │
│  │  │  │ Logo (167:10)                            │  │  │ │
│  │  │  │ 190px × 103px SVG                        │  │  │ │
│  │  │  └─────────────────────────────────────────┘  │  │ │
│  │  │                                                 │  │ │
│  │  │  ┌─────────────────────────────────────────┐  │  │ │
│  │  │  │ Content Section (167:17)                 │  │  │ │
│  │  │  │ Gap: 20px                                │  │  │ │
│  │  │  │                                           │  │  │ │
│  │  │  │  ┌─────────────────────────────────────┐ │  │  │ │
│  │  │  │  │ Hero Section (167:18)               │ │  │  │ │
│  │  │  │  │ Gap: 40px                           │ │  │  │ │
│  │  │  │  │                                       │ │  │  │ │
│  │  │  │  │  ┌───────────────────────────────┐  │ │  │  │ │
│  │  │  │  │  │ Hero Heading Group (244:3)  │  │ │  │  │ │
│  │  │  │  │  │ Gap: 36px                     │  │ │  │  │ │
│  │  │  │  │  │                                 │  │ │  │  │ │
│  │  │  │  │  │ ┌───────────────────────────┐ │  │ │  │  │ │
│  │  │  │  │  │ │ "FIRST ACCESS" (167:19)    │ │  │ │  │  │ │
│  │  │  │  │  │ │ 140px, italic, bold        │ │  │ │  │  │ │
│  │  │  │  │  │ └───────────────────────────┘ │  │ │  │  │ │
│  │  │  │  │  │                                 │  │ │  │  │ │
│  │  │  │  │  │ ┌───────────────────────────┐ │  │ │  │  │ │
│  │  │  │  │  │ │ Description (167:24)        │ │  │ │  │  │ │
│  │  │  │  │  │ │ Min-height: 121px           │ │  │ │  │  │ │
│  │  │  │  │  │ │ - "be among the first..."   │ │  │ │  │  │ │
│  │  │  │  │  │ │ - "the new anta..."         │ │  │ │  │  │ │
│  │  │  │  │  │ └───────────────────────────┘ │  │ │  │  │ │
│  │  │  │  │  └───────────────────────────────┘  │ │  │  │ │
│  │  │  │  │                                       │ │  │  │ │
│  │  │  │  │  ┌───────────────────────────────┐  │ │  │  │ │
│  │  │  │  │  │ KAI 3 CNY Text (167:25)        │  │ │  │  │ │
│  │  │  │  │  │ Width: 1226px                  │  │ │  │  │ │
│  │  │  │  │  │ - "A FIRST LOOK..."            │  │ │  │  │ │
│  │  │  │  │  │ - "PLUS THE LAUNCH..."         │  │ │  │  │ │
│  │  │  │  │  └───────────────────────────────┘  │ │  │  │ │
│  │  │  │  └─────────────────────────────────────┘ │  │  │ │
│  │  │  │                                           │  │  │ │
│  │  │  │  ┌─────────────────────────────────────┐ │  │  │ │
│  │  │  │  │ Date/Time Card (167:26)              │ │  │  │ │
│  │  │  │  │ Max-width: 854px                     │ │  │  │ │
│  │  │  │  │ Background: rgba(255,255,255,0.1)     │ │  │  │ │
│  │  │  │  │ Border: 2px rgba(255,255,255,0.5)   │ │  │  │ │
│  │  │  │  │                                       │ │  │  │ │
│  │  │  │  │ ┌─────────────┐ ┌─────────────┐    │ │  │  │ │
│  │  │  │  │ │ Date        │ │ Time         │    │ │  │  │ │
│  │  │  │  │ │ (167:27)    │ │ (167:29)     │    │ │  │  │ │
│  │  │  │  │ │ 364px       │ │ 420px        │    │ │  │  │ │
│  │  │  │  │ │ "sat 1.17"  │ │ "10 AM-2 PM" │    │ │  │  │ │
│  │  │  │  │ └─────────────┘ └─────────────┘    │ │  │  │ │
│  │  │  │  └─────────────────────────────────────┘ │  │  │ │
│  │  │  └─────────────────────────────────────────────┘  │  │ │
│  │  │                                                   │  │ │
│  │  │  ┌─────────────────────────────────────────────┐ │  │ │
│  │  │  │ Address (244:193)                            │ │  │ │
│  │  │  │ Width: 1226px                                │ │  │ │
│  │  │  │ "330 n bVERLY dR..."                         │ │  │ │
│  │  │  └─────────────────────────────────────────────┘ │  │ │
│  │  └─────────────────────────────────────────────────┘  │  │ │
│  │                                                         │  │ │
│  │  ┌─────────────────────────────────────────────────┐  │  │ │
│  │  │ Form Section (167:31)                            │  │  │ │
│  │  │ Backdrop blur: 6px                              │  │  │ │
│  │  │ Padding: 24px × 40px                            │  │  │ │
│  │  │ Gap: 28px                                        │  │  │ │
│  │  │                                                   │  │  │ │
│  │  │  ┌───────────────────────────────────────────┐ │  │  │ │
│  │  │  │ Form Instructions (167:113)                │ │  │  │ │
│  │  │  │ Max-width: 730px                           │ │  │  │ │
│  │  │  │ "Please complete the form..."                │ │  │  │ │
│  │  │  └───────────────────────────────────────────┘ │  │  │ │
│  │  │                                                   │  │  │ │
│  │  │  ┌───────────────────────────────────────────┐ │  │  │ │
│  │  │  │ Form Fields Container (167:114)             │ │  │  │ │
│  │  │  │ Max-width: 876px                           │ │  │  │ │
│  │  │  │ Gap: 24px                                   │ │  │  │ │
│  │  │  │                                               │ │  │  │ │
│  │  │  │  ┌───────────────────────────────────────┐ │ │  │  │ │
│  │  │  │  │ Personal Info Group (244:8)             │ │ │  │  │ │
│  │  │  │  │ Gap: 36px                               │ │ │  │  │ │
│  │  │  │  │                                           │ │ │  │  │ │
│  │  │  │  │ Row 1: ┌──────────┐ ┌──────────┐      │ │ │  │  │ │
│  │  │  │  │        │First Name│ │Last Name │      │ │ │  │  │ │
│  │  │  │  │        └──────────┘ └──────────┘      │ │ │  │  │ │
│  │  │  │  │                                           │ │ │  │  │ │
│  │  │  │  │ Row 2: ┌──────────┐ ┌──────────┐      │ │ │  │  │ │
│  │  │  │  │        │Email     │ │Phone     │      │ │ │  │  │ │
│  │  │  │  │        └──────────┘ └──────────┘      │ │ │  │  │ │
│  │  │  │  │                                           │ │ │  │  │ │
│  │  │  │  │ Row 3: ┌──────────┐ ┌──────────┐      │ │ │  │  │ │
│  │  │  │  │        │Shirt Size│ │Sneaker   │      │ │ │  │  │ │
│  │  │  │  │        └──────────┘ └──────────┘      │ │ │  │  │ │
│  │  │  │  └───────────────────────────────────────┘ │ │  │  │ │
│  │  │  │                                               │ │  │  │ │
│  │  │  │  ┌───────────────────────────────────────┐ │ │  │  │ │
│  │  │  │  │ Creator/Media Header (244:6)            │ │ │  │  │ │
│  │  │  │  │ Max-width: 730px                        │ │ │  │  │ │
│  │  │  │  │ "Are you creator?..."                   │ │ │  │  │ │
│  │  │  │  └───────────────────────────────────────┘ │ │  │  │ │
│  │  │  │                                               │ │  │  │ │
│  │  │  │  ┌───────────────────────────────────────┐ │ │  │  │ │
│  │  │  │  │ Creator/Media Fields (244:187)        │ │ │  │  │ │
│  │  │  │  │ Gap: 12px                               │ │ │  │  │ │
│  │  │  │  │                                           │ │ │  │  │ │
│  │  │  │  │ Row 1: ┌──────────┐ ┌──────────┐      │ │ │  │  │ │
│  │  │  │  │        │Email     │ │Media     │      │ │ │  │  │ │
│  │  │  │  │        └──────────┘ └──────────┘      │ │ │  │  │ │
│  │  │  │  │                                           │ │ │  │  │ │
│  │  │  │  │ Row 2: ┌──────────────────────────┐   │ │ │  │  │ │
│  │  │  │  │        │Instagram Profile          │   │ │ │  │  │ │
│  │  │  │  │        │(full width)               │   │ │ │  │  │ │
│  │  │  │  │        └──────────────────────────┘   │ │ │  │  │ │
│  │  │  │  └───────────────────────────────────────┘ │ │  │  │ │
│  │  │  └───────────────────────────────────────────┘ │  │  │ │
│  │  │                                                   │  │  │ │
│  │  │  ┌───────────────────────────────────────────┐ │  │  │ │
│  │  │  │ Submit Button (167:172)                      │ │  │  │ │
│  │  │  │ Width: 294px (desktop)                      │ │  │  │ │
│  │  │  │ Background: #d7000f                         │ │  │  │ │
│  │  │  │ "SUBMIT RSVP"                               │ │  │  │ │
│  │  │  └───────────────────────────────────────────┘ │  │  │ │
│  │  │                                                   │  │  │ │
│  │  │  ┌───────────────────────────────────────────┐ │  │  │ │
│  │  │  │ Footer Section (244:192)                   │ │  │  │ │
│  │  │  │ Gap: 40px                                   │ │  │  │ │
│  │  │  │                                               │ │  │  │ │
│  │  │  │ ┌───────────────────────────────────────┐  │ │  │  │ │
│  │  │  │ │ Disclaimer (244:190)                   │  │ │  │  │ │
│  │  │  │ │ Max-width: 730px                       │  │ │  │  │ │
│  │  │  │ │ "*LIMITED FIRST ACCESS..."             │  │ │  │  │ │
│  │  │  │ └───────────────────────────────────────┘  │ │  │  │ │
│  │  │  │                                               │ │  │  │ │
│  │  │  │ ┌───────────────────────────────────────┐  │ │  │  │ │
│  │  │  │ │ Bottom Label (244:172)                 │  │ │  │  │ │
│  │  │  │ │ Width: 1100px                          │  │ │  │  │ │
│  │  │  │ │ "anta beverly hills flagship"         │  │ │  │  │ │
│  │  │  │ └───────────────────────────────────────┘  │ │  │  │ │
│  │  │  └───────────────────────────────────────────┘ │  │  │ │
│  │  └─────────────────────────────────────────────────┘  │  │ │
│  └───────────────────────────────────────────────────────┘ │ │
└─────────────────────────────────────────────────────────────┘
```

---

## Layout Flow

### Vertical Flow
1. **Top Label** - Fixed at top
2. **Logo** - Centered, 30px from top label
3. **Hero Section** - 40px gap from logo
   - Hero heading
   - Description
   - KAI 3 CNY text
   - Date/Time card
4. **Address** - 40px gap from hero section
5. **Form Section** - 40px gap from address
   - Instructions
   - Form fields
   - Submit button
   - Footer

### Horizontal Flow (Desktop)
- **Two-column layout** for form fields
- **Two-column layout** for date/time card
- **Single column** for other sections
- **Max-widths** applied to containers

### Horizontal Flow (Mobile)
- **Single column** for all sections
- **Stacked** form fields
- **Stacked** date/time card
- **Full width** containers

---

## Z-Index Layers

```
Layer 0: Background Base (#59c2ff)
Layer 1: Background Image
Layer 2: Gradient Overlays
Layer 3: Overlay Image (opacity 0.15)
Layer 10: Main Content (z-10)
```

---

## Responsive Behavior

### Mobile (< 768px)
```
┌─────────────────────┐
│   Top Label         │
│   Logo              │
│   Hero Heading      │
│   Description       │
│   KAI 3 CNY         │
│   Date/Time Card    │
│   (stacked)         │
│   Address           │
│   Form Section      │
│   - First Name      │
│   - Last Name       │
│   - Email           │
│   - Phone           │
│   - Shirt Size      │
│   - Sneaker Size    │
│   Submit Button     │
│   Footer            │
└─────────────────────┘
```

### Desktop (> 768px)
```
┌─────────────────────────────────────┐
│         Top Label                   │
│         Logo                         │
│         Hero Heading                 │
│         Description                 │
│         KAI 3 CNY                   │
│   ┌─────────────┬─────────────┐    │
│   │ Date        │ Time         │    │
│   └─────────────┴─────────────┘    │
│         Address                     │
│         Form Section                │
│   ┌─────────────┬─────────────┐    │
│   │ First Name  │ Last Name    │    │
│   │ Email       │ Phone        │    │
│   │ Shirt Size  │ Sneaker Size │    │
│   └─────────────┴─────────────┘    │
│         Submit Button               │
│         Footer                      │
└─────────────────────────────────────┘
```

---

## Component Dependencies

```
Home
├── BackgroundLayers (no dependencies)
├── TopLabel (no dependencies)
├── Logo (no dependencies)
├── HeroSection
│   ├── HeroHeading (depends on: ANTA font)
│   ├── Description (depends on: Sharp Grotesk fonts)
│   ├── Kai3CnyText (depends on: Sharp Grotesk fonts)
│   └── DateTimeCard (depends on: Sharp Grotesk fonts)
├── Address (depends on: Sharp Grotesk fonts)
└── FormSection
    ├── FormInstructions (depends on: Sharp Grotesk fonts)
    ├── FormFields (depends on: form validation)
    ├── SubmitButton (depends on: form state)
    └── Footer (depends on: Sharp Grotesk fonts)
```

---

## Data Flow

```
User Input
    ↓
Form Fields
    ↓
Form Validation (client-side)
    ↓
Form Submission (POST /api/signup)
    ↓
Server Processing
    ├── Database Storage
    └── Email Notification
    ↓
Response
    ├── Success → Show success message
    └── Error → Show error message
```

---

## State Management

### Form States
- **Default:** All fields visible, button enabled
- **Loading:** Button disabled, spinner shown
- **Success:** Button replaced with success message
- **Error:** Error message shown, button restored

### Form Data Structure
```typescript
{
  firstName: string (required)
  lastName: string (required)
  email: string (required)
  phone?: string (optional)
  shirtSize?: string (optional)
  sneakerSize?: string (optional)
  creatorEmail?: string (optional)
  media?: string (optional)
  instagramProfile?: string (optional)
}
```

---

This structure diagram provides a visual reference for understanding the component hierarchy and layout flow of the ANTA BHFA MicroSite design.
