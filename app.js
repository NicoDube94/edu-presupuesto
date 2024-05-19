import express from 'express'
import logger from 'morgan'
import path from 'node:path'
//importación de rutas
import indexRoute from './routes/index.js'
import cargarRoute from './routes/cargar.js'

const __dirname = import.meta.dirname;

const app= express();
const port = process.env.PORT ?? 3000;
//app setters
app.set('views', path.join(__dirname,'views'));
app.set('view engine','pug');
//app middlewares 
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
//se lanza el server

app.listen(port,()=>{
    console.log("Server listening on port: "+port);
})