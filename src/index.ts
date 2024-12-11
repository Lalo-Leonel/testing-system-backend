import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import routerTest from "./routes/test";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(8080, () => {
    console.log(`App running at http://localhost:8080`);
});

const MONGO_URL = "mongodb+srv://leonel:KWXKipCIITkLczuQ@cluster0.bnwjw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error',(error: Error)=> console.log(error));

app.use("/api", routerTest);