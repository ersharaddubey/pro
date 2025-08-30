// tailwind.config.js
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"], // अगर src folder नहीं है तो screens डालो
  theme: {
    extend: {
      colors: {
        bg: "#000000",
        text: "#ffffff",
        textDim: "#aaaaaa",
        accent: "#FF6F00",
        border: "#333333",
        card: "#222222",
        cardAlt: "#1A1A1A",
        accentAlt: "#FF7A00",
        textDark: "#222222",
        danger: "#FF0000",
      },
    },
  },
  plugins: [], // ✅ यहीं allowed है
};
