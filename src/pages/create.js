import Navbar from '../components/Navbar'
import ArtistDropdown from '../components/ArtistDropdown'
import FileUpload from '../components/FileUpload'
import { useAuth } from '@clerk/clerk-react'
import { useQuery } from 'react-query'
import { fetchCredits } from '@component/utils/fetchCredits'
import { convertAudio } from '@component/utils/convertAudio'
import { useRef, useState } from 'react'
import VoiceToggle from '../components/VoiceToggle'
import Loading from '../components/Loading'
import { PrismaClient } from '@prisma/client'
import prepareFormData from '../utils/prepareFormData'

export default function Create({ models }) {
    const [loading, setLoading] = useState(false)
    const [selectedArtist, setSelectedArtist] = useState(null)
    const [uploadedFile, setUploadedFile] = useState(null)
    const [selectedToggle, setSelectedToggle] = useState('')
    const { userId, isSignedIn } = useAuth()
    const [audioBlobUrl, setAudioBlobUrl] = useState(null)
    const audioRef = useRef()
    const credits = useQuery(
        ['credits', { isSignedIn: isSignedIn }],
        fetchCredits
    )?.data?.credits

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!isSignedIn) {
            document.getElementById('sign-up').click()
        } else if (loading) {
            // prevent double submission
            return
        } else if (credits < 1) {
            document.getElementById('credits').click()
        }
        setLoading(true)
        const inputFormData = prepareFormData(
            userId,
            selectedArtist,
            selectedToggle,
            uploadedFile
        )

        const data = await convertAudio(inputFormData)
        const blobUrl = URL.createObjectURL(data)
        setAudioBlobUrl(blobUrl)
        setLoading(false)
    }

    return (
        <main className="font-body font-semibold h-screen w-screen bg-gradient-to-b from-gray-800 via-gray-950 to-gray-950">
            <Navbar />
            <form
                className="mt-20 flex flex-col justify-center items-center gap-14"
                onSubmit={handleSubmit}
            >
                <ArtistDropdown
                    models={models}
                    onArtistSelect={setSelectedArtist}
                />
                <FileUpload onFileUpload={setUploadedFile} />
                <VoiceToggle onToggleSelect={setSelectedToggle} />

                {audioBlobUrl && (
                    <div className="mt-6">
                        <audio ref={audioRef} src={audioBlobUrl} controls />
                    </div>
                )}
                <div className="relative">
                    <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary via-secondary to-tertiary animate-button"></div>
                    <button className="relative rounded-xl hover:text-black hover:bg-opacity-0 bg-gray-950 md:w-96 sm:w-80 w-72 py-6 px-4 text-white text-opacity-het text-xl">
                        {loading ? <Loading /> : 'Create'}
                    </button>
                </div>
            </form>
        </main>
    )
}

export async function getStaticProps() {
    const prisma = new PrismaClient()
    const models = await prisma.models.findMany()
    return {
        props: { models: JSON.parse(JSON.stringify(models)) }, // will be passed to the page component as props
    }
}
