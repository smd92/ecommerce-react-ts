const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        // bestehende themes
        "color-primary-theme1": "#3D52A0",
        "color-logo-theme1": "#3D52A0",
        "color-primary-theme2": "#182628",
        "color-logo-theme2": "#65CCB8",
        "color-primary-theme3": "#17252A",
        "color-logo-theme3": "#3AAFA9",
        "color-primary-theme4": "#F7F9FB",
        "color-logo-theme4": "#5085A5",
        // theme5
        "color-primary-theme5": "#333333", // Haupttext
        "color-secondary-theme5": "#666666", // Sekundärtext
        "color-black-theme5": "#000000", // Überschriften/Hervorhebung
        "color-error-theme5": "#FF4D4D", // Fehlermeldungen
        "color-success-theme5": "#4CAF50", // Erfolgsmeldungen
      },
      backgroundColor: {
        // bestehende themes
        "color-theme1": "#EDE8F5",
        "color-card-theme1": "#FEFFFF",
        "color-button-primary-theme1": "#ADBBDA",
        "color-button-primary-focus-theme1": "#3D52A0",
        "color-button-secondary-theme1": "#17252A",
        "color-theme2": "#F2F2F2",
        "color-card-theme2": "#FEFFFF",
        "color-button-primary-theme2": "#65CCB8",
        "color-button-primary-focus-theme2": "#57BA98",
        "color-button-secondary-theme2": "#3B945E",
        "color-theme3": "#DEF2F1",
        "color-card-theme3": "#FEFFFF",
        "color-button-primary-theme3": "#3AAFA9",
        "color-button-primary-focus-theme3": "#3AAFA9",
        "color-button-secondary-theme3": "#17252A",
        "color-theme4": "#F7F9FB",
        "color-card-theme4": "#FEFFFF",
        "color-button-primary-theme4": "#5085A5",
        "color-button-primary-focus-theme4": "#5085A5",
        "color-button-secondary-theme4": "#31708E",
        // theme5
        "color-theme5": "#FFFFFF", // Hintergrund
        "color-light-grey-theme5": "#F8F8F8", // Alternativer Hintergrund
        "color-button-primary-theme5": "#000000", // Schwarze Buttons
        "color-button-hover-theme5": "#222222", // Hover-Schwarze Buttons
        "color-disabled-button-theme5": "#BDBDBD", // Disabled Buttons
        "color-modal-overlay-theme5": "rgba(0, 0, 0, 0.5)", // Modal Overlay
      },
      borderColor: {
        // bestehende themes
        "color-theme2": "#2B7A78",
        // theme5
        "color-border-theme5": "#E0E0E0", // Leichte Rahmen
        "color-hover-border-theme5": "#444444", // Hover Border
        "color-error-border-theme5": "#FF4D4D", // Fehlerhafte Eingaben
      },
      fontFamily: {
        "concert-one": ["Concert One", "sans-serif"],
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
    // safelist für theme5
    {
      pattern: /text-color-(primary|secondary|black|error|success)-theme5/,
    },
    {
      pattern: /bg-color-(theme5|light-grey|button-primary|button-hover|disabled-button|modal-overlay)-theme5/,
    },
    {
      pattern: /border-color-(border|hover-border|error-border)-theme5/,
    },
  ],
  plugins: [],
});
