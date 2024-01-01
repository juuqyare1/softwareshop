import userModel from "./../Models/userModel.js";

export const getUsers = async(req,res)=>{
    try {
        const users = await userModel.find()
        res.status(200).json(users)
    } catch (e) {
        res.status(500).json({error: e.message})
    }
}

export const getUserByID = async(req,res)=>{
    try {
        const user = await userModel.findById(req.params.id)
        res.status(200).json(user)
    } catch (e) {
        res.status(500).json({error: e.message})
    }
}


export const Login = async(req,res)=>{
    try {
        const {email, password}= req.body
        const user = userModel({email})
        if (user) {
            if (user.password == password) {
                res.status(200).json(user)

            }else{
                res.status(400).json({message:"wrong password"})
            }

        }else{
            res.status(400).json({message:"user not found"})
        }
        res.status(200).json(user)
    } catch (e) {
        res.status(500).json({error: e.message})
    }
}



export const CreateUser = async(req,res)=>{
    try {
        const {name, email, password, phone, Address}= req.body
        const isUserExist= await userModel.findOne({email})
        if (isUserExist) {
            res.status(400).json({message: "User already Exsist"})
        }else{
            const user = await userModel.create({
                name, email, password, phone, Address
            })
            res.status(201).json(user)
        }

    } catch (e) {
        res.status(500).json({error: e.message})
    }
}

export const UpdateUser = async(req,res)=>{
    try {
        const {name, email, password, phone, Address}= req.body
        const user = await userModel.findById(req.params.id)
        if(user){
        user.name =name;
        user.email =email;
        user.password =password;
        user.phone =phone;
        user.Address =Address;

        const updatuser = await user.save()
            res.status(200).json(updatuser)
        }

    } catch (e) {
        res.status(500).json({error: e.message})
    }
}


