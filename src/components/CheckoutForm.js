import { loadStripe } from '@stripe/stripe-js'
import { useAuth } from '@clerk/clerk-react'
const CheckoutForm = () => {
    const { userId } = useAuth()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const stripe = await loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)
        const { error } = await stripe.redirectToCheckout({
            // webhook can access session created
            lineItems: [
                { price: 'price_1N1vJ0JwwbRV6RGNNeOiqxiQ', quantity: 1 },
            ],
            successUrl: `${window.location.origin}/create`, // redirect to create page
            mode: 'payment',
            clientReferenceId: userId, // user id to be allow for webhook to access
        })
        console.warn(error.message)
    }
    return (
        <form onSubmit={handleSubmit}>
            <button className="" type="submit">
                BUY 100 CREDITS 2 DOLLARS (CAN CHANGE THIS)
            </button>
        </form>
    )
}

export default CheckoutForm
