// tailwind.config.js
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#000000",        // background black
        text: "#ffffff",      // main white text
        textDim: "#aaaaaa",   // dim gray text
        accent: "#FF6F00",    // primary orange
        accentAlt: "#FF7A00", // lighter orange
        border: "#333333",    // border gray
        card: "#222222",      // dark card
        cardAlt: "#1A1A1A",   // darker card
        textDark: "#222222",  // dark text (on light bg)
        danger: "#FF0000",    // error / danger
      },
    },
  },
  plugins: [],
};
