import Image from 'next/image'
import { Inter } from 'next/font/google'
import { SignInButton } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <SignInButton mode="modal">
                    <button className="btn">Sign in</button>
                </SignInButton>
            </div>
        </main>
    )
}
