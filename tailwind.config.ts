import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'main-blue': '#0188fe',
        'dark-blue': '#026dcb',
        'main-purple': '#b34cfd',
        'dark-purple': '#8c3bc4',
      },
    },
  },
  plugins: [],
} satisfies Config;
