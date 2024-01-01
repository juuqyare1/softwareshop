import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    isAdmin:{
        type: Boolean,
        required:true,
        default:0
    },
    phone:{
        type: Number,
        required:true
    },
    Address:{
        type: String,
        required:true
    },
    cart:[],
    wishList:[]
})

const userModel = mongoose.model("users",UserSchema)
export default userModel