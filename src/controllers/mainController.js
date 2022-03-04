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
    }

}

module.exports = mainController;