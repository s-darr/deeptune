import Navbar from '../components/Navbar'

export default function Create() {
    return (
        <main className="font-body font-semibold h-screen w-screen bg-base bg-hero-pattern">
            <Navbar />
            <div className="mt-4 flex flex-col justify-center items-center">
                <h1 className="flex font-extrabold md:text-8xl sm:text-7xl text-6xl font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary animate-title">
                    Discover
                </h1>
            </div>
        </main>
    )
}
