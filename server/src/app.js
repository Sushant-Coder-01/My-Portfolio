import express from "express";
import helmet from "helmet";
import cors from "cors";
import { errorHandler } from "./middleware/errorHandler.middleware.js";

const app = express();

// middlewares

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use(helmet());
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended: true, limit:"16kb"}));

// import route

import contactRouter from './routes/contact.routes.js';

// route declaration

app.use('/api/contact', contactRouter);

app.use(errorHandler);

export { app }