/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          dark: '#0C110E',     // Deep forest-shadow background
        },
        surface: {
          card: '#121A15',    // Muted dark clay surface
        },
        ink: {
          primary: '#F3FAF6',  // Crisp mint primary text
          secondary: '#8EA89B',// Muted technical sage text
        },
        accent: {
          leaf: '#10B981',     // Vibrant active chlorophyll emerald
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Satoshi', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderColor: {
        whisper: 'rgba(142, 168, 155, 0.15)',
      }
    },
  },
  plugins: [],
}
