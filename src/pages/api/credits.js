// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
import { getAuth } from '@clerk/nextjs/server'
const prisma = new PrismaClient()

export default async function handler(req, res) {
    const { userId } = getAuth(req)
    let user
    user = await prisma.user.findUnique({
        where: { id: userId },
    })
    if (!user) {
        user = await prisma.user.create({
            data: {
                id: userId,
            },
        })
    }
    return res.status(200).json({ credits: user.credits })
}
