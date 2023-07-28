import { ConnectToDb } from '@/dbConfig/dbConn'
import { NextResponse, NextRequest } from 'next/server'
import UserSchema from '@/dbConfig/Schemas/UserSchema'
var bcrypt = require('bcryptjs')

ConnectToDb()

export async function POST(request: Request) {
    try {
        const reqBody = await request.json()
        const { name, email, password } = reqBody
        console.log(reqBody)

        //Check if User Already Exist
        const user = await UserSchema.findOne({ email: email })
        if (user) {
            return NextResponse.json({ message: "User already registered with this email", success: false }, { status: 400 })
        }

        const salt = await bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new UserSchema({
            name: name,
            email: email,
            password: hashedPassword
        })

        const saveUser = await newUser.save()
        if (saveUser) {
            return NextResponse.json({ message: `Registered ${name} Sucessfully`, success: true, saveUser }, { status: 200 })
        }

    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}