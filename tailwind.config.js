/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        biarmor: {
          navy: '#0b192c',
          navyDark: '#060f1b',
          navyLight: '#162842',
          lime: '#8fe100',
          limeHover: '#a3f013',
          gold: '#c5a059',
          goldLight: '#dfc285',
          cream: '#faf8f5',
          creamDark: '#f3efe6',
          sand: '#e8e2d5'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(11, 25, 44, 0.08)',
        'luxury-hover': '0 30px 60px -15px rgba(11, 25, 44, 0.16)',
        'gold-glow': '0 0 25px rgba(197, 160, 89, 0.25)',
      }
    },
  },
  plugins: [],
}
