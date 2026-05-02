/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Design system palette — see PLACEHOLDER comments in each component
        background: '#FFFFFF',
        surface:    '#FAF9F7',
        border:     '#E8E4DF',   // use as: border border-border
        primary:    '#0F0F0F',   // maps to "text-primary" in spec
        secondary:  '#6B6560',   // maps to "text-secondary" in spec
        accent:     '#1A1A1A',
        highlight:  '#C8A97E',   // warm tan — used sparingly for badges and CTAs
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
