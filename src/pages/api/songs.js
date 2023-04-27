// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
import { getAuth } from '@clerk/nextjs/server'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const { userId } = getAuth(req)

    const songs = await prisma.song.findMany() // Retrieve all the songs in the database
    const userSongs = await prisma.user.findUnique({
        where: { id: userId },
        include: { songs: true },
    })
    return res.status(200).json({ songs: songs, userSongs: userSongs })
}
