import express from 'express'
import {UpdateControl} from '../controllers/update.controller.js';

const router=express.Router();
const update_cl=new UpdateControl()


//rutas de la pagina principal

router.get('/:id_trabajo',update_cl.mostrarData)
router.post('/:id_trabajo',update_cl.update);

export default router;