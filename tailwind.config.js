/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontSize: {
            xs: ["12px", "160%"],
            sm: ["14px", "160%"],
            base: ["16px", "160%"],
            lg: ["18px", "160%"],
            xl: ["20px", "160%"],
            h3: ["24px", "auto"],
            h2: ["32px", "auto"],
            h1: ["48px", "auto"],
        },
        extend: {
            fontFamily: {
                sans: "var(--font-inter)",
                serif: "var(--font-lora)",
                jawa: "Laraboyok",
            },
            colors: {
                earth: {
                    50: "#F8F7F4",
                    100: "#EEEDE6",
                    200: "#E2DFD6",
                    300: "#C5BEAC",
                    400: "#ACA18B",
                    500: "#9B8C74",
                    600: "#8E7D68",
                    700: "#776757",
                    800: "#62554A",
                    900: "#50463E",
                    950: "#2A2420",
                },
                leaf: {
                    50: "#F8F8F8",
                    100: "#ECEFE9",
                    200: "#D9DED4",
                    300: "#C4CCBD",
                    400: "#93A088",
                    500: "#728166",
                    600: "#5C6851",
                    700: "#4A5342",
                    800: "#3D4437",
                    900: "#33392E",
                    950: "#191D16",
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
