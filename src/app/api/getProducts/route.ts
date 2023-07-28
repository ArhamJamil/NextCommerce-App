import { NextRequest, NextResponse } from "next/server";
import { ConnectToDb } from '@/dbConfig/dbConn'
import ProductsSchema from '@/dbConfig/Schemas/ProductsSchema'

ConnectToDb()

export async function GET(request: Request) {
    try {
        
        const products = await ProductsSchema.find()
       
        if (products) {
            return NextResponse.json({products: products, success: true}, {status:200})
        }

    } catch (error) {
        return NextResponse.json({error: "Internal Server Error", message: error}, {status: 500})
    }
}
 