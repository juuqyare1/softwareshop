import mongoose from "mongoose";

const DBconnect = async()=>{
    try {
       
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to database on ${conn.connection.name}`);
    } catch (e) {
        console.log(e);
    }
}
export default DBconnect