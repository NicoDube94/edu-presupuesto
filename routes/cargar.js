import express from 'express'
import {cargarControl} from '../controllers/cargar.js'
const router=express.Router();
router.get('/',cargarControl)

export default router;