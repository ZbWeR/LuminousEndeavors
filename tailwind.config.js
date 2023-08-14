/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes:{
        opacityHidden:{
          '0':{opacity:1},
          '100%':{
            transform:'translateY(-100px) translateX(-50%)',
            opacity:0
          }
        }
      },
      animation:{
        messageAnimation: 'opacityHidden 1s'
      }
    },
  },
  plugins: [],
  darkMode: 'class',

}
