module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        price: {
            type: dataTypes.FLOAT,
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        img_product: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    let config = {
        tableName: "products",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at",
        paranoid: true
    };
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        /*Product.belongsToMany(models.ShoppingCart, {
            as: "shoppingCart",
            through: "shoppingCart",
            foreignKey: "product_id",
            otherKey: "user_id",
            timestamps: false 
        }),*/
        Product.belongsTo(models.Category, {
            as: "category",
            foreignKey: "category_id",
        })
    }
    return Product;
}