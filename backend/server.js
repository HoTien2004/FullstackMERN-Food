import express from "express";
import cors from "cors";
import 'dotenv/config'
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
// import bodyParser from "body-parser";

// app config
const app = express();
const port = 4000;

// body parser
// app.use(bodyParser.urlencoded({ extended: true }));

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req,res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})

// mongodb+srv://tienho:18102004@cluster0.novwi.mongodb.net/?