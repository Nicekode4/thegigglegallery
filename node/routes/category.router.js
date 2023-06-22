import express from 'express'

export const categoryRouter = express.Router()

categoryRouter.get('/category', (req, res) => {
    console.log('virker det?');
    return res.json
})