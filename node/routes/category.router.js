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

categoryRouter.put("/category/:id([0-9]*)", (req, res) => {
    return category.update(req,res)
})

categoryRouter.delete("/category/:id([0-9]*)", (req, res) => {
    return category.delete(req, res)
})