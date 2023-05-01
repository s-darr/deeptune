export const convertAudio = async (formData) => {
    const response = await fetch(process.env.NEXT_PUBLIC_CONVERSION_API_URL, {
        method: 'POST',
        body: formData,
    })

    return await response.blob()
}
