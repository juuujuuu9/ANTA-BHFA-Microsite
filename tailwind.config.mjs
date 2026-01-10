/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Font Families
      fontFamily: {
        'sharp-grotesk': ['Sharp Grotesk', 'system-ui', '-apple-system', 'sans-serif'],
        'sharp-grotesk-book-15': ['Sharp Grotesk Book 15', 'Sharp Grotesk', 'system-ui', '-apple-system', 'sans-serif'],
        'sharp-grotesk-book-20': ['Sharp Grotesk Book 20', 'Sharp Grotesk', 'system-ui', '-apple-system', 'sans-serif'],
        'sharp-grotesk-medium-15': ['Sharp Grotesk Medium 15', 'Sharp Grotesk', 'system-ui', '-apple-system', 'sans-serif'],
        'sharp-grotesk-medium-20': ['Sharp Grotesk Medium 20', 'Sharp Grotesk', 'system-ui', '-apple-system', 'sans-serif'],
        'sharp-grotesk-medium-25': ['Sharp Grotesk Medium 25', 'Sharp Grotesk', 'system-ui', '-apple-system', 'sans-serif'],
        'sharp-grotesk-semibold-15': ['Sharp Grotesk SemiBold 15', 'Sharp Grotesk', 'system-ui', '-apple-system', 'sans-serif'],
        'sharp-grotesk-semibold-25': ['Sharp Grotesk SemiBold 25', 'Sharp Grotesk', 'system-ui', '-apple-system', 'sans-serif'],
        'anta': ['NIKE', 'system-ui', '-apple-system', 'sans-serif'],
      },
      // Colors (for use in Tailwind classes)
      colors: {
        'anta-blue': '#59c2ff',
        'anta-blue-gradient': '#46afe8',
        'anta-red': '#d7000f',
        'anta-red-hover': '#b8323d',
        'anta-dark-gray': '#212121',
      },
      // Spacing (extend default scale with design-specific values)
      spacing: {
        '10px': '10px',
        '12px': '12px',
        '16px': '16px',
        '20px': '20px',
        '24px': '24px',
        '28px': '28px',
        '36px': '36px',
        '40px': '40px',
        '48px': '48px',
        '50px': '50px',
      },
      // Border Radius
      borderRadius: {
        '4px': '4px',
      },
      // Max Widths
      maxWidth: {
        'form': '876px',
        'form-instructions': '730px',
        'card': '854px',
      },
    },
  },
  plugins: [],
}

