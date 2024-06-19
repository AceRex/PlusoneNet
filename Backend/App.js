import express from "express";
import dotenv from "dotenv";
import router from "./route/Routes.js";
import connectDB from "./config/config.js";
import { notFound, errorHandler } from "./middleware/middleware.js";
import cors from "cors";

dotenv.config();
connectDB();

const port = process.env.PORT || 5090;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use("*", cors(corsOptions));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use("/api", router);

app.get("/", (req, res, next) =>
  res.send("You are now connected to the server")
);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`listening on ${port}`));
