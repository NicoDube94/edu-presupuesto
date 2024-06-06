import {Tipo} from '../models/tipo.js'
import {Trabajo} from '../models/trabajo.js'

export class indexControl{
    mostrarTodo=async(req,res)=>{
        const data=await Trabajo.findAll({include:{model:Tipo, required:true}})
        res.render('index',{"data":data})
    }
    update= async(req,res)=>{
        const data=await Tipo.findAll();
        res.render('update',{data:data})
    }
    delete=async(req,res)=>{

    }
    

}

