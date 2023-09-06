/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
        colors: {
            "primary-color": "var(--primary-color)",
            "secondary-color": "var(--secondary-color)",
            "highlight-color": "var(--highlight-color)",
            "text-color": "var(--text-color)",
            "dark-primary-color": "var(--dark-primary-color)",
            "dark-secondary-color": "var(--dark-secondary-color)",
            "dark-highlight-color": "var(--dark-highlight-color)",
            "dark-text-color": "var(--dark-text-color)",
          },
    },
  },
  plugins: [],
}

