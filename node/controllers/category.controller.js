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
        // const { id, name } = req.body
        console.log(req.body);
        // if(id && name) {
        //     const model = await categoryModel.create({name: req.body.name})
        //     return res.json({newid: model.id})
        // }
    }

}

export default categoryController