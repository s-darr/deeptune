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
                <h2 className="font-extrabold p-4 mb-16 md:text-3xl sm:text-2xl text-xl text-white text-opacity-met text-center">
                    The Home of AI Music &#129302; &#127926;
                </h2>
                {/* CTA section */}
                <div className="bg-base w-screen py-16 px-20">
                    <h2 className="font-extrabold md:text-2xl sm:text-xl text-lg text-white text-opacity-het text-center">
                        Create and Discover AI Covers From Your Favorite
                        Celebrities &#128171;
                    </h2>
                    <div className="flex flex-row justify-center items-center mt-8 space-x-8">
                        <Link href="/create">
                            <button className="self-center md:w-56 sm:52 w-48 py-5 px-2 rounded-lg bg-secondary bg-opacity-het hover:bg-opacity-100 text-black md:text-xl sm:text-lg text-sm text-opacity-het">
                                Create &#127908;
                            </button>
                        </Link>
                        <Link href="/discover">
                            <button className="self-center md:w-56 sm:52 w-48 py-5 px-2 rounded-lg bg-tertiary bg-opacity-het hover:bg-opacity-100 text-black md:text-xl sm:text-lg text-sm text-opacity-het">
                                Discover &#127911;
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
