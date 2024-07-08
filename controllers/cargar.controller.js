import {Tipo} from '../models/tipo.js'
import {Trabajo} from '../models/trabajo.js'
export class CargarControl {

  render=async (req,res)=>{
    const data=await Tipo.findAll();
    res.render('cargar',{data:data})
  }
  create=async (req,res)=>{
    const data={
      nombre:req.body.nombre,
      unidad:req.body.unidades,
      precio_min:req.body.precioMinimo,
      precio_max:req.body.precioMaximo,
      id_tipo:req.body.tipos
    }
    if(data){
      console.log("Comienza la secuencia de carga de datos a la tabla de trabajos");
      const crear=await Trabajo.create(data,{include:Tipo})
      console.log(JSON.stringify(crear,null,2));
      //redireccionamos a la misma pagina para que aparezca vacía, comprobar que no genere conflicto de envío de datos erróneos
      // SI NO FUNCIONA: averiguar que pasa
      res.redirect(301,'/cargar')
    }
    
  }
}