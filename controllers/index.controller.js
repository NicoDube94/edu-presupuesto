import {Tipo} from '../models/tipo.js'
import {Trabajo} from '../models/trabajo.js'

export class IndexControl{
    mostrarTodo=async(req,res)=>{
        const data=await Trabajo.findAll({include:{model:Tipo, required:true}})
        res.render('index',{data:data})
    }
    delete=async(req,res)=>{
        const id=req.params.id
        const data=await Trabajo.destroy({where:{id_trabajo:id}})
        if(data) res.sendStatus(204)
        else console.log('No anda el delete');
    }
    

}

