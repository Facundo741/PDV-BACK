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

export const getArticle= async (req,res)=>{
    try {
        const article = await ArticuloModel.findAll({
            where : {id: req.params.id}
        })
        res.json(article)
    } catch (error) {
        res.json({message:error.message})
    }
}


export const updateArticle = async (req,res) =>{
    try {
        await ArticuloModel.update(req.body,{
            where: {id:req.params.id}
        })
        res.json({
            "message":"Articulo modificado con exito"
        })
    } catch (error) {
        res.json({message:error.message})
    }
}

export const deleteArticle = async (res,req)=>{
    try {
        await ArticuloModel.destroy({
            where: {id:req.params.id}
        })
        res.json({
            "message":"Articulo eliminado con exito"
        })
    } catch (error) {
        res.json({message: error.message})        
    }
}