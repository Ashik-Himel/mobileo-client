/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', 'src/**/*.jsx', './node_modules/flowbite/**/*.js'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    extend: {
      colors: {
        'primary': '#1F2022',
        'text-color': 'rgb(107,114,128)'
      },
      screens: {
        'xsm': '480px'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}