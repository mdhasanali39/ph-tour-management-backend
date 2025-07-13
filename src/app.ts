import express, { Request, Response } from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

// middlewares  
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// health check 
app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Server is running well");
})

export default app