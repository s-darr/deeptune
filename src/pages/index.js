import Navbar from '../components/Navbar'

export default function Home() {
    return (
        <main className="font-body h-screen w-screen bg-base">
            <Navbar />
            <div className="mt-20 flex flex-col justify-center items-center">
                <h1 className="flex font-bold md:text-9xl text-7xl font-title text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary background-animate">
                    deeptune.ai
                </h1>
            </div>
        </main>
    )
}
