export class CargarControl {

  render=async (req,res)=>{
    res.render('cargar')
  }
  create=async (req,res)=>{
    const data=req.body;
    console.log(data);
  }
}