/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      rotate: {
        '180': '180deg',
        '-180': '-180deg',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        hidden: 'hidden',
      },
      perspective: {
        '600': '600px',
      },
      colors: {
        'deep-blue': '#051A91',
        'darker-blue': '#061C93',
        'light-blue': '#2284F1',
        'medium-blue': '#1F80EB',
        'darkblue': '#071844',
        'lightblue': '#2D87B6'
      }

    }
  },
  plugins: [],
}

