// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
import { getAuth } from '@clerk/nextjs/server'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const { userId } = getAuth(req)
    user = await prisma.user.findUnique({
        where: { id: userId },
    })
    if (!user) {
        // user not found
    }

    // get number of credits

    // call api (add api key to .env)

    // check amount of credits

    return res.status(200).json({ credits: user.credits })
}
