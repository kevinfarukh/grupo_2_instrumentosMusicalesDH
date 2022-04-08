const { body } = require("express-validator");

const validation = {
    createValidation: [
        body("productName").notEmpty().withMessage("Debe ingresar un nombre para el producto"),
        body("description").notEmpty().withMessage("Debe agregar una descripción del producto"),
        body("characteristics").notEmpty().withMessage("Debe agregar las características del producto"),
        body("price").notEmpty().withMessage("Debe agregar el precio del producto").bail()
        .isInt().withMessage("Debe ingresar valores numéricos"),
        body("category").notEmpty().withMessage("Debe escoger una categoría"),
        body("img").custom((value, {req}) => 
            {
                let file = req.file;
                if(!file){
                    throw new Error("Debe escoger una imagen");
                }
            })
    ]
}

module.exports = validation;