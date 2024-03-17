module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff", A700_b2: "#ffffffb2", A700_33: "#ffffff33", A700_87: "#ffffff87" },
        red: { 50: "#ffeee9", "300_01": "#d97356" },
        gray: { 100: "#f7f7f7", 900: "#0a033c", "700_01": "#5d5a6f", "200_01": "#ececec", "700_99": "#5d5a6f99" },
        amber: { 500: "#ffc107" },
        deep_orange: { 400: "#ff6652", "400_87": "#ff665287" },
        black: { "900_01": "#170600", "900_02": "#000000", "900_87": "#00000087" },
        orange: { "200_01": "#eebc74" },
      },
      boxShadow: { xs: "0px 2px  10px 0px #0000001e", sm: "0px 50px  50px 0px #00000019" },
      fontFamily: { inter: "Inter", metropolis: "Metropolis" },
      opacity: { 0.5: 0.5 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
