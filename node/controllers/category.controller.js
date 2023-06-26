import categoryModel from "../models/category.model.js"

class categoryController {
    constructor() {}

    list = async (req, res) => {
        const result = await categoryModel.findAll({
            limit:2,
            order: ['name']
        })
        console.log(result);
        res.json(result)
    }
    create = async (req, res) => {
        const  name  = req.Body
        console.log(req.Body);
        if( name ) {
            const model = await categoryModel.create(req.Body)
            return res.json({newid: model.id})
        }
    }

}

export default categoryController