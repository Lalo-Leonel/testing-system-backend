import express from "express";
import cors from "cors";
import { connectDB } from "./database";
import routerTest from "./routes/test";

const app = express();

app.use(cors({
    origin: "*",
    credentials: false
}));
app.use(express.json());
app.listen(8080, () => {
    console.log(`App running at http://localhost:8080`);
});

connectDB();

app.use("/api", routerTest);