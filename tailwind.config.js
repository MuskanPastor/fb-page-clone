/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      xsm:'500px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      spacing:{
        13:'13px'
      },
      fontSize: {
        '10xl': ['9rem', { lineHeight: '1.5' }],
      }
    },
  },
  plugins: [],
}
 
