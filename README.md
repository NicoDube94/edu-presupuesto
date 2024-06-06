FECHA: 22/5/24
ETAPA 1:
hoy voy llegar a juntar los datos de la pagina cargar.pug, el formulario tiene que llegar completo al servidor. __ECHO__
OBSERVACIÓN : problemas con las etiquetas select, buscar la forma de enviarlas directamente por POST, NO SE PUDO, SE VA A ENVIAR POR FETCH DESDE EL USER
PROBAR SI VA A FUNCIONAR DE ESTA MANERA: funciona pero manda dos veces las solicitud y va a devolver un objeto vació que validando si esta vacío no va a pasar nada
OBSERVACIÓN: la view de carga recupera bien los datos, podemos pasar a la siguiente etapa.

ETAPA 2: 
implementar ORM sequelize para cargar los datos a la  base de datos __ECHO__

FECHA: 25/5/24
están creados los modelos con sus relaciones, voy a modificar la view de la muestra de tipos en el formulario para hacerla dinámica

FECHA: 26/5/24
hubo problemas con las relaciones entre tablas, estoy buscando la solución: encontré la solución estaba en que estaba haciendo mal uso de los métodos
hasMany y belongTo para relacionar los modelos, coloque las relaciones en un archivo aparte (db.js) específicamente donde lo configure para que funcione a semejanza
importe los dos modelos, los relacione y los exporte, queda deducir si realmente el export{Tipo,Trabajo} esta en real función o esta al pedo? -> estaba al pedo lo borre.

FECHA: 27/5/24
voy a cargar un par de datos a la base de datos para pasara mostrarlos en la tabla en la ruta '/'
concluida la etapa 2, vamos por la siguiente etapa.

ETAPA 3:
mostrar los datos en el dataTable ya con los botones de modificar y eliminar(no funcionales).__ECHO__

ETAPA 4:
agregar funcionalidad a los botones de modificar y eliminar

FECHA: 29/5/24
abarque el controller de indexController en una clase y la exporte a las rutas par que quede mas claro en código
acomode el código de index.pug

FECHA: 31/5/24
pude agregarle una pequeña funcionalidad a los botones, pero re repiten los id cosa que esta mal(una mala practica). es necesario
arreglar esos botones y ver como puedo identificar los __id´s__ de los TD de cada dato para poder manipularlos

FECHA: 5/6/24
arregle el método de envío de datos al servidor el la view de cargar específicamente(me faltaba agregar los atributos name a las etiquetas select)
dejando asi innecesaria la fetch que había creado en data.js
modifique el funcionamiento del boton modificar, solo muestra el formulario vacío hay que llenarlo