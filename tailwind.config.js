/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text_color: '#706F6F',
        title_color: '#14141D',
        menu_item_color: '#706F6F',
        heading_color: '#16161D',
        logo_color: '#16161D',
      },
      fontFamily:{
        text:  ['var(--font-roboto)'],
        heading:  ['var(--font-poppins)'],
        logo:  ['var(--font-abril-logo)'],
      }
    },
  },
  plugins: [],
};
