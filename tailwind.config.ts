import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "text-dark": "#391400",
                "text-light": "#FFF",
                "text-accent": "#EF6D58",
                "text-light-gray": "rgba(255, 255, 255, 0.64)",
            },
            backgroundColor: {
                "blue-dark": "#28293E",
                light: "#FDF0E9",
                "bg-orange": "#EF6D58",
            },
        },
    },
    plugins: [],
};
export default config;
