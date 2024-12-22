import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://tienho:18102004@cluster0.novwi.mongodb.net/food-del').then(() => console.log("DB Connected"))
}