/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
        },
        salesforce: {
          light: '#00A1E0',
          DEFAULT: '#0176D3',
          dark: '#032D60',
        },
      },
      backgroundImage: {
        'glow-gradient': 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.15), transparent 70%)',
        'radial-sf': 'radial-gradient(circle at 100% 100%, rgba(1, 118, 211, 0.12), transparent 60%)',
      },
    },
  },
  plugins: [],
}
