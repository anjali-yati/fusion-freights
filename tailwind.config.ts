import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: '#bc2f15',
      secondary: '#FFF',
      primaryNew: '#F5EEC8',
      black: '#000'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    variants: {
      fill: ['hover', 'focus'], // this line does the trick
    },
  },
  plugins: [
    function ({ addUtilities }:any) {
      const newUtilities = {
        '.filter-brightness-40:hover': {
          filter: 'brightness(710%)',
        },
        // Add more filter utilities as needed
      };

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
};
export default config;
