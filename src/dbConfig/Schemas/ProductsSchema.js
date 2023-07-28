import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: {
        main: { type: String, enum: ['Clothes', 'Laptops', 'Mobiles'], required: true },
        sub: [{ type: String }], // Array of subcategories for the main category
    },

    discountPercentage: {
        type: Number,
        min: [1, 'Discount percentage must be at least 1'],
        max: [99, 'Discount percentage cannot exceed 99'],
    },
    imageUrl: { type: String, required: true },
    inventory: { type: Number, default: 0 }, // Default inventory value is 0
    ratings: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Assuming you have a User model
            rating: { type: Number, required: true, min: [0,], max: [5] },
        },
    ],
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.PRODUCTS_LIST || mongoose.model('PRODUCTS_LIST', productSchema)  