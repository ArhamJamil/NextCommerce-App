'use server'
import { cookies } from "next/headers"
 
const deleteCookie = async (cookieProp) => {
    const cookieStore =  cookies()
    return  cookieStore.delete(cookieProp)
}

export {deleteCookie}