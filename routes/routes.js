import express from 'express'
import { createArticle, getAllArticle } from '../controllers/articuloController.js'

const router = express.Router()

router.get('/', getAllArticle)
router.post('/', createArticle)

export default router