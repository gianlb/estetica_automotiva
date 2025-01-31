module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF3E9D", // Neon pink
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#41E9FC", // Cyan
          foreground: "hsl(var(--secondary-foreground))",
        },
        background: {
          DEFAULT: "#1A1025", // Deep purple
          lighter: "#2A1F35",
        },
        accent: {
          DEFAULT: "#FF3E9D",
          foreground: "#ffffff",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "#FF3E9D",
        foreground: "#ffffff",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        stars:
          "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='1' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E\")",
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: {
          "0%": { textShadow: "0 0 10px #FF3E9D, 0 0 20px #FF3E9D" },
          "100%": { textShadow: "0 0 20px #41E9FC, 0 0 30px #41E9FC" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

