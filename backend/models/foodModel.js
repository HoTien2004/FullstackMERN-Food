import mongoose from "mongoose";

const foodSChema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true }
    // created_at: { type: Date, default: Date.now },
    // updated_at: { type: Date, default: Date.now },
});

const foodModel = mongoose.models.food || mongoose.model("food", foodSChema);

export default foodModel;