import scrollbarHide from 'tailwind-scrollbar-hide';
/** @type {import('tailwindcss').Config} */

export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  
    

],
  theme: {
    extend: {},
    colors:{
      'blue':'#14143c',
      'white':'white',
      'gray':'gray',
      'black':'black'
    }
  },

  plugins: [
    scrollbarHide
  ],
}

