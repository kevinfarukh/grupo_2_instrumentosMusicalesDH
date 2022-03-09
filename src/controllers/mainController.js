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
        let instrumento={
            nombre: "piano",
        }
        res.render(path.resolve(__dirname,"../views/formularioDeCarga"))
    },
    cargaPost: (req,res)=>{
        let productos = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
        }
        res.render(path.resolve(__dirname, "../views/productDetail"), {productos: productos})
    }

}

module.exports = mainController;