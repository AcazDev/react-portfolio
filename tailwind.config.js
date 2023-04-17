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

        testeColor: '#B4FCE2'
        
      }, 
      
      backgroundImage: (theme) => ({
        'charmander': `linear-gradient(to bottom, ${theme('colors.pink')}, ${theme('colors.orange')})`,
      }),

      scrollbar: theme => ({
        DEFAULT: {
          size: theme('spacing.3'),
          track: {
         
            background: theme('colors.bg_all'),
          },

          thumb: {
            background: theme('colors.red.500'),
            borderRadius: '10px',
          },

          hover: {
            background: theme('colors.amber.500'),
          },
        },
      }),
    },
  },

  plugins: [
    require ('@gradin/tailwindcss-scrollbar'),
    ('@tailwindcss/forms'),
    ("react-html-attrs")
    // ({
    //   size: '10px',
    //   track: {
    //     background: '#1F2945',
    //   },
    //   thumb: {
    //     background: 'red',
    //     borderRadius: '10px',
        
    //   },
    //   hover: {
    //     background: 'darkgray',
    //     borderRadius: '10px',
    //   },
    // }),  
  ],

  variants: {
    scrollbar: ['dark']
  }

};
