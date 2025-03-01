import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config();
const app = express();

app.use(express.json()); // parse JSON body
app.use(cors()); // Allow frontend requests

// Handle Tweet submission
app.post("/tweet,", (req, res) => {
    const { tweet } = req.body;
})