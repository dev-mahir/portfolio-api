import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectDB from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";
import userRoute from "./routes/user.js";
import testimonialRoute from "./routes/testimonial.js";


// init express
const app = express();


// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// env config
const env = dotenv.config();

// static folder
app.use(express.static("api/public"));



// api route
app.use("/api/v1/user", userRoute);
app.use("/api/v1/testimonial", testimonialRoute);


// express error handler
app.use(errorHandler);



// init env variables
const PORT = process.env.PORT || 8080;

// listen server
app.listen(PORT, () => {
  connectDB();
  console.log(`server is running at http://localhost:${PORT}`.bgGreen.black);
});
