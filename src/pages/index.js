import Navbar from '../components/Navbar'
import Link from 'next/link'

export default function Home() {
    return (
        <main className="font-body font-semibold h-screen w-screen bg-base bg-hero-pattern">
            <Navbar />
            <div className="mt-20 flex flex-col justify-center items-center">
                {/* hero section */}
                <h1 className="flex font-extrabold md:text-8xl sm:text-7xl text-6xl font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary animate-title">
                    deeptune.ai
                </h1>
                <h2 className="font-extrabold font-title p-4 mb-16 md:text-3xl sm:text-2xl text-xl text-white text-opacity-het text-center">
                    The Home of AI Music
                </h2>
                {/* CTA section */}
                <div className="bg-base w-screen py-14 px-20">
                    <h2 className="md:text-xl sm:text-lg text-md text-white text-opacity-met text-center">
                        Create and Discover AI Song Covers From Your Favorite
                        Celebrities
                    </h2>
                    <div className="flex flex-row justify-center items-center mt-8 space-x-8">
                        <Link href="/create">
                            <div className="relative">
                                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary via-secondary to-tertiary animate-button"></div>
                                <button className="relative md:w-56 sm:52 w-48 py-4 px-2 rounded-lg text-opacity-het hover:text-black hover:bg-opacity-0 bg-base text-white md:text-xl sm:text-lg text-sm">
                                    Create
                                </button>
                            </div>
                        </Link>
                        <Link href="/discover">
                            <div className="relative">
                                <div className="absolute -inset-0.5 rounded-lg bg-white opacity-het animate-button"></div>
                                <button className="relative md:w-56 sm:52 w-48 py-4 px-2 rounded-lg text-opacity-het text-black hover:text-white bg-opacity-0 hover:bg-opacity-100 bg-base md:text-xl sm:text-lg text-sm">
                                    Discover
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
