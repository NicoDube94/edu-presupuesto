import {Tipo} from '../models/tipo.js'
import {Trabajo} from '../models/trabajo.js'

export class indexControl{
    mostrarTodo=async(req,res)=>{
        const data=await Trabajo.findAll({include:{model:Tipo, required:true}})
        res.render('index',{"data":data})
    }
    delete=async(req,res)=>{

    }
    

}

