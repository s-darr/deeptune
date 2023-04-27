import '@component/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { Inconsolata, Karla } from 'next/font/google'

const karla = Karla({
    subsets: ['latin'],
    variable: '--karla',
})
const inconsolata = Inconsolata({
    subsets: ['latin'],
    variable: '--inconsolata',
})

export default function App({ Component, pageProps }) {
    return (
        <main
            className={`${karla.variable} font-heading ${inconsolata.variable} font-body`}
        >
            <ClerkProvider
                appearance={{
                    baseTheme: dark,
                }}
                {...pageProps}
            >
                <Component {...pageProps} />
            </ClerkProvider>
        </main>
    )
}
