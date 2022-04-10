const { body } = require("express-validator");
const path = require("path");
const fs = require("fs");


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
                let formats = [".png", ".jpeg", ".jpg", ".svg", ".gif"]

                function deleteImg(filePath)
                {
                    fs.unlinkSync(filePath);
                }

                if(!file){
                    throw new Error("Debe escoger una imagen");
                }

                let fileExtension = path.extname(file.originalname);

                if(!formats.includes(fileExtension))
                {
                    //Función para eliminar la imagen si se crea con el formato incorrecto
                    deleteImg(path.join(__dirname, "../../public/images", file.filename));
                    throw new Error("Debe escoger un archivo de tipo: [" + formats.join(' ') + "]");
                }

                return true;
            })
    ]
}

module.exports = validation;