import express from "express";
import { CreateProduct, UpdateProduct, deleteproduct, getProductByID, getProducts } from "./../Controller/productController.js";



const router = express.Router()

router.route('/').get(getProducts).post(CreateProduct)
router.route('/:id').get(getProductByID).put(UpdateProduct).delete(deleteproduct)

export default router