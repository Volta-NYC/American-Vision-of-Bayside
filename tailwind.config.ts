import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary: deep ocean teal — trust, clarity, medical calm
        brand: {
          50: "#eefcfb",
          100: "#d4f5f3",
          200: "#aeeae8",
          300: "#79d9d6",
          400: "#3fc0bf",
          500: "#1fa3a4",
          600: "#158285",
          700: "#15686b",
          800: "#165356",
          900: "#164548",
          950: "#072a2c",
        },
        // Accent: warm amber for CTAs and highlights
        accent: {
          400: "#fbbf52",
          500: "#f59e0b",
          600: "#d97706",
        },
        ink: "#0f2b2e",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,43,46,.04), 0 8px 24px -12px rgba(15,43,46,.18)",
        lift: "0 10px 40px -12px rgba(21,104,107,.35)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      spacing: {
        18: "4.5rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up .6s ease-out both",
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
export default config
