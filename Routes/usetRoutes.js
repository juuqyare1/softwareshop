import express from "express";
import { CreateUser, UpdateUser, getUserByID, getUsers } from "../Controller/userController.js";

const Router =express.Router();

Router.route('/').get(getUsers).post(CreateUser)
Router.route('/:id').get(getUserByID).put(UpdateUser)

export default Router