const express = require("express")
const router = express.Router()

const mainController = require("../controllers/mainController")
routers = {

    index: router.get("/", mainController.index),
    register: router.get("/register", mainController.register),
    carrito: router.get("/carrito", mainController.carrito ),
    login: router.get("/login", mainController.login),
    productDetail: router.get("/product-detail",mainController.details),
    anotherProductDetail: router.get("/product-detail/:id",mainController.details),
    cargaGet: router.get("/formulario",mainController.cargaGet),
    cargaPost: router.post("/product-detail",mainController.cargaPost)
}



module.exports = routers;