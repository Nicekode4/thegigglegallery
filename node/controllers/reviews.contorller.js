import reviewsModel from '../model/reviews.model.js'

// Kontrollerklasse til håndtering af anmeldelser
class reviewsController{

    constructor(){}

// Metode til at hente en liste over anmeldelser
    list = async (req, res) =>{
        const result = await reviewsModel.findAll({
            limit:10,
            order:['name']
        })
        console.log(result)
        res.json(result)
    }

// Metode til at hente detaljer for en bestemt anmeldelse
    details = async (req, res) =>{
        const result = await reviewsModel.findAll({
            where:{id: req.params.id}
        })
        console.log(result)
        res.json(result)
    }

// Metode til at oprette en ny anmeldelse
    create = async( req,res) =>{
        const title = req.body
        console.log(req.body);
        if (title){
            const model = await reviewsModel.create(req.body)
            return res.json({newid:model.id})
        }
        
    }

// Metode til at opdatere en anmeldelse
    update = async (req,res) =>{
        const {id,title} = req.body
        console.log(req.body);
        if(title && id){
            const model = await reviewsModel.update(req.body,{where:{id: id}})
            return res.json({newid:model.id})
        }
        else{
            res.send(418)
        }
    }

// Metode til at slette en anmeldelse
    delete = async (req, res) =>{
        try{
            await reviewsModel.destroy({where: {id: req.params.id }})
            res.sendStatus(200)
        }
        catch(err){
            res.send(err)
        }
            }
    }

export default reviewsController

