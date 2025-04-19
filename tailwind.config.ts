/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "light-primary": "#6E59A5",
        "light-secondary": "#F1F0FB",
        "light-accent": "#8B5CF6",
        "light-hover": "#7E69AB",
        "light-text-primary": "#1A1F2C",
        "light-text-secondary": "#64748B",
        "light-border": "#E2E8F0",
        "dark-primary": "#6E59A5",
        "dark-secondary": "#1A1F2C",
        "dark-accent": "#9B87F5",
        "dark-hover": "#D6BCFA",
        "dark-text-primary": "#F8FAFC",
        "dark-text-secondary": "#94A3B8",
        "dark-border": "#334155",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
