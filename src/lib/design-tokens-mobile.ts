/**
 * ANTA BHFA MicroSite - Mobile Design Tokens (<sm breakpoint)
 * 
 * Extracted from Figma mobile design (node-id=213-3)
 * Source: https://www.figma.com/design/ifTYSKlWj1kfrZbyU0OrDG/ANTA?node-id=213-3
 * 
 * These tokens represent mobile-specific values (<640px) that differ from desktop.
 * Use these constants for mobile-first implementations.
 */

// ============================================================================
// MOBILE TYPOGRAPHY (<sm breakpoint)
// ============================================================================

export const mobileTypography = {
  // Font Sizes (Mobile-specific)
  sizes: {
    // Hero Display
    hero: '60px',              // Desktop: 80px
    // Top/Bottom Labels
    label: '14px',             // Desktop: 18px
    // Description Text
    descriptionLine1: '24px',  // "be among the first to experience"
    descriptionLine2: '32px',  // "the new anta beverly hills flagship"
    // KAI Text
    kaiLine1: '20px',          // "A FIRST LOOK INSIDE THE SPACE,"
    kaiLine2: '32px',          // "PLUS THE LAUNCH OF THE KAI 3 CNY"
    // Date/Time Card
    dateTime: '28px',          // Desktop: 36px
    // Address
    address: '28px',            // Desktop: 32px
    // Form Instructions
    formInstructions: '16px',  // Desktop: 20px
    // Creator Section
    creatorQuestion: '20px',   // "Are you creator? Are you with media?"
    creatorSubtext: '16px',   // "If so, please enter your details below:"
    // Form Inputs
    input: '14px',             // Desktop: 16px
    // Button
    button: '24px',            // Desktop: 32px
    // Disclaimer
    disclaimer: '14px',       // Desktop: 16px
  },

  // Line Heights (Mobile-specific)
  lineHeights: {
    hero: '44px',              // Desktop: 70px
    label: '22px',             // Top/bottom labels
    descriptionLine1: '28px',  // "be among the first to experience"
    descriptionLine2: '32px',  // "the new anta beverly hills flagship"
    kaiLine1: '28px',          // "A FIRST LOOK INSIDE THE SPACE,"
    kaiLine2: '32px',          // "PLUS THE LAUNCH OF THE KAI 3 CNY"
    dateTime: '20px',          // Date/time card text
    address: '28px',           // Desktop: 56px
    formInstructions: '24px',  // Form instruction text
    creatorQuestion: '28px',   // Creator question
    creatorSubtext: '32px',    // Creator subtext
    input: 'normal',           // Form inputs
    button: 'normal',          // Button text
    disclaimer: '24px',       // Disclaimer text
  },

  // Letter Spacing (Mobile-specific)
  letterSpacing: {
    label: '14px',             // Top/bottom labels (ultra-wide)
    descriptionLine1: '0.72px', // "be among the first to experience"
    descriptionLine2: '0.96px', // "the new anta beverly hills flagship"
    kaiLine1: '0.6px',         // "A FIRST LOOK INSIDE THE SPACE,"
    kaiLine2: '0.96px',        // "PLUS THE LAUNCH OF THE KAI 3 CNY"
    dateTime: '0.84px',        // Date/time card
    button: '2.4px',           // Desktop: 3.2px
    disclaimer: '0.7px',      // Disclaimer text
  },
} as const;

// ============================================================================
// MOBILE SPACING (<sm breakpoint)
// ============================================================================

export const mobileSpacing = {
  // Page Layout
  page: {
    paddingTop: '80px',        // Desktop: 50px
    paddingX: '20px',          // Horizontal padding
    contentWidth: '335px',     // Main content width
  },

  // Logo Dimensions (Mobile)
  logo: {
    height: '98px',            // Desktop: 103px
    width: '179px',            // Desktop: 190px
  },

  // Form Container (Mobile)
  form: {
    containerPaddingTop: '56px',   // Desktop: 40px
    containerPaddingBottom: '20px',
    containerPaddingX: '24px',
    gap: '32px',               // Desktop: 28px
  },

  // Content Sections
  content: {
    mainGap: '24px',           // Main content gap
    infoGap: '30px',           // Info section gap
    heroGap: '40px',           // Hero content gap
    formSectionGap: '24px',    // Form section gap
    fieldGroupGap: '12px',     // Form field group gap
    fieldGap: '10px',          // Form field gap
  },

  // Date/Time Card (Mobile)
  card: {
    height: '47px',            // Per row (Desktop: 77px)
    width: '255px',            // Mobile card width
    paddingY: '20px',
    paddingX: '0px',
  },

  // Button (Mobile)
  button: {
    width: '294px',            // Fixed width on mobile
    paddingX: '24px',
    paddingY: '16px',           // Desktop: 20px
  },

  // Input Fields (Mobile - same as desktop)
  input: {
    height: '48px',
    paddingX: '16px',
    paddingY: '12px',
  },
} as const;

// ============================================================================
// MOBILE LAYOUT DIMENSIONS (<sm breakpoint)
// ============================================================================

