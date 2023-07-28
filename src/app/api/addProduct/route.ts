import { ConnectToDb } from '@/dbConfig/dbConn'
import { NextResponse, NextRequest } from 'next/server'
import ProductsSchema from '@/dbConfig/Schemas/ProductsSchema'

import cloudinary from 'cloudinary';








ConnectToDb()

export async function POST(request: Request) {
  try {
    // Configure Cloudinary with your cloud name, API Key, and API Secret
    cloudinary.v2.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });


    // Check if the request body contains all required product details
    const reqBody = await request.json()
    const { name, description, price, category, image } = reqBody

    if (!name || !description || !price || !category || !image) {
      return NextResponse.json({ message: "Product Detail is missing !" }, { status: 400 })
    }
    const result = await cloudinary.v2.uploader.upload(image,);


    // Get the image URL from the Cloudinary result
    const imageUrl = result.secure_url;
    // Create the product in the database
    const product = new ProductsSchema({
      name,
      description,
      price,
      category,
      imageUrl,
    });

    // Save the product to the database
    let savedProduct = await product.save();
    if (savedProduct) {
      return NextResponse.json({ message: "Product added successfully" }, { status: 201 })
    }







  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error", message: error }, { status: 500 })
  }
}
