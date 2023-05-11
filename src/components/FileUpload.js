const Upload = ({ onFileUpload }) => {
    const handleFileUpload = (event) => {
        const uploadedFile = event.target.files[0]
        if (uploadedFile) {
            onFileUpload(uploadedFile) // pass the uploaded file to the parent component
        }
    }

    return (
        <fieldset>
            <input
                type="file"
                name="files"
                id="files"
                className="px-8 sm:px-20 md:px-28 py-12 border-2 border-dashed rounded-xl border-white border-opacity-met hover:border-opacity-het text-white text-opacity-dt bg-transparent text-sm font-semibold hover:cursor-pointer"
                required
                accept="audio/wav"
                onChange={handleFileUpload}
            />
        </fieldset>
    )
}

export default Upload
