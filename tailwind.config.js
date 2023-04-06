/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'blender-orange': '#ba7528',
        'html-orange' : '#D2652E',
        'css-blue' : '#4165EC',
        'js-yellow' : '#FFDE25',
        'vue-green' : '#41B883',
        'vue-highlight' : '#52dea0',
        'php-blue' : '#909BD3',
        'dark-mode' : '#272d39',
        'card-dark' : '#3a455c',
        'contact-dark' : '#181c24',
        'footer-dark' : '#30394a',

      },
      backgroundImage: {
        'test': "url('./assets/beach.png')",
      },
    },
  },
  plugins: [],
}

