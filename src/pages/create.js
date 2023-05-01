import Navbar from '../components/Navbar'
import { useAuth } from '@clerk/clerk-react'
import { convertAudio } from '@component/utils/convertAudio'
import { useState } from 'react'
import Spinner from '../components/Spinner'
import { downloadBlob } from '@component/utils/downloadBlob'
export default function Create() {
    const [loading, setLoading] = useState(false)
    const { userId } = useAuth()
    const handleSubmit = async (event) => {
        event.preventDefault()
        // need to perform some validation here, eg check if file is wav file, if user not signed in, etc
        // set loading to true after validation
        setLoading(true)
        const inputFormData = new FormData(event.target)
        const { artist, type } = Object.fromEntries(inputFormData.entries())
        const file = inputFormData.get('input-file')
        const f0Method = type === 'singing' ? 'parselmouth' : 'dio' // api works better with parselmouth for singing
        const requestJsonData = {
            'model-name': artist,
            'userId': userId,
            'speaker': 'anything',
            'f0-method': f0Method,
            'output-file': 'output.wav',
            'input-file': file,
        }
        for (const key in requestJsonData) {
            inputFormData.append(key, requestJsonData[key])
        }
        const data = await convertAudio(inputFormData)
        downloadBlob(data, 'output.wav')
        setLoading(false) // change state of spinner once download is complete
    }
    return (
        <main className="font-body font-semibold h-screen w-screen bg-base bg-hero-pattern">
            <Navbar />
            <div className="mt-6 flex flex-col justify-center items-center">
                <h1 className="flex font-extrabold md:text-7xl sm:text-6xl text-5xl font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary animate-title">
                    Create
                </h1>
                <form
                    className="mt-6 flex flex-col justify-center items-center"
                    onSubmit={handleSubmit}
                >
                    <label
                        htmlFor="audio-file"
                        className="text-white text-lg mb-2"
                    >
                        Select an audio file:
                    </label>
                    <input
                        type="file"
                        id="audio-file"
                        accept=".mp3,.wav"
                        className="bg-gray-800 text-white py-2 px-4 rounded-lg mb-4"
                        name="input-file"
                    />
                    <label htmlFor="artist" className="text-white text-lg mb-2">
                        Choose an artist:
                    </label>
                    <select
                        id="artist"
                        name="artist"
                        className="bg-gray-800 text-white py-2 px-4 rounded-lg mb-4"
                    >
                        <option value="Juice">Juice WRLD</option>
                        <option value="Dua">Dua Lipa</option>
                        <option value="artist3">Artist 3</option>
                    </select>
                    <label htmlFor="type" className="text-white text-lg mb-2">
                        Choose a type:
                    </label>
                    <div className="flex flex-row items-center mb-4">
                        <label htmlFor="singing" className="text-white mr-4">
                            <input
                                type="radio"
                                id="type"
                                name="type"
                                value="singing"
                                className="mr-2"
                            />
                            Singing
                        </label>
                        <label htmlFor="rapping" className="text-white">
                            <input
                                type="radio"
                                id="rapping"
                                name="genre"
                                value="rapping"
                                className="mr-2"
                            />
                            Rapping
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="bg-gray-800 text-white py-2 px-4 rounded-lg flex items-center justify-center"
                        disabled={loading}
                    >
                        {loading ? <Spinner /> : 'Convert'}
                    </button>
                </form>
            </div>
        </main>
    )
}
