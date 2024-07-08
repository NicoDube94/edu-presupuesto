import express from 'express'
import logger from 'morgan'
import path from 'node:path'
import {fileURLToPath} from 'url'
import cors from 'cors'
import test from './models/db.js'
//importación de rutas
import indexRoute from './routes/index.route.js'
import cargarRoute from './routes/cargar.route.js'
import updateRoute from './routes/update.route.js'


//cuestiones necesarias
// Obtener el nombre de archivo y directorio
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//const __dirname = import.meta.dirname;//generación de la variable global y uso de la misma en ESmodule
const app= express();
const port = process.env.PORT ?? 1234;

//implementación de archivos estáticos

app.use(express.static(path.join(__dirname,'public')))
app.use('/update',express.static(path.join(__dirname,'public')))

//implementación de la views

app.set('views', path.join(__dirname,'views'));
app.set('view engine','pug');

//app middlewares

app.use(cors()); 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// utilización de rutas 

app.use('/',indexRoute)
app.use('/cargar',cargarRoute)
app.use('/update',updateRoute)

// manejo de rutas inexistentes

app.all('*',(req,res)=>{
    res.status(404).render('error')
})

//se lanza el server y la prueba de la DB

app.listen(port,()=>{
    console.log(`Servidor lanzado en http://localhost:${port}`);
    test();
})