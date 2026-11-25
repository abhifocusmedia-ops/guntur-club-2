
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        ink: "#150D0E",
        gold: "#D4B163",
        ivory: "#F8F5ED",
      },

      fontFamily: {
        sans: ["var(--font-body)"],
        serif: ["var(--font-heading)"],
      },
    },
  },

  plugins: [],
} satisfies Config;
