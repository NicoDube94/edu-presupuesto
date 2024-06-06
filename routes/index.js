import express from 'express'
import {indexControl} from '../controllers/index.js'

const router=express.Router();
const index_cl=new indexControl();//esta linea es necesaria para que funcione la clase del controlador


//rutas de la pagina principal

router.get('/',index_cl.mostrarTodo);
router.get('/update/:id',index_cl.update);

export default router;
