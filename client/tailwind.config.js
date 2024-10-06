const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        // theme1
        "color-primary-theme1": "#333333", // Haupttext
        "color-secondary-theme1": "#666666", // Sekundärtext
        "color-tertiary-theme1": "#FFFFFF", // Tertiaertext
        "color-heading-theme1": "#000000", // Überschriften/Hervorhebung
        "color-error-theme1": "#FF4D4D", // Fehlermeldungen
        "color-success-theme1": "#4CAF50", // Erfolgsmeldungen
      },
      backgroundColor: {
        // theme1
        "color-theme1": "#FFFFFF", // Hintergrund
        "color-alternative-theme1": "#F8F8F8", // Alternativer Hintergrund
        "color-button-primary-theme1": "#282c3c", // Dunkelblaue Buttons
        "color-button-hover-theme1": "#3A3F51", // Hover-Schwarze Buttons
        "color-disabled-button-theme1": "#BDBDBD", // Disabled Buttons
        "color-modal-overlay-theme1": "rgba(0, 0, 0, 0.5)", // Modal Overlay
      },
      borderColor: {
        // theme1
        "color-border-theme1": "#E0E0E0", // Leichte Rahmen
        "color-hover-border-theme1": "#444444", // Hover Border
        "color-error-border-theme1": "#FF4D4D", // Fehlerhafte Eingaben
      },
      fontFamily: {
        /* "concert-one": ["Concert One", "sans-serif"], */
      },
    },
  },
  safelist: [
    // safelist für theme1
    {
      pattern: /text-color-(primary|secondary|tertiary|heading|error|success)-theme1/,
    },
    {
      pattern: /bg-color-(theme1|alternative|button-primary|button-hover|disabled-button|modal-overlay)-theme1/,
    },
    {
      pattern: /border-color-(border|hover-border|error-border)-theme1/,
    },
  ],
  plugins: [],
});
