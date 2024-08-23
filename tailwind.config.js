/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/views/**/*.handlebars"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

