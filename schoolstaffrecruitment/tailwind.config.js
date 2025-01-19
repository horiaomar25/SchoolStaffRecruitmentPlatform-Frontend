import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    screens:{
      'mobile': '640px',
      'tablet': '768px',
      'desktop': '1024px',
      'large-desktop': '1280px',
    },
    extend: {
      colors:{
        'logo-blue':'#3cabe0',
        
      }
    },
  },
  daisyui: {
    themes:[],
   },
   plugins: [daisyui],
 };
 