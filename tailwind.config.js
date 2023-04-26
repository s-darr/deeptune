/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                body: ['var(--inconsolata)'],
                heading: ['var(--karla)'],
            },
            colors: {
                primary: '#a5d6a7',
                secondary: '#f48fb1',
                tertiary: '#fff59d',
                base: '#121212',
            },
            opacity: {
                e1: '0.05', // 1 elevation level above base
                e2: '0.07', // 2 elevation levels above base
                e3: '0.08', // 4 elevation levels above base
                e4: '0.09', // 4 elevation levels above base
                e5: '0.11', // 5 elevation levels above base
                e6: '0.12', // 6 elevation levels above base
                e7: '0.14', // 7 elevation levels above base
                e8: '0.15', // 8 elevation levels above base
                e9: '0.16', // 9 elevation levels above base
                het: '0.87', // High-emphasis text
                met: '0.6', // Medium-emphasis text
                dt: '0.38', // Disabled text
            },
        },
    },
    plugins: [],
}
