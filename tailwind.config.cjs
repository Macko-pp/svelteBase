const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  plugins: [require('prettier-plugin-tailwindcss'), require("@tailwindcss/typography"), require("daisyui")],
};

module.exports = config;
