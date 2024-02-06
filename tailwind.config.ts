import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            borderRadius: {
                low: '3px',
            },
            maxWidth: {
                maxWidth: '90rem',
            },
            padding: {
                low: '1rem',
            },
            colors: {
                white: '#F6F6F6',
                gray: {
                    50: '#8D8D8D',
                    100: '#525252',
                    200: '#313131',
                },
                blue: {
                    100: '#8DBBFF',
                    200: '#6D97D7',
                },
            },
        },
    },
    plugins: [],
};
export default config;
