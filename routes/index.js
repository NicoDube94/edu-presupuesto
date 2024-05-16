import express from 'express'

const router=express.Router();

//rutas de la pagina principal

router.get('/',(req,res)=>{
    res.render('index')
})

export default router;
