
/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        meteor: "meteor 5s linear infinite",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        slide: "slide var(--speed) ease-in-out infinite alternate",
        grid: "grid 15s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
      },
      
      fontFamily: {
        unbounded: ["Unbounded","sans-serif"],
        satoshi: ["Satoshi","sans-serif"],
        bdogratesk: ["BDOGrotesk", "sans-serif"],
        clashdisplay: ["ClashDisplay","sans-serif"],
        TimesNewRoman: ["Times New Roman","sans-serif"],
        LoRes: ["Lo-Res","sans-serif"],
        Karla: ["Karla","sans-serif"],
        avantGarde: ["AvantGarde","sans-serif"], 
      },
      scale: {
        '1000': '100',
      },
      colors: {
        'anu' : "#ff4f00",
      }
      
    },
  },
  plugins: [addVariablesForColors],
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-outline': {
          'text-shadow': '2px 2px 0 #ff4f00, -2px -2px 0 #ff4f00, -2px 2px 0 #ff4f00, 2px -2px 0 #ff4f00',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
  
};


function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}


