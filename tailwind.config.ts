import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-instrument-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "serif"],
      },
      colors: {
        canvas: "var(--color-bg)",
        accent: "var(--color-accent)",
      },
      borderRadius: {
        premium: "24px",
      },
    },
  },
};

export default config;
