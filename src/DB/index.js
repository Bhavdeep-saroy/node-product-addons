import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()


const connectDB = async () => {
    try {
        console.log(`${process.env.mongoDBuri}`)
        const connectionInstance = await mongoose.connect(`${process.env.mongoDBuri}`);
        console.log(connectionInstance.connection.host)
    } catch (error) {
        console.log("MONGO DB Connection Failed error",error)
    }
}

export default connectDB;