export const mobileLayout = {
  // Container Heights (from Figma)
  heights: {
    mainContainer: '1738px',    // Main content container
    contentWrapper: '1613px',   // Content wrapper
    infoSection: '1187px',     // Info section
    heroContent: '1013px',     // Hero content area
    descriptionArea: '322px',  // Description area
    formSection: '878px',     // Form section
    formFields: '342px',       // Form fields container
  },

  // Container Widths (Mobile)
  widths: {
    content: '335px',          // Main content width
    info: '325px',             // Info section width
    form: '335px',             // Form container width
    formInstructions: '327px', // Form instructions width
    address: '325px',          // Address text width
    disclaimer: '327px',       // Disclaimer width
    button: '294px',           // Button width
    card: '255px',             // Date/time card content width
  },

  // Background Image Positioning (Mobile)
  background: {
    image: {
      height: '124.81%',       // Desktop: 110.36%
      width: '512.7%',         // Desktop: 164.34%
      left: '-206.35%',        // Desktop: -32.17%
      top: '0.02%',            // Desktop: 18.37%
    },
  },
} as const;

// ============================================================================
// MOBILE-SPECIFIC STYLES
// ============================================================================

export const mobileStyles = {
  // Background Gradients (Mobile)
  gradients: {
    // Base blue gradient
    baseBlue: 'linear-gradient(90deg, rgba(89, 194, 255, 1) 0%, rgba(89, 194, 255, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
    // Overlay gradients (same as desktop)
    overlay: 'linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), linear-gradient(0deg, rgba(89, 194, 255, 0) 68.862%, rgba(70, 175, 232, 1) 83.475%)',
  },

  // Font Families (Mobile - same as desktop)
  fonts: {
    hero: 'NIKE:Italic',       // Hero display (italic variant)
    label: 'Sharp Grotesk Book 20',
    description: 'Sharp Grotesk Medium 15',
    descriptionBold: 'Sharp Grotesk Bold 15',
    kai: 'Sharp Grotesk Book 20',
    kaiBold: 'Sharp Grotesk SemiBold 15',
    dateTime: 'Sharp Grotesk SemiBold 25',
    address: 'Sharp Grotesk SemiBold 25',
    formInstructions: 'Sharp Grotesk Medium 20',
    creator: 'Sharp Grotesk Medium 20',
    creatorSubtext: 'Sharp Grotesk Book 20',
    input: 'Sharp Grotesk Book 20',
    button: 'Sharp Grotesk SemiBold 15',
    disclaimer: 'Sharp Grotesk Book 20',
  },
} as const;

// ============================================================================
// MOBILE UTILITY CLASSES
// ============================================================================

/**
 * Tailwind utility class mappings for mobile-specific patterns
 * Use these when implementing mobile views
 */
export const mobileUtilityClasses = {
  // Typography Classes
  typography: {
    hero: 'text-[60px] leading-[44px] font-anta uppercase',
    label: 'text-[14px] leading-[22px] tracking-[14px] uppercase',
    descriptionLine1: 'text-[24px] leading-[28px] tracking-[0.72px] uppercase',
    descriptionLine2: 'text-[32px] leading-[32px] tracking-[0.96px]',
    kaiLine1: 'text-[20px] leading-[28px] tracking-[0.6px]',
    kaiLine2: 'text-[32px] leading-[32px] tracking-[0.96px]',
    dateTime: 'text-[28px] leading-[20px] tracking-[0.84px] uppercase',
    address: 'text-[28px] leading-[28px] uppercase',
    formInstructions: 'text-[16px] leading-[24px]',
    creatorQuestion: 'text-[20px] leading-[28px]',
    creatorSubtext: 'text-[16px] leading-[32px]',
    input: 'text-[14px]',
    button: 'text-[24px] tracking-[2.4px] uppercase',
    disclaimer: 'text-[14px] leading-[24px] tracking-[0.7px]',
  },

  // Spacing Classes
  spacing: {
    pageTop: 'pt-[80px]',
    pagePadding: 'px-[20px]',
    contentWidth: 'w-[335px]',
    formContainerTop: 'pt-[56px]',
    formContainerBottom: 'pb-[20px]',
    formGap: 'gap-[32px]',
    infoGap: 'gap-[30px]',
    heroGap: 'gap-[40px]',
  },

  // Component Classes
  components: {
    logo: 'h-[98px] w-[179px]',
    card: 'h-[47px] w-[255px]',
    button: 'w-[294px] px-[24px] py-[16px]',
    input: 'h-[48px] px-[16px] py-[12px] text-[14px]',
  },

  // Background Classes
  background: {
    image: 'h-[124.81%] left-[-206.35%] w-[512.7%] top-[0.02%]',
  },
} as const;

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type MobileTypographyToken = typeof mobileTypography;
export type MobileSpacingToken = typeof mobileSpacing;
export type MobileLayoutToken = typeof mobileLayout;
export type MobileStylesToken = typeof mobileStyles;
