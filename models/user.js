module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    User.associate = function (models) {
        User.hasMany(models.Student,
            {
                onDelete: "cascade"
            })
    };

    return User;
}