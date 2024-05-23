//elementos de DOM
const tipos=document.getElementById("tipos");
const trabajo=document.getElementById("trabajo");
const precioMinimo=document.getElementById('precioMinimo');
const precioMaximo=document.getElementById('precioMaximo');
const unidades=document.getElementById('unidades');
const formulary=document.getElementById('miFormulario')
let tipo='';
tipos.addEventListener('change',(e)=>{tipo=e.target.value})
let unidad='';
unidades.addEventListener('change',(ev)=>{unidad=ev.target.value})
formulary.addEventListener('submit',(e)=>{
  const data =
  {
    tipo:tipo,
    trabajo:trabajo.value,
    precioMinimo:precioMinimo.value,
    precioMaximo:precioMaximo.value,
    unidad:unidad
  }
  console.log(data);
  fetch('/cargar',{
    method:'POST',
    headers: {'Content-Type': 'application/json'},
    body:JSON.stringify(data)
  }).then((res) => res.json())
})

