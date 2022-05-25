module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: dataTypes.STRING,
        },
        name: {
            type: dataTypes.STRING,
        },
        password: {
            type: dataTypes.STRING,
        },
        img_user: {
            type: dataTypes.STRING,
        }

    };
    let config = {
        tableName: 'users',
        timestamps: false,
    };
    const User = sequelize.define(alias, cols, config);
    /*User.associate = function (models) {
        User.belongsToMany(models.shoppingCart, {
            as: 'shoppingCart',
            through: 'shoppingCart',
            foreignKey: 'user_id',
            otherKey: 'product_id',
            timestamps: false
        })
    }*/
    return User;
}