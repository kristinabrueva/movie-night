module.exports = {
  content: ["./pages/*.{ts,tsx}", "./components/*.{ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "side-panel": "260px",
      },
      colors: {
        "light-blue": "#01b4e4",
      },
      boxShadow: {
        block: "1px 1px 3px 0 rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
