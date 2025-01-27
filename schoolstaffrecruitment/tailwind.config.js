import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    screens:{
      sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
    },
    extend: {
      colors:{
        'logo-blue':'#3cabe0',
        'test': '#2b8ebc'
        
      }
    },
  },
  daisyui: {
    themes:[],
   },
   plugins: [daisyui],
 };
 