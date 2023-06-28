import sequelize from "../config/sequelize.config.js";
import {DataTypes, Model } from "sequelize";



class reviewsModel extends Model {}

// Definition af attributterne for modellen
reviewsModel.init({
    id: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,      
        allowNull:false
    },
    prodct_id: {
        type:DataTypes.INTEGER,
        allowNull:false
    },
    rating:{
        type:DataTypes.FLOAT,
        allowNull:false
    } ,
      title:{
        type:DataTypes.STRING,
        allowNull:true,
      },
      text:{
        type:DataTypes.TEXT,
        allowNull:true,
      }    
    },
    {
        sequelize,
        modelname:'reviews',
        freezeTableName:true,
        createdAt:'created_at',
        updatedAt:'updated_at'

    })

export  default reviewsModel