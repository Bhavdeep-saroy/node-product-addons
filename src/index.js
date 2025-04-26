import connectDB from "./DB/index.js";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config()


connectDB().then( () => {
    const port = process.env.PORT || 50009;
    app.listen(port, () =>{
        console.log(`Server is running on port ${port}`);
    })
   
}).catch((error) => {
    console.log("Server some thing went wrong", error)
})