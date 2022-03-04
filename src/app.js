// modulos express y path

const express = require("express");
const path = require("path");

const app = express();

//carpeta estatica public y ejs

app.use(express.static(path.resolve(__dirname,"../public")));
app.set("views",path.join(__dirname,"./src/views"))
app.set("view engine","ejs")

//servidor localhost:3010
let puerto = 3010;
app.listen(puerto, ()=>{
    console.log("servidor corriendo en el puerto " + puerto) 
})

//rutas
const mainRouter = require("./routers/mainRouter")

//vinculos de cada página

app.get("/", mainRouter)
    
app.get("/product-detail", mainRouter);

app.get("/carrito", mainRouter);
    
app.get('/register',mainRouter) ;

app.get('/login', mainRouter);

app.post("/",(req,res)=>{
    res.sendFile(path.resolve("./views/index.html"))
})
