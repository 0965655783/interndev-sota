/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '991px',
      // => @media (min-width: 991px) { ... }
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        arial: ["Arial"],
        roboto: ["Roboto"],
        oldStandardTT: ["Old Standard TT"],
        inter: ['Inter'],
      },
    },
  },
  plugins: [],
}
