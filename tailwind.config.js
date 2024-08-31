/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // !font
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      // !bg

      // !text
      textColor: {
        primary: "var(--text-color)",
        secondary: "var(--text-color-secondary)",
        tertiary: "var(--text-color-tertiary)",
        quaternary: "var(--text-color-quaternary)",
      },

    },
  },
  plugins: [],
};
