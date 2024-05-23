FECHA: 22/5/24
hoy voy llegar a juntar los datos de la pagina cargar.pug, el formulario tiene que llegar completo al servidor.
OBSERVACIÓN : problemas con las etiquetas select, buscar la forma de enviarlas directamente por POST, NO SE PUDO, SE VA A ENVIAR POR FETCH DESDE EL USER
PROBAR SI VA A FUNCIONAR DE ESTA MANERA: funciona pero manda dos veces las solicitud y va a devolver un objeto vació que validando si esta vacío no va a pasar nada
OBSERVACIÓN: la view de carga recupera bien los datos, podemos pasar a la siguiente etapa.

ETAPA 2: implementar ORM sequelize para cargar los datos a la  base de datos