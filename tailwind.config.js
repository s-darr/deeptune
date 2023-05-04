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
                primary: '#ec4899',
                secondary: '#ef4444',
                tertiary: '#eab308',
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
            backgroundImage: {
                'hero-pattern':
                    "url(\"data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E\")",
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
