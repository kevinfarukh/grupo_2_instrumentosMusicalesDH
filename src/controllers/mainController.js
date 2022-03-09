const path = require("path")

const mainController = {

    index: (req, res) => {
    res.render(path.resolve(__dirname, "../views/index"))
    },

    register:(req,res)=>{
        res.render(path.resolve(__dirname,"../views/register"))
    },
    login:(req,res)=>{
        res.render(path.resolve(__dirname, '../views/login'));
    },
    carrito:(req,res)=>{
        res.render(path.resolve(__dirname,"../views/carrito"))
    },
    details: (req,res)=>{
        res.render(path.resolve(__dirname, "../views/productDetail"))
    },
    
    cargaGet: (req,res)=>{
        res.render(path.resolve(__dirname,"../views/formularioDeCarga"))
    },
    anotherProductDetail: (req,res)=>{
        res.render(path.resolve(__dirname,"../views/addProductDetail"))
    },
    addDetails: (req,res)=>{
        productos = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            caracteristicas: req.body.caracteristicas,
            precio: req.body.precio,
            imagen: req.body.imagen
        }
        res.render(path.resolve(__dirname, "../views/addProductDetail"), {productos: productos})
    }

}

module.exports = mainController;