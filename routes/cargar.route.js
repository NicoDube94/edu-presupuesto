import{Router} from 'express'
import {CargarControl} from '../controllers/cargar.controller.js'

const router=Router();
const cargarControl=new CargarControl();

router.get('/',cargarControl.render)
router.post('/',cargarControl.create)
export default router;
