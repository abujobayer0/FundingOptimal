import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors
        'dark-background': '#050505',
        primary: '#12FF8E',
        'primary-text': '#FFFFFF',
        'secondary-text': '#A7A7A7',

        // Keep CSS variables for backward compatibility if needed, but map them
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // We will map --primary to the new primary color in globals.css
        // primary: 'var(--primary)', // Removed as we will map directly in CSS variables
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'slide-left': 'slide-left 30s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
