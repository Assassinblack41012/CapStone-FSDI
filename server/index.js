import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import authRoutes from "./routes/auth.js";


dotenv.config();

const app = express();

// database connection
mongoose
.connect(process.env.MONGO_URI)
.then(() =>console.log("DB connected"))
.catch((err) => console.log("DB Error => ", err));


// http logger middleware
app.use(morgan("dev"));


// router middleware
app.use("/api", authRoutes);


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`we are live on port ${port}`);
})