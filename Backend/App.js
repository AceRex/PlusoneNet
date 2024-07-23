import express from "express";
import dotenv from "dotenv";
import router from "./route/Routes.js";
import connectDB from "./config/config.js";
import { notFound, errorHandler } from "./middleware/middleware.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
connectDB();

const port = process.env.PORT || 5090;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "https://assessment-zeta-seven.vercel.app/",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(cookieParser());

app.use("/api", router);

app.get("/", (req, res, next) =>
  res.send("You are now connected to the server")
);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`listening on ${port}`));
