/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0E1116",
        surface: "#111827",
        text: "#E5F2F4",
        primary: "#4F46E5",
        muted: "#94A3B8",
        border: "#1F2937",
      },
      boxShadow: {
        focus: "0 0 0 3px rgba(79,70,229,0.35)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
