import express from "express"
import {config} from 'dotenv'
import course from "./routes/courseRoutes.js"
import user from "./routes/userRoutes.js"
import ErrorMiddleware from "./middlewares/Error.js"
import cookieParser from "cookie-parser"
import cors from 'cors'


config({
    path : "./config/config.env",
})
const app = express();

app.use(express.json());
// app.use(cors());
app.use(express.urlencoded({
    extended:true,
}));
app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  );
app.use(cookieParser());

app.use("/api/v1", course);
app.use("/api/v1", user);

export default app

app.use(ErrorMiddleware)