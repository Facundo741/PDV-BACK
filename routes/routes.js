import express from 'express'
import { createArticle, deleteArticle, getAllArticle, getArticle, updateArticle } from '../controllers/articuloController.js'

const router = express.Router()

router.get('/', getAllArticle)
router.get('/:id', getArticle)
router.post('/', createArticle)
router.patch('/:id', updateArticle)
router.delete('/:id', deleteArticle)

export default router