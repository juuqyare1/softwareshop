import productModel from "./../Models/ProductModel.js";
import products from "./../Models/ProductModel.js";

export const getProducts = async (req, res) => {
    try {
        const products = await productModel.find()
        res.status(200).json(products)
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}


export const getProductByID = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id)
        if (product) {
            res.status(200).json(product)
        }
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}

export const CreateProduct = async (req, res) => {
    try {

        const { name, image, Category, description, price, Oldprice, countInStock } = req.body


        const product = await productModel.create({
            name, image, Category, description, price, Oldprice, countInStock
        })
        if (product) {
            res.status(201).json(product)
        }
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}

export const UpdateProduct = async (req, res) => {
    try {

        const { name, image, Category, description, price, Oldprice, countInStock } = req.body

        const product = await productModel.findById(req.params.id)
        
        if (product) {
            product.name=name;
            product.image=image;
            product.Category=Category;
            product.description=description;
            product.price=price;
            product.Oldprice=Oldprice;
            product.countInStock=countInStock;
            const updatproduct = await  product.save()

            if (updatproduct) {
                res.status(200).json(updatproduct)
            }else{
                res.status(404).json({message:"product not found"})
            }
        }
      
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}


export const deleteproduct = async (req, res) => {
    try {
        const product = await productModel.findByIdAndDelete(req.params.id)
        if (product) {
            res.status(200).json({message:"prodoct was deleted"})
        }
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}