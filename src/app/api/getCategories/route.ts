import { NextRequest, NextResponse } from "next/server";
import { ConnectToDb } from '@/dbConfig/dbConn'
import ProductsSchema from '@/dbConfig/Schemas/ProductsSchema'

ConnectToDb()

export async function GET(request:NextRequest) {
    try {
        const categories = request.nextUrl.searchParams.get('category');
        if (!categories) {
            return NextResponse.json({ error: "Categories parameter is missing", success: false }, { status: 400 });
        }

        const categoriesArray = categories.split(',');

        const filteredProducts = await ProductsSchema.find({ 'category.sub': { $in: categoriesArray } });
        if (filteredProducts.length > 0) {
            return NextResponse.json({ FilterProducts: filteredProducts, success: true }, { status: 200 });
        }

        

    } catch (error) {
        return NextResponse.json({error: "Internal Server Error", message: error}, {status: 500})
    }
}
 