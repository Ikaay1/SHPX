/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: '380px',
            // => @media (min-width: 576px) { ... }

            md: '768px',
            // => @media (min-width: 960px) { ... }

            lg: '1028px',
            // => @media (min-width: 960px) { ... }
        },
        extend: {},
    },
    plugins: [],
};
