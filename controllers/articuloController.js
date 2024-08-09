import ArticuloModel from "../models/articuloModel.js";

export const createArticle = async (req,res) => {
    try {
        await ArticuloModel.create(req.body)
        res.json({
            "message":"Articulo creado con exito"
        })
    } catch (error) {
        res.json({message: error.message})
        
    }
}

export const getAllArticle= async (req,res)=>{
    try {
        const articles = await ArticuloModel.findAll()
        res.json(articles)
    } catch (error) {
        res.json({message:error.message})
    }
}