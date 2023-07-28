import { ConnectToDb } from '@/dbConfig/dbConn'
import { NextResponse, NextRequest } from 'next/server'
import CartSchema from '@/dbConfig/Schemas/CartSchema'

var jwt = require('jsonwebtoken')


ConnectToDb()

export async function POST(request: NextRequest, response: Response) {
    try {
        const reqBody = await request.json()
        const { Prods, token } = reqBody
        // console.log(Prods)

        // Verify the token using jwt.verify
        const decodedToken = jwt.verify(token.value, process.env.USER_TOKEN_SECRET_KEY);

        // 'decodedToken' now contains the decoded information from the JWT
        // console.log(decodedToken.id);


        let cartData = await CartSchema.findOne({ userId: decodedToken.id })
        if (cartData) {
            // Check if the product already exists in the cart
            const existingProductIndex = cartData.items.findIndex((item:any) => item.productId === Prods._id);

            if (existingProductIndex !== -1) {
                // If the product exists, increase its quantity
                cartData.items[existingProductIndex].quantity += 1;
            } else {
                // If the product does not exist, add it to the items array
                cartData.items.push({
                    productId: Prods._id,
                    name: Prods.name,
                    price: Prods.price,
                    quantity: 1,
                    thumbnail: Prods.imageUrl
                });
            }
        } else {
            // If cartData does not exist, create a new cart with the new product
            cartData = new CartSchema({
                userId: decodedToken.id,
                items: [{
                    productId: Prods._id,
                    name: Prods.name,
                    price: Prods.price,
                    quantity: 1,
                    thumbnail: Prods.imageUrl
                }]
            });
        }

        // Save the updated cartData or new cartData to the database
        const savedCart = await cartData.save();

        if (savedCart) {
            console.log(savedCart);
            return NextResponse.json({ message: savedCart });
        }

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: error }, { status: 500 })
    }

}