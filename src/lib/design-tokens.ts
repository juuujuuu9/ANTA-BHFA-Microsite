/**
 * ANTA BHFA MicroSite - Design Tokens
 * 
 * Extracted from Figma design and current implementation
 * Source: https://www.figma.com/design/ifTYSKlWj1kfrZbyU0OrDG/ANTA?node-id=167-10
 * 
 * These tokens represent the design system values used throughout the application.
 * Use these constants to maintain consistency and enable easy theme updates.
 */

// ============================================================================
// COLORS
// ============================================================================

export const colors = {
  // Primary Brand Colors
  brand: {
    blue: '#59c2ff',        // Primary brand color (background base)
    blueGradient: '#46afe8', // Blue gradient end color
    red: '#d7000f',         // Primary CTA/action color (buttons)
    redHover: '#b8323d',    // Hover state for red buttons
  },

  // Neutral Colors
  neutral: {
    white: '#ffffff',
    darkGray: '#212121',    // Form input text and placeholders
    black: '#000000',
  },

  // Semantic Colors
  semantic: {
    success: {
      bg: '#dcfce7',        // bg-green-100
      border: '#86efac',    // border-green-400
      text: '#166534',      // text-green-700
    },
    error: {
      bg: '#fee2e2',        // bg-red-100
      border: '#f87171',    // border-red-400
      text: '#991b1b',      // text-red-700
    },
  },

  // Opacity Variants
  opacity: {
    white10: 'rgba(255, 255, 255, 0.1)',   // Card backgrounds
    white50: 'rgba(255, 255, 255, 0.5)',  // Form inputs
    white50Border: 'rgba(255, 255, 255, 0.5)', // Card borders
    black30: 'rgba(0, 0, 0, 0.3)',         // Gradient overlay
    darkGray02: 'rgba(33, 33, 33, 0.02)',  // Gradient overlay end
    darkGray100: 'rgba(33, 33, 33, 1)',    // Gradient overlay start
    overlay15: '0.15',                      // Background overlay opacity
    shadow25: 'rgba(0, 0, 0, 0.25)',       // Text shadow
  },
} as const;

// ============================================================================
// TYPOGRAPHY
// ============================================================================

export const typography = {
  // Font Families
  fonts: {
    anta: 'NIKE', // Internal font name from ANTA_font.ttf
    antaItalic: 'NIKE:Italic', // ANTA italic variant (used for hero heading)
    sharpGrotesk: 'Sharp Grotesk',
    sharpGroteskBook15: 'Sharp Grotesk Book 15', // Book weight, 15 tracking
    sharpGroteskBook20: 'Sharp Grotesk Book 20', // Book weight, 20 tracking
    sharpGroteskMedium15: 'Sharp Grotesk Medium 15', // Medium weight, 15 tracking
    sharpGroteskMedium20: 'Sharp Grotesk Medium 20', // Medium weight, 20 tracking
    sharpGroteskMedium25: 'Sharp Grotesk Medium 25', // Medium weight, 25 tracking
    sharpGroteskSemibold15: 'Sharp Grotesk SemiBold 15', // SemiBold weight, 15 tracking
    sharpGroteskSemibold25: 'Sharp Grotesk SemiBold 25', // SemiBold weight, 25 tracking
    system: 'system-ui, -apple-system, sans-serif',
  },

  // Font Weights
  weights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },

  // Font Sizes (in pixels)
  sizes: {
    // Mobile → Desktop
    xs: '16px',           // Small text, captions
    sm: '18px',           // Body text, labels
    base: '20px',         // Base body text
    md: '24px',           // Medium headings
    lg: '28px',           // Large text
    xl: '32px',           // Extra large headings
    '2xl': '36px',        // 2XL headings
    '3xl': '40px',        // 3XL headings
    '4xl': '50px',        // 4XL headings
    '5xl': '80px',        // Hero display (mobile)
    '6xl': '100px',       // Hero display (tablet)
    '7xl': '140px',       // Hero display (desktop)
  },

  // Responsive Font Size Scales
  responsive: {
    // Hero Display
    hero: {
      mobile: '80px',
      tablet: '100px',
      desktop: '140px',
    },
    // Large Heading
    headingLarge: {
      mobile: '32px',
      tablet: '40px',
      desktop: '50px',
    },
    // Medium Heading
    headingMedium: {
      mobile: '24px',
      tablet: '32px',
      desktop: '40px',
    },
    // Small Heading
    headingSmall: {
      mobile: '20px',
      tablet: '24px',
      desktop: '28px',
    },
    // Body Text
    body: {
      mobile: '16px',
      tablet: '18px',
      desktop: '20px',
    },
    // Button Text
    button: {
      mobile: '24px',
      tablet: '28px',
      desktop: '32px',
    },
    // Address Text
    address: {
      mobile: '20px',
      tablet: '24px',
      desktop: '32px',
    },
  },

  // Line Heights
  lineHeights: {
    // Hero Display
    hero: {
      mobile: '70px',
      tablet: '90px',
      desktop: '110px',
    },
    // Headings
    heading: {
      mobile: '40px',
      tablet: '56px',
      desktop: '56px',
    },
    // Body
    body: {
      small: '32px',
      medium: '40px',
      large: '56px',
    },
    // Address
    address: {
      mobile: '32px',
      tablet: '40px',
      desktop: '56px',
    },
    // Normal
    normal: 'normal',
    // Zero (for display text)
    zero: '0',
  },

  // Letter Spacing (Tracking)
  letterSpacing: {
    tight: '0.8px',      // Small text, disclaimers
    tighter: '0.84px',   // Small headings ("A FIRST LOOK INSIDE THE SPACE")
    normal: '1.2px',     // Medium headings
    wide: '1.5px',       // Large headings
    wider: '1.08px',     // Date/time card
    widest: '2.5px',     // Large emphasized text
    extraWide: '3.2px',  // Buttons
    ultraWide: '23.4px', // Uppercase labels (hero)
  },
} as const;

