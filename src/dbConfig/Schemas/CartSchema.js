import mongoose from 'mongoose';


const CartSchema = new mongoose.Schema({
    userId: String,
    items: [
        {
            productId: {
                type: String,
            },
            name: {
                type: String,
            },
            price: {
                type: Number,
            },
            quantity: {
                type: Number,
            },
            thumbnail: {
                type: String,
            }
            // Add other product details as needed
        },
    ],

})

export default mongoose.models.CartItem || mongoose.model('CartItem', CartSchema)  