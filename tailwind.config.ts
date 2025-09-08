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
                "background-primary": "var(--background-primary)",
                "background-secondary": "var(--background-secondary)",
                "background-tertiary": "var(--background-tertiary)",
                "text-primary": "var(--text-primary)",
                "text-secondary": "var(--text-secondary)",
                "text-tertiary": "var(--text-tertiary)",
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
