import express from 'express'
import reviewsController from '../controllers/reviews.contorller.js'

export const reviewsRouter = express.Router()

const reviews = new reviewsController()

reviewsRouter.get('/reviews', (req, res) => {
    return res.json(123)
})

reviewsRouter.get('/reviews/:id([0-9])*', (req, res) => {
    return res.json('details')
})
reviewsRouter.post('/reviews', (req, res) => {
    return res.json('create')
})

reviewsRouter.put('/reviews/:id([0-9])*', (req, res) => {
    return res.json('opdate')
})

reviewsRouter.delete('/reviews/:id([0-9])*', (req, res) => {
    return res.json('delet')
})