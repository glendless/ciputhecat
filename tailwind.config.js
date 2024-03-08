/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html'],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '16px',
        },
        extend: {
            colors: {
                // primary: '#ec4899',
                primary: '#FF4081',
                secondary: '#ff79b0',
                dark: '#292929',
                light: '#515151',
                // accent: '#ff79b0',
            },
            screens: {
                '2xl': '1320px',
            },
        },
    },
    plugins: [],
};
