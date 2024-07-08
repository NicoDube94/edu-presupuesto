import {Tipo} from '../models/tipo.js'
import {Trabajo} from '../models/trabajo.js'

export class UpdateControl{
  mostrarData=async(req,res)=>{
    const id = req.params.id_trabajo
    const data=await Trabajo.findByPk(id,{include:{model:Tipo, required:true}});
    res.status(200).render('update',{data:data})
  }
  update=async (req,res)=>{
    const id=req.params.id_trabajo
    const trabajo={
      nombre:req.body.nombre,
      unidad:req.body.unidad,
      precio_min:req.body.precioMinimo,
      precio_max:req.body.precioMaximo,
      id_tipo:req.body.tipos
    }
    const data=await Trabajo.update(trabajo,{where:{id_trabajo:id}})
    if(data) res.redirect('/')
    else res.send('No anduvo')
  }

}