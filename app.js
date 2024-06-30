import express from 'express'
import logger from 'morgan'
import path from 'node:path'
import cors from 'cors'
import test from './models/db.js'
//importación de rutas
import indexRoute from './routes/index.route.js'
import cargarRoute from './routes/cargar.route.js'
import updateRoute from './routes/update.route.js'
const __dirname = import.meta.dirname;//generación de la variable global y uso de la misma en ESmodule

const app= express();
const port = process.env.PORT ?? 1234;
//app setters
app.set('views', path.join(__dirname,'views'));
app.set('view engine','pug');
//app middlewares
app.use(cors()); 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public','css')));
app.use(express.static(path.join(__dirname,'public','scripts')));
app.use(express.static(path.join(__dirname,'public','images')))

// utilización de rutas 

app.use('/',indexRoute)
app.use('/cargar',cargarRoute)
app.use('/update/:id',updateRoute)

//se lanza el server
app.listen(port,()=>{
    console.log("Server listening on port: "+port);
    test();
})