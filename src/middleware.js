import { withClerkMiddleware } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export default withClerkMiddleware((req) => {
    return NextResponse.next()
})

// stop middleware running on static files
export const config = {
    matcher: '/((?!_next/image|_next/static|favicon.ico).*)',
}
