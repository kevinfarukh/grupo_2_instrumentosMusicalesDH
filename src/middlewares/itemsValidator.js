const { body } = require("express-validator");
const path = require("path");


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
                let formats = [ ".jpeg", ".jpg", ".svg", ".gif"]

                if(!file){
                    throw new Error("Debe escoger una imagen");
                }

                let fileExtension = path.extname(file.originalname);

                if(!formats.includes(fileExtension))
                {
                    throw new Error("Debe escoger un archivo de tipo: [" + formats.join(' ') + "]");
                }

                return true;
            })
    ]
}

module.exports = validation;