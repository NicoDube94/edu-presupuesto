import express from 'express'
import {UpdateControl} from '../controllers/update.controller.js'

const router=express.Router();
const update_cl=new UpdateControl();//esta linea es necesaria para que funcione la clase del controlador


//rutas de la pagina principal

router.get('/:id',update_cl.mostrarData);
router.put('/update/:id',update_cl.update);

export default router;