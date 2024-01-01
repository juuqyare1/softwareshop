import  Express  from "express";
import DBconnect from "./config/DBconfig.js";
import usetRoutes from "./Routes/usetRoutes.js";
import productRoute from "./Routes/productRoute.js";
import dotenv from "dotenv";

dotenv.config()
const app= Express()
app.use(Express.json())

app.use('/api/users/',usetRoutes)
app.use('/api/products/',productRoute)

const port=5000;

DBconnect()

app.listen(port ,()=>{
    console.log(`server is runing on port ${port}`);
})

