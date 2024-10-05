import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                secondary: "var(--secondary)",
            },

            fontFamily: {
                montserrat: ['var(--font-montserrat)']
            },
            gridTemplateColumns: {
                header: "100px 1fr 400px",
                footer: "400px minmax(200px, 1fr) 200px",
                projectTitle: "max-content max-content"
            },
        },
    },
    plugins: [],
};
export default config;
