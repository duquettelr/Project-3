module.exports = function (sequelize, DataTypes) {
    var Behavior = sequelize.define("Behavior", {
        type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Behavior.associate = function (models) {
        Behavior.hasMany(models.Num_Behavior,
            {
                onDelete: "cascade"
            })
        models.Behavior.belongsTo(models.Student, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Behavior;
}