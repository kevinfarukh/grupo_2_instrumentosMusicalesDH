// modulos express y path

const express = require("express");
const path = require("path");

const app = express();

//carpeta estatica public

app.use(express.static(path.resolve(__dirname,"./public")));

//servidor localhost:3010

app.listen(3010, ()=>{
    console.log("servidor corriendo en el puerto 3000") 
})

//vinculos de cada página

app.get("/product-detail",(req,res)=>{
    res.sendFile(path.resolve("./views/productDetail.html"))
})
