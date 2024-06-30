import express from 'express'
import {indexControl} from '../controllers/index.controller.js'

const router=express.Router();
const index_cl=new indexControl();//esta linea es necesaria para que funcione la clase del controlador


//rutas de la pagina principal

router.get('/',index_cl.mostrarTodo);
router.delete('/:id')
export default router;