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
        customRed: "#FF4C33",
        background: "#000000",
        foreground: "#ededed",
        customExtra: "var(--extra)",
        
      
      },
      borderRadius: {
        '25p': '10% 30% 50% 70%',
      },
    },
  },
  plugins: [],
};
export default config;
