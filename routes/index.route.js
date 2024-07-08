import express from 'express'
import {IndexControl} from '../controllers/index.controller.js'

const router=express.Router();
const index_cl=new IndexControl();//esta linea es necesaria para que funcione la clase del controlador


//rutas de la pagina principal

router.get('/',index_cl.mostrarTodo);
router.delete('/delete/:id',index_cl.delete)
export default router; 