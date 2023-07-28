import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getCookie } from './serverActions/getCookie'

// This function can be marked `async` if using `await` inside
export async function  middleware(request: NextRequest) {
    let path = request.nextUrl.pathname
    const auth = request.cookies.get('UserAuth')?.value


    if (path === '/cart' &&  !auth) {
        return NextResponse.redirect(new URL ('/login', request.nextUrl))
    }

    // if (path === '/cart' && auth){
    //   return NextResponse.redirect(new URL('/cart' ))
    // }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/cart'
  ],
}