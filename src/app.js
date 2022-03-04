// modulos express y path

const express = require("express");
const path = require("path");

const app = express();

//carpeta estatica public

app.use(express.static(path.resolve(__dirname,"./public")));
app.set("views",path.join(__dirname,"./src/views"))
app.set("view engine","ejs")

//servidor localhost:3010
let puerto = 3010;
app.listen(puerto, ()=>{
    console.log("servidor corriendo en el puerto " + puerto) 
})

//vinculos de cada página

app.get("/", (req, res) => 
    res.sendFile(path.join(__dirname + "/views/index.html")))
    
app.get("/product-detail",(req,res)=>{
    res.sendFile(path.resolve("./views/productDetail.html"))
});
app.get("/carrito",(req,res)=>{
    res.render(path.resolve("./src/views/carrito"))
    
});
app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});
app.post("/",(req,res)=>{
    res.sendFile(path.resolve("./views/index.html"))
})
