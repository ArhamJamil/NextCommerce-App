'use server'
import { cookies } from "next/headers"
 
const getCookie = async (cookieProp) => {
    const cookieStore =  cookies()
    return  cookieStore.get(cookieProp)
}

export {getCookie}