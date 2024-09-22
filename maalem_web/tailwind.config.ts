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
        phoenix: "#F1FD81",
        background: "#000000", // Hex color
        foreground: "#ededed", // Hex color
        customExtra: "var(--extra)", // CSS variable
      },
      borderRadius: {
        '25p': '10% 30% 50% 70%',
      },
      fontWeight: {
        extraLight: '200',
        regular: '400',
        semiBold: '600',
        bold: '700',
      },
    },
  },
  plugins: [],
};

export default config;
