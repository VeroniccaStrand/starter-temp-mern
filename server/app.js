import express from 'express'
import dotenv from "dotenv";
import connectDB from './config/db.js';
import cookieParser from "cookie-parser";
import cors from 'cors';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';


const app = express()
dotenv.config();

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("./frontend"));
app.use(cors());

connectDB();


app.use(errorHandler,notFound)
export default app