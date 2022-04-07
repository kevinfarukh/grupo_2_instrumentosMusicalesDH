// modulos express y path

const express = require("express");
const session = require("express-session")
const path = require("path");
const methodOverride =  require('method-override');
const cookies = require("cookie-parser")

const app = express();

const menuLoginProfile = require("./middlewares/menuLoginProfile");

//carpeta estatica public y ejs
app.use(session({
    secret: "shh",
    resave: false,
    saveUninitialized: false
}))
app.use(cookies())
app.use(menuLoginProfile)
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
const userRouters = require('./routers/usersRouter')

//vinculos de cada página
app.use("/", mainRouters);
app.use("/user", userRouters);




