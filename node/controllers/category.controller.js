
// import db from '..mysql.config/config.js/'
import categoryModel from "../model/catergory.model.js"



class categoryController{

    constructor(){}

    list = async (req, res) => {
        const result =  await categoryModel.findAll({
            limit:2,
            order:['name']
        })

        console.log(result)
        res.json(result)
    }

    create = async (req, res) => {
        const name = req.body
            console.log(req.body);
            if (name){
                const model = await categoryModel.create(req.body)
                return res.json({newid: model.id})
            }
        }

    update = async (req, res) => {
        const { id, name } = req.body
            console.log(req.body);
            if (name && id){
                const model = await categoryModel.update(req.body, { where: { id: id }})
                return res.json({newid: model.id})
            }
            else {
                res.send(418)
            }
    }
    delete = async (req, res) => {
        try{
            await categoryModel.destroy({ where:{ id: req.params.id }})
            res.sendStatus(200)
        }
        catch(err){
            req.send(err)
        }
    }
}

export default categoryController




