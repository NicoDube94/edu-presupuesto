import express from 'express'
import pug from 'pug'
import logger from 'morgan'
import path from 'node:path'
const __dirname = import.meta.dirname;

const app= express();
const port = process.env.PORT ?? 3000;
app.set('views', path.join(__dirname,'views'));
app.set('view engine','pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public','css')));


app.get('/',(req,res)=>{
    res.render('index')
})




app.listen(port,()=>{
    console.log("Server listening on port: "+port);
}) 