// ============================================================================
// SPACING
// ============================================================================

export const spacing = {
  // Small Spacing (form fields, tight gaps)
  xs: '10px',   // Gap between form fields
  sm: '12px',   // Form field groups
  md: '16px',   // Input padding horizontal
  lg: '20px',   // Container padding, vertical spacing
  xl: '24px',   // Form sections, button padding horizontal
  '2xl': '28px', // Form container spacing
  '2.5xl': '30px', // Logo top padding
  '3xl': '36px', // Content sections
  '3.5xl': '38px', // Hero section gap
  '4xl': '40px', // Major section spacing, form groups
  '5xl': '48px', // Page padding bottom
  '6xl': '50px', // Page padding top

  // Component-Specific Spacing
  input: {
    paddingX: '16px',
    paddingY: '12px',
    height: '48px',
  },
  button: {
    paddingX: '24px',
    paddingY: '20px',
  },
  card: {
    paddingX: '0px',
    paddingY: '20px',
    height: '77px',
  },
  form: {
    containerPaddingX: '24px',
    containerPaddingY: '40px',
    sectionGap: '24px',
    fieldGroupGap: '36px',
    fieldGap: '12px',
    fieldRowGap: '10px',
  },
  page: {
    paddingX: '20px',
    paddingY: '0px',
    paddingTop: '50px',
    paddingBottom: '48px',
  },
} as const;

// ============================================================================
// BORDERS
// ============================================================================

export const borders = {
  radius: {
    sm: '4px', // Buttons, inputs, cards
  },
  width: {
    thin: '1px',
    medium: '2px',
  },
  style: {
    solid: 'solid',
  },
} as const;

// ============================================================================
// SHADOWS & EFFECTS
// ============================================================================

