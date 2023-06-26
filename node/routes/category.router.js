import express from "express"
import categoryController from "../controllers/category.controller.js"

export const categoryRouter = express.Router()

const category = new categoryController()



categoryRouter.get('/category', (req, res) => {
    return category.list(req,res)
})

categoryRouter.post("/category", (req, res) => {
    return category.create(req,res)
})

categoryRouter.put("/category", (req, res) => {
    return res.json('put virker')
})

categoryRouter.delete("/category", (req, res) => {
    console.log('delet virker');
})