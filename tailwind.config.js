/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,html,js}",
    "./components/**/*.{js,ts,jsx,tsx,html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        bg_all: '#1F2945',
        
      },
      
    },
  },

  plugins: [
    require('tailwind-scrollbar')
  ],
  variants: {
    scrollbar: ['dark']
}
};
