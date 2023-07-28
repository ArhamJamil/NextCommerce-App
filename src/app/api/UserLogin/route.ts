import { ConnectToDb } from '@/dbConfig/dbConn'
import { NextResponse, NextRequest } from 'next/server'
import UserSchema from '@/dbConfig/Schemas/UserSchema'
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')

ConnectToDb()

export async function POST(request: Request) {
    try {
        const reqBody = await request.json()
        const { email, password } = reqBody
        console.log(reqBody)

        //Check if User Already Exist
        const user = await UserSchema.findOne({email: email})
        if (!user) {
            return NextResponse.json({Message: "User Does not Exists", success: false}, {status:400})
        }

        //Check if Entered Passowrd is Valid

        let isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) {
            return NextResponse.json({Message: "Invalid Password", success: false}, {status:400})
        }

         //Create Token Data
         const tokenData = {
            id: user._id
        }

        const token = jwt.sign(tokenData, process.env.USER_TOKEN_SECRET_KEY!, {expiresIn: "1d"})
         const response = NextResponse.json({message: "LoggedIn Successfully", success: true}, {status:200})
        response.cookies.set("UserAuth", token , {
            httpOnly: true,
            expires: new Date(Date.now() + 60 * 60 * 1000), // Set expiration to 1 hour from now
            secure: true

        })
        return response


    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}