import mongoose from "mongoose";

const ConnectToDb = async () => {
    try {
        let conn = await mongoose.connect(process.env.MONGO_URI)
        if (conn) {
            console.log("Successfully Connected To Database")
        }
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the process with an error code


    }
}

export { ConnectToDb }