import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(process.env.DB).then(() => console.log("DB Connected"))
}