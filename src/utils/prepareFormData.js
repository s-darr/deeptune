const prepareFormData = (
    userId,
    selectedArtist,
    selectedToggle,
    uploadedFile
) => {
    const inputFormData = new FormData()
    const f0Method = selectedToggle === 'Singing' ? 'parselmouth' : 'dio'
    const requestJsonData = {
        'model-name': selectedArtist.fileName,
        'userId': userId,
        'speaker': 'anything',
        'f0-method': f0Method,
        'output-file': 'output.wav',
        'input-file': uploadedFile,
    }

    for (const key in requestJsonData) {
        inputFormData.append(key, requestJsonData[key])
    }

    return inputFormData
}

export default prepareFormData
