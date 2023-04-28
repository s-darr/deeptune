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
                /* style auth modals */
                appearance={{
                    baseTheme: dark,
                    elements: {
                        rootBox: {
                            fontFamily: 'Inconsolata, monospace',
                        },
                        card: 'bg-base',
                        headerTitle: 'text-white opacity-het',
                        headerSubtitle: 'text-white opacity-met',
                        modalCloseButton:
                            'text-tertiary text-opacity-het hover:text-opacity-100 bg-transparent hover:bg-transparent',
                        headerBackLink: 'hidden',
                        headerBackIcon:
                            'text-primary opacity-het hover:opacity-100 hover:outline-none',
                        formFieldLabel: 'text-white opacity-het',
                        formFieldInput:
                            'bg-white bg-opacity-e1 border-2 border-white border-opacity-e5 text-opacity-met focus:ring-0 focus:border-opacity-met',
                        formFieldInputShowPasswordButton:
                            'text-white opacity-e6 hover:text-white hover:opacity-e8 focus:ring-0',
                        formFieldAction:
                            'text-secondary hover:text-secondary opacity-het hover:opacity-100 hover:no-underline',
                        formButtonPrimary:
                            'rounded-lg bg-gradient-to-r from-primary via-secondary to-tertiary animate-button text-black text-opacity-het capitalize opacity-het hover:opacity-100',
                        otpCodeFieldInput: 'focus:border-tertiary',
                        formResendCodeLink:
                            'text-primary opacity-het hover:opacity-100 hover:no-underline',
                        footerActionText: 'text-white opacity-met',
                        footerActionLink:
                            'text-secondary hover:text-secondary opacity-het hover:opacity-100 hover:no-underline',
                        identityPreviewEditButton:
                            'text-primary hover:text-primary opacity-het hover:opacity-100',
                    },
                }}
                {...pageProps}
            >
                <Component {...pageProps} />
            </ClerkProvider>
        </main>
    )
}
