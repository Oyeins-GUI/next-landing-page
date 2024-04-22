import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            transparent: "transparent",
            current: "currentColor",
            primary: "#C5E9F5",
            secondary: {
               DEFAULT: "#0F4382",
               800: "#184162",
               700: "#124473",
               600: "#123D6D",
            },
         },
         keyframes: {
            "slide-down": {
               from: { top: "0px" },
               to: { top: "80px" },
            },
         },
         animation: {
            "slide-down": "slide-down 300ms linear",
         },
      },
   },
   plugins: [],
};
export default config;
