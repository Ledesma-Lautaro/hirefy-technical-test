import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        blue:{
          100: "#0D5287",
          200: "#187DCA",
          300: "#05AACE",
          400: "#1CB59C",
          500: "#04D2C6",
          600: "#2DCAB1",
          700: "#26E4C7",
          800: "#D3FFF5",
        },
        black:{
          100: "#000000",
          200: "#2b3445",
          300: "#7d879c",
        },
        white:{
          100: "#ffffff",
        },
        yellow:{
          100: "#FFB800",
          200: "#FFF8E5",
        },
        red:{
          100: "#F56565",
          200: "#FFDFDF",
        },
      },
      font: {
        fontSize:{
          "chips" : "0.75rem",
          
        }
      },
      
    },
  },
  plugins: [],
};
export default config;
