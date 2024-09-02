export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Bangers"],
      },
      colors: {
        primary: "#201F59",
        secondary: "#f0efef",
      },
      keyframes: {
        animate: {
          "0%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "300% 0%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
      },
      animation: {
        animate: "animate 20s linear infinite",
      },
    },
  },
  plugins: [],
};
