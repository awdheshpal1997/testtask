/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#F1F1F1",
        buttoncolor: "#6C297C",
        "light-text": "#00000080",
        "body-color": "#FBF7FB",
      },
      borderRadius: {
        half: "50px",
      },
      spacing: {
        '90': '80vh',
      }
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Poppins"],
      body: ['"Open Sans"'],
    },
  },
  plugins: [],
};
