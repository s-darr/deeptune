export const downloadBlob = (blob, fileName) => {
    //automatically download blob returned from fetching API
    const downloadUrl = URL.createObjectURL(blob)
    const downloadLink = document.createElement('a')
    downloadLink.href = downloadUrl
    downloadLink.download = fileName
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
}
