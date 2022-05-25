module.exports = (sequelize, dataTypes) => {
    let alias = "ShoppingCart";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        product_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }
    let config = {
        tableName: "shoppingCart",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at",
        paranoid: true
    }
    const ShoppingCart = sequelize.define(alias, cols, config);

    ShoppingCart.associate = function (models) {
        ShoppingCart.belongsTo(models.User, {
            as: "user",
            foreignKey: "user_id",
        }),
        ShoppingCart.belongsTo(models.Product, {
            as: "product",
            foreignKey: "product_id",   
        })
    };
    return ShoppingCart;
}