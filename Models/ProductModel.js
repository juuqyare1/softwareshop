import mongoose from "mongoose";
import RatingSchema from "./RatingModel.js";

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    image:{
        type:String,
        required: true
    },
    Category:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    Oldprice:{
        type:Number,
        required: true
    },
    countInStock:{
        type:Number,
        required: true
    },
    raiting:{
        type:Number,
        required: true,
        default:0
    },
    raitings:[RatingSchema]
})

const productModel = mongoose.model("products",productSchema)
export default productModel