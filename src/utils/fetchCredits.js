export const fetchCredits = async ({ queryKey }) => {
    const [_key, { isSignedIn }] = queryKey
    const res = await fetch('/api/credits')
    return await res.json()
}
