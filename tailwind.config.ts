/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // theme switch ke liye important
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  safelist: ["text-netflix-muted", "bg-netflix-bg", "bg-netflix-surface"],

  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        text: "rgb(var(--text) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
      },
      // colors: {
      //   primary: "#E50914", // Netflix red
      //   background: "#0B0B0F",
      //   surface: "#141414",
      //   textPrimary: "#FFFFFF",
      //   textSecondary: "#A1A1AA",
      //   netflix: {
      //     bg: "#000000",
      //     surface: "#141414",
      //     accent: "#E50914",
      //     text: "#FFFFFF",
      //     muted: "#B3B3B3",
      //   },
      // },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        primary: ["var(--font-primary)"],
      },

      borderRadius: {
        xl: "14px",
        "2xl": "20px",
      },

      boxShadow: {
        netflix: "0 10px 40px rgba(0,0,0,0.6)",
      },
    },
  },

  plugins: [require("tailwind-scrollbar-hide")],
};
