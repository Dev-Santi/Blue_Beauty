import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                white: '#F6F6F6',
                gray: {
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
