/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#FBCA89',
        sec: '#DE3054',
      },
      fontFamily: {
        grotley: ["Grotley", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"]
      },
      boxShadow: {
        'card': '0px 7px 5px 0px rgba(0,0,0,1)',
      }
    },
  },
  plugins: [],
}
