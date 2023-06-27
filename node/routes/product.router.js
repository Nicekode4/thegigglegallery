import express from "express"
import productController from "../controllers/product.controller.js"

export const productRouter = express.Router()

const books = new productController()



productRouter.get('/books', (req, res) => {
    return books.list(req,res)
})

productRouter.post("/books", (req, res) => {
    return books.create(req,res)
})

productRouter.put("/books/:id([0-9]*)", (req, res) => {
    return books.update(req,res)
})

productRouter.delete("/books/:id([0-9]*)", (req, res) => {
    return books.delete(req, res)
})