/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lightGray: "#727A82", // Gray text color
        lightGrayButton: "#F3F3F4", //Gray buttons
        midGray: "#F5F5F7", // Background color
        borderGray: "#EAEAEB", // Border color
        greenButton: "#1A8917", // Green buttons
        darkButton: "#323329", // Dark buttons
        greenText: "#327F37", // Green text
        lightGreen: "#1A8917", // Light green text for active tabs
        activeGreen: "#2FA837",
        lightGreenIcons: "#F2F6EC",
        // grayBorder: "#E0E2E7",
        borderBlue: "#2F69FF",
        backgroundBlue: "#2F69FF0A",
        lightBlack: "#292D33", // Main black color
        progress: "#2f69ff0a", //Color of progress bar
        grayBorder: "#E6E6E6", //Border Color for dropdown item's container
        grayHover: "#F5F5F5", //Hover background color for dropdown items
        blackText: "#1B2127", //Black text for dropdown
        lightDropBlack: "#6F7680", //Light black text for dropdown on hover
        // darkGrayBackground: "rgba(27, 33, 39, 0.56)", //dark background when modal opens
      },
    },
    screens: {
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1224px",
      // => @media (min-width: 1224px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
