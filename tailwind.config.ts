import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      Orange: "#D87D4A",
      LightOrange: "#FBAF85",
      Black: "#000",
      LigthBlack: "#101010",
      White: "#FFFFFF",
      DarkWhite: "#FAFAFA",
      VeryDarkWhite: "#F1F1F1",
    },
    fontSize: {
      xl5: [
        "3.5rem",
        {
          lineHeight: "3.625rem",
          letterSpacing: "0.125rem",
          fontWeight: "700",
        },
      ],
      xl4: [
        "2.5rem",
        {
          lineHeight: "2.75rem",
          letterSpacing: "0.08931rem",
          fontWeight: "700",
        },
      ],
      xl3: [
        "2rem",
        {
          lineHeight: "2.25rem",
          letterSpacing: "0.07144rem",
          fontWeight: "700",
        },
      ],
      xl2: [
        "1.75rem",
        {
          lineHeight: "1",
          letterSpacing: "0.125rem",
          fontWeight: "700",
        },
      ],
      xl: [
        "1.5rem",
        {
          lineHeight: "1",
          letterSpacing: "0.10713rem",
          fontWeight: "700",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "1",
          letterSpacing: "0.08038rem",
          fontWeight: "700",
        },
      ],
      base: [
        "0.9375rem",
        {
          lineHeight: "1.5625rem",
          letterSpacing: "normal",
          fontWeight: "400",
        },
      ],
      sm: [
        "0.875rem",
        {
          lineHeight: "1",
          letterSpacing: "0.625rem",
          fontWeight: "400",
        },
      ],
      xs: [
        "0.8125rem",
        {
          lineHeight: "1.5625rem",
          letterSpacing: "0.05806rem",
          fontWeight: "bold",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
