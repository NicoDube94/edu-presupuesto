import express from 'express'
import {indexControl} from '../controllers/index.js'
const router=express.Router();

//rutas de la pagina principal

router.get('/',indexControl);

export default router;
