import express from "express";
const app = express();
import cors from "cors";



app.use(cors({
    origin: true,       
    credentials: true   
  }));
  
  app.use(express.json({ limit: "30kb", extended: true }));
  app.use(express.urlencoded({extended:true,limit:"30kb"}))
  app.use('/uploads', express.static('uploads'));
  

  import products from "./routes/products.routes.js";

  app.use("/api/v1/products", products);
export default app;
