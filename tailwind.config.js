/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
        16: "16px",
      },
      colors: {
        // neutral
        techsityNeutral_100: "#F8F9FC",
        techsityNeutral_200: "#F1F3F9",
        techsityNeutral_300: "#E1E6EF",
        techsityNeutral_400: "#CBD2E1",
        techsityNeutral_500: "#94A0B8",
        techsityNeutral_600: "#5F6C85",
        techsityNeutral_700: "#3F444D",
        techsityNeutral_800: "#23272F",
        techsityNeutral_900: "#1B1F27",
        techsityNeutral_1000: "#0A0D14",
        // primary
        techsityPrimary_100: "#CCD6D6",
        techsityPrimary_200: "#AABBBB",
        techsityPrimary_300: "#809999",
        techsityPrimary_400: "#557777",
        techsityPrimary_500: "#2A5555",
        techsityPrimary_600: "#003333",
        techsityPrimary_700: "#002A2A",
        techsityPrimary_800: "#002222",
        techsityPrimary_900: "#001A1A",
        techsityPrimary_1000: "#001111",
        // secondary
        techsitySecondary_100: "#DFFBE1",
        techsitySecondary_200: "#C9F9CD",
        techsitySecondary_300: "#AEF6B4",
        techsitySecondary_400: "#93F39C",
        techsitySecondary_500: "#78F083",
        techsitySecondary_600: "#5DED6A",
        techsitySecondary_700: "#4DC558",
        techsitySecondary_800: "#3E9E47",
        techsitySecondary_900: "#2E7635",
        techsitySecondary_1000: "#1F4F23",
        // primary
        techsityPrimary_100: "#CCD6D6",
        techsityPrimary_200: "#AABBBB",
        techsityPrimary_300: "#809999",
        techsityPrimary_400: "#557777",
        techsityPrimary_500: "#2A5555",
        techsityPrimary_600: "#003333",
        techsityPrimary_700: "#002A2A",
        techsityPrimary_800: "#002222",
        techsityPrimary_900: "#001A1A",
        techsityPrimary_1000: "#001111",
        // tetiary
        techsityTertiary_100: "#FFF7CC",
        techsityTertiary_200: "#FFF2AA",
        techsityTertiary_300: "#FEEB80",
        techsityTertiary_400: "#FEE455",
        techsityTertiary_500: "#FEDE2A",
        techsityTertiary_600: "#FED700",
        techsityTertiary_700: "#D4B300",
        techsityTertiary_800: "#A98F00",
        techsityTertiary_900: "#7F6B00",
        techsityTertiary_1000: "#554800",
        // specials
        techsityDanger_700: "#E02D3C",
        // gradient
        techsityGradient_left: "#E3FBDF",
        techsityGradient_right: "#FFF7CC",
      },
      fontFamily: {
        Inter: [["Inter"]],
      },
    },
  },
};
