/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'sharp-grotesk': ['Sharp Grotesk', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