export const effects = {
  shadows: {
    text: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  blur: {
    backdrop: '6px', // Backdrop blur for form container
  },
  opacity: {
    overlay: 0.15, // Background overlay opacity
  },
} as const;

// ============================================================================
// GRADIENTS
// ============================================================================

export const gradients = {
  // Background gradient overlays (combined)
  background: {
    // Horizontal black overlay
    blackOverlay: 'linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%)',
    // Vertical blue gradient
    blueGradient: 'linear-gradient(0deg, rgba(89, 194, 255, 0) 49.961%, rgba(70, 175, 232, 1) 60.477%)',
    // Dark overlay gradient
    darkOverlay: 'linear-gradient(-7.844187734917796e-7deg, rgba(33, 33, 33, 1) 0%, rgba(33, 33, 33, 0.02) 29.067%)',
    // Combined (used in style attribute)
    combined: 'linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), linear-gradient(0deg, rgba(89, 194, 255, 0) 49.961%, rgba(70, 175, 232, 1) 60.477%), linear-gradient(-7.844187734917796e-7deg, rgba(33, 33, 33, 1) 0%, rgba(33, 33, 33, 0.02) 29.067%)',
  },
} as const;

// ============================================================================
// BREAKPOINTS
// ============================================================================

export const breakpoints = {
  sm: '640px',
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
} as const;

// ============================================================================
// LAYOUT
// ============================================================================

export const layout = {
  // Container Max Widths
  maxWidth: {
    form: '876px',
    formInstructions: '730px',
    card: '854px',
  },
  // Background Image Positioning
  background: {
    image: {
      height: '110.36%',
      width: '164.34%',
      left: '-32.17%',
      top: '18.37%',
    },
  },
  // Logo Dimensions
  logo: {
    width: '190px',
    height: '103px',
    svgWidth: '191',
    svgHeight: '103',
  },
  // Date/Time Card Dimensions
  card: {
    dateWidth: '364px',
    dateContentWidth: '460px',
    timeWidth: '420px',
  },
  // Additional Container Widths (from Figma)
  containers: {
    description: '1278px',
    kaiText: '1226px',
    address: '1226px',
    bottomLabel: '1100px',
    button: '294px',
  },
  // Component Heights (from Figma)
  heights: {
    mainContent: '1533px',
    infoSection: '1422px',
    contentWrapper: '1337px',
    contentSection: '1279px',
    heroSection: '381px',
    descriptionMin: '121px',
  },
} as const;

// ============================================================================
// ANIMATIONS & TRANSITIONS
// ============================================================================

export const transitions = {
  duration: {
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
  },
  timing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
  properties: {
    colors: 'transition-colors',
    all: 'transition-all',
  },
} as const;

// ============================================================================
// UTILITY CLASSES MAPPING
// ============================================================================

/**
 * Tailwind utility class mappings for common patterns
 * Use these as references when applying styles
 */
export const utilityClasses = {
  // Background Colors
  bg: {
    brandBlue: 'bg-[#59c2ff]',
    brandRed: 'bg-[#d7000f]',
    brandRedHover: 'hover:bg-[#b8323d]',
    white10: 'bg-[rgba(255,255,255,0.1)]',
    white50: 'bg-[rgba(255,255,255,0.5)]',
    success: 'bg-green-100',
    error: 'bg-red-100',
  },
  // Text Colors
  text: {
    white: 'text-white',
    darkGray: 'text-[#212121]',
    success: 'text-green-700',
    error: 'text-red-700',
  },
  // Border Colors
  border: {
    white: 'border-white',
    white50: 'border-[rgba(255,255,255,0.5)]',
    success: 'border-green-400',
    error: 'border-red-400',
  },
  // Font Families
  font: {
    anta: 'font-anta',
    sharpGrotesk: 'font-sharp-grotesk',
    sharpGroteskBook15: 'font-sharp-grotesk-book-15',
    sharpGroteskBook20: 'font-sharp-grotesk-book-20',
    sharpGroteskMedium15: 'font-sharp-grotesk-medium-15',
    sharpGroteskMedium20: 'font-sharp-grotesk-medium-20',
    sharpGroteskMedium25: 'font-sharp-grotesk-medium-25',
    sharpGroteskSemibold15: 'font-sharp-grotesk-semibold-15',
    sharpGroteskSemibold25: 'font-sharp-grotesk-semibold-25',
  },
  // Border Radius
  rounded: {
    sm: 'rounded-[4px]',
  },
  // Backdrop Effects
  backdrop: {
    blur: 'backdrop-blur-[6px] backdrop-filter',
  },
} as const;

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type ColorToken = typeof colors;
export type TypographyToken = typeof typography;
export type SpacingToken = typeof spacing;
export type BorderToken = typeof borders;
export type EffectToken = typeof effects;
export type GradientToken = typeof gradients;
export type BreakpointToken = typeof breakpoints;
export type LayoutToken = typeof layout;
export type TransitionToken = typeof transitions;
