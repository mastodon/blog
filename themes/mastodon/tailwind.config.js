const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.md",
    "./layouts/**/*.html",
    "./content/**/*.md"
  ],
  theme: {
    colors: {
      ...colors,

      blurple: {
        300: "#858afa",
        500: "#6364ff",
        600: "#563acc", // "main"
        900: "#2f0c7a",
      },

      nightshade: {
        50: "#fcefff",
        100: "#BD8DC8",
        300: "#834491",
        600: "#4E155A",
        900: "#1d0023", // "main"
      },

      eggplant: "#17063b",
    },

    extend: {
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
      },

      backgroundImage: {
        "blurple-gradient": `linear-gradient(0deg, #563acc 12.87%, #6364ff 88.62%)`,
      },

      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#563acc',

              '&:hover': {
                color: '#6364ff',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
  safelist: [
    'grid-cols-3',
    'gap-4',
    'col-span-1',
    'bg-green-300',
    'bg-red-200',
    'bg-stone-300',
    'bg-blue-300',
    'bg-orange-200',
    'bg-lime-200',
    'bg-emerald-200',
    'bg-pink-200',
    'bg-violet-300',
    'bg-red-300'
  ],
}
