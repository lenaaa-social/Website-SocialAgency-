/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        //Example for new color
        //backBeige: '#F5F5EF',
        //textPrimColor: '#C2B19C',
        backBeige: '#F7F7F2',
        textPrimColor:'#B49D84'
      },
      fontFamily:{
        'ephesis' : ['Ephesis'],
        'dancing-script' : ['Dancing-Script']

      }
    },

  },
  plugins: [],
}

