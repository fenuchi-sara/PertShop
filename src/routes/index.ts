import { Router } from "express"

import * as pageController from '../controllers/pageController'
import * as searchController from  '../controllers/searchController'

//criando a variavel p/rota
const router = Router()

//criar a rota home
router.get('/',pageController.home)
router.get('/dogs',pageController.dogs)
router.get('/cats',pageController.cats)
router.get('/fisher',pageController.fisher)


export default router