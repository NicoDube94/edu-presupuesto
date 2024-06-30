import {Tipo} from '../models/tipo.js'
import {Trabajo} from '../models/trabajo.js'

export class UpdateControl{
  mostrarData=async(req,res)=>{
    const id = req.params
    const data=await Trabajo.findByPk(id,{include:{model:Tipo, required:true}});
    res.status(204).render('update',{"data":data})
    console.log(data);
  }
  update= async(req,res)=>{
    const id = req.params
    const data=await Trabajo.findByPk(id,{include:{model:Tipo, required:true}});
    res.sendStatus(204)
    console.log(data);
  }
}