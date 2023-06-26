import express from 'express'
import categoryController from '../controllers/category.controller.js'

export const categoryRouter = express.Router()

//class instans(kopi) - bliver til et object
const category = new categoryController()


//GET
categoryRouter.get('/category', (req, res) => {
    return category.list(req, res)
})

//POST
categoryRouter.post('/category', (req, res) => {
    return category.create(req, res)
    
})

//PUT
categoryRouter.put('/category', (req, res) => {
    console.log('virker det?');
    return res.json('PUT virker')
})

//DELETE
categoryRouter.delete('/category', (req, res) => {
    console.log('virker det?');
    return res.json('DELETE virker')
})