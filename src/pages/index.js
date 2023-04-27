import Navbar from '../components/Navbar'
import { useUser } from '@clerk/clerk-react'

export default function Home() {
    const { isLoaded: userLoaded, isSignedIn } = useUser()
    const user = useUser()
    if (!userLoaded) {
        // Handle loading state here
        return null
    }
    return (
        <main className="font-body font-semibold h-screen w-screen bg-base bg-hero-pattern">
            <Navbar isSignedIn={isSignedIn} />
            <div className="mt-20 flex flex-col justify-center items-center">
                <h1 className="flex font-extrabold md:text-8xl sm:text-7xl text-6xl font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary animate-title">
                    deeptune.ai
                </h1>
                <h2 className="font-extrabold p-4 mb-16 md:text-3xl sm:text-2xl text-xl text-white text-opacity-met text-center">
                    The Home of AI Music &#129302; &#127926;
                </h2>
                <div className="bg-base w-screen py-8 px-16">
                    <h2 className="font-extrabold md:text-2xl sm:text-xl text-lg text-white text-opacity-het text-center">
                        Create and Discover AI Covers From Your Favorite
                        Celebrities
                    </h2>
                    <div className="flex flex-row justify-center items-center mt-8 space-x-8">
                        <button className="self-center w-56 py-5 px-2 rounded bg-secondary bg-opacity-het hover:bg-opacity-100 text-black md:text-xl sm:text-lg text-xs text-opacity-het">
                            Create &#127908;
                        </button>
                        <button className="self-center w-56 py-5 px-2 rounded bg-tertiary bg-opacity-het hover:bg-opacity-100 text-black md:text-xl sm:text-lg text-xs text-opacity-het">
                            Discover &#127911;
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}
