import { ConnectToDb } from '@/dbConfig/dbConn'
import { NextResponse, NextRequest } from 'next/server'
import CartSchema from '@/dbConfig/Schemas/CartSchema'
var jwt = require('jsonwebtoken')

ConnectToDb()

export async function POST(request: Request, response: Response) {
    try {
        const reqBody = await request.json()
        const { token } = reqBody
        console.log(token)

        if (!token) {
            return NextResponse.json({ error: "Token not provided" }, { status: 400 })
        }

        // Verify the token using jwt.verify
        const decodedToken = jwt.verify(token.value, process.env.USER_TOKEN_SECRET_KEY);
        if (decodedToken && decodedToken.id) {
            let cartItems = await CartSchema.findOne({ userId: decodedToken.id })
            if (cartItems) {
                return NextResponse.json({ item: [cartItems], success: true }, { status: 200 })
            } else {
                return NextResponse.json({ error: "Cart items not found" }, { status: 404 })
            }
        } else {
            return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 })
        }

    } catch (error: any) {
        console.error("Error occurred:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
    }
}
