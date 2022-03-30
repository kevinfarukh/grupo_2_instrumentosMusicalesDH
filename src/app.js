// modulos express y path

const express = require("express");
const path = require("path");
const methodOverride =  require('method-override');

const app = express();

//carpeta estatica public y ejs

app.use(express.static(path.resolve(__dirname,"../public")));
app.set('views', path.join(__dirname, '/views'));
app.set("view engine","ejs")
app.use(methodOverride('_method'));

//archivos Json para post

app.use(express.urlencoded({extended: false}));
app.use(express.json())

//servidor localhost:3010
let puerto = 3010;
app.listen(puerto, ()=>{
    console.log("servidor corriendo en el puerto " + puerto) 
})

//rutas
const mainRouters = require("./routers/mainRouter")

//vinculos de cada página
app.use("/", mainRouters);




