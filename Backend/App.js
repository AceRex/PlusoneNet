import express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5090;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => res.send("You are now connected to the server"));
app.listen(port, () => console.log(`listening on ${port}`));
