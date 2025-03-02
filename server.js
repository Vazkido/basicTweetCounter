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

    if (!tweet || tweet.length > 280) {
        return res.status(400).json({ error: "Invalid tweet length!"});
    }

    console.log("Tweet received:", tweet);
    res.json({message: "Tweet posted successfully!"});
});

// Start Server
const PORT 