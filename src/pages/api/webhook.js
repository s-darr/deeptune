// see https://github.com/vercel/next.js/blob/canary/examples/with-stripe-typescript/pages/api/webhooks/index.ts
import Stripe from 'stripe'
import { PrismaClient } from '@prisma/client'
const handler = async (req, res) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

    if (req.method === 'POST') {
        let event
        try {
            const body = await buffer(req)
            event = stripe.webhooks.constructEvent(
                body,
                req.headers['stripe-signature'],
                process.env.STRIPE_WEBHOOK_SECRET
            )
        } catch (err) {
            // log errors if unable to construct event
            console.log(`Error message: ${err.message}`)
            res.status(400).send(`Webhook Error: ${err.message}`)
            return
        }

        if (event.type === 'checkout.session.completed') {
            const sessionId = event.data.object['id']
            const session = await stripe.checkout.sessions.retrieve(sessionId)
            const userId = session['client_reference_id']
            fulfillOrder(userId, 100)
        } else {
            console.warn(`Unhandled event type: ${event.type}`)
        }

        res.json({ received: true })
    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method Not Allowed')
    }
}
export const config = {
    api: {
        bodyParser: false,
    },
}

const fulfillOrder = async (userId, amount) => {
    const prisma = new PrismaClient()
    const updateUser = await prisma.user.update({
        where: {
            id: userId,
        },
        data: {
            credits: {
                increment: amount,
            },
        },
    })
}

const buffer = (req) => {
    return new Promise((resolve, reject) => {
        const chunks = []

        req.on('data', (chunk) => {
            chunks.push(chunk)
        })
        req.on('end', () => {
            resolve(Buffer.concat(chunks))
        })
        req.on('error', reject)
    })
}

export default handler
