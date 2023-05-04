const Upload = ({ onFileUpload }) => {
    const handleFileUpload = (event) => {
        const uploadedFile = event.target.files[0]
        if (uploadedFile) {
            onFileUpload(uploadedFile) // Pass the uploaded file to the parent component
        }
    }

    return (
        <fieldset className="text-gray-100">
            <input
                type="file"
                name="files"
                id="files"
                className="md:px-60 py-12 sm:px-1 border-2 border-dashed rounded-lg border-primary text-gray-400 bg-base"
                required
                accept="audio/wav"
                onChange={handleFileUpload}
            />
        </fieldset>
    )
}

export default Upload
