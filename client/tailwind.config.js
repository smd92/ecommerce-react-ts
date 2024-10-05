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
        "color-heading-theme1": "#000000", // Überschriften/Hervorhebung
        "color-error-theme1": "#FF4D4D", // Fehlermeldungen
        "color-success-theme1": "#4CAF50", // Erfolgsmeldungen
      },
      backgroundColor: {
        // theme1
        "color-theme1": "#FFFFFF", // Hintergrund
        "color-alternative-theme1": "#F8F8F8", // Alternativer Hintergrund
        "color-button-primary-theme1": "#000000", // Schwarze Buttons
        "color-button-hover-theme1": "#222222", // Hover-Schwarze Buttons
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
    // bestehende safelist
    {
      pattern: /text-color-primary-(theme1)/,
    },
    {
      pattern: /text-color-logo-(theme1)/,
    },
    {
      pattern: /bg-color-(theme1)/,
    },
    {
      pattern: /bg-color-card-(theme1)/,
    },
    {
      pattern: /bg-color-button-primary-(theme1)/,
    },
    {
      pattern: /bg-color-button-primary-focus-(theme1)/,
    },
    {
      pattern: /border-color-(theme1)/,
    },
    // safelist für theme1
    {
      pattern: /text-color-(primary|secondary|heading|error|success)-theme1/,
